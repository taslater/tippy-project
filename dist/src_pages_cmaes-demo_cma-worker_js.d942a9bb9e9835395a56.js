/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/cma-lib.js":
/*!***************************!*\
  !*** ./src/js/cma-lib.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CMA": () => (/* binding */ CMA)
/* harmony export */ });
/* harmony import */ var _rand_normal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rand-normal.js */ "./src/js/rand-normal.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var EPS_CMA = 1e-8,
    // _MEAN_MAX = 1e32,
_MEAN_MAX = 1e8,
    // _SIGMA_MAX = 1e32
_SIGMA_MAX = 1e8,
    _VAL_MAX = 1e16; // const EPS_EIG = Math.sqrt(Number.EPSILON)
// const EPS_EIG = Number.EPSILON

var EPS_EIG = Math.fround(9.77e-4); // const EPS_EIG = Math.fround(Math.sqrt(9.77e-4))
// const EPS_EIG = Math.fround(2 ** -23)

var CMA = /*#__PURE__*/function () {
  function CMA() {
    var mean = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var sigma = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var popsize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var cov = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
    var // Optional[np.ndarray] = None
    rng // random number generator for testing
    = arguments.length > 4 ? arguments[4] : undefined;

    _classCallCheck(this, CMA);

    console.assert(mean.length > 1, "mean array length must be greater than 1.");
    console.assert(mean.every(function (x) {
      return Math.abs(x) < 1e32;
    }), "all mean value magnitudes must be less than 1e32.");
    this.mean = mean;
    this.n_dim = mean.length;

    if (popsize == undefined) {
      popsize = 4 + Math.floor(3 * Math.log(this.n_dim)); // (eq. 48)
      // popsize = Math.round(popsizeMultiplier * popsize)
    }

    console.assert(popsize > 0, "popsize must be non-zero positive value.");
    this.popsize = popsize;
    this.mu = Math.floor(popsize / 2);
    console.assert(sigma > 0, "sigma must be non-zero positive value"); // (eq.49)

    var weights_prime = new Float32Array(this.popsize);

    for (var i = 0; i < this.popsize; i++) {
      weights_prime[i] = Math.log((popsize + 1) / 2) - Math.log(i + 1);
    } // mu_eff       = (np.sum(weights_prime[:mu]) ** 2) / np.sum(weights_prime[:mu] ** 2)
    // mu_eff_minus = (np.sum(weights_prime[mu:]) ** 2) / np.sum(weights_prime[mu:] ** 2)


    function get_mu_eff(arr) {
      return Math.pow(arr.reduce(function (a, b) {
        return a + b;
      }), 2) / arr.map(function (x) {
        return x * x;
      }).reduce(function (a, b) {
        return a + b;
      });
    }

    this.mu_eff = get_mu_eff(weights_prime.slice(0, this.mu));
    var mu_eff_minus = get_mu_eff(weights_prime.slice(this.mu)); // learning rate for the rank-one update

    var alpha_cov = 2;
    this.c1 = alpha_cov / (Math.pow(this.n_dim + 1.3, 2) + this.mu_eff); // learning rate for the rank-μ update

    this.cmu = Math.min(1 - this.c1 - 1e-8, // 1e-8 is for large popsize.
    alpha_cov * (this.mu_eff - 2 + 1 / this.mu_eff) / (Math.pow(this.n_dim + 2, 2) + alpha_cov * this.mu_eff / 2));
    console.assert(this.c1 <= 1 - this.cmu, "invalid learning rate for the rank-one update");
    console.assert(this.cmu <= 1 - this.c1, "invalid learning rate for the rank-μ update");
    var min_alpha = Math.min(1 + this.c1 / this.cmu, // eq.50
    1 + 2 * mu_eff_minus / (this.mu_eff + 2), // eq.51
    (1 - this.c1 - this.cmu) / (this.n_dim * this.cmu) // eq.52
    ); // (eq.53)
    // let positive_sum = np.sum(weights_prime[weights_prime > 0])

    var positive_sum = weights_prime.filter(function (x) {
      return x > 0;
    }).reduce(function (a, b) {
      return a + b;
    });
    var negative_sum = Math.abs(weights_prime.filter(function (x) {
      return x < 0;
    }).reduce(function (a, b) {
      return a + b;
    })); // this.weights = np.where(
    //   weights_prime >= 0,
    //   (1 / positive_sum) * weights_prime,
    //   (min_alpha / negative_sum) * weights_prime
    // )

    this.weights = weights_prime.map(function (x) {
      return x >= 0 ? 1 / positive_sum * x : min_alpha / negative_sum * x;
    });
    this.cm = 1; // (eq. 54)
    // learning rate for the cumulation for the step-size control (eq.55)

    this.c_sigma = (this.mu_eff + 2) / (this.n_dim + this.mu_eff + 5);
    this.d_sigma = 1 + 2 * Math.max(0, Math.sqrt((this.mu_eff - 1) / (this.n_dim + 1)) - 1) + this.c_sigma;
    console.assert(this.c_sigma < 1, "invalid learning rate for cumulation for the step-size control"); // learning rate for cumulation for the rank-one update (eq.56)

    this.cc = (4 + this.mu_eff / this.n_dim) / (this.n_dim + 4 + 2 * this.mu_eff / this.n_dim);
    console.assert(this.cc <= 1, "invalid learning rate for cumulation for the rank-one update"); // self._n_dim = n_dim
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

    this.chi_n = Math.sqrt(this.n_dim) * (1.0 - 1.0 / (4.0 * this.n_dim) + 1.0 / (21.0 * Math.pow(this.n_dim, 2))); // self._weights = weights
    // evolution path
    // this.p_sigma = np.zeros(n_dim)

    this.p_sigma = new Float32Array(this.n_dim).fill(0.0); // this.pc = np.zeros(n_dim)

    this.pc = new Float32Array(this.n_dim).fill(0.0); // self._mean = mean

    if (cov == undefined) {
      // this.C = np.eye(n_dim)
      this.C = Eye(this.n_dim);
    } else {
      console.assert(cov.shape == (n_dim, n_dim), "Invalid shape of covariance matrix");
      this.C = cov;
    }

    this.sigma = sigma; // this.D = undefined
    // this.B = undefined
    // // bounds contains low and high of each parameter.
    // console.assert(bounds == undefined || _is_valid_bounds(bounds, mean), "invalid bounds")
    // this.bounds = bounds
    // this.n_max_resampling = n_max_resampling

    this.g = 0; // this.rng = np.random.RandomState(seed)
    // // Termination criteria
    // this.tolx = 1e-12 * sigma
    // this.tolxup = 1e4
    // this.tolfun = 1e-12
    // this.tolconditioncov = 1e14
    // this.funhist_term = 10 + Math.ceil((30 * this.n_dim) / this.popsize)
    // // this.funhist_values = np.empty(self._funhist_term * 2)
    // this.funhist_values = Array(this.funhist_term * 2)

    this.needs_decomp = true;

    if (rng != null) {
      this.rng = rng;
    }
  }

  _createClass(CMA, [{
    key: "_eigen_decomposition",
    value: function _eigen_decomposition() {
      //-> Tuple[np.ndarray, np.ndarray]:
      // if (this._B != undefined && this._D != undefined) {
      //   return this._B, this._D
      // }
      if (!this.needs_decomp) {
        return true;
      } // this._C = (this._C + this._C.T) / 2
      // make symmetrical
      // this.C = scale2d(add2d(this.C, transpose2d(this.C)), 0.5)


      this.C.avgSymmeric(); // D2: eigenvalues, B: eigenvectors
      // let [D2, B] = np.linalg.eigh(this.C)

      var eig_obj = eig_sym(this.C);

      if (!eig_obj.eig_sym_success) {
        return false;
      } // let D2 = eig_obj.eig_vals


      var D2 = eig_obj.eig_vals.map(function (x) {
        return x < 0 ? EPS_CMA : x;
      });
      this.D = D2.map(function (x) {
        return Math.sqrt(x);
      }); // for (let x of eig_obj.eig_vals) {
      //   if (!isFinite(x)) {
      //     console.log("eig_val problem")
      //   }
      // }
      // for (let x of eig_obj.eig_vecs.data) {
      //   if (!isFinite(x)) {
      //     console.log("eig_vec problem")
      //   }
      // }

      this.B = eig_obj.eig_vecs.copy(); // let D = Math.sqrt(np.where(D2 < 0, EPS, D2))
      // this.D = D2.map((x) => {
      //   x < 0 ? EPS : x
      // }).map((x) => Math.sqrt(x))
      // this.D = D

      var inner = this.B.copy();

      for (var i = 0; i < this.n_dim; i++) {
        for (var j = 0; j < this.n_dim; j++) {
          inner.set(i, j, inner.get(i, j) * D2[j]);
        }
      }

      this.C = inner.mulMat(this.B.transpose());
      this.BD = this.B.copy();

      for (var _i = 0; _i < this.n_dim; _i++) {
        for (var _j = 0; _j < this.n_dim; _j++) {
          this.BD.set(_i, _j, this.BD.get(_i, _j) * this.D[_j]);
        }
      }

      this.needs_decomp = false; // this.C = np.dot(np.dot(B, np.diag(D ** 2)), B.T)
      // return [B, D]

      return true;
    }
  }, {
    key: "_sample_solution",
    value: function _sample_solution() {
      // -> np.ndarray:
      var eigSuccess = this._eigen_decomposition();

      if (!eigSuccess) {
        return false;
      }

      var z = this.rng == null ? (0,_rand_normal_js__WEBPACK_IMPORTED_MODULE_0__.rand_normal)(this.n_dim) : this.rng.get(this.n_dim); // ~ N(0, I)

      var y = this.BD.mulVec(z); // y = cast(np.ndarray, B.dot(np.diag(D))).dot(z) // ~ N(0, C)
      // let x = []

      var x = new Float32Array(this.n_dim);

      for (var i = 0; i < this.n_dim; i++) {
        // x.push(this.mean[i] + this.sigma * y[i])
        var val = this.mean[i] + this.sigma * y[i];
        val = Math.min(Math.max(val, -_VAL_MAX), _VAL_MAX); // _VAL_MAX

        x[i] = val;
      }

      return x;
    }
  }, {
    key: "ask",
    value: function ask() {
      return this._sample_solution();
    }
  }, {
    key: "tell",
    value: function tell(sol_score_array) {
      // """Tell evaluation values"""
      // assert len(solutions) == self._popsize, "Must tell popsize-length solutions."
      // for s in solutions:
      //     assert np.all(
      //         np.abs(s[0]) < _MEAN_MAX
      //     ), f"Abs of all param values must be less than {_MEAN_MAX} to avoid overflow errors"
      // self._g += 1
      this.g++; // solutions.sort(key=lambda s: s[1])

      sol_score_array.sort(function (a, b) {
        return a.score - b.score;
      }); // # Stores 'best' and 'worst' values of the
      // # last 'self._funhist_term' generations.
      // funhist_idx = 2 * (self.generation % self._funhist_term)
      // self._funhist_values[funhist_idx] = solutions[0][1]
      // self._funhist_values[funhist_idx + 1] = solutions[-1][1]
      // # Sample new population of search_points, for k=1, ..., popsize
      // B, D = self._eigen_decomposition()
      // this._eigen_decomposition()

      var eigSuccess = this._eigen_decomposition();

      if (!eigSuccess) {
        return false;
      } // self._B, self._D = None, None


      this.needs_decomp = true; // x_k = np.array([s[0] for s in solutions])  # ~ N(m, σ^2 C)
      // let x_k = sol_score_array.map((o) => o.solution)
      // y_k = (x_k - self._mean) / self._sigma  # ~ N(0, C)

      var y_k = [];

      for (var i = 0; i < this.popsize; i++) {
        var sol = sol_score_array[i].solution;

        for (var j = 0; j < this.n_dim; j++) {
          y_k.push((sol[j] - this.mean[j]) / this.sigma);
        }
      } // # Selection and recombination
      // y_w = np.sum(y_k[: self._mu].T * self._weights[: self._mu], axis=1)  # eq.41


      var y_w = new Float32Array(this.n_dim).fill(0);

      for (var _i2 = 0; _i2 < this.mu; _i2++) {
        for (var _j2 = 0; _j2 < this.n_dim; _j2++) {
          y_w[_j2] += y_k[_i2 * this.n_dim + _j2] * this.weights[_i2];
        }
      } // self._mean += self._cm * self._sigma * y_w


      for (var _i3 = 0; _i3 < this.n_dim; _i3++) {
        this.mean[_i3] += this.cm * this.sigma * y_w[_i3];

        if (this.mean[_i3] > _MEAN_MAX) {
          console.log("mean too high");
          this.mean[_i3] = _MEAN_MAX;
        } else if (this.mean[_i3] < -_MEAN_MAX) {
          console.log("mean too low");
          this.mean[_i3] = -_MEAN_MAX;
        }
      } // # Step-size control
      // C_2 = cast(
      //     np.ndarray, cast(np.ndarray, B.dot(np.diag(1 / D))).dot(B.T)
      // )  # C^(-1/2) = B D^(-1) B^T


      var inner = this.B.copy();

      for (var _i4 = 0; _i4 < this.n_dim; _i4++) {
        for (var _j3 = 0; _j3 < this.n_dim; _j3++) {
          inner.set(_i4, _j3, inner.get(_i4, _j3) / this.D[_j3]);
        }
      }

      var C_2 = inner.mulMat(this.B.transpose()); // self._p_sigma = (1 - self._c_sigma) * self._p_sigma + math.sqrt(
      //     self._c_sigma * (2 - self._c_sigma) * self._mu_eff
      // ) * C_2.dot(y_w)

      var temp_arr = C_2.mulVec(y_w);
      var f0 = 1 - this.c_sigma;
      var f1 = Math.sqrt(this.c_sigma * (2 - this.c_sigma) * this.mu_eff);

      for (var _i5 = 0; _i5 < this.n_dim; _i5++) {
        this.p_sigma[_i5] = f0 * this.p_sigma[_i5] + f1 * temp_arr[_i5];
      } // norm_p_sigma = np.linalg.norm(self._p_sigma)


      var norm_p_sigma = Math.sqrt(this.p_sigma.map(function (x) {
        return x * x;
      }).reduce(function (a, b) {
        return a + b;
      })); // self._sigma *= np.exp(
      //     (self._c_sigma / self._d_sigma) * (norm_p_sigma / self._chi_n - 1)
      // )

      this.sigma *= Math.exp(this.c_sigma / this.d_sigma * (norm_p_sigma / this.chi_n - 1)); // self._sigma = min(self._sigma, _SIGMA_MAX)

      this.sigma = Math.min(this.sigma, _SIGMA_MAX); // # Covariance matrix adaption
      // h_sigma_cond_left = norm_p_sigma / math.sqrt(
      //     1 - (1 - self._c_sigma) ** (2 * (self._g + 1))
      // )

      var h_sigma_cond_left = norm_p_sigma / Math.sqrt(1 - Math.pow(1 - this.c_sigma, 2 * (this.g + 1))); // h_sigma_cond_right = (1.4 + 2 / (self._n_dim + 1)) * self._chi_n

      var h_sigma_cond_right = (1.4 + 2 / (this.n_dim + 1)) * this.chi_n; // h_sigma = 1.0 if h_sigma_cond_left < h_sigma_cond_right else 0.0  # (p.28)

      var h_sigma = h_sigma_cond_left < h_sigma_cond_right ? 1.0 : 0.0; // # (eq.45)
      // self._pc = (1 - self._cc) * self._pc + h_sigma * math.sqrt(
      //     self._cc * (2 - self._cc) * self._mu_eff
      // ) * y_w

      f0 = 1 - this.cc;
      f1 = h_sigma * Math.sqrt(this.cc * (2 - this.cc) * this.mu_eff);

      for (var _i6 = 0; _i6 < this.n_dim; _i6++) {
        this.pc[_i6] = f0 * this.pc[_i6] + f1 * y_w[_i6];
      } // # (eq.46)
      // w_io = self._weights * np.where(
      //     self._weights >= 0,
      //     1,
      //     self._n_dim / (np.linalg.norm(C_2.dot(y_k.T), axis=0) ** 2 + _EPS),
      // )
      // let temp_mat = []


      var temp_mat = new Float32Array(this.n_dim * this.popsize);

      for (var _i7 = 0; _i7 < this.n_dim; _i7++) {
        // let temp_mat_row = []
        for (var _j4 = 0; _j4 < this.popsize; _j4++) {
          var sum = 0;

          for (var k = 0; k < this.n_dim; k++) {
            // sum += C_2.get(i, k) * y_k[j][k]
            sum += C_2.get(_i7, k) * y_k[_j4 * this.n_dim + k];
          }

          temp_mat[_i7 * this.popsize + _j4] = sum; // temp_mat_row.push(sum)
        } // temp_mat.push(temp_mat_row)

      }

      var col_norms = [];

      for (var _j5 = 0; _j5 < this.popsize; _j5++) {
        var col_norm = 0;

        for (var _i8 = 0; _i8 < this.n_dim; _i8++) {
          // let val = temp_mat[i][j]
          var val = temp_mat[_i8 * this.popsize + _j5];
          col_norm += val * val;
        }

        col_norms.push(this.n_dim / (Math.abs(col_norm) + EPS_CMA));
      }

      var w_io = [];

      for (var _i9 = 0; _i9 < this.popsize; _i9++) {
        var cond_factor = this.weights[_i9] >= 0 ? 1 : col_norms[_i9];
        w_io.push(this.weights[_i9] * cond_factor);
      } // delta_h_sigma = (1 - h_sigma) * self._cc * (2 - self._cc)  # (p.28)


      var delta_h_sigma = (1 - h_sigma) * this.cc * (2 - this.cc); // assert delta_h_sigma <= 1
      // # (eq.47)
      // rank_one = np.outer(self._pc, self._pc)

      var rank_one = new Float32Array(this.n_dim * this.n_dim); // upper triangle

      for (var _i10 = 0; _i10 < this.n_dim; _i10++) {
        for (var _j6 = _i10; _j6 < this.n_dim; _j6++) {
          rank_one[_i10 * this.n_dim + _j6] = this.pc[_i10] * this.pc[_j6];
        }
      } // rank_mu = np.sum(
      //     np.array([w * np.outer(y, y) for w, y in zip(w_io, y_k)]), axis=0
      // )


      var rank_mu = new Float32Array(this.n_dim * this.n_dim).fill(0); // upper triangle

      for (var _i11 = 0; _i11 < this.popsize; _i11++) {
        for (var _j7 = 0; _j7 < this.n_dim; _j7++) {
          for (var _k = _j7; _k < this.n_dim; _k++) {
            rank_mu[_j7 * this.n_dim + _k] += w_io[_i11] * y_k[_i11 * this.n_dim + _j7] * y_k[_i11 * this.n_dim + _k];
          }
        }
      } // this.C = (
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


      var wt_sum = this.weights.reduce(function (a, b) {
        return a + b;
      });
      f0 = 1 + this.c1 * delta_h_sigma - this.c1 - this.cmu * wt_sum; // upper triangle

      for (var _i12 = 0; _i12 < this.n_dim; _i12++) {
        for (var _j8 = _i12; _j8 < this.n_dim; _j8++) {
          var idx = _i12 * this.n_dim + _j8;
          this.C.data[idx] = f0 * this.C.data[idx] + this.c1 * rank_one[idx] + this.cmu * rank_mu[idx];
        }
      } // fill lower triangle


      for (var _i13 = 0; _i13 < this.n_dim; _i13++) {
        for (var _j9 = _i13 + 1; _j9 < this.n_dim; _j9++) {
          this.C.set(_j9, _i13, this.C.get(_i13, _j9));
        }
      }

      return true;
    }
  }]);

  return CMA;
}();

