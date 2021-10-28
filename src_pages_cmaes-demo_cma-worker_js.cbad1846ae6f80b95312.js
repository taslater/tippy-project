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
  } else if (info === "drawReady") {
    if (zoom != zoomNext) {
      transitionStep();
    }
  } else if (info === "zoom") {
    zoom = msg;
    zoomNext = msg; // console.log("cma got zoom", zoom)

    updateCanvasScale();
    sendMeanHistory();
    sendCurrentSolutions();
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
  // sendMeanHistory()


  transitionStep();
  cma.tell(sol_score_array);
  console.log("mean score:", scoreSum / cma.popsize);
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
  sendMeanHistory();
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
/******/ 			return "" + chunkId + "." + "11832745cbf7350984ce" + ".js";
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
/******/ 		var chunkLoadingGlobal = self["webpackChunktippy_project_website"] = self["webpackChunktippy_project_website"] || [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX2NtYWVzLWRlbW9fY21hLXdvcmtlcl9qcy5jYmFkMTg0NmFlNmY4MGI5NTMxMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBVUEsSUFBSVUsSUFBSSxHQUFHLENBQVg7QUFBQSxJQUNFQyxRQUFRLEdBQUcsQ0FEYjtBQUFBLElBRUVDLFdBRkY7QUFBQSxJQUdFQyxTQUFTLEdBQUdWLGtEQUhkO0FBQUEsSUFJRVcsUUFKRjtBQUFBLElBS0VDLEtBTEY7QUFBQSxJQU1FQyxHQU5GO0FBQUEsSUFPRUMsZ0JBUEY7QUFBQSxJQVFFQyxXQVJGO0FBQUEsSUFTRUMsVUFURjtBQUFBLElBVUVDLGlCQUFpQixHQUFHLENBVnRCLEVBWUE7O0FBQ0EsSUFBTUMsY0FBYyxHQUFJLFlBQU07QUFDNUIsTUFBTUMsU0FBUyxHQUFJLElBQUlDLElBQUksQ0FBQ0MsRUFBVixHQUFnQmYsd0RBQWxDO0FBQ0EsTUFBTWdCLE9BQU8sR0FBRyxFQUFoQjs7QUFDQSxPQUFLLElBQUlDLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHLElBQUlILElBQUksQ0FBQ0MsRUFBckMsRUFBeUNFLEtBQUssSUFBSUosU0FBbEQsRUFBNkQ7QUFDM0RHLElBQUFBLE9BQU8sQ0FBQ0UsSUFBUixDQUFhQyxZQUFZLENBQUNDLElBQWIsQ0FBa0IsQ0FBQ04sSUFBSSxDQUFDTyxHQUFMLENBQVNKLEtBQVQsQ0FBRCxFQUFrQkgsSUFBSSxDQUFDUSxHQUFMLENBQVNMLEtBQVQsQ0FBbEIsQ0FBbEIsQ0FBYjtBQUNEOztBQUNELFNBQU9ELE9BQVA7QUFDRCxDQVBzQixFQUF2Qjs7QUFTQU8sT0FBTzs7QUFFUEMsU0FBUyxHQUFHLG1CQUFDQyxDQUFELEVBQU87QUFDakIsK0JBQW9CQSxDQUFDLENBQUNDLElBQXRCO0FBQUEsTUFBT0MsSUFBUDtBQUFBLE1BQWFDLEdBQWI7O0FBQ0EsTUFBSUQsSUFBSSxLQUFL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QUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxhQUFhO1dBQ2I7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBOztXQUVBOzs7OztXQ3BDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVIQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlLy4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vY21hLXdvcmtlci5qcyIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvLi9zcmMvcGFnZXMvY21hZXMtZGVtby9nbG9iYWxzLmpzIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL29iai1mbnMuanMiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9pbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9zdGFydHVwIGNodW5rIGRlcGVuZGVuY2llcyIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ01BLCBnZXREZWZhdWx0Q01BUG9wc2l6ZSB9IGZyb20gXCIuLi8uLi9qcy9jbWEtbGliLmpzXCJcbmltcG9ydCB7IG9iakZucyB9IGZyb20gXCIuL29iai1mbnMuanNcIlxuaW1wb3J0IHtcbiAgb2JqRm5Jbml0LFxuICBjYW52YXNEaW0sXG4gIG1lYW5SYWRpdXNNaW4sXG4gIG1lYW5SYWRpdXNNYXgsXG4gIHNpZ21hU2NhbGUsXG4gIHpvb21TdGVwTWFnLFxuICBuRWxsaXBzZVRlc3RQdHMsXG59IGZyb20gXCIuL2dsb2JhbHMuanNcIlxuXG5sZXQgem9vbSA9IDEsXG4gIHpvb21OZXh0ID0gMSxcbiAgY2FudmFzU2NhbGUsXG4gIG9iakZuTmFtZSA9IG9iakZuSW5pdCxcbiAgb2JqRm5MaW0sXG4gIG9iakZuLFxuICBjbWEsXG4gIHNvbHV0aW9uc0hpc3RvcnksXG4gIG1lYW5IaXN0b3J5LFxuICBlbGxpcHNlUHRzLFxuICBwb3BzaXplTXVsdGlwbGllciA9IDFcblxuLy8gSUlGRVxuY29uc3QgZWxsaXBzZVRlc3RQdHMgPSAoKCkgPT4ge1xuICBjb25zdCB0aGV0YVN0ZXAgPSAoMiAqIE1hdGguUEkpIC8gbkVsbGlwc2VUZXN0UHRzXG4gIGNvbnN0IHRlc3RQdHMgPSBbXVxuICBmb3IgKGxldCB0aGV0YSA9IDA7IHRoZXRhIDwgMiAqIE1hdGguUEk7IHRoZXRhICs9IHRoZXRhU3RlcCkge1xuICAgIHRlc3RQdHMucHVzaChGbG9hdDMyQXJyYXkuZnJvbShbTWF0aC5zaW4odGhldGEpLCBNYXRoLmNvcyh0aGV0YSldKSlcbiAgfVxuICByZXR1cm4gdGVzdFB0c1xufSkoKVxuXG5jbWFJbml0KClcblxub25tZXNzYWdlID0gKGUpID0+IHtcbiAgY29uc3QgW2luZm8sIG1zZ10gPSBlLmRhdGFcbiAgaWYgKGluZm8gPT09IFwiZm5OYW1lXCIpIHtcbiAgICBvYmpGbk5hbWUgPSBtc2dcbiAgICBjbWFJbml0KClcbiAgfSBlbHNlIGlmIChpbmZvID09PSBcInBvcE11bHRcIikge1xuICAgIHBvcHNpemVNdWx0aXBsaWVyID0gbXNnXG4gICAgY21hSW5pdCgpXG4gIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJzdGVwXCIpIHtcbiAgICBpZiAoem9vbSAhPSB6b29tTmV4dCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNtYVN0ZXAoKVxuICB9IGVsc2UgaWYgKGluZm8gPT09IFwiZHJhd1JlYWR5XCIpIHtcbiAgICBpZiAoem9vbSAhPSB6b29tTmV4dCkge1xuICAgICAgdHJhbnNpdGlvblN0ZXAoKVxuICAgIH1cbiAgfSBlbHNlIGlmIChpbmZvID09PSBcInpvb21cIikge1xuICAgIHpvb20gPSBtc2dcbiAgICB6b29tTmV4dCA9IG1zZ1xuICAgIC8vIGNvbnNvbGUubG9nKFwiY21hIGdvdCB6b29tXCIsIHpvb20pXG4gICAgdXBkYXRlQ2FudmFzU2NhbGUoKVxuICAgIHNlbmRNZWFuSGlzdG9yeSgpXG4gICAgc2VuZEN1cnJlbnRTb2x1dGlvbnMoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNtYUluaXQoKSB7XG4gIHpvb20gPSAxXG4gIHpvb21OZXh0ID0gem9vbVxuICB1cGRhdGVPYmpGbihvYmpGbk5hbWUpXG4gIHNvbHV0aW9uc0hpc3RvcnkgPSBbXVxuICBtZWFuSGlzdG9yeSA9IFtdXG4gIGNvbnN0IGNtYVNpZ21hID0gc2lnbWFTY2FsZSAqIG9iakZuTGltXG4gIGNvbnN0IHJhbmRSYWRpYW5zID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpXG4gIGNvbnN0IHJhbmRSYWRpdXMgPVxuICAgIG9iakZuTGltICogKG1lYW5SYWRpdXNNaW4gKyBNYXRoLnJhbmRvbSgpICogKG1lYW5SYWRpdXNNYXggLSBtZWFuUmFkaXVzTWluKSlcbiAgY29uc29sZS5sb2coXCJvYmpGbkxpbVwiLCBvYmpGbkxpbSlcbiAgY29uc29sZS5sb2coXCJyYW5kUmFkaXVzXCIsIHJhbmRSYWRpdXMpXG4gIGNvbnN0IGNtYU1lYW4gPSBGbG9hdDMyQXJyYXkuZnJvbShbXG4gICAgcmFuZFJhZGl1cyAqIE1hdGguY29zKHJhbmRSYWRpYW5zKSxcbiAgICByYW5kUmFkaXVzICogTWF0aC5zaW4ocmFuZFJhZGlhbnMpLFxuICBdKVxuICBjb25zdCBwb3BzaXplID0gZ2V0RGVmYXVsdENNQVBvcHNpemUoMikgKiBwb3BzaXplTXVsdGlwbGllclxuICBjbWEgPSBuZXcgQ01BKGNtYU1lYW4sIGNtYVNpZ21hLCBwb3BzaXplLCB1bmRlZmluZWQsIHVuZGVmaW5lZClcbiAgY21hU3RlcCgpXG59XG5cbmZ1bmN0aW9uIGNtYVN0ZXAoKSB7XG4gIGNvbnN0IHNvbHV0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkoMiAqIGNtYS5wb3BzaXplKSxcbiAgICBzb2xfc2NvcmVfYXJyYXkgPSBbXVxuICBsZXQgc2NvcmVTdW0gPSAwLFxuICAgIG1heEFic0RpbSA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbWEucG9wc2l6ZTsgaSsrKSB7XG4gICAgY29uc3Qgc29sdXRpb24gPSBjbWEuYXNrKCksXG4gICAgICBzY29yZSA9IG9iakZuKHNvbHV0aW9uKVxuICAgIHNjb3JlU3VtICs9IHNjb3JlXG4gICAgc29sX3Njb3JlX2FycmF5LnB1c2goeyBzb2x1dGlvbiwgc2NvcmUgfSlcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDI7IGorKykge1xuICAgICAgY29uc3Qgc29sRGltID0gc29sdXRpb25bal0sXG4gICAgICAgIGFic1NvbERpbSA9IE1hdGguYWJzKHNvbERpbSlcbiAgICAgIGlmIChhYnNTb2xEaW0gPiBtYXhBYnNEaW0pIHtcbiAgICAgICAgbWF4QWJzRGltID0gYWJzU29sRGltXG4gICAgICB9XG4gICAgICBzb2x1dGlvbnNbMiAqIGkgKyBqXSA9IHNvbERpbVxuICAgIH1cbiAgfVxuICBzb2x1dGlvbnNIaXN0b3J5LnB1c2goc29sdXRpb25zKVxuICBlbGxpcHNlUHRzID0gZ2V0RWxsaXBzZVB0cygpXG4gIG1lYW5IaXN0b3J5LnB1c2goLi4uY21hLm1lYW4uc2xpY2UoKSlcbiAgLy8gY29uc3QgY21hTWF0cyA9IFtcIlwiXVxuICAvLyBmb3IgKGxldCBwcm9wIG9mIFtcIkJcIiwgXCJCRFwiLCBcIkNcIl0pIHtcbiAgLy8gICBjbWFNYXRzLnB1c2goY21hW3Byb3BdLmRhdGEudG9TdHJpbmcoKSwgXCJcXG5cIilcbiAgLy8gfVxuICAvLyBjb25zb2xlLmxvZyguLi5jbWFNYXRzKVxuICAvLyBzZW5kRWxsaXBzZVBhcmFtcygpXG4gIC8vIHNlbmRFbGxpcHNlUHRzKClcbiAgLy8gc2VuZE1lYW5IaXN0b3J5KClcbiAgdHJhbnNpdGlvblN0ZXAoKVxuICBjbWEudGVsbChzb2xfc2NvcmVfYXJyYXkpXG5cbiAgY29uc29sZS5sb2coXCJtZWFuIHNjb3JlOlwiLCBzY29yZVN1bSAvIGNtYS5wb3BzaXplKVxuXG4gIHpvb21OZXh0ID0gKDAuOCAqIG9iakZuTGltKSAvIG1heEFic0RpbVxufVxuXG5mdW5jdGlvbiBzZW5kTWVhbkhpc3RvcnkoKSB7XG4gIGNvbnN0IG1lYW5IaXN0b3J5VHlwZWQgPSBGbG9hdDMyQXJyYXkuZnJvbShcbiAgICBtZWFuSGlzdG9yeS5tYXAoKHYpID0+IHYgKiBjYW52YXNTY2FsZSlcbiAgKVxuICBwb3N0TWVzc2FnZShbXCJtZWFuc1wiLCBtZWFuSGlzdG9yeVR5cGVkXSlcbn1cblxuZnVuY3Rpb24gc2VuZEN1cnJlbnRTb2x1dGlvbnMoKSB7XG4gIGNvbnN0IGN1cnJlbnRTb2x1dGlvbiA9IHNvbHV0aW9uc0hpc3Rvcnlbc29sdXRpb25zSGlzdG9yeS5sZW5ndGggLSAxXVxuICBwb3N0TWVzc2FnZShbXG4gICAgXCJzb2x1dGlvbnNcIixcbiAgICBbXG4gICAgICBjdXJyZW50U29sdXRpb24ubWFwKCh2KSA9PiBNYXRoLnJvdW5kKHYgKiBjYW52YXNTY2FsZSkpLFxuICAgICAgZWxsaXBzZVB0cy5tYXAoKHYpID0+IE1hdGgucm91bmQodiAqIGNhbnZhc1NjYWxlKSksXG4gICAgXSxcbiAgXSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlT2JqRm4ob2JqRm5OYW1lKSB7XG4gIG9iakZuID0gb2JqRm5zW29iakZuTmFtZV1cbiAgb2JqRm5MaW0gPSBvYmpGbi54eUxpbVxuICB1cGRhdGVDYW52YXNTY2FsZSgpXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNhbnZhc1NjYWxlKCkge1xuICBjYW52YXNTY2FsZSA9ICh6b29tICogMC41ICogY2FudmFzRGltKSAvIG9iakZuTGltXG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25TdGVwKCkge1xuICBpZiAoem9vbSA8IHpvb21OZXh0KSB7XG4gICAgem9vbSAqPSB6b29tU3RlcE1hZ1xuICAgIGlmICh6b29tID4gem9vbU5leHQpIHtcbiAgICAgIHpvb20gPSB6b29tTmV4dFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB6b29tIC89IHpvb21TdGVwTWFnXG4gICAgaWYgKHpvb20gPCB6b29tTmV4dCkge1xuICAgICAgem9vbSA9IHpvb21OZXh0XG4gICAgfVxuICB9XG4gIHBvc3RNZXNzYWdlKFtcInpvb21cIiwgem9vbV0pXG4gIHVwZGF0ZUNhbnZhc1NjYWxlKClcbiAgc2VuZE1lYW5IaXN0b3J5KClcbiAgc2VuZEN1cnJlbnRTb2x1dGlvbnMoKVxufVxuXG4vLyBmdW5jdGlvbiBzZW5kRWxsaXBzZVBhcmFtcygpIHtcbi8vICAgY29uc3QgW2EsIGIsIF8sIGNdID0gY21hLkMuZGF0YS5zbGljZSgpXG4vLyAgIGNvbnN0IHQwID0gKGEgKyBjKSAvIDIsXG4vLyAgICAgdDEgPSAoYSAtIGMpIC8gMixcbi8vICAgICB0MiA9IE1hdGguc3FydCh0MSAqIHQxICsgYiAqIGIpXG4vLyAgIGNvbnN0IGxhbWJkYTAgPSB0MCArIHQyLFxuLy8gICAgIGxhbWJkYTEgPSB0MCAtIHQyXG4vLyAgIGNvbnN0IHRoZXRhID0gKCkgPT4ge1xuLy8gICAgIGlmIChiID09IDApIHtcbi8vICAgICAgIGlmIChhID49IGMpIHtcbi8vICAgICAgICAgcmV0dXJuIDBcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHJldHVybiBNYXRoLlBJIC8gMlxuLy8gICAgICAgfVxuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICByZXR1cm4gTWF0aC5hdGFuMihsYW1iZGEwIC0gYSwgYilcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgY29uc3Qgc2lnbWEgPSBjbWEuc2lnbWFcbi8vICAgcG9zdE1lc3NhZ2UoW1xuLy8gICAgIFwiZWxsaXBzZVBhcmFtc1wiLFxuLy8gICAgIEZsb2F0MzJBcnJheS5mcm9tKFtsYW1iZGEwICogc2lnbWEsIGxhbWJkYTEgKiBzaWdtYSwgdGhldGEoKV0pLFxuLy8gICBdKVxuLy8gfVxuXG5mdW5jdGlvbiBnZXRFbGxpcHNlUHRzKCkge1xuICBjb25zdCBCRCA9IGNtYS5CRCxcbiAgICBtZWFuID0gY21hLm1lYW4sXG4gICAgc2lnbWEgPSBjbWEuc2lnbWFcbiAgY29uc3QgcHRzID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGxpcHNlVGVzdFB0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG9mZnNldCA9IEJELm11bFZlYyhlbGxpcHNlVGVzdFB0c1tpXSlcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDI7IGorKykge1xuICAgICAgcHRzLnB1c2gobWVhbltqXSArIHNpZ21hICogb2Zmc2V0W2pdKVxuICAgIH1cbiAgfVxuICByZXR1cm4gRmxvYXQzMkFycmF5LmZyb20ocHRzKVxufVxuXG4vLyBmdW5jdGlvbiBzcU1hdE11bFZlYyhBLHYpIHtcbi8vICAgY29uc3QgcmVzID0gbmV3IEZsb2F0MzJBcnJheSgyKS5maWxsKDApXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4vLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAyOyBqKyspIHtcbi8vICAgICAgIC8vIHJlc1tpXSArPSB0aGlzLmdldChpLCBqKSAqIHZbal1cbi8vICAgICAgIHJlc1tpXSArPSBBWzIqaStqXSAqIHZbal1cbi8vICAgICB9XG4vLyAgIH1cbi8vICAgcmV0dXJuIHJlc1xuLy8gfVxuIiwiZXhwb3J0IGNvbnN0IG5WaXpXb3JrZXJzID0gOCxcbiAgY2FudmFzRGltID0gNjAwLFxuICBtYXJrZXJSID0gNyxcbiAgb2JqRm5Jbml0ID0gXCJhY2tsZXlcIixcbiAgbWVhblJhZGl1c01pbiA9IDAuNixcbiAgbWVhblJhZGl1c01heCA9IDAuOSxcbiAgc2lnbWFTY2FsZSA9IDAuNSxcbiAgem9vbVN0ZXBNYWcgPSAxLjA1LFxuICBuRWxsaXBzZVRlc3RQdHMgPSAzMlxuIiwiLy8ge1xuLy8gICBhY2tsZXk6IFwiQWNrbGV5XCIsXG4vLyAgIGJvaGFjaGV2c2t5MTogXCJCb2hhY2hldnNreSBOby4xXCIsXG4vLyAgIGdyaWV3YW5rOiBcIkdyaWV3YW5rXCIsXG4vLyAgIHJhc3RyaWdpbjogXCJSYXN0cmlnaW5cIixcbi8vIH1cblxuZXhwb3J0IGNvbnN0IG9iakZucyA9IHtcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9hY2tsZXkuaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL0NvZGUvYWNrbGV5bS5odG1sXG4gIGFja2xleTogKGlucHV0cykgPT4ge1xuICAgIC8vIGRlZmF1bHQgYT0yMCwgYj0wLjIsIGM9MnBpXG4gICAgY29uc3QgYSA9IDIwLFxuICAgICAgYiA9IDAuMixcbiAgICAgIGMgPSAyICogTWF0aC5QSVxuICAgIC8vIGxldCBkID0gaW5wdXRzLmxlbmd0aFxuICAgIGNvbnN0IGQgPSAyLFxuICAgICAgZF9pbnYgPSAwLjUgLy8gKDEgLyBkKVxuICAgIGxldCBzdW0xID0gMCxcbiAgICAgIHN1bTIgPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIGxldCB4aSA9IGlucHV0c1tpXVxuICAgICAgc3VtMSArPSB4aSAqIHhpXG4gICAgICBzdW0yICs9IE1hdGguY29zKGMgKiB4aSlcbiAgICB9XG4gICAgLy8gbGV0IGRfaW52ID0gMSAvIGRcbiAgICBsZXQgdGVybTEgPSAtYSAqIE1hdGguZXhwKC1iICogTWF0aC5zcXJ0KHN1bTEgKiBkX2ludikpLFxuICAgICAgdGVybTIgPSAtTWF0aC5leHAoc3VtMiAqIGRfaW52KVxuICAgIHJldHVybiB0ZXJtMSArIHRlcm0yICsgYSArIE1hdGguRVxuICB9LFxuICAvLyBodHRwOi8vYmVuY2htYXJrZmNucy54eXovYmVuY2htYXJrZmNucy9ib2hhY2hldnNreW4xZmNuLmh0bWxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9Db2RlL2JvaGExbS5odG1sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vYm9oYS5odG1sXG4gIGJvaGFjaGV2c2t5MTogKGlucHV0cykgPT4ge1xuICAgIGxldCB4MSA9IGlucHV0c1swXVxuICAgIGxldCB4MiA9IGlucHV0c1sxXVxuXG4gICAgbGV0IHRlcm0xID0geDEgKiB4MVxuICAgIGxldCB0ZXJtMiA9IDIgKiB4MiAqIHgyXG4gICAgbGV0IHRlcm0zID0gLTAuMyAqIE1hdGguY29zKDMgKiBNYXRoLlBJICogeDEpXG4gICAgbGV0IHRlcm00ID0gLTAuNCAqIE1hdGguY29zKDQgKiBNYXRoLlBJICogeDIpXG5cbiAgICByZXR1cm4gdGVybTEgKyB0ZXJtMiArIHRlcm0zICsgdGVybTQgKyAwLjdcbiAgfSxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9ncmlld2Fuay5odG1sXG4gIGdyaWV3YW5rOiAoaW5wdXRzKSA9PiB7XG4gICAgbGV0IGQgPSBpbnB1dHMubGVuZ3RoXG4gICAgbGV0IHN1bSA9IDBcbiAgICBsZXQgcHJvZCA9IDFcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGQ7IGkrKykge1xuICAgICAgbGV0IHhpID0gaW5wdXRzW2ldXG4gICAgICBzdW0gKz0gKHhpICogeGkpIC8gNDAwMFxuICAgICAgcHJvZCAqPSBNYXRoLmNvcyh4aSAvIE1hdGguc3FydChpICsgMSkpXG4gICAgfVxuICAgIHJldHVybiBzdW0gLSBwcm9kICsgMVxuICB9LFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL3Jhc3RyLmh0bWxcbiAgcmFzdHJpZ2luOiAoaW5wdXRzKSA9PiB7XG4gICAgbGV0IGQgPSBpbnB1dHMubGVuZ3RoXG4gICAgbGV0IHN1bSA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGQ7IGkrKykge1xuICAgICAgbGV0IHhpID0gaW5wdXRzW2ldXG4gICAgICBzdW0gKz0geGkgKiB4aSAtIDEwICogTWF0aC5jb3MoMiAqIE1hdGguUEkgKiB4aSlcbiAgICB9XG4gICAgcmV0dXJuIDEwICogZCArIHN1bVxuICB9LFxufVxuXG4vLyBmYW5jeSBuYW1lcyBmb3Igc2VsZWN0IG1lbnVcbm9iakZucy5hY2tsZXkuZmFuY3lOYW1lID0gXCJBY2tsZXlcIlxub2JqRm5zLmJvaGFjaGV2c2t5MS5mYW5jeU5hbWUgPSBcIkJvaGFjaGV2c2t5IE5vLjFcIlxub2JqRm5zLmdyaWV3YW5rLmZhbmN5TmFtZSA9IFwiR3JpZXdhbmtcIlxub2JqRm5zLnJhc3RyaWdpbi5mYW5jeU5hbWUgPSBcIlJhc3RyaWdpblwiXG5cbi8vIGZuTGltcyBmb3IgZGlzcGxheSBsaW1pdHNcbm9iakZucy5hY2tsZXkueHlMaW0gPSAzMi43Njhcbm9iakZucy5ib2hhY2hldnNreTEueHlMaW0gPSAxMDBcbm9iakZucy5ncmlld2Fuay54eUxpbSA9IDYwMFxub2JqRm5zLnJhc3RyaWdpbi54eUxpbSA9IDUuMTJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gdGhlIHN0YXJ0dXAgZnVuY3Rpb25cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5cdC8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuXHR2YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInNyY19qc19jbWEtbGliX2pzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vY21hLXdvcmtlci5qc1wiKSkpXG5cdF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5cdHJldHVybiBfX3dlYnBhY2tfZXhwb3J0c19fO1xufTtcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rcyBhbmQgc2libGluZyBjaHVua3MgZm9yIHRoZSBlbnRyeXBvaW50XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBcIjExODMyNzQ1Y2JmNzM1MDk4NGNlXCIgKyBcIi5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiB1bmRlZmluZWQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuLy8gXCIxXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInNyY19wYWdlc19jbWFlcy1kZW1vX2NtYS13b3JrZXJfanNcIjogMVxufTtcblxuLy8gaW1wb3J0U2NyaXB0cyBjaHVuayBsb2FkaW5nXG52YXIgaW5zdGFsbENodW5rID0gKGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR3aGlsZShjaHVua0lkcy5sZW5ndGgpXG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzLnBvcCgpXSA9IDE7XG5cdHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xufTtcbl9fd2VicGFja19yZXF1aXJlX18uZi5pID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdC8vIFwiMVwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuXHRpZighaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdGltcG9ydFNjcmlwdHMoX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpKTtcblx0XHR9XG5cdH1cbn07XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdGlwcHlfcHJvamVjdF93ZWJzaXRlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3RpcHB5X3Byb2plY3Rfd2Vic2l0ZVwiXSB8fCBbXTtcbnZhciBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiA9IGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gaW5zdGFsbENodW5rO1xuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0IiwidmFyIG5leHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLng7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJzcmNfanNfY21hLWxpYl9qc1wiKS50aGVuKG5leHQpO1xufTsiLCIiLCIvLyBydW4gc3RhcnR1cFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiIsIiJdLCJuYW1lcyI6WyJDTUEiLCJnZXREZWZhdWx0Q01BUG9wc2l6ZSIsIm9iakZucyIsIm9iakZuSW5pdCIsImNhbnZhc0RpbSIsIm1lYW5SYWRpdXNNaW4iLCJtZWFuUmFkaXVzTWF4Iiwic2lnbWFTY2FsZSIsInpvb21TdGVwTWFnIiwibkVsbGlwc2VUZXN0UHRzIiwiem9vbSIsInpvb21OZXh0IiwiY2FudmFzU2NhbGUiLCJvYmpGbk5hbWUiLCJvYmpGbkxpbSIsIm9iakZuIiwiY21hIiwic29sdXRpb25zSGlzdG9yeSIsIm1lYW5IaXN0b3J5IiwiZWxsaXBzZVB0cyIsInBvcHNpemVNdWx0aXBsaWVyIiwiZWxsaXBzZVRlc3RQdHMiLCJ0aGV0YVN0ZXAiLCJNYXRoIiwiUEkiLCJ0ZXN0UHRzIiwidGhldGEiLCJwdXNoIiwiRmxvYXQzMkFycmF5IiwiZnJvbSIsInNpbiIsImNvcyIsImNtYUluaXQiLCJvbm1lc3NhZ2UiLCJlIiwiZGF0YSIsImluZm8iLCJtc2ciLCJjbWFTdGVwIiwidHJhbnNpdGlvblN0ZXAiLCJ1cGRhdGVDYW52YXNTY2FsZSIsInNlbmRNZWFuSGlzdG9yeSIsInNlbmRDdXJyZW50U29sdXRpb25zIiwidXBkYXRlT2JqRm4iLCJjbWFTaWdtYSIsInJhbmRSYWRpYW5zIiwicmFuZG9tIiwicmFuZFJhZGl1cyIsImNvbnNvbGUiLCJsb2ciLCJjbWFNZWFuIiwicG9wc2l6ZSIsInVuZGVmaW5lZCIsInNvbHV0aW9ucyIsInNvbF9zY29yZV9hcnJheSIsInNjb3JlU3VtIiwibWF4QWJzRGltIiwiaSIsInNvbHV0aW9uIiwiYXNrIiwic2NvcmUiLCJqIiwic29sRGltIiwiYWJzU29sRGltIiwiYWJzIiwiZ2V0RWxsaXBzZVB0cyIsIm1lYW4iLCJzbGljZSIsInRlbGwiLCJtZWFuSGlzdG9yeVR5cGVkIiwibWFwIiwidiIsInBvc3RNZXNzYWdlIiwiY3VycmVudFNvbHV0aW9uIiwibGVuZ3RoIiwicm91bmQiLCJ4eUxpbSIsIkJEIiwic2lnbWEiLCJwdHMiLCJvZmZzZXQiLCJtdWxWZWMiLCJuVml6V29ya2VycyIsIm1hcmtlclIiLCJhY2tsZXkiLCJpbnB1dHMiLCJhIiwiYiIsImMiLCJkIiwiZF9pbnYiLCJzdW0xIiwic3VtMiIsInhpIiwidGVybTEiLCJleHAiLCJzcXJ0IiwidGVybTIiLCJFIiwiYm9oYWNoZXZza3kxIiwieDEiLCJ4MiIsInRlcm0zIiwidGVybTQiLCJncmlld2FuayIsInN1bSIsInByb2QiLCJyYXN0cmlnaW4iLCJmYW5jeU5hbWUiXSwic291cmNlUm9vdCI6IiJ9