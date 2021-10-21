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




var zoom,
    zoomNext,
    canvasScale,
    objFnName = _globals_js__WEBPACK_IMPORTED_MODULE_2__.objFnInit,
    objFnLim,
    objFn,
    cma,
    solutionsHistory,
    meanHistory,
    popsizeMultiplier = 1;
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

  (_meanHistory = meanHistory).push.apply(_meanHistory, _toConsumableArray(cma.mean.slice()));

  cma.tell(sol_score_array);
  console.log(scoreSum / cma.popsize);
  zoomNext = 0.8 * objFnLim / maxAbsDim;
  sendMeanHistory();
  transitionStep();
}

function sendMeanHistory() {
  var meanHistoryTyped = Float32Array.from(meanHistory.map(function (v) {
    return v * canvasScale;
  }));
  postMessage(["means", meanHistoryTyped]);
}

function sendCurrentSolutions() {
  var currentSolution = solutionsHistory[solutionsHistory.length - 1];
  postMessage(["solutions", currentSolution.map(function (v) {
    return Math.round(v * canvasScale);
  })]);
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
/* harmony export */   "markerR": () => (/* binding */ markerR),
/* harmony export */   "objFnInit": () => (/* binding */ objFnInit),
/* harmony export */   "meanRadiusMin": () => (/* binding */ meanRadiusMin),
/* harmony export */   "meanRadiusMax": () => (/* binding */ meanRadiusMax),
/* harmony export */   "sigmaScale": () => (/* binding */ sigmaScale),
/* harmony export */   "zoomStepMag": () => (/* binding */ zoomStepMag)
/* harmony export */ });
var nVizWorkers = 8,
    canvasDim = 600,
    markerR = 7,
    objFnInit = "ackley",
    meanRadiusMin = 0.3,
    meanRadiusMax = 0.5,
    sigmaScale = 0.5,
    zoomStepMag = 1.05;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX2NtYWVzLWRlbW9fY21hLXdvcmtlcl9qcy5iMDU3ZjZlOTM0YTkxODZlODFlMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBU0EsSUFBSVMsSUFBSjtBQUFBLElBQ0VDLFFBREY7QUFBQSxJQUVFQyxXQUZGO0FBQUEsSUFHRUMsU0FBUyxHQUFHVCxrREFIZDtBQUFBLElBSUVVLFFBSkY7QUFBQSxJQUtFQyxLQUxGO0FBQUEsSUFNRUMsR0FORjtBQUFBLElBT0VDLGdCQVBGO0FBQUEsSUFRRUMsV0FSRjtBQUFBLElBU0VDLGlCQUFpQixHQUFHLENBVHRCO0FBV0FDLE9BQU87O0FBRVBDLFNBQVMsR0FBRyxtQkFBQ0MsQ0FBRCxFQUFPO0FBQ2pCLCtCQUFvQkEsQ0FBQyxDQUFDQyxJQUF0QjtBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxHQUFiOztBQUNBLE1BQUlELElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3JCWCxJQUFBQSxTQUFTLEdBQUdZLEdBQVo7QUFDQUwsSUFBQUEsT0FBTztBQUNSLEdBSEQsTUFHTyxJQUFJSSxJQUFJLEtBQUssU0FBYixFQUF3QjtBQUM3QkwsSUFBQUEsaUJBQWlCLEdBQUdNLEdBQXBCO0FBQ0FMLElBQUFBLE9BQU87QUFDUixHQUhNLE1BR0EsSUFBSUksSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDMUJFLElBQUFBLE9BQU87QUFDUixHQUZNLE1BRUEsSUFBSUYsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDMUJkLElBQUFBLElBQUksR0FBR2UsR0FBUDtBQUNBRSxJQUFBQSxpQkFBaUI7QUFDakJDLElBQUFBLGVBQWU7QUFDZkMsSUFBQUEsb0JBQW9CO0FBQ3JCLEdBTE0sTUFLQSxJQUFJTCxJQUFJLEtBQUssV0FBYixFQUEwQjtBQUMvQixRQUFJZCxJQUFJLElBQUlDLFFBQVosRUFBc0I7QUFDcEJtQixNQUFBQSxjQUFjO0FBQ2Y7QUFDRjtB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGOzs7OztXQ1JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGFBQWE7V0FDYjtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7Ozs7O1dDcENBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRUhBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvcGFnZXMvY21hZXMtZGVtby9jbWEtd29ya2VyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vb2JqLWZucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2ltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL3N0YXJ0dXAgY2h1bmsgZGVwZW5kZW5jaWVzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDTUEsIGdldERlZmF1bHRDTUFQb3BzaXplIH0gZnJvbSBcIi4uLy4uL2pzL2NtYS1saWIuanNcIlxuaW1wb3J0IHsgb2JqRm5zIH0gZnJvbSBcIi4vb2JqLWZucy5qc1wiXG5pbXBvcnQge1xuICBvYmpGbkluaXQsXG4gIGNhbnZhc0RpbSxcbiAgbWVhblJhZGl1c01pbixcbiAgbWVhblJhZGl1c01heCxcbiAgc2lnbWFTY2FsZSxcbiAgem9vbVN0ZXBNYWcsXG59IGZyb20gXCIuL2dsb2JhbHMuanNcIlxuXG5sZXQgem9vbSxcbiAgem9vbU5leHQsXG4gIGNhbnZhc1NjYWxlLFxuICBvYmpGbk5hbWUgPSBvYmpGbkluaXQsXG4gIG9iakZuTGltLFxuICBvYmpGbixcbiAgY21hLFxuICBzb2x1dGlvbnNIaXN0b3J5LFxuICBtZWFuSGlzdG9yeSxcbiAgcG9wc2l6ZU11bHRpcGxpZXIgPSAxXG5cbmNtYUluaXQoKVxuXG5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICBjb25zdCBbaW5mbywgbXNnXSA9IGUuZGF0YVxuICBpZiAoaW5mbyA9PT0gXCJmbk5hbWVcIikge1xuICAgIG9iakZuTmFtZSA9IG1zZ1xuICAgIGNtYUluaXQoKVxuICB9IGVsc2UgaWYgKGluZm8gPT09IFwicG9wTXVsdFwiKSB7XG4gICAgcG9wc2l6ZU11bHRpcGxpZXIgPSBtc2dcbiAgICBjbWFJbml0KClcbiAgfSBlbHNlIGlmIChpbmZvID09PSBcInN0ZXBcIikge1xuICAgIGNtYVN0ZXAoKVxuICB9IGVsc2UgaWYgKGluZm8gPT09IFwiem9vbVwiKSB7XG4gICAgem9vbSA9IG1zZ1xuICAgIHVwZGF0ZUNhbnZhc1NjYWxlKClcbiAgICBzZW5kTWVhbkhpc3RvcnkoKVxuICAgIHNlbmRDdXJyZW50U29sdXRpb25zKClcbiAgfSBlbHNlIGlmIChpbmZvID09PSBcImRyYXdSZWFkeVwiKSB7XG4gICAgaWYgKHpvb20gIT0gem9vbU5leHQpIHtcbiAgICAgIHRyYW5zaXRpb25TdGVwKClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY21hSW5pdCgpIHtcbiAgem9vbSA9IDFcbiAgem9vbU5leHQgPSB6b29tXG4gIHVwZGF0ZU9iakZuKG9iakZuTmFtZSlcbiAgc29sdXRpb25zSGlzdG9yeSA9IFtdXG4gIG1lYW5IaXN0b3J5ID0gW11cbiAgY29uc3QgY21hU2lnbWEgPSBzaWdtYVNjYWxlICogb2JqRm5MaW1cbiAgY29uc3QgcmFuZFJhZGlhbnMgPSAyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKClcbiAgY29uc3QgcmFuZFJhZGl1cyA9XG4gICAgb2JqRm5MaW0gKiAobWVhblJhZGl1c01pbiArIE1hdGgucmFuZG9tKCkgKiAobWVhblJhZGl1c01heCAtIG1lYW5SYWRpdXNNaW4pKVxuICBjb25zb2xlLmxvZyhcIm9iakZuTGltXCIsIG9iakZuTGltKVxuICBjb25zb2xlLmxvZyhcInJhbmRSYWRpdXNcIiwgcmFuZFJhZGl1cylcbiAgY29uc3QgY21hTWVhbiA9IEZsb2F0MzJBcnJheS5mcm9tKFtcbiAgICByYW5kUmFkaXVzICogTWF0aC5jb3MocmFuZFJhZGlhbnMpLFxuICAgIHJhbmRSYWRpdXMgKiBNYXRoLnNpbihyYW5kUmFkaWFucyksXG4gIF0pXG4gIGNvbnN0IHBvcHNpemUgPSBnZXREZWZhdWx0Q01BUG9wc2l6ZSgyKSAqIHBvcHNpemVNdWx0aXBsaWVyXG4gIGNtYSA9IG5ldyBDTUEoY21hTWVhbiwgY21hU2lnbWEsIHBvcHNpemUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxuICBjbWFTdGVwKClcbn1cblxuZnVuY3Rpb24gY21hU3RlcCgpIHtcbiAgY29uc3Qgc29sdXRpb25zID0gbmV3IEZsb2F0MzJBcnJheSgyICogY21hLnBvcHNpemUpLFxuICAgIHNvbF9zY29yZV9hcnJheSA9IFtdXG4gIGxldCBzY29yZVN1bSA9IDAsXG4gICAgbWF4QWJzRGltID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNtYS5wb3BzaXplOyBpKyspIHtcbiAgICBjb25zdCBzb2x1dGlvbiA9IGNtYS5hc2soKSxcbiAgICAgIHNjb3JlID0gb2JqRm4oc29sdXRpb24pXG4gICAgc2NvcmVTdW0gKz0gc2NvcmVcbiAgICBzb2xfc2NvcmVfYXJyYXkucHVzaCh7IHNvbHV0aW9uLCBzY29yZSB9KVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICBjb25zdCBzb2xEaW0gPSBzb2x1dGlvbltqXSxcbiAgICAgICAgYWJzU29sRGltID0gTWF0aC5hYnMoc29sRGltKVxuICAgICAgaWYgKGFic1NvbERpbSA+IG1heEFic0RpbSkge1xuICAgICAgICBtYXhBYnNEaW0gPSBhYnNTb2xEaW1cbiAgICAgIH1cbiAgICAgIHNvbHV0aW9uc1syICogaSArIGpdID0gc29sRGltXG4gICAgfVxuICB9XG4gIHNvbHV0aW9uc0hpc3RvcnkucHVzaChzb2x1dGlvbnMpXG4gIG1lYW5IaXN0b3J5LnB1c2goLi4uY21hLm1lYW4uc2xpY2UoKSlcbiAgY21hLnRlbGwoc29sX3Njb3JlX2FycmF5KVxuXG4gIGNvbnNvbGUubG9nKHNjb3JlU3VtIC8gY21hLnBvcHNpemUpXG5cbiAgem9vbU5leHQgPSAoMC44ICogb2JqRm5MaW0pIC8gbWF4QWJzRGltXG5cbiAgc2VuZE1lYW5IaXN0b3J5KClcblxuICB0cmFuc2l0aW9uU3RlcCgpXG59XG5cbmZ1bmN0aW9uIHNlbmRNZWFuSGlzdG9yeSgpIHtcbiAgY29uc3QgbWVhbkhpc3RvcnlUeXBlZCA9IEZsb2F0MzJBcnJheS5mcm9tKFxuICAgIG1lYW5IaXN0b3J5Lm1hcCgodikgPT4gdiAqIGNhbnZhc1NjYWxlKVxuICApXG4gIHBvc3RNZXNzYWdlKFtcIm1lYW5zXCIsIG1lYW5IaXN0b3J5VHlwZWRdKVxufVxuXG5mdW5jdGlvbiBzZW5kQ3VycmVudFNvbHV0aW9ucygpIHtcbiAgY29uc3QgY3VycmVudFNvbHV0aW9uID0gc29sdXRpb25zSGlzdG9yeVtzb2x1dGlvbnNIaXN0b3J5Lmxlbmd0aCAtIDFdXG4gIHBvc3RNZXNzYWdlKFtcbiAgICBcInNvbHV0aW9uc1wiLFxuICAgIGN1cnJlbnRTb2x1dGlvbi5tYXAoKHYpID0+IE1hdGgucm91bmQodiAqIGNhbnZhc1NjYWxlKSksXG4gIF0pXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU9iakZuKG9iakZuTmFtZSkge1xuICBvYmpGbiA9IG9iakZuc1tvYmpGbk5hbWVdXG4gIG9iakZuTGltID0gb2JqRm4ueHlMaW1cbiAgdXBkYXRlQ2FudmFzU2NhbGUoKVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDYW52YXNTY2FsZSgpIHtcbiAgY2FudmFzU2NhbGUgPSAoem9vbSAqIDAuNSAqIGNhbnZhc0RpbSkgLyBvYmpGbkxpbVxufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uU3RlcCgpIHtcbiAgaWYgKHpvb20gPCB6b29tTmV4dCkge1xuICAgIHpvb20gKj0gem9vbVN0ZXBNYWdcbiAgICBpZiAoem9vbSA+IHpvb21OZXh0KSB7XG4gICAgICB6b29tID0gem9vbU5leHRcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgem9vbSAvPSB6b29tU3RlcE1hZ1xuICAgIGlmICh6b29tIDwgem9vbU5leHQpIHtcbiAgICAgIHpvb20gPSB6b29tTmV4dFxuICAgIH1cbiAgfVxuICBwb3N0TWVzc2FnZShbXCJ6b29tXCIsIHpvb21dKVxuICB1cGRhdGVDYW52YXNTY2FsZSgpXG4gIHNlbmRDdXJyZW50U29sdXRpb25zKClcbn1cbiIsImV4cG9ydCBjb25zdCBuVml6V29ya2VycyA9IDgsXG4gIGNhbnZhc0RpbSA9IDYwMCxcbiAgbWFya2VyUiA9IDcsXG4gIG9iakZuSW5pdCA9IFwiYWNrbGV5XCIsXG4gIG1lYW5SYWRpdXNNaW4gPSAwLjMsXG4gIG1lYW5SYWRpdXNNYXggPSAwLjUsXG4gIHNpZ21hU2NhbGUgPSAwLjUsXG4gIHpvb21TdGVwTWFnID0gMS4wNVxuIiwiLy8ge1xuLy8gICBhY2tsZXk6IFwiQWNrbGV5XCIsXG4vLyAgIGJvaGFjaGV2c2t5MTogXCJCb2hhY2hldnNreSBOby4xXCIsXG4vLyAgIGdyaWV3YW5rOiBcIkdyaWV3YW5rXCIsXG4vLyAgIHJhc3RyaWdpbjogXCJSYXN0cmlnaW5cIixcbi8vIH1cblxuZXhwb3J0IGNvbnN0IG9iakZucyA9IHtcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9hY2tsZXkuaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL0NvZGUvYWNrbGV5bS5odG1sXG4gIGFja2xleTogKGlucHV0cykgPT4ge1xuICAgIC8vIGRlZmF1bHQgYT0yMCwgYj0wLjIsIGM9MnBpXG4gICAgY29uc3QgYSA9IDIwLFxuICAgICAgYiA9IDAuMixcbiAgICAgIGMgPSAyICogTWF0aC5QSVxuICAgIC8vIGxldCBkID0gaW5wdXRzLmxlbmd0aFxuICAgIGNvbnN0IGQgPSAyLFxuICAgICAgZF9pbnYgPSAwLjUgLy8gKDEgLyBkKVxuICAgIGxldCBzdW0xID0gMCxcbiAgICAgIHN1bTIgPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIGxldCB4aSA9IGlucHV0c1tpXVxuICAgICAgc3VtMSArPSB4aSAqIHhpXG4gICAgICBzdW0yICs9IE1hdGguY29zKGMgKiB4aSlcbiAgICB9XG4gICAgLy8gbGV0IGRfaW52ID0gMSAvIGRcbiAgICBsZXQgdGVybTEgPSAtYSAqIE1hdGguZXhwKC1iICogTWF0aC5zcXJ0KHN1bTEgKiBkX2ludikpLFxuICAgICAgdGVybTIgPSAtTWF0aC5leHAoc3VtMiAqIGRfaW52KVxuICAgIHJldHVybiB0ZXJtMSArIHRlcm0yICsgYSArIE1hdGguRVxuICB9LFxuICAvLyBodHRwOi8vYmVuY2htYXJrZmNucy54eXovYmVuY2htYXJrZmNucy9ib2hhY2hldnNreW4xZmNuLmh0bWxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9Db2RlL2JvaGExbS5odG1sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vYm9oYS5odG1sXG4gIGJvaGFjaGV2c2t5MTogKGlucHV0cykgPT4ge1xuICAgIGxldCB4MSA9IGlucHV0c1swXVxuICAgIGxldCB4MiA9IGlucHV0c1sxXVxuXG4gICAgbGV0IHRlcm0xID0geDEgKiB4MVxuICAgIGxldCB0ZXJtMiA9IDIgKiB4MiAqIHgyXG4gICAgbGV0IHRlcm0zID0gLTAuMyAqIE1hdGguY29zKDMgKiBNYXRoLlBJICogeDEpXG4gICAgbGV0IHRlcm00ID0gLTAuNCAqIE1hdGguY29zKDQgKiBNYXRoLlBJICogeDIpXG5cbiAgICByZXR1cm4gdGVybTEgKyB0ZXJtMiArIHRlcm0zICsgdGVybTQgKyAwLjdcbiAgfSxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9ncmlld2Fuay5odG1sXG4gIGdyaWV3YW5rOiAoaW5wdXRzKSA9PiB7XG4gICAgbGV0IGQgPSBpbnB1dHMubGVuZ3RoXG4gICAgbGV0IHN1bSA9IDBcbiAgICBsZXQgcHJvZCA9IDFcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGQ7IGkrKykge1xuICAgICAgbGV0IHhpID0gaW5wdXRzW2ldXG4gICAgICBzdW0gKz0gKHhpICogeGkpIC8gNDAwMFxuICAgICAgcHJvZCAqPSBNYXRoLmNvcyh4aSAvIE1hdGguc3FydChpICsgMSkpXG4gICAgfVxuICAgIHJldHVybiBzdW0gLSBwcm9kICsgMVxuICB9LFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL3Jhc3RyLmh0bWxcbiAgcmFzdHJpZ2luOiAoaW5wdXRzKSA9PiB7XG4gICAgbGV0IGQgPSBpbnB1dHMubGVuZ3RoXG4gICAgbGV0IHN1bSA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGQ7IGkrKykge1xuICAgICAgbGV0IHhpID0gaW5wdXRzW2ldXG4gICAgICBzdW0gKz0geGkgKiB4aSAtIDEwICogTWF0aC5jb3MoMiAqIE1hdGguUEkgKiB4aSlcbiAgICB9XG4gICAgcmV0dXJuIDEwICogZCArIHN1bVxuICB9LFxufVxuXG4vLyBmYW5jeSBuYW1lcyBmb3Igc2VsZWN0IG1lbnVcbm9iakZucy5hY2tsZXkuZmFuY3lOYW1lID0gXCJBY2tsZXlcIlxub2JqRm5zLmJvaGFjaGV2c2t5MS5mYW5jeU5hbWUgPSBcIkJvaGFjaGV2c2t5IE5vLjFcIlxub2JqRm5zLmdyaWV3YW5rLmZhbmN5TmFtZSA9IFwiR3JpZXdhbmtcIlxub2JqRm5zLnJhc3RyaWdpbi5mYW5jeU5hbWUgPSBcIlJhc3RyaWdpblwiXG5cbi8vIGZuTGltcyBmb3IgZGlzcGxheSBsaW1pdHNcbm9iakZucy5hY2tsZXkueHlMaW0gPSAzMi43Njhcbm9iakZucy5ib2hhY2hldnNreTEueHlMaW0gPSAxMDBcbm9iakZucy5ncmlld2Fuay54eUxpbSA9IDYwMFxub2JqRm5zLnJhc3RyaWdpbi54eUxpbSA9IDUuMTJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gdGhlIHN0YXJ0dXAgZnVuY3Rpb25cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5cdC8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuXHR2YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInNyY19qc19jbWEtbGliX2pzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vY21hLXdvcmtlci5qc1wiKSkpXG5cdF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5cdHJldHVybiBfX3dlYnBhY2tfZXhwb3J0c19fO1xufTtcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rcyBhbmQgc2libGluZyBjaHVua3MgZm9yIHRoZSBlbnRyeXBvaW50XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBcIjhlN2I2MjRkOTQwZGQzMjUzMzRkXCIgKyBcIi5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiB1bmRlZmluZWQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuLy8gXCIxXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInNyY19wYWdlc19jbWFlcy1kZW1vX2NtYS13b3JrZXJfanNcIjogMVxufTtcblxuLy8gaW1wb3J0U2NyaXB0cyBjaHVuayBsb2FkaW5nXG52YXIgaW5zdGFsbENodW5rID0gKGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR3aGlsZShjaHVua0lkcy5sZW5ndGgpXG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzLnBvcCgpXSA9IDE7XG5cdHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xufTtcbl9fd2VicGFja19yZXF1aXJlX18uZi5pID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdC8vIFwiMVwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuXHRpZighaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdGltcG9ydFNjcmlwdHMoX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpKTtcblx0XHR9XG5cdH1cbn07XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja190ZXN0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua3dlYnBhY2tfdGVzdFwiXSB8fCBbXTtcbnZhciBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiA9IGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gaW5zdGFsbENodW5rO1xuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0IiwidmFyIG5leHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLng7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJzcmNfanNfY21hLWxpYl9qc1wiKS50aGVuKG5leHQpO1xufTsiLCIiLCIvLyBydW4gc3RhcnR1cFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiIsIiJdLCJuYW1lcyI6WyJDTUEiLCJnZXREZWZhdWx0Q01BUG9wc2l6ZSIsIm9iakZucyIsIm9iakZuSW5pdCIsImNhbnZhc0RpbSIsIm1lYW5SYWRpdXNNaW4iLCJtZWFuUmFkaXVzTWF4Iiwic2lnbWFTY2FsZSIsInpvb21TdGVwTWFnIiwiem9vbSIsInpvb21OZXh0IiwiY2FudmFzU2NhbGUiLCJvYmpGbk5hbWUiLCJvYmpGbkxpbSIsIm9iakZuIiwiY21hIiwic29sdXRpb25zSGlzdG9yeSIsIm1lYW5IaXN0b3J5IiwicG9wc2l6ZU11bHRpcGxpZXIiLCJjbWFJbml0Iiwib25tZXNzYWdlIiwiZSIsImRhdGEiLCJpbmZvIiwibXNnIiwiY21hU3RlcCIsInVwZGF0ZUNhbnZhc1NjYWxlIiwic2VuZE1lYW5IaXN0b3J5Iiwic2VuZEN1cnJlbnRTb2x1dGlvbnMiLCJ0cmFuc2l0aW9uU3RlcCIsInVwZGF0ZU9iakZuIiwiY21hU2lnbWEiLCJyYW5kUmFkaWFucyIsIk1hdGgiLCJQSSIsInJhbmRvbSIsInJhbmRSYWRpdXMiLCJjb25zb2xlIiwibG9nIiwiY21hTWVhbiIsIkZsb2F0MzJBcnJheSIsImZyb20iLCJjb3MiLCJzaW4iLCJwb3BzaXplIiwidW5kZWZpbmVkIiwic29sdXRpb25zIiwic29sX3Njb3JlX2FycmF5Iiwic2NvcmVTdW0iLCJtYXhBYnNEaW0iLCJpIiwic29sdXRpb24iLCJhc2siLCJzY29yZSIsInB1c2giLCJqIiwic29sRGltIiwiYWJzU29sRGltIiwiYWJzIiwibWVhbiIsInNsaWNlIiwidGVsbCIsIm1lYW5IaXN0b3J5VHlwZWQiLCJtYXAiLCJ2IiwicG9zdE1lc3NhZ2UiLCJjdXJyZW50U29sdXRpb24iLCJsZW5ndGgiLCJyb3VuZCIsInh5TGltIiwiblZpeldvcmtlcnMiLCJtYXJrZXJSIiwiYWNrbGV5IiwiaW5wdXRzIiwiYSIsImIiLCJjIiwiZCIsImRfaW52Iiwic3VtMSIsInN1bTIiLCJ4aSIsInRlcm0xIiwiZXhwIiwic3FydCIsInRlcm0yIiwiRSIsImJvaGFjaGV2c2t5MSIsIngxIiwieDIiLCJ0ZXJtMyIsInRlcm00IiwiZ3JpZXdhbmsiLCJzdW0iLCJwcm9kIiwicmFzdHJpZ2luIiwiZmFuY3lOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==