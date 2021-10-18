"use strict";
(self["webpackChunkwebpack_test"] = self["webpackChunkwebpack_test"] || []).push([["src_js_cma-lib_js"],{

/***/ "./src/js/cma-lib.js":
/*!***************************!*\
  !*** ./src/js/cma-lib.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CMA": () => (/* binding */ CMA),
/* harmony export */   "getDefaultCMAPopsize": () => (/* binding */ getDefaultCMAPopsize)
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


function getDefaultCMAPopsize(n_dim) {
  return 4 + Math.floor(3 * Math.log(n_dim)); // (eq. 48)
}

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX2NtYS1saWJfanMuOGU3YjYyNGQ5NDBkZDMyNTMzNGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQyxPQUFPLEdBQUcsSUFBaEI7QUFBQSxJQUNFO0FBQ0FDLFNBQVMsR0FBRyxHQUZkO0FBQUEsSUFHRTtBQUNBQyxVQUFVLEdBQUcsR0FKZjtBQUFBLElBS0VDLFFBQVEsR0FBRyxJQUxiLEVBT0E7QUFDQTs7QUFDQSxJQUFNQyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxDQUFZLE9BQVosQ0FBaEIsRUFDQTtBQUNBOztBQUVPLElBQU1DLEdBQWI7QUFDRSxpQkFTRTtBQUFBLFFBUEFDLElBT0EsdUVBUE8sRUFPUDtBQUFBLFFBTkFDLEtBTUEsdUVBTlEsQ0FNUjtBQUFBLFFBSEFDLE9BR0EsdUVBSFVDLFNBR1Y7QUFBQSxRQUZBQyxHQUVBLHVFQUZNRCxTQUVOO0FBQUEsUUFGaUI7QUFDakJFLElBQUFBLEdBQ0EsQ0FESTtBQUNKOztBQUFBOztBQUNBQyxJQUFBQSxPQUFPLENBQUNDLE1BQVIsQ0FBZVAsSUFBSSxDQUFDUSxNQUFMLEdBQWMsQ0FBN0IsRUFBZ0MsMkNBQWhDO0FBQ0FGLElBQUFBLE9BQU8sQ0FBQ0MsTUFBUixDQUNFUCxJQUFJLENBQUNTLEtBQUwsQ0FBVyxVQUFDQyxDQUFEO0FBQUEsYUFBT2IsSUFBSSxDQUFDYyxHQUFMLENBQVNELENBQVQsSUFBYyxJQUFyQjtBQUFBLEtBQVgsQ0FERixFQUVFLG1EQUZGO0FBSUEsU0FBS1YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS1ksS0FBTCxHQUFhWixJQUFJLENBQUNRLE1BQWxCOztBQUNBLFFBQUlOLE9BQU8sSUFBSUMsU0FBZixFQUEwQjtBQUN4QkQsTUFBQUEsT0FBTyxHQUFHLElBQUlMLElBQUksQ0FBQ2dCLEtBQUwsQ0FBVyxJQUFJaEIsSUFBSSxDQUFDaUIsR0FBTCxDQUFTLEtBQUtGLEtBQWQsQ0FBZixD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QUNBdkMsSUFBQUEsR0FBRyxDQUFDbEcsQ0FBRCxDQUFILEdBQVNvSixJQUFJLENBQUMsQ0FBRCxDQUFiOztBQUNBLFFBQUlwSixDQUFDLEdBQUcsQ0FBSixJQUFTb0csQ0FBYixFQUFnQjtBQUNkO0FBQ0Q7O0FBQ0RwRyxJQUFBQSxDQUFDO0FBQ0RrRyxJQUFBQSxHQUFHLENBQUNsRyxDQUFELENBQUgsR0FBU29KLElBQUksQ0FBQyxDQUFELENBQWI7QUFDRDs7QUFDRCxTQUFPbEQsR0FBUDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL2pzL2NtYS1saWIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL2pzL3JhbmQtbm9ybWFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJhbmRfbm9ybWFsIH0gZnJvbSBcIi4vcmFuZC1ub3JtYWwuanNcIlxuXG5jb25zdCBFUFNfQ01BID0gMWUtOCxcbiAgLy8gX01FQU5fTUFYID0gMWUzMixcbiAgX01FQU5fTUFYID0gMWU4LFxuICAvLyBfU0lHTUFfTUFYID0gMWUzMlxuICBfU0lHTUFfTUFYID0gMWU4LFxuICBfVkFMX01BWCA9IDFlMTZcblxuLy8gY29uc3QgRVBTX0VJRyA9IE1hdGguc3FydChOdW1iZXIuRVBTSUxPTilcbi8vIGNvbnN0IEVQU19FSUcgPSBOdW1iZXIuRVBTSUxPTlxuY29uc3QgRVBTX0VJRyA9IE1hdGguZnJvdW5kKDkuNzdlLTQpXG4vLyBjb25zdCBFUFNfRUlHID0gTWF0aC5mcm91bmQoTWF0aC5zcXJ0KDkuNzdlLTQpKVxuLy8gY29uc3QgRVBTX0VJRyA9IE1hdGguZnJvdW5kKDIgKiogLTIzKVxuXG5leHBvcnQgY2xhc3MgQ01BIHtcbiAgY29uc3RydWN0b3IoXG4gICAgLy8gbWVhbjogLFxuICAgIG1lYW4gPSBbXSwgLy8gMWQgYXJyYXkgKGFicyA8IDFlMzIsIGxlbiA+IDEpXG4gICAgc2lnbWEgPSAxLCAvLyBmbG9hdCA+IDBcbiAgICAvLyBuX21heF9yZXNhbXBsaW5nID0gMTAwLCAvL1xuICAgIC8vIHBvcHNpemUgPSB1bmRlZmluZWQsIC8vIE9wdGlvbmFsW2ludF0gPSBOb25lICggPiAwIClcbiAgICBwb3BzaXplID0gdW5kZWZpbmVkLFxuICAgIGNvdiA9IHVuZGVmaW5lZCwgLy8gT3B0aW9uYWxbbnAubmRhcnJheV0gPSBOb25lXG4gICAgcm5nIC8vIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yIGZvciB0ZXN0aW5nXG4gICkge1xuICAgIGNvbnNvbGUuYXNzZXJ0KG1lYW4ubGVuZ3RoID4gMSwgXCJtZWFuIGFycmF5IGxlbmd0aCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAxLlwiKVxuICAgIGNvbnNvbGUuYXNzZXJ0KFxuICAgICAgbWVhbi5ldmVyeSgoeCkgPT4gTWF0aC5hYnMoeCkgPCAxZTMyKSxcbiAgICAgIFwiYWxsIG1lYW4gdmFsdWUgbWFnbml0dWRlcyBtdXN0IGJlIGxlc3MgdGhhbiAxZTMyLlwiXG4gICAgKVxuICAgIHRoaXMubWVhbiA9IG1lYW5cbiAgICB0aGlzLm5fZGltID0gbWVhbi5sZW5ndGhcbiAgICBpZiAocG9wc2l6ZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBvcHNpemUgPSA0ICsgTWF0aC5mbG9vcigzICogTWF0aC5sb2codGhpcy5uX2RpbSkpIC8vIChlcS4gNDgpXG4gICAgICAvLyBwb3BzaXplID0gTWF0aC5yb3VuZChwb3BzaXplTXVsdGlwbGllciAqIHBvcHNpemUpXG4gICAgfVxuICAgIGNvbnNvbGUuYXNzZXJ0KHBvcHNpemUgPiAwLCBcInBvcHNpemUgbXVzdCBiZSBub24temVybyBwb3NpdGl2ZSB2YWx1ZS5cIilcbiAgICB0aGlzLnBvcHNpemUgPSBwb3BzaXplXG5cbiAgICB0aGlzLm11ID0gTWF0aC5mbG9vcihwb3BzaXplIC8gMilcblxuICAgIGNvbnNvbGUuYXNzZXJ0KHNpZ21hID4gMCwgXCJzaWdtYSBtdXN0IGJlIG5vbi16ZXJvIHBvc2l0aXZlIHZhbHVlXCIpXG5cbiAgICAvLyAoZXEuNDkpXG4gICAgbGV0IHdlaWdodHNfcHJpbWUgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMucG9wc2l6ZSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9wc2l6ZTsgaSsrKSB7XG4gICAgICB3ZWlnaHRzX3ByaW1lW2ldID0gTWF0aC5sb2coKHBvcHNpemUgKyAxKSAvIDIpIC0gTWF0aC5sb2coaSArIDEpXG4gICAgfVxuICAgIC8vIG11X2VmZiAgICAgICA9IChucC5zdW0od2VpZ2h0c19wcmltZVs6bXVdKSAqKiAyKSAvIG5wLnN1bSh3ZWlnaHRzX3ByaW1lWzptdV0gKiogMilcbiAgICAvLyBtdV9lZmZfbWludXMgPSAobnAuc3VtKHdlaWdodHNfcHJpbWVbbXU6XSkgKiogMikgLyBucC5zdW0od2VpZ2h0c19wcmltZVttdTpdICoqIDIpXG4gICAgZnVuY3Rpb24gZ2V0X211X2VmZihhcnIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGFyci5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAqKiAyIC9cbiAgICAgICAgYXJyLm1hcCgoeCkgPT4geCAqIHgpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpXG4gICAgICApXG4gICAgfVxuICAgIHRoaXMubXVfZWZmID0gZ2V0X211X2VmZih3ZWlnaHRzX3ByaW1lLnNsaWNlKDAsIHRoaXMubXUpKVxuICAgIGxldCBtdV9lZmZfbWludXMgPSBnZXRfbXVfZWZmKHdlaWdodHNfcHJpbWUuc2xpY2UodGhpcy5tdSkpXG4gICAgLy8gbGVhcm5pbmcgcmF0ZSBmb3IgdGhlIHJhbmstb25lIHVwZGF0ZVxuICAgIGxldCBhbHBoYV9jb3YgPSAyXG4gICAgdGhpcy5jMSA9IGFscGhhX2NvdiAvICgodGhpcy5uX2RpbSArIDEuMykgKiogMiArIHRoaXMubXVfZWZmKVxuICAgIC8vIGxlYXJuaW5nIHJhdGUgZm9yIHRoZSByYW5rLc68IHVwZGF0ZVxuICAgIHRoaXMuY211ID0gTWF0aC5taW4oXG4gICAgICAxIC0gdGhpcy5jMSAtIDFlLTgsIC8vIDFlLTggaXMgZm9yIGxhcmdlIHBvcHNpemUuXG4gICAgICAoYWxwaGFfY292ICogKHRoaXMubXVfZWZmIC0gMiArIDEgLyB0aGlzLm11X2VmZikpIC9cbiAgICAgICAgKCh0aGlzLm5fZGltICsgMikgKiogMiArIChhbHBoYV9jb3YgKiB0aGlzLm11X2VmZikgLyAyKVxuICAgIClcbiAgICBjb25zb2xlLmFzc2VydChcbiAgICAgIHRoaXMuYzEgPD0gMSAtIHRoaXMuY211LFxuICAgICAgXCJpbnZhbGlkIGxlYXJuaW5nIHJhdGUgZm9yIHRoZSByYW5rLW9uZSB1cGRhdGVcIlxuICAgIClcbiAgICBjb25zb2xlLmFzc2VydChcbiAgICAgIHRoaXMuY211IDw9IDEgLSB0aGlzLmMxLFxuICAgICAgXCJpbnZhbGlkIGxlYXJuaW5nIHJhdGUgZm9yIHRoZSByYW5rLc68IHVwZGF0ZVwiXG4gICAgKVxuXG4gICAgbGV0IG1pbl9hbHBoYSA9IE1hdGgubWluKFxuICAgICAgMSArIHRoaXMuYzEgLyB0aGlzLmNtdSwgLy8gZXEuNTBcbiAgICAgIDEgKyAoMiAqIG11X2VmZl9taW51cykgLyAodGhpcy5tdV9lZmYgKyAyKSwgLy8gZXEuNTFcbiAgICAgICgxIC0gdGhpcy5jMSAtIHRoaXMuY211KSAvICh0aGlzLm5fZGltICogdGhpcy5jbXUpIC8vIGVxLjUyXG4gICAgKVxuXG4gICAgLy8gKGVxLjUzKVxuICAgIC8vIGxldCBwb3NpdGl2ZV9zdW0gPSBucC5zdW0od2VpZ2h0c19wcmltZVt3ZWlnaHRzX3ByaW1lID4gMF0pXG4gICAgbGV0IHBvc2l0aXZlX3N1bSA9IHdlaWdodHNfcHJpbWVcbiAgICAgIC5maWx0ZXIoKHgpID0+IHggPiAwKVxuICAgICAgLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpXG4gICAgbGV0IG5lZ2F0aXZlX3N1bSA9IE1hdGguYWJzKFxuICAgICAgd2VpZ2h0c19wcmltZS5maWx0ZXIoKHgpID0+IHggPCAwKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKVxuICAgIClcbiAgICAvLyB0aGlzLndlaWdodHMgPSBucC53aGVyZShcbiAgICAvLyAgIHdlaWdodHNfcHJpbWUgPj0gMCxcbiAgICAvLyAgICgxIC8gcG9zaXRpdmVfc3VtKSAqIHdlaWdodHNfcHJpbWUsXG4gICAgLy8gICAobWluX2FscGhhIC8gbmVnYXRpdmVfc3VtKSAqIHdlaWdodHNfcHJpbWVcbiAgICAvLyApXG4gICAgdGhpcy53ZWlnaHRzID0gd2VpZ2h0c19wcmltZS5tYXAoKHgpID0+XG4gICAgICB4ID49IDAgPyAoMSAvIHBvc2l0aXZlX3N1bSkgKiB4IDogKG1pbl9hbHBoYSAvIG5lZ2F0aXZlX3N1bSkgKiB4XG4gICAgKVxuICAgIHRoaXMuY20gPSAxIC8vIChlcS4gNTQpXG5cbiAgICAvLyBsZWFybmluZyByYXRlIGZvciB0aGUgY3VtdWxhdGlvbiBmb3IgdGhlIHN0ZXAtc2l6ZSBjb250cm9sIChlcS41NSlcbiAgICB0aGlzLmNfc2lnbWEgPSAodGhpcy5tdV9lZmYgKyAyKSAvICh0aGlzLm5fZGltICsgdGhpcy5tdV9lZmYgKyA1KVxuICAgIHRoaXMuZF9zaWdtYSA9XG4gICAgICAxICtcbiAgICAgIDIgKiBNYXRoLm1heCgwLCBNYXRoLnNxcnQoKHRoaXMubXVfZWZmIC0gMSkgLyAodGhpcy5uX2RpbSArIDEpKSAtIDEpICtcbiAgICAgIHRoaXMuY19zaWdtYVxuICAgIGNvbnNvbGUuYXNzZXJ0KFxuICAgICAgdGhpcy5jX3NpZ21hIDwgMSxcbiAgICAgIFwiaW52YWxpZCBsZWFybmluZyByYXRlIGZvciBjdW11bGF0aW9uIGZvciB0aGUgc3RlcC1zaXplIGNvbnRyb2xcIlxuICAgIClcblxuICAgIC8vIGxlYXJuaW5nIHJhdGUgZm9yIGN1bXVsYXRpb24gZm9yIHRoZSByYW5rLW9uZSB1cGRhdGUgKGVxLjU2KVxuICAgIHRoaXMuY2MgPVxuICAgICAgKDQgKyB0aGlzLm11X2VmZiAvIHRoaXMubl9kaW0pIC9cbiAgICAgICh0aGlzLm5fZGltICsgNCArICgyICogdGhpcy5tdV9lZmYpIC8gdGhpcy5uX2RpbSlcbiAgICBjb25zb2xlLmFzc2VydChcbiAgICAgIHRoaXMuY2MgPD0gMSxcbiAgICAgIFwiaW52YWxpZCBsZWFybmluZyByYXRlIGZvciBjdW11bGF0aW9uIGZvciB0aGUgcmFuay1vbmUgdXBkYXRlXCJcbiAgICApXG5cbiAgICAvLyBzZWxmLl9uX2RpbSA9IG5fZGltXG4gICAgLy8gc2VsZi5fcG9wc2l6ZSA9IHBvcHNpemVcbiAgICAvLyBzZWxmLl9tdSA9IG11XG4gICAgLy8gc2VsZi5fbXVfZWZmID0gbXVfZWZmXG5cbiAgICAvLyBzZWxmLl9jYyA9IGNjXG4gICAgLy8gc2VsZi5fYzEgPSBjMVxuICAgIC8vIHNlbGYuX2NtdSA9IGNtdVxuICAgIC8vIHNlbGYuX2Nfc2lnbWEgPSBjX3NpZ21hXG4gICAgLy8gc2VsZi5fZF9zaWdtYSA9IGRfc2lnbWFcbiAgICAvLyBzZWxmLl9jbSA9IGNtXG5cbiAgICAvLyBFfHxOKDAsIEkpfHwgKHAuMjgpXG4gICAgdGhpcy5jaGlfbiA9XG4gICAgICBNYXRoLnNxcnQodGhpcy5uX2RpbSkgKlxuICAgICAgKDEuMCAtIDEuMCAvICg0LjAgKiB0aGlzLm5fZGltKSArIDEuMCAvICgyMS4wICogdGhpcy5uX2RpbSAqKiAyKSlcblxuICAgIC8vIHNlbGYuX3dlaWdodHMgPSB3ZWlnaHRzXG5cbiAgICAvLyBldm9sdXRpb24gcGF0aFxuICAgIC8vIHRoaXMucF9zaWdtYSA9IG5wLnplcm9zKG5fZGltKVxuICAgIHRoaXMucF9zaWdtYSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5uX2RpbSkuZmlsbCgwLjApXG4gICAgLy8gdGhpcy5wYyA9IG5wLnplcm9zKG5fZGltKVxuICAgIHRoaXMucGMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubl9kaW0pLmZpbGwoMC4wKVxuXG4gICAgLy8gc2VsZi5fbWVhbiA9IG1lYW5cblxuICAgIGlmIChjb3YgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyB0aGlzLkMgPSBucC5leWUobl9kaW0pXG4gICAgICB0aGlzLkMgPSBFeWUodGhpcy5uX2RpbSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5hc3NlcnQoXG4gICAgICAgIGNvdi5zaGFwZSA9PSAobl9kaW0sIG5fZGltKSxcbiAgICAgICAgXCJJbnZhbGlkIHNoYXBlIG9mIGNvdmFyaWFuY2UgbWF0cml4XCJcbiAgICAgIClcbiAgICAgIHRoaXMuQyA9IGNvdlxuICAgIH1cblxuICAgIHRoaXMuc2lnbWEgPSBzaWdtYVxuICAgIC8vIHRoaXMuRCA9IHVuZGVmaW5lZFxuICAgIC8vIHRoaXMuQiA9IHVuZGVmaW5lZFxuXG4gICAgLy8gLy8gYm91bmRzIGNvbnRhaW5zIGxvdyBhbmQgaGlnaCBvZiBlYWNoIHBhcmFtZXRlci5cbiAgICAvLyBjb25zb2xlLmFzc2VydChib3VuZHMgPT0gdW5kZWZpbmVkIHx8IF9pc192YWxpZF9ib3VuZHMoYm91bmRzLCBtZWFuKSwgXCJpbnZhbGlkIGJvdW5kc1wiKVxuICAgIC8vIHRoaXMuYm91bmRzID0gYm91bmRzXG4gICAgLy8gdGhpcy5uX21heF9yZXNhbXBsaW5nID0gbl9tYXhfcmVzYW1wbGluZ1xuXG4gICAgdGhpcy5nID0gMFxuICAgIC8vIHRoaXMucm5nID0gbnAucmFuZG9tLlJhbmRvbVN0YXRlKHNlZWQpXG5cbiAgICAvLyAvLyBUZXJtaW5hdGlvbiBjcml0ZXJpYVxuICAgIC8vIHRoaXMudG9seCA9IDFlLTEyICogc2lnbWFcbiAgICAvLyB0aGlzLnRvbHh1cCA9IDFlNFxuICAgIC8vIHRoaXMudG9sZnVuID0gMWUtMTJcbiAgICAvLyB0aGlzLnRvbGNvbmRpdGlvbmNvdiA9IDFlMTRcblxuICAgIC8vIHRoaXMuZnVuaGlzdF90ZXJtID0gMTAgKyBNYXRoLmNlaWwoKDMwICogdGhpcy5uX2RpbSkgLyB0aGlzLnBvcHNpemUpXG4gICAgLy8gLy8gdGhpcy5mdW5oaXN0X3ZhbHVlcyA9IG5wLmVtcHR5KHNlbGYuX2Z1bmhpc3RfdGVybSAqIDIpXG4gICAgLy8gdGhpcy5mdW5oaXN0X3ZhbHVlcyA9IEFycmF5KHRoaXMuZnVuaGlzdF90ZXJtICogMilcblxuICAgIHRoaXMubmVlZHNfZGVjb21wID0gdHJ1ZVxuICAgIGlmIChybmcgIT0gbnVsbCkge1xuICAgICAgdGhpcy5ybmcgPSBybmdcbiAgICB9XG4gIH1cblxuICBfZWlnZW5fZGVjb21wb3NpdGlvbigpIHtcbiAgICAvLy0+IFR1cGxlW25wLm5kYXJyYXksIG5wLm5kYXJyYXldOlxuICAgIC8vIGlmICh0aGlzLl9CICE9IHVuZGVmaW5lZCAmJiB0aGlzLl9EICE9IHVuZGVmaW5lZCkge1xuICAgIC8vICAgcmV0dXJuIHRoaXMuX0IsIHRoaXMuX0RcbiAgICAvLyB9XG4gICAgaWYgKCF0aGlzLm5lZWRzX2RlY29tcCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyB0aGlzLl9DID0gKHRoaXMuX0MgKyB0aGlzLl9DLlQpIC8gMlxuICAgIC8vIG1ha2Ugc3ltbWV0cmljYWxcbiAgICAvLyB0aGlzLkMgPSBzY2FsZTJkKGFkZDJkKHRoaXMuQywgdHJhbnNwb3NlMmQodGhpcy5DKSksIDAuNSlcbiAgICB0aGlzLkMuYXZnU3ltbWVyaWMoKVxuICAgIC8vIEQyOiBlaWdlbnZhbHVlcywgQjogZWlnZW52ZWN0b3JzXG4gICAgLy8gbGV0IFtEMiwgQl0gPSBucC5saW5hbGcuZWlnaCh0aGlzLkMpXG4gICAgbGV0IGVpZ19vYmogPSBlaWdfc3ltKHRoaXMuQylcbiAgICBpZiAoIWVpZ19vYmouZWlnX3N5bV9zdWNjZXNzKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgLy8gbGV0IEQyID0gZWlnX29iai5laWdfdmFsc1xuICAgIGxldCBEMiA9IGVpZ19vYmouZWlnX3ZhbHMubWFwKCh4KSA9PiAoeCA8IDAgPyBFUFNfQ01BIDogeCkpXG4gICAgdGhpcy5EID0gRDIubWFwKCh4KSA9PiBNYXRoLnNxcnQoeCkpXG4gICAgLy8gZm9yIChsZXQgeCBvZiBlaWdfb2JqLmVpZ192YWxzKSB7XG4gICAgLy8gICBpZiAoIWlzRmluaXRlKHgpKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZWlnX3ZhbCBwcm9ibGVtXCIpXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIC8vIGZvciAobGV0IHggb2YgZWlnX29iai5laWdfdmVjcy5kYXRhKSB7XG4gICAgLy8gICBpZiAoIWlzRmluaXRlKHgpKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZWlnX3ZlYyBwcm9ibGVtXCIpXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIHRoaXMuQiA9IGVpZ19vYmouZWlnX3ZlY3MuY29weSgpXG4gICAgLy8gbGV0IEQgPSBNYXRoLnNxcnQobnAud2hlcmUoRDIgPCAwLCBFUFMsIEQyKSlcblxuICAgIC8vIHRoaXMuRCA9IEQyLm1hcCgoeCkgPT4ge1xuICAgIC8vICAgeCA8IDAgPyBFUFMgOiB4XG4gICAgLy8gfSkubWFwKCh4KSA9PiBNYXRoLnNxcnQoeCkpXG4gICAgLy8gdGhpcy5EID0gRFxuICAgIGxldCBpbm5lciA9IHRoaXMuQi5jb3B5KClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubl9kaW07IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm5fZGltOyBqKyspIHtcbiAgICAgICAgaW5uZXIuc2V0KGksIGosIGlubmVyLmdldChpLCBqKSAqIEQyW2pdKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuQyA9IGlubmVyLm11bE1hdCh0aGlzLkIudHJhbnNwb3NlKCkpXG4gICAgdGhpcy5CRCA9IHRoaXMuQi5jb3B5KClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubl9kaW07IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm5fZGltOyBqKyspIHtcbiAgICAgICAgdGhpcy5CRC5zZXQoaSwgaiwgdGhpcy5CRC5nZXQoaSwgaikgKiB0aGlzLkRbal0pXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubmVlZHNfZGVjb21wID0gZmFsc2VcbiAgICAvLyB0aGlzLkMgPSBucC5kb3QobnAuZG90KEIsIG5wLmRpYWcoRCAqKiAyKSksIEIuVClcblxuICAgIC8vIHJldHVybiBbQiwgRF1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgX3NhbXBsZV9zb2x1dGlvbigpIHtcbiAgICAvLyAtPiBucC5uZGFycmF5OlxuICAgIGNvbnN0IGVpZ1N1Y2Nlc3MgPSB0aGlzLl9laWdlbl9kZWNvbXBvc2l0aW9uKClcbiAgICBpZiAoIWVpZ1N1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBsZXQgeiA9XG4gICAgICB0aGlzLnJuZyA9PSBudWxsID8gcmFuZF9ub3JtYWwodGhpcy5uX2RpbSkgOiB0aGlzLnJuZy5nZXQodGhpcy5uX2RpbSkgLy8gfiBOKDAsIEkpXG4gICAgbGV0IHkgPSB0aGlzLkJELm11bFZlYyh6KVxuICAgIC8vIHkgPSBjYXN0KG5wLm5kYXJyYXksIEIuZG90KG5wLmRpYWcoRCkpKS5kb3QoeikgLy8gfiBOKDAsIEMpXG4gICAgLy8gbGV0IHggPSBbXVxuICAgIGxldCB4ID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLm5fZGltKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uX2RpbTsgaSsrKSB7XG4gICAgICAvLyB4LnB1c2godGhpcy5tZWFuW2ldICsgdGhpcy5zaWdtYSAqIHlbaV0pXG4gICAgICBsZXQgdmFsID0gdGhpcy5tZWFuW2ldICsgdGhpcy5zaWdtYSAqIHlbaV1cbiAgICAgIHZhbCA9IE1hdGgubWluKE1hdGgubWF4KHZhbCwgLV9WQUxfTUFYKSwgX1ZBTF9NQVgpXG4gICAgICAvLyBfVkFMX01BWFxuICAgICAgeFtpXSA9IHZhbFxuICAgIH1cbiAgICByZXR1cm4geFxuICB9XG5cbiAgYXNrKCkge1xuICAgIHJldHVybiB0aGlzLl9zYW1wbGVfc29sdXRpb24oKVxuICB9XG5cbiAgdGVsbChzb2xfc2NvcmVfYXJyYXkpIHtcbiAgICAvLyBcIlwiXCJUZWxsIGV2YWx1YXRpb24gdmFsdWVzXCJcIlwiXG5cbiAgICAvLyBhc3NlcnQgbGVuKHNvbHV0aW9ucykgPT0gc2VsZi5fcG9wc2l6ZSwgXCJNdXN0IHRlbGwgcG9wc2l6ZS1sZW5ndGggc29sdXRpb25zLlwiXG4gICAgLy8gZm9yIHMgaW4gc29sdXRpb25zOlxuICAgIC8vICAgICBhc3NlcnQgbnAuYWxsKFxuICAgIC8vICAgICAgICAgbnAuYWJzKHNbMF0pIDwgX01FQU5fTUFYXG4gICAgLy8gICAgICksIGZcIkFicyBvZiBhbGwgcGFyYW0gdmFsdWVzIG11c3QgYmUgbGVzcyB0aGFuIHtfTUVBTl9NQVh9IHRvIGF2b2lkIG92ZXJmbG93IGVycm9yc1wiXG5cbiAgICAvLyBzZWxmLl9nICs9IDFcbiAgICB0aGlzLmcrK1xuICAgIC8vIHNvbHV0aW9ucy5zb3J0KGtleT1sYW1iZGEgczogc1sxXSlcbiAgICBzb2xfc2NvcmVfYXJyYXkuc29ydCgoYSwgYikgPT4gYS5zY29yZSAtIGIuc2NvcmUpXG5cbiAgICAvLyAjIFN0b3JlcyAnYmVzdCcgYW5kICd3b3JzdCcgdmFsdWVzIG9mIHRoZVxuICAgIC8vICMgbGFzdCAnc2VsZi5fZnVuaGlzdF90ZXJtJyBnZW5lcmF0aW9ucy5cbiAgICAvLyBmdW5oaXN0X2lkeCA9IDIgKiAoc2VsZi5nZW5lcmF0aW9uICUgc2VsZi5fZnVuaGlzdF90ZXJtKVxuICAgIC8vIHNlbGYuX2Z1bmhpc3RfdmFsdWVzW2Z1bmhpc3RfaWR4XSA9IHNvbHV0aW9uc1swXVsxXVxuICAgIC8vIHNlbGYuX2Z1bmhpc3RfdmFsdWVzW2Z1bmhpc3RfaWR4ICsgMV0gPSBzb2x1dGlvbnNbLTFdWzFdXG5cbiAgICAvLyAjIFNhbXBsZSBuZXcgcG9wdWxhdGlvbiBvZiBzZWFyY2hfcG9pbnRzLCBmb3Igaz0xLCAuLi4sIHBvcHNpemVcbiAgICAvLyBCLCBEID0gc2VsZi5fZWlnZW5fZGVjb21wb3NpdGlvbigpXG4gICAgLy8gdGhpcy5fZWlnZW5fZGVjb21wb3NpdGlvbigpXG4gICAgY29uc3QgZWlnU3VjY2VzcyA9IHRoaXMuX2VpZ2VuX2RlY29tcG9zaXRpb24oKVxuICAgIGlmICghZWlnU3VjY2Vzcykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIC8vIHNlbGYuX0IsIHNlbGYuX0QgPSBOb25lLCBOb25lXG4gICAgdGhpcy5uZWVkc19kZWNvbXAgPSB0cnVlXG5cbiAgICAvLyB4X2sgPSBucC5hcnJheShbc1swXSBmb3IgcyBpbiBzb2x1dGlvbnNdKSAgIyB+IE4obSwgz4NeMiBDKVxuICAgIC8vIGxldCB4X2sgPSBzb2xfc2NvcmVfYXJyYXkubWFwKChvKSA9PiBvLnNvbHV0aW9uKVxuICAgIC8vIHlfayA9ICh4X2sgLSBzZWxmLl9tZWFuKSAvIHNlbGYuX3NpZ21hICAjIH4gTigwLCBDKVxuICAgIGxldCB5X2sgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb3BzaXplOyBpKyspIHtcbiAgICAgIGxldCBzb2wgPSBzb2xfc2NvcmVfYXJyYXlbaV0uc29sdXRpb25cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5uX2RpbTsgaisrKSB7XG4gICAgICAgIHlfay5wdXNoKChzb2xbal0gLSB0aGlzLm1lYW5bal0pIC8gdGhpcy5zaWdtYSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAjIFNlbGVjdGlvbiBhbmQgcmVjb21iaW5hdGlvblxuICAgIC8vIHlfdyA9IG5wLnN1bSh5X2tbOiBzZWxmLl9tdV0uVCAqIHNlbGYuX3dlaWdodHNbOiBzZWxmLl9tdV0sIGF4aXM9MSkgICMgZXEuNDFcbiAgICBsZXQgeV93ID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLm5fZGltKS5maWxsKDApXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm11OyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5uX2RpbTsgaisrKSB7XG4gICAgICAgIHlfd1tqXSArPSB5X2tbaSAqIHRoaXMubl9kaW0gKyBqXSAqIHRoaXMud2VpZ2h0c1tpXVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNlbGYuX21lYW4gKz0gc2VsZi5fY20gKiBzZWxmLl9zaWdtYSAqIHlfd1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uX2RpbTsgaSsrKSB7XG4gICAgICB0aGlzLm1lYW5baV0gKz0gdGhpcy5jbSAqIHRoaXMuc2lnbWEgKiB5X3dbaV1cbiAgICAgIGlmICh0aGlzLm1lYW5baV0gPiBfTUVBTl9NQVgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJtZWFuIHRvbyBoaWdoXCIpXG4gICAgICAgIHRoaXMubWVhbltpXSA9IF9NRUFOX01BWFxuICAgICAgfSBlbHNlIGlmICh0aGlzLm1lYW5baV0gPCAtX01FQU5fTUFYKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWVhbiB0b28gbG93XCIpXG4gICAgICAgIHRoaXMubWVhbltpXSA9IC1fTUVBTl9NQVhcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAjIFN0ZXAtc2l6ZSBjb250cm9sXG4gICAgLy8gQ18yID0gY2FzdChcbiAgICAvLyAgICAgbnAubmRhcnJheSwgY2FzdChucC5uZGFycmF5LCBCLmRvdChucC5kaWFnKDEgLyBEKSkpLmRvdChCLlQpXG4gICAgLy8gKSAgIyBDXigtMS8yKSA9IEIgRF4oLTEpIEJeVFxuICAgIGxldCBpbm5lciA9IHRoaXMuQi5jb3B5KClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubl9kaW07IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm5fZGltOyBqKyspIHtcbiAgICAgICAgaW5uZXIuc2V0KGksIGosIGlubmVyLmdldChpLCBqKSAvIHRoaXMuRFtqXSlcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IENfMiA9IGlubmVyLm11bE1hdCh0aGlzLkIudHJhbnNwb3NlKCkpXG4gICAgLy8gc2VsZi5fcF9zaWdtYSA9ICgxIC0gc2VsZi5fY19zaWdtYSkgKiBzZWxmLl9wX3NpZ21hICsgbWF0aC5zcXJ0KFxuICAgIC8vICAgICBzZWxmLl9jX3NpZ21hICogKDIgLSBzZWxmLl9jX3NpZ21hKSAqIHNlbGYuX211X2VmZlxuICAgIC8vICkgKiBDXzIuZG90KHlfdylcbiAgICBsZXQgdGVtcF9hcnIgPSBDXzIubXVsVmVjKHlfdylcbiAgICBsZXQgZjAgPSAxIC0gdGhpcy5jX3NpZ21hXG4gICAgbGV0IGYxID0gTWF0aC5zcXJ0KHRoaXMuY19zaWdtYSAqICgyIC0gdGhpcy5jX3NpZ21hKSAqIHRoaXMubXVfZWZmKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uX2RpbTsgaSsrKSB7XG4gICAgICB0aGlzLnBfc2lnbWFbaV0gPSBmMCAqIHRoaXMucF9zaWdtYVtpXSArIGYxICogdGVtcF9hcnJbaV1cbiAgICB9XG5cbiAgICAvLyBub3JtX3Bfc2lnbWEgPSBucC5saW5hbGcubm9ybShzZWxmLl9wX3NpZ21hKVxuICAgIGxldCBub3JtX3Bfc2lnbWEgPSBNYXRoLnNxcnQoXG4gICAgICB0aGlzLnBfc2lnbWEubWFwKCh4KSA9PiB4ICogeCkucmVkdWNlKChhLCBiKSA9PiBhICsgYilcbiAgICApXG4gICAgLy8gc2VsZi5fc2lnbWEgKj0gbnAuZXhwKFxuICAgIC8vICAgICAoc2VsZi5fY19zaWdtYSAvIHNlbGYuX2Rfc2lnbWEpICogKG5vcm1fcF9zaWdtYSAvIHNlbGYuX2NoaV9uIC0gMSlcbiAgICAvLyApXG4gICAgdGhpcy5zaWdtYSAqPSBNYXRoLmV4cChcbiAgICAgICh0aGlzLmNfc2lnbWEgLyB0aGlzLmRfc2lnbWEpICogKG5vcm1fcF9zaWdtYSAvIHRoaXMuY2hpX24gLSAxKVxuICAgIClcbiAgICAvLyBzZWxmLl9zaWdtYSA9IG1pbihzZWxmLl9zaWdtYSwgX1NJR01BX01BWClcbiAgICB0aGlzLnNpZ21hID0gTWF0aC5taW4odGhpcy5zaWdtYSwgX1NJR01BX01BWClcblxuICAgIC8vICMgQ292YXJpYW5jZSBtYXRyaXggYWRhcHRpb25cbiAgICAvLyBoX3NpZ21hX2NvbmRfbGVmdCA9IG5vcm1fcF9zaWdtYSAvIG1hdGguc3FydChcbiAgICAvLyAgICAgMSAtICgxIC0gc2VsZi5fY19zaWdtYSkgKiogKDIgKiAoc2VsZi5fZyArIDEpKVxuICAgIC8vIClcbiAgICBsZXQgaF9zaWdtYV9jb25kX2xlZnQgPVxuICAgICAgbm9ybV9wX3NpZ21hIC8gTWF0aC5zcXJ0KDEgLSAoMSAtIHRoaXMuY19zaWdtYSkgKiogKDIgKiAodGhpcy5nICsgMSkpKVxuXG4gICAgLy8gaF9zaWdtYV9jb25kX3JpZ2h0ID0gKDEuNCArIDIgLyAoc2VsZi5fbl9kaW0gKyAxKSkgKiBzZWxmLl9jaGlfblxuICAgIGxldCBoX3NpZ21hX2NvbmRfcmlnaHQgPSAoMS40ICsgMiAvICh0aGlzLm5fZGltICsgMSkpICogdGhpcy5jaGlfblxuXG4gICAgLy8gaF9zaWdtYSA9IDEuMCBpZiBoX3NpZ21hX2NvbmRfbGVmdCA8IGhfc2lnbWFfY29uZF9yaWdodCBlbHNlIDAuMCAgIyAocC4yOClcbiAgICBsZXQgaF9zaWdtYSA9IGhfc2lnbWFfY29uZF9sZWZ0IDwgaF9zaWdtYV9jb25kX3JpZ2h0ID8gMS4wIDogMC4wXG5cbiAgICAvLyAjIChlcS40NSlcbiAgICAvLyBzZWxmLl9wYyA9ICgxIC0gc2VsZi5fY2MpICogc2VsZi5fcGMgKyBoX3NpZ21hICogbWF0aC5zcXJ0KFxuICAgIC8vICAgICBzZWxmLl9jYyAqICgyIC0gc2VsZi5fY2MpICogc2VsZi5fbXVfZWZmXG4gICAgLy8gKSAqIHlfd1xuICAgIGYwID0gMSAtIHRoaXMuY2NcbiAgICBmMSA9IGhfc2lnbWEgKiBNYXRoLnNxcnQodGhpcy5jYyAqICgyIC0gdGhpcy5jYykgKiB0aGlzLm11X2VmZilcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubl9kaW07IGkrKykge1xuICAgICAgdGhpcy5wY1tpXSA9IGYwICogdGhpcy5wY1tpXSArIGYxICogeV93W2ldXG4gICAgfVxuXG4gICAgLy8gIyAoZXEuNDYpXG4gICAgLy8gd19pbyA9IHNlbGYuX3dlaWdodHMgKiBucC53aGVyZShcbiAgICAvLyAgICAgc2VsZi5fd2VpZ2h0cyA+PSAwLFxuICAgIC8vICAgICAxLFxuICAgIC8vICAgICBzZWxmLl9uX2RpbSAvIChucC5saW5hbGcubm9ybShDXzIuZG90KHlfay5UKSwgYXhpcz0wKSAqKiAyICsgX0VQUyksXG4gICAgLy8gKVxuICAgIC8vIGxldCB0ZW1wX21hdCA9IFtdXG4gICAgbGV0IHRlbXBfbWF0ID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLm5fZGltICogdGhpcy5wb3BzaXplKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uX2RpbTsgaSsrKSB7XG4gICAgICAvLyBsZXQgdGVtcF9tYXRfcm93ID0gW11cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wb3BzaXplOyBqKyspIHtcbiAgICAgICAgbGV0IHN1bSA9IDBcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCB0aGlzLm5fZGltOyBrKyspIHtcbiAgICAgICAgICAvLyBzdW0gKz0gQ18yLmdldChpLCBrKSAqIHlfa1tqXVtrXVxuICAgICAgICAgIHN1bSArPSBDXzIuZ2V0KGksIGspICogeV9rW2ogKiB0aGlzLm5fZGltICsga11cbiAgICAgICAgfVxuICAgICAgICB0ZW1wX21hdFtpICogdGhpcy5wb3BzaXplICsgal0gPSBzdW1cbiAgICAgICAgLy8gdGVtcF9tYXRfcm93LnB1c2goc3VtKVxuICAgICAgfVxuICAgICAgLy8gdGVtcF9tYXQucHVzaCh0ZW1wX21hdF9yb3cpXG4gICAgfVxuICAgIGxldCBjb2xfbm9ybXMgPSBbXVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wb3BzaXplOyBqKyspIHtcbiAgICAgIGxldCBjb2xfbm9ybSA9IDBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uX2RpbTsgaSsrKSB7XG4gICAgICAgIC8vIGxldCB2YWwgPSB0ZW1wX21hdFtpXVtqXVxuICAgICAgICBsZXQgdmFsID0gdGVtcF9tYXRbaSAqIHRoaXMucG9wc2l6ZSArIGpdXG4gICAgICAgIGNvbF9ub3JtICs9IHZhbCAqIHZhbFxuICAgICAgfVxuICAgICAgY29sX25vcm1zLnB1c2godGhpcy5uX2RpbSAvIChNYXRoLmFicyhjb2xfbm9ybSkgKyBFUFNfQ01BKSlcbiAgICB9XG4gICAgbGV0IHdfaW8gPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb3BzaXplOyBpKyspIHtcbiAgICAgIGxldCBjb25kX2ZhY3RvciA9IHRoaXMud2VpZ2h0c1tpXSA+PSAwID8gMSA6IGNvbF9ub3Jtc1tpXVxuICAgICAgd19pby5wdXNoKHRoaXMud2VpZ2h0c1tpXSAqIGNvbmRfZmFjdG9yKVxuICAgIH1cblxuICAgIC8vIGRlbHRhX2hfc2lnbWEgPSAoMSAtIGhfc2lnbWEpICogc2VsZi5fY2MgKiAoMiAtIHNlbGYuX2NjKSAgIyAocC4yOClcbiAgICBsZXQgZGVsdGFfaF9zaWdtYSA9ICgxIC0gaF9zaWdtYSkgKiB0aGlzLmNjICogKDIgLSB0aGlzLmNjKVxuICAgIC8vIGFzc2VydCBkZWx0YV9oX3NpZ21hIDw9IDFcblxuICAgIC8vICMgKGVxLjQ3KVxuICAgIC8vIHJhbmtfb25lID0gbnAub3V0ZXIoc2VsZi5fcGMsIHNlbGYuX3BjKVxuICAgIGxldCByYW5rX29uZSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5uX2RpbSAqIHRoaXMubl9kaW0pXG4gICAgLy8gdXBwZXIgdHJpYW5nbGVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubl9kaW07IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCB0aGlzLm5fZGltOyBqKyspIHtcbiAgICAgICAgcmFua19vbmVbaSAqIHRoaXMubl9kaW0gKyBqXSA9IHRoaXMucGNbaV0gKiB0aGlzLnBjW2pdXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmFua19tdSA9IG5wLnN1bShcbiAgICAvLyAgICAgbnAuYXJyYXkoW3cgKiBucC5vdXRlcih5LCB5KSBmb3IgdywgeSBpbiB6aXAod19pbywgeV9rKV0pLCBheGlzPTBcbiAgICAvLyApXG4gICAgbGV0IHJhbmtfbXUgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubl9kaW0gKiB0aGlzLm5fZGltKS5maWxsKDApXG4gICAgLy8gdXBwZXIgdHJpYW5nbGVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9wc2l6ZTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubl9kaW07IGorKykge1xuICAgICAgICBmb3IgKGxldCBrID0gajsgayA8IHRoaXMubl9kaW07IGsrKykge1xuICAgICAgICAgIHJhbmtfbXVbaiAqIHRoaXMubl9kaW0gKyBrXSArPVxuICAgICAgICAgICAgd19pb1tpXSAqIHlfa1tpICogdGhpcy5uX2RpbSArIGpdICogeV9rW2kgKiB0aGlzLm5fZGltICsga11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoaXMuQyA9IChcbiAgICAvLyAgICAgKFxuICAgIC8vICAgICAgICAgMVxuICAgIC8vICAgICAgICAgKyB0aGlzLmMxICogZGVsdGFfaF9zaWdtYVxuICAgIC8vICAgICAgICAgLSB0aGlzLmMxXG4gICAgLy8gICAgICAgICAtIHRoaXMuY211ICogd3Rfc3VtXG4gICAgLy8gICAgIClcbiAgICAvLyAgICAgKiB0aGlzLkNcbiAgICAvLyAgICAgKyB0aGlzLmMxICogcmFua19vbmVcbiAgICAvLyAgICAgKyB0aGlzLmNtdSAqIHJhbmtfbXVcbiAgICAvLyApXG4gICAgbGV0IHd0X3N1bSA9IHRoaXMud2VpZ2h0cy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKVxuICAgIGYwID0gMSArIHRoaXMuYzEgKiBkZWx0YV9oX3NpZ21hIC0gdGhpcy5jMSAtIHRoaXMuY211ICogd3Rfc3VtXG4gICAgLy8gdXBwZXIgdHJpYW5nbGVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubl9kaW07IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCB0aGlzLm5fZGltOyBqKyspIHtcbiAgICAgICAgbGV0IGlkeCA9IGkgKiB0aGlzLm5fZGltICsgalxuICAgICAgICB0aGlzLkMuZGF0YVtpZHhdID1cbiAgICAgICAgICBmMCAqIHRoaXMuQy5kYXRhW2lkeF0gK1xuICAgICAgICAgIHRoaXMuYzEgKiByYW5rX29uZVtpZHhdICtcbiAgICAgICAgICB0aGlzLmNtdSAqIHJhbmtfbXVbaWR4XVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBmaWxsIGxvd2VyIHRyaWFuZ2xlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5fZGltOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IHRoaXMubl9kaW07IGorKykge1xuICAgICAgICB0aGlzLkMuc2V0KGosIGksIHRoaXMuQy5nZXQoaSwgaikpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuY2xhc3MgU3FNYXRyaXgge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgLy8gICBpZiAoIShkYXRhIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhIG11c3QgYmUgYW4gYXJyYXkuXCIpXG4gICAgLy8gICAgIHJldHVybiBudWxsXG4gICAgLy8gICB9XG4gICAgbGV0IGRhdGFfbGVuX3NxcnQgPSBNYXRoLnNxcnQoZGF0YS5sZW5ndGgpXG4gICAgLy8gaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGRhdGFfbGVuX3NxcnQpKSB7XG4gICAgLy8gICBjb25zb2xlLmVycm9yKFwiRGF0YSBsZW5ndGggbXVzdCBiZSBzcXVhcmUuXCIpXG4gICAgLy8gICByZXR1cm4gbnVsbFxuICAgIC8vIH1cbiAgICB0aGlzLmRpbSA9IGRhdGFfbGVuX3NxcnRcbiAgICB0aGlzLmRhdGEgPSBGbG9hdDMyQXJyYXkuZnJvbShkYXRhKVxuICB9XG5cbiAgZ2V0KHJvdywgY29sKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVtyb3cgKiB0aGlzLmRpbSArIGNvbF1cbiAgfVxuXG4gIHNldChyb3csIGNvbCwgdmFsKSB7XG4gICAgdGhpcy5kYXRhW3JvdyAqIHRoaXMuZGltICsgY29sXSA9IHZhbFxuICB9XG5cbiAgYWRkTWF0KG90aGVyKSB7XG4gICAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTcU1hdHJpeCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJNdXN0IGFkZCB3aXRoIFNxTWF0cml4LlwiKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgY29uc3QgYWRkX2RhdGEgPSB0aGlzLmRhdGEuc2xpY2UoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFkZF9kYXRhW2ldICs9IG90aGVyLmRhdGFbaV1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTcU1hdHJpeChhZGRfZGF0YSlcbiAgfVxuXG4gIG11bFZlYyh2KSB7XG4gICAgLy8gaWYgKCEodiBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgIC8vICAgY29uc29sZS5lcnJvcihcIlZlY3RvciBtdXN0IGJlIGFuIGFycmF5LlwiKVxuICAgIC8vICAgcmV0dXJuIG51bGxcbiAgICAvLyB9XG4gICAgLy8gaWYgKHYubGVuZ3RoICE9IHRoaXMuZGltKSB7XG4gICAgLy8gICBjb25zb2xlLmVycm9yKFwiVmVjdG9yIGxlbmd0aCBtdXN0IGVxdWFsIHNxdWFyZSBtYXRyaXggc2lkZS5cIilcbiAgICAvLyAgIHJldHVybiBudWxsXG4gICAgLy8gfVxuICAgIGxldCByZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZGltKS5maWxsKDApXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRpbTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZGltOyBqKyspIHtcbiAgICAgICAgcmVzW2ldICs9IHRoaXMuZ2V0KGksIGopICogdltqXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH1cblxuICAvLyBtdWxNYXQob3RoZXIpIHtcbiAgLy8gICBsZXQgbmV3X2RhdGEgPSBbXVxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kaW07IGkrKykge1xuICAvLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRpbTsgaisrKSB7XG4gIC8vICAgICAgIGxldCBzdW0gPSAwXG4gIC8vICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdGhpcy5kaW07IGsrKykge1xuICAvLyAgICAgICAgIHN1bSArPSB0aGlzLmdldChpLCBrKSAqIG90aGVyLmdldChrLCBqKVxuICAvLyAgICAgICB9XG4gIC8vICAgICAgIG5ld19kYXRhLnB1c2goc3VtKVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gbmV3IFNxTWF0cml4KG5ld19kYXRhKVxuICAvLyB9XG5cbiAgLy8gbXVsTWF0KG90aGVyKSB7XG4gIC8vICAgbGV0IG5ld19kYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmRpbSAqIHRoaXMuZGltKS5maWxsKDApXG4gIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRpbTsgaSsrKSB7XG4gIC8vICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMuZGltOyBrKyspIHtcbiAgLy8gICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRpbTsgaisrKSB7XG4gIC8vICAgICAgICAgbmV3X2RhdGFbaSAqIHRoaXMuZGltICsgal0gKz0gdGhpcy5nZXQoaSwgaykgKiBvdGhlci5nZXQoaywgailcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gbmV3IFNxTWF0cml4KG5ld19kYXRhKVxuICAvLyB9XG5cbiAgbXVsTWF0KG90aGVyKSB7XG4gICAgY29uc3QgYSA9IHRoaXMuZGF0YSxcbiAgICAgIGIgPSBvdGhlci5kYXRhLFxuICAgICAgbSA9IHRoaXMuZGltLFxuICAgICAgbiA9IHRoaXMuZGltLFxuICAgICAgcCA9IG90aGVyLmRpbSxcbiAgICAgIGMgPSBuZXcgRmxvYXQzMkFycmF5KG0gKiBwKVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcDsgaisrKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICBsZXQgc3VtID0gMFxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgIHN1bSArPSBhW2kgKiBuICsga10gKiBiW2sgKiBwICsgal1cbiAgICAgICAgfVxuICAgICAgICBjW2kgKiBwICsgal0gPSBzdW1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTcU1hdHJpeChjKVxuICB9XG5cbiAgdHJhbnNwb3NlKCkge1xuICAgIC8vIGxldCBuZXdfZGF0YSA9IFtdXG4gICAgY29uc3QgbmV3X21hdCA9IG5ldyBTcU1hdHJpeChuZXcgRmxvYXQzMkFycmF5KHRoaXMuZGltICogdGhpcy5kaW0pKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kaW07IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRpbTsgaisrKSB7XG4gICAgICAgIG5ld19tYXQuc2V0KGksIGosIHRoaXMuZ2V0KGosIGkpKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3X21hdFxuICB9XG5cbiAgYXZnU3ltbWVyaWMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRpbSAtIDE7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5kaW07IGorKykge1xuICAgICAgICBsZXQgYXZnVmFsID0gMC41ICogKHRoaXMuZ2V0KGksIGopICsgdGhpcy5nZXQoaiwgaSkpXG4gICAgICAgIHRoaXMuc2V0KGksIGosIGF2Z1ZhbClcbiAgICAgICAgdGhpcy5zZXQoaiwgaSwgYXZnVmFsKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvcHkoKSB7XG4gICAgcmV0dXJuIG5ldyBTcU1hdHJpeCh0aGlzLmRhdGEuc2xpY2UoKSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGxldCBzID0gXCJcIlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kaW0gKiB0aGlzLmRpbTsgaSsrKSB7XG4gICAgICBsZXQgc2VwID0gKGkgKyAxKSAlIHRoaXMuZGltID09IDAgPyBcIlxcblwiIDogXCIgXCJcbiAgICAgIHMgKz0gdGhpcy5kYXRhW2ldLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIgXCIpICsgc2VwXG4gICAgfVxuICAgIHJldHVybiBzXG4gIH1cbn1cblxuZnVuY3Rpb24gU3FNYXRyaXhGcm9tRGlhZyhkaWFnKSB7XG4gIGxldCBuID0gZGlhZy5sZW5ndGhcbiAgbGV0IGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiBuKS5maWxsKDApXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgZGF0YVtpICogKDEgKyBuKV0gPSBkaWFnW2ldXG4gIH1cbiAgcmV0dXJuIG5ldyBTcU1hdHJpeChkYXRhKVxufVxuXG5mdW5jdGlvbiBFeWUoZGltKSB7XG4gIHJldHVybiBTcU1hdHJpeEZyb21EaWFnKG5ldyBGbG9hdDMyQXJyYXkoZGltKS5maWxsKDEpKVxufVxuXG5mdW5jdGlvbiBweXRoYWcoYSwgYikge1xuICBsZXQgYWJzYSA9IE1hdGguYWJzKGEpXG4gIGxldCBhYnNiID0gTWF0aC5hYnMoYilcbiAgbGV0IGFfb3Zlcl9iID0gYWJzYSAvIGFic2JcbiAgbGV0IGFfb3Zlcl9iX3NxID0gYV9vdmVyX2IgKiBhX292ZXJfYlxuICBpZiAoYWJzYSA+IGFic2IpIHtcbiAgICByZXR1cm4gYWJzYSAqIE1hdGguc3FydCgxICsgMSAvIGFfb3Zlcl9iX3NxKVxuICB9IGVsc2UgaWYgKGFic2IgPT0gMCkge1xuICAgIHJldHVybiAwXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFic2IgKiBNYXRoLnNxcnQoMSArIGFfb3Zlcl9iX3NxKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRyZWQyKF9hKSB7XG4gIGlmICghKF9hIGluc3RhbmNlb2YgU3FNYXRyaXgpKSB7XG4gICAgY29uc29sZS5lcnJvcihcInRyZWQyIHJlcXVpcmVzIGEgU3FNYXRyaXhcIilcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIGNvbnN0IGEgPSBfYS5jb3B5KClcbiAgLy8gSU5URUdFUiBpLGosayxsXG4gIGxldCBpLCBqLCBrLCBsXG4gIC8vIElOVEVHRVIgbixucFxuICBjb25zdCBuID0gYS5kaW1cbiAgLy8gUkVBTCBhKG5wLG5wKSxkKG5wKSxlKG5wKVxuICAvLyBjb25zdCBkID0gQXJyYXkobikuZmlsbCgwKVxuICAvLyBjb25zdCBlID0gQXJyYXkobikuZmlsbCgwKVxuICBjb25zdCBkID0gbmV3IEZsb2F0MzJBcnJheShuKS5maWxsKDApXG4gIGNvbnN0IGUgPSBuZXcgRmxvYXQzMkFycmF5KG4pLmZpbGwoMClcbiAgLy8gUkVBTCBmLGcsaCxoaCxzY2FsZVxuICBsZXQgZiwgZywgaCwgaGgsIHNjYWxlXG4gIC8vIGRvIGk9biwyLC0xXG4gIGZvciAoaSA9IG4gLSAxOyBpID49IDE7IGktLSkge1xuICAgIC8vIGw9aS0xXG4gICAgbCA9IGkgLSAxXG4gICAgLy8gaD0wLlxuICAgIGggPSAwXG4gICAgLy8gc2NhbGU9MC5cbiAgICBzY2FsZSA9IDBcbiAgICAvLyBpZiAobC5ndC4xKSB0aGVuXG4gICAgaWYgKGwgPiAwKSB7XG4gICAgICAvLyBkbyBrPTEsbFxuICAgICAgZm9yIChrID0gMDsgayA8PSBsOyBrKyspIHtcbiAgICAgICAgLy8gc2NhbGU9c2NhbGUrYWJzKGEoaSxrKSlcbiAgICAgICAgc2NhbGUgKz0gTWF0aC5hYnMoYS5nZXQoaywgaSkpXG4gICAgICAgIC8vIGVuZCBkb1xuICAgICAgfVxuICAgICAgLy8gaWYgKHNjYWxlLmVxLjAuKSB0aGVuXG4gICAgICBpZiAoc2NhbGUgPT0gMCkge1xuICAgICAgICAvLyBlKGkpPWEoaSxsKVxuICAgICAgICBlW2ldID0gYS5nZXQobCwgaSlcbiAgICAgICAgLy8gZWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZG8gaz0xLGxcbiAgICAgICAgZm9yIChrID0gMDsgayA8PSBsOyBrKyspIHtcbiAgICAgICAgICAvLyBhKGksayk9YShpLGspL3NjYWxlXG4gICAgICAgICAgbGV0IG5ld192YWwgPSBhLmdldChrLCBpKSAvIHNjYWxlXG4gICAgICAgICAgYS5zZXQoaywgaSwgbmV3X3ZhbClcbiAgICAgICAgICAvLyBoPWgrYShpLGspKioyXG4gICAgICAgICAgaCArPSBuZXdfdmFsICogbmV3X3ZhbFxuICAgICAgICAgIC8vIGVuZCBkb1xuICAgICAgICB9XG4gICAgICAgIC8vIGY9YShpLGwpXG4gICAgICAgIGYgPSBhLmdldChsLCBpKVxuICAgICAgICAvLyBnPS1zaWduKHNxcnQoaCksZilcbiAgICAgICAgZyA9IC1NYXRoLnNpZ24oZikgKiBNYXRoLmFicyhNYXRoLnNxcnQoaCkpXG4gICAgICAgIC8vIGUoaSk9c2NhbGUqZ1xuICAgICAgICBlW2ldID0gc2NhbGUgKiBnXG4gICAgICAgIC8vIGg9aC1mKmdcbiAgICAgICAgaCAtPSBmICogZ1xuICAgICAgICAvLyBhKGksbCk9Zi1nXG4gICAgICAgIGEuc2V0KGwsIGksIGYgLSBnKVxuICAgICAgICAvLyBmPTAuXG4gICAgICAgIGYgPSAwXG4gICAgICAgIC8vIGRvIGo9MSxsXG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gbDsgaisrKSB7XG4gICAgICAgICAgLy8gYShqLGkpPWEoaSxqKS9oXG4gICAgICAgICAgYS5zZXQoaSwgaiwgYS5nZXQoaiwgaSkgLyBoKVxuICAgICAgICAgIC8vIGc9MC5cbiAgICAgICAgICBnID0gMFxuICAgICAgICAgIC8vIGRvIGs9MSxqXG4gICAgICAgICAgZm9yIChrID0gMDsgayA8PSBqOyBrKyspIHtcbiAgICAgICAgICAgIC8vIGc9ZythKGosaykqYShpLGspXG4gICAgICAgICAgICBnICs9IGEuZ2V0KGssIGopICogYS5nZXQoaywgaSlcbiAgICAgICAgICAgIC8vIGVuZCBkb1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBkbyBrPWorMSxsXG4gICAgICAgICAgZm9yIChrID0gaiArIDE7IGsgPD0gbDsgaysrKSB7XG4gICAgICAgICAgICAvLyBnPWcrYShrLGopKmEoaSxrKVxuICAgICAgICAgICAgZyArPSBhLmdldChqLCBrKSAqIGEuZ2V0KGssIGkpXG4gICAgICAgICAgICAvLyBlbmQgZG9cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZShqKT1nL2hcbiAgICAgICAgICBlW2pdID0gZyAvIGhcbiAgICAgICAgICAvLyBmPWYrZShqKSphKGksailcbiAgICAgICAgICBmICs9IGVbal0gKiBhLmdldChqLCBpKVxuICAgICAgICAgIC8vIGVuZCBkb1xuICAgICAgICB9XG4gICAgICAgIC8vIGhoPWYvKGgraClcbiAgICAgICAgaGggPSBmIC8gKGggKyBoKVxuICAgICAgICAvLyBkbyBqPTEsbFxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGw7IGorKykge1xuICAgICAgICAgIC8vIGY9YShpLGopXG4gICAgICAgICAgZiA9IGEuZ2V0KGosIGkpXG4gICAgICAgICAgLy8gZz1lKGopLWhoKmZcbiAgICAgICAgICBnID0gZVtqXSAtIGhoICogZlxuICAgICAgICAgIC8vIGUoaik9Z1xuICAgICAgICAgIGVbal0gPSBnXG4gICAgICAgICAgLy8gZG8gaz0xLGpcbiAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8PSBqOyBrKyspIHtcbiAgICAgICAgICAgIC8vIGEoaixrKT1hKGosayktZiplKGspLWcqYShpLGspXG4gICAgICAgICAgICBhLnNldChrLCBqLCBhLmdldChrLCBqKSAtIGYgKiBlW2tdIC0gZyAqIGEuZ2V0KGssIGkpKVxuICAgICAgICAgICAgLy8gZW5kIGRvXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGVuZCBkb1xuICAgICAgICB9XG4gICAgICAgIC8vIGVuZCBpZlxuICAgICAgfVxuICAgICAgLy8gZWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlKGkpPWEoaSxsKVxuICAgICAgZVtpXSA9IGEuZ2V0KGwsIGkpXG4gICAgICAvLyBlbmQgaWZcbiAgICB9XG4gICAgLy8gZChpKT1oXG4gICAgZFtpXSA9IGhcbiAgICAvLyBlbmQgZG9cbiAgfVxuICAvLyBkKDEpPTBcbiAgZFswXSA9IDBcbiAgLy8gZSgxKT0wXG4gIGVbMF0gPSAwXG4gIC8vIGRvIGk9MSxuXG4gIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAvLyBsPWktMVxuICAgIGwgPSBpIC0gMVxuICAgIC8vIGlmIChkKGkpLm5lLjAuKSB0aGVuXG4gICAgaWYgKGRbaV0gIT0gMCkge1xuICAgICAgLy8gZG8gaj0xLGxcbiAgICAgIGZvciAoaiA9IDA7IGogPD0gbDsgaisrKSB7XG4gICAgICAgIC8vIGc9MC5cbiAgICAgICAgZyA9IDBcbiAgICAgICAgLy8gZG8gaz0xLGxcbiAgICAgICAgZm9yIChrID0gMDsgayA8PSBsOyBrKyspIHtcbiAgICAgICAgICAvLyBmPWYrYShpLGspKmEoayxqKVxuICAgICAgICAgIGcgKz0gYS5nZXQoaywgaSkgKiBhLmdldChqLCBrKVxuICAgICAgICAgIC8vIGVuZCBkb1xuICAgICAgICB9XG4gICAgICAgIC8vIGRvIGs9MSxsXG4gICAgICAgIGZvciAoayA9IDA7IGsgPD0gbDsgaysrKSB7XG4gICAgICAgICAgLy8gYShrLGopPWEoayxqKS1nKmEoayxpKVxuICAgICAgICAgIGEuc2V0KGosIGssIGEuZ2V0KGosIGspIC0gZyAqIGEuZ2V0KGksIGspKVxuICAgICAgICAgIC8vIGVuZCBkb1xuICAgICAgICB9XG4gICAgICAgIC8vIGVuZCBkb1xuICAgICAgfVxuICAgICAgLy8gZW5kIGlmXG4gICAgfVxuICAgIC8vIGQoaSk9YShpLGkpXG4gICAgZFtpXSA9IGEuZ2V0KGksIGkpXG4gICAgLy8gYShpLGkpPTEuXG4gICAgYS5zZXQoaSwgaSwgMSlcbiAgICAvLyBkbyBqPTEsbFxuICAgIGZvciAoaiA9IDA7IGogPD0gbDsgaisrKSB7XG4gICAgICAvLyBhKGksaik9MC5cbiAgICAgIGEuc2V0KGosIGksIDApXG4gICAgICAvLyBhKGosaSk9MC5cbiAgICAgIGEuc2V0KGksIGosIDApXG4gICAgICAvLyBlbmQgZG9cbiAgICB9XG4gICAgLy8gZW5kIGRvXG4gIH1cbiAgcmV0dXJuIFthLCBkLCBlLCB0cnVlXVxufVxuXG5mdW5jdGlvbiB0cWxpKGQsIGUsIHopIHtcbiAgbGV0IHN1Y2Nlc3MgPSB0cnVlXG4gIC8vIGlmICghKHogaW5zdGFuY2VvZiBTcU1hdHJpeCB8fCBkIGluc3RhbmNlb2YgQXJyYXkgfHwgZSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAvLyAgIGNvbnNvbGUuZXJyb3IoXCJCYWQgdHFsaSBpbnB1dHNcIilcbiAgLy8gICByZXR1cm4gbnVsbFxuICAvLyB9XG4gIC8vIElOVEVHRVIgbixucFxuICBsZXQgbiA9IHouZGltXG4gIC8vIFJFQUwgZChucCksZShucCkseihucCxucClcbiAgLy8gSU5URUdFUiBpLGl0ZXIsayxsLG1cbiAgbGV0IGksIGl0ZXIsIGssIGwsIG1cbiAgLy8gUkVBTCBiLGMsZGQsZixnLHAscixzLHB5dGhhZ1xuICBsZXQgYiwgYywgZiwgZywgcCwgciwgc1xuICAvLyBkbyBpPTIsblxuICBmb3IgKGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgLy8gICBlKGktMSk9ZShpKVxuICAgIGVbaSAtIDFdID0gZVtpXVxuICAgIC8vIGVuZCBkb1xuICB9XG5cbiAgLy8gZG8gbD0xLG5cbiAgZm9yIChsID0gMDsgbCA8IG47IGwrKykge1xuICAgIGl0ZXIgPSAwXG4gICAgd2hpbGUgKGl0ZXIgPCAzMCkge1xuICAgICAgLy8gY29uc29sZS5sb2coaXRlcilcbiAgICAgIC8vIDEgICBkbyBtPWwsbi0xXG4gICAgICAvLyA/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/XG4gICAgICBsZXQgc2tpcCA9IGZhbHNlXG4gICAgICBmb3IgKG0gPSBsOyBtIDwgbiAtIDE7IG0rKykge1xuICAgICAgICAvLyBkZD1hYnMoZChtKSkrYWJzKGQobSsxKSlcbiAgICAgICAgY29uc3QgZGQgPSBNYXRoLmZyb3VuZChNYXRoLmFicyhkW21dKSArIE1hdGguYWJzKGRbbSArIDFdKSlcbiAgICAgICAgLy8gaWYgKGFicyhlKG0pKStkZC5lcS5kZCkgZ290byAyXG4gICAgICAgIC8vICAgICA/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9cbiAgICAgICAgaWYgKE1hdGguYWJzKGVbbV0pIDw9IEVQU19FSUcgKiBkZCkge1xuICAgICAgICAgIC8vIGlmIChNYXRoLmZyb3VuZChNYXRoLmFicyhlW21dKSkgKyBkZCA9PSBkZCkge1xuICAgICAgICAgIHNraXAgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICAvLyBlbmRkb1xuICAgICAgfVxuICAgICAgLy8gICBtPW5cbiAgICAgIGlmICghc2tpcCkge1xuICAgICAgICBtID0gbiAtIDFcbiAgICAgIH1cbiAgICAgIC8vIDIgICBpZiAobS5uZS5sKSB0aGVuXG4gICAgICBpZiAobSAhPSBsKSB7XG4gICAgICAgIC8vICEgaWYgKGl0ZXIuZXEuMzApIHBhdXNlICd0b28gbWFueSBpdGVyYXRpb25zIGluIHRxbGknXG4gICAgICAgIC8vIGl0ZXI9aXRlcisxXG4gICAgICAgIGl0ZXIrK1xuICAgICAgICAvLyBnPShkKGwrMSktZChsKSkvKDIuKmUobCkpXG4gICAgICAgIGcgPSAoZFtsICsgMV0gLSBkW2xdKSAvICgyLjAgKiBlW2xdKVxuICAgICAgICAvLyByPXB5dGhhZyhnLDEuKVxuICAgICAgICByID0gcHl0aGFnKGcsIDEuMClcbiAgICAgICAgLy8gZz1kKG0pLWQobCkrZShsKS8oZytzaWduKHIsZykpXG4gICAgICAgIGcgPSBkW21dIC0gZFtsXSArIGVbbF0gLyAoZyArIE1hdGguc2lnbihnKSAqIE1hdGguYWJzKHIpKVxuICAgICAgICAvLyBzPTEuXG4gICAgICAgIHMgPSAxLjBcbiAgICAgICAgLy8gYz0xLlxuICAgICAgICBjID0gMS4wXG4gICAgICAgIC8vIHA9MC5cbiAgICAgICAgcCA9IDAuMFxuICAgICAgICAvLyBkbyBpPW0tMSxsLC0xXG4gICAgICAgIGxldCBiYWNrX3RvX3N0YXJ0ID0gZmFsc2VcbiAgICAgICAgZm9yIChpID0gbSAtIDE7IGkgPj0gbDsgaS0tKSB7XG4gICAgICAgICAgLy8gZj1zKmUoaSlcbiAgICAgICAgICBmID0gcyAqIGVbaV1cbiAgICAgICAgICAvLyBiPWMqZShpKVxuICAgICAgICAgIGIgPSBjICogZVtpXVxuICAgICAgICAgIC8vIHI9cHl0aGFnKGYsZylcbiAgICAgICAgICByID0gcHl0aGFnKGYsIGcpXG4gICAgICAgICAgLy8gZShpKzEpPXJcbiAgICAgICAgICBlW2kgKyAxXSA9IHJcbiAgICAgICAgICAvLyBpZiAoci5lcS4wLikgdGhlblxuICAgICAgICAgIGlmIChyID09IDAuMCkge1xuICAgICAgICAgICAgLy8gZChpKzEpPWQoaSsxKS1wXG4gICAgICAgICAgICBkW2kgKyAxXSAtPSBwXG4gICAgICAgICAgICAvLyBlKG0pPTAuXG4gICAgICAgICAgICBlW21dID0gMC4wXG4gICAgICAgICAgICAvLyBnb3RvIDFcbiAgICAgICAgICAgIC8vICEhISEhISEhISEhISEhISEhISEhISEhISEhXG4gICAgICAgICAgICBiYWNrX3RvX3N0YXJ0ID0gdHJ1ZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIC8vIGVuZCBpZlxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBzPWYvclxuICAgICAgICAgIHMgPSBmIC8gclxuICAgICAgICAgIC8vIGM9Zy9yXG4gICAgICAgICAgYyA9IGcgLyByXG4gICAgICAgICAgLy8gZz1kKGkrMSktcFxuICAgICAgICAgIGcgPSBkW2kgKyAxXSAtIHBcbiAgICAgICAgICAvLyByPShkKGkpLWcpKnMrMi4qYypiXG4gICAgICAgICAgciA9IChkW2ldIC0gZykgKiBzICsgMi4wICogYyAqIGJcbiAgICAgICAgICAvLyBwPXMqclxuICAgICAgICAgIHAgPSBzICogclxuICAgICAgICAgIC8vIGQoaSsxKT1nK3BcbiAgICAgICAgICBkW2kgKyAxXSA9IGcgKyBwXG4gICAgICAgICAgLy8gZz1jKnItYlxuICAgICAgICAgIGcgPSBjICogciAtIGJcbiAgICAgICAgICAvLyBkbyBrPTEsblxuICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgIC8vIGY9eihrLGkrMSlcbiAgICAgICAgICAgIGYgPSB6LmdldChpICsgMSwgaylcbiAgICAgICAgICAgIC8vIHooayxpKzEpPXMqeihrLGkpK2MqZlxuICAgICAgICAgICAgei5zZXQoaSArIDEsIGssIHMgKiB6LmdldChpLCBrKSArIGMgKiBmKVxuICAgICAgICAgICAgLy8geihrLGkpPWMqeihrLGkpLXMqZlxuICAgICAgICAgICAgei5zZXQoaSwgaywgYyAqIHouZ2V0KGksIGspIC0gcyAqIGYpXG4gICAgICAgICAgICAvLyBlbmQgZG9cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZW5kIGRvXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhY2tfdG9fc3RhcnQpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIC8vIGQobCk9ZChsKS1wXG4gICAgICAgIGRbbF0gLT0gcFxuICAgICAgICAvLyBlKGwpPWdcbiAgICAgICAgZVtsXSA9IGdcbiAgICAgICAgLy8gZShtKT0wLlxuICAgICAgICBlW21dID0gMC4wXG4gICAgICAgIC8vIGdvdG8gMVxuICAgICAgICAvLyAhISEhISEhISEhISEhISEhISEhISEhISEhIVxuICAgICAgICAvLyBlbmRpZlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIC8vIGVuZGRvXG4gICAgfVxuICAgIGlmIChpdGVyID4gMjApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaXRlclwiLCBpdGVyKVxuICAgICAgc3VjY2VzcyA9IGZhbHNlXG4gICAgICByZXR1cm4gW2QsIHosIHN1Y2Nlc3NdXG4gICAgfVxuICB9XG4gIC8vIGNvbnNvbGUubG9nKGQuc2xpY2UoMCwgMTApLCB6LmRhdGEuc2xpY2UoMCwgMTApKVxuICByZXR1cm4gW2QsIHosIHN1Y2Nlc3NdXG4gIC8vIEVORFxufVxuXG5mdW5jdGlvbiBlaWdfc3ltKF9hKSB7XG4gIGxldCBlaWdfc3ltX3N1Y2Nlc3MgPSB0cnVlXG4gIGxldCBbYSwgZCwgZSwgdHJlZDJfc3VjY2Vzc10gPSB0cmVkMihfYSlcbiAgaWYgKCF0cmVkMl9zdWNjZXNzKSB7XG4gICAgZWlnX3N5bV9zdWNjZXNzID0gZmFsc2VcbiAgICByZXR1cm4geyBlaWdfdmFscywgZWlnX3ZlY3MsIGVpZ19zeW1fc3VjY2VzcyB9XG4gIH1cbiAgbGV0IFtlaWdfdmFscywgZWlnX3ZlY3MsIHRxbGlfc3VjY2Vzc10gPSB0cWxpKGQsIGUsIGEpXG4gIGlmICghdHFsaV9zdWNjZXNzKSB7XG4gICAgZWlnX3N5bV9zdWNjZXNzID0gZmFsc2VcbiAgICByZXR1cm4geyBlaWdfdmFscywgZWlnX3ZlY3MsIGVpZ19zeW1fc3VjY2VzcyB9XG4gIH1cbiAgZWlnX3ZlY3MgPSBlaWdfdmVjcy50cmFuc3Bvc2UoKVxuICAvLyBjb25zb2xlLmxvZyhlaWdfdmFscylcbiAgLy8gc29ydFZhbHNWZWNzSW5wbGFjZShlaWdfdmFscywgZWlnX3ZlY3MpXG4gIC8vIGNvbnNvbGUubG9nKGVpZ192YWxzKVxuICByZXR1cm4geyBlaWdfdmFscywgZWlnX3ZlY3MsIGVpZ19zeW1fc3VjY2VzcyB9XG59XG5cbi8vIGZ1bmN0aW9uIHNvcnRWYWxzVmVjc0lucGxhY2UodmFscywgdmVjcykge1xuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHMubGVuZ3RoOyBpKyspIHtcbi8vICAgICB2YWxzW2ldID0gW3ZhbHNbaV0sIGldXG4vLyAgIH1cbi8vICAgdmFscy5zb3J0KChhLCBiKSA9PiAoYVswXSA8IGJbMF0gPyAtMSA6IDEpKVxuLy8gICBsZXQgQl9jb3B5ID0gdmVjcy5jb3B5KClcbi8vICAgZm9yIChsZXQgaiA9IDA7IGogPCB2YWxzLmxlbmd0aDsgaisrKSB7XG4vLyAgICAgbGV0IHNvcnRfaWR4ID0gdmFsc1tqXVsxXVxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFscy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgdmVjcy5zZXQoaSwgc29ydF9pZHgsIEJfY29weS5nZXQoaSwgaikpXG4vLyAgICAgfVxuLy8gICAgIHZhbHNbal0gPSB2YWxzW2pdWzBdXG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRDTUFQb3BzaXplKG5fZGltKSB7XG4gIHJldHVybiA0ICsgTWF0aC5mbG9vcigzICogTWF0aC5sb2cobl9kaW0pKSAvLyAoZXEuIDQ4KVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJveF9tdWxsZXIoKSB7XG4gIGxldCB1MCA9IE1hdGgucmFuZG9tKClcbiAgbGV0IHUxID0gTWF0aC5yYW5kb20oKVxuICAvLyBsZXQgcGFydDAgPSAoLTIuMCAqIHUwLmxuKCkpLnNxcnQoKVxuICBsZXQgcGFydDAgPSBNYXRoLnNxcnQoLTIuMCAqIE1hdGgubG9nKHUwKSlcbiAgbGV0IHBhcnQxID0gMi4wICogTWF0aC5QSSAqIHUxXG4gIGxldCB6MCA9IHBhcnQwICogTWF0aC5jb3MocGFydDEpXG4gIGxldCB6MSA9IHBhcnQwICogTWF0aC5zaW4ocGFydDEpXG5cbiAgcmV0dXJuIEZsb2F0MzJBcnJheS5mcm9tKFt6MCwgejFdKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZF9ub3JtYWwobikge1xuICBjb25zdCByZXMgPSBuZXcgRmxvYXQzMkFycmF5KG4pXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgcGFpciA9IGJveF9tdWxsZXIoKVxuICAgIHJlc1tpXSA9IHBhaXJbMF1cbiAgICBpZiAoaSArIDEgPj0gbikge1xuICAgICAgYnJlYWtcbiAgICB9XG4gICAgaSsrXG4gICAgcmVzW2ldID0gcGFpclsxXVxuICB9XG4gIHJldHVybiByZXNcbn1cbiJdLCJuYW1lcyI6WyJyYW5kX25vcm1hbCIsIkVQU19DTUEiLCJfTUVBTl9NQVgiLCJfU0lHTUFfTUFYIiwiX1ZBTF9NQVgiLCJFUFNfRUlHIiwiTWF0aCIsImZyb3VuZCIsIkNNQSIsIm1lYW4iLCJzaWdtYSIsInBvcHNpemUiLCJ1bmRlZmluZWQiLCJjb3YiLCJybmciLCJjb25zb2xlIiwiYXNzZXJ0IiwibGVuZ3RoIiwiZXZlcnkiLCJ4IiwiYWJzIiwibl9kaW0iLCJmbG9vciIsImxvZyIsIm11Iiwid2VpZ2h0c19wcmltZSIsIkZsb2F0MzJBcnJheSIsImkiLCJnZXRfbXVfZWZmIiwiYXJyIiwicmVkdWNlIiwiYSIsImIiLCJtYXAiLCJtdV9lZmYiLCJzbGljZSIsIm11X2VmZl9taW51cyIsImFscGhhX2NvdiIsImMxIiwiY211IiwibWluIiwibWluX2FscGhhIiwicG9zaXRpdmVfc3VtIiwiZmlsdGVyIiwibmVnYXRpdmVfc3VtIiwid2VpZ2h0cyIsImNtIiwiY19zaWdtYSIsImRfc2lnbWEiLCJtYXgiLCJzcXJ0IiwiY2MiLCJjaGlfbiIsInBfc2lnbWEiLCJmaWxsIiwicGMiLCJDIiwiRXllIiwic2hhcGUiLCJnIiwibmVlZHNfZGVjb21wIiwiYXZnU3ltbWVyaWMiLCJlaWdfb2JqIiwiZWlnX3N5bSIsImVpZ19zeW1fc3VjY2VzcyIsIkQyIiwiZWlnX3ZhbHMiLCJEIiwiQiIsImVpZ192ZWNzIiwiY29weSIsImlubmVyIiwiaiIsInNldCIsImdldCIsIm11bE1hdCIsInRyYW5zcG9zZSIsIkJEIiwiZWlnU3VjY2VzcyIsIl9laWdlbl9kZWNvbXBvc2l0aW9uIiwieiIsInkiLCJtdWxWZWMiLCJ2YWwiLCJfc2FtcGxlX3NvbHV0aW9uIiwic29sX3Njb3JlX2FycmF5Iiwic29ydCIsInNjb3JlIiwieV9rIiwic29sIiwic29sdXRpb24iLCJwdXNoIiwieV93IiwiQ18yIiwidGVtcF9hcnIiLCJmMCIsImYxIiwibm9ybV9wX3NpZ21hIiwiZXhwIiwiaF9zaWdtYV9jb25kX2xlZnQiLCJoX3NpZ21hX2NvbmRfcmlnaHQiLCJoX3NpZ21hIiwidGVtcF9tYXQiLCJzdW0iLCJrIiwiY29sX25vcm1zIiwiY29sX25vcm0iLCJ3X2lvIiwiY29uZF9mYWN0b3IiLCJkZWx0YV9oX3NpZ21hIiwicmFua19vbmUiLCJyYW5rX211Iiwid3Rfc3VtIiwiaWR4IiwiZGF0YSIsIlNxTWF0cml4IiwiZGF0YV9sZW5fc3FydCIsImRpbSIsImZyb20iLCJyb3ciLCJjb2wiLCJvdGhlciIsImVycm9yIiwiYWRkX2RhdGEiLCJ2IiwicmVzIiwibSIsIm4iLCJwIiwiYyIsIm5ld19tYXQiLCJhdmdWYWwiLCJzIiwic2VwIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIlNxTWF0cml4RnJvbURpYWciLCJkaWFnIiwicHl0aGFnIiwiYWJzYSIsImFic2IiLCJhX292ZXJfYiIsImFfb3Zlcl9iX3NxIiwidHJlZDIiLCJfYSIsImwiLCJkIiwiZSIsImYiLCJoIiwiaGgiLCJzY2FsZSIsIm5ld192YWwiLCJzaWduIiwidHFsaSIsInN1Y2Nlc3MiLCJpdGVyIiwiciIsInNraXAiLCJkZCIsImJhY2tfdG9fc3RhcnQiLCJ0cmVkMl9zdWNjZXNzIiwidHFsaV9zdWNjZXNzIiwiZ2V0RGVmYXVsdENNQVBvcHNpemUiLCJib3hfbXVsbGVyIiwidTAiLCJyYW5kb20iLCJ1MSIsInBhcnQwIiwicGFydDEiLCJQSSIsInowIiwiY29zIiwiejEiLCJzaW4iLCJwYWlyIl0sInNvdXJjZVJvb3QiOiIifQ==