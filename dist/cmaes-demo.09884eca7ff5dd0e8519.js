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

  if (angle !== 0) {
    ctxTo.rotate(angle);
  }

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
/******/ 			return "" + chunkId + "." + {"src_pages_cmaes-demo_cma-worker_js":"b2a537df2c97b2602938","src_pages_cmaes-demo_viz-worker_js":"9dcd019a654d0074ab21"}[chunkId] + ".js";
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




var zoom = 1,
    solutions;
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
  cmaWorker.postMessage(["step", true]);
});
var meansPathCheck = document.getElementById("means-path-checkbox");
meansPathCheck.addEventListener("change", function () {
  displayMeansPath = meansPathCheck.checked;

  if (displayMeansPath) {
    drawMeans(meansPathArr, ctxCmaMeans);
  } else {
    requestAnimationFrame(function () {
      ctxCmaMeans.clearRect(0, 0, ctxCmaMeans.canvas.width, ctxCmaMeans.canvas.height);
    });
  }
});
var scoreLimsReceived,
    minScore,
    maxScore,
    imagesReceived = 0,
    meansPathArr = new Float32Array(0),
    displayMeansPath = false,
    displayReady = false;
resetScoreLims();
var cmaWorker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_pages_cmaes-demo_cma-worker_js"), __webpack_require__.b));

