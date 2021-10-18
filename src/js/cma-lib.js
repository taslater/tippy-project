import { rand_normal } from "./rand-normal.js"

const EPS_CMA = 1e-8,
  // _MEAN_MAX = 1e32,
  _MEAN_MAX = 1e8,
  // _SIGMA_MAX = 1e32
  _SIGMA_MAX = 1e8,
  _VAL_MAX = 1e16

// const EPS_EIG = Math.sqrt(Number.EPSILON)
// const EPS_EIG = Number.EPSILON
const EPS_EIG = Math.fround(9.77e-4)
// const EPS_EIG = Math.fround(Math.sqrt(9.77e-4))
// const EPS_EIG = Math.fround(2 ** -23)

export class CMA {
  constructor(
    // mean: ,
    mean = [], // 1d array (abs < 1e32, len > 1)
    sigma = 1, // float > 0
    // n_max_resampling = 100, //
    // popsize = undefined, // Optional[int] = None ( > 0 )
    popsize = undefined,
    cov = undefined, // Optional[np.ndarray] = None
    rng // random number generator for testing
  ) {
    console.assert(mean.length > 1, "mean array length must be greater than 1.")
    console.assert(
      mean.every((x) => Math.abs(x) < 1e32),
      "all mean value magnitudes must be less than 1e32."
    )
    this.mean = mean
    this.n_dim = mean.length
    if (popsize == undefined) {
      popsize = 4 + Math.floor(3 * Math.log(this.n_dim)) // (eq. 48)
      // popsize = Math.round(popsizeMultiplier * popsize)
    }
    console.assert(popsize > 0, "popsize must be non-zero positive value.")
    this.popsize = popsize

    this.mu = Math.floor(popsize / 2)

    console.assert(sigma > 0, "sigma must be non-zero positive value")

    // (eq.49)
    let weights_prime = new Float32Array(this.popsize)
    for (let i = 0; i < this.popsize; i++) {
      weights_prime[i] = Math.log((popsize + 1) / 2) - Math.log(i + 1)
    }
    // mu_eff       = (np.sum(weights_prime[:mu]) ** 2) / np.sum(weights_prime[:mu] ** 2)
    // mu_eff_minus = (np.sum(weights_prime[mu:]) ** 2) / np.sum(weights_prime[mu:] ** 2)
    function get_mu_eff(arr) {
      return (
        arr.reduce((a, b) => a + b) ** 2 /
        arr.map((x) => x * x).reduce((a, b) => a + b)
      )
    }
    this.mu_eff = get_mu_eff(weights_prime.slice(0, this.mu))
    let mu_eff_minus = get_mu_eff(weights_prime.slice(this.mu))
    // learning rate for the rank-one update
    let alpha_cov = 2
    this.c1 = alpha_cov / ((this.n_dim + 1.3) ** 2 + this.mu_eff)
    // learning rate for the rank-μ update
    this.cmu = Math.min(
      1 - this.c1 - 1e-8, // 1e-8 is for large popsize.
      (alpha_cov * (this.mu_eff - 2 + 1 / this.mu_eff)) /
        ((this.n_dim + 2) ** 2 + (alpha_cov * this.mu_eff) / 2)
    )
    console.assert(
      this.c1 <= 1 - this.cmu,
      "invalid learning rate for the rank-one update"
    )
    console.assert(
      this.cmu <= 1 - this.c1,
      "invalid learning rate for the rank-μ update"
    )

    let min_alpha = Math.min(
      1 + this.c1 / this.cmu, // eq.50
      1 + (2 * mu_eff_minus) / (this.mu_eff + 2), // eq.51
      (1 - this.c1 - this.cmu) / (this.n_dim * this.cmu) // eq.52
    )

    // (eq.53)
    // let positive_sum = np.sum(weights_prime[weights_prime > 0])
    let positive_sum = weights_prime
      .filter((x) => x > 0)
      .reduce((a, b) => a + b)
    let negative_sum = Math.abs(
      weights_prime.filter((x) => x < 0).reduce((a, b) => a + b)
    )
    // this.weights = np.where(
    //   weights_prime >= 0,
    //   (1 / positive_sum) * weights_prime,
    //   (min_alpha / negative_sum) * weights_prime
    // )
    this.weights = weights_prime.map((x) =>
      x >= 0 ? (1 / positive_sum) * x : (min_alpha / negative_sum) * x
    )
    this.cm = 1 // (eq. 54)

    // learning rate for the cumulation for the step-size control (eq.55)
    this.c_sigma = (this.mu_eff + 2) / (this.n_dim + this.mu_eff + 5)
    this.d_sigma =
      1 +
      2 * Math.max(0, Math.sqrt((this.mu_eff - 1) / (this.n_dim + 1)) - 1) +
      this.c_sigma
    console.assert(
      this.c_sigma < 1,
      "invalid learning rate for cumulation for the step-size control"
    )

    // learning rate for cumulation for the rank-one update (eq.56)
    this.cc =
      (4 + this.mu_eff / this.n_dim) /
      (this.n_dim + 4 + (2 * this.mu_eff) / this.n_dim)
    console.assert(
      this.cc <= 1,
      "invalid learning rate for cumulation for the rank-one update"
    )

    // self._n_dim = n_dim
    // self._popsize = popsize
    // self._mu = mu
    // self._mu_eff = mu_eff

    // self._cc = cc
    // self._c1 = c1
    // self._cmu = cmu
    // self._c_sigma = c_sigma
    // self._d_sigma = d_sigma
    // self._cm = cm

    // E||N(0, I)|| (p.28)
    this.chi_n =
      Math.sqrt(this.n_dim) *
      (1.0 - 1.0 / (4.0 * this.n_dim) + 1.0 / (21.0 * this.n_dim ** 2))

    // self._weights = weights

    // evolution path
    // this.p_sigma = np.zeros(n_dim)
    this.p_sigma = new Float32Array(this.n_dim).fill(0.0)
    // this.pc = np.zeros(n_dim)
    this.pc = new Float32Array(this.n_dim).fill(0.0)

    // self._mean = mean

    if (cov == undefined) {
      // this.C = np.eye(n_dim)
      this.C = Eye(this.n_dim)
    } else {
      console.assert(
        cov.shape == (n_dim, n_dim),
        "Invalid shape of covariance matrix"
      )
      this.C = cov
    }

    this.sigma = sigma
    // this.D = undefined
    // this.B = undefined

    // // bounds contains low and high of each parameter.
    // console.assert(bounds == undefined || _is_valid_bounds(bounds, mean), "invalid bounds")
    // this.bounds = bounds
    // this.n_max_resampling = n_max_resampling

    this.g = 0
    // this.rng = np.random.RandomState(seed)

    // // Termination criteria
    // this.tolx = 1e-12 * sigma
    // this.tolxup = 1e4
    // this.tolfun = 1e-12
    // this.tolconditioncov = 1e14

    // this.funhist_term = 10 + Math.ceil((30 * this.n_dim) / this.popsize)
    // // this.funhist_values = np.empty(self._funhist_term * 2)
    // this.funhist_values = Array(this.funhist_term * 2)

    this.needs_decomp = true
    if (rng != null) {
      this.rng = rng
    }
  }

