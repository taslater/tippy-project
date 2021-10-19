/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/draw-canvas.js":
/*!*******************************!*\
  !*** ./src/js/draw-canvas.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawCanvas": () => (/* binding */ drawCanvas)
/* harmony export */ });
function drawCanvas(canvasFrom, ctxTo, center, angle) {
  ctxTo.save();
  ctxTo.translate(center[0], center[1]);
  ctxTo.rotate(angle);
  ctxTo.translate(-0.5 * canvasFrom.width, -0.5 * canvasFrom.height);
  ctxTo.drawImage(canvasFrom, 0, 0);
  ctxTo.restore();
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
/******/ 			return "" + chunkId + "." + {"src_pages_cmaes-demo_cma-worker_js":"9a7e07fa2edbc9ae2b34","src_pages_cmaes-demo_viz-worker_js":"97f30b120e667d5295d3"}[chunkId] + ".js";
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
/* harmony import */ var _js_draw_canvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../js/draw-canvas.js */ "./src/js/draw-canvas.js");
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
var canvasFnGradient = document.getElementById("canvas-bg");
var canvasCmaSols = document.getElementById("canvas-fg");
var canvasCmaMeans = document.getElementById("canvas-means");
var canvasDiv = document.getElementById("canvas-div");
canvasDiv.setAttribute("style", "width:".concat(_globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim, "px; height:").concat(_globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim, "px"));

for (var _i = 0, _arr = [canvasCmaSols, canvasFnGradient, canvasCmaMeans]; _i < _arr.length; _i++) {
  var canvas = _arr[_i];
  canvas.width = _globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim;
  canvas.height = _globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim;
}

var ctxFnGradient = canvasFnGradient.getContext("2d");
var ctxCmaSols = canvasCmaSols.getContext("2d");
var ctxCmaMeans = canvasCmaMeans.getContext("2d");
var imageDataBg = ctxFnGradient.createImageData(_globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim, _globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim);
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
  updateObjFn(fnName);
});

function updateObjFn(fnName) {
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
}

var popMultSelect = document.getElementById("pop-mult-select");
popMultSelect.addEventListener("change", function (e) {
  var popsizeMultiplier = e.target.value;
  cmaWorker.postMessage(["popMult", popsizeMultiplier]);
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
    drawSolutions(msg, ctxCmaSols);
  } else if (info === "means") {
    drawMeans(msg, ctxCmaMeans);
  }
};

function drawMeans(means, ctx) {
  requestAnimationFrame(function () {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.save();
    ctx.translate(0.5 * ctx.canvas.width, 0.5 * ctx.canvas.height);
    ctx.beginPath();
    ctx.moveTo(means[0], means[1]);

    for (var i = 2; i < means.length; i += 2) {
      ctx.lineTo(means[i], means[i + 1]);
    }

    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  });
}

function drawSolutions(solutions, ctx) {
  requestAnimationFrame(function () {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.save();
    ctx.translate(0.5 * ctx.canvas.width, 0.5 * ctx.canvas.height);

    for (var i = 0; i < solutions.length; i += 2) {
      drawMarker(solutions[i], solutions[i + 1], ctx);
    }

    ctx.restore();
  });
}

var markerCanvas = getMarkerCanvas();

function drawMarker(x, y, ctx) {
  (0,_js_draw_canvas_js__WEBPACK_IMPORTED_MODULE_2__.drawCanvas)(markerCanvas, ctx, [x, y], 0);
}

