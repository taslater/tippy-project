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
      msg = _e$data[1];

  if (info === "objFnName") {
    objFnName = msg;
    cmaInit();
  } else if (info === "popMult") {
    popsizeMultiplier = msg;
    cmaInit();
  } else if (info === "step") {
    cmaStep();
  }
};

function cmaInit() {
  updateObjFn(objFnName);
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
      maxAbsDim = 0,
      minScore = Infinity,
      maxScore = -Infinity;

  for (var i = 0; i < cma.popsize; i++) {
    var solution = cma.ask(),
        score = objFn(solution);
    scoreSum += score;

    if (score < minScore) {
      minScore = score;
    }

    if (score > maxScore) {
      maxScore = score;
    }

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
  message.meanScore = scoreSum / cma.popsize;
  message.minScore = minScore;
  message.maxScore = maxScore;
  message.ellipsePts = getEllipsePts().slice();
  message.mean = cma.mean.slice();
  message.scaledSigma = cma.sigma / objFnLim;
  message.maxAbsDim = maxAbsDim;
  postMessage(message);
  cma.tell(sol_score_array); // console.log("mean score:", scoreSum / cma.popsize)
}

function updateObjFn(objFnName) {
  objFn = _obj_fns_js__WEBPACK_IMPORTED_MODULE_1__.objFns[objFnName];
  objFnLim = objFn.xyLim;
}

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
/* harmony export */   "chartHeight": () => (/* binding */ chartHeight),
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
    canvasDimMax = 700,
    chartHeight = 240,
    markerR = 7,
    objFnInit = "ackley",
    meanRadiusMin = 0.6,
    meanRadiusMax = 0.9,
    sigmaScale = 0.2,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX2NtYWVzLWRlbW9fY21hLXdvcmtlcl9qcy5iM2Y1MTlmNTNkZDU1NmVmNTliNS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVFBLElBQUlRLFNBQVMsR0FBR0wsa0RBQWhCO0FBQUEsSUFDRU0sUUFERjtBQUFBLElBRUVDLEtBRkY7QUFBQSxJQUdFQyxHQUhGO0FBQUEsSUFJRUMsaUJBQWlCLEdBQUcsQ0FKdEIsRUFNQTs7QUFDQSxJQUFNQyxjQUFjLEdBQUksWUFBTTtBQUM1QixNQUFNQyxTQUFTLEdBQUksSUFBSUMsSUFBSSxDQUFDQyxFQUFWLEdBQWdCVCx3REFBbEM7QUFDQSxNQUFNVSxPQUFPLEdBQUcsRUFBaEI7O0FBQ0EsT0FBSyxJQUFJQyxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBRyxJQUFJSCxJQUFJLENBQUNDLEVBQXJDLEVBQXlDRSxLQUFLLElBQUlKLFNBQWxELEVBQTZEO0FBQzNERyxJQUFBQSxPQUFPLENBQUNFLElBQVIsQ0FBYUMsWUFBWSxDQUFDQyxJQUFiLENBQWtCLENBQUNOLElBQUksQ0FBQ08sR0FBTCxDQUFTSixLQUFULENBQUQsRUFBa0JILElBQUksQ0FBQ1EsR0FBTCxDQUFTTCxLQUFULENBQWxCLENBQWxCLENBQWI7QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FQc0IsRUFBdkI7O0FBU0FPLE9BQU87O0FBRVBDLFNBQVMsR0FBRyxtQkFBQ0MsQ0FBRCxFQUFPO0FBQ2pCLCtCQUFvQkEsQ0FBQyxDQUFDQyxJQUF0QjtBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxHQUFiOztBQUVBLE1BQUlELElBQUksS0FBSyxXQUFiLEVBQTBCO0FBQ3hCcEIsSUFBQUEsU0FBUyxHQUFHcUIsR0FBWjtBQUNBTCxJQUFBQSxPQUFPO0FBQ1IsR0FIRCxNQUdPLElBQUlJLElBQUksS0FBSyxTQUFiLEVBQXdCO0FBQzdCaEIsSUFBQUEsaUJBQWlCLEdB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YTtXQUNiO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7Ozs7V0NwQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFSEE7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL2NtYS13b3JrZXIuanMiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlLy4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvLi9zcmMvcGFnZXMvY21hZXMtZGVtby9vYmotZm5zLmpzIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXQgbWluaS1jc3MgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaW1wb3J0U2NyaXB0cyBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvc3RhcnR1cCBjaHVuayBkZXBlbmRlbmNpZXMiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENNQSwgZ2V0RGVmYXVsdENNQVBvcHNpemUgfSBmcm9tIFwiLi4vLi4vanMvY21hLWxpYi5qc1wiXG5pbXBvcnQgeyBvYmpGbnMgfSBmcm9tIFwiLi9vYmotZm5zLmpzXCJcbmltcG9ydCB7XG4gIG9iakZuSW5pdCxcbiAgbWVhblJhZGl1c01pbixcbiAgbWVhblJhZGl1c01heCxcbiAgc2lnbWFTY2FsZSxcbiAgbkVsbGlwc2VUZXN0UHRzLFxufSBmcm9tIFwiLi9nbG9iYWxzLmpzXCJcblxubGV0IG9iakZuTmFtZSA9IG9iakZuSW5pdCxcbiAgb2JqRm5MaW0sXG4gIG9iakZuLFxuICBjbWEsXG4gIHBvcHNpemVNdWx0aXBsaWVyID0gMVxuXG4vLyBJSUZFXG5jb25zdCBlbGxpcHNlVGVzdFB0cyA9ICgoKSA9PiB7XG4gIGNvbnN0IHRoZXRhU3RlcCA9ICgyICogTWF0aC5QSSkgLyBuRWxsaXBzZVRlc3RQdHNcbiAgY29uc3QgdGVzdFB0cyA9IFtdXG4gIGZvciAobGV0IHRoZXRhID0gMDsgdGhldGEgPCAyICogTWF0aC5QSTsgdGhldGEgKz0gdGhldGFTdGVwKSB7XG4gICAgdGVzdFB0cy5wdXNoKEZsb2F0MzJBcnJheS5mcm9tKFtNYXRoLnNpbih0aGV0YSksIE1hdGguY29zKHRoZXRhKV0pKVxuICB9XG4gIHJldHVybiB0ZXN0UHRzXG59KSgpXG5cbmNtYUluaXQoKVxuXG5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICBjb25zdCBbaW5mbywgbXNnXSA9IGUuZGF0YVxuXG4gIGlmIChpbmZvID09PSBcIm9iakZuTmFtZVwiKSB7XG4gICAgb2JqRm5OYW1lID0gbXNnXG4gICAgY21hSW5pdCgpXG4gIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJwb3BNdWx0XCIpIHtcbiAgICBwb3BzaXplTXVsdGlwbGllciA9IG1zZ1xuICAgIGNtYUluaXQoKVxuICB9IGVsc2UgaWYgKGluZm8gPT09IFwic3RlcFwiKSB7XG4gICAgY21hU3RlcCgpXG4gIH1cbn1cblxuZnVuY3Rpb24gY21hSW5pdCgpIHtcbiAgdXBkYXRlT2JqRm4ob2JqRm5OYW1lKVxuICBjb25zdCBjbWFTaWdtYSA9IHNpZ21hU2NhbGUgKiBvYmpGbkxpbVxuICBjb25zdCByYW5kUmFkaWFucyA9IDIgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKVxuICBjb25zdCByYW5kUmFkaXVzID1cbiAgICBvYmpGbkxpbSAqIChtZWFuUmFkaXVzTWluICsgTWF0aC5yYW5kb20oKSAqIChtZWFuUmFkaXVzTWF4IC0gbWVhblJhZGl1c01pbikpXG4gIC8vIGNvbnNvbGUubG9nKFwib2JqRm5MaW1cIiwgb2JqRm5MaW0pXG4gIC8vIGNvbnNvbGUubG9nKFwicmFuZFJhZGl1c1wiLCByYW5kUmFkaXVzKVxuICBjb25zdCBjbWFNZWFuID0gRmxvYXQzMkFycmF5LmZyb20oW1xuICAgIHJhbmRSYWRpdXMgKiBNYXRoLmNvcyhyYW5kUmFkaWFucyksXG4gICAgcmFuZFJhZGl1cyAqIE1hdGguc2luKHJhbmRSYWRpYW5zKSxcbiAgXSlcbiAgY29uc3QgcG9wc2l6ZSA9IGdldERlZmF1bHRDTUFQb3BzaXplKDIpICogcG9wc2l6ZU11bHRpcGxpZXJcbiAgY21hID0gbmV3IENNQShjbWFNZWFuLCBjbWFTaWdtYSwgcG9wc2l6ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXG4gIGNtYVN0ZXAoKVxufVxuXG5mdW5jdGlvbiBjbWFTdGVwKCkge1xuICBjb25zdCBzb2x1dGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KDIgKiBjbWEucG9wc2l6ZSksXG4gICAgc2NvcmVzID0gbmV3IEZsb2F0MzJBcnJheShjbWEucG9wc2l6ZSksXG4gICAgc29sX3Njb3JlX2FycmF5ID0gW10sXG4gICAgbWVzc2FnZSA9IHt9XG4gIGxldCBzY29yZVN1bSA9IDAsXG4gICAgbWF4QWJzRGltID0gMCxcbiAgICBtaW5TY29yZSA9IEluZmluaXR5LFxuICAgIG1heFNjb3JlID0gLUluZmluaXR5XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY21hLnBvcHNpemU7IGkrKykge1xuICAgIGNvbnN0IHNvbHV0aW9uID0gY21hLmFzaygpLFxuICAgICAgc2NvcmUgPSBvYmpGbihzb2x1dGlvbilcbiAgICBzY29yZVN1bSArPSBzY29yZVxuICAgIGlmIChzY29yZSA8IG1pblNjb3JlKSB7XG4gICAgICBtaW5TY29yZSA9IHNjb3JlXG4gICAgfVxuICAgIGlmIChzY29yZSA+IG1heFNjb3JlKSB7XG4gICAgICBtYXhTY29yZSA9IHNjb3JlXG4gICAgfVxuICAgIHNvbF9zY29yZV9hcnJheS5wdXNoKHsgc29sdXRpb24sIHNjb3JlIH0pXG4gICAgc2NvcmVzW2ldID0gc2NvcmVcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDI7IGorKykge1xuICAgICAgY29uc3Qgc29sRGltID0gc29sdXRpb25bal0sXG4gICAgICAgIGFic1NvbERpbSA9IE1hdGguYWJzKHNvbERpbSlcbiAgICAgIGlmIChhYnNTb2xEaW0gPiBtYXhBYnNEaW0pIHtcbiAgICAgICAgbWF4QWJzRGltID0gYWJzU29sRGltXG4gICAgICB9XG4gICAgICBzb2x1dGlvbnNbMiAqIGkgKyBqXSA9IHNvbERpbVxuICAgIH1cbiAgfVxuICBtZXNzYWdlLnNvbHV0aW9ucyA9IHNvbHV0aW9ucy5zbGljZSgpXG4gIG1lc3NhZ2Uuc2NvcmVzID0gc2NvcmVzLnNsaWNlKClcbiAgbWVzc2FnZS5tZWFuU2NvcmUgPSBzY29yZVN1bSAvIGNtYS5wb3BzaXplXG4gIG1lc3NhZ2UubWluU2NvcmUgPSBtaW5TY29yZVxuICBtZXNzYWdlLm1heFNjb3JlID0gbWF4U2NvcmVcbiAgbWVzc2FnZS5lbGxpcHNlUHRzID0gZ2V0RWxsaXBzZVB0cygpLnNsaWNlKClcbiAgbWVzc2FnZS5tZWFuID0gY21hLm1lYW4uc2xpY2UoKVxuICBtZXNzYWdlLnNjYWxlZFNpZ21hID0gY21hLnNpZ21hIC8gb2JqRm5MaW1cbiAgbWVzc2FnZS5tYXhBYnNEaW0gPSBtYXhBYnNEaW1cbiAgcG9zdE1lc3NhZ2UobWVzc2FnZSlcblxuICBjbWEudGVsbChzb2xfc2NvcmVfYXJyYXkpXG5cbiAgLy8gY29uc29sZS5sb2coXCJtZWFuIHNjb3JlOlwiLCBzY29yZVN1bSAvIGNtYS5wb3BzaXplKVxufVxuXG5mdW5jdGlvbiB1cGRhdGVPYmpGbihvYmpGbk5hbWUpIHtcbiAgb2JqRm4gPSBvYmpGbnNbb2JqRm5OYW1lXVxuICBvYmpGbkxpbSA9IG9iakZuLnh5TGltXG59XG5cbmZ1bmN0aW9uIGdldEVsbGlwc2VQdHMoKSB7XG4gIGNvbnN0IEJEID0gY21hLkJELFxuICAgIG1lYW4gPSBjbWEubWVhbixcbiAgICBzaWdtYSA9IGNtYS5zaWdtYVxuICBjb25zdCBwdHMgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsbGlwc2VUZXN0UHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gQkQubXVsVmVjKGVsbGlwc2VUZXN0UHRzW2ldKVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICBwdHMucHVzaChtZWFuW2pdICsgc2lnbWEgKiBvZmZzZXRbal0pXG4gICAgfVxuICB9XG4gIHJldHVybiBGbG9hdDMyQXJyYXkuZnJvbShwdHMpXG59XG4iLCJleHBvcnQgY29uc3QgblZpeldvcmtlcnMgPSAxLFxuICBjYW52YXNEaW0gPSA0MDAsXG4gIGNhbnZhc0RpbU1heCA9IDcwMCxcbiAgY2hhcnRIZWlnaHQgPSAyNDAsXG4gIG1hcmtlclIgPSA3LFxuICBvYmpGbkluaXQgPSBcImFja2xleVwiLFxuICBtZWFuUmFkaXVzTWluID0gMC42LFxuICBtZWFuUmFkaXVzTWF4ID0gMC45LFxuICBzaWdtYVNjYWxlID0gMC4yLFxuICB6b29tU3RlcE1hZyA9IDEuMDUsXG4gIG5FbGxpcHNlVGVzdFB0cyA9IDMyLFxuICBzb2x1dGlvbk1hcmdpbiA9IDEuMjUsXG4gIGdldFZpZXdTdGVwID0gKGV2YWxIYWxmTGltLCBjYW52YXNIYWxmRGltKSA9PiB7XG4gICAgcmV0dXJuIGV2YWxIYWxmTGltIC8gKGNhbnZhc0hhbGZEaW0gLSAwLjUpXG4gIH1cbiIsIi8vIHtcbi8vICAgYWNrbGV5OiBcIkFja2xleVwiLFxuLy8gICBib2hhY2hldnNreTE6IFwiQm9oYWNoZXZza3kgTm8uMVwiLFxuLy8gICBncmlld2FuazogXCJHcmlld2Fua1wiLFxuLy8gICByYXN0cmlnaW46IFwiUmFzdHJpZ2luXCIsXG4vLyB9XG5cbmV4cG9ydCBjb25zdCBvYmpGbnMgPSB7XG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vYWNrbGV5Lmh0bWxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9Db2RlL2Fja2xleW0uaHRtbFxuICBhY2tsZXk6IChpbnB1dHMpID0+IHtcbiAgICAvLyBkZWZhdWx0IGE9MjAsIGI9MC4yLCBjPTJwaVxuICAgIGNvbnN0IGEgPSAyMCxcbiAgICAgIGIgPSAwLjIsXG4gICAgICBjID0gMiAqIE1hdGguUElcbiAgICAvLyBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBjb25zdCBkID0gMixcbiAgICAgIGRfaW52ID0gMC41IC8vICgxIC8gZClcbiAgICBsZXQgc3VtMSA9IDAsXG4gICAgICBzdW0yID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bTEgKz0geGkgKiB4aVxuICAgICAgc3VtMiArPSBNYXRoLmNvcyhjICogeGkpXG4gICAgfVxuICAgIC8vIGxldCBkX2ludiA9IDEgLyBkXG4gICAgbGV0IHRlcm0xID0gLWEgKiBNYXRoLmV4cCgtYiAqIE1hdGguc3FydChzdW0xICogZF9pbnYpKSxcbiAgICAgIHRlcm0yID0gLU1hdGguZXhwKHN1bTIgKiBkX2ludilcbiAgICByZXR1cm4gdGVybTEgKyB0ZXJtMiArIGEgKyBNYXRoLkVcbiAgfSxcbiAgLy8gaHR0cDovL2JlbmNobWFya2ZjbnMueHl6L2JlbmNobWFya2ZjbnMvYm9oYWNoZXZza3luMWZjbi5odG1sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vQ29kZS9ib2hhMW0uaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2JvaGEuaHRtbFxuICBib2hhY2hldnNreTE6IChpbnB1dHMpID0+IHtcbiAgICBsZXQgeDEgPSBpbnB1dHNbMF1cbiAgICBsZXQgeDIgPSBpbnB1dHNbMV1cblxuICAgIGxldCB0ZXJtMSA9IHgxICogeDFcbiAgICBsZXQgdGVybTIgPSAyICogeDIgKiB4MlxuICAgIGxldCB0ZXJtMyA9IC0wLjMgKiBNYXRoLmNvcygzICogTWF0aC5QSSAqIHgxKVxuICAgIGxldCB0ZXJtNCA9IC0wLjQgKiBNYXRoLmNvcyg0ICogTWF0aC5QSSAqIHgyKVxuXG4gICAgcmV0dXJuIHRlcm0xICsgdGVybTIgKyB0ZXJtMyArIHRlcm00ICsgMC43XG4gIH0sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vZ3JpZXdhbmsuaHRtbFxuICBncmlld2FuazogKGlucHV0cykgPT4ge1xuICAgIGxldCBkID0gaW5wdXRzLmxlbmd0aFxuICAgIGxldCBzdW0gPSAwXG4gICAgbGV0IHByb2QgPSAxXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIGxldCB4aSA9IGlucHV0c1tpXVxuICAgICAgc3VtICs9ICh4aSAqIHhpKSAvIDQwMDBcbiAgICAgIHByb2QgKj0gTWF0aC5jb3MoeGkgLyBNYXRoLnNxcnQoaSArIDEpKVxuICAgIH1cbiAgICByZXR1cm4gc3VtIC0gcHJvZCArIDFcbiAgfSxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9yYXN0ci5odG1sXG4gIHJhc3RyaWdpbjogKGlucHV0cykgPT4ge1xuICAgIGxldCBkID0gaW5wdXRzLmxlbmd0aFxuICAgIGxldCBzdW0gPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIGxldCB4aSA9IGlucHV0c1tpXVxuICAgICAgc3VtICs9IHhpICogeGkgLSAxMCAqIE1hdGguY29zKDIgKiBNYXRoLlBJICogeGkpXG4gICAgfVxuICAgIHJldHVybiAxMCAqIGQgKyBzdW1cbiAgfSxcbn1cblxuLy8gZmFuY3kgbmFtZXMgZm9yIHNlbGVjdCBtZW51XG5vYmpGbnMuYWNrbGV5LmZhbmN5TmFtZSA9IFwiQWNrbGV5XCJcbm9iakZucy5ib2hhY2hldnNreTEuZmFuY3lOYW1lID0gXCJCb2hhY2hldnNreSBOby4xXCJcbm9iakZucy5ncmlld2Fuay5mYW5jeU5hbWUgPSBcIkdyaWV3YW5rXCJcbm9iakZucy5yYXN0cmlnaW4uZmFuY3lOYW1lID0gXCJSYXN0cmlnaW5cIlxuXG4vLyBmbkxpbXMgZm9yIGRpc3BsYXkgbGltaXRzXG5vYmpGbnMuYWNrbGV5Lnh5TGltID0gMzIuNzY4XG5vYmpGbnMuYm9oYWNoZXZza3kxLnh5TGltID0gMTAwXG5vYmpGbnMuZ3JpZXdhbmsueHlMaW0gPSA2MDBcbm9iakZucy5yYXN0cmlnaW4ueHlMaW0gPSA1LjEyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIHRoZSBzdGFydHVwIGZ1bmN0aW9uXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuXHQvLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcblx0dmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJzcmNfanNfY21hLWxpYl9qc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9jbWFlcy1kZW1vL2NtYS13b3JrZXIuanNcIikpKVxuXHRfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuXHRyZXR1cm4gX193ZWJwYWNrX2V4cG9ydHNfXztcbn07XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3MgYW5kIHNpYmxpbmcgY2h1bmtzIGZvciB0aGUgZW50cnlwb2ludFxuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgXCIxMTgzMjc0NWNiZjczNTA5ODRjZVwiICsgXCIuanNcIjtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYWxsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRiA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3Ncbi8vIFwiMVwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJzcmNfcGFnZXNfY21hZXMtZGVtb19jbWEtd29ya2VyX2pzXCI6IDFcbn07XG5cbi8vIGltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZ1xudmFyIGluc3RhbGxDaHVuayA9IChkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0d2hpbGUoY2h1bmtJZHMubGVuZ3RoKVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkcy5wb3AoKV0gPSAxO1xuXHRwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaSA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHQvLyBcIjFcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcblx0aWYoIWluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRpbXBvcnRTY3JpcHRzKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKSk7XG5cdFx0fVxuXHR9XG59O1xuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3RpcHB5X3Byb2plY3Rfd2Vic2l0ZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0aXBweV9wcm9qZWN0X3dlYnNpdGVcIl0gfHwgW107XG52YXIgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24gPSBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IGluc3RhbGxDaHVuaztcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdCIsInZhciBuZXh0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy54O1xuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwic3JjX2pzX2NtYS1saWJfanNcIikudGhlbihuZXh0KTtcbn07IiwiIiwiLy8gcnVuIHN0YXJ0dXBcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iLCIiXSwibmFtZXMiOlsiQ01BIiwiZ2V0RGVmYXVsdENNQVBvcHNpemUiLCJvYmpGbnMiLCJvYmpGbkluaXQiLCJtZWFuUmFkaXVzTWluIiwibWVhblJhZGl1c01heCIsInNpZ21hU2NhbGUiLCJuRWxsaXBzZVRlc3RQdHMiLCJvYmpGbk5hbWUiLCJvYmpGbkxpbSIsIm9iakZuIiwiY21hIiwicG9wc2l6ZU11bHRpcGxpZXIiLCJlbGxpcHNlVGVzdFB0cyIsInRoZXRhU3RlcCIsIk1hdGgiLCJQSSIsInRlc3RQdHMiLCJ0aGV0YSIsInB1c2giLCJGbG9hdDMyQXJyYXkiLCJmcm9tIiwic2luIiwiY29zIiwiY21hSW5pdCIsIm9ubWVzc2FnZSIsImUiLCJkYXRhIiwiaW5mbyIsIm1zZyIsImNtYVN0ZXAiLCJ1cGRhdGVPYmpGbiIsImNtYVNpZ21hIiwicmFuZFJhZGlhbnMiLCJyYW5kb20iLCJyYW5kUmFkaXVzIiwiY21hTWVhbiIsInBvcHNpemUiLCJ1bmRlZmluZWQiLCJzb2x1dGlvbnMiLCJzY29yZXMiLCJzb2xfc2NvcmVfYXJyYXkiLCJtZXNzYWdlIiwic2NvcmVTdW0iLCJtYXhBYnNEaW0iLCJtaW5TY29yZSIsIkluZmluaXR5IiwibWF4U2NvcmUiLCJpIiwic29sdXRpb24iLCJhc2siLCJzY29yZSIsImoiLCJzb2xEaW0iLCJhYnNTb2xEaW0iLCJhYnMiLCJzbGljZSIsIm1lYW5TY29yZSIsImVsbGlwc2VQdHMiLCJnZXRFbGxpcHNlUHRzIiwibWVhbiIsInNjYWxlZFNpZ21hIiwic2lnbWEiLCJwb3N0TWVzc2FnZSIsInRlbGwiLCJ4eUxpbSIsIkJEIiwicHRzIiwibGVuZ3RoIiwib2Zmc2V0IiwibXVsVmVjIiwiblZpeldvcmtlcnMiLCJjYW52YXNEaW0iLCJjYW52YXNEaW1NYXgiLCJjaGFydEhlaWdodCIsIm1hcmtlclIiLCJ6b29tU3RlcE1hZyIsInNvbHV0aW9uTWFyZ2luIiwiZ2V0Vmlld1N0ZXAiLCJldmFsSGFsZkxpbSIsImNhbnZhc0hhbGZEaW0iLCJhY2tsZXkiLCJpbnB1dHMiLCJhIiwiYiIsImMiLCJkIiwiZF9pbnYiLCJzdW0xIiwic3VtMiIsInhpIiwidGVybTEiLCJleHAiLCJzcXJ0IiwidGVybTIiLCJFIiwiYm9oYWNoZXZza3kxIiwieDEiLCJ4MiIsInRlcm0zIiwidGVybTQiLCJncmlld2FuayIsInN1bSIsInByb2QiLCJyYXN0cmlnaW4iLCJmYW5jeU5hbWUiXSwic291cmNlUm9vdCI6IiJ9