  _eigen_decomposition() {
    //-> Tuple[np.ndarray, np.ndarray]:
    // if (this._B != undefined && this._D != undefined) {
    //   return this._B, this._D
    // }
    if (!this.needs_decomp) {
      return true
    }

    // this._C = (this._C + this._C.T) / 2
    // make symmetrical
    // this.C = scale2d(add2d(this.C, transpose2d(this.C)), 0.5)
    this.C.avgSymmeric()
    // D2: eigenvalues, B: eigenvectors
    // let [D2, B] = np.linalg.eigh(this.C)
    let eig_obj = eig_sym(this.C)
    if (!eig_obj.eig_sym_success) {
      return false
    }
    // let D2 = eig_obj.eig_vals
    let D2 = eig_obj.eig_vals.map((x) => (x < 0 ? EPS_CMA : x))
    this.D = D2.map((x) => Math.sqrt(x))
    // for (let x of eig_obj.eig_vals) {
    //   if (!isFinite(x)) {
    //     console.log("eig_val problem")
    //   }
    // }
    // for (let x of eig_obj.eig_vecs.data) {
    //   if (!isFinite(x)) {
    //     console.log("eig_vec problem")
    //   }
    // }
    this.B = eig_obj.eig_vecs.copy()
    // let D = Math.sqrt(np.where(D2 < 0, EPS, D2))

    // this.D = D2.map((x) => {
    //   x < 0 ? EPS : x
    // }).map((x) => Math.sqrt(x))
    // this.D = D
    let inner = this.B.copy()
    for (let i = 0; i < this.n_dim; i++) {
      for (let j = 0; j < this.n_dim; j++) {
        inner.set(i, j, inner.get(i, j) * D2[j])
      }
    }

    this.C = inner.mulMat(this.B.transpose())
    this.BD = this.B.copy()
    for (let i = 0; i < this.n_dim; i++) {
      for (let j = 0; j < this.n_dim; j++) {
        this.BD.set(i, j, this.BD.get(i, j) * this.D[j])
      }
    }
    this.needs_decomp = false
    // this.C = np.dot(np.dot(B, np.diag(D ** 2)), B.T)

    // return [B, D]
    return true
  }

