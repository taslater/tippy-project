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
/******/ 			return "" + chunkId + "." + {"src_pages_cmaes-demo_cma-worker_js":"6f041c8294950918e787","src_pages_cmaes-demo_viz-worker_js":"44ceca9987999bf7e682"}[chunkId] + ".js";
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
var canvasDiv = document.getElementById("obj-fn-canvas-div");
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
  updateZoomAll();
});
var zoomOutBtn = document.getElementById("zoom-out");
zoomOutBtn.addEventListener("click", function () {
  zoom /= 1.1;
  updateZoomAll();
});

function updateZoomObjFn() {
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
}

function updateZoomCMA() {
  cmaWorker.postMessage(["zoom", zoom]);
}

function updateZoomAll() {
  updateZoomObjFn();
  updateZoomCMA();
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
    solutionsFresh = true;
    checkDrawReady();
  } else if (info === "means") {
    meansPathArr = msg.slice();

    if (displayMeansPath) {
      drawMeans(meansPathArr, ctxCmaMeans);
    }
  } else if (info === "zoom") {
    zoom = msg;
    updateZoomObjFn();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0UsTUFBeEIsRUFBZ0NkLENBQUMsSUFBSSxDQUFyQyxFQUF3QztBQUN0QyxTQUFLLElBQUk4SCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCOUUsTUFBQUEsZUFBZSxDQUFDNkUsUUFBUSxHQUFHQyxDQUFaLENBQWYsR0FBZ0NqQyxHQUFHLENBQUM3RixDQUFDLEdBQUc4SCxDQUFMLENBQW5DO0FBQ0Q7O0FBQ0RELElBQUFBLFFBQVEsSUFBSSxDQUFaO0FBQ0Q7O0FBQ0QvRixFQUFBQSxjQUFjLEdBUnlCLENBU3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOztBQUVELFNBQVNpRSxjQUFULEdBQTBCO0FBQ3hCLE1BQUlqRSxjQUFjLEtBQUtuRCxvREFBbkIsSUFBa0M4QyxjQUF0QyxFQUFzRDtBQUNwRCtFLElBQUFBLElBQUk7QUFDTDtBQUNGLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvanMvZHJhdy1jYW52YXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvcGFnZXMvY21hZXMtZGVtby9vYmotZm5zLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9tYWluLmNzcz83NmJiIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL2luZGV4LmNzcz8zNDJkIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvcGFnZXMvY21hZXMtZGVtby9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZHJhd0NhbnZhcyhjYW52YXNGcm9tLCBjdHhUbywgY2VudGVyLCBhbmdsZSkge1xuICBjdHhUby5zYXZlKClcbiAgY3R4VG8udHJhbnNsYXRlKGNlbnRlclswXSwgY2VudGVyWzFdKVxuICBpZiAoYW5nbGUgIT09IDApIHtcbiAgICBjdHhUby5yb3RhdGUoYW5nbGUpXG4gIH1cbiAgY3R4VG8udHJhbnNsYXRlKC0wLjUgKiBjYW52YXNGcm9tLndpZHRoLCAtMC41ICogY2FudmFzRnJvbS5oZWlnaHQpXG4gIGN0eFRvLmRyYXdJbWFnZShjYW52YXNGcm9tLCAwLCAwKVxuICBjdHhUby5yZXN0b3JlKClcbn1cbiIsImV4cG9ydCBjb25zdCBuVml6V29ya2VycyA9IDgsXG4gIGNhbnZhc0RpbSA9IDYwMCxcbiAgbWFya2VyUiA9IDcsXG4gIG9iakZuSW5pdCA9IFwiYWNrbGV5XCIsXG4gIG1lYW5SYWRpdXNNaW4gPSAwLjYsXG4gIG1lYW5SYWRpdXNNYXggPSAwLjksXG4gIHNpZ21hU2NhbGUgPSAwLjUsXG4gIHpvb21TdGVwTWFnID0gMS4wNSxcbiAgbkVsbGlwc2VUZXN0UHRzID0gMzJcbiIsIi8vIHtcbi8vICAgYWNrbGV5OiBcIkFja2xleVwiLFxuLy8gICBib2hhY2hldnNreTE6IFwiQm9oYWNoZXZza3kgTm8uMVwiLFxuLy8gICBncmlld2FuazogXCJHcmlld2Fua1wiLFxuLy8gICByYXN0cmlnaW46IFwiUmFzdHJpZ2luXCIsXG4vLyB9XG5cbmV4cG9ydCBjb25zdCBvYmpGbnMgPSB7XG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vYWNrbGV5Lmh0bWxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9Db2RlL2Fja2xleW0uaHRtbFxuICBhY2tsZXk6IChpbnB1dHMpID0+IHtcbiAgICAvLyBkZWZhdWx0IGE9MjAsIGI9MC4yLCBjPTJwaVxuICAgIGNvbnN0IGEgPSAyMCxcbiAgICAgIGIgPSAwLjIsXG4gICAgICBjID0gMiAqIE1hdGguUElcbiAgICAvLyBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBjb25zdCBkID0gMixcbiAgICAgIGRfaW52ID0gMC41IC8vICgxIC8gZClcbiAgICBsZXQgc3VtMSA9IDAsXG4gICAgICBzdW0yID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bTEgKz0geGkgKiB4aVxuICAgICAgc3VtMiArPSBNYXRoLmNvcyhjICogeGkpXG4gICAgfVxuICAgIC8vIGxldCBkX2ludiA9IDEgLyBkXG4gICAgbGV0IHRlcm0xID0gLWEgKiBNYXRoLmV4cCgtYiAqIE1hdGguc3FydChzdW0xICogZF9pbnYpKSxcbiAgICAgIHRlcm0yID0gLU1hdGguZXhwKHN1bTIgKiBkX2ludilcbiAgICByZXR1cm4gdGVybTEgKyB0ZXJtMiArIGEgKyBNYXRoLkVcbiAgfSxcbiAgLy8gaHR0cDovL2JlbmNobWFya2ZjbnMueHl6L2JlbmNobWFya2ZjbnMvYm9oYWNoZXZza3luMWZjbi5odG1sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vQ29kZS9ib2hhMW0uaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2JvaGEuaHRtbFxuICBib2hhY2hldnNreTE6IChpbnB1dHMpID0+IHtcbiAgICBsZXQgeDEgPSBpbnB1dHNbMF1cbiAgICBsZXQgeDIgPSBpbnB1dHNbMV1cblxuICAgIGxldCB0ZXJtMSA9IHgxICogeDFcbiAgICBsZXQgdGVybTIgPSAyICogeDIgKiB4MlxuICAgIGxldCB0ZXJtMyA9IC0wLjMgKiBNYXRoLmNvcygzICogTWF0aC5QSSAqIHgxKVxuICAgIGxldCB0ZXJtNCA9IC0wLjQgKiBNYXRoLmNvcyg0ICogTWF0aC5QSSAqIHgyKVxuXG4gICAgcmV0dXJuIHRlcm0xICsgdGVybTIgKyB0ZXJtMyArIHRlcm00ICsgMC43XG4gIH0sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vZ3JpZXdhbmsuaHRtbFxuICBncmlld2FuazogKGlucHV0cykgPT4ge1xuICAgIGxldCBkID0gaW5wdXRzLmxlbmd0aFxuICAgIGxldCBzdW0gPSAwXG4gICAgbGV0IHByb2QgPSAxXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIGxldCB4aSA9IGlucHV0c1tpXVxuICAgICAgc3VtICs9ICh4aSAqIHhpKSAvIDQwMDBcbiAgICAgIHByb2QgKj0gTWF0aC5jb3MoeGkgLyBNYXRoLnNxcnQoaSArIDEpKVxuICAgIH1cbiAgICByZXR1cm4gc3VtIC0gcHJvZCArIDFcbiAgfSxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9yYXN0ci5odG1sXG4gIHJhc3RyaWdpbjogKGlucHV0cykgPT4ge1xuICAgIGxldCBkID0gaW5wdXRzLmxlbmd0aFxuICAgIGxldCBzdW0gPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIGxldCB4aSA9IGlucHV0c1tpXVxuICAgICAgc3VtICs9IHhpICogeGkgLSAxMCAqIE1hdGguY29zKDIgKiBNYXRoLlBJICogeGkpXG4gICAgfVxuICAgIHJldHVybiAxMCAqIGQgKyBzdW1cbiAgfSxcbn1cblxuLy8gZmFuY3kgbmFtZXMgZm9yIHNlbGVjdCBtZW51XG5vYmpGbnMuYWNrbGV5LmZhbmN5TmFtZSA9IFwiQWNrbGV5XCJcbm9iakZucy5ib2hhY2hldnNreTEuZmFuY3lOYW1lID0gXCJCb2hhY2hldnNreSBOby4xXCJcbm9iakZucy5ncmlld2Fuay5mYW5jeU5hbWUgPSBcIkdyaWV3YW5rXCJcbm9iakZucy5yYXN0cmlnaW4uZmFuY3lOYW1lID0gXCJSYXN0cmlnaW5cIlxuXG4vLyBmbkxpbXMgZm9yIGRpc3BsYXkgbGltaXRzXG5vYmpGbnMuYWNrbGV5Lnh5TGltID0gMzIuNzY4XG5vYmpGbnMuYm9oYWNoZXZza3kxLnh5TGltID0gMTAwXG5vYmpGbnMuZ3JpZXdhbmsueHlMaW0gPSA2MDBcbm9iakZucy5yYXN0cmlnaW4ueHlMaW0gPSA1LjEyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsge1wic3JjX3BhZ2VzX2NtYWVzLWRlbW9fY21hLXdvcmtlcl9qc1wiOlwiNmYwNDFjODI5NDk1MDkxOGU3ODdcIixcInNyY19wYWdlc19jbWFlcy1kZW1vX3Zpei13b3JrZXJfanNcIjpcIjQ0Y2VjYTk5ODc5OTliZjdlNjgyXCJ9W2NodW5rSWRdICsgXCIuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImNtYWVzLWRlbW9cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsInJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKVxucmVxdWlyZShcIi4uLy4uL21haW4uY3NzXCIpXG5pbXBvcnQgeyBvYmpGbnMgfSBmcm9tIFwiLi9vYmotZm5zLmpzXCJcbmltcG9ydCB7IGNhbnZhc0RpbSwgbWFya2VyUiwgblZpeldvcmtlcnMsIG9iakZuSW5pdCB9IGZyb20gXCIuL2dsb2JhbHMuanNcIlxuaW1wb3J0IHsgZHJhd0NhbnZhcyB9IGZyb20gXCIuLy4uLy4uL2pzL2RyYXctY2FudmFzLmpzXCJcblxubGV0IHpvb20gPSAxLFxuICBtZWFuc1BhdGhBcnIsXG4gIGVsbGlwc2VQYXJhbXMsXG4gIHNvbHV0aW9ucyxcbiAgc29sdXRpb25zRnJlc2ggPSBmYWxzZSxcbiAgZWxsaXBzZVB0cyxcbiAgc2NvcmVMaW1zUmVjZWl2ZWQsXG4gIG1pblNjb3JlLFxuICBtYXhTY29yZSxcbiAgaW1hZ2VzUmVjZWl2ZWQgPSAwLFxuICBkaXNwbGF5TWVhbnNQYXRoID0gZmFsc2VcblxuY29uc3QgY2FudmFzRm5HcmFkaWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLWJnXCIpXG5jb25zdCBjYW52YXNDbWFTb2xzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtZmdcIilcbmNvbnN0IGNhbnZhc0NtYU1lYW5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtbWVhbnNcIilcbmNvbnN0IGNhbnZhc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqLWZuLWNhbnZhcy1kaXZcIilcbmNhbnZhc0Rpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgd2lkdGg6JHtjYW52YXNEaW19cHg7IGhlaWdodDoke2NhbnZhc0RpbX1weGApXG5mb3IgKGxldCBjYW52YXMgb2YgW2NhbnZhc0NtYVNvbHMsIGNhbnZhc0ZuR3JhZGllbnQsIGNhbnZhc0NtYU1lYW5zXSkge1xuICBjYW52YXMud2lkdGggPSBjYW52YXNEaW1cbiAgY2FudmFzLmhlaWdodCA9IGNhbnZhc0RpbVxufVxuXG5jb25zdCBjdHhGbkdyYWRpZW50ID0gY2FudmFzRm5HcmFkaWVudC5nZXRDb250ZXh0KFwiMmRcIilcbmNvbnN0IGN0eENtYVNvbHMgPSBjYW52YXNDbWFTb2xzLmdldENvbnRleHQoXCIyZFwiKVxuY3R4Q21hU29scy5zdHJva2VTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpXCJcbmN0eENtYVNvbHMubGluZVdpZHRoID0gM1xuLy8gY3R4Q21hU29scy5maWxsU3R5bGUgPSBcImJsYWNrXCJcbmNvbnN0IGN0eENtYU1lYW5zID0gY2FudmFzQ21hTWVhbnMuZ2V0Q29udGV4dChcIjJkXCIpXG5jb25zdCBpbWFnZURhdGFCZyA9IGN0eEZuR3JhZGllbnQuY3JlYXRlSW1hZ2VEYXRhKGNhbnZhc0RpbSwgY2FudmFzRGltKVxuY29uc3QgaW1hZ2VEYXRhQmdEYXRhID0gaW1hZ2VEYXRhQmcuZGF0YVxuaW1hZ2VEYXRhQmdEYXRhLmZpbGwoMjU1KVxuXG5jb25zdCBtYXJrZXJDYW52YXMgPSBnZXRNYXJrZXJDYW52YXMoKVxuXG5jb25zdCBmblNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqLWZuLXNlbGVjdFwiKVxuXG5mb3IgKGxldCBrIG9mIE9iamVjdC5rZXlzKG9iakZucykpIHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICBvcHRpb24udmFsdWUgPSBrXG4gIG9wdGlvbi50ZXh0ID0gb2JqRm5zW2tdLmZhbmN5TmFtZVxuICBpZiAoayA9PT0gb2JqRm5Jbml0KSB7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZVxuICB9XG4gIGZuU2VsZWN0LmFkZChvcHRpb24pXG59XG5cbmZuU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgY29uc3QgZm5OYW1lID0gZS50YXJnZXQudmFsdWVcbiAgdXBkYXRlT2JqRm4oZm5OYW1lKVxufSlcblxuZnVuY3Rpb24gdXBkYXRlT2JqRm4oZm5OYW1lKSB7XG4gIGZvciAobGV0IHdvcmtlciBvZiB2aXpXb3JrZXJzKSB7XG4gICAgd29ya2VyLnBvc3RNZXNzYWdlKFtcImZuTmFtZVwiLCBmbk5hbWVdKVxuICB9XG4gIGNtYVdvcmtlci5wb3N0TWVzc2FnZShbXCJmbk5hbWVcIiwgZm5OYW1lXSlcbiAgem9vbSA9IDFcbn1cblxuY29uc3QgcG9wTXVsdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wLW11bHQtc2VsZWN0XCIpXG5wb3BNdWx0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgbGV0IHBvcHNpemVNdWx0aXBsaWVyID0gZS50YXJnZXQudmFsdWVcbiAgY21hV29ya2VyLnBvc3RNZXNzYWdlKFtcInBvcE11bHRcIiwgcG9wc2l6ZU11bHRpcGxpZXJdKVxufSlcblxuY29uc3Qgem9vbUluQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ6b29tLWluXCIpXG56b29tSW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgem9vbSAqPSAxLjFcbiAgdXBkYXRlWm9vbUFsbCgpXG59KVxuXG5jb25zdCB6b29tT3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ6b29tLW91dFwiKVxuem9vbU91dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB6b29tIC89IDEuMVxuICB1cGRhdGVab29tQWxsKClcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZVpvb21PYmpGbigpIHtcbiAgZm9yIChsZXQgd29ya2VyIG9mIHZpeldvcmtlcnMpIHtcbiAgICB3b3JrZXIucG9zdE1lc3NhZ2UoW1wiem9vbVwiLCB6b29tXSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVab29tQ01BKCkge1xuICBjbWFXb3JrZXIucG9zdE1lc3NhZ2UoW1wiem9vbVwiLCB6b29tXSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlWm9vbUFsbCgpIHtcbiAgdXBkYXRlWm9vbU9iakZuKClcbiAgdXBkYXRlWm9vbUNNQSgpXG59XG5cbmNvbnN0IHN0ZXBCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0ZXAtYnRuXCIpXG5zdGVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNtYVdvcmtlci5wb3N0TWVzc2FnZShbXCJzdGVwXCIsIHRydWVdKVxufSlcblxuY29uc3QgbWVhbnNQYXRoQ2hlY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lYW5zLXBhdGgtY2hlY2tib3hcIilcbm1lYW5zUGF0aENoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICBkaXNwbGF5TWVhbnNQYXRoID0gbWVhbnNQYXRoQ2hlY2suY2hlY2tlZFxuICBpZiAoZGlzcGxheU1lYW5zUGF0aCkge1xuICAgIGRyYXdNZWFucyhtZWFuc1BhdGhBcnIsIGN0eENtYU1lYW5zKVxuICB9IGVsc2Uge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBjdHhDbWFNZWFucy5jbGVhclJlY3QoXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIGN0eENtYU1lYW5zLmNhbnZhcy53aWR0aCxcbiAgICAgICAgY3R4Q21hTWVhbnMuY2FudmFzLmhlaWdodFxuICAgICAgKVxuICAgIH0pXG4gIH1cbn0pXG5cbnJlc2V0U2NvcmVMaW1zKClcblxuY29uc3QgY21hV29ya2VyID0gbmV3IFdvcmtlcihuZXcgVVJMKFwiLi9jbWEtd29ya2VyLmpzXCIsIGltcG9ydC5tZXRhLnVybCkpXG5cbmNtYVdvcmtlci5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICBjb25zdCBbaW5mbywgbXNnXSA9IGUuZGF0YVxuICBpZiAoaW5mbyA9PT0gXCJzb2x1dGlvbnNcIikge1xuICAgIHNvbHV0aW9ucyA9IG1zZ1swXS5zbGljZSgpXG4gICAgZWxsaXBzZVB0cyA9IG1zZ1sxXS5zbGljZSgpXG4gICAgc29sdXRpb25zRnJlc2ggPSB0cnVlXG4gICAgY2hlY2tEcmF3UmVhZHkoKVxuICB9IGVsc2UgaWYgKGluZm8gPT09IFwibWVhbnNcIikge1xuICAgIG1lYW5zUGF0aEFyciA9IG1zZy5zbGljZSgpXG4gICAgaWYgKGRpc3BsYXlNZWFuc1BhdGgpIHtcbiAgICAgIGRyYXdNZWFucyhtZWFuc1BhdGhBcnIsIGN0eENtYU1lYW5zKVxuICAgIH1cbiAgfSBlbHNlIGlmIChpbmZvID09PSBcInpvb21cIikge1xuICAgIHpvb20gPSBtc2dcbiAgICB1cGRhdGVab29tT2JqRm4oKVxuICB9IGVsc2UgaWYgKGluZm8gPT09IFwiZWxsaXBzZVB0c1wiKSB7XG4gICAgZWxsaXBzZVB0cyA9IG1zZy5zbGljZSgpXG4gICAgY29uc29sZS5sb2coZWxsaXBzZVB0cylcbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3TWVhbnMobWVhbnMsIGN0eCkge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpXG4gICAgY3R4LnNhdmUoKVxuICAgIGN0eC50cmFuc2xhdGUoMC41ICogY3R4LmNhbnZhcy53aWR0aCwgMC41ICogY3R4LmNhbnZhcy5oZWlnaHQpXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4Lm1vdmVUbyhtZWFuc1swXSwgbWVhbnNbMV0pXG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPCBtZWFucy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgY3R4LmxpbmVUbyhtZWFuc1tpXSwgbWVhbnNbaSArIDFdKVxuICAgIH1cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICBjdHgubGluZVdpZHRoID0gNFxuICAgIGN0eC5zdHJva2UoKVxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIlxuICAgIGN0eC5saW5lV2lkdGggPSAyXG4gICAgY3R4LnN0cm9rZSgpXG4gICAgY3R4LnJlc3RvcmUoKVxuICB9KVxufVxuXG5mdW5jdGlvbiBkcmF3KCkge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGN0eEZuR3JhZGllbnQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YUJnLCAwLCAwKVxuICAgIGN0eENtYVNvbHMuY2xlYXJSZWN0KDAsIDAsIGNhbnZhc0NtYVNvbHMud2lkdGgsIGNhbnZhc0NtYVNvbHMuaGVpZ2h0KVxuICAgIGN0eENtYVNvbHMuc2F2ZSgpXG4gICAgY3R4Q21hU29scy50cmFuc2xhdGUoMC41ICogY2FudmFzQ21hU29scy53aWR0aCwgMC41ICogY2FudmFzQ21hU29scy5oZWlnaHQpXG4gICAgLy8gY29uc3QgbXBhTGVuZ3RoID0gbWVhbnNQYXRoQXJyLmxlbmd0aFxuICAgIC8vIGN0eENtYVNvbHMuYmVnaW5QYXRoKClcbiAgICAvLyBjdHhDbWFTb2xzLmVsbGlwc2UoXG4gICAgLy8gICBtZWFuc1BhdGhBcnJbbXBhTGVuZ3RoIC0gMl0sXG4gICAgLy8gICBtZWFuc1BhdGhBcnJbbXBhTGVuZ3RoIC0gMV0sXG4gICAgLy8gICBlbGxpcHNlUGFyYW1zWzBdICogem9vbSxcbiAgICAvLyAgIGVsbGlwc2VQYXJhbXNbMV0gKiB6b29tLFxuICAgIC8vICAgZWxsaXBzZVBhcmFtc1syXSxcbiAgICAvLyAgIDAsXG4gICAgLy8gICAyICogTWF0aC5QSVxuICAgIC8vIClcbiAgICAvLyBjdHhDbWFTb2xzLnN0cm9rZSgpXG4gICAgY3R4Q21hU29scy5iZWdpblBhdGgoKVxuICAgIGN0eENtYVNvbHMubW92ZVRvKGVsbGlwc2VQdHNbMF0sIGVsbGlwc2VQdHNbMV0pXG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPCBlbGxpcHNlUHRzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICBjdHhDbWFTb2xzLmxpbmVUbyhlbGxpcHNlUHRzW2ldLCBlbGxpcHNlUHRzW2kgKyAxXSlcbiAgICB9XG4gICAgY3R4Q21hU29scy5jbG9zZVBhdGgoKVxuICAgIGN0eENtYVNvbHMuc3Ryb2tlKClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvbHV0aW9ucy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgZHJhd01hcmtlcihzb2x1dGlvbnNbaV0sIHNvbHV0aW9uc1tpICsgMV0sIGN0eENtYVNvbHMpXG4gICAgfVxuICAgIGN0eENtYVNvbHMucmVzdG9yZSgpXG4gICAgLy8gY3R4Q21hU29scy5yZXN0b3JlKClcbiAgICBzb2x1dGlvbnNGcmVzaCA9IGZhbHNlXG4gICAgaW1hZ2VzUmVjZWl2ZWQgPSAwXG4gICAgY21hV29ya2VyLnBvc3RNZXNzYWdlKFtcImRyYXdSZWFkeVwiLCB0cnVlXSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gZHJhd01hcmtlcih4LCB5LCBjdHgpIHtcbiAgZHJhd0NhbnZhcyhtYXJrZXJDYW52YXMsIGN0eCwgW3gsIHldLCAwKVxufVxuXG5mdW5jdGlvbiBnZXRNYXJrZXJDYW52YXMoKSB7XG4gIGZ1bmN0aW9uIGRyYXdMaW5lU2VnKHN0YXJ0UHQsIGVuZFB0LCBjb2xvciwgd2VpZ2h0LCBjdHgpIHtcbiAgICBjdHguYmVnaW5QYXRoKClcbiAgICBjdHgubW92ZVRvKC4uLnN0YXJ0UHQpXG4gICAgY3R4LmxpbmVUbyguLi5lbmRQdClcbiAgICBjdHgubGluZVdpZHRoID0gd2VpZ2h0XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3JcbiAgICBjdHguc3Ryb2tlKClcbiAgfVxuXG4gIGNvbnN0IG1hcmtlckNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksXG4gICAgbWFya2VyQ1RYID0gbWFya2VyQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxuICBjb25zdCBib3JkZXIgPSAxLFxuICAgIGQgPSAyICogKGJvcmRlciArIG1hcmtlclIpXG5cbiAgbWFya2VyQ2FudmFzLndpZHRoID0gZFxuICBtYXJrZXJDYW52YXMuaGVpZ2h0ID0gZFxuXG4gIG1hcmtlckNUWC50cmFuc2xhdGUoMC41ICogbWFya2VyQ2FudmFzLndpZHRoLCAwLjUgKiBtYXJrZXJDYW52YXMuaGVpZ2h0KVxuXG4gIGRyYXdMaW5lU2VnKFstbWFya2VyUiAtIDEsIDBdLCBbbWFya2VyUiArIDEsIDBdLCBcImJsYWNrXCIsIDQsIG1hcmtlckNUWClcbiAgZHJhd0xpbmVTZWcoWzAsIC1tYXJrZXJSIC0gMV0sIFswLCBtYXJrZXJSICsgMV0sIFwiYmxhY2tcIiwgNCwgbWFya2VyQ1RYKVxuICBkcmF3TGluZVNlZyhbLW1hcmtlclIsIDBdLCBbbWFya2VyUiwgMF0sIFwid2hpdGVcIiwgMiwgbWFya2VyQ1RYKVxuICBkcmF3TGluZVNlZyhbMCwgLW1hcmtlclJdLCBbMCwgbWFya2VyUl0sIFwid2hpdGVcIiwgMiwgbWFya2VyQ1RYKVxuXG4gIHJldHVybiBtYXJrZXJDYW52YXNcbn1cblxuY29uc3Qgdml6V29ya2VycyA9IFtdXG5mb3IgKGxldCB3b3JrZXJJZHggPSAwOyB3b3JrZXJJZHggPCBuVml6V29ya2Vyczsgd29ya2VySWR4KyspIHtcbiAgY29uc3Qgdml6V29ya2VyID0gbmV3IFdvcmtlcihuZXcgVVJMKFwiLi92aXotd29ya2VyLmpzXCIsIGltcG9ydC5tZXRhLnVybCkpXG4gIHZpeldvcmtlci5wb3N0TWVzc2FnZShbXCJ3b3JrZXJJRFwiLCB3b3JrZXJJZHhdKVxuICB2aXpXb3JrZXIub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICBjb25zdCBbaW5mbywgbXNnXSA9IGUuZGF0YVxuICAgIGlmIChpbmZvID09PSBcInNjb3JlTGltc1wiKSB7XG4gICAgICB1cGRhdGVTY29yZUxpbXMoLi4ubXNnLCB2aXpXb3JrZXJzKVxuICAgIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJpbWFnZURhdGFBcnJheVwiKSB7XG4gICAgICB1cGRhdGVJbWFnZURhdGEod29ya2VySWR4LCBtc2cpXG4gICAgICBjaGVja0RyYXdSZWFkeSgpXG4gICAgfVxuICB9XG4gIHZpeldvcmtlcnMucHVzaCh2aXpXb3JrZXIpXG59XG5cbmZ1bmN0aW9uIHJlc2V0U2NvcmVMaW1zKCkge1xuICBtaW5TY29yZSA9IEluZmluaXR5XG4gIG1heFNjb3JlID0gLUluZmluaXR5XG4gIHNjb3JlTGltc1JlY2VpdmVkID0gMFxufVxuXG5mdW5jdGlvbiB1cGRhdGVTY29yZUxpbXMoX21pblNjb3JlLCBfbWF4U2NvcmUsIHZpeldvcmtlcnMpIHtcbiAgaWYgKF9taW5TY29yZSA8IG1pblNjb3JlKSB7XG4gICAgbWluU2NvcmUgPSBfbWluU2NvcmVcbiAgfVxuICBpZiAoX21heFNjb3JlID4gbWF4U2NvcmUpIHtcbiAgICBtYXhTY29yZSA9IF9tYXhTY29yZVxuICB9XG4gIHNjb3JlTGltc1JlY2VpdmVkKytcbiAgaWYgKHNjb3JlTGltc1JlY2VpdmVkID09PSBuVml6V29ya2Vycykge1xuICAgIGZvciAobGV0IHdvcmtlciBvZiB2aXpXb3JrZXJzKSB7XG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoW1wic2NvcmVMaW1zXCIsIFttaW5TY29yZSwgbWF4U2NvcmVdXSlcbiAgICB9XG4gICAgcmVzZXRTY29yZUxpbXMoKVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUltYWdlRGF0YSh3b3JrZXJJZHgsIG1zZykge1xuICBsZXQgYXJyYXlJZHggPSAod29ya2VySWR4IC8gblZpeldvcmtlcnMpICogaW1hZ2VEYXRhQmdEYXRhLmxlbmd0aFxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1zZy5sZW5ndGg7IGkgKz0gMykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICBpbWFnZURhdGFCZ0RhdGFbYXJyYXlJZHggKyBqXSA9IG1zZ1tpICsgal1cbiAgICB9XG4gICAgYXJyYXlJZHggKz0gNFxuICB9XG4gIGltYWdlc1JlY2VpdmVkKytcbiAgLy8gaWYgKGltYWdlc1JlY2VpdmVkID09PSBuVml6V29ya2Vycykge1xuICAvLyAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gIC8vICAgICBjdHhGbkdyYWRpZW50LnB1dEltYWdlRGF0YShpbWFnZURhdGFCZywgMCwgMClcbiAgLy8gICB9KVxuICAvLyAgIGltYWdlc1JlY2VpdmVkID0gMFxuICAvLyB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRHJhd1JlYWR5KCkge1xuICBpZiAoaW1hZ2VzUmVjZWl2ZWQgPT09IG5WaXpXb3JrZXJzICYmIHNvbHV0aW9uc0ZyZXNoKSB7XG4gICAgZHJhdygpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkcmF3Q2FudmFzIiwiY2FudmFzRnJvbSIsImN0eFRvIiwiY2VudGVyIiwiYW5nbGUiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiblZpeldvcmtlcnMiLCJjYW52YXNEaW0iLCJtYXJrZXJSIiwib2JqRm5Jbml0IiwibWVhblJhZGl1c01pbiIsIm1lYW5SYWRpdXNNYXgiLCJzaWdtYVNjYWxlIiwiem9vbVN0ZXBNYWciLCJuRWxsaXBzZVRlc3RQdHMiLCJvYmpGbnMiLCJhY2tsZXkiLCJpbnB1dHMiLCJhIiwiYiIsImMiLCJNYXRoIiwiUEkiLCJkIiwiZF9pbnYiLCJzdW0xIiwic3VtMiIsImkiLCJ4aSIsImNvcyIsInRlcm0xIiwiZXhwIiwic3FydCIsInRlcm0yIiwiRSIsImJvaGFjaGV2c2t5MSIsIngxIiwieDIiLCJ0ZXJtMyIsInRlcm00IiwiZ3JpZXdhbmsiLCJsZW5ndGgiLCJzdW0iLCJwcm9kIiwicmFzdHJpZ2luIiwiZmFuY3lOYW1lIiwieHlMaW0iLCJyZXF1aXJlIiwiem9vbSIsIm1lYW5zUGF0aEFyciIsImVsbGlwc2VQYXJhbXMiLCJzb2x1dGlvbnMiLCJzb2x1dGlvbnNGcmVzaCIsImVsbGlwc2VQdHMiLCJzY29yZUxpbXNSZWNlaXZlZCIsIm1pblNjb3JlIiwibWF4U2NvcmUiLCJpbWFnZXNSZWNlaXZlZCIsImRpc3BsYXlNZWFuc1BhdGgiLCJjYW52YXNGbkdyYWRpZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhc0NtYVNvbHMiLCJjYW52YXNDbWFNZWFucyIsImNhbnZhc0RpdiIsInNldEF0dHJpYnV0ZSIsImNhbnZhcyIsImN0eEZuR3JhZGllbnQiLCJnZXRDb250ZXh0IiwiY3R4Q21hU29scyIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiY3R4Q21hTWVhbnMiLCJpbWFnZURhdGFCZyIsImNyZWF0ZUltYWdlRGF0YSIsImltYWdlRGF0YUJnRGF0YSIsImRhdGEiLCJmaWxsIiwibWFya2VyQ2FudmFzIiwiZ2V0TWFya2VyQ2FudmFzIiwiZm5TZWxlY3QiLCJPYmplY3QiLCJrZXlzIiwiayIsIm9wdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsInRleHQiLCJzZWxlY3RlZCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZm5OYW1lIiwidGFyZ2V0IiwidXBkYXRlT2JqRm4iLCJ2aXpXb3JrZXJzIiwid29ya2VyIiwicG9zdE1lc3NhZ2UiLCJjbWFXb3JrZXIiLCJwb3BNdWx0U2VsZWN0IiwicG9wc2l6ZU11bHRpcGxpZXIiLCJ6b29tSW5CdG4iLCJ1cGRhdGVab29tQWxsIiwiem9vbU91dEJ0biIsInVwZGF0ZVpvb21PYmpGbiIsInVwZGF0ZVpvb21DTUEiLCJzdGVwQnRuIiwibWVhbnNQYXRoQ2hlY2siLCJjaGVja2VkIiwiZHJhd01lYW5zIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0IiwicmVzZXRTY29yZUxpbXMiLCJXb3JrZXIiLCJVUkwiLCJpbXBvcnQiLCJtZXRhIiwidXJsIiwib25tZXNzYWdlIiwiaW5mbyIsIm1zZyIsInNsaWNlIiwiY2hlY2tEcmF3UmVhZHkiLCJjb25zb2xlIiwibG9nIiwibWVhbnMiLCJjdHgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJkcmF3IiwicHV0SW1hZ2VEYXRhIiwiY2xvc2VQYXRoIiwiZHJhd01hcmtlciIsIngiLCJ5IiwiZHJhd0xpbmVTZWciLCJzdGFydFB0IiwiZW5kUHQiLCJjb2xvciIsIndlaWdodCIsIm1hcmtlckNUWCIsImJvcmRlciIsIndvcmtlcklkeCIsInZpeldvcmtlciIsInVwZGF0ZVNjb3JlTGltcyIsInVwZGF0ZUltYWdlRGF0YSIsInB1c2giLCJJbmZpbml0eSIsIl9taW5TY29yZSIsIl9tYXhTY29yZSIsImFycmF5SWR4IiwiaiJdLCJzb3VyY2VSb290IjoiIn0=