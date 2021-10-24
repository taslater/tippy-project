/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/spot/cma-worker.js":
/*!**************************************!*\
  !*** ./src/pages/spot/cma-worker.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_cma_lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/cma-lib.js */ "./src/js/cma-lib.js");
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.js */ "./src/pages/spot/globals.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // const cmaSigma = 100

var cma,
    popsize,
    // weightCount,
// biasCount,
initialized = false,
    // solutionsScores = [],
// scoreSolutionInfos = [],
// scoreInfos = [],
// scoreInfoSummary = {},
scoreInfoSummaryInitialized = false,
    epNum = 0;

onmessage = function onmessage(e) {
  var _e$data = _slicedToArray(e.data, 2),
      info = _e$data[0],
      msg = _e$data[1];

  if (info == "initInfo" && !initialized) {
    // const cmaMean = new Float32Array(msg.n_dim).fill(0)
    var cmaMean = _globals_js__WEBPACK_IMPORTED_MODULE_1__.cmaMeanInit.slice();
    popsize = msg.creaturesPerWorker * _globals_js__WEBPACK_IMPORTED_MODULE_1__.nWorkers;
    cma = new _js_cma_lib_js__WEBPACK_IMPORTED_MODULE_0__.CMA(cmaMean, _globals_js__WEBPACK_IMPORTED_MODULE_1__.cmaSigma, popsize, undefined, undefined);
    sendNewSolutions();
    initialized = true;
  } else if (info == "solutionsScores") {
    var tellSuccess = cma.tell(msg);

    if (!tellSuccess) {
      console.log("tell failed");
      console.log(cma);
    } else {
      sendNewSolutions();
    }
  }
};