  _sample_solution() {
    // -> np.ndarray:
    const eigSuccess = this._eigen_decomposition()
    if (!eigSuccess) {
      return false
    }
    let z =
      this.rng == null ? rand_normal(this.n_dim) : this.rng.get(this.n_dim) // ~ N(0, I)
    let y = this.BD.mulVec(z)
    // y = cast(np.ndarray, B.dot(np.diag(D))).dot(z) // ~ N(0, C)
    // let x = []
    let x = new Float32Array(this.n_dim)
    for (let i = 0; i < this.n_dim; i++) {
      // x.push(this.mean[i] + this.sigma * y[i])
      let val = this.mean[i] + this.sigma * y[i]
      val = Math.min(Math.max(val, -_VAL_MAX), _VAL_MAX)
      // _VAL_MAX
      x[i] = val
    }
    return x
  }

  ask() {
    return this._sample_solution()
  }

  tell(sol_score_array) {
    // """Tell evaluation values"""

    // assert len(solutions) == self._popsize, "Must tell popsize-length solutions."
    // for s in solutions:
    //     assert np.all(
    //         np.abs(s[0]) < _MEAN_MAX
    //     ), f"Abs of all param values must be less than {_MEAN_MAX} to avoid overflow errors"

    // self._g += 1
    this.g++
    // solutions.sort(key=lambda s: s[1])
    sol_score_array.sort((a, b) => a.score - b.score)

    // # Stores 'best' and 'worst' values of the
    // # last 'self._funhist_term' generations.
    // funhist_idx = 2 * (self.generation % self._funhist_term)
    // self._funhist_values[funhist_idx] = solutions[0][1]
    // self._funhist_values[funhist_idx + 1] = solutions[-1][1]

    // # Sample new population of search_points, for k=1, ..., popsize
    // B, D = self._eigen_decomposition()
    // this._eigen_decomposition()
    const eigSuccess = this._eigen_decomposition()
    if (!eigSuccess) {
      return false
    }
    // self._B, self._D = None, None
    this.needs_decomp = true

    // x_k = np.array([s[0] for s in solutions])  # ~ N(m, σ^2 C)
    // let x_k = sol_score_array.map((o) => o.solution)
    // y_k = (x_k - self._mean) / self._sigma  # ~ N(0, C)
    let y_k = []
    for (let i = 0; i < this.popsize; i++) {
      let sol = sol_score_array[i].solution
      for (let j = 0; j < this.n_dim; j++) {
        y_k.push((sol[j] - this.mean[j]) / this.sigma)
      }
    }

    // # Selection and recombination
    // y_w = np.sum(y_k[: self._mu].T * self._weights[: self._mu], axis=1)  # eq.41
    let y_w = new Float32Array(this.n_dim).fill(0)
    for (let i = 0; i < this.mu; i++) {
      for (let j = 0; j < this.n_dim; j++) {
        y_w[j] += y_k[i * this.n_dim + j] * this.weights[i]
      }
    }

    // self._mean += self._cm * self._sigma * y_w
    for (let i = 0; i < this.n_dim; i++) {
      this.mean[i] += this.cm * this.sigma * y_w[i]
      if (this.mean[i] > _MEAN_MAX) {
        console.log("mean too high")
        this.mean[i] = _MEAN_MAX
      } else if (this.mean[i] < -_MEAN_MAX) {
        console.log("mean too low")
        this.mean[i] = -_MEAN_MAX
      }
    }

    // # Step-size control
    // C_2 = cast(
    //     np.ndarray, cast(np.ndarray, B.dot(np.diag(1 / D))).dot(B.T)
    // )  # C^(-1/2) = B D^(-1) B^T
    let inner = this.B.copy()
    for (let i = 0; i < this.n_dim; i++) {
      for (let j = 0; j < this.n_dim; j++) {
        inner.set(i, j, inner.get(i, j) / this.D[j])
      }
    }
    let C_2 = inner.mulMat(this.B.transpose())
    // self._p_sigma = (1 - self._c_sigma) * self._p_sigma + math.sqrt(
    //     self._c_sigma * (2 - self._c_sigma) * self._mu_eff
    // ) * C_2.dot(y_w)
    let temp_arr = C_2.mulVec(y_w)
    let f0 = 1 - this.c_sigma
    let f1 = Math.sqrt(this.c_sigma * (2 - this.c_sigma) * this.mu_eff)
    for (let i = 0; i < this.n_dim; i++) {
      this.p_sigma[i] = f0 * this.p_sigma[i] + f1 * temp_arr[i]
    }

    // norm_p_sigma = np.linalg.norm(self._p_sigma)
    let norm_p_sigma = Math.sqrt(
      this.p_sigma.map((x) => x * x).reduce((a, b) => a + b)
    )
    // self._sigma *= np.exp(
    //     (self._c_sigma / self._d_sigma) * (norm_p_sigma / self._chi_n - 1)
    // )
    this.sigma *= Math.exp(
      (this.c_sigma / this.d_sigma) * (norm_p_sigma / this.chi_n - 1)
    )
    // self._sigma = min(self._sigma, _SIGMA_MAX)
    this.sigma = Math.min(this.sigma, _SIGMA_MAX)

    // # Covariance matrix adaption
    // h_sigma_cond_left = norm_p_sigma / math.sqrt(
    //     1 - (1 - self._c_sigma) ** (2 * (self._g + 1))
    // )
    let h_sigma_cond_left =
      norm_p_sigma / Math.sqrt(1 - (1 - this.c_sigma) ** (2 * (this.g + 1)))

    // h_sigma_cond_right = (1.4 + 2 / (self._n_dim + 1)) * self._chi_n
    let h_sigma_cond_right = (1.4 + 2 / (this.n_dim + 1)) * this.chi_n

    // h_sigma = 1.0 if h_sigma_cond_left < h_sigma_cond_right else 0.0  # (p.28)
    let h_sigma = h_sigma_cond_left < h_sigma_cond_right ? 1.0 : 0.0

    // # (eq.45)
    // self._pc = (1 - self._cc) * self._pc + h_sigma * math.sqrt(
    //     self._cc * (2 - self._cc) * self._mu_eff
    // ) * y_w
    f0 = 1 - this.cc
    f1 = h_sigma * Math.sqrt(this.cc * (2 - this.cc) * this.mu_eff)
    for (let i = 0; i < this.n_dim; i++) {
      this.pc[i] = f0 * this.pc[i] + f1 * y_w[i]
    }

    // # (eq.46)
    // w_io = self._weights * np.where(
    //     self._weights >= 0,
    //     1,
    //     self._n_dim / (np.linalg.norm(C_2.dot(y_k.T), axis=0) ** 2 + _EPS),
    // )
    // let temp_mat = []
    let temp_mat = new Float32Array(this.n_dim * this.popsize)
    for (let i = 0; i < this.n_dim; i++) {
      // let temp_mat_row = []
      for (let j = 0; j < this.popsize; j++) {
        let sum = 0
        for (let k = 0; k < this.n_dim; k++) {
          // sum += C_2.get(i, k) * y_k[j][k]
          sum += C_2.get(i, k) * y_k[j * this.n_dim + k]
        }
        temp_mat[i * this.popsize + j] = sum
        // temp_mat_row.push(sum)
      }
      // temp_mat.push(temp_mat_row)
    }
    let col_norms = []
    for (let j = 0; j < this.popsize; j++) {
      let col_norm = 0
      for (let i = 0; i < this.n_dim; i++) {
        // let val = temp_mat[i][j]
        let val = temp_mat[i * this.popsize + j]
        col_norm += val * val
      }
      col_norms.push(this.n_dim / (Math.abs(col_norm) + EPS_CMA))
    }
    let w_io = []
    for (let i = 0; i < this.popsize; i++) {
      let cond_factor = this.weights[i] >= 0 ? 1 : col_norms[i]
      w_io.push(this.weights[i] * cond_factor)
    }

    // delta_h_sigma = (1 - h_sigma) * self._cc * (2 - self._cc)  # (p.28)
    let delta_h_sigma = (1 - h_sigma) * this.cc * (2 - this.cc)
    // assert delta_h_sigma <= 1

    // # (eq.47)
    // rank_one = np.outer(self._pc, self._pc)
    let rank_one = new Float32Array(this.n_dim * this.n_dim)
    // upper triangle
    for (let i = 0; i < this.n_dim; i++) {
      for (let j = i; j < this.n_dim; j++) {
        rank_one[i * this.n_dim + j] = this.pc[i] * this.pc[j]
      }
    }

    // rank_mu = np.sum(
    //     np.array([w * np.outer(y, y) for w, y in zip(w_io, y_k)]), axis=0
    // )
    let rank_mu = new Float32Array(this.n_dim * this.n_dim).fill(0)
    // upper triangle
    for (let i = 0; i < this.popsize; i++) {
      for (let j = 0; j < this.n_dim; j++) {
        for (let k = j; k < this.n_dim; k++) {
          rank_mu[j * this.n_dim + k] +=
            w_io[i] * y_k[i * this.n_dim + j] * y_k[i * this.n_dim + k]
        }
      }
    }

    // this.C = (
    //     (
    //         1
    //         + this.c1 * delta_h_sigma
    //         - this.c1
    //         - this.cmu * wt_sum
    //     )
    //     * this.C
    //     + this.c1 * rank_one
    //     + this.cmu * rank_mu
    // )
    let wt_sum = this.weights.reduce((a, b) => a + b)
    f0 = 1 + this.c1 * delta_h_sigma - this.c1 - this.cmu * wt_sum
    // upper triangle
    for (let i = 0; i < this.n_dim; i++) {
      for (let j = i; j < this.n_dim; j++) {
        let idx = i * this.n_dim + j
        this.C.data[idx] =
          f0 * this.C.data[idx] +
          this.c1 * rank_one[idx] +
          this.cmu * rank_mu[idx]
      }
    }
    // fill lower triangle
    for (let i = 0; i < this.n_dim; i++) {
      for (let j = i + 1; j < this.n_dim; j++) {
        this.C.set(j, i, this.C.get(i, j))
      }
    }
    return true
  }
}

