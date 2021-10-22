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
/* harmony export */   "zoomStepMag": () => (/* binding */ zoomStepMag),
/* harmony export */   "nEllipseTestPts": () => (/* binding */ nEllipseTestPts)
/* harmony export */ });
var nVizWorkers = 8,
    canvasDim = 600,
    markerR = 7,
    objFnInit = "ackley",
    meanRadiusMin = 0.6,
    meanRadiusMax = 0.9,
    sigmaScale = 0.5,
    zoomStepMag = 1.05,
    nEllipseTestPts = 32;

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
/******/ 			return "" + chunkId + "." + {"src_pages_cmaes-demo_cma-worker_js":"8ff5a0460d2af70fd482","src_pages_cmaes-demo_viz-worker_js":"44ceca9987999bf7e682"}[chunkId] + ".js";
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
    meansPathArr,
    ellipseParams,
    solutions,
    solutionsFresh = false,
    ellipsePts,
    scoreLimsReceived,
    minScore,
    maxScore,
    imagesReceived = 0,
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
ctxCmaSols.strokeStyle = "rgba(255, 255, 255, 0.8)";
ctxCmaSols.lineWidth = 3; // ctxCmaSols.fillStyle = "black"

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
    solutions = msg[0].slice();
    ellipsePts = msg[1].slice();
    console.log("sols");
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
  } else if (info === "ellipsePts") {
    ellipsePts = msg.slice();
    console.log(ellipsePts);
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
    ctxCmaSols.translate(0.5 * canvasCmaSols.width, 0.5 * canvasCmaSols.height); // const mpaLength = meansPathArr.length
    // ctxCmaSols.beginPath()
    // ctxCmaSols.ellipse(
    //   meansPathArr[mpaLength - 2],
    //   meansPathArr[mpaLength - 1],
    //   ellipseParams[0] * zoom,
    //   ellipseParams[1] * zoom,
    //   ellipseParams[2],
    //   0,
    //   2 * Math.PI
    // )
    // ctxCmaSols.stroke()

    ctxCmaSols.beginPath();
    ctxCmaSols.moveTo(ellipsePts[0], ellipsePts[1]);

    for (var i = 2; i < ellipsePts.length; i += 2) {
      ctxCmaSols.lineTo(ellipsePts[i], ellipsePts[i + 1]);
    }

    ctxCmaSols.closePath();
    ctxCmaSols.stroke();

    for (var _i3 = 0; _i3 < solutions.length; _i3 += 2) {
      drawMarker(solutions[_i3], solutions[_i3 + 1], ctxCmaSols);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUI1RSxNQUFBQSxlQUFlLENBQUMyRSxRQUFRLEdBQUdDLENBQVosQ0FBZixHQUFnQ2pDLEdBQUcsQ0FBQzNGLENBQUMsR0FBRzRILENBQUwsQ0FBbkM7QUFDRDs7QUFDREQsSUFBQUEsUUFBUSxJQUFJLENBQVo7QUFDRDs7QUFDRDdGLEVBQUFBLGNBQWMsR0FSeUIsQ0FTdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQsU0FBU2lFLGNBQVQsR0FBMEI7QUFDeEIsTUFBSWpFLGNBQWMsS0FBS25ELG9EQUFuQixJQUFrQzhDLGNBQXRDLEVBQXNEO0FBQ3BENkUsSUFBQUEsSUFBSTtBQUNMO0FBQ0YsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9qcy9kcmF3LWNhbnZhcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvcGFnZXMvY21hZXMtZGVtby9nbG9iYWxzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL29iai1mbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL21haW4uY3NzPzc2YmIiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vaW5kZXguY3NzPzM0MmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBkcmF3Q2FudmFzKGNhbnZhc0Zyb20sIGN0eFRvLCBjZW50ZXIsIGFuZ2xlKSB7XG4gIGN0eFRvLnNhdmUoKVxuICBjdHhUby50cmFuc2xhdGUoY2VudGVyWzBdLCBjZW50ZXJbMV0pXG4gIGlmIChhbmdsZSAhPT0gMCkge1xuICAgIGN0eFRvLnJvdGF0ZShhbmdsZSlcbiAgfVxuICBjdHhUby50cmFuc2xhdGUoLTAuNSAqIGNhbnZhc0Zyb20ud2lkdGgsIC0wLjUgKiBjYW52YXNGcm9tLmhlaWdodClcbiAgY3R4VG8uZHJhd0ltYWdlKGNhbnZhc0Zyb20sIDAsIDApXG4gIGN0eFRvLnJlc3RvcmUoKVxufVxuIiwiZXhwb3J0IGNvbnN0IG5WaXpXb3JrZXJzID0gOCxcbiAgY2FudmFzRGltID0gNjAwLFxuICBtYXJrZXJSID0gNyxcbiAgb2JqRm5Jbml0ID0gXCJhY2tsZXlcIixcbiAgbWVhblJhZGl1c01pbiA9IDAuNixcbiAgbWVhblJhZGl1c01heCA9IDAuOSxcbiAgc2lnbWFTY2FsZSA9IDAuNSxcbiAgem9vbVN0ZXBNYWcgPSAxLjA1LFxuICBuRWxsaXBzZVRlc3RQdHMgPSAzMlxuIiwiLy8ge1xuLy8gICBhY2tsZXk6IFwiQWNrbGV5XCIsXG4vLyAgIGJvaGFjaGV2c2t5MTogXCJCb2hhY2hldnNreSBOby4xXCIsXG4vLyAgIGdyaWV3YW5rOiBcIkdyaWV3YW5rXCIsXG4vLyAgIHJhc3RyaWdpbjogXCJSYXN0cmlnaW5cIixcbi8vIH1cblxuZXhwb3J0IGNvbnN0IG9iakZucyA9IHtcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9hY2tsZXkuaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL0NvZGUvYWNrbGV5bS5odG1sXG4gIGFja2xleTogKGlucHV0cykgPT4ge1xuICAgIC8vIGRlZmF1bHQgYT0yMCwgYj0wLjIsIGM9MnBpXG4gICAgY29uc3QgYSA9IDIwLFxuICAgICAgYiA9IDAuMixcbiAgICAgIGMgPSAyICogTWF0aC5QSVxuICAgIC8vIGxldCBkID0gaW5wdXRzLmxlbmd0aFxuICAgIGNvbnN0IGQgPSAyLFxuICAgICAgZF9pbnYgPSAwLjUgLy8gKDEgLyBkKVxuICAgIGxldCBzdW0xID0gMCxcbiAgICAgIHN1bTIgPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIGxldCB4aSA9IGlucHV0c1tpXVxuICAgICAgc3VtMSArPSB4aSAqIHhpXG4gICAgICBzdW0yICs9IE1hdGguY29zKGMgKiB4aSlcbiAgICB9XG4gICAgLy8gbGV0IGRfaW52ID0gMSAvIGRcbiAgICBsZXQgdGVybTEgPSAtYSAqIE1hdGguZXhwKC1iICogTWF0aC5zcXJ0KHN1bTEgKiBkX2ludikpLFxuICAgICAgdGVybTIgPSAtTWF0aC5leHAoc3VtMiAqIGRfaW52KVxuICAgIHJldHVybiB0ZXJtMSArIHRlcm0yICsgYSArIE1hdGguRVxuICB9LFxuICAvLyBodHRwOi8vYmVuY2htYXJrZmNucy54eXovYmVuY2htYXJrZmNucy9ib2hhY2hldnNreW4xZmNuLmh0bWxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9Db2RlL2JvaGExbS5odG1sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vYm9oYS5odG1sXG4gIGJvaGFjaGV2c2t5MTogKGlucHV0cykgPT4ge1xuICAgIGxldCB4MSA9IGlucHV0c1swXVxuICAgIGxldCB4MiA9IGlucHV0c1sxXVxuXG4gICAgbGV0IHRlcm0xID0geDEgKiB4MVxuICAgIGxldCB0ZXJtMiA9IDIgKiB4MiAqIHgyXG4gICAgbGV0IHRlcm0zID0gLTAuMyAqIE1hdGguY29zKDMgKiBNYXRoLlBJICogeDEpXG4gICAgbGV0IHRlcm00ID0gLTAuNCAqIE1hdGguY29zKDQgKiBNYXRoLlBJICogeDIpXG5cbiAgICByZXR1cm4gdGVybTEgKyB0ZXJtMiArIHRlcm0zICsgdGVybTQgKyAwLjdcbiAgfSxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9ncmlld2Fuay5odG1sXG4gIGdyaWV3YW5rOiAoaW5wdXRzKSA9PiB7XG4gICAgbGV0IGQgPSBpbnB1dHMubGVuZ3RoXG4gICAgbGV0IHN1bSA9IDBcbiAgICBsZXQgcHJvZCA9IDFcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGQ7IGkrKykge1xuICAgICAgbGV0IHhpID0gaW5wdXRzW2ldXG4gICAgICBzdW0gKz0gKHhpICogeGkpIC8gNDAwMFxuICAgICAgcHJvZCAqPSBNYXRoLmNvcyh4aSAvIE1hdGguc3FydChpICsgMSkpXG4gICAgfVxuICAgIHJldHVybiBzdW0gLSBwcm9kICsgMVxuICB9LFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL3Jhc3RyLmh0bWxcbiAgcmFzdHJpZ2luOiAoaW5wdXRzKSA9PiB7XG4gICAgbGV0IGQgPSBpbnB1dHMubGVuZ3RoXG4gICAgbGV0IHN1bSA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGQ7IGkrKykge1xuICAgICAgbGV0IHhpID0gaW5wdXRzW2ldXG4gICAgICBzdW0gKz0geGkgKiB4aSAtIDEwICogTWF0aC5jb3MoMiAqIE1hdGguUEkgKiB4aSlcbiAgICB9XG4gICAgcmV0dXJuIDEwICogZCArIHN1bVxuICB9LFxufVxuXG4vLyBmYW5jeSBuYW1lcyBmb3Igc2VsZWN0IG1lbnVcbm9iakZucy5hY2tsZXkuZmFuY3lOYW1lID0gXCJBY2tsZXlcIlxub2JqRm5zLmJvaGFjaGV2c2t5MS5mYW5jeU5hbWUgPSBcIkJvaGFjaGV2c2t5IE5vLjFcIlxub2JqRm5zLmdyaWV3YW5rLmZhbmN5TmFtZSA9IFwiR3JpZXdhbmtcIlxub2JqRm5zLnJhc3RyaWdpbi5mYW5jeU5hbWUgPSBcIlJhc3RyaWdpblwiXG5cbi8vIGZuTGltcyBmb3IgZGlzcGxheSBsaW1pdHNcbm9iakZucy5hY2tsZXkueHlMaW0gPSAzMi43Njhcbm9iakZucy5ib2hhY2hldnNreTEueHlMaW0gPSAxMDBcbm9iakZucy5ncmlld2Fuay54eUxpbSA9IDYwMFxub2JqRm5zLnJhc3RyaWdpbi54eUxpbSA9IDUuMTJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyB7XCJzcmNfcGFnZXNfY21hZXMtZGVtb19jbWEtd29ya2VyX2pzXCI6XCI4ZmY1YTA0NjBkMmFmNzBmZDQ4MlwiLFwic3JjX3BhZ2VzX2NtYWVzLWRlbW9fdml6LXdvcmtlcl9qc1wiOlwiNDRjZWNhOTk4Nzk5OWJmN2U2ODJcIn1bY2h1bmtJZF0gKyBcIi5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiY21hZXMtZGVtb1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwicmVxdWlyZShcIi4vaW5kZXguY3NzXCIpXG5yZXF1aXJlKFwiLi4vLi4vbWFpbi5jc3NcIilcbmltcG9ydCB7IG9iakZucyB9IGZyb20gXCIuL29iai1mbnMuanNcIlxuaW1wb3J0IHsgY2FudmFzRGltLCBtYXJrZXJSLCBuVml6V29ya2Vycywgb2JqRm5Jbml0IH0gZnJvbSBcIi4vZ2xvYmFscy5qc1wiXG5pbXBvcnQgeyBkcmF3Q2FudmFzIH0gZnJvbSBcIi4vLi4vLi4vanMvZHJhdy1jYW52YXMuanNcIlxuXG5sZXQgem9vbSA9IDEsXG4gIG1lYW5zUGF0aEFycixcbiAgZWxsaXBzZVBhcmFtcyxcbiAgc29sdXRpb25zLFxuICBzb2x1dGlvbnNGcmVzaCA9IGZhbHNlLFxuICBlbGxpcHNlUHRzLFxuICBzY29yZUxpbXNSZWNlaXZlZCxcbiAgbWluU2NvcmUsXG4gIG1heFNjb3JlLFxuICBpbWFnZXNSZWNlaXZlZCA9IDAsXG4gIGRpc3BsYXlNZWFuc1BhdGggPSBmYWxzZVxuXG5jb25zdCBjYW52YXNGbkdyYWRpZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtYmdcIilcbmNvbnN0IGNhbnZhc0NtYVNvbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1mZ1wiKVxuY29uc3QgY2FudmFzQ21hTWVhbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1tZWFuc1wiKVxuY29uc3QgY2FudmFzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtZGl2XCIpXG5jYW52YXNEaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYHdpZHRoOiR7Y2FudmFzRGltfXB4OyBoZWlnaHQ6JHtjYW52YXNEaW19cHhgKVxuZm9yIChsZXQgY2FudmFzIG9mIFtjYW52YXNDbWFTb2xzLCBjYW52YXNGbkdyYWRpZW50LCBjYW52YXNDbWFNZWFuc10pIHtcbiAgY2FudmFzLndpZHRoID0gY2FudmFzRGltXG4gIGNhbnZhcy5oZWlnaHQgPSBjYW52YXNEaW1cbn1cblxuY29uc3QgY3R4Rm5HcmFkaWVudCA9IGNhbnZhc0ZuR3JhZGllbnQuZ2V0Q29udGV4dChcIjJkXCIpXG5jb25zdCBjdHhDbWFTb2xzID0gY2FudmFzQ21hU29scy5nZXRDb250ZXh0KFwiMmRcIilcbmN0eENtYVNvbHMuc3Ryb2tlU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KVwiXG5jdHhDbWFTb2xzLmxpbmVXaWR0aCA9IDNcbi8vIGN0eENtYVNvbHMuZmlsbFN0eWxlID0gXCJibGFja1wiXG5jb25zdCBjdHhDbWFNZWFucyA9IGNhbnZhc0NtYU1lYW5zLmdldENvbnRleHQoXCIyZFwiKVxuY29uc3QgaW1hZ2VEYXRhQmcgPSBjdHhGbkdyYWRpZW50LmNyZWF0ZUltYWdlRGF0YShjYW52YXNEaW0sIGNhbnZhc0RpbSlcbmNvbnN0IGltYWdlRGF0YUJnRGF0YSA9IGltYWdlRGF0YUJnLmRhdGFcbmltYWdlRGF0YUJnRGF0YS5maWxsKDI1NSlcblxuY29uc3QgbWFya2VyQ2FudmFzID0gZ2V0TWFya2VyQ2FudmFzKClcblxuY29uc3QgZm5TZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9iai1mbi1zZWxlY3RcIilcblxuZm9yIChsZXQgayBvZiBPYmplY3Qua2V5cyhvYmpGbnMpKSB7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgb3B0aW9uLnZhbHVlID0ga1xuICBvcHRpb24udGV4dCA9IG9iakZuc1trXS5mYW5jeU5hbWVcbiAgaWYgKGsgPT09IG9iakZuSW5pdCkge1xuICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWVcbiAgfVxuICBmblNlbGVjdC5hZGQob3B0aW9uKVxufVxuXG5mblNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gIGNvbnN0IGZuTmFtZSA9IGUudGFyZ2V0LnZhbHVlXG4gIHVwZGF0ZU9iakZuKGZuTmFtZSlcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZU9iakZuKGZuTmFtZSkge1xuICBmb3IgKGxldCB3b3JrZXIgb2Ygdml6V29ya2Vycykge1xuICAgIHdvcmtlci5wb3N0TWVzc2FnZShbXCJmbk5hbWVcIiwgZm5OYW1lXSlcbiAgfVxuICBjbWFXb3JrZXIucG9zdE1lc3NhZ2UoW1wiZm5OYW1lXCIsIGZuTmFtZV0pXG4gIHpvb20gPSAxXG59XG5cbmNvbnN0IHBvcE11bHRTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcC1tdWx0LXNlbGVjdFwiKVxucG9wTXVsdFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gIGxldCBwb3BzaXplTXVsdGlwbGllciA9IGUudGFyZ2V0LnZhbHVlXG4gIGNtYVdvcmtlci5wb3N0TWVzc2FnZShbXCJwb3BNdWx0XCIsIHBvcHNpemVNdWx0aXBsaWVyXSlcbn0pXG5cbmNvbnN0IHpvb21JbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiem9vbS1pblwiKVxuem9vbUluQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHpvb20gKj0gMS4xXG4gIHVwZGF0ZVpvb20oKVxufSlcblxuY29uc3Qgem9vbU91dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiem9vbS1vdXRcIilcbnpvb21PdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgem9vbSAvPSAxLjFcbiAgdXBkYXRlWm9vbSgpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVab29tKCkge1xuICBmb3IgKGxldCB3b3JrZXIgb2Ygdml6V29ya2Vycykge1xuICAgIHdvcmtlci5wb3N0TWVzc2FnZShbXCJ6b29tXCIsIHpvb21dKVxuICB9XG4gIGNtYVdvcmtlci5wb3N0TWVzc2FnZShbXCJ6b29tXCIsIHpvb21dKVxufVxuXG5jb25zdCBzdGVwQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGVwLWJ0blwiKVxuc3RlcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbWFXb3JrZXIucG9zdE1lc3NhZ2UoW1wic3RlcFwiLCB0cnVlXSlcbn0pXG5cbmNvbnN0IG1lYW5zUGF0aENoZWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZWFucy1wYXRoLWNoZWNrYm94XCIpXG5tZWFuc1BhdGhDaGVjay5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgZGlzcGxheU1lYW5zUGF0aCA9IG1lYW5zUGF0aENoZWNrLmNoZWNrZWRcbiAgaWYgKGRpc3BsYXlNZWFuc1BhdGgpIHtcbiAgICBkcmF3TWVhbnMobWVhbnNQYXRoQXJyLCBjdHhDbWFNZWFucylcbiAgfSBlbHNlIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgY3R4Q21hTWVhbnMuY2xlYXJSZWN0KFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBjdHhDbWFNZWFucy5jYW52YXMud2lkdGgsXG4gICAgICAgIGN0eENtYU1lYW5zLmNhbnZhcy5oZWlnaHRcbiAgICAgIClcbiAgICB9KVxuICB9XG59KVxuXG5yZXNldFNjb3JlTGltcygpXG5cbmNvbnN0IGNtYVdvcmtlciA9IG5ldyBXb3JrZXIobmV3IFVSTChcIi4vY21hLXdvcmtlci5qc1wiLCBpbXBvcnQubWV0YS51cmwpKVxuXG5jbWFXb3JrZXIub25tZXNzYWdlID0gKGUpID0+IHtcbiAgY29uc3QgW2luZm8sIG1zZ10gPSBlLmRhdGFcbiAgaWYgKGluZm8gPT09IFwic29sdXRpb25zXCIpIHtcbiAgICBzb2x1dGlvbnMgPSBtc2dbMF0uc2xpY2UoKVxuICAgIGVsbGlwc2VQdHMgPSBtc2dbMV0uc2xpY2UoKVxuICAgIGNvbnNvbGUubG9nKFwic29sc1wiKVxuICAgIHNvbHV0aW9uc0ZyZXNoID0gdHJ1ZVxuICAgIGNoZWNrRHJhd1JlYWR5KClcbiAgfSBlbHNlIGlmIChpbmZvID09PSBcIm1lYW5zXCIpIHtcbiAgICBtZWFuc1BhdGhBcnIgPSBtc2cuc2xpY2UoKVxuICAgIGlmIChkaXNwbGF5TWVhbnNQYXRoKSB7XG4gICAgICBkcmF3TWVhbnMobWVhbnNQYXRoQXJyLCBjdHhDbWFNZWFucylcbiAgICB9XG4gIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJ6b29tXCIpIHtcbiAgICB6b29tID0gbXNnXG4gICAgdXBkYXRlWm9vbSgpXG4gIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJlbGxpcHNlUHRzXCIpIHtcbiAgICBlbGxpcHNlUHRzID0gbXNnLnNsaWNlKClcbiAgICBjb25zb2xlLmxvZyhlbGxpcHNlUHRzKVxuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXdNZWFucyhtZWFucywgY3R4KSB7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodClcbiAgICBjdHguc2F2ZSgpXG4gICAgY3R4LnRyYW5zbGF0ZSgwLjUgKiBjdHguY2FudmFzLndpZHRoLCAwLjUgKiBjdHguY2FudmFzLmhlaWdodClcbiAgICBjdHguYmVnaW5QYXRoKClcbiAgICBjdHgubW92ZVRvKG1lYW5zWzBdLCBtZWFuc1sxXSlcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8IG1lYW5zLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICBjdHgubGluZVRvKG1lYW5zW2ldLCBtZWFuc1tpICsgMV0pXG4gICAgfVxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgIGN0eC5saW5lV2lkdGggPSA0XG4gICAgY3R4LnN0cm9rZSgpXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgY3R4LmxpbmVXaWR0aCA9IDJcbiAgICBjdHguc3Ryb2tlKClcbiAgICBjdHgucmVzdG9yZSgpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgY3R4Rm5HcmFkaWVudC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhQmcsIDAsIDApXG4gICAgY3R4Q21hU29scy5jbGVhclJlY3QoMCwgMCwgY2FudmFzQ21hU29scy53aWR0aCwgY2FudmFzQ21hU29scy5oZWlnaHQpXG4gICAgY3R4Q21hU29scy5zYXZlKClcbiAgICBjdHhDbWFTb2xzLnRyYW5zbGF0ZSgwLjUgKiBjYW52YXNDbWFTb2xzLndpZHRoLCAwLjUgKiBjYW52YXNDbWFTb2xzLmhlaWdodClcbiAgICAvLyBjb25zdCBtcGFMZW5ndGggPSBtZWFuc1BhdGhBcnIubGVuZ3RoXG4gICAgLy8gY3R4Q21hU29scy5iZWdpblBhdGgoKVxuICAgIC8vIGN0eENtYVNvbHMuZWxsaXBzZShcbiAgICAvLyAgIG1lYW5zUGF0aEFyclttcGFMZW5ndGggLSAyXSxcbiAgICAvLyAgIG1lYW5zUGF0aEFyclttcGFMZW5ndGggLSAxXSxcbiAgICAvLyAgIGVsbGlwc2VQYXJhbXNbMF0gKiB6b29tLFxuICAgIC8vICAgZWxsaXBzZVBhcmFtc1sxXSAqIHpvb20sXG4gICAgLy8gICBlbGxpcHNlUGFyYW1zWzJdLFxuICAgIC8vICAgMCxcbiAgICAvLyAgIDIgKiBNYXRoLlBJXG4gICAgLy8gKVxuICAgIC8vIGN0eENtYVNvbHMuc3Ryb2tlKClcbiAgICBjdHhDbWFTb2xzLmJlZ2luUGF0aCgpXG4gICAgY3R4Q21hU29scy5tb3ZlVG8oZWxsaXBzZVB0c1swXSwgZWxsaXBzZVB0c1sxXSlcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8IGVsbGlwc2VQdHMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIGN0eENtYVNvbHMubGluZVRvKGVsbGlwc2VQdHNbaV0sIGVsbGlwc2VQdHNbaSArIDFdKVxuICAgIH1cbiAgICBjdHhDbWFTb2xzLmNsb3NlUGF0aCgpXG4gICAgY3R4Q21hU29scy5zdHJva2UoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29sdXRpb25zLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICBkcmF3TWFya2VyKHNvbHV0aW9uc1tpXSwgc29sdXRpb25zW2kgKyAxXSwgY3R4Q21hU29scylcbiAgICB9XG4gICAgY3R4Q21hU29scy5yZXN0b3JlKClcbiAgICAvLyBjdHhDbWFTb2xzLnJlc3RvcmUoKVxuICAgIHNvbHV0aW9uc0ZyZXNoID0gZmFsc2VcbiAgICBpbWFnZXNSZWNlaXZlZCA9IDBcbiAgICBjbWFXb3JrZXIucG9zdE1lc3NhZ2UoW1wiZHJhd1JlYWR5XCIsIHRydWVdKVxuICB9KVxufVxuXG5mdW5jdGlvbiBkcmF3TWFya2VyKHgsIHksIGN0eCkge1xuICBkcmF3Q2FudmFzKG1hcmtlckNhbnZhcywgY3R4LCBbeCwgeV0sIDApXG59XG5cbmZ1bmN0aW9uIGdldE1hcmtlckNhbnZhcygpIHtcbiAgZnVuY3Rpb24gZHJhd0xpbmVTZWcoc3RhcnRQdCwgZW5kUHQsIGNvbG9yLCB3ZWlnaHQsIGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIGN0eC5tb3ZlVG8oLi4uc3RhcnRQdClcbiAgICBjdHgubGluZVRvKC4uLmVuZFB0KVxuICAgIGN0eC5saW5lV2lkdGggPSB3ZWlnaHRcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvclxuICAgIGN0eC5zdHJva2UoKVxuICB9XG5cbiAgY29uc3QgbWFya2VyQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSxcbiAgICBtYXJrZXJDVFggPSBtYXJrZXJDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG4gIGNvbnN0IGJvcmRlciA9IDEsXG4gICAgZCA9IDIgKiAoYm9yZGVyICsgbWFya2VyUilcblxuICBtYXJrZXJDYW52YXMud2lkdGggPSBkXG4gIG1hcmtlckNhbnZhcy5oZWlnaHQgPSBkXG5cbiAgbWFya2VyQ1RYLnRyYW5zbGF0ZSgwLjUgKiBtYXJrZXJDYW52YXMud2lkdGgsIDAuNSAqIG1hcmtlckNhbnZhcy5oZWlnaHQpXG5cbiAgZHJhd0xpbmVTZWcoWy1tYXJrZXJSIC0gMSwgMF0sIFttYXJrZXJSICsgMSwgMF0sIFwiYmxhY2tcIiwgNCwgbWFya2VyQ1RYKVxuICBkcmF3TGluZVNlZyhbMCwgLW1hcmtlclIgLSAxXSwgWzAsIG1hcmtlclIgKyAxXSwgXCJibGFja1wiLCA0LCBtYXJrZXJDVFgpXG4gIGRyYXdMaW5lU2VnKFstbWFya2VyUiwgMF0sIFttYXJrZXJSLCAwXSwgXCJ3aGl0ZVwiLCAyLCBtYXJrZXJDVFgpXG4gIGRyYXdMaW5lU2VnKFswLCAtbWFya2VyUl0sIFswLCBtYXJrZXJSXSwgXCJ3aGl0ZVwiLCAyLCBtYXJrZXJDVFgpXG5cbiAgcmV0dXJuIG1hcmtlckNhbnZhc1xufVxuXG5jb25zdCB2aXpXb3JrZXJzID0gW11cbmZvciAobGV0IHdvcmtlcklkeCA9IDA7IHdvcmtlcklkeCA8IG5WaXpXb3JrZXJzOyB3b3JrZXJJZHgrKykge1xuICBjb25zdCB2aXpXb3JrZXIgPSBuZXcgV29ya2VyKG5ldyBVUkwoXCIuL3Zpei13b3JrZXIuanNcIiwgaW1wb3J0Lm1ldGEudXJsKSlcbiAgdml6V29ya2VyLnBvc3RNZXNzYWdlKFtcIndvcmtlcklEXCIsIHdvcmtlcklkeF0pXG4gIHZpeldvcmtlci5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IFtpbmZvLCBtc2ddID0gZS5kYXRhXG4gICAgaWYgKGluZm8gPT09IFwic2NvcmVMaW1zXCIpIHtcbiAgICAgIHVwZGF0ZVNjb3JlTGltcyguLi5tc2csIHZpeldvcmtlcnMpXG4gICAgfSBlbHNlIGlmIChpbmZvID09PSBcImltYWdlRGF0YUFycmF5XCIpIHtcbiAgICAgIHVwZGF0ZUltYWdlRGF0YSh3b3JrZXJJZHgsIG1zZylcbiAgICAgIGNoZWNrRHJhd1JlYWR5KClcbiAgICB9XG4gIH1cbiAgdml6V29ya2Vycy5wdXNoKHZpeldvcmtlcilcbn1cblxuZnVuY3Rpb24gcmVzZXRTY29yZUxpbXMoKSB7XG4gIG1pblNjb3JlID0gSW5maW5pdHlcbiAgbWF4U2NvcmUgPSAtSW5maW5pdHlcbiAgc2NvcmVMaW1zUmVjZWl2ZWQgPSAwXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNjb3JlTGltcyhfbWluU2NvcmUsIF9tYXhTY29yZSwgdml6V29ya2Vycykge1xuICBpZiAoX21pblNjb3JlIDwgbWluU2NvcmUpIHtcbiAgICBtaW5TY29yZSA9IF9taW5TY29yZVxuICB9XG4gIGlmIChfbWF4U2NvcmUgPiBtYXhTY29yZSkge1xuICAgIG1heFNjb3JlID0gX21heFNjb3JlXG4gIH1cbiAgc2NvcmVMaW1zUmVjZWl2ZWQrK1xuICBpZiAoc2NvcmVMaW1zUmVjZWl2ZWQgPT09IG5WaXpXb3JrZXJzKSB7XG4gICAgZm9yIChsZXQgd29ya2VyIG9mIHZpeldvcmtlcnMpIHtcbiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZShbXCJzY29yZUxpbXNcIiwgW21pblNjb3JlLCBtYXhTY29yZV1dKVxuICAgIH1cbiAgICByZXNldFNjb3JlTGltcygpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlSW1hZ2VEYXRhKHdvcmtlcklkeCwgbXNnKSB7XG4gIGxldCBhcnJheUlkeCA9ICh3b3JrZXJJZHggLyBuVml6V29ya2VycykgKiBpbWFnZURhdGFCZ0RhdGEubGVuZ3RoXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcbiAgICAgIGltYWdlRGF0YUJnRGF0YVthcnJheUlkeCArIGpdID0gbXNnW2kgKyBqXVxuICAgIH1cbiAgICBhcnJheUlkeCArPSA0XG4gIH1cbiAgaW1hZ2VzUmVjZWl2ZWQrK1xuICAvLyBpZiAoaW1hZ2VzUmVjZWl2ZWQgPT09IG5WaXpXb3JrZXJzKSB7XG4gIC8vICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgLy8gICAgIGN0eEZuR3JhZGllbnQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YUJnLCAwLCAwKVxuICAvLyAgIH0pXG4gIC8vICAgaW1hZ2VzUmVjZWl2ZWQgPSAwXG4gIC8vIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tEcmF3UmVhZHkoKSB7XG4gIGlmIChpbWFnZXNSZWNlaXZlZCA9PT0gblZpeldvcmtlcnMgJiYgc29sdXRpb25zRnJlc2gpIHtcbiAgICBkcmF3KClcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRyYXdDYW52YXMiLCJjYW52YXNGcm9tIiwiY3R4VG8iLCJjZW50ZXIiLCJhbmdsZSIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJ3aWR0aCIsImhlaWdodCIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJuVml6V29ya2VycyIsImNhbnZhc0RpbSIsIm1hcmtlclIiLCJvYmpGbkluaXQiLCJtZWFuUmFkaXVzTWluIiwibWVhblJhZGl1c01heCIsInNpZ21hU2NhbGUiLCJ6b29tU3RlcE1hZyIsIm5FbGxpcHNlVGVzdFB0cyIsIm9iakZucyIsImFja2xleSIsImlucHV0cyIsImEiLCJiIiwiYyIsIk1hdGgiLCJQSSIsImQiLCJkX2ludiIsInN1bTEiLCJzdW0yIiwiaSIsInhpIiwiY29zIiwidGVybTEiLCJleHAiLCJzcXJ0IiwidGVybTIiLCJFIiwiYm9oYWNoZXZza3kxIiwieDEiLCJ4MiIsInRlcm0zIiwidGVybTQiLCJncmlld2FuayIsImxlbmd0aCIsInN1bSIsInByb2QiLCJyYXN0cmlnaW4iLCJmYW5jeU5hbWUiLCJ4eUxpbSIsInJlcXVpcmUiLCJ6b29tIiwibWVhbnNQYXRoQXJyIiwiZWxsaXBzZVBhcmFtcyIsInNvbHV0aW9ucyIsInNvbHV0aW9uc0ZyZXNoIiwiZWxsaXBzZVB0cyIsInNjb3JlTGltc1JlY2VpdmVkIiwibWluU2NvcmUiLCJtYXhTY29yZSIsImltYWdlc1JlY2VpdmVkIiwiZGlzcGxheU1lYW5zUGF0aCIsImNhbnZhc0ZuR3JhZGllbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzQ21hU29scyIsImNhbnZhc0NtYU1lYW5zIiwiY2FudmFzRGl2Iiwic2V0QXR0cmlidXRlIiwiY2FudmFzIiwiY3R4Rm5HcmFkaWVudCIsImdldENvbnRleHQiLCJjdHhDbWFTb2xzIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJjdHhDbWFNZWFucyIsImltYWdlRGF0YUJnIiwiY3JlYXRlSW1hZ2VEYXRhIiwiaW1hZ2VEYXRhQmdEYXRhIiwiZGF0YSIsImZpbGwiLCJtYXJrZXJDYW52YXMiLCJnZXRNYXJrZXJDYW52YXMiLCJmblNlbGVjdCIsIk9iamVjdCIsImtleXMiLCJrIiwib3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwidGV4dCIsInNlbGVjdGVkIiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJmbk5hbWUiLCJ0YXJnZXQiLCJ1cGRhdGVPYmpGbiIsInZpeldvcmtlcnMiLCJ3b3JrZXIiLCJwb3N0TWVzc2FnZSIsImNtYVdvcmtlciIsInBvcE11bHRTZWxlY3QiLCJwb3BzaXplTXVsdGlwbGllciIsInpvb21JbkJ0biIsInVwZGF0ZVpvb20iLCJ6b29tT3V0QnRuIiwic3RlcEJ0biIsIm1lYW5zUGF0aENoZWNrIiwiY2hlY2tlZCIsImRyYXdNZWFucyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsInJlc2V0U2NvcmVMaW1zIiwiV29ya2VyIiwiVVJMIiwiaW1wb3J0IiwibWV0YSIsInVybCIsIm9ubWVzc2FnZSIsImluZm8iLCJtc2ciLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0RyYXdSZWFkeSIsIm1lYW5zIiwiY3R4IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZHJhdyIsInB1dEltYWdlRGF0YSIsImNsb3NlUGF0aCIsImRyYXdNYXJrZXIiLCJ4IiwieSIsImRyYXdMaW5lU2VnIiwic3RhcnRQdCIsImVuZFB0IiwiY29sb3IiLCJ3ZWlnaHQiLCJtYXJrZXJDVFgiLCJib3JkZXIiLCJ3b3JrZXJJZHgiLCJ2aXpXb3JrZXIiLCJ1cGRhdGVTY29yZUxpbXMiLCJ1cGRhdGVJbWFnZURhdGEiLCJwdXNoIiwiSW5maW5pdHkiLCJfbWluU2NvcmUiLCJfbWF4U2NvcmUiLCJhcnJheUlkeCIsImoiXSwic291cmNlUm9vdCI6IiJ9