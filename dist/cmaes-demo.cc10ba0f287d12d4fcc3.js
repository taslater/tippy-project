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
    canvasDim = 600,
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
/******/ 			return "" + chunkId + "." + {"src_pages_cmaes-demo_cma-worker_js":"d11d9571b165efbc9e67","src_pages_cmaes-demo_viz-worker_js":"7db5b8d844cc9db7c182"}[chunkId] + ".js";
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
var markerCanvas = getMarkerCanvas();
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
    solutions = msg.slice();
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

function draw() {
  requestAnimationFrame(function () {
    ctxFnGradient.putImageData(imageDataBg, 0, 0);
    ctxCmaSols.clearRect(0, 0, canvasCmaSols.width, canvasCmaSols.height);
    ctxCmaSols.save();
    ctxCmaSols.translate(0.5 * canvasCmaSols.width, 0.5 * canvasCmaSols.height);

    for (var i = 0; i < solutions.length; i += 2) {
      drawMarker(solutions[i], solutions[i + 1], ctxCmaSols);
    }

    ctxCmaSols.restore();
    ctxCmaSols.restore();
  });
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxFQUF4QixFQUE0QjtBQUMxQm5GLE1BQUFBLGVBQWUsQ0FBQ2tGLFFBQVEsR0FBR0MsQ0FBWixDQUFmLEdBQWdDaEMsR0FBRyxDQUFDeEYsQ0FBQyxHQUFHd0gsQ0FBTCxDQUFuQztBQUNEOztBQUNERCxJQUFBQSxRQUFRLElBQUksQ0FBWjtBQUNEOztBQUNEMUMsRUFBQUEsY0FBYyxHQVJ5QixDQVN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7QUFFRCxTQUFTYSxjQUFULEdBQTBCO0FBQ3hCLE1BQUliLGNBQWMsS0FBS2pHLG9EQUF2QixFQUFvQztBQUNsQ3VILElBQUFBLElBQUk7QUFDSnRCLElBQUFBLGNBQWMsR0FBRyxDQUFqQjtBQUNEO0FBQ0YsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9qcy9kcmF3LWNhbnZhcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvcGFnZXMvY21hZXMtZGVtby9nbG9iYWxzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL29iai1mbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL21haW4uY3NzPzc2YmIiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vaW5kZXguY3NzPzM0MmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBkcmF3Q2FudmFzKGNhbnZhc0Zyb20sIGN0eFRvLCBjZW50ZXIsIGFuZ2xlKSB7XG4gIGN0eFRvLnNhdmUoKVxuICBjdHhUby50cmFuc2xhdGUoY2VudGVyWzBdLCBjZW50ZXJbMV0pXG4gIGlmIChhbmdsZSAhPT0gMCkge1xuICAgIGN0eFRvLnJvdGF0ZShhbmdsZSlcbiAgfVxuICBjdHhUby50cmFuc2xhdGUoLTAuNSAqIGNhbnZhc0Zyb20ud2lkdGgsIC0wLjUgKiBjYW52YXNGcm9tLmhlaWdodClcbiAgY3R4VG8uZHJhd0ltYWdlKGNhbnZhc0Zyb20sIDAsIDApXG4gIGN0eFRvLnJlc3RvcmUoKVxufVxuIiwiZXhwb3J0IGNvbnN0IG5WaXpXb3JrZXJzID0gOCxcbiAgY2FudmFzRGltID0gNjAwLFxuICBtYXJrZXJSID0gNyxcbiAgb2JqRm5Jbml0ID0gXCJhY2tsZXlcIixcbiAgbWVhblJhZGl1c01pbiA9IDAuMyxcbiAgbWVhblJhZGl1c01heCA9IDAuNSxcbiAgc2lnbWFTY2FsZSA9IDAuNSxcbiAgblRyYW5zaXRpb25TdGVwcyA9IDEwXG4iLCIvLyB7XG4vLyAgIGFja2xleTogXCJBY2tsZXlcIixcbi8vICAgYm9oYWNoZXZza3kxOiBcIkJvaGFjaGV2c2t5IE5vLjFcIixcbi8vICAgZ3JpZXdhbms6IFwiR3JpZXdhbmtcIixcbi8vICAgcmFzdHJpZ2luOiBcIlJhc3RyaWdpblwiLFxuLy8gfVxuXG5leHBvcnQgY29uc3Qgb2JqRm5zID0ge1xuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2Fja2xleS5odG1sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vQ29kZS9hY2tsZXltLmh0bWxcbiAgYWNrbGV5OiAoaW5wdXRzKSA9PiB7XG4gICAgLy8gZGVmYXVsdCBhPTIwLCBiPTAuMiwgYz0ycGlcbiAgICBjb25zdCBhID0gMjAsXG4gICAgICBiID0gMC4yLFxuICAgICAgYyA9IDIgKiBNYXRoLlBJXG4gICAgLy8gbGV0IGQgPSBpbnB1dHMubGVuZ3RoXG4gICAgY29uc3QgZCA9IDIsXG4gICAgICBkX2ludiA9IDAuNSAvLyAoMSAvIGQpXG4gICAgbGV0IHN1bTEgPSAwLFxuICAgICAgc3VtMiA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGQ7IGkrKykge1xuICAgICAgbGV0IHhpID0gaW5wdXRzW2ldXG4gICAgICBzdW0xICs9IHhpICogeGlcbiAgICAgIHN1bTIgKz0gTWF0aC5jb3MoYyAqIHhpKVxuICAgIH1cbiAgICAvLyBsZXQgZF9pbnYgPSAxIC8gZFxuICAgIGxldCB0ZXJtMSA9IC1hICogTWF0aC5leHAoLWIgKiBNYXRoLnNxcnQoc3VtMSAqIGRfaW52KSksXG4gICAgICB0ZXJtMiA9IC1NYXRoLmV4cChzdW0yICogZF9pbnYpXG4gICAgcmV0dXJuIHRlcm0xICsgdGVybTIgKyBhICsgTWF0aC5FXG4gIH0sXG4gIC8vIGh0dHA6Ly9iZW5jaG1hcmtmY25zLnh5ei9iZW5jaG1hcmtmY25zL2JvaGFjaGV2c2t5bjFmY24uaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL0NvZGUvYm9oYTFtLmh0bWxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9ib2hhLmh0bWxcbiAgYm9oYWNoZXZza3kxOiAoaW5wdXRzKSA9PiB7XG4gICAgbGV0IHgxID0gaW5wdXRzWzBdXG4gICAgbGV0IHgyID0gaW5wdXRzWzFdXG5cbiAgICBsZXQgdGVybTEgPSB4MSAqIHgxXG4gICAgbGV0IHRlcm0yID0gMiAqIHgyICogeDJcbiAgICBsZXQgdGVybTMgPSAtMC4zICogTWF0aC5jb3MoMyAqIE1hdGguUEkgKiB4MSlcbiAgICBsZXQgdGVybTQgPSAtMC40ICogTWF0aC5jb3MoNCAqIE1hdGguUEkgKiB4MilcblxuICAgIHJldHVybiB0ZXJtMSArIHRlcm0yICsgdGVybTMgKyB0ZXJtNCArIDAuN1xuICB9LFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2dyaWV3YW5rLmh0bWxcbiAgZ3JpZXdhbms6IChpbnB1dHMpID0+IHtcbiAgICBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBsZXQgc3VtID0gMFxuICAgIGxldCBwcm9kID0gMVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bSArPSAoeGkgKiB4aSkgLyA0MDAwXG4gICAgICBwcm9kICo9IE1hdGguY29zKHhpIC8gTWF0aC5zcXJ0KGkgKyAxKSlcbiAgICB9XG4gICAgcmV0dXJuIHN1bSAtIHByb2QgKyAxXG4gIH0sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vcmFzdHIuaHRtbFxuICByYXN0cmlnaW46IChpbnB1dHMpID0+IHtcbiAgICBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBsZXQgc3VtID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bSArPSB4aSAqIHhpIC0gMTAgKiBNYXRoLmNvcygyICogTWF0aC5QSSAqIHhpKVxuICAgIH1cbiAgICByZXR1cm4gMTAgKiBkICsgc3VtXG4gIH0sXG59XG5cbi8vIGZhbmN5IG5hbWVzIGZvciBzZWxlY3QgbWVudVxub2JqRm5zLmFja2xleS5mYW5jeU5hbWUgPSBcIkFja2xleVwiXG5vYmpGbnMuYm9oYWNoZXZza3kxLmZhbmN5TmFtZSA9IFwiQm9oYWNoZXZza3kgTm8uMVwiXG5vYmpGbnMuZ3JpZXdhbmsuZmFuY3lOYW1lID0gXCJHcmlld2Fua1wiXG5vYmpGbnMucmFzdHJpZ2luLmZhbmN5TmFtZSA9IFwiUmFzdHJpZ2luXCJcblxuLy8gZm5MaW1zIGZvciBkaXNwbGF5IGxpbWl0c1xub2JqRm5zLmFja2xleS54eUxpbSA9IDMyLjc2OFxub2JqRm5zLmJvaGFjaGV2c2t5MS54eUxpbSA9IDEwMFxub2JqRm5zLmdyaWV3YW5rLnh5TGltID0gNjAwXG5vYmpGbnMucmFzdHJpZ2luLnh5TGltID0gNS4xMlxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIHtcInNyY19wYWdlc19jbWFlcy1kZW1vX2NtYS13b3JrZXJfanNcIjpcImQxMWQ5NTcxYjE2NWVmYmM5ZTY3XCIsXCJzcmNfcGFnZXNfY21hZXMtZGVtb192aXotd29ya2VyX2pzXCI6XCI3ZGI1YjhkODQ0Y2M5ZGI3YzE4MlwifVtjaHVua0lkXSArIFwiLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJjbWFlcy1kZW1vXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJyZXF1aXJlKFwiLi9pbmRleC5jc3NcIilcbnJlcXVpcmUoXCIuLi8uLi9tYWluLmNzc1wiKVxuaW1wb3J0IHsgb2JqRm5zIH0gZnJvbSBcIi4vb2JqLWZucy5qc1wiXG5pbXBvcnQgeyBjYW52YXNEaW0sIG1hcmtlclIsIG5WaXpXb3JrZXJzLCBvYmpGbkluaXQgfSBmcm9tIFwiLi9nbG9iYWxzLmpzXCJcbmltcG9ydCB7IGRyYXdDYW52YXMgfSBmcm9tIFwiLi8uLi8uLi9qcy9kcmF3LWNhbnZhcy5qc1wiXG5cbmxldCB6b29tID0gMSxcbiAgc29sdXRpb25zXG5cbmNvbnN0IGNhbnZhc0ZuR3JhZGllbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1iZ1wiKVxuY29uc3QgY2FudmFzQ21hU29scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLWZnXCIpXG5jb25zdCBjYW52YXNDbWFNZWFucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLW1lYW5zXCIpXG5jb25zdCBjYW52YXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1kaXZcIilcbmNhbnZhc0Rpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgd2lkdGg6JHtjYW52YXNEaW19cHg7IGhlaWdodDoke2NhbnZhc0RpbX1weGApXG5mb3IgKGxldCBjYW52YXMgb2YgW2NhbnZhc0NtYVNvbHMsIGNhbnZhc0ZuR3JhZGllbnQsIGNhbnZhc0NtYU1lYW5zXSkge1xuICBjYW52YXMud2lkdGggPSBjYW52YXNEaW1cbiAgY2FudmFzLmhlaWdodCA9IGNhbnZhc0RpbVxufVxuXG5jb25zdCBjdHhGbkdyYWRpZW50ID0gY2FudmFzRm5HcmFkaWVudC5nZXRDb250ZXh0KFwiMmRcIilcbmNvbnN0IGN0eENtYVNvbHMgPSBjYW52YXNDbWFTb2xzLmdldENvbnRleHQoXCIyZFwiKVxuY29uc3QgY3R4Q21hTWVhbnMgPSBjYW52YXNDbWFNZWFucy5nZXRDb250ZXh0KFwiMmRcIilcbmNvbnN0IGltYWdlRGF0YUJnID0gY3R4Rm5HcmFkaWVudC5jcmVhdGVJbWFnZURhdGEoY2FudmFzRGltLCBjYW52YXNEaW0pXG5jb25zdCBpbWFnZURhdGFCZ0RhdGEgPSBpbWFnZURhdGFCZy5kYXRhXG5pbWFnZURhdGFCZ0RhdGEuZmlsbCgyNTUpXG5cbmNvbnN0IG1hcmtlckNhbnZhcyA9IGdldE1hcmtlckNhbnZhcygpXG5cbmNvbnN0IGZuU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmotZm4tc2VsZWN0XCIpXG5cbmZvciAobGV0IGsgb2YgT2JqZWN0LmtleXMob2JqRm5zKSkge1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gIG9wdGlvbi52YWx1ZSA9IGtcbiAgb3B0aW9uLnRleHQgPSBvYmpGbnNba10uZmFuY3lOYW1lXG4gIGlmIChrID09PSBvYmpGbkluaXQpIHtcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlXG4gIH1cbiAgZm5TZWxlY3QuYWRkKG9wdGlvbilcbn1cblxuZm5TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICBjb25zdCBmbk5hbWUgPSBlLnRhcmdldC52YWx1ZVxuICB1cGRhdGVPYmpGbihmbk5hbWUpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVPYmpGbihmbk5hbWUpIHtcbiAgZm9yIChsZXQgd29ya2VyIG9mIHZpeldvcmtlcnMpIHtcbiAgICB3b3JrZXIucG9zdE1lc3NhZ2UoW1wiZm5OYW1lXCIsIGZuTmFtZV0pXG4gIH1cbiAgY21hV29ya2VyLnBvc3RNZXNzYWdlKFtcImZuTmFtZVwiLCBmbk5hbWVdKVxuICB6b29tID0gMVxufVxuXG5jb25zdCBwb3BNdWx0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3AtbXVsdC1zZWxlY3RcIilcbnBvcE11bHRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICBsZXQgcG9wc2l6ZU11bHRpcGxpZXIgPSBlLnRhcmdldC52YWx1ZVxuICBjbWFXb3JrZXIucG9zdE1lc3NhZ2UoW1wicG9wTXVsdFwiLCBwb3BzaXplTXVsdGlwbGllcl0pXG59KVxuXG5jb25zdCB6b29tSW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInpvb20taW5cIilcbnpvb21JbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB6b29tICo9IDEuMVxuICB1cGRhdGVab29tKClcbn0pXG5cbmNvbnN0IHpvb21PdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInpvb20tb3V0XCIpXG56b29tT3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHpvb20gLz0gMS4xXG4gIHVwZGF0ZVpvb20oKVxufSlcblxuZnVuY3Rpb24gdXBkYXRlWm9vbSgpIHtcbiAgZm9yIChsZXQgd29ya2VyIG9mIHZpeldvcmtlcnMpIHtcbiAgICB3b3JrZXIucG9zdE1lc3NhZ2UoW1wiem9vbVwiLCB6b29tXSlcbiAgfVxuICBjbWFXb3JrZXIucG9zdE1lc3NhZ2UoW1wiem9vbVwiLCB6b29tXSlcbn1cblxuY29uc3Qgc3RlcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RlcC1idG5cIilcbnN0ZXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY21hV29ya2VyLnBvc3RNZXNzYWdlKFtcInN0ZXBcIiwgdHJ1ZV0pXG59KVxuXG5jb25zdCBtZWFuc1BhdGhDaGVjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVhbnMtcGF0aC1jaGVja2JveFwiKVxubWVhbnNQYXRoQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIGRpc3BsYXlNZWFuc1BhdGggPSBtZWFuc1BhdGhDaGVjay5jaGVja2VkXG4gIGlmIChkaXNwbGF5TWVhbnNQYXRoKSB7XG4gICAgZHJhd01lYW5zKG1lYW5zUGF0aEFyciwgY3R4Q21hTWVhbnMpXG4gIH0gZWxzZSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGN0eENtYU1lYW5zLmNsZWFyUmVjdChcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgY3R4Q21hTWVhbnMuY2FudmFzLndpZHRoLFxuICAgICAgICBjdHhDbWFNZWFucy5jYW52YXMuaGVpZ2h0XG4gICAgICApXG4gICAgfSlcbiAgfVxufSlcblxubGV0IHNjb3JlTGltc1JlY2VpdmVkLFxuICBtaW5TY29yZSxcbiAgbWF4U2NvcmUsXG4gIGltYWdlc1JlY2VpdmVkID0gMCxcbiAgbWVhbnNQYXRoQXJyID0gbmV3IEZsb2F0MzJBcnJheSgwKSxcbiAgZGlzcGxheU1lYW5zUGF0aCA9IGZhbHNlLFxuICBkaXNwbGF5UmVhZHkgPSBmYWxzZVxucmVzZXRTY29yZUxpbXMoKVxuXG5jb25zdCBjbWFXb3JrZXIgPSBuZXcgV29ya2VyKG5ldyBVUkwoXCIuL2NtYS13b3JrZXIuanNcIiwgaW1wb3J0Lm1ldGEudXJsKSlcblxuY21hV29ya2VyLm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gIGNvbnN0IFtpbmZvLCBtc2ddID0gZS5kYXRhXG4gIGlmIChpbmZvID09PSBcInNvbHV0aW9uc1wiKSB7XG4gICAgc29sdXRpb25zID0gbXNnLnNsaWNlKClcbiAgICBjaGVja0RyYXdSZWFkeSgpXG4gIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJtZWFuc1wiKSB7XG4gICAgbWVhbnNQYXRoQXJyID0gbXNnLnNsaWNlKClcbiAgICBpZiAoZGlzcGxheU1lYW5zUGF0aCkge1xuICAgICAgZHJhd01lYW5zKG1lYW5zUGF0aEFyciwgY3R4Q21hTWVhbnMpXG4gICAgfVxuICB9IGVsc2UgaWYgKGluZm8gPT09IFwiem9vbVwiKSB7XG4gICAgem9vbSA9IG1zZ1xuICAgIHVwZGF0ZVpvb20oKVxuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXdNZWFucyhtZWFucywgY3R4KSB7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodClcbiAgICBjdHguc2F2ZSgpXG4gICAgY3R4LnRyYW5zbGF0ZSgwLjUgKiBjdHguY2FudmFzLndpZHRoLCAwLjUgKiBjdHguY2FudmFzLmhlaWdodClcbiAgICBjdHguYmVnaW5QYXRoKClcbiAgICBjdHgubW92ZVRvKG1lYW5zWzBdLCBtZWFuc1sxXSlcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8IG1lYW5zLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICBjdHgubGluZVRvKG1lYW5zW2ldLCBtZWFuc1tpICsgMV0pXG4gICAgfVxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgIGN0eC5saW5lV2lkdGggPSA0XG4gICAgY3R4LnN0cm9rZSgpXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgY3R4LmxpbmVXaWR0aCA9IDJcbiAgICBjdHguc3Ryb2tlKClcbiAgICBjdHgucmVzdG9yZSgpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgY3R4Rm5HcmFkaWVudC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhQmcsIDAsIDApXG4gICAgY3R4Q21hU29scy5jbGVhclJlY3QoMCwgMCwgY2FudmFzQ21hU29scy53aWR0aCwgY2FudmFzQ21hU29scy5oZWlnaHQpXG4gICAgY3R4Q21hU29scy5zYXZlKClcbiAgICBjdHhDbWFTb2xzLnRyYW5zbGF0ZSgwLjUgKiBjYW52YXNDbWFTb2xzLndpZHRoLCAwLjUgKiBjYW52YXNDbWFTb2xzLmhlaWdodClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvbHV0aW9ucy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgZHJhd01hcmtlcihzb2x1dGlvbnNbaV0sIHNvbHV0aW9uc1tpICsgMV0sIGN0eENtYVNvbHMpXG4gICAgfVxuICAgIGN0eENtYVNvbHMucmVzdG9yZSgpXG4gICAgY3R4Q21hU29scy5yZXN0b3JlKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZHJhd01hcmtlcih4LCB5LCBjdHgpIHtcbiAgZHJhd0NhbnZhcyhtYXJrZXJDYW52YXMsIGN0eCwgW3gsIHldLCAwKVxufVxuXG5mdW5jdGlvbiBnZXRNYXJrZXJDYW52YXMoKSB7XG4gIGZ1bmN0aW9uIGRyYXdMaW5lU2VnKHN0YXJ0UHQsIGVuZFB0LCBjb2xvciwgd2VpZ2h0LCBjdHgpIHtcbiAgICBjdHguYmVnaW5QYXRoKClcbiAgICBjdHgubW92ZVRvKC4uLnN0YXJ0UHQpXG4gICAgY3R4LmxpbmVUbyguLi5lbmRQdClcbiAgICBjdHgubGluZVdpZHRoID0gd2VpZ2h0XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3JcbiAgICBjdHguc3Ryb2tlKClcbiAgfVxuXG4gIGNvbnN0IG1hcmtlckNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksXG4gICAgbWFya2VyQ1RYID0gbWFya2VyQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxuICBjb25zdCBib3JkZXIgPSAxLFxuICAgIGQgPSAyICogKGJvcmRlciArIG1hcmtlclIpXG5cbiAgbWFya2VyQ2FudmFzLndpZHRoID0gZFxuICBtYXJrZXJDYW52YXMuaGVpZ2h0ID0gZFxuXG4gIG1hcmtlckNUWC50cmFuc2xhdGUoMC41ICogbWFya2VyQ2FudmFzLndpZHRoLCAwLjUgKiBtYXJrZXJDYW52YXMuaGVpZ2h0KVxuXG4gIGRyYXdMaW5lU2VnKFstbWFya2VyUiAtIDEsIDBdLCBbbWFya2VyUiArIDEsIDBdLCBcImJsYWNrXCIsIDQsIG1hcmtlckNUWClcbiAgZHJhd0xpbmVTZWcoWzAsIC1tYXJrZXJSIC0gMV0sIFswLCBtYXJrZXJSICsgMV0sIFwiYmxhY2tcIiwgNCwgbWFya2VyQ1RYKVxuICBkcmF3TGluZVNlZyhbLW1hcmtlclIsIDBdLCBbbWFya2VyUiwgMF0sIFwid2hpdGVcIiwgMiwgbWFya2VyQ1RYKVxuICBkcmF3TGluZVNlZyhbMCwgLW1hcmtlclJdLCBbMCwgbWFya2VyUl0sIFwid2hpdGVcIiwgMiwgbWFya2VyQ1RYKVxuXG4gIHJldHVybiBtYXJrZXJDYW52YXNcbn1cblxuY29uc3Qgdml6V29ya2VycyA9IFtdXG5mb3IgKGxldCB3b3JrZXJJZHggPSAwOyB3b3JrZXJJZHggPCBuVml6V29ya2Vyczsgd29ya2VySWR4KyspIHtcbiAgY29uc3Qgdml6V29ya2VyID0gbmV3IFdvcmtlcihuZXcgVVJMKFwiLi92aXotd29ya2VyLmpzXCIsIGltcG9ydC5tZXRhLnVybCkpXG4gIHZpeldvcmtlci5wb3N0TWVzc2FnZShbXCJ3b3JrZXJJRFwiLCB3b3JrZXJJZHhdKVxuICB2aXpXb3JrZXIub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICBjb25zdCBbaW5mbywgbXNnXSA9IGUuZGF0YVxuICAgIGlmIChpbmZvID09PSBcInNjb3JlTGltc1wiKSB7XG4gICAgICB1cGRhdGVTY29yZUxpbXMoLi4ubXNnLCB2aXpXb3JrZXJzKVxuICAgIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJpbWFnZURhdGFBcnJheVwiKSB7XG4gICAgICB1cGRhdGVJbWFnZURhdGEod29ya2VySWR4LCBtc2cpXG4gICAgICBjaGVja0RyYXdSZWFkeSgpXG4gICAgfVxuICB9XG4gIHZpeldvcmtlcnMucHVzaCh2aXpXb3JrZXIpXG59XG5cbmZ1bmN0aW9uIHJlc2V0U2NvcmVMaW1zKCkge1xuICBtaW5TY29yZSA9IEluZmluaXR5XG4gIG1heFNjb3JlID0gLUluZmluaXR5XG4gIHNjb3JlTGltc1JlY2VpdmVkID0gMFxufVxuXG5mdW5jdGlvbiB1cGRhdGVTY29yZUxpbXMoX21pblNjb3JlLCBfbWF4U2NvcmUsIHZpeldvcmtlcnMpIHtcbiAgaWYgKF9taW5TY29yZSA8IG1pblNjb3JlKSB7XG4gICAgbWluU2NvcmUgPSBfbWluU2NvcmVcbiAgfVxuICBpZiAoX21heFNjb3JlID4gbWF4U2NvcmUpIHtcbiAgICBtYXhTY29yZSA9IF9tYXhTY29yZVxuICB9XG4gIHNjb3JlTGltc1JlY2VpdmVkKytcbiAgaWYgKHNjb3JlTGltc1JlY2VpdmVkID09PSBuVml6V29ya2Vycykge1xuICAgIGZvciAobGV0IHdvcmtlciBvZiB2aXpXb3JrZXJzKSB7XG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoW1wic2NvcmVMaW1zXCIsIFttaW5TY29yZSwgbWF4U2NvcmVdXSlcbiAgICB9XG4gICAgcmVzZXRTY29yZUxpbXMoKVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUltYWdlRGF0YSh3b3JrZXJJZHgsIG1zZykge1xuICBsZXQgYXJyYXlJZHggPSAod29ya2VySWR4IC8gblZpeldvcmtlcnMpICogaW1hZ2VEYXRhQmdEYXRhLmxlbmd0aFxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1zZy5sZW5ndGg7IGkgKz0gMykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICBpbWFnZURhdGFCZ0RhdGFbYXJyYXlJZHggKyBqXSA9IG1zZ1tpICsgal1cbiAgICB9XG4gICAgYXJyYXlJZHggKz0gNFxuICB9XG4gIGltYWdlc1JlY2VpdmVkKytcbiAgLy8gaWYgKGltYWdlc1JlY2VpdmVkID09PSBuVml6V29ya2Vycykge1xuICAvLyAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gIC8vICAgICBjdHhGbkdyYWRpZW50LnB1dEltYWdlRGF0YShpbWFnZURhdGFCZywgMCwgMClcbiAgLy8gICB9KVxuICAvLyAgIGltYWdlc1JlY2VpdmVkID0gMFxuICAvLyB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRHJhd1JlYWR5KCkge1xuICBpZiAoaW1hZ2VzUmVjZWl2ZWQgPT09IG5WaXpXb3JrZXJzKSB7XG4gICAgZHJhdygpXG4gICAgaW1hZ2VzUmVjZWl2ZWQgPSAwXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkcmF3Q2FudmFzIiwiY2FudmFzRnJvbSIsImN0eFRvIiwiY2VudGVyIiwiYW5nbGUiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiblZpeldvcmtlcnMiLCJjYW52YXNEaW0iLCJtYXJrZXJSIiwib2JqRm5Jbml0IiwibWVhblJhZGl1c01pbiIsIm1lYW5SYWRpdXNNYXgiLCJzaWdtYVNjYWxlIiwiblRyYW5zaXRpb25TdGVwcyIsIm9iakZucyIsImFja2xleSIsImlucHV0cyIsImEiLCJiIiwiYyIsIk1hdGgiLCJQSSIsImQiLCJkX2ludiIsInN1bTEiLCJzdW0yIiwiaSIsInhpIiwiY29zIiwidGVybTEiLCJleHAiLCJzcXJ0IiwidGVybTIiLCJFIiwiYm9oYWNoZXZza3kxIiwieDEiLCJ4MiIsInRlcm0zIiwidGVybTQiLCJncmlld2FuayIsImxlbmd0aCIsInN1bSIsInByb2QiLCJyYXN0cmlnaW4iLCJmYW5jeU5hbWUiLCJ4eUxpbSIsInJlcXVpcmUiLCJ6b29tIiwic29sdXRpb25zIiwiY2FudmFzRm5HcmFkaWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW52YXNDbWFTb2xzIiwiY2FudmFzQ21hTWVhbnMiLCJjYW52YXNEaXYiLCJzZXRBdHRyaWJ1dGUiLCJjYW52YXMiLCJjdHhGbkdyYWRpZW50IiwiZ2V0Q29udGV4dCIsImN0eENtYVNvbHMiLCJjdHhDbWFNZWFucyIsImltYWdlRGF0YUJnIiwiY3JlYXRlSW1hZ2VEYXRhIiwiaW1hZ2VEYXRhQmdEYXRhIiwiZGF0YSIsImZpbGwiLCJtYXJrZXJDYW52YXMiLCJnZXRNYXJrZXJDYW52YXMiLCJmblNlbGVjdCIsIk9iamVjdCIsImtleXMiLCJrIiwib3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwidGV4dCIsInNlbGVjdGVkIiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJmbk5hbWUiLCJ0YXJnZXQiLCJ1cGRhdGVPYmpGbiIsInZpeldvcmtlcnMiLCJ3b3JrZXIiLCJwb3N0TWVzc2FnZSIsImNtYVdvcmtlciIsInBvcE11bHRTZWxlY3QiLCJwb3BzaXplTXVsdGlwbGllciIsInpvb21JbkJ0biIsInVwZGF0ZVpvb20iLCJ6b29tT3V0QnRuIiwic3RlcEJ0biIsIm1lYW5zUGF0aENoZWNrIiwiZGlzcGxheU1lYW5zUGF0aCIsImNoZWNrZWQiLCJkcmF3TWVhbnMiLCJtZWFuc1BhdGhBcnIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJzY29yZUxpbXNSZWNlaXZlZCIsIm1pblNjb3JlIiwibWF4U2NvcmUiLCJpbWFnZXNSZWNlaXZlZCIsIkZsb2F0MzJBcnJheSIsImRpc3BsYXlSZWFkeSIsInJlc2V0U2NvcmVMaW1zIiwiV29ya2VyIiwiVVJMIiwiaW1wb3J0IiwibWV0YSIsInVybCIsIm9ubWVzc2FnZSIsImluZm8iLCJtc2ciLCJzbGljZSIsImNoZWNrRHJhd1JlYWR5IiwibWVhbnMiLCJjdHgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsImRyYXciLCJwdXRJbWFnZURhdGEiLCJkcmF3TWFya2VyIiwieCIsInkiLCJkcmF3TGluZVNlZyIsInN0YXJ0UHQiLCJlbmRQdCIsImNvbG9yIiwid2VpZ2h0IiwibWFya2VyQ1RYIiwiYm9yZGVyIiwid29ya2VySWR4Iiwidml6V29ya2VyIiwidXBkYXRlU2NvcmVMaW1zIiwidXBkYXRlSW1hZ2VEYXRhIiwicHVzaCIsIkluZmluaXR5IiwiX21pblNjb3JlIiwiX21heFNjb3JlIiwiYXJyYXlJZHgiLCJqIl0sInNvdXJjZVJvb3QiOiIifQ==