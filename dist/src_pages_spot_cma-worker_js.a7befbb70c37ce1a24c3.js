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
  } // console.log(cma.mean)


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
/******/ 			return "" + chunkId + "." + {"src_js_cma-lib_js":"11832745cbf7350984ce","src_pages_spot_globals_js":"f587fddad91a7ad08d8d"}[chunkId] + ".js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX3Nwb3RfY21hLXdvcmtlcl9qcy5hN2JlZmJiNzBjMzdjZTFhMjRjMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQSxJQUFJSSxHQUFKO0FBQUEsSUFDRUMsT0FERjtBQUFBLElBRUU7QUFDQTtBQUNBQyxXQUFXLEdBQUcsS0FKaEI7QUFBQSxJQUtFO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLDJCQUEyQixHQUFHLEtBVGhDO0FBQUEsSUFVRUMsS0FBSyxHQUFHLENBVlY7O0FBWUFDLFNBQVMsR0FBRyxtQkFBQ0MsQ0FBRCxFQUFPO0FBQ2pCLCtCQUFvQkEsQ0FBQyxDQUFDQyxJQUF0QjtBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxHQUFiOztBQUNBLE1BQUlELElBQUksSUFBSSxVQUFSLElBQXNCLENBQUNOLFdBQTNCLEVBQXdDO0FBQ3RDO0FBQ0EsUUFBTVEsT0FBTyxHQUFHWCwwREFBQSxFQUFoQjtBQUNBRSxJQUFBQSxPQUFPLEdBQUdRLEdBQUcsQ0FBQ0csa0JBQUosR0FBeUJkLGlEQUFuQztBQUNBRSxJQUFBQSxHQUFHLEdBQUcsSUFBSUosK0NBQUosQ0FBUWMsT0FBUixFQUFpQmIsaURBQWpCLEVBQTJCSSxPQUEzQixFQUFvQ1ksU0FBcEMsRUFBK0NBLFNBQS9DLENBQU47QUFDQUMsSUFBQUEsZ0JBQWdCO0FBQ2hCWixJQUFBQSxXQUFXLEdBQUcsSUFBZDtBQUNELEdBUEQsTUFPTyxJQUFJTSxJQUFJLElBQUksaUJBQVosRUFBK0I7QUFDcEMsUUFBTU8sV0FBVyxHQUFHZixHQUFHLENBQUNnQixJQUFKLENBQVNQLEdBQVQsQ0FBcEI7O0FBQ0EsUUFBSSxDQUFDTSxXQUFMLEVBQWtCO0FBQ2hCRSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbEIsR0FBWjtBQUNELEtBSEQsTUFHTztBQUNMYyxNQUFBQSxnQkFBZ0I7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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsYUFBYTtXQUNiO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7Ozs7V0NwQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFTkE7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS8uL3NyYy9wYWdlcy9zcG90L2NtYS13b3JrZXIuanMiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9pbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9zdGFydHVwIGNodW5rIGRlcGVuZGVuY2llcyIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ01BIH0gZnJvbSBcIi4uLy4uL2pzL2NtYS1saWIuanNcIlxuaW1wb3J0IHsgY21hU2lnbWEsIG5Xb3JrZXJzLCBjbWFNZWFuSW5pdCB9IGZyb20gXCIuL2dsb2JhbHMuanNcIlxuXG4vLyBjb25zdCBjbWFTaWdtYSA9IDEwMFxubGV0IGNtYSxcbiAgcG9wc2l6ZSxcbiAgLy8gd2VpZ2h0Q291bnQsXG4gIC8vIGJpYXNDb3VudCxcbiAgaW5pdGlhbGl6ZWQgPSBmYWxzZSxcbiAgLy8gc29sdXRpb25zU2NvcmVzID0gW10sXG4gIC8vIHNjb3JlU29sdXRpb25JbmZvcyA9IFtdLFxuICAvLyBzY29yZUluZm9zID0gW10sXG4gIC8vIHNjb3JlSW5mb1N1bW1hcnkgPSB7fSxcbiAgc2NvcmVJbmZvU3VtbWFyeUluaXRpYWxpemVkID0gZmFsc2UsXG4gIGVwTnVtID0gMFxuXG5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICBjb25zdCBbaW5mbywgbXNnXSA9IGUuZGF0YVxuICBpZiAoaW5mbyA9PSBcImluaXRJbmZvXCIgJiYgIWluaXRpYWxpemVkKSB7XG4gICAgLy8gY29uc3QgY21hTWVhbiA9IG5ldyBGbG9hdDMyQXJyYXkobXNnLm5fZGltKS5maWxsKDApXG4gICAgY29uc3QgY21hTWVhbiA9IGNtYU1lYW5Jbml0LnNsaWNlKClcbiAgICBwb3BzaXplID0gbXNnLmNyZWF0dXJlc1BlcldvcmtlciAqIG5Xb3JrZXJzXG4gICAgY21hID0gbmV3IENNQShjbWFNZWFuLCBjbWFTaWdtYSwgcG9wc2l6ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXG4gICAgc2VuZE5ld1NvbHV0aW9ucygpXG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlXG4gIH0gZWxzZSBpZiAoaW5mbyA9PSBcInNvbHV0aW9uc1Njb3Jlc1wiKSB7XG4gICAgY29uc3QgdGVsbFN1Y2Nlc3MgPSBjbWEudGVsbChtc2cpXG4gICAgaWYgKCF0ZWxsU3VjY2Vzcykge1xuICAgICAgY29uc29sZS5sb2coXCJ0ZWxsIGZhaWxlZFwiKVxuICAgICAgY29uc29sZS5sb2coY21hKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZW5kTmV3U29sdXRpb25zKClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VuZE5ld1NvbHV0aW9ucygpIHtcbiAgbGV0IGJhZFNvbHV0aW9uID0gZmFsc2VcbiAgY29uc3Qgc29sdXRpb25zID0gbmV3IEZsb2F0MzJBcnJheShwb3BzaXplICogY21hLm5fZGltKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcHNpemU7IGkrKykge1xuICAgIGNvbnN0IHNvbHV0aW9uID0gY21hLmFzaygpXG4gICAgaWYgKHNvbHV0aW9uLmNvbnN0cnVjdG9yICE9PSBGbG9hdDMyQXJyYXkpIHtcbiAgICAgIGJhZFNvbHV0aW9uID0gdHJ1ZVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzb2x1dGlvbi5sZW5ndGg7IGorKykge1xuICAgICAgc29sdXRpb25zW2kgKiBzb2x1dGlvbi5sZW5ndGggKyBqXSA9IHNvbHV0aW9uW2pdXG4gICAgfVxuICB9XG4gIC8vIGNvbnNvbGUubG9nKGNtYS5tZWFuKVxuICBpZiAoIWJhZFNvbHV0aW9uKSB7XG4gICAgcG9zdE1lc3NhZ2UoW1wic29sdXRpb25zXCIsIHNvbHV0aW9uc10pXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJhc2sgZmFpbGVkXCIpXG4gICAgY29uc29sZS5sb2coY21hKVxuICB9XG59XG5cbi8vIGZ1bmN0aW9uIHByb2Nlc3NTY29yZUluZm9zKCkge1xuLy8gICBjb25zdCBrdlBhaXJzID0gT2JqZWN0LmVudHJpZXMoc2NvcmVJbmZvc1swXSlcbi8vICAgZm9yIChsZXQgW3Njb3JlS2V5LCBzY29yZVZhbF0gb2Yga3ZQYWlycykge1xuLy8gICAgIGNvbnN0IHNjb3JlVmFsQ29uc3RydWN0b3JOYW1lID0gc2NvcmVWYWwuY29uc3RydWN0b3IubmFtZVxuLy8gICAgIGlmICghc2NvcmVWYWxDb25zdHJ1Y3Rvck5hbWUuaW5jbHVkZXMoXCJBcnJheVwiKSkge1xuLy8gICAgICAgaWYgKCFzY29yZUluZm9TdW1tYXJ5SW5pdGlhbGl6ZWQpIHtcbi8vICAgICAgICAgc2NvcmVJbmZvU3VtbWFyeVtzY29yZUtleV0gPSBbXVxuLy8gICAgICAgfVxuLy8gICAgICAgZm9yIChsZXQgcG9wSWR4ID0gMDsgcG9wSWR4IDwgcG9wc2l6ZTsgcG9wSWR4KyspIHtcbi8vICAgICAgICAgc2NvcmVJbmZvU3VtbWFyeVtzY29yZUtleV0ucHVzaChzY29yZUluZm9zW3BvcElkeF1bc2NvcmVLZXldKVxuLy8gICAgICAgfVxuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAvLyBJZiB0aGUgc2NvcmUgdmFsdWUgaXMgYW4gYXJyYXksXG4vLyAgICAgICAvLyBjcmVhdGUgYSBuZXcga2V5IGZvciBlYWNoIGVsZW1lbnRcbi8vICAgICAgIC8vIG9mIHRoYXQgYXJyYXkgdG8gZmxhdHRlbiB0aGUgc3VtbWFyeS5cbi8vICAgICAgIGZvciAobGV0IHNjb3JlVmFsSWR4ID0gMDsgc2NvcmVWYWxJZHggPCBzY29yZVZhbC5sZW5ndGg7IHNjb3JlVmFsSWR4KyspIHtcbi8vICAgICAgICAgY29uc3QgYXJyYXlLZXkgPSBgJHtzY29yZUtleX1fJHtzY29yZVZhbElkeH1gXG4vLyAgICAgICAgIGlmICghc2NvcmVJbmZvU3VtbWFyeUluaXRpYWxpemVkKSB7XG4vLyAgICAgICAgICAgc2NvcmVJbmZvU3VtbWFyeVthcnJheUtleV0gPSBbXVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGZvciAobGV0IHBvcElkeCA9IDA7IHBvcElkeCA8IHBvcHNpemU7IHBvcElkeCsrKSB7XG4vLyAgICAgICAgICAgc2NvcmVJbmZvU3VtbWFyeVthcnJheUtleV0ucHVzaChcbi8vICAgICAgICAgICAgIHNjb3JlSW5mb3NbcG9wSWR4XVtzY29yZUtleV1bc2NvcmVWYWxJZHhdXG4vLyAgICAgICAgICAgKVxuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIGlmICghc2NvcmVJbmZvU3VtbWFyeUluaXRpYWxpemVkKSB7XG4vLyAgICAgc2NvcmVJbmZvU3VtbWFyeVtcImVwTnVtXCJdID0gW11cbi8vICAgfVxuLy8gICBmb3IgKGxldCBfID0gMDsgXyA8IHBvcHNpemU7IF8rKykge1xuLy8gICAgIHNjb3JlSW5mb1N1bW1hcnlbXCJlcE51bVwiXS5wdXNoKGVwTnVtKVxuLy8gICB9XG4vLyAgIGVwTnVtKytcbi8vICAgc2NvcmVJbmZvU3VtbWFyeUluaXRpYWxpemVkID0gdHJ1ZVxuLy8gICBjb25zb2xlLmNsZWFyKClcbi8vICAgY29uc29sZS5sb2coc2NvcmVJbmZvU3VtbWFyeSlcbi8vICAgc2NvcmVJbmZvcyA9IFtdXG4vLyB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIHRoZSBzdGFydHVwIGZ1bmN0aW9uXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuXHQvLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcblx0dmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJzcmNfanNfY21hLWxpYl9qc1wiLFwic3JjX3BhZ2VzX3Nwb3RfZ2xvYmFsc19qc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9zcG90L2NtYS13b3JrZXIuanNcIikpKVxuXHRfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuXHRyZXR1cm4gX193ZWJwYWNrX2V4cG9ydHNfXztcbn07XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3MgYW5kIHNpYmxpbmcgY2h1bmtzIGZvciB0aGUgZW50cnlwb2ludFxuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsge1wic3JjX2pzX2NtYS1saWJfanNcIjpcIjExODMyNzQ1Y2JmNzM1MDk4NGNlXCIsXCJzcmNfcGFnZXNfc3BvdF9nbG9iYWxzX2pzXCI6XCJmNTg3ZmRkYWQ5MWE3YWQwOGQ4ZFwifVtjaHVua0lkXSArIFwiLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4vLyBcIjFcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwic3JjX3BhZ2VzX3Nwb3RfY21hLXdvcmtlcl9qc1wiOiAxXG59O1xuXG4vLyBpbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmdcbnZhciBpbnN0YWxsQ2h1bmsgPSAoZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdHdoaWxlKGNodW5rSWRzLmxlbmd0aClcblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHMucG9wKCldID0gMTtcblx0cGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmkgPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0Ly8gXCIxXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG5cdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0aW1wb3J0U2NyaXB0cyhfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCkpO1xuXHRcdH1cblx0fVxufTtcblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0aXBweV9wcm9qZWN0X3dlYnNpdGVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rdGlwcHlfcHJvamVjdF93ZWJzaXRlXCJdIHx8IFtdO1xudmFyIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uID0gY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSBpbnN0YWxsQ2h1bms7XG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3QiLCJ2YXIgbmV4dCA9IF9fd2VicGFja19yZXF1aXJlX18ueDtcbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKFtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJzcmNfanNfY21hLWxpYl9qc1wiKSxcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJzcmNfcGFnZXNfc3BvdF9nbG9iYWxzX2pzXCIpXG5cdF0pLnRoZW4obmV4dCk7XG59OyIsIiIsIi8vIHJ1biBzdGFydHVwXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIiwiIl0sIm5hbWVzIjpbIkNNQSIsImNtYVNpZ21hIiwibldvcmtlcnMiLCJjbWFNZWFuSW5pdCIsImNtYSIsInBvcHNpemUiLCJpbml0aWFsaXplZCIsInNjb3JlSW5mb1N1bW1hcnlJbml0aWFsaXplZCIsImVwTnVtIiwib25tZXNzYWdlIiwiZSIsImRhdGEiLCJpbmZvIiwibXNnIiwiY21hTWVhbiIsInNsaWNlIiwiY3JlYXR1cmVzUGVyV29ya2VyIiwidW5kZWZpbmVkIiwic2VuZE5ld1NvbHV0aW9ucyIsInRlbGxTdWNjZXNzIiwidGVsbCIsImNvbnNvbGUiLCJsb2ciLCJiYWRTb2x1dGlvbiIsInNvbHV0aW9ucyIsIkZsb2F0MzJBcnJheSIsIm5fZGltIiwiaSIsInNvbHV0aW9uIiwiYXNrIiwiY29uc3RydWN0b3IiLCJqIiwibGVuZ3RoIiwicG9zdE1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9