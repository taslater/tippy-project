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



 // console.log(new CMA([0, 0], 1, 10, undefined, undefined))

var zoom = 1,
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
  var _meanHistory;

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
  console.log(popsize);
  cma = new _js_cma_lib_js__WEBPACK_IMPORTED_MODULE_0__.CMA(cmaMean, cmaSigma, popsize, undefined, undefined);

  (_meanHistory = meanHistory).push.apply(_meanHistory, _toConsumableArray(cma.mean));

  cmaStep();
}

function cmaStep() {
  var _meanHistory2;

  var solutions = new Float32Array(2 * cma.popsize),
      sol_score_array = [];
  var scoreSum = 0;

  for (var i = 0; i < cma.popsize; i++) {
    var solution = cma.ask(),
        score = objFn(solution);
    scoreSum += score;
    sol_score_array.push({
      solution: solution,
      score: score
    });

    for (var j = 0; j < 2; j++) {
      solutions[2 * i + j] = solution[j];
    }
  }

  console.log(scoreSum / cma.popsize);
  cma.tell(sol_score_array);
  solutionsHistory.push(solutions);

  (_meanHistory2 = meanHistory).push.apply(_meanHistory2, _toConsumableArray(cma.mean));

  sendMeanHistory();
  sendCurrentSolutions();
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
    return v * canvasScale;
  })]);
}

function updateObjFn(objFnName) {
  objFn = _obj_fns_js__WEBPACK_IMPORTED_MODULE_1__.objFns[objFnName];
  objFnLim = objFn.xyLim;
  updateCanvasScale();
}

