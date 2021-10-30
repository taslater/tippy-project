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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var objFnName = _globals_js__WEBPACK_IMPORTED_MODULE_2__.objFnInit,
    objFnLim,
    objFn,
    cma,
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
      msg = _e$data[1]; // if (info === "canvasDim") {
  //   canvasDim = msg
  //   updateCanvasScale()
  //   sendMeanHistory()
  //   sendCurrentSolutions()
  // } else


  if (info === "objFnName") {
    objFnName = msg;
    cmaInit();
  } else if (info === "popMult") {
    popsizeMultiplier = msg;
    cmaInit();
  } else if (info === "step") {
    // console.log("got step")
    // if (zoom != zoomNext) {
    //   console.log("bad zoom", zoom, zoomNext)
    //   return
    // }
    cmaStep();
  } // else if (info === "drawReady") {
  //   if (zoom != zoomNext) {
  //     transitionStep()
  //   }
  // } else if (info === "zoom") {
  //   zoom = msg
  //   zoomNext = msg
  //   // console.log("cma got zoom", zoom)
  //   updateCanvasScale()
  //   sendMeanHistory()
  //   sendCurrentSolutions()
  // }

};

function cmaInit() {
  // zoom = 1
  // zoomNext = zoom
  updateObjFn(objFnName); // solutionsHistory = []
  // meanHistory = []

  var cmaSigma = _globals_js__WEBPACK_IMPORTED_MODULE_2__.sigmaScale * objFnLim;
  var randRadians = 2 * Math.PI * Math.random();
  var randRadius = objFnLim * (_globals_js__WEBPACK_IMPORTED_MODULE_2__.meanRadiusMin + Math.random() * (_globals_js__WEBPACK_IMPORTED_MODULE_2__.meanRadiusMax - _globals_js__WEBPACK_IMPORTED_MODULE_2__.meanRadiusMin)); // console.log("objFnLim", objFnLim)
  // console.log("randRadius", randRadius)

  var cmaMean = Float32Array.from([randRadius * Math.cos(randRadians), randRadius * Math.sin(randRadians)]);
  var popsize = (0,_js_cma_lib_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultCMAPopsize)(2) * popsizeMultiplier;
  cma = new _js_cma_lib_js__WEBPACK_IMPORTED_MODULE_0__.CMA(cmaMean, cmaSigma, popsize, undefined, undefined);
  cmaStep();
}

function cmaStep() {
  var solutions = new Float32Array(2 * cma.popsize),
      scores = new Float32Array(cma.popsize),
      sol_score_array = [],
      message = {};
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
    scores[i] = score;

    for (var j = 0; j < 2; j++) {
      var solDim = solution[j],
          absSolDim = Math.abs(solDim);

      if (absSolDim > maxAbsDim) {
        maxAbsDim = absSolDim;
      }

      solutions[2 * i + j] = solDim;
    }
  }

  message.solutions = solutions.slice();
  message.scores = scores.slice();
  message.ellipsePts = getEllipsePts().slice();
  message.mean = cma.mean.slice();
  message.maxAbsDim = maxAbsDim;
  postMessage(message); // solutionsHistory.push(solutions)
  // ellipsePts = getEllipsePts()
  // meanHistory.push(...cma.mean.slice())
  // const cmaMats = [""]
  // for (let prop of ["B", "BD", "C"]) {
  //   cmaMats.push(cma[prop].data.toString(), "\n")
  // }
  // console.log(...cmaMats)
  // sendEllipseParams()
  // sendEllipsePts()
  // sendMeanHistory()
  // zoomNext = (0.8 * objFnLim) / maxAbsDim
  // transitionStep()

  cma.tell(sol_score_array); // console.log("mean score:", scoreSum / cma.popsize)
} // function sendMeanHistory() {
//   const meanHistoryTyped = Float32Array.from(
//     meanHistory.map((v) => v * canvasScale)
//   )
//   postMessage(["means", meanHistoryTyped])
// }
// function sendCurrentSolutions() {
//   console.log("sending solutions")
//   const currentSolution = solutionsHistory[solutionsHistory.length - 1]
//   postMessage([
//     "solutions",
//     [
//       currentSolution.map((v) => Math.round(v * canvasScale)),
//       ellipsePts.map((v) => Math.round(v * canvasScale)),
//     ],
//   ])
// }