class SqMatrix {
  constructor(data) {
    //   if (!(data instanceof Array)) {
    //     console.error("Data must be an array.")
    //     return null
    //   }
    let data_len_sqrt = Math.sqrt(data.length)
    // if (!Number.isInteger(data_len_sqrt)) {
    //   console.error("Data length must be square.")
    //   return null
    // }
    this.dim = data_len_sqrt
    this.data = Float32Array.from(data)
  }

  get(row, col) {
    return this.data[row * this.dim + col]
  }

  set(row, col, val) {
    this.data[row * this.dim + col] = val
  }

  addMat(other) {
    if (!(other instanceof SqMatrix)) {
      console.error("Must add with SqMatrix.")
      return null
    }
    const add_data = this.data.slice()
    for (let i = 0; i < add_data.length; i++) {
      add_data[i] += other.data[i]
    }
    return new SqMatrix(add_data)
  }

  mulVec(v) {
    // if (!(v instanceof Array)) {
    //   console.error("Vector must be an array.")
    //   return null
    // }
    // if (v.length != this.dim) {
    //   console.error("Vector length must equal square matrix side.")
    //   return null
    // }
    let res = new Float32Array(this.dim).fill(0)
    for (let i = 0; i < this.dim; i++) {
      for (let j = 0; j < this.dim; j++) {
        res[i] += this.get(i, j) * v[j]
      }
    }
    return res
  }

