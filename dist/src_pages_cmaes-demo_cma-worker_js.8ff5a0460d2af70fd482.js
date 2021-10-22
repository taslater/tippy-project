/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/cmaes-demo/cma-worker.js":
/*!********************************************!*\
  !*** ./src/pages/cmaes-demo/cma-worker.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_cma_lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/cma-lib.js */ "./src/js/cma-lib.js");
/* harmony import */ var _obj_fns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obj-fns.js */ "./src/pages/cmaes-demo/obj-fns.js");
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.js */ "./src/pages/cmaes-demo/globals.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var zoom = 1,
    zoomNext = 1,
    canvasScale,
    objFnName = _globals_js__WEBPACK_IMPORTED_MODULE_2__.objFnInit,
    objFnLim,
    objFn,
    cma,
    solutionsHistory,
    meanHistory,
    ellipsePts,
    popsizeMultiplier = 1; // IIFE

var ellipseTestPts = function () {
  var thetaStep = 2 * Math.PI / _globals_js__WEBPACK_IMPORTED_MODULE_2__.nEllipseTestPts;
  var testPts = [];

  for (var theta = 0; theta < 2 * Math.PI; theta += thetaStep) {
    testPts.push(Float32Array.from([Math.sin(theta), Math.cos(theta)]));
  }

  return testPts;
}();

cmaInit();

onmessage = function onmessage(e) {
  var _e$data = _slicedToArray(e.data, 2),
      info = _e$data[0],
      msg = _e$data[1];

  if (info === "fnName") {
    objFnName = msg;
    cmaInit();
  } else if (info === "popMult") {
    popsizeMultiplier = msg;
    cmaInit();
  } else if (info === "step") {
    if (zoom != zoomNext) {
      return;
    }

    cmaStep();
  } else if (info === "zoom") {
    zoom = msg;
    updateCanvasScale();
    sendMeanHistory();
    sendCurrentSolutions();
  } else if (info === "drawReady") {
    if (zoom != zoomNext) {
      transitionStep();
    }
  }
};

function cmaInit() {
  zoom = 1;
  zoomNext = zoom;
  updateObjFn(objFnName);
  solutionsHistory = [];
  meanHistory = [];
  var cmaSigma = _globals_js__WEBPACK_IMPORTED_MODULE_2__.sigmaScale * objFnLim;
  var randRadians = 2 * Math.PI * Math.random();
  var randRadius = objFnLim * (_globals_js__WEBPACK_IMPORTED_MODULE_2__.meanRadiusMin + Math.random() * (_globals_js__WEBPACK_IMPORTED_MODULE_2__.meanRadiusMax - _globals_js__WEBPACK_IMPORTED_MODULE_2__.meanRadiusMin));
  console.log("objFnLim", objFnLim);
  console.log("randRadius", randRadius);
  var cmaMean = Float32Array.from([randRadius * Math.cos(randRadians), randRadius * Math.sin(randRadians)]);
  var popsize = (0,_js_cma_lib_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultCMAPopsize)(2) * popsizeMultiplier;
  cma = new _js_cma_lib_js__WEBPACK_IMPORTED_MODULE_0__.CMA(cmaMean, cmaSigma, popsize, undefined, undefined);
  cmaStep();
}

function cmaStep() {
  var _meanHistory;

  var solutions = new Float32Array(2 * cma.popsize),
      sol_score_array = [];
  var scoreSum = 0,
      maxAbsDim = 0;

  for (var i = 0; i < cma.popsize; i++) {
    var solution = cma.ask(),
        score = objFn(solution);
    scoreSum += score;
    sol_score_array.push({
      solution: solution,
      score: score
    });

    for (var j = 0; j < 2; j++) {
      var solDim = solution[j],
          absSolDim = Math.abs(solDim);

      if (absSolDim > maxAbsDim) {
        maxAbsDim = absSolDim;
      }

      solutions[2 * i + j] = solDim;
    }
  }

  solutionsHistory.push(solutions);
  ellipsePts = getEllipsePts();

  (_meanHistory = meanHistory).push.apply(_meanHistory, _toConsumableArray(cma.mean.slice())); // const cmaMats = [""]
  // for (let prop of ["B", "BD", "C"]) {
  //   cmaMats.push(cma[prop].data.toString(), "\n")
  // }
  // console.log(...cmaMats)
  // sendEllipseParams()
  // sendEllipsePts()


  sendMeanHistory();
  transitionStep();
  cma.tell(sol_score_array);
  console.log(scoreSum / cma.popsize);
  zoomNext = 0.8 * objFnLim / maxAbsDim;
}

function sendMeanHistory() {
  var meanHistoryTyped = Float32Array.from(meanHistory.map(function (v) {
    return v * canvasScale;
  }));
  postMessage(["means", meanHistoryTyped]);
}