function updateObjFn(objFnName) {
  objFn = _obj_fns_js__WEBPACK_IMPORTED_MODULE_1__.objFns[objFnName];
  objFnLim = objFn.xyLim; // updateCanvasScale()
} // function updateCanvasScale() {
//   canvasScale = (zoom * 0.5 * canvasDim) / objFnLim
// }
// function transitionStep() {
//   console.log("transition step before", zoom, zoomNext)
//   if (zoom < zoomNext) {
//     zoom *= zoomStepMag
//     if (zoom > zoomNext) {
//       zoom = zoomNext
//     }
//   } else {
//     zoom /= zoomStepMag
//     if (zoom < zoomNext) {
//       zoom = zoomNext
//     }
//   }
//   console.log("transition step after", zoom, zoomNext)
//   postMessage(["zoom", zoom])
//   updateCanvasScale()
//   sendMeanHistory()
//   sendCurrentSolutions()
// }
// function sendEllipseParams() {
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
}

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
/* harmony export */   "canvasDimMax": () => (/* binding */ canvasDimMax),
/* harmony export */   "markerR": () => (/* binding */ markerR),
/* harmony export */   "objFnInit": () => (/* binding */ objFnInit),
/* harmony export */   "meanRadiusMin": () => (/* binding */ meanRadiusMin),
/* harmony export */   "meanRadiusMax": () => (/* binding */ meanRadiusMax),
/* harmony export */   "sigmaScale": () => (/* binding */ sigmaScale),
/* harmony export */   "zoomStepMag": () => (/* binding */ zoomStepMag),
/* harmony export */   "nEllipseTestPts": () => (/* binding */ nEllipseTestPts),
/* harmony export */   "solutionMargin": () => (/* binding */ solutionMargin),
/* harmony export */   "getViewStep": () => (/* binding */ getViewStep)
/* harmony export */ });
var nVizWorkers = 1,
    canvasDim = 400,
    canvasDimMax = 800,
    markerR = 7,
    objFnInit = "ackley",
    meanRadiusMin = 0.6,
    meanRadiusMax = 0.9,
    sigmaScale = 0.1,
    zoomStepMag = 1.05,
    nEllipseTestPts = 32,
    solutionMargin = 1.25,
    getViewStep = function getViewStep(evalHalfLim, canvasHalfDim) {
  return evalHalfLim / (canvasHalfDim - 0.5);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX2NtYWVzLWRlbW9fY21hLXdvcmtlcl9qcy4yNTdiMzc5ODc4YzM5NjY4MzRkNS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVFBLElBQUlRLFNBQVMsR0FBR0wsa0RBQWhCO0FBQUEsSUFDRU0sUUFERjtBQUFBLElBRUVDLEtBRkY7QUFBQSxJQUdFQyxHQUhGO0FBQUEsSUFJRUMsaUJBQWlCLEdBQUcsQ0FKdEIsRUFNQTs7QUFDQSxJQUFNQyxjQUFjLEdBQUksWUFBTTtBQUM1QixNQUFNQyxTQUFTLEdBQUksSUFBSUMsSUFBSSxDQUFDQyxFQUFWLEdBQWdCVCx3REFBbEM7QUFDQSxNQUFNVSxPQUFPLEdBQUcsRUFBaEI7O0FBQ0EsT0FBSyxJQUFJQyxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBRyxJQUFJSCxJQUFJLENBQUNDLEVBQXJDLEVBQXlDRSxLQUFLLElBQUlKLFNBQWxELEVBQTZEO0FBQzNERyxJQUFBQSxPQUFPLENBQUNFLElBQVIsQ0FBYUMsWUFBWSxDQUFDQyxJQUFiLENBQWtCLENBQUNOLElBQUksQ0FBQ08sR0FBTCxDQUFTSixLQUFULENBQUQsRUFBa0JILElBQUksQ0FBQ1EsR0FBTCxDQUFTTCxLQUFULENBQWxCLENBQWxCLENBQWI7QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FQc0IsRUFBdkI7O0FBU0FPLE9BQU87O0FBRVBDLFNBQVMsR0FBRyxtQkFBQ0MsQ0FBRCxFQUFPO0FBQ2pCLCtCQUFvQkEsQ0FBQyxDQUFDQyxJQUF0QjtBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxHQUFiLGNBRGlCLENBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBSUQsSUFBSSxLQUFLLFdBQWIsRUFBMEI7QUFDeEJwQixJQUFBQSxTQUFTLEdBQUdxQixHQUFaO0FBQ0FMLElBQUFBLE9BQU87QUFDUixHQUhELE1BR08sSUFBSUksSUFBSSxL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OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxhQUFhO1dBQ2I7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBOztXQUVBOzs7OztXQ3BDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVIQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlLy4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vY21hLXdvcmtlci5qcyIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvLi9zcmMvcGFnZXMvY21hZXMtZGVtby9nbG9iYWxzLmpzIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL29iai1mbnMuanMiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9pbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9zdGFydHVwIGNodW5rIGRlcGVuZGVuY2llcyIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ01BLCBnZXREZWZhdWx0Q01BUG9wc2l6ZSB9IGZyb20gXCIuLi8uLi9qcy9jbWEtbGliLmpzXCJcbmltcG9ydCB7IG9iakZucyB9IGZyb20gXCIuL29iai1mbnMuanNcIlxuaW1wb3J0IHtcbiAgb2JqRm5Jbml0LFxuICBtZWFuUmFkaXVzTWluLFxuICBtZWFuUmFkaXVzTWF4LFxuICBzaWdtYVNjYWxlLFxuICBuRWxsaXBzZVRlc3RQdHMsXG59IGZyb20gXCIuL2dsb2JhbHMuanNcIlxuXG5sZXQgb2JqRm5OYW1lID0gb2JqRm5Jbml0LFxuICBvYmpGbkxpbSxcbiAgb2JqRm4sXG4gIGNtYSxcbiAgcG9wc2l6ZU11bHRpcGxpZXIgPSAxXG5cbi8vIElJRkVcbmNvbnN0IGVsbGlwc2VUZXN0UHRzID0gKCgpID0+IHtcbiAgY29uc3QgdGhldGFTdGVwID0gKDIgKiBNYXRoLlBJKSAvIG5FbGxpcHNlVGVzdFB0c1xuICBjb25zdCB0ZXN0UHRzID0gW11cbiAgZm9yIChsZXQgdGhldGEgPSAwOyB0aGV0YSA8IDIgKiBNYXRoLlBJOyB0aGV0YSArPSB0aGV0YVN0ZXApIHtcbiAgICB0ZXN0UHRzLnB1c2goRmxvYXQzMkFycmF5LmZyb20oW01hdGguc2luKHRoZXRhKSwgTWF0aC5jb3ModGhldGEpXSkpXG4gIH1cbiAgcmV0dXJuIHRlc3RQdHNcbn0pKClcblxuY21hSW5pdCgpXG5cbm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gIGNvbnN0IFtpbmZvLCBtc2ddID0gZS5kYXRhXG4gIC8vIGlmIChpbmZvID09PSBcImNhbnZhc0RpbVwiKSB7XG4gIC8vICAgY2FudmFzRGltID0gbXNnXG4gIC8vICAgdXBkYXRlQ2FudmFzU2NhbGUoKVxuICAvLyAgIHNlbmRNZWFuSGlzdG9yeSgpXG4gIC8vICAgc2VuZEN1cnJlbnRTb2x1dGlvbnMoKVxuICAvLyB9IGVsc2VcbiAgaWYgKGluZm8gPT09IFwib2JqRm5OYW1lXCIpIHtcbiAgICBvYmpGbk5hbWUgPSBtc2dcbiAgICBjbWFJbml0KClcbiAgfSBlbHNlIGlmIChpbmZvID09PSBcInBvcE11bHRcIikge1xuICAgIHBvcHNpemVNdWx0aXBsaWVyID0gbXNnXG4gICAgY21hSW5pdCgpXG4gIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJzdGVwXCIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImdvdCBzdGVwXCIpXG4gICAgLy8gaWYgKHpvb20gIT0gem9vbU5leHQpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiYmFkIHpvb21cIiwgem9vbSwgem9vbU5leHQpXG4gICAgLy8gICByZXR1cm5cbiAgICAvLyB9XG4gICAgY21hU3RlcCgpXG4gIH1cbiAgLy8gZWxzZSBpZiAoaW5mbyA9PT0gXCJkcmF3UmVhZHlcIikge1xuICAvLyAgIGlmICh6b29tICE9IHpvb21OZXh0KSB7XG4gIC8vICAgICB0cmFuc2l0aW9uU3RlcCgpXG4gIC8vICAgfVxuICAvLyB9IGVsc2UgaWYgKGluZm8gPT09IFwiem9vbVwiKSB7XG4gIC8vICAgem9vbSA9IG1zZ1xuICAvLyAgIHpvb21OZXh0ID0gbXNnXG4gIC8vICAgLy8gY29uc29sZS5sb2coXCJjbWEgZ290IHpvb21cIiwgem9vbSlcbiAgLy8gICB1cGRhdGVDYW52YXNTY2FsZSgpXG4gIC8vICAgc2VuZE1lYW5IaXN0b3J5KClcbiAgLy8gICBzZW5kQ3VycmVudFNvbHV0aW9ucygpXG4gIC8vIH1cbn1cblxuZnVuY3Rpb24gY21hSW5pdCgpIHtcbiAgLy8gem9vbSA9IDFcbiAgLy8gem9vbU5leHQgPSB6b29tXG4gIHVwZGF0ZU9iakZuKG9iakZuTmFtZSlcbiAgLy8gc29sdXRpb25zSGlzdG9yeSA9IFtdXG4gIC8vIG1lYW5IaXN0b3J5ID0gW11cbiAgY29uc3QgY21hU2lnbWEgPSBzaWdtYVNjYWxlICogb2JqRm5MaW1cbiAgY29uc3QgcmFuZFJhZGlhbnMgPSAyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKClcbiAgY29uc3QgcmFuZFJhZGl1cyA9XG4gICAgb2JqRm5MaW0gKiAobWVhblJhZGl1c01pbiArIE1hdGgucmFuZG9tKCkgKiAobWVhblJhZGl1c01heCAtIG1lYW5SYWRpdXNNaW4pKVxuICAvLyBjb25zb2xlLmxvZyhcIm9iakZuTGltXCIsIG9iakZuTGltKVxuICAvLyBjb25zb2xlLmxvZyhcInJhbmRSYWRpdXNcIiwgcmFuZFJhZGl1cylcbiAgY29uc3QgY21hTWVhbiA9IEZsb2F0MzJBcnJheS5mcm9tKFtcbiAgICByYW5kUmFkaXVzICogTWF0aC5jb3MocmFuZFJhZGlhbnMpLFxuICAgIHJhbmRSYWRpdXMgKiBNYXRoLnNpbihyYW5kUmFkaWFucyksXG4gIF0pXG4gIGNvbnN0IHBvcHNpemUgPSBnZXREZWZhdWx0Q01BUG9wc2l6ZSgyKSAqIHBvcHNpemVNdWx0aXBsaWVyXG4gIGNtYSA9IG5ldyBDTUEoY21hTWVhbiwgY21hU2lnbWEsIHBvcHNpemUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxuICBjbWFTdGVwKClcbn1cblxuZnVuY3Rpb24gY21hU3RlcCgpIHtcbiAgY29uc3Qgc29sdXRpb25zID0gbmV3IEZsb2F0MzJBcnJheSgyICogY21hLnBvcHNpemUpLFxuICAgIHNjb3JlcyA9IG5ldyBGbG9hdDMyQXJyYXkoY21hLnBvcHNpemUpLFxuICAgIHNvbF9zY29yZV9hcnJheSA9IFtdLFxuICAgIG1lc3NhZ2UgPSB7fVxuICBsZXQgc2NvcmVTdW0gPSAwLFxuICAgIG1heEFic0RpbSA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbWEucG9wc2l6ZTsgaSsrKSB7XG4gICAgY29uc3Qgc29sdXRpb24gPSBjbWEuYXNrKCksXG4gICAgICBzY29yZSA9IG9iakZuKHNvbHV0aW9uKVxuICAgIHNjb3JlU3VtICs9IHNjb3JlXG4gICAgc29sX3Njb3JlX2FycmF5LnB1c2goeyBzb2x1dGlvbiwgc2NvcmUgfSlcbiAgICBzY29yZXNbaV0gPSBzY29yZVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICBjb25zdCBzb2xEaW0gPSBzb2x1dGlvbltqXSxcbiAgICAgICAgYWJzU29sRGltID0gTWF0aC5hYnMoc29sRGltKVxuICAgICAgaWYgKGFic1NvbERpbSA+IG1heEFic0RpbSkge1xuICAgICAgICBtYXhBYnNEaW0gPSBhYnNTb2xEaW1cbiAgICAgIH1cbiAgICAgIHNvbHV0aW9uc1syICogaSArIGpdID0gc29sRGltXG4gICAgfVxuICB9XG4gIG1lc3NhZ2Uuc29sdXRpb25zID0gc29sdXRpb25zLnNsaWNlKClcbiAgbWVzc2FnZS5zY29yZXMgPSBzY29yZXMuc2xpY2UoKVxuICBtZXNzYWdlLmVsbGlwc2VQdHMgPSBnZXRFbGxpcHNlUHRzKCkuc2xpY2UoKVxuICBtZXNzYWdlLm1lYW4gPSBjbWEubWVhbi5zbGljZSgpXG4gIG1lc3NhZ2UubWF4QWJzRGltID0gbWF4QWJzRGltXG4gIHBvc3RNZXNzYWdlKG1lc3NhZ2UpXG4gIC8vIHNvbHV0aW9uc0hpc3RvcnkucHVzaChzb2x1dGlvbnMpXG4gIC8vIGVsbGlwc2VQdHMgPSBnZXRFbGxpcHNlUHRzKClcbiAgLy8gbWVhbkhpc3RvcnkucHVzaCguLi5jbWEubWVhbi5zbGljZSgpKVxuICAvLyBjb25zdCBjbWFNYXRzID0gW1wiXCJdXG4gIC8vIGZvciAobGV0IHByb3Agb2YgW1wiQlwiLCBcIkJEXCIsIFwiQ1wiXSkge1xuICAvLyAgIGNtYU1hdHMucHVzaChjbWFbcHJvcF0uZGF0YS50b1N0cmluZygpLCBcIlxcblwiKVxuICAvLyB9XG4gIC8vIGNvbnNvbGUubG9nKC4uLmNtYU1hdHMpXG4gIC8vIHNlbmRFbGxpcHNlUGFyYW1zKClcbiAgLy8gc2VuZEVsbGlwc2VQdHMoKVxuICAvLyBzZW5kTWVhbkhpc3RvcnkoKVxuICAvLyB6b29tTmV4dCA9ICgwLjggKiBvYmpGbkxpbSkgLyBtYXhBYnNEaW1cbiAgLy8gdHJhbnNpdGlvblN0ZXAoKVxuXG4gIGNtYS50ZWxsKHNvbF9zY29yZV9hcnJheSlcblxuICAvLyBjb25zb2xlLmxvZyhcIm1lYW4gc2NvcmU6XCIsIHNjb3JlU3VtIC8gY21hLnBvcHNpemUpXG59XG5cbi8vIGZ1bmN0aW9uIHNlbmRNZWFuSGlzdG9yeSgpIHtcbi8vICAgY29uc3QgbWVhbkhpc3RvcnlUeXBlZCA9IEZsb2F0MzJBcnJheS5mcm9tKFxuLy8gICAgIG1lYW5IaXN0b3J5Lm1hcCgodikgPT4gdiAqIGNhbnZhc1NjYWxlKVxuLy8gICApXG4vLyAgIHBvc3RNZXNzYWdlKFtcIm1lYW5zXCIsIG1lYW5IaXN0b3J5VHlwZWRdKVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBzZW5kQ3VycmVudFNvbHV0aW9ucygpIHtcbi8vICAgY29uc29sZS5sb2coXCJzZW5kaW5nIHNvbHV0aW9uc1wiKVxuLy8gICBjb25zdCBjdXJyZW50U29sdXRpb24gPSBzb2x1dGlvbnNIaXN0b3J5W3NvbHV0aW9uc0hpc3RvcnkubGVuZ3RoIC0gMV1cbi8vICAgcG9zdE1lc3NhZ2UoW1xuLy8gICAgIFwic29sdXRpb25zXCIsXG4vLyAgICAgW1xuLy8gICAgICAgY3VycmVudFNvbHV0aW9uLm1hcCgodikgPT4gTWF0aC5yb3VuZCh2ICogY2FudmFzU2NhbGUpKSxcbi8vICAgICAgIGVsbGlwc2VQdHMubWFwKCh2KSA9PiBNYXRoLnJvdW5kKHYgKiBjYW52YXNTY2FsZSkpLFxuLy8gICAgIF0sXG4vLyAgIF0pXG4vLyB9XG5cbmZ1bmN0aW9uIHVwZGF0ZU9iakZuKG9iakZuTmFtZSkge1xuICBvYmpGbiA9IG9iakZuc1tvYmpGbk5hbWVdXG4gIG9iakZuTGltID0gb2JqRm4ueHlMaW1cbiAgLy8gdXBkYXRlQ2FudmFzU2NhbGUoKVxufVxuXG4vLyBmdW5jdGlvbiB1cGRhdGVDYW52YXNTY2FsZSgpIHtcbi8vICAgY2FudmFzU2NhbGUgPSAoem9vbSAqIDAuNSAqIGNhbnZhc0RpbSkgLyBvYmpGbkxpbVxuLy8gfVxuXG4vLyBmdW5jdGlvbiB0cmFuc2l0aW9uU3RlcCgpIHtcbi8vICAgY29uc29sZS5sb2coXCJ0cmFuc2l0aW9uIHN0ZXAgYmVmb3JlXCIsIHpvb20sIHpvb21OZXh0KVxuLy8gICBpZiAoem9vbSA8IHpvb21OZXh0KSB7XG4vLyAgICAgem9vbSAqPSB6b29tU3RlcE1hZ1xuLy8gICAgIGlmICh6b29tID4gem9vbU5leHQpIHtcbi8vICAgICAgIHpvb20gPSB6b29tTmV4dFxuLy8gICAgIH1cbi8vICAgfSBlbHNlIHtcbi8vICAgICB6b29tIC89IHpvb21TdGVwTWFnXG4vLyAgICAgaWYgKHpvb20gPCB6b29tTmV4dCkge1xuLy8gICAgICAgem9vbSA9IHpvb21OZXh0XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIGNvbnNvbGUubG9nKFwidHJhbnNpdGlvbiBzdGVwIGFmdGVyXCIsIHpvb20sIHpvb21OZXh0KVxuLy8gICBwb3N0TWVzc2FnZShbXCJ6b29tXCIsIHpvb21dKVxuLy8gICB1cGRhdGVDYW52YXNTY2FsZSgpXG4vLyAgIHNlbmRNZWFuSGlzdG9yeSgpXG4vLyAgIHNlbmRDdXJyZW50U29sdXRpb25zKClcbi8vIH1cblxuLy8gZnVuY3Rpb24gc2VuZEVsbGlwc2VQYXJhbXMoKSB7XG4vLyAgIGNvbnN0IFthLCBiLCBfLCBjXSA9IGNtYS5DLmRhdGEuc2xpY2UoKVxuLy8gICBjb25zdCB0MCA9IChhICsgYykgLyAyLFxuLy8gICAgIHQxID0gKGEgLSBjKSAvIDIsXG4vLyAgICAgdDIgPSBNYXRoLnNxcnQodDEgKiB0MSArIGIgKiBiKVxuLy8gICBjb25zdCBsYW1iZGEwID0gdDAgKyB0Mixcbi8vICAgICBsYW1iZGExID0gdDAgLSB0MlxuLy8gICBjb25zdCB0aGV0YSA9ICgpID0+IHtcbi8vICAgICBpZiAoYiA9PSAwKSB7XG4vLyAgICAgICBpZiAoYSA+PSBjKSB7XG4vLyAgICAgICAgIHJldHVybiAwXG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICByZXR1cm4gTWF0aC5QSSAvIDJcbi8vICAgICAgIH1cbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgcmV0dXJuIE1hdGguYXRhbjIobGFtYmRhMCAtIGEsIGIpXG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIGNvbnN0IHNpZ21hID0gY21hLnNpZ21hXG4vLyAgIHBvc3RNZXNzYWdlKFtcbi8vICAgICBcImVsbGlwc2VQYXJhbXNcIixcbi8vICAgICBGbG9hdDMyQXJyYXkuZnJvbShbbGFtYmRhMCAqIHNpZ21hLCBsYW1iZGExICogc2lnbWEsIHRoZXRhKCldKSxcbi8vICAgXSlcbi8vIH1cblxuZnVuY3Rpb24gZ2V0RWxsaXBzZVB0cygpIHtcbiAgY29uc3QgQkQgPSBjbWEuQkQsXG4gICAgbWVhbiA9IGNtYS5tZWFuLFxuICAgIHNpZ21hID0gY21hLnNpZ21hXG4gIGNvbnN0IHB0cyA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxsaXBzZVRlc3RQdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBvZmZzZXQgPSBCRC5tdWxWZWMoZWxsaXBzZVRlc3RQdHNbaV0pXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICAgIHB0cy5wdXNoKG1lYW5bal0gKyBzaWdtYSAqIG9mZnNldFtqXSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIEZsb2F0MzJBcnJheS5mcm9tKHB0cylcbn1cbiIsImV4cG9ydCBjb25zdCBuVml6V29ya2VycyA9IDEsXG4gIGNhbnZhc0RpbSA9IDQwMCxcbiAgY2FudmFzRGltTWF4ID0gODAwLFxuICBtYXJrZXJSID0gNyxcbiAgb2JqRm5Jbml0ID0gXCJhY2tsZXlcIixcbiAgbWVhblJhZGl1c01pbiA9IDAuNixcbiAgbWVhblJhZGl1c01heCA9IDAuOSxcbiAgc2lnbWFTY2FsZSA9IDAuMSxcbiAgem9vbVN0ZXBNYWcgPSAxLjA1LFxuICBuRWxsaXBzZVRlc3RQdHMgPSAzMixcbiAgc29sdXRpb25NYXJnaW4gPSAxLjI1LFxuICBnZXRWaWV3U3RlcCA9IChldmFsSGFsZkxpbSwgY2FudmFzSGFsZkRpbSkgPT4ge1xuICAgIHJldHVybiBldmFsSGFsZkxpbSAvIChjYW52YXNIYWxmRGltIC0gMC41KVxuICB9XG4iLCIvLyB7XG4vLyAgIGFja2xleTogXCJBY2tsZXlcIixcbi8vICAgYm9oYWNoZXZza3kxOiBcIkJvaGFjaGV2c2t5IE5vLjFcIixcbi8vICAgZ3JpZXdhbms6IFwiR3JpZXdhbmtcIixcbi8vICAgcmFzdHJpZ2luOiBcIlJhc3RyaWdpblwiLFxuLy8gfVxuXG5leHBvcnQgY29uc3Qgb2JqRm5zID0ge1xuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2Fja2xleS5odG1sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vQ29kZS9hY2tsZXltLmh0bWxcbiAgYWNrbGV5OiAoaW5wdXRzKSA9PiB7XG4gICAgLy8gZGVmYXVsdCBhPTIwLCBiPTAuMiwgYz0ycGlcbiAgICBjb25zdCBhID0gMjAsXG4gICAgICBiID0gMC4yLFxuICAgICAgYyA9IDIgKiBNYXRoLlBJXG4gICAgLy8gbGV0IGQgPSBpbnB1dHMubGVuZ3RoXG4gICAgY29uc3QgZCA9IDIsXG4gICAgICBkX2ludiA9IDAuNSAvLyAoMSAvIGQpXG4gICAgbGV0IHN1bTEgPSAwLFxuICAgICAgc3VtMiA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGQ7IGkrKykge1xuICAgICAgbGV0IHhpID0gaW5wdXRzW2ldXG4gICAgICBzdW0xICs9IHhpICogeGlcbiAgICAgIHN1bTIgKz0gTWF0aC5jb3MoYyAqIHhpKVxuICAgIH1cbiAgICAvLyBsZXQgZF9pbnYgPSAxIC8gZFxuICAgIGxldCB0ZXJtMSA9IC1hICogTWF0aC5leHAoLWIgKiBNYXRoLnNxcnQoc3VtMSAqIGRfaW52KSksXG4gICAgICB0ZXJtMiA9IC1NYXRoLmV4cChzdW0yICogZF9pbnYpXG4gICAgcmV0dXJuIHRlcm0xICsgdGVybTIgKyBhICsgTWF0aC5FXG4gIH0sXG4gIC8vIGh0dHA6Ly9iZW5jaG1hcmtmY25zLnh5ei9iZW5jaG1hcmtmY25zL2JvaGFjaGV2c2t5bjFmY24uaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL0NvZGUvYm9oYTFtLmh0bWxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9ib2hhLmh0bWxcbiAgYm9oYWNoZXZza3kxOiAoaW5wdXRzKSA9PiB7XG4gICAgbGV0IHgxID0gaW5wdXRzWzBdXG4gICAgbGV0IHgyID0gaW5wdXRzWzFdXG5cbiAgICBsZXQgdGVybTEgPSB4MSAqIHgxXG4gICAgbGV0IHRlcm0yID0gMiAqIHgyICogeDJcbiAgICBsZXQgdGVybTMgPSAtMC4zICogTWF0aC5jb3MoMyAqIE1hdGguUEkgKiB4MSlcbiAgICBsZXQgdGVybTQgPSAtMC40ICogTWF0aC5jb3MoNCAqIE1hdGguUEkgKiB4MilcblxuICAgIHJldHVybiB0ZXJtMSArIHRlcm0yICsgdGVybTMgKyB0ZXJtNCArIDAuN1xuICB9LFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2dyaWV3YW5rLmh0bWxcbiAgZ3JpZXdhbms6IChpbnB1dHMpID0+IHtcbiAgICBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBsZXQgc3VtID0gMFxuICAgIGxldCBwcm9kID0gMVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bSArPSAoeGkgKiB4aSkgLyA0MDAwXG4gICAgICBwcm9kICo9IE1hdGguY29zKHhpIC8gTWF0aC5zcXJ0KGkgKyAxKSlcbiAgICB9XG4gICAgcmV0dXJuIHN1bSAtIHByb2QgKyAxXG4gIH0sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vcmFzdHIuaHRtbFxuICByYXN0cmlnaW46IChpbnB1dHMpID0+IHtcbiAgICBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBsZXQgc3VtID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bSArPSB4aSAqIHhpIC0gMTAgKiBNYXRoLmNvcygyICogTWF0aC5QSSAqIHhpKVxuICAgIH1cbiAgICByZXR1cm4gMTAgKiBkICsgc3VtXG4gIH0sXG59XG5cbi8vIGZhbmN5IG5hbWVzIGZvciBzZWxlY3QgbWVudVxub2JqRm5zLmFja2xleS5mYW5jeU5hbWUgPSBcIkFja2xleVwiXG5vYmpGbnMuYm9oYWNoZXZza3kxLmZhbmN5TmFtZSA9IFwiQm9oYWNoZXZza3kgTm8uMVwiXG5vYmpGbnMuZ3JpZXdhbmsuZmFuY3lOYW1lID0gXCJHcmlld2Fua1wiXG5vYmpGbnMucmFzdHJpZ2luLmZhbmN5TmFtZSA9IFwiUmFzdHJpZ2luXCJcblxuLy8gZm5MaW1zIGZvciBkaXNwbGF5IGxpbWl0c1xub2JqRm5zLmFja2xleS54eUxpbSA9IDMyLjc2OFxub2JqRm5zLmJvaGFjaGV2c2t5MS54eUxpbSA9IDEwMFxub2JqRm5zLmdyaWV3YW5rLnh5TGltID0gNjAwXG5vYmpGbnMucmFzdHJpZ2luLnh5TGltID0gNS4xMlxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyB0aGUgc3RhcnR1cCBmdW5jdGlvblxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcblx0Ly8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5cdHZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3JjX2pzX2NtYS1saWJfanNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvY21hZXMtZGVtby9jbWEtd29ya2VyLmpzXCIpKSlcblx0X193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcblx0cmV0dXJuIF9fd2VicGFja19leHBvcnRzX187XG59O1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzIGFuZCBzaWJsaW5nIGNodW5rcyBmb3IgdGhlIGVudHJ5cG9pbnRcbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIFwiMTE4MzI3NDVjYmY3MzUwOTg0Y2VcIiArIFwiLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4vLyBcIjFcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwic3JjX3BhZ2VzX2NtYWVzLWRlbW9fY21hLXdvcmtlcl9qc1wiOiAxXG59O1xuXG4vLyBpbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmdcbnZhciBpbnN0YWxsQ2h1bmsgPSAoZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdHdoaWxlKGNodW5rSWRzLmxlbmd0aClcblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHMucG9wKCldID0gMTtcblx0cGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmkgPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0Ly8gXCIxXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG5cdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0aW1wb3J0U2NyaXB0cyhfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCkpO1xuXHRcdH1cblx0fVxufTtcblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0aXBweV9wcm9qZWN0X3dlYnNpdGVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rdGlwcHlfcHJvamVjdF93ZWJzaXRlXCJdIHx8IFtdO1xudmFyIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uID0gY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSBpbnN0YWxsQ2h1bms7XG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3QiLCJ2YXIgbmV4dCA9IF9fd2VicGFja19yZXF1aXJlX18ueDtcbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShcInNyY19qc19jbWEtbGliX2pzXCIpLnRoZW4obmV4dCk7XG59OyIsIiIsIi8vIHJ1biBzdGFydHVwXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIiwiIl0sIm5hbWVzIjpbIkNNQSIsImdldERlZmF1bHRDTUFQb3BzaXplIiwib2JqRm5zIiwib2JqRm5Jbml0IiwibWVhblJhZGl1c01pbiIsIm1lYW5SYWRpdXNNYXgiLCJzaWdtYVNjYWxlIiwibkVsbGlwc2VUZXN0UHRzIiwib2JqRm5OYW1lIiwib2JqRm5MaW0iLCJvYmpGbiIsImNtYSIsInBvcHNpemVNdWx0aXBsaWVyIiwiZWxsaXBzZVRlc3RQdHMiLCJ0aGV0YVN0ZXAiLCJNYXRoIiwiUEkiLCJ0ZXN0UHRzIiwidGhldGEiLCJwdXNoIiwiRmxvYXQzMkFycmF5IiwiZnJvbSIsInNpbiIsImNvcyIsImNtYUluaXQiLCJvbm1lc3NhZ2UiLCJlIiwiZGF0YSIsImluZm8iLCJtc2ciLCJjbWFTdGVwIiwidXBkYXRlT2JqRm4iLCJjbWFTaWdtYSIsInJhbmRSYWRpYW5zIiwicmFuZG9tIiwicmFuZFJhZGl1cyIsImNtYU1lYW4iLCJwb3BzaXplIiwidW5kZWZpbmVkIiwic29sdXRpb25zIiwic2NvcmVzIiwic29sX3Njb3JlX2FycmF5IiwibWVzc2FnZSIsInNjb3JlU3VtIiwibWF4QWJzRGltIiwiaSIsInNvbHV0aW9uIiwiYXNrIiwic2NvcmUiLCJqIiwic29sRGltIiwiYWJzU29sRGltIiwiYWJzIiwic2xpY2UiLCJlbGxpcHNlUHRzIiwiZ2V0RWxsaXBzZVB0cyIsIm1lYW4iLCJwb3N0TWVzc2FnZSIsInRlbGwiLCJ4eUxpbSIsIkJEIiwic2lnbWEiLCJwdHMiLCJsZW5ndGgiLCJvZmZzZXQiLCJtdWxWZWMiLCJuVml6V29ya2VycyIsImNhbnZhc0RpbSIsImNhbnZhc0RpbU1heCIsIm1hcmtlclIiLCJ6b29tU3RlcE1hZyIsInNvbHV0aW9uTWFyZ2luIiwiZ2V0Vmlld1N0ZXAiLCJldmFsSGFsZkxpbSIsImNhbnZhc0hhbGZEaW0iLCJhY2tsZXkiLCJpbnB1dHMiLCJhIiwiYiIsImMiLCJkIiwiZF9pbnYiLCJzdW0xIiwic3VtMiIsInhpIiwidGVybTEiLCJleHAiLCJzcXJ0IiwidGVybTIiLCJFIiwiYm9oYWNoZXZza3kxIiwieDEiLCJ4MiIsInRlcm0zIiwidGVybTQiLCJncmlld2FuayIsInN1bSIsInByb2QiLCJyYXN0cmlnaW4iLCJmYW5jeU5hbWUiXSwic291cmNlUm9vdCI6IiJ9