  // mulMat(other) {
  //   let new_data = []
  //   for (let i = 0; i < this.dim; i++) {
  //     for (let j = 0; j < this.dim; j++) {
  //       let sum = 0
  //       for (let k = 0; k < this.dim; k++) {
  //         sum += this.get(i, k) * other.get(k, j)
  //       }
  //       new_data.push(sum)
  //     }
  //   }
  //   return new SqMatrix(new_data)
  // }

  // mulMat(other) {
  //   let new_data = new Float32Array(this.dim * this.dim).fill(0)
  //   for (let i = 0; i < this.dim; i++) {
  //     for (let k = 0; k < this.dim; k++) {
  //       for (let j = 0; j < this.dim; j++) {
  //         new_data[i * this.dim + j] += this.get(i, k) * other.get(k, j)
  //       }
  //     }
  //   }
  //   return new SqMatrix(new_data)
  // }

  mulMat(other) {
    const a = this.data,
      b = other.data,
      m = this.dim,
      n = this.dim,
      p = other.dim,
      c = new Float32Array(m * p)
    for (let j = 0; j < p; j++) {
      for (let i = 0; i < m; i++) {
        let sum = 0
        for (let k = 0; k < n; k++) {
          sum += a[i * n + k] * b[k * p + j]
        }
        c[i * p + j] = sum
      }
    }
    return new SqMatrix(c)
  }