function updateCanvasScale() {
  canvasScale = zoom * _globals_js__WEBPACK_IMPORTED_MODULE_2__.canvasDim / objFnLim;
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
/* harmony export */   "sigmaScale": () => (/* binding */ sigmaScale)
/* harmony export */ });
var nVizWorkers = 8,
    canvasDim = 800,
    markerR = 7,
    objFnInit = "ackley",
    meanRadiusMin = 0.7,
    meanRadiusMax = 1,
    sigmaScale = 1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX2NtYWVzLWRlbW9fY21hLXdvcmtlcl9qcy45YTdlMDdmYTJlZGJjOWFlMmIzNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQVNBOztBQUVBLElBQUlRLElBQUksR0FBRyxDQUFYO0FBQUEsSUFDRUMsV0FERjtBQUFBLElBRUVDLFNBQVMsR0FBR1Asa0RBRmQ7QUFBQSxJQUdFUSxRQUhGO0FBQUEsSUFJRUMsS0FKRjtBQUFBLElBS0VDLEdBTEY7QUFBQSxJQU1FQyxnQkFORjtBQUFBLElBT0VDLFdBUEY7QUFBQSxJQVFFQyxpQkFBaUIsR0FBRyxDQVJ0QixFQVVBOztBQUNBQyxPQUFPOztBQUVQQyxTQUFTLEdBQUcsbUJBQUNDLENBQUQsRUFBTztBQUNqQiwrQkFBb0JBLENBQUMsQ0FBQ0MsSUFBdEI7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsR0FBYjs7QUFDQSxNQUFJRCxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQjtBQUNBWCxJQUFBQSxTQUFTLEdBQUdZLEdBQVo7QUFDQUwsSUFBQUEsT0FBTztBQUNSLEdBSkQsTUFJTyxJQUFJSSxJQUFJLEtBQUssU0FBYixFQUF3QjtBQUM3QkwsSUFBQUEsaUJBQWlCLEdBQUdNLEdBQXBCO0FBQ0FMLElBQUFBLE9BQU87QUFDUixHQUhNLE1BR0EsSUFBSUksSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDMUJFLElBQUFBLE9BQU87QUFDUixHQUZNLE1BRUEsSUFBSUYsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDMUJiLElBQUFBLElBQUksR0FBR2MsR0FBUDtBQUNBRSxJQUFBQSxpQkFBaUI7QUFDakJDLElBQUFBLGVBQWU7QUFDZkMsSUFBQUEsb0JBQW9CO0FBQ3JCO0FBQ0YsQ0FqQkQ7O0FBbUJBLFNBQVNULE9BQVQsR0FBbUI7QUFBQTs7QUFDakJVLEVBQUFBLFdBQVcsQ0FBQ2pCLFNBQUQsQ0FBWDtBQUNBSSxFQUFBQSxnQkFBZ0Is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d29ya2VyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vb2JqLWZucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2ltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL3N0YXJ0dXAgY2h1bmsgZGVwZW5kZW5jaWVzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDTUEsIGdldERlZmF1bHRDTUFQb3BzaXplIH0gZnJvbSBcIi4uLy4uL2pzL2NtYS1saWIuanNcIlxuaW1wb3J0IHsgb2JqRm5zIH0gZnJvbSBcIi4vb2JqLWZucy5qc1wiXG5pbXBvcnQge1xuICBvYmpGbkluaXQsXG4gIGNhbnZhc0RpbSxcbiAgbWVhblJhZGl1c01pbixcbiAgbWVhblJhZGl1c01heCxcbiAgc2lnbWFTY2FsZSxcbn0gZnJvbSBcIi4vZ2xvYmFscy5qc1wiXG5cbi8vIGNvbnNvbGUubG9nKG5ldyBDTUEoWzAsIDBdLCAxLCAxMCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpKVxuXG5sZXQgem9vbSA9IDEsXG4gIGNhbnZhc1NjYWxlLFxuICBvYmpGbk5hbWUgPSBvYmpGbkluaXQsXG4gIG9iakZuTGltLFxuICBvYmpGbixcbiAgY21hLFxuICBzb2x1dGlvbnNIaXN0b3J5LFxuICBtZWFuSGlzdG9yeSxcbiAgcG9wc2l6ZU11bHRpcGxpZXIgPSAxXG5cbi8vIHVwZGF0ZU9iakZuKG9iakZuSW5pdClcbmNtYUluaXQoKVxuXG5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICBjb25zdCBbaW5mbywgbXNnXSA9IGUuZGF0YVxuICBpZiAoaW5mbyA9PT0gXCJmbk5hbWVcIikge1xuICAgIC8vIHVwZGF0ZU9iakZuKG1zZylcbiAgICBvYmpGbk5hbWUgPSBtc2dcbiAgICBjbWFJbml0KClcbiAgfSBlbHNlIGlmIChpbmZvID09PSBcInBvcE11bHRcIikge1xuICAgIHBvcHNpemVNdWx0aXBsaWVyID0gbXNnXG4gICAgY21hSW5pdCgpXG4gIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJzdGVwXCIpIHtcbiAgICBjbWFTdGVwKClcbiAgfSBlbHNlIGlmIChpbmZvID09PSBcInpvb21cIikge1xuICAgIHpvb20gPSBtc2dcbiAgICB1cGRhdGVDYW52YXNTY2FsZSgpXG4gICAgc2VuZE1lYW5IaXN0b3J5KClcbiAgICBzZW5kQ3VycmVudFNvbHV0aW9ucygpXG4gIH1cbn1cblxuZnVuY3Rpb24gY21hSW5pdCgpIHtcbiAgdXBkYXRlT2JqRm4ob2JqRm5OYW1lKVxuICBzb2x1dGlvbnNIaXN0b3J5ID0gW11cbiAgbWVhbkhpc3RvcnkgPSBbXVxuICBjb25zdCBjbWFTaWdtYSA9IHNpZ21hU2NhbGUgKiBvYmpGbkxpbVxuICAvLyBjbWFNZWFuID0gW11cbiAgY29uc3QgcmFuZFJhZGlhbnMgPSAyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKClcbiAgY29uc3QgcmFuZFJhZGl1cyA9XG4gICAgb2JqRm5MaW0gKiAobWVhblJhZGl1c01pbiArIE1hdGgucmFuZG9tKCkgKiAobWVhblJhZGl1c01heCAtIG1lYW5SYWRpdXNNaW4pKVxuICBjb25zb2xlLmxvZyhcIm9iakZuTGltXCIsIG9iakZuTGltKVxuICBjb25zb2xlLmxvZyhcInJhbmRSYWRpdXNcIiwgcmFuZFJhZGl1cylcbiAgY29uc3QgY21hTWVhbiA9IEZsb2F0MzJBcnJheS5mcm9tKFtcbiAgICByYW5kUmFkaXVzICogTWF0aC5jb3MocmFuZFJhZGlhbnMpLFxuICAgIHJhbmRSYWRpdXMgKiBNYXRoLnNpbihyYW5kUmFkaWFucyksXG4gIF0pXG4gIGNvbnN0IHBvcHNpemUgPSBnZXREZWZhdWx0Q01BUG9wc2l6ZSgyKSAqIHBvcHNpemVNdWx0aXBsaWVyXG4gIGNvbnNvbGUubG9nKHBvcHNpemUpXG4gIGNtYSA9IG5ldyBDTUEoY21hTWVhbiwgY21hU2lnbWEsIHBvcHNpemUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxuICBtZWFuSGlzdG9yeS5wdXNoKC4uLmNtYS5tZWFuKVxuICBjbWFTdGVwKClcbn1cblxuZnVuY3Rpb24gY21hU3RlcCgpIHtcbiAgY29uc3Qgc29sdXRpb25zID0gbmV3IEZsb2F0MzJBcnJheSgyICogY21hLnBvcHNpemUpLFxuICAgIHNvbF9zY29yZV9hcnJheSA9IFtdXG4gIGxldCBzY29yZVN1bSA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbWEucG9wc2l6ZTsgaSsrKSB7XG4gICAgY29uc3Qgc29sdXRpb24gPSBjbWEuYXNrKCksXG4gICAgICBzY29yZSA9IG9iakZuKHNvbHV0aW9uKVxuICAgIHNjb3JlU3VtICs9IHNjb3JlXG4gICAgc29sX3Njb3JlX2FycmF5LnB1c2goeyBzb2x1dGlvbiwgc2NvcmUgfSlcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDI7IGorKykge1xuICAgICAgc29sdXRpb25zWzIgKiBpICsgal0gPSBzb2x1dGlvbltqXVxuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhzY29yZVN1bSAvIGNtYS5wb3BzaXplKVxuICBjbWEudGVsbChzb2xfc2NvcmVfYXJyYXkpXG4gIHNvbHV0aW9uc0hpc3RvcnkucHVzaChzb2x1dGlvbnMpXG4gIG1lYW5IaXN0b3J5LnB1c2goLi4uY21hLm1lYW4pXG4gIHNlbmRNZWFuSGlzdG9yeSgpXG4gIHNlbmRDdXJyZW50U29sdXRpb25zKClcbn1cblxuZnVuY3Rpb24gc2VuZE1lYW5IaXN0b3J5KCkge1xuICBjb25zdCBtZWFuSGlzdG9yeVR5cGVkID0gRmxvYXQzMkFycmF5LmZyb20oXG4gICAgbWVhbkhpc3RvcnkubWFwKCh2KSA9PiB2ICogY2FudmFzU2NhbGUpXG4gIClcbiAgcG9zdE1lc3NhZ2UoW1wibWVhbnNcIiwgbWVhbkhpc3RvcnlUeXBlZF0pXG59XG5cbmZ1bmN0aW9uIHNlbmRDdXJyZW50U29sdXRpb25zKCkge1xuICBjb25zdCBjdXJyZW50U29sdXRpb24gPSBzb2x1dGlvbnNIaXN0b3J5W3NvbHV0aW9uc0hpc3RvcnkubGVuZ3RoIC0gMV1cbiAgcG9zdE1lc3NhZ2UoW1wic29sdXRpb25zXCIsIGN1cnJlbnRTb2x1dGlvbi5tYXAoKHYpID0+IHYgKiBjYW52YXNTY2FsZSldKVxufVxuXG5mdW5jdGlvbiB1cGRhdGVPYmpGbihvYmpGbk5hbWUpIHtcbiAgb2JqRm4gPSBvYmpGbnNbb2JqRm5OYW1lXVxuICBvYmpGbkxpbSA9IG9iakZuLnh5TGltXG4gIHVwZGF0ZUNhbnZhc1NjYWxlKClcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2FudmFzU2NhbGUoKSB7XG4gIGNhbnZhc1NjYWxlID0gKHpvb20gKiBjYW52YXNEaW0pIC8gb2JqRm5MaW1cbn1cbiIsImV4cG9ydCBjb25zdCBuVml6V29ya2VycyA9IDgsXG4gIGNhbnZhc0RpbSA9IDgwMCxcbiAgbWFya2VyUiA9IDcsXG4gIG9iakZuSW5pdCA9IFwiYWNrbGV5XCIsXG4gIG1lYW5SYWRpdXNNaW4gPSAwLjcsXG4gIG1lYW5SYWRpdXNNYXggPSAxLFxuICBzaWdtYVNjYWxlID0gMVxuIiwiLy8ge1xuLy8gICBhY2tsZXk6IFwiQWNrbGV5XCIsXG4vLyAgIGJvaGFjaGV2c2t5MTogXCJCb2hhY2hldnNreSBOby4xXCIsXG4vLyAgIGdyaWV3YW5rOiBcIkdyaWV3YW5rXCIsXG4vLyAgIHJhc3RyaWdpbjogXCJSYXN0cmlnaW5cIixcbi8vIH1cblxuZXhwb3J0IGNvbnN0IG9iakZucyA9IHtcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9hY2tsZXkuaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL0NvZGUvYWNrbGV5bS5odG1sXG4gIGFja2xleTogKGlucHV0cykgPT4ge1xuICAgIC8vIGRlZmF1bHQgYT0yMCwgYj0wLjIsIGM9MnBpXG4gICAgY29uc3QgYSA9IDIwMDAwMDAsXG4gICAgICBiID0gMC4yLFxuICAgICAgYyA9IDIgKiBNYXRoLlBJXG4gICAgLy8gbGV0IGQgPSBpbnB1dHMubGVuZ3RoXG4gICAgY29uc3QgZCA9IDIsXG4gICAgICBkX2ludiA9IDAuNSAvLyAoMSAvIGQpXG4gICAgbGV0IHN1bTEgPSAwLFxuICAgICAgc3VtMiA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGQ7IGkrKykge1xuICAgICAgbGV0IHhpID0gaW5wdXRzW2ldXG4gICAgICBzdW0xICs9IHhpICogeGlcbiAgICAgIHN1bTIgKz0gTWF0aC5jb3MoYyAqIHhpKVxuICAgIH1cbiAgICAvLyBsZXQgZF9pbnYgPSAxIC8gZFxuICAgIGxldCB0ZXJtMSA9IC1hICogTWF0aC5leHAoLWIgKiBNYXRoLnNxcnQoc3VtMSAqIGRfaW52KSksXG4gICAgICB0ZXJtMiA9IC1NYXRoLmV4cChzdW0yICogZF9pbnYpXG4gICAgcmV0dXJuIHRlcm0xICsgdGVybTIgKyBhICsgTWF0aC5FXG4gIH0sXG4gIC8vIGh0dHA6Ly9iZW5jaG1hcmtmY25zLnh5ei9iZW5jaG1hcmtmY25zL2JvaGFjaGV2c2t5bjFmY24uaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL0NvZGUvYm9oYTFtLmh0bWxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9ib2hhLmh0bWxcbiAgYm9oYWNoZXZza3kxOiAoaW5wdXRzKSA9PiB7XG4gICAgbGV0IHgxID0gaW5wdXRzWzBdXG4gICAgbGV0IHgyID0gaW5wdXRzWzFdXG5cbiAgICBsZXQgdGVybTEgPSB4MSAqIHgxXG4gICAgbGV0IHRlcm0yID0gMiAqIHgyICogeDJcbiAgICBsZXQgdGVybTMgPSAtMC4zICogTWF0aC5jb3MoMyAqIE1hdGguUEkgKiB4MSlcbiAgICBsZXQgdGVybTQgPSAtMC40ICogTWF0aC5jb3MoNCAqIE1hdGguUEkgKiB4MilcblxuICAgIHJldHVybiB0ZXJtMSArIHRlcm0yICsgdGVybTMgKyB0ZXJtNCArIDAuN1xuICB9LFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2dyaWV3YW5rLmh0bWxcbiAgZ3JpZXdhbms6IChpbnB1dHMpID0+IHtcbiAgICBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBsZXQgc3VtID0gMFxuICAgIGxldCBwcm9kID0gMVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bSArPSAoeGkgKiB4aSkgLyA0MDAwXG4gICAgICBwcm9kICo9IE1hdGguY29zKHhpIC8gTWF0aC5zcXJ0KGkgKyAxKSlcbiAgICB9XG4gICAgcmV0dXJuIHN1bSAtIHByb2QgKyAxXG4gIH0sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vcmFzdHIuaHRtbFxuICByYXN0cmlnaW46IChpbnB1dHMpID0+IHtcbiAgICBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBsZXQgc3VtID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bSArPSB4aSAqIHhpIC0gMTAgKiBNYXRoLmNvcygyICogTWF0aC5QSSAqIHhpKVxuICAgIH1cbiAgICByZXR1cm4gMTAgKiBkICsgc3VtXG4gIH0sXG59XG5cbi8vIGZhbmN5IG5hbWVzIGZvciBzZWxlY3QgbWVudVxub2JqRm5zLmFja2xleS5mYW5jeU5hbWUgPSBcIkFja2xleVwiXG5vYmpGbnMuYm9oYWNoZXZza3kxLmZhbmN5TmFtZSA9IFwiQm9oYWNoZXZza3kgTm8uMVwiXG5vYmpGbnMuZ3JpZXdhbmsuZmFuY3lOYW1lID0gXCJHcmlld2Fua1wiXG5vYmpGbnMucmFzdHJpZ2luLmZhbmN5TmFtZSA9IFwiUmFzdHJpZ2luXCJcblxuLy8gZm5MaW1zIGZvciBkaXNwbGF5IGxpbWl0c1xub2JqRm5zLmFja2xleS54eUxpbSA9IDMyLjc2OFxub2JqRm5zLmJvaGFjaGV2c2t5MS54eUxpbSA9IDEwMFxub2JqRm5zLmdyaWV3YW5rLnh5TGltID0gNjAwXG5vYmpGbnMucmFzdHJpZ2luLnh5TGltID0gNS4xMlxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyB0aGUgc3RhcnR1cCBmdW5jdGlvblxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcblx0Ly8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5cdHZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3JjX2pzX2NtYS1saWJfanNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvY21hZXMtZGVtby9jbWEtd29ya2VyLmpzXCIpKSlcblx0X193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcblx0cmV0dXJuIF9fd2VicGFja19leHBvcnRzX187XG59O1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzIGFuZCBzaWJsaW5nIGNodW5rcyBmb3IgdGhlIGVudHJ5cG9pbnRcbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIFwiOGU3YjYyNGQ5NDBkZDMyNTMzNGRcIiArIFwiLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4vLyBcIjFcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwic3JjX3BhZ2VzX2NtYWVzLWRlbW9fY21hLXdvcmtlcl9qc1wiOiAxXG59O1xuXG4vLyBpbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmdcbnZhciBpbnN0YWxsQ2h1bmsgPSAoZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdHdoaWxlKGNodW5rSWRzLmxlbmd0aClcblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHMucG9wKCldID0gMTtcblx0cGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmkgPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0Ly8gXCIxXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG5cdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0aW1wb3J0U2NyaXB0cyhfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCkpO1xuXHRcdH1cblx0fVxufTtcblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJwYWNrX3Rlc3RcIl0gPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja190ZXN0XCJdIHx8IFtdO1xudmFyIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uID0gY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSBpbnN0YWxsQ2h1bms7XG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3QiLCJ2YXIgbmV4dCA9IF9fd2VicGFja19yZXF1aXJlX18ueDtcbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShcInNyY19qc19jbWEtbGliX2pzXCIpLnRoZW4obmV4dCk7XG59OyIsIiIsIi8vIHJ1biBzdGFydHVwXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIiwiIl0sIm5hbWVzIjpbIkNNQSIsImdldERlZmF1bHRDTUFQb3BzaXplIiwib2JqRm5zIiwib2JqRm5Jbml0IiwiY2FudmFzRGltIiwibWVhblJhZGl1c01pbiIsIm1lYW5SYWRpdXNNYXgiLCJzaWdtYVNjYWxlIiwiem9vbSIsImNhbnZhc1NjYWxlIiwib2JqRm5OYW1lIiwib2JqRm5MaW0iLCJvYmpGbiIsImNtYSIsInNvbHV0aW9uc0hpc3RvcnkiLCJtZWFuSGlzdG9yeSIsInBvcHNpemVNdWx0aXBsaWVyIiwiY21hSW5pdCIsIm9ubWVzc2FnZSIsImUiLCJkYXRhIiwiaW5mbyIsIm1zZyIsImNtYVN0ZXAiLCJ1cGRhdGVDYW52YXNTY2FsZSIsInNlbmRNZWFuSGlzdG9yeSIsInNlbmRDdXJyZW50U29sdXRpb25zIiwidXBkYXRlT2JqRm4iLCJjbWFTaWdtYSIsInJhbmRSYWRpYW5zIiwiTWF0aCIsIlBJIiwicmFuZG9tIiwicmFuZFJhZGl1cyIsImNvbnNvbGUiLCJsb2ciLCJjbWFNZWFuIiwiRmxvYXQzMkFycmF5IiwiZnJvbSIsImNvcyIsInNpbiIsInBvcHNpemUiLCJ1bmRlZmluZWQiLCJwdXNoIiwibWVhbiIsInNvbHV0aW9ucyIsInNvbF9zY29yZV9hcnJheSIsInNjb3JlU3VtIiwiaSIsInNvbHV0aW9uIiwiYXNrIiwic2NvcmUiLCJqIiwidGVsbCIsIm1lYW5IaXN0b3J5VHlwZWQiLCJtYXAiLCJ2IiwicG9zdE1lc3NhZ2UiLCJjdXJyZW50U29sdXRpb24iLCJsZW5ndGgiLCJ4eUxpbSIsIm5WaXpXb3JrZXJzIiwibWFya2VyUiIsImFja2xleSIsImlucHV0cyIsImEiLCJiIiwiYyIsImQiLCJkX2ludiIsInN1bTEiLCJzdW0yIiwieGkiLCJ0ZXJtMSIsImV4cCIsInNxcnQiLCJ0ZXJtMiIsIkUiLCJib2hhY2hldnNreTEiLCJ4MSIsIngyIiwidGVybTMiLCJ0ZXJtNCIsImdyaWV3YW5rIiwic3VtIiwicHJvZCIsInJhc3RyaWdpbiIsImZhbmN5TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=