cmaWorker.onmessage = function (e) {
  var _e$data = _slicedToArray(e.data, 2),
      info = _e$data[0],
      msg = _e$data[1];

  if (info === "solutions") {
    solutions = msg.slice(); // drawMarkers(msg, ctxCmaSols)

    checkDrawReady();
  } else if (info === "means") {
    meansPathArr = msg.slice();

    if (displayMeansPath) {
      drawMeans(meansPathArr, ctxCmaMeans);
    }
  } else if (info === "zoom") {
    zoom = msg;
    updateZoom();
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

function drawMarkers(solutions, ctx) {
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

function draw() {
  requestAnimationFrame(function () {
    ctxFnGradient.putImageData(imageDataBg, 0, 0);
    ctxCmaSols.clearRect(0, 0, _globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim, _globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim);
    ctxCmaSols.save();
    ctxCmaSols.translate(0.5 * _globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim, 0.5 * _globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim);

    for (var i = 0; i < solutions.length; i += 2) {
      drawMarker(solutions[i], solutions[i + 1], ctxCmaSols);
    }

    ctxCmaSols.restore();
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
  drawLineSeg([-_globals_js__WEBPACK_IMPORTED_MODULE_1__.markerR - 1, 0], [_globals_js__WEBPACK_IMPORTED_MODULE_1__.markerR + 1, 0], "black", 4, markerCTX);
  drawLineSeg([0, -_globals_js__WEBPACK_IMPORTED_MODULE_1__.markerR - 1], [0, _globals_js__WEBPACK_IMPORTED_MODULE_1__.markerR + 1], "black", 4, markerCTX);
  drawLineSeg([-_globals_js__WEBPACK_IMPORTED_MODULE_1__.markerR, 0], [_globals_js__WEBPACK_IMPORTED_MODULE_1__.markerR, 0], "white", 2, markerCTX);
  drawLineSeg([0, -_globals_js__WEBPACK_IMPORTED_MODULE_1__.markerR], [0, _globals_js__WEBPACK_IMPORTED_MODULE_1__.markerR], "white", 2, markerCTX);
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
      checkDrawReady();
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

  imagesReceived++; // if (imagesReceived === nVizWorkers) {
  //   requestAnimationFrame(() => {
  //     ctxFnGradient.putImageData(imageDataBg, 0, 0)
  //   })
  //   imagesReceived = 0
  // }
}

function checkDrawReady() {
  if (imagesReceived === _globals_js__WEBPACK_IMPORTED_MODULE_1__.nVizWorkers) {
    draw();
    imagesReceived = 0;
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvanMvZHJhdy1jYW52YXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvcGFnZXMvY21hZXMtZGVtby9vYmotZm5zLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9tYWluLmNzcz83NmJiIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL2luZGV4LmNzcz8zNDJkIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvcGFnZXMvY21hZXMtZGVtby9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZHJhd0NhbnZhcyhjYW52YXNGcm9tLCBjdHhUbywgY2VudGVyLCBhbmdsZSkge1xuICBjdHhUby5zYXZlKClcbiAgY3R4VG8udHJhbnNsYXRlKGNlbnRlclswXSwgY2VudGVyWzFdKVxuICBpZiAoYW5nbGUgIT09IDApIHtcbiAgICBjdHhUby5yb3RhdGUoYW5nbGUpXG4gIH1cbiAgY3R4VG8udHJhbnNsYXRlKC0wLjUgKiBjYW52YXNGcm9tLndpZHRoLCAtMC41ICogY2FudmFzRnJvbS5oZWlnaHQpXG4gIGN0eFRvLmRyYXdJbWFnZShjYW52YXNGcm9tLCAwLCAwKVxuICBjdHhUby5yZXN0b3JlKClcbn1cbiIsImV4cG9ydCBjb25zdCBuVml6V29ya2VycyA9IDgsXG4gIGNhbnZhc0RpbSA9IDgwMCxcbiAgbWFya2VyUiA9IDcsXG4gIG9iakZuSW5pdCA9IFwiYWNrbGV5XCIsXG4gIG1lYW5SYWRpdXNNaW4gPSAwLjMsXG4gIG1lYW5SYWRpdXNNYXggPSAwLjUsXG4gIHNpZ21hU2NhbGUgPSAwLjUsXG4gIG5UcmFuc2l0aW9uU3RlcHMgPSAxMFxuIiwiLy8ge1xuLy8gICBhY2tsZXk6IFwiQWNrbGV5XCIsXG4vLyAgIGJvaGFjaGV2c2t5MTogXCJCb2hhY2hldnNreSBOby4xXCIsXG4vLyAgIGdyaWV3YW5rOiBcIkdyaWV3YW5rXCIsXG4vLyAgIHJhc3RyaWdpbjogXCJSYXN0cmlnaW5cIixcbi8vIH1cblxuZXhwb3J0IGNvbnN0IG9iakZucyA9IHtcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9hY2tsZXkuaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL0NvZGUvYWNrbGV5bS5odG1sXG4gIGFja2xleTogKGlucHV0cykgPT4ge1xuICAgIC8vIGRlZmF1bHQgYT0yMCwgYj0wLjIsIGM9MnBpXG4gICAgY29uc3QgYSA9IDIwLFxuICAgICAgYiA9IDAuMixcbiAgICAgIGMgPSAyICogTWF0aC5QSVxuICAgIC8vIGxldCBkID0gaW5wdXRzLmxlbmd0aFxuICAgIGNvbnN0IGQgPSAyLFxuICAgICAgZF9pbnYgPSAwLjUgLy8gKDEgLyBkKVxuICAgIGxldCBzdW0xID0gMCxcbiAgICAgIHN1bTIgPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIGxldCB4aSA9IGlucHV0c1tpXVxuICAgICAgc3VtMSArPSB4aSAqIHhpXG4gICAgICBzdW0yICs9IE1hdGguY29zKGMgKiB4aSlcbiAgICB9XG4gICAgLy8gbGV0IGRfaW52ID0gMSAvIGRcbiAgICBsZXQgdGVybTEgPSAtYSAqIE1hdGguZXhwKC1iICogTWF0aC5zcXJ0KHN1bTEgKiBkX2ludikpLFxuICAgICAgdGVybTIgPSAtTWF0aC5leHAoc3VtMiAqIGRfaW52KVxuICAgIHJldHVybiB0ZXJtMSArIHRlcm0yICsgYSArIE1hdGguRVxuICB9LFxuICAvLyBodHRwOi8vYmVuY2htYXJrZmNucy54eXovYmVuY2htYXJrZmNucy9ib2hhY2hldnNreW4xZmNuLmh0bWxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9Db2RlL2JvaGExbS5odG1sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vYm9oYS5odG1sXG4gIGJvaGFjaGV2c2t5MTogKGlucHV0cykgPT4ge1xuICAgIGxldCB4MSA9IGlucHV0c1swXVxuICAgIGxldCB4MiA9IGlucHV0c1sxXVxuXG4gICAgbGV0IHRlcm0xID0geDEgKiB4MVxuICAgIGxldCB0ZXJtMiA9IDIgKiB4MiAqIHgyXG4gICAgbGV0IHRlcm0zID0gLTAuMyAqIE1hdGguY29zKDMgKiBNYXRoLlBJICogeDEpXG4gICAgbGV0IHRlcm00ID0gLTAuNCAqIE1hdGguY29zKDQgKiBNYXRoLlBJICogeDIpXG5cbiAgICByZXR1cm4gdGVybTEgKyB0ZXJtMiArIHRlcm0zICsgdGVybTQgKyAwLjdcbiAgfSxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9ncmlld2Fuay5odG1sXG4gIGdyaWV3YW5rOiAoaW5wdXRzKSA9PiB7XG4gICAgbGV0IGQgPSBpbnB1dHMubGVuZ3RoXG4gICAgbGV0IHN1bSA9IDBcbiAgICBsZXQgcHJvZCA9IDFcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGQ7IGkrKykge1xuICAgICAgbGV0IHhpID0gaW5wdXRzW2ldXG4gICAgICBzdW0gKz0gKHhpICogeGkpIC8gNDAwMFxuICAgICAgcHJvZCAqPSBNYXRoLmNvcyh4aSAvIE1hdGguc3FydChpICsgMSkpXG4gICAgfVxuICAgIHJldHVybiBzdW0gLSBwcm9kICsgMVxuICB9LFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL3Jhc3RyLmh0bWxcbiAgcmFzdHJpZ2luOiAoaW5wdXRzKSA9PiB7XG4gICAgbGV0IGQgPSBpbnB1dHMubGVuZ3RoXG4gICAgbGV0IHN1bSA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGQ7IGkrKykge1xuICAgICAgbGV0IHhpID0gaW5wdXRzW2ldXG4gICAgICBzdW0gKz0geGkgKiB4aSAtIDEwICogTWF0aC5jb3MoMiAqIE1hdGguUEkgKiB4aSlcbiAgICB9XG4gICAgcmV0dXJuIDEwICogZCArIHN1bVxuICB9LFxufVxuXG4vLyBmYW5jeSBuYW1lcyBmb3Igc2VsZWN0IG1lbnVcbm9iakZucy5hY2tsZXkuZmFuY3lOYW1lID0gXCJBY2tsZXlcIlxub2JqRm5zLmJvaGFjaGV2c2t5MS5mYW5jeU5hbWUgPSBcIkJvaGFjaGV2c2t5IE5vLjFcIlxub2JqRm5zLmdyaWV3YW5rLmZhbmN5TmFtZSA9IFwiR3JpZXdhbmtcIlxub2JqRm5zLnJhc3RyaWdpbi5mYW5jeU5hbWUgPSBcIlJhc3RyaWdpblwiXG5cbi8vIGZuTGltcyBmb3IgZGlzcGxheSBsaW1pdHNcbm9iakZucy5hY2tsZXkueHlMaW0gPSAzMi43Njhcbm9iakZucy5ib2hhY2hldnNreTEueHlMaW0gPSAxMDBcbm9iakZucy5ncmlld2Fuay54eUxpbSA9IDYwMFxub2JqRm5zLnJhc3RyaWdpbi54eUxpbSA9IDUuMTJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyB7XCJzcmNfcGFnZXNfY21hZXMtZGVtb19jbWEtd29ya2VyX2pzXCI6XCJiMmE1MzdkZjJjOTdiMjYwMjkzOFwiLFwic3JjX3BhZ2VzX2NtYWVzLWRlbW9fdml6LXdvcmtlcl9qc1wiOlwiOWRjZDAxOWE2NTRkMDA3NGFiMjFcIn1bY2h1bmtJZF0gKyBcIi5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiY21hZXMtZGVtb1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwicmVxdWlyZShcIi4vaW5kZXguY3NzXCIpXG5yZXF1aXJlKFwiLi4vLi4vbWFpbi5jc3NcIilcbmltcG9ydCB7IG9iakZucyB9IGZyb20gXCIuL29iai1mbnMuanNcIlxuaW1wb3J0IHsgY2FudmFzRGltLCBtYXJrZXJSLCBuVml6V29ya2Vycywgb2JqRm5Jbml0IH0gZnJvbSBcIi4vZ2xvYmFscy5qc1wiXG5pbXBvcnQgeyBkcmF3Q2FudmFzIH0gZnJvbSBcIi4vLi4vLi4vanMvZHJhdy1jYW52YXMuanNcIlxuXG5sZXQgem9vbSA9IDEsXG4gIHNvbHV0aW9uc1xuXG5jb25zdCBjYW52YXNGbkdyYWRpZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtYmdcIilcbmNvbnN0IGNhbnZhc0NtYVNvbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1mZ1wiKVxuY29uc3QgY2FudmFzQ21hTWVhbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1tZWFuc1wiKVxuY29uc3QgY2FudmFzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtZGl2XCIpXG5jYW52YXNEaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYHdpZHRoOiR7Y2FudmFzRGltfXB4OyBoZWlnaHQ6JHtjYW52YXNEaW19cHhgKVxuZm9yIChsZXQgY2FudmFzIG9mIFtjYW52YXNDbWFTb2xzLCBjYW52YXNGbkdyYWRpZW50LCBjYW52YXNDbWFNZWFuc10pIHtcbiAgY2FudmFzLndpZHRoID0gY2FudmFzRGltXG4gIGNhbnZhcy5oZWlnaHQgPSBjYW52YXNEaW1cbn1cblxuY29uc3QgY3R4Rm5HcmFkaWVudCA9IGNhbnZhc0ZuR3JhZGllbnQuZ2V0Q29udGV4dChcIjJkXCIpXG5jb25zdCBjdHhDbWFTb2xzID0gY2FudmFzQ21hU29scy5nZXRDb250ZXh0KFwiMmRcIilcbmNvbnN0IGN0eENtYU1lYW5zID0gY2FudmFzQ21hTWVhbnMuZ2V0Q29udGV4dChcIjJkXCIpXG5jb25zdCBpbWFnZURhdGFCZyA9IGN0eEZuR3JhZGllbnQuY3JlYXRlSW1hZ2VEYXRhKGNhbnZhc0RpbSwgY2FudmFzRGltKVxuY29uc3QgaW1hZ2VEYXRhQmdEYXRhID0gaW1hZ2VEYXRhQmcuZGF0YVxuaW1hZ2VEYXRhQmdEYXRhLmZpbGwoMjU1KVxuXG5jb25zdCBmblNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqLWZuLXNlbGVjdFwiKVxuXG5mb3IgKGxldCBrIG9mIE9iamVjdC5rZXlzKG9iakZucykpIHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICBvcHRpb24udmFsdWUgPSBrXG4gIG9wdGlvbi50ZXh0ID0gb2JqRm5zW2tdLmZhbmN5TmFtZVxuICBpZiAoayA9PT0gb2JqRm5Jbml0KSB7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZVxuICB9XG4gIGZuU2VsZWN0LmFkZChvcHRpb24pXG59XG5cbmZuU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgY29uc3QgZm5OYW1lID0gZS50YXJnZXQudmFsdWVcbiAgdXBkYXRlT2JqRm4oZm5OYW1lKVxufSlcblxuZnVuY3Rpb24gdXBkYXRlT2JqRm4oZm5OYW1lKSB7XG4gIGZvciAobGV0IHdvcmtlciBvZiB2aXpXb3JrZXJzKSB7XG4gICAgd29ya2VyLnBvc3RNZXNzYWdlKFtcImZuTmFtZVwiLCBmbk5hbWVdKVxuICB9XG4gIGNtYVdvcmtlci5wb3N0TWVzc2FnZShbXCJmbk5hbWVcIiwgZm5OYW1lXSlcbiAgem9vbSA9IDFcbn1cblxuY29uc3QgcG9wTXVsdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wLW11bHQtc2VsZWN0XCIpXG5wb3BNdWx0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgbGV0IHBvcHNpemVNdWx0aXBsaWVyID0gZS50YXJnZXQudmFsdWVcbiAgY21hV29ya2VyLnBvc3RNZXNzYWdlKFtcInBvcE11bHRcIiwgcG9wc2l6ZU11bHRpcGxpZXJdKVxufSlcblxuY29uc3Qgem9vbUluQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ6b29tLWluXCIpXG56b29tSW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgem9vbSAqPSAxLjFcbiAgdXBkYXRlWm9vbSgpXG59KVxuXG5jb25zdCB6b29tT3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ6b29tLW91dFwiKVxuem9vbU91dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB6b29tIC89IDEuMVxuICB1cGRhdGVab29tKClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZVpvb20oKSB7XG4gIGZvciAobGV0IHdvcmtlciBvZiB2aXpXb3JrZXJzKSB7XG4gICAgd29ya2VyLnBvc3RNZXNzYWdlKFtcInpvb21cIiwgem9vbV0pXG4gIH1cbiAgY21hV29ya2VyLnBvc3RNZXNzYWdlKFtcInpvb21cIiwgem9vbV0pXG59XG5cbmNvbnN0IHN0ZXBCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0ZXAtYnRuXCIpXG5zdGVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNtYVdvcmtlci5wb3N0TWVzc2FnZShbXCJzdGVwXCIsIHRydWVdKVxufSlcblxuY29uc3QgbWVhbnNQYXRoQ2hlY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lYW5zLXBhdGgtY2hlY2tib3hcIilcbm1lYW5zUGF0aENoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICBkaXNwbGF5TWVhbnNQYXRoID0gbWVhbnNQYXRoQ2hlY2suY2hlY2tlZFxuICBpZiAoZGlzcGxheU1lYW5zUGF0aCkge1xuICAgIGRyYXdNZWFucyhtZWFuc1BhdGhBcnIsIGN0eENtYU1lYW5zKVxuICB9IGVsc2Uge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBjdHhDbWFNZWFucy5jbGVhclJlY3QoXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIGN0eENtYU1lYW5zLmNhbnZhcy53aWR0aCxcbiAgICAgICAgY3R4Q21hTWVhbnMuY2FudmFzLmhlaWdodFxuICAgICAgKVxuICAgIH0pXG4gIH1cbn0pXG5cbmxldCBzY29yZUxpbXNSZWNlaXZlZCxcbiAgbWluU2NvcmUsXG4gIG1heFNjb3JlLFxuICBpbWFnZXNSZWNlaXZlZCA9IDAsXG4gIG1lYW5zUGF0aEFyciA9IG5ldyBGbG9hdDMyQXJyYXkoMCksXG4gIGRpc3BsYXlNZWFuc1BhdGggPSBmYWxzZSxcbiAgZGlzcGxheVJlYWR5ID0gZmFsc2VcbnJlc2V0U2NvcmVMaW1zKClcblxuY29uc3QgY21hV29ya2VyID0gbmV3IFdvcmtlcihuZXcgVVJMKFwiLi9jbWEtd29ya2VyLmpzXCIsIGltcG9ydC5tZXRhLnVybCkpXG5cbmNtYVdvcmtlci5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICBjb25zdCBbaW5mbywgbXNnXSA9IGUuZGF0YVxuICBpZiAoaW5mbyA9PT0gXCJzb2x1dGlvbnNcIikge1xuICAgIHNvbHV0aW9ucyA9IG1zZy5zbGljZSgpXG4gICAgLy8gZHJhd01hcmtlcnMobXNnLCBjdHhDbWFTb2xzKVxuICAgIGNoZWNrRHJhd1JlYWR5KClcbiAgfSBlbHNlIGlmIChpbmZvID09PSBcIm1lYW5zXCIpIHtcbiAgICBtZWFuc1BhdGhBcnIgPSBtc2cuc2xpY2UoKVxuICAgIGlmIChkaXNwbGF5TWVhbnNQYXRoKSB7XG4gICAgICBkcmF3TWVhbnMobWVhbnNQYXRoQXJyLCBjdHhDbWFNZWFucylcbiAgICB9XG4gIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJ6b29tXCIpIHtcbiAgICB6b29tID0gbXNnXG4gICAgdXBkYXRlWm9vbSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhd01lYW5zKG1lYW5zLCBjdHgpIHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KVxuICAgIGN0eC5zYXZlKClcbiAgICBjdHgudHJhbnNsYXRlKDAuNSAqIGN0eC5jYW52YXMud2lkdGgsIDAuNSAqIGN0eC5jYW52YXMuaGVpZ2h0KVxuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIGN0eC5tb3ZlVG8obWVhbnNbMF0sIG1lYW5zWzFdKVxuICAgIGZvciAobGV0IGkgPSAyOyBpIDwgbWVhbnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIGN0eC5saW5lVG8obWVhbnNbaV0sIG1lYW5zW2kgKyAxXSlcbiAgICB9XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgY3R4LmxpbmVXaWR0aCA9IDRcbiAgICBjdHguc3Ryb2tlKClcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCJcbiAgICBjdHgubGluZVdpZHRoID0gMlxuICAgIGN0eC5zdHJva2UoKVxuICAgIGN0eC5yZXN0b3JlKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZHJhd01hcmtlcnMoc29sdXRpb25zLCBjdHgpIHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KVxuICAgIGN0eC5zYXZlKClcbiAgICBjdHgudHJhbnNsYXRlKDAuNSAqIGN0eC5jYW52YXMud2lkdGgsIDAuNSAqIGN0eC5jYW52YXMuaGVpZ2h0KVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29sdXRpb25zLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICBkcmF3TWFya2VyKHNvbHV0aW9uc1tpXSwgc29sdXRpb25zW2kgKyAxXSwgY3R4KVxuICAgIH1cbiAgICBjdHgucmVzdG9yZSgpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgY3R4Rm5HcmFkaWVudC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhQmcsIDAsIDApXG4gICAgY3R4Q21hU29scy5jbGVhclJlY3QoMCwgMCwgY2FudmFzRGltLCBjYW52YXNEaW0pXG4gICAgY3R4Q21hU29scy5zYXZlKClcbiAgICBjdHhDbWFTb2xzLnRyYW5zbGF0ZSgwLjUgKiBjYW52YXNEaW0sIDAuNSAqIGNhbnZhc0RpbSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvbHV0aW9ucy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgZHJhd01hcmtlcihzb2x1dGlvbnNbaV0sIHNvbHV0aW9uc1tpICsgMV0sIGN0eENtYVNvbHMpXG4gICAgfVxuICAgIGN0eENtYVNvbHMucmVzdG9yZSgpXG4gIH0pXG59XG5cbmNvbnN0IG1hcmtlckNhbnZhcyA9IGdldE1hcmtlckNhbnZhcygpXG5cbmZ1bmN0aW9uIGRyYXdNYXJrZXIoeCwgeSwgY3R4KSB7XG4gIGRyYXdDYW52YXMobWFya2VyQ2FudmFzLCBjdHgsIFt4LCB5XSwgMClcbn1cblxuZnVuY3Rpb24gZ2V0TWFya2VyQ2FudmFzKCkge1xuICBmdW5jdGlvbiBkcmF3TGluZVNlZyhzdGFydFB0LCBlbmRQdCwgY29sb3IsIHdlaWdodCwgY3R4KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4Lm1vdmVUbyguLi5zdGFydFB0KVxuICAgIGN0eC5saW5lVG8oLi4uZW5kUHQpXG4gICAgY3R4LmxpbmVXaWR0aCA9IHdlaWdodFxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yXG4gICAgY3R4LnN0cm9rZSgpXG4gIH1cblxuICBjb25zdCBtYXJrZXJDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLFxuICAgIG1hcmtlckNUWCA9IG1hcmtlckNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcbiAgY29uc3QgYm9yZGVyID0gMSxcbiAgICBkID0gMiAqIChib3JkZXIgKyBtYXJrZXJSKVxuXG4gIG1hcmtlckNhbnZhcy53aWR0aCA9IGRcbiAgbWFya2VyQ2FudmFzLmhlaWdodCA9IGRcblxuICBtYXJrZXJDVFgudHJhbnNsYXRlKDAuNSAqIG1hcmtlckNhbnZhcy53aWR0aCwgMC41ICogbWFya2VyQ2FudmFzLmhlaWdodClcblxuICBkcmF3TGluZVNlZyhbLW1hcmtlclIgLSAxLCAwXSwgW21hcmtlclIgKyAxLCAwXSwgXCJibGFja1wiLCA0LCBtYXJrZXJDVFgpXG4gIGRyYXdMaW5lU2VnKFswLCAtbWFya2VyUiAtIDFdLCBbMCwgbWFya2VyUiArIDFdLCBcImJsYWNrXCIsIDQsIG1hcmtlckNUWClcbiAgZHJhd0xpbmVTZWcoWy1tYXJrZXJSLCAwXSwgW21hcmtlclIsIDBdLCBcIndoaXRlXCIsIDIsIG1hcmtlckNUWClcbiAgZHJhd0xpbmVTZWcoWzAsIC1tYXJrZXJSXSwgWzAsIG1hcmtlclJdLCBcIndoaXRlXCIsIDIsIG1hcmtlckNUWClcblxuICByZXR1cm4gbWFya2VyQ2FudmFzXG59XG5cbmNvbnN0IHZpeldvcmtlcnMgPSBbXVxuZm9yIChsZXQgd29ya2VySWR4ID0gMDsgd29ya2VySWR4IDwgblZpeldvcmtlcnM7IHdvcmtlcklkeCsrKSB7XG4gIGNvbnN0IHZpeldvcmtlciA9IG5ldyBXb3JrZXIobmV3IFVSTChcIi4vdml6LXdvcmtlci5qc1wiLCBpbXBvcnQubWV0YS51cmwpKVxuICB2aXpXb3JrZXIucG9zdE1lc3NhZ2UoW1wid29ya2VySURcIiwgd29ya2VySWR4XSlcbiAgdml6V29ya2VyLm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gICAgY29uc3QgW2luZm8sIG1zZ10gPSBlLmRhdGFcbiAgICBpZiAoaW5mbyA9PT0gXCJzY29yZUxpbXNcIikge1xuICAgICAgdXBkYXRlU2NvcmVMaW1zKC4uLm1zZywgdml6V29ya2VycylcbiAgICB9IGVsc2UgaWYgKGluZm8gPT09IFwiaW1hZ2VEYXRhQXJyYXlcIikge1xuICAgICAgdXBkYXRlSW1hZ2VEYXRhKHdvcmtlcklkeCwgbXNnKVxuICAgICAgY2hlY2tEcmF3UmVhZHkoKVxuICAgIH1cbiAgfVxuICB2aXpXb3JrZXJzLnB1c2godml6V29ya2VyKVxufVxuXG5mdW5jdGlvbiByZXNldFNjb3JlTGltcygpIHtcbiAgbWluU2NvcmUgPSBJbmZpbml0eVxuICBtYXhTY29yZSA9IC1JbmZpbml0eVxuICBzY29yZUxpbXNSZWNlaXZlZCA9IDBcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2NvcmVMaW1zKF9taW5TY29yZSwgX21heFNjb3JlLCB2aXpXb3JrZXJzKSB7XG4gIGlmIChfbWluU2NvcmUgPCBtaW5TY29yZSkge1xuICAgIG1pblNjb3JlID0gX21pblNjb3JlXG4gIH1cbiAgaWYgKF9tYXhTY29yZSA+IG1heFNjb3JlKSB7XG4gICAgbWF4U2NvcmUgPSBfbWF4U2NvcmVcbiAgfVxuICBzY29yZUxpbXNSZWNlaXZlZCsrXG4gIGlmIChzY29yZUxpbXNSZWNlaXZlZCA9PT0gblZpeldvcmtlcnMpIHtcbiAgICBmb3IgKGxldCB3b3JrZXIgb2Ygdml6V29ya2Vycykge1xuICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKFtcInNjb3JlTGltc1wiLCBbbWluU2NvcmUsIG1heFNjb3JlXV0pXG4gICAgfVxuICAgIHJlc2V0U2NvcmVMaW1zKClcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVJbWFnZURhdGEod29ya2VySWR4LCBtc2cpIHtcbiAgbGV0IGFycmF5SWR4ID0gKHdvcmtlcklkeCAvIG5WaXpXb3JrZXJzKSAqIGltYWdlRGF0YUJnRGF0YS5sZW5ndGhcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyBpICs9IDMpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgaW1hZ2VEYXRhQmdEYXRhW2FycmF5SWR4ICsgal0gPSBtc2dbaSArIGpdXG4gICAgfVxuICAgIGFycmF5SWR4ICs9IDRcbiAgfVxuICBpbWFnZXNSZWNlaXZlZCsrXG4gIC8vIGlmIChpbWFnZXNSZWNlaXZlZCA9PT0gblZpeldvcmtlcnMpIHtcbiAgLy8gICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAvLyAgICAgY3R4Rm5HcmFkaWVudC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhQmcsIDAsIDApXG4gIC8vICAgfSlcbiAgLy8gICBpbWFnZXNSZWNlaXZlZCA9IDBcbiAgLy8gfVxufVxuXG5mdW5jdGlvbiBjaGVja0RyYXdSZWFkeSgpIHtcbiAgaWYgKGltYWdlc1JlY2VpdmVkID09PSBuVml6V29ya2Vycykge1xuICAgIGRyYXcoKVxuICAgIGltYWdlc1JlY2VpdmVkID0gMFxuICB9XG59XG4iXSwibmFtZXMiOlsiZHJhd0NhbnZhcyIsImNhbnZhc0Zyb20iLCJjdHhUbyIsImNlbnRlciIsImFuZ2xlIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsIm5WaXpXb3JrZXJzIiwiY2FudmFzRGltIiwibWFya2VyUiIsIm9iakZuSW5pdCIsIm1lYW5SYWRpdXNNaW4iLCJtZWFuUmFkaXVzTWF4Iiwic2lnbWFTY2FsZSIsIm5UcmFuc2l0aW9uU3RlcHMiLCJvYmpGbnMiLCJhY2tsZXkiLCJpbnB1dHMiLCJhIiwiYiIsImMiLCJNYXRoIiwiUEkiLCJkIiwiZF9pbnYiLCJzdW0xIiwic3VtMiIsImkiLCJ4aSIsImNvcyIsInRlcm0xIiwiZXhwIiwic3FydCIsInRlcm0yIiwiRSIsImJvaGFjaGV2c2t5MSIsIngxIiwieDIiLCJ0ZXJtMyIsInRlcm00IiwiZ3JpZXdhbmsiLCJsZW5ndGgiLCJzdW0iLCJwcm9kIiwicmFzdHJpZ2luIiwiZmFuY3lOYW1lIiwieHlMaW0iLCJyZXF1aXJlIiwiem9vbSIsInNvbHV0aW9ucyIsImNhbnZhc0ZuR3JhZGllbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzQ21hU29scyIsImNhbnZhc0NtYU1lYW5zIiwiY2FudmFzRGl2Iiwic2V0QXR0cmlidXRlIiwiY2FudmFzIiwiY3R4Rm5HcmFkaWVudCIsImdldENvbnRleHQiLCJjdHhDbWFTb2xzIiwiY3R4Q21hTWVhbnMiLCJpbWFnZURhdGFCZyIsImNyZWF0ZUltYWdlRGF0YSIsImltYWdlRGF0YUJnRGF0YSIsImRhdGEiLCJmaWxsIiwiZm5TZWxlY3QiLCJPYmplY3QiLCJrZXlzIiwiayIsIm9wdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsInRleHQiLCJzZWxlY3RlZCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZm5OYW1lIiwidGFyZ2V0IiwidXBkYXRlT2JqRm4iLCJ2aXpXb3JrZXJzIiwid29ya2VyIiwicG9zdE1lc3NhZ2UiLCJjbWFXb3JrZXIiLCJwb3BNdWx0U2VsZWN0IiwicG9wc2l6ZU11bHRpcGxpZXIiLCJ6b29tSW5CdG4iLCJ1cGRhdGVab29tIiwiem9vbU91dEJ0biIsInN0ZXBCdG4iLCJtZWFuc1BhdGhDaGVjayIsImRpc3BsYXlNZWFuc1BhdGgiLCJjaGVja2VkIiwiZHJhd01lYW5zIiwibWVhbnNQYXRoQXJyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0Iiwic2NvcmVMaW1zUmVjZWl2ZWQiLCJtaW5TY29yZSIsIm1heFNjb3JlIiwiaW1hZ2VzUmVjZWl2ZWQiLCJGbG9hdDMyQXJyYXkiLCJkaXNwbGF5UmVhZHkiLCJyZXNldFNjb3JlTGltcyIsIldvcmtlciIsIlVSTCIsImltcG9ydCIsIm1ldGEiLCJ1cmwiLCJvbm1lc3NhZ2UiLCJpbmZvIiwibXNnIiwic2xpY2UiLCJjaGVja0RyYXdSZWFkeSIsIm1lYW5zIiwiY3R4IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJkcmF3TWFya2VycyIsImRyYXdNYXJrZXIiLCJkcmF3IiwicHV0SW1hZ2VEYXRhIiwibWFya2VyQ2FudmFzIiwiZ2V0TWFya2VyQ2FudmFzIiwieCIsInkiLCJkcmF3TGluZVNlZyIsInN0YXJ0UHQiLCJlbmRQdCIsImNvbG9yIiwid2VpZ2h0IiwibWFya2VyQ1RYIiwiYm9yZGVyIiwid29ya2VySWR4Iiwidml6V29ya2VyIiwidXBkYXRlU2NvcmVMaW1zIiwidXBkYXRlSW1hZ2VEYXRhIiwicHVzaCIsIkluZmluaXR5IiwiX21pblNjb3JlIiwiX21heFNjb3JlIiwiYXJyYXlJZHgiLCJqIl0sInNvdXJjZVJvb3QiOiIifQ==