  transpose() {
    // let new_data = []
    const new_mat = new SqMatrix(new Float32Array(this.dim * this.dim))
    for (let i = 0; i < this.dim; i++) {
      for (let j = 0; j < this.dim; j++) {
        new_mat.set(i, j, this.get(j, i))
      }
    }
    return new_mat
  }

  avgSymmeric() {
    for (let i = 0; i < this.dim - 1; i++) {
      for (let j = i + 1; j < this.dim; j++) {
        let avgVal = 0.5 * (this.get(i, j) + this.get(j, i))
        this.set(i, j, avgVal)
        this.set(j, i, avgVal)
      }
    }
  }

  copy() {
    return new SqMatrix(this.data.slice())
  }

  toString() {
    let s = ""
    for (let i = 0; i < this.dim * this.dim; i++) {
      let sep = (i + 1) % this.dim == 0 ? "\n" : " "
      s += this.data[i].toString().padStart(2, " ") + sep
    }
    return s
  }
}

function SqMatrixFromDiag(diag) {
  let n = diag.length
  let data = new Float32Array(n * n).fill(0)
  for (let i = 0; i < n; i++) {
    data[i * (1 + n)] = diag[i]
  }
  return new SqMatrix(data)
}

function Eye(dim) {
  return SqMatrixFromDiag(new Float32Array(dim).fill(1))
}

function pythag(a, b) {
  let absa = Math.abs(a)
  let absb = Math.abs(b)
  let a_over_b = absa / absb
  let a_over_b_sq = a_over_b * a_over_b
  if (absa > absb) {
    return absa * Math.sqrt(1 + 1 / a_over_b_sq)
  } else if (absb == 0) {
    return 0
  } else {
    return absb * Math.sqrt(1 + a_over_b_sq)
  }
}