var SqMatrix = /*#__PURE__*/function () {
  function SqMatrix(data) {
    _classCallCheck(this, SqMatrix);

    //   if (!(data instanceof Array)) {
    //     console.error("Data must be an array.")
    //     return null
    //   }
    var data_len_sqrt = Math.sqrt(data.length); // if (!Number.isInteger(data_len_sqrt)) {
    //   console.error("Data length must be square.")
    //   return null
    // }

    this.dim = data_len_sqrt;
    this.data = Float32Array.from(data);
  }

  _createClass(SqMatrix, [{
    key: "get",
    value: function get(row, col) {
      return this.data[row * this.dim + col];
    }
  }, {
    key: "set",
    value: function set(row, col, val) {
      this.data[row * this.dim + col] = val;
    }
  }, {
    key: "addMat",
    value: function addMat(other) {
      if (!(other instanceof SqMatrix)) {
        console.error("Must add with SqMatrix.");
        return null;
      }

      var add_data = this.data.slice();

      for (var i = 0; i < add_data.length; i++) {
        add_data[i] += other.data[i];
      }

      return new SqMatrix(add_data);
    }
  }, {
    key: "mulVec",
    value: function mulVec(v) {
      // if (!(v instanceof Array)) {
      //   console.error("Vector must be an array.")
      //   return null
      // }
      // if (v.length != this.dim) {
      //   console.error("Vector length must equal square matrix side.")
      //   return null
      // }
      var res = new Float32Array(this.dim).fill(0);

      for (var i = 0; i < this.dim; i++) {
        for (var j = 0; j < this.dim; j++) {
          res[i] += this.get(i, j) * v[j];
        }
      }

      return res;
    } // mulMat(other) {
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

  }, {
    key: "mulMat",
    value: function mulMat(other) {
      var a = this.data,
          b = other.data,
          m = this.dim,
          n = this.dim,
          p = other.dim,
          c = new Float32Array(m * p);

      for (var j = 0; j < p; j++) {
        for (var i = 0; i < m; i++) {
          var sum = 0;

          for (var k = 0; k < n; k++) {
            sum += a[i * n + k] * b[k * p + j];
          }

          c[i * p + j] = sum;
        }
      }

      return new SqMatrix(c);
    }
  }, {
    key: "transpose",
    value: function transpose() {
      // let new_data = []
      var new_mat = new SqMatrix(new Float32Array(this.dim * this.dim));

      for (var i = 0; i < this.dim; i++) {
        for (var j = 0; j < this.dim; j++) {
          new_mat.set(i, j, this.get(j, i));
        }
      }

      return new_mat;
    }
  }, {
    key: "avgSymmeric",
    value: function avgSymmeric() {
      for (var i = 0; i < this.dim - 1; i++) {
        for (var j = i + 1; j < this.dim; j++) {
          var avgVal = 0.5 * (this.get(i, j) + this.get(j, i));
          this.set(i, j, avgVal);
          this.set(j, i, avgVal);
        }
      }
    }
  }, {
    key: "copy",
    value: function copy() {
      return new SqMatrix(this.data.slice());
    }
  }, {
    key: "toString",
    value: function toString() {
      var s = "";

      for (var i = 0; i < this.dim * this.dim; i++) {
        var sep = (i + 1) % this.dim == 0 ? "\n" : " ";
        s += this.data[i].toString().padStart(2, " ") + sep;
      }

      return s;
    }
  }]);

  return SqMatrix;
}();

function SqMatrixFromDiag(diag) {
  var n = diag.length;
  var data = new Float32Array(n * n).fill(0);

  for (var i = 0; i < n; i++) {
    data[i * (1 + n)] = diag[i];
  }

  return new SqMatrix(data);
}

function Eye(dim) {
  return SqMatrixFromDiag(new Float32Array(dim).fill(1));
}

function pythag(a, b) {
  var absa = Math.abs(a);
  var absb = Math.abs(b);
  var a_over_b = absa / absb;
  var a_over_b_sq = a_over_b * a_over_b;

  if (absa > absb) {
    return absa * Math.sqrt(1 + 1 / a_over_b_sq);
  } else if (absb == 0) {
    return 0;
  } else {
    return absb * Math.sqrt(1 + a_over_b_sq);
  }
}

function tred2(_a) {
  if (!(_a instanceof SqMatrix)) {
    console.error("tred2 requires a SqMatrix");
    return null;
  }

  var a = _a.copy(); // INTEGER i,j,k,l


  var i, j, k, l; // INTEGER n,np

  var n = a.dim; // REAL a(np,np),d(np),e(np)
  // const d = Array(n).fill(0)
  // const e = Array(n).fill(0)

  var d = new Float32Array(n).fill(0);
  var e = new Float32Array(n).fill(0); // REAL f,g,h,hh,scale

  var f, g, h, hh, scale; // do i=n,2,-1

  for (i = n - 1; i >= 1; i--) {
    // l=i-1
    l = i - 1; // h=0.

    h = 0; // scale=0.

    scale = 0; // if (l.gt.1) then

    if (l > 0) {
      // do k=1,l
      for (k = 0; k <= l; k++) {
        // scale=scale+abs(a(i,k))
        scale += Math.abs(a.get(k, i)); // end do
      } // if (scale.eq.0.) then


      if (scale == 0) {
        // e(i)=a(i,l)
        e[i] = a.get(l, i); // else
      } else {
        // do k=1,l
        for (k = 0; k <= l; k++) {
          // a(i,k)=a(i,k)/scale
          var new_val = a.get(k, i) / scale;
          a.set(k, i, new_val); // h=h+a(i,k)**2

          h += new_val * new_val; // end do
        } // f=a(i,l)


        f = a.get(l, i); // g=-sign(sqrt(h),f)

        g = -Math.sign(f) * Math.abs(Math.sqrt(h)); // e(i)=scale*g

        e[i] = scale * g; // h=h-f*g

        h -= f * g; // a(i,l)=f-g

        a.set(l, i, f - g); // f=0.

        f = 0; // do j=1,l

        for (j = 0; j <= l; j++) {
          // a(j,i)=a(i,j)/h
          a.set(i, j, a.get(j, i) / h); // g=0.

          g = 0; // do k=1,j

          for (k = 0; k <= j; k++) {
            // g=g+a(j,k)*a(i,k)
            g += a.get(k, j) * a.get(k, i); // end do
          } // do k=j+1,l


          for (k = j + 1; k <= l; k++) {
            // g=g+a(k,j)*a(i,k)
            g += a.get(j, k) * a.get(k, i); // end do
          } // e(j)=g/h


          e[j] = g / h; // f=f+e(j)*a(i,j)

          f += e[j] * a.get(j, i); // end do
        } // hh=f/(h+h)


        hh = f / (h + h); // do j=1,l

        for (j = 0; j <= l; j++) {
          // f=a(i,j)
          f = a.get(j, i); // g=e(j)-hh*f

          g = e[j] - hh * f; // e(j)=g

          e[j] = g; // do k=1,j

          for (var _k2 = 0; _k2 <= j; _k2++) {
            // a(j,k)=a(j,k)-f*e(k)-g*a(i,k)
            a.set(_k2, j, a.get(_k2, j) - f * e[_k2] - g * a.get(_k2, i)); // end do
          } // end do

        } // end if

      } // else

    } else {
      // e(i)=a(i,l)
      e[i] = a.get(l, i); // end if
    } // d(i)=h


    d[i] = h; // end do
  } // d(1)=0


  d[0] = 0; // e(1)=0

  e[0] = 0; // do i=1,n

  for (i = 0; i < n; i++) {
    // l=i-1
    l = i - 1; // if (d(i).ne.0.) then

    if (d[i] != 0) {
      // do j=1,l
      for (j = 0; j <= l; j++) {
        // g=0.
        g = 0; // do k=1,l

        for (k = 0; k <= l; k++) {
          // f=f+a(i,k)*a(k,j)
          g += a.get(k, i) * a.get(j, k); // end do
        } // do k=1,l


        for (k = 0; k <= l; k++) {
          // a(k,j)=a(k,j)-g*a(k,i)
          a.set(j, k, a.get(j, k) - g * a.get(i, k)); // end do
        } // end do

      } // end if

    } // d(i)=a(i,i)


    d[i] = a.get(i, i); // a(i,i)=1.

    a.set(i, i, 1); // do j=1,l

    for (j = 0; j <= l; j++) {
      // a(i,j)=0.
      a.set(j, i, 0); // a(j,i)=0.

      a.set(i, j, 0); // end do
    } // end do

  }

  return [a, d, e, true];
}

function tqli(d, e, z) {
  var success = true; // if (!(z instanceof SqMatrix || d instanceof Array || e instanceof Array)) {
  //   console.error("Bad tqli inputs")
  //   return null
  // }
  // INTEGER n,np

  var n = z.dim; // REAL d(np),e(np),z(np,np)
  // INTEGER i,iter,k,l,m

  var i, iter, k, l, m; // REAL b,c,dd,f,g,p,r,s,pythag

  var b, c, f, g, p, r, s; // do i=2,n

  for (i = 1; i < n; i++) {
    //   e(i-1)=e(i)
    e[i - 1] = e[i]; // end do
  } // do l=1,n


  for (l = 0; l < n; l++) {
    iter = 0;

    while (iter < 30) {
      // console.log(iter)
      // 1   do m=l,n-1
      // ??????????????????????????????????
      var skip = false;

      for (m = l; m < n - 1; m++) {
        // dd=abs(d(m))+abs(d(m+1))
        var dd = Math.fround(Math.abs(d[m]) + Math.abs(d[m + 1])); // if (abs(e(m))+dd.eq.dd) goto 2
        //     ??????????????????

        if (Math.abs(e[m]) <= EPS_EIG * dd) {
          // if (Math.fround(Math.abs(e[m])) + dd == dd) {
          skip = true;
          break;
        } // enddo

      } //   m=n


      if (!skip) {
        m = n - 1;
      } // 2   if (m.ne.l) then


      if (m != l) {
        // ! if (iter.eq.30) pause 'too many iterations in tqli'
        // iter=iter+1
        iter++; // g=(d(l+1)-d(l))/(2.*e(l))

        g = (d[l + 1] - d[l]) / (2.0 * e[l]); // r=pythag(g,1.)

        r = pythag(g, 1.0); // g=d(m)-d(l)+e(l)/(g+sign(r,g))

        g = d[m] - d[l] + e[l] / (g + Math.sign(g) * Math.abs(r)); // s=1.

        s = 1.0; // c=1.

        c = 1.0; // p=0.

        p = 0.0; // do i=m-1,l,-1

        var back_to_start = false;

        for (i = m - 1; i >= l; i--) {
          // f=s*e(i)
          f = s * e[i]; // b=c*e(i)

          b = c * e[i]; // r=pythag(f,g)

          r = pythag(f, g); // e(i+1)=r

          e[i + 1] = r; // if (r.eq.0.) then

          if (r == 0.0) {
            // d(i+1)=d(i+1)-p
            d[i + 1] -= p; // e(m)=0.

            e[m] = 0.0; // goto 1
            // !!!!!!!!!!!!!!!!!!!!!!!!!!

            back_to_start = true;
            break; // end if
          } // s=f/r


          s = f / r; // c=g/r

          c = g / r; // g=d(i+1)-p

          g = d[i + 1] - p; // r=(d(i)-g)*s+2.*c*b

          r = (d[i] - g) * s + 2.0 * c * b; // p=s*r

          p = s * r; // d(i+1)=g+p

          d[i + 1] = g + p; // g=c*r-b

          g = c * r - b; // do k=1,n

          for (k = 0; k < n; k++) {
            // f=z(k,i+1)
            f = z.get(i + 1, k); // z(k,i+1)=s*z(k,i)+c*f

            z.set(i + 1, k, s * z.get(i, k) + c * f); // z(k,i)=c*z(k,i)-s*f

            z.set(i, k, c * z.get(i, k) - s * f); // end do
          } // end do

        }

        if (back_to_start) {
          continue;
        } // d(l)=d(l)-p


        d[l] -= p; // e(l)=g

        e[l] = g; // e(m)=0.

        e[m] = 0.0; // goto 1
        // !!!!!!!!!!!!!!!!!!!!!!!!!!
        // endif
      } else {
        break;
      } // enddo

    }

    if (iter > 20) {
      console.log("iter", iter);
      success = false;
      return [d, z, success];
    }
  } // console.log(d.slice(0, 10), z.data.slice(0, 10))


  return [d, z, success]; // END
}

