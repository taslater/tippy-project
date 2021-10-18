/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/cmaes-demo/globals.js":
/*!*****************************************!*\
  !*** ./src/pages/cmaes-demo/globals.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nVizWorkers": () => (/* binding */ nVizWorkers),
/* harmony export */   "canvasDim": () => (/* binding */ canvasDim),
/* harmony export */   "objFnInit": () => (/* binding */ objFnInit)
/* harmony export */ });
var nVizWorkers = 8,
    canvasDim = 800,
    objFnInit = "ackley";

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
  bohachevsky1: function bohachevsky1(inputs) {
    var x1 = inputs[0];
    var x2 = inputs[1];
    var term1 = x1 * x1;
    var term2 = 2 * x2 * x2;
    var term3 = -0.3 * Math.cos(3 * Math.PI * x1);
    var term4 = -0.4 * Math.cos(4 * Math.PI * x2);
    return term1 + term2 + term3 + term4 + 0.7;
  },
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
objFns.rastrigin.xyLim = 5.12;
objFns.griewank.xyLim = 600;

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/cmaes-demo/index.css":
/*!****************************************!*\
  !*** ./src/pages/cmaes-demo/index.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/************************************************************************/
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
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"src_pages_cmaes-demo_cma-worker_js":"fc1af59d01440ca81a2c","src_pages_cmaes-demo_viz-worker_js":"ef253843265e07b4950c"}[chunkId] + ".js";
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"cmaes-demo": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/pages/cmaes-demo/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _obj_fns_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obj-fns.js */ "./src/pages/cmaes-demo/obj-fns.js");
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.js */ "./src/pages/cmaes-demo/globals.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

__webpack_require__(/*! ./index.css */ "./src/pages/cmaes-demo/index.css");

__webpack_require__(/*! ../../main.css */ "./src/main.css");



var zoom = 1;
var canvas_bg = document.getElementById("canvas-bg");
var canvas_fg = document.getElementById("canvas-fg");
var canvas_div = document.getElementById("canvas-div");
canvas_div.setAttribute("style", "width:".concat(_globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim, "px; height:").concat(_globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim, "px"));

for (var _i = 0, _arr = [canvas_fg, canvas_bg]; _i < _arr.length; _i++) {
  var canvas = _arr[_i];
  canvas.width = _globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim;
  canvas.height = _globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim;
}

var ctx_bg = canvas_bg.getContext("2d");
var ctx_fg = canvas_fg.getContext("2d");
var imageDataBg = ctx_bg.createImageData(_globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim, _globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim);
var imageDataBgData = imageDataBg.data;
imageDataBgData.fill(255);
var fnSelect = document.getElementById("obj-fn-select");

for (var _i2 = 0, _Object$keys = Object.keys(_obj_fns_js__WEBPACK_IMPORTED_MODULE_0__.objFns); _i2 < _Object$keys.length; _i2++) {
  var k = _Object$keys[_i2];
  var option = document.createElement("option");
  option.value = k;
  option.text = _obj_fns_js__WEBPACK_IMPORTED_MODULE_0__.objFns[k].fancyName;

  if (k === _globals_js__WEBPACK_IMPORTED_MODULE_1__.objFnInit) {
    option.selected = true;
  }

  fnSelect.add(option);
}

fnSelect.addEventListener("change", function (e) {
  var fnName = e.target.value;

  var _iterator = _createForOfIteratorHelper(vizWorkers),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var worker = _step.value;
      worker.postMessage(["fnName", fnName]);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  cmaWorker.postMessage(["fnName", fnName]);
  zoom = 1;
});
var zoomInBtn = document.getElementById("zoom-in");
zoomInBtn.addEventListener("click", function () {
  zoom *= 1.1;
  updateZoom();
});
var zoomOutBtn = document.getElementById("zoom-out");
zoomOutBtn.addEventListener("click", function () {
  zoom /= 1.1;
  updateZoom();
});

function updateZoom() {
  var _iterator2 = _createForOfIteratorHelper(vizWorkers),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var worker = _step2.value;
      worker.postMessage(["zoom", zoom]);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  cmaWorker.postMessage(["zoom", zoom]);
}