function tred2(_a) {
  if (!(_a instanceof SqMatrix)) {
    console.error("tred2 requires a SqMatrix")
    return null
  }
  const a = _a.copy()
  // INTEGER i,j,k,l
  let i, j, k, l
  // INTEGER n,np
  const n = a.dim
  // REAL a(np,np),d(np),e(np)
  // const d = Array(n).fill(0)
  // const e = Array(n).fill(0)
  const d = new Float32Array(n).fill(0)
  const e = new Float32Array(n).fill(0)
  // REAL f,g,h,hh,scale
  let f, g, h, hh, scale
  // do i=n,2,-1
  for (i = n - 1; i >= 1; i--) {
    // l=i-1
    l = i - 1
    // h=0.
    h = 0
    // scale=0.
    scale = 0
    // if (l.gt.1) then
    if (l > 0) {
      // do k=1,l
      for (k = 0; k <= l; k++) {
        // scale=scale+abs(a(i,k))
        scale += Math.abs(a.get(k, i))
        // end do
      }
      // if (scale.eq.0.) then
      if (scale == 0) {
        // e(i)=a(i,l)
        e[i] = a.get(l, i)
        // else
      } else {
        // do k=1,l
        for (k = 0; k <= l; k++) {
          // a(i,k)=a(i,k)/scale
          let new_val = a.get(k, i) / scale
          a.set(k, i, new_val)
          // h=h+a(i,k)**2
          h += new_val * new_val
          // end do
        }
        // f=a(i,l)
        f = a.get(l, i)
        // g=-sign(sqrt(h),f)
        g = -Math.sign(f) * Math.abs(Math.sqrt(h))
        // e(i)=scale*g
        e[i] = scale * g
        // h=h-f*g
        h -= f * g
        // a(i,l)=f-g
        a.set(l, i, f - g)
        // f=0.
        f = 0
        // do j=1,l
        for (j = 0; j <= l; j++) {
          // a(j,i)=a(i,j)/h
          a.set(i, j, a.get(j, i) / h)
          // g=0.
          g = 0
          // do k=1,j
          for (k = 0; k <= j; k++) {
            // g=g+a(j,k)*a(i,k)
            g += a.get(k, j) * a.get(k, i)
            // end do
          }
          // do k=j+1,l
          for (k = j + 1; k <= l; k++) {
            // g=g+a(k,j)*a(i,k)
            g += a.get(j, k) * a.get(k, i)
            // end do
          }
          // e(j)=g/h
          e[j] = g / h
          // f=f+e(j)*a(i,j)
          f += e[j] * a.get(j, i)
          // end do
        }
        // hh=f/(h+h)
        hh = f / (h + h)
        // do j=1,l
        for (j = 0; j <= l; j++) {
          // f=a(i,j)
          f = a.get(j, i)
          // g=e(j)-hh*f
          g = e[j] - hh * f
          // e(j)=g
          e[j] = g
          // do k=1,j
          for (let k = 0; k <= j; k++) {
            // a(j,k)=a(j,k)-f*e(k)-g*a(i,k)
            a.set(k, j, a.get(k, j) - f * e[k] - g * a.get(k, i))
            // end do
          }
          // end do
        }
        // end if
      }
      // else
    } else {
      // e(i)=a(i,l)
      e[i] = a.get(l, i)
      // end if
    }
    // d(i)=h
    d[i] = h
    // end do
  }
  // d(1)=0
  d[0] = 0
  // e(1)=0
  e[0] = 0
  // do i=1,n
  for (i = 0; i < n; i++) {
    // l=i-1
    l = i - 1
    // if (d(i).ne.0.) then
    if (d[i] != 0) {
      // do j=1,l
      for (j = 0; j <= l; j++) {
        // g=0.
        g = 0
        // do k=1,l
        for (k = 0; k <= l; k++) {
          // f=f+a(i,k)*a(k,j)
          g += a.get(k, i) * a.get(j, k)
          // end do
        }
        // do k=1,l
        for (k = 0; k <= l; k++) {
          // a(k,j)=a(k,j)-g*a(k,i)
          a.set(j, k, a.get(j, k) - g * a.get(i, k))
          // end do
        }
        // end do
      }
      // end if
    }
    // d(i)=a(i,i)
    d[i] = a.get(i, i)
    // a(i,i)=1.
    a.set(i, i, 1)
    // do j=1,l
    for (j = 0; j <= l; j++) {
      // a(i,j)=0.
      a.set(j, i, 0)
      // a(j,i)=0.
      a.set(i, j, 0)
      // end do
    }
    // end do
  }
  return [a, d, e, true]
}