function getMarkerCanvas() {
  function drawLineSeg(startPt, endPt, color, weight, ctx) {
    ctx.beginPath();
    ctx.moveTo.apply(ctx, _toConsumableArray(startPt));
    ctx.lineTo.apply(ctx, _toConsumableArray(endPt));
    ctx.lineWidth = weight;
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  var markerCanvas = document.createElement("canvas"),
      markerCTX = markerCanvas.getContext("2d");
  var border = 1,
      d = 2 * (border + _globals_js__WEBPACK_IMPORTED_MODULE_1__.markerR);
  markerCanvas.width = d;
  markerCanvas.height = d;
  markerCTX.translate(0.5 * markerCanvas.width, 0.5 * markerCanvas.height);
  var h0 = [-_globals_js__WEBPACK_IMPORTED_MODULE_1__.markerR, 0],
      h1 = [+_globals_js__WEBPACK_IMPORTED_MODULE_1__.markerR, 0],
      v0 = [0, -_globals_js__WEBPACK_IMPORTED_MODULE_1__.markerR],
      v1 = [0, +_globals_js__WEBPACK_IMPORTED_MODULE_1__.markerR];
  drawLineSeg(h0, h1, "black", 5, markerCTX);
  drawLineSeg(v0, v1, "black", 5, markerCTX);
  drawLineSeg(h0, h1, "white", 3, markerCTX);
  drawLineSeg(v0, v1, "white", 3, markerCTX);
  return markerCanvas;
}

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
      ctxFnGradient.putImageData(imageDataBg, 0, 0);
    });
    imagesReceived = 0;
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUlxSCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCakYsTUFBQUEsZUFBZSxDQUFDZ0YsUUFBUSxHQUFHQyxDQUFaLENBQWYsR0FBZ0N2QyxHQUFHLENBQUM5RSxDQUFDLEdBQUdxSCxDQUFMLENBQW5DO0FBQ0Q7O0FBQ0RELElBQUFBLFFBQVEsSUFBSSxDQUFaO0FBQ0Q7O0FBQ0QvQyxFQUFBQSxjQUFjOztBQUNkLE1BQUlBLGNBQWMsS0FBS3hGLG9EQUF2QixFQUFvQztBQUNsQ3NHLElBQUFBLHFCQUFxQixDQUFDLFlBQU07QUFDMUJyRCxNQUFBQSxhQUFhLENBQUN3RixZQUFkLENBQTJCcEYsV0FBM0IsRUFBd0MsQ0FBeEMsRUFBMkMsQ0FBM0M7QUFDRCxLQUZvQixDQUFyQjtBQUdBbUMsSUFBQUEsY0FBYyxHQUFHLENBQWpCO0FBQ0Q7QUFDRixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL2pzL2RyYXctY2FudmFzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vb2JqLWZucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvbWFpbi5jc3M/NzZiYiIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvcGFnZXMvY21hZXMtZGVtby9pbmRleC5jc3M/MzQyZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGRyYXdDYW52YXMoY2FudmFzRnJvbSwgY3R4VG8sIGNlbnRlciwgYW5nbGUpIHtcbiAgY3R4VG8uc2F2ZSgpXG4gIGN0eFRvLnRyYW5zbGF0ZShjZW50ZXJbMF0sIGNlbnRlclsxXSlcbiAgY3R4VG8ucm90YXRlKGFuZ2xlKVxuICBjdHhUby50cmFuc2xhdGUoLTAuNSAqIGNhbnZhc0Zyb20ud2lkdGgsIC0wLjUgKiBjYW52YXNGcm9tLmhlaWdodClcbiAgY3R4VG8uZHJhd0ltYWdlKGNhbnZhc0Zyb20sIDAsIDApXG4gIGN0eFRvLnJlc3RvcmUoKVxufVxuIiwiZXhwb3J0IGNvbnN0IG5WaXpXb3JrZXJzID0gOCxcbiAgY2FudmFzRGltID0gODAwLFxuICBtYXJrZXJSID0gNyxcbiAgb2JqRm5Jbml0ID0gXCJhY2tsZXlcIixcbiAgbWVhblJhZGl1c01pbiA9IDAuNyxcbiAgbWVhblJhZGl1c01heCA9IDEsXG4gIHNpZ21hU2NhbGUgPSAxXG4iLCIvLyB7XG4vLyAgIGFja2xleTogXCJBY2tsZXlcIixcbi8vICAgYm9oYWNoZXZza3kxOiBcIkJvaGFjaGV2c2t5IE5vLjFcIixcbi8vICAgZ3JpZXdhbms6IFwiR3JpZXdhbmtcIixcbi8vICAgcmFzdHJpZ2luOiBcIlJhc3RyaWdpblwiLFxuLy8gfVxuXG5leHBvcnQgY29uc3Qgb2JqRm5zID0ge1xuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2Fja2xleS5odG1sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vQ29kZS9hY2tsZXltLmh0bWxcbiAgYWNrbGV5OiAoaW5wdXRzKSA9PiB7XG4gICAgLy8gZGVmYXVsdCBhPTIwLCBiPTAuMiwgYz0ycGlcbiAgICBjb25zdCBhID0gMjAwMDAwMCxcbiAgICAgIGIgPSAwLjIsXG4gICAgICBjID0gMiAqIE1hdGguUElcbiAgICAvLyBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBjb25zdCBkID0gMixcbiAgICAgIGRfaW52ID0gMC41IC8vICgxIC8gZClcbiAgICBsZXQgc3VtMSA9IDAsXG4gICAgICBzdW0yID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bTEgKz0geGkgKiB4aVxuICAgICAgc3VtMiArPSBNYXRoLmNvcyhjICogeGkpXG4gICAgfVxuICAgIC8vIGxldCBkX2ludiA9IDEgLyBkXG4gICAgbGV0IHRlcm0xID0gLWEgKiBNYXRoLmV4cCgtYiAqIE1hdGguc3FydChzdW0xICogZF9pbnYpKSxcbiAgICAgIHRlcm0yID0gLU1hdGguZXhwKHN1bTIgKiBkX2ludilcbiAgICByZXR1cm4gdGVybTEgKyB0ZXJtMiArIGEgKyBNYXRoLkVcbiAgfSxcbiAgLy8gaHR0cDovL2JlbmNobWFya2ZjbnMueHl6L2JlbmNobWFya2ZjbnMvYm9oYWNoZXZza3luMWZjbi5odG1sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vQ29kZS9ib2hhMW0uaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2JvaGEuaHRtbFxuICBib2hhY2hldnNreTE6IChpbnB1dHMpID0+IHtcbiAgICBsZXQgeDEgPSBpbnB1dHNbMF1cbiAgICBsZXQgeDIgPSBpbnB1dHNbMV1cblxuICAgIGxldCB0ZXJtMSA9IHgxICogeDFcbiAgICBsZXQgdGVybTIgPSAyICogeDIgKiB4MlxuICAgIGxldCB0ZXJtMyA9IC0wLjMgKiBNYXRoLmNvcygzICogTWF0aC5QSSAqIHgxKVxuICAgIGxldCB0ZXJtNCA9IC0wLjQgKiBNYXRoLmNvcyg0ICogTWF0aC5QSSAqIHgyKVxuXG4gICAgcmV0dXJuIHRlcm0xICsgdGVybTIgKyB0ZXJtMyArIHRlcm00ICsgMC43XG4gIH0sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vZ3JpZXdhbmsuaHRtbFxuICBncmlld2FuazogKGlucHV0cykgPT4ge1xuICAgIGxldCBkID0gaW5wdXRzLmxlbmd0aFxuICAgIGxldCBzdW0gPSAwXG4gICAgbGV0IHByb2QgPSAxXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIGxldCB4aSA9IGlucHV0c1tpXVxuICAgICAgc3VtICs9ICh4aSAqIHhpKSAvIDQwMDBcbiAgICAgIHByb2QgKj0gTWF0aC5jb3MoeGkgLyBNYXRoLnNxcnQoaSArIDEpKVxuICAgIH1cbiAgICByZXR1cm4gc3VtIC0gcHJvZCArIDFcbiAgfSxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9yYXN0ci5odG1sXG4gIHJhc3RyaWdpbjogKGlucHV0cykgPT4ge1xuICAgIGxldCBkID0gaW5wdXRzLmxlbmd0aFxuICAgIGxldCBzdW0gPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIGxldCB4aSA9IGlucHV0c1tpXVxuICAgICAgc3VtICs9IHhpICogeGkgLSAxMCAqIE1hdGguY29zKDIgKiBNYXRoLlBJICogeGkpXG4gICAgfVxuICAgIHJldHVybiAxMCAqIGQgKyBzdW1cbiAgfSxcbn1cblxuLy8gZmFuY3kgbmFtZXMgZm9yIHNlbGVjdCBtZW51XG5vYmpGbnMuYWNrbGV5LmZhbmN5TmFtZSA9IFwiQWNrbGV5XCJcbm9iakZucy5ib2hhY2hldnNreTEuZmFuY3lOYW1lID0gXCJCb2hhY2hldnNreSBOby4xXCJcbm9iakZucy5ncmlld2Fuay5mYW5jeU5hbWUgPSBcIkdyaWV3YW5rXCJcbm9iakZucy5yYXN0cmlnaW4uZmFuY3lOYW1lID0gXCJSYXN0cmlnaW5cIlxuXG4vLyBmbkxpbXMgZm9yIGRpc3BsYXkgbGltaXRzXG5vYmpGbnMuYWNrbGV5Lnh5TGltID0gMzIuNzY4XG5vYmpGbnMuYm9oYWNoZXZza3kxLnh5TGltID0gMTAwXG5vYmpGbnMuZ3JpZXdhbmsueHlMaW0gPSA2MDBcbm9iakZucy5yYXN0cmlnaW4ueHlMaW0gPSA1LjEyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsge1wic3JjX3BhZ2VzX2NtYWVzLWRlbW9fY21hLXdvcmtlcl9qc1wiOlwiOWE3ZTA3ZmEyZWRiYzlhZTJiMzRcIixcInNyY19wYWdlc19jbWFlcy1kZW1vX3Zpei13b3JrZXJfanNcIjpcIjk3ZjMwYjEyMGU2NjdkNTI5NWQzXCJ9W2NodW5rSWRdICsgXCIuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImNtYWVzLWRlbW9cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsInJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKVxucmVxdWlyZShcIi4uLy4uL21haW4uY3NzXCIpXG5pbXBvcnQgeyBvYmpGbnMgfSBmcm9tIFwiLi9vYmotZm5zLmpzXCJcbmltcG9ydCB7IGNhbnZhc0RpbSwgbWFya2VyUiwgblZpeldvcmtlcnMsIG9iakZuSW5pdCB9IGZyb20gXCIuL2dsb2JhbHMuanNcIlxuaW1wb3J0IHsgZHJhd0NhbnZhcyB9IGZyb20gXCIuLy4uLy4uL2pzL2RyYXctY2FudmFzLmpzXCJcblxubGV0IHpvb20gPSAxXG5cbmNvbnN0IGNhbnZhc0ZuR3JhZGllbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1iZ1wiKVxuY29uc3QgY2FudmFzQ21hU29scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLWZnXCIpXG5jb25zdCBjYW52YXNDbWFNZWFucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLW1lYW5zXCIpXG5jb25zdCBjYW52YXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1kaXZcIilcbmNhbnZhc0Rpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgd2lkdGg6JHtjYW52YXNEaW19cHg7IGhlaWdodDoke2NhbnZhc0RpbX1weGApXG5mb3IgKGxldCBjYW52YXMgb2YgW2NhbnZhc0NtYVNvbHMsIGNhbnZhc0ZuR3JhZGllbnQsIGNhbnZhc0NtYU1lYW5zXSkge1xuICBjYW52YXMud2lkdGggPSBjYW52YXNEaW1cbiAgY2FudmFzLmhlaWdodCA9IGNhbnZhc0RpbVxufVxuXG5jb25zdCBjdHhGbkdyYWRpZW50ID0gY2FudmFzRm5HcmFkaWVudC5nZXRDb250ZXh0KFwiMmRcIilcbmNvbnN0IGN0eENtYVNvbHMgPSBjYW52YXNDbWFTb2xzLmdldENvbnRleHQoXCIyZFwiKVxuY29uc3QgY3R4Q21hTWVhbnMgPSBjYW52YXNDbWFNZWFucy5nZXRDb250ZXh0KFwiMmRcIilcbmNvbnN0IGltYWdlRGF0YUJnID0gY3R4Rm5HcmFkaWVudC5jcmVhdGVJbWFnZURhdGEoY2FudmFzRGltLCBjYW52YXNEaW0pXG5jb25zdCBpbWFnZURhdGFCZ0RhdGEgPSBpbWFnZURhdGFCZy5kYXRhXG5pbWFnZURhdGFCZ0RhdGEuZmlsbCgyNTUpXG5cbmNvbnN0IGZuU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmotZm4tc2VsZWN0XCIpXG5cbmZvciAobGV0IGsgb2YgT2JqZWN0LmtleXMob2JqRm5zKSkge1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gIG9wdGlvbi52YWx1ZSA9IGtcbiAgb3B0aW9uLnRleHQgPSBvYmpGbnNba10uZmFuY3lOYW1lXG4gIGlmIChrID09PSBvYmpGbkluaXQpIHtcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlXG4gIH1cbiAgZm5TZWxlY3QuYWRkKG9wdGlvbilcbn1cblxuZm5TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICBjb25zdCBmbk5hbWUgPSBlLnRhcmdldC52YWx1ZVxuICB1cGRhdGVPYmpGbihmbk5hbWUpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVPYmpGbihmbk5hbWUpIHtcbiAgZm9yIChsZXQgd29ya2VyIG9mIHZpeldvcmtlcnMpIHtcbiAgICB3b3JrZXIucG9zdE1lc3NhZ2UoW1wiZm5OYW1lXCIsIGZuTmFtZV0pXG4gIH1cbiAgY21hV29ya2VyLnBvc3RNZXNzYWdlKFtcImZuTmFtZVwiLCBmbk5hbWVdKVxuICB6b29tID0gMVxufVxuXG5jb25zdCBwb3BNdWx0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3AtbXVsdC1zZWxlY3RcIilcbnBvcE11bHRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICBsZXQgcG9wc2l6ZU11bHRpcGxpZXIgPSBlLnRhcmdldC52YWx1ZVxuICBjbWFXb3JrZXIucG9zdE1lc3NhZ2UoW1wicG9wTXVsdFwiLCBwb3BzaXplTXVsdGlwbGllcl0pXG59KVxuXG5jb25zdCB6b29tSW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInpvb20taW5cIilcbnpvb21JbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB6b29tICo9IDEuMVxuICB1cGRhdGVab29tKClcbn0pXG5cbmNvbnN0IHpvb21PdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInpvb20tb3V0XCIpXG56b29tT3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHpvb20gLz0gMS4xXG4gIHVwZGF0ZVpvb20oKVxufSlcblxuZnVuY3Rpb24gdXBkYXRlWm9vbSgpIHtcbiAgZm9yIChsZXQgd29ya2VyIG9mIHZpeldvcmtlcnMpIHtcbiAgICB3b3JrZXIucG9zdE1lc3NhZ2UoW1wiem9vbVwiLCB6b29tXSlcbiAgfVxuICBjbWFXb3JrZXIucG9zdE1lc3NhZ2UoW1wiem9vbVwiLCB6b29tXSlcbn1cblxuY29uc3Qgc3RlcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RlcC1idG5cIilcbnN0ZXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJzdGVwXCIpXG4gIGNtYVdvcmtlci5wb3N0TWVzc2FnZShbXCJzdGVwXCIsIHRydWVdKVxufSlcblxubGV0IHNjb3JlTGltc1JlY2VpdmVkLFxuICBtaW5TY29yZSxcbiAgbWF4U2NvcmUsXG4gIGltYWdlc1JlY2VpdmVkID0gMFxucmVzZXRTY29yZUxpbXMoKVxuXG5jb25zdCBjbWFXb3JrZXIgPSBuZXcgV29ya2VyKG5ldyBVUkwoXCIuL2NtYS13b3JrZXIuanNcIiwgaW1wb3J0Lm1ldGEudXJsKSlcblxuY21hV29ya2VyLm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gIGNvbnN0IFtpbmZvLCBtc2ddID0gZS5kYXRhXG4gIGlmIChpbmZvID09PSBcInNvbHV0aW9uc1wiKSB7XG4gICAgZHJhd1NvbHV0aW9ucyhtc2csIGN0eENtYVNvbHMpXG4gIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJtZWFuc1wiKSB7XG4gICAgZHJhd01lYW5zKG1zZywgY3R4Q21hTWVhbnMpXG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhd01lYW5zKG1lYW5zLCBjdHgpIHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KVxuICAgIGN0eC5zYXZlKClcbiAgICBjdHgudHJhbnNsYXRlKDAuNSAqIGN0eC5jYW52YXMud2lkdGgsIDAuNSAqIGN0eC5jYW52YXMuaGVpZ2h0KVxuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIGN0eC5tb3ZlVG8obWVhbnNbMF0sIG1lYW5zWzFdKVxuICAgIGZvciAobGV0IGkgPSAyOyBpIDwgbWVhbnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIGN0eC5saW5lVG8obWVhbnNbaV0sIG1lYW5zW2kgKyAxXSlcbiAgICB9XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgY3R4LmxpbmVXaWR0aCA9IDRcbiAgICBjdHguc3Ryb2tlKClcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCJcbiAgICBjdHgubGluZVdpZHRoID0gMlxuICAgIGN0eC5zdHJva2UoKVxuICAgIGN0eC5yZXN0b3JlKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZHJhd1NvbHV0aW9ucyhzb2x1dGlvbnMsIGN0eCkge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpXG4gICAgY3R4LnNhdmUoKVxuICAgIGN0eC50cmFuc2xhdGUoMC41ICogY3R4LmNhbnZhcy53aWR0aCwgMC41ICogY3R4LmNhbnZhcy5oZWlnaHQpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb2x1dGlvbnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIGRyYXdNYXJrZXIoc29sdXRpb25zW2ldLCBzb2x1dGlvbnNbaSArIDFdLCBjdHgpXG4gICAgfVxuICAgIGN0eC5yZXN0b3JlKClcbiAgfSlcbn1cblxuY29uc3QgbWFya2VyQ2FudmFzID0gZ2V0TWFya2VyQ2FudmFzKClcblxuZnVuY3Rpb24gZHJhd01hcmtlcih4LCB5LCBjdHgpIHtcbiAgZHJhd0NhbnZhcyhtYXJrZXJDYW52YXMsIGN0eCwgW3gsIHldLCAwKVxufVxuXG5mdW5jdGlvbiBnZXRNYXJrZXJDYW52YXMoKSB7XG4gIGZ1bmN0aW9uIGRyYXdMaW5lU2VnKHN0YXJ0UHQsIGVuZFB0LCBjb2xvciwgd2VpZ2h0LCBjdHgpIHtcbiAgICBjdHguYmVnaW5QYXRoKClcbiAgICBjdHgubW92ZVRvKC4uLnN0YXJ0UHQpXG4gICAgY3R4LmxpbmVUbyguLi5lbmRQdClcbiAgICBjdHgubGluZVdpZHRoID0gd2VpZ2h0XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3JcbiAgICBjdHguc3Ryb2tlKClcbiAgfVxuXG4gIGNvbnN0IG1hcmtlckNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksXG4gICAgbWFya2VyQ1RYID0gbWFya2VyQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxuICBjb25zdCBib3JkZXIgPSAxLFxuICAgIGQgPSAyICogKGJvcmRlciArIG1hcmtlclIpXG5cbiAgbWFya2VyQ2FudmFzLndpZHRoID0gZFxuICBtYXJrZXJDYW52YXMuaGVpZ2h0ID0gZFxuXG4gIG1hcmtlckNUWC50cmFuc2xhdGUoMC41ICogbWFya2VyQ2FudmFzLndpZHRoLCAwLjUgKiBtYXJrZXJDYW52YXMuaGVpZ2h0KVxuICBjb25zdCBoMCA9IFstbWFya2VyUiwgMF0sXG4gICAgaDEgPSBbK21hcmtlclIsIDBdLFxuICAgIHYwID0gWzAsIC1tYXJrZXJSXSxcbiAgICB2MSA9IFswLCArbWFya2VyUl1cbiAgZHJhd0xpbmVTZWcoaDAsIGgxLCBcImJsYWNrXCIsIDUsIG1hcmtlckNUWClcbiAgZHJhd0xpbmVTZWcodjAsIHYxLCBcImJsYWNrXCIsIDUsIG1hcmtlckNUWClcbiAgZHJhd0xpbmVTZWcoaDAsIGgxLCBcIndoaXRlXCIsIDMsIG1hcmtlckNUWClcbiAgZHJhd0xpbmVTZWcodjAsIHYxLCBcIndoaXRlXCIsIDMsIG1hcmtlckNUWClcblxuICByZXR1cm4gbWFya2VyQ2FudmFzXG59XG5cbmNvbnN0IHZpeldvcmtlcnMgPSBbXVxuZm9yIChsZXQgd29ya2VySWR4ID0gMDsgd29ya2VySWR4IDwgblZpeldvcmtlcnM7IHdvcmtlcklkeCsrKSB7XG4gIGNvbnN0IHZpeldvcmtlciA9IG5ldyBXb3JrZXIobmV3IFVSTChcIi4vdml6LXdvcmtlci5qc1wiLCBpbXBvcnQubWV0YS51cmwpKVxuICB2aXpXb3JrZXIucG9zdE1lc3NhZ2UoW1wid29ya2VySURcIiwgd29ya2VySWR4XSlcbiAgdml6V29ya2VyLm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gICAgY29uc3QgW2luZm8sIG1zZ10gPSBlLmRhdGFcbiAgICBpZiAoaW5mbyA9PT0gXCJzY29yZUxpbXNcIikge1xuICAgICAgdXBkYXRlU2NvcmVMaW1zKC4uLm1zZywgdml6V29ya2VycylcbiAgICB9IGVsc2UgaWYgKGluZm8gPT09IFwiaW1hZ2VEYXRhQXJyYXlcIikge1xuICAgICAgdXBkYXRlSW1hZ2VEYXRhKHdvcmtlcklkeCwgbXNnKVxuICAgIH1cbiAgfVxuICB2aXpXb3JrZXJzLnB1c2godml6V29ya2VyKVxufVxuXG5mdW5jdGlvbiByZXNldFNjb3JlTGltcygpIHtcbiAgbWluU2NvcmUgPSBJbmZpbml0eVxuICBtYXhTY29yZSA9IC1JbmZpbml0eVxuICBzY29yZUxpbXNSZWNlaXZlZCA9IDBcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2NvcmVMaW1zKF9taW5TY29yZSwgX21heFNjb3JlLCB2aXpXb3JrZXJzKSB7XG4gIGlmIChfbWluU2NvcmUgPCBtaW5TY29yZSkge1xuICAgIG1pblNjb3JlID0gX21pblNjb3JlXG4gIH1cbiAgaWYgKF9tYXhTY29yZSA+IG1heFNjb3JlKSB7XG4gICAgbWF4U2NvcmUgPSBfbWF4U2NvcmVcbiAgfVxuICBzY29yZUxpbXNSZWNlaXZlZCsrXG4gIGlmIChzY29yZUxpbXNSZWNlaXZlZCA9PT0gblZpeldvcmtlcnMpIHtcbiAgICBmb3IgKGxldCB3b3JrZXIgb2Ygdml6V29ya2Vycykge1xuICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKFtcInNjb3JlTGltc1wiLCBbbWluU2NvcmUsIG1heFNjb3JlXV0pXG4gICAgfVxuICAgIHJlc2V0U2NvcmVMaW1zKClcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVJbWFnZURhdGEod29ya2VySWR4LCBtc2cpIHtcbiAgbGV0IGFycmF5SWR4ID0gKHdvcmtlcklkeCAvIG5WaXpXb3JrZXJzKSAqIGltYWdlRGF0YUJnRGF0YS5sZW5ndGhcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyBpICs9IDMpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgaW1hZ2VEYXRhQmdEYXRhW2FycmF5SWR4ICsgal0gPSBtc2dbaSArIGpdXG4gICAgfVxuICAgIGFycmF5SWR4ICs9IDRcbiAgfVxuICBpbWFnZXNSZWNlaXZlZCsrXG4gIGlmIChpbWFnZXNSZWNlaXZlZCA9PT0gblZpeldvcmtlcnMpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgY3R4Rm5HcmFkaWVudC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhQmcsIDAsIDApXG4gICAgfSlcbiAgICBpbWFnZXNSZWNlaXZlZCA9IDBcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRyYXdDYW52YXMiLCJjYW52YXNGcm9tIiwiY3R4VG8iLCJjZW50ZXIiLCJhbmdsZSIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJ3aWR0aCIsImhlaWdodCIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJuVml6V29ya2VycyIsImNhbnZhc0RpbSIsIm1hcmtlclIiLCJvYmpGbkluaXQiLCJtZWFuUmFkaXVzTWluIiwibWVhblJhZGl1c01heCIsInNpZ21hU2NhbGUiLCJvYmpGbnMiLCJhY2tsZXkiLCJpbnB1dHMiLCJhIiwiYiIsImMiLCJNYXRoIiwiUEkiLCJkIiwiZF9pbnYiLCJzdW0xIiwic3VtMiIsImkiLCJ4aSIsImNvcyIsInRlcm0xIiwiZXhwIiwic3FydCIsInRlcm0yIiwiRSIsImJvaGFjaGV2c2t5MSIsIngxIiwieDIiLCJ0ZXJtMyIsInRlcm00IiwiZ3JpZXdhbmsiLCJsZW5ndGgiLCJzdW0iLCJwcm9kIiwicmFzdHJpZ2luIiwiZmFuY3lOYW1lIiwieHlMaW0iLCJyZXF1aXJlIiwiem9vbSIsImNhbnZhc0ZuR3JhZGllbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzQ21hU29scyIsImNhbnZhc0NtYU1lYW5zIiwiY2FudmFzRGl2Iiwic2V0QXR0cmlidXRlIiwiY2FudmFzIiwiY3R4Rm5HcmFkaWVudCIsImdldENvbnRleHQiLCJjdHhDbWFTb2xzIiwiY3R4Q21hTWVhbnMiLCJpbWFnZURhdGFCZyIsImNyZWF0ZUltYWdlRGF0YSIsImltYWdlRGF0YUJnRGF0YSIsImRhdGEiLCJmaWxsIiwiZm5TZWxlY3QiLCJPYmplY3QiLCJrZXlzIiwiayIsIm9wdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsInRleHQiLCJzZWxlY3RlZCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZm5OYW1lIiwidGFyZ2V0IiwidXBkYXRlT2JqRm4iLCJ2aXpXb3JrZXJzIiwid29ya2VyIiwicG9zdE1lc3NhZ2UiLCJjbWFXb3JrZXIiLCJwb3BNdWx0U2VsZWN0IiwicG9wc2l6ZU11bHRpcGxpZXIiLCJ6b29tSW5CdG4iLCJ1cGRhdGVab29tIiwiem9vbU91dEJ0biIsInN0ZXBCdG4iLCJjb25zb2xlIiwibG9nIiwic2NvcmVMaW1zUmVjZWl2ZWQiLCJtaW5TY29yZSIsIm1heFNjb3JlIiwiaW1hZ2VzUmVjZWl2ZWQiLCJyZXNldFNjb3JlTGltcyIsIldvcmtlciIsIlVSTCIsImltcG9ydCIsIm1ldGEiLCJ1cmwiLCJvbm1lc3NhZ2UiLCJpbmZvIiwibXNnIiwiZHJhd1NvbHV0aW9ucyIsImRyYXdNZWFucyIsIm1lYW5zIiwiY3R4IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJzb2x1dGlvbnMiLCJkcmF3TWFya2VyIiwibWFya2VyQ2FudmFzIiwiZ2V0TWFya2VyQ2FudmFzIiwieCIsInkiLCJkcmF3TGluZVNlZyIsInN0YXJ0UHQiLCJlbmRQdCIsImNvbG9yIiwid2VpZ2h0IiwibWFya2VyQ1RYIiwiYm9yZGVyIiwiaDAiLCJoMSIsInYwIiwidjEiLCJ3b3JrZXJJZHgiLCJ2aXpXb3JrZXIiLCJ1cGRhdGVTY29yZUxpbXMiLCJ1cGRhdGVJbWFnZURhdGEiLCJwdXNoIiwiSW5maW5pdHkiLCJfbWluU2NvcmUiLCJfbWF4U2NvcmUiLCJhcnJheUlkeCIsImoiLCJwdXRJbWFnZURhdGEiXSwic291cmNlUm9vdCI6IiJ9