var stepBtn = document.getElementById("step-btn");
stepBtn.addEventListener("click", function () {
  console.log("step");
  cmaWorker.postMessage(["step", true]);
});
var scoreLimsReceived,
    minScore,
    maxScore,
    imagesReceived = 0;
resetScoreLims();
var cmaWorker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_pages_cmaes-demo_cma-worker_js"), __webpack_require__.b));

cmaWorker.onmessage = function (e) {
  var _e$data = _slicedToArray(e.data, 2),
      info = _e$data[0],
      msg = _e$data[1];

  if (info === "solutions") {
    drawSolutions(msg, ctx_fg);
  }
};

function drawSolutions(solutions, ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.save();
  ctx.translate(0.5 * ctx.canvas.width, 0.5 * ctx.canvas.height);

  for (var i = 0; i < solutions.length; i += 2) {
    drawMarker(solutions[i], solutions[i + 1], ctx);
  }

  ctx.restore();
}

function drawMarker(x, y, ctx) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.moveTo(0, -5);
  ctx.lineTo(0, +5);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-5, 0);
  ctx.lineTo(+5, 0);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.restore();
}

var ys = [];
var vizWorkers = [];

var _loop = function _loop(workerIdx) {
  var vizWorker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_pages_cmaes-demo_viz-worker_js"), __webpack_require__.b));
  vizWorker.postMessage(["workerID", workerIdx]);

  vizWorker.onmessage = function (e) {
    var _e$data2 = _slicedToArray(e.data, 2),
        info = _e$data2[0],
        msg = _e$data2[1];

    if (info === "scoreLims") {
      updateScoreLims.apply(void 0, _toConsumableArray(msg).concat([vizWorkers]));
    } else if (info === "imageDataArray") {
      updateImageData(workerIdx, msg);
    }
  };

  vizWorkers.push(vizWorker);
};

for (var workerIdx = 0; workerIdx < _globals_js__WEBPACK_IMPORTED_MODULE_1__.nVizWorkers; workerIdx++) {
  _loop(workerIdx);
}

function resetScoreLims() {
  minScore = Infinity;
  maxScore = -Infinity;
  scoreLimsReceived = 0;
}

function updateScoreLims(_minScore, _maxScore, vizWorkers) {
  if (_minScore < minScore) {
    minScore = _minScore;
  }

  if (_maxScore > maxScore) {
    maxScore = _maxScore;
  }

  scoreLimsReceived++;

  if (scoreLimsReceived === _globals_js__WEBPACK_IMPORTED_MODULE_1__.nVizWorkers) {
    var _iterator3 = _createForOfIteratorHelper(vizWorkers),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var worker = _step3.value;
        worker.postMessage(["scoreLims", [minScore, maxScore]]);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    resetScoreLims();
  }
}