function tqli(d, e, z) {
  let success = true
  // if (!(z instanceof SqMatrix || d instanceof Array || e instanceof Array)) {
  //   console.error("Bad tqli inputs")
  //   return null
  // }
  // INTEGER n,np
  let n = z.dim
  // REAL d(np),e(np),z(np,np)
  // INTEGER i,iter,k,l,m
  let i, iter, k, l, m
  // REAL b,c,dd,f,g,p,r,s,pythag
  let b, c, f, g, p, r, s
  // do i=2,n
  for (i = 1; i < n; i++) {
    //   e(i-1)=e(i)
    e[i - 1] = e[i]
    // end do
  }

  // do l=1,n
  for (l = 0; l < n; l++) {
    iter = 0
    while (iter < 30) {
      // console.log(iter)
      // 1   do m=l,n-1
      // ??????????????????????????????????
      let skip = false
      for (m = l; m < n - 1; m++) {
        // dd=abs(d(m))+abs(d(m+1))
        const dd = Math.fround(Math.abs(d[m]) + Math.abs(d[m + 1]))
        // if (abs(e(m))+dd.eq.dd) goto 2
        //     ??????????????????
        if (Math.abs(e[m]) <= EPS_EIG * dd) {
          // if (Math.fround(Math.abs(e[m])) + dd == dd) {
          skip = true
          break
        }
        // enddo
      }
      //   m=n
      if (!skip) {
        m = n - 1
      }
      // 2   if (m.ne.l) then
      if (m != l) {
        // ! if (iter.eq.30) pause 'too many iterations in tqli'
        // iter=iter+1
        iter++
        // g=(d(l+1)-d(l))/(2.*e(l))
        g = (d[l + 1] - d[l]) / (2.0 * e[l])
        // r=pythag(g,1.)
        r = pythag(g, 1.0)
        // g=d(m)-d(l)+e(l)/(g+sign(r,g))
        g = d[m] - d[l] + e[l] / (g + Math.sign(g) * Math.abs(r))
        // s=1.
        s = 1.0
        // c=1.
        c = 1.0
        // p=0.
        p = 0.0
        // do i=m-1,l,-1
        let back_to_start = false
        for (i = m - 1; i >= l; i--) {
          // f=s*e(i)
          f = s * e[i]
          // b=c*e(i)
          b = c * e[i]
          // r=pythag(f,g)
          r = pythag(f, g)
          // e(i+1)=r
          e[i + 1] = r
          // if (r.eq.0.) then
          if (r == 0.0) {
            // d(i+1)=d(i+1)-p
            d[i + 1] -= p
            // e(m)=0.
            e[m] = 0.0
            // goto 1
            // !!!!!!!!!!!!!!!!!!!!!!!!!!
            back_to_start = true
            break
            // end if
          }
          // s=f/r
          s = f / r
          // c=g/r
          c = g / r
          // g=d(i+1)-p
          g = d[i + 1] - p
          // r=(d(i)-g)*s+2.*c*b
          r = (d[i] - g) * s + 2.0 * c * b
          // p=s*r
          p = s * r
          // d(i+1)=g+p
          d[i + 1] = g + p
          // g=c*r-b
          g = c * r - b
          // do k=1,n
          for (k = 0; k < n; k++) {
            // f=z(k,i+1)
            f = z.get(i + 1, k)
            // z(k,i+1)=s*z(k,i)+c*f
            z.set(i + 1, k, s * z.get(i, k) + c * f)
            // z(k,i)=c*z(k,i)-s*f
            z.set(i, k, c * z.get(i, k) - s * f)
            // end do
          }
          // end do
        }
        if (back_to_start) {
          continue
        }
        // d(l)=d(l)-p
        d[l] -= p
        // e(l)=g
        e[l] = g
        // e(m)=0.
        e[m] = 0.0
        // goto 1
        // !!!!!!!!!!!!!!!!!!!!!!!!!!
        // endif
      } else {
        break
      }
      // enddo
    }
    if (iter > 20) {
      console.log("iter", iter)
      success = false
      return [d, z, success]
    }
  }
  // console.log(d.slice(0, 10), z.data.slice(0, 10))
  return [d, z, success]
  // END
}

function eig_sym(_a) {
  let eig_sym_success = true
  let [a, d, e, tred2_success] = tred2(_a)
  if (!tred2_success) {
    eig_sym_success = false
    return { eig_vals, eig_vecs, eig_sym_success }
  }
  let [eig_vals, eig_vecs, tqli_success] = tqli(d, e, a)
  if (!tqli_success) {
    eig_sym_success = false
    return { eig_vals, eig_vecs, eig_sym_success }
  }
  eig_vecs = eig_vecs.transpose()
  // console.log(eig_vals)
  // sortValsVecsInplace(eig_vals, eig_vecs)
  // console.log(eig_vals)
  return { eig_vals, eig_vecs, eig_sym_success }
}

// function sortValsVecsInplace(vals, vecs) {
//   for (let i = 0; i < vals.length; i++) {
//     vals[i] = [vals[i], i]
//   }
//   vals.sort((a, b) => (a[0] < b[0] ? -1 : 1))
//   let B_copy = vecs.copy()
//   for (let j = 0; j < vals.length; j++) {
//     let sort_idx = vals[j][1]
//     for (let i = 0; i < vals.length; i++) {
//       vecs.set(i, sort_idx, B_copy.get(i, j))
//     }
//     vals[j] = vals[j][0]
//   }
// }

export function getDefaultCMAPopsize(n_dim) {
  return 4 + Math.floor(3 * Math.log(n_dim)) // (eq. 48)
}
