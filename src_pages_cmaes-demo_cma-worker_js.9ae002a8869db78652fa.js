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




var nTransitionStepsInv = 1.0 / _globals_js__WEBPACK_IMPORTED_MODULE_2__.nTransitionSteps;
var zoom = 1,
    zoomNext = zoom,
    zoomPrev = zoom,
    transitionStep = 0,
    canvasScale,
    objFnName = _globals_js__WEBPACK_IMPORTED_MODULE_2__.objFnInit,
    objFnLim,
    objFn,
    cma,
    solutionsHistory,
    meanHistory,
    popsizeMultiplier = 1; // updateObjFn(objFnInit)

cmaInit();

onmessage = function onmessage(e) {
  var _e$data = _slicedToArray(e.data, 2),
      info = _e$data[0],
      msg = _e$data[1];

  if (info === "fnName") {
    // updateObjFn(msg)
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
  }
};

function cmaInit() {
  updateObjFn(objFnName);
  solutionsHistory = [];
  meanHistory = [];
  var cmaSigma = _globals_js__WEBPACK_IMPORTED_MODULE_2__.sigmaScale * objFnLim; // cmaMean = []

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
  zoomPrev = zoomNext;
  zoomNext = 0.8 * objFnLim / maxAbsDim;
  zoom = 0.8 * objFnLim / maxAbsDim;
  sendMeanHistory(); // postMessage(["zoom", zoom])
  // updateCanvasScale()
  // sendCurrentSolutions()

  transition();
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

function transition() {
  // https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
  function myLoop() {
    //  create a loop function
    setTimeout(function () {
      //  call a 3s setTimeout when the loop is called
      zoom = zoomNext * (transitionStep * nTransitionStepsInv) + zoomPrev * ((_globals_js__WEBPACK_IMPORTED_MODULE_2__.nTransitionSteps - transitionStep) * nTransitionStepsInv);
      postMessage(["zoom", zoom]);
      updateCanvasScale();
      sendCurrentSolutions();
      transitionStep++; //  increment the counter

      if (transitionStep <= _globals_js__WEBPACK_IMPORTED_MODULE_2__.nTransitionSteps) {
        //  if the counter < 10, call the loop function
        myLoop(); //  ..  again which will trigger another
      } else {
        transitionStep = 0;
      }
    }, 200);
  }

  myLoop(); //  start the loop
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
/* harmony export */   "nTransitionSteps": () => (/* binding */ nTransitionSteps)
/* harmony export */ });
var nVizWorkers = 8,
    canvasDim = 800,
    markerR = 7,
    objFnInit = "ackley",
    meanRadiusMin = 0.3,
    meanRadiusMax = 0.5,
    sigmaScale = 0.5,
    nTransitionSteps = 10;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX2NtYWVzLWRlbW9fY21hLXdvcmtlcl9qcy45YWUwMDJhODg2OWRiNzg2NTJmYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBU0EsSUFBTVMsbUJBQW1CLEdBQUcsTUFBTUQseURBQWxDO0FBRUEsSUFBSUUsSUFBSSxHQUFHLENBQVg7QUFBQSxJQUNFQyxRQUFRLEdBQUdELElBRGI7QUFBQSxJQUVFRSxRQUFRLEdBQUdGLElBRmI7QUFBQSxJQUdFRyxjQUFjLEdBQUcsQ0FIbkI7QUFBQSxJQUlFQyxXQUpGO0FBQUEsSUFLRUMsU0FBUyxHQUFHWixrREFMZDtBQUFBLElBTUVhLFFBTkY7QUFBQSxJQU9FQyxLQVBGO0FBQUEsSUFRRUMsR0FSRjtBQUFBLElBU0VDLGdCQVRGO0FBQUEsSUFVRUMsV0FWRjtBQUFBLElBV0VDLGlCQUFpQixHQUFHLENBWHRCLEVBYUE7O0FBQ0FDLE9BQU87O0FBRVBDLFNBQVMsR0FBRyxtQkFBQ0MsQ0FBRCxFQUFPO0FBQ2pCLCtCQUFvQkEsQ0FBQyxDQUFDQyxJQUF0QjtBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxHQUFiOztBQUNBLE1BQUlELElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3JCO0FBQ0FYLElBQUFBLFNBQVMsR0FBR1ksR0FBWjtBQUNBTCxJQUFBQSxPQUFPO0FBQ1IsR0FKRCxNQUlPLElBQUlJLElBQUksS0FBSyxTQUFiLEVBQXdCO0FBQzdCTCxJQUFBQSxpQkFBaUIsR0FBR00sR0FBcEI7QUFDQUwsSUFBQUEsT0FBTztBQUNSLEdBSE0sTUFHQSxJQUFJSSxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUMxQkUsSUFBQUEsT0FBTztBQUNSLEdBRk0sTUFFQSxJQUFJRixJQUFJLEtBQUssTUFBYixFQUFxQjtBQUMxQmhCLElBQUFBLElBQUksR0FBR2lCLEdBQVA7QUFDQUUsSUFBQUEsaUJBQWlCO0FBQ2pCQyxJQUFBQSxlQUFlO0FB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azovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL2NtYS13b3JrZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvcGFnZXMvY21hZXMtZGVtby9vYmotZm5zLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9nZXQgbWluaS1jc3MgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvaW1wb3J0U2NyaXB0cyBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvc3RhcnR1cCBjaHVuayBkZXBlbmRlbmNpZXMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENNQSwgZ2V0RGVmYXVsdENNQVBvcHNpemUgfSBmcm9tIFwiLi4vLi4vanMvY21hLWxpYi5qc1wiXG5pbXBvcnQgeyBvYmpGbnMgfSBmcm9tIFwiLi9vYmotZm5zLmpzXCJcbmltcG9ydCB7XG4gIG9iakZuSW5pdCxcbiAgY2FudmFzRGltLFxuICBtZWFuUmFkaXVzTWluLFxuICBtZWFuUmFkaXVzTWF4LFxuICBzaWdtYVNjYWxlLFxuICBuVHJhbnNpdGlvblN0ZXBzLFxufSBmcm9tIFwiLi9nbG9iYWxzLmpzXCJcblxuY29uc3QgblRyYW5zaXRpb25TdGVwc0ludiA9IDEuMCAvIG5UcmFuc2l0aW9uU3RlcHNcblxubGV0IHpvb20gPSAxLFxuICB6b29tTmV4dCA9IHpvb20sXG4gIHpvb21QcmV2ID0gem9vbSxcbiAgdHJhbnNpdGlvblN0ZXAgPSAwLFxuICBjYW52YXNTY2FsZSxcbiAgb2JqRm5OYW1lID0gb2JqRm5Jbml0LFxuICBvYmpGbkxpbSxcbiAgb2JqRm4sXG4gIGNtYSxcbiAgc29sdXRpb25zSGlzdG9yeSxcbiAgbWVhbkhpc3RvcnksXG4gIHBvcHNpemVNdWx0aXBsaWVyID0gMVxuXG4vLyB1cGRhdGVPYmpGbihvYmpGbkluaXQpXG5jbWFJbml0KClcblxub25tZXNzYWdlID0gKGUpID0+IHtcbiAgY29uc3QgW2luZm8sIG1zZ10gPSBlLmRhdGFcbiAgaWYgKGluZm8gPT09IFwiZm5OYW1lXCIpIHtcbiAgICAvLyB1cGRhdGVPYmpGbihtc2cpXG4gICAgb2JqRm5OYW1lID0gbXNnXG4gICAgY21hSW5pdCgpXG4gIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJwb3BNdWx0XCIpIHtcbiAgICBwb3BzaXplTXVsdGlwbGllciA9IG1zZ1xuICAgIGNtYUluaXQoKVxuICB9IGVsc2UgaWYgKGluZm8gPT09IFwic3RlcFwiKSB7XG4gICAgY21hU3RlcCgpXG4gIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJ6b29tXCIpIHtcbiAgICB6b29tID0gbXNnXG4gICAgdXBkYXRlQ2FudmFzU2NhbGUoKVxuICAgIHNlbmRNZWFuSGlzdG9yeSgpXG4gICAgc2VuZEN1cnJlbnRTb2x1dGlvbnMoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNtYUluaXQoKSB7XG4gIHVwZGF0ZU9iakZuKG9iakZuTmFtZSlcbiAgc29sdXRpb25zSGlzdG9yeSA9IFtdXG4gIG1lYW5IaXN0b3J5ID0gW11cbiAgY29uc3QgY21hU2lnbWEgPSBzaWdtYVNjYWxlICogb2JqRm5MaW1cbiAgLy8gY21hTWVhbiA9IFtdXG4gIGNvbnN0IHJhbmRSYWRpYW5zID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpXG4gIGNvbnN0IHJhbmRSYWRpdXMgPVxuICAgIG9iakZuTGltICogKG1lYW5SYWRpdXNNaW4gKyBNYXRoLnJhbmRvbSgpICogKG1lYW5SYWRpdXNNYXggLSBtZWFuUmFkaXVzTWluKSlcbiAgY29uc29sZS5sb2coXCJvYmpGbkxpbVwiLCBvYmpGbkxpbSlcbiAgY29uc29sZS5sb2coXCJyYW5kUmFkaXVzXCIsIHJhbmRSYWRpdXMpXG4gIGNvbnN0IGNtYU1lYW4gPSBGbG9hdDMyQXJyYXkuZnJvbShbXG4gICAgcmFuZFJhZGl1cyAqIE1hdGguY29zKHJhbmRSYWRpYW5zKSxcbiAgICByYW5kUmFkaXVzICogTWF0aC5zaW4ocmFuZFJhZGlhbnMpLFxuICBdKVxuICBjb25zdCBwb3BzaXplID0gZ2V0RGVmYXVsdENNQVBvcHNpemUoMikgKiBwb3BzaXplTXVsdGlwbGllclxuICBjbWEgPSBuZXcgQ01BKGNtYU1lYW4sIGNtYVNpZ21hLCBwb3BzaXplLCB1bmRlZmluZWQsIHVuZGVmaW5lZClcbiAgY21hU3RlcCgpXG59XG5cbmZ1bmN0aW9uIGNtYVN0ZXAoKSB7XG4gIGNvbnN0IHNvbHV0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkoMiAqIGNtYS5wb3BzaXplKSxcbiAgICBzb2xfc2NvcmVfYXJyYXkgPSBbXVxuICBsZXQgc2NvcmVTdW0gPSAwLFxuICAgIG1heEFic0RpbSA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbWEucG9wc2l6ZTsgaSsrKSB7XG4gICAgY29uc3Qgc29sdXRpb24gPSBjbWEuYXNrKCksXG4gICAgICBzY29yZSA9IG9iakZuKHNvbHV0aW9uKVxuICAgIHNjb3JlU3VtICs9IHNjb3JlXG4gICAgc29sX3Njb3JlX2FycmF5LnB1c2goeyBzb2x1dGlvbiwgc2NvcmUgfSlcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDI7IGorKykge1xuICAgICAgY29uc3Qgc29sRGltID0gc29sdXRpb25bal0sXG4gICAgICAgIGFic1NvbERpbSA9IE1hdGguYWJzKHNvbERpbSlcbiAgICAgIGlmIChhYnNTb2xEaW0gPiBtYXhBYnNEaW0pIHtcbiAgICAgICAgbWF4QWJzRGltID0gYWJzU29sRGltXG4gICAgICB9XG4gICAgICBzb2x1dGlvbnNbMiAqIGkgKyBqXSA9IHNvbERpbVxuICAgIH1cbiAgfVxuICBzb2x1dGlvbnNIaXN0b3J5LnB1c2goc29sdXRpb25zKVxuICBtZWFuSGlzdG9yeS5wdXNoKC4uLmNtYS5tZWFuLnNsaWNlKCkpXG4gIGNtYS50ZWxsKHNvbF9zY29yZV9hcnJheSlcblxuICBjb25zb2xlLmxvZyhzY29yZVN1bSAvIGNtYS5wb3BzaXplKVxuICB6b29tUHJldiA9IHpvb21OZXh0XG4gIHpvb21OZXh0ID0gKDAuOCAqIG9iakZuTGltKSAvIG1heEFic0RpbVxuICB6b29tID0gKDAuOCAqIG9iakZuTGltKSAvIG1heEFic0RpbVxuICBzZW5kTWVhbkhpc3RvcnkoKVxuXG4gIC8vIHBvc3RNZXNzYWdlKFtcInpvb21cIiwgem9vbV0pXG4gIC8vIHVwZGF0ZUNhbnZhc1NjYWxlKClcbiAgLy8gc2VuZEN1cnJlbnRTb2x1dGlvbnMoKVxuICB0cmFuc2l0aW9uKClcbn1cblxuZnVuY3Rpb24gc2VuZE1lYW5IaXN0b3J5KCkge1xuICBjb25zdCBtZWFuSGlzdG9yeVR5cGVkID0gRmxvYXQzMkFycmF5LmZyb20oXG4gICAgbWVhbkhpc3RvcnkubWFwKCh2KSA9PiB2ICogY2FudmFzU2NhbGUpXG4gIClcbiAgcG9zdE1lc3NhZ2UoW1wibWVhbnNcIiwgbWVhbkhpc3RvcnlUeXBlZF0pXG59XG5cbmZ1bmN0aW9uIHNlbmRDdXJyZW50U29sdXRpb25zKCkge1xuICBjb25zdCBjdXJyZW50U29sdXRpb24gPSBzb2x1dGlvbnNIaXN0b3J5W3NvbHV0aW9uc0hpc3RvcnkubGVuZ3RoIC0gMV1cbiAgcG9zdE1lc3NhZ2UoW1xuICAgIFwic29sdXRpb25zXCIsXG4gICAgY3VycmVudFNvbHV0aW9uLm1hcCgodikgPT4gTWF0aC5yb3VuZCh2ICogY2FudmFzU2NhbGUpKSxcbiAgXSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlT2JqRm4ob2JqRm5OYW1lKSB7XG4gIG9iakZuID0gb2JqRm5zW29iakZuTmFtZV1cbiAgb2JqRm5MaW0gPSBvYmpGbi54eUxpbVxuICB1cGRhdGVDYW52YXNTY2FsZSgpXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNhbnZhc1NjYWxlKCkge1xuICBjYW52YXNTY2FsZSA9ICh6b29tICogMC41ICogY2FudmFzRGltKSAvIG9iakZuTGltXG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb24oKSB7XG4gIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1ODM3MjQvaG93LWRvLWktYWRkLWEtZGVsYXktaW4tYS1qYXZhc2NyaXB0LWxvb3BcbiAgZnVuY3Rpb24gbXlMb29wKCkge1xuICAgIC8vICBjcmVhdGUgYSBsb29wIGZ1bmN0aW9uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyAgY2FsbCBhIDNzIHNldFRpbWVvdXQgd2hlbiB0aGUgbG9vcCBpcyBjYWxsZWRcbiAgICAgIHpvb20gPVxuICAgICAgICB6b29tTmV4dCAqICh0cmFuc2l0aW9uU3RlcCAqIG5UcmFuc2l0aW9uU3RlcHNJbnYpICtcbiAgICAgICAgem9vbVByZXYgKiAoKG5UcmFuc2l0aW9uU3RlcHMgLSB0cmFuc2l0aW9uU3RlcCkgKiBuVHJhbnNpdGlvblN0ZXBzSW52KVxuICAgICAgcG9zdE1lc3NhZ2UoW1wiem9vbVwiLCB6b29tXSlcbiAgICAgIHVwZGF0ZUNhbnZhc1NjYWxlKClcbiAgICAgIHNlbmRDdXJyZW50U29sdXRpb25zKClcbiAgICAgIHRyYW5zaXRpb25TdGVwKysgLy8gIGluY3JlbWVudCB0aGUgY291bnRlclxuICAgICAgaWYgKHRyYW5zaXRpb25TdGVwIDw9IG5UcmFuc2l0aW9uU3RlcHMpIHtcbiAgICAgICAgLy8gIGlmIHRoZSBjb3VudGVyIDwgMTAsIGNhbGwgdGhlIGxvb3AgZnVuY3Rpb25cbiAgICAgICAgbXlMb29wKCkgLy8gIC4uICBhZ2FpbiB3aGljaCB3aWxsIHRyaWdnZXIgYW5vdGhlclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNpdGlvblN0ZXAgPSAwXG4gICAgICB9XG4gICAgfSwgMjAwKVxuICB9XG5cbiAgbXlMb29wKCkgLy8gIHN0YXJ0IHRoZSBsb29wXG59XG4iLCJleHBvcnQgY29uc3QgblZpeldvcmtlcnMgPSA4LFxuICBjYW52YXNEaW0gPSA4MDAsXG4gIG1hcmtlclIgPSA3LFxuICBvYmpGbkluaXQgPSBcImFja2xleVwiLFxuICBtZWFuUmFkaXVzTWluID0gMC4zLFxuICBtZWFuUmFkaXVzTWF4ID0gMC41LFxuICBzaWdtYVNjYWxlID0gMC41LFxuICBuVHJhbnNpdGlvblN0ZXBzID0gMTBcbiIsIi8vIHtcbi8vICAgYWNrbGV5OiBcIkFja2xleVwiLFxuLy8gICBib2hhY2hldnNreTE6IFwiQm9oYWNoZXZza3kgTm8uMVwiLFxuLy8gICBncmlld2FuazogXCJHcmlld2Fua1wiLFxuLy8gICByYXN0cmlnaW46IFwiUmFzdHJpZ2luXCIsXG4vLyB9XG5cbmV4cG9ydCBjb25zdCBvYmpGbnMgPSB7XG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vYWNrbGV5Lmh0bWxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9Db2RlL2Fja2xleW0uaHRtbFxuICBhY2tsZXk6IChpbnB1dHMpID0+IHtcbiAgICAvLyBkZWZhdWx0IGE9MjAsIGI9MC4yLCBjPTJwaVxuICAgIGNvbnN0IGEgPSAyMCxcbiAgICAgIGIgPSAwLjIsXG4gICAgICBjID0gMiAqIE1hdGguUElcbiAgICAvLyBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBjb25zdCBkID0gMixcbiAgICAgIGRfaW52ID0gMC41IC8vICgxIC8gZClcbiAgICBsZXQgc3VtMSA9IDAsXG4gICAgICBzdW0yID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bTEgKz0geGkgKiB4aVxuICAgICAgc3VtMiArPSBNYXRoLmNvcyhjICogeGkpXG4gICAgfVxuICAgIC8vIGxldCBkX2ludiA9IDEgLyBkXG4gICAgbGV0IHRlcm0xID0gLWEgKiBNYXRoLmV4cCgtYiAqIE1hdGguc3FydChzdW0xICogZF9pbnYpKSxcbiAgICAgIHRlcm0yID0gLU1hdGguZXhwKHN1bTIgKiBkX2ludilcbiAgICByZXR1cm4gdGVybTEgKyB0ZXJtMiArIGEgKyBNYXRoLkVcbiAgfSxcbiAgLy8gaHR0cDovL2JlbmNobWFya2ZjbnMueHl6L2JlbmNobWFya2ZjbnMvYm9oYWNoZXZza3luMWZjbi5odG1sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vQ29kZS9ib2hhMW0uaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2JvaGEuaHRtbFxuICBib2hhY2hldnNreTE6IChpbnB1dHMpID0+IHtcbiAgICBsZXQgeDEgPSBpbnB1dHNbMF1cbiAgICBsZXQgeDIgPSBpbnB1dHNbMV1cblxuICAgIGxldCB0ZXJtMSA9IHgxICogeDFcbiAgICBsZXQgdGVybTIgPSAyICogeDIgKiB4MlxuICAgIGxldCB0ZXJtMyA9IC0wLjMgKiBNYXRoLmNvcygzICogTWF0aC5QSSAqIHgxKVxuICAgIGxldCB0ZXJtNCA9IC0wLjQgKiBNYXRoLmNvcyg0ICogTWF0aC5QSSAqIHgyKVxuXG4gICAgcmV0dXJuIHRlcm0xICsgdGVybTIgKyB0ZXJtMyArIHRlcm00ICsgMC43XG4gIH0sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vZ3JpZXdhbmsuaHRtbFxuICBncmlld2FuazogKGlucHV0cykgPT4ge1xuICAgIGxldCBkID0gaW5wdXRzLmxlbmd0aFxuICAgIGxldCBzdW0gPSAwXG4gICAgbGV0IHByb2QgPSAxXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIGxldCB4aSA9IGlucHV0c1tpXVxuICAgICAgc3VtICs9ICh4aSAqIHhpKSAvIDQwMDBcbiAgICAgIHByb2QgKj0gTWF0aC5jb3MoeGkgLyBNYXRoLnNxcnQoaSArIDEpKVxuICAgIH1cbiAgICByZXR1cm4gc3VtIC0gcHJvZCArIDFcbiAgfSxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9yYXN0ci5odG1sXG4gIHJhc3RyaWdpbjogKGlucHV0cykgPT4ge1xuICAgIGxldCBkID0gaW5wdXRzLmxlbmd0aFxuICAgIGxldCBzdW0gPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIGxldCB4aSA9IGlucHV0c1tpXVxuICAgICAgc3VtICs9IHhpICogeGkgLSAxMCAqIE1hdGguY29zKDIgKiBNYXRoLlBJICogeGkpXG4gICAgfVxuICAgIHJldHVybiAxMCAqIGQgKyBzdW1cbiAgfSxcbn1cblxuLy8gZmFuY3kgbmFtZXMgZm9yIHNlbGVjdCBtZW51XG5vYmpGbnMuYWNrbGV5LmZhbmN5TmFtZSA9IFwiQWNrbGV5XCJcbm9iakZucy5ib2hhY2hldnNreTEuZmFuY3lOYW1lID0gXCJCb2hhY2hldnNreSBOby4xXCJcbm9iakZucy5ncmlld2Fuay5mYW5jeU5hbWUgPSBcIkdyaWV3YW5rXCJcbm9iakZucy5yYXN0cmlnaW4uZmFuY3lOYW1lID0gXCJSYXN0cmlnaW5cIlxuXG4vLyBmbkxpbXMgZm9yIGRpc3BsYXkgbGltaXRzXG5vYmpGbnMuYWNrbGV5Lnh5TGltID0gMzIuNzY4XG5vYmpGbnMuYm9oYWNoZXZza3kxLnh5TGltID0gMTAwXG5vYmpGbnMuZ3JpZXdhbmsueHlMaW0gPSA2MDBcbm9iakZucy5yYXN0cmlnaW4ueHlMaW0gPSA1LjEyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIHRoZSBzdGFydHVwIGZ1bmN0aW9uXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuXHQvLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcblx0dmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJzcmNfanNfY21hLWxpYl9qc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9jbWFlcy1kZW1vL2NtYS13b3JrZXIuanNcIikpKVxuXHRfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuXHRyZXR1cm4gX193ZWJwYWNrX2V4cG9ydHNfXztcbn07XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3MgYW5kIHNpYmxpbmcgY2h1bmtzIGZvciB0aGUgZW50cnlwb2ludFxuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgXCI4ZTdiNjI0ZDk0MGRkMzI1MzM0ZFwiICsgXCIuanNcIjtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYWxsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRiA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3Ncbi8vIFwiMVwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJzcmNfcGFnZXNfY21hZXMtZGVtb19jbWEtd29ya2VyX2pzXCI6IDFcbn07XG5cbi8vIGltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZ1xudmFyIGluc3RhbGxDaHVuayA9IChkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0d2hpbGUoY2h1bmtJZHMubGVuZ3RoKVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkcy5wb3AoKV0gPSAxO1xuXHRwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaSA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHQvLyBcIjFcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcblx0aWYoIWluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRpbXBvcnRTY3JpcHRzKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKSk7XG5cdFx0fVxuXHR9XG59O1xuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3dlYnBhY2tfdGVzdFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJwYWNrX3Rlc3RcIl0gfHwgW107XG52YXIgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24gPSBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IGluc3RhbGxDaHVuaztcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdCIsInZhciBuZXh0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy54O1xuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwic3JjX2pzX2NtYS1saWJfanNcIikudGhlbihuZXh0KTtcbn07IiwiIiwiLy8gcnVuIHN0YXJ0dXBcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iLCIiXSwibmFtZXMiOlsiQ01BIiwiZ2V0RGVmYXVsdENNQVBvcHNpemUiLCJvYmpGbnMiLCJvYmpGbkluaXQiLCJjYW52YXNEaW0iLCJtZWFuUmFkaXVzTWluIiwibWVhblJhZGl1c01heCIsInNpZ21hU2NhbGUiLCJuVHJhbnNpdGlvblN0ZXBzIiwiblRyYW5zaXRpb25TdGVwc0ludiIsInpvb20iLCJ6b29tTmV4dCIsInpvb21QcmV2IiwidHJhbnNpdGlvblN0ZXAiLCJjYW52YXNTY2FsZSIsIm9iakZuTmFtZSIsIm9iakZuTGltIiwib2JqRm4iLCJjbWEiLCJzb2x1dGlvbnNIaXN0b3J5IiwibWVhbkhpc3RvcnkiLCJwb3BzaXplTXVsdGlwbGllciIsImNtYUluaXQiLCJvbm1lc3NhZ2UiLCJlIiwiZGF0YSIsImluZm8iLCJtc2ciLCJjbWFTdGVwIiwidXBkYXRlQ2FudmFzU2NhbGUiLCJzZW5kTWVhbkhpc3RvcnkiLCJzZW5kQ3VycmVudFNvbHV0aW9ucyIsInVwZGF0ZU9iakZuIiwiY21hU2lnbWEiLCJyYW5kUmFkaWFucyIsIk1hdGgiLCJQSSIsInJhbmRvbSIsInJhbmRSYWRpdXMiLCJjb25zb2xlIiwibG9nIiwiY21hTWVhbiIsIkZsb2F0MzJBcnJheSIsImZyb20iLCJjb3MiLCJzaW4iLCJwb3BzaXplIiwidW5kZWZpbmVkIiwic29sdXRpb25zIiwic29sX3Njb3JlX2FycmF5Iiwic2NvcmVTdW0iLCJtYXhBYnNEaW0iLCJpIiwic29sdXRpb24iLCJhc2siLCJzY29yZSIsInB1c2giLCJqIiwic29sRGltIiwiYWJzU29sRGltIiwiYWJzIiwibWVhbiIsInNsaWNlIiwidGVsbCIsInRyYW5zaXRpb24iLCJtZWFuSGlzdG9yeVR5cGVkIiwibWFwIiwidiIsInBvc3RNZXNzYWdlIiwiY3VycmVudFNvbHV0aW9uIiwibGVuZ3RoIiwicm91bmQiLCJ4eUxpbSIsIm15TG9vcCIsInNldFRpbWVvdXQiLCJuVml6V29ya2VycyIsIm1hcmtlclIiLCJhY2tsZXkiLCJpbnB1dHMiLCJhIiwiYiIsImMiLCJkIiwiZF9pbnYiLCJzdW0xIiwic3VtMiIsInhpIiwidGVybTEiLCJleHAiLCJzcXJ0IiwidGVybTIiLCJFIiwiYm9oYWNoZXZza3kxIiwieDEiLCJ4MiIsInRlcm0zIiwidGVybTQiLCJncmlld2FuayIsInN1bSIsInByb2QiLCJyYXN0cmlnaW4iLCJmYW5jeU5hbWUiXSwic291cmNlUm9vdCI6IiJ9