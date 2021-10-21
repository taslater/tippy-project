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
/******/ 			return "" + chunkId + "." + {"src_pages_cmaes-demo_cma-worker_js":"b057f6e934a9186e81e2","src_pages_cmaes-demo_viz-worker_js":"3a985f94049e42592065"}[chunkId] + ".js";
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
    solutions,
    solutionsFresh = false;
var scoreLimsReceived,
    minScore,
    maxScore,
    imagesReceived = 0,
    meansPathArr = new Float32Array(0),
    displayMeansPath = false;
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
resetScoreLims();
var cmaWorker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_pages_cmaes-demo_cma-worker_js"), __webpack_require__.b));

cmaWorker.onmessage = function (e) {
  var _e$data = _slicedToArray(e.data, 2),
      info = _e$data[0],
      msg = _e$data[1];

  if (info === "solutions") {
    solutions = msg.slice();
    solutionsFresh = true;
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

    ctxCmaSols.restore(); // ctxCmaSols.restore()

    solutionsFresh = false;
    imagesReceived = 0;
    cmaWorker.postMessage(["drawReady", true]);
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
  if (imagesReceived === _globals_js__WEBPACK_IMPORTED_MODULE_1__.nVizWorkers && solutionsFresh) {
    draw();
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCQSxDQUFDLEdBQUd3RixHQUFHLENBQUMxRSxNQUF4QixFQUFnQ2QsQ0FBQyxJQUFJLENBQXJDLEVBQXdDO0FBQ3RDLFNBQUssSUFBSXdILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUIzRSxNQUFBQSxlQUFlLENBQUMwRSxRQUFRLEdBQUdDLENBQVosQ0FBZixHQUFnQ2hDLEdBQUcsQ0FBQ3hGLENBQUMsR0FBR3dILENBQUwsQ0FBbkM7QUFDRDs7QUFDREQsSUFBQUEsUUFBUSxJQUFJLENBQVo7QUFDRDs7QUFDRDVGLEVBQUFBLGNBQWMsR0FSeUIsQ0FTdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQsU0FBUytELGNBQVQsR0FBMEI7QUFDeEIsTUFBSS9ELGNBQWMsS0FBSy9DLG9EQUFuQixJQUFrQzJDLGNBQXRDLEVBQXNEO0FBQ3BENEUsSUFBQUEsSUFBSTtBQUNMO0FBQ0YsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9qcy9kcmF3LWNhbnZhcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvcGFnZXMvY21hZXMtZGVtby9nbG9iYWxzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL29iai1mbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL21haW4uY3NzPzc2YmIiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vaW5kZXguY3NzPzM0MmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBkcmF3Q2FudmFzKGNhbnZhc0Zyb20sIGN0eFRvLCBjZW50ZXIsIGFuZ2xlKSB7XG4gIGN0eFRvLnNhdmUoKVxuICBjdHhUby50cmFuc2xhdGUoY2VudGVyWzBdLCBjZW50ZXJbMV0pXG4gIGlmIChhbmdsZSAhPT0gMCkge1xuICAgIGN0eFRvLnJvdGF0ZShhbmdsZSlcbiAgfVxuICBjdHhUby50cmFuc2xhdGUoLTAuNSAqIGNhbnZhc0Zyb20ud2lkdGgsIC0wLjUgKiBjYW52YXNGcm9tLmhlaWdodClcbiAgY3R4VG8uZHJhd0ltYWdlKGNhbnZhc0Zyb20sIDAsIDApXG4gIGN0eFRvLnJlc3RvcmUoKVxufVxuIiwiZXhwb3J0IGNvbnN0IG5WaXpXb3JrZXJzID0gOCxcbiAgY2FudmFzRGltID0gNjAwLFxuICBtYXJrZXJSID0gNyxcbiAgb2JqRm5Jbml0ID0gXCJhY2tsZXlcIixcbiAgbWVhblJhZGl1c01pbiA9IDAuMyxcbiAgbWVhblJhZGl1c01heCA9IDAuNSxcbiAgc2lnbWFTY2FsZSA9IDAuNSxcbiAgem9vbVN0ZXBNYWcgPSAxLjA1XG4iLCIvLyB7XG4vLyAgIGFja2xleTogXCJBY2tsZXlcIixcbi8vICAgYm9oYWNoZXZza3kxOiBcIkJvaGFjaGV2c2t5IE5vLjFcIixcbi8vICAgZ3JpZXdhbms6IFwiR3JpZXdhbmtcIixcbi8vICAgcmFzdHJpZ2luOiBcIlJhc3RyaWdpblwiLFxuLy8gfVxuXG5leHBvcnQgY29uc3Qgb2JqRm5zID0ge1xuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2Fja2xleS5odG1sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vQ29kZS9hY2tsZXltLmh0bWxcbiAgYWNrbGV5OiAoaW5wdXRzKSA9PiB7XG4gICAgLy8gZGVmYXVsdCBhPTIwLCBiPTAuMiwgYz0ycGlcbiAgICBjb25zdCBhID0gMjAsXG4gICAgICBiID0gMC4yLFxuICAgICAgYyA9IDIgKiBNYXRoLlBJXG4gICAgLy8gbGV0IGQgPSBpbnB1dHMubGVuZ3RoXG4gICAgY29uc3QgZCA9IDIsXG4gICAgICBkX2ludiA9IDAuNSAvLyAoMSAvIGQpXG4gICAgbGV0IHN1bTEgPSAwLFxuICAgICAgc3VtMiA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGQ7IGkrKykge1xuICAgICAgbGV0IHhpID0gaW5wdXRzW2ldXG4gICAgICBzdW0xICs9IHhpICogeGlcbiAgICAgIHN1bTIgKz0gTWF0aC5jb3MoYyAqIHhpKVxuICAgIH1cbiAgICAvLyBsZXQgZF9pbnYgPSAxIC8gZFxuICAgIGxldCB0ZXJtMSA9IC1hICogTWF0aC5leHAoLWIgKiBNYXRoLnNxcnQoc3VtMSAqIGRfaW52KSksXG4gICAgICB0ZXJtMiA9IC1NYXRoLmV4cChzdW0yICogZF9pbnYpXG4gICAgcmV0dXJuIHRlcm0xICsgdGVybTIgKyBhICsgTWF0aC5FXG4gIH0sXG4gIC8vIGh0dHA6Ly9iZW5jaG1hcmtmY25zLnh5ei9iZW5jaG1hcmtmY25zL2JvaGFjaGV2c2t5bjFmY24uaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL0NvZGUvYm9oYTFtLmh0bWxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9ib2hhLmh0bWxcbiAgYm9oYWNoZXZza3kxOiAoaW5wdXRzKSA9PiB7XG4gICAgbGV0IHgxID0gaW5wdXRzWzBdXG4gICAgbGV0IHgyID0gaW5wdXRzWzFdXG5cbiAgICBsZXQgdGVybTEgPSB4MSAqIHgxXG4gICAgbGV0IHRlcm0yID0gMiAqIHgyICogeDJcbiAgICBsZXQgdGVybTMgPSAtMC4zICogTWF0aC5jb3MoMyAqIE1hdGguUEkgKiB4MSlcbiAgICBsZXQgdGVybTQgPSAtMC40ICogTWF0aC5jb3MoNCAqIE1hdGguUEkgKiB4MilcblxuICAgIHJldHVybiB0ZXJtMSArIHRlcm0yICsgdGVybTMgKyB0ZXJtNCArIDAuN1xuICB9LFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2dyaWV3YW5rLmh0bWxcbiAgZ3JpZXdhbms6IChpbnB1dHMpID0+IHtcbiAgICBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBsZXQgc3VtID0gMFxuICAgIGxldCBwcm9kID0gMVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bSArPSAoeGkgKiB4aSkgLyA0MDAwXG4gICAgICBwcm9kICo9IE1hdGguY29zKHhpIC8gTWF0aC5zcXJ0KGkgKyAxKSlcbiAgICB9XG4gICAgcmV0dXJuIHN1bSAtIHByb2QgKyAxXG4gIH0sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vcmFzdHIuaHRtbFxuICByYXN0cmlnaW46IChpbnB1dHMpID0+IHtcbiAgICBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBsZXQgc3VtID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bSArPSB4aSAqIHhpIC0gMTAgKiBNYXRoLmNvcygyICogTWF0aC5QSSAqIHhpKVxuICAgIH1cbiAgICByZXR1cm4gMTAgKiBkICsgc3VtXG4gIH0sXG59XG5cbi8vIGZhbmN5IG5hbWVzIGZvciBzZWxlY3QgbWVudVxub2JqRm5zLmFja2xleS5mYW5jeU5hbWUgPSBcIkFja2xleVwiXG5vYmpGbnMuYm9oYWNoZXZza3kxLmZhbmN5TmFtZSA9IFwiQm9oYWNoZXZza3kgTm8uMVwiXG5vYmpGbnMuZ3JpZXdhbmsuZmFuY3lOYW1lID0gXCJHcmlld2Fua1wiXG5vYmpGbnMucmFzdHJpZ2luLmZhbmN5TmFtZSA9IFwiUmFzdHJpZ2luXCJcblxuLy8gZm5MaW1zIGZvciBkaXNwbGF5IGxpbWl0c1xub2JqRm5zLmFja2xleS54eUxpbSA9IDMyLjc2OFxub2JqRm5zLmJvaGFjaGV2c2t5MS54eUxpbSA9IDEwMFxub2JqRm5zLmdyaWV3YW5rLnh5TGltID0gNjAwXG5vYmpGbnMucmFzdHJpZ2luLnh5TGltID0gNS4xMlxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIHtcInNyY19wYWdlc19jbWFlcy1kZW1vX2NtYS13b3JrZXJfanNcIjpcImIwNTdmNmU5MzRhOTE4NmU4MWUyXCIsXCJzcmNfcGFnZXNfY21hZXMtZGVtb192aXotd29ya2VyX2pzXCI6XCIzYTk4NWY5NDA0OWU0MjU5MjA2NVwifVtjaHVua0lkXSArIFwiLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJjbWFlcy1kZW1vXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJyZXF1aXJlKFwiLi9pbmRleC5jc3NcIilcbnJlcXVpcmUoXCIuLi8uLi9tYWluLmNzc1wiKVxuaW1wb3J0IHsgb2JqRm5zIH0gZnJvbSBcIi4vb2JqLWZucy5qc1wiXG5pbXBvcnQgeyBjYW52YXNEaW0sIG1hcmtlclIsIG5WaXpXb3JrZXJzLCBvYmpGbkluaXQgfSBmcm9tIFwiLi9nbG9iYWxzLmpzXCJcbmltcG9ydCB7IGRyYXdDYW52YXMgfSBmcm9tIFwiLi8uLi8uLi9qcy9kcmF3LWNhbnZhcy5qc1wiXG5cbmxldCB6b29tID0gMSxcbiAgc29sdXRpb25zLFxuICBzb2x1dGlvbnNGcmVzaCA9IGZhbHNlXG5cbmxldCBzY29yZUxpbXNSZWNlaXZlZCxcbiAgbWluU2NvcmUsXG4gIG1heFNjb3JlLFxuICBpbWFnZXNSZWNlaXZlZCA9IDAsXG4gIG1lYW5zUGF0aEFyciA9IG5ldyBGbG9hdDMyQXJyYXkoMCksXG4gIGRpc3BsYXlNZWFuc1BhdGggPSBmYWxzZVxuXG5jb25zdCBjYW52YXNGbkdyYWRpZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtYmdcIilcbmNvbnN0IGNhbnZhc0NtYVNvbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1mZ1wiKVxuY29uc3QgY2FudmFzQ21hTWVhbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1tZWFuc1wiKVxuY29uc3QgY2FudmFzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtZGl2XCIpXG5jYW52YXNEaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYHdpZHRoOiR7Y2FudmFzRGltfXB4OyBoZWlnaHQ6JHtjYW52YXNEaW19cHhgKVxuZm9yIChsZXQgY2FudmFzIG9mIFtjYW52YXNDbWFTb2xzLCBjYW52YXNGbkdyYWRpZW50LCBjYW52YXNDbWFNZWFuc10pIHtcbiAgY2FudmFzLndpZHRoID0gY2FudmFzRGltXG4gIGNhbnZhcy5oZWlnaHQgPSBjYW52YXNEaW1cbn1cblxuY29uc3QgY3R4Rm5HcmFkaWVudCA9IGNhbnZhc0ZuR3JhZGllbnQuZ2V0Q29udGV4dChcIjJkXCIpXG5jb25zdCBjdHhDbWFTb2xzID0gY2FudmFzQ21hU29scy5nZXRDb250ZXh0KFwiMmRcIilcbmNvbnN0IGN0eENtYU1lYW5zID0gY2FudmFzQ21hTWVhbnMuZ2V0Q29udGV4dChcIjJkXCIpXG5jb25zdCBpbWFnZURhdGFCZyA9IGN0eEZuR3JhZGllbnQuY3JlYXRlSW1hZ2VEYXRhKGNhbnZhc0RpbSwgY2FudmFzRGltKVxuY29uc3QgaW1hZ2VEYXRhQmdEYXRhID0gaW1hZ2VEYXRhQmcuZGF0YVxuaW1hZ2VEYXRhQmdEYXRhLmZpbGwoMjU1KVxuXG5jb25zdCBtYXJrZXJDYW52YXMgPSBnZXRNYXJrZXJDYW52YXMoKVxuXG5jb25zdCBmblNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqLWZuLXNlbGVjdFwiKVxuXG5mb3IgKGxldCBrIG9mIE9iamVjdC5rZXlzKG9iakZucykpIHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICBvcHRpb24udmFsdWUgPSBrXG4gIG9wdGlvbi50ZXh0ID0gb2JqRm5zW2tdLmZhbmN5TmFtZVxuICBpZiAoayA9PT0gb2JqRm5Jbml0KSB7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZVxuICB9XG4gIGZuU2VsZWN0LmFkZChvcHRpb24pXG59XG5cbmZuU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgY29uc3QgZm5OYW1lID0gZS50YXJnZXQudmFsdWVcbiAgdXBkYXRlT2JqRm4oZm5OYW1lKVxufSlcblxuZnVuY3Rpb24gdXBkYXRlT2JqRm4oZm5OYW1lKSB7XG4gIGZvciAobGV0IHdvcmtlciBvZiB2aXpXb3JrZXJzKSB7XG4gICAgd29ya2VyLnBvc3RNZXNzYWdlKFtcImZuTmFtZVwiLCBmbk5hbWVdKVxuICB9XG4gIGNtYVdvcmtlci5wb3N0TWVzc2FnZShbXCJmbk5hbWVcIiwgZm5OYW1lXSlcbiAgem9vbSA9IDFcbn1cblxuY29uc3QgcG9wTXVsdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wLW11bHQtc2VsZWN0XCIpXG5wb3BNdWx0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgbGV0IHBvcHNpemVNdWx0aXBsaWVyID0gZS50YXJnZXQudmFsdWVcbiAgY21hV29ya2VyLnBvc3RNZXNzYWdlKFtcInBvcE11bHRcIiwgcG9wc2l6ZU11bHRpcGxpZXJdKVxufSlcblxuY29uc3Qgem9vbUluQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ6b29tLWluXCIpXG56b29tSW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgem9vbSAqPSAxLjFcbiAgdXBkYXRlWm9vbSgpXG59KVxuXG5jb25zdCB6b29tT3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ6b29tLW91dFwiKVxuem9vbU91dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB6b29tIC89IDEuMVxuICB1cGRhdGVab29tKClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZVpvb20oKSB7XG4gIGZvciAobGV0IHdvcmtlciBvZiB2aXpXb3JrZXJzKSB7XG4gICAgd29ya2VyLnBvc3RNZXNzYWdlKFtcInpvb21cIiwgem9vbV0pXG4gIH1cbiAgY21hV29ya2VyLnBvc3RNZXNzYWdlKFtcInpvb21cIiwgem9vbV0pXG59XG5cbmNvbnN0IHN0ZXBCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0ZXAtYnRuXCIpXG5zdGVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNtYVdvcmtlci5wb3N0TWVzc2FnZShbXCJzdGVwXCIsIHRydWVdKVxufSlcblxuY29uc3QgbWVhbnNQYXRoQ2hlY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lYW5zLXBhdGgtY2hlY2tib3hcIilcbm1lYW5zUGF0aENoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICBkaXNwbGF5TWVhbnNQYXRoID0gbWVhbnNQYXRoQ2hlY2suY2hlY2tlZFxuICBpZiAoZGlzcGxheU1lYW5zUGF0aCkge1xuICAgIGRyYXdNZWFucyhtZWFuc1BhdGhBcnIsIGN0eENtYU1lYW5zKVxuICB9IGVsc2Uge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBjdHhDbWFNZWFucy5jbGVhclJlY3QoXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIGN0eENtYU1lYW5zLmNhbnZhcy53aWR0aCxcbiAgICAgICAgY3R4Q21hTWVhbnMuY2FudmFzLmhlaWdodFxuICAgICAgKVxuICAgIH0pXG4gIH1cbn0pXG5cbnJlc2V0U2NvcmVMaW1zKClcblxuY29uc3QgY21hV29ya2VyID0gbmV3IFdvcmtlcihuZXcgVVJMKFwiLi9jbWEtd29ya2VyLmpzXCIsIGltcG9ydC5tZXRhLnVybCkpXG5cbmNtYVdvcmtlci5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICBjb25zdCBbaW5mbywgbXNnXSA9IGUuZGF0YVxuICBpZiAoaW5mbyA9PT0gXCJzb2x1dGlvbnNcIikge1xuICAgIHNvbHV0aW9ucyA9IG1zZy5zbGljZSgpXG4gICAgc29sdXRpb25zRnJlc2ggPSB0cnVlXG4gICAgY2hlY2tEcmF3UmVhZHkoKVxuICB9IGVsc2UgaWYgKGluZm8gPT09IFwibWVhbnNcIikge1xuICAgIG1lYW5zUGF0aEFyciA9IG1zZy5zbGljZSgpXG4gICAgaWYgKGRpc3BsYXlNZWFuc1BhdGgpIHtcbiAgICAgIGRyYXdNZWFucyhtZWFuc1BhdGhBcnIsIGN0eENtYU1lYW5zKVxuICAgIH1cbiAgfSBlbHNlIGlmIChpbmZvID09PSBcInpvb21cIikge1xuICAgIHpvb20gPSBtc2dcbiAgICB1cGRhdGVab29tKClcbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3TWVhbnMobWVhbnMsIGN0eCkge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpXG4gICAgY3R4LnNhdmUoKVxuICAgIGN0eC50cmFuc2xhdGUoMC41ICogY3R4LmNhbnZhcy53aWR0aCwgMC41ICogY3R4LmNhbnZhcy5oZWlnaHQpXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4Lm1vdmVUbyhtZWFuc1swXSwgbWVhbnNbMV0pXG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPCBtZWFucy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgY3R4LmxpbmVUbyhtZWFuc1tpXSwgbWVhbnNbaSArIDFdKVxuICAgIH1cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICBjdHgubGluZVdpZHRoID0gNFxuICAgIGN0eC5zdHJva2UoKVxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIlxuICAgIGN0eC5saW5lV2lkdGggPSAyXG4gICAgY3R4LnN0cm9rZSgpXG4gICAgY3R4LnJlc3RvcmUoKVxuICB9KVxufVxuXG5mdW5jdGlvbiBkcmF3KCkge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGN0eEZuR3JhZGllbnQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YUJnLCAwLCAwKVxuICAgIGN0eENtYVNvbHMuY2xlYXJSZWN0KDAsIDAsIGNhbnZhc0NtYVNvbHMud2lkdGgsIGNhbnZhc0NtYVNvbHMuaGVpZ2h0KVxuICAgIGN0eENtYVNvbHMuc2F2ZSgpXG4gICAgY3R4Q21hU29scy50cmFuc2xhdGUoMC41ICogY2FudmFzQ21hU29scy53aWR0aCwgMC41ICogY2FudmFzQ21hU29scy5oZWlnaHQpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb2x1dGlvbnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIGRyYXdNYXJrZXIoc29sdXRpb25zW2ldLCBzb2x1dGlvbnNbaSArIDFdLCBjdHhDbWFTb2xzKVxuICAgIH1cbiAgICBjdHhDbWFTb2xzLnJlc3RvcmUoKVxuICAgIC8vIGN0eENtYVNvbHMucmVzdG9yZSgpXG4gICAgc29sdXRpb25zRnJlc2ggPSBmYWxzZVxuICAgIGltYWdlc1JlY2VpdmVkID0gMFxuICAgIGNtYVdvcmtlci5wb3N0TWVzc2FnZShbXCJkcmF3UmVhZHlcIiwgdHJ1ZV0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRyYXdNYXJrZXIoeCwgeSwgY3R4KSB7XG4gIGRyYXdDYW52YXMobWFya2VyQ2FudmFzLCBjdHgsIFt4LCB5XSwgMClcbn1cblxuZnVuY3Rpb24gZ2V0TWFya2VyQ2FudmFzKCkge1xuICBmdW5jdGlvbiBkcmF3TGluZVNlZyhzdGFydFB0LCBlbmRQdCwgY29sb3IsIHdlaWdodCwgY3R4KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4Lm1vdmVUbyguLi5zdGFydFB0KVxuICAgIGN0eC5saW5lVG8oLi4uZW5kUHQpXG4gICAgY3R4LmxpbmVXaWR0aCA9IHdlaWdodFxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yXG4gICAgY3R4LnN0cm9rZSgpXG4gIH1cblxuICBjb25zdCBtYXJrZXJDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLFxuICAgIG1hcmtlckNUWCA9IG1hcmtlckNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcbiAgY29uc3QgYm9yZGVyID0gMSxcbiAgICBkID0gMiAqIChib3JkZXIgKyBtYXJrZXJSKVxuXG4gIG1hcmtlckNhbnZhcy53aWR0aCA9IGRcbiAgbWFya2VyQ2FudmFzLmhlaWdodCA9IGRcblxuICBtYXJrZXJDVFgudHJhbnNsYXRlKDAuNSAqIG1hcmtlckNhbnZhcy53aWR0aCwgMC41ICogbWFya2VyQ2FudmFzLmhlaWdodClcblxuICBkcmF3TGluZVNlZyhbLW1hcmtlclIgLSAxLCAwXSwgW21hcmtlclIgKyAxLCAwXSwgXCJibGFja1wiLCA0LCBtYXJrZXJDVFgpXG4gIGRyYXdMaW5lU2VnKFswLCAtbWFya2VyUiAtIDFdLCBbMCwgbWFya2VyUiArIDFdLCBcImJsYWNrXCIsIDQsIG1hcmtlckNUWClcbiAgZHJhd0xpbmVTZWcoWy1tYXJrZXJSLCAwXSwgW21hcmtlclIsIDBdLCBcIndoaXRlXCIsIDIsIG1hcmtlckNUWClcbiAgZHJhd0xpbmVTZWcoWzAsIC1tYXJrZXJSXSwgWzAsIG1hcmtlclJdLCBcIndoaXRlXCIsIDIsIG1hcmtlckNUWClcblxuICByZXR1cm4gbWFya2VyQ2FudmFzXG59XG5cbmNvbnN0IHZpeldvcmtlcnMgPSBbXVxuZm9yIChsZXQgd29ya2VySWR4ID0gMDsgd29ya2VySWR4IDwgblZpeldvcmtlcnM7IHdvcmtlcklkeCsrKSB7XG4gIGNvbnN0IHZpeldvcmtlciA9IG5ldyBXb3JrZXIobmV3IFVSTChcIi4vdml6LXdvcmtlci5qc1wiLCBpbXBvcnQubWV0YS51cmwpKVxuICB2aXpXb3JrZXIucG9zdE1lc3NhZ2UoW1wid29ya2VySURcIiwgd29ya2VySWR4XSlcbiAgdml6V29ya2VyLm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gICAgY29uc3QgW2luZm8sIG1zZ10gPSBlLmRhdGFcbiAgICBpZiAoaW5mbyA9PT0gXCJzY29yZUxpbXNcIikge1xuICAgICAgdXBkYXRlU2NvcmVMaW1zKC4uLm1zZywgdml6V29ya2VycylcbiAgICB9IGVsc2UgaWYgKGluZm8gPT09IFwiaW1hZ2VEYXRhQXJyYXlcIikge1xuICAgICAgdXBkYXRlSW1hZ2VEYXRhKHdvcmtlcklkeCwgbXNnKVxuICAgICAgY2hlY2tEcmF3UmVhZHkoKVxuICAgIH1cbiAgfVxuICB2aXpXb3JrZXJzLnB1c2godml6V29ya2VyKVxufVxuXG5mdW5jdGlvbiByZXNldFNjb3JlTGltcygpIHtcbiAgbWluU2NvcmUgPSBJbmZpbml0eVxuICBtYXhTY29yZSA9IC1JbmZpbml0eVxuICBzY29yZUxpbXNSZWNlaXZlZCA9IDBcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2NvcmVMaW1zKF9taW5TY29yZSwgX21heFNjb3JlLCB2aXpXb3JrZXJzKSB7XG4gIGlmIChfbWluU2NvcmUgPCBtaW5TY29yZSkge1xuICAgIG1pblNjb3JlID0gX21pblNjb3JlXG4gIH1cbiAgaWYgKF9tYXhTY29yZSA+IG1heFNjb3JlKSB7XG4gICAgbWF4U2NvcmUgPSBfbWF4U2NvcmVcbiAgfVxuICBzY29yZUxpbXNSZWNlaXZlZCsrXG4gIGlmIChzY29yZUxpbXNSZWNlaXZlZCA9PT0gblZpeldvcmtlcnMpIHtcbiAgICBmb3IgKGxldCB3b3JrZXIgb2Ygdml6V29ya2Vycykge1xuICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKFtcInNjb3JlTGltc1wiLCBbbWluU2NvcmUsIG1heFNjb3JlXV0pXG4gICAgfVxuICAgIHJlc2V0U2NvcmVMaW1zKClcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVJbWFnZURhdGEod29ya2VySWR4LCBtc2cpIHtcbiAgbGV0IGFycmF5SWR4ID0gKHdvcmtlcklkeCAvIG5WaXpXb3JrZXJzKSAqIGltYWdlRGF0YUJnRGF0YS5sZW5ndGhcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyBpICs9IDMpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgaW1hZ2VEYXRhQmdEYXRhW2FycmF5SWR4ICsgal0gPSBtc2dbaSArIGpdXG4gICAgfVxuICAgIGFycmF5SWR4ICs9IDRcbiAgfVxuICBpbWFnZXNSZWNlaXZlZCsrXG4gIC8vIGlmIChpbWFnZXNSZWNlaXZlZCA9PT0gblZpeldvcmtlcnMpIHtcbiAgLy8gICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAvLyAgICAgY3R4Rm5HcmFkaWVudC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhQmcsIDAsIDApXG4gIC8vICAgfSlcbiAgLy8gICBpbWFnZXNSZWNlaXZlZCA9IDBcbiAgLy8gfVxufVxuXG5mdW5jdGlvbiBjaGVja0RyYXdSZWFkeSgpIHtcbiAgaWYgKGltYWdlc1JlY2VpdmVkID09PSBuVml6V29ya2VycyAmJiBzb2x1dGlvbnNGcmVzaCkge1xuICAgIGRyYXcoKVxuICB9XG59XG4iXSwibmFtZXMiOlsiZHJhd0NhbnZhcyIsImNhbnZhc0Zyb20iLCJjdHhUbyIsImNlbnRlciIsImFuZ2xlIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsIm5WaXpXb3JrZXJzIiwiY2FudmFzRGltIiwibWFya2VyUiIsIm9iakZuSW5pdCIsIm1lYW5SYWRpdXNNaW4iLCJtZWFuUmFkaXVzTWF4Iiwic2lnbWFTY2FsZSIsInpvb21TdGVwTWFnIiwib2JqRm5zIiwiYWNrbGV5IiwiaW5wdXRzIiwiYSIsImIiLCJjIiwiTWF0aCIsIlBJIiwiZCIsImRfaW52Iiwic3VtMSIsInN1bTIiLCJpIiwieGkiLCJjb3MiLCJ0ZXJtMSIsImV4cCIsInNxcnQiLCJ0ZXJtMiIsIkUiLCJib2hhY2hldnNreTEiLCJ4MSIsIngyIiwidGVybTMiLCJ0ZXJtNCIsImdyaWV3YW5rIiwibGVuZ3RoIiwic3VtIiwicHJvZCIsInJhc3RyaWdpbiIsImZhbmN5TmFtZSIsInh5TGltIiwicmVxdWlyZSIsInpvb20iLCJzb2x1dGlvbnMiLCJzb2x1dGlvbnNGcmVzaCIsInNjb3JlTGltc1JlY2VpdmVkIiwibWluU2NvcmUiLCJtYXhTY29yZSIsImltYWdlc1JlY2VpdmVkIiwibWVhbnNQYXRoQXJyIiwiRmxvYXQzMkFycmF5IiwiZGlzcGxheU1lYW5zUGF0aCIsImNhbnZhc0ZuR3JhZGllbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzQ21hU29scyIsImNhbnZhc0NtYU1lYW5zIiwiY2FudmFzRGl2Iiwic2V0QXR0cmlidXRlIiwiY2FudmFzIiwiY3R4Rm5HcmFkaWVudCIsImdldENvbnRleHQiLCJjdHhDbWFTb2xzIiwiY3R4Q21hTWVhbnMiLCJpbWFnZURhdGFCZyIsImNyZWF0ZUltYWdlRGF0YSIsImltYWdlRGF0YUJnRGF0YSIsImRhdGEiLCJmaWxsIiwibWFya2VyQ2FudmFzIiwiZ2V0TWFya2VyQ2FudmFzIiwiZm5TZWxlY3QiLCJPYmplY3QiLCJrZXlzIiwiayIsIm9wdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsInRleHQiLCJzZWxlY3RlZCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZm5OYW1lIiwidGFyZ2V0IiwidXBkYXRlT2JqRm4iLCJ2aXpXb3JrZXJzIiwid29ya2VyIiwicG9zdE1lc3NhZ2UiLCJjbWFXb3JrZXIiLCJwb3BNdWx0U2VsZWN0IiwicG9wc2l6ZU11bHRpcGxpZXIiLCJ6b29tSW5CdG4iLCJ1cGRhdGVab29tIiwiem9vbU91dEJ0biIsInN0ZXBCdG4iLCJtZWFuc1BhdGhDaGVjayIsImNoZWNrZWQiLCJkcmF3TWVhbnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJyZXNldFNjb3JlTGltcyIsIldvcmtlciIsIlVSTCIsImltcG9ydCIsIm1ldGEiLCJ1cmwiLCJvbm1lc3NhZ2UiLCJpbmZvIiwibXNnIiwic2xpY2UiLCJjaGVja0RyYXdSZWFkeSIsIm1lYW5zIiwiY3R4IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJkcmF3IiwicHV0SW1hZ2VEYXRhIiwiZHJhd01hcmtlciIsIngiLCJ5IiwiZHJhd0xpbmVTZWciLCJzdGFydFB0IiwiZW5kUHQiLCJjb2xvciIsIndlaWdodCIsIm1hcmtlckNUWCIsImJvcmRlciIsIndvcmtlcklkeCIsInZpeldvcmtlciIsInVwZGF0ZVNjb3JlTGltcyIsInVwZGF0ZUltYWdlRGF0YSIsInB1c2giLCJJbmZpbml0eSIsIl9taW5TY29yZSIsIl9tYXhTY29yZSIsImFycmF5SWR4IiwiaiJdLCJzb3VyY2VSb290IjoiIn0=