function sendCurrentSolutions() {
  var currentSolution = solutionsHistory[solutionsHistory.length - 1];
  postMessage(["solutions", [currentSolution.map(function (v) {
    return Math.round(v * canvasScale);
  }), ellipsePts.map(function (v) {
    return Math.round(v * canvasScale);
  })]]);
}

function updateObjFn(objFnName) {
  objFn = _obj_fns_js__WEBPACK_IMPORTED_MODULE_1__.objFns[objFnName];
  objFnLim = objFn.xyLim;
  updateCanvasScale();
}

function updateCanvasScale() {
  canvasScale = zoom * 0.5 * _globals_js__WEBPACK_IMPORTED_MODULE_2__.canvasDim / objFnLim;
}

function transitionStep() {
  if (zoom < zoomNext) {
    zoom *= _globals_js__WEBPACK_IMPORTED_MODULE_2__.zoomStepMag;

    if (zoom > zoomNext) {
      zoom = zoomNext;
    }
  } else {
    zoom /= _globals_js__WEBPACK_IMPORTED_MODULE_2__.zoomStepMag;

    if (zoom < zoomNext) {
      zoom = zoomNext;
    }
  }

  postMessage(["zoom", zoom]);
  updateCanvasScale();
  sendCurrentSolutions();
} // function sendEllipseParams() {
//   const [a, b, _, c] = cma.C.data.slice()
//   const t0 = (a + c) / 2,
//     t1 = (a - c) / 2,
//     t2 = Math.sqrt(t1 * t1 + b * b)
//   const lambda0 = t0 + t2,
//     lambda1 = t0 - t2
//   const theta = () => {
//     if (b == 0) {
//       if (a >= c) {
//         return 0
//       } else {
//         return Math.PI / 2
//       }
//     } else {
//       return Math.atan2(lambda0 - a, b)
//     }
//   }
//   const sigma = cma.sigma
//   postMessage([
//     "ellipseParams",
//     Float32Array.from([lambda0 * sigma, lambda1 * sigma, theta()]),
//   ])
// }


function getEllipsePts() {
  var BD = cma.BD,
      mean = cma.mean,
      sigma = cma.sigma;
  var pts = [];

  for (var i = 0; i < ellipseTestPts.length; i++) {
    var offset = BD.mulVec(ellipseTestPts[i]);

    for (var j = 0; j < 2; j++) {
      pts.push(mean[j] + sigma * offset[j]);
    }
  }

  return Float32Array.from(pts);
} // function sqMatMulVec(A,v) {
//   const res = new Float32Array(2).fill(0)
//   for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 2; j++) {
//       // res[i] += this.get(i, j) * v[j]
//       res[i] += A[2*i+j] * v[j]
//     }
//   }
//   return res
// }

/***/ }),

/***/ "./src/pages/cmaes-demo/globals.js":
/*!*****************************************!*\
  !*** ./src/pages/cmaes-demo/globals.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nVizWorkers": () => (/* binding */ nVizWorkers),