function sendNewSolutions() {
  var badSolution = false;
  var solutions = new Float32Array(popsize * cma.n_dim);

  for (var i = 0; i < popsize; i++) {
    var solution = cma.ask();

    if (solution.constructor !== Float32Array) {
      badSolution = true;
      break;
    }

    for (var j = 0; j < solution.length; j++) {
      solutions[i * solution.length + j] = solution[j];
    }
  }

  console.log(cma.mean);

  if (!badSolution) {
    postMessage(["solutions", solutions]);
  } else {
    console.log("ask failed");
    console.log(cma);
  }
} // function processScoreInfos() {
//   const kvPairs = Object.entries(scoreInfos[0])
//   for (let [scoreKey, scoreVal] of kvPairs) {
//     const scoreValConstructorName = scoreVal.constructor.name
//     if (!scoreValConstructorName.includes("Array")) {
//       if (!scoreInfoSummaryInitialized) {
//         scoreInfoSummary[scoreKey] = []
//       }
//       for (let popIdx = 0; popIdx < popsize; popIdx++) {
//         scoreInfoSummary[scoreKey].push(scoreInfos[popIdx][scoreKey])
//       }
//     } else {
//       // If the score value is an array,
//       // create a new key for each element
//       // of that array to flatten the summary.
//       for (let scoreValIdx = 0; scoreValIdx < scoreVal.length; scoreValIdx++) {
//         const arrayKey = `${scoreKey}_${scoreValIdx}`
//         if (!scoreInfoSummaryInitialized) {
//           scoreInfoSummary[arrayKey] = []
//         }
//         for (let popIdx = 0; popIdx < popsize; popIdx++) {
//           scoreInfoSummary[arrayKey].push(
//             scoreInfos[popIdx][scoreKey][scoreValIdx]
//           )
//         }
//       }
//     }
//   }
//   if (!scoreInfoSummaryInitialized) {
//     scoreInfoSummary["epNum"] = []
//   }
//   for (let _ = 0; _ < popsize; _++) {
//     scoreInfoSummary["epNum"].push(epNum)
//   }
//   epNum++
//   scoreInfoSummaryInitialized = true
//   console.clear()
//   console.log(scoreInfoSummary)
//   scoreInfos = []
// }

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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["src_js_cma-lib_js","src_pages_spot_globals_js"], () => (__webpack_require__("./src/pages/spot/cma-worker.js")))
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
/******/ 			return "" + chunkId + "." + {"src_js_cma-lib_js":"8e7b624d940dd325334d","src_pages_spot_globals_js":"fc834c526d1b919b5725"}[chunkId] + ".js";
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
/******/ 			"src_pages_spot_cma-worker_js": 1
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
/******/ 			return Promise.all([
/******/ 				__webpack_require__.e("src_js_cma-lib_js"),
/******/ 				__webpack_require__.e("src_pages_spot_globals_js")
/******/ 			]).then(next);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX3Nwb3RfY21hLXdvcmtlcl9qcy43ZTc4YTQ1OGM1NTk5YTY2ODRjNy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQSxJQUFJSSxHQUFKO0FBQUEsSUFDRUMsT0FERjtBQUFBLElBRUU7QUFDQTtBQUNBQyxXQUFXLEdBQUcsS0FKaEI7QUFBQSxJQUtFO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLDJCQUEyQixHQUFHLEtBVGhDO0FBQUEsSUFVRUMsS0FBSyxHQUFHLENBVlY7O0FBWUFDLFNBQVMsR0FBRyxtQkFBQ0MsQ0FBRCxFQUFPO0FBQ2pCLCtCQUFvQkEsQ0FBQyxDQUFDQyxJQUF0QjtBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxHQUFiOztBQUNBLE1BQUlELElBQUksSUFBSSxVQUFSLElBQXNCLENBQUNOLFdBQTNCLEVBQXdDO0FBQ3RDO0FBQ0EsUUFBTVEsT0FBTyxHQUFHWCwwREFBQSxFQUFoQjtBQUNBRSxJQUFBQSxPQUFPLEdBQUdRLEdBQUcsQ0FBQ0csa0JBQUosR0FBeUJkLGlEQUFuQztBQUNBRSxJQUFBQSxHQUFHLEdBQUcsSUFBSUosK0NBQUosQ0FBUWMsT0FBUixFQUFpQmIsaURBQWpCLEVBQTJCSSxPQUEzQixFQUFvQ1ksU0FBcEMsRUFBK0NBLFNBQS9DLENBQU47QUFDQUMsSUFBQUEsZ0JBQWdCO0FBQ2hCWixJQUFBQSxXQUFXLEdBQUcsSUFBZDtBQUNELEdBUEQsTUFPTyxJQUFJTSxJQUFJLElBQUksaUJBQVosRUFBK0I7QUFDcEMsUUFBTU8sV0FBVyxHQUFHZixHQUFHLENBQUNnQixJQUFKLENBQVNQLEdBQVQsQ0FBcEI7O0FBQ0EsUUFBSSxDQUFDTSxXQUFMLEVBQWtCO0FBQ2hCRSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbEIsR0FBWjtBQUNELEtBSEQsTUFHTztBQUNMYyxNQUFBQSxnQkFBZ0I7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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxhQUFhO1dBQ2I7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBOztXQUVBOzs7OztXQ3BDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVOQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL3Nwb3QvY21hLXdvcmtlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2ltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL3N0YXJ0dXAgY2h1bmsgZGVwZW5kZW5jaWVzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDTUEgfSBmcm9tIFwiLi4vLi4vanMvY21hLWxpYi5qc1wiXG5pbXBvcnQgeyBjbWFTaWdtYSwgbldvcmtlcnMsIGNtYU1lYW5Jbml0IH0gZnJvbSBcIi4vZ2xvYmFscy5qc1wiXG5cbi8vIGNvbnN0IGNtYVNpZ21hID0gMTAwXG5sZXQgY21hLFxuICBwb3BzaXplLFxuICAvLyB3ZWlnaHRDb3VudCxcbiAgLy8gYmlhc0NvdW50LFxuICBpbml0aWFsaXplZCA9IGZhbHNlLFxuICAvLyBzb2x1dGlvbnNTY29yZXMgPSBbXSxcbiAgLy8gc2NvcmVTb2x1dGlvbkluZm9zID0gW10sXG4gIC8vIHNjb3JlSW5mb3MgPSBbXSxcbiAgLy8gc2NvcmVJbmZvU3VtbWFyeSA9IHt9LFxuICBzY29yZUluZm9TdW1tYXJ5SW5pdGlhbGl6ZWQgPSBmYWxzZSxcbiAgZXBOdW0gPSAwXG5cbm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gIGNvbnN0IFtpbmZvLCBtc2ddID0gZS5kYXRhXG4gIGlmIChpbmZvID09IFwiaW5pdEluZm9cIiAmJiAhaW5pdGlhbGl6ZWQpIHtcbiAgICAvLyBjb25zdCBjbWFNZWFuID0gbmV3IEZsb2F0MzJBcnJheShtc2cubl9kaW0pLmZpbGwoMClcbiAgICBjb25zdCBjbWFNZWFuID0gY21hTWVhbkluaXQuc2xpY2UoKVxuICAgIHBvcHNpemUgPSBtc2cuY3JlYXR1cmVzUGVyV29ya2VyICogbldvcmtlcnNcbiAgICBjbWEgPSBuZXcgQ01BKGNtYU1lYW4sIGNtYVNpZ21hLCBwb3BzaXplLCB1bmRlZmluZWQsIHVuZGVmaW5lZClcbiAgICBzZW5kTmV3U29sdXRpb25zKClcbiAgICBpbml0aWFsaXplZCA9IHRydWVcbiAgfSBlbHNlIGlmIChpbmZvID09IFwic29sdXRpb25zU2NvcmVzXCIpIHtcbiAgICBjb25zdCB0ZWxsU3VjY2VzcyA9IGNtYS50ZWxsKG1zZylcbiAgICBpZiAoIXRlbGxTdWNjZXNzKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInRlbGwgZmFpbGVkXCIpXG4gICAgICBjb25zb2xlLmxvZyhjbWEpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbmROZXdTb2x1dGlvbnMoKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZW5kTmV3U29sdXRpb25zKCkge1xuICBsZXQgYmFkU29sdXRpb24gPSBmYWxzZVxuICBjb25zdCBzb2x1dGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHBvcHNpemUgKiBjbWEubl9kaW0pXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcG9wc2l6ZTsgaSsrKSB7XG4gICAgY29uc3Qgc29sdXRpb24gPSBjbWEuYXNrKClcbiAgICBpZiAoc29sdXRpb24uY29uc3RydWN0b3IgIT09IEZsb2F0MzJBcnJheSkge1xuICAgICAgYmFkU29sdXRpb24gPSB0cnVlXG4gICAgICBicmVha1xuICAgIH1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNvbHV0aW9uLmxlbmd0aDsgaisrKSB7XG4gICAgICBzb2x1dGlvbnNbaSAqIHNvbHV0aW9uLmxlbmd0aCArIGpdID0gc29sdXRpb25bal1cbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2coY21hLm1lYW4pXG4gIGlmICghYmFkU29sdXRpb24pIHtcbiAgICBwb3N0TWVzc2FnZShbXCJzb2x1dGlvbnNcIiwgc29sdXRpb25zXSlcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcImFzayBmYWlsZWRcIilcbiAgICBjb25zb2xlLmxvZyhjbWEpXG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gcHJvY2Vzc1Njb3JlSW5mb3MoKSB7XG4vLyAgIGNvbnN0IGt2UGFpcnMgPSBPYmplY3QuZW50cmllcyhzY29yZUluZm9zWzBdKVxuLy8gICBmb3IgKGxldCBbc2NvcmVLZXksIHNjb3JlVmFsXSBvZiBrdlBhaXJzKSB7XG4vLyAgICAgY29uc3Qgc2NvcmVWYWxDb25zdHJ1Y3Rvck5hbWUgPSBzY29yZVZhbC5jb25zdHJ1Y3Rvci5uYW1lXG4vLyAgICAgaWYgKCFzY29yZVZhbENvbnN0cnVjdG9yTmFtZS5pbmNsdWRlcyhcIkFycmF5XCIpKSB7XG4vLyAgICAgICBpZiAoIXNjb3JlSW5mb1N1bW1hcnlJbml0aWFsaXplZCkge1xuLy8gICAgICAgICBzY29yZUluZm9TdW1tYXJ5W3Njb3JlS2V5XSA9IFtdXG4vLyAgICAgICB9XG4vLyAgICAgICBmb3IgKGxldCBwb3BJZHggPSAwOyBwb3BJZHggPCBwb3BzaXplOyBwb3BJZHgrKykge1xuLy8gICAgICAgICBzY29yZUluZm9TdW1tYXJ5W3Njb3JlS2V5XS5wdXNoKHNjb3JlSW5mb3NbcG9wSWR4XVtzY29yZUtleV0pXG4vLyAgICAgICB9XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIC8vIElmIHRoZSBzY29yZSB2YWx1ZSBpcyBhbiBhcnJheSxcbi8vICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBrZXkgZm9yIGVhY2ggZWxlbWVudFxuLy8gICAgICAgLy8gb2YgdGhhdCBhcnJheSB0byBmbGF0dGVuIHRoZSBzdW1tYXJ5LlxuLy8gICAgICAgZm9yIChsZXQgc2NvcmVWYWxJZHggPSAwOyBzY29yZVZhbElkeCA8IHNjb3JlVmFsLmxlbmd0aDsgc2NvcmVWYWxJZHgrKykge1xuLy8gICAgICAgICBjb25zdCBhcnJheUtleSA9IGAke3Njb3JlS2V5fV8ke3Njb3JlVmFsSWR4fWBcbi8vICAgICAgICAgaWYgKCFzY29yZUluZm9TdW1tYXJ5SW5pdGlhbGl6ZWQpIHtcbi8vICAgICAgICAgICBzY29yZUluZm9TdW1tYXJ5W2FycmF5S2V5XSA9IFtdXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZm9yIChsZXQgcG9wSWR4ID0gMDsgcG9wSWR4IDwgcG9wc2l6ZTsgcG9wSWR4KyspIHtcbi8vICAgICAgICAgICBzY29yZUluZm9TdW1tYXJ5W2FycmF5S2V5XS5wdXNoKFxuLy8gICAgICAgICAgICAgc2NvcmVJbmZvc1twb3BJZHhdW3Njb3JlS2V5XVtzY29yZVZhbElkeF1cbi8vICAgICAgICAgICApXG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vICAgaWYgKCFzY29yZUluZm9TdW1tYXJ5SW5pdGlhbGl6ZWQpIHtcbi8vICAgICBzY29yZUluZm9TdW1tYXJ5W1wiZXBOdW1cIl0gPSBbXVxuLy8gICB9XG4vLyAgIGZvciAobGV0IF8gPSAwOyBfIDwgcG9wc2l6ZTsgXysrKSB7XG4vLyAgICAgc2NvcmVJbmZvU3VtbWFyeVtcImVwTnVtXCJdLnB1c2goZXBOdW0pXG4vLyAgIH1cbi8vICAgZXBOdW0rK1xuLy8gICBzY29yZUluZm9TdW1tYXJ5SW5pdGlhbGl6ZWQgPSB0cnVlXG4vLyAgIGNvbnNvbGUuY2xlYXIoKVxuLy8gICBjb25zb2xlLmxvZyhzY29yZUluZm9TdW1tYXJ5KVxuLy8gICBzY29yZUluZm9zID0gW11cbi8vIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gdGhlIHN0YXJ0dXAgZnVuY3Rpb25cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5cdC8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuXHR2YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInNyY19qc19jbWEtbGliX2pzXCIsXCJzcmNfcGFnZXNfc3BvdF9nbG9iYWxzX2pzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL3Nwb3QvY21hLXdvcmtlci5qc1wiKSkpXG5cdF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5cdHJldHVybiBfX3dlYnBhY2tfZXhwb3J0c19fO1xufTtcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rcyBhbmQgc2libGluZyBjaHVua3MgZm9yIHRoZSBlbnRyeXBvaW50XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyB7XCJzcmNfanNfY21hLWxpYl9qc1wiOlwiOGU3YjYyNGQ5NDBkZDMyNTMzNGRcIixcInNyY19wYWdlc19zcG90X2dsb2JhbHNfanNcIjpcImZjODM0YzUyNmQxYjkxOWI1NzI1XCJ9W2NodW5rSWRdICsgXCIuanNcIjtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYWxsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRiA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3Ncbi8vIFwiMVwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJzcmNfcGFnZXNfc3BvdF9jbWEtd29ya2VyX2pzXCI6IDFcbn07XG5cbi8vIGltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZ1xudmFyIGluc3RhbGxDaHVuayA9IChkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0d2hpbGUoY2h1bmtJZHMubGVuZ3RoKVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkcy5wb3AoKV0gPSAxO1xuXHRwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaSA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHQvLyBcIjFcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcblx0aWYoIWluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRpbXBvcnRTY3JpcHRzKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKSk7XG5cdFx0fVxuXHR9XG59O1xuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3dlYnBhY2tfdGVzdFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJwYWNrX3Rlc3RcIl0gfHwgW107XG52YXIgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24gPSBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IGluc3RhbGxDaHVuaztcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdCIsInZhciBuZXh0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy54O1xuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZShcInNyY19qc19jbWEtbGliX2pzXCIpLFxuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZShcInNyY19wYWdlc19zcG90X2dsb2JhbHNfanNcIilcblx0XSkudGhlbihuZXh0KTtcbn07IiwiIiwiLy8gcnVuIHN0YXJ0dXBcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iLCIiXSwibmFtZXMiOlsiQ01BIiwiY21hU2lnbWEiLCJuV29ya2VycyIsImNtYU1lYW5Jbml0IiwiY21hIiwicG9wc2l6ZSIsImluaXRpYWxpemVkIiwic2NvcmVJbmZvU3VtbWFyeUluaXRpYWxpemVkIiwiZXBOdW0iLCJvbm1lc3NhZ2UiLCJlIiwiZGF0YSIsImluZm8iLCJtc2ciLCJjbWFNZWFuIiwic2xpY2UiLCJjcmVhdHVyZXNQZXJXb3JrZXIiLCJ1bmRlZmluZWQiLCJzZW5kTmV3U29sdXRpb25zIiwidGVsbFN1Y2Nlc3MiLCJ0ZWxsIiwiY29uc29sZSIsImxvZyIsImJhZFNvbHV0aW9uIiwic29sdXRpb25zIiwiRmxvYXQzMkFycmF5Iiwibl9kaW0iLCJpIiwic29sdXRpb24iLCJhc2siLCJjb25zdHJ1Y3RvciIsImoiLCJsZW5ndGgiLCJtZWFuIiwicG9zdE1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9