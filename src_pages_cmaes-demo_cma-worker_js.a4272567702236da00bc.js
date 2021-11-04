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




var objFnLim, objFn, cma; // IIFE

var ellipseTestPts = function () {
  var thetaStep = 2 * Math.PI / _globals_js__WEBPACK_IMPORTED_MODULE_2__.nEllipseTestPts;
  var testPts = [];

  for (var theta = 0; theta < 2 * Math.PI; theta += thetaStep) {
    testPts.push(Float32Array.from([Math.sin(theta), Math.cos(theta)]));
  }

  return testPts;
}(); // cmaInit()


onmessage = function onmessage(e) {
  var _e$data = _slicedToArray(e.data, 2),
      info = _e$data[0],
      msg = _e$data[1];

  if (info === "settings") {
    cmaInit(msg);
  } else if (info === "step") {
    cmaStep();
  }
};

function cmaInit(settings) {
  var objFnName = settings.objFnName,
      popsizeMultiplier = settings.popsizeMultiplier,
      sigmaScale = settings.sigmaScale,
      meanRadius = settings.meanRadius,
      meanDirection = settings.meanDirection;
  updateObjFn(objFnName);
  var cmaSigma = sigmaScale * objFnLim;
  var direction = meanDirection == null ? 2 * Math.PI * Math.random() : Math.PI * meanDirection; // const radiusMultiplier =
  //   meanRadius == null
  //     ? meanRadiusMin + Math.random() * (meanRadiusMax - meanRadiusMin)
  //     : meanRadius

  var radiusMultiplier = meanRadius;
  var radius = objFnLim * radiusMultiplier;
  var cmaMean = Float32Array.from([radius * Math.cos(direction), radius * Math.sin(direction)]);
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
  cma.tell(sol_score_array);
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
/* harmony export */   "chartWidthMax": () => (/* binding */ chartWidthMax),
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
    canvasDimMax = 1200,
    chartWidthMax = 1200,
    chartHeight = 240,
    markerR = 7,
    objFnInit = "ackley",
    meanRadiusMin = 0.6,
    meanRadiusMax = 0.9,
    sigmaScale = 0.2,
    zoomStepMag = 1.05,
    nEllipseTestPts = 32,
    solutionMargin = 1.5,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX2NtYWVzLWRlbW9fY21hLXdvcmtlcl9qcy5hNDI3MjU2NzcwMjIzNmRhMDBiYy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlNLFFBQUosRUFBY0MsS0FBZCxFQUFxQkMsR0FBckIsRUFFQTs7QUFDQSxJQUFNQyxjQUFjLEdBQUksWUFBTTtBQUM1QixNQUFNQyxTQUFTLEdBQUksSUFBSUMsSUFBSSxDQUFDQyxFQUFWLEdBQWdCUCx3REFBbEM7QUFDQSxNQUFNUSxPQUFPLEdBQUcsRUFBaEI7O0FBQ0EsT0FBSyxJQUFJQyxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBRyxJQUFJSCxJQUFJLENBQUNDLEVBQXJDLEVBQXlDRSxLQUFLLElBQUlKLFNBQWxELEVBQTZEO0FBQzNERyxJQUFBQSxPQUFPLENBQUNFLElBQVIsQ0FBYUMsWUFBWSxDQUFDQyxJQUFiLENBQWtCLENBQUNOLElBQUksQ0FBQ08sR0FBTCxDQUFTSixLQUFULENBQUQsRUFBa0JILElBQUksQ0FBQ1EsR0FBTCxDQUFTTCxLQUFULENBQWxCLENBQWxCLENBQWI7QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FQc0IsRUFBdkIsRUFTQTs7O0FBRUFPLFNBQVMsR0FBRyxtQkFBQ0MsQ0FBRCxFQUFPO0FBQ2pCLCtCQUFvQkEsQ0FBQyxDQUFDQyxJQUF0QjtBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxHQUFiOztBQUNBLE1BQUlELElBQUksS0FBSyxVQUFiLEVBQXlCO0FBQ3ZCRSxJQUFBQSxPQUFPLENBQUNELEdBQUQsQ0FBUDtBQUNELEdBRkQsTUFFTyxJQUFJRCxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUMxQkcsSUFBQUEsT0FBTztBQUNSO0FBQ0YsQ0FQRDs7QUFTQSxTQUFTRCxPQUFULENBQWlCRSxRQUFqQixFQUEyQjtBQUN6QixNQUNFQyxTQURGLEdBTUlELFFBTkosQ0FDRUMsU0FERjtB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGFBQWE7V0FDYjtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7Ozs7O1dDcENBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRUhBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvLi9zcmMvcGFnZXMvY21hZXMtZGVtby9jbWEtd29ya2VyLmpzIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlLy4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vb2JqLWZucy5qcyIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2ltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL3N0YXJ0dXAgY2h1bmsgZGVwZW5kZW5jaWVzIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDTUEsIGdldERlZmF1bHRDTUFQb3BzaXplIH0gZnJvbSBcIi4uLy4uL2pzL2NtYS1saWIuanNcIlxuaW1wb3J0IHsgb2JqRm5zIH0gZnJvbSBcIi4vb2JqLWZucy5qc1wiXG5pbXBvcnQgeyBtZWFuUmFkaXVzTWluLCBtZWFuUmFkaXVzTWF4LCBuRWxsaXBzZVRlc3RQdHMgfSBmcm9tIFwiLi9nbG9iYWxzLmpzXCJcblxubGV0IG9iakZuTGltLCBvYmpGbiwgY21hXG5cbi8vIElJRkVcbmNvbnN0IGVsbGlwc2VUZXN0UHRzID0gKCgpID0+IHtcbiAgY29uc3QgdGhldGFTdGVwID0gKDIgKiBNYXRoLlBJKSAvIG5FbGxpcHNlVGVzdFB0c1xuICBjb25zdCB0ZXN0UHRzID0gW11cbiAgZm9yIChsZXQgdGhldGEgPSAwOyB0aGV0YSA8IDIgKiBNYXRoLlBJOyB0aGV0YSArPSB0aGV0YVN0ZXApIHtcbiAgICB0ZXN0UHRzLnB1c2goRmxvYXQzMkFycmF5LmZyb20oW01hdGguc2luKHRoZXRhKSwgTWF0aC5jb3ModGhldGEpXSkpXG4gIH1cbiAgcmV0dXJuIHRlc3RQdHNcbn0pKClcblxuLy8gY21hSW5pdCgpXG5cbm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gIGNvbnN0IFtpbmZvLCBtc2ddID0gZS5kYXRhXG4gIGlmIChpbmZvID09PSBcInNldHRpbmdzXCIpIHtcbiAgICBjbWFJbml0KG1zZylcbiAgfSBlbHNlIGlmIChpbmZvID09PSBcInN0ZXBcIikge1xuICAgIGNtYVN0ZXAoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNtYUluaXQoc2V0dGluZ3MpIHtcbiAgY29uc3Qge1xuICAgIG9iakZuTmFtZSxcbiAgICBwb3BzaXplTXVsdGlwbGllcixcbiAgICBzaWdtYVNjYWxlLFxuICAgIG1lYW5SYWRpdXMsXG4gICAgbWVhbkRpcmVjdGlvbixcbiAgfSA9IHNldHRpbmdzXG4gIHVwZGF0ZU9iakZuKG9iakZuTmFtZSlcbiAgY29uc3QgY21hU2lnbWEgPSBzaWdtYVNjYWxlICogb2JqRm5MaW1cbiAgY29uc3QgZGlyZWN0aW9uID1cbiAgICBtZWFuRGlyZWN0aW9uID09IG51bGxcbiAgICAgID8gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpXG4gICAgICA6IE1hdGguUEkgKiBtZWFuRGlyZWN0aW9uXG4gIC8vIGNvbnN0IHJhZGl1c011bHRpcGxpZXIgPVxuICAvLyAgIG1lYW5SYWRpdXMgPT0gbnVsbFxuICAvLyAgICAgPyBtZWFuUmFkaXVzTWluICsgTWF0aC5yYW5kb20oKSAqIChtZWFuUmFkaXVzTWF4IC0gbWVhblJhZGl1c01pbilcbiAgLy8gICAgIDogbWVhblJhZGl1c1xuICBjb25zdCByYWRpdXNNdWx0aXBsaWVyID0gbWVhblJhZGl1c1xuICBjb25zdCByYWRpdXMgPSBvYmpGbkxpbSAqIHJhZGl1c011bHRpcGxpZXJcbiAgY29uc3QgY21hTWVhbiA9IEZsb2F0MzJBcnJheS5mcm9tKFtcbiAgICByYWRpdXMgKiBNYXRoLmNvcyhkaXJlY3Rpb24pLFxuICAgIHJhZGl1cyAqIE1hdGguc2luKGRpcmVjdGlvbiksXG4gIF0pXG4gIGNvbnN0IHBvcHNpemUgPSBnZXREZWZhdWx0Q01BUG9wc2l6ZSgyKSAqIHBvcHNpemVNdWx0aXBsaWVyXG4gIGNtYSA9IG5ldyBDTUEoY21hTWVhbiwgY21hU2lnbWEsIHBvcHNpemUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxuICBjbWFTdGVwKClcbn1cblxuZnVuY3Rpb24gY21hU3RlcCgpIHtcbiAgY29uc3Qgc29sdXRpb25zID0gbmV3IEZsb2F0MzJBcnJheSgyICogY21hLnBvcHNpemUpLFxuICAgIHNjb3JlcyA9IG5ldyBGbG9hdDMyQXJyYXkoY21hLnBvcHNpemUpLFxuICAgIHNvbF9zY29yZV9hcnJheSA9IFtdLFxuICAgIG1lc3NhZ2UgPSB7fVxuICBsZXQgc2NvcmVTdW0gPSAwLFxuICAgIG1heEFic0RpbSA9IDAsXG4gICAgbWluU2NvcmUgPSBJbmZpbml0eSxcbiAgICBtYXhTY29yZSA9IC1JbmZpbml0eVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNtYS5wb3BzaXplOyBpKyspIHtcbiAgICBjb25zdCBzb2x1dGlvbiA9IGNtYS5hc2soKSxcbiAgICAgIHNjb3JlID0gb2JqRm4oc29sdXRpb24pXG4gICAgc2NvcmVTdW0gKz0gc2NvcmVcbiAgICBpZiAoc2NvcmUgPCBtaW5TY29yZSkge1xuICAgICAgbWluU2NvcmUgPSBzY29yZVxuICAgIH1cbiAgICBpZiAoc2NvcmUgPiBtYXhTY29yZSkge1xuICAgICAgbWF4U2NvcmUgPSBzY29yZVxuICAgIH1cbiAgICBzb2xfc2NvcmVfYXJyYXkucHVzaCh7IHNvbHV0aW9uLCBzY29yZSB9KVxuICAgIHNjb3Jlc1tpXSA9IHNjb3JlXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICAgIGNvbnN0IHNvbERpbSA9IHNvbHV0aW9uW2pdLFxuICAgICAgICBhYnNTb2xEaW0gPSBNYXRoLmFicyhzb2xEaW0pXG4gICAgICBpZiAoYWJzU29sRGltID4gbWF4QWJzRGltKSB7XG4gICAgICAgIG1heEFic0RpbSA9IGFic1NvbERpbVxuICAgICAgfVxuICAgICAgc29sdXRpb25zWzIgKiBpICsgal0gPSBzb2xEaW1cbiAgICB9XG4gIH1cbiAgbWVzc2FnZS5zb2x1dGlvbnMgPSBzb2x1dGlvbnMuc2xpY2UoKVxuICBtZXNzYWdlLnNjb3JlcyA9IHNjb3Jlcy5zbGljZSgpXG4gIG1lc3NhZ2UubWVhblNjb3JlID0gc2NvcmVTdW0gLyBjbWEucG9wc2l6ZVxuICBtZXNzYWdlLm1pblNjb3JlID0gbWluU2NvcmVcbiAgbWVzc2FnZS5tYXhTY29yZSA9IG1heFNjb3JlXG4gIG1lc3NhZ2UuZWxsaXBzZVB0cyA9IGdldEVsbGlwc2VQdHMoKS5zbGljZSgpXG4gIG1lc3NhZ2UubWVhbiA9IGNtYS5tZWFuLnNsaWNlKClcbiAgbWVzc2FnZS5zY2FsZWRTaWdtYSA9IGNtYS5zaWdtYSAvIG9iakZuTGltXG4gIG1lc3NhZ2UubWF4QWJzRGltID0gbWF4QWJzRGltXG4gIHBvc3RNZXNzYWdlKG1lc3NhZ2UpXG5cbiAgY21hLnRlbGwoc29sX3Njb3JlX2FycmF5KVxufVxuXG5mdW5jdGlvbiB1cGRhdGVPYmpGbihvYmpGbk5hbWUpIHtcbiAgb2JqRm4gPSBvYmpGbnNbb2JqRm5OYW1lXVxuICBvYmpGbkxpbSA9IG9iakZuLnh5TGltXG59XG5cbmZ1bmN0aW9uIGdldEVsbGlwc2VQdHMoKSB7XG4gIGNvbnN0IEJEID0gY21hLkJELFxuICAgIG1lYW4gPSBjbWEubWVhbixcbiAgICBzaWdtYSA9IGNtYS5zaWdtYVxuICBjb25zdCBwdHMgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsbGlwc2VUZXN0UHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gQkQubXVsVmVjKGVsbGlwc2VUZXN0UHRzW2ldKVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICBwdHMucHVzaChtZWFuW2pdICsgc2lnbWEgKiBvZmZzZXRbal0pXG4gICAgfVxuICB9XG4gIHJldHVybiBGbG9hdDMyQXJyYXkuZnJvbShwdHMpXG59XG4iLCJleHBvcnQgY29uc3QgblZpeldvcmtlcnMgPSAxLFxuICBjYW52YXNEaW0gPSA0MDAsXG4gIGNhbnZhc0RpbU1heCA9IDEyMDAsXG4gIGNoYXJ0V2lkdGhNYXggPSAxMjAwLFxuICBjaGFydEhlaWdodCA9IDI0MCxcbiAgbWFya2VyUiA9IDcsXG4gIG9iakZuSW5pdCA9IFwiYWNrbGV5XCIsXG4gIG1lYW5SYWRpdXNNaW4gPSAwLjYsXG4gIG1lYW5SYWRpdXNNYXggPSAwLjksXG4gIHNpZ21hU2NhbGUgPSAwLjIsXG4gIHpvb21TdGVwTWFnID0gMS4wNSxcbiAgbkVsbGlwc2VUZXN0UHRzID0gMzIsXG4gIHNvbHV0aW9uTWFyZ2luID0gMS41LFxuICBnZXRWaWV3U3RlcCA9IChldmFsSGFsZkxpbSwgY2FudmFzSGFsZkRpbSkgPT4ge1xuICAgIHJldHVybiBldmFsSGFsZkxpbSAvIChjYW52YXNIYWxmRGltIC0gMC41KVxuICB9XG4iLCIvLyB7XG4vLyAgIGFja2xleTogXCJBY2tsZXlcIixcbi8vICAgYm9oYWNoZXZza3kxOiBcIkJvaGFjaGV2c2t5IE5vLjFcIixcbi8vICAgZ3JpZXdhbms6IFwiR3JpZXdhbmtcIixcbi8vICAgcmFzdHJpZ2luOiBcIlJhc3RyaWdpblwiLFxuLy8gfVxuXG5leHBvcnQgY29uc3Qgb2JqRm5zID0ge1xuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2Fja2xleS5odG1sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vQ29kZS9hY2tsZXltLmh0bWxcbiAgYWNrbGV5OiAoaW5wdXRzKSA9PiB7XG4gICAgLy8gZGVmYXVsdCBhPTIwLCBiPTAuMiwgYz0ycGlcbiAgICBjb25zdCBhID0gMjAsXG4gICAgICBiID0gMC4yLFxuICAgICAgYyA9IDIgKiBNYXRoLlBJXG4gICAgLy8gbGV0IGQgPSBpbnB1dHMubGVuZ3RoXG4gICAgY29uc3QgZCA9IDIsXG4gICAgICBkX2ludiA9IDAuNSAvLyAoMSAvIGQpXG4gICAgbGV0IHN1bTEgPSAwLFxuICAgICAgc3VtMiA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGQ7IGkrKykge1xuICAgICAgbGV0IHhpID0gaW5wdXRzW2ldXG4gICAgICBzdW0xICs9IHhpICogeGlcbiAgICAgIHN1bTIgKz0gTWF0aC5jb3MoYyAqIHhpKVxuICAgIH1cbiAgICAvLyBsZXQgZF9pbnYgPSAxIC8gZFxuICAgIGxldCB0ZXJtMSA9IC1hICogTWF0aC5leHAoLWIgKiBNYXRoLnNxcnQoc3VtMSAqIGRfaW52KSksXG4gICAgICB0ZXJtMiA9IC1NYXRoLmV4cChzdW0yICogZF9pbnYpXG4gICAgcmV0dXJuIHRlcm0xICsgdGVybTIgKyBhICsgTWF0aC5FXG4gIH0sXG4gIC8vIGh0dHA6Ly9iZW5jaG1hcmtmY25zLnh5ei9iZW5jaG1hcmtmY25zL2JvaGFjaGV2c2t5bjFmY24uaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL0NvZGUvYm9oYTFtLmh0bWxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9ib2hhLmh0bWxcbiAgYm9oYWNoZXZza3kxOiAoaW5wdXRzKSA9PiB7XG4gICAgbGV0IHgxID0gaW5wdXRzWzBdXG4gICAgbGV0IHgyID0gaW5wdXRzWzFdXG5cbiAgICBsZXQgdGVybTEgPSB4MSAqIHgxXG4gICAgbGV0IHRlcm0yID0gMiAqIHgyICogeDJcbiAgICBsZXQgdGVybTMgPSAtMC4zICogTWF0aC5jb3MoMyAqIE1hdGguUEkgKiB4MSlcbiAgICBsZXQgdGVybTQgPSAtMC40ICogTWF0aC5jb3MoNCAqIE1hdGguUEkgKiB4MilcblxuICAgIHJldHVybiB0ZXJtMSArIHRlcm0yICsgdGVybTMgKyB0ZXJtNCArIDAuN1xuICB9LFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2dyaWV3YW5rLmh0bWxcbiAgZ3JpZXdhbms6IChpbnB1dHMpID0+IHtcbiAgICBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBsZXQgc3VtID0gMFxuICAgIGxldCBwcm9kID0gMVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bSArPSAoeGkgKiB4aSkgLyA0MDAwXG4gICAgICBwcm9kICo9IE1hdGguY29zKHhpIC8gTWF0aC5zcXJ0KGkgKyAxKSlcbiAgICB9XG4gICAgcmV0dXJuIHN1bSAtIHByb2QgKyAxXG4gIH0sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vcmFzdHIuaHRtbFxuICByYXN0cmlnaW46IChpbnB1dHMpID0+IHtcbiAgICBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBsZXQgc3VtID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bSArPSB4aSAqIHhpIC0gMTAgKiBNYXRoLmNvcygyICogTWF0aC5QSSAqIHhpKVxuICAgIH1cbiAgICByZXR1cm4gMTAgKiBkICsgc3VtXG4gIH0sXG59XG5cbi8vIGZhbmN5IG5hbWVzIGZvciBzZWxlY3QgbWVudVxub2JqRm5zLmFja2xleS5mYW5jeU5hbWUgPSBcIkFja2xleVwiXG5vYmpGbnMuYm9oYWNoZXZza3kxLmZhbmN5TmFtZSA9IFwiQm9oYWNoZXZza3kgTm8uMVwiXG5vYmpGbnMuZ3JpZXdhbmsuZmFuY3lOYW1lID0gXCJHcmlld2Fua1wiXG5vYmpGbnMucmFzdHJpZ2luLmZhbmN5TmFtZSA9IFwiUmFzdHJpZ2luXCJcblxuLy8gZm5MaW1zIGZvciBkaXNwbGF5IGxpbWl0c1xub2JqRm5zLmFja2xleS54eUxpbSA9IDMyLjc2OFxub2JqRm5zLmJvaGFjaGV2c2t5MS54eUxpbSA9IDEwMFxub2JqRm5zLmdyaWV3YW5rLnh5TGltID0gNjAwXG5vYmpGbnMucmFzdHJpZ2luLnh5TGltID0gNS4xMlxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyB0aGUgc3RhcnR1cCBmdW5jdGlvblxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcblx0Ly8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5cdHZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3JjX2pzX2NtYS1saWJfanNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvY21hZXMtZGVtby9jbWEtd29ya2VyLmpzXCIpKSlcblx0X193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcblx0cmV0dXJuIF9fd2VicGFja19leHBvcnRzX187XG59O1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzIGFuZCBzaWJsaW5nIGNodW5rcyBmb3IgdGhlIGVudHJ5cG9pbnRcbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIFwiMTE4MzI3NDVjYmY3MzUwOTg0Y2VcIiArIFwiLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4vLyBcIjFcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwic3JjX3BhZ2VzX2NtYWVzLWRlbW9fY21hLXdvcmtlcl9qc1wiOiAxXG59O1xuXG4vLyBpbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmdcbnZhciBpbnN0YWxsQ2h1bmsgPSAoZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdHdoaWxlKGNodW5rSWRzLmxlbmd0aClcblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHMucG9wKCldID0gMTtcblx0cGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmkgPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0Ly8gXCIxXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG5cdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0aW1wb3J0U2NyaXB0cyhfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCkpO1xuXHRcdH1cblx0fVxufTtcblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0aXBweV9wcm9qZWN0X3dlYnNpdGVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rdGlwcHlfcHJvamVjdF93ZWJzaXRlXCJdIHx8IFtdO1xudmFyIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uID0gY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSBpbnN0YWxsQ2h1bms7XG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3QiLCJ2YXIgbmV4dCA9IF9fd2VicGFja19yZXF1aXJlX18ueDtcbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShcInNyY19qc19jbWEtbGliX2pzXCIpLnRoZW4obmV4dCk7XG59OyIsIiIsIi8vIHJ1biBzdGFydHVwXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIiwiIl0sIm5hbWVzIjpbIkNNQSIsImdldERlZmF1bHRDTUFQb3BzaXplIiwib2JqRm5zIiwibWVhblJhZGl1c01pbiIsIm1lYW5SYWRpdXNNYXgiLCJuRWxsaXBzZVRlc3RQdHMiLCJvYmpGbkxpbSIsIm9iakZuIiwiY21hIiwiZWxsaXBzZVRlc3RQdHMiLCJ0aGV0YVN0ZXAiLCJNYXRoIiwiUEkiLCJ0ZXN0UHRzIiwidGhldGEiLCJwdXNoIiwiRmxvYXQzMkFycmF5IiwiZnJvbSIsInNpbiIsImNvcyIsIm9ubWVzc2FnZSIsImUiLCJkYXRhIiwiaW5mbyIsIm1zZyIsImNtYUluaXQiLCJjbWFTdGVwIiwic2V0dGluZ3MiLCJvYmpGbk5hbWUiLCJwb3BzaXplTXVsdGlwbGllciIsInNpZ21hU2NhbGUiLCJtZWFuUmFkaXVzIiwibWVhbkRpcmVjdGlvbiIsInVwZGF0ZU9iakZuIiwiY21hU2lnbWEiLCJkaXJlY3Rpb24iLCJyYW5kb20iLCJyYWRpdXNNdWx0aXBsaWVyIiwicmFkaXVzIiwiY21hTWVhbiIsInBvcHNpemUiLCJ1bmRlZmluZWQiLCJzb2x1dGlvbnMiLCJzY29yZXMiLCJzb2xfc2NvcmVfYXJyYXkiLCJtZXNzYWdlIiwic2NvcmVTdW0iLCJtYXhBYnNEaW0iLCJtaW5TY29yZSIsIkluZmluaXR5IiwibWF4U2NvcmUiLCJpIiwic29sdXRpb24iLCJhc2siLCJzY29yZSIsImoiLCJzb2xEaW0iLCJhYnNTb2xEaW0iLCJhYnMiLCJzbGljZSIsIm1lYW5TY29yZSIsImVsbGlwc2VQdHMiLCJnZXRFbGxpcHNlUHRzIiwibWVhbiIsInNjYWxlZFNpZ21hIiwic2lnbWEiLCJwb3N0TWVzc2FnZSIsInRlbGwiLCJ4eUxpbSIsIkJEIiwicHRzIiwibGVuZ3RoIiwib2Zmc2V0IiwibXVsVmVjIiwiblZpeldvcmtlcnMiLCJjYW52YXNEaW0iLCJjYW52YXNEaW1NYXgiLCJjaGFydFdpZHRoTWF4IiwiY2hhcnRIZWlnaHQiLCJtYXJrZXJSIiwib2JqRm5Jbml0Iiwiem9vbVN0ZXBNYWciLCJzb2x1dGlvbk1hcmdpbiIsImdldFZpZXdTdGVwIiwiZXZhbEhhbGZMaW0iLCJjYW52YXNIYWxmRGltIiwiYWNrbGV5IiwiaW5wdXRzIiwiYSIsImIiLCJjIiwiZCIsImRfaW52Iiwic3VtMSIsInN1bTIiLCJ4aSIsInRlcm0xIiwiZXhwIiwic3FydCIsInRlcm0yIiwiRSIsImJvaGFjaGV2c2t5MSIsIngxIiwieDIiLCJ0ZXJtMyIsInRlcm00IiwiZ3JpZXdhbmsiLCJzdW0iLCJwcm9kIiwicmFzdHJpZ2luIiwiZmFuY3lOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==