function eig_sym(_a) {
  var eig_sym_success = true;

  var _tred = tred2(_a),
      _tred2 = _slicedToArray(_tred, 4),
      a = _tred2[0],
      d = _tred2[1],
      e = _tred2[2],
      tred2_success = _tred2[3];

  if (!tred2_success) {
    eig_sym_success = false;
    return {
      eig_vals: eig_vals,
      eig_vecs: eig_vecs,
      eig_sym_success: eig_sym_success
    };
  }

  var _tqli = tqli(d, e, a),
      _tqli2 = _slicedToArray(_tqli, 3),
      eig_vals = _tqli2[0],
      eig_vecs = _tqli2[1],
      tqli_success = _tqli2[2];

  if (!tqli_success) {
    eig_sym_success = false;
    return {
      eig_vals: eig_vals,
      eig_vecs: eig_vecs,
      eig_sym_success: eig_sym_success
    };
  }

  eig_vecs = eig_vecs.transpose(); // console.log(eig_vals)
  // sortValsVecsInplace(eig_vals, eig_vecs)
  // console.log(eig_vals)

  return {
    eig_vals: eig_vals,
    eig_vecs: eig_vecs,
    eig_sym_success: eig_sym_success
  };
} // function sortValsVecsInplace(vals, vecs) {
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

/***/ }),

/***/ "./src/js/rand-normal.js":
/*!*******************************!*\
  !*** ./src/js/rand-normal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "box_muller": () => (/* binding */ box_muller),
/* harmony export */   "rand_normal": () => (/* binding */ rand_normal)
/* harmony export */ });
function box_muller() {
  var u0 = Math.random();
  var u1 = Math.random(); // let part0 = (-2.0 * u0.ln()).sqrt()

  var part0 = Math.sqrt(-2.0 * Math.log(u0));
  var part1 = 2.0 * Math.PI * u1;
  var z0 = part0 * Math.cos(part1);
  var z1 = part0 * Math.sin(part1);
  return Float32Array.from([z0, z1]);
}
function rand_normal(n) {
  var res = new Float32Array(n);

  for (var i = 0; i < n; i++) {
    var pair = box_muller();
    res[i] = pair[0];

    if (i + 1 >= n) {
      break;
    }

    i++;
    res[i] = pair[1];
  }

  return res;
}

/***/ }),

/***/ "./src/pages/cmaes-demo/obj-fns.js":
/*!*****************************************!*\
  !*** ./src/pages/cmaes-demo/obj-fns.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "objFns": () => (/* binding */ objFns)
/* harmony export */ });
// {
//   ackley: "Ackley",
//   bohachevsky1: "Bohachevsky No.1",
//   griewank: "Griewank",
//   rastrigin: "Rastrigin",
// }
var objFns = {
  // https://www.sfu.ca/~ssurjano/ackley.html
  // https://www.sfu.ca/~ssurjano/Code/ackleym.html
  ackley: function ackley(inputs) {
    // default a=20, b=0.2, c=2pi
    var a = 2000000,
        b = 0.2,
        c = 2 * Math.PI; // let d = inputs.length

    var d = 2,
        d_inv = 0.5; // (1 / d)

    var sum1 = 0,
        sum2 = 0;

    for (var i = 0; i < d; i++) {
      var xi = inputs[i];
      sum1 += xi * xi;
      sum2 += Math.cos(c * xi);
    } // let d_inv = 1 / d


    var term1 = -a * Math.exp(-b * Math.sqrt(sum1 * d_inv)),
        term2 = -Math.exp(sum2 * d_inv);
    return term1 + term2 + a + Math.E;
  },
  // http://benchmarkfcns.xyz/benchmarkfcns/bohachevskyn1fcn.html
  // https://www.sfu.ca/~ssurjano/Code/boha1m.html
  bohachevsky1: function bohachevsky1(inputs) {
    var x1 = inputs[0];
    var x2 = inputs[1];
    var term1 = x1 * x1;
    var term2 = 2 * x2 * x2;
    var term3 = -0.3 * Math.cos(3 * Math.PI * x1);
    var term4 = -0.4 * Math.cos(4 * Math.PI * x2);
    return term1 + term2 + term3 + term4 + 0.7;
  },
  griewank: function griewank(inputs) {
    var d = inputs.length;
    var sum = 0;
    var prod = 1;

    for (var i = 0; i < d; i++) {
      var xi = inputs[i];
      sum += xi * xi / 4000;
      prod *= Math.cos(xi / Math.sqrt(i + 1));
    }

    return sum - prod + 1;
  },
  rastrigin: function rastrigin(inputs) {
    var d = inputs.length;
    var sum = 0;

    for (var i = 0; i < d; i++) {
      var xi = inputs[i];
      sum += xi * xi - 10 * Math.cos(2 * Math.PI * xi);
    }

    return 10 * d + sum;
  }
}; // fancy names for select menu

objFns.ackley.fancyName = "Ackley";
objFns.bohachevsky1.fancyName = "Bohachevsky No.1";
objFns.griewank.fancyName = "Griewank";
objFns.rastrigin.fancyName = "Rastrigin"; // fnLims for display limits

objFns.ackley.xyLim = 32.768;
objFns.bohachevsky1.xyLim = 100;
objFns.rastrigin.xyLim = 5.12;
objFns.griewank.xyLim = 600;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************!*\
  !*** ./src/pages/cmaes-demo/cma-worker.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_cma_lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/cma-lib.js */ "./src/js/cma-lib.js");
/* harmony import */ var _obj_fns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obj-fns.js */ "./src/pages/cmaes-demo/obj-fns.js");


console.log(new _js_cma_lib_js__WEBPACK_IMPORTED_MODULE_0__.CMA([0, 0], 1, 10, undefined, undefined));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX2NtYWVzLWRlbW9fY21hLXdvcmtlcl9qcy5kOTQyYTliYjllOTgzNTM5NWE1Ni5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1DLE9BQU8sR0FBRyxJQUFoQjtBQUFBLElBQ0U7QUFDQUMsU0FBUyxHQUFHLEdBRmQ7QUFBQSxJQUdFO0FBQ0FDLFVBQVUsR0FBRyxHQUpmO0FBQUEsSUFLRUMsUUFBUSxHQUFHLElBTGIsRUFPQTtBQUNBOztBQUNBLElBQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxNQUFMLENBQVksT0FBWixDQUFoQixFQUNBO0FBQ0E7O0FBRU8sSUFBTUMsR0FBYjtBQUNFLGlCQVNFO0FBQUEsUUFQQUMsSUFPQSx1RUFQTyxFQU9QO0FBQUEsUUFOQUMsS0FNQSx1RUFOUSxDQU1SO0FBQUEsUUFIQUMsT0FHQSx1RUFIVUMsU0FHVjtBQUFBLFFBRkFDLEdBRUEsdUVBRk1ELFNBRU47QUFBQSxRQUZpQjtBQUNqQkUsSUFBQUEsR0FDQSxDQURJO0FBQ0o7O0FBQUE7O0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsTUFBUixDQUFlUCxJQUFJLENBQUNRLE1BQUwsR0FBYyxDQUE3QixFQUFnQywyQ0FBaEM7QUFDQUYsSUFBQUEsT0FBTyxDQUFDQyxNQUFSLENBQ0VQLElBQUksQ0FBQ1MsS0FBTCxDQUFXLFVBQUNDLENBQUQ7QUFBQSxhQUFPYixJQUFJLENBQUNjLEdBQUwsQ0FBU0QsQ0FBVCxJQUFjLElBQXJCO0FBQUEsS0FBWCxDQURGLEVBRUUsbURBRkY7QUFJQSxTQUFLVixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLWSxLQUFMLEdBQWFaLElBQUksQ0FBQ1EsTUFBbEI7O0FBQ0EsUUFBSU4sT0FBTyxJQUFJQyxTQUFmLEVBQTBCO0FBQ3hCRCxNQUFBQSxPQUFPLEdBQUcsSUFBSUwsSUFBSSxDQUFDZ0IsS0FBTCxDQUFXLElBQUloQixJQUFJLENBQUNpQixHQUFMLENBQVMs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QUNBbkIsTUFBTSxDQUFDaUIsU0FBUCxDQUFpQkUsS0FBakIsR0FBeUIsSUFBekI7QUFDQW5CLE1BQU0sQ0FBQ2UsUUFBUCxDQUFnQkksS0FBaEIsR0FBd0IsR0FBeEI7Ozs7OztVQzNFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQW5MLE9BQU8sQ0FBQ1EsR0FBUixDQUFZLElBQUlmLCtDQUFKLENBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFSLEVBQWdCLENBQWhCLEVBQW1CLEVBQW5CLEVBQXVCSSxTQUF2QixFQUFrQ0EsU0FBbEMsQ0FBWixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL2pzL2NtYS1saWIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL2pzL3JhbmQtbm9ybWFsLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL29iai1mbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vY21hLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByYW5kX25vcm1hbCB9IGZyb20gXCIuL3JhbmQtbm9ybWFsLmpzXCJcblxuY29uc3QgRVBTX0NNQSA9IDFlLTgsXG4gIC8vIF9NRUFOX01BWCA9IDFlMzIsXG4gIF9NRUFOX01BWCA9IDFlOCxcbiAgLy8gX1NJR01BX01BWCA9IDFlMzJcbiAgX1NJR01BX01BWCA9IDFlOCxcbiAgX1ZBTF9NQVggPSAxZTE2XG5cbi8vIGNvbnN0IEVQU19FSUcgPSBNYXRoLnNxcnQoTnVtYmVyLkVQU0lMT04pXG4vLyBjb25zdCBFUFNfRUlHID0gTnVtYmVyLkVQU0lMT05cbmNvbnN0IEVQU19FSUcgPSBNYXRoLmZyb3VuZCg5Ljc3ZS00KVxuLy8gY29uc3QgRVBTX0VJRyA9IE1hdGguZnJvdW5kKE1hdGguc3FydCg5Ljc3ZS00KSlcbi8vIGNvbnN0IEVQU19FSUcgPSBNYXRoLmZyb3VuZCgyICoqIC0yMylcblxuZXhwb3J0IGNsYXNzIENNQSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIG1lYW46ICxcbiAgICBtZWFuID0gW10sIC8vIDFkIGFycmF5IChhYnMgPCAxZTMyLCBsZW4gPiAxKVxuICAgIHNpZ21hID0gMSwgLy8gZmxvYXQgPiAwXG4gICAgLy8gbl9tYXhfcmVzYW1wbGluZyA9IDEwMCwgLy9cbiAgICAvLyBwb3BzaXplID0gdW5kZWZpbmVkLCAvLyBPcHRpb25hbFtpbnRdID0gTm9uZSAoID4gMCApXG4gICAgcG9wc2l6ZSA9IHVuZGVmaW5lZCxcbiAgICBjb3YgPSB1bmRlZmluZWQsIC8vIE9wdGlvbmFsW25wLm5kYXJyYXldID0gTm9uZVxuICAgIHJuZyAvLyByYW5kb20gbnVtYmVyIGdlbmVyYXRvciBmb3IgdGVzdGluZ1xuICApIHtcbiAgICBjb25zb2xlLmFzc2VydChtZWFuLmxlbmd0aCA+IDEsIFwibWVhbiBhcnJheSBsZW5ndGggbXVzdCBiZSBncmVhdGVyIHRoYW4gMS5cIilcbiAgICBjb25zb2xlLmFzc2VydChcbiAgICAgIG1lYW4uZXZlcnkoKHgpID0+IE1hdGguYWJzKHgpIDwgMWUzMiksXG4gICAgICBcImFsbCBtZWFuIHZhbHVlIG1hZ25pdHVkZXMgbXVzdCBiZSBsZXNzIHRoYW4gMWUzMi5cIlxuICAgIClcbiAgICB0aGlzLm1lYW4gPSBtZWFuXG4gICAgdGhpcy5uX2RpbSA9IG1lYW4ubGVuZ3RoXG4gICAgaWYgKHBvcHNpemUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwb3BzaXplID0gNCArIE1hdGguZmxvb3IoMyAqIE1hdGgubG9nKHRoaXMubl9kaW0pKSAvLyAoZXEuIDQ4KVxuICAgICAgLy8gcG9wc2l6ZSA9IE1hdGgucm91bmQocG9wc2l6ZU11bHRpcGxpZXIgKiBwb3BzaXplKVxuICAgIH1cbiAgICBjb25zb2xlLmFzc2VydChwb3BzaXplID4gMCwgXCJwb3BzaXplIG11c3QgYmUgbm9uLXplcm8gcG9zaXRpdmUgdmFsdWUuXCIpXG4gICAgdGhpcy5wb3BzaXplID0gcG9wc2l6ZVxuXG4gICAgdGhpcy5tdSA9IE1hdGguZmxvb3IocG9wc2l6ZSAvIDIpXG5cbiAgICBjb25zb2xlLmFzc2VydChzaWdtYSA+IDAsIFwic2lnbWEgbXVzdCBiZSBub24temVybyBwb3NpdGl2ZSB2YWx1ZVwiKVxuXG4gICAgLy8gKGVxLjQ5KVxuICAgIGxldCB3ZWlnaHRzX3ByaW1lID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnBvcHNpemUpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvcHNpemU7IGkrKykge1xuICAgICAgd2VpZ2h0c19wcmltZVtpXSA9IE1hdGgubG9nKChwb3BzaXplICsgMSkgLyAyKSAtIE1hdGgubG9nKGkgKyAxKVxuICAgIH1cbiAgICAvLyBtdV9lZmYgICAgICAgPSAobnAuc3VtKHdlaWdodHNfcHJpbWVbOm11XSkgKiogMikgLyBucC5zdW0od2VpZ2h0c19wcmltZVs6bXVdICoqIDIpXG4gICAgLy8gbXVfZWZmX21pbnVzID0gKG5wLnN1bSh3ZWlnaHRzX3ByaW1lW211Ol0pICoqIDIpIC8gbnAuc3VtKHdlaWdodHNfcHJpbWVbbXU6XSAqKiAyKVxuICAgIGZ1bmN0aW9uIGdldF9tdV9lZmYoYXJyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBhcnIucmVkdWNlKChhLCBiKSA9PiBhICsgYikgKiogMiAvXG4gICAgICAgIGFyci5tYXAoKHgpID0+IHggKiB4KS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKVxuICAgICAgKVxuICAgIH1cbiAgICB0aGlzLm11X2VmZiA9IGdldF9tdV9lZmYod2VpZ2h0c19wcmltZS5zbGljZSgwLCB0aGlzLm11KSlcbiAgICBsZXQgbXVfZWZmX21pbnVzID0gZ2V0X211X2VmZih3ZWlnaHRzX3ByaW1lLnNsaWNlKHRoaXMubXUpKVxuICAgIC8vIGxlYXJuaW5nIHJhdGUgZm9yIHRoZSByYW5rLW9uZSB1cGRhdGVcbiAgICBsZXQgYWxwaGFfY292ID0gMlxuICAgIHRoaXMuYzEgPSBhbHBoYV9jb3YgLyAoKHRoaXMubl9kaW0gKyAxLjMpICoqIDIgKyB0aGlzLm11X2VmZilcbiAgICAvLyBsZWFybmluZyByYXRlIGZvciB0aGUgcmFuay3OvCB1cGRhdGVcbiAgICB0aGlzLmNtdSA9IE1hdGgubWluKFxuICAgICAgMSAtIHRoaXMuYzEgLSAxZS04LCAvLyAxZS04IGlzIGZvciBsYXJnZSBwb3BzaXplLlxuICAgICAgKGFscGhhX2NvdiAqICh0aGlzLm11X2VmZiAtIDIgKyAxIC8gdGhpcy5tdV9lZmYpKSAvXG4gICAgICAgICgodGhpcy5uX2RpbSArIDIpICoqIDIgKyAoYWxwaGFfY292ICogdGhpcy5tdV9lZmYpIC8gMilcbiAgICApXG4gICAgY29uc29sZS5hc3NlcnQoXG4gICAgICB0aGlzLmMxIDw9IDEgLSB0aGlzLmNtdSxcbiAgICAgIFwiaW52YWxpZCBsZWFybmluZyByYXRlIGZvciB0aGUgcmFuay1vbmUgdXBkYXRlXCJcbiAgICApXG4gICAgY29uc29sZS5hc3NlcnQoXG4gICAgICB0aGlzLmNtdSA8PSAxIC0gdGhpcy5jMSxcbiAgICAgIFwiaW52YWxpZCBsZWFybmluZyByYXRlIGZvciB0aGUgcmFuay3OvCB1cGRhdGVcIlxuICAgIClcblxuICAgIGxldCBtaW5fYWxwaGEgPSBNYXRoLm1pbihcbiAgICAgIDEgKyB0aGlzLmMxIC8gdGhpcy5jbXUsIC8vIGVxLjUwXG4gICAgICAxICsgKDIgKiBtdV9lZmZfbWludXMpIC8gKHRoaXMubXVfZWZmICsgMiksIC8vIGVxLjUxXG4gICAgICAoMSAtIHRoaXMuYzEgLSB0aGlzLmNtdSkgLyAodGhpcy5uX2RpbSAqIHRoaXMuY211KSAvLyBlcS41MlxuICAgIClcblxuICAgIC8vIChlcS41MylcbiAgICAvLyBsZXQgcG9zaXRpdmVfc3VtID0gbnAuc3VtKHdlaWdodHNfcHJpbWVbd2VpZ2h0c19wcmltZSA+IDBdKVxuICAgIGxldCBwb3NpdGl2ZV9zdW0gPSB3ZWlnaHRzX3ByaW1lXG4gICAgICAuZmlsdGVyKCh4KSA9PiB4ID4gMClcbiAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKVxuICAgIGxldCBuZWdhdGl2ZV9zdW0gPSBNYXRoLmFicyhcbiAgICAgIHdlaWdodHNfcHJpbWUuZmlsdGVyKCh4KSA9PiB4IDwgMCkucmVkdWNlKChhLCBiKSA9PiBhICsgYilcbiAgICApXG4gICAgLy8gdGhpcy53ZWlnaHRzID0gbnAud2hlcmUoXG4gICAgLy8gICB3ZWlnaHRzX3ByaW1lID49IDAsXG4gICAgLy8gICAoMSAvIHBvc2l0aXZlX3N1bSkgKiB3ZWlnaHRzX3ByaW1lLFxuICAgIC8vICAgKG1pbl9hbHBoYSAvIG5lZ2F0aXZlX3N1bSkgKiB3ZWlnaHRzX3ByaW1lXG4gICAgLy8gKVxuICAgIHRoaXMud2VpZ2h0cyA9IHdlaWdodHNfcHJpbWUubWFwKCh4KSA9PlxuICAgICAgeCA+PSAwID8gKDEgLyBwb3NpdGl2ZV9zdW0pICogeCA6IChtaW5fYWxwaGEgLyBuZWdhdGl2ZV9zdW0pICogeFxuICAgIClcbiAgICB0aGlzLmNtID0gMSAvLyAoZXEuIDU0KVxuXG4gICAgLy8gbGVhcm5pbmcgcmF0ZSBmb3IgdGhlIGN1bXVsYXRpb24gZm9yIHRoZSBzdGVwLXNpemUgY29udHJvbCAoZXEuNTUpXG4gICAgdGhpcy5jX3NpZ21hID0gKHRoaXMubXVfZWZmICsgMikgLyAodGhpcy5uX2RpbSArIHRoaXMubXVfZWZmICsgNSlcbiAgICB0aGlzLmRfc2lnbWEgPVxuICAgICAgMSArXG4gICAgICAyICogTWF0aC5tYXgoMCwgTWF0aC5zcXJ0KCh0aGlzLm11X2VmZiAtIDEpIC8gKHRoaXMubl9kaW0gKyAxKSkgLSAxKSArXG4gICAgICB0aGlzLmNfc2lnbWFcbiAgICBjb25zb2xlLmFzc2VydChcbiAgICAgIHRoaXMuY19zaWdtYSA8IDEsXG4gICAgICBcImludmFsaWQgbGVhcm5pbmcgcmF0ZSBmb3IgY3VtdWxhdGlvbiBmb3IgdGhlIHN0ZXAtc2l6ZSBjb250cm9sXCJcbiAgICApXG5cbiAgICAvLyBsZWFybmluZyByYXRlIGZvciBjdW11bGF0aW9uIGZvciB0aGUgcmFuay1vbmUgdXBkYXRlIChlcS41NilcbiAgICB0aGlzLmNjID1cbiAgICAgICg0ICsgdGhpcy5tdV9lZmYgLyB0aGlzLm5fZGltKSAvXG4gICAgICAodGhpcy5uX2RpbSArIDQgKyAoMiAqIHRoaXMubXVfZWZmKSAvIHRoaXMubl9kaW0pXG4gICAgY29uc29sZS5hc3NlcnQoXG4gICAgICB0aGlzLmNjIDw9IDEsXG4gICAgICBcImludmFsaWQgbGVhcm5pbmcgcmF0ZSBmb3IgY3VtdWxhdGlvbiBmb3IgdGhlIHJhbmstb25lIHVwZGF0ZVwiXG4gICAgKVxuXG4gICAgLy8gc2VsZi5fbl9kaW0gPSBuX2RpbVxuICAgIC8vIHNlbGYuX3BvcHNpemUgPSBwb3BzaXplXG4gICAgLy8gc2VsZi5fbXUgPSBtdVxuICAgIC8vIHNlbGYuX211X2VmZiA9IG11X2VmZlxuXG4gICAgLy8gc2VsZi5fY2MgPSBjY1xuICAgIC8vIHNlbGYuX2MxID0gYzFcbiAgICAvLyBzZWxmLl9jbXUgPSBjbXVcbiAgICAvLyBzZWxmLl9jX3NpZ21hID0gY19zaWdtYVxuICAgIC8vIHNlbGYuX2Rfc2lnbWEgPSBkX3NpZ21hXG4gICAgLy8gc2VsZi5fY20gPSBjbVxuXG4gICAgLy8gRXx8TigwLCBJKXx8IChwLjI4KVxuICAgIHRoaXMuY2hpX24gPVxuICAgICAgTWF0aC5zcXJ0KHRoaXMubl9kaW0pICpcbiAgICAgICgxLjAgLSAxLjAgLyAoNC4wICogdGhpcy5uX2RpbSkgKyAxLjAgLyAoMjEuMCAqIHRoaXMubl9kaW0gKiogMikpXG5cbiAgICAvLyBzZWxmLl93ZWlnaHRzID0gd2VpZ2h0c1xuXG4gICAgLy8gZXZvbHV0aW9uIHBhdGhcbiAgICAvLyB0aGlzLnBfc2lnbWEgPSBucC56ZXJvcyhuX2RpbSlcbiAgICB0aGlzLnBfc2lnbWEgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubl9kaW0pLmZpbGwoMC4wKVxuICAgIC8vIHRoaXMucGMgPSBucC56ZXJvcyhuX2RpbSlcbiAgICB0aGlzLnBjID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLm5fZGltKS5maWxsKDAuMClcblxuICAgIC8vIHNlbGYuX21lYW4gPSBtZWFuXG5cbiAgICBpZiAoY292ID09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gdGhpcy5DID0gbnAuZXllKG5fZGltKVxuICAgICAgdGhpcy5DID0gRXllKHRoaXMubl9kaW0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuYXNzZXJ0KFxuICAgICAgICBjb3Yuc2hhcGUgPT0gKG5fZGltLCBuX2RpbSksXG4gICAgICAgIFwiSW52YWxpZCBzaGFwZSBvZiBjb3ZhcmlhbmNlIG1hdHJpeFwiXG4gICAgICApXG4gICAgICB0aGlzLkMgPSBjb3ZcbiAgICB9XG5cbiAgICB0aGlzLnNpZ21hID0gc2lnbWFcbiAgICAvLyB0aGlzLkQgPSB1bmRlZmluZWRcbiAgICAvLyB0aGlzLkIgPSB1bmRlZmluZWRcblxuICAgIC8vIC8vIGJvdW5kcyBjb250YWlucyBsb3cgYW5kIGhpZ2ggb2YgZWFjaCBwYXJhbWV0ZXIuXG4gICAgLy8gY29uc29sZS5hc3NlcnQoYm91bmRzID09IHVuZGVmaW5lZCB8fCBfaXNfdmFsaWRfYm91bmRzKGJvdW5kcywgbWVhbiksIFwiaW52YWxpZCBib3VuZHNcIilcbiAgICAvLyB0aGlzLmJvdW5kcyA9IGJvdW5kc1xuICAgIC8vIHRoaXMubl9tYXhfcmVzYW1wbGluZyA9IG5fbWF4X3Jlc2FtcGxpbmdcblxuICAgIHRoaXMuZyA9IDBcbiAgICAvLyB0aGlzLnJuZyA9IG5wLnJhbmRvbS5SYW5kb21TdGF0ZShzZWVkKVxuXG4gICAgLy8gLy8gVGVybWluYXRpb24gY3JpdGVyaWFcbiAgICAvLyB0aGlzLnRvbHggPSAxZS0xMiAqIHNpZ21hXG4gICAgLy8gdGhpcy50b2x4dXAgPSAxZTRcbiAgICAvLyB0aGlzLnRvbGZ1biA9IDFlLTEyXG4gICAgLy8gdGhpcy50b2xjb25kaXRpb25jb3YgPSAxZTE0XG5cbiAgICAvLyB0aGlzLmZ1bmhpc3RfdGVybSA9IDEwICsgTWF0aC5jZWlsKCgzMCAqIHRoaXMubl9kaW0pIC8gdGhpcy5wb3BzaXplKVxuICAgIC8vIC8vIHRoaXMuZnVuaGlzdF92YWx1ZXMgPSBucC5lbXB0eShzZWxmLl9mdW5oaXN0X3Rlcm0gKiAyKVxuICAgIC8vIHRoaXMuZnVuaGlzdF92YWx1ZXMgPSBBcnJheSh0aGlzLmZ1bmhpc3RfdGVybSAqIDIpXG5cbiAgICB0aGlzLm5lZWRzX2RlY29tcCA9IHRydWVcbiAgICBpZiAocm5nICE9IG51bGwpIHtcbiAgICAgIHRoaXMucm5nID0gcm5nXG4gICAgfVxuICB9XG5cbiAgX2VpZ2VuX2RlY29tcG9zaXRpb24oKSB7XG4gICAgLy8tPiBUdXBsZVtucC5uZGFycmF5LCBucC5uZGFycmF5XTpcbiAgICAvLyBpZiAodGhpcy5fQiAhPSB1bmRlZmluZWQgJiYgdGhpcy5fRCAhPSB1bmRlZmluZWQpIHtcbiAgICAvLyAgIHJldHVybiB0aGlzLl9CLCB0aGlzLl9EXG4gICAgLy8gfVxuICAgIGlmICghdGhpcy5uZWVkc19kZWNvbXApIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gdGhpcy5fQyA9ICh0aGlzLl9DICsgdGhpcy5fQy5UKSAvIDJcbiAgICAvLyBtYWtlIHN5bW1ldHJpY2FsXG4gICAgLy8gdGhpcy5DID0gc2NhbGUyZChhZGQyZCh0aGlzLkMsIHRyYW5zcG9zZTJkKHRoaXMuQykpLCAwLjUpXG4gICAgdGhpcy5DLmF2Z1N5bW1lcmljKClcbiAgICAvLyBEMjogZWlnZW52YWx1ZXMsIEI6IGVpZ2VudmVjdG9yc1xuICAgIC8vIGxldCBbRDIsIEJdID0gbnAubGluYWxnLmVpZ2godGhpcy5DKVxuICAgIGxldCBlaWdfb2JqID0gZWlnX3N5bSh0aGlzLkMpXG4gICAgaWYgKCFlaWdfb2JqLmVpZ19zeW1fc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIC8vIGxldCBEMiA9IGVpZ19vYmouZWlnX3ZhbHNcbiAgICBsZXQgRDIgPSBlaWdfb2JqLmVpZ192YWxzLm1hcCgoeCkgPT4gKHggPCAwID8gRVBTX0NNQSA6IHgpKVxuICAgIHRoaXMuRCA9IEQyLm1hcCgoeCkgPT4gTWF0aC5zcXJ0KHgpKVxuICAgIC8vIGZvciAobGV0IHggb2YgZWlnX29iai5laWdfdmFscykge1xuICAgIC8vICAgaWYgKCFpc0Zpbml0ZSh4KSkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImVpZ192YWwgcHJvYmxlbVwiKVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyBmb3IgKGxldCB4IG9mIGVpZ19vYmouZWlnX3ZlY3MuZGF0YSkge1xuICAgIC8vICAgaWYgKCFpc0Zpbml0ZSh4KSkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImVpZ192ZWMgcHJvYmxlbVwiKVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICB0aGlzLkIgPSBlaWdfb2JqLmVpZ192ZWNzLmNvcHkoKVxuICAgIC8vIGxldCBEID0gTWF0aC5zcXJ0KG5wLndoZXJlKEQyIDwgMCwgRVBTLCBEMikpXG5cbiAgICAvLyB0aGlzLkQgPSBEMi5tYXAoKHgpID0+IHtcbiAgICAvLyAgIHggPCAwID8gRVBTIDogeFxuICAgIC8vIH0pLm1hcCgoeCkgPT4gTWF0aC5zcXJ0KHgpKVxuICAgIC8vIHRoaXMuRCA9IERcbiAgICBsZXQgaW5uZXIgPSB0aGlzLkIuY29weSgpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5fZGltOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5uX2RpbTsgaisrKSB7XG4gICAgICAgIGlubmVyLnNldChpLCBqLCBpbm5lci5nZXQoaSwgaikgKiBEMltqXSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLkMgPSBpbm5lci5tdWxNYXQodGhpcy5CLnRyYW5zcG9zZSgpKVxuICAgIHRoaXMuQkQgPSB0aGlzLkIuY29weSgpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5fZGltOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5uX2RpbTsgaisrKSB7XG4gICAgICAgIHRoaXMuQkQuc2V0KGksIGosIHRoaXMuQkQuZ2V0KGksIGopICogdGhpcy5EW2pdKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm5lZWRzX2RlY29tcCA9IGZhbHNlXG4gICAgLy8gdGhpcy5DID0gbnAuZG90KG5wLmRvdChCLCBucC5kaWFnKEQgKiogMikpLCBCLlQpXG5cbiAgICAvLyByZXR1cm4gW0IsIERdXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIF9zYW1wbGVfc29sdXRpb24oKSB7XG4gICAgLy8gLT4gbnAubmRhcnJheTpcbiAgICBjb25zdCBlaWdTdWNjZXNzID0gdGhpcy5fZWlnZW5fZGVjb21wb3NpdGlvbigpXG4gICAgaWYgKCFlaWdTdWNjZXNzKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgbGV0IHogPVxuICAgICAgdGhpcy5ybmcgPT0gbnVsbCA/IHJhbmRfbm9ybWFsKHRoaXMubl9kaW0pIDogdGhpcy5ybmcuZ2V0KHRoaXMubl9kaW0pIC8vIH4gTigwLCBJKVxuICAgIGxldCB5ID0gdGhpcy5CRC5tdWxWZWMoeilcbiAgICAvLyB5ID0gY2FzdChucC5uZGFycmF5LCBCLmRvdChucC5kaWFnKEQpKSkuZG90KHopIC8vIH4gTigwLCBDKVxuICAgIC8vIGxldCB4ID0gW11cbiAgICBsZXQgeCA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5uX2RpbSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubl9kaW07IGkrKykge1xuICAgICAgLy8geC5wdXNoKHRoaXMubWVhbltpXSArIHRoaXMuc2lnbWEgKiB5W2ldKVxuICAgICAgbGV0IHZhbCA9IHRoaXMubWVhbltpXSArIHRoaXMuc2lnbWEgKiB5W2ldXG4gICAgICB2YWwgPSBNYXRoLm1pbihNYXRoLm1heCh2YWwsIC1fVkFMX01BWCksIF9WQUxfTUFYKVxuICAgICAgLy8gX1ZBTF9NQVhcbiAgICAgIHhbaV0gPSB2YWxcbiAgICB9XG4gICAgcmV0dXJuIHhcbiAgfVxuXG4gIGFzaygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2FtcGxlX3NvbHV0aW9uKClcbiAgfVxuXG4gIHRlbGwoc29sX3Njb3JlX2FycmF5KSB7XG4gICAgLy8gXCJcIlwiVGVsbCBldmFsdWF0aW9uIHZhbHVlc1wiXCJcIlxuXG4gICAgLy8gYXNzZXJ0IGxlbihzb2x1dGlvbnMpID09IHNlbGYuX3BvcHNpemUsIFwiTXVzdCB0ZWxsIHBvcHNpemUtbGVuZ3RoIHNvbHV0aW9ucy5cIlxuICAgIC8vIGZvciBzIGluIHNvbHV0aW9uczpcbiAgICAvLyAgICAgYXNzZXJ0IG5wLmFsbChcbiAgICAvLyAgICAgICAgIG5wLmFicyhzWzBdKSA8IF9NRUFOX01BWFxuICAgIC8vICAgICApLCBmXCJBYnMgb2YgYWxsIHBhcmFtIHZhbHVlcyBtdXN0IGJlIGxlc3MgdGhhbiB7X01FQU5fTUFYfSB0byBhdm9pZCBvdmVyZmxvdyBlcnJvcnNcIlxuXG4gICAgLy8gc2VsZi5fZyArPSAxXG4gICAgdGhpcy5nKytcbiAgICAvLyBzb2x1dGlvbnMuc29ydChrZXk9bGFtYmRhIHM6IHNbMV0pXG4gICAgc29sX3Njb3JlX2FycmF5LnNvcnQoKGEsIGIpID0+IGEuc2NvcmUgLSBiLnNjb3JlKVxuXG4gICAgLy8gIyBTdG9yZXMgJ2Jlc3QnIGFuZCAnd29yc3QnIHZhbHVlcyBvZiB0aGVcbiAgICAvLyAjIGxhc3QgJ3NlbGYuX2Z1bmhpc3RfdGVybScgZ2VuZXJhdGlvbnMuXG4gICAgLy8gZnVuaGlzdF9pZHggPSAyICogKHNlbGYuZ2VuZXJhdGlvbiAlIHNlbGYuX2Z1bmhpc3RfdGVybSlcbiAgICAvLyBzZWxmLl9mdW5oaXN0X3ZhbHVlc1tmdW5oaXN0X2lkeF0gPSBzb2x1dGlvbnNbMF1bMV1cbiAgICAvLyBzZWxmLl9mdW5oaXN0X3ZhbHVlc1tmdW5oaXN0X2lkeCArIDFdID0gc29sdXRpb25zWy0xXVsxXVxuXG4gICAgLy8gIyBTYW1wbGUgbmV3IHBvcHVsYXRpb24gb2Ygc2VhcmNoX3BvaW50cywgZm9yIGs9MSwgLi4uLCBwb3BzaXplXG4gICAgLy8gQiwgRCA9IHNlbGYuX2VpZ2VuX2RlY29tcG9zaXRpb24oKVxuICAgIC8vIHRoaXMuX2VpZ2VuX2RlY29tcG9zaXRpb24oKVxuICAgIGNvbnN0IGVpZ1N1Y2Nlc3MgPSB0aGlzLl9laWdlbl9kZWNvbXBvc2l0aW9uKClcbiAgICBpZiAoIWVpZ1N1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICAvLyBzZWxmLl9CLCBzZWxmLl9EID0gTm9uZSwgTm9uZVxuICAgIHRoaXMubmVlZHNfZGVjb21wID0gdHJ1ZVxuXG4gICAgLy8geF9rID0gbnAuYXJyYXkoW3NbMF0gZm9yIHMgaW4gc29sdXRpb25zXSkgICMgfiBOKG0sIM+DXjIgQylcbiAgICAvLyBsZXQgeF9rID0gc29sX3Njb3JlX2FycmF5Lm1hcCgobykgPT4gby5zb2x1dGlvbilcbiAgICAvLyB5X2sgPSAoeF9rIC0gc2VsZi5fbWVhbikgLyBzZWxmLl9zaWdtYSAgIyB+IE4oMCwgQylcbiAgICBsZXQgeV9rID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9wc2l6ZTsgaSsrKSB7XG4gICAgICBsZXQgc29sID0gc29sX3Njb3JlX2FycmF5W2ldLnNvbHV0aW9uXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubl9kaW07IGorKykge1xuICAgICAgICB5X2sucHVzaCgoc29sW2pdIC0gdGhpcy5tZWFuW2pdKSAvIHRoaXMuc2lnbWEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gIyBTZWxlY3Rpb24gYW5kIHJlY29tYmluYXRpb25cbiAgICAvLyB5X3cgPSBucC5zdW0oeV9rWzogc2VsZi5fbXVdLlQgKiBzZWxmLl93ZWlnaHRzWzogc2VsZi5fbXVdLCBheGlzPTEpICAjIGVxLjQxXG4gICAgbGV0IHlfdyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5uX2RpbSkuZmlsbCgwKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tdTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubl9kaW07IGorKykge1xuICAgICAgICB5X3dbal0gKz0geV9rW2kgKiB0aGlzLm5fZGltICsgal0gKiB0aGlzLndlaWdodHNbaV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZWxmLl9tZWFuICs9IHNlbGYuX2NtICogc2VsZi5fc2lnbWEgKiB5X3dcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubl9kaW07IGkrKykge1xuICAgICAgdGhpcy5tZWFuW2ldICs9IHRoaXMuY20gKiB0aGlzLnNpZ21hICogeV93W2ldXG4gICAgICBpZiAodGhpcy5tZWFuW2ldID4gX01FQU5fTUFYKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWVhbiB0b28gaGlnaFwiKVxuICAgICAgICB0aGlzLm1lYW5baV0gPSBfTUVBTl9NQVhcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tZWFuW2ldIDwgLV9NRUFOX01BWCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1lYW4gdG9vIGxvd1wiKVxuICAgICAgICB0aGlzLm1lYW5baV0gPSAtX01FQU5fTUFYXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gIyBTdGVwLXNpemUgY29udHJvbFxuICAgIC8vIENfMiA9IGNhc3QoXG4gICAgLy8gICAgIG5wLm5kYXJyYXksIGNhc3QobnAubmRhcnJheSwgQi5kb3QobnAuZGlhZygxIC8gRCkpKS5kb3QoQi5UKVxuICAgIC8vICkgICMgQ14oLTEvMikgPSBCIEReKC0xKSBCXlRcbiAgICBsZXQgaW5uZXIgPSB0aGlzLkIuY29weSgpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5fZGltOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5uX2RpbTsgaisrKSB7XG4gICAgICAgIGlubmVyLnNldChpLCBqLCBpbm5lci5nZXQoaSwgaikgLyB0aGlzLkRbal0pXG4gICAgICB9XG4gICAgfVxuICAgIGxldCBDXzIgPSBpbm5lci5tdWxNYXQodGhpcy5CLnRyYW5zcG9zZSgpKVxuICAgIC8vIHNlbGYuX3Bfc2lnbWEgPSAoMSAtIHNlbGYuX2Nfc2lnbWEpICogc2VsZi5fcF9zaWdtYSArIG1hdGguc3FydChcbiAgICAvLyAgICAgc2VsZi5fY19zaWdtYSAqICgyIC0gc2VsZi5fY19zaWdtYSkgKiBzZWxmLl9tdV9lZmZcbiAgICAvLyApICogQ18yLmRvdCh5X3cpXG4gICAgbGV0IHRlbXBfYXJyID0gQ18yLm11bFZlYyh5X3cpXG4gICAgbGV0IGYwID0gMSAtIHRoaXMuY19zaWdtYVxuICAgIGxldCBmMSA9IE1hdGguc3FydCh0aGlzLmNfc2lnbWEgKiAoMiAtIHRoaXMuY19zaWdtYSkgKiB0aGlzLm11X2VmZilcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubl9kaW07IGkrKykge1xuICAgICAgdGhpcy5wX3NpZ21hW2ldID0gZjAgKiB0aGlzLnBfc2lnbWFbaV0gKyBmMSAqIHRlbXBfYXJyW2ldXG4gICAgfVxuXG4gICAgLy8gbm9ybV9wX3NpZ21hID0gbnAubGluYWxnLm5vcm0oc2VsZi5fcF9zaWdtYSlcbiAgICBsZXQgbm9ybV9wX3NpZ21hID0gTWF0aC5zcXJ0KFxuICAgICAgdGhpcy5wX3NpZ21hLm1hcCgoeCkgPT4geCAqIHgpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpXG4gICAgKVxuICAgIC8vIHNlbGYuX3NpZ21hICo9IG5wLmV4cChcbiAgICAvLyAgICAgKHNlbGYuX2Nfc2lnbWEgLyBzZWxmLl9kX3NpZ21hKSAqIChub3JtX3Bfc2lnbWEgLyBzZWxmLl9jaGlfbiAtIDEpXG4gICAgLy8gKVxuICAgIHRoaXMuc2lnbWEgKj0gTWF0aC5leHAoXG4gICAgICAodGhpcy5jX3NpZ21hIC8gdGhpcy5kX3NpZ21hKSAqIChub3JtX3Bfc2lnbWEgLyB0aGlzLmNoaV9uIC0gMSlcbiAgICApXG4gICAgLy8gc2VsZi5fc2lnbWEgPSBtaW4oc2VsZi5fc2lnbWEsIF9TSUdNQV9NQVgpXG4gICAgdGhpcy5zaWdtYSA9IE1hdGgubWluKHRoaXMuc2lnbWEsIF9TSUdNQV9NQVgpXG5cbiAgICAvLyAjIENvdmFyaWFuY2UgbWF0cml4IGFkYXB0aW9uXG4gICAgLy8gaF9zaWdtYV9jb25kX2xlZnQgPSBub3JtX3Bfc2lnbWEgLyBtYXRoLnNxcnQoXG4gICAgLy8gICAgIDEgLSAoMSAtIHNlbGYuX2Nfc2lnbWEpICoqICgyICogKHNlbGYuX2cgKyAxKSlcbiAgICAvLyApXG4gICAgbGV0IGhfc2lnbWFfY29uZF9sZWZ0ID1cbiAgICAgIG5vcm1fcF9zaWdtYSAvIE1hdGguc3FydCgxIC0gKDEgLSB0aGlzLmNfc2lnbWEpICoqICgyICogKHRoaXMuZyArIDEpKSlcblxuICAgIC8vIGhfc2lnbWFfY29uZF9yaWdodCA9ICgxLjQgKyAyIC8gKHNlbGYuX25fZGltICsgMSkpICogc2VsZi5fY2hpX25cbiAgICBsZXQgaF9zaWdtYV9jb25kX3JpZ2h0ID0gKDEuNCArIDIgLyAodGhpcy5uX2RpbSArIDEpKSAqIHRoaXMuY2hpX25cblxuICAgIC8vIGhfc2lnbWEgPSAxLjAgaWYgaF9zaWdtYV9jb25kX2xlZnQgPCBoX3NpZ21hX2NvbmRfcmlnaHQgZWxzZSAwLjAgICMgKHAuMjgpXG4gICAgbGV0IGhfc2lnbWEgPSBoX3NpZ21hX2NvbmRfbGVmdCA8IGhfc2lnbWFfY29uZF9yaWdodCA/IDEuMCA6IDAuMFxuXG4gICAgLy8gIyAoZXEuNDUpXG4gICAgLy8gc2VsZi5fcGMgPSAoMSAtIHNlbGYuX2NjKSAqIHNlbGYuX3BjICsgaF9zaWdtYSAqIG1hdGguc3FydChcbiAgICAvLyAgICAgc2VsZi5fY2MgKiAoMiAtIHNlbGYuX2NjKSAqIHNlbGYuX211X2VmZlxuICAgIC8vICkgKiB5X3dcbiAgICBmMCA9IDEgLSB0aGlzLmNjXG4gICAgZjEgPSBoX3NpZ21hICogTWF0aC5zcXJ0KHRoaXMuY2MgKiAoMiAtIHRoaXMuY2MpICogdGhpcy5tdV9lZmYpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5fZGltOyBpKyspIHtcbiAgICAgIHRoaXMucGNbaV0gPSBmMCAqIHRoaXMucGNbaV0gKyBmMSAqIHlfd1tpXVxuICAgIH1cblxuICAgIC8vICMgKGVxLjQ2KVxuICAgIC8vIHdfaW8gPSBzZWxmLl93ZWlnaHRzICogbnAud2hlcmUoXG4gICAgLy8gICAgIHNlbGYuX3dlaWdodHMgPj0gMCxcbiAgICAvLyAgICAgMSxcbiAgICAvLyAgICAgc2VsZi5fbl9kaW0gLyAobnAubGluYWxnLm5vcm0oQ18yLmRvdCh5X2suVCksIGF4aXM9MCkgKiogMiArIF9FUFMpLFxuICAgIC8vIClcbiAgICAvLyBsZXQgdGVtcF9tYXQgPSBbXVxuICAgIGxldCB0ZW1wX21hdCA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5uX2RpbSAqIHRoaXMucG9wc2l6ZSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubl9kaW07IGkrKykge1xuICAgICAgLy8gbGV0IHRlbXBfbWF0X3JvdyA9IFtdXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucG9wc2l6ZTsgaisrKSB7XG4gICAgICAgIGxldCBzdW0gPSAwXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdGhpcy5uX2RpbTsgaysrKSB7XG4gICAgICAgICAgLy8gc3VtICs9IENfMi5nZXQoaSwgaykgKiB5X2tbal1ba11cbiAgICAgICAgICBzdW0gKz0gQ18yLmdldChpLCBrKSAqIHlfa1tqICogdGhpcy5uX2RpbSArIGtdXG4gICAgICAgIH1cbiAgICAgICAgdGVtcF9tYXRbaSAqIHRoaXMucG9wc2l6ZSArIGpdID0gc3VtXG4gICAgICAgIC8vIHRlbXBfbWF0X3Jvdy5wdXNoKHN1bSlcbiAgICAgIH1cbiAgICAgIC8vIHRlbXBfbWF0LnB1c2godGVtcF9tYXRfcm93KVxuICAgIH1cbiAgICBsZXQgY29sX25vcm1zID0gW11cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucG9wc2l6ZTsgaisrKSB7XG4gICAgICBsZXQgY29sX25vcm0gPSAwXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubl9kaW07IGkrKykge1xuICAgICAgICAvLyBsZXQgdmFsID0gdGVtcF9tYXRbaV1bal1cbiAgICAgICAgbGV0IHZhbCA9IHRlbXBfbWF0W2kgKiB0aGlzLnBvcHNpemUgKyBqXVxuICAgICAgICBjb2xfbm9ybSArPSB2YWwgKiB2YWxcbiAgICAgIH1cbiAgICAgIGNvbF9ub3Jtcy5wdXNoKHRoaXMubl9kaW0gLyAoTWF0aC5hYnMoY29sX25vcm0pICsgRVBTX0NNQSkpXG4gICAgfVxuICAgIGxldCB3X2lvID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9wc2l6ZTsgaSsrKSB7XG4gICAgICBsZXQgY29uZF9mYWN0b3IgPSB0aGlzLndlaWdodHNbaV0gPj0gMCA/IDEgOiBjb2xfbm9ybXNbaV1cbiAgICAgIHdfaW8ucHVzaCh0aGlzLndlaWdodHNbaV0gKiBjb25kX2ZhY3RvcilcbiAgICB9XG5cbiAgICAvLyBkZWx0YV9oX3NpZ21hID0gKDEgLSBoX3NpZ21hKSAqIHNlbGYuX2NjICogKDIgLSBzZWxmLl9jYykgICMgKHAuMjgpXG4gICAgbGV0IGRlbHRhX2hfc2lnbWEgPSAoMSAtIGhfc2lnbWEpICogdGhpcy5jYyAqICgyIC0gdGhpcy5jYylcbiAgICAvLyBhc3NlcnQgZGVsdGFfaF9zaWdtYSA8PSAxXG5cbiAgICAvLyAjIChlcS40NylcbiAgICAvLyByYW5rX29uZSA9IG5wLm91dGVyKHNlbGYuX3BjLCBzZWxmLl9wYylcbiAgICBsZXQgcmFua19vbmUgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubl9kaW0gKiB0aGlzLm5fZGltKVxuICAgIC8vIHVwcGVyIHRyaWFuZ2xlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5fZGltOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgdGhpcy5uX2RpbTsgaisrKSB7XG4gICAgICAgIHJhbmtfb25lW2kgKiB0aGlzLm5fZGltICsgal0gPSB0aGlzLnBjW2ldICogdGhpcy5wY1tqXVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJhbmtfbXUgPSBucC5zdW0oXG4gICAgLy8gICAgIG5wLmFycmF5KFt3ICogbnAub3V0ZXIoeSwgeSkgZm9yIHcsIHkgaW4gemlwKHdfaW8sIHlfayldKSwgYXhpcz0wXG4gICAgLy8gKVxuICAgIGxldCByYW5rX211ID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLm5fZGltICogdGhpcy5uX2RpbSkuZmlsbCgwKVxuICAgIC8vIHVwcGVyIHRyaWFuZ2xlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvcHNpemU7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm5fZGltOyBqKyspIHtcbiAgICAgICAgZm9yIChsZXQgayA9IGo7IGsgPCB0aGlzLm5fZGltOyBrKyspIHtcbiAgICAgICAgICByYW5rX211W2ogKiB0aGlzLm5fZGltICsga10gKz1cbiAgICAgICAgICAgIHdfaW9baV0gKiB5X2tbaSAqIHRoaXMubl9kaW0gKyBqXSAqIHlfa1tpICogdGhpcy5uX2RpbSArIGtdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGlzLkMgPSAoXG4gICAgLy8gICAgIChcbiAgICAvLyAgICAgICAgIDFcbiAgICAvLyAgICAgICAgICsgdGhpcy5jMSAqIGRlbHRhX2hfc2lnbWFcbiAgICAvLyAgICAgICAgIC0gdGhpcy5jMVxuICAgIC8vICAgICAgICAgLSB0aGlzLmNtdSAqIHd0X3N1bVxuICAgIC8vICAgICApXG4gICAgLy8gICAgICogdGhpcy5DXG4gICAgLy8gICAgICsgdGhpcy5jMSAqIHJhbmtfb25lXG4gICAgLy8gICAgICsgdGhpcy5jbXUgKiByYW5rX211XG4gICAgLy8gKVxuICAgIGxldCB3dF9zdW0gPSB0aGlzLndlaWdodHMucmVkdWNlKChhLCBiKSA9PiBhICsgYilcbiAgICBmMCA9IDEgKyB0aGlzLmMxICogZGVsdGFfaF9zaWdtYSAtIHRoaXMuYzEgLSB0aGlzLmNtdSAqIHd0X3N1bVxuICAgIC8vIHVwcGVyIHRyaWFuZ2xlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5fZGltOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgdGhpcy5uX2RpbTsgaisrKSB7XG4gICAgICAgIGxldCBpZHggPSBpICogdGhpcy5uX2RpbSArIGpcbiAgICAgICAgdGhpcy5DLmRhdGFbaWR4XSA9XG4gICAgICAgICAgZjAgKiB0aGlzLkMuZGF0YVtpZHhdICtcbiAgICAgICAgICB0aGlzLmMxICogcmFua19vbmVbaWR4XSArXG4gICAgICAgICAgdGhpcy5jbXUgKiByYW5rX211W2lkeF1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZmlsbCBsb3dlciB0cmlhbmdsZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uX2RpbTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCB0aGlzLm5fZGltOyBqKyspIHtcbiAgICAgICAgdGhpcy5DLnNldChqLCBpLCB0aGlzLkMuZ2V0KGksIGopKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbmNsYXNzIFNxTWF0cml4IHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIC8vICAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgIC8vICAgICBjb25zb2xlLmVycm9yKFwiRGF0YSBtdXN0IGJlIGFuIGFycmF5LlwiKVxuICAgIC8vICAgICByZXR1cm4gbnVsbFxuICAgIC8vICAgfVxuICAgIGxldCBkYXRhX2xlbl9zcXJ0ID0gTWF0aC5zcXJ0KGRhdGEubGVuZ3RoKVxuICAgIC8vIGlmICghTnVtYmVyLmlzSW50ZWdlcihkYXRhX2xlbl9zcXJ0KSkge1xuICAgIC8vICAgY29uc29sZS5lcnJvcihcIkRhdGEgbGVuZ3RoIG11c3QgYmUgc3F1YXJlLlwiKVxuICAgIC8vICAgcmV0dXJuIG51bGxcbiAgICAvLyB9XG4gICAgdGhpcy5kaW0gPSBkYXRhX2xlbl9zcXJ0XG4gICAgdGhpcy5kYXRhID0gRmxvYXQzMkFycmF5LmZyb20oZGF0YSlcbiAgfVxuXG4gIGdldChyb3csIGNvbCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFbcm93ICogdGhpcy5kaW0gKyBjb2xdXG4gIH1cblxuICBzZXQocm93LCBjb2wsIHZhbCkge1xuICAgIHRoaXMuZGF0YVtyb3cgKiB0aGlzLmRpbSArIGNvbF0gPSB2YWxcbiAgfVxuXG4gIGFkZE1hdChvdGhlcikge1xuICAgIGlmICghKG90aGVyIGluc3RhbmNlb2YgU3FNYXRyaXgpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTXVzdCBhZGQgd2l0aCBTcU1hdHJpeC5cIilcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGNvbnN0IGFkZF9kYXRhID0gdGhpcy5kYXRhLnNsaWNlKClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhZGRfZGF0YVtpXSArPSBvdGhlci5kYXRhW2ldXG4gICAgfVxuICAgIHJldHVybiBuZXcgU3FNYXRyaXgoYWRkX2RhdGEpXG4gIH1cblxuICBtdWxWZWModikge1xuICAgIC8vIGlmICghKHYgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAvLyAgIGNvbnNvbGUuZXJyb3IoXCJWZWN0b3IgbXVzdCBiZSBhbiBhcnJheS5cIilcbiAgICAvLyAgIHJldHVybiBudWxsXG4gICAgLy8gfVxuICAgIC8vIGlmICh2Lmxlbmd0aCAhPSB0aGlzLmRpbSkge1xuICAgIC8vICAgY29uc29sZS5lcnJvcihcIlZlY3RvciBsZW5ndGggbXVzdCBlcXVhbCBzcXVhcmUgbWF0cml4IHNpZGUuXCIpXG4gICAgLy8gICByZXR1cm4gbnVsbFxuICAgIC8vIH1cbiAgICBsZXQgcmVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmRpbSkuZmlsbCgwKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kaW07IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRpbTsgaisrKSB7XG4gICAgICAgIHJlc1tpXSArPSB0aGlzLmdldChpLCBqKSAqIHZbal1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbiAgLy8gbXVsTWF0KG90aGVyKSB7XG4gIC8vICAgbGV0IG5ld19kYXRhID0gW11cbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGltOyBpKyspIHtcbiAgLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kaW07IGorKykge1xuICAvLyAgICAgICBsZXQgc3VtID0gMFxuICAvLyAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMuZGltOyBrKyspIHtcbiAgLy8gICAgICAgICBzdW0gKz0gdGhpcy5nZXQoaSwgaykgKiBvdGhlci5nZXQoaywgailcbiAgLy8gICAgICAgfVxuICAvLyAgICAgICBuZXdfZGF0YS5wdXNoKHN1bSlcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIG5ldyBTcU1hdHJpeChuZXdfZGF0YSlcbiAgLy8gfVxuXG4gIC8vIG11bE1hdChvdGhlcikge1xuICAvLyAgIGxldCBuZXdfZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5kaW0gKiB0aGlzLmRpbSkuZmlsbCgwKVxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kaW07IGkrKykge1xuICAvLyAgICAgZm9yIChsZXQgayA9IDA7IGsgPCB0aGlzLmRpbTsgaysrKSB7XG4gIC8vICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kaW07IGorKykge1xuICAvLyAgICAgICAgIG5ld19kYXRhW2kgKiB0aGlzLmRpbSArIGpdICs9IHRoaXMuZ2V0KGksIGspICogb3RoZXIuZ2V0KGssIGopXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIG5ldyBTcU1hdHJpeChuZXdfZGF0YSlcbiAgLy8gfVxuXG4gIG11bE1hdChvdGhlcikge1xuICAgIGNvbnN0IGEgPSB0aGlzLmRhdGEsXG4gICAgICBiID0gb3RoZXIuZGF0YSxcbiAgICAgIG0gPSB0aGlzLmRpbSxcbiAgICAgIG4gPSB0aGlzLmRpbSxcbiAgICAgIHAgPSBvdGhlci5kaW0sXG4gICAgICBjID0gbmV3IEZsb2F0MzJBcnJheShtICogcClcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHA7IGorKykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgbGV0IHN1bSA9IDBcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICBzdW0gKz0gYVtpICogbiArIGtdICogYltrICogcCArIGpdXG4gICAgICAgIH1cbiAgICAgICAgY1tpICogcCArIGpdID0gc3VtXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgU3FNYXRyaXgoYylcbiAgfVxuXG4gIHRyYW5zcG9zZSgpIHtcbiAgICAvLyBsZXQgbmV3X2RhdGEgPSBbXVxuICAgIGNvbnN0IG5ld19tYXQgPSBuZXcgU3FNYXRyaXgobmV3IEZsb2F0MzJBcnJheSh0aGlzLmRpbSAqIHRoaXMuZGltKSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGltOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kaW07IGorKykge1xuICAgICAgICBuZXdfbWF0LnNldChpLCBqLCB0aGlzLmdldChqLCBpKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld19tYXRcbiAgfVxuXG4gIGF2Z1N5bW1lcmljKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kaW0gLSAxOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IHRoaXMuZGltOyBqKyspIHtcbiAgICAgICAgbGV0IGF2Z1ZhbCA9IDAuNSAqICh0aGlzLmdldChpLCBqKSArIHRoaXMuZ2V0KGosIGkpKVxuICAgICAgICB0aGlzLnNldChpLCBqLCBhdmdWYWwpXG4gICAgICAgIHRoaXMuc2V0KGosIGksIGF2Z1ZhbClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb3B5KCkge1xuICAgIHJldHVybiBuZXcgU3FNYXRyaXgodGhpcy5kYXRhLnNsaWNlKCkpXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBsZXQgcyA9IFwiXCJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGltICogdGhpcy5kaW07IGkrKykge1xuICAgICAgbGV0IHNlcCA9IChpICsgMSkgJSB0aGlzLmRpbSA9PSAwID8gXCJcXG5cIiA6IFwiIFwiXG4gICAgICBzICs9IHRoaXMuZGF0YVtpXS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiIFwiKSArIHNlcFxuICAgIH1cbiAgICByZXR1cm4gc1xuICB9XG59XG5cbmZ1bmN0aW9uIFNxTWF0cml4RnJvbURpYWcoZGlhZykge1xuICBsZXQgbiA9IGRpYWcubGVuZ3RoXG4gIGxldCBkYXRhID0gbmV3IEZsb2F0MzJBcnJheShuICogbikuZmlsbCgwKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGRhdGFbaSAqICgxICsgbildID0gZGlhZ1tpXVxuICB9XG4gIHJldHVybiBuZXcgU3FNYXRyaXgoZGF0YSlcbn1cblxuZnVuY3Rpb24gRXllKGRpbSkge1xuICByZXR1cm4gU3FNYXRyaXhGcm9tRGlhZyhuZXcgRmxvYXQzMkFycmF5KGRpbSkuZmlsbCgxKSlcbn1cblxuZnVuY3Rpb24gcHl0aGFnKGEsIGIpIHtcbiAgbGV0IGFic2EgPSBNYXRoLmFicyhhKVxuICBsZXQgYWJzYiA9IE1hdGguYWJzKGIpXG4gIGxldCBhX292ZXJfYiA9IGFic2EgLyBhYnNiXG4gIGxldCBhX292ZXJfYl9zcSA9IGFfb3Zlcl9iICogYV9vdmVyX2JcbiAgaWYgKGFic2EgPiBhYnNiKSB7XG4gICAgcmV0dXJuIGFic2EgKiBNYXRoLnNxcnQoMSArIDEgLyBhX292ZXJfYl9zcSlcbiAgfSBlbHNlIGlmIChhYnNiID09IDApIHtcbiAgICByZXR1cm4gMFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBhYnNiICogTWF0aC5zcXJ0KDEgKyBhX292ZXJfYl9zcSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmVkMihfYSkge1xuICBpZiAoIShfYSBpbnN0YW5jZW9mIFNxTWF0cml4KSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJ0cmVkMiByZXF1aXJlcyBhIFNxTWF0cml4XCIpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBjb25zdCBhID0gX2EuY29weSgpXG4gIC8vIElOVEVHRVIgaSxqLGssbFxuICBsZXQgaSwgaiwgaywgbFxuICAvLyBJTlRFR0VSIG4sbnBcbiAgY29uc3QgbiA9IGEuZGltXG4gIC8vIFJFQUwgYShucCxucCksZChucCksZShucClcbiAgLy8gY29uc3QgZCA9IEFycmF5KG4pLmZpbGwoMClcbiAgLy8gY29uc3QgZSA9IEFycmF5KG4pLmZpbGwoMClcbiAgY29uc3QgZCA9IG5ldyBGbG9hdDMyQXJyYXkobikuZmlsbCgwKVxuICBjb25zdCBlID0gbmV3IEZsb2F0MzJBcnJheShuKS5maWxsKDApXG4gIC8vIFJFQUwgZixnLGgsaGgsc2NhbGVcbiAgbGV0IGYsIGcsIGgsIGhoLCBzY2FsZVxuICAvLyBkbyBpPW4sMiwtMVxuICBmb3IgKGkgPSBuIC0gMTsgaSA+PSAxOyBpLS0pIHtcbiAgICAvLyBsPWktMVxuICAgIGwgPSBpIC0gMVxuICAgIC8vIGg9MC5cbiAgICBoID0gMFxuICAgIC8vIHNjYWxlPTAuXG4gICAgc2NhbGUgPSAwXG4gICAgLy8gaWYgKGwuZ3QuMSkgdGhlblxuICAgIGlmIChsID4gMCkge1xuICAgICAgLy8gZG8gaz0xLGxcbiAgICAgIGZvciAoayA9IDA7IGsgPD0gbDsgaysrKSB7XG4gICAgICAgIC8vIHNjYWxlPXNjYWxlK2FicyhhKGksaykpXG4gICAgICAgIHNjYWxlICs9IE1hdGguYWJzKGEuZ2V0KGssIGkpKVxuICAgICAgICAvLyBlbmQgZG9cbiAgICAgIH1cbiAgICAgIC8vIGlmIChzY2FsZS5lcS4wLikgdGhlblxuICAgICAgaWYgKHNjYWxlID09IDApIHtcbiAgICAgICAgLy8gZShpKT1hKGksbClcbiAgICAgICAgZVtpXSA9IGEuZ2V0KGwsIGkpXG4gICAgICAgIC8vIGVsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRvIGs9MSxsXG4gICAgICAgIGZvciAoayA9IDA7IGsgPD0gbDsgaysrKSB7XG4gICAgICAgICAgLy8gYShpLGspPWEoaSxrKS9zY2FsZVxuICAgICAgICAgIGxldCBuZXdfdmFsID0gYS5nZXQoaywgaSkgLyBzY2FsZVxuICAgICAgICAgIGEuc2V0KGssIGksIG5ld192YWwpXG4gICAgICAgICAgLy8gaD1oK2EoaSxrKSoqMlxuICAgICAgICAgIGggKz0gbmV3X3ZhbCAqIG5ld192YWxcbiAgICAgICAgICAvLyBlbmQgZG9cbiAgICAgICAgfVxuICAgICAgICAvLyBmPWEoaSxsKVxuICAgICAgICBmID0gYS5nZXQobCwgaSlcbiAgICAgICAgLy8gZz0tc2lnbihzcXJ0KGgpLGYpXG4gICAgICAgIGcgPSAtTWF0aC5zaWduKGYpICogTWF0aC5hYnMoTWF0aC5zcXJ0KGgpKVxuICAgICAgICAvLyBlKGkpPXNjYWxlKmdcbiAgICAgICAgZVtpXSA9IHNjYWxlICogZ1xuICAgICAgICAvLyBoPWgtZipnXG4gICAgICAgIGggLT0gZiAqIGdcbiAgICAgICAgLy8gYShpLGwpPWYtZ1xuICAgICAgICBhLnNldChsLCBpLCBmIC0gZylcbiAgICAgICAgLy8gZj0wLlxuICAgICAgICBmID0gMFxuICAgICAgICAvLyBkbyBqPTEsbFxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGw7IGorKykge1xuICAgICAgICAgIC8vIGEoaixpKT1hKGksaikvaFxuICAgICAgICAgIGEuc2V0KGksIGosIGEuZ2V0KGosIGkpIC8gaClcbiAgICAgICAgICAvLyBnPTAuXG4gICAgICAgICAgZyA9IDBcbiAgICAgICAgICAvLyBkbyBrPTEsalxuICAgICAgICAgIGZvciAoayA9IDA7IGsgPD0gajsgaysrKSB7XG4gICAgICAgICAgICAvLyBnPWcrYShqLGspKmEoaSxrKVxuICAgICAgICAgICAgZyArPSBhLmdldChrLCBqKSAqIGEuZ2V0KGssIGkpXG4gICAgICAgICAgICAvLyBlbmQgZG9cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZG8gaz1qKzEsbFxuICAgICAgICAgIGZvciAoayA9IGogKyAxOyBrIDw9IGw7IGsrKykge1xuICAgICAgICAgICAgLy8gZz1nK2EoayxqKSphKGksaylcbiAgICAgICAgICAgIGcgKz0gYS5nZXQoaiwgaykgKiBhLmdldChrLCBpKVxuICAgICAgICAgICAgLy8gZW5kIGRvXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGUoaik9Zy9oXG4gICAgICAgICAgZVtqXSA9IGcgLyBoXG4gICAgICAgICAgLy8gZj1mK2UoaikqYShpLGopXG4gICAgICAgICAgZiArPSBlW2pdICogYS5nZXQoaiwgaSlcbiAgICAgICAgICAvLyBlbmQgZG9cbiAgICAgICAgfVxuICAgICAgICAvLyBoaD1mLyhoK2gpXG4gICAgICAgIGhoID0gZiAvIChoICsgaClcbiAgICAgICAgLy8gZG8gaj0xLGxcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBsOyBqKyspIHtcbiAgICAgICAgICAvLyBmPWEoaSxqKVxuICAgICAgICAgIGYgPSBhLmdldChqLCBpKVxuICAgICAgICAgIC8vIGc9ZShqKS1oaCpmXG4gICAgICAgICAgZyA9IGVbal0gLSBoaCAqIGZcbiAgICAgICAgICAvLyBlKGopPWdcbiAgICAgICAgICBlW2pdID0gZ1xuICAgICAgICAgIC8vIGRvIGs9MSxqXG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPD0gajsgaysrKSB7XG4gICAgICAgICAgICAvLyBhKGosayk9YShqLGspLWYqZShrKS1nKmEoaSxrKVxuICAgICAgICAgICAgYS5zZXQoaywgaiwgYS5nZXQoaywgaikgLSBmICogZVtrXSAtIGcgKiBhLmdldChrLCBpKSlcbiAgICAgICAgICAgIC8vIGVuZCBkb1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBlbmQgZG9cbiAgICAgICAgfVxuICAgICAgICAvLyBlbmQgaWZcbiAgICAgIH1cbiAgICAgIC8vIGVsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZShpKT1hKGksbClcbiAgICAgIGVbaV0gPSBhLmdldChsLCBpKVxuICAgICAgLy8gZW5kIGlmXG4gICAgfVxuICAgIC8vIGQoaSk9aFxuICAgIGRbaV0gPSBoXG4gICAgLy8gZW5kIGRvXG4gIH1cbiAgLy8gZCgxKT0wXG4gIGRbMF0gPSAwXG4gIC8vIGUoMSk9MFxuICBlWzBdID0gMFxuICAvLyBkbyBpPTEsblxuICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgLy8gbD1pLTFcbiAgICBsID0gaSAtIDFcbiAgICAvLyBpZiAoZChpKS5uZS4wLikgdGhlblxuICAgIGlmIChkW2ldICE9IDApIHtcbiAgICAgIC8vIGRvIGo9MSxsXG4gICAgICBmb3IgKGogPSAwOyBqIDw9IGw7IGorKykge1xuICAgICAgICAvLyBnPTAuXG4gICAgICAgIGcgPSAwXG4gICAgICAgIC8vIGRvIGs9MSxsXG4gICAgICAgIGZvciAoayA9IDA7IGsgPD0gbDsgaysrKSB7XG4gICAgICAgICAgLy8gZj1mK2EoaSxrKSphKGssailcbiAgICAgICAgICBnICs9IGEuZ2V0KGssIGkpICogYS5nZXQoaiwgaylcbiAgICAgICAgICAvLyBlbmQgZG9cbiAgICAgICAgfVxuICAgICAgICAvLyBkbyBrPTEsbFxuICAgICAgICBmb3IgKGsgPSAwOyBrIDw9IGw7IGsrKykge1xuICAgICAgICAgIC8vIGEoayxqKT1hKGssaiktZyphKGssaSlcbiAgICAgICAgICBhLnNldChqLCBrLCBhLmdldChqLCBrKSAtIGcgKiBhLmdldChpLCBrKSlcbiAgICAgICAgICAvLyBlbmQgZG9cbiAgICAgICAgfVxuICAgICAgICAvLyBlbmQgZG9cbiAgICAgIH1cbiAgICAgIC8vIGVuZCBpZlxuICAgIH1cbiAgICAvLyBkKGkpPWEoaSxpKVxuICAgIGRbaV0gPSBhLmdldChpLCBpKVxuICAgIC8vIGEoaSxpKT0xLlxuICAgIGEuc2V0KGksIGksIDEpXG4gICAgLy8gZG8gaj0xLGxcbiAgICBmb3IgKGogPSAwOyBqIDw9IGw7IGorKykge1xuICAgICAgLy8gYShpLGopPTAuXG4gICAgICBhLnNldChqLCBpLCAwKVxuICAgICAgLy8gYShqLGkpPTAuXG4gICAgICBhLnNldChpLCBqLCAwKVxuICAgICAgLy8gZW5kIGRvXG4gICAgfVxuICAgIC8vIGVuZCBkb1xuICB9XG4gIHJldHVybiBbYSwgZCwgZSwgdHJ1ZV1cbn1cblxuZnVuY3Rpb24gdHFsaShkLCBlLCB6KSB7XG4gIGxldCBzdWNjZXNzID0gdHJ1ZVxuICAvLyBpZiAoISh6IGluc3RhbmNlb2YgU3FNYXRyaXggfHwgZCBpbnN0YW5jZW9mIEFycmF5IHx8IGUgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgLy8gICBjb25zb2xlLmVycm9yKFwiQmFkIHRxbGkgaW5wdXRzXCIpXG4gIC8vICAgcmV0dXJuIG51bGxcbiAgLy8gfVxuICAvLyBJTlRFR0VSIG4sbnBcbiAgbGV0IG4gPSB6LmRpbVxuICAvLyBSRUFMIGQobnApLGUobnApLHoobnAsbnApXG4gIC8vIElOVEVHRVIgaSxpdGVyLGssbCxtXG4gIGxldCBpLCBpdGVyLCBrLCBsLCBtXG4gIC8vIFJFQUwgYixjLGRkLGYsZyxwLHIscyxweXRoYWdcbiAgbGV0IGIsIGMsIGYsIGcsIHAsIHIsIHNcbiAgLy8gZG8gaT0yLG5cbiAgZm9yIChpID0gMTsgaSA8IG47IGkrKykge1xuICAgIC8vICAgZShpLTEpPWUoaSlcbiAgICBlW2kgLSAxXSA9IGVbaV1cbiAgICAvLyBlbmQgZG9cbiAgfVxuXG4gIC8vIGRvIGw9MSxuXG4gIGZvciAobCA9IDA7IGwgPCBuOyBsKyspIHtcbiAgICBpdGVyID0gMFxuICAgIHdoaWxlIChpdGVyIDwgMzApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZXIpXG4gICAgICAvLyAxICAgZG8gbT1sLG4tMVxuICAgICAgLy8gPz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/P1xuICAgICAgbGV0IHNraXAgPSBmYWxzZVxuICAgICAgZm9yIChtID0gbDsgbSA8IG4gLSAxOyBtKyspIHtcbiAgICAgICAgLy8gZGQ9YWJzKGQobSkpK2FicyhkKG0rMSkpXG4gICAgICAgIGNvbnN0IGRkID0gTWF0aC5mcm91bmQoTWF0aC5hYnMoZFttXSkgKyBNYXRoLmFicyhkW20gKyAxXSkpXG4gICAgICAgIC8vIGlmIChhYnMoZShtKSkrZGQuZXEuZGQpIGdvdG8gMlxuICAgICAgICAvLyAgICAgPz8/Pz8/Pz8/Pz8/Pz8/Pz8/XG4gICAgICAgIGlmIChNYXRoLmFicyhlW21dKSA8PSBFUFNfRUlHICogZGQpIHtcbiAgICAgICAgICAvLyBpZiAoTWF0aC5mcm91bmQoTWF0aC5hYnMoZVttXSkpICsgZGQgPT0gZGQpIHtcbiAgICAgICAgICBza2lwID0gdHJ1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgLy8gZW5kZG9cbiAgICAgIH1cbiAgICAgIC8vICAgbT1uXG4gICAgICBpZiAoIXNraXApIHtcbiAgICAgICAgbSA9IG4gLSAxXG4gICAgICB9XG4gICAgICAvLyAyICAgaWYgKG0ubmUubCkgdGhlblxuICAgICAgaWYgKG0gIT0gbCkge1xuICAgICAgICAvLyAhIGlmIChpdGVyLmVxLjMwKSBwYXVzZSAndG9vIG1hbnkgaXRlcmF0aW9ucyBpbiB0cWxpJ1xuICAgICAgICAvLyBpdGVyPWl0ZXIrMVxuICAgICAgICBpdGVyKytcbiAgICAgICAgLy8gZz0oZChsKzEpLWQobCkpLygyLiplKGwpKVxuICAgICAgICBnID0gKGRbbCArIDFdIC0gZFtsXSkgLyAoMi4wICogZVtsXSlcbiAgICAgICAgLy8gcj1weXRoYWcoZywxLilcbiAgICAgICAgciA9IHB5dGhhZyhnLCAxLjApXG4gICAgICAgIC8vIGc9ZChtKS1kKGwpK2UobCkvKGcrc2lnbihyLGcpKVxuICAgICAgICBnID0gZFttXSAtIGRbbF0gKyBlW2xdIC8gKGcgKyBNYXRoLnNpZ24oZykgKiBNYXRoLmFicyhyKSlcbiAgICAgICAgLy8gcz0xLlxuICAgICAgICBzID0gMS4wXG4gICAgICAgIC8vIGM9MS5cbiAgICAgICAgYyA9IDEuMFxuICAgICAgICAvLyBwPTAuXG4gICAgICAgIHAgPSAwLjBcbiAgICAgICAgLy8gZG8gaT1tLTEsbCwtMVxuICAgICAgICBsZXQgYmFja190b19zdGFydCA9IGZhbHNlXG4gICAgICAgIGZvciAoaSA9IG0gLSAxOyBpID49IGw7IGktLSkge1xuICAgICAgICAgIC8vIGY9cyplKGkpXG4gICAgICAgICAgZiA9IHMgKiBlW2ldXG4gICAgICAgICAgLy8gYj1jKmUoaSlcbiAgICAgICAgICBiID0gYyAqIGVbaV1cbiAgICAgICAgICAvLyByPXB5dGhhZyhmLGcpXG4gICAgICAgICAgciA9IHB5dGhhZyhmLCBnKVxuICAgICAgICAgIC8vIGUoaSsxKT1yXG4gICAgICAgICAgZVtpICsgMV0gPSByXG4gICAgICAgICAgLy8gaWYgKHIuZXEuMC4pIHRoZW5cbiAgICAgICAgICBpZiAociA9PSAwLjApIHtcbiAgICAgICAgICAgIC8vIGQoaSsxKT1kKGkrMSktcFxuICAgICAgICAgICAgZFtpICsgMV0gLT0gcFxuICAgICAgICAgICAgLy8gZShtKT0wLlxuICAgICAgICAgICAgZVttXSA9IDAuMFxuICAgICAgICAgICAgLy8gZ290byAxXG4gICAgICAgICAgICAvLyAhISEhISEhISEhISEhISEhISEhISEhISEhIVxuICAgICAgICAgICAgYmFja190b19zdGFydCA9IHRydWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAvLyBlbmQgaWZcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gcz1mL3JcbiAgICAgICAgICBzID0gZiAvIHJcbiAgICAgICAgICAvLyBjPWcvclxuICAgICAgICAgIGMgPSBnIC8gclxuICAgICAgICAgIC8vIGc9ZChpKzEpLXBcbiAgICAgICAgICBnID0gZFtpICsgMV0gLSBwXG4gICAgICAgICAgLy8gcj0oZChpKS1nKSpzKzIuKmMqYlxuICAgICAgICAgIHIgPSAoZFtpXSAtIGcpICogcyArIDIuMCAqIGMgKiBiXG4gICAgICAgICAgLy8gcD1zKnJcbiAgICAgICAgICBwID0gcyAqIHJcbiAgICAgICAgICAvLyBkKGkrMSk9ZytwXG4gICAgICAgICAgZFtpICsgMV0gPSBnICsgcFxuICAgICAgICAgIC8vIGc9YypyLWJcbiAgICAgICAgICBnID0gYyAqIHIgLSBiXG4gICAgICAgICAgLy8gZG8gaz0xLG5cbiAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAvLyBmPXooayxpKzEpXG4gICAgICAgICAgICBmID0gei5nZXQoaSArIDEsIGspXG4gICAgICAgICAgICAvLyB6KGssaSsxKT1zKnooayxpKStjKmZcbiAgICAgICAgICAgIHouc2V0KGkgKyAxLCBrLCBzICogei5nZXQoaSwgaykgKyBjICogZilcbiAgICAgICAgICAgIC8vIHooayxpKT1jKnooayxpKS1zKmZcbiAgICAgICAgICAgIHouc2V0KGksIGssIGMgKiB6LmdldChpLCBrKSAtIHMgKiBmKVxuICAgICAgICAgICAgLy8gZW5kIGRvXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGVuZCBkb1xuICAgICAgICB9XG4gICAgICAgIGlmIChiYWNrX3RvX3N0YXJ0KSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICAvLyBkKGwpPWQobCktcFxuICAgICAgICBkW2xdIC09IHBcbiAgICAgICAgLy8gZShsKT1nXG4gICAgICAgIGVbbF0gPSBnXG4gICAgICAgIC8vIGUobSk9MC5cbiAgICAgICAgZVttXSA9IDAuMFxuICAgICAgICAvLyBnb3RvIDFcbiAgICAgICAgLy8gISEhISEhISEhISEhISEhISEhISEhISEhISFcbiAgICAgICAgLy8gZW5kaWZcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICAvLyBlbmRkb1xuICAgIH1cbiAgICBpZiAoaXRlciA+IDIwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIml0ZXJcIiwgaXRlcilcbiAgICAgIHN1Y2Nlc3MgPSBmYWxzZVxuICAgICAgcmV0dXJuIFtkLCB6LCBzdWNjZXNzXVxuICAgIH1cbiAgfVxuICAvLyBjb25zb2xlLmxvZyhkLnNsaWNlKDAsIDEwKSwgei5kYXRhLnNsaWNlKDAsIDEwKSlcbiAgcmV0dXJuIFtkLCB6LCBzdWNjZXNzXVxuICAvLyBFTkRcbn1cblxuZnVuY3Rpb24gZWlnX3N5bShfYSkge1xuICBsZXQgZWlnX3N5bV9zdWNjZXNzID0gdHJ1ZVxuICBsZXQgW2EsIGQsIGUsIHRyZWQyX3N1Y2Nlc3NdID0gdHJlZDIoX2EpXG4gIGlmICghdHJlZDJfc3VjY2Vzcykge1xuICAgIGVpZ19zeW1fc3VjY2VzcyA9IGZhbHNlXG4gICAgcmV0dXJuIHsgZWlnX3ZhbHMsIGVpZ192ZWNzLCBlaWdfc3ltX3N1Y2Nlc3MgfVxuICB9XG4gIGxldCBbZWlnX3ZhbHMsIGVpZ192ZWNzLCB0cWxpX3N1Y2Nlc3NdID0gdHFsaShkLCBlLCBhKVxuICBpZiAoIXRxbGlfc3VjY2Vzcykge1xuICAgIGVpZ19zeW1fc3VjY2VzcyA9IGZhbHNlXG4gICAgcmV0dXJuIHsgZWlnX3ZhbHMsIGVpZ192ZWNzLCBlaWdfc3ltX3N1Y2Nlc3MgfVxuICB9XG4gIGVpZ192ZWNzID0gZWlnX3ZlY3MudHJhbnNwb3NlKClcbiAgLy8gY29uc29sZS5sb2coZWlnX3ZhbHMpXG4gIC8vIHNvcnRWYWxzVmVjc0lucGxhY2UoZWlnX3ZhbHMsIGVpZ192ZWNzKVxuICAvLyBjb25zb2xlLmxvZyhlaWdfdmFscylcbiAgcmV0dXJuIHsgZWlnX3ZhbHMsIGVpZ192ZWNzLCBlaWdfc3ltX3N1Y2Nlc3MgfVxufVxuXG4vLyBmdW5jdGlvbiBzb3J0VmFsc1ZlY3NJbnBsYWNlKHZhbHMsIHZlY3MpIHtcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWxzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgdmFsc1tpXSA9IFt2YWxzW2ldLCBpXVxuLy8gICB9XG4vLyAgIHZhbHMuc29ydCgoYSwgYikgPT4gKGFbMF0gPCBiWzBdID8gLTEgOiAxKSlcbi8vICAgbGV0IEJfY29weSA9IHZlY3MuY29weSgpXG4vLyAgIGZvciAobGV0IGogPSAwOyBqIDwgdmFscy5sZW5ndGg7IGorKykge1xuLy8gICAgIGxldCBzb3J0X2lkeCA9IHZhbHNbal1bMV1cbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIHZlY3Muc2V0KGksIHNvcnRfaWR4LCBCX2NvcHkuZ2V0KGksIGopKVxuLy8gICAgIH1cbi8vICAgICB2YWxzW2pdID0gdmFsc1tqXVswXVxuLy8gICB9XG4vLyB9XG4iLCJleHBvcnQgZnVuY3Rpb24gYm94X211bGxlcigpIHtcbiAgbGV0IHUwID0gTWF0aC5yYW5kb20oKVxuICBsZXQgdTEgPSBNYXRoLnJhbmRvbSgpXG4gIC8vIGxldCBwYXJ0MCA9ICgtMi4wICogdTAubG4oKSkuc3FydCgpXG4gIGxldCBwYXJ0MCA9IE1hdGguc3FydCgtMi4wICogTWF0aC5sb2codTApKVxuICBsZXQgcGFydDEgPSAyLjAgKiBNYXRoLlBJICogdTFcbiAgbGV0IHowID0gcGFydDAgKiBNYXRoLmNvcyhwYXJ0MSlcbiAgbGV0IHoxID0gcGFydDAgKiBNYXRoLnNpbihwYXJ0MSlcblxuICByZXR1cm4gRmxvYXQzMkFycmF5LmZyb20oW3owLCB6MV0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kX25vcm1hbChuKSB7XG4gIGNvbnN0IHJlcyA9IG5ldyBGbG9hdDMyQXJyYXkobilcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBwYWlyID0gYm94X211bGxlcigpXG4gICAgcmVzW2ldID0gcGFpclswXVxuICAgIGlmIChpICsgMSA+PSBuKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgICBpKytcbiAgICByZXNbaV0gPSBwYWlyWzFdXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuIiwiLy8ge1xuLy8gICBhY2tsZXk6IFwiQWNrbGV5XCIsXG4vLyAgIGJvaGFjaGV2c2t5MTogXCJCb2hhY2hldnNreSBOby4xXCIsXG4vLyAgIGdyaWV3YW5rOiBcIkdyaWV3YW5rXCIsXG4vLyAgIHJhc3RyaWdpbjogXCJSYXN0cmlnaW5cIixcbi8vIH1cblxuZXhwb3J0IGNvbnN0IG9iakZucyA9IHtcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9hY2tsZXkuaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL0NvZGUvYWNrbGV5bS5odG1sXG4gIGFja2xleTogKGlucHV0cykgPT4ge1xuICAgIC8vIGRlZmF1bHQgYT0yMCwgYj0wLjIsIGM9MnBpXG4gICAgY29uc3QgYSA9IDIwMDAwMDAsXG4gICAgICBiID0gMC4yLFxuICAgICAgYyA9IDIgKiBNYXRoLlBJXG4gICAgLy8gbGV0IGQgPSBpbnB1dHMubGVuZ3RoXG4gICAgY29uc3QgZCA9IDIsXG4gICAgICBkX2ludiA9IDAuNSAvLyAoMSAvIGQpXG4gICAgbGV0IHN1bTEgPSAwLFxuICAgICAgc3VtMiA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGQ7IGkrKykge1xuICAgICAgbGV0IHhpID0gaW5wdXRzW2ldXG4gICAgICBzdW0xICs9IHhpICogeGlcbiAgICAgIHN1bTIgKz0gTWF0aC5jb3MoYyAqIHhpKVxuICAgIH1cbiAgICAvLyBsZXQgZF9pbnYgPSAxIC8gZFxuICAgIGxldCB0ZXJtMSA9IC1hICogTWF0aC5leHAoLWIgKiBNYXRoLnNxcnQoc3VtMSAqIGRfaW52KSksXG4gICAgICB0ZXJtMiA9IC1NYXRoLmV4cChzdW0yICogZF9pbnYpXG4gICAgcmV0dXJuIHRlcm0xICsgdGVybTIgKyBhICsgTWF0aC5FXG4gIH0sXG4gIC8vIGh0dHA6Ly9iZW5jaG1hcmtmY25zLnh5ei9iZW5jaG1hcmtmY25zL2JvaGFjaGV2c2t5bjFmY24uaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL0NvZGUvYm9oYTFtLmh0bWxcbiAgYm9oYWNoZXZza3kxOiAoaW5wdXRzKSA9PiB7XG4gICAgbGV0IHgxID0gaW5wdXRzWzBdXG4gICAgbGV0IHgyID0gaW5wdXRzWzFdXG5cbiAgICBsZXQgdGVybTEgPSB4MSAqIHgxXG4gICAgbGV0IHRlcm0yID0gMiAqIHgyICogeDJcbiAgICBsZXQgdGVybTMgPSAtMC4zICogTWF0aC5jb3MoMyAqIE1hdGguUEkgKiB4MSlcbiAgICBsZXQgdGVybTQgPSAtMC40ICogTWF0aC5jb3MoNCAqIE1hdGguUEkgKiB4MilcblxuICAgIHJldHVybiB0ZXJtMSArIHRlcm0yICsgdGVybTMgKyB0ZXJtNCArIDAuN1xuICB9LFxuICBncmlld2FuazogKGlucHV0cykgPT4ge1xuICAgIGxldCBkID0gaW5wdXRzLmxlbmd0aFxuICAgIGxldCBzdW0gPSAwXG4gICAgbGV0IHByb2QgPSAxXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIGxldCB4aSA9IGlucHV0c1tpXVxuICAgICAgc3VtICs9ICh4aSAqIHhpKSAvIDQwMDBcbiAgICAgIHByb2QgKj0gTWF0aC5jb3MoeGkgLyBNYXRoLnNxcnQoaSArIDEpKVxuICAgIH1cbiAgICByZXR1cm4gc3VtIC0gcHJvZCArIDFcbiAgfSxcbiAgcmFzdHJpZ2luOiAoaW5wdXRzKSA9PiB7XG4gICAgbGV0IGQgPSBpbnB1dHMubGVuZ3RoXG4gICAgbGV0IHN1bSA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGQ7IGkrKykge1xuICAgICAgbGV0IHhpID0gaW5wdXRzW2ldXG4gICAgICBzdW0gKz0geGkgKiB4aSAtIDEwICogTWF0aC5jb3MoMiAqIE1hdGguUEkgKiB4aSlcbiAgICB9XG4gICAgcmV0dXJuIDEwICogZCArIHN1bVxuICB9LFxufVxuXG4vLyBmYW5jeSBuYW1lcyBmb3Igc2VsZWN0IG1lbnVcbm9iakZucy5hY2tsZXkuZmFuY3lOYW1lID0gXCJBY2tsZXlcIlxub2JqRm5zLmJvaGFjaGV2c2t5MS5mYW5jeU5hbWUgPSBcIkJvaGFjaGV2c2t5IE5vLjFcIlxub2JqRm5zLmdyaWV3YW5rLmZhbmN5TmFtZSA9IFwiR3JpZXdhbmtcIlxub2JqRm5zLnJhc3RyaWdpbi5mYW5jeU5hbWUgPSBcIlJhc3RyaWdpblwiXG5cbi8vIGZuTGltcyBmb3IgZGlzcGxheSBsaW1pdHNcbm9iakZucy5hY2tsZXkueHlMaW0gPSAzMi43Njhcbm9iakZucy5ib2hhY2hldnNreTEueHlMaW0gPSAxMDBcbm9iakZucy5yYXN0cmlnaW4ueHlMaW0gPSA1LjEyXG5vYmpGbnMuZ3JpZXdhbmsueHlMaW0gPSA2MDBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ01BIH0gZnJvbSBcIi4uLy4uL2pzL2NtYS1saWIuanNcIlxuaW1wb3J0IHsgb2JqRm5zIH0gZnJvbSBcIi4vb2JqLWZucy5qc1wiXG5cbmNvbnNvbGUubG9nKG5ldyBDTUEoWzAsIDBdLCAxLCAxMCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpKVxuIl0sIm5hbWVzIjpbInJhbmRfbm9ybWFsIiwiRVBTX0NNQSIsIl9NRUFOX01BWCIsIl9TSUdNQV9NQVgiLCJfVkFMX01BWCIsIkVQU19FSUciLCJNYXRoIiwiZnJvdW5kIiwiQ01BIiwibWVhbiIsInNpZ21hIiwicG9wc2l6ZSIsInVuZGVmaW5lZCIsImNvdiIsInJuZyIsImNvbnNvbGUiLCJhc3NlcnQiLCJsZW5ndGgiLCJldmVyeSIsIngiLCJhYnMiLCJuX2RpbSIsImZsb29yIiwibG9nIiwibXUiLCJ3ZWlnaHRzX3ByaW1lIiwiRmxvYXQzMkFycmF5IiwiaSIsImdldF9tdV9lZmYiLCJhcnIiLCJyZWR1Y2UiLCJhIiwiYiIsIm1hcCIsIm11X2VmZiIsInNsaWNlIiwibXVfZWZmX21pbnVzIiwiYWxwaGFfY292IiwiYzEiLCJjbXUiLCJtaW4iLCJtaW5fYWxwaGEiLCJwb3NpdGl2ZV9zdW0iLCJmaWx0ZXIiLCJuZWdhdGl2ZV9zdW0iLCJ3ZWlnaHRzIiwiY20iLCJjX3NpZ21hIiwiZF9zaWdtYSIsIm1heCIsInNxcnQiLCJjYyIsImNoaV9uIiwicF9zaWdtYSIsImZpbGwiLCJwYyIsIkMiLCJFeWUiLCJzaGFwZSIsImciLCJuZWVkc19kZWNvbXAiLCJhdmdTeW1tZXJpYyIsImVpZ19vYmoiLCJlaWdfc3ltIiwiZWlnX3N5bV9zdWNjZXNzIiwiRDIiLCJlaWdfdmFscyIsIkQiLCJCIiwiZWlnX3ZlY3MiLCJjb3B5IiwiaW5uZXIiLCJqIiwic2V0IiwiZ2V0IiwibXVsTWF0IiwidHJhbnNwb3NlIiwiQkQiLCJlaWdTdWNjZXNzIiwiX2VpZ2VuX2RlY29tcG9zaXRpb24iLCJ6IiwieSIsIm11bFZlYyIsInZhbCIsIl9zYW1wbGVfc29sdXRpb24iLCJzb2xfc2NvcmVfYXJyYXkiLCJzb3J0Iiwic2NvcmUiLCJ5X2siLCJzb2wiLCJzb2x1dGlvbiIsInB1c2giLCJ5X3ciLCJDXzIiLCJ0ZW1wX2FyciIsImYwIiwiZjEiLCJub3JtX3Bfc2lnbWEiLCJleHAiLCJoX3NpZ21hX2NvbmRfbGVmdCIsImhfc2lnbWFfY29uZF9yaWdodCIsImhfc2lnbWEiLCJ0ZW1wX21hdCIsInN1bSIsImsiLCJjb2xfbm9ybXMiLCJjb2xfbm9ybSIsIndfaW8iLCJjb25kX2ZhY3RvciIsImRlbHRhX2hfc2lnbWEiLCJyYW5rX29uZSIsInJhbmtfbXUiLCJ3dF9zdW0iLCJpZHgiLCJkYXRhIiwiU3FNYXRyaXgiLCJkYXRhX2xlbl9zcXJ0IiwiZGltIiwiZnJvbSIsInJvdyIsImNvbCIsIm90aGVyIiwiZXJyb3IiLCJhZGRfZGF0YSIsInYiLCJyZXMiLCJtIiwibiIsInAiLCJjIiwibmV3X21hdCIsImF2Z1ZhbCIsInMiLCJzZXAiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwiU3FNYXRyaXhGcm9tRGlhZyIsImRpYWciLCJweXRoYWciLCJhYnNhIiwiYWJzYiIsImFfb3Zlcl9iIiwiYV9vdmVyX2Jfc3EiLCJ0cmVkMiIsIl9hIiwibCIsImQiLCJlIiwiZiIsImgiLCJoaCIsInNjYWxlIiwibmV3X3ZhbCIsInNpZ24iLCJ0cWxpIiwic3VjY2VzcyIsIml0ZXIiLCJyIiwic2tpcCIsImRkIiwiYmFja190b19zdGFydCIsInRyZWQyX3N1Y2Nlc3MiLCJ0cWxpX3N1Y2Nlc3MiLCJib3hfbXVsbGVyIiwidTAiLCJyYW5kb20iLCJ1MSIsInBhcnQwIiwicGFydDEiLCJQSSIsInowIiwiY29zIiwiejEiLCJzaW4iLCJwYWlyIiwib2JqRm5zIiwiYWNrbGV5IiwiaW5wdXRzIiwiZF9pbnYiLCJzdW0xIiwic3VtMiIsInhpIiwidGVybTEiLCJ0ZXJtMiIsIkUiLCJib2hhY2hldnNreTEiLCJ4MSIsIngyIiwidGVybTMiLCJ0ZXJtNCIsImdyaWV3YW5rIiwicHJvZCIsInJhc3RyaWdpbiIsImZhbmN5TmFtZSIsInh5TGltIl0sInNvdXJjZVJvb3QiOiIifQ==