/* harmony export */   "canvasDim": () => (/* binding */ canvasDim),
/* harmony export */   "markerR": () => (/* binding */ markerR),
/* harmony export */   "objFnInit": () => (/* binding */ objFnInit),
/* harmony export */   "meanRadiusMin": () => (/* binding */ meanRadiusMin),
/* harmony export */   "meanRadiusMax": () => (/* binding */ meanRadiusMax),
/* harmony export */   "sigmaScale": () => (/* binding */ sigmaScale),
/* harmony export */   "zoomStepMag": () => (/* binding */ zoomStepMag),
/* harmony export */   "nEllipseTestPts": () => (/* binding */ nEllipseTestPts)
/* harmony export */ });
var nVizWorkers = 8,
    canvasDim = 600,
    markerR = 7,
    objFnInit = "ackley",
    meanRadiusMin = 0.6,
    meanRadiusMax = 0.9,
    sigmaScale = 0.5,
    zoomStepMag = 1.05,
    nEllipseTestPts = 32;

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
    var a = 20,
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
  // https://www.sfu.ca/~ssurjano/boha.html
  bohachevsky1: function bohachevsky1(inputs) {
    var x1 = inputs[0];
    var x2 = inputs[1];
    var term1 = x1 * x1;
    var term2 = 2 * x2 * x2;
    var term3 = -0.3 * Math.cos(3 * Math.PI * x1);
    var term4 = -0.4 * Math.cos(4 * Math.PI * x2);
    return term1 + term2 + term3 + term4 + 0.7;
  },
  // https://www.sfu.ca/~ssurjano/griewank.html
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
  // https://www.sfu.ca/~ssurjano/rastr.html
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
objFns.griewank.xyLim = 600;
objFns.rastrigin.xyLim = 5.12;

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["src_js_cma-lib_js"], () => (__webpack_require__("./src/pages/cmaes-demo/cma-worker.js")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + "8e7b624d940dd325334d" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"src_pages_cmaes-demo_cma-worker_js": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_test"] = self["webpackChunkwebpack_test"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return __webpack_require__.e("src_js_cma-lib_js").then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX2NtYWVzLWRlbW9fY21hLXdvcmtlcl9qcy44ZmY1YTA0NjBkMmFmNzBmZDQ4Mi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBVUEsSUFBSVUsSUFBSSxHQUFHLENBQVg7QUFBQSxJQUNFQyxRQUFRLEdBQUcsQ0FEYjtBQUFBLElBRUVDLFdBRkY7QUFBQSxJQUdFQyxTQUFTLEdBQUdWLGtEQUhkO0FBQUEsSUFJRVcsUUFKRjtBQUFBLElBS0VDLEtBTEY7QUFBQSxJQU1FQyxHQU5GO0FBQUEsSUFPRUMsZ0JBUEY7QUFBQSxJQVFFQyxXQVJGO0FBQUEsSUFTRUMsVUFURjtBQUFBLElBVUVDLGlCQUFpQixHQUFHLENBVnRCLEVBWUE7O0FBQ0EsSUFBTUMsY0FBYyxHQUFJLFlBQU07QUFDNUIsTUFBTUMsU0FBUyxHQUFJLElBQUlDLElBQUksQ0FBQ0MsRUFBVixHQUFnQmYsd0RBQWxDO0FBQ0EsTUFBTWdCLE9BQU8sR0FBRyxFQUFoQjs7QUFDQSxPQUFLLElBQUlDLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHLElBQUlILElBQUksQ0FBQ0MsRUFBckMsRUFBeUNFLEtBQUssSUFBSUosU0FBbEQsRUFBNkQ7QUFDM0RHLElBQUFBLE9BQU8sQ0FBQ0UsSUFBUixDQUFhQyxZQUFZLENBQUNDLElBQWIsQ0FBa0IsQ0FBQ04sSUFBSSxDQUFDTyxHQUFMLENBQVNKLEtBQVQsQ0FBRCxFQUFrQkgsSUFBSSxDQUFDUSxHQUFMLENBQVNMLEtBQVQsQ0FBbEIsQ0FBbEIsQ0FBYjtBQUNEOztBQUNELFNBQU9ELE9BQVA7QUFDRCxDQVBzQixFQUF2Qjs7QUFTQU8sT0FBTzs7QUFFUEMsU0FBUyxHQUFHLG1CQUFDQyxDQUFELEVBQU87QUFDakIsK0JBQW9CQSxDQUFDLENBQUNDLElBQXRCO0FBQUEsTUFBT0MsSUFBUDtBQUFBLE1BQWFDLEdBQWI7O0FBQ0EsTUFBSUQsSUFBSSxLQUFL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REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGFBQWE7V0FDYjtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7Ozs7O1dDcENBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRUhBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvcGFnZXMvY21hZXMtZGVtby9jbWEtd29ya2VyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vb2JqLWZucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2ltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL3N0YXJ0dXAgY2h1bmsgZGVwZW5kZW5jaWVzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDTUEsIGdldERlZmF1bHRDTUFQb3BzaXplIH0gZnJvbSBcIi4uLy4uL2pzL2NtYS1saWIuanNcIlxuaW1wb3J0IHsgb2JqRm5zIH0gZnJvbSBcIi4vb2JqLWZucy5qc1wiXG5pbXBvcnQge1xuICBvYmpGbkluaXQsXG4gIGNhbnZhc0RpbSxcbiAgbWVhblJhZGl1c01pbixcbiAgbWVhblJhZGl1c01heCxcbiAgc2lnbWFTY2FsZSxcbiAgem9vbVN0ZXBNYWcsXG4gIG5FbGxpcHNlVGVzdFB0cyxcbn0gZnJvbSBcIi4vZ2xvYmFscy5qc1wiXG5cbmxldCB6b29tID0gMSxcbiAgem9vbU5leHQgPSAxLFxuICBjYW52YXNTY2FsZSxcbiAgb2JqRm5OYW1lID0gb2JqRm5Jbml0LFxuICBvYmpGbkxpbSxcbiAgb2JqRm4sXG4gIGNtYSxcbiAgc29sdXRpb25zSGlzdG9yeSxcbiAgbWVhbkhpc3RvcnksXG4gIGVsbGlwc2VQdHMsXG4gIHBvcHNpemVNdWx0aXBsaWVyID0gMVxuXG4vLyBJSUZFXG5jb25zdCBlbGxpcHNlVGVzdFB0cyA9ICgoKSA9PiB7XG4gIGNvbnN0IHRoZXRhU3RlcCA9ICgyICogTWF0aC5QSSkgLyBuRWxsaXBzZVRlc3RQdHNcbiAgY29uc3QgdGVzdFB0cyA9IFtdXG4gIGZvciAobGV0IHRoZXRhID0gMDsgdGhldGEgPCAyICogTWF0aC5QSTsgdGhldGEgKz0gdGhldGFTdGVwKSB7XG4gICAgdGVzdFB0cy5wdXNoKEZsb2F0MzJBcnJheS5mcm9tKFtNYXRoLnNpbih0aGV0YSksIE1hdGguY29zKHRoZXRhKV0pKVxuICB9XG4gIHJldHVybiB0ZXN0UHRzXG59KSgpXG5cbmNtYUluaXQoKVxuXG5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICBjb25zdCBbaW5mbywgbXNnXSA9IGUuZGF0YVxuICBpZiAoaW5mbyA9PT0gXCJmbk5hbWVcIikge1xuICAgIG9iakZuTmFtZSA9IG1zZ1xuICAgIGNtYUluaXQoKVxuICB9IGVsc2UgaWYgKGluZm8gPT09IFwicG9wTXVsdFwiKSB7XG4gICAgcG9wc2l6ZU11bHRpcGxpZXIgPSBtc2dcbiAgICBjbWFJbml0KClcbiAgfSBlbHNlIGlmIChpbmZvID09PSBcInN0ZXBcIikge1xuICAgIGlmICh6b29tICE9IHpvb21OZXh0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY21hU3RlcCgpXG4gIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJ6b29tXCIpIHtcbiAgICB6b29tID0gbXNnXG4gICAgdXBkYXRlQ2FudmFzU2NhbGUoKVxuICAgIHNlbmRNZWFuSGlzdG9yeSgpXG4gICAgc2VuZEN1cnJlbnRTb2x1dGlvbnMoKVxuICB9IGVsc2UgaWYgKGluZm8gPT09IFwiZHJhd1JlYWR5XCIpIHtcbiAgICBpZiAoem9vbSAhPSB6b29tTmV4dCkge1xuICAgICAgdHJhbnNpdGlvblN0ZXAoKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjbWFJbml0KCkge1xuICB6b29tID0gMVxuICB6b29tTmV4dCA9IHpvb21cbiAgdXBkYXRlT2JqRm4ob2JqRm5OYW1lKVxuICBzb2x1dGlvbnNIaXN0b3J5ID0gW11cbiAgbWVhbkhpc3RvcnkgPSBbXVxuICBjb25zdCBjbWFTaWdtYSA9IHNpZ21hU2NhbGUgKiBvYmpGbkxpbVxuICBjb25zdCByYW5kUmFkaWFucyA9IDIgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKVxuICBjb25zdCByYW5kUmFkaXVzID1cbiAgICBvYmpGbkxpbSAqIChtZWFuUmFkaXVzTWluICsgTWF0aC5yYW5kb20oKSAqIChtZWFuUmFkaXVzTWF4IC0gbWVhblJhZGl1c01pbikpXG4gIGNvbnNvbGUubG9nKFwib2JqRm5MaW1cIiwgb2JqRm5MaW0pXG4gIGNvbnNvbGUubG9nKFwicmFuZFJhZGl1c1wiLCByYW5kUmFkaXVzKVxuICBjb25zdCBjbWFNZWFuID0gRmxvYXQzMkFycmF5LmZyb20oW1xuICAgIHJhbmRSYWRpdXMgKiBNYXRoLmNvcyhyYW5kUmFkaWFucyksXG4gICAgcmFuZFJhZGl1cyAqIE1hdGguc2luKHJhbmRSYWRpYW5zKSxcbiAgXSlcbiAgY29uc3QgcG9wc2l6ZSA9IGdldERlZmF1bHRDTUFQb3BzaXplKDIpICogcG9wc2l6ZU11bHRpcGxpZXJcbiAgY21hID0gbmV3IENNQShjbWFNZWFuLCBjbWFTaWdtYSwgcG9wc2l6ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXG4gIGNtYVN0ZXAoKVxufVxuXG5mdW5jdGlvbiBjbWFTdGVwKCkge1xuICBjb25zdCBzb2x1dGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KDIgKiBjbWEucG9wc2l6ZSksXG4gICAgc29sX3Njb3JlX2FycmF5ID0gW11cbiAgbGV0IHNjb3JlU3VtID0gMCxcbiAgICBtYXhBYnNEaW0gPSAwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY21hLnBvcHNpemU7IGkrKykge1xuICAgIGNvbnN0IHNvbHV0aW9uID0gY21hLmFzaygpLFxuICAgICAgc2NvcmUgPSBvYmpGbihzb2x1dGlvbilcbiAgICBzY29yZVN1bSArPSBzY29yZVxuICAgIHNvbF9zY29yZV9hcnJheS5wdXNoKHsgc29sdXRpb24sIHNjb3JlIH0pXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICAgIGNvbnN0IHNvbERpbSA9IHNvbHV0aW9uW2pdLFxuICAgICAgICBhYnNTb2xEaW0gPSBNYXRoLmFicyhzb2xEaW0pXG4gICAgICBpZiAoYWJzU29sRGltID4gbWF4QWJzRGltKSB7XG4gICAgICAgIG1heEFic0RpbSA9IGFic1NvbERpbVxuICAgICAgfVxuICAgICAgc29sdXRpb25zWzIgKiBpICsgal0gPSBzb2xEaW1cbiAgICB9XG4gIH1cbiAgc29sdXRpb25zSGlzdG9yeS5wdXNoKHNvbHV0aW9ucylcbiAgZWxsaXBzZVB0cyA9IGdldEVsbGlwc2VQdHMoKVxuICBtZWFuSGlzdG9yeS5wdXNoKC4uLmNtYS5tZWFuLnNsaWNlKCkpXG4gIC8vIGNvbnN0IGNtYU1hdHMgPSBbXCJcIl1cbiAgLy8gZm9yIChsZXQgcHJvcCBvZiBbXCJCXCIsIFwiQkRcIiwgXCJDXCJdKSB7XG4gIC8vICAgY21hTWF0cy5wdXNoKGNtYVtwcm9wXS5kYXRhLnRvU3RyaW5nKCksIFwiXFxuXCIpXG4gIC8vIH1cbiAgLy8gY29uc29sZS5sb2coLi4uY21hTWF0cylcbiAgLy8gc2VuZEVsbGlwc2VQYXJhbXMoKVxuICAvLyBzZW5kRWxsaXBzZVB0cygpXG4gIHNlbmRNZWFuSGlzdG9yeSgpXG4gIHRyYW5zaXRpb25TdGVwKClcbiAgY21hLnRlbGwoc29sX3Njb3JlX2FycmF5KVxuXG4gIGNvbnNvbGUubG9nKHNjb3JlU3VtIC8gY21hLnBvcHNpemUpXG5cbiAgem9vbU5leHQgPSAoMC44ICogb2JqRm5MaW0pIC8gbWF4QWJzRGltXG59XG5cbmZ1bmN0aW9uIHNlbmRNZWFuSGlzdG9yeSgpIHtcbiAgY29uc3QgbWVhbkhpc3RvcnlUeXBlZCA9IEZsb2F0MzJBcnJheS5mcm9tKFxuICAgIG1lYW5IaXN0b3J5Lm1hcCgodikgPT4gdiAqIGNhbnZhc1NjYWxlKVxuICApXG4gIHBvc3RNZXNzYWdlKFtcIm1lYW5zXCIsIG1lYW5IaXN0b3J5VHlwZWRdKVxufVxuXG5mdW5jdGlvbiBzZW5kQ3VycmVudFNvbHV0aW9ucygpIHtcbiAgY29uc3QgY3VycmVudFNvbHV0aW9uID0gc29sdXRpb25zSGlzdG9yeVtzb2x1dGlvbnNIaXN0b3J5Lmxlbmd0aCAtIDFdXG4gIHBvc3RNZXNzYWdlKFtcbiAgICBcInNvbHV0aW9uc1wiLFxuICAgIFtcbiAgICAgIGN1cnJlbnRTb2x1dGlvbi5tYXAoKHYpID0+IE1hdGgucm91bmQodiAqIGNhbnZhc1NjYWxlKSksXG4gICAgICBlbGxpcHNlUHRzLm1hcCgodikgPT4gTWF0aC5yb3VuZCh2ICogY2FudmFzU2NhbGUpKSxcbiAgICBdLFxuICBdKVxufVxuXG5mdW5jdGlvbiB1cGRhdGVPYmpGbihvYmpGbk5hbWUpIHtcbiAgb2JqRm4gPSBvYmpGbnNbb2JqRm5OYW1lXVxuICBvYmpGbkxpbSA9IG9iakZuLnh5TGltXG4gIHVwZGF0ZUNhbnZhc1NjYWxlKClcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2FudmFzU2NhbGUoKSB7XG4gIGNhbnZhc1NjYWxlID0gKHpvb20gKiAwLjUgKiBjYW52YXNEaW0pIC8gb2JqRm5MaW1cbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvblN0ZXAoKSB7XG4gIGlmICh6b29tIDwgem9vbU5leHQpIHtcbiAgICB6b29tICo9IHpvb21TdGVwTWFnXG4gICAgaWYgKHpvb20gPiB6b29tTmV4dCkge1xuICAgICAgem9vbSA9IHpvb21OZXh0XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHpvb20gLz0gem9vbVN0ZXBNYWdcbiAgICBpZiAoem9vbSA8IHpvb21OZXh0KSB7XG4gICAgICB6b29tID0gem9vbU5leHRcbiAgICB9XG4gIH1cbiAgcG9zdE1lc3NhZ2UoW1wiem9vbVwiLCB6b29tXSlcbiAgdXBkYXRlQ2FudmFzU2NhbGUoKVxuICBzZW5kQ3VycmVudFNvbHV0aW9ucygpXG59XG5cbi8vIGZ1bmN0aW9uIHNlbmRFbGxpcHNlUGFyYW1zKCkge1xuLy8gICBjb25zdCBbYSwgYiwgXywgY10gPSBjbWEuQy5kYXRhLnNsaWNlKClcbi8vICAgY29uc3QgdDAgPSAoYSArIGMpIC8gMixcbi8vICAgICB0MSA9IChhIC0gYykgLyAyLFxuLy8gICAgIHQyID0gTWF0aC5zcXJ0KHQxICogdDEgKyBiICogYilcbi8vICAgY29uc3QgbGFtYmRhMCA9IHQwICsgdDIsXG4vLyAgICAgbGFtYmRhMSA9IHQwIC0gdDJcbi8vICAgY29uc3QgdGhldGEgPSAoKSA9PiB7XG4vLyAgICAgaWYgKGIgPT0gMCkge1xuLy8gICAgICAgaWYgKGEgPj0gYykge1xuLy8gICAgICAgICByZXR1cm4gMFxuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgcmV0dXJuIE1hdGguUEkgLyAyXG4vLyAgICAgICB9XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIHJldHVybiBNYXRoLmF0YW4yKGxhbWJkYTAgLSBhLCBiKVxuLy8gICAgIH1cbi8vICAgfVxuLy8gICBjb25zdCBzaWdtYSA9IGNtYS5zaWdtYVxuLy8gICBwb3N0TWVzc2FnZShbXG4vLyAgICAgXCJlbGxpcHNlUGFyYW1zXCIsXG4vLyAgICAgRmxvYXQzMkFycmF5LmZyb20oW2xhbWJkYTAgKiBzaWdtYSwgbGFtYmRhMSAqIHNpZ21hLCB0aGV0YSgpXSksXG4vLyAgIF0pXG4vLyB9XG5cbmZ1bmN0aW9uIGdldEVsbGlwc2VQdHMoKSB7XG4gIGNvbnN0IEJEID0gY21hLkJELFxuICAgIG1lYW4gPSBjbWEubWVhbixcbiAgICBzaWdtYSA9IGNtYS5zaWdtYVxuICBjb25zdCBwdHMgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsbGlwc2VUZXN0UHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gQkQubXVsVmVjKGVsbGlwc2VUZXN0UHRzW2ldKVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICBwdHMucHVzaChtZWFuW2pdICsgc2lnbWEgKiBvZmZzZXRbal0pXG4gICAgfVxuICB9XG4gIHJldHVybiBGbG9hdDMyQXJyYXkuZnJvbShwdHMpXG59XG5cbi8vIGZ1bmN0aW9uIHNxTWF0TXVsVmVjKEEsdikge1xuLy8gICBjb25zdCByZXMgPSBuZXcgRmxvYXQzMkFycmF5KDIpLmZpbGwoMClcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbi8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDI7IGorKykge1xuLy8gICAgICAgLy8gcmVzW2ldICs9IHRoaXMuZ2V0KGksIGopICogdltqXVxuLy8gICAgICAgcmVzW2ldICs9IEFbMippK2pdICogdltqXVxuLy8gICAgIH1cbi8vICAgfVxuLy8gICByZXR1cm4gcmVzXG4vLyB9XG4iLCJleHBvcnQgY29uc3QgblZpeldvcmtlcnMgPSA4LFxuICBjYW52YXNEaW0gPSA2MDAsXG4gIG1hcmtlclIgPSA3LFxuICBvYmpGbkluaXQgPSBcImFja2xleVwiLFxuICBtZWFuUmFkaXVzTWluID0gMC42LFxuICBtZWFuUmFkaXVzTWF4ID0gMC45LFxuICBzaWdtYVNjYWxlID0gMC41LFxuICB6b29tU3RlcE1hZyA9IDEuMDUsXG4gIG5FbGxpcHNlVGVzdFB0cyA9IDMyXG4iLCIvLyB7XG4vLyAgIGFja2xleTogXCJBY2tsZXlcIixcbi8vICAgYm9oYWNoZXZza3kxOiBcIkJvaGFjaGV2c2t5IE5vLjFcIixcbi8vICAgZ3JpZXdhbms6IFwiR3JpZXdhbmtcIixcbi8vICAgcmFzdHJpZ2luOiBcIlJhc3RyaWdpblwiLFxuLy8gfVxuXG5leHBvcnQgY29uc3Qgb2JqRm5zID0ge1xuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2Fja2xleS5odG1sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vQ29kZS9hY2tsZXltLmh0bWxcbiAgYWNrbGV5OiAoaW5wdXRzKSA9PiB7XG4gICAgLy8gZGVmYXVsdCBhPTIwLCBiPTAuMiwgYz0ycGlcbiAgICBjb25zdCBhID0gMjAsXG4gICAgICBiID0gMC4yLFxuICAgICAgYyA9IDIgKiBNYXRoLlBJXG4gICAgLy8gbGV0IGQgPSBpbnB1dHMubGVuZ3RoXG4gICAgY29uc3QgZCA9IDIsXG4gICAgICBkX2ludiA9IDAuNSAvLyAoMSAvIGQpXG4gICAgbGV0IHN1bTEgPSAwLFxuICAgICAgc3VtMiA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGQ7IGkrKykge1xuICAgICAgbGV0IHhpID0gaW5wdXRzW2ldXG4gICAgICBzdW0xICs9IHhpICogeGlcbiAgICAgIHN1bTIgKz0gTWF0aC5jb3MoYyAqIHhpKVxuICAgIH1cbiAgICAvLyBsZXQgZF9pbnYgPSAxIC8gZFxuICAgIGxldCB0ZXJtMSA9IC1hICogTWF0aC5leHAoLWIgKiBNYXRoLnNxcnQoc3VtMSAqIGRfaW52KSksXG4gICAgICB0ZXJtMiA9IC1NYXRoLmV4cChzdW0yICogZF9pbnYpXG4gICAgcmV0dXJuIHRlcm0xICsgdGVybTIgKyBhICsgTWF0aC5FXG4gIH0sXG4gIC8vIGh0dHA6Ly9iZW5jaG1hcmtmY25zLnh5ei9iZW5jaG1hcmtmY25zL2JvaGFjaGV2c2t5bjFmY24uaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL0NvZGUvYm9oYTFtLmh0bWxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9ib2hhLmh0bWxcbiAgYm9oYWNoZXZza3kxOiAoaW5wdXRzKSA9PiB7XG4gICAgbGV0IHgxID0gaW5wdXRzWzBdXG4gICAgbGV0IHgyID0gaW5wdXRzWzFdXG5cbiAgICBsZXQgdGVybTEgPSB4MSAqIHgxXG4gICAgbGV0IHRlcm0yID0gMiAqIHgyICogeDJcbiAgICBsZXQgdGVybTMgPSAtMC4zICogTWF0aC5jb3MoMyAqIE1hdGguUEkgKiB4MSlcbiAgICBsZXQgdGVybTQgPSAtMC40ICogTWF0aC5jb3MoNCAqIE1hdGguUEkgKiB4MilcblxuICAgIHJldHVybiB0ZXJtMSArIHRlcm0yICsgdGVybTMgKyB0ZXJtNCArIDAuN1xuICB9LFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2dyaWV3YW5rLmh0bWxcbiAgZ3JpZXdhbms6IChpbnB1dHMpID0+IHtcbiAgICBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBsZXQgc3VtID0gMFxuICAgIGxldCBwcm9kID0gMVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bSArPSAoeGkgKiB4aSkgLyA0MDAwXG4gICAgICBwcm9kICo9IE1hdGguY29zKHhpIC8gTWF0aC5zcXJ0KGkgKyAxKSlcbiAgICB9XG4gICAgcmV0dXJuIHN1bSAtIHByb2QgKyAxXG4gIH0sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vcmFzdHIuaHRtbFxuICByYXN0cmlnaW46IChpbnB1dHMpID0+IHtcbiAgICBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBsZXQgc3VtID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bSArPSB4aSAqIHhpIC0gMTAgKiBNYXRoLmNvcygyICogTWF0aC5QSSAqIHhpKVxuICAgIH1cbiAgICByZXR1cm4gMTAgKiBkICsgc3VtXG4gIH0sXG59XG5cbi8vIGZhbmN5IG5hbWVzIGZvciBzZWxlY3QgbWVudVxub2JqRm5zLmFja2xleS5mYW5jeU5hbWUgPSBcIkFja2xleVwiXG5vYmpGbnMuYm9oYWNoZXZza3kxLmZhbmN5TmFtZSA9IFwiQm9oYWNoZXZza3kgTm8uMVwiXG5vYmpGbnMuZ3JpZXdhbmsuZmFuY3lOYW1lID0gXCJHcmlld2Fua1wiXG5vYmpGbnMucmFzdHJpZ2luLmZhbmN5TmFtZSA9IFwiUmFzdHJpZ2luXCJcblxuLy8gZm5MaW1zIGZvciBkaXNwbGF5IGxpbWl0c1xub2JqRm5zLmFja2xleS54eUxpbSA9IDMyLjc2OFxub2JqRm5zLmJvaGFjaGV2c2t5MS54eUxpbSA9IDEwMFxub2JqRm5zLmdyaWV3YW5rLnh5TGltID0gNjAwXG5vYmpGbnMucmFzdHJpZ2luLnh5TGltID0gNS4xMlxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyB0aGUgc3RhcnR1cCBmdW5jdGlvblxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcblx0Ly8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5cdHZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3JjX2pzX2NtYS1saWJfanNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvY21hZXMtZGVtby9jbWEtd29ya2VyLmpzXCIpKSlcblx0X193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcblx0cmV0dXJuIF9fd2VicGFja19leHBvcnRzX187XG59O1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzIGFuZCBzaWJsaW5nIGNodW5rcyBmb3IgdGhlIGVudHJ5cG9pbnRcbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIFwiOGU3YjYyNGQ5NDBkZDMyNTMzNGRcIiArIFwiLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4vLyBcIjFcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwic3JjX3BhZ2VzX2NtYWVzLWRlbW9fY21hLXdvcmtlcl9qc1wiOiAxXG59O1xuXG4vLyBpbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmdcbnZhciBpbnN0YWxsQ2h1bmsgPSAoZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdHdoaWxlKGNodW5rSWRzLmxlbmd0aClcblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHMucG9wKCldID0gMTtcblx0cGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmkgPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0Ly8gXCIxXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG5cdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0aW1wb3J0U2NyaXB0cyhfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCkpO1xuXHRcdH1cblx0fVxufTtcblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJwYWNrX3Rlc3RcIl0gPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja190ZXN0XCJdIHx8IFtdO1xudmFyIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uID0gY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSBpbnN0YWxsQ2h1bms7XG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3QiLCJ2YXIgbmV4dCA9IF9fd2VicGFja19yZXF1aXJlX18ueDtcbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShcInNyY19qc19jbWEtbGliX2pzXCIpLnRoZW4obmV4dCk7XG59OyIsIiIsIi8vIHJ1biBzdGFydHVwXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIiwiIl0sIm5hbWVzIjpbIkNNQSIsImdldERlZmF1bHRDTUFQb3BzaXplIiwib2JqRm5zIiwib2JqRm5Jbml0IiwiY2FudmFzRGltIiwibWVhblJhZGl1c01pbiIsIm1lYW5SYWRpdXNNYXgiLCJzaWdtYVNjYWxlIiwiem9vbVN0ZXBNYWciLCJuRWxsaXBzZVRlc3RQdHMiLCJ6b29tIiwiem9vbU5leHQiLCJjYW52YXNTY2FsZSIsIm9iakZuTmFtZSIsIm9iakZuTGltIiwib2JqRm4iLCJjbWEiLCJzb2x1dGlvbnNIaXN0b3J5IiwibWVhbkhpc3RvcnkiLCJlbGxpcHNlUHRzIiwicG9wc2l6ZU11bHRpcGxpZXIiLCJlbGxpcHNlVGVzdFB0cyIsInRoZXRhU3RlcCIsIk1hdGgiLCJQSSIsInRlc3RQdHMiLCJ0aGV0YSIsInB1c2giLCJGbG9hdDMyQXJyYXkiLCJmcm9tIiwic2luIiwiY29zIiwiY21hSW5pdCIsIm9ubWVzc2FnZSIsImUiLCJkYXRhIiwiaW5mbyIsIm1zZyIsImNtYVN0ZXAiLCJ1cGRhdGVDYW52YXNTY2FsZSIsInNlbmRNZWFuSGlzdG9yeSIsInNlbmRDdXJyZW50U29sdXRpb25zIiwidHJhbnNpdGlvblN0ZXAiLCJ1cGRhdGVPYmpGbiIsImNtYVNpZ21hIiwicmFuZFJhZGlhbnMiLCJyYW5kb20iLCJyYW5kUmFkaXVzIiwiY29uc29sZSIsImxvZyIsImNtYU1lYW4iLCJwb3BzaXplIiwidW5kZWZpbmVkIiwic29sdXRpb25zIiwic29sX3Njb3JlX2FycmF5Iiwic2NvcmVTdW0iLCJtYXhBYnNEaW0iLCJpIiwic29sdXRpb24iLCJhc2siLCJzY29yZSIsImoiLCJzb2xEaW0iLCJhYnNTb2xEaW0iLCJhYnMiLCJnZXRFbGxpcHNlUHRzIiwibWVhbiIsInNsaWNlIiwidGVsbCIsIm1lYW5IaXN0b3J5VHlwZWQiLCJtYXAiLCJ2IiwicG9zdE1lc3NhZ2UiLCJjdXJyZW50U29sdXRpb24iLCJsZW5ndGgiLCJyb3VuZCIsInh5TGltIiwiQkQiLCJzaWdtYSIsInB0cyIsIm9mZnNldCIsIm11bFZlYyIsIm5WaXpXb3JrZXJzIiwibWFya2VyUiIsImFja2xleSIsImlucHV0cyIsImEiLCJiIiwiYyIsImQiLCJkX2ludiIsInN1bTEiLCJzdW0yIiwieGkiLCJ0ZXJtMSIsImV4cCIsInNxcnQiLCJ0ZXJtMiIsIkUiLCJib2hhY2hldnNreTEiLCJ4MSIsIngyIiwidGVybTMiLCJ0ZXJtNCIsImdyaWV3YW5rIiwic3VtIiwicHJvZCIsInJhc3RyaWdpbiIsImZhbmN5TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=