function updateImageData(workerIdx, msg) {
  var arrayIdx = workerIdx / _globals_js__WEBPACK_IMPORTED_MODULE_1__.nVizWorkers * imageDataBgData.length;

  for (var i = 0; i < msg.length; i += 3) {
    for (var j = 0; j < 3; j++) {
      imageDataBgData[arrayIdx + j] = msg[i + j];
    }

    arrayIdx += 4;
  }

  imagesReceived++;

  if (imagesReceived === _globals_js__WEBPACK_IMPORTED_MODULE_1__.nVizWorkers) {
    requestAnimationFrame(function () {
      ctx_bg.putImageData(imageDataBg, 0, 0);
    });
    imagesReceived = 0;
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlzRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCbEUsTUFBQUEsZUFBZSxDQUFDaUUsUUFBUSxHQUFHQyxDQUFaLENBQWYsR0FBZ0MzQixHQUFHLENBQUMzRSxDQUFDLEdBQUdzRyxDQUFMLENBQW5DO0FBQ0Q7O0FBQ0RELElBQUFBLFFBQVEsSUFBSSxDQUFaO0FBQ0Q7O0FBQ0RuQyxFQUFBQSxjQUFjOztBQUNkLE1BQUlBLGNBQWMsS0FBS2pGLG9EQUF2QixFQUFvQztBQUNsQ3NILElBQUFBLHFCQUFxQixDQUFDLFlBQU07QUFDMUJ4RSxNQUFBQSxNQUFNLENBQUN5RSxZQUFQLENBQW9CdEUsV0FBcEIsRUFBaUMsQ0FBakMsRUFBb0MsQ0FBcEM7QUFDRCxLQUZvQixDQUFyQjtBQUdBZ0MsSUFBQUEsY0FBYyxHQUFHLENBQWpCO0FBQ0Q7QUFDRixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvcGFnZXMvY21hZXMtZGVtby9vYmotZm5zLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9tYWluLmNzcz83NmJiIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL2luZGV4LmNzcz8zNDJkIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvcGFnZXMvY21hZXMtZGVtby9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgblZpeldvcmtlcnMgPSA4LFxuICBjYW52YXNEaW0gPSA4MDAsXG4gIG9iakZuSW5pdCA9IFwiYWNrbGV5XCJcbiIsIi8vIHtcbi8vICAgYWNrbGV5OiBcIkFja2xleVwiLFxuLy8gICBib2hhY2hldnNreTE6IFwiQm9oYWNoZXZza3kgTm8uMVwiLFxuLy8gICBncmlld2FuazogXCJHcmlld2Fua1wiLFxuLy8gICByYXN0cmlnaW46IFwiUmFzdHJpZ2luXCIsXG4vLyB9XG5cbmV4cG9ydCBjb25zdCBvYmpGbnMgPSB7XG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vYWNrbGV5Lmh0bWxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9Db2RlL2Fja2xleW0uaHRtbFxuICBhY2tsZXk6IChpbnB1dHMpID0+IHtcbiAgICAvLyBkZWZhdWx0IGE9MjAsIGI9MC4yLCBjPTJwaVxuICAgIGNvbnN0IGEgPSAyMDAwMDAwLFxuICAgICAgYiA9IDAuMixcbiAgICAgIGMgPSAyICogTWF0aC5QSVxuICAgIC8vIGxldCBkID0gaW5wdXRzLmxlbmd0aFxuICAgIGNvbnN0IGQgPSAyLFxuICAgICAgZF9pbnYgPSAwLjUgLy8gKDEgLyBkKVxuICAgIGxldCBzdW0xID0gMCxcbiAgICAgIHN1bTIgPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIGxldCB4aSA9IGlucHV0c1tpXVxuICAgICAgc3VtMSArPSB4aSAqIHhpXG4gICAgICBzdW0yICs9IE1hdGguY29zKGMgKiB4aSlcbiAgICB9XG4gICAgLy8gbGV0IGRfaW52ID0gMSAvIGRcbiAgICBsZXQgdGVybTEgPSAtYSAqIE1hdGguZXhwKC1iICogTWF0aC5zcXJ0KHN1bTEgKiBkX2ludikpLFxuICAgICAgdGVybTIgPSAtTWF0aC5leHAoc3VtMiAqIGRfaW52KVxuICAgIHJldHVybiB0ZXJtMSArIHRlcm0yICsgYSArIE1hdGguRVxuICB9LFxuICAvLyBodHRwOi8vYmVuY2htYXJrZmNucy54eXovYmVuY2htYXJrZmNucy9ib2hhY2hldnNreW4xZmNuLmh0bWxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9Db2RlL2JvaGExbS5odG1sXG4gIGJvaGFjaGV2c2t5MTogKGlucHV0cykgPT4ge1xuICAgIGxldCB4MSA9IGlucHV0c1swXVxuICAgIGxldCB4MiA9IGlucHV0c1sxXVxuXG4gICAgbGV0IHRlcm0xID0geDEgKiB4MVxuICAgIGxldCB0ZXJtMiA9IDIgKiB4MiAqIHgyXG4gICAgbGV0IHRlcm0zID0gLTAuMyAqIE1hdGguY29zKDMgKiBNYXRoLlBJICogeDEpXG4gICAgbGV0IHRlcm00ID0gLTAuNCAqIE1hdGguY29zKDQgKiBNYXRoLlBJICogeDIpXG5cbiAgICByZXR1cm4gdGVybTEgKyB0ZXJtMiArIHRlcm0zICsgdGVybTQgKyAwLjdcbiAgfSxcbiAgZ3JpZXdhbms6IChpbnB1dHMpID0+IHtcbiAgICBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBsZXQgc3VtID0gMFxuICAgIGxldCBwcm9kID0gMVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bSArPSAoeGkgKiB4aSkgLyA0MDAwXG4gICAgICBwcm9kICo9IE1hdGguY29zKHhpIC8gTWF0aC5zcXJ0KGkgKyAxKSlcbiAgICB9XG4gICAgcmV0dXJuIHN1bSAtIHByb2QgKyAxXG4gIH0sXG4gIHJhc3RyaWdpbjogKGlucHV0cykgPT4ge1xuICAgIGxldCBkID0gaW5wdXRzLmxlbmd0aFxuICAgIGxldCBzdW0gPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIGxldCB4aSA9IGlucHV0c1tpXVxuICAgICAgc3VtICs9IHhpICogeGkgLSAxMCAqIE1hdGguY29zKDIgKiBNYXRoLlBJICogeGkpXG4gICAgfVxuICAgIHJldHVybiAxMCAqIGQgKyBzdW1cbiAgfSxcbn1cblxuLy8gZmFuY3kgbmFtZXMgZm9yIHNlbGVjdCBtZW51XG5vYmpGbnMuYWNrbGV5LmZhbmN5TmFtZSA9IFwiQWNrbGV5XCJcbm9iakZucy5ib2hhY2hldnNreTEuZmFuY3lOYW1lID0gXCJCb2hhY2hldnNreSBOby4xXCJcbm9iakZucy5ncmlld2Fuay5mYW5jeU5hbWUgPSBcIkdyaWV3YW5rXCJcbm9iakZucy5yYXN0cmlnaW4uZmFuY3lOYW1lID0gXCJSYXN0cmlnaW5cIlxuXG4vLyBmbkxpbXMgZm9yIGRpc3BsYXkgbGltaXRzXG5vYmpGbnMuYWNrbGV5Lnh5TGltID0gMzIuNzY4XG5vYmpGbnMuYm9oYWNoZXZza3kxLnh5TGltID0gMTAwXG5vYmpGbnMucmFzdHJpZ2luLnh5TGltID0gNS4xMlxub2JqRm5zLmdyaWV3YW5rLnh5TGltID0gNjAwXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsge1wic3JjX3BhZ2VzX2NtYWVzLWRlbW9fY21hLXdvcmtlcl9qc1wiOlwiZmMxYWY1OWQwMTQ0MGNhODFhMmNcIixcInNyY19wYWdlc19jbWFlcy1kZW1vX3Zpei13b3JrZXJfanNcIjpcImVmMjUzODQzMjY1ZTA3YjQ5NTBjXCJ9W2NodW5rSWRdICsgXCIuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImNtYWVzLWRlbW9cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsInJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKVxucmVxdWlyZShcIi4uLy4uL21haW4uY3NzXCIpXG5pbXBvcnQgeyBvYmpGbnMgfSBmcm9tIFwiLi9vYmotZm5zLmpzXCJcbmltcG9ydCB7IGNhbnZhc0RpbSwgblZpeldvcmtlcnMsIG9iakZuSW5pdCB9IGZyb20gXCIuL2dsb2JhbHMuanNcIlxuXG5sZXQgem9vbSA9IDFcblxuY29uc3QgY2FudmFzX2JnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtYmdcIilcbmNvbnN0IGNhbnZhc19mZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLWZnXCIpXG5jb25zdCBjYW52YXNfZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtZGl2XCIpXG5jYW52YXNfZGl2LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGB3aWR0aDoke2NhbnZhc0RpbX1weDsgaGVpZ2h0OiR7Y2FudmFzRGltfXB4YClcbmZvciAobGV0IGNhbnZhcyBvZiBbY2FudmFzX2ZnLCBjYW52YXNfYmddKSB7XG4gIGNhbnZhcy53aWR0aCA9IGNhbnZhc0RpbVxuICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzRGltXG59XG5cbmNvbnN0IGN0eF9iZyA9IGNhbnZhc19iZy5nZXRDb250ZXh0KFwiMmRcIilcbmNvbnN0IGN0eF9mZyA9IGNhbnZhc19mZy5nZXRDb250ZXh0KFwiMmRcIilcbmNvbnN0IGltYWdlRGF0YUJnID0gY3R4X2JnLmNyZWF0ZUltYWdlRGF0YShjYW52YXNEaW0sIGNhbnZhc0RpbSlcbmNvbnN0IGltYWdlRGF0YUJnRGF0YSA9IGltYWdlRGF0YUJnLmRhdGFcbmltYWdlRGF0YUJnRGF0YS5maWxsKDI1NSlcblxuY29uc3QgZm5TZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9iai1mbi1zZWxlY3RcIilcblxuZm9yIChsZXQgayBvZiBPYmplY3Qua2V5cyhvYmpGbnMpKSB7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgb3B0aW9uLnZhbHVlID0ga1xuICBvcHRpb24udGV4dCA9IG9iakZuc1trXS5mYW5jeU5hbWVcbiAgaWYgKGsgPT09IG9iakZuSW5pdCkge1xuICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWVcbiAgfVxuICBmblNlbGVjdC5hZGQob3B0aW9uKVxufVxuXG5mblNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gIGNvbnN0IGZuTmFtZSA9IGUudGFyZ2V0LnZhbHVlXG4gIGZvciAobGV0IHdvcmtlciBvZiB2aXpXb3JrZXJzKSB7XG4gICAgd29ya2VyLnBvc3RNZXNzYWdlKFtcImZuTmFtZVwiLCBmbk5hbWVdKVxuICB9XG4gIGNtYVdvcmtlci5wb3N0TWVzc2FnZShbXCJmbk5hbWVcIiwgZm5OYW1lXSlcbiAgem9vbSA9IDFcbn0pXG5cbmNvbnN0IHpvb21JbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiem9vbS1pblwiKVxuem9vbUluQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHpvb20gKj0gMS4xXG4gIHVwZGF0ZVpvb20oKVxufSlcblxuY29uc3Qgem9vbU91dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiem9vbS1vdXRcIilcbnpvb21PdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgem9vbSAvPSAxLjFcbiAgdXBkYXRlWm9vbSgpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVab29tKCkge1xuICBmb3IgKGxldCB3b3JrZXIgb2Ygdml6V29ya2Vycykge1xuICAgIHdvcmtlci5wb3N0TWVzc2FnZShbXCJ6b29tXCIsIHpvb21dKVxuICB9XG4gIGNtYVdvcmtlci5wb3N0TWVzc2FnZShbXCJ6b29tXCIsIHpvb21dKVxufVxuXG5jb25zdCBzdGVwQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGVwLWJ0blwiKVxuc3RlcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcInN0ZXBcIilcbiAgY21hV29ya2VyLnBvc3RNZXNzYWdlKFtcInN0ZXBcIiwgdHJ1ZV0pXG59KVxuXG5sZXQgc2NvcmVMaW1zUmVjZWl2ZWQsXG4gIG1pblNjb3JlLFxuICBtYXhTY29yZSxcbiAgaW1hZ2VzUmVjZWl2ZWQgPSAwXG5yZXNldFNjb3JlTGltcygpXG5cbmNvbnN0IGNtYVdvcmtlciA9IG5ldyBXb3JrZXIobmV3IFVSTChcIi4vY21hLXdvcmtlci5qc1wiLCBpbXBvcnQubWV0YS51cmwpKVxuXG5jbWFXb3JrZXIub25tZXNzYWdlID0gKGUpID0+IHtcbiAgY29uc3QgW2luZm8sIG1zZ10gPSBlLmRhdGFcbiAgaWYgKGluZm8gPT09IFwic29sdXRpb25zXCIpIHtcbiAgICBkcmF3U29sdXRpb25zKG1zZywgY3R4X2ZnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXdTb2x1dGlvbnMoc29sdXRpb25zLCBjdHgpIHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodClcbiAgY3R4LnNhdmUoKVxuICBjdHgudHJhbnNsYXRlKDAuNSAqIGN0eC5jYW52YXMud2lkdGgsIDAuNSAqIGN0eC5jYW52YXMuaGVpZ2h0KVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvbHV0aW9ucy5sZW5ndGg7IGkgKz0gMikge1xuICAgIGRyYXdNYXJrZXIoc29sdXRpb25zW2ldLCBzb2x1dGlvbnNbaSArIDFdLCBjdHgpXG4gIH1cbiAgY3R4LnJlc3RvcmUoKVxufVxuXG5mdW5jdGlvbiBkcmF3TWFya2VyKHgsIHksIGN0eCkge1xuICBjdHguc2F2ZSgpXG4gIGN0eC50cmFuc2xhdGUoeCwgeSlcblxuICBjdHguYmVnaW5QYXRoKClcbiAgY3R4Lm1vdmVUbygwLCAtNSlcbiAgY3R4LmxpbmVUbygwLCArNSlcbiAgY3R4LmxpbmVXaWR0aCA9IDNcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gIGN0eC5zdHJva2UoKVxuICBjdHgubGluZVdpZHRoID0gMVxuICBjdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCJcbiAgY3R4LnN0cm9rZSgpXG5cbiAgY3R4LmJlZ2luUGF0aCgpXG4gIGN0eC5tb3ZlVG8oLTUsIDApXG4gIGN0eC5saW5lVG8oKzUsIDApXG4gIGN0eC5saW5lV2lkdGggPSAzXG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICBjdHguc3Ryb2tlKClcbiAgY3R4LmxpbmVXaWR0aCA9IDFcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiXG4gIGN0eC5zdHJva2UoKVxuXG4gIGN0eC5yZXN0b3JlKClcbn1cblxuY29uc3QgeXMgPSBbXVxuY29uc3Qgdml6V29ya2VycyA9IFtdXG5mb3IgKGxldCB3b3JrZXJJZHggPSAwOyB3b3JrZXJJZHggPCBuVml6V29ya2Vyczsgd29ya2VySWR4KyspIHtcbiAgY29uc3Qgdml6V29ya2VyID0gbmV3IFdvcmtlcihuZXcgVVJMKFwiLi92aXotd29ya2VyLmpzXCIsIGltcG9ydC5tZXRhLnVybCkpXG4gIHZpeldvcmtlci5wb3N0TWVzc2FnZShbXCJ3b3JrZXJJRFwiLCB3b3JrZXJJZHhdKVxuICB2aXpXb3JrZXIub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICBjb25zdCBbaW5mbywgbXNnXSA9IGUuZGF0YVxuICAgIGlmIChpbmZvID09PSBcInNjb3JlTGltc1wiKSB7XG4gICAgICB1cGRhdGVTY29yZUxpbXMoLi4ubXNnLCB2aXpXb3JrZXJzKVxuICAgIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJpbWFnZURhdGFBcnJheVwiKSB7XG4gICAgICB1cGRhdGVJbWFnZURhdGEod29ya2VySWR4LCBtc2cpXG4gICAgfVxuICB9XG4gIHZpeldvcmtlcnMucHVzaCh2aXpXb3JrZXIpXG59XG5cbmZ1bmN0aW9uIHJlc2V0U2NvcmVMaW1zKCkge1xuICBtaW5TY29yZSA9IEluZmluaXR5XG4gIG1heFNjb3JlID0gLUluZmluaXR5XG4gIHNjb3JlTGltc1JlY2VpdmVkID0gMFxufVxuXG5mdW5jdGlvbiB1cGRhdGVTY29yZUxpbXMoX21pblNjb3JlLCBfbWF4U2NvcmUsIHZpeldvcmtlcnMpIHtcbiAgaWYgKF9taW5TY29yZSA8IG1pblNjb3JlKSB7XG4gICAgbWluU2NvcmUgPSBfbWluU2NvcmVcbiAgfVxuICBpZiAoX21heFNjb3JlID4gbWF4U2NvcmUpIHtcbiAgICBtYXhTY29yZSA9IF9tYXhTY29yZVxuICB9XG4gIHNjb3JlTGltc1JlY2VpdmVkKytcbiAgaWYgKHNjb3JlTGltc1JlY2VpdmVkID09PSBuVml6V29ya2Vycykge1xuICAgIGZvciAobGV0IHdvcmtlciBvZiB2aXpXb3JrZXJzKSB7XG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoW1wic2NvcmVMaW1zXCIsIFttaW5TY29yZSwgbWF4U2NvcmVdXSlcbiAgICB9XG4gICAgcmVzZXRTY29yZUxpbXMoKVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUltYWdlRGF0YSh3b3JrZXJJZHgsIG1zZykge1xuICBsZXQgYXJyYXlJZHggPSAod29ya2VySWR4IC8gblZpeldvcmtlcnMpICogaW1hZ2VEYXRhQmdEYXRhLmxlbmd0aFxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1zZy5sZW5ndGg7IGkgKz0gMykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICBpbWFnZURhdGFCZ0RhdGFbYXJyYXlJZHggKyBqXSA9IG1zZ1tpICsgal1cbiAgICB9XG4gICAgYXJyYXlJZHggKz0gNFxuICB9XG4gIGltYWdlc1JlY2VpdmVkKytcbiAgaWYgKGltYWdlc1JlY2VpdmVkID09PSBuVml6V29ya2Vycykge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBjdHhfYmcucHV0SW1hZ2VEYXRhKGltYWdlRGF0YUJnLCAwLCAwKVxuICAgIH0pXG4gICAgaW1hZ2VzUmVjZWl2ZWQgPSAwXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJuVml6V29ya2VycyIsImNhbnZhc0RpbSIsIm9iakZuSW5pdCIsIm9iakZucyIsImFja2xleSIsImlucHV0cyIsImEiLCJiIiwiYyIsIk1hdGgiLCJQSSIsImQiLCJkX2ludiIsInN1bTEiLCJzdW0yIiwiaSIsInhpIiwiY29zIiwidGVybTEiLCJleHAiLCJzcXJ0IiwidGVybTIiLCJFIiwiYm9oYWNoZXZza3kxIiwieDEiLCJ4MiIsInRlcm0zIiwidGVybTQiLCJncmlld2FuayIsImxlbmd0aCIsInN1bSIsInByb2QiLCJyYXN0cmlnaW4iLCJmYW5jeU5hbWUiLCJ4eUxpbSIsInJlcXVpcmUiLCJ6b29tIiwiY2FudmFzX2JnIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhc19mZyIsImNhbnZhc19kaXYiLCJzZXRBdHRyaWJ1dGUiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImN0eF9iZyIsImdldENvbnRleHQiLCJjdHhfZmciLCJpbWFnZURhdGFCZyIsImNyZWF0ZUltYWdlRGF0YSIsImltYWdlRGF0YUJnRGF0YSIsImRhdGEiLCJmaWxsIiwiZm5TZWxlY3QiLCJPYmplY3QiLCJrZXlzIiwiayIsIm9wdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsInRleHQiLCJzZWxlY3RlZCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZm5OYW1lIiwidGFyZ2V0Iiwidml6V29ya2VycyIsIndvcmtlciIsInBvc3RNZXNzYWdlIiwiY21hV29ya2VyIiwiem9vbUluQnRuIiwidXBkYXRlWm9vbSIsInpvb21PdXRCdG4iLCJzdGVwQnRuIiwiY29uc29sZSIsImxvZyIsInNjb3JlTGltc1JlY2VpdmVkIiwibWluU2NvcmUiLCJtYXhTY29yZSIsImltYWdlc1JlY2VpdmVkIiwicmVzZXRTY29yZUxpbXMiLCJXb3JrZXIiLCJVUkwiLCJpbXBvcnQiLCJtZXRhIiwidXJsIiwib25tZXNzYWdlIiwiaW5mbyIsIm1zZyIsImRyYXdTb2x1dGlvbnMiLCJzb2x1dGlvbnMiLCJjdHgiLCJjbGVhclJlY3QiLCJzYXZlIiwidHJhbnNsYXRlIiwiZHJhd01hcmtlciIsInJlc3RvcmUiLCJ4IiwieSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwieXMiLCJ3b3JrZXJJZHgiLCJ2aXpXb3JrZXIiLCJ1cGRhdGVTY29yZUxpbXMiLCJ1cGRhdGVJbWFnZURhdGEiLCJwdXNoIiwiSW5maW5pdHkiLCJfbWluU2NvcmUiLCJfbWF4U2NvcmUiLCJhcnJheUlkeCIsImoiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwdXRJbWFnZURhdGEiXSwic291cmNlUm9vdCI6IiJ9