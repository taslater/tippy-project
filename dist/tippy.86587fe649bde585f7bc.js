/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/draw-canvas.js":
/*!*******************************!*\
  !*** ./src/js/draw-canvas.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/pages/tippy/cmaMeanInit.js":
/*!****************************************!*\
  !*** ./src/pages/tippy/cmaMeanInit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cmaMeanInit": () => (/* binding */ cmaMeanInit)
/* harmony export */ });
var cmaMeanInit = Float32Array.from([1.097368597984314, -0.4921252429485321, -2.4285199642181396, 1.9147231578826904, 1.4103649854660034, -1.0730559825897217, 3.633850336074829, 0.969073474407196, 1.72327721118927, 3.862189769744873, -0.5683848857879639, 0.4833804965019226, 1.621141791343689, -1.7951841354370117, 0.28255704045295715, 0.8373199105262756, -1.491740107536316, 1.680241346359253, 4.32080602645874, -6.2230939865112305, 3.8894057273864746, -0.43056386709213257, -1.0381842851638794, 1.206999659538269, -2.442864418029785, -3.2872400283813477, 4.1724443435668945, -1.3102113008499146, 2.0718746185302734, -2.012195348739624, -0.09232735633850098, -2.3299849033355713, -1.3458508253097534, 1.57430899143219, 1.585335373878479, -4.818405628204346, -0.5162748098373413, -0.35466793179512024, 0.6563999056816101, 0.5765581130981445, 3.2163033485412598, -2.673863410949707, -2.775988817214966, 0.3102789521217346, 2.8213186264038086, -2.6345112323760986, 0.41489309072494507, 0.5273040533065796, 2.8084323406219482, -0.22201833128929138, -1.8847272396087646, 2.1349411010742188, 3.9124855995178223, 0.23571348190307617, -0.4009905755519867, -2.32651686668396, -5.905391693115234, -3.277113199234009, -3.1946818828582764, 0.6040287613868713, 1.5398304462432861, -1.7137975692749023, -2.5994322299957275, 0.7596493363380432, 2.0505306720733643, -1.0719929933547974, -0.12434184551239014, -0.21520830690860748, -2.977525234222412, -2.916106700897217, -2.0895442962646484, 0.6780237555503845, -1.1381938457489014, -0.3976782262325287, -8.091259002685547, -0.8609429597854614, 2.272367000579834, -0.44986462593078613, -1.9860502481460571, -2.037736654281616, 1.3788461685180664, -0.946772575378418, -2.512946128845215, 1.2120083570480347, -0.8112329840660095, -0.2584746479988098, -0.8203612565994263, -1.7425763607025146, -2.4738595485687256, 0.20930416882038116, -3.1742286682128906, -0.1539025902748108, 2.706810474395752, -1.630825400352478, 0.03723296895623207, -2.7679619789123535, -1.1558122634887695, -0.16676628589630127, -0.11495263129472733, -0.3647719621658325, -1.2723920345306396, -0.8320516347885132, 0.0584125891327858, -0.20485924184322357, -0.6998800039291382, -0.7748422622680664, 0.03306061774492264, 0.05045829713344574, -0.7898354530334473, -0.3644859194755554, -1.9912363290786743, 0.30128753185272217, 0.4223995506763458, -3.72501277923584, -6.310052394866943, 3.808600425720215, 1.4358415603637695, -2.62609601020813, -2.87255597114563, 2.104060649871826, -3.1228067874908447, 0.46431323885917664, 1.5147188901901245, 1.0571037530899048, 0.053630534559488297, 0.8355461359024048, -2.3932297229766846, -1.0719527006149292, -1.0285042524337769, 4.927562236785889, -4.36212682723999, 1.996174693107605, 2.3710286617279053, -0.3524213433265686, -0.06643331795930862, -0.9069985747337341, 2.0232365131378174, 0.6794627904891968, -3.7015702724456787, -1.2146440744400024, 2.636486291885376, 3.430572748184204, 0.665721595287323, 0.35096776485443115, -4.536441802978516, 1.5776478052139282, 3.518752098083496, 4.304330348968506, 0.34464845061302185, 0.7764376401901245, 0.8761256337165833, 3.0202441215515137, -1.0507209300994873, -0.6082743406295776, -1.6540871858596802, 2.939337968826294, -0.17868749797344208, 2.395843505859375, -0.22536619007587433, -5.117509841918945, 1.9952406883239746, -0.9335593581199646, -0.7380295395851135, 0.8094670176506042, 0.8877607583999634, -1.979039192199707, 1.1599781513214111, -2.73085355758667, 3.2037062644958496, 0.7695357799530029, 1.7714511156082153, -2.932318925857544, -1.0461864471435547, 3.496929407119751, 3.517202138900757, 2.6925926208496094, 0.33698439598083496, -0.7475488185882568, 0.16617265343666077, -0.07216118276119232, -2.731569766998291, 2.3597419261932373, 0.14207404851913452, 0.34206706285476685, 5.10419225692749, 2.5803232192993164, 0.5957708358764648, 0.19110116362571716, 0.9374128580093384, 1.2445136308670044, 3.4148755073547363, -2.150707244873047, -2.19406795501709, -2.1235013008117676, -1.156686544418335, 1.1939444541931152, 3.0110416412353516, -0.7731320261955261, -2.8795650005340576, 2.6769773960113525, 2.0949344635009766, -2.073817491531372, 3.4075050354003906, 1.9652248620986938, -1.1932811737060547, -2.3039934635162354, -2.7437469959259033, -1.7810425758361816, 1.5841933488845825, 2.8032116889953613, 0.25412386655807495, -1.4644629955291748, 4.183811187744141, -0.17973998188972473, 2.7961342334747314, 1.39539635181427, 0.34437960386276245, -1.1173146963119507, 0.40626052021980286, -1.5824397802352905, 0.14563427865505219, -2.399414539337158, 6.656028747558594, 0.8279803395271301, -0.7896231412887573, -2.388155460357666, -0.5894807577133179, -1.5486451387405396, -0.9272681474685669, -2.5805861949920654, 0.18140041828155518, -1.4993616342544556, 0.6692470908164978, -3.4452054500579834, -1.1278798580169678, -5.746531963348389, 0.692906379699707, 0.38156548142433167, 1.763306736946106, -4.294862747192383, 0.6706625819206238, -0.4210456311702728, -2.863720178604126, -0.9124757647514343, 2.075263023376465, -3.9785890579223633, 0.2882373631000519, 0.4847204089164734, -6.575814723968506, -6.198582649230957, 0.43105143308639526, -5.662414073944092, -4.541703701019287, -6.71414041519165, -5.687849044799805, -9.647754669189453, -2.682098865509033, -2.0994865894317627, 2.992748737335205, -6.269527435302734, 2.764437198638916, 5.571993350982666, 0.817680835723877, 3.074885845184326, -2.727198600769043, 9.613213539123535, 4.820910930633545, -4.828794956207275, -6.644251823425293]);

/***/ }),

/***/ "./src/pages/tippy/draw-sim.js":
/*!*************************************!*\
  !*** ./src/pages/tippy/draw-sim.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawTippy": () => (/* binding */ drawTippy),
/* harmony export */   "drawInputBar": () => (/* binding */ drawInputBar),
/* harmony export */   "getWheelCanvas": () => (/* binding */ getWheelCanvas),
/* harmony export */   "getChassisCanvas": () => (/* binding */ getChassisCanvas),
/* harmony export */   "getLidarCanvas": () => (/* binding */ getLidarCanvas)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.js */ "./src/pages/tippy/globals.js");
/* harmony import */ var _tippy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tippy.js */ "./src/pages/tippy/tippy.js");
/* harmony import */ var _js_draw_canvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../js/draw-canvas.js */ "./src/js/draw-canvas.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function drawTippy(tippy, terrainPts, scale, center, ctx, chassisCanvas, wheelCanvas, lidarCanvas) {
  var _tippy$drawPositionDa = tippy.drawPositionData,
      wheelPosCurrent = _tippy$drawPositionDa.wheelPosCurrent,
      wheelAngleCurrent = _tippy$drawPositionDa.wheelAngleCurrent,
      chassisPosCurrent = _tippy$drawPositionDa.chassisPosCurrent,
      chassisAngleCurrent = _tippy$drawPositionDa.chassisAngleCurrent;
  ctx.lineWidth = 2;
  var chassisMass = tippy.chassisMass,
      wheelMass = tippy.wheelMass,
      totalMass = chassisMass + wheelMass;
  var massCenter = [(chassisPosCurrent[0] * chassisMass + wheelPosCurrent[0] * wheelMass) / totalMass, // (chassisPosCurrent[1] * chassisMass + wheelPosCurrent[1] * wheelMass) /
  //   totalMass,
  wheelPosCurrent[1]];
  var wheelPosOffset = [wheelPosCurrent[0] - massCenter[0], wheelPosCurrent[1] - massCenter[1]],
      chassisPosOffset = [chassisPosCurrent[0] - massCenter[0], chassisPosCurrent[1] - massCenter[1]];
  var halfW = ctx.canvas.width / 2;
  var viewLimitsX = [massCenter[0] - halfW / scale, massCenter[0] + halfW / scale];
  var visibleTerrainIdxMin = (0,_tippy_js__WEBPACK_IMPORTED_MODULE_1__.xPosToTerrainIdx)(viewLimitsX[0]),
      visibleTerrainIdxMax = (0,_tippy_js__WEBPACK_IMPORTED_MODULE_1__.xPosToTerrainIdx)(viewLimitsX[1]);
  visibleTerrainIdxMin = Math.max(visibleTerrainIdxMin - 1, 0);
  visibleTerrainIdxMax = Math.min(visibleTerrainIdxMax + 1, _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.nTerrainPts - 1);
  ctx.save();
  ctx.translate(center[0], center[1]);
  var drawBottom = ctx.canvas.height - center[1];

  if (visibleTerrainIdxMax != 1) {
    ctx.beginPath();
    ctx.moveTo(scale * ((0,_tippy_js__WEBPACK_IMPORTED_MODULE_1__.terrainIdxToXPos)(visibleTerrainIdxMin) - massCenter[0]), scale * (terrainPts[visibleTerrainIdxMin] - massCenter[1]));

    for (var i = visibleTerrainIdxMin + 1; i <= visibleTerrainIdxMax; i++) {
      ctx.lineTo(scale * ((0,_tippy_js__WEBPACK_IMPORTED_MODULE_1__.terrainIdxToXPos)(i) - massCenter[0]), scale * (terrainPts[i] - massCenter[1]));
    }

    ctx.lineTo(scale * ((0,_tippy_js__WEBPACK_IMPORTED_MODULE_1__.terrainIdxToXPos)(visibleTerrainIdxMax) - massCenter[0]), drawBottom);
    ctx.lineTo(scale * ((0,_tippy_js__WEBPACK_IMPORTED_MODULE_1__.terrainIdxToXPos)(visibleTerrainIdxMin) - massCenter[0]), drawBottom);
    ctx.closePath();
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;

    for (var _i = visibleTerrainIdxMin; _i <= visibleTerrainIdxMax; _i++) {
      var idx = _i - (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.nTerrainPts - 1) / 2,
          x = scale * ((0,_tippy_js__WEBPACK_IMPORTED_MODULE_1__.terrainIdxToXPos)(_i) - massCenter[0]),
          y = scale * (terrainPts[_i] - massCenter[1]);
      ctx.beginPath();
      ctx.moveTo(x, y);

      if (idx * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval <= -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth || idx * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval >= _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth) {
        continue;
      }

      var l = 10;

      if (idx % 4 == 0) {
        l = 40;
      } else if (idx % 2 == 0) {
        l = 20;
      }

      ctx.lineTo(x, y - l);
      ctx.stroke();
    }
  }

  if (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth > viewLimitsX[0] && _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth < viewLimitsX[1]) {
    drawWall(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.nTerrainPts - 1, terrainPts, massCenter, drawBottom, ctx);
  }

  if (-_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth >= viewLimitsX[0] && -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth <= viewLimitsX[1]) {
    drawWall(0, terrainPts, massCenter, drawBottom, ctx);
  }

  (0,_js_draw_canvas_js__WEBPACK_IMPORTED_MODULE_2__.drawCanvas)(chassisCanvas, ctx, [scale * chassisPosOffset[0], scale * chassisPosOffset[1]], chassisAngleCurrent);
  (0,_js_draw_canvas_js__WEBPACK_IMPORTED_MODULE_2__.drawCanvas)(wheelCanvas, ctx, [scale * wheelPosOffset[0], scale * wheelPosOffset[1]], wheelAngleCurrent);
  var reverse = tippy.reverse;

  for (var j = 0; j < _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.xOffs.length; j++) {
    var lidarY = tippy.lidarYs[j],
        xOff = reverse * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.xOffs[j];
    (0,_js_draw_canvas_js__WEBPACK_IMPORTED_MODULE_2__.drawCanvas)(lidarCanvas, ctx, [scale * (wheelPosOffset[0] + xOff), scale * (wheelPosOffset[1] + tippy.wheelR + lidarY)], 0);
  }

  ctx.restore();
}

function drawWall(idx, terrainPts, massCenter, drawBottom, ctx) {
  var mirror = idx == 0 ? -1 : 1,
      wallTopDraw = scale * (terrainPts[idx] - massCenter[1] - _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.wallH),
      wallHDraw = drawBottom - wallTopDraw;
  ctx.fillStyle = "gray";
  ctx.fillRect(scale * (mirror * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth - massCenter[0]), wallTopDraw, scale * mirror * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.wallW, wallHDraw);
}

function drawInputBar(target, ctx) {
  var h = ctx.canvas.height,
      halfW = ctx.canvas.width / 2;
  ctx.lineWidth = 3;
  ctx.fillStyle = "red";
  ctx.fillRect(halfW, h - 1.2 * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.barHeight, _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.barMax * target, _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.barHeight);
  ctx.beginPath();
  ctx.moveTo(halfW, h - 0.2 * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.barHeight);
  ctx.lineTo(halfW, h - 1.2 * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.barHeight);
  ctx.stroke();
} // function drawCanvas(canvasFrom, ctxTo, center, angle) {
//   ctxTo.save()
//   ctxTo.translate(center[0], center[1])
//   ctxTo.rotate(angle)
//   ctxTo.translate(-0.5 * canvasFrom.width, -0.5 * canvasFrom.height)
//   ctxTo.drawImage(canvasFrom, 0, 0)
//   ctxTo.restore()
// }

function getWheelCanvas(d) {
  var wheelCanvas = document.createElement("canvas"),
      wheelCTX = wheelCanvas.getContext("2d");
  var border = 1;
  wheelCanvas.width = d + 2 * border;
  wheelCanvas.height = d + 2 * border;
  var tireThickness = d * 25 / 400,
      tireR = 0.5 * (d - tireThickness),
      rimThickness = d * 18 / 400,
      rimShapowThickness = d * 15 / 400,
      rimR = tireR - 0.5 * (tireThickness + rimThickness),
      hubR = d * 47 / 400,
      axleCapR = d * 17 / 400,
      lugOffset = d * 33 / 400,
      lugR = d * 10 / 400,
      shadowColor = "rgb(130,130,130)";
  wheelCTX.save();
  wheelCTX.translate(0.5 * wheelCanvas.width, 0.5 * wheelCanvas.height); // tire
  // ctx.createRadialGradient(x0, y0, r0, x1, y1, r1)

  var grd = wheelCTX.createRadialGradient(0, 0, rimR, 0, 0, tireR + tireThickness);
  grd.addColorStop(0, "black");
  grd.addColorStop(0.4, "rgb(40,40,40)");
  grd.addColorStop(0.55, "rgb(65,65,65)");
  grd.addColorStop(0.8, "black");
  wheelCTX.beginPath();
  wheelCTX.arc(0, 0, tireR, 0, Math.PI * 2);
  wheelCTX.lineWidth = tireThickness;
  wheelCTX.strokeStyle = grd;
  wheelCTX.stroke(); // rim shadow

  wheelCTX.beginPath();
  wheelCTX.arc(0, 0, rimR - 0.5 * (rimThickness + rimShapowThickness), 0, Math.PI * 2);
  wheelCTX.lineWidth = rimShapowThickness;
  wheelCTX.strokeStyle = shadowColor;
  wheelCTX.stroke(); // hub shadow

  wheelCTX.beginPath();
  wheelCTX.arc(0, 0, hubR, 0, Math.PI * 2);
  wheelCTX.lineWidth = d * 5 / 400;
  wheelCTX.strokeStyle = shadowColor;
  wheelCTX.stroke();

  for (var _ = 0; _ < 5; _++) {
    spoke();
    wheelCTX.rotate(Math.PI * 2 / 5);
  } // rim


  wheelCTX.beginPath();
  wheelCTX.arc(0, 0, rimR, 0, Math.PI * 2);
  wheelCTX.lineWidth = rimThickness;
  wheelCTX.strokeStyle = "silver";
  wheelCTX.stroke(); // hub

  wheelCTX.beginPath();
  wheelCTX.arc(0, 0, hubR, 0, Math.PI * 2);
  wheelCTX.fillStyle = "silver";
  wheelCTX.fill(); // axle

  wheelCTX.beginPath();
  wheelCTX.arc(0, 0, axleCapR, 0, Math.PI * 2);
  wheelCTX.lineWidth = d * 0.7 / 400;
  wheelCTX.strokeStyle = "black";
  wheelCTX.stroke(); // lugs

  for (var _2 = 0; _2 < 5; _2++) {
    lug();
    wheelCTX.rotate(Math.PI * 2 / 5);
  }

  function halfSpoke(stroke) {
    wheelCTX.beginPath();
    wheelCTX.moveTo(-1, hubR);
    wheelCTX.lineTo(d * 21 / 400, hubR - d * 10 / 400);
    wheelCTX.lineTo(d * 12 / 400, 0.32 * (hubR - d * 10 / 400 + rimR));
    wheelCTX.lineTo(d * 9 / 400, 0.75 * rimR);
    wheelCTX.lineTo(d * 11 / 400, 0.9 * rimR);
    wheelCTX.lineTo(d * 28 / 400, rimR);
    wheelCTX.lineTo(-1, rimR);
    wheelCTX.moveTo(-1, hubR - d * 10 / 400);

    if (stroke) {
      wheelCTX.lineWidth = d * 4 / 400;
      wheelCTX.strokeStyle = shadowColor;
      wheelCTX.stroke();
    } else {
      wheelCTX.fillStyle = "silver";
      wheelCTX.fill();
    }
  }

  function spoke() {
    wheelCTX.save();
    halfSpoke(true);
    wheelCTX.scale(-1, 1);
    halfSpoke(true);
    wheelCTX.restore();
    wheelCTX.save();
    halfSpoke(false);
    wheelCTX.scale(-1, 1);
    halfSpoke(false);
    wheelCTX.restore();
  }

  function lug() {
    wheelCTX.save();
    wheelCTX.translate(0, lugOffset);
    wheelCTX.beginPath();

    for (var i = 0; i < 6; i++) {
      var theta = i * Math.PI / 3,
          coord = [lugR * Math.cos(theta), lugR * Math.sin(theta)];

      if (i == 0) {
        wheelCTX.moveTo.apply(wheelCTX, coord);
      } else {
        wheelCTX.lineTo.apply(wheelCTX, coord);
      }
    }

    wheelCTX.closePath();
    wheelCTX.fillStyle = "rgb(150,150,150)";
    wheelCTX.fill();
    wheelCTX.strokeStyle = "black";
    wheelCTX.lineWidth = d * 0.7 / 400;
    wheelCTX.stroke();
    wheelCTX.restore();
  }

  wheelCTX.restore();
  return wheelCanvas;
}
function getChassisCanvas(chassisVertices, scale) {
  var chassisCanvas = document.createElement("canvas"),
      chassisCTX = chassisCanvas.getContext("2d");
  var border = 1;
  var xLims = [Infinity, -Infinity],
      yLims = [Infinity, -Infinity];

  var _iterator = _createForOfIteratorHelper(chassisVertices),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var xy = _step.value;
      var x = xy[0],
          y = xy[1];
      xLims[0] = Math.min(xLims[0], x);
      xLims[1] = Math.max(xLims[1], x);
      yLims[0] = Math.min(yLims[0], y);
      yLims[1] = Math.max(yLims[1], y);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  chassisCanvas.width = scale * (xLims[1] - xLims[0]) + 2 * border;
  chassisCanvas.height = scale * (yLims[1] - yLims[0]) + 2 * border;
  chassisCTX.translate(0.5 * chassisCanvas.width, 0.5 * chassisCanvas.height);
  chassisCTX.beginPath();
  chassisCTX.moveTo(scale * chassisVertices[0][0], scale * chassisVertices[0][1]);

  for (var i = 1; i < chassisVertices.length; i++) {
    chassisCTX.lineTo(scale * chassisVertices[i][0], scale * chassisVertices[i][1]);
  }

  chassisCTX.closePath();
  chassisCTX.fillStyle = "orange";
  chassisCTX.fill();
  chassisCTX.stroke();
  chassisCTX.font = "25px sans-serif";
  chassisCTX.textAlign = "center"; // chassisCTX.textBaseline = "middle"

  chassisCTX.textBaseline = "bottom";
  chassisCTX.fillStyle = "black";
  chassisCTX.rotate(0.5 * Math.PI);
  chassisCTX.translate(-35, 0);
  chassisCTX.fillText("TIPPY", 0, 0);
  chassisCTX.rotate(1 * Math.PI);
  chassisCTX.fillText("TIPPY", 0, 0);
  return chassisCanvas;
}
function getLidarCanvas() {
  var lidarCanvas = document.createElement("canvas"),
      lidarCTX = lidarCanvas.getContext("2d");
  var border = 1,
      pointR = 5,
      d = 2 * (border + pointR);
  lidarCanvas.width = d;
  lidarCanvas.height = d;
  lidarCTX.translate(0.5 * lidarCanvas.width, 0.5 * lidarCanvas.height);
  lidarCTX.beginPath();
  lidarCTX.arc(0, 0, pointR, 0, 2 * Math.PI);
  lidarCTX.fillStyle = "red";
  lidarCTX.fill();
  return lidarCanvas;
}

/***/ }),

/***/ "./src/pages/tippy/globals.js":
/*!************************************!*\
  !*** ./src/pages/tippy/globals.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globals": () => (/* binding */ globals)
/* harmony export */ });
var globals = {
  w: 800,
  h: 400,
  lInputCodes: ["KeyJ", "ArrowLeft"],
  rInputCodes: ["KeyK", "ArrowRight"],
  xOffs: [-0.3, -0.1, 0.1, 0.3],
  ts: 1.0 / 60,
  // sinLim: 0.3,
  sinLim: 0.4,
  // directionStep: 0.02,
  sinStep: 0.03,
  sinDecay: 0.01,
  velLim: 4,
  velDecay: 0.01,
  groundHalfWidth: 100,
  groundFlatCenterHalfWidth: 1,
  groundDetailInterval: 0.2,

  // nTerrainPts: 2 * (this.groundHalfWidth / this.groundDetailInterval) + 1,
  get nTerrainPts() {
    return 2 * (this.groundHalfWidth / this.groundDetailInterval) + 1;
  },

  wallH: 0.9,
  wallW: 0.5,
  // slopeMag: 0.1,
  slopeDecay: 0.9,
  slopeLim: 0.4,
  slopeDiffMag: 0.125,
  slopeDiffDecay: 1.1,
  slopeDiffLim: 0.2,

  get barMax() {
    var lim = this.targetType == "vel" ? this.velLim : this.sinLim;
    return 0.5 * 0.9 * this.w / lim;
  },

  barHeight: 25,

  // scoreDenomEps: 0.01,
  // scoreDenomEps: 0.1,
  get scoreDenomEps() {
    return this.sinLim;
  },

  crashSinLimit: 0.8,
  maxTorque: 1.0,
  nWorkers: 8,
  multiplier: 2,
  epLen: 800,
  twitchinesses: [0, 0.1, 0.05, 0.025, 0.01, 0.005, 0.0025, null],
  cmaSigma: 0.5,
  // targetType: "sin",
  targetType: "vel"
};

/***/ }),

/***/ "./src/pages/tippy/random_normal.js":
/*!******************************************!*\
  !*** ./src/pages/tippy/random_normal.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rand_normal": () => (/* binding */ rand_normal)
/* harmony export */ });
function box_muller() {
  var u0 = Math.random();
  var u1 = Math.random(); // let part0 = (-2.0 * u0.ln()).sqrt()

  var part0 = Math.sqrt(-2.0 * Math.log(u0));
  var part1 = 2.0 * Math.PI * u1;
  var z0 = part0 * Math.cos(part1);
  var z1 = part0 * Math.sin(part1);
  return Float32Array.from([z0, z1]);
}

function rand_normal(n) {
  var res = new Float32Array(n);

  for (var i = 0; i < n; i++) {
    var pair = box_muller();
    res[i] = pair[0];

    if (i + 1 >= n) {
      break;
    }

    i++;
    res[i] = pair[1];
  }

  return res;
}

/***/ }),

/***/ "./src/pages/tippy/tippy.js":
/*!**********************************!*\
  !*** ./src/pages/tippy/tippy.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Population": () => (/* binding */ Population),
/* harmony export */   "updateDirection": () => (/* binding */ updateDirection),
/* harmony export */   "generateTerrainPts": () => (/* binding */ generateTerrainPts),
/* harmony export */   "xPosToTerrainIdx": () => (/* binding */ xPosToTerrainIdx),
/* harmony export */   "terrainIdxToXPos": () => (/* binding */ terrainIdxToXPos)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.js */ "./src/pages/tippy/globals.js");
/* harmony import */ var _random_normal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random_normal.js */ "./src/pages/tippy/random_normal.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Tippy = /*#__PURE__*/function () {
  function Tippy(wheelPosInit, world, b2, population) {
    _classCallCheck(this, Tippy);

    this.population = population;
    console.assert(wheelPosInit.length == 2, "Tippy requires 2d wheelPos"); // this.wheelPosInit = wheelPosInit.slice()

    this.wheelR = 0.25;
    this.wheelPosInit = [wheelPosInit[0], wheelPosInit[1] - this.wheelR];
    var wheelFriction = 0.9,
        wheelDensity = 0.5,
        wheelRestitution = 0.1,
        chassisDensity = 2.0;
    this.chassisH = 1.0;
    this.chassisW = 0.3;
    this.axleOffsetY = 0.1; // create wheel

    {
      var bd = new b2.b2BodyDef();
      bd.set_type(b2.b2_dynamicBody);
      bd.set_position(_construct(b2.b2Vec2, _toConsumableArray(this.wheelPosInit)));
      this.wheelBody = world.CreateBody(bd);
      var shape = new b2.b2CircleShape();
      shape.set_m_radius(this.wheelR);
      var fd = new b2.b2FixtureDef();
      fd.set_shape(shape);
      fd.set_density(wheelDensity);
      fd.set_friction(wheelFriction);
      fd.set_restitution(wheelRestitution);
      var filter = fd.get_filter();
      filter.set_categoryBits(0x0002);
      filter.set_maskBits(0x0001);
      fd.set_filter(filter);
      var fixture = b2.castObject(this.wheelBody.CreateFixture(fd), b2.b2Fixture);
      fixture.partType = "wheel";
      fixture.spot = this;
      this.wheelMass = this.wheelBody.GetMass();
    } // create chassis

    {
      var edgeX = 0.5 * this.chassisW,
          edgeY = 0.5 * this.chassisH,
          cutoutX = 0.2 * this.chassisW,
          cutoutY = 0.35 * this.chassisH;
      this.chassisVertices = [[+edgeX, -edgeY], [-edgeX, -edgeY], [-edgeX, +cutoutY], [-cutoutX, +edgeY], [+cutoutX, +edgeY], [+edgeX, +cutoutY]];
      var b2ChassisVertices = [];

      var _iterator = _createForOfIteratorHelper(this.chassisVertices),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var vertex = _step.value;
          b2ChassisVertices.push(new b2.b2Vec2(vertex[0] + this.wheelPosInit[0], vertex[1] + this.wheelPosInit[1]));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.chassisPosInit = [this.wheelPosInit[0], this.wheelPosInit[1] - 0.5 * this.chassisH + this.axleOffsetY];

      var _bd = new b2.b2BodyDef();

      _bd.set_type(b2.b2_dynamicBody);

      _bd.set_position(_construct(b2.b2Vec2, _toConsumableArray(this.chassisPosInit))); // bd.set_linearDamping(0.1)
      // bd.set_angularDamping(0.1)


      this.chassisBody = world.CreateBody(_bd);

      var _shape = this.b2CreatePolygonShape(b2ChassisVertices, b2);

      var _fd = new b2.b2FixtureDef();

      var _filter = _fd.get_filter();

      _filter.set_categoryBits(0x0002);

      _filter.set_maskBits(0x0001);

      _fd.set_filter(_filter);

      _fd.set_density(chassisDensity);

      _fd.set_shape(_shape); // fd.set_friction(0.3)
      // fd.set_restitution(0.1)


      var _fixture = b2.castObject(this.chassisBody.CreateFixture(_fd), b2.b2Fixture);

      _fixture.partType = "chassis";
      _fixture.spot = this;
      this.chassisMass = this.chassisBody.GetMass();
    } // create joint

    {
      var jd = new b2.b2RevoluteJointDef();
      jd.Initialize(this.wheelBody, this.chassisBody, _construct(b2.b2Vec2, _toConsumableArray(this.wheelPosInit)));
      jd.set_enableMotor(true);
      jd.set_maxMotorTorque(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.maxTorque);
      this.axle = b2.castObject(world.CreateJoint(jd), b2.b2RevoluteJoint);
    }
    this.inputDim = this.getInputs(0).length; // // this.shapes = [this.inputDim, 16, 8, 4]
    // // this.shapes = [this.inputDim, 20, 10, 4]

    this.shapes = [this.inputDim, 12, 8, 1];
    this.n_dim = 0;
    this.weightCount = 0;
    this.biasCount = 0;

    for (var i = 0; i < this.shapes.length - 1; i++) {
      var n = this.shapes[i],
          m = this.shapes[i + 1];
      this.n_dim += (n + 1) * m;
      this.weightCount += n * m;
      this.biasCount += m;
    }

    this.reset(b2);
  }

  _createClass(Tippy, [{
    key: "b2CreatePolygonShape",
    value: function b2CreatePolygonShape(vertices, b2) {
      var shape = new b2.b2PolygonShape();

      var buffer = b2._malloc(vertices.length * 8);

      var offset = 0;

      for (var i = 0; i < vertices.length; i++) {
        b2.HEAPF32[buffer + offset >> 2] = vertices[i].get_x();
        b2.HEAPF32[buffer + (offset + 4) >> 2] = vertices[i].get_y();
        offset += 8;
      }

      var ptr_wrapped = b2.wrapPointer(buffer, b2.b2Vec2);
      shape.Set(ptr_wrapped, vertices.length);
      return shape;
    }
  }, {
    key: "setWts",
    value: function setWts(flatWts) {
      // this.flatWts = new Float32Array(this.n_dim).map(() => Math.random() - 0.5)
      this.flatWts = flatWts;
      var flatWtIdx = 0;
      this.weights = []; // this.weightCount = 0

      for (var i = 0; i < this.shapes.length - 1; i++) {
        var n = this.shapes[i],
            m = this.shapes[i + 1],
            newWeight = Float32Array.from(this.flatWts.slice(flatWtIdx, flatWtIdx + n * m)); // this.weightCount += newWeight.length

        this.weights.push(new Matrix(newWeight, n, m));
        flatWtIdx += n * m;
      }

      this.biases = []; // this.biasCount = 0

      for (var _i = 0; _i < this.shapes.length - 1; _i++) {
        var _n = 1,
            _m = this.shapes[_i + 1],
            newBias = Float32Array.from(this.flatWts.slice(flatWtIdx, flatWtIdx + _n * _m)); // this.biasCount += newBias.length

        this.biases.push(new Matrix(newBias, _n, _m));
        flatWtIdx += _n * _m;
      }
    }
  }, {
    key: "reset",
    value: function reset(b2) {
      this.chassisBody.SetTransform(_construct(b2.b2Vec2, _toConsumableArray(this.chassisPosInit)), 0);
      this.chassisBody.SetLinearVelocity(new b2.b2Vec2(0, 0));
      this.chassisBody.SetAngularVelocity(0);
      this.chassisBody.SetAwake(1);
      this.wheelBody.SetTransform(_construct(b2.b2Vec2, _toConsumableArray(this.wheelPosInit)), 0);
      this.wheelBody.SetLinearVelocity(new b2.b2Vec2(0, 0));
      this.wheelBody.SetAngularVelocity(0);
      this.wheelBody.SetAwake(1);
      this.targetSqErrSum = 0;
      this.targetPrev = null;
      this.prevOutput = 0;
      this.outputDiffSqSum = 0;
      this.prevWheelVelX = 0;
      this.wheelAccX = 0;
      this.prevChassisVelX = 0;
      this.chassisAccX = 0;
      this.driftXSqSum = 0;
      this.crashStepCount = 0;
    }
  }, {
    key: "updateTargetScore",
    value: function updateTargetScore(target, current) {
      var diff = target - current,
          diffSq = diff * diff,
          denom = Math.abs(target) + _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.scoreDenomEps; // this.targetSqErrSum += diffSq / denom

      this.targetSqErrSum += _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.targetType === "vel" ? diffSq : 1e2 * diffSq;
    }
  }, {
    key: "setSpeed",
    value: function setSpeed(speed) {
      this.axle.SetMotorSpeed(speed);
    }
  }, {
    key: "getInputs",
    value: function getInputs(target) {
      this.reverse = target != 0 ? Math.sign(target) : 1;
      var inputs;

      if (this.inputDim != null) {
        inputs = new Float32Array(this.inputDim);
      } else {
        inputs = [];
      }

      var i = 0; // elevation

      var wheelPos = this.wheelBody.GetPosition(),
          wheelX = wheelPos.get_x(),
          wheelY = wheelPos.get_y(); //   interpY = interpTerrainY(wheelX, this.population.terrainPts)
      // this.yClearance = interpY - wheelY - this.wheelR
      // inputs[i] = this.yClearance
      // i++

      this.lidarYs = [];

      var _iterator2 = _createForOfIteratorHelper(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.xOffs),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var xOff = _step2.value;
          var lidarY = interpTerrainY(wheelX + this.reverse * xOff, this.population.terrainPts) - wheelY - this.wheelR;
          this.lidarYs.push(lidarY);
          inputs[i] = lidarY;
          i++;
        } // chassisSin

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var chassisSin = Math.sin(this.chassisBody.GetAngle());
      inputs[i] = this.reverse * chassisSin;
      i++;

      if (Math.abs(chassisSin) > _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.crashSinLimit) {
        this.crashStepCount++;
      } // chassisVelX, chassisVelY


      var chassisVel = this.chassisBody.GetLinearVelocity(),
          chassisVelX = chassisVel.get_x();
      this.chassisAccX = chassisVelX - this.prevChassisVelX;
      this.prevChassisVelX = chassisVelX; // inputs[i] = this.reverse * chassisVel.get_x()
      // i++
      // inputs[i] = chassisVel.get_y()
      // i++
      // chassisAngVel

      if (target == 0) {
        this.driftXSqSum += this.chassisAccX * this.chassisAccX;
      }

      var chassisAngVel = this.chassisBody.GetAngularVelocity();
      inputs[i] = this.reverse * chassisAngVel;
      i++; // wheelVelX, wheelVelY

      var wheelVel = this.wheelBody.GetLinearVelocity(),
          wheelVelX = wheelVel.get_x();
      this.wheelAccX = wheelVelX - this.prevWheelVelX;
      this.prevWheelVelX = wheelVelX;
      inputs[i] = this.reverse * wheelVelX;
      i++;
      inputs[i] = wheelVel.get_y();
      i++; // wheelAngVel

      var wheelAngVel = this.wheelBody.GetAngularVelocity();
      inputs[i] = this.reverse * wheelAngVel;
      i++;
      var axleRxn = this.axle.GetReactionForce(60);
      inputs[i] = 1e-2 * this.reverse * axleRxn.get_x();
      i++;
      inputs[i] = 1e-2 * axleRxn.get_y();
      i++; // target

      inputs[i] = this.reverse * target;
      i++;

      if (this.targetPrev !== null) {
        if (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.targetType === "sin") {
          this.updateTargetScore(this.targetPrev, chassisSin);
        } else {
          this.updateTargetScore(this.targetPrev, wheelVelX);
        }
      }

      this.targetPrev = target;
      return inputs;
    }
  }, {
    key: "update",
    value: function update(target) {
      var inputsArray = this.getInputs(target);
      var inputsMatrix = new Matrix(inputsArray, 1, inputsArray.length);
      var outputRaw = inputsMatrix // const speeds = inputs
      .mul(this.weights[0]).add(this.biases[0]) // .relu()
      // .leakyRelu()
      .leakyElu().mul(this.weights[1]).add(this.biases[1]) // .relu()
      // .leakyRelu()
      .leakyElu().mul(this.weights[2]).add(this.biases[2]).data[0]; // const reverse = target != 0 ? Math.sign(target) : 1,

      var output = this.reverse * outputRaw;
      this.setSpeed(output);
      var outputDiff = output - this.prevOutput;
      this.outputDiffSqSum += outputDiff * outputDiff;
      this.prevOutput = output;
    }
  }, {
    key: "drawPositionData",
    get: function get() {
      // return {
      //   wheelPosCurrent: this.wheelBody.GetPosition(),
      //   wheelAngleCurrent: this.wheelBody.GetAngle(),
      //   chassisPosCurrent: this.chassisBody.GetPosition(),
      //   chassisAngleCurrent: this.chassisBody.GetAngle(),
      // }
      var wheelPos = this.wheelBody.GetPosition(),
          chassisPos = this.chassisBody.GetPosition();
      return {
        wheelPosCurrent: [wheelPos.get_x(), wheelPos.get_y()],
        wheelAngleCurrent: this.wheelBody.GetAngle(),
        chassisPosCurrent: [chassisPos.get_x(), chassisPos.get_y()],
        chassisAngleCurrent: this.chassisBody.GetAngle()
      };
    }
  }, {
    key: "corrData",
    get: function get() {
      return [Math.sin(this.chassisBody.GetAngle()), this.wheelAccX, this.chassisAccX];
    } // sleep() {
    //   for (let body of [
    //     this.chassisBody,
    //     this.upperForelegBody,
    //     this.lowerForelegBody,
    //     this.upperHindlegBody,
    //     this.lowerHindlegBody,
    //   ]) {
    //     body.SetAwake(0)
    //     // body.SetEnabled(0)
    //   }
    // }

  }]);

  return Tippy;
}();

var Matrix = /*#__PURE__*/function () {
  function Matrix(data, m, n) {
    _classCallCheck(this, Matrix);

    this.data = data;
    this.m = m;
    this.n = n;
  }

  _createClass(Matrix, [{
    key: "mul",
    value: function mul(other) {
      var a = this.data,
          b = other.data,
          m = this.m,
          n = this.n,
          p = other.n,
          c = new Float32Array(new ArrayBuffer(4 * m * p));

      for (var j = 0; j < p; j++) {
        for (var i = 0; i < m; i++) {
          var sum = 0;

          for (var k = 0; k < n; k++) {
            sum += a[i * n + k] * b[k * p + j];
          }

          c[i * p + j] = sum;
        }
      }

      return new Matrix(c, m, p);
    }
  }, {
    key: "add",
    value: function add(other) {
      var a = this.data,
          b = other.data,
          l = a.length,
          c = new Float32Array(new ArrayBuffer(4 * l));

      for (var i = 0; i < l; i++) {
        c[i] = a[i] + b[i];
      }

      return new Matrix(c, this.m, this.n);
    }
  }, {
    key: "relu",
    value: function relu() {
      var n = this.data.length,
          result = this.data.slice();

      for (var i = 0; i < n; i++) {
        result[i] = Math.max(0, result[i]);
      }

      return new Matrix(result, this.m, this.n);
    }
  }, {
    key: "leakyRelu",
    value: function leakyRelu() {
      var n = this.data.length,
          result = this.data.slice();

      for (var i = 0; i < n; i++) {
        result[i] = Math.max(0.1 * result[i], result[i]);
      }

      return new Matrix(result, this.m, this.n);
    }
  }, {
    key: "elu",
    value: function elu() {
      var n = this.data.length,
          result = this.data.slice();

      for (var i = 0; i < n; i++) {
        if (result[i] < 0) {
          result[i] = Math.expm1(result[i]);
        }
      }

      return new Matrix(result, this.m, this.n);
    }
  }, {
    key: "leakyElu",
    value: function leakyElu() {
      var n = this.data.length,
          result = this.data.slice();

      for (var i = 0; i < n; i++) {
        if (result[i] < 0) {
          result[i] = Math.expm1(result[i]) + 0.1 * result[i];
        }
      }

      return new Matrix(result, this.m, this.n);
    }
  }]);

  return Matrix;
}();

function vectorNorms(vectors) {
  var result = new Float32Array(vectors.length).fill(0);

  for (var i = 0; i < vectors.length; i++) {
    var vector = vectors[i].data;

    var _iterator3 = _createForOfIteratorHelper(vector),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var x = _step3.value;
        result[i] += x * x;
      } // result[i] = Math.sqrt(result[i])

    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    result[i] /= vector.length;
  }

  return result;
}

function rowNormThingy(mat) {
  // m: row count, n: column count
  var rowCount = mat.m,
      colCount = mat.n;
  var sumAll = 0;
  var rowSums = new Float32Array(rowCount).fill(0),
      colSums = new Float32Array(colCount).fill(0); // row idx

  for (var rowIdx = 0; rowIdx < rowCount; rowIdx++) {
    // col idx
    for (var colIdx = 0; colIdx < colCount; colIdx++) {
      var val = mat.data[rowIdx * colCount + colIdx],
          valSq = val * val; // rowSums[rowIdx] += Math.abs(val)

      rowSums[rowIdx] += valSq; // colSums[colIdx] += Math.abs(val)

      colSums[colIdx] += valSq;
      sumAll += valSq;
    }
  }

  sumAll /= rowCount * colCount;
  var sumRows = 0;

  for (var i = 0; i < rowCount; i++) {
    var _val = rowSums[i] / colCount;

    sumRows += _val * _val;
  }

  sumRows /= rowCount;
  var sumCols = 0;

  for (var _i2 = 0; _i2 < colCount; _i2++) {
    var _val2 = colSums[_i2] / rowCount;

    sumCols += _val2 * _val2;
  }

  sumCols /= colCount; // return sumAll + 0.1 * sumRows + 1.0 * sumCols

  return sumAll;
}

var Population = /*#__PURE__*/function () {
  function Population(wheelPosInit, nTippys, terrainPts, b2) {
    _classCallCheck(this, Population);

    this.wheelPosInit = wheelPosInit.slice();
    {
      var gravity = new b2.b2Vec2(0, 9.81);
      this.world = new b2.b2World(gravity);
    }
    this.b2 = b2;
    this.terrainPts = terrainPts; // add ground

    {
      var groundBody = this.world.CreateBody(new b2.b2BodyDef());
      var terrainPtsFiltered = [];
      var yDiffPrev;

      for (var i = 0; i < _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.nTerrainPts; i++) {
        var yDiffCurr = terrainPts[i + 1] - terrainPts[i],
            sameSlope = yDiffCurr == yDiffPrev;
        yDiffPrev = yDiffCurr;

        if (sameSlope && i != _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.nTerrainPts - 1) {
          continue;
        }

        terrainPtsFiltered.push([terrainIdxToXPos(i), terrainPts[i]]);
      } // console.log(terrainPtsFiltered.length, globals.nTerrainPts)
      // reversed loop for CCW winding order (Box2D)


      for (var _i3 = terrainPtsFiltered.length - 1; _i3 >= 1; _i3--) {
        var edgeShape = new b2.b2EdgeShape();
        edgeShape.SetTwoSided(new b2.b2Vec2(terrainPtsFiltered[_i3][0], terrainPtsFiltered[_i3][1]), new b2.b2Vec2(terrainPtsFiltered[_i3 - 1][0], terrainPtsFiltered[_i3 - 1][1]));
        var groundFD = new b2.b2FixtureDef();
        groundFD.set_shape(edgeShape);
        groundFD.set_friction(0.9);
        groundFD.set_restitution(0.1);
        var groundFixture = b2.castObject(groundBody.CreateFixture(groundFD), b2.b2Fixture);
      } // add walls


      for (var _i4 = 0, _arr = [0, _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.nTerrainPts - 1]; _i4 < _arr.length; _i4++) {
        var idx = _arr[_i4];
        var _ref = [terrainIdxToXPos(idx), terrainPts[idx]],
            x = _ref[0],
            y = _ref[1];

        var _edgeShape = new b2.b2EdgeShape();

        _edgeShape.SetTwoSided(new b2.b2Vec2(x, y), new b2.b2Vec2(x, y - _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.wallH));

        var _groundFD = new b2.b2FixtureDef();

        _groundFD.set_shape(_edgeShape);

        _groundFD.set_friction(0.9);

        _groundFD.set_restitution(0.1);

        var _groundFixture = b2.castObject(groundBody.CreateFixture(_groundFD), b2.b2Fixture);
      }
    }
    this.tippys = [];
    this.addTippys(nTippys);
    this.n_dim = this.tippys[0].n_dim;
  }

  _createClass(Population, [{
    key: "reset",
    value: function reset() {
      var _iterator4 = _createForOfIteratorHelper(this.tippys),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var tippy = _step4.value;
          tippy.reset(this.b2);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "addTippys",
    value: function addTippys(nTippys) {
      for (var i = 0; i < nTippys; i++) {
        this.tippys.push(new Tippy(this.wheelPosInit, this.world, this.b2, this));
      }
    }
  }, {
    key: "setWts",
    value: function setWts(flatWts) {
      var flatWtsIdx = 0;

      var _iterator5 = _createForOfIteratorHelper(this.tippys),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var tippy = _step5.value;
          tippy.setWts(flatWts.slice(flatWtsIdx, flatWtsIdx + this.n_dim));
          flatWtsIdx += this.n_dim;
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "train",
    value: function train(_ref2) {
      var targets = _ref2.targets,
          solutions = _ref2.solutions;
      // assign solution and target to each tippy
      var nSolutions = solutions.length / this.n_dim;

      if (this.tippys.length < nSolutions * targets.length) {
        this.addTippys(nSolutions * targets.length - this.tippys.length);
      }

      var flatWtsIdx = 0;

      for (var i = 0; i < nSolutions; i++) {
        for (var j = 0; j < targets.length; j++) {
          var tippy = this.tippys[i * targets.length + j];
          tippy.setWts(solutions.slice(flatWtsIdx, flatWtsIdx + this.n_dim));
          tippy.targetIdx = j;
        }

        flatWtsIdx += this.n_dim;
      } // simulate using one target per solution


      this.reset();

      for (var step = 0; step < targets[0].length; step++) {
        var _iterator6 = _createForOfIteratorHelper(this.tippys),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _tippy = _step6.value;

            _tippy.update(targets[_tippy.targetIdx][step]);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        this.world.Step(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.ts, 8, 3);
      } // score solutions after simulation


      var solutionsScores = [];

      for (var _i5 = 0; _i5 < nSolutions; _i5++) {
        var tippy0 = this.tippys[_i5 * targets.length],
            solution = tippy0.flatWts;
        var wtsNorm = 0;

        var _iterator7 = _createForOfIteratorHelper(tippy0.weights),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var wtLayer = _step7.value;

            var _iterator9 = _createForOfIteratorHelper(wtLayer.data),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var wt = _step9.value;
                wtsNorm += wt * wt;
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        wtsNorm /= tippy0.weightCount;
        var biasNorm = 0;

        var _iterator8 = _createForOfIteratorHelper(tippy0.biases),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var biasLayer = _step8.value;

            var _iterator10 = _createForOfIteratorHelper(biasLayer.data),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var bias = _step10.value;
                biasNorm += bias * bias;
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        biasNorm /= tippy0.biasCount;
        var taskScores = [];

        for (var _j = 0; _j < targets.length; _j++) {
          var taskTippy = this.tippys[_i5 * targets.length + _j],
              mse = taskTippy.targetSqErrSum / _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.epLen,
              crashedRatio = taskTippy.crashStepCount / _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.epLen,
              driftX = taskTippy.driftXSqSum / _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.epLen;
          taskScores.push({
            mse: mse,
            crashedRatio: crashedRatio,
            driftX: driftX
          });
        } // solutionsScores.push({ solution, score })


        solutionsScores.push({
          solution: solution,
          wtsNorm: wtsNorm,
          biasNorm: biasNorm,
          taskScores: taskScores
        });
      }

      return solutionsScores;
    }
  }, {
    key: "update",
    value: function update(targets) {
      for (var i = 0; i < this.tippys.length; i++) {
        var tippy = this.tippys[i];
        tippy.update(targets[i]);
      }

      this.world.Step(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.ts, 8, 3);
    }
  }, {
    key: "draw",
    value: function draw(scale, center) {
      var _iterator11 = _createForOfIteratorHelper(this.tippys),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var tippy = _step11.value;
          tippy.draw(scale, center);
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }
  }]);

  return Population;
}();
function updateDirection(ld, rd, _targetSin, _targetVel) {
  // no change if both keys down
  var targetSin = _targetSin,
      targetVel = _targetVel;

  if (ld && rd) {
    return [targetSin, targetVel];
  } // decay sin toward zero


  if (targetSin != 0) {
    if (Math.abs(targetSin) < _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.sinDecay) {
      targetSin = 0;
    } else {
      targetSin -= Math.sign(targetSin) * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.sinDecay;
    }
  } // change if only one key
  // and limit output


  if (ld) {
    targetSin -= _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.sinStep;

    if (targetSin < -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.sinLim) {
      targetSin = -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.sinLim;
    }
  } else if (rd) {
    targetSin += _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.sinStep;

    if (targetSin > _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.sinLim) {
      targetSin = _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.sinLim;
    }
  } // decay vel toward zero


  if (targetVel != 0) {
    if (Math.abs(targetVel) < _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.velDecay) {
      targetVel = 0;
    } else {
      targetVel -= Math.sign(targetVel) * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.velDecay;
    }
  }

  targetVel += 0.102 * targetSin;

  if (targetVel > _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.velLim) {
    targetVel = _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.velLim;
  } else if (targetVel < -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.velLim) {
    targetVel = -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.velLim;
  } // // update test trigonometry
  // if (targetSin != targetDirectionBefore) {
  //   targetAngle = Math.asin(targetSin)
  //   targetCos = Math.cos(targetAngle)
  // }


  return [targetSin, targetVel];
}
function generateTerrainPts() {
  function terrainLRObject() {
    return {
      slopeDiff: 0,
      slope: 0,
      y: 0,
      x: _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval,
      xIdx: 1,
      // randVals: rand_normal(globals.groundHalfWidth / globals.groundDetailInterval - 1),
      // idx: 0,
      ys: [],
      updateSlope: function updateSlope() {
        if (this.x <= _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundFlatCenterHalfWidth) {
          return;
        } // this.slopeDiff += globals.slopeDiffMag * this.randVals[this.idx]


        this.slopeDiff += _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.slopeDiffMag * (0,_random_normal_js__WEBPACK_IMPORTED_MODULE_1__.rand_normal)(1)[0]; // this.idx++

        this.slopeDiff *= _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.slopeDiffDecay;

        if (Math.abs(this.slopeDiff) > _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.slopeDiffLim) {
          this.slopeDiff = Math.min(Math.max(this.slopeDiff, -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.slopeDiffLim), _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.slopeDiffLim); // console.log("slope diff bump")
        }

        var prevSlope = this.slope;
        this.slope += this.slopeDiff;
        this.slope *= _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.slopeDecay;

        if (Math.abs(this.slope) > _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.slopeLim) {
          this.slope = Math.min(Math.max(this.slope, -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.slopeLim), _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.slopeLim); // console.log("slope bump")
        }

        this.slopeDiff = this.slope - prevSlope;
      },
      update: function update() {
        this.updateSlope();
        this.y += this.slope * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval;
        this.ys.push(this.y); // prevent floating point drift

        this.xIdx++;
        this.x = _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval * this.xIdx;
      }
    };
  }

  var leftObj = terrainLRObject(),
      rightObj = terrainLRObject();

  for (var _ = 0; _ < _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth / _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval; _++) {
    leftObj.update();
    rightObj.update();
  }

  leftObj.ys.reverse();
  return leftObj.ys.concat([0]).concat(rightObj.ys);
}
function xPosToTerrainIdx(x) {
  x = Math.min(Math.max(x, -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth), _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth);
  return Math.round(x / _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval) + (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.nTerrainPts - 1) / 2;
}
function terrainIdxToXPos(idx) {
  return (idx - (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.nTerrainPts - 1) / 2) * _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval;
}

function interpTerrainY(x, terrainPts) {
  x = Math.min(Math.max(x, -_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth), _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundHalfWidth);
  var xScaled = x / _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval,
      idxOffset = (_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.nTerrainPts - 1) / 2,
      clipped = [Math.floor(xScaled), Math.ceil(xScaled)],
      xs = clipped.map(function (v) {
    return _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.groundDetailInterval * v;
  }),
      ys = clipped.map(function (v) {
    return terrainPts[v + idxOffset];
  });

  if (xs[1] == xs[0]) {
    return ys[0];
  }

  var slope = (ys[1] - ys[0]) / (xs[1] - xs[0]),
      xDiff = x - xs[0],
      yDiff = slope * xDiff;
  return ys[0] + yDiff;
}

/***/ }),

/***/ "./node_modules/box2d-wasm/dist/es/Box2D.js":
/*!**************************************************!*\
  !*** ./node_modules/box2d-wasm/dist/es/Box2D.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var __dirname = "/";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

var Box2D = (function() {
  var _scriptDir = "file:///Users/tom/Desktop/code_tests/webpack-tests/webpack-gh-pages-test/node_modules/box2d-wasm/dist/es/Box2D.js";
  
  return (
function(Box2D) {
  Box2D = Box2D || {};


var a;a||(a=typeof Box2D !== 'undefined' ? Box2D : {});var aa,ba;a.ready=new Promise(function(b,c){aa=b;ba=c});var ca={},da;for(da in a)a.hasOwnProperty(da)&&(ca[da]=a[da]);var ea="object"===typeof window,fa="function"===typeof importScripts,ha="",ia,ja,ka,la,ma;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)ha=fa?__webpack_require__(/*! path */ "?5f8c").dirname(ha)+"/":__dirname+"/",ia=function(b,c){la||(la=__webpack_require__(/*! fs */ "?4121"));ma||(ma=__webpack_require__(/*! path */ "?5f8c"));b=ma.normalize(b);return la.readFileSync(b,c?null:"utf8")},ka=function(b){b=ia(b,!0);b.buffer||(b=new Uint8Array(b));b.buffer||na("Assertion failed: undefined");return b},ja=function(b,c,d){la||(la=__webpack_require__(/*! fs */ "?4121"));ma||(ma=__webpack_require__(/*! path */ "?5f8c"));b=ma.normalize(b);la.readFile(b,function(f,
p){f?d(f):c(p.buffer)})},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(b){throw b;}),process.on("unhandledRejection",na),a.inspect=function(){return"[Emscripten Module object]"};else if(ea||fa)fa?ha=self.location.href:"undefined"!==typeof document&&document.currentScript&&(ha=document.currentScript.src),_scriptDir&&(ha=_scriptDir),ha=0!==ha.indexOf("blob:")?ha.substr(0,ha.lastIndexOf("/")+1):"",ia=function(b){var c=new XMLHttpRequest;
c.open("GET",b,!1);c.send(null);return c.responseText},fa&&(ka=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}),ja=function(b,c,d){var f=new XMLHttpRequest;f.open("GET",b,!0);f.responseType="arraybuffer";f.onload=function(){200==f.status||0==f.status&&f.response?c(f.response):d()};f.onerror=d;f.send(null)};var oa=a.print||console.log.bind(console),pa=a.printErr||console.warn.bind(console);
for(da in ca)ca.hasOwnProperty(da)&&(a[da]=ca[da]);ca=null;var qa;a.wasmBinary&&(qa=a.wasmBinary);var noExitRuntime=a.noExitRuntime||!0;"object"!==typeof WebAssembly&&na("no native wasm support detected");var ra,sa=!1,ta="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ua(b,c,d){var f=c+d;for(d=c;b[d]&&!(d>=f);)++d;if(16<d-c&&b.subarray&&ta)return ta.decode(b.subarray(c,d));for(f="";c<d;){var p=b[c++];if(p&128){var W=b[c++]&63;if(192==(p&224))f+=String.fromCharCode((p&31)<<6|W);else{var Ka=b[c++]&63;p=224==(p&240)?(p&15)<<12|W<<6|Ka:(p&7)<<18|W<<12|Ka<<6|b[c++]&63;65536>p?f+=String.fromCharCode(p):(p-=65536,f+=String.fromCharCode(55296|p>>10,56320|p&1023))}}else f+=String.fromCharCode(p)}return f}function va(b){return b?ua(wa,b,void 0):""}
var xa,wa,ya,za,Aa;function Ba(){var b=ra.buffer;xa=b;a.HEAP8=new Int8Array(b);a.HEAP16=new Int16Array(b);a.HEAP32=ya=new Int32Array(b);a.HEAPU8=wa=new Uint8Array(b);a.HEAPU16=new Uint16Array(b);a.HEAPU32=new Uint32Array(b);a.HEAPF32=za=new Float32Array(b);a.HEAPF64=Aa=new Float64Array(b)}var Ca,Da=[],Ea=[],Fa=[],Ga=!1,Ha=0,Ia=null,Ja=null;a.preloadedImages={};a.preloadedAudios={};
function na(b){if(a.onAbort)a.onAbort(b);b+="";pa(b);sa=!0;b=new WebAssembly.RuntimeError("abort("+b+"). Build with -s ASSERTIONS=1 for more info.");ba(b);throw b;}function La(){return Ma.startsWith("data:application/octet-stream;base64,")}var Ma;if(a.locateFile){if(Ma="Box2D.wasm",!La()){var Na=Ma;Ma=a.locateFile?a.locateFile(Na,ha):ha+Na}}else Ma=(new URL(/* asset import */ __webpack_require__(/*! Box2D.wasm */ "./node_modules/box2d-wasm/dist/es/Box2D.wasm"), __webpack_require__.b)).toString();
function Oa(){var b=Ma;try{if(b==Ma&&qa)return new Uint8Array(qa);if(ka)return ka(b);throw"both async and sync fetching of the wasm failed";}catch(c){na(c)}}
function Pa(){if(!qa&&(ea||fa)){if("function"===typeof fetch&&!Ma.startsWith("file://"))return fetch(Ma,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+Ma+"'";return b.arrayBuffer()}).catch(function(){return Oa()});if(ja)return new Promise(function(b,c){ja(Ma,function(d){b(new Uint8Array(d))},c)})}return Promise.resolve().then(function(){return Oa()})}
var Qa={10210:function(b,c){b=a.getCache(a.JSContactListener)[b];if(!b.hasOwnProperty("BeginContact"))throw"a JSImplementation must implement all functions, you forgot JSContactListener::BeginContact.";b.BeginContact(c)},10448:function(b,c){b=a.getCache(a.JSContactListener)[b];if(!b.hasOwnProperty("EndContact"))throw"a JSImplementation must implement all functions, you forgot JSContactListener::EndContact.";b.EndContact(c)},10680:function(b,c,d){b=a.getCache(a.JSContactListener)[b];if(!b.hasOwnProperty("PreSolve"))throw"a JSImplementation must implement all functions, you forgot JSContactListener::PreSolve.";
b.PreSolve(c,d)},10909:function(b,c,d){b=a.getCache(a.JSContactListener)[b];if(!b.hasOwnProperty("PostSolve"))throw"a JSImplementation must implement all functions, you forgot JSContactListener::PostSolve.";b.PostSolve(c,d)},11141:function(b){b=a.getCache(a.JSContactListenerWithoutSolveCallbacks)[b];if(!b.hasOwnProperty("JSContactListener"))throw"a JSImplementation must implement all functions, you forgot JSContactListenerWithoutSolveCallbacks::JSContactListener.";b.JSContactListener()},11434:function(b,
c,d,f,p){b=a.getCache(a.JSRayCastCallback)[b];if(!b.hasOwnProperty("ReportFixture"))throw"a JSImplementation must implement all functions, you forgot JSRayCastCallback::ReportFixture.";return b.ReportFixture(c,d,f,p)},11691:function(b,c){b=a.getCache(a.JSQueryCallback)[b];if(!b.hasOwnProperty("ReportFixture"))throw"a JSImplementation must implement all functions, you forgot JSQueryCallback::ReportFixture.";return b.ReportFixture(c)},11935:function(b,c,d){b=a.getCache(a.JSContactFilter)[b];if(!b.hasOwnProperty("ShouldCollide"))throw"a JSImplementation must implement all functions, you forgot JSContactFilter::ShouldCollide.";
return b.ShouldCollide(c,d)},12182:function(b,c){b=a.getCache(a.JSDestructionListener)[b];if(!b.hasOwnProperty("SayGoodbyeJoint"))throw"a JSImplementation must implement all functions, you forgot JSDestructionListener::SayGoodbyeJoint.";b.SayGoodbyeJoint(c)},12437:function(b,c){b=a.getCache(a.JSDestructionListener)[b];if(!b.hasOwnProperty("SayGoodbyeFixture"))throw"a JSImplementation must implement all functions, you forgot JSDestructionListener::SayGoodbyeFixture.";b.SayGoodbyeFixture(c)},12698:function(b,
c,d,f){b=a.getCache(a.JSDraw)[b];if(!b.hasOwnProperty("DrawPolygon"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawPolygon.";b.DrawPolygon(c,d,f)},12917:function(b,c,d,f){b=a.getCache(a.JSDraw)[b];if(!b.hasOwnProperty("DrawSolidPolygon"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawSolidPolygon.";b.DrawSolidPolygon(c,d,f)},13151:function(b,c,d,f){b=a.getCache(a.JSDraw)[b];if(!b.hasOwnProperty("DrawCircle"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawCircle.";
b.DrawCircle(c,d,f)},13367:function(b,c,d,f,p){b=a.getCache(a.JSDraw)[b];if(!b.hasOwnProperty("DrawSolidCircle"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawSolidCircle.";b.DrawSolidCircle(c,d,f,p)},13601:function(b,c,d,f){b=a.getCache(a.JSDraw)[b];if(!b.hasOwnProperty("DrawSegment"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawSegment.";b.DrawSegment(c,d,f)},13820:function(b,c){b=a.getCache(a.JSDraw)[b];if(!b.hasOwnProperty("DrawTransform"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawTransform.";
b.DrawTransform(c)},14039:function(b,c,d,f){b=a.getCache(a.JSDraw)[b];if(!b.hasOwnProperty("DrawPoint"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawPoint.";b.DrawPoint(c,d,f)}};function Ra(b){for(;0<b.length;){var c=b.shift();if("function"==typeof c)c(a);else{var d=c.yA;"number"===typeof d?void 0===c.Mv?Ca.get(d)():Ca.get(d)(c.Mv):d(void 0===c.Mv?null:c.Mv)}}}var Sa=[null,[],[]],Ta={},Ua=[];
function Va(b,c,d){Ua.length=0;var f;for(d>>=2;f=wa[c++];)(f=105>f)&&d&1&&d++,Ua.push(f?Aa[d++>>1]:ya[d]),++d;return Qa[b].apply(null,Ua)}
var Wa={f:function(b,c,d,f){na("Assertion failed: "+va(b)+", at: "+[c?va(c):"unknown filename",d,f?va(f):"unknown function"])},d:function(){return 0},h:function(){return 0},j:function(){},n:function(){na()},b:function(b,c){throw"Array index "+b+" out of bounds: [0,"+c+")";},k:function(b,c,d){return Va(b,c,d)},a:Va,m:function(b,c,d){wa.copyWithin(b,c,c+d)},c:function(b){var c=wa.length;b>>>=0;if(2147483648<b)return!1;for(var d=1;4>=d;d*=2){var f=c*(1+.2/d);f=Math.min(f,b+100663296);f=Math.max(b,f);
0<f%65536&&(f+=65536-f%65536);a:{try{ra.grow(Math.min(2147483648,f)-xa.byteLength+65535>>>16);Ba();var p=1;break a}catch(W){}p=void 0}if(p)return!0}return!1},e:function(){return 0},g:function(b,c,d,f){b=Ta.zA(b);c=Ta.xA(b,c,d);ya[f>>2]=c;return 0},l:function(){},i:function(b,c,d,f){for(var p=0,W=0;W<d;W++){for(var Ka=ya[c+8*W>>2],gb=ya[c+(8*W+4)>>2],sb=0;sb<gb;sb++){var tb=wa[Ka+sb],ub=Sa[b];0===tb||10===tb?((1===b?oa:pa)(ua(ub,0)),ub.length=0):ub.push(tb)}p+=gb}ya[f>>2]=p;return 0}};
(function(){function b(p){a.asm=p.exports;ra=a.asm.o;Ba();Ca=a.asm.Xu;Ea.unshift(a.asm.p);Ha--;a.monitorRunDependencies&&a.monitorRunDependencies(Ha);0==Ha&&(null!==Ia&&(clearInterval(Ia),Ia=null),Ja&&(p=Ja,Ja=null,p()))}function c(p){b(p.instance)}function d(p){return Pa().then(function(W){return WebAssembly.instantiate(W,f)}).then(p,function(W){pa("failed to asynchronously prepare wasm: "+W);na(W)})}var f={a:Wa};Ha++;a.monitorRunDependencies&&a.monitorRunDependencies(Ha);if(a.instantiateWasm)try{return a.instantiateWasm(f,
b)}catch(p){return pa("Module.instantiateWasm callback failed with error: "+p),!1}(function(){return qa||"function"!==typeof WebAssembly.instantiateStreaming||La()||Ma.startsWith("file://")||"function"!==typeof fetch?d(c):fetch(Ma,{credentials:"same-origin"}).then(function(p){return WebAssembly.instantiateStreaming(p,f).then(c,function(W){pa("wasm streaming compile failed: "+W);pa("falling back to ArrayBuffer instantiation");return d(c)})})})().catch(ba);return{}})();
a.___wasm_call_ctors=function(){return(a.___wasm_call_ctors=a.asm.p).apply(null,arguments)};
var Xa=a._emscripten_bind_b2ContactListener___destroy___0=function(){return(Xa=a._emscripten_bind_b2ContactListener___destroy___0=a.asm.q).apply(null,arguments)},Ya=a._emscripten_bind_b2Shape_GetType_0=function(){return(Ya=a._emscripten_bind_b2Shape_GetType_0=a.asm.r).apply(null,arguments)},Za=a._emscripten_bind_b2Shape_GetChildCount_0=function(){return(Za=a._emscripten_bind_b2Shape_GetChildCount_0=a.asm.s).apply(null,arguments)},$a=a._emscripten_bind_b2Shape_TestPoint_2=function(){return($a=a._emscripten_bind_b2Shape_TestPoint_2=
a.asm.t).apply(null,arguments)},ab=a._emscripten_bind_b2Shape_RayCast_4=function(){return(ab=a._emscripten_bind_b2Shape_RayCast_4=a.asm.u).apply(null,arguments)},bb=a._emscripten_bind_b2Shape_ComputeAABB_3=function(){return(bb=a._emscripten_bind_b2Shape_ComputeAABB_3=a.asm.v).apply(null,arguments)},cb=a._emscripten_bind_b2Shape_ComputeMass_2=function(){return(cb=a._emscripten_bind_b2Shape_ComputeMass_2=a.asm.w).apply(null,arguments)},db=a._emscripten_bind_b2Shape_get_m_type_0=function(){return(db=
a._emscripten_bind_b2Shape_get_m_type_0=a.asm.x).apply(null,arguments)},eb=a._emscripten_bind_b2Shape_set_m_type_1=function(){return(eb=a._emscripten_bind_b2Shape_set_m_type_1=a.asm.y).apply(null,arguments)},fb=a._emscripten_bind_b2Shape_get_m_radius_0=function(){return(fb=a._emscripten_bind_b2Shape_get_m_radius_0=a.asm.z).apply(null,arguments)},hb=a._emscripten_bind_b2Shape_set_m_radius_1=function(){return(hb=a._emscripten_bind_b2Shape_set_m_radius_1=a.asm.A).apply(null,arguments)},ib=a._emscripten_bind_b2Shape___destroy___0=
function(){return(ib=a._emscripten_bind_b2Shape___destroy___0=a.asm.B).apply(null,arguments)},jb=a._emscripten_bind_b2RayCastCallback___destroy___0=function(){return(jb=a._emscripten_bind_b2RayCastCallback___destroy___0=a.asm.C).apply(null,arguments)},kb=a._emscripten_bind_b2QueryCallback___destroy___0=function(){return(kb=a._emscripten_bind_b2QueryCallback___destroy___0=a.asm.D).apply(null,arguments)},lb=a._emscripten_bind_b2JointDef_b2JointDef_0=function(){return(lb=a._emscripten_bind_b2JointDef_b2JointDef_0=
a.asm.E).apply(null,arguments)},mb=a._emscripten_bind_b2JointDef_get_type_0=function(){return(mb=a._emscripten_bind_b2JointDef_get_type_0=a.asm.F).apply(null,arguments)},nb=a._emscripten_bind_b2JointDef_set_type_1=function(){return(nb=a._emscripten_bind_b2JointDef_set_type_1=a.asm.G).apply(null,arguments)},ob=a._emscripten_bind_b2JointDef_get_userData_0=function(){return(ob=a._emscripten_bind_b2JointDef_get_userData_0=a.asm.H).apply(null,arguments)},pb=a._emscripten_bind_b2JointDef_set_userData_1=
function(){return(pb=a._emscripten_bind_b2JointDef_set_userData_1=a.asm.I).apply(null,arguments)},qb=a._emscripten_bind_b2JointDef_get_bodyA_0=function(){return(qb=a._emscripten_bind_b2JointDef_get_bodyA_0=a.asm.J).apply(null,arguments)},rb=a._emscripten_bind_b2JointDef_set_bodyA_1=function(){return(rb=a._emscripten_bind_b2JointDef_set_bodyA_1=a.asm.K).apply(null,arguments)},vb=a._emscripten_bind_b2JointDef_get_bodyB_0=function(){return(vb=a._emscripten_bind_b2JointDef_get_bodyB_0=a.asm.L).apply(null,
arguments)},wb=a._emscripten_bind_b2JointDef_set_bodyB_1=function(){return(wb=a._emscripten_bind_b2JointDef_set_bodyB_1=a.asm.M).apply(null,arguments)},xb=a._emscripten_bind_b2JointDef_get_collideConnected_0=function(){return(xb=a._emscripten_bind_b2JointDef_get_collideConnected_0=a.asm.N).apply(null,arguments)},yb=a._emscripten_bind_b2JointDef_set_collideConnected_1=function(){return(yb=a._emscripten_bind_b2JointDef_set_collideConnected_1=a.asm.O).apply(null,arguments)},zb=a._emscripten_bind_b2JointDef___destroy___0=
function(){return(zb=a._emscripten_bind_b2JointDef___destroy___0=a.asm.P).apply(null,arguments)},Ab=a._emscripten_bind_b2Joint_GetType_0=function(){return(Ab=a._emscripten_bind_b2Joint_GetType_0=a.asm.Q).apply(null,arguments)},Bb=a._emscripten_bind_b2Joint_GetBodyA_0=function(){return(Bb=a._emscripten_bind_b2Joint_GetBodyA_0=a.asm.R).apply(null,arguments)},Cb=a._emscripten_bind_b2Joint_GetBodyB_0=function(){return(Cb=a._emscripten_bind_b2Joint_GetBodyB_0=a.asm.S).apply(null,arguments)},Db=a._emscripten_bind_b2Joint_GetAnchorA_0=
function(){return(Db=a._emscripten_bind_b2Joint_GetAnchorA_0=a.asm.T).apply(null,arguments)},Eb=a._emscripten_bind_b2Joint_GetAnchorB_0=function(){return(Eb=a._emscripten_bind_b2Joint_GetAnchorB_0=a.asm.U).apply(null,arguments)},Fb=a._emscripten_bind_b2Joint_GetReactionForce_1=function(){return(Fb=a._emscripten_bind_b2Joint_GetReactionForce_1=a.asm.V).apply(null,arguments)},Gb=a._emscripten_bind_b2Joint_GetReactionTorque_1=function(){return(Gb=a._emscripten_bind_b2Joint_GetReactionTorque_1=a.asm.W).apply(null,
arguments)},Hb=a._emscripten_bind_b2Joint_GetNext_0=function(){return(Hb=a._emscripten_bind_b2Joint_GetNext_0=a.asm.X).apply(null,arguments)},Ib=a._emscripten_bind_b2Joint_GetUserData_0=function(){return(Ib=a._emscripten_bind_b2Joint_GetUserData_0=a.asm.Y).apply(null,arguments)},Jb=a._emscripten_bind_b2Joint_GetCollideConnected_0=function(){return(Jb=a._emscripten_bind_b2Joint_GetCollideConnected_0=a.asm.Z).apply(null,arguments)},Kb=a._emscripten_bind_b2Joint_Dump_0=function(){return(Kb=a._emscripten_bind_b2Joint_Dump_0=
a.asm._).apply(null,arguments)},Lb=a._emscripten_bind_b2ContactFilter___destroy___0=function(){return(Lb=a._emscripten_bind_b2ContactFilter___destroy___0=a.asm.$).apply(null,arguments)},Mb=a._emscripten_bind_b2DestructionListenerWrapper___destroy___0=function(){return(Mb=a._emscripten_bind_b2DestructionListenerWrapper___destroy___0=a.asm.aa).apply(null,arguments)},Nb=a._emscripten_bind_b2Draw_SetFlags_1=function(){return(Nb=a._emscripten_bind_b2Draw_SetFlags_1=a.asm.ba).apply(null,arguments)},Ob=
a._emscripten_bind_b2Draw_GetFlags_0=function(){return(Ob=a._emscripten_bind_b2Draw_GetFlags_0=a.asm.ca).apply(null,arguments)},Pb=a._emscripten_bind_b2Draw_AppendFlags_1=function(){return(Pb=a._emscripten_bind_b2Draw_AppendFlags_1=a.asm.da).apply(null,arguments)},Qb=a._emscripten_bind_b2Draw_ClearFlags_1=function(){return(Qb=a._emscripten_bind_b2Draw_ClearFlags_1=a.asm.ea).apply(null,arguments)},Rb=a._emscripten_bind_b2Draw___destroy___0=function(){return(Rb=a._emscripten_bind_b2Draw___destroy___0=
a.asm.fa).apply(null,arguments)},Sb=a._emscripten_bind_VoidPtr___destroy___0=function(){return(Sb=a._emscripten_bind_VoidPtr___destroy___0=a.asm.ga).apply(null,arguments)},Tb=a._emscripten_bind_b2Contact_GetManifold_0=function(){return(Tb=a._emscripten_bind_b2Contact_GetManifold_0=a.asm.ha).apply(null,arguments)},Ub=a._emscripten_bind_b2Contact_GetWorldManifold_1=function(){return(Ub=a._emscripten_bind_b2Contact_GetWorldManifold_1=a.asm.ia).apply(null,arguments)},Vb=a._emscripten_bind_b2Contact_IsTouching_0=
function(){return(Vb=a._emscripten_bind_b2Contact_IsTouching_0=a.asm.ja).apply(null,arguments)},Wb=a._emscripten_bind_b2Contact_SetEnabled_1=function(){return(Wb=a._emscripten_bind_b2Contact_SetEnabled_1=a.asm.ka).apply(null,arguments)},Xb=a._emscripten_bind_b2Contact_IsEnabled_0=function(){return(Xb=a._emscripten_bind_b2Contact_IsEnabled_0=a.asm.la).apply(null,arguments)},Yb=a._emscripten_bind_b2Contact_GetNext_0=function(){return(Yb=a._emscripten_bind_b2Contact_GetNext_0=a.asm.ma).apply(null,arguments)},
Zb=a._emscripten_bind_b2Contact_GetFixtureA_0=function(){return(Zb=a._emscripten_bind_b2Contact_GetFixtureA_0=a.asm.na).apply(null,arguments)},$b=a._emscripten_bind_b2Contact_GetChildIndexA_0=function(){return($b=a._emscripten_bind_b2Contact_GetChildIndexA_0=a.asm.oa).apply(null,arguments)},ac=a._emscripten_bind_b2Contact_GetFixtureB_0=function(){return(ac=a._emscripten_bind_b2Contact_GetFixtureB_0=a.asm.pa).apply(null,arguments)},bc=a._emscripten_bind_b2Contact_GetChildIndexB_0=function(){return(bc=
a._emscripten_bind_b2Contact_GetChildIndexB_0=a.asm.qa).apply(null,arguments)},cc=a._emscripten_bind_b2Contact_SetFriction_1=function(){return(cc=a._emscripten_bind_b2Contact_SetFriction_1=a.asm.ra).apply(null,arguments)},dc=a._emscripten_bind_b2Contact_GetFriction_0=function(){return(dc=a._emscripten_bind_b2Contact_GetFriction_0=a.asm.sa).apply(null,arguments)},ec=a._emscripten_bind_b2Contact_ResetFriction_0=function(){return(ec=a._emscripten_bind_b2Contact_ResetFriction_0=a.asm.ta).apply(null,arguments)},
fc=a._emscripten_bind_b2Contact_SetRestitution_1=function(){return(fc=a._emscripten_bind_b2Contact_SetRestitution_1=a.asm.ua).apply(null,arguments)},gc=a._emscripten_bind_b2Contact_GetRestitution_0=function(){return(gc=a._emscripten_bind_b2Contact_GetRestitution_0=a.asm.va).apply(null,arguments)},hc=a._emscripten_bind_b2Contact_ResetRestitution_0=function(){return(hc=a._emscripten_bind_b2Contact_ResetRestitution_0=a.asm.wa).apply(null,arguments)},ic=a._emscripten_bind_b2Contact_SetRestitutionThreshold_1=
function(){return(ic=a._emscripten_bind_b2Contact_SetRestitutionThreshold_1=a.asm.xa).apply(null,arguments)},jc=a._emscripten_bind_b2Contact_GetRestitutionThreshold_0=function(){return(jc=a._emscripten_bind_b2Contact_GetRestitutionThreshold_0=a.asm.ya).apply(null,arguments)},kc=a._emscripten_bind_b2Contact_ResetRestitutionThreshold_0=function(){return(kc=a._emscripten_bind_b2Contact_ResetRestitutionThreshold_0=a.asm.za).apply(null,arguments)},lc=a._emscripten_bind_b2Contact_SetTangentSpeed_1=function(){return(lc=
a._emscripten_bind_b2Contact_SetTangentSpeed_1=a.asm.Aa).apply(null,arguments)},mc=a._emscripten_bind_b2Contact_GetTangentSpeed_0=function(){return(mc=a._emscripten_bind_b2Contact_GetTangentSpeed_0=a.asm.Ba).apply(null,arguments)},nc=a._emscripten_bind_JSContactListener_JSContactListener_0=function(){return(nc=a._emscripten_bind_JSContactListener_JSContactListener_0=a.asm.Ca).apply(null,arguments)},oc=a._emscripten_bind_JSContactListener_BeginContact_1=function(){return(oc=a._emscripten_bind_JSContactListener_BeginContact_1=
a.asm.Da).apply(null,arguments)},pc=a._emscripten_bind_JSContactListener_EndContact_1=function(){return(pc=a._emscripten_bind_JSContactListener_EndContact_1=a.asm.Ea).apply(null,arguments)},qc=a._emscripten_bind_JSContactListener_PreSolve_2=function(){return(qc=a._emscripten_bind_JSContactListener_PreSolve_2=a.asm.Fa).apply(null,arguments)},rc=a._emscripten_bind_JSContactListener_PostSolve_2=function(){return(rc=a._emscripten_bind_JSContactListener_PostSolve_2=a.asm.Ga).apply(null,arguments)},sc=
a._emscripten_bind_JSContactListener___destroy___0=function(){return(sc=a._emscripten_bind_JSContactListener___destroy___0=a.asm.Ha).apply(null,arguments)},tc=a._emscripten_bind_JSContactListenerWithoutSolveCallbacks_JSContactListener_0=function(){return(tc=a._emscripten_bind_JSContactListenerWithoutSolveCallbacks_JSContactListener_0=a.asm.Ia).apply(null,arguments)},uc=a._emscripten_bind_JSContactListenerWithoutSolveCallbacks_BeginContact_1=function(){return(uc=a._emscripten_bind_JSContactListenerWithoutSolveCallbacks_BeginContact_1=
a.asm.Ja).apply(null,arguments)},vc=a._emscripten_bind_JSContactListenerWithoutSolveCallbacks_EndContact_1=function(){return(vc=a._emscripten_bind_JSContactListenerWithoutSolveCallbacks_EndContact_1=a.asm.Ka).apply(null,arguments)},wc=a._emscripten_bind_JSContactListenerWithoutSolveCallbacks___destroy___0=function(){return(wc=a._emscripten_bind_JSContactListenerWithoutSolveCallbacks___destroy___0=a.asm.La).apply(null,arguments)},xc=a._emscripten_bind_b2World_b2World_1=function(){return(xc=a._emscripten_bind_b2World_b2World_1=
a.asm.Ma).apply(null,arguments)},yc=a._emscripten_bind_b2World_SetDestructionListener_1=function(){return(yc=a._emscripten_bind_b2World_SetDestructionListener_1=a.asm.Na).apply(null,arguments)},zc=a._emscripten_bind_b2World_SetContactFilter_1=function(){return(zc=a._emscripten_bind_b2World_SetContactFilter_1=a.asm.Oa).apply(null,arguments)},Ac=a._emscripten_bind_b2World_SetContactListener_1=function(){return(Ac=a._emscripten_bind_b2World_SetContactListener_1=a.asm.Pa).apply(null,arguments)},Bc=a._emscripten_bind_b2World_SetDebugDraw_1=
function(){return(Bc=a._emscripten_bind_b2World_SetDebugDraw_1=a.asm.Qa).apply(null,arguments)},Cc=a._emscripten_bind_b2World_CreateBody_1=function(){return(Cc=a._emscripten_bind_b2World_CreateBody_1=a.asm.Ra).apply(null,arguments)},Dc=a._emscripten_bind_b2World_DestroyBody_1=function(){return(Dc=a._emscripten_bind_b2World_DestroyBody_1=a.asm.Sa).apply(null,arguments)},Ec=a._emscripten_bind_b2World_CreateJoint_1=function(){return(Ec=a._emscripten_bind_b2World_CreateJoint_1=a.asm.Ta).apply(null,arguments)},
Fc=a._emscripten_bind_b2World_DestroyJoint_1=function(){return(Fc=a._emscripten_bind_b2World_DestroyJoint_1=a.asm.Ua).apply(null,arguments)},Gc=a._emscripten_bind_b2World_Step_3=function(){return(Gc=a._emscripten_bind_b2World_Step_3=a.asm.Va).apply(null,arguments)},Hc=a._emscripten_bind_b2World_ClearForces_0=function(){return(Hc=a._emscripten_bind_b2World_ClearForces_0=a.asm.Wa).apply(null,arguments)},Ic=a._emscripten_bind_b2World_DebugDraw_0=function(){return(Ic=a._emscripten_bind_b2World_DebugDraw_0=
a.asm.Xa).apply(null,arguments)},Jc=a._emscripten_bind_b2World_QueryAABB_2=function(){return(Jc=a._emscripten_bind_b2World_QueryAABB_2=a.asm.Ya).apply(null,arguments)},Kc=a._emscripten_bind_b2World_RayCast_3=function(){return(Kc=a._emscripten_bind_b2World_RayCast_3=a.asm.Za).apply(null,arguments)},Lc=a._emscripten_bind_b2World_GetBodyList_0=function(){return(Lc=a._emscripten_bind_b2World_GetBodyList_0=a.asm._a).apply(null,arguments)},Mc=a._emscripten_bind_b2World_GetJointList_0=function(){return(Mc=
a._emscripten_bind_b2World_GetJointList_0=a.asm.$a).apply(null,arguments)},Nc=a._emscripten_bind_b2World_GetContactList_0=function(){return(Nc=a._emscripten_bind_b2World_GetContactList_0=a.asm.ab).apply(null,arguments)},Oc=a._emscripten_bind_b2World_SetAllowSleeping_1=function(){return(Oc=a._emscripten_bind_b2World_SetAllowSleeping_1=a.asm.bb).apply(null,arguments)},Pc=a._emscripten_bind_b2World_GetAllowSleeping_0=function(){return(Pc=a._emscripten_bind_b2World_GetAllowSleeping_0=a.asm.cb).apply(null,
arguments)},Qc=a._emscripten_bind_b2World_SetWarmStarting_1=function(){return(Qc=a._emscripten_bind_b2World_SetWarmStarting_1=a.asm.db).apply(null,arguments)},Rc=a._emscripten_bind_b2World_GetWarmStarting_0=function(){return(Rc=a._emscripten_bind_b2World_GetWarmStarting_0=a.asm.eb).apply(null,arguments)},Sc=a._emscripten_bind_b2World_SetContinuousPhysics_1=function(){return(Sc=a._emscripten_bind_b2World_SetContinuousPhysics_1=a.asm.fb).apply(null,arguments)},Tc=a._emscripten_bind_b2World_GetContinuousPhysics_0=
function(){return(Tc=a._emscripten_bind_b2World_GetContinuousPhysics_0=a.asm.gb).apply(null,arguments)},Uc=a._emscripten_bind_b2World_SetSubStepping_1=function(){return(Uc=a._emscripten_bind_b2World_SetSubStepping_1=a.asm.hb).apply(null,arguments)},Vc=a._emscripten_bind_b2World_GetSubStepping_0=function(){return(Vc=a._emscripten_bind_b2World_GetSubStepping_0=a.asm.ib).apply(null,arguments)},Wc=a._emscripten_bind_b2World_GetProxyCount_0=function(){return(Wc=a._emscripten_bind_b2World_GetProxyCount_0=
a.asm.jb).apply(null,arguments)},Xc=a._emscripten_bind_b2World_GetBodyCount_0=function(){return(Xc=a._emscripten_bind_b2World_GetBodyCount_0=a.asm.kb).apply(null,arguments)},Yc=a._emscripten_bind_b2World_GetJointCount_0=function(){return(Yc=a._emscripten_bind_b2World_GetJointCount_0=a.asm.lb).apply(null,arguments)},Zc=a._emscripten_bind_b2World_GetContactCount_0=function(){return(Zc=a._emscripten_bind_b2World_GetContactCount_0=a.asm.mb).apply(null,arguments)},$c=a._emscripten_bind_b2World_GetTreeHeight_0=
function(){return($c=a._emscripten_bind_b2World_GetTreeHeight_0=a.asm.nb).apply(null,arguments)},ad=a._emscripten_bind_b2World_GetTreeBalance_0=function(){return(ad=a._emscripten_bind_b2World_GetTreeBalance_0=a.asm.ob).apply(null,arguments)},bd=a._emscripten_bind_b2World_GetTreeQuality_0=function(){return(bd=a._emscripten_bind_b2World_GetTreeQuality_0=a.asm.pb).apply(null,arguments)},cd=a._emscripten_bind_b2World_SetGravity_1=function(){return(cd=a._emscripten_bind_b2World_SetGravity_1=a.asm.qb).apply(null,
arguments)},dd=a._emscripten_bind_b2World_GetGravity_0=function(){return(dd=a._emscripten_bind_b2World_GetGravity_0=a.asm.rb).apply(null,arguments)},ed=a._emscripten_bind_b2World_IsLocked_0=function(){return(ed=a._emscripten_bind_b2World_IsLocked_0=a.asm.sb).apply(null,arguments)},fd=a._emscripten_bind_b2World_SetAutoClearForces_1=function(){return(fd=a._emscripten_bind_b2World_SetAutoClearForces_1=a.asm.tb).apply(null,arguments)},gd=a._emscripten_bind_b2World_GetAutoClearForces_0=function(){return(gd=
a._emscripten_bind_b2World_GetAutoClearForces_0=a.asm.ub).apply(null,arguments)},hd=a._emscripten_bind_b2World_GetProfile_0=function(){return(hd=a._emscripten_bind_b2World_GetProfile_0=a.asm.vb).apply(null,arguments)},jd=a._emscripten_bind_b2World_Dump_0=function(){return(jd=a._emscripten_bind_b2World_Dump_0=a.asm.wb).apply(null,arguments)},kd=a._emscripten_bind_b2World___destroy___0=function(){return(kd=a._emscripten_bind_b2World___destroy___0=a.asm.xb).apply(null,arguments)},ld=a._emscripten_bind_b2FixtureUserData_get_pointer_0=
function(){return(ld=a._emscripten_bind_b2FixtureUserData_get_pointer_0=a.asm.yb).apply(null,arguments)},md=a._emscripten_bind_b2FixtureUserData_set_pointer_1=function(){return(md=a._emscripten_bind_b2FixtureUserData_set_pointer_1=a.asm.zb).apply(null,arguments)},nd=a._emscripten_bind_b2FixtureUserData___destroy___0=function(){return(nd=a._emscripten_bind_b2FixtureUserData___destroy___0=a.asm.Ab).apply(null,arguments)},od=a._emscripten_bind_b2FixtureDef_b2FixtureDef_0=function(){return(od=a._emscripten_bind_b2FixtureDef_b2FixtureDef_0=
a.asm.Bb).apply(null,arguments)},pd=a._emscripten_bind_b2FixtureDef_get_shape_0=function(){return(pd=a._emscripten_bind_b2FixtureDef_get_shape_0=a.asm.Cb).apply(null,arguments)},qd=a._emscripten_bind_b2FixtureDef_set_shape_1=function(){return(qd=a._emscripten_bind_b2FixtureDef_set_shape_1=a.asm.Db).apply(null,arguments)},rd=a._emscripten_bind_b2FixtureDef_get_userData_0=function(){return(rd=a._emscripten_bind_b2FixtureDef_get_userData_0=a.asm.Eb).apply(null,arguments)},sd=a._emscripten_bind_b2FixtureDef_set_userData_1=
function(){return(sd=a._emscripten_bind_b2FixtureDef_set_userData_1=a.asm.Fb).apply(null,arguments)},td=a._emscripten_bind_b2FixtureDef_get_friction_0=function(){return(td=a._emscripten_bind_b2FixtureDef_get_friction_0=a.asm.Gb).apply(null,arguments)},ud=a._emscripten_bind_b2FixtureDef_set_friction_1=function(){return(ud=a._emscripten_bind_b2FixtureDef_set_friction_1=a.asm.Hb).apply(null,arguments)},vd=a._emscripten_bind_b2FixtureDef_get_restitution_0=function(){return(vd=a._emscripten_bind_b2FixtureDef_get_restitution_0=
a.asm.Ib).apply(null,arguments)},wd=a._emscripten_bind_b2FixtureDef_set_restitution_1=function(){return(wd=a._emscripten_bind_b2FixtureDef_set_restitution_1=a.asm.Jb).apply(null,arguments)},xd=a._emscripten_bind_b2FixtureDef_get_restitutionThreshold_0=function(){return(xd=a._emscripten_bind_b2FixtureDef_get_restitutionThreshold_0=a.asm.Kb).apply(null,arguments)},yd=a._emscripten_bind_b2FixtureDef_set_restitutionThreshold_1=function(){return(yd=a._emscripten_bind_b2FixtureDef_set_restitutionThreshold_1=
a.asm.Lb).apply(null,arguments)},zd=a._emscripten_bind_b2FixtureDef_get_density_0=function(){return(zd=a._emscripten_bind_b2FixtureDef_get_density_0=a.asm.Mb).apply(null,arguments)},Ad=a._emscripten_bind_b2FixtureDef_set_density_1=function(){return(Ad=a._emscripten_bind_b2FixtureDef_set_density_1=a.asm.Nb).apply(null,arguments)},Bd=a._emscripten_bind_b2FixtureDef_get_isSensor_0=function(){return(Bd=a._emscripten_bind_b2FixtureDef_get_isSensor_0=a.asm.Ob).apply(null,arguments)},Cd=a._emscripten_bind_b2FixtureDef_set_isSensor_1=
function(){return(Cd=a._emscripten_bind_b2FixtureDef_set_isSensor_1=a.asm.Pb).apply(null,arguments)},Dd=a._emscripten_bind_b2FixtureDef_get_filter_0=function(){return(Dd=a._emscripten_bind_b2FixtureDef_get_filter_0=a.asm.Qb).apply(null,arguments)},Ed=a._emscripten_bind_b2FixtureDef_set_filter_1=function(){return(Ed=a._emscripten_bind_b2FixtureDef_set_filter_1=a.asm.Rb).apply(null,arguments)},Fd=a._emscripten_bind_b2FixtureDef___destroy___0=function(){return(Fd=a._emscripten_bind_b2FixtureDef___destroy___0=
a.asm.Sb).apply(null,arguments)},Gd=a._emscripten_bind_b2Fixture_GetType_0=function(){return(Gd=a._emscripten_bind_b2Fixture_GetType_0=a.asm.Tb).apply(null,arguments)},Hd=a._emscripten_bind_b2Fixture_GetShape_0=function(){return(Hd=a._emscripten_bind_b2Fixture_GetShape_0=a.asm.Ub).apply(null,arguments)},Id=a._emscripten_bind_b2Fixture_SetSensor_1=function(){return(Id=a._emscripten_bind_b2Fixture_SetSensor_1=a.asm.Vb).apply(null,arguments)},Jd=a._emscripten_bind_b2Fixture_IsSensor_0=function(){return(Jd=
a._emscripten_bind_b2Fixture_IsSensor_0=a.asm.Wb).apply(null,arguments)},Kd=a._emscripten_bind_b2Fixture_SetFilterData_1=function(){return(Kd=a._emscripten_bind_b2Fixture_SetFilterData_1=a.asm.Xb).apply(null,arguments)},Ld=a._emscripten_bind_b2Fixture_GetFilterData_0=function(){return(Ld=a._emscripten_bind_b2Fixture_GetFilterData_0=a.asm.Yb).apply(null,arguments)},Md=a._emscripten_bind_b2Fixture_Refilter_0=function(){return(Md=a._emscripten_bind_b2Fixture_Refilter_0=a.asm.Zb).apply(null,arguments)},
Nd=a._emscripten_bind_b2Fixture_GetBody_0=function(){return(Nd=a._emscripten_bind_b2Fixture_GetBody_0=a.asm._b).apply(null,arguments)},Od=a._emscripten_bind_b2Fixture_GetNext_0=function(){return(Od=a._emscripten_bind_b2Fixture_GetNext_0=a.asm.$b).apply(null,arguments)},Pd=a._emscripten_bind_b2Fixture_GetUserData_0=function(){return(Pd=a._emscripten_bind_b2Fixture_GetUserData_0=a.asm.ac).apply(null,arguments)},Qd=a._emscripten_bind_b2Fixture_TestPoint_1=function(){return(Qd=a._emscripten_bind_b2Fixture_TestPoint_1=
a.asm.bc).apply(null,arguments)},Rd=a._emscripten_bind_b2Fixture_RayCast_3=function(){return(Rd=a._emscripten_bind_b2Fixture_RayCast_3=a.asm.cc).apply(null,arguments)},Sd=a._emscripten_bind_b2Fixture_GetMassData_1=function(){return(Sd=a._emscripten_bind_b2Fixture_GetMassData_1=a.asm.dc).apply(null,arguments)},Td=a._emscripten_bind_b2Fixture_SetDensity_1=function(){return(Td=a._emscripten_bind_b2Fixture_SetDensity_1=a.asm.ec).apply(null,arguments)},Ud=a._emscripten_bind_b2Fixture_GetDensity_0=function(){return(Ud=
a._emscripten_bind_b2Fixture_GetDensity_0=a.asm.fc).apply(null,arguments)},Vd=a._emscripten_bind_b2Fixture_GetFriction_0=function(){return(Vd=a._emscripten_bind_b2Fixture_GetFriction_0=a.asm.gc).apply(null,arguments)},Wd=a._emscripten_bind_b2Fixture_SetFriction_1=function(){return(Wd=a._emscripten_bind_b2Fixture_SetFriction_1=a.asm.hc).apply(null,arguments)},Xd=a._emscripten_bind_b2Fixture_GetRestitution_0=function(){return(Xd=a._emscripten_bind_b2Fixture_GetRestitution_0=a.asm.ic).apply(null,arguments)},
Yd=a._emscripten_bind_b2Fixture_SetRestitution_1=function(){return(Yd=a._emscripten_bind_b2Fixture_SetRestitution_1=a.asm.jc).apply(null,arguments)},Zd=a._emscripten_bind_b2Fixture_GetRestitutionThreshold_0=function(){return(Zd=a._emscripten_bind_b2Fixture_GetRestitutionThreshold_0=a.asm.kc).apply(null,arguments)},$d=a._emscripten_bind_b2Fixture_SetRestitutionThreshold_1=function(){return($d=a._emscripten_bind_b2Fixture_SetRestitutionThreshold_1=a.asm.lc).apply(null,arguments)},ae=a._emscripten_bind_b2Fixture_GetAABB_1=
function(){return(ae=a._emscripten_bind_b2Fixture_GetAABB_1=a.asm.mc).apply(null,arguments)},be=a._emscripten_bind_b2Fixture_Dump_1=function(){return(be=a._emscripten_bind_b2Fixture_Dump_1=a.asm.nc).apply(null,arguments)},ce=a._emscripten_bind_b2Fixture___destroy___0=function(){return(ce=a._emscripten_bind_b2Fixture___destroy___0=a.asm.oc).apply(null,arguments)},de=a._emscripten_bind_b2Transform_b2Transform_0=function(){return(de=a._emscripten_bind_b2Transform_b2Transform_0=a.asm.pc).apply(null,arguments)},
ee=a._emscripten_bind_b2Transform_b2Transform_2=function(){return(ee=a._emscripten_bind_b2Transform_b2Transform_2=a.asm.qc).apply(null,arguments)},fe=a._emscripten_bind_b2Transform_SetIdentity_0=function(){return(fe=a._emscripten_bind_b2Transform_SetIdentity_0=a.asm.rc).apply(null,arguments)},ge=a._emscripten_bind_b2Transform_Set_2=function(){return(ge=a._emscripten_bind_b2Transform_Set_2=a.asm.sc).apply(null,arguments)},he=a._emscripten_bind_b2Transform_get_p_0=function(){return(he=a._emscripten_bind_b2Transform_get_p_0=
a.asm.tc).apply(null,arguments)},ie=a._emscripten_bind_b2Transform_set_p_1=function(){return(ie=a._emscripten_bind_b2Transform_set_p_1=a.asm.uc).apply(null,arguments)},je=a._emscripten_bind_b2Transform_get_q_0=function(){return(je=a._emscripten_bind_b2Transform_get_q_0=a.asm.vc).apply(null,arguments)},ke=a._emscripten_bind_b2Transform_set_q_1=function(){return(ke=a._emscripten_bind_b2Transform_set_q_1=a.asm.wc).apply(null,arguments)},le=a._emscripten_bind_b2Transform___destroy___0=function(){return(le=
a._emscripten_bind_b2Transform___destroy___0=a.asm.xc).apply(null,arguments)},me=a._emscripten_bind_JSRayCastCallback_JSRayCastCallback_0=function(){return(me=a._emscripten_bind_JSRayCastCallback_JSRayCastCallback_0=a.asm.yc).apply(null,arguments)},ne=a._emscripten_bind_JSRayCastCallback_ReportFixture_4=function(){return(ne=a._emscripten_bind_JSRayCastCallback_ReportFixture_4=a.asm.zc).apply(null,arguments)},oe=a._emscripten_bind_JSRayCastCallback___destroy___0=function(){return(oe=a._emscripten_bind_JSRayCastCallback___destroy___0=
a.asm.Ac).apply(null,arguments)},pe=a._emscripten_bind_JSQueryCallback_JSQueryCallback_0=function(){return(pe=a._emscripten_bind_JSQueryCallback_JSQueryCallback_0=a.asm.Bc).apply(null,arguments)},qe=a._emscripten_bind_JSQueryCallback_ReportFixture_1=function(){return(qe=a._emscripten_bind_JSQueryCallback_ReportFixture_1=a.asm.Cc).apply(null,arguments)},re=a._emscripten_bind_JSQueryCallback___destroy___0=function(){return(re=a._emscripten_bind_JSQueryCallback___destroy___0=a.asm.Dc).apply(null,arguments)},
se=a._emscripten_bind_b2MassData_b2MassData_0=function(){return(se=a._emscripten_bind_b2MassData_b2MassData_0=a.asm.Ec).apply(null,arguments)},te=a._emscripten_bind_b2MassData_get_mass_0=function(){return(te=a._emscripten_bind_b2MassData_get_mass_0=a.asm.Fc).apply(null,arguments)},ue=a._emscripten_bind_b2MassData_set_mass_1=function(){return(ue=a._emscripten_bind_b2MassData_set_mass_1=a.asm.Gc).apply(null,arguments)},ve=a._emscripten_bind_b2MassData_get_center_0=function(){return(ve=a._emscripten_bind_b2MassData_get_center_0=
a.asm.Hc).apply(null,arguments)},we=a._emscripten_bind_b2MassData_set_center_1=function(){return(we=a._emscripten_bind_b2MassData_set_center_1=a.asm.Ic).apply(null,arguments)},xe=a._emscripten_bind_b2MassData_get_I_0=function(){return(xe=a._emscripten_bind_b2MassData_get_I_0=a.asm.Jc).apply(null,arguments)},ye=a._emscripten_bind_b2MassData_set_I_1=function(){return(ye=a._emscripten_bind_b2MassData_set_I_1=a.asm.Kc).apply(null,arguments)},ze=a._emscripten_bind_b2MassData___destroy___0=function(){return(ze=
a._emscripten_bind_b2MassData___destroy___0=a.asm.Lc).apply(null,arguments)},Ae=a._emscripten_bind_b2Vec2_b2Vec2_0=function(){return(Ae=a._emscripten_bind_b2Vec2_b2Vec2_0=a.asm.Mc).apply(null,arguments)},Be=a._emscripten_bind_b2Vec2_b2Vec2_2=function(){return(Be=a._emscripten_bind_b2Vec2_b2Vec2_2=a.asm.Nc).apply(null,arguments)},Ce=a._emscripten_bind_b2Vec2_SetZero_0=function(){return(Ce=a._emscripten_bind_b2Vec2_SetZero_0=a.asm.Oc).apply(null,arguments)},De=a._emscripten_bind_b2Vec2_Set_2=function(){return(De=
a._emscripten_bind_b2Vec2_Set_2=a.asm.Pc).apply(null,arguments)},Ee=a._emscripten_bind_b2Vec2_op_add_1=function(){return(Ee=a._emscripten_bind_b2Vec2_op_add_1=a.asm.Qc).apply(null,arguments)},Fe=a._emscripten_bind_b2Vec2_op_sub_1=function(){return(Fe=a._emscripten_bind_b2Vec2_op_sub_1=a.asm.Rc).apply(null,arguments)},Ge=a._emscripten_bind_b2Vec2_op_mul_1=function(){return(Ge=a._emscripten_bind_b2Vec2_op_mul_1=a.asm.Sc).apply(null,arguments)},He=a._emscripten_bind_b2Vec2_Length_0=function(){return(He=
a._emscripten_bind_b2Vec2_Length_0=a.asm.Tc).apply(null,arguments)},Ie=a._emscripten_bind_b2Vec2_LengthSquared_0=function(){return(Ie=a._emscripten_bind_b2Vec2_LengthSquared_0=a.asm.Uc).apply(null,arguments)},Je=a._emscripten_bind_b2Vec2_Normalize_0=function(){return(Je=a._emscripten_bind_b2Vec2_Normalize_0=a.asm.Vc).apply(null,arguments)},Ke=a._emscripten_bind_b2Vec2_IsValid_0=function(){return(Ke=a._emscripten_bind_b2Vec2_IsValid_0=a.asm.Wc).apply(null,arguments)},Le=a._emscripten_bind_b2Vec2_Skew_0=
function(){return(Le=a._emscripten_bind_b2Vec2_Skew_0=a.asm.Xc).apply(null,arguments)},Me=a._emscripten_bind_b2Vec2_get_x_0=function(){return(Me=a._emscripten_bind_b2Vec2_get_x_0=a.asm.Yc).apply(null,arguments)},Ne=a._emscripten_bind_b2Vec2_set_x_1=function(){return(Ne=a._emscripten_bind_b2Vec2_set_x_1=a.asm.Zc).apply(null,arguments)},Oe=a._emscripten_bind_b2Vec2_get_y_0=function(){return(Oe=a._emscripten_bind_b2Vec2_get_y_0=a.asm._c).apply(null,arguments)},Pe=a._emscripten_bind_b2Vec2_set_y_1=function(){return(Pe=
a._emscripten_bind_b2Vec2_set_y_1=a.asm.$c).apply(null,arguments)},Qe=a._emscripten_bind_b2Vec2___destroy___0=function(){return(Qe=a._emscripten_bind_b2Vec2___destroy___0=a.asm.ad).apply(null,arguments)},Re=a._emscripten_bind_b2Vec3_b2Vec3_0=function(){return(Re=a._emscripten_bind_b2Vec3_b2Vec3_0=a.asm.bd).apply(null,arguments)},Se=a._emscripten_bind_b2Vec3_b2Vec3_3=function(){return(Se=a._emscripten_bind_b2Vec3_b2Vec3_3=a.asm.cd).apply(null,arguments)},Te=a._emscripten_bind_b2Vec3_SetZero_0=function(){return(Te=
a._emscripten_bind_b2Vec3_SetZero_0=a.asm.dd).apply(null,arguments)},Ue=a._emscripten_bind_b2Vec3_Set_3=function(){return(Ue=a._emscripten_bind_b2Vec3_Set_3=a.asm.ed).apply(null,arguments)},Ve=a._emscripten_bind_b2Vec3_op_add_1=function(){return(Ve=a._emscripten_bind_b2Vec3_op_add_1=a.asm.fd).apply(null,arguments)},We=a._emscripten_bind_b2Vec3_op_sub_1=function(){return(We=a._emscripten_bind_b2Vec3_op_sub_1=a.asm.gd).apply(null,arguments)},Xe=a._emscripten_bind_b2Vec3_op_mul_1=function(){return(Xe=
a._emscripten_bind_b2Vec3_op_mul_1=a.asm.hd).apply(null,arguments)},Ye=a._emscripten_bind_b2Vec3_get_x_0=function(){return(Ye=a._emscripten_bind_b2Vec3_get_x_0=a.asm.id).apply(null,arguments)},Ze=a._emscripten_bind_b2Vec3_set_x_1=function(){return(Ze=a._emscripten_bind_b2Vec3_set_x_1=a.asm.jd).apply(null,arguments)},$e=a._emscripten_bind_b2Vec3_get_y_0=function(){return($e=a._emscripten_bind_b2Vec3_get_y_0=a.asm.kd).apply(null,arguments)},af=a._emscripten_bind_b2Vec3_set_y_1=function(){return(af=
a._emscripten_bind_b2Vec3_set_y_1=a.asm.ld).apply(null,arguments)},bf=a._emscripten_bind_b2Vec3_get_z_0=function(){return(bf=a._emscripten_bind_b2Vec3_get_z_0=a.asm.md).apply(null,arguments)},cf=a._emscripten_bind_b2Vec3_set_z_1=function(){return(cf=a._emscripten_bind_b2Vec3_set_z_1=a.asm.nd).apply(null,arguments)},df=a._emscripten_bind_b2Vec3___destroy___0=function(){return(df=a._emscripten_bind_b2Vec3___destroy___0=a.asm.od).apply(null,arguments)},ef=a._emscripten_bind_b2BodyUserData_get_pointer_0=
function(){return(ef=a._emscripten_bind_b2BodyUserData_get_pointer_0=a.asm.pd).apply(null,arguments)},ff=a._emscripten_bind_b2BodyUserData_set_pointer_1=function(){return(ff=a._emscripten_bind_b2BodyUserData_set_pointer_1=a.asm.qd).apply(null,arguments)},gf=a._emscripten_bind_b2BodyUserData___destroy___0=function(){return(gf=a._emscripten_bind_b2BodyUserData___destroy___0=a.asm.rd).apply(null,arguments)},hf=a._emscripten_bind_b2Body_CreateFixture_1=function(){return(hf=a._emscripten_bind_b2Body_CreateFixture_1=
a.asm.sd).apply(null,arguments)},jf=a._emscripten_bind_b2Body_CreateFixture_2=function(){return(jf=a._emscripten_bind_b2Body_CreateFixture_2=a.asm.td).apply(null,arguments)},kf=a._emscripten_bind_b2Body_DestroyFixture_1=function(){return(kf=a._emscripten_bind_b2Body_DestroyFixture_1=a.asm.ud).apply(null,arguments)},lf=a._emscripten_bind_b2Body_SetTransform_2=function(){return(lf=a._emscripten_bind_b2Body_SetTransform_2=a.asm.vd).apply(null,arguments)},mf=a._emscripten_bind_b2Body_GetTransform_0=function(){return(mf=
a._emscripten_bind_b2Body_GetTransform_0=a.asm.wd).apply(null,arguments)},nf=a._emscripten_bind_b2Body_GetPosition_0=function(){return(nf=a._emscripten_bind_b2Body_GetPosition_0=a.asm.xd).apply(null,arguments)},of=a._emscripten_bind_b2Body_GetAngle_0=function(){return(of=a._emscripten_bind_b2Body_GetAngle_0=a.asm.yd).apply(null,arguments)},pf=a._emscripten_bind_b2Body_GetWorldCenter_0=function(){return(pf=a._emscripten_bind_b2Body_GetWorldCenter_0=a.asm.zd).apply(null,arguments)},qf=a._emscripten_bind_b2Body_GetLocalCenter_0=
function(){return(qf=a._emscripten_bind_b2Body_GetLocalCenter_0=a.asm.Ad).apply(null,arguments)},rf=a._emscripten_bind_b2Body_SetLinearVelocity_1=function(){return(rf=a._emscripten_bind_b2Body_SetLinearVelocity_1=a.asm.Bd).apply(null,arguments)},sf=a._emscripten_bind_b2Body_GetLinearVelocity_0=function(){return(sf=a._emscripten_bind_b2Body_GetLinearVelocity_0=a.asm.Cd).apply(null,arguments)},tf=a._emscripten_bind_b2Body_SetAngularVelocity_1=function(){return(tf=a._emscripten_bind_b2Body_SetAngularVelocity_1=
a.asm.Dd).apply(null,arguments)},uf=a._emscripten_bind_b2Body_GetAngularVelocity_0=function(){return(uf=a._emscripten_bind_b2Body_GetAngularVelocity_0=a.asm.Ed).apply(null,arguments)},vf=a._emscripten_bind_b2Body_ApplyForce_3=function(){return(vf=a._emscripten_bind_b2Body_ApplyForce_3=a.asm.Fd).apply(null,arguments)},wf=a._emscripten_bind_b2Body_ApplyForceToCenter_2=function(){return(wf=a._emscripten_bind_b2Body_ApplyForceToCenter_2=a.asm.Gd).apply(null,arguments)},xf=a._emscripten_bind_b2Body_ApplyTorque_2=
function(){return(xf=a._emscripten_bind_b2Body_ApplyTorque_2=a.asm.Hd).apply(null,arguments)},yf=a._emscripten_bind_b2Body_ApplyLinearImpulse_3=function(){return(yf=a._emscripten_bind_b2Body_ApplyLinearImpulse_3=a.asm.Id).apply(null,arguments)},zf=a._emscripten_bind_b2Body_ApplyAngularImpulse_2=function(){return(zf=a._emscripten_bind_b2Body_ApplyAngularImpulse_2=a.asm.Jd).apply(null,arguments)},Af=a._emscripten_bind_b2Body_GetMass_0=function(){return(Af=a._emscripten_bind_b2Body_GetMass_0=a.asm.Kd).apply(null,
arguments)},Bf=a._emscripten_bind_b2Body_GetInertia_0=function(){return(Bf=a._emscripten_bind_b2Body_GetInertia_0=a.asm.Ld).apply(null,arguments)},Cf=a._emscripten_bind_b2Body_GetMassData_1=function(){return(Cf=a._emscripten_bind_b2Body_GetMassData_1=a.asm.Md).apply(null,arguments)},Df=a._emscripten_bind_b2Body_SetMassData_1=function(){return(Df=a._emscripten_bind_b2Body_SetMassData_1=a.asm.Nd).apply(null,arguments)},Ef=a._emscripten_bind_b2Body_ResetMassData_0=function(){return(Ef=a._emscripten_bind_b2Body_ResetMassData_0=
a.asm.Od).apply(null,arguments)},Ff=a._emscripten_bind_b2Body_GetWorldPoint_1=function(){return(Ff=a._emscripten_bind_b2Body_GetWorldPoint_1=a.asm.Pd).apply(null,arguments)},Gf=a._emscripten_bind_b2Body_GetWorldVector_1=function(){return(Gf=a._emscripten_bind_b2Body_GetWorldVector_1=a.asm.Qd).apply(null,arguments)},Hf=a._emscripten_bind_b2Body_GetLocalPoint_1=function(){return(Hf=a._emscripten_bind_b2Body_GetLocalPoint_1=a.asm.Rd).apply(null,arguments)},If=a._emscripten_bind_b2Body_GetLocalVector_1=
function(){return(If=a._emscripten_bind_b2Body_GetLocalVector_1=a.asm.Sd).apply(null,arguments)},Jf=a._emscripten_bind_b2Body_GetLinearVelocityFromWorldPoint_1=function(){return(Jf=a._emscripten_bind_b2Body_GetLinearVelocityFromWorldPoint_1=a.asm.Td).apply(null,arguments)},Kf=a._emscripten_bind_b2Body_GetLinearVelocityFromLocalPoint_1=function(){return(Kf=a._emscripten_bind_b2Body_GetLinearVelocityFromLocalPoint_1=a.asm.Ud).apply(null,arguments)},Lf=a._emscripten_bind_b2Body_GetLinearDamping_0=function(){return(Lf=
a._emscripten_bind_b2Body_GetLinearDamping_0=a.asm.Vd).apply(null,arguments)},Mf=a._emscripten_bind_b2Body_SetLinearDamping_1=function(){return(Mf=a._emscripten_bind_b2Body_SetLinearDamping_1=a.asm.Wd).apply(null,arguments)},Nf=a._emscripten_bind_b2Body_GetAngularDamping_0=function(){return(Nf=a._emscripten_bind_b2Body_GetAngularDamping_0=a.asm.Xd).apply(null,arguments)},Of=a._emscripten_bind_b2Body_SetAngularDamping_1=function(){return(Of=a._emscripten_bind_b2Body_SetAngularDamping_1=a.asm.Yd).apply(null,
arguments)},Pf=a._emscripten_bind_b2Body_GetGravityScale_0=function(){return(Pf=a._emscripten_bind_b2Body_GetGravityScale_0=a.asm.Zd).apply(null,arguments)},Qf=a._emscripten_bind_b2Body_SetGravityScale_1=function(){return(Qf=a._emscripten_bind_b2Body_SetGravityScale_1=a.asm._d).apply(null,arguments)},Rf=a._emscripten_bind_b2Body_SetType_1=function(){return(Rf=a._emscripten_bind_b2Body_SetType_1=a.asm.$d).apply(null,arguments)},Sf=a._emscripten_bind_b2Body_GetType_0=function(){return(Sf=a._emscripten_bind_b2Body_GetType_0=
a.asm.ae).apply(null,arguments)},Tf=a._emscripten_bind_b2Body_SetBullet_1=function(){return(Tf=a._emscripten_bind_b2Body_SetBullet_1=a.asm.be).apply(null,arguments)},Uf=a._emscripten_bind_b2Body_IsBullet_0=function(){return(Uf=a._emscripten_bind_b2Body_IsBullet_0=a.asm.ce).apply(null,arguments)},Vf=a._emscripten_bind_b2Body_SetSleepingAllowed_1=function(){return(Vf=a._emscripten_bind_b2Body_SetSleepingAllowed_1=a.asm.de).apply(null,arguments)},Wf=a._emscripten_bind_b2Body_IsSleepingAllowed_0=function(){return(Wf=
a._emscripten_bind_b2Body_IsSleepingAllowed_0=a.asm.ee).apply(null,arguments)},Xf=a._emscripten_bind_b2Body_SetAwake_1=function(){return(Xf=a._emscripten_bind_b2Body_SetAwake_1=a.asm.fe).apply(null,arguments)},Yf=a._emscripten_bind_b2Body_IsAwake_0=function(){return(Yf=a._emscripten_bind_b2Body_IsAwake_0=a.asm.ge).apply(null,arguments)},Zf=a._emscripten_bind_b2Body_SetEnabled_1=function(){return(Zf=a._emscripten_bind_b2Body_SetEnabled_1=a.asm.he).apply(null,arguments)},$f=a._emscripten_bind_b2Body_IsEnabled_0=
function(){return($f=a._emscripten_bind_b2Body_IsEnabled_0=a.asm.ie).apply(null,arguments)},ag=a._emscripten_bind_b2Body_SetFixedRotation_1=function(){return(ag=a._emscripten_bind_b2Body_SetFixedRotation_1=a.asm.je).apply(null,arguments)},bg=a._emscripten_bind_b2Body_IsFixedRotation_0=function(){return(bg=a._emscripten_bind_b2Body_IsFixedRotation_0=a.asm.ke).apply(null,arguments)},cg=a._emscripten_bind_b2Body_GetFixtureList_0=function(){return(cg=a._emscripten_bind_b2Body_GetFixtureList_0=a.asm.le).apply(null,
arguments)},dg=a._emscripten_bind_b2Body_GetJointList_0=function(){return(dg=a._emscripten_bind_b2Body_GetJointList_0=a.asm.me).apply(null,arguments)},eg=a._emscripten_bind_b2Body_GetContactList_0=function(){return(eg=a._emscripten_bind_b2Body_GetContactList_0=a.asm.ne).apply(null,arguments)},fg=a._emscripten_bind_b2Body_GetNext_0=function(){return(fg=a._emscripten_bind_b2Body_GetNext_0=a.asm.oe).apply(null,arguments)},gg=a._emscripten_bind_b2Body_GetUserData_0=function(){return(gg=a._emscripten_bind_b2Body_GetUserData_0=
a.asm.pe).apply(null,arguments)},hg=a._emscripten_bind_b2Body_GetWorld_0=function(){return(hg=a._emscripten_bind_b2Body_GetWorld_0=a.asm.qe).apply(null,arguments)},ig=a._emscripten_bind_b2Body_Dump_0=function(){return(ig=a._emscripten_bind_b2Body_Dump_0=a.asm.re).apply(null,arguments)},jg=a._emscripten_bind_b2BodyDef_b2BodyDef_0=function(){return(jg=a._emscripten_bind_b2BodyDef_b2BodyDef_0=a.asm.se).apply(null,arguments)},kg=a._emscripten_bind_b2BodyDef_get_type_0=function(){return(kg=a._emscripten_bind_b2BodyDef_get_type_0=
a.asm.te).apply(null,arguments)},lg=a._emscripten_bind_b2BodyDef_set_type_1=function(){return(lg=a._emscripten_bind_b2BodyDef_set_type_1=a.asm.ue).apply(null,arguments)},mg=a._emscripten_bind_b2BodyDef_get_position_0=function(){return(mg=a._emscripten_bind_b2BodyDef_get_position_0=a.asm.ve).apply(null,arguments)},ng=a._emscripten_bind_b2BodyDef_set_position_1=function(){return(ng=a._emscripten_bind_b2BodyDef_set_position_1=a.asm.we).apply(null,arguments)},og=a._emscripten_bind_b2BodyDef_get_angle_0=
function(){return(og=a._emscripten_bind_b2BodyDef_get_angle_0=a.asm.xe).apply(null,arguments)},pg=a._emscripten_bind_b2BodyDef_set_angle_1=function(){return(pg=a._emscripten_bind_b2BodyDef_set_angle_1=a.asm.ye).apply(null,arguments)},qg=a._emscripten_bind_b2BodyDef_get_linearVelocity_0=function(){return(qg=a._emscripten_bind_b2BodyDef_get_linearVelocity_0=a.asm.ze).apply(null,arguments)},rg=a._emscripten_bind_b2BodyDef_set_linearVelocity_1=function(){return(rg=a._emscripten_bind_b2BodyDef_set_linearVelocity_1=
a.asm.Ae).apply(null,arguments)},sg=a._emscripten_bind_b2BodyDef_get_angularVelocity_0=function(){return(sg=a._emscripten_bind_b2BodyDef_get_angularVelocity_0=a.asm.Be).apply(null,arguments)},tg=a._emscripten_bind_b2BodyDef_set_angularVelocity_1=function(){return(tg=a._emscripten_bind_b2BodyDef_set_angularVelocity_1=a.asm.Ce).apply(null,arguments)},ug=a._emscripten_bind_b2BodyDef_get_linearDamping_0=function(){return(ug=a._emscripten_bind_b2BodyDef_get_linearDamping_0=a.asm.De).apply(null,arguments)},
vg=a._emscripten_bind_b2BodyDef_set_linearDamping_1=function(){return(vg=a._emscripten_bind_b2BodyDef_set_linearDamping_1=a.asm.Ee).apply(null,arguments)},wg=a._emscripten_bind_b2BodyDef_get_angularDamping_0=function(){return(wg=a._emscripten_bind_b2BodyDef_get_angularDamping_0=a.asm.Fe).apply(null,arguments)},xg=a._emscripten_bind_b2BodyDef_set_angularDamping_1=function(){return(xg=a._emscripten_bind_b2BodyDef_set_angularDamping_1=a.asm.Ge).apply(null,arguments)},yg=a._emscripten_bind_b2BodyDef_get_allowSleep_0=
function(){return(yg=a._emscripten_bind_b2BodyDef_get_allowSleep_0=a.asm.He).apply(null,arguments)},zg=a._emscripten_bind_b2BodyDef_set_allowSleep_1=function(){return(zg=a._emscripten_bind_b2BodyDef_set_allowSleep_1=a.asm.Ie).apply(null,arguments)},Ag=a._emscripten_bind_b2BodyDef_get_awake_0=function(){return(Ag=a._emscripten_bind_b2BodyDef_get_awake_0=a.asm.Je).apply(null,arguments)},Bg=a._emscripten_bind_b2BodyDef_set_awake_1=function(){return(Bg=a._emscripten_bind_b2BodyDef_set_awake_1=a.asm.Ke).apply(null,
arguments)},Cg=a._emscripten_bind_b2BodyDef_get_fixedRotation_0=function(){return(Cg=a._emscripten_bind_b2BodyDef_get_fixedRotation_0=a.asm.Le).apply(null,arguments)},Dg=a._emscripten_bind_b2BodyDef_set_fixedRotation_1=function(){return(Dg=a._emscripten_bind_b2BodyDef_set_fixedRotation_1=a.asm.Me).apply(null,arguments)},Eg=a._emscripten_bind_b2BodyDef_get_bullet_0=function(){return(Eg=a._emscripten_bind_b2BodyDef_get_bullet_0=a.asm.Ne).apply(null,arguments)},Fg=a._emscripten_bind_b2BodyDef_set_bullet_1=
function(){return(Fg=a._emscripten_bind_b2BodyDef_set_bullet_1=a.asm.Oe).apply(null,arguments)},Gg=a._emscripten_bind_b2BodyDef_get_userData_0=function(){return(Gg=a._emscripten_bind_b2BodyDef_get_userData_0=a.asm.Pe).apply(null,arguments)},Hg=a._emscripten_bind_b2BodyDef_set_userData_1=function(){return(Hg=a._emscripten_bind_b2BodyDef_set_userData_1=a.asm.Qe).apply(null,arguments)},Ig=a._emscripten_bind_b2BodyDef_get_gravityScale_0=function(){return(Ig=a._emscripten_bind_b2BodyDef_get_gravityScale_0=
a.asm.Re).apply(null,arguments)},Jg=a._emscripten_bind_b2BodyDef_set_gravityScale_1=function(){return(Jg=a._emscripten_bind_b2BodyDef_set_gravityScale_1=a.asm.Se).apply(null,arguments)},Kg=a._emscripten_bind_b2BodyDef___destroy___0=function(){return(Kg=a._emscripten_bind_b2BodyDef___destroy___0=a.asm.Te).apply(null,arguments)},Lg=a._emscripten_bind_b2Filter_b2Filter_0=function(){return(Lg=a._emscripten_bind_b2Filter_b2Filter_0=a.asm.Ue).apply(null,arguments)},Mg=a._emscripten_bind_b2Filter_get_categoryBits_0=
function(){return(Mg=a._emscripten_bind_b2Filter_get_categoryBits_0=a.asm.Ve).apply(null,arguments)},Ng=a._emscripten_bind_b2Filter_set_categoryBits_1=function(){return(Ng=a._emscripten_bind_b2Filter_set_categoryBits_1=a.asm.We).apply(null,arguments)},Og=a._emscripten_bind_b2Filter_get_maskBits_0=function(){return(Og=a._emscripten_bind_b2Filter_get_maskBits_0=a.asm.Xe).apply(null,arguments)},Pg=a._emscripten_bind_b2Filter_set_maskBits_1=function(){return(Pg=a._emscripten_bind_b2Filter_set_maskBits_1=
a.asm.Ye).apply(null,arguments)},Qg=a._emscripten_bind_b2Filter_get_groupIndex_0=function(){return(Qg=a._emscripten_bind_b2Filter_get_groupIndex_0=a.asm.Ze).apply(null,arguments)},Rg=a._emscripten_bind_b2Filter_set_groupIndex_1=function(){return(Rg=a._emscripten_bind_b2Filter_set_groupIndex_1=a.asm._e).apply(null,arguments)},Sg=a._emscripten_bind_b2Filter___destroy___0=function(){return(Sg=a._emscripten_bind_b2Filter___destroy___0=a.asm.$e).apply(null,arguments)},Tg=a._emscripten_bind_b2AABB_b2AABB_0=
function(){return(Tg=a._emscripten_bind_b2AABB_b2AABB_0=a.asm.af).apply(null,arguments)},Ug=a._emscripten_bind_b2AABB_IsValid_0=function(){return(Ug=a._emscripten_bind_b2AABB_IsValid_0=a.asm.bf).apply(null,arguments)},Vg=a._emscripten_bind_b2AABB_GetCenter_0=function(){return(Vg=a._emscripten_bind_b2AABB_GetCenter_0=a.asm.cf).apply(null,arguments)},Wg=a._emscripten_bind_b2AABB_GetExtents_0=function(){return(Wg=a._emscripten_bind_b2AABB_GetExtents_0=a.asm.df).apply(null,arguments)},Xg=a._emscripten_bind_b2AABB_GetPerimeter_0=
function(){return(Xg=a._emscripten_bind_b2AABB_GetPerimeter_0=a.asm.ef).apply(null,arguments)},Yg=a._emscripten_bind_b2AABB_Combine_1=function(){return(Yg=a._emscripten_bind_b2AABB_Combine_1=a.asm.ff).apply(null,arguments)},Zg=a._emscripten_bind_b2AABB_Combine_2=function(){return(Zg=a._emscripten_bind_b2AABB_Combine_2=a.asm.gf).apply(null,arguments)},$g=a._emscripten_bind_b2AABB_Contains_1=function(){return($g=a._emscripten_bind_b2AABB_Contains_1=a.asm.hf).apply(null,arguments)},ah=a._emscripten_bind_b2AABB_RayCast_2=
function(){return(ah=a._emscripten_bind_b2AABB_RayCast_2=a.asm.jf).apply(null,arguments)},bh=a._emscripten_bind_b2AABB_get_lowerBound_0=function(){return(bh=a._emscripten_bind_b2AABB_get_lowerBound_0=a.asm.kf).apply(null,arguments)},ch=a._emscripten_bind_b2AABB_set_lowerBound_1=function(){return(ch=a._emscripten_bind_b2AABB_set_lowerBound_1=a.asm.lf).apply(null,arguments)},dh=a._emscripten_bind_b2AABB_get_upperBound_0=function(){return(dh=a._emscripten_bind_b2AABB_get_upperBound_0=a.asm.mf).apply(null,
arguments)},eh=a._emscripten_bind_b2AABB_set_upperBound_1=function(){return(eh=a._emscripten_bind_b2AABB_set_upperBound_1=a.asm.nf).apply(null,arguments)},fh=a._emscripten_bind_b2AABB___destroy___0=function(){return(fh=a._emscripten_bind_b2AABB___destroy___0=a.asm.of).apply(null,arguments)},gh=a._emscripten_bind_b2CircleShape_b2CircleShape_0=function(){return(gh=a._emscripten_bind_b2CircleShape_b2CircleShape_0=a.asm.pf).apply(null,arguments)},hh=a._emscripten_bind_b2CircleShape_GetType_0=function(){return(hh=
a._emscripten_bind_b2CircleShape_GetType_0=a.asm.qf).apply(null,arguments)},ih=a._emscripten_bind_b2CircleShape_GetChildCount_0=function(){return(ih=a._emscripten_bind_b2CircleShape_GetChildCount_0=a.asm.rf).apply(null,arguments)},jh=a._emscripten_bind_b2CircleShape_TestPoint_2=function(){return(jh=a._emscripten_bind_b2CircleShape_TestPoint_2=a.asm.sf).apply(null,arguments)},kh=a._emscripten_bind_b2CircleShape_RayCast_4=function(){return(kh=a._emscripten_bind_b2CircleShape_RayCast_4=a.asm.tf).apply(null,
arguments)},lh=a._emscripten_bind_b2CircleShape_ComputeAABB_3=function(){return(lh=a._emscripten_bind_b2CircleShape_ComputeAABB_3=a.asm.uf).apply(null,arguments)},mh=a._emscripten_bind_b2CircleShape_ComputeMass_2=function(){return(mh=a._emscripten_bind_b2CircleShape_ComputeMass_2=a.asm.vf).apply(null,arguments)},nh=a._emscripten_bind_b2CircleShape_get_m_p_0=function(){return(nh=a._emscripten_bind_b2CircleShape_get_m_p_0=a.asm.wf).apply(null,arguments)},oh=a._emscripten_bind_b2CircleShape_set_m_p_1=
function(){return(oh=a._emscripten_bind_b2CircleShape_set_m_p_1=a.asm.xf).apply(null,arguments)},ph=a._emscripten_bind_b2CircleShape_get_m_type_0=function(){return(ph=a._emscripten_bind_b2CircleShape_get_m_type_0=a.asm.yf).apply(null,arguments)},qh=a._emscripten_bind_b2CircleShape_set_m_type_1=function(){return(qh=a._emscripten_bind_b2CircleShape_set_m_type_1=a.asm.zf).apply(null,arguments)},rh=a._emscripten_bind_b2CircleShape_get_m_radius_0=function(){return(rh=a._emscripten_bind_b2CircleShape_get_m_radius_0=
a.asm.Af).apply(null,arguments)},sh=a._emscripten_bind_b2CircleShape_set_m_radius_1=function(){return(sh=a._emscripten_bind_b2CircleShape_set_m_radius_1=a.asm.Bf).apply(null,arguments)},th=a._emscripten_bind_b2CircleShape___destroy___0=function(){return(th=a._emscripten_bind_b2CircleShape___destroy___0=a.asm.Cf).apply(null,arguments)},uh=a._emscripten_bind_b2EdgeShape_b2EdgeShape_0=function(){return(uh=a._emscripten_bind_b2EdgeShape_b2EdgeShape_0=a.asm.Df).apply(null,arguments)},vh=a._emscripten_bind_b2EdgeShape_SetOneSided_4=
function(){return(vh=a._emscripten_bind_b2EdgeShape_SetOneSided_4=a.asm.Ef).apply(null,arguments)},wh=a._emscripten_bind_b2EdgeShape_SetTwoSided_2=function(){return(wh=a._emscripten_bind_b2EdgeShape_SetTwoSided_2=a.asm.Ff).apply(null,arguments)},xh=a._emscripten_bind_b2EdgeShape_GetType_0=function(){return(xh=a._emscripten_bind_b2EdgeShape_GetType_0=a.asm.Gf).apply(null,arguments)},yh=a._emscripten_bind_b2EdgeShape_GetChildCount_0=function(){return(yh=a._emscripten_bind_b2EdgeShape_GetChildCount_0=
a.asm.Hf).apply(null,arguments)},zh=a._emscripten_bind_b2EdgeShape_TestPoint_2=function(){return(zh=a._emscripten_bind_b2EdgeShape_TestPoint_2=a.asm.If).apply(null,arguments)},Ah=a._emscripten_bind_b2EdgeShape_RayCast_4=function(){return(Ah=a._emscripten_bind_b2EdgeShape_RayCast_4=a.asm.Jf).apply(null,arguments)},Bh=a._emscripten_bind_b2EdgeShape_ComputeAABB_3=function(){return(Bh=a._emscripten_bind_b2EdgeShape_ComputeAABB_3=a.asm.Kf).apply(null,arguments)},Ch=a._emscripten_bind_b2EdgeShape_ComputeMass_2=
function(){return(Ch=a._emscripten_bind_b2EdgeShape_ComputeMass_2=a.asm.Lf).apply(null,arguments)},Dh=a._emscripten_bind_b2EdgeShape_get_m_vertex1_0=function(){return(Dh=a._emscripten_bind_b2EdgeShape_get_m_vertex1_0=a.asm.Mf).apply(null,arguments)},Eh=a._emscripten_bind_b2EdgeShape_set_m_vertex1_1=function(){return(Eh=a._emscripten_bind_b2EdgeShape_set_m_vertex1_1=a.asm.Nf).apply(null,arguments)},Fh=a._emscripten_bind_b2EdgeShape_get_m_vertex2_0=function(){return(Fh=a._emscripten_bind_b2EdgeShape_get_m_vertex2_0=
a.asm.Of).apply(null,arguments)},Gh=a._emscripten_bind_b2EdgeShape_set_m_vertex2_1=function(){return(Gh=a._emscripten_bind_b2EdgeShape_set_m_vertex2_1=a.asm.Pf).apply(null,arguments)},Hh=a._emscripten_bind_b2EdgeShape_get_m_vertex0_0=function(){return(Hh=a._emscripten_bind_b2EdgeShape_get_m_vertex0_0=a.asm.Qf).apply(null,arguments)},Ih=a._emscripten_bind_b2EdgeShape_set_m_vertex0_1=function(){return(Ih=a._emscripten_bind_b2EdgeShape_set_m_vertex0_1=a.asm.Rf).apply(null,arguments)},Jh=a._emscripten_bind_b2EdgeShape_get_m_vertex3_0=
function(){return(Jh=a._emscripten_bind_b2EdgeShape_get_m_vertex3_0=a.asm.Sf).apply(null,arguments)},Kh=a._emscripten_bind_b2EdgeShape_set_m_vertex3_1=function(){return(Kh=a._emscripten_bind_b2EdgeShape_set_m_vertex3_1=a.asm.Tf).apply(null,arguments)},Lh=a._emscripten_bind_b2EdgeShape_get_m_oneSided_0=function(){return(Lh=a._emscripten_bind_b2EdgeShape_get_m_oneSided_0=a.asm.Uf).apply(null,arguments)},Mh=a._emscripten_bind_b2EdgeShape_set_m_oneSided_1=function(){return(Mh=a._emscripten_bind_b2EdgeShape_set_m_oneSided_1=
a.asm.Vf).apply(null,arguments)},Nh=a._emscripten_bind_b2EdgeShape_get_m_type_0=function(){return(Nh=a._emscripten_bind_b2EdgeShape_get_m_type_0=a.asm.Wf).apply(null,arguments)},Oh=a._emscripten_bind_b2EdgeShape_set_m_type_1=function(){return(Oh=a._emscripten_bind_b2EdgeShape_set_m_type_1=a.asm.Xf).apply(null,arguments)},Ph=a._emscripten_bind_b2EdgeShape_get_m_radius_0=function(){return(Ph=a._emscripten_bind_b2EdgeShape_get_m_radius_0=a.asm.Yf).apply(null,arguments)},Qh=a._emscripten_bind_b2EdgeShape_set_m_radius_1=
function(){return(Qh=a._emscripten_bind_b2EdgeShape_set_m_radius_1=a.asm.Zf).apply(null,arguments)},Rh=a._emscripten_bind_b2EdgeShape___destroy___0=function(){return(Rh=a._emscripten_bind_b2EdgeShape___destroy___0=a.asm._f).apply(null,arguments)},Sh=a._emscripten_bind_b2JointUserData_get_pointer_0=function(){return(Sh=a._emscripten_bind_b2JointUserData_get_pointer_0=a.asm.$f).apply(null,arguments)},Th=a._emscripten_bind_b2JointUserData_set_pointer_1=function(){return(Th=a._emscripten_bind_b2JointUserData_set_pointer_1=
a.asm.ag).apply(null,arguments)},Uh=a._emscripten_bind_b2JointUserData___destroy___0=function(){return(Uh=a._emscripten_bind_b2JointUserData___destroy___0=a.asm.bg).apply(null,arguments)},Vh=a._emscripten_bind_b2WeldJoint_GetLocalAnchorA_0=function(){return(Vh=a._emscripten_bind_b2WeldJoint_GetLocalAnchorA_0=a.asm.cg).apply(null,arguments)},Wh=a._emscripten_bind_b2WeldJoint_GetLocalAnchorB_0=function(){return(Wh=a._emscripten_bind_b2WeldJoint_GetLocalAnchorB_0=a.asm.dg).apply(null,arguments)},Xh=
a._emscripten_bind_b2WeldJoint_GetReferenceAngle_0=function(){return(Xh=a._emscripten_bind_b2WeldJoint_GetReferenceAngle_0=a.asm.eg).apply(null,arguments)},Yh=a._emscripten_bind_b2WeldJoint_SetStiffness_1=function(){return(Yh=a._emscripten_bind_b2WeldJoint_SetStiffness_1=a.asm.fg).apply(null,arguments)},Zh=a._emscripten_bind_b2WeldJoint_GetStiffness_0=function(){return(Zh=a._emscripten_bind_b2WeldJoint_GetStiffness_0=a.asm.gg).apply(null,arguments)},$h=a._emscripten_bind_b2WeldJoint_SetDamping_1=
function(){return($h=a._emscripten_bind_b2WeldJoint_SetDamping_1=a.asm.hg).apply(null,arguments)},ai=a._emscripten_bind_b2WeldJoint_GetDamping_0=function(){return(ai=a._emscripten_bind_b2WeldJoint_GetDamping_0=a.asm.ig).apply(null,arguments)},bi=a._emscripten_bind_b2WeldJoint_Dump_0=function(){return(bi=a._emscripten_bind_b2WeldJoint_Dump_0=a.asm.jg).apply(null,arguments)},ci=a._emscripten_bind_b2WeldJoint_GetType_0=function(){return(ci=a._emscripten_bind_b2WeldJoint_GetType_0=a.asm.kg).apply(null,
arguments)},di=a._emscripten_bind_b2WeldJoint_GetBodyA_0=function(){return(di=a._emscripten_bind_b2WeldJoint_GetBodyA_0=a.asm.lg).apply(null,arguments)},ei=a._emscripten_bind_b2WeldJoint_GetBodyB_0=function(){return(ei=a._emscripten_bind_b2WeldJoint_GetBodyB_0=a.asm.mg).apply(null,arguments)},fi=a._emscripten_bind_b2WeldJoint_GetAnchorA_0=function(){return(fi=a._emscripten_bind_b2WeldJoint_GetAnchorA_0=a.asm.ng).apply(null,arguments)},gi=a._emscripten_bind_b2WeldJoint_GetAnchorB_0=function(){return(gi=
a._emscripten_bind_b2WeldJoint_GetAnchorB_0=a.asm.og).apply(null,arguments)},hi=a._emscripten_bind_b2WeldJoint_GetReactionForce_1=function(){return(hi=a._emscripten_bind_b2WeldJoint_GetReactionForce_1=a.asm.pg).apply(null,arguments)},ii=a._emscripten_bind_b2WeldJoint_GetReactionTorque_1=function(){return(ii=a._emscripten_bind_b2WeldJoint_GetReactionTorque_1=a.asm.qg).apply(null,arguments)},ji=a._emscripten_bind_b2WeldJoint_GetNext_0=function(){return(ji=a._emscripten_bind_b2WeldJoint_GetNext_0=a.asm.rg).apply(null,
arguments)},ki=a._emscripten_bind_b2WeldJoint_GetUserData_0=function(){return(ki=a._emscripten_bind_b2WeldJoint_GetUserData_0=a.asm.sg).apply(null,arguments)},li=a._emscripten_bind_b2WeldJoint_GetCollideConnected_0=function(){return(li=a._emscripten_bind_b2WeldJoint_GetCollideConnected_0=a.asm.tg).apply(null,arguments)},mi=a._emscripten_bind_b2WeldJoint___destroy___0=function(){return(mi=a._emscripten_bind_b2WeldJoint___destroy___0=a.asm.ug).apply(null,arguments)},ni=a._emscripten_bind_b2WeldJointDef_b2WeldJointDef_0=
function(){return(ni=a._emscripten_bind_b2WeldJointDef_b2WeldJointDef_0=a.asm.vg).apply(null,arguments)},oi=a._emscripten_bind_b2WeldJointDef_Initialize_3=function(){return(oi=a._emscripten_bind_b2WeldJointDef_Initialize_3=a.asm.wg).apply(null,arguments)},pi=a._emscripten_bind_b2WeldJointDef_get_localAnchorA_0=function(){return(pi=a._emscripten_bind_b2WeldJointDef_get_localAnchorA_0=a.asm.xg).apply(null,arguments)},qi=a._emscripten_bind_b2WeldJointDef_set_localAnchorA_1=function(){return(qi=a._emscripten_bind_b2WeldJointDef_set_localAnchorA_1=
a.asm.yg).apply(null,arguments)},ri=a._emscripten_bind_b2WeldJointDef_get_localAnchorB_0=function(){return(ri=a._emscripten_bind_b2WeldJointDef_get_localAnchorB_0=a.asm.zg).apply(null,arguments)},si=a._emscripten_bind_b2WeldJointDef_set_localAnchorB_1=function(){return(si=a._emscripten_bind_b2WeldJointDef_set_localAnchorB_1=a.asm.Ag).apply(null,arguments)},ti=a._emscripten_bind_b2WeldJointDef_get_referenceAngle_0=function(){return(ti=a._emscripten_bind_b2WeldJointDef_get_referenceAngle_0=a.asm.Bg).apply(null,
arguments)},ui=a._emscripten_bind_b2WeldJointDef_set_referenceAngle_1=function(){return(ui=a._emscripten_bind_b2WeldJointDef_set_referenceAngle_1=a.asm.Cg).apply(null,arguments)},vi=a._emscripten_bind_b2WeldJointDef_get_stiffness_0=function(){return(vi=a._emscripten_bind_b2WeldJointDef_get_stiffness_0=a.asm.Dg).apply(null,arguments)},wi=a._emscripten_bind_b2WeldJointDef_set_stiffness_1=function(){return(wi=a._emscripten_bind_b2WeldJointDef_set_stiffness_1=a.asm.Eg).apply(null,arguments)},xi=a._emscripten_bind_b2WeldJointDef_get_damping_0=
function(){return(xi=a._emscripten_bind_b2WeldJointDef_get_damping_0=a.asm.Fg).apply(null,arguments)},yi=a._emscripten_bind_b2WeldJointDef_set_damping_1=function(){return(yi=a._emscripten_bind_b2WeldJointDef_set_damping_1=a.asm.Gg).apply(null,arguments)},zi=a._emscripten_bind_b2WeldJointDef_get_type_0=function(){return(zi=a._emscripten_bind_b2WeldJointDef_get_type_0=a.asm.Hg).apply(null,arguments)},Ai=a._emscripten_bind_b2WeldJointDef_set_type_1=function(){return(Ai=a._emscripten_bind_b2WeldJointDef_set_type_1=
a.asm.Ig).apply(null,arguments)},Bi=a._emscripten_bind_b2WeldJointDef_get_userData_0=function(){return(Bi=a._emscripten_bind_b2WeldJointDef_get_userData_0=a.asm.Jg).apply(null,arguments)},Ci=a._emscripten_bind_b2WeldJointDef_set_userData_1=function(){return(Ci=a._emscripten_bind_b2WeldJointDef_set_userData_1=a.asm.Kg).apply(null,arguments)},Di=a._emscripten_bind_b2WeldJointDef_get_bodyA_0=function(){return(Di=a._emscripten_bind_b2WeldJointDef_get_bodyA_0=a.asm.Lg).apply(null,arguments)},Ei=a._emscripten_bind_b2WeldJointDef_set_bodyA_1=
function(){return(Ei=a._emscripten_bind_b2WeldJointDef_set_bodyA_1=a.asm.Mg).apply(null,arguments)},Fi=a._emscripten_bind_b2WeldJointDef_get_bodyB_0=function(){return(Fi=a._emscripten_bind_b2WeldJointDef_get_bodyB_0=a.asm.Ng).apply(null,arguments)},Gi=a._emscripten_bind_b2WeldJointDef_set_bodyB_1=function(){return(Gi=a._emscripten_bind_b2WeldJointDef_set_bodyB_1=a.asm.Og).apply(null,arguments)},Hi=a._emscripten_bind_b2WeldJointDef_get_collideConnected_0=function(){return(Hi=a._emscripten_bind_b2WeldJointDef_get_collideConnected_0=
a.asm.Pg).apply(null,arguments)},Ii=a._emscripten_bind_b2WeldJointDef_set_collideConnected_1=function(){return(Ii=a._emscripten_bind_b2WeldJointDef_set_collideConnected_1=a.asm.Qg).apply(null,arguments)},Ji=a._emscripten_bind_b2WeldJointDef___destroy___0=function(){return(Ji=a._emscripten_bind_b2WeldJointDef___destroy___0=a.asm.Rg).apply(null,arguments)},Ki=a._emscripten_bind_b2ChainShape_b2ChainShape_0=function(){return(Ki=a._emscripten_bind_b2ChainShape_b2ChainShape_0=a.asm.Sg).apply(null,arguments)},
Li=a._emscripten_bind_b2ChainShape_Clear_0=function(){return(Li=a._emscripten_bind_b2ChainShape_Clear_0=a.asm.Tg).apply(null,arguments)},Mi=a._emscripten_bind_b2ChainShape_CreateLoop_2=function(){return(Mi=a._emscripten_bind_b2ChainShape_CreateLoop_2=a.asm.Ug).apply(null,arguments)},Ni=a._emscripten_bind_b2ChainShape_CreateChain_4=function(){return(Ni=a._emscripten_bind_b2ChainShape_CreateChain_4=a.asm.Vg).apply(null,arguments)},Oi=a._emscripten_bind_b2ChainShape_GetChildEdge_2=function(){return(Oi=
a._emscripten_bind_b2ChainShape_GetChildEdge_2=a.asm.Wg).apply(null,arguments)},Pi=a._emscripten_bind_b2ChainShape_GetType_0=function(){return(Pi=a._emscripten_bind_b2ChainShape_GetType_0=a.asm.Xg).apply(null,arguments)},Qi=a._emscripten_bind_b2ChainShape_GetChildCount_0=function(){return(Qi=a._emscripten_bind_b2ChainShape_GetChildCount_0=a.asm.Yg).apply(null,arguments)},Ri=a._emscripten_bind_b2ChainShape_TestPoint_2=function(){return(Ri=a._emscripten_bind_b2ChainShape_TestPoint_2=a.asm.Zg).apply(null,
arguments)},Si=a._emscripten_bind_b2ChainShape_RayCast_4=function(){return(Si=a._emscripten_bind_b2ChainShape_RayCast_4=a.asm._g).apply(null,arguments)},Ti=a._emscripten_bind_b2ChainShape_ComputeAABB_3=function(){return(Ti=a._emscripten_bind_b2ChainShape_ComputeAABB_3=a.asm.$g).apply(null,arguments)},Ui=a._emscripten_bind_b2ChainShape_ComputeMass_2=function(){return(Ui=a._emscripten_bind_b2ChainShape_ComputeMass_2=a.asm.ah).apply(null,arguments)},Vi=a._emscripten_bind_b2ChainShape_get_m_vertices_0=
function(){return(Vi=a._emscripten_bind_b2ChainShape_get_m_vertices_0=a.asm.bh).apply(null,arguments)},Wi=a._emscripten_bind_b2ChainShape_set_m_vertices_1=function(){return(Wi=a._emscripten_bind_b2ChainShape_set_m_vertices_1=a.asm.ch).apply(null,arguments)},Xi=a._emscripten_bind_b2ChainShape_get_m_count_0=function(){return(Xi=a._emscripten_bind_b2ChainShape_get_m_count_0=a.asm.dh).apply(null,arguments)},Yi=a._emscripten_bind_b2ChainShape_set_m_count_1=function(){return(Yi=a._emscripten_bind_b2ChainShape_set_m_count_1=
a.asm.eh).apply(null,arguments)},Zi=a._emscripten_bind_b2ChainShape_get_m_prevVertex_0=function(){return(Zi=a._emscripten_bind_b2ChainShape_get_m_prevVertex_0=a.asm.fh).apply(null,arguments)},$i=a._emscripten_bind_b2ChainShape_set_m_prevVertex_1=function(){return($i=a._emscripten_bind_b2ChainShape_set_m_prevVertex_1=a.asm.gh).apply(null,arguments)},aj=a._emscripten_bind_b2ChainShape_get_m_nextVertex_0=function(){return(aj=a._emscripten_bind_b2ChainShape_get_m_nextVertex_0=a.asm.hh).apply(null,arguments)},
bj=a._emscripten_bind_b2ChainShape_set_m_nextVertex_1=function(){return(bj=a._emscripten_bind_b2ChainShape_set_m_nextVertex_1=a.asm.ih).apply(null,arguments)},cj=a._emscripten_bind_b2ChainShape_get_m_type_0=function(){return(cj=a._emscripten_bind_b2ChainShape_get_m_type_0=a.asm.jh).apply(null,arguments)},dj=a._emscripten_bind_b2ChainShape_set_m_type_1=function(){return(dj=a._emscripten_bind_b2ChainShape_set_m_type_1=a.asm.kh).apply(null,arguments)},ej=a._emscripten_bind_b2ChainShape_get_m_radius_0=
function(){return(ej=a._emscripten_bind_b2ChainShape_get_m_radius_0=a.asm.lh).apply(null,arguments)},fj=a._emscripten_bind_b2ChainShape_set_m_radius_1=function(){return(fj=a._emscripten_bind_b2ChainShape_set_m_radius_1=a.asm.mh).apply(null,arguments)},gj=a._emscripten_bind_b2ChainShape___destroy___0=function(){return(gj=a._emscripten_bind_b2ChainShape___destroy___0=a.asm.nh).apply(null,arguments)},hj=a._emscripten_bind_b2Color_b2Color_0=function(){return(hj=a._emscripten_bind_b2Color_b2Color_0=a.asm.oh).apply(null,
arguments)},ij=a._emscripten_bind_b2Color_b2Color_3=function(){return(ij=a._emscripten_bind_b2Color_b2Color_3=a.asm.ph).apply(null,arguments)},jj=a._emscripten_bind_b2Color_Set_3=function(){return(jj=a._emscripten_bind_b2Color_Set_3=a.asm.qh).apply(null,arguments)},kj=a._emscripten_bind_b2Color_get_r_0=function(){return(kj=a._emscripten_bind_b2Color_get_r_0=a.asm.rh).apply(null,arguments)},lj=a._emscripten_bind_b2Color_set_r_1=function(){return(lj=a._emscripten_bind_b2Color_set_r_1=a.asm.sh).apply(null,
arguments)},mj=a._emscripten_bind_b2Color_get_g_0=function(){return(mj=a._emscripten_bind_b2Color_get_g_0=a.asm.th).apply(null,arguments)},nj=a._emscripten_bind_b2Color_set_g_1=function(){return(nj=a._emscripten_bind_b2Color_set_g_1=a.asm.uh).apply(null,arguments)},oj=a._emscripten_bind_b2Color_get_b_0=function(){return(oj=a._emscripten_bind_b2Color_get_b_0=a.asm.vh).apply(null,arguments)},pj=a._emscripten_bind_b2Color_set_b_1=function(){return(pj=a._emscripten_bind_b2Color_set_b_1=a.asm.wh).apply(null,
arguments)},qj=a._emscripten_bind_b2Color___destroy___0=function(){return(qj=a._emscripten_bind_b2Color___destroy___0=a.asm.xh).apply(null,arguments)},rj=a._emscripten_bind_b2ContactEdge_b2ContactEdge_0=function(){return(rj=a._emscripten_bind_b2ContactEdge_b2ContactEdge_0=a.asm.yh).apply(null,arguments)},sj=a._emscripten_bind_b2ContactEdge_get_other_0=function(){return(sj=a._emscripten_bind_b2ContactEdge_get_other_0=a.asm.zh).apply(null,arguments)},tj=a._emscripten_bind_b2ContactEdge_set_other_1=
function(){return(tj=a._emscripten_bind_b2ContactEdge_set_other_1=a.asm.Ah).apply(null,arguments)},uj=a._emscripten_bind_b2ContactEdge_get_contact_0=function(){return(uj=a._emscripten_bind_b2ContactEdge_get_contact_0=a.asm.Bh).apply(null,arguments)},vj=a._emscripten_bind_b2ContactEdge_set_contact_1=function(){return(vj=a._emscripten_bind_b2ContactEdge_set_contact_1=a.asm.Ch).apply(null,arguments)},wj=a._emscripten_bind_b2ContactEdge_get_prev_0=function(){return(wj=a._emscripten_bind_b2ContactEdge_get_prev_0=
a.asm.Dh).apply(null,arguments)},xj=a._emscripten_bind_b2ContactEdge_set_prev_1=function(){return(xj=a._emscripten_bind_b2ContactEdge_set_prev_1=a.asm.Eh).apply(null,arguments)},yj=a._emscripten_bind_b2ContactEdge_get_next_0=function(){return(yj=a._emscripten_bind_b2ContactEdge_get_next_0=a.asm.Fh).apply(null,arguments)},zj=a._emscripten_bind_b2ContactEdge_set_next_1=function(){return(zj=a._emscripten_bind_b2ContactEdge_set_next_1=a.asm.Gh).apply(null,arguments)},Aj=a._emscripten_bind_b2ContactEdge___destroy___0=
function(){return(Aj=a._emscripten_bind_b2ContactEdge___destroy___0=a.asm.Hh).apply(null,arguments)},Bj=a._emscripten_bind_b2ContactFeature_get_indexA_0=function(){return(Bj=a._emscripten_bind_b2ContactFeature_get_indexA_0=a.asm.Ih).apply(null,arguments)},Cj=a._emscripten_bind_b2ContactFeature_set_indexA_1=function(){return(Cj=a._emscripten_bind_b2ContactFeature_set_indexA_1=a.asm.Jh).apply(null,arguments)},Dj=a._emscripten_bind_b2ContactFeature_get_indexB_0=function(){return(Dj=a._emscripten_bind_b2ContactFeature_get_indexB_0=
a.asm.Kh).apply(null,arguments)},Ej=a._emscripten_bind_b2ContactFeature_set_indexB_1=function(){return(Ej=a._emscripten_bind_b2ContactFeature_set_indexB_1=a.asm.Lh).apply(null,arguments)},Fj=a._emscripten_bind_b2ContactFeature_get_typeA_0=function(){return(Fj=a._emscripten_bind_b2ContactFeature_get_typeA_0=a.asm.Mh).apply(null,arguments)},Gj=a._emscripten_bind_b2ContactFeature_set_typeA_1=function(){return(Gj=a._emscripten_bind_b2ContactFeature_set_typeA_1=a.asm.Nh).apply(null,arguments)},Hj=a._emscripten_bind_b2ContactFeature_get_typeB_0=
function(){return(Hj=a._emscripten_bind_b2ContactFeature_get_typeB_0=a.asm.Oh).apply(null,arguments)},Ij=a._emscripten_bind_b2ContactFeature_set_typeB_1=function(){return(Ij=a._emscripten_bind_b2ContactFeature_set_typeB_1=a.asm.Ph).apply(null,arguments)},Jj=a._emscripten_bind_b2ContactFeature___destroy___0=function(){return(Jj=a._emscripten_bind_b2ContactFeature___destroy___0=a.asm.Qh).apply(null,arguments)},Kj=a._emscripten_bind_JSContactFilter_JSContactFilter_0=function(){return(Kj=a._emscripten_bind_JSContactFilter_JSContactFilter_0=
a.asm.Rh).apply(null,arguments)},Lj=a._emscripten_bind_JSContactFilter_ShouldCollide_2=function(){return(Lj=a._emscripten_bind_JSContactFilter_ShouldCollide_2=a.asm.Sh).apply(null,arguments)},Mj=a._emscripten_bind_JSContactFilter___destroy___0=function(){return(Mj=a._emscripten_bind_JSContactFilter___destroy___0=a.asm.Th).apply(null,arguments)},Nj=a._emscripten_bind_b2ContactID_get_cf_0=function(){return(Nj=a._emscripten_bind_b2ContactID_get_cf_0=a.asm.Uh).apply(null,arguments)},Oj=a._emscripten_bind_b2ContactID_set_cf_1=
function(){return(Oj=a._emscripten_bind_b2ContactID_set_cf_1=a.asm.Vh).apply(null,arguments)},Pj=a._emscripten_bind_b2ContactID_get_key_0=function(){return(Pj=a._emscripten_bind_b2ContactID_get_key_0=a.asm.Wh).apply(null,arguments)},Qj=a._emscripten_bind_b2ContactID_set_key_1=function(){return(Qj=a._emscripten_bind_b2ContactID_set_key_1=a.asm.Xh).apply(null,arguments)},Rj=a._emscripten_bind_b2ContactID___destroy___0=function(){return(Rj=a._emscripten_bind_b2ContactID___destroy___0=a.asm.Yh).apply(null,
arguments)},Sj=a._emscripten_bind_b2ContactImpulse_get_normalImpulses_1=function(){return(Sj=a._emscripten_bind_b2ContactImpulse_get_normalImpulses_1=a.asm.Zh).apply(null,arguments)},Tj=a._emscripten_bind_b2ContactImpulse_set_normalImpulses_2=function(){return(Tj=a._emscripten_bind_b2ContactImpulse_set_normalImpulses_2=a.asm._h).apply(null,arguments)},Uj=a._emscripten_bind_b2ContactImpulse_get_tangentImpulses_1=function(){return(Uj=a._emscripten_bind_b2ContactImpulse_get_tangentImpulses_1=a.asm.$h).apply(null,
arguments)},Vj=a._emscripten_bind_b2ContactImpulse_set_tangentImpulses_2=function(){return(Vj=a._emscripten_bind_b2ContactImpulse_set_tangentImpulses_2=a.asm.ai).apply(null,arguments)},Wj=a._emscripten_bind_b2ContactImpulse_get_count_0=function(){return(Wj=a._emscripten_bind_b2ContactImpulse_get_count_0=a.asm.bi).apply(null,arguments)},Xj=a._emscripten_bind_b2ContactImpulse_set_count_1=function(){return(Xj=a._emscripten_bind_b2ContactImpulse_set_count_1=a.asm.ci).apply(null,arguments)},Yj=a._emscripten_bind_b2ContactImpulse___destroy___0=
function(){return(Yj=a._emscripten_bind_b2ContactImpulse___destroy___0=a.asm.di).apply(null,arguments)},Zj=a._emscripten_bind_b2DestructionListener___destroy___0=function(){return(Zj=a._emscripten_bind_b2DestructionListener___destroy___0=a.asm.ei).apply(null,arguments)},ak=a._emscripten_bind_JSDestructionListener_JSDestructionListener_0=function(){return(ak=a._emscripten_bind_JSDestructionListener_JSDestructionListener_0=a.asm.fi).apply(null,arguments)},bk=a._emscripten_bind_JSDestructionListener_SayGoodbyeJoint_1=
function(){return(bk=a._emscripten_bind_JSDestructionListener_SayGoodbyeJoint_1=a.asm.gi).apply(null,arguments)},ck=a._emscripten_bind_JSDestructionListener_SayGoodbyeFixture_1=function(){return(ck=a._emscripten_bind_JSDestructionListener_SayGoodbyeFixture_1=a.asm.hi).apply(null,arguments)},dk=a._emscripten_bind_JSDestructionListener___destroy___0=function(){return(dk=a._emscripten_bind_JSDestructionListener___destroy___0=a.asm.ii).apply(null,arguments)},ek=a._emscripten_bind_b2DistanceJoint_GetLocalAnchorA_0=
function(){return(ek=a._emscripten_bind_b2DistanceJoint_GetLocalAnchorA_0=a.asm.ji).apply(null,arguments)},fk=a._emscripten_bind_b2DistanceJoint_GetLocalAnchorB_0=function(){return(fk=a._emscripten_bind_b2DistanceJoint_GetLocalAnchorB_0=a.asm.ki).apply(null,arguments)},gk=a._emscripten_bind_b2DistanceJoint_GetLength_0=function(){return(gk=a._emscripten_bind_b2DistanceJoint_GetLength_0=a.asm.li).apply(null,arguments)},hk=a._emscripten_bind_b2DistanceJoint_SetLength_1=function(){return(hk=a._emscripten_bind_b2DistanceJoint_SetLength_1=
a.asm.mi).apply(null,arguments)},ik=a._emscripten_bind_b2DistanceJoint_GetMinLength_0=function(){return(ik=a._emscripten_bind_b2DistanceJoint_GetMinLength_0=a.asm.ni).apply(null,arguments)},jk=a._emscripten_bind_b2DistanceJoint_SetMinLength_1=function(){return(jk=a._emscripten_bind_b2DistanceJoint_SetMinLength_1=a.asm.oi).apply(null,arguments)},kk=a._emscripten_bind_b2DistanceJoint_GetMaxLength_0=function(){return(kk=a._emscripten_bind_b2DistanceJoint_GetMaxLength_0=a.asm.pi).apply(null,arguments)},
lk=a._emscripten_bind_b2DistanceJoint_SetMaxLength_1=function(){return(lk=a._emscripten_bind_b2DistanceJoint_SetMaxLength_1=a.asm.qi).apply(null,arguments)},mk=a._emscripten_bind_b2DistanceJoint_GetCurrentLength_0=function(){return(mk=a._emscripten_bind_b2DistanceJoint_GetCurrentLength_0=a.asm.ri).apply(null,arguments)},nk=a._emscripten_bind_b2DistanceJoint_SetStiffness_1=function(){return(nk=a._emscripten_bind_b2DistanceJoint_SetStiffness_1=a.asm.si).apply(null,arguments)},ok=a._emscripten_bind_b2DistanceJoint_GetStiffness_0=
function(){return(ok=a._emscripten_bind_b2DistanceJoint_GetStiffness_0=a.asm.ti).apply(null,arguments)},pk=a._emscripten_bind_b2DistanceJoint_SetDamping_1=function(){return(pk=a._emscripten_bind_b2DistanceJoint_SetDamping_1=a.asm.ui).apply(null,arguments)},qk=a._emscripten_bind_b2DistanceJoint_GetDamping_0=function(){return(qk=a._emscripten_bind_b2DistanceJoint_GetDamping_0=a.asm.vi).apply(null,arguments)},rk=a._emscripten_bind_b2DistanceJoint_GetType_0=function(){return(rk=a._emscripten_bind_b2DistanceJoint_GetType_0=
a.asm.wi).apply(null,arguments)},sk=a._emscripten_bind_b2DistanceJoint_GetBodyA_0=function(){return(sk=a._emscripten_bind_b2DistanceJoint_GetBodyA_0=a.asm.xi).apply(null,arguments)},tk=a._emscripten_bind_b2DistanceJoint_GetBodyB_0=function(){return(tk=a._emscripten_bind_b2DistanceJoint_GetBodyB_0=a.asm.yi).apply(null,arguments)},uk=a._emscripten_bind_b2DistanceJoint_GetAnchorA_0=function(){return(uk=a._emscripten_bind_b2DistanceJoint_GetAnchorA_0=a.asm.zi).apply(null,arguments)},vk=a._emscripten_bind_b2DistanceJoint_GetAnchorB_0=
function(){return(vk=a._emscripten_bind_b2DistanceJoint_GetAnchorB_0=a.asm.Ai).apply(null,arguments)},wk=a._emscripten_bind_b2DistanceJoint_GetReactionForce_1=function(){return(wk=a._emscripten_bind_b2DistanceJoint_GetReactionForce_1=a.asm.Bi).apply(null,arguments)},xk=a._emscripten_bind_b2DistanceJoint_GetReactionTorque_1=function(){return(xk=a._emscripten_bind_b2DistanceJoint_GetReactionTorque_1=a.asm.Ci).apply(null,arguments)},yk=a._emscripten_bind_b2DistanceJoint_GetNext_0=function(){return(yk=
a._emscripten_bind_b2DistanceJoint_GetNext_0=a.asm.Di).apply(null,arguments)},zk=a._emscripten_bind_b2DistanceJoint_GetUserData_0=function(){return(zk=a._emscripten_bind_b2DistanceJoint_GetUserData_0=a.asm.Ei).apply(null,arguments)},Ak=a._emscripten_bind_b2DistanceJoint_GetCollideConnected_0=function(){return(Ak=a._emscripten_bind_b2DistanceJoint_GetCollideConnected_0=a.asm.Fi).apply(null,arguments)},Bk=a._emscripten_bind_b2DistanceJoint___destroy___0=function(){return(Bk=a._emscripten_bind_b2DistanceJoint___destroy___0=
a.asm.Gi).apply(null,arguments)},Ck=a._emscripten_bind_b2DistanceJointDef_b2DistanceJointDef_0=function(){return(Ck=a._emscripten_bind_b2DistanceJointDef_b2DistanceJointDef_0=a.asm.Hi).apply(null,arguments)},Dk=a._emscripten_bind_b2DistanceJointDef_Initialize_4=function(){return(Dk=a._emscripten_bind_b2DistanceJointDef_Initialize_4=a.asm.Ii).apply(null,arguments)},Ek=a._emscripten_bind_b2DistanceJointDef_get_localAnchorA_0=function(){return(Ek=a._emscripten_bind_b2DistanceJointDef_get_localAnchorA_0=
a.asm.Ji).apply(null,arguments)},Fk=a._emscripten_bind_b2DistanceJointDef_set_localAnchorA_1=function(){return(Fk=a._emscripten_bind_b2DistanceJointDef_set_localAnchorA_1=a.asm.Ki).apply(null,arguments)},Gk=a._emscripten_bind_b2DistanceJointDef_get_localAnchorB_0=function(){return(Gk=a._emscripten_bind_b2DistanceJointDef_get_localAnchorB_0=a.asm.Li).apply(null,arguments)},Hk=a._emscripten_bind_b2DistanceJointDef_set_localAnchorB_1=function(){return(Hk=a._emscripten_bind_b2DistanceJointDef_set_localAnchorB_1=
a.asm.Mi).apply(null,arguments)},Ik=a._emscripten_bind_b2DistanceJointDef_get_length_0=function(){return(Ik=a._emscripten_bind_b2DistanceJointDef_get_length_0=a.asm.Ni).apply(null,arguments)},Jk=a._emscripten_bind_b2DistanceJointDef_set_length_1=function(){return(Jk=a._emscripten_bind_b2DistanceJointDef_set_length_1=a.asm.Oi).apply(null,arguments)},Kk=a._emscripten_bind_b2DistanceJointDef_get_minLength_0=function(){return(Kk=a._emscripten_bind_b2DistanceJointDef_get_minLength_0=a.asm.Pi).apply(null,
arguments)},Lk=a._emscripten_bind_b2DistanceJointDef_set_minLength_1=function(){return(Lk=a._emscripten_bind_b2DistanceJointDef_set_minLength_1=a.asm.Qi).apply(null,arguments)},Mk=a._emscripten_bind_b2DistanceJointDef_get_maxLength_0=function(){return(Mk=a._emscripten_bind_b2DistanceJointDef_get_maxLength_0=a.asm.Ri).apply(null,arguments)},Nk=a._emscripten_bind_b2DistanceJointDef_set_maxLength_1=function(){return(Nk=a._emscripten_bind_b2DistanceJointDef_set_maxLength_1=a.asm.Si).apply(null,arguments)},
Ok=a._emscripten_bind_b2DistanceJointDef_get_stiffness_0=function(){return(Ok=a._emscripten_bind_b2DistanceJointDef_get_stiffness_0=a.asm.Ti).apply(null,arguments)},Pk=a._emscripten_bind_b2DistanceJointDef_set_stiffness_1=function(){return(Pk=a._emscripten_bind_b2DistanceJointDef_set_stiffness_1=a.asm.Ui).apply(null,arguments)},Qk=a._emscripten_bind_b2DistanceJointDef_get_damping_0=function(){return(Qk=a._emscripten_bind_b2DistanceJointDef_get_damping_0=a.asm.Vi).apply(null,arguments)},Rk=a._emscripten_bind_b2DistanceJointDef_set_damping_1=
function(){return(Rk=a._emscripten_bind_b2DistanceJointDef_set_damping_1=a.asm.Wi).apply(null,arguments)},Sk=a._emscripten_bind_b2DistanceJointDef_get_type_0=function(){return(Sk=a._emscripten_bind_b2DistanceJointDef_get_type_0=a.asm.Xi).apply(null,arguments)},Tk=a._emscripten_bind_b2DistanceJointDef_set_type_1=function(){return(Tk=a._emscripten_bind_b2DistanceJointDef_set_type_1=a.asm.Yi).apply(null,arguments)},Uk=a._emscripten_bind_b2DistanceJointDef_get_userData_0=function(){return(Uk=a._emscripten_bind_b2DistanceJointDef_get_userData_0=
a.asm.Zi).apply(null,arguments)},Vk=a._emscripten_bind_b2DistanceJointDef_set_userData_1=function(){return(Vk=a._emscripten_bind_b2DistanceJointDef_set_userData_1=a.asm._i).apply(null,arguments)},Wk=a._emscripten_bind_b2DistanceJointDef_get_bodyA_0=function(){return(Wk=a._emscripten_bind_b2DistanceJointDef_get_bodyA_0=a.asm.$i).apply(null,arguments)},Xk=a._emscripten_bind_b2DistanceJointDef_set_bodyA_1=function(){return(Xk=a._emscripten_bind_b2DistanceJointDef_set_bodyA_1=a.asm.aj).apply(null,arguments)},
Yk=a._emscripten_bind_b2DistanceJointDef_get_bodyB_0=function(){return(Yk=a._emscripten_bind_b2DistanceJointDef_get_bodyB_0=a.asm.bj).apply(null,arguments)},Zk=a._emscripten_bind_b2DistanceJointDef_set_bodyB_1=function(){return(Zk=a._emscripten_bind_b2DistanceJointDef_set_bodyB_1=a.asm.cj).apply(null,arguments)},$k=a._emscripten_bind_b2DistanceJointDef_get_collideConnected_0=function(){return($k=a._emscripten_bind_b2DistanceJointDef_get_collideConnected_0=a.asm.dj).apply(null,arguments)},al=a._emscripten_bind_b2DistanceJointDef_set_collideConnected_1=
function(){return(al=a._emscripten_bind_b2DistanceJointDef_set_collideConnected_1=a.asm.ej).apply(null,arguments)},bl=a._emscripten_bind_b2DistanceJointDef___destroy___0=function(){return(bl=a._emscripten_bind_b2DistanceJointDef___destroy___0=a.asm.fj).apply(null,arguments)},cl=a._emscripten_bind_JSDraw_JSDraw_0=function(){return(cl=a._emscripten_bind_JSDraw_JSDraw_0=a.asm.gj).apply(null,arguments)},dl=a._emscripten_bind_JSDraw_DrawPolygon_3=function(){return(dl=a._emscripten_bind_JSDraw_DrawPolygon_3=
a.asm.hj).apply(null,arguments)},el=a._emscripten_bind_JSDraw_DrawSolidPolygon_3=function(){return(el=a._emscripten_bind_JSDraw_DrawSolidPolygon_3=a.asm.ij).apply(null,arguments)},fl=a._emscripten_bind_JSDraw_DrawCircle_3=function(){return(fl=a._emscripten_bind_JSDraw_DrawCircle_3=a.asm.jj).apply(null,arguments)},gl=a._emscripten_bind_JSDraw_DrawSolidCircle_4=function(){return(gl=a._emscripten_bind_JSDraw_DrawSolidCircle_4=a.asm.kj).apply(null,arguments)},hl=a._emscripten_bind_JSDraw_DrawSegment_3=
function(){return(hl=a._emscripten_bind_JSDraw_DrawSegment_3=a.asm.lj).apply(null,arguments)},il=a._emscripten_bind_JSDraw_DrawTransform_1=function(){return(il=a._emscripten_bind_JSDraw_DrawTransform_1=a.asm.mj).apply(null,arguments)},jl=a._emscripten_bind_JSDraw_DrawPoint_3=function(){return(jl=a._emscripten_bind_JSDraw_DrawPoint_3=a.asm.nj).apply(null,arguments)},kl=a._emscripten_bind_JSDraw___destroy___0=function(){return(kl=a._emscripten_bind_JSDraw___destroy___0=a.asm.oj).apply(null,arguments)},
ll=a._emscripten_bind_b2FrictionJoint_GetLocalAnchorA_0=function(){return(ll=a._emscripten_bind_b2FrictionJoint_GetLocalAnchorA_0=a.asm.pj).apply(null,arguments)},ml=a._emscripten_bind_b2FrictionJoint_GetLocalAnchorB_0=function(){return(ml=a._emscripten_bind_b2FrictionJoint_GetLocalAnchorB_0=a.asm.qj).apply(null,arguments)},nl=a._emscripten_bind_b2FrictionJoint_SetMaxForce_1=function(){return(nl=a._emscripten_bind_b2FrictionJoint_SetMaxForce_1=a.asm.rj).apply(null,arguments)},ol=a._emscripten_bind_b2FrictionJoint_GetMaxForce_0=
function(){return(ol=a._emscripten_bind_b2FrictionJoint_GetMaxForce_0=a.asm.sj).apply(null,arguments)},pl=a._emscripten_bind_b2FrictionJoint_SetMaxTorque_1=function(){return(pl=a._emscripten_bind_b2FrictionJoint_SetMaxTorque_1=a.asm.tj).apply(null,arguments)},ql=a._emscripten_bind_b2FrictionJoint_GetMaxTorque_0=function(){return(ql=a._emscripten_bind_b2FrictionJoint_GetMaxTorque_0=a.asm.uj).apply(null,arguments)},rl=a._emscripten_bind_b2FrictionJoint_GetType_0=function(){return(rl=a._emscripten_bind_b2FrictionJoint_GetType_0=
a.asm.vj).apply(null,arguments)},sl=a._emscripten_bind_b2FrictionJoint_GetBodyA_0=function(){return(sl=a._emscripten_bind_b2FrictionJoint_GetBodyA_0=a.asm.wj).apply(null,arguments)},tl=a._emscripten_bind_b2FrictionJoint_GetBodyB_0=function(){return(tl=a._emscripten_bind_b2FrictionJoint_GetBodyB_0=a.asm.xj).apply(null,arguments)},ul=a._emscripten_bind_b2FrictionJoint_GetAnchorA_0=function(){return(ul=a._emscripten_bind_b2FrictionJoint_GetAnchorA_0=a.asm.yj).apply(null,arguments)},vl=a._emscripten_bind_b2FrictionJoint_GetAnchorB_0=
function(){return(vl=a._emscripten_bind_b2FrictionJoint_GetAnchorB_0=a.asm.zj).apply(null,arguments)},wl=a._emscripten_bind_b2FrictionJoint_GetReactionForce_1=function(){return(wl=a._emscripten_bind_b2FrictionJoint_GetReactionForce_1=a.asm.Aj).apply(null,arguments)},xl=a._emscripten_bind_b2FrictionJoint_GetReactionTorque_1=function(){return(xl=a._emscripten_bind_b2FrictionJoint_GetReactionTorque_1=a.asm.Bj).apply(null,arguments)},yl=a._emscripten_bind_b2FrictionJoint_GetNext_0=function(){return(yl=
a._emscripten_bind_b2FrictionJoint_GetNext_0=a.asm.Cj).apply(null,arguments)},zl=a._emscripten_bind_b2FrictionJoint_GetUserData_0=function(){return(zl=a._emscripten_bind_b2FrictionJoint_GetUserData_0=a.asm.Dj).apply(null,arguments)},Al=a._emscripten_bind_b2FrictionJoint_GetCollideConnected_0=function(){return(Al=a._emscripten_bind_b2FrictionJoint_GetCollideConnected_0=a.asm.Ej).apply(null,arguments)},Bl=a._emscripten_bind_b2FrictionJoint___destroy___0=function(){return(Bl=a._emscripten_bind_b2FrictionJoint___destroy___0=
a.asm.Fj).apply(null,arguments)},Cl=a._emscripten_bind_b2FrictionJointDef_b2FrictionJointDef_0=function(){return(Cl=a._emscripten_bind_b2FrictionJointDef_b2FrictionJointDef_0=a.asm.Gj).apply(null,arguments)},Dl=a._emscripten_bind_b2FrictionJointDef_Initialize_3=function(){return(Dl=a._emscripten_bind_b2FrictionJointDef_Initialize_3=a.asm.Hj).apply(null,arguments)},El=a._emscripten_bind_b2FrictionJointDef_get_localAnchorA_0=function(){return(El=a._emscripten_bind_b2FrictionJointDef_get_localAnchorA_0=
a.asm.Ij).apply(null,arguments)},Fl=a._emscripten_bind_b2FrictionJointDef_set_localAnchorA_1=function(){return(Fl=a._emscripten_bind_b2FrictionJointDef_set_localAnchorA_1=a.asm.Jj).apply(null,arguments)},Gl=a._emscripten_bind_b2FrictionJointDef_get_localAnchorB_0=function(){return(Gl=a._emscripten_bind_b2FrictionJointDef_get_localAnchorB_0=a.asm.Kj).apply(null,arguments)},Hl=a._emscripten_bind_b2FrictionJointDef_set_localAnchorB_1=function(){return(Hl=a._emscripten_bind_b2FrictionJointDef_set_localAnchorB_1=
a.asm.Lj).apply(null,arguments)},Il=a._emscripten_bind_b2FrictionJointDef_get_maxForce_0=function(){return(Il=a._emscripten_bind_b2FrictionJointDef_get_maxForce_0=a.asm.Mj).apply(null,arguments)},Jl=a._emscripten_bind_b2FrictionJointDef_set_maxForce_1=function(){return(Jl=a._emscripten_bind_b2FrictionJointDef_set_maxForce_1=a.asm.Nj).apply(null,arguments)},Kl=a._emscripten_bind_b2FrictionJointDef_get_maxTorque_0=function(){return(Kl=a._emscripten_bind_b2FrictionJointDef_get_maxTorque_0=a.asm.Oj).apply(null,
arguments)},Ll=a._emscripten_bind_b2FrictionJointDef_set_maxTorque_1=function(){return(Ll=a._emscripten_bind_b2FrictionJointDef_set_maxTorque_1=a.asm.Pj).apply(null,arguments)},Ml=a._emscripten_bind_b2FrictionJointDef_get_type_0=function(){return(Ml=a._emscripten_bind_b2FrictionJointDef_get_type_0=a.asm.Qj).apply(null,arguments)},Nl=a._emscripten_bind_b2FrictionJointDef_set_type_1=function(){return(Nl=a._emscripten_bind_b2FrictionJointDef_set_type_1=a.asm.Rj).apply(null,arguments)},Ol=a._emscripten_bind_b2FrictionJointDef_get_userData_0=
function(){return(Ol=a._emscripten_bind_b2FrictionJointDef_get_userData_0=a.asm.Sj).apply(null,arguments)},Pl=a._emscripten_bind_b2FrictionJointDef_set_userData_1=function(){return(Pl=a._emscripten_bind_b2FrictionJointDef_set_userData_1=a.asm.Tj).apply(null,arguments)},Ql=a._emscripten_bind_b2FrictionJointDef_get_bodyA_0=function(){return(Ql=a._emscripten_bind_b2FrictionJointDef_get_bodyA_0=a.asm.Uj).apply(null,arguments)},Rl=a._emscripten_bind_b2FrictionJointDef_set_bodyA_1=function(){return(Rl=
a._emscripten_bind_b2FrictionJointDef_set_bodyA_1=a.asm.Vj).apply(null,arguments)},Sl=a._emscripten_bind_b2FrictionJointDef_get_bodyB_0=function(){return(Sl=a._emscripten_bind_b2FrictionJointDef_get_bodyB_0=a.asm.Wj).apply(null,arguments)},Tl=a._emscripten_bind_b2FrictionJointDef_set_bodyB_1=function(){return(Tl=a._emscripten_bind_b2FrictionJointDef_set_bodyB_1=a.asm.Xj).apply(null,arguments)},Ul=a._emscripten_bind_b2FrictionJointDef_get_collideConnected_0=function(){return(Ul=a._emscripten_bind_b2FrictionJointDef_get_collideConnected_0=
a.asm.Yj).apply(null,arguments)},Vl=a._emscripten_bind_b2FrictionJointDef_set_collideConnected_1=function(){return(Vl=a._emscripten_bind_b2FrictionJointDef_set_collideConnected_1=a.asm.Zj).apply(null,arguments)},Wl=a._emscripten_bind_b2FrictionJointDef___destroy___0=function(){return(Wl=a._emscripten_bind_b2FrictionJointDef___destroy___0=a.asm._j).apply(null,arguments)},Xl=a._emscripten_bind_b2GearJoint_GetJoint1_0=function(){return(Xl=a._emscripten_bind_b2GearJoint_GetJoint1_0=a.asm.$j).apply(null,
arguments)},Yl=a._emscripten_bind_b2GearJoint_GetJoint2_0=function(){return(Yl=a._emscripten_bind_b2GearJoint_GetJoint2_0=a.asm.ak).apply(null,arguments)},Zl=a._emscripten_bind_b2GearJoint_SetRatio_1=function(){return(Zl=a._emscripten_bind_b2GearJoint_SetRatio_1=a.asm.bk).apply(null,arguments)},$l=a._emscripten_bind_b2GearJoint_GetRatio_0=function(){return($l=a._emscripten_bind_b2GearJoint_GetRatio_0=a.asm.ck).apply(null,arguments)},am=a._emscripten_bind_b2GearJoint_GetType_0=function(){return(am=
a._emscripten_bind_b2GearJoint_GetType_0=a.asm.dk).apply(null,arguments)},bm=a._emscripten_bind_b2GearJoint_GetBodyA_0=function(){return(bm=a._emscripten_bind_b2GearJoint_GetBodyA_0=a.asm.ek).apply(null,arguments)},cm=a._emscripten_bind_b2GearJoint_GetBodyB_0=function(){return(cm=a._emscripten_bind_b2GearJoint_GetBodyB_0=a.asm.fk).apply(null,arguments)},dm=a._emscripten_bind_b2GearJoint_GetAnchorA_0=function(){return(dm=a._emscripten_bind_b2GearJoint_GetAnchorA_0=a.asm.gk).apply(null,arguments)},
em=a._emscripten_bind_b2GearJoint_GetAnchorB_0=function(){return(em=a._emscripten_bind_b2GearJoint_GetAnchorB_0=a.asm.hk).apply(null,arguments)},fm=a._emscripten_bind_b2GearJoint_GetReactionForce_1=function(){return(fm=a._emscripten_bind_b2GearJoint_GetReactionForce_1=a.asm.ik).apply(null,arguments)},gm=a._emscripten_bind_b2GearJoint_GetReactionTorque_1=function(){return(gm=a._emscripten_bind_b2GearJoint_GetReactionTorque_1=a.asm.jk).apply(null,arguments)},hm=a._emscripten_bind_b2GearJoint_GetNext_0=
function(){return(hm=a._emscripten_bind_b2GearJoint_GetNext_0=a.asm.kk).apply(null,arguments)},im=a._emscripten_bind_b2GearJoint_GetUserData_0=function(){return(im=a._emscripten_bind_b2GearJoint_GetUserData_0=a.asm.lk).apply(null,arguments)},jm=a._emscripten_bind_b2GearJoint_GetCollideConnected_0=function(){return(jm=a._emscripten_bind_b2GearJoint_GetCollideConnected_0=a.asm.mk).apply(null,arguments)},km=a._emscripten_bind_b2GearJoint___destroy___0=function(){return(km=a._emscripten_bind_b2GearJoint___destroy___0=
a.asm.nk).apply(null,arguments)},lm=a._emscripten_bind_b2GearJointDef_b2GearJointDef_0=function(){return(lm=a._emscripten_bind_b2GearJointDef_b2GearJointDef_0=a.asm.ok).apply(null,arguments)},mm=a._emscripten_bind_b2GearJointDef_get_joint1_0=function(){return(mm=a._emscripten_bind_b2GearJointDef_get_joint1_0=a.asm.pk).apply(null,arguments)},nm=a._emscripten_bind_b2GearJointDef_set_joint1_1=function(){return(nm=a._emscripten_bind_b2GearJointDef_set_joint1_1=a.asm.qk).apply(null,arguments)},om=a._emscripten_bind_b2GearJointDef_get_joint2_0=
function(){return(om=a._emscripten_bind_b2GearJointDef_get_joint2_0=a.asm.rk).apply(null,arguments)},pm=a._emscripten_bind_b2GearJointDef_set_joint2_1=function(){return(pm=a._emscripten_bind_b2GearJointDef_set_joint2_1=a.asm.sk).apply(null,arguments)},qm=a._emscripten_bind_b2GearJointDef_get_ratio_0=function(){return(qm=a._emscripten_bind_b2GearJointDef_get_ratio_0=a.asm.tk).apply(null,arguments)},rm=a._emscripten_bind_b2GearJointDef_set_ratio_1=function(){return(rm=a._emscripten_bind_b2GearJointDef_set_ratio_1=
a.asm.uk).apply(null,arguments)},sm=a._emscripten_bind_b2GearJointDef_get_type_0=function(){return(sm=a._emscripten_bind_b2GearJointDef_get_type_0=a.asm.vk).apply(null,arguments)},tm=a._emscripten_bind_b2GearJointDef_set_type_1=function(){return(tm=a._emscripten_bind_b2GearJointDef_set_type_1=a.asm.wk).apply(null,arguments)},um=a._emscripten_bind_b2GearJointDef_get_userData_0=function(){return(um=a._emscripten_bind_b2GearJointDef_get_userData_0=a.asm.xk).apply(null,arguments)},wm=a._emscripten_bind_b2GearJointDef_set_userData_1=
function(){return(wm=a._emscripten_bind_b2GearJointDef_set_userData_1=a.asm.yk).apply(null,arguments)},xm=a._emscripten_bind_b2GearJointDef_get_bodyA_0=function(){return(xm=a._emscripten_bind_b2GearJointDef_get_bodyA_0=a.asm.zk).apply(null,arguments)},ym=a._emscripten_bind_b2GearJointDef_set_bodyA_1=function(){return(ym=a._emscripten_bind_b2GearJointDef_set_bodyA_1=a.asm.Ak).apply(null,arguments)},zm=a._emscripten_bind_b2GearJointDef_get_bodyB_0=function(){return(zm=a._emscripten_bind_b2GearJointDef_get_bodyB_0=
a.asm.Bk).apply(null,arguments)},Am=a._emscripten_bind_b2GearJointDef_set_bodyB_1=function(){return(Am=a._emscripten_bind_b2GearJointDef_set_bodyB_1=a.asm.Ck).apply(null,arguments)},Bm=a._emscripten_bind_b2GearJointDef_get_collideConnected_0=function(){return(Bm=a._emscripten_bind_b2GearJointDef_get_collideConnected_0=a.asm.Dk).apply(null,arguments)},Cm=a._emscripten_bind_b2GearJointDef_set_collideConnected_1=function(){return(Cm=a._emscripten_bind_b2GearJointDef_set_collideConnected_1=a.asm.Ek).apply(null,
arguments)},Dm=a._emscripten_bind_b2GearJointDef___destroy___0=function(){return(Dm=a._emscripten_bind_b2GearJointDef___destroy___0=a.asm.Fk).apply(null,arguments)},Em=a._emscripten_bind_b2JointEdge_b2JointEdge_0=function(){return(Em=a._emscripten_bind_b2JointEdge_b2JointEdge_0=a.asm.Gk).apply(null,arguments)},Fm=a._emscripten_bind_b2JointEdge_get_other_0=function(){return(Fm=a._emscripten_bind_b2JointEdge_get_other_0=a.asm.Hk).apply(null,arguments)},Gm=a._emscripten_bind_b2JointEdge_set_other_1=
function(){return(Gm=a._emscripten_bind_b2JointEdge_set_other_1=a.asm.Ik).apply(null,arguments)},Hm=a._emscripten_bind_b2JointEdge_get_joint_0=function(){return(Hm=a._emscripten_bind_b2JointEdge_get_joint_0=a.asm.Jk).apply(null,arguments)},Im=a._emscripten_bind_b2JointEdge_set_joint_1=function(){return(Im=a._emscripten_bind_b2JointEdge_set_joint_1=a.asm.Kk).apply(null,arguments)},Jm=a._emscripten_bind_b2JointEdge_get_prev_0=function(){return(Jm=a._emscripten_bind_b2JointEdge_get_prev_0=a.asm.Lk).apply(null,
arguments)},Km=a._emscripten_bind_b2JointEdge_set_prev_1=function(){return(Km=a._emscripten_bind_b2JointEdge_set_prev_1=a.asm.Mk).apply(null,arguments)},Lm=a._emscripten_bind_b2JointEdge_get_next_0=function(){return(Lm=a._emscripten_bind_b2JointEdge_get_next_0=a.asm.Nk).apply(null,arguments)},Mm=a._emscripten_bind_b2JointEdge_set_next_1=function(){return(Mm=a._emscripten_bind_b2JointEdge_set_next_1=a.asm.Ok).apply(null,arguments)},Nm=a._emscripten_bind_b2JointEdge___destroy___0=function(){return(Nm=
a._emscripten_bind_b2JointEdge___destroy___0=a.asm.Pk).apply(null,arguments)},Om=a._emscripten_bind_b2Manifold_b2Manifold_0=function(){return(Om=a._emscripten_bind_b2Manifold_b2Manifold_0=a.asm.Qk).apply(null,arguments)},Pm=a._emscripten_bind_b2Manifold_get_points_1=function(){return(Pm=a._emscripten_bind_b2Manifold_get_points_1=a.asm.Rk).apply(null,arguments)},Qm=a._emscripten_bind_b2Manifold_set_points_2=function(){return(Qm=a._emscripten_bind_b2Manifold_set_points_2=a.asm.Sk).apply(null,arguments)},
Rm=a._emscripten_bind_b2Manifold_get_localNormal_0=function(){return(Rm=a._emscripten_bind_b2Manifold_get_localNormal_0=a.asm.Tk).apply(null,arguments)},Sm=a._emscripten_bind_b2Manifold_set_localNormal_1=function(){return(Sm=a._emscripten_bind_b2Manifold_set_localNormal_1=a.asm.Uk).apply(null,arguments)},Tm=a._emscripten_bind_b2Manifold_get_localPoint_0=function(){return(Tm=a._emscripten_bind_b2Manifold_get_localPoint_0=a.asm.Vk).apply(null,arguments)},Um=a._emscripten_bind_b2Manifold_set_localPoint_1=
function(){return(Um=a._emscripten_bind_b2Manifold_set_localPoint_1=a.asm.Wk).apply(null,arguments)},Vm=a._emscripten_bind_b2Manifold_get_type_0=function(){return(Vm=a._emscripten_bind_b2Manifold_get_type_0=a.asm.Xk).apply(null,arguments)},Wm=a._emscripten_bind_b2Manifold_set_type_1=function(){return(Wm=a._emscripten_bind_b2Manifold_set_type_1=a.asm.Yk).apply(null,arguments)},Xm=a._emscripten_bind_b2Manifold_get_pointCount_0=function(){return(Xm=a._emscripten_bind_b2Manifold_get_pointCount_0=a.asm.Zk).apply(null,
arguments)},Ym=a._emscripten_bind_b2Manifold_set_pointCount_1=function(){return(Ym=a._emscripten_bind_b2Manifold_set_pointCount_1=a.asm._k).apply(null,arguments)},Zm=a._emscripten_bind_b2Manifold___destroy___0=function(){return(Zm=a._emscripten_bind_b2Manifold___destroy___0=a.asm.$k).apply(null,arguments)},$m=a._emscripten_bind_b2WorldManifold_b2WorldManifold_0=function(){return($m=a._emscripten_bind_b2WorldManifold_b2WorldManifold_0=a.asm.al).apply(null,arguments)},an=a._emscripten_bind_b2WorldManifold_Initialize_5=
function(){return(an=a._emscripten_bind_b2WorldManifold_Initialize_5=a.asm.bl).apply(null,arguments)},bn=a._emscripten_bind_b2WorldManifold_get_normal_0=function(){return(bn=a._emscripten_bind_b2WorldManifold_get_normal_0=a.asm.cl).apply(null,arguments)},cn=a._emscripten_bind_b2WorldManifold_set_normal_1=function(){return(cn=a._emscripten_bind_b2WorldManifold_set_normal_1=a.asm.dl).apply(null,arguments)},dn=a._emscripten_bind_b2WorldManifold_get_points_1=function(){return(dn=a._emscripten_bind_b2WorldManifold_get_points_1=
a.asm.el).apply(null,arguments)},en=a._emscripten_bind_b2WorldManifold_set_points_2=function(){return(en=a._emscripten_bind_b2WorldManifold_set_points_2=a.asm.fl).apply(null,arguments)},fn=a._emscripten_bind_b2WorldManifold_get_separations_1=function(){return(fn=a._emscripten_bind_b2WorldManifold_get_separations_1=a.asm.gl).apply(null,arguments)},gn=a._emscripten_bind_b2WorldManifold_set_separations_2=function(){return(gn=a._emscripten_bind_b2WorldManifold_set_separations_2=a.asm.hl).apply(null,arguments)},
hn=a._emscripten_bind_b2WorldManifold___destroy___0=function(){return(hn=a._emscripten_bind_b2WorldManifold___destroy___0=a.asm.il).apply(null,arguments)},jn=a._emscripten_bind_b2ManifoldPoint_b2ManifoldPoint_0=function(){return(jn=a._emscripten_bind_b2ManifoldPoint_b2ManifoldPoint_0=a.asm.jl).apply(null,arguments)},kn=a._emscripten_bind_b2ManifoldPoint_get_localPoint_0=function(){return(kn=a._emscripten_bind_b2ManifoldPoint_get_localPoint_0=a.asm.kl).apply(null,arguments)},ln=a._emscripten_bind_b2ManifoldPoint_set_localPoint_1=
function(){return(ln=a._emscripten_bind_b2ManifoldPoint_set_localPoint_1=a.asm.ll).apply(null,arguments)},mn=a._emscripten_bind_b2ManifoldPoint_get_normalImpulse_0=function(){return(mn=a._emscripten_bind_b2ManifoldPoint_get_normalImpulse_0=a.asm.ml).apply(null,arguments)},nn=a._emscripten_bind_b2ManifoldPoint_set_normalImpulse_1=function(){return(nn=a._emscripten_bind_b2ManifoldPoint_set_normalImpulse_1=a.asm.nl).apply(null,arguments)},on=a._emscripten_bind_b2ManifoldPoint_get_tangentImpulse_0=function(){return(on=
a._emscripten_bind_b2ManifoldPoint_get_tangentImpulse_0=a.asm.ol).apply(null,arguments)},pn=a._emscripten_bind_b2ManifoldPoint_set_tangentImpulse_1=function(){return(pn=a._emscripten_bind_b2ManifoldPoint_set_tangentImpulse_1=a.asm.pl).apply(null,arguments)},qn=a._emscripten_bind_b2ManifoldPoint_get_id_0=function(){return(qn=a._emscripten_bind_b2ManifoldPoint_get_id_0=a.asm.ql).apply(null,arguments)},rn=a._emscripten_bind_b2ManifoldPoint_set_id_1=function(){return(rn=a._emscripten_bind_b2ManifoldPoint_set_id_1=
a.asm.rl).apply(null,arguments)},sn=a._emscripten_bind_b2ManifoldPoint___destroy___0=function(){return(sn=a._emscripten_bind_b2ManifoldPoint___destroy___0=a.asm.sl).apply(null,arguments)},tn=a._emscripten_bind_b2Mat22_b2Mat22_0=function(){return(tn=a._emscripten_bind_b2Mat22_b2Mat22_0=a.asm.tl).apply(null,arguments)},un=a._emscripten_bind_b2Mat22_b2Mat22_2=function(){return(un=a._emscripten_bind_b2Mat22_b2Mat22_2=a.asm.ul).apply(null,arguments)},vn=a._emscripten_bind_b2Mat22_b2Mat22_4=function(){return(vn=
a._emscripten_bind_b2Mat22_b2Mat22_4=a.asm.vl).apply(null,arguments)},wn=a._emscripten_bind_b2Mat22_Set_2=function(){return(wn=a._emscripten_bind_b2Mat22_Set_2=a.asm.wl).apply(null,arguments)},xn=a._emscripten_bind_b2Mat22_SetIdentity_0=function(){return(xn=a._emscripten_bind_b2Mat22_SetIdentity_0=a.asm.xl).apply(null,arguments)},yn=a._emscripten_bind_b2Mat22_SetZero_0=function(){return(yn=a._emscripten_bind_b2Mat22_SetZero_0=a.asm.yl).apply(null,arguments)},zn=a._emscripten_bind_b2Mat22_GetInverse_0=
function(){return(zn=a._emscripten_bind_b2Mat22_GetInverse_0=a.asm.zl).apply(null,arguments)},An=a._emscripten_bind_b2Mat22_Solve_1=function(){return(An=a._emscripten_bind_b2Mat22_Solve_1=a.asm.Al).apply(null,arguments)},Bn=a._emscripten_bind_b2Mat22_get_ex_0=function(){return(Bn=a._emscripten_bind_b2Mat22_get_ex_0=a.asm.Bl).apply(null,arguments)},Cn=a._emscripten_bind_b2Mat22_set_ex_1=function(){return(Cn=a._emscripten_bind_b2Mat22_set_ex_1=a.asm.Cl).apply(null,arguments)},Dn=a._emscripten_bind_b2Mat22_get_ey_0=
function(){return(Dn=a._emscripten_bind_b2Mat22_get_ey_0=a.asm.Dl).apply(null,arguments)},En=a._emscripten_bind_b2Mat22_set_ey_1=function(){return(En=a._emscripten_bind_b2Mat22_set_ey_1=a.asm.El).apply(null,arguments)},Fn=a._emscripten_bind_b2Mat22___destroy___0=function(){return(Fn=a._emscripten_bind_b2Mat22___destroy___0=a.asm.Fl).apply(null,arguments)},Gn=a._emscripten_bind_b2Mat33_b2Mat33_0=function(){return(Gn=a._emscripten_bind_b2Mat33_b2Mat33_0=a.asm.Gl).apply(null,arguments)},Hn=a._emscripten_bind_b2Mat33_b2Mat33_3=
function(){return(Hn=a._emscripten_bind_b2Mat33_b2Mat33_3=a.asm.Hl).apply(null,arguments)},In=a._emscripten_bind_b2Mat33_SetZero_0=function(){return(In=a._emscripten_bind_b2Mat33_SetZero_0=a.asm.Il).apply(null,arguments)},Jn=a._emscripten_bind_b2Mat33_Solve33_1=function(){return(Jn=a._emscripten_bind_b2Mat33_Solve33_1=a.asm.Jl).apply(null,arguments)},Kn=a._emscripten_bind_b2Mat33_Solve22_1=function(){return(Kn=a._emscripten_bind_b2Mat33_Solve22_1=a.asm.Kl).apply(null,arguments)},Ln=a._emscripten_bind_b2Mat33_GetInverse22_1=
function(){return(Ln=a._emscripten_bind_b2Mat33_GetInverse22_1=a.asm.Ll).apply(null,arguments)},Mn=a._emscripten_bind_b2Mat33_GetSymInverse33_1=function(){return(Mn=a._emscripten_bind_b2Mat33_GetSymInverse33_1=a.asm.Ml).apply(null,arguments)},Nn=a._emscripten_bind_b2Mat33_get_ex_0=function(){return(Nn=a._emscripten_bind_b2Mat33_get_ex_0=a.asm.Nl).apply(null,arguments)},On=a._emscripten_bind_b2Mat33_set_ex_1=function(){return(On=a._emscripten_bind_b2Mat33_set_ex_1=a.asm.Ol).apply(null,arguments)},
Pn=a._emscripten_bind_b2Mat33_get_ey_0=function(){return(Pn=a._emscripten_bind_b2Mat33_get_ey_0=a.asm.Pl).apply(null,arguments)},Qn=a._emscripten_bind_b2Mat33_set_ey_1=function(){return(Qn=a._emscripten_bind_b2Mat33_set_ey_1=a.asm.Ql).apply(null,arguments)},Rn=a._emscripten_bind_b2Mat33_get_ez_0=function(){return(Rn=a._emscripten_bind_b2Mat33_get_ez_0=a.asm.Rl).apply(null,arguments)},Sn=a._emscripten_bind_b2Mat33_set_ez_1=function(){return(Sn=a._emscripten_bind_b2Mat33_set_ez_1=a.asm.Sl).apply(null,
arguments)},Tn=a._emscripten_bind_b2Mat33___destroy___0=function(){return(Tn=a._emscripten_bind_b2Mat33___destroy___0=a.asm.Tl).apply(null,arguments)},Un=a._emscripten_bind_b2MouseJoint_SetTarget_1=function(){return(Un=a._emscripten_bind_b2MouseJoint_SetTarget_1=a.asm.Ul).apply(null,arguments)},Vn=a._emscripten_bind_b2MouseJoint_GetTarget_0=function(){return(Vn=a._emscripten_bind_b2MouseJoint_GetTarget_0=a.asm.Vl).apply(null,arguments)},Wn=a._emscripten_bind_b2MouseJoint_SetMaxForce_1=function(){return(Wn=
a._emscripten_bind_b2MouseJoint_SetMaxForce_1=a.asm.Wl).apply(null,arguments)},Xn=a._emscripten_bind_b2MouseJoint_GetMaxForce_0=function(){return(Xn=a._emscripten_bind_b2MouseJoint_GetMaxForce_0=a.asm.Xl).apply(null,arguments)},Yn=a._emscripten_bind_b2MouseJoint_SetStiffness_1=function(){return(Yn=a._emscripten_bind_b2MouseJoint_SetStiffness_1=a.asm.Yl).apply(null,arguments)},Zn=a._emscripten_bind_b2MouseJoint_GetStiffness_0=function(){return(Zn=a._emscripten_bind_b2MouseJoint_GetStiffness_0=a.asm.Zl).apply(null,
arguments)},$n=a._emscripten_bind_b2MouseJoint_SetDamping_1=function(){return($n=a._emscripten_bind_b2MouseJoint_SetDamping_1=a.asm._l).apply(null,arguments)},ao=a._emscripten_bind_b2MouseJoint_GetDamping_0=function(){return(ao=a._emscripten_bind_b2MouseJoint_GetDamping_0=a.asm.$l).apply(null,arguments)},bo=a._emscripten_bind_b2MouseJoint_GetType_0=function(){return(bo=a._emscripten_bind_b2MouseJoint_GetType_0=a.asm.am).apply(null,arguments)},co=a._emscripten_bind_b2MouseJoint_GetBodyA_0=function(){return(co=
a._emscripten_bind_b2MouseJoint_GetBodyA_0=a.asm.bm).apply(null,arguments)},eo=a._emscripten_bind_b2MouseJoint_GetBodyB_0=function(){return(eo=a._emscripten_bind_b2MouseJoint_GetBodyB_0=a.asm.cm).apply(null,arguments)},fo=a._emscripten_bind_b2MouseJoint_GetAnchorA_0=function(){return(fo=a._emscripten_bind_b2MouseJoint_GetAnchorA_0=a.asm.dm).apply(null,arguments)},go=a._emscripten_bind_b2MouseJoint_GetAnchorB_0=function(){return(go=a._emscripten_bind_b2MouseJoint_GetAnchorB_0=a.asm.em).apply(null,
arguments)},ho=a._emscripten_bind_b2MouseJoint_GetReactionForce_1=function(){return(ho=a._emscripten_bind_b2MouseJoint_GetReactionForce_1=a.asm.fm).apply(null,arguments)},io=a._emscripten_bind_b2MouseJoint_GetReactionTorque_1=function(){return(io=a._emscripten_bind_b2MouseJoint_GetReactionTorque_1=a.asm.gm).apply(null,arguments)},jo=a._emscripten_bind_b2MouseJoint_GetNext_0=function(){return(jo=a._emscripten_bind_b2MouseJoint_GetNext_0=a.asm.hm).apply(null,arguments)},ko=a._emscripten_bind_b2MouseJoint_GetUserData_0=
function(){return(ko=a._emscripten_bind_b2MouseJoint_GetUserData_0=a.asm.im).apply(null,arguments)},lo=a._emscripten_bind_b2MouseJoint_GetCollideConnected_0=function(){return(lo=a._emscripten_bind_b2MouseJoint_GetCollideConnected_0=a.asm.jm).apply(null,arguments)},mo=a._emscripten_bind_b2MouseJoint___destroy___0=function(){return(mo=a._emscripten_bind_b2MouseJoint___destroy___0=a.asm.km).apply(null,arguments)},no=a._emscripten_bind_b2MouseJointDef_b2MouseJointDef_0=function(){return(no=a._emscripten_bind_b2MouseJointDef_b2MouseJointDef_0=
a.asm.lm).apply(null,arguments)},oo=a._emscripten_bind_b2MouseJointDef_get_target_0=function(){return(oo=a._emscripten_bind_b2MouseJointDef_get_target_0=a.asm.mm).apply(null,arguments)},po=a._emscripten_bind_b2MouseJointDef_set_target_1=function(){return(po=a._emscripten_bind_b2MouseJointDef_set_target_1=a.asm.nm).apply(null,arguments)},qo=a._emscripten_bind_b2MouseJointDef_get_maxForce_0=function(){return(qo=a._emscripten_bind_b2MouseJointDef_get_maxForce_0=a.asm.om).apply(null,arguments)},ro=a._emscripten_bind_b2MouseJointDef_set_maxForce_1=
function(){return(ro=a._emscripten_bind_b2MouseJointDef_set_maxForce_1=a.asm.pm).apply(null,arguments)},so=a._emscripten_bind_b2MouseJointDef_get_stiffness_0=function(){return(so=a._emscripten_bind_b2MouseJointDef_get_stiffness_0=a.asm.qm).apply(null,arguments)},to=a._emscripten_bind_b2MouseJointDef_set_stiffness_1=function(){return(to=a._emscripten_bind_b2MouseJointDef_set_stiffness_1=a.asm.rm).apply(null,arguments)},uo=a._emscripten_bind_b2MouseJointDef_get_damping_0=function(){return(uo=a._emscripten_bind_b2MouseJointDef_get_damping_0=
a.asm.sm).apply(null,arguments)},vo=a._emscripten_bind_b2MouseJointDef_set_damping_1=function(){return(vo=a._emscripten_bind_b2MouseJointDef_set_damping_1=a.asm.tm).apply(null,arguments)},wo=a._emscripten_bind_b2MouseJointDef_get_type_0=function(){return(wo=a._emscripten_bind_b2MouseJointDef_get_type_0=a.asm.um).apply(null,arguments)},xo=a._emscripten_bind_b2MouseJointDef_set_type_1=function(){return(xo=a._emscripten_bind_b2MouseJointDef_set_type_1=a.asm.vm).apply(null,arguments)},yo=a._emscripten_bind_b2MouseJointDef_get_userData_0=
function(){return(yo=a._emscripten_bind_b2MouseJointDef_get_userData_0=a.asm.wm).apply(null,arguments)},zo=a._emscripten_bind_b2MouseJointDef_set_userData_1=function(){return(zo=a._emscripten_bind_b2MouseJointDef_set_userData_1=a.asm.xm).apply(null,arguments)},Ao=a._emscripten_bind_b2MouseJointDef_get_bodyA_0=function(){return(Ao=a._emscripten_bind_b2MouseJointDef_get_bodyA_0=a.asm.ym).apply(null,arguments)},Bo=a._emscripten_bind_b2MouseJointDef_set_bodyA_1=function(){return(Bo=a._emscripten_bind_b2MouseJointDef_set_bodyA_1=
a.asm.zm).apply(null,arguments)},Co=a._emscripten_bind_b2MouseJointDef_get_bodyB_0=function(){return(Co=a._emscripten_bind_b2MouseJointDef_get_bodyB_0=a.asm.Am).apply(null,arguments)},Do=a._emscripten_bind_b2MouseJointDef_set_bodyB_1=function(){return(Do=a._emscripten_bind_b2MouseJointDef_set_bodyB_1=a.asm.Bm).apply(null,arguments)},Eo=a._emscripten_bind_b2MouseJointDef_get_collideConnected_0=function(){return(Eo=a._emscripten_bind_b2MouseJointDef_get_collideConnected_0=a.asm.Cm).apply(null,arguments)},
Fo=a._emscripten_bind_b2MouseJointDef_set_collideConnected_1=function(){return(Fo=a._emscripten_bind_b2MouseJointDef_set_collideConnected_1=a.asm.Dm).apply(null,arguments)},Go=a._emscripten_bind_b2MouseJointDef___destroy___0=function(){return(Go=a._emscripten_bind_b2MouseJointDef___destroy___0=a.asm.Em).apply(null,arguments)},Ho=a._emscripten_bind_b2PolygonShape_b2PolygonShape_0=function(){return(Ho=a._emscripten_bind_b2PolygonShape_b2PolygonShape_0=a.asm.Fm).apply(null,arguments)},Io=a._emscripten_bind_b2PolygonShape_Set_2=
function(){return(Io=a._emscripten_bind_b2PolygonShape_Set_2=a.asm.Gm).apply(null,arguments)},Jo=a._emscripten_bind_b2PolygonShape_SetAsBox_2=function(){return(Jo=a._emscripten_bind_b2PolygonShape_SetAsBox_2=a.asm.Hm).apply(null,arguments)},Ko=a._emscripten_bind_b2PolygonShape_SetAsBox_4=function(){return(Ko=a._emscripten_bind_b2PolygonShape_SetAsBox_4=a.asm.Im).apply(null,arguments)},Lo=a._emscripten_bind_b2PolygonShape_GetType_0=function(){return(Lo=a._emscripten_bind_b2PolygonShape_GetType_0=a.asm.Jm).apply(null,
arguments)},Mo=a._emscripten_bind_b2PolygonShape_GetChildCount_0=function(){return(Mo=a._emscripten_bind_b2PolygonShape_GetChildCount_0=a.asm.Km).apply(null,arguments)},No=a._emscripten_bind_b2PolygonShape_TestPoint_2=function(){return(No=a._emscripten_bind_b2PolygonShape_TestPoint_2=a.asm.Lm).apply(null,arguments)},Oo=a._emscripten_bind_b2PolygonShape_RayCast_4=function(){return(Oo=a._emscripten_bind_b2PolygonShape_RayCast_4=a.asm.Mm).apply(null,arguments)},Po=a._emscripten_bind_b2PolygonShape_ComputeAABB_3=
function(){return(Po=a._emscripten_bind_b2PolygonShape_ComputeAABB_3=a.asm.Nm).apply(null,arguments)},Qo=a._emscripten_bind_b2PolygonShape_ComputeMass_2=function(){return(Qo=a._emscripten_bind_b2PolygonShape_ComputeMass_2=a.asm.Om).apply(null,arguments)},Ro=a._emscripten_bind_b2PolygonShape_get_m_centroid_0=function(){return(Ro=a._emscripten_bind_b2PolygonShape_get_m_centroid_0=a.asm.Pm).apply(null,arguments)},So=a._emscripten_bind_b2PolygonShape_set_m_centroid_1=function(){return(So=a._emscripten_bind_b2PolygonShape_set_m_centroid_1=
a.asm.Qm).apply(null,arguments)},To=a._emscripten_bind_b2PolygonShape_get_m_vertices_1=function(){return(To=a._emscripten_bind_b2PolygonShape_get_m_vertices_1=a.asm.Rm).apply(null,arguments)},Uo=a._emscripten_bind_b2PolygonShape_set_m_vertices_2=function(){return(Uo=a._emscripten_bind_b2PolygonShape_set_m_vertices_2=a.asm.Sm).apply(null,arguments)},Vo=a._emscripten_bind_b2PolygonShape_get_m_normals_1=function(){return(Vo=a._emscripten_bind_b2PolygonShape_get_m_normals_1=a.asm.Tm).apply(null,arguments)},
Wo=a._emscripten_bind_b2PolygonShape_set_m_normals_2=function(){return(Wo=a._emscripten_bind_b2PolygonShape_set_m_normals_2=a.asm.Um).apply(null,arguments)},Xo=a._emscripten_bind_b2PolygonShape_get_m_count_0=function(){return(Xo=a._emscripten_bind_b2PolygonShape_get_m_count_0=a.asm.Vm).apply(null,arguments)},Yo=a._emscripten_bind_b2PolygonShape_set_m_count_1=function(){return(Yo=a._emscripten_bind_b2PolygonShape_set_m_count_1=a.asm.Wm).apply(null,arguments)},Zo=a._emscripten_bind_b2PolygonShape_get_m_type_0=
function(){return(Zo=a._emscripten_bind_b2PolygonShape_get_m_type_0=a.asm.Xm).apply(null,arguments)},$o=a._emscripten_bind_b2PolygonShape_set_m_type_1=function(){return($o=a._emscripten_bind_b2PolygonShape_set_m_type_1=a.asm.Ym).apply(null,arguments)},ap=a._emscripten_bind_b2PolygonShape_get_m_radius_0=function(){return(ap=a._emscripten_bind_b2PolygonShape_get_m_radius_0=a.asm.Zm).apply(null,arguments)},bp=a._emscripten_bind_b2PolygonShape_set_m_radius_1=function(){return(bp=a._emscripten_bind_b2PolygonShape_set_m_radius_1=
a.asm._m).apply(null,arguments)},cp=a._emscripten_bind_b2PolygonShape___destroy___0=function(){return(cp=a._emscripten_bind_b2PolygonShape___destroy___0=a.asm.$m).apply(null,arguments)},dp=a._emscripten_bind_b2PrismaticJoint_GetLocalAnchorA_0=function(){return(dp=a._emscripten_bind_b2PrismaticJoint_GetLocalAnchorA_0=a.asm.an).apply(null,arguments)},ep=a._emscripten_bind_b2PrismaticJoint_GetLocalAnchorB_0=function(){return(ep=a._emscripten_bind_b2PrismaticJoint_GetLocalAnchorB_0=a.asm.bn).apply(null,
arguments)},fp=a._emscripten_bind_b2PrismaticJoint_GetLocalAxisA_0=function(){return(fp=a._emscripten_bind_b2PrismaticJoint_GetLocalAxisA_0=a.asm.cn).apply(null,arguments)},gp=a._emscripten_bind_b2PrismaticJoint_GetReferenceAngle_0=function(){return(gp=a._emscripten_bind_b2PrismaticJoint_GetReferenceAngle_0=a.asm.dn).apply(null,arguments)},hp=a._emscripten_bind_b2PrismaticJoint_GetJointTranslation_0=function(){return(hp=a._emscripten_bind_b2PrismaticJoint_GetJointTranslation_0=a.asm.en).apply(null,
arguments)},ip=a._emscripten_bind_b2PrismaticJoint_GetJointSpeed_0=function(){return(ip=a._emscripten_bind_b2PrismaticJoint_GetJointSpeed_0=a.asm.fn).apply(null,arguments)},jp=a._emscripten_bind_b2PrismaticJoint_IsLimitEnabled_0=function(){return(jp=a._emscripten_bind_b2PrismaticJoint_IsLimitEnabled_0=a.asm.gn).apply(null,arguments)},kp=a._emscripten_bind_b2PrismaticJoint_EnableLimit_1=function(){return(kp=a._emscripten_bind_b2PrismaticJoint_EnableLimit_1=a.asm.hn).apply(null,arguments)},lp=a._emscripten_bind_b2PrismaticJoint_GetLowerLimit_0=
function(){return(lp=a._emscripten_bind_b2PrismaticJoint_GetLowerLimit_0=a.asm.jn).apply(null,arguments)},mp=a._emscripten_bind_b2PrismaticJoint_GetUpperLimit_0=function(){return(mp=a._emscripten_bind_b2PrismaticJoint_GetUpperLimit_0=a.asm.kn).apply(null,arguments)},np=a._emscripten_bind_b2PrismaticJoint_SetLimits_2=function(){return(np=a._emscripten_bind_b2PrismaticJoint_SetLimits_2=a.asm.ln).apply(null,arguments)},op=a._emscripten_bind_b2PrismaticJoint_IsMotorEnabled_0=function(){return(op=a._emscripten_bind_b2PrismaticJoint_IsMotorEnabled_0=
a.asm.mn).apply(null,arguments)},pp=a._emscripten_bind_b2PrismaticJoint_EnableMotor_1=function(){return(pp=a._emscripten_bind_b2PrismaticJoint_EnableMotor_1=a.asm.nn).apply(null,arguments)},qp=a._emscripten_bind_b2PrismaticJoint_SetMotorSpeed_1=function(){return(qp=a._emscripten_bind_b2PrismaticJoint_SetMotorSpeed_1=a.asm.on).apply(null,arguments)},rp=a._emscripten_bind_b2PrismaticJoint_GetMotorSpeed_0=function(){return(rp=a._emscripten_bind_b2PrismaticJoint_GetMotorSpeed_0=a.asm.pn).apply(null,arguments)},
sp=a._emscripten_bind_b2PrismaticJoint_SetMaxMotorForce_1=function(){return(sp=a._emscripten_bind_b2PrismaticJoint_SetMaxMotorForce_1=a.asm.qn).apply(null,arguments)},tp=a._emscripten_bind_b2PrismaticJoint_GetMaxMotorForce_0=function(){return(tp=a._emscripten_bind_b2PrismaticJoint_GetMaxMotorForce_0=a.asm.rn).apply(null,arguments)},up=a._emscripten_bind_b2PrismaticJoint_GetMotorForce_1=function(){return(up=a._emscripten_bind_b2PrismaticJoint_GetMotorForce_1=a.asm.sn).apply(null,arguments)},vp=a._emscripten_bind_b2PrismaticJoint_GetType_0=
function(){return(vp=a._emscripten_bind_b2PrismaticJoint_GetType_0=a.asm.tn).apply(null,arguments)},wp=a._emscripten_bind_b2PrismaticJoint_GetBodyA_0=function(){return(wp=a._emscripten_bind_b2PrismaticJoint_GetBodyA_0=a.asm.un).apply(null,arguments)},xp=a._emscripten_bind_b2PrismaticJoint_GetBodyB_0=function(){return(xp=a._emscripten_bind_b2PrismaticJoint_GetBodyB_0=a.asm.vn).apply(null,arguments)},yp=a._emscripten_bind_b2PrismaticJoint_GetAnchorA_0=function(){return(yp=a._emscripten_bind_b2PrismaticJoint_GetAnchorA_0=
a.asm.wn).apply(null,arguments)},zp=a._emscripten_bind_b2PrismaticJoint_GetAnchorB_0=function(){return(zp=a._emscripten_bind_b2PrismaticJoint_GetAnchorB_0=a.asm.xn).apply(null,arguments)},Ap=a._emscripten_bind_b2PrismaticJoint_GetReactionForce_1=function(){return(Ap=a._emscripten_bind_b2PrismaticJoint_GetReactionForce_1=a.asm.yn).apply(null,arguments)},Bp=a._emscripten_bind_b2PrismaticJoint_GetReactionTorque_1=function(){return(Bp=a._emscripten_bind_b2PrismaticJoint_GetReactionTorque_1=a.asm.zn).apply(null,
arguments)},Cp=a._emscripten_bind_b2PrismaticJoint_GetNext_0=function(){return(Cp=a._emscripten_bind_b2PrismaticJoint_GetNext_0=a.asm.An).apply(null,arguments)},Dp=a._emscripten_bind_b2PrismaticJoint_GetUserData_0=function(){return(Dp=a._emscripten_bind_b2PrismaticJoint_GetUserData_0=a.asm.Bn).apply(null,arguments)},Ep=a._emscripten_bind_b2PrismaticJoint_GetCollideConnected_0=function(){return(Ep=a._emscripten_bind_b2PrismaticJoint_GetCollideConnected_0=a.asm.Cn).apply(null,arguments)},Fp=a._emscripten_bind_b2PrismaticJoint___destroy___0=
function(){return(Fp=a._emscripten_bind_b2PrismaticJoint___destroy___0=a.asm.Dn).apply(null,arguments)},Gp=a._emscripten_bind_b2PrismaticJointDef_b2PrismaticJointDef_0=function(){return(Gp=a._emscripten_bind_b2PrismaticJointDef_b2PrismaticJointDef_0=a.asm.En).apply(null,arguments)},Hp=a._emscripten_bind_b2PrismaticJointDef_Initialize_4=function(){return(Hp=a._emscripten_bind_b2PrismaticJointDef_Initialize_4=a.asm.Fn).apply(null,arguments)},Ip=a._emscripten_bind_b2PrismaticJointDef_get_localAnchorA_0=
function(){return(Ip=a._emscripten_bind_b2PrismaticJointDef_get_localAnchorA_0=a.asm.Gn).apply(null,arguments)},Jp=a._emscripten_bind_b2PrismaticJointDef_set_localAnchorA_1=function(){return(Jp=a._emscripten_bind_b2PrismaticJointDef_set_localAnchorA_1=a.asm.Hn).apply(null,arguments)},Kp=a._emscripten_bind_b2PrismaticJointDef_get_localAnchorB_0=function(){return(Kp=a._emscripten_bind_b2PrismaticJointDef_get_localAnchorB_0=a.asm.In).apply(null,arguments)},Lp=a._emscripten_bind_b2PrismaticJointDef_set_localAnchorB_1=
function(){return(Lp=a._emscripten_bind_b2PrismaticJointDef_set_localAnchorB_1=a.asm.Jn).apply(null,arguments)},Mp=a._emscripten_bind_b2PrismaticJointDef_get_localAxisA_0=function(){return(Mp=a._emscripten_bind_b2PrismaticJointDef_get_localAxisA_0=a.asm.Kn).apply(null,arguments)},Np=a._emscripten_bind_b2PrismaticJointDef_set_localAxisA_1=function(){return(Np=a._emscripten_bind_b2PrismaticJointDef_set_localAxisA_1=a.asm.Ln).apply(null,arguments)},Op=a._emscripten_bind_b2PrismaticJointDef_get_referenceAngle_0=
function(){return(Op=a._emscripten_bind_b2PrismaticJointDef_get_referenceAngle_0=a.asm.Mn).apply(null,arguments)},Pp=a._emscripten_bind_b2PrismaticJointDef_set_referenceAngle_1=function(){return(Pp=a._emscripten_bind_b2PrismaticJointDef_set_referenceAngle_1=a.asm.Nn).apply(null,arguments)},Qp=a._emscripten_bind_b2PrismaticJointDef_get_enableLimit_0=function(){return(Qp=a._emscripten_bind_b2PrismaticJointDef_get_enableLimit_0=a.asm.On).apply(null,arguments)},Rp=a._emscripten_bind_b2PrismaticJointDef_set_enableLimit_1=
function(){return(Rp=a._emscripten_bind_b2PrismaticJointDef_set_enableLimit_1=a.asm.Pn).apply(null,arguments)},Sp=a._emscripten_bind_b2PrismaticJointDef_get_lowerTranslation_0=function(){return(Sp=a._emscripten_bind_b2PrismaticJointDef_get_lowerTranslation_0=a.asm.Qn).apply(null,arguments)},Tp=a._emscripten_bind_b2PrismaticJointDef_set_lowerTranslation_1=function(){return(Tp=a._emscripten_bind_b2PrismaticJointDef_set_lowerTranslation_1=a.asm.Rn).apply(null,arguments)},Up=a._emscripten_bind_b2PrismaticJointDef_get_upperTranslation_0=
function(){return(Up=a._emscripten_bind_b2PrismaticJointDef_get_upperTranslation_0=a.asm.Sn).apply(null,arguments)},Vp=a._emscripten_bind_b2PrismaticJointDef_set_upperTranslation_1=function(){return(Vp=a._emscripten_bind_b2PrismaticJointDef_set_upperTranslation_1=a.asm.Tn).apply(null,arguments)},Wp=a._emscripten_bind_b2PrismaticJointDef_get_enableMotor_0=function(){return(Wp=a._emscripten_bind_b2PrismaticJointDef_get_enableMotor_0=a.asm.Un).apply(null,arguments)},Xp=a._emscripten_bind_b2PrismaticJointDef_set_enableMotor_1=
function(){return(Xp=a._emscripten_bind_b2PrismaticJointDef_set_enableMotor_1=a.asm.Vn).apply(null,arguments)},Yp=a._emscripten_bind_b2PrismaticJointDef_get_maxMotorForce_0=function(){return(Yp=a._emscripten_bind_b2PrismaticJointDef_get_maxMotorForce_0=a.asm.Wn).apply(null,arguments)},Zp=a._emscripten_bind_b2PrismaticJointDef_set_maxMotorForce_1=function(){return(Zp=a._emscripten_bind_b2PrismaticJointDef_set_maxMotorForce_1=a.asm.Xn).apply(null,arguments)},$p=a._emscripten_bind_b2PrismaticJointDef_get_motorSpeed_0=
function(){return($p=a._emscripten_bind_b2PrismaticJointDef_get_motorSpeed_0=a.asm.Yn).apply(null,arguments)},aq=a._emscripten_bind_b2PrismaticJointDef_set_motorSpeed_1=function(){return(aq=a._emscripten_bind_b2PrismaticJointDef_set_motorSpeed_1=a.asm.Zn).apply(null,arguments)},bq=a._emscripten_bind_b2PrismaticJointDef_get_type_0=function(){return(bq=a._emscripten_bind_b2PrismaticJointDef_get_type_0=a.asm._n).apply(null,arguments)},cq=a._emscripten_bind_b2PrismaticJointDef_set_type_1=function(){return(cq=
a._emscripten_bind_b2PrismaticJointDef_set_type_1=a.asm.$n).apply(null,arguments)},dq=a._emscripten_bind_b2PrismaticJointDef_get_userData_0=function(){return(dq=a._emscripten_bind_b2PrismaticJointDef_get_userData_0=a.asm.ao).apply(null,arguments)},eq=a._emscripten_bind_b2PrismaticJointDef_set_userData_1=function(){return(eq=a._emscripten_bind_b2PrismaticJointDef_set_userData_1=a.asm.bo).apply(null,arguments)},fq=a._emscripten_bind_b2PrismaticJointDef_get_bodyA_0=function(){return(fq=a._emscripten_bind_b2PrismaticJointDef_get_bodyA_0=
a.asm.co).apply(null,arguments)},gq=a._emscripten_bind_b2PrismaticJointDef_set_bodyA_1=function(){return(gq=a._emscripten_bind_b2PrismaticJointDef_set_bodyA_1=a.asm.eo).apply(null,arguments)},hq=a._emscripten_bind_b2PrismaticJointDef_get_bodyB_0=function(){return(hq=a._emscripten_bind_b2PrismaticJointDef_get_bodyB_0=a.asm.fo).apply(null,arguments)},iq=a._emscripten_bind_b2PrismaticJointDef_set_bodyB_1=function(){return(iq=a._emscripten_bind_b2PrismaticJointDef_set_bodyB_1=a.asm.go).apply(null,arguments)},
jq=a._emscripten_bind_b2PrismaticJointDef_get_collideConnected_0=function(){return(jq=a._emscripten_bind_b2PrismaticJointDef_get_collideConnected_0=a.asm.ho).apply(null,arguments)},kq=a._emscripten_bind_b2PrismaticJointDef_set_collideConnected_1=function(){return(kq=a._emscripten_bind_b2PrismaticJointDef_set_collideConnected_1=a.asm.io).apply(null,arguments)},lq=a._emscripten_bind_b2PrismaticJointDef___destroy___0=function(){return(lq=a._emscripten_bind_b2PrismaticJointDef___destroy___0=a.asm.jo).apply(null,
arguments)},mq=a._emscripten_bind_b2Profile_get_step_0=function(){return(mq=a._emscripten_bind_b2Profile_get_step_0=a.asm.ko).apply(null,arguments)},nq=a._emscripten_bind_b2Profile_set_step_1=function(){return(nq=a._emscripten_bind_b2Profile_set_step_1=a.asm.lo).apply(null,arguments)},oq=a._emscripten_bind_b2Profile_get_collide_0=function(){return(oq=a._emscripten_bind_b2Profile_get_collide_0=a.asm.mo).apply(null,arguments)},pq=a._emscripten_bind_b2Profile_set_collide_1=function(){return(pq=a._emscripten_bind_b2Profile_set_collide_1=
a.asm.no).apply(null,arguments)},qq=a._emscripten_bind_b2Profile_get_solve_0=function(){return(qq=a._emscripten_bind_b2Profile_get_solve_0=a.asm.oo).apply(null,arguments)},rq=a._emscripten_bind_b2Profile_set_solve_1=function(){return(rq=a._emscripten_bind_b2Profile_set_solve_1=a.asm.po).apply(null,arguments)},sq=a._emscripten_bind_b2Profile_get_solveInit_0=function(){return(sq=a._emscripten_bind_b2Profile_get_solveInit_0=a.asm.qo).apply(null,arguments)},tq=a._emscripten_bind_b2Profile_set_solveInit_1=
function(){return(tq=a._emscripten_bind_b2Profile_set_solveInit_1=a.asm.ro).apply(null,arguments)},uq=a._emscripten_bind_b2Profile_get_solveVelocity_0=function(){return(uq=a._emscripten_bind_b2Profile_get_solveVelocity_0=a.asm.so).apply(null,arguments)},vq=a._emscripten_bind_b2Profile_set_solveVelocity_1=function(){return(vq=a._emscripten_bind_b2Profile_set_solveVelocity_1=a.asm.to).apply(null,arguments)},wq=a._emscripten_bind_b2Profile_get_solvePosition_0=function(){return(wq=a._emscripten_bind_b2Profile_get_solvePosition_0=
a.asm.uo).apply(null,arguments)},xq=a._emscripten_bind_b2Profile_set_solvePosition_1=function(){return(xq=a._emscripten_bind_b2Profile_set_solvePosition_1=a.asm.vo).apply(null,arguments)},yq=a._emscripten_bind_b2Profile_get_broadphase_0=function(){return(yq=a._emscripten_bind_b2Profile_get_broadphase_0=a.asm.wo).apply(null,arguments)},zq=a._emscripten_bind_b2Profile_set_broadphase_1=function(){return(zq=a._emscripten_bind_b2Profile_set_broadphase_1=a.asm.xo).apply(null,arguments)},Aq=a._emscripten_bind_b2Profile_get_solveTOI_0=
function(){return(Aq=a._emscripten_bind_b2Profile_get_solveTOI_0=a.asm.yo).apply(null,arguments)},Bq=a._emscripten_bind_b2Profile_set_solveTOI_1=function(){return(Bq=a._emscripten_bind_b2Profile_set_solveTOI_1=a.asm.zo).apply(null,arguments)},Cq=a._emscripten_bind_b2Profile___destroy___0=function(){return(Cq=a._emscripten_bind_b2Profile___destroy___0=a.asm.Ao).apply(null,arguments)},Dq=a._emscripten_bind_b2PulleyJoint_GetGroundAnchorA_0=function(){return(Dq=a._emscripten_bind_b2PulleyJoint_GetGroundAnchorA_0=
a.asm.Bo).apply(null,arguments)},Eq=a._emscripten_bind_b2PulleyJoint_GetGroundAnchorB_0=function(){return(Eq=a._emscripten_bind_b2PulleyJoint_GetGroundAnchorB_0=a.asm.Co).apply(null,arguments)},Fq=a._emscripten_bind_b2PulleyJoint_GetLengthA_0=function(){return(Fq=a._emscripten_bind_b2PulleyJoint_GetLengthA_0=a.asm.Do).apply(null,arguments)},Gq=a._emscripten_bind_b2PulleyJoint_GetLengthB_0=function(){return(Gq=a._emscripten_bind_b2PulleyJoint_GetLengthB_0=a.asm.Eo).apply(null,arguments)},Hq=a._emscripten_bind_b2PulleyJoint_GetRatio_0=
function(){return(Hq=a._emscripten_bind_b2PulleyJoint_GetRatio_0=a.asm.Fo).apply(null,arguments)},Iq=a._emscripten_bind_b2PulleyJoint_GetCurrentLengthA_0=function(){return(Iq=a._emscripten_bind_b2PulleyJoint_GetCurrentLengthA_0=a.asm.Go).apply(null,arguments)},Jq=a._emscripten_bind_b2PulleyJoint_GetCurrentLengthB_0=function(){return(Jq=a._emscripten_bind_b2PulleyJoint_GetCurrentLengthB_0=a.asm.Ho).apply(null,arguments)},Kq=a._emscripten_bind_b2PulleyJoint_GetType_0=function(){return(Kq=a._emscripten_bind_b2PulleyJoint_GetType_0=
a.asm.Io).apply(null,arguments)},Lq=a._emscripten_bind_b2PulleyJoint_GetBodyA_0=function(){return(Lq=a._emscripten_bind_b2PulleyJoint_GetBodyA_0=a.asm.Jo).apply(null,arguments)},Mq=a._emscripten_bind_b2PulleyJoint_GetBodyB_0=function(){return(Mq=a._emscripten_bind_b2PulleyJoint_GetBodyB_0=a.asm.Ko).apply(null,arguments)},Nq=a._emscripten_bind_b2PulleyJoint_GetAnchorA_0=function(){return(Nq=a._emscripten_bind_b2PulleyJoint_GetAnchorA_0=a.asm.Lo).apply(null,arguments)},Oq=a._emscripten_bind_b2PulleyJoint_GetAnchorB_0=
function(){return(Oq=a._emscripten_bind_b2PulleyJoint_GetAnchorB_0=a.asm.Mo).apply(null,arguments)},Pq=a._emscripten_bind_b2PulleyJoint_GetReactionForce_1=function(){return(Pq=a._emscripten_bind_b2PulleyJoint_GetReactionForce_1=a.asm.No).apply(null,arguments)},Qq=a._emscripten_bind_b2PulleyJoint_GetReactionTorque_1=function(){return(Qq=a._emscripten_bind_b2PulleyJoint_GetReactionTorque_1=a.asm.Oo).apply(null,arguments)},Rq=a._emscripten_bind_b2PulleyJoint_GetNext_0=function(){return(Rq=a._emscripten_bind_b2PulleyJoint_GetNext_0=
a.asm.Po).apply(null,arguments)},Sq=a._emscripten_bind_b2PulleyJoint_GetUserData_0=function(){return(Sq=a._emscripten_bind_b2PulleyJoint_GetUserData_0=a.asm.Qo).apply(null,arguments)},Tq=a._emscripten_bind_b2PulleyJoint_GetCollideConnected_0=function(){return(Tq=a._emscripten_bind_b2PulleyJoint_GetCollideConnected_0=a.asm.Ro).apply(null,arguments)},Uq=a._emscripten_bind_b2PulleyJoint___destroy___0=function(){return(Uq=a._emscripten_bind_b2PulleyJoint___destroy___0=a.asm.So).apply(null,arguments)},
Vq=a._emscripten_bind_b2PulleyJointDef_b2PulleyJointDef_0=function(){return(Vq=a._emscripten_bind_b2PulleyJointDef_b2PulleyJointDef_0=a.asm.To).apply(null,arguments)},Wq=a._emscripten_bind_b2PulleyJointDef_Initialize_7=function(){return(Wq=a._emscripten_bind_b2PulleyJointDef_Initialize_7=a.asm.Uo).apply(null,arguments)},Xq=a._emscripten_bind_b2PulleyJointDef_get_groundAnchorA_0=function(){return(Xq=a._emscripten_bind_b2PulleyJointDef_get_groundAnchorA_0=a.asm.Vo).apply(null,arguments)},Yq=a._emscripten_bind_b2PulleyJointDef_set_groundAnchorA_1=
function(){return(Yq=a._emscripten_bind_b2PulleyJointDef_set_groundAnchorA_1=a.asm.Wo).apply(null,arguments)},Zq=a._emscripten_bind_b2PulleyJointDef_get_groundAnchorB_0=function(){return(Zq=a._emscripten_bind_b2PulleyJointDef_get_groundAnchorB_0=a.asm.Xo).apply(null,arguments)},$q=a._emscripten_bind_b2PulleyJointDef_set_groundAnchorB_1=function(){return($q=a._emscripten_bind_b2PulleyJointDef_set_groundAnchorB_1=a.asm.Yo).apply(null,arguments)},ar=a._emscripten_bind_b2PulleyJointDef_get_localAnchorA_0=
function(){return(ar=a._emscripten_bind_b2PulleyJointDef_get_localAnchorA_0=a.asm.Zo).apply(null,arguments)},br=a._emscripten_bind_b2PulleyJointDef_set_localAnchorA_1=function(){return(br=a._emscripten_bind_b2PulleyJointDef_set_localAnchorA_1=a.asm._o).apply(null,arguments)},cr=a._emscripten_bind_b2PulleyJointDef_get_localAnchorB_0=function(){return(cr=a._emscripten_bind_b2PulleyJointDef_get_localAnchorB_0=a.asm.$o).apply(null,arguments)},dr=a._emscripten_bind_b2PulleyJointDef_set_localAnchorB_1=
function(){return(dr=a._emscripten_bind_b2PulleyJointDef_set_localAnchorB_1=a.asm.ap).apply(null,arguments)},er=a._emscripten_bind_b2PulleyJointDef_get_lengthA_0=function(){return(er=a._emscripten_bind_b2PulleyJointDef_get_lengthA_0=a.asm.bp).apply(null,arguments)},fr=a._emscripten_bind_b2PulleyJointDef_set_lengthA_1=function(){return(fr=a._emscripten_bind_b2PulleyJointDef_set_lengthA_1=a.asm.cp).apply(null,arguments)},gr=a._emscripten_bind_b2PulleyJointDef_get_lengthB_0=function(){return(gr=a._emscripten_bind_b2PulleyJointDef_get_lengthB_0=
a.asm.dp).apply(null,arguments)},hr=a._emscripten_bind_b2PulleyJointDef_set_lengthB_1=function(){return(hr=a._emscripten_bind_b2PulleyJointDef_set_lengthB_1=a.asm.ep).apply(null,arguments)},ir=a._emscripten_bind_b2PulleyJointDef_get_ratio_0=function(){return(ir=a._emscripten_bind_b2PulleyJointDef_get_ratio_0=a.asm.fp).apply(null,arguments)},jr=a._emscripten_bind_b2PulleyJointDef_set_ratio_1=function(){return(jr=a._emscripten_bind_b2PulleyJointDef_set_ratio_1=a.asm.gp).apply(null,arguments)},kr=a._emscripten_bind_b2PulleyJointDef_get_type_0=
function(){return(kr=a._emscripten_bind_b2PulleyJointDef_get_type_0=a.asm.hp).apply(null,arguments)},lr=a._emscripten_bind_b2PulleyJointDef_set_type_1=function(){return(lr=a._emscripten_bind_b2PulleyJointDef_set_type_1=a.asm.ip).apply(null,arguments)},mr=a._emscripten_bind_b2PulleyJointDef_get_userData_0=function(){return(mr=a._emscripten_bind_b2PulleyJointDef_get_userData_0=a.asm.jp).apply(null,arguments)},nr=a._emscripten_bind_b2PulleyJointDef_set_userData_1=function(){return(nr=a._emscripten_bind_b2PulleyJointDef_set_userData_1=
a.asm.kp).apply(null,arguments)},or=a._emscripten_bind_b2PulleyJointDef_get_bodyA_0=function(){return(or=a._emscripten_bind_b2PulleyJointDef_get_bodyA_0=a.asm.lp).apply(null,arguments)},pr=a._emscripten_bind_b2PulleyJointDef_set_bodyA_1=function(){return(pr=a._emscripten_bind_b2PulleyJointDef_set_bodyA_1=a.asm.mp).apply(null,arguments)},qr=a._emscripten_bind_b2PulleyJointDef_get_bodyB_0=function(){return(qr=a._emscripten_bind_b2PulleyJointDef_get_bodyB_0=a.asm.np).apply(null,arguments)},rr=a._emscripten_bind_b2PulleyJointDef_set_bodyB_1=
function(){return(rr=a._emscripten_bind_b2PulleyJointDef_set_bodyB_1=a.asm.op).apply(null,arguments)},sr=a._emscripten_bind_b2PulleyJointDef_get_collideConnected_0=function(){return(sr=a._emscripten_bind_b2PulleyJointDef_get_collideConnected_0=a.asm.pp).apply(null,arguments)},tr=a._emscripten_bind_b2PulleyJointDef_set_collideConnected_1=function(){return(tr=a._emscripten_bind_b2PulleyJointDef_set_collideConnected_1=a.asm.qp).apply(null,arguments)},ur=a._emscripten_bind_b2PulleyJointDef___destroy___0=
function(){return(ur=a._emscripten_bind_b2PulleyJointDef___destroy___0=a.asm.rp).apply(null,arguments)},vr=a._emscripten_bind_b2RayCastInput_get_p1_0=function(){return(vr=a._emscripten_bind_b2RayCastInput_get_p1_0=a.asm.sp).apply(null,arguments)},wr=a._emscripten_bind_b2RayCastInput_set_p1_1=function(){return(wr=a._emscripten_bind_b2RayCastInput_set_p1_1=a.asm.tp).apply(null,arguments)},xr=a._emscripten_bind_b2RayCastInput_get_p2_0=function(){return(xr=a._emscripten_bind_b2RayCastInput_get_p2_0=a.asm.up).apply(null,
arguments)},yr=a._emscripten_bind_b2RayCastInput_set_p2_1=function(){return(yr=a._emscripten_bind_b2RayCastInput_set_p2_1=a.asm.vp).apply(null,arguments)},zr=a._emscripten_bind_b2RayCastInput_get_maxFraction_0=function(){return(zr=a._emscripten_bind_b2RayCastInput_get_maxFraction_0=a.asm.wp).apply(null,arguments)},Ar=a._emscripten_bind_b2RayCastInput_set_maxFraction_1=function(){return(Ar=a._emscripten_bind_b2RayCastInput_set_maxFraction_1=a.asm.xp).apply(null,arguments)},Br=a._emscripten_bind_b2RayCastInput___destroy___0=
function(){return(Br=a._emscripten_bind_b2RayCastInput___destroy___0=a.asm.yp).apply(null,arguments)},Cr=a._emscripten_bind_b2RayCastOutput_get_normal_0=function(){return(Cr=a._emscripten_bind_b2RayCastOutput_get_normal_0=a.asm.zp).apply(null,arguments)},Dr=a._emscripten_bind_b2RayCastOutput_set_normal_1=function(){return(Dr=a._emscripten_bind_b2RayCastOutput_set_normal_1=a.asm.Ap).apply(null,arguments)},Er=a._emscripten_bind_b2RayCastOutput_get_fraction_0=function(){return(Er=a._emscripten_bind_b2RayCastOutput_get_fraction_0=
a.asm.Bp).apply(null,arguments)},Fr=a._emscripten_bind_b2RayCastOutput_set_fraction_1=function(){return(Fr=a._emscripten_bind_b2RayCastOutput_set_fraction_1=a.asm.Cp).apply(null,arguments)},Gr=a._emscripten_bind_b2RayCastOutput___destroy___0=function(){return(Gr=a._emscripten_bind_b2RayCastOutput___destroy___0=a.asm.Dp).apply(null,arguments)},Hr=a._emscripten_bind_b2RevoluteJoint_GetLocalAnchorA_0=function(){return(Hr=a._emscripten_bind_b2RevoluteJoint_GetLocalAnchorA_0=a.asm.Ep).apply(null,arguments)},
Ir=a._emscripten_bind_b2RevoluteJoint_GetLocalAnchorB_0=function(){return(Ir=a._emscripten_bind_b2RevoluteJoint_GetLocalAnchorB_0=a.asm.Fp).apply(null,arguments)},Jr=a._emscripten_bind_b2RevoluteJoint_GetReferenceAngle_0=function(){return(Jr=a._emscripten_bind_b2RevoluteJoint_GetReferenceAngle_0=a.asm.Gp).apply(null,arguments)},Kr=a._emscripten_bind_b2RevoluteJoint_GetJointAngle_0=function(){return(Kr=a._emscripten_bind_b2RevoluteJoint_GetJointAngle_0=a.asm.Hp).apply(null,arguments)},Lr=a._emscripten_bind_b2RevoluteJoint_GetJointSpeed_0=
function(){return(Lr=a._emscripten_bind_b2RevoluteJoint_GetJointSpeed_0=a.asm.Ip).apply(null,arguments)},Mr=a._emscripten_bind_b2RevoluteJoint_IsLimitEnabled_0=function(){return(Mr=a._emscripten_bind_b2RevoluteJoint_IsLimitEnabled_0=a.asm.Jp).apply(null,arguments)},Nr=a._emscripten_bind_b2RevoluteJoint_EnableLimit_1=function(){return(Nr=a._emscripten_bind_b2RevoluteJoint_EnableLimit_1=a.asm.Kp).apply(null,arguments)},Or=a._emscripten_bind_b2RevoluteJoint_GetLowerLimit_0=function(){return(Or=a._emscripten_bind_b2RevoluteJoint_GetLowerLimit_0=
a.asm.Lp).apply(null,arguments)},Pr=a._emscripten_bind_b2RevoluteJoint_GetUpperLimit_0=function(){return(Pr=a._emscripten_bind_b2RevoluteJoint_GetUpperLimit_0=a.asm.Mp).apply(null,arguments)},Qr=a._emscripten_bind_b2RevoluteJoint_SetLimits_2=function(){return(Qr=a._emscripten_bind_b2RevoluteJoint_SetLimits_2=a.asm.Np).apply(null,arguments)},Rr=a._emscripten_bind_b2RevoluteJoint_IsMotorEnabled_0=function(){return(Rr=a._emscripten_bind_b2RevoluteJoint_IsMotorEnabled_0=a.asm.Op).apply(null,arguments)},
Sr=a._emscripten_bind_b2RevoluteJoint_EnableMotor_1=function(){return(Sr=a._emscripten_bind_b2RevoluteJoint_EnableMotor_1=a.asm.Pp).apply(null,arguments)},Tr=a._emscripten_bind_b2RevoluteJoint_SetMotorSpeed_1=function(){return(Tr=a._emscripten_bind_b2RevoluteJoint_SetMotorSpeed_1=a.asm.Qp).apply(null,arguments)},Ur=a._emscripten_bind_b2RevoluteJoint_GetMotorSpeed_0=function(){return(Ur=a._emscripten_bind_b2RevoluteJoint_GetMotorSpeed_0=a.asm.Rp).apply(null,arguments)},Vr=a._emscripten_bind_b2RevoluteJoint_SetMaxMotorTorque_1=
function(){return(Vr=a._emscripten_bind_b2RevoluteJoint_SetMaxMotorTorque_1=a.asm.Sp).apply(null,arguments)},Wr=a._emscripten_bind_b2RevoluteJoint_GetMaxMotorTorque_0=function(){return(Wr=a._emscripten_bind_b2RevoluteJoint_GetMaxMotorTorque_0=a.asm.Tp).apply(null,arguments)},Xr=a._emscripten_bind_b2RevoluteJoint_GetMotorTorque_1=function(){return(Xr=a._emscripten_bind_b2RevoluteJoint_GetMotorTorque_1=a.asm.Up).apply(null,arguments)},Yr=a._emscripten_bind_b2RevoluteJoint_GetType_0=function(){return(Yr=
a._emscripten_bind_b2RevoluteJoint_GetType_0=a.asm.Vp).apply(null,arguments)},Zr=a._emscripten_bind_b2RevoluteJoint_GetBodyA_0=function(){return(Zr=a._emscripten_bind_b2RevoluteJoint_GetBodyA_0=a.asm.Wp).apply(null,arguments)},$r=a._emscripten_bind_b2RevoluteJoint_GetBodyB_0=function(){return($r=a._emscripten_bind_b2RevoluteJoint_GetBodyB_0=a.asm.Xp).apply(null,arguments)},as=a._emscripten_bind_b2RevoluteJoint_GetAnchorA_0=function(){return(as=a._emscripten_bind_b2RevoluteJoint_GetAnchorA_0=a.asm.Yp).apply(null,
arguments)},bs=a._emscripten_bind_b2RevoluteJoint_GetAnchorB_0=function(){return(bs=a._emscripten_bind_b2RevoluteJoint_GetAnchorB_0=a.asm.Zp).apply(null,arguments)},cs=a._emscripten_bind_b2RevoluteJoint_GetReactionForce_1=function(){return(cs=a._emscripten_bind_b2RevoluteJoint_GetReactionForce_1=a.asm._p).apply(null,arguments)},ds=a._emscripten_bind_b2RevoluteJoint_GetReactionTorque_1=function(){return(ds=a._emscripten_bind_b2RevoluteJoint_GetReactionTorque_1=a.asm.$p).apply(null,arguments)},es=a._emscripten_bind_b2RevoluteJoint_GetNext_0=
function(){return(es=a._emscripten_bind_b2RevoluteJoint_GetNext_0=a.asm.aq).apply(null,arguments)},gs=a._emscripten_bind_b2RevoluteJoint_GetUserData_0=function(){return(gs=a._emscripten_bind_b2RevoluteJoint_GetUserData_0=a.asm.bq).apply(null,arguments)},hs=a._emscripten_bind_b2RevoluteJoint_GetCollideConnected_0=function(){return(hs=a._emscripten_bind_b2RevoluteJoint_GetCollideConnected_0=a.asm.cq).apply(null,arguments)},is=a._emscripten_bind_b2RevoluteJoint___destroy___0=function(){return(is=a._emscripten_bind_b2RevoluteJoint___destroy___0=
a.asm.dq).apply(null,arguments)},js=a._emscripten_bind_b2RevoluteJointDef_b2RevoluteJointDef_0=function(){return(js=a._emscripten_bind_b2RevoluteJointDef_b2RevoluteJointDef_0=a.asm.eq).apply(null,arguments)},ks=a._emscripten_bind_b2RevoluteJointDef_Initialize_3=function(){return(ks=a._emscripten_bind_b2RevoluteJointDef_Initialize_3=a.asm.fq).apply(null,arguments)},ls=a._emscripten_bind_b2RevoluteJointDef_get_localAnchorA_0=function(){return(ls=a._emscripten_bind_b2RevoluteJointDef_get_localAnchorA_0=
a.asm.gq).apply(null,arguments)},ms=a._emscripten_bind_b2RevoluteJointDef_set_localAnchorA_1=function(){return(ms=a._emscripten_bind_b2RevoluteJointDef_set_localAnchorA_1=a.asm.hq).apply(null,arguments)},ns=a._emscripten_bind_b2RevoluteJointDef_get_localAnchorB_0=function(){return(ns=a._emscripten_bind_b2RevoluteJointDef_get_localAnchorB_0=a.asm.iq).apply(null,arguments)},ps=a._emscripten_bind_b2RevoluteJointDef_set_localAnchorB_1=function(){return(ps=a._emscripten_bind_b2RevoluteJointDef_set_localAnchorB_1=
a.asm.jq).apply(null,arguments)},qs=a._emscripten_bind_b2RevoluteJointDef_get_referenceAngle_0=function(){return(qs=a._emscripten_bind_b2RevoluteJointDef_get_referenceAngle_0=a.asm.kq).apply(null,arguments)},rs=a._emscripten_bind_b2RevoluteJointDef_set_referenceAngle_1=function(){return(rs=a._emscripten_bind_b2RevoluteJointDef_set_referenceAngle_1=a.asm.lq).apply(null,arguments)},ss=a._emscripten_bind_b2RevoluteJointDef_get_enableLimit_0=function(){return(ss=a._emscripten_bind_b2RevoluteJointDef_get_enableLimit_0=
a.asm.mq).apply(null,arguments)},ts=a._emscripten_bind_b2RevoluteJointDef_set_enableLimit_1=function(){return(ts=a._emscripten_bind_b2RevoluteJointDef_set_enableLimit_1=a.asm.nq).apply(null,arguments)},us=a._emscripten_bind_b2RevoluteJointDef_get_lowerAngle_0=function(){return(us=a._emscripten_bind_b2RevoluteJointDef_get_lowerAngle_0=a.asm.oq).apply(null,arguments)},vs=a._emscripten_bind_b2RevoluteJointDef_set_lowerAngle_1=function(){return(vs=a._emscripten_bind_b2RevoluteJointDef_set_lowerAngle_1=
a.asm.pq).apply(null,arguments)},xs=a._emscripten_bind_b2RevoluteJointDef_get_upperAngle_0=function(){return(xs=a._emscripten_bind_b2RevoluteJointDef_get_upperAngle_0=a.asm.qq).apply(null,arguments)},ys=a._emscripten_bind_b2RevoluteJointDef_set_upperAngle_1=function(){return(ys=a._emscripten_bind_b2RevoluteJointDef_set_upperAngle_1=a.asm.rq).apply(null,arguments)},zs=a._emscripten_bind_b2RevoluteJointDef_get_enableMotor_0=function(){return(zs=a._emscripten_bind_b2RevoluteJointDef_get_enableMotor_0=
a.asm.sq).apply(null,arguments)},As=a._emscripten_bind_b2RevoluteJointDef_set_enableMotor_1=function(){return(As=a._emscripten_bind_b2RevoluteJointDef_set_enableMotor_1=a.asm.tq).apply(null,arguments)},Bs=a._emscripten_bind_b2RevoluteJointDef_get_motorSpeed_0=function(){return(Bs=a._emscripten_bind_b2RevoluteJointDef_get_motorSpeed_0=a.asm.uq).apply(null,arguments)},Cs=a._emscripten_bind_b2RevoluteJointDef_set_motorSpeed_1=function(){return(Cs=a._emscripten_bind_b2RevoluteJointDef_set_motorSpeed_1=
a.asm.vq).apply(null,arguments)},Ds=a._emscripten_bind_b2RevoluteJointDef_get_maxMotorTorque_0=function(){return(Ds=a._emscripten_bind_b2RevoluteJointDef_get_maxMotorTorque_0=a.asm.wq).apply(null,arguments)},Es=a._emscripten_bind_b2RevoluteJointDef_set_maxMotorTorque_1=function(){return(Es=a._emscripten_bind_b2RevoluteJointDef_set_maxMotorTorque_1=a.asm.xq).apply(null,arguments)},Fs=a._emscripten_bind_b2RevoluteJointDef_get_type_0=function(){return(Fs=a._emscripten_bind_b2RevoluteJointDef_get_type_0=
a.asm.yq).apply(null,arguments)},Gs=a._emscripten_bind_b2RevoluteJointDef_set_type_1=function(){return(Gs=a._emscripten_bind_b2RevoluteJointDef_set_type_1=a.asm.zq).apply(null,arguments)},Hs=a._emscripten_bind_b2RevoluteJointDef_get_userData_0=function(){return(Hs=a._emscripten_bind_b2RevoluteJointDef_get_userData_0=a.asm.Aq).apply(null,arguments)},Is=a._emscripten_bind_b2RevoluteJointDef_set_userData_1=function(){return(Is=a._emscripten_bind_b2RevoluteJointDef_set_userData_1=a.asm.Bq).apply(null,
arguments)},Js=a._emscripten_bind_b2RevoluteJointDef_get_bodyA_0=function(){return(Js=a._emscripten_bind_b2RevoluteJointDef_get_bodyA_0=a.asm.Cq).apply(null,arguments)},Ks=a._emscripten_bind_b2RevoluteJointDef_set_bodyA_1=function(){return(Ks=a._emscripten_bind_b2RevoluteJointDef_set_bodyA_1=a.asm.Dq).apply(null,arguments)},Ls=a._emscripten_bind_b2RevoluteJointDef_get_bodyB_0=function(){return(Ls=a._emscripten_bind_b2RevoluteJointDef_get_bodyB_0=a.asm.Eq).apply(null,arguments)},Ms=a._emscripten_bind_b2RevoluteJointDef_set_bodyB_1=
function(){return(Ms=a._emscripten_bind_b2RevoluteJointDef_set_bodyB_1=a.asm.Fq).apply(null,arguments)},Ns=a._emscripten_bind_b2RevoluteJointDef_get_collideConnected_0=function(){return(Ns=a._emscripten_bind_b2RevoluteJointDef_get_collideConnected_0=a.asm.Gq).apply(null,arguments)},Os=a._emscripten_bind_b2RevoluteJointDef_set_collideConnected_1=function(){return(Os=a._emscripten_bind_b2RevoluteJointDef_set_collideConnected_1=a.asm.Hq).apply(null,arguments)},Ps=a._emscripten_bind_b2RevoluteJointDef___destroy___0=
function(){return(Ps=a._emscripten_bind_b2RevoluteJointDef___destroy___0=a.asm.Iq).apply(null,arguments)},Qs=a._emscripten_bind_b2Rot_b2Rot_0=function(){return(Qs=a._emscripten_bind_b2Rot_b2Rot_0=a.asm.Jq).apply(null,arguments)},Rs=a._emscripten_bind_b2Rot_b2Rot_1=function(){return(Rs=a._emscripten_bind_b2Rot_b2Rot_1=a.asm.Kq).apply(null,arguments)},Ss=a._emscripten_bind_b2Rot_Set_1=function(){return(Ss=a._emscripten_bind_b2Rot_Set_1=a.asm.Lq).apply(null,arguments)},Ts=a._emscripten_bind_b2Rot_SetIdentity_0=
function(){return(Ts=a._emscripten_bind_b2Rot_SetIdentity_0=a.asm.Mq).apply(null,arguments)},Us=a._emscripten_bind_b2Rot_GetAngle_0=function(){return(Us=a._emscripten_bind_b2Rot_GetAngle_0=a.asm.Nq).apply(null,arguments)},Vs=a._emscripten_bind_b2Rot_GetXAxis_0=function(){return(Vs=a._emscripten_bind_b2Rot_GetXAxis_0=a.asm.Oq).apply(null,arguments)},Ws=a._emscripten_bind_b2Rot_GetYAxis_0=function(){return(Ws=a._emscripten_bind_b2Rot_GetYAxis_0=a.asm.Pq).apply(null,arguments)},Xs=a._emscripten_bind_b2Rot_get_s_0=
function(){return(Xs=a._emscripten_bind_b2Rot_get_s_0=a.asm.Qq).apply(null,arguments)},Ys=a._emscripten_bind_b2Rot_set_s_1=function(){return(Ys=a._emscripten_bind_b2Rot_set_s_1=a.asm.Rq).apply(null,arguments)},Zs=a._emscripten_bind_b2Rot_get_c_0=function(){return(Zs=a._emscripten_bind_b2Rot_get_c_0=a.asm.Sq).apply(null,arguments)},$s=a._emscripten_bind_b2Rot_set_c_1=function(){return($s=a._emscripten_bind_b2Rot_set_c_1=a.asm.Tq).apply(null,arguments)},at=a._emscripten_bind_b2Rot___destroy___0=function(){return(at=
a._emscripten_bind_b2Rot___destroy___0=a.asm.Uq).apply(null,arguments)},bt=a._emscripten_bind_b2WheelJoint_GetLocalAnchorA_0=function(){return(bt=a._emscripten_bind_b2WheelJoint_GetLocalAnchorA_0=a.asm.Vq).apply(null,arguments)},ct=a._emscripten_bind_b2WheelJoint_GetLocalAnchorB_0=function(){return(ct=a._emscripten_bind_b2WheelJoint_GetLocalAnchorB_0=a.asm.Wq).apply(null,arguments)},dt=a._emscripten_bind_b2WheelJoint_GetLocalAxisA_0=function(){return(dt=a._emscripten_bind_b2WheelJoint_GetLocalAxisA_0=
a.asm.Xq).apply(null,arguments)},et=a._emscripten_bind_b2WheelJoint_GetJointTranslation_0=function(){return(et=a._emscripten_bind_b2WheelJoint_GetJointTranslation_0=a.asm.Yq).apply(null,arguments)},ft=a._emscripten_bind_b2WheelJoint_GetJointLinearSpeed_0=function(){return(ft=a._emscripten_bind_b2WheelJoint_GetJointLinearSpeed_0=a.asm.Zq).apply(null,arguments)},gt=a._emscripten_bind_b2WheelJoint_GetJointAngle_0=function(){return(gt=a._emscripten_bind_b2WheelJoint_GetJointAngle_0=a.asm._q).apply(null,
arguments)},ht=a._emscripten_bind_b2WheelJoint_GetJointAngularSpeed_0=function(){return(ht=a._emscripten_bind_b2WheelJoint_GetJointAngularSpeed_0=a.asm.$q).apply(null,arguments)},it=a._emscripten_bind_b2WheelJoint_IsLimitEnabled_0=function(){return(it=a._emscripten_bind_b2WheelJoint_IsLimitEnabled_0=a.asm.ar).apply(null,arguments)},jt=a._emscripten_bind_b2WheelJoint_EnableLimit_1=function(){return(jt=a._emscripten_bind_b2WheelJoint_EnableLimit_1=a.asm.br).apply(null,arguments)},kt=a._emscripten_bind_b2WheelJoint_GetLowerLimit_0=
function(){return(kt=a._emscripten_bind_b2WheelJoint_GetLowerLimit_0=a.asm.cr).apply(null,arguments)},lt=a._emscripten_bind_b2WheelJoint_GetUpperLimit_0=function(){return(lt=a._emscripten_bind_b2WheelJoint_GetUpperLimit_0=a.asm.dr).apply(null,arguments)},mt=a._emscripten_bind_b2WheelJoint_SetLimits_2=function(){return(mt=a._emscripten_bind_b2WheelJoint_SetLimits_2=a.asm.er).apply(null,arguments)},nt=a._emscripten_bind_b2WheelJoint_IsMotorEnabled_0=function(){return(nt=a._emscripten_bind_b2WheelJoint_IsMotorEnabled_0=
a.asm.fr).apply(null,arguments)},ot=a._emscripten_bind_b2WheelJoint_EnableMotor_1=function(){return(ot=a._emscripten_bind_b2WheelJoint_EnableMotor_1=a.asm.gr).apply(null,arguments)},pt=a._emscripten_bind_b2WheelJoint_SetMotorSpeed_1=function(){return(pt=a._emscripten_bind_b2WheelJoint_SetMotorSpeed_1=a.asm.hr).apply(null,arguments)},qt=a._emscripten_bind_b2WheelJoint_GetMotorSpeed_0=function(){return(qt=a._emscripten_bind_b2WheelJoint_GetMotorSpeed_0=a.asm.ir).apply(null,arguments)},rt=a._emscripten_bind_b2WheelJoint_SetMaxMotorTorque_1=
function(){return(rt=a._emscripten_bind_b2WheelJoint_SetMaxMotorTorque_1=a.asm.jr).apply(null,arguments)},st=a._emscripten_bind_b2WheelJoint_GetMaxMotorTorque_0=function(){return(st=a._emscripten_bind_b2WheelJoint_GetMaxMotorTorque_0=a.asm.kr).apply(null,arguments)},tt=a._emscripten_bind_b2WheelJoint_GetMotorTorque_1=function(){return(tt=a._emscripten_bind_b2WheelJoint_GetMotorTorque_1=a.asm.lr).apply(null,arguments)},ut=a._emscripten_bind_b2WheelJoint_SetStiffness_1=function(){return(ut=a._emscripten_bind_b2WheelJoint_SetStiffness_1=
a.asm.mr).apply(null,arguments)},vt=a._emscripten_bind_b2WheelJoint_GetStiffness_0=function(){return(vt=a._emscripten_bind_b2WheelJoint_GetStiffness_0=a.asm.nr).apply(null,arguments)},wt=a._emscripten_bind_b2WheelJoint_SetDamping_1=function(){return(wt=a._emscripten_bind_b2WheelJoint_SetDamping_1=a.asm.or).apply(null,arguments)},xt=a._emscripten_bind_b2WheelJoint_GetDamping_0=function(){return(xt=a._emscripten_bind_b2WheelJoint_GetDamping_0=a.asm.pr).apply(null,arguments)},yt=a._emscripten_bind_b2WheelJoint_GetType_0=
function(){return(yt=a._emscripten_bind_b2WheelJoint_GetType_0=a.asm.qr).apply(null,arguments)},zt=a._emscripten_bind_b2WheelJoint_GetBodyA_0=function(){return(zt=a._emscripten_bind_b2WheelJoint_GetBodyA_0=a.asm.rr).apply(null,arguments)},At=a._emscripten_bind_b2WheelJoint_GetBodyB_0=function(){return(At=a._emscripten_bind_b2WheelJoint_GetBodyB_0=a.asm.sr).apply(null,arguments)},Bt=a._emscripten_bind_b2WheelJoint_GetAnchorA_0=function(){return(Bt=a._emscripten_bind_b2WheelJoint_GetAnchorA_0=a.asm.tr).apply(null,
arguments)},Ct=a._emscripten_bind_b2WheelJoint_GetAnchorB_0=function(){return(Ct=a._emscripten_bind_b2WheelJoint_GetAnchorB_0=a.asm.ur).apply(null,arguments)},Dt=a._emscripten_bind_b2WheelJoint_GetReactionForce_1=function(){return(Dt=a._emscripten_bind_b2WheelJoint_GetReactionForce_1=a.asm.vr).apply(null,arguments)},Et=a._emscripten_bind_b2WheelJoint_GetReactionTorque_1=function(){return(Et=a._emscripten_bind_b2WheelJoint_GetReactionTorque_1=a.asm.wr).apply(null,arguments)},Ft=a._emscripten_bind_b2WheelJoint_GetNext_0=
function(){return(Ft=a._emscripten_bind_b2WheelJoint_GetNext_0=a.asm.xr).apply(null,arguments)},Gt=a._emscripten_bind_b2WheelJoint_GetUserData_0=function(){return(Gt=a._emscripten_bind_b2WheelJoint_GetUserData_0=a.asm.yr).apply(null,arguments)},Ht=a._emscripten_bind_b2WheelJoint_GetCollideConnected_0=function(){return(Ht=a._emscripten_bind_b2WheelJoint_GetCollideConnected_0=a.asm.zr).apply(null,arguments)},It=a._emscripten_bind_b2WheelJoint___destroy___0=function(){return(It=a._emscripten_bind_b2WheelJoint___destroy___0=
a.asm.Ar).apply(null,arguments)},Jt=a._emscripten_bind_b2WheelJointDef_b2WheelJointDef_0=function(){return(Jt=a._emscripten_bind_b2WheelJointDef_b2WheelJointDef_0=a.asm.Br).apply(null,arguments)},Kt=a._emscripten_bind_b2WheelJointDef_Initialize_4=function(){return(Kt=a._emscripten_bind_b2WheelJointDef_Initialize_4=a.asm.Cr).apply(null,arguments)},Lt=a._emscripten_bind_b2WheelJointDef_get_localAnchorA_0=function(){return(Lt=a._emscripten_bind_b2WheelJointDef_get_localAnchorA_0=a.asm.Dr).apply(null,
arguments)},Mt=a._emscripten_bind_b2WheelJointDef_set_localAnchorA_1=function(){return(Mt=a._emscripten_bind_b2WheelJointDef_set_localAnchorA_1=a.asm.Er).apply(null,arguments)},Nt=a._emscripten_bind_b2WheelJointDef_get_localAnchorB_0=function(){return(Nt=a._emscripten_bind_b2WheelJointDef_get_localAnchorB_0=a.asm.Fr).apply(null,arguments)},Ot=a._emscripten_bind_b2WheelJointDef_set_localAnchorB_1=function(){return(Ot=a._emscripten_bind_b2WheelJointDef_set_localAnchorB_1=a.asm.Gr).apply(null,arguments)},
Pt=a._emscripten_bind_b2WheelJointDef_get_localAxisA_0=function(){return(Pt=a._emscripten_bind_b2WheelJointDef_get_localAxisA_0=a.asm.Hr).apply(null,arguments)},Qt=a._emscripten_bind_b2WheelJointDef_set_localAxisA_1=function(){return(Qt=a._emscripten_bind_b2WheelJointDef_set_localAxisA_1=a.asm.Ir).apply(null,arguments)},Rt=a._emscripten_bind_b2WheelJointDef_get_enableLimit_0=function(){return(Rt=a._emscripten_bind_b2WheelJointDef_get_enableLimit_0=a.asm.Jr).apply(null,arguments)},St=a._emscripten_bind_b2WheelJointDef_set_enableLimit_1=
function(){return(St=a._emscripten_bind_b2WheelJointDef_set_enableLimit_1=a.asm.Kr).apply(null,arguments)},Tt=a._emscripten_bind_b2WheelJointDef_get_lowerTranslation_0=function(){return(Tt=a._emscripten_bind_b2WheelJointDef_get_lowerTranslation_0=a.asm.Lr).apply(null,arguments)},Ut=a._emscripten_bind_b2WheelJointDef_set_lowerTranslation_1=function(){return(Ut=a._emscripten_bind_b2WheelJointDef_set_lowerTranslation_1=a.asm.Mr).apply(null,arguments)},Vt=a._emscripten_bind_b2WheelJointDef_get_upperTranslation_0=
function(){return(Vt=a._emscripten_bind_b2WheelJointDef_get_upperTranslation_0=a.asm.Nr).apply(null,arguments)},Wt=a._emscripten_bind_b2WheelJointDef_set_upperTranslation_1=function(){return(Wt=a._emscripten_bind_b2WheelJointDef_set_upperTranslation_1=a.asm.Or).apply(null,arguments)},Xt=a._emscripten_bind_b2WheelJointDef_get_enableMotor_0=function(){return(Xt=a._emscripten_bind_b2WheelJointDef_get_enableMotor_0=a.asm.Pr).apply(null,arguments)},Yt=a._emscripten_bind_b2WheelJointDef_set_enableMotor_1=
function(){return(Yt=a._emscripten_bind_b2WheelJointDef_set_enableMotor_1=a.asm.Qr).apply(null,arguments)},Zt=a._emscripten_bind_b2WheelJointDef_get_maxMotorTorque_0=function(){return(Zt=a._emscripten_bind_b2WheelJointDef_get_maxMotorTorque_0=a.asm.Rr).apply(null,arguments)},$t=a._emscripten_bind_b2WheelJointDef_set_maxMotorTorque_1=function(){return($t=a._emscripten_bind_b2WheelJointDef_set_maxMotorTorque_1=a.asm.Sr).apply(null,arguments)},au=a._emscripten_bind_b2WheelJointDef_get_motorSpeed_0=function(){return(au=
a._emscripten_bind_b2WheelJointDef_get_motorSpeed_0=a.asm.Tr).apply(null,arguments)},bu=a._emscripten_bind_b2WheelJointDef_set_motorSpeed_1=function(){return(bu=a._emscripten_bind_b2WheelJointDef_set_motorSpeed_1=a.asm.Ur).apply(null,arguments)},cu=a._emscripten_bind_b2WheelJointDef_get_stiffness_0=function(){return(cu=a._emscripten_bind_b2WheelJointDef_get_stiffness_0=a.asm.Vr).apply(null,arguments)},du=a._emscripten_bind_b2WheelJointDef_set_stiffness_1=function(){return(du=a._emscripten_bind_b2WheelJointDef_set_stiffness_1=
a.asm.Wr).apply(null,arguments)},eu=a._emscripten_bind_b2WheelJointDef_get_damping_0=function(){return(eu=a._emscripten_bind_b2WheelJointDef_get_damping_0=a.asm.Xr).apply(null,arguments)},fu=a._emscripten_bind_b2WheelJointDef_set_damping_1=function(){return(fu=a._emscripten_bind_b2WheelJointDef_set_damping_1=a.asm.Yr).apply(null,arguments)},gu=a._emscripten_bind_b2WheelJointDef_get_type_0=function(){return(gu=a._emscripten_bind_b2WheelJointDef_get_type_0=a.asm.Zr).apply(null,arguments)},hu=a._emscripten_bind_b2WheelJointDef_set_type_1=
function(){return(hu=a._emscripten_bind_b2WheelJointDef_set_type_1=a.asm._r).apply(null,arguments)},iu=a._emscripten_bind_b2WheelJointDef_get_userData_0=function(){return(iu=a._emscripten_bind_b2WheelJointDef_get_userData_0=a.asm.$r).apply(null,arguments)},ju=a._emscripten_bind_b2WheelJointDef_set_userData_1=function(){return(ju=a._emscripten_bind_b2WheelJointDef_set_userData_1=a.asm.as).apply(null,arguments)},ku=a._emscripten_bind_b2WheelJointDef_get_bodyA_0=function(){return(ku=a._emscripten_bind_b2WheelJointDef_get_bodyA_0=
a.asm.bs).apply(null,arguments)},lu=a._emscripten_bind_b2WheelJointDef_set_bodyA_1=function(){return(lu=a._emscripten_bind_b2WheelJointDef_set_bodyA_1=a.asm.cs).apply(null,arguments)},mu=a._emscripten_bind_b2WheelJointDef_get_bodyB_0=function(){return(mu=a._emscripten_bind_b2WheelJointDef_get_bodyB_0=a.asm.ds).apply(null,arguments)},nu=a._emscripten_bind_b2WheelJointDef_set_bodyB_1=function(){return(nu=a._emscripten_bind_b2WheelJointDef_set_bodyB_1=a.asm.es).apply(null,arguments)},ou=a._emscripten_bind_b2WheelJointDef_get_collideConnected_0=
function(){return(ou=a._emscripten_bind_b2WheelJointDef_get_collideConnected_0=a.asm.fs).apply(null,arguments)},pu=a._emscripten_bind_b2WheelJointDef_set_collideConnected_1=function(){return(pu=a._emscripten_bind_b2WheelJointDef_set_collideConnected_1=a.asm.gs).apply(null,arguments)},qu=a._emscripten_bind_b2WheelJointDef___destroy___0=function(){return(qu=a._emscripten_bind_b2WheelJointDef___destroy___0=a.asm.hs).apply(null,arguments)},ru=a._emscripten_bind_b2MotorJoint_SetLinearOffset_1=function(){return(ru=
a._emscripten_bind_b2MotorJoint_SetLinearOffset_1=a.asm.is).apply(null,arguments)},su=a._emscripten_bind_b2MotorJoint_GetLinearOffset_0=function(){return(su=a._emscripten_bind_b2MotorJoint_GetLinearOffset_0=a.asm.js).apply(null,arguments)},tu=a._emscripten_bind_b2MotorJoint_SetAngularOffset_1=function(){return(tu=a._emscripten_bind_b2MotorJoint_SetAngularOffset_1=a.asm.ks).apply(null,arguments)},uu=a._emscripten_bind_b2MotorJoint_GetAngularOffset_0=function(){return(uu=a._emscripten_bind_b2MotorJoint_GetAngularOffset_0=
a.asm.ls).apply(null,arguments)},vu=a._emscripten_bind_b2MotorJoint_SetMaxForce_1=function(){return(vu=a._emscripten_bind_b2MotorJoint_SetMaxForce_1=a.asm.ms).apply(null,arguments)},wu=a._emscripten_bind_b2MotorJoint_GetMaxForce_0=function(){return(wu=a._emscripten_bind_b2MotorJoint_GetMaxForce_0=a.asm.ns).apply(null,arguments)},xu=a._emscripten_bind_b2MotorJoint_SetMaxTorque_1=function(){return(xu=a._emscripten_bind_b2MotorJoint_SetMaxTorque_1=a.asm.os).apply(null,arguments)},yu=a._emscripten_bind_b2MotorJoint_GetMaxTorque_0=
function(){return(yu=a._emscripten_bind_b2MotorJoint_GetMaxTorque_0=a.asm.ps).apply(null,arguments)},zu=a._emscripten_bind_b2MotorJoint_SetCorrectionFactor_1=function(){return(zu=a._emscripten_bind_b2MotorJoint_SetCorrectionFactor_1=a.asm.qs).apply(null,arguments)},Au=a._emscripten_bind_b2MotorJoint_GetCorrectionFactor_0=function(){return(Au=a._emscripten_bind_b2MotorJoint_GetCorrectionFactor_0=a.asm.rs).apply(null,arguments)},Bu=a._emscripten_bind_b2MotorJoint_GetType_0=function(){return(Bu=a._emscripten_bind_b2MotorJoint_GetType_0=
a.asm.ss).apply(null,arguments)},Cu=a._emscripten_bind_b2MotorJoint_GetBodyA_0=function(){return(Cu=a._emscripten_bind_b2MotorJoint_GetBodyA_0=a.asm.ts).apply(null,arguments)},Du=a._emscripten_bind_b2MotorJoint_GetBodyB_0=function(){return(Du=a._emscripten_bind_b2MotorJoint_GetBodyB_0=a.asm.us).apply(null,arguments)},Eu=a._emscripten_bind_b2MotorJoint_GetAnchorA_0=function(){return(Eu=a._emscripten_bind_b2MotorJoint_GetAnchorA_0=a.asm.vs).apply(null,arguments)},Fu=a._emscripten_bind_b2MotorJoint_GetAnchorB_0=
function(){return(Fu=a._emscripten_bind_b2MotorJoint_GetAnchorB_0=a.asm.ws).apply(null,arguments)},Gu=a._emscripten_bind_b2MotorJoint_GetReactionForce_1=function(){return(Gu=a._emscripten_bind_b2MotorJoint_GetReactionForce_1=a.asm.xs).apply(null,arguments)},Hu=a._emscripten_bind_b2MotorJoint_GetReactionTorque_1=function(){return(Hu=a._emscripten_bind_b2MotorJoint_GetReactionTorque_1=a.asm.ys).apply(null,arguments)},Iu=a._emscripten_bind_b2MotorJoint_GetNext_0=function(){return(Iu=a._emscripten_bind_b2MotorJoint_GetNext_0=
a.asm.zs).apply(null,arguments)},Ju=a._emscripten_bind_b2MotorJoint_GetUserData_0=function(){return(Ju=a._emscripten_bind_b2MotorJoint_GetUserData_0=a.asm.As).apply(null,arguments)},Ku=a._emscripten_bind_b2MotorJoint_GetCollideConnected_0=function(){return(Ku=a._emscripten_bind_b2MotorJoint_GetCollideConnected_0=a.asm.Bs).apply(null,arguments)},Lu=a._emscripten_bind_b2MotorJoint___destroy___0=function(){return(Lu=a._emscripten_bind_b2MotorJoint___destroy___0=a.asm.Cs).apply(null,arguments)},Mu=a._emscripten_bind_b2MotorJointDef_b2MotorJointDef_0=
function(){return(Mu=a._emscripten_bind_b2MotorJointDef_b2MotorJointDef_0=a.asm.Ds).apply(null,arguments)},Nu=a._emscripten_bind_b2MotorJointDef_Initialize_2=function(){return(Nu=a._emscripten_bind_b2MotorJointDef_Initialize_2=a.asm.Es).apply(null,arguments)},Ou=a._emscripten_bind_b2MotorJointDef_get_linearOffset_0=function(){return(Ou=a._emscripten_bind_b2MotorJointDef_get_linearOffset_0=a.asm.Fs).apply(null,arguments)},Pu=a._emscripten_bind_b2MotorJointDef_set_linearOffset_1=function(){return(Pu=
a._emscripten_bind_b2MotorJointDef_set_linearOffset_1=a.asm.Gs).apply(null,arguments)},Qu=a._emscripten_bind_b2MotorJointDef_get_angularOffset_0=function(){return(Qu=a._emscripten_bind_b2MotorJointDef_get_angularOffset_0=a.asm.Hs).apply(null,arguments)},Ru=a._emscripten_bind_b2MotorJointDef_set_angularOffset_1=function(){return(Ru=a._emscripten_bind_b2MotorJointDef_set_angularOffset_1=a.asm.Is).apply(null,arguments)},Su=a._emscripten_bind_b2MotorJointDef_get_maxForce_0=function(){return(Su=a._emscripten_bind_b2MotorJointDef_get_maxForce_0=
a.asm.Js).apply(null,arguments)},Tu=a._emscripten_bind_b2MotorJointDef_set_maxForce_1=function(){return(Tu=a._emscripten_bind_b2MotorJointDef_set_maxForce_1=a.asm.Ks).apply(null,arguments)},Uu=a._emscripten_bind_b2MotorJointDef_get_maxTorque_0=function(){return(Uu=a._emscripten_bind_b2MotorJointDef_get_maxTorque_0=a.asm.Ls).apply(null,arguments)},Vu=a._emscripten_bind_b2MotorJointDef_set_maxTorque_1=function(){return(Vu=a._emscripten_bind_b2MotorJointDef_set_maxTorque_1=a.asm.Ms).apply(null,arguments)},
Wu=a._emscripten_bind_b2MotorJointDef_get_correctionFactor_0=function(){return(Wu=a._emscripten_bind_b2MotorJointDef_get_correctionFactor_0=a.asm.Ns).apply(null,arguments)},Xu=a._emscripten_bind_b2MotorJointDef_set_correctionFactor_1=function(){return(Xu=a._emscripten_bind_b2MotorJointDef_set_correctionFactor_1=a.asm.Os).apply(null,arguments)},Yu=a._emscripten_bind_b2MotorJointDef_get_type_0=function(){return(Yu=a._emscripten_bind_b2MotorJointDef_get_type_0=a.asm.Ps).apply(null,arguments)},Zu=a._emscripten_bind_b2MotorJointDef_set_type_1=
function(){return(Zu=a._emscripten_bind_b2MotorJointDef_set_type_1=a.asm.Qs).apply(null,arguments)},$u=a._emscripten_bind_b2MotorJointDef_get_userData_0=function(){return($u=a._emscripten_bind_b2MotorJointDef_get_userData_0=a.asm.Rs).apply(null,arguments)},av=a._emscripten_bind_b2MotorJointDef_set_userData_1=function(){return(av=a._emscripten_bind_b2MotorJointDef_set_userData_1=a.asm.Ss).apply(null,arguments)},bv=a._emscripten_bind_b2MotorJointDef_get_bodyA_0=function(){return(bv=a._emscripten_bind_b2MotorJointDef_get_bodyA_0=
a.asm.Ts).apply(null,arguments)},cv=a._emscripten_bind_b2MotorJointDef_set_bodyA_1=function(){return(cv=a._emscripten_bind_b2MotorJointDef_set_bodyA_1=a.asm.Us).apply(null,arguments)},dv=a._emscripten_bind_b2MotorJointDef_get_bodyB_0=function(){return(dv=a._emscripten_bind_b2MotorJointDef_get_bodyB_0=a.asm.Vs).apply(null,arguments)},ev=a._emscripten_bind_b2MotorJointDef_set_bodyB_1=function(){return(ev=a._emscripten_bind_b2MotorJointDef_set_bodyB_1=a.asm.Ws).apply(null,arguments)},fv=a._emscripten_bind_b2MotorJointDef_get_collideConnected_0=
function(){return(fv=a._emscripten_bind_b2MotorJointDef_get_collideConnected_0=a.asm.Xs).apply(null,arguments)},gv=a._emscripten_bind_b2MotorJointDef_set_collideConnected_1=function(){return(gv=a._emscripten_bind_b2MotorJointDef_set_collideConnected_1=a.asm.Ys).apply(null,arguments)},hv=a._emscripten_bind_b2MotorJointDef___destroy___0=function(){return(hv=a._emscripten_bind_b2MotorJointDef___destroy___0=a.asm.Zs).apply(null,arguments)},iv=a._emscripten_bind_b2RopeTuning_b2RopeTuning_0=function(){return(iv=
a._emscripten_bind_b2RopeTuning_b2RopeTuning_0=a.asm._s).apply(null,arguments)},jv=a._emscripten_bind_b2RopeTuning_get_stretchingModel_0=function(){return(jv=a._emscripten_bind_b2RopeTuning_get_stretchingModel_0=a.asm.$s).apply(null,arguments)},kv=a._emscripten_bind_b2RopeTuning_set_stretchingModel_1=function(){return(kv=a._emscripten_bind_b2RopeTuning_set_stretchingModel_1=a.asm.at).apply(null,arguments)},lv=a._emscripten_bind_b2RopeTuning_get_bendingModel_0=function(){return(lv=a._emscripten_bind_b2RopeTuning_get_bendingModel_0=
a.asm.bt).apply(null,arguments)},mv=a._emscripten_bind_b2RopeTuning_set_bendingModel_1=function(){return(mv=a._emscripten_bind_b2RopeTuning_set_bendingModel_1=a.asm.ct).apply(null,arguments)},nv=a._emscripten_bind_b2RopeTuning_get_damping_0=function(){return(nv=a._emscripten_bind_b2RopeTuning_get_damping_0=a.asm.dt).apply(null,arguments)},ov=a._emscripten_bind_b2RopeTuning_set_damping_1=function(){return(ov=a._emscripten_bind_b2RopeTuning_set_damping_1=a.asm.et).apply(null,arguments)},pv=a._emscripten_bind_b2RopeTuning_get_stretchStiffness_0=
function(){return(pv=a._emscripten_bind_b2RopeTuning_get_stretchStiffness_0=a.asm.ft).apply(null,arguments)},qv=a._emscripten_bind_b2RopeTuning_set_stretchStiffness_1=function(){return(qv=a._emscripten_bind_b2RopeTuning_set_stretchStiffness_1=a.asm.gt).apply(null,arguments)},rv=a._emscripten_bind_b2RopeTuning_get_stretchHertz_0=function(){return(rv=a._emscripten_bind_b2RopeTuning_get_stretchHertz_0=a.asm.ht).apply(null,arguments)},sv=a._emscripten_bind_b2RopeTuning_set_stretchHertz_1=function(){return(sv=
a._emscripten_bind_b2RopeTuning_set_stretchHertz_1=a.asm.it).apply(null,arguments)},tv=a._emscripten_bind_b2RopeTuning_get_stretchDamping_0=function(){return(tv=a._emscripten_bind_b2RopeTuning_get_stretchDamping_0=a.asm.jt).apply(null,arguments)},uv=a._emscripten_bind_b2RopeTuning_set_stretchDamping_1=function(){return(uv=a._emscripten_bind_b2RopeTuning_set_stretchDamping_1=a.asm.kt).apply(null,arguments)},vv=a._emscripten_bind_b2RopeTuning_get_bendStiffness_0=function(){return(vv=a._emscripten_bind_b2RopeTuning_get_bendStiffness_0=
a.asm.lt).apply(null,arguments)},wv=a._emscripten_bind_b2RopeTuning_set_bendStiffness_1=function(){return(wv=a._emscripten_bind_b2RopeTuning_set_bendStiffness_1=a.asm.mt).apply(null,arguments)},xv=a._emscripten_bind_b2RopeTuning_get_bendHertz_0=function(){return(xv=a._emscripten_bind_b2RopeTuning_get_bendHertz_0=a.asm.nt).apply(null,arguments)},yv=a._emscripten_bind_b2RopeTuning_set_bendHertz_1=function(){return(yv=a._emscripten_bind_b2RopeTuning_set_bendHertz_1=a.asm.ot).apply(null,arguments)},zv=
a._emscripten_bind_b2RopeTuning_get_bendDamping_0=function(){return(zv=a._emscripten_bind_b2RopeTuning_get_bendDamping_0=a.asm.pt).apply(null,arguments)},Av=a._emscripten_bind_b2RopeTuning_set_bendDamping_1=function(){return(Av=a._emscripten_bind_b2RopeTuning_set_bendDamping_1=a.asm.qt).apply(null,arguments)},Bv=a._emscripten_bind_b2RopeTuning_get_isometric_0=function(){return(Bv=a._emscripten_bind_b2RopeTuning_get_isometric_0=a.asm.rt).apply(null,arguments)},Cv=a._emscripten_bind_b2RopeTuning_set_isometric_1=
function(){return(Cv=a._emscripten_bind_b2RopeTuning_set_isometric_1=a.asm.st).apply(null,arguments)},Dv=a._emscripten_bind_b2RopeTuning_get_fixedEffectiveMass_0=function(){return(Dv=a._emscripten_bind_b2RopeTuning_get_fixedEffectiveMass_0=a.asm.tt).apply(null,arguments)},Ev=a._emscripten_bind_b2RopeTuning_set_fixedEffectiveMass_1=function(){return(Ev=a._emscripten_bind_b2RopeTuning_set_fixedEffectiveMass_1=a.asm.ut).apply(null,arguments)},Fv=a._emscripten_bind_b2RopeTuning_get_warmStart_0=function(){return(Fv=
a._emscripten_bind_b2RopeTuning_get_warmStart_0=a.asm.vt).apply(null,arguments)},Gv=a._emscripten_bind_b2RopeTuning_set_warmStart_1=function(){return(Gv=a._emscripten_bind_b2RopeTuning_set_warmStart_1=a.asm.wt).apply(null,arguments)},Hv=a._emscripten_bind_b2RopeTuning___destroy___0=function(){return(Hv=a._emscripten_bind_b2RopeTuning___destroy___0=a.asm.xt).apply(null,arguments)},Iv=a._emscripten_bind_b2RopeDef_b2RopeDef_0=function(){return(Iv=a._emscripten_bind_b2RopeDef_b2RopeDef_0=a.asm.yt).apply(null,
arguments)},Jv=a._emscripten_bind_b2RopeDef_get_position_0=function(){return(Jv=a._emscripten_bind_b2RopeDef_get_position_0=a.asm.zt).apply(null,arguments)},Kv=a._emscripten_bind_b2RopeDef_set_position_1=function(){return(Kv=a._emscripten_bind_b2RopeDef_set_position_1=a.asm.At).apply(null,arguments)},Lv=a._emscripten_bind_b2RopeDef_get_vertices_0=function(){return(Lv=a._emscripten_bind_b2RopeDef_get_vertices_0=a.asm.Bt).apply(null,arguments)},Mv=a._emscripten_bind_b2RopeDef_set_vertices_1=function(){return(Mv=
a._emscripten_bind_b2RopeDef_set_vertices_1=a.asm.Ct).apply(null,arguments)},Nv=a._emscripten_bind_b2RopeDef_get_count_0=function(){return(Nv=a._emscripten_bind_b2RopeDef_get_count_0=a.asm.Dt).apply(null,arguments)},Ov=a._emscripten_bind_b2RopeDef_set_count_1=function(){return(Ov=a._emscripten_bind_b2RopeDef_set_count_1=a.asm.Et).apply(null,arguments)},Pv=a._emscripten_bind_b2RopeDef_get_gravity_0=function(){return(Pv=a._emscripten_bind_b2RopeDef_get_gravity_0=a.asm.Ft).apply(null,arguments)},Qv=
a._emscripten_bind_b2RopeDef_set_gravity_1=function(){return(Qv=a._emscripten_bind_b2RopeDef_set_gravity_1=a.asm.Gt).apply(null,arguments)},Rv=a._emscripten_bind_b2RopeDef_get_tuning_0=function(){return(Rv=a._emscripten_bind_b2RopeDef_get_tuning_0=a.asm.Ht).apply(null,arguments)},Sv=a._emscripten_bind_b2RopeDef_set_tuning_1=function(){return(Sv=a._emscripten_bind_b2RopeDef_set_tuning_1=a.asm.It).apply(null,arguments)},Tv=a._emscripten_bind_b2RopeDef___destroy___0=function(){return(Tv=a._emscripten_bind_b2RopeDef___destroy___0=
a.asm.Jt).apply(null,arguments)},Uv=a._emscripten_bind_b2Rope_b2Rope_0=function(){return(Uv=a._emscripten_bind_b2Rope_b2Rope_0=a.asm.Kt).apply(null,arguments)},Vv=a._emscripten_bind_b2Rope_Create_1=function(){return(Vv=a._emscripten_bind_b2Rope_Create_1=a.asm.Lt).apply(null,arguments)},Wv=a._emscripten_bind_b2Rope_SetTuning_1=function(){return(Wv=a._emscripten_bind_b2Rope_SetTuning_1=a.asm.Mt).apply(null,arguments)},Xv=a._emscripten_bind_b2Rope_Step_3=function(){return(Xv=a._emscripten_bind_b2Rope_Step_3=
a.asm.Nt).apply(null,arguments)},Yv=a._emscripten_bind_b2Rope_Reset_1=function(){return(Yv=a._emscripten_bind_b2Rope_Reset_1=a.asm.Ot).apply(null,arguments)},Zv=a._emscripten_bind_b2Rope_Draw_1=function(){return(Zv=a._emscripten_bind_b2Rope_Draw_1=a.asm.Pt).apply(null,arguments)},$v=a._emscripten_bind_b2Rope___destroy___0=function(){return($v=a._emscripten_bind_b2Rope___destroy___0=a.asm.Qt).apply(null,arguments)},aw=a._emscripten_bind_b2ClipVertex_b2ClipVertex_0=function(){return(aw=a._emscripten_bind_b2ClipVertex_b2ClipVertex_0=
a.asm.Rt).apply(null,arguments)},bw=a._emscripten_bind_b2ClipVertex_get_v_0=function(){return(bw=a._emscripten_bind_b2ClipVertex_get_v_0=a.asm.St).apply(null,arguments)},cw=a._emscripten_bind_b2ClipVertex_set_v_1=function(){return(cw=a._emscripten_bind_b2ClipVertex_set_v_1=a.asm.Tt).apply(null,arguments)},dw=a._emscripten_bind_b2ClipVertex_get_id_0=function(){return(dw=a._emscripten_bind_b2ClipVertex_get_id_0=a.asm.Ut).apply(null,arguments)},ew=a._emscripten_bind_b2ClipVertex_set_id_1=function(){return(ew=
a._emscripten_bind_b2ClipVertex_set_id_1=a.asm.Vt).apply(null,arguments)},fw=a._emscripten_bind_b2ClipVertex___destroy___0=function(){return(fw=a._emscripten_bind_b2ClipVertex___destroy___0=a.asm.Wt).apply(null,arguments)},gw=a._emscripten_enum_b2ShapeType_e_circle=function(){return(gw=a._emscripten_enum_b2ShapeType_e_circle=a.asm.Xt).apply(null,arguments)},hw=a._emscripten_enum_b2ShapeType_e_edge=function(){return(hw=a._emscripten_enum_b2ShapeType_e_edge=a.asm.Yt).apply(null,arguments)},iw=a._emscripten_enum_b2ShapeType_e_polygon=
function(){return(iw=a._emscripten_enum_b2ShapeType_e_polygon=a.asm.Zt).apply(null,arguments)},jw=a._emscripten_enum_b2ShapeType_e_chain=function(){return(jw=a._emscripten_enum_b2ShapeType_e_chain=a.asm._t).apply(null,arguments)},kw=a._emscripten_enum_b2ShapeType_e_typeCount=function(){return(kw=a._emscripten_enum_b2ShapeType_e_typeCount=a.asm.$t).apply(null,arguments)},lw=a._emscripten_enum_b2BodyType_b2_staticBody=function(){return(lw=a._emscripten_enum_b2BodyType_b2_staticBody=a.asm.au).apply(null,
arguments)},mw=a._emscripten_enum_b2BodyType_b2_kinematicBody=function(){return(mw=a._emscripten_enum_b2BodyType_b2_kinematicBody=a.asm.bu).apply(null,arguments)},nw=a._emscripten_enum_b2BodyType_b2_dynamicBody=function(){return(nw=a._emscripten_enum_b2BodyType_b2_dynamicBody=a.asm.cu).apply(null,arguments)},ow=a._emscripten_enum_b2JointType_e_unknownJoint=function(){return(ow=a._emscripten_enum_b2JointType_e_unknownJoint=a.asm.du).apply(null,arguments)},pw=a._emscripten_enum_b2JointType_e_revoluteJoint=
function(){return(pw=a._emscripten_enum_b2JointType_e_revoluteJoint=a.asm.eu).apply(null,arguments)},qw=a._emscripten_enum_b2JointType_e_prismaticJoint=function(){return(qw=a._emscripten_enum_b2JointType_e_prismaticJoint=a.asm.fu).apply(null,arguments)},rw=a._emscripten_enum_b2JointType_e_distanceJoint=function(){return(rw=a._emscripten_enum_b2JointType_e_distanceJoint=a.asm.gu).apply(null,arguments)},sw=a._emscripten_enum_b2JointType_e_pulleyJoint=function(){return(sw=a._emscripten_enum_b2JointType_e_pulleyJoint=
a.asm.hu).apply(null,arguments)},tw=a._emscripten_enum_b2JointType_e_mouseJoint=function(){return(tw=a._emscripten_enum_b2JointType_e_mouseJoint=a.asm.iu).apply(null,arguments)},uw=a._emscripten_enum_b2JointType_e_gearJoint=function(){return(uw=a._emscripten_enum_b2JointType_e_gearJoint=a.asm.ju).apply(null,arguments)},vw=a._emscripten_enum_b2JointType_e_wheelJoint=function(){return(vw=a._emscripten_enum_b2JointType_e_wheelJoint=a.asm.ku).apply(null,arguments)},ww=a._emscripten_enum_b2JointType_e_weldJoint=
function(){return(ww=a._emscripten_enum_b2JointType_e_weldJoint=a.asm.lu).apply(null,arguments)},xw=a._emscripten_enum_b2JointType_e_frictionJoint=function(){return(xw=a._emscripten_enum_b2JointType_e_frictionJoint=a.asm.mu).apply(null,arguments)},yw=a._emscripten_enum_b2JointType_e_ropeJoint=function(){return(yw=a._emscripten_enum_b2JointType_e_ropeJoint=a.asm.nu).apply(null,arguments)},zw=a._emscripten_enum_b2JointType_e_motorJoint=function(){return(zw=a._emscripten_enum_b2JointType_e_motorJoint=
a.asm.ou).apply(null,arguments)},Aw=a._emscripten_enum_b2ContactFeatureType_e_vertex=function(){return(Aw=a._emscripten_enum_b2ContactFeatureType_e_vertex=a.asm.pu).apply(null,arguments)},Bw=a._emscripten_enum_b2ContactFeatureType_e_face=function(){return(Bw=a._emscripten_enum_b2ContactFeatureType_e_face=a.asm.qu).apply(null,arguments)},Cw=a._emscripten_enum_b2DrawFlag_e_shapeBit=function(){return(Cw=a._emscripten_enum_b2DrawFlag_e_shapeBit=a.asm.ru).apply(null,arguments)},Dw=a._emscripten_enum_b2DrawFlag_e_jointBit=
function(){return(Dw=a._emscripten_enum_b2DrawFlag_e_jointBit=a.asm.su).apply(null,arguments)},Ew=a._emscripten_enum_b2DrawFlag_e_aabbBit=function(){return(Ew=a._emscripten_enum_b2DrawFlag_e_aabbBit=a.asm.tu).apply(null,arguments)},Fw=a._emscripten_enum_b2DrawFlag_e_pairBit=function(){return(Fw=a._emscripten_enum_b2DrawFlag_e_pairBit=a.asm.uu).apply(null,arguments)},Gw=a._emscripten_enum_b2DrawFlag_e_centerOfMassBit=function(){return(Gw=a._emscripten_enum_b2DrawFlag_e_centerOfMassBit=a.asm.vu).apply(null,
arguments)},Hw=a._emscripten_enum_b2ManifoldType_e_circles=function(){return(Hw=a._emscripten_enum_b2ManifoldType_e_circles=a.asm.wu).apply(null,arguments)},Iw=a._emscripten_enum_b2ManifoldType_e_faceA=function(){return(Iw=a._emscripten_enum_b2ManifoldType_e_faceA=a.asm.xu).apply(null,arguments)},Jw=a._emscripten_enum_b2ManifoldType_e_faceB=function(){return(Jw=a._emscripten_enum_b2ManifoldType_e_faceB=a.asm.yu).apply(null,arguments)},Kw=a._emscripten_enum_b2PointState_b2_nullState=function(){return(Kw=
a._emscripten_enum_b2PointState_b2_nullState=a.asm.zu).apply(null,arguments)},Lw=a._emscripten_enum_b2PointState_b2_addState=function(){return(Lw=a._emscripten_enum_b2PointState_b2_addState=a.asm.Au).apply(null,arguments)},Mw=a._emscripten_enum_b2PointState_b2_persistState=function(){return(Mw=a._emscripten_enum_b2PointState_b2_persistState=a.asm.Bu).apply(null,arguments)},Nw=a._emscripten_enum_b2PointState_b2_removeState=function(){return(Nw=a._emscripten_enum_b2PointState_b2_removeState=a.asm.Cu).apply(null,
arguments)},Ow=a._emscripten_enum_b2StretchingModel_b2_pbdStretchingModel=function(){return(Ow=a._emscripten_enum_b2StretchingModel_b2_pbdStretchingModel=a.asm.Du).apply(null,arguments)},Pw=a._emscripten_enum_b2StretchingModel_b2_xpbdStretchingModel=function(){return(Pw=a._emscripten_enum_b2StretchingModel_b2_xpbdStretchingModel=a.asm.Eu).apply(null,arguments)},Qw=a._emscripten_enum_b2BendingModel_b2_springAngleBendingModel=function(){return(Qw=a._emscripten_enum_b2BendingModel_b2_springAngleBendingModel=
a.asm.Fu).apply(null,arguments)},Rw=a._emscripten_enum_b2BendingModel_b2_pbdAngleBendingModel=function(){return(Rw=a._emscripten_enum_b2BendingModel_b2_pbdAngleBendingModel=a.asm.Gu).apply(null,arguments)},Sw=a._emscripten_enum_b2BendingModel_b2_xpbdAngleBendingModel=function(){return(Sw=a._emscripten_enum_b2BendingModel_b2_xpbdAngleBendingModel=a.asm.Hu).apply(null,arguments)},Tw=a._emscripten_enum_b2BendingModel_b2_pbdDistanceBendingModel=function(){return(Tw=a._emscripten_enum_b2BendingModel_b2_pbdDistanceBendingModel=
a.asm.Iu).apply(null,arguments)},Uw=a._emscripten_enum_b2BendingModel_b2_pbdHeightBendingModel=function(){return(Uw=a._emscripten_enum_b2BendingModel_b2_pbdHeightBendingModel=a.asm.Ju).apply(null,arguments)},Vw=a._emscripten_bind_b2RopeDef_get_masses_0=function(){return(Vw=a._emscripten_bind_b2RopeDef_get_masses_0=a.asm.Ku).apply(null,arguments)},Ww=a._emscripten_bind_b2RopeDef_set_masses_1=function(){return(Ww=a._emscripten_bind_b2RopeDef_set_masses_1=a.asm.Lu).apply(null,arguments)},Xw=a._emscripten_bind_b2GetPointStates_4=
function(){return(Xw=a._emscripten_bind_b2GetPointStates_4=a.asm.Mu).apply(null,arguments)},Yw=a._emscripten_bind_b2CollideCircles_5=function(){return(Yw=a._emscripten_bind_b2CollideCircles_5=a.asm.Nu).apply(null,arguments)},Zw=a._emscripten_bind_b2CollidePolygonAndCircle_5=function(){return(Zw=a._emscripten_bind_b2CollidePolygonAndCircle_5=a.asm.Ou).apply(null,arguments)},$w=a._emscripten_bind_b2CollidePolygons_5=function(){return($w=a._emscripten_bind_b2CollidePolygons_5=a.asm.Pu).apply(null,arguments)},
ax=a._emscripten_bind_b2CollideEdgeAndCircle_5=function(){return(ax=a._emscripten_bind_b2CollideEdgeAndCircle_5=a.asm.Qu).apply(null,arguments)},bx=a._emscripten_bind_b2CollideEdgeAndPolygon_5=function(){return(bx=a._emscripten_bind_b2CollideEdgeAndPolygon_5=a.asm.Ru).apply(null,arguments)},cx=a._emscripten_bind_b2ClipSegmentToLine_5=function(){return(cx=a._emscripten_bind_b2ClipSegmentToLine_5=a.asm.Su).apply(null,arguments)},dx=a._emscripten_bind_b2TestOverlap_6=function(){return(dx=a._emscripten_bind_b2TestOverlap_6=
a.asm.Tu).apply(null,arguments)},ex=a._emscripten_bind_b2TestOverlap_2=function(){return(ex=a._emscripten_bind_b2TestOverlap_2=a.asm.Uu).apply(null,arguments)},fx=a._emscripten_bind_b2LinearStiffness_6=function(){return(fx=a._emscripten_bind_b2LinearStiffness_6=a.asm.Vu).apply(null,arguments)},gx=a._emscripten_bind_b2AngularStiffness_6=function(){return(gx=a._emscripten_bind_b2AngularStiffness_6=a.asm.Wu).apply(null,arguments)};a._malloc=function(){return(a._malloc=a.asm.Yu).apply(null,arguments)};
a._free=function(){return(a._free=a.asm.Zu).apply(null,arguments)};var hx;Ja=function ix(){hx||jx();hx||(Ja=ix)};
function jx(){function b(){if(!hx&&(hx=!0,a.calledRun=!0,!sa)){Ga=!0;Ra(Ea);aa(a);if(a.onRuntimeInitialized)a.onRuntimeInitialized();if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;){var c=a.postRun.shift();Fa.unshift(c)}Ra(Fa)}}if(!(0<Ha)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)Da.unshift(a.preRun.shift());Ra(Da);0<Ha||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},
1);b()},1)):b())}}a.run=jx;if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();jx();function e(){}e.prototype=Object.create(e.prototype);e.prototype.constructor=e;e.prototype.av=e;e.bv={};a.WrapperObject=e;function g(b){return(b||e).bv}a.getCache=g;function h(b,c){var d=g(c),f=d[b];if(f)return f;f=Object.create((c||e).prototype);f.$u=b;return d[b]=f}a.wrapPointer=h;a.castObject=function(b,c){return h(b.$u,c)};a.NULL=h(0);
a.destroy=function(b){if(!b.__destroy__)throw"Error: Cannot destroy object. (Did you create it yourself?)";b.__destroy__();delete g(b.av)[b.$u]};a.compare=function(b,c){return b.$u===c.$u};a.getPointer=function(b){return b.$u};a.getClass=function(b){return b.av};var kx=0,lx=0,mx=[],nx=0;function ox(){if(nx){for(var b=0;b<mx.length;b++)a._free(mx[b]);mx.length=0;a._free(kx);kx=0;lx+=nx;nx=0}kx||(lx+=128,(kx=a._malloc(lx))||na("Assertion failed: undefined"))}
function px(){throw"cannot construct a b2ContactListener, no constructor in IDL";}px.prototype=Object.create(e.prototype);px.prototype.constructor=px;px.prototype.av=px;px.bv={};a.b2ContactListener=px;px.prototype.__destroy__=px.prototype.cv=function(){Xa(this.$u)};function k(){throw"cannot construct a b2Shape, no constructor in IDL";}k.prototype=Object.create(e.prototype);k.prototype.constructor=k;k.prototype.av=k;k.bv={};a.b2Shape=k;k.prototype.GetType=function(){return Ya(this.$u)};
k.prototype.GetChildCount=function(){return Za(this.$u)};k.prototype.TestPoint=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);return!!$a(d,b,c)};k.prototype.RayCast=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);return!!ab(p,b,c,d,f)};
k.prototype.ComputeAABB=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);bb(f,b,c,d)};k.prototype.ComputeMass=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);cb(d,b,c)};k.prototype.get_m_type=k.prototype.uv=function(){return db(this.$u)};k.prototype.set_m_type=k.prototype.xv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);eb(c,b)};
Object.defineProperty(k.prototype,"m_type",{get:k.prototype.uv,set:k.prototype.xv});k.prototype.get_m_radius=k.prototype.tv=function(){return fb(this.$u)};k.prototype.set_m_radius=k.prototype.wv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);hb(c,b)};Object.defineProperty(k.prototype,"m_radius",{get:k.prototype.tv,set:k.prototype.wv});k.prototype.__destroy__=k.prototype.cv=function(){ib(this.$u)};function qx(){throw"cannot construct a b2RayCastCallback, no constructor in IDL";}
qx.prototype=Object.create(e.prototype);qx.prototype.constructor=qx;qx.prototype.av=qx;qx.bv={};a.b2RayCastCallback=qx;qx.prototype.__destroy__=qx.prototype.cv=function(){jb(this.$u)};function rx(){throw"cannot construct a b2QueryCallback, no constructor in IDL";}rx.prototype=Object.create(e.prototype);rx.prototype.constructor=rx;rx.prototype.av=rx;rx.bv={};a.b2QueryCallback=rx;rx.prototype.__destroy__=rx.prototype.cv=function(){kb(this.$u)};function l(){this.$u=lb();g(l)[this.$u]=this}
l.prototype=Object.create(e.prototype);l.prototype.constructor=l;l.prototype.av=l;l.bv={};a.b2JointDef=l;l.prototype.get_type=l.prototype.dv=function(){return mb(this.$u)};l.prototype.set_type=l.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);nb(c,b)};Object.defineProperty(l.prototype,"type",{get:l.prototype.dv,set:l.prototype.fv});l.prototype.get_userData=l.prototype.ev=function(){return h(ob(this.$u),m)};
l.prototype.set_userData=l.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pb(c,b)};Object.defineProperty(l.prototype,"userData",{get:l.prototype.ev,set:l.prototype.gv});l.prototype.get_bodyA=l.prototype.hv=function(){return h(qb(this.$u),n)};l.prototype.set_bodyA=l.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);rb(c,b)};Object.defineProperty(l.prototype,"bodyA",{get:l.prototype.hv,set:l.prototype.lv});
l.prototype.get_bodyB=l.prototype.jv=function(){return h(vb(this.$u),n)};l.prototype.set_bodyB=l.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);wb(c,b)};Object.defineProperty(l.prototype,"bodyB",{get:l.prototype.jv,set:l.prototype.mv});l.prototype.get_collideConnected=l.prototype.kv=function(){return!!xb(this.$u)};l.prototype.set_collideConnected=l.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);yb(c,b)};
Object.defineProperty(l.prototype,"collideConnected",{get:l.prototype.kv,set:l.prototype.nv});l.prototype.__destroy__=l.prototype.cv=function(){zb(this.$u)};function q(){throw"cannot construct a b2Joint, no constructor in IDL";}q.prototype=Object.create(e.prototype);q.prototype.constructor=q;q.prototype.av=q;q.bv={};a.b2Joint=q;q.prototype.GetType=function(){return Ab(this.$u)};q.prototype.GetBodyA=function(){return h(Bb(this.$u),n)};q.prototype.GetBodyB=function(){return h(Cb(this.$u),n)};
q.prototype.GetAnchorA=function(){return h(Db(this.$u),r)};q.prototype.GetAnchorB=function(){return h(Eb(this.$u),r)};q.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Fb(c,b),r)};q.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return Gb(c,b)};q.prototype.GetNext=function(){return h(Hb(this.$u),q)};q.prototype.GetUserData=function(){return h(Ib(this.$u),m)};q.prototype.GetCollideConnected=function(){return!!Jb(this.$u)};
q.prototype.Dump=function(){Kb(this.$u)};function sx(){throw"cannot construct a b2ContactFilter, no constructor in IDL";}sx.prototype=Object.create(e.prototype);sx.prototype.constructor=sx;sx.prototype.av=sx;sx.bv={};a.b2ContactFilter=sx;sx.prototype.__destroy__=sx.prototype.cv=function(){Lb(this.$u)};function tx(){throw"cannot construct a b2DestructionListenerWrapper, no constructor in IDL";}tx.prototype=Object.create(e.prototype);tx.prototype.constructor=tx;tx.prototype.av=tx;tx.bv={};
a.b2DestructionListenerWrapper=tx;tx.prototype.__destroy__=tx.prototype.cv=function(){Mb(this.$u)};function ux(){throw"cannot construct a b2Draw, no constructor in IDL";}ux.prototype=Object.create(e.prototype);ux.prototype.constructor=ux;ux.prototype.av=ux;ux.bv={};a.b2Draw=ux;ux.prototype.SetFlags=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Nb(c,b)};ux.prototype.GetFlags=function(){return Ob(this.$u)};
ux.prototype.AppendFlags=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Pb(c,b)};ux.prototype.ClearFlags=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Qb(c,b)};ux.prototype.__destroy__=ux.prototype.cv=function(){Rb(this.$u)};function vx(){throw"cannot construct a VoidPtr, no constructor in IDL";}vx.prototype=Object.create(e.prototype);vx.prototype.constructor=vx;vx.prototype.av=vx;vx.bv={};a.VoidPtr=vx;vx.prototype.__destroy__=vx.prototype.cv=function(){Sb(this.$u)};
function wx(){throw"cannot construct a b2Contact, no constructor in IDL";}wx.prototype=Object.create(e.prototype);wx.prototype.constructor=wx;wx.prototype.av=wx;wx.bv={};a.b2Contact=wx;wx.prototype.GetManifold=function(){return h(Tb(this.$u),t)};wx.prototype.GetWorldManifold=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ub(c,b)};wx.prototype.IsTouching=function(){return!!Vb(this.$u)};wx.prototype.SetEnabled=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Wb(c,b)};
wx.prototype.IsEnabled=function(){return!!Xb(this.$u)};wx.prototype.GetNext=function(){return h(Yb(this.$u),wx)};wx.prototype.GetFixtureA=function(){return h(Zb(this.$u),u)};wx.prototype.GetChildIndexA=function(){return $b(this.$u)};wx.prototype.GetFixtureB=function(){return h(ac(this.$u),u)};wx.prototype.GetChildIndexB=function(){return bc(this.$u)};wx.prototype.SetFriction=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);cc(c,b)};wx.prototype.GetFriction=function(){return dc(this.$u)};
wx.prototype.ResetFriction=function(){ec(this.$u)};wx.prototype.SetRestitution=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);fc(c,b)};wx.prototype.GetRestitution=function(){return gc(this.$u)};wx.prototype.ResetRestitution=function(){hc(this.$u)};wx.prototype.SetRestitutionThreshold=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ic(c,b)};wx.prototype.GetRestitutionThreshold=function(){return jc(this.$u)};wx.prototype.ResetRestitutionThreshold=function(){kc(this.$u)};
wx.prototype.SetTangentSpeed=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);lc(c,b)};wx.prototype.GetTangentSpeed=function(){return mc(this.$u)};function xx(){this.$u=nc();g(xx)[this.$u]=this}xx.prototype=Object.create(px.prototype);xx.prototype.constructor=xx;xx.prototype.av=xx;xx.bv={};a.JSContactListener=xx;xx.prototype.BeginContact=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);oc(c,b)};
xx.prototype.EndContact=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pc(c,b)};xx.prototype.PreSolve=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);qc(d,b,c)};xx.prototype.PostSolve=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);rc(d,b,c)};xx.prototype.__destroy__=xx.prototype.cv=function(){sc(this.$u)};
function yx(){throw"cannot construct a JSContactListenerWithoutSolveCallbacks, no constructor in IDL";}yx.prototype=Object.create(px.prototype);yx.prototype.constructor=yx;yx.prototype.av=yx;yx.bv={};a.JSContactListenerWithoutSolveCallbacks=yx;yx.prototype.JSContactListener=function(){tc(this.$u)};yx.prototype.BeginContact=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);uc(c,b)};yx.prototype.EndContact=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);vc(c,b)};
yx.prototype.__destroy__=yx.prototype.cv=function(){wc(this.$u)};function v(b){b&&"object"===typeof b&&(b=b.$u);this.$u=xc(b);g(v)[this.$u]=this}v.prototype=Object.create(e.prototype);v.prototype.constructor=v;v.prototype.av=v;v.bv={};a.b2World=v;v.prototype.SetDestructionListener=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);yc(c,b)};v.prototype.SetContactFilter=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);zc(c,b)};
v.prototype.SetContactListener=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ac(c,b)};v.prototype.SetDebugDraw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Bc(c,b)};v.prototype.CreateBody=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Cc(c,b),n)};v.prototype.DestroyBody=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Dc(c,b)};v.prototype.CreateJoint=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Ec(c,b),q)};
v.prototype.DestroyJoint=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Fc(c,b)};v.prototype.Step=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);Gc(f,b,c,d)};v.prototype.ClearForces=function(){Hc(this.$u)};v.prototype.DebugDraw=function(){Ic(this.$u)};v.prototype.QueryAABB=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Jc(d,b,c)};
v.prototype.RayCast=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);Kc(f,b,c,d)};v.prototype.GetBodyList=function(){return h(Lc(this.$u),n)};v.prototype.GetJointList=function(){return h(Mc(this.$u),q)};v.prototype.GetContactList=function(){return h(Nc(this.$u),wx)};v.prototype.SetAllowSleeping=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Oc(c,b)};v.prototype.GetAllowSleeping=function(){return!!Pc(this.$u)};
v.prototype.SetWarmStarting=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Qc(c,b)};v.prototype.GetWarmStarting=function(){return!!Rc(this.$u)};v.prototype.SetContinuousPhysics=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Sc(c,b)};v.prototype.GetContinuousPhysics=function(){return!!Tc(this.$u)};v.prototype.SetSubStepping=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Uc(c,b)};v.prototype.GetSubStepping=function(){return!!Vc(this.$u)};
v.prototype.GetProxyCount=function(){return Wc(this.$u)};v.prototype.GetBodyCount=function(){return Xc(this.$u)};v.prototype.GetJointCount=function(){return Yc(this.$u)};v.prototype.GetContactCount=function(){return Zc(this.$u)};v.prototype.GetTreeHeight=function(){return $c(this.$u)};v.prototype.GetTreeBalance=function(){return ad(this.$u)};v.prototype.GetTreeQuality=function(){return bd(this.$u)};v.prototype.SetGravity=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);cd(c,b)};
v.prototype.GetGravity=function(){return h(dd(this.$u),r)};v.prototype.IsLocked=function(){return!!ed(this.$u)};v.prototype.SetAutoClearForces=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);fd(c,b)};v.prototype.GetAutoClearForces=function(){return!!gd(this.$u)};v.prototype.GetProfile=function(){return h(hd(this.$u),w)};v.prototype.Dump=function(){jd(this.$u)};v.prototype.__destroy__=v.prototype.cv=function(){kd(this.$u)};
function zx(){throw"cannot construct a b2FixtureUserData, no constructor in IDL";}zx.prototype=Object.create(e.prototype);zx.prototype.constructor=zx;zx.prototype.av=zx;zx.bv={};a.b2FixtureUserData=zx;zx.prototype.get_pointer=zx.prototype.Ev=function(){return ld(this.$u)};zx.prototype.set_pointer=zx.prototype.Kv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);md(c,b)};Object.defineProperty(zx.prototype,"pointer",{get:zx.prototype.Ev,set:zx.prototype.Kv});
zx.prototype.__destroy__=zx.prototype.cv=function(){nd(this.$u)};function x(){this.$u=od();g(x)[this.$u]=this}x.prototype=Object.create(e.prototype);x.prototype.constructor=x;x.prototype.av=x;x.bv={};a.b2FixtureDef=x;x.prototype.get_shape=x.prototype.cy=function(){return h(pd(this.$u),k)};x.prototype.set_shape=x.prototype.aA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);qd(c,b)};Object.defineProperty(x.prototype,"shape",{get:x.prototype.cy,set:x.prototype.aA});
x.prototype.get_userData=x.prototype.ev=function(){return h(rd(this.$u),zx)};x.prototype.set_userData=x.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);sd(c,b)};Object.defineProperty(x.prototype,"userData",{get:x.prototype.ev,set:x.prototype.gv});x.prototype.get_friction=x.prototype.cx=function(){return td(this.$u)};x.prototype.set_friction=x.prototype.$y=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ud(c,b)};
Object.defineProperty(x.prototype,"friction",{get:x.prototype.cx,set:x.prototype.$y});x.prototype.get_restitution=x.prototype.Zx=function(){return vd(this.$u)};x.prototype.set_restitution=x.prototype.Xz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);wd(c,b)};Object.defineProperty(x.prototype,"restitution",{get:x.prototype.Zx,set:x.prototype.Xz});x.prototype.get_restitutionThreshold=x.prototype.$x=function(){return xd(this.$u)};
x.prototype.set_restitutionThreshold=x.prototype.Yz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);yd(c,b)};Object.defineProperty(x.prototype,"restitutionThreshold",{get:x.prototype.$x,set:x.prototype.Yz});x.prototype.get_density=x.prototype.Xw=function(){return zd(this.$u)};x.prototype.set_density=x.prototype.Uy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ad(c,b)};Object.defineProperty(x.prototype,"density",{get:x.prototype.Xw,set:x.prototype.Uy});
x.prototype.get_isSensor=x.prototype.lx=function(){return!!Bd(this.$u)};x.prototype.set_isSensor=x.prototype.iz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Cd(c,b)};Object.defineProperty(x.prototype,"isSensor",{get:x.prototype.lx,set:x.prototype.iz});x.prototype.get_filter=x.prototype.Zw=function(){return h(Dd(this.$u),Ax)};x.prototype.set_filter=x.prototype.Wy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ed(c,b)};
Object.defineProperty(x.prototype,"filter",{get:x.prototype.Zw,set:x.prototype.Wy});x.prototype.__destroy__=x.prototype.cv=function(){Fd(this.$u)};function u(){throw"cannot construct a b2Fixture, no constructor in IDL";}u.prototype=Object.create(e.prototype);u.prototype.constructor=u;u.prototype.av=u;u.bv={};a.b2Fixture=u;u.prototype.GetType=function(){return Gd(this.$u)};u.prototype.GetShape=function(){return h(Hd(this.$u),k)};
u.prototype.SetSensor=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Id(c,b)};u.prototype.IsSensor=function(){return!!Jd(this.$u)};u.prototype.SetFilterData=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Kd(c,b)};u.prototype.GetFilterData=function(){return h(Ld(this.$u),Ax)};u.prototype.Refilter=function(){Md(this.$u)};u.prototype.GetBody=function(){return h(Nd(this.$u),n)};u.prototype.GetNext=function(){return h(Od(this.$u),u)};
u.prototype.GetUserData=function(){return h(Pd(this.$u),zx)};u.prototype.TestPoint=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return!!Qd(c,b)};u.prototype.RayCast=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);return!!Rd(f,b,c,d)};u.prototype.GetMassData=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Sd(c,b)};
u.prototype.SetDensity=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Td(c,b)};u.prototype.GetDensity=function(){return Ud(this.$u)};u.prototype.GetFriction=function(){return Vd(this.$u)};u.prototype.SetFriction=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Wd(c,b)};u.prototype.GetRestitution=function(){return Xd(this.$u)};u.prototype.SetRestitution=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Yd(c,b)};u.prototype.GetRestitutionThreshold=function(){return Zd(this.$u)};
u.prototype.SetRestitutionThreshold=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);$d(c,b)};u.prototype.GetAABB=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(ae(c,b),Bx)};u.prototype.Dump=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);be(c,b)};u.prototype.__destroy__=u.prototype.cv=function(){ce(this.$u)};
function Cx(b,c){b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);this.$u=void 0===b?de():void 0===c?_emscripten_bind_b2Transform_b2Transform_1(b):ee(b,c);g(Cx)[this.$u]=this}Cx.prototype=Object.create(e.prototype);Cx.prototype.constructor=Cx;Cx.prototype.av=Cx;Cx.bv={};a.b2Transform=Cx;Cx.prototype.SetIdentity=function(){fe(this.$u)};Cx.prototype.Set=Cx.prototype.Set=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);ge(d,b,c)};
Cx.prototype.get_p=Cx.prototype.Tx=function(){return h(he(this.$u),r)};Cx.prototype.set_p=Cx.prototype.Rz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ie(c,b)};Object.defineProperty(Cx.prototype,"p",{get:Cx.prototype.Tx,set:Cx.prototype.Rz});Cx.prototype.get_q=Cx.prototype.Xx=function(){return h(je(this.$u),Dx)};Cx.prototype.set_q=Cx.prototype.Vz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ke(c,b)};Object.defineProperty(Cx.prototype,"q",{get:Cx.prototype.Xx,set:Cx.prototype.Vz});
Cx.prototype.__destroy__=Cx.prototype.cv=function(){le(this.$u)};function Ex(){this.$u=me();g(Ex)[this.$u]=this}Ex.prototype=Object.create(qx.prototype);Ex.prototype.constructor=Ex;Ex.prototype.av=Ex;Ex.bv={};a.JSRayCastCallback=Ex;Ex.prototype.ReportFixture=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);return ne(p,b,c,d,f)};Ex.prototype.__destroy__=Ex.prototype.cv=function(){oe(this.$u)};
function Fx(){this.$u=pe();g(Fx)[this.$u]=this}Fx.prototype=Object.create(rx.prototype);Fx.prototype.constructor=Fx;Fx.prototype.av=Fx;Fx.bv={};a.JSQueryCallback=Fx;Fx.prototype.ReportFixture=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return!!qe(c,b)};Fx.prototype.__destroy__=Fx.prototype.cv=function(){re(this.$u)};function Gx(){this.$u=se();g(Gx)[this.$u]=this}Gx.prototype=Object.create(e.prototype);Gx.prototype.constructor=Gx;Gx.prototype.av=Gx;Gx.bv={};a.b2MassData=Gx;
Gx.prototype.get_mass=Gx.prototype.Lx=function(){return te(this.$u)};Gx.prototype.set_mass=Gx.prototype.Jz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ue(c,b)};Object.defineProperty(Gx.prototype,"mass",{get:Gx.prototype.Lx,set:Gx.prototype.Jz});Gx.prototype.get_center=Gx.prototype.Sw=function(){return h(ve(this.$u),r)};Gx.prototype.set_center=Gx.prototype.Py=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);we(c,b)};
Object.defineProperty(Gx.prototype,"center",{get:Gx.prototype.Sw,set:Gx.prototype.Py});Gx.prototype.get_I=Gx.prototype.Cw=function(){return xe(this.$u)};Gx.prototype.set_I=Gx.prototype.zy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ye(c,b)};Object.defineProperty(Gx.prototype,"I",{get:Gx.prototype.Cw,set:Gx.prototype.zy});Gx.prototype.__destroy__=Gx.prototype.cv=function(){ze(this.$u)};
function r(b,c){b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);this.$u=void 0===b?Ae():void 0===c?_emscripten_bind_b2Vec2_b2Vec2_1(b):Be(b,c);g(r)[this.$u]=this}r.prototype=Object.create(e.prototype);r.prototype.constructor=r;r.prototype.av=r;r.bv={};a.b2Vec2=r;r.prototype.SetZero=function(){Ce(this.$u)};r.prototype.Set=r.prototype.Set=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);De(d,b,c)};
r.prototype.op_add=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ee(c,b)};r.prototype.op_sub=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Fe(c,b)};r.prototype.op_mul=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ge(c,b)};r.prototype.Length=function(){return He(this.$u)};r.prototype.LengthSquared=function(){return Ie(this.$u)};r.prototype.Normalize=function(){return Je(this.$u)};r.prototype.IsValid=function(){return!!Ke(this.$u)};
r.prototype.Skew=function(){return h(Le(this.$u),r)};r.prototype.get_x=r.prototype.fw=function(){return Me(this.$u)};r.prototype.set_x=r.prototype.Aw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ne(c,b)};Object.defineProperty(r.prototype,"x",{get:r.prototype.fw,set:r.prototype.Aw});r.prototype.get_y=r.prototype.gw=function(){return Oe(this.$u)};r.prototype.set_y=r.prototype.Bw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Pe(c,b)};
Object.defineProperty(r.prototype,"y",{get:r.prototype.gw,set:r.prototype.Bw});r.prototype.__destroy__=r.prototype.cv=function(){Qe(this.$u)};function y(b,c,d){b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);this.$u=void 0===b?Re():void 0===c?_emscripten_bind_b2Vec3_b2Vec3_1(b):void 0===d?_emscripten_bind_b2Vec3_b2Vec3_2(b,c):Se(b,c,d);g(y)[this.$u]=this}y.prototype=Object.create(e.prototype);y.prototype.constructor=y;y.prototype.av=y;y.bv={};
a.b2Vec3=y;y.prototype.SetZero=function(){Te(this.$u)};y.prototype.Set=y.prototype.Set=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);Ue(f,b,c,d)};y.prototype.op_add=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ve(c,b)};y.prototype.op_sub=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);We(c,b)};y.prototype.op_mul=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Xe(c,b)};
y.prototype.get_x=y.prototype.fw=function(){return Ye(this.$u)};y.prototype.set_x=y.prototype.Aw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ze(c,b)};Object.defineProperty(y.prototype,"x",{get:y.prototype.fw,set:y.prototype.Aw});y.prototype.get_y=y.prototype.gw=function(){return $e(this.$u)};y.prototype.set_y=y.prototype.Bw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);af(c,b)};Object.defineProperty(y.prototype,"y",{get:y.prototype.gw,set:y.prototype.Bw});
y.prototype.get_z=y.prototype.yy=function(){return bf(this.$u)};y.prototype.set_z=y.prototype.wA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);cf(c,b)};Object.defineProperty(y.prototype,"z",{get:y.prototype.yy,set:y.prototype.wA});y.prototype.__destroy__=y.prototype.cv=function(){df(this.$u)};function Hx(){throw"cannot construct a b2BodyUserData, no constructor in IDL";}Hx.prototype=Object.create(e.prototype);Hx.prototype.constructor=Hx;Hx.prototype.av=Hx;Hx.bv={};a.b2BodyUserData=Hx;
Hx.prototype.get_pointer=Hx.prototype.Ev=function(){return ef(this.$u)};Hx.prototype.set_pointer=Hx.prototype.Kv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ff(c,b)};Object.defineProperty(Hx.prototype,"pointer",{get:Hx.prototype.Ev,set:Hx.prototype.Kv});Hx.prototype.__destroy__=Hx.prototype.cv=function(){gf(this.$u)};function n(){throw"cannot construct a b2Body, no constructor in IDL";}n.prototype=Object.create(e.prototype);n.prototype.constructor=n;n.prototype.av=n;n.bv={};
a.b2Body=n;n.prototype.CreateFixture=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);return void 0===c?h(hf(d,b),u):h(jf(d,b,c),u)};n.prototype.DestroyFixture=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);kf(c,b)};n.prototype.SetTransform=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);lf(d,b,c)};n.prototype.GetTransform=function(){return h(mf(this.$u),Cx)};
n.prototype.GetPosition=function(){return h(nf(this.$u),r)};n.prototype.GetAngle=function(){return of(this.$u)};n.prototype.GetWorldCenter=function(){return h(pf(this.$u),r)};n.prototype.GetLocalCenter=function(){return h(qf(this.$u),r)};n.prototype.SetLinearVelocity=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);rf(c,b)};n.prototype.GetLinearVelocity=function(){return h(sf(this.$u),r)};n.prototype.SetAngularVelocity=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);tf(c,b)};
n.prototype.GetAngularVelocity=function(){return uf(this.$u)};n.prototype.ApplyForce=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);vf(f,b,c,d)};n.prototype.ApplyForceToCenter=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);wf(d,b,c)};n.prototype.ApplyTorque=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);xf(d,b,c)};
n.prototype.ApplyLinearImpulse=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);yf(f,b,c,d)};n.prototype.ApplyAngularImpulse=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);zf(d,b,c)};n.prototype.GetMass=function(){return Af(this.$u)};n.prototype.GetInertia=function(){return Bf(this.$u)};
n.prototype.GetMassData=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Cf(c,b)};n.prototype.SetMassData=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Df(c,b)};n.prototype.ResetMassData=function(){Ef(this.$u)};n.prototype.GetWorldPoint=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Ff(c,b),r)};n.prototype.GetWorldVector=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Gf(c,b),r)};
n.prototype.GetLocalPoint=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Hf(c,b),r)};n.prototype.GetLocalVector=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(If(c,b),r)};n.prototype.GetLinearVelocityFromWorldPoint=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Jf(c,b),r)};n.prototype.GetLinearVelocityFromLocalPoint=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Kf(c,b),r)};n.prototype.GetLinearDamping=function(){return Lf(this.$u)};
n.prototype.SetLinearDamping=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Mf(c,b)};n.prototype.GetAngularDamping=function(){return Nf(this.$u)};n.prototype.SetAngularDamping=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Of(c,b)};n.prototype.GetGravityScale=function(){return Pf(this.$u)};n.prototype.SetGravityScale=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Qf(c,b)};n.prototype.SetType=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Rf(c,b)};
n.prototype.GetType=function(){return Sf(this.$u)};n.prototype.SetBullet=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Tf(c,b)};n.prototype.IsBullet=function(){return!!Uf(this.$u)};n.prototype.SetSleepingAllowed=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Vf(c,b)};n.prototype.IsSleepingAllowed=function(){return!!Wf(this.$u)};n.prototype.SetAwake=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Xf(c,b)};n.prototype.IsAwake=function(){return!!Yf(this.$u)};
n.prototype.SetEnabled=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Zf(c,b)};n.prototype.IsEnabled=function(){return!!$f(this.$u)};n.prototype.SetFixedRotation=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ag(c,b)};n.prototype.IsFixedRotation=function(){return!!bg(this.$u)};n.prototype.GetFixtureList=function(){return h(cg(this.$u),u)};n.prototype.GetJointList=function(){return h(dg(this.$u),z)};n.prototype.GetContactList=function(){return h(eg(this.$u),A)};
n.prototype.GetNext=function(){return h(fg(this.$u),n)};n.prototype.GetUserData=function(){return h(gg(this.$u),Hx)};n.prototype.GetWorld=function(){return h(hg(this.$u),v)};n.prototype.Dump=function(){ig(this.$u)};function B(){this.$u=jg();g(B)[this.$u]=this}B.prototype=Object.create(e.prototype);B.prototype.constructor=B;B.prototype.av=B;B.bv={};a.b2BodyDef=B;B.prototype.get_type=B.prototype.dv=function(){return kg(this.$u)};
B.prototype.set_type=B.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);lg(c,b)};Object.defineProperty(B.prototype,"type",{get:B.prototype.dv,set:B.prototype.fv});B.prototype.get_position=B.prototype.bw=function(){return h(mg(this.$u),r)};B.prototype.set_position=B.prototype.ww=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ng(c,b)};Object.defineProperty(B.prototype,"position",{get:B.prototype.bw,set:B.prototype.ww});B.prototype.get_angle=B.prototype.Ew=function(){return og(this.$u)};
B.prototype.set_angle=B.prototype.By=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pg(c,b)};Object.defineProperty(B.prototype,"angle",{get:B.prototype.Ew,set:B.prototype.By});B.prototype.get_linearVelocity=B.prototype.wx=function(){return h(qg(this.$u),r)};B.prototype.set_linearVelocity=B.prototype.uz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);rg(c,b)};Object.defineProperty(B.prototype,"linearVelocity",{get:B.prototype.wx,set:B.prototype.uz});
B.prototype.get_angularVelocity=B.prototype.Hw=function(){return sg(this.$u)};B.prototype.set_angularVelocity=B.prototype.Ey=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);tg(c,b)};Object.defineProperty(B.prototype,"angularVelocity",{get:B.prototype.Hw,set:B.prototype.Ey});B.prototype.get_linearDamping=B.prototype.ux=function(){return ug(this.$u)};B.prototype.set_linearDamping=B.prototype.rz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);vg(c,b)};
Object.defineProperty(B.prototype,"linearDamping",{get:B.prototype.ux,set:B.prototype.rz});B.prototype.get_angularDamping=B.prototype.Fw=function(){return wg(this.$u)};B.prototype.set_angularDamping=B.prototype.Cy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);xg(c,b)};Object.defineProperty(B.prototype,"angularDamping",{get:B.prototype.Fw,set:B.prototype.Cy});B.prototype.get_allowSleep=B.prototype.Dw=function(){return!!yg(this.$u)};
B.prototype.set_allowSleep=B.prototype.Ay=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);zg(c,b)};Object.defineProperty(B.prototype,"allowSleep",{get:B.prototype.Dw,set:B.prototype.Ay});B.prototype.get_awake=B.prototype.Iw=function(){return!!Ag(this.$u)};B.prototype.set_awake=B.prototype.Fy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Bg(c,b)};Object.defineProperty(B.prototype,"awake",{get:B.prototype.Iw,set:B.prototype.Fy});B.prototype.get_fixedRotation=B.prototype.ax=function(){return!!Cg(this.$u)};
B.prototype.set_fixedRotation=B.prototype.Yy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Dg(c,b)};Object.defineProperty(B.prototype,"fixedRotation",{get:B.prototype.ax,set:B.prototype.Yy});B.prototype.get_bullet=B.prototype.Pw=function(){return!!Eg(this.$u)};B.prototype.set_bullet=B.prototype.My=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Fg(c,b)};Object.defineProperty(B.prototype,"bullet",{get:B.prototype.Pw,set:B.prototype.My});
B.prototype.get_userData=B.prototype.ev=function(){return h(Gg(this.$u),Hx)};B.prototype.set_userData=B.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Hg(c,b)};Object.defineProperty(B.prototype,"userData",{get:B.prototype.ev,set:B.prototype.gv});B.prototype.get_gravityScale=B.prototype.fx=function(){return Ig(this.$u)};B.prototype.set_gravityScale=B.prototype.cz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Jg(c,b)};
Object.defineProperty(B.prototype,"gravityScale",{get:B.prototype.fx,set:B.prototype.cz});B.prototype.__destroy__=B.prototype.cv=function(){Kg(this.$u)};function Ax(){this.$u=Lg();g(Ax)[this.$u]=this}Ax.prototype=Object.create(e.prototype);Ax.prototype.constructor=Ax;Ax.prototype.av=Ax;Ax.bv={};a.b2Filter=Ax;Ax.prototype.get_categoryBits=Ax.prototype.Rw=function(){return Mg(this.$u)};Ax.prototype.set_categoryBits=Ax.prototype.Oy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ng(c,b)};
Object.defineProperty(Ax.prototype,"categoryBits",{get:Ax.prototype.Rw,set:Ax.prototype.Oy});Ax.prototype.get_maskBits=Ax.prototype.Kx=function(){return Og(this.$u)};Ax.prototype.set_maskBits=Ax.prototype.Iz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Pg(c,b)};Object.defineProperty(Ax.prototype,"maskBits",{get:Ax.prototype.Kx,set:Ax.prototype.Iz});Ax.prototype.get_groupIndex=Ax.prototype.ix=function(){return Qg(this.$u)};
Ax.prototype.set_groupIndex=Ax.prototype.fz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Rg(c,b)};Object.defineProperty(Ax.prototype,"groupIndex",{get:Ax.prototype.ix,set:Ax.prototype.fz});Ax.prototype.__destroy__=Ax.prototype.cv=function(){Sg(this.$u)};function Bx(){this.$u=Tg();g(Bx)[this.$u]=this}Bx.prototype=Object.create(e.prototype);Bx.prototype.constructor=Bx;Bx.prototype.av=Bx;Bx.bv={};a.b2AABB=Bx;Bx.prototype.IsValid=function(){return!!Ug(this.$u)};
Bx.prototype.GetCenter=function(){return h(Vg(this.$u),r)};Bx.prototype.GetExtents=function(){return h(Wg(this.$u),r)};Bx.prototype.GetPerimeter=function(){return Xg(this.$u)};Bx.prototype.Combine=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);void 0===c?Yg(d,b):Zg(d,b,c)};Bx.prototype.Contains=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return!!$g(c,b)};
Bx.prototype.RayCast=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);return!!ah(d,b,c)};Bx.prototype.get_lowerBound=Bx.prototype.zx=function(){return h(bh(this.$u),r)};Bx.prototype.set_lowerBound=Bx.prototype.xz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ch(c,b)};Object.defineProperty(Bx.prototype,"lowerBound",{get:Bx.prototype.zx,set:Bx.prototype.xz});Bx.prototype.get_upperBound=Bx.prototype.uy=function(){return h(dh(this.$u),r)};
Bx.prototype.set_upperBound=Bx.prototype.sA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);eh(c,b)};Object.defineProperty(Bx.prototype,"upperBound",{get:Bx.prototype.uy,set:Bx.prototype.sA});Bx.prototype.__destroy__=Bx.prototype.cv=function(){fh(this.$u)};function C(){this.$u=gh();g(C)[this.$u]=this}C.prototype=Object.create(k.prototype);C.prototype.constructor=C;C.prototype.av=C;C.bv={};a.b2CircleShape=C;C.prototype.GetType=function(){return hh(this.$u)};C.prototype.GetChildCount=function(){return ih(this.$u)};
C.prototype.TestPoint=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);return!!jh(d,b,c)};C.prototype.RayCast=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);return!!kh(p,b,c,d,f)};
C.prototype.ComputeAABB=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);lh(f,b,c,d)};C.prototype.ComputeMass=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);mh(d,b,c)};C.prototype.get_m_p=C.prototype.Ex=function(){return h(nh(this.$u),r)};C.prototype.set_m_p=C.prototype.Cz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);oh(c,b)};
Object.defineProperty(C.prototype,"m_p",{get:C.prototype.Ex,set:C.prototype.Cz});C.prototype.get_m_type=C.prototype.uv=function(){return ph(this.$u)};C.prototype.set_m_type=C.prototype.xv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);qh(c,b)};Object.defineProperty(C.prototype,"m_type",{get:C.prototype.uv,set:C.prototype.xv});C.prototype.get_m_radius=C.prototype.tv=function(){return rh(this.$u)};
C.prototype.set_m_radius=C.prototype.wv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);sh(c,b)};Object.defineProperty(C.prototype,"m_radius",{get:C.prototype.tv,set:C.prototype.wv});C.prototype.__destroy__=C.prototype.cv=function(){th(this.$u)};function D(){this.$u=uh();g(D)[this.$u]=this}D.prototype=Object.create(k.prototype);D.prototype.constructor=D;D.prototype.av=D;D.bv={};a.b2EdgeShape=D;
D.prototype.SetOneSided=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);vh(p,b,c,d,f)};D.prototype.SetTwoSided=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);wh(d,b,c)};D.prototype.GetType=function(){return xh(this.$u)};D.prototype.GetChildCount=function(){return yh(this.$u)};
D.prototype.TestPoint=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);return!!zh(d,b,c)};D.prototype.RayCast=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);return!!Ah(p,b,c,d,f)};
D.prototype.ComputeAABB=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);Bh(f,b,c,d)};D.prototype.ComputeMass=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Ch(d,b,c)};D.prototype.get_m_vertex1=D.prototype.Hx=function(){return h(Dh(this.$u),r)};D.prototype.set_m_vertex1=D.prototype.Fz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Eh(c,b)};
Object.defineProperty(D.prototype,"m_vertex1",{get:D.prototype.Hx,set:D.prototype.Fz});D.prototype.get_m_vertex2=D.prototype.Ix=function(){return h(Fh(this.$u),r)};D.prototype.set_m_vertex2=D.prototype.Gz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Gh(c,b)};Object.defineProperty(D.prototype,"m_vertex2",{get:D.prototype.Ix,set:D.prototype.Gz});D.prototype.get_m_vertex0=D.prototype.Gx=function(){return h(Hh(this.$u),r)};
D.prototype.set_m_vertex0=D.prototype.Ez=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ih(c,b)};Object.defineProperty(D.prototype,"m_vertex0",{get:D.prototype.Gx,set:D.prototype.Ez});D.prototype.get_m_vertex3=D.prototype.Jx=function(){return h(Jh(this.$u),r)};D.prototype.set_m_vertex3=D.prototype.Hz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Kh(c,b)};Object.defineProperty(D.prototype,"m_vertex3",{get:D.prototype.Jx,set:D.prototype.Hz});
D.prototype.get_m_oneSided=D.prototype.Dx=function(){return!!Lh(this.$u)};D.prototype.set_m_oneSided=D.prototype.Bz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Mh(c,b)};Object.defineProperty(D.prototype,"m_oneSided",{get:D.prototype.Dx,set:D.prototype.Bz});D.prototype.get_m_type=D.prototype.uv=function(){return Nh(this.$u)};D.prototype.set_m_type=D.prototype.xv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Oh(c,b)};
Object.defineProperty(D.prototype,"m_type",{get:D.prototype.uv,set:D.prototype.xv});D.prototype.get_m_radius=D.prototype.tv=function(){return Ph(this.$u)};D.prototype.set_m_radius=D.prototype.wv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Qh(c,b)};Object.defineProperty(D.prototype,"m_radius",{get:D.prototype.tv,set:D.prototype.wv});D.prototype.__destroy__=D.prototype.cv=function(){Rh(this.$u)};function m(){throw"cannot construct a b2JointUserData, no constructor in IDL";}
m.prototype=Object.create(e.prototype);m.prototype.constructor=m;m.prototype.av=m;m.bv={};a.b2JointUserData=m;m.prototype.get_pointer=m.prototype.Ev=function(){return Sh(this.$u)};m.prototype.set_pointer=m.prototype.Kv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Th(c,b)};Object.defineProperty(m.prototype,"pointer",{get:m.prototype.Ev,set:m.prototype.Kv});m.prototype.__destroy__=m.prototype.cv=function(){Uh(this.$u)};
function Ix(){throw"cannot construct a b2WeldJoint, no constructor in IDL";}Ix.prototype=Object.create(q.prototype);Ix.prototype.constructor=Ix;Ix.prototype.av=Ix;Ix.bv={};a.b2WeldJoint=Ix;Ix.prototype.GetLocalAnchorA=function(){return h(Vh(this.$u),r)};Ix.prototype.GetLocalAnchorB=function(){return h(Wh(this.$u),r)};Ix.prototype.GetReferenceAngle=function(){return Xh(this.$u)};Ix.prototype.SetStiffness=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Yh(c,b)};
Ix.prototype.GetStiffness=function(){return Zh(this.$u)};Ix.prototype.SetDamping=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);$h(c,b)};Ix.prototype.GetDamping=function(){return ai(this.$u)};Ix.prototype.Dump=function(){bi(this.$u)};Ix.prototype.GetType=function(){return ci(this.$u)};Ix.prototype.GetBodyA=function(){return h(di(this.$u),n)};Ix.prototype.GetBodyB=function(){return h(ei(this.$u),n)};Ix.prototype.GetAnchorA=function(){return h(fi(this.$u),r)};
Ix.prototype.GetAnchorB=function(){return h(gi(this.$u),r)};Ix.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(hi(c,b),r)};Ix.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return ii(c,b)};Ix.prototype.GetNext=function(){return h(ji(this.$u),q)};Ix.prototype.GetUserData=function(){return h(ki(this.$u),m)};Ix.prototype.GetCollideConnected=function(){return!!li(this.$u)};Ix.prototype.__destroy__=Ix.prototype.cv=function(){mi(this.$u)};
function E(){this.$u=ni();g(E)[this.$u]=this}E.prototype=Object.create(l.prototype);E.prototype.constructor=E;E.prototype.av=E;E.bv={};a.b2WeldJointDef=E;E.prototype.Initialize=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);oi(f,b,c,d)};E.prototype.get_localAnchorA=E.prototype.ov=function(){return h(pi(this.$u),r)};
E.prototype.set_localAnchorA=E.prototype.qv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);qi(c,b)};Object.defineProperty(E.prototype,"localAnchorA",{get:E.prototype.ov,set:E.prototype.qv});E.prototype.get_localAnchorB=E.prototype.pv=function(){return h(ri(this.$u),r)};E.prototype.set_localAnchorB=E.prototype.rv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);si(c,b)};Object.defineProperty(E.prototype,"localAnchorB",{get:E.prototype.pv,set:E.prototype.rv});
E.prototype.get_referenceAngle=E.prototype.Fv=function(){return ti(this.$u)};E.prototype.set_referenceAngle=E.prototype.Lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ui(c,b)};Object.defineProperty(E.prototype,"referenceAngle",{get:E.prototype.Fv,set:E.prototype.Lv});E.prototype.get_stiffness=E.prototype.yv=function(){return vi(this.$u)};E.prototype.set_stiffness=E.prototype.zv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);wi(c,b)};
Object.defineProperty(E.prototype,"stiffness",{get:E.prototype.yv,set:E.prototype.zv});E.prototype.get_damping=E.prototype.sv=function(){return xi(this.$u)};E.prototype.set_damping=E.prototype.vv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);yi(c,b)};Object.defineProperty(E.prototype,"damping",{get:E.prototype.sv,set:E.prototype.vv});E.prototype.get_type=E.prototype.dv=function(){return zi(this.$u)};
E.prototype.set_type=E.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ai(c,b)};Object.defineProperty(E.prototype,"type",{get:E.prototype.dv,set:E.prototype.fv});E.prototype.get_userData=E.prototype.ev=function(){return h(Bi(this.$u),m)};E.prototype.set_userData=E.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ci(c,b)};Object.defineProperty(E.prototype,"userData",{get:E.prototype.ev,set:E.prototype.gv});
E.prototype.get_bodyA=E.prototype.hv=function(){return h(Di(this.$u),n)};E.prototype.set_bodyA=E.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ei(c,b)};Object.defineProperty(E.prototype,"bodyA",{get:E.prototype.hv,set:E.prototype.lv});E.prototype.get_bodyB=E.prototype.jv=function(){return h(Fi(this.$u),n)};E.prototype.set_bodyB=E.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Gi(c,b)};
Object.defineProperty(E.prototype,"bodyB",{get:E.prototype.jv,set:E.prototype.mv});E.prototype.get_collideConnected=E.prototype.kv=function(){return!!Hi(this.$u)};E.prototype.set_collideConnected=E.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ii(c,b)};Object.defineProperty(E.prototype,"collideConnected",{get:E.prototype.kv,set:E.prototype.nv});E.prototype.__destroy__=E.prototype.cv=function(){Ji(this.$u)};function F(){this.$u=Ki();g(F)[this.$u]=this}F.prototype=Object.create(k.prototype);
F.prototype.constructor=F;F.prototype.av=F;F.bv={};a.b2ChainShape=F;F.prototype.Clear=function(){Li(this.$u)};F.prototype.CreateLoop=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Mi(d,b,c)};F.prototype.CreateChain=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);Ni(p,b,c,d,f)};
F.prototype.GetChildEdge=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Oi(d,b,c)};F.prototype.GetType=function(){return Pi(this.$u)};F.prototype.GetChildCount=function(){return Qi(this.$u)};F.prototype.TestPoint=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);return!!Ri(d,b,c)};
F.prototype.RayCast=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);return!!Si(p,b,c,d,f)};F.prototype.ComputeAABB=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);Ti(f,b,c,d)};F.prototype.ComputeMass=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Ui(d,b,c)};
F.prototype.get_m_vertices=F.prototype.Vv=function(){return h(Vi(this.$u),r)};F.prototype.set_m_vertices=F.prototype.pw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Wi(c,b)};Object.defineProperty(F.prototype,"m_vertices",{get:F.prototype.Vv,set:F.prototype.pw});F.prototype.get_m_count=F.prototype.Uv=function(){return Xi(this.$u)};F.prototype.set_m_count=F.prototype.ow=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Yi(c,b)};
Object.defineProperty(F.prototype,"m_count",{get:F.prototype.Uv,set:F.prototype.ow});F.prototype.get_m_prevVertex=F.prototype.Fx=function(){return h(Zi(this.$u),r)};F.prototype.set_m_prevVertex=F.prototype.Dz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);$i(c,b)};Object.defineProperty(F.prototype,"m_prevVertex",{get:F.prototype.Fx,set:F.prototype.Dz});F.prototype.get_m_nextVertex=F.prototype.Bx=function(){return h(aj(this.$u),r)};
F.prototype.set_m_nextVertex=F.prototype.zz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);bj(c,b)};Object.defineProperty(F.prototype,"m_nextVertex",{get:F.prototype.Bx,set:F.prototype.zz});F.prototype.get_m_type=F.prototype.uv=function(){return cj(this.$u)};F.prototype.set_m_type=F.prototype.xv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);dj(c,b)};Object.defineProperty(F.prototype,"m_type",{get:F.prototype.uv,set:F.prototype.xv});
F.prototype.get_m_radius=F.prototype.tv=function(){return ej(this.$u)};F.prototype.set_m_radius=F.prototype.wv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);fj(c,b)};Object.defineProperty(F.prototype,"m_radius",{get:F.prototype.tv,set:F.prototype.wv});F.prototype.__destroy__=F.prototype.cv=function(){gj(this.$u)};
function Jx(b,c,d){b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);this.$u=void 0===b?hj():void 0===c?_emscripten_bind_b2Color_b2Color_1(b):void 0===d?_emscripten_bind_b2Color_b2Color_2(b,c):ij(b,c,d);g(Jx)[this.$u]=this}Jx.prototype=Object.create(e.prototype);Jx.prototype.constructor=Jx;Jx.prototype.av=Jx;Jx.bv={};a.b2Color=Jx;
Jx.prototype.Set=Jx.prototype.Set=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);jj(f,b,c,d)};Jx.prototype.get_r=Jx.prototype.Yx=function(){return kj(this.$u)};Jx.prototype.set_r=Jx.prototype.Wz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);lj(c,b)};Object.defineProperty(Jx.prototype,"r",{get:Jx.prototype.Yx,set:Jx.prototype.Wz});Jx.prototype.get_g=Jx.prototype.dx=function(){return mj(this.$u)};
Jx.prototype.set_g=Jx.prototype.az=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);nj(c,b)};Object.defineProperty(Jx.prototype,"g",{get:Jx.prototype.dx,set:Jx.prototype.az});Jx.prototype.get_b=Jx.prototype.Jw=function(){return oj(this.$u)};Jx.prototype.set_b=Jx.prototype.Gy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pj(c,b)};Object.defineProperty(Jx.prototype,"b",{get:Jx.prototype.Jw,set:Jx.prototype.Gy});Jx.prototype.__destroy__=Jx.prototype.cv=function(){qj(this.$u)};
function A(){this.$u=rj();g(A)[this.$u]=this}A.prototype=Object.create(e.prototype);A.prototype.constructor=A;A.prototype.av=A;A.bv={};a.b2ContactEdge=A;A.prototype.get_other=A.prototype.$v=function(){return h(sj(this.$u),n)};A.prototype.set_other=A.prototype.uw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);tj(c,b)};Object.defineProperty(A.prototype,"other",{get:A.prototype.$v,set:A.prototype.uw});A.prototype.get_contact=A.prototype.Vw=function(){return h(uj(this.$u),wx)};
A.prototype.set_contact=A.prototype.Sy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);vj(c,b)};Object.defineProperty(A.prototype,"contact",{get:A.prototype.Vw,set:A.prototype.Sy});A.prototype.get_prev=A.prototype.cw=function(){return h(wj(this.$u),A)};A.prototype.set_prev=A.prototype.xw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);xj(c,b)};Object.defineProperty(A.prototype,"prev",{get:A.prototype.cw,set:A.prototype.xw});
A.prototype.get_next=A.prototype.Yv=function(){return h(yj(this.$u),A)};A.prototype.set_next=A.prototype.sw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);zj(c,b)};Object.defineProperty(A.prototype,"next",{get:A.prototype.Yv,set:A.prototype.sw});A.prototype.__destroy__=A.prototype.cv=function(){Aj(this.$u)};function G(){throw"cannot construct a b2ContactFeature, no constructor in IDL";}G.prototype=Object.create(e.prototype);G.prototype.constructor=G;G.prototype.av=G;G.bv={};
a.b2ContactFeature=G;G.prototype.get_indexA=G.prototype.jx=function(){return Bj(this.$u)};G.prototype.set_indexA=G.prototype.gz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Cj(c,b)};Object.defineProperty(G.prototype,"indexA",{get:G.prototype.jx,set:G.prototype.gz});G.prototype.get_indexB=G.prototype.kx=function(){return Dj(this.$u)};G.prototype.set_indexB=G.prototype.hz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ej(c,b)};
Object.defineProperty(G.prototype,"indexB",{get:G.prototype.kx,set:G.prototype.hz});G.prototype.get_typeA=G.prototype.ry=function(){return Fj(this.$u)};G.prototype.set_typeA=G.prototype.pA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Gj(c,b)};Object.defineProperty(G.prototype,"typeA",{get:G.prototype.ry,set:G.prototype.pA});G.prototype.get_typeB=G.prototype.sy=function(){return Hj(this.$u)};
G.prototype.set_typeB=G.prototype.qA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ij(c,b)};Object.defineProperty(G.prototype,"typeB",{get:G.prototype.sy,set:G.prototype.qA});G.prototype.__destroy__=G.prototype.cv=function(){Jj(this.$u)};function Kx(){this.$u=Kj();g(Kx)[this.$u]=this}Kx.prototype=Object.create(sx.prototype);Kx.prototype.constructor=Kx;Kx.prototype.av=Kx;Kx.bv={};a.JSContactFilter=Kx;
Kx.prototype.ShouldCollide=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);return!!Lj(d,b,c)};Kx.prototype.__destroy__=Kx.prototype.cv=function(){Mj(this.$u)};function Lx(){throw"cannot construct a b2ContactID, no constructor in IDL";}Lx.prototype=Object.create(e.prototype);Lx.prototype.constructor=Lx;Lx.prototype.av=Lx;Lx.bv={};a.b2ContactID=Lx;Lx.prototype.get_cf=Lx.prototype.Tw=function(){return h(Nj(this.$u),G)};
Lx.prototype.set_cf=Lx.prototype.Qy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Oj(c,b)};Object.defineProperty(Lx.prototype,"cf",{get:Lx.prototype.Tw,set:Lx.prototype.Qy});Lx.prototype.get_key=Lx.prototype.qx=function(){return Pj(this.$u)};Lx.prototype.set_key=Lx.prototype.nz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Qj(c,b)};Object.defineProperty(Lx.prototype,"key",{get:Lx.prototype.qx,set:Lx.prototype.nz});Lx.prototype.__destroy__=Lx.prototype.cv=function(){Rj(this.$u)};
function Mx(){throw"cannot construct a b2ContactImpulse, no constructor in IDL";}Mx.prototype=Object.create(e.prototype);Mx.prototype.constructor=Mx;Mx.prototype.av=Mx;Mx.bv={};a.b2ContactImpulse=Mx;Mx.prototype.get_normalImpulses=Mx.prototype.Sx=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return Sj(c,b)};Mx.prototype.set_normalImpulses=Mx.prototype.Qz=function(b,c){var d=this.$u;ox();b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Tj(d,b,c)};
Object.defineProperty(Mx.prototype,"normalImpulses",{get:Mx.prototype.Sx,set:Mx.prototype.Qz});Mx.prototype.get_tangentImpulses=Mx.prototype.oy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return Uj(c,b)};Mx.prototype.set_tangentImpulses=Mx.prototype.mA=function(b,c){var d=this.$u;ox();b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Vj(d,b,c)};Object.defineProperty(Mx.prototype,"tangentImpulses",{get:Mx.prototype.oy,set:Mx.prototype.mA});
Mx.prototype.get_count=Mx.prototype.Nv=function(){return Wj(this.$u)};Mx.prototype.set_count=Mx.prototype.hw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Xj(c,b)};Object.defineProperty(Mx.prototype,"count",{get:Mx.prototype.Nv,set:Mx.prototype.hw});Mx.prototype.__destroy__=Mx.prototype.cv=function(){Yj(this.$u)};function Nx(){throw"cannot construct a b2DestructionListener, no constructor in IDL";}Nx.prototype=Object.create(e.prototype);Nx.prototype.constructor=Nx;Nx.prototype.av=Nx;
Nx.bv={};a.b2DestructionListener=Nx;Nx.prototype.__destroy__=Nx.prototype.cv=function(){Zj(this.$u)};function Ox(){this.$u=ak();g(Ox)[this.$u]=this}Ox.prototype=Object.create(tx.prototype);Ox.prototype.constructor=Ox;Ox.prototype.av=Ox;Ox.bv={};a.JSDestructionListener=Ox;Ox.prototype.SayGoodbyeJoint=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);bk(c,b)};Ox.prototype.SayGoodbyeFixture=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ck(c,b)};
Ox.prototype.__destroy__=Ox.prototype.cv=function(){dk(this.$u)};function Px(){throw"cannot construct a b2DistanceJoint, no constructor in IDL";}Px.prototype=Object.create(q.prototype);Px.prototype.constructor=Px;Px.prototype.av=Px;Px.bv={};a.b2DistanceJoint=Px;Px.prototype.GetLocalAnchorA=function(){return h(ek(this.$u),r)};Px.prototype.GetLocalAnchorB=function(){return h(fk(this.$u),r)};Px.prototype.GetLength=function(){return gk(this.$u)};
Px.prototype.SetLength=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);hk(c,b)};Px.prototype.GetMinLength=function(){return ik(this.$u)};Px.prototype.SetMinLength=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);jk(c,b)};Px.prototype.GetMaxLength=function(){return kk(this.$u)};Px.prototype.SetMaxLength=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);lk(c,b)};Px.prototype.GetCurrentLength=function(){return mk(this.$u)};
Px.prototype.SetStiffness=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);nk(c,b)};Px.prototype.GetStiffness=function(){return ok(this.$u)};Px.prototype.SetDamping=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pk(c,b)};Px.prototype.GetDamping=function(){return qk(this.$u)};Px.prototype.GetType=function(){return rk(this.$u)};Px.prototype.GetBodyA=function(){return h(sk(this.$u),n)};Px.prototype.GetBodyB=function(){return h(tk(this.$u),n)};
Px.prototype.GetAnchorA=function(){return h(uk(this.$u),r)};Px.prototype.GetAnchorB=function(){return h(vk(this.$u),r)};Px.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(wk(c,b),r)};Px.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return xk(c,b)};Px.prototype.GetNext=function(){return h(yk(this.$u),q)};Px.prototype.GetUserData=function(){return h(zk(this.$u),m)};Px.prototype.GetCollideConnected=function(){return!!Ak(this.$u)};
Px.prototype.__destroy__=Px.prototype.cv=function(){Bk(this.$u)};function H(){this.$u=Ck();g(H)[this.$u]=this}H.prototype=Object.create(l.prototype);H.prototype.constructor=H;H.prototype.av=H;H.bv={};a.b2DistanceJointDef=H;H.prototype.Initialize=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);Dk(p,b,c,d,f)};
H.prototype.get_localAnchorA=H.prototype.ov=function(){return h(Ek(this.$u),r)};H.prototype.set_localAnchorA=H.prototype.qv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Fk(c,b)};Object.defineProperty(H.prototype,"localAnchorA",{get:H.prototype.ov,set:H.prototype.qv});H.prototype.get_localAnchorB=H.prototype.pv=function(){return h(Gk(this.$u),r)};H.prototype.set_localAnchorB=H.prototype.rv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Hk(c,b)};
Object.defineProperty(H.prototype,"localAnchorB",{get:H.prototype.pv,set:H.prototype.rv});H.prototype.get_length=H.prototype.rx=function(){return Ik(this.$u)};H.prototype.set_length=H.prototype.oz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Jk(c,b)};Object.defineProperty(H.prototype,"length",{get:H.prototype.rx,set:H.prototype.oz});H.prototype.get_minLength=H.prototype.Qx=function(){return Kk(this.$u)};
H.prototype.set_minLength=H.prototype.Oz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Lk(c,b)};Object.defineProperty(H.prototype,"minLength",{get:H.prototype.Qx,set:H.prototype.Oz});H.prototype.get_maxLength=H.prototype.Ox=function(){return Mk(this.$u)};H.prototype.set_maxLength=H.prototype.Mz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Nk(c,b)};Object.defineProperty(H.prototype,"maxLength",{get:H.prototype.Ox,set:H.prototype.Mz});
H.prototype.get_stiffness=H.prototype.yv=function(){return Ok(this.$u)};H.prototype.set_stiffness=H.prototype.zv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Pk(c,b)};Object.defineProperty(H.prototype,"stiffness",{get:H.prototype.yv,set:H.prototype.zv});H.prototype.get_damping=H.prototype.sv=function(){return Qk(this.$u)};H.prototype.set_damping=H.prototype.vv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Rk(c,b)};
Object.defineProperty(H.prototype,"damping",{get:H.prototype.sv,set:H.prototype.vv});H.prototype.get_type=H.prototype.dv=function(){return Sk(this.$u)};H.prototype.set_type=H.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Tk(c,b)};Object.defineProperty(H.prototype,"type",{get:H.prototype.dv,set:H.prototype.fv});H.prototype.get_userData=H.prototype.ev=function(){return h(Uk(this.$u),m)};
H.prototype.set_userData=H.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Vk(c,b)};Object.defineProperty(H.prototype,"userData",{get:H.prototype.ev,set:H.prototype.gv});H.prototype.get_bodyA=H.prototype.hv=function(){return h(Wk(this.$u),n)};H.prototype.set_bodyA=H.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Xk(c,b)};Object.defineProperty(H.prototype,"bodyA",{get:H.prototype.hv,set:H.prototype.lv});
H.prototype.get_bodyB=H.prototype.jv=function(){return h(Yk(this.$u),n)};H.prototype.set_bodyB=H.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Zk(c,b)};Object.defineProperty(H.prototype,"bodyB",{get:H.prototype.jv,set:H.prototype.mv});H.prototype.get_collideConnected=H.prototype.kv=function(){return!!$k(this.$u)};H.prototype.set_collideConnected=H.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);al(c,b)};
Object.defineProperty(H.prototype,"collideConnected",{get:H.prototype.kv,set:H.prototype.nv});H.prototype.__destroy__=H.prototype.cv=function(){bl(this.$u)};function Qx(){this.$u=cl();g(Qx)[this.$u]=this}Qx.prototype=Object.create(ux.prototype);Qx.prototype.constructor=Qx;Qx.prototype.av=Qx;Qx.bv={};a.JSDraw=Qx;Qx.prototype.DrawPolygon=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);dl(f,b,c,d)};
Qx.prototype.DrawSolidPolygon=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);el(f,b,c,d)};Qx.prototype.DrawCircle=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);fl(f,b,c,d)};
Qx.prototype.DrawSolidCircle=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);gl(p,b,c,d,f)};Qx.prototype.DrawSegment=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);hl(f,b,c,d)};Qx.prototype.DrawTransform=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);il(c,b)};
Qx.prototype.DrawPoint=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);jl(f,b,c,d)};Qx.prototype.__destroy__=Qx.prototype.cv=function(){kl(this.$u)};function Rx(){throw"cannot construct a b2FrictionJoint, no constructor in IDL";}Rx.prototype=Object.create(q.prototype);Rx.prototype.constructor=Rx;Rx.prototype.av=Rx;Rx.bv={};a.b2FrictionJoint=Rx;Rx.prototype.GetLocalAnchorA=function(){return h(ll(this.$u),r)};
Rx.prototype.GetLocalAnchorB=function(){return h(ml(this.$u),r)};Rx.prototype.SetMaxForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);nl(c,b)};Rx.prototype.GetMaxForce=function(){return ol(this.$u)};Rx.prototype.SetMaxTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pl(c,b)};Rx.prototype.GetMaxTorque=function(){return ql(this.$u)};Rx.prototype.GetType=function(){return rl(this.$u)};Rx.prototype.GetBodyA=function(){return h(sl(this.$u),n)};
Rx.prototype.GetBodyB=function(){return h(tl(this.$u),n)};Rx.prototype.GetAnchorA=function(){return h(ul(this.$u),r)};Rx.prototype.GetAnchorB=function(){return h(vl(this.$u),r)};Rx.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(wl(c,b),r)};Rx.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return xl(c,b)};Rx.prototype.GetNext=function(){return h(yl(this.$u),q)};
Rx.prototype.GetUserData=function(){return h(zl(this.$u),m)};Rx.prototype.GetCollideConnected=function(){return!!Al(this.$u)};Rx.prototype.__destroy__=Rx.prototype.cv=function(){Bl(this.$u)};function I(){this.$u=Cl();g(I)[this.$u]=this}I.prototype=Object.create(l.prototype);I.prototype.constructor=I;I.prototype.av=I;I.bv={};a.b2FrictionJointDef=I;
I.prototype.Initialize=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);Dl(f,b,c,d)};I.prototype.get_localAnchorA=I.prototype.ov=function(){return h(El(this.$u),r)};I.prototype.set_localAnchorA=I.prototype.qv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Fl(c,b)};Object.defineProperty(I.prototype,"localAnchorA",{get:I.prototype.ov,set:I.prototype.qv});
I.prototype.get_localAnchorB=I.prototype.pv=function(){return h(Gl(this.$u),r)};I.prototype.set_localAnchorB=I.prototype.rv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Hl(c,b)};Object.defineProperty(I.prototype,"localAnchorB",{get:I.prototype.pv,set:I.prototype.rv});I.prototype.get_maxForce=I.prototype.Cv=function(){return Il(this.$u)};I.prototype.set_maxForce=I.prototype.Iv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Jl(c,b)};
Object.defineProperty(I.prototype,"maxForce",{get:I.prototype.Cv,set:I.prototype.Iv});I.prototype.get_maxTorque=I.prototype.Xv=function(){return Kl(this.$u)};I.prototype.set_maxTorque=I.prototype.rw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ll(c,b)};Object.defineProperty(I.prototype,"maxTorque",{get:I.prototype.Xv,set:I.prototype.rw});I.prototype.get_type=I.prototype.dv=function(){return Ml(this.$u)};
I.prototype.set_type=I.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Nl(c,b)};Object.defineProperty(I.prototype,"type",{get:I.prototype.dv,set:I.prototype.fv});I.prototype.get_userData=I.prototype.ev=function(){return h(Ol(this.$u),m)};I.prototype.set_userData=I.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Pl(c,b)};Object.defineProperty(I.prototype,"userData",{get:I.prototype.ev,set:I.prototype.gv});
I.prototype.get_bodyA=I.prototype.hv=function(){return h(Ql(this.$u),n)};I.prototype.set_bodyA=I.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Rl(c,b)};Object.defineProperty(I.prototype,"bodyA",{get:I.prototype.hv,set:I.prototype.lv});I.prototype.get_bodyB=I.prototype.jv=function(){return h(Sl(this.$u),n)};I.prototype.set_bodyB=I.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Tl(c,b)};
Object.defineProperty(I.prototype,"bodyB",{get:I.prototype.jv,set:I.prototype.mv});I.prototype.get_collideConnected=I.prototype.kv=function(){return!!Ul(this.$u)};I.prototype.set_collideConnected=I.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Vl(c,b)};Object.defineProperty(I.prototype,"collideConnected",{get:I.prototype.kv,set:I.prototype.nv});I.prototype.__destroy__=I.prototype.cv=function(){Wl(this.$u)};
function Sx(){throw"cannot construct a b2GearJoint, no constructor in IDL";}Sx.prototype=Object.create(q.prototype);Sx.prototype.constructor=Sx;Sx.prototype.av=Sx;Sx.bv={};a.b2GearJoint=Sx;Sx.prototype.GetJoint1=function(){return h(Xl(this.$u),q)};Sx.prototype.GetJoint2=function(){return h(Yl(this.$u),q)};Sx.prototype.SetRatio=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Zl(c,b)};Sx.prototype.GetRatio=function(){return $l(this.$u)};Sx.prototype.GetType=function(){return am(this.$u)};
Sx.prototype.GetBodyA=function(){return h(bm(this.$u),n)};Sx.prototype.GetBodyB=function(){return h(cm(this.$u),n)};Sx.prototype.GetAnchorA=function(){return h(dm(this.$u),r)};Sx.prototype.GetAnchorB=function(){return h(em(this.$u),r)};Sx.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(fm(c,b),r)};Sx.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return gm(c,b)};
Sx.prototype.GetNext=function(){return h(hm(this.$u),q)};Sx.prototype.GetUserData=function(){return h(im(this.$u),m)};Sx.prototype.GetCollideConnected=function(){return!!jm(this.$u)};Sx.prototype.__destroy__=Sx.prototype.cv=function(){km(this.$u)};function J(){this.$u=lm();g(J)[this.$u]=this}J.prototype=Object.create(l.prototype);J.prototype.constructor=J;J.prototype.av=J;J.bv={};a.b2GearJointDef=J;J.prototype.get_joint1=J.prototype.ox=function(){return h(mm(this.$u),q)};
J.prototype.set_joint1=J.prototype.lz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);nm(c,b)};Object.defineProperty(J.prototype,"joint1",{get:J.prototype.ox,set:J.prototype.lz});J.prototype.get_joint2=J.prototype.px=function(){return h(om(this.$u),q)};J.prototype.set_joint2=J.prototype.mz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pm(c,b)};Object.defineProperty(J.prototype,"joint2",{get:J.prototype.px,set:J.prototype.mz});J.prototype.get_ratio=J.prototype.dw=function(){return qm(this.$u)};
J.prototype.set_ratio=J.prototype.yw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);rm(c,b)};Object.defineProperty(J.prototype,"ratio",{get:J.prototype.dw,set:J.prototype.yw});J.prototype.get_type=J.prototype.dv=function(){return sm(this.$u)};J.prototype.set_type=J.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);tm(c,b)};Object.defineProperty(J.prototype,"type",{get:J.prototype.dv,set:J.prototype.fv});
J.prototype.get_userData=J.prototype.ev=function(){return h(um(this.$u),m)};J.prototype.set_userData=J.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);wm(c,b)};Object.defineProperty(J.prototype,"userData",{get:J.prototype.ev,set:J.prototype.gv});J.prototype.get_bodyA=J.prototype.hv=function(){return h(xm(this.$u),n)};J.prototype.set_bodyA=J.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ym(c,b)};
Object.defineProperty(J.prototype,"bodyA",{get:J.prototype.hv,set:J.prototype.lv});J.prototype.get_bodyB=J.prototype.jv=function(){return h(zm(this.$u),n)};J.prototype.set_bodyB=J.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Am(c,b)};Object.defineProperty(J.prototype,"bodyB",{get:J.prototype.jv,set:J.prototype.mv});J.prototype.get_collideConnected=J.prototype.kv=function(){return!!Bm(this.$u)};
J.prototype.set_collideConnected=J.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Cm(c,b)};Object.defineProperty(J.prototype,"collideConnected",{get:J.prototype.kv,set:J.prototype.nv});J.prototype.__destroy__=J.prototype.cv=function(){Dm(this.$u)};function z(){this.$u=Em();g(z)[this.$u]=this}z.prototype=Object.create(e.prototype);z.prototype.constructor=z;z.prototype.av=z;z.bv={};a.b2JointEdge=z;z.prototype.get_other=z.prototype.$v=function(){return h(Fm(this.$u),n)};
z.prototype.set_other=z.prototype.uw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Gm(c,b)};Object.defineProperty(z.prototype,"other",{get:z.prototype.$v,set:z.prototype.uw});z.prototype.get_joint=z.prototype.nx=function(){return h(Hm(this.$u),q)};z.prototype.set_joint=z.prototype.kz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Im(c,b)};Object.defineProperty(z.prototype,"joint",{get:z.prototype.nx,set:z.prototype.kz});
z.prototype.get_prev=z.prototype.cw=function(){return h(Jm(this.$u),z)};z.prototype.set_prev=z.prototype.xw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Km(c,b)};Object.defineProperty(z.prototype,"prev",{get:z.prototype.cw,set:z.prototype.xw});z.prototype.get_next=z.prototype.Yv=function(){return h(Lm(this.$u),z)};z.prototype.set_next=z.prototype.sw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Mm(c,b)};Object.defineProperty(z.prototype,"next",{get:z.prototype.Yv,set:z.prototype.sw});
z.prototype.__destroy__=z.prototype.cv=function(){Nm(this.$u)};function t(){this.$u=Om();g(t)[this.$u]=this}t.prototype=Object.create(e.prototype);t.prototype.constructor=t;t.prototype.av=t;t.bv={};a.b2Manifold=t;t.prototype.get_points=t.prototype.aw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Pm(c,b),K)};t.prototype.set_points=t.prototype.vw=function(b,c){var d=this.$u;ox();b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Qm(d,b,c)};
Object.defineProperty(t.prototype,"points",{get:t.prototype.aw,set:t.prototype.vw});t.prototype.get_localNormal=t.prototype.xx=function(){return h(Rm(this.$u),r)};t.prototype.set_localNormal=t.prototype.vz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Sm(c,b)};Object.defineProperty(t.prototype,"localNormal",{get:t.prototype.xx,set:t.prototype.vz});t.prototype.get_localPoint=t.prototype.Sv=function(){return h(Tm(this.$u),r)};
t.prototype.set_localPoint=t.prototype.mw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Um(c,b)};Object.defineProperty(t.prototype,"localPoint",{get:t.prototype.Sv,set:t.prototype.mw});t.prototype.get_type=t.prototype.dv=function(){return Vm(this.$u)};t.prototype.set_type=t.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Wm(c,b)};Object.defineProperty(t.prototype,"type",{get:t.prototype.dv,set:t.prototype.fv});t.prototype.get_pointCount=t.prototype.Wx=function(){return Xm(this.$u)};
t.prototype.set_pointCount=t.prototype.Uz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ym(c,b)};Object.defineProperty(t.prototype,"pointCount",{get:t.prototype.Wx,set:t.prototype.Uz});t.prototype.__destroy__=t.prototype.cv=function(){Zm(this.$u)};function Tx(){this.$u=$m();g(Tx)[this.$u]=this}Tx.prototype=Object.create(e.prototype);Tx.prototype.constructor=Tx;Tx.prototype.av=Tx;Tx.bv={};a.b2WorldManifold=Tx;
Tx.prototype.Initialize=function(b,c,d,f,p){var W=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);p&&"object"===typeof p&&(p=p.$u);an(W,b,c,d,f,p)};Tx.prototype.get_normal=Tx.prototype.Zv=function(){return h(bn(this.$u),r)};Tx.prototype.set_normal=Tx.prototype.tw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);cn(c,b)};Object.defineProperty(Tx.prototype,"normal",{get:Tx.prototype.Zv,set:Tx.prototype.tw});
Tx.prototype.get_points=Tx.prototype.aw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(dn(c,b),r)};Tx.prototype.set_points=Tx.prototype.vw=function(b,c){var d=this.$u;ox();b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);en(d,b,c)};Object.defineProperty(Tx.prototype,"points",{get:Tx.prototype.aw,set:Tx.prototype.vw});Tx.prototype.get_separations=Tx.prototype.by=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return fn(c,b)};
Tx.prototype.set_separations=Tx.prototype.$z=function(b,c){var d=this.$u;ox();b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);gn(d,b,c)};Object.defineProperty(Tx.prototype,"separations",{get:Tx.prototype.by,set:Tx.prototype.$z});Tx.prototype.__destroy__=Tx.prototype.cv=function(){hn(this.$u)};function K(){this.$u=jn();g(K)[this.$u]=this}K.prototype=Object.create(e.prototype);K.prototype.constructor=K;K.prototype.av=K;K.bv={};a.b2ManifoldPoint=K;
K.prototype.get_localPoint=K.prototype.Sv=function(){return h(kn(this.$u),r)};K.prototype.set_localPoint=K.prototype.mw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ln(c,b)};Object.defineProperty(K.prototype,"localPoint",{get:K.prototype.Sv,set:K.prototype.mw});K.prototype.get_normalImpulse=K.prototype.Rx=function(){return mn(this.$u)};K.prototype.set_normalImpulse=K.prototype.Pz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);nn(c,b)};
Object.defineProperty(K.prototype,"normalImpulse",{get:K.prototype.Rx,set:K.prototype.Pz});K.prototype.get_tangentImpulse=K.prototype.ny=function(){return on(this.$u)};K.prototype.set_tangentImpulse=K.prototype.lA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pn(c,b)};Object.defineProperty(K.prototype,"tangentImpulse",{get:K.prototype.ny,set:K.prototype.lA});K.prototype.get_id=K.prototype.Qv=function(){return h(qn(this.$u),Lx)};
K.prototype.set_id=K.prototype.kw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);rn(c,b)};Object.defineProperty(K.prototype,"id",{get:K.prototype.Qv,set:K.prototype.kw});K.prototype.__destroy__=K.prototype.cv=function(){sn(this.$u)};
function Ux(b,c,d,f){b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);this.$u=void 0===b?tn():void 0===c?_emscripten_bind_b2Mat22_b2Mat22_1(b):void 0===d?un(b,c):void 0===f?_emscripten_bind_b2Mat22_b2Mat22_3(b,c,d):vn(b,c,d,f);g(Ux)[this.$u]=this}Ux.prototype=Object.create(e.prototype);Ux.prototype.constructor=Ux;Ux.prototype.av=Ux;Ux.bv={};a.b2Mat22=Ux;
Ux.prototype.Set=Ux.prototype.Set=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);wn(d,b,c)};Ux.prototype.SetIdentity=function(){xn(this.$u)};Ux.prototype.SetZero=function(){yn(this.$u)};Ux.prototype.GetInverse=function(){return h(zn(this.$u),Ux)};Ux.prototype.Solve=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(An(c,b),r)};Ux.prototype.get_ex=Ux.prototype.Ov=function(){return h(Bn(this.$u),r)};
Ux.prototype.set_ex=Ux.prototype.iw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Cn(c,b)};Object.defineProperty(Ux.prototype,"ex",{get:Ux.prototype.Ov,set:Ux.prototype.iw});Ux.prototype.get_ey=Ux.prototype.Pv=function(){return h(Dn(this.$u),r)};Ux.prototype.set_ey=Ux.prototype.jw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);En(c,b)};Object.defineProperty(Ux.prototype,"ey",{get:Ux.prototype.Pv,set:Ux.prototype.jw});Ux.prototype.__destroy__=Ux.prototype.cv=function(){Fn(this.$u)};
function L(b,c,d){b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);this.$u=void 0===b?Gn():void 0===c?_emscripten_bind_b2Mat33_b2Mat33_1(b):void 0===d?_emscripten_bind_b2Mat33_b2Mat33_2(b,c):Hn(b,c,d);g(L)[this.$u]=this}L.prototype=Object.create(e.prototype);L.prototype.constructor=L;L.prototype.av=L;L.bv={};a.b2Mat33=L;L.prototype.SetZero=function(){In(this.$u)};
L.prototype.Solve33=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Jn(c,b),y)};L.prototype.Solve22=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Kn(c,b),r)};L.prototype.GetInverse22=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ln(c,b)};L.prototype.GetSymInverse33=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Mn(c,b)};L.prototype.get_ex=L.prototype.Ov=function(){return h(Nn(this.$u),y)};
L.prototype.set_ex=L.prototype.iw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);On(c,b)};Object.defineProperty(L.prototype,"ex",{get:L.prototype.Ov,set:L.prototype.iw});L.prototype.get_ey=L.prototype.Pv=function(){return h(Pn(this.$u),y)};L.prototype.set_ey=L.prototype.jw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Qn(c,b)};Object.defineProperty(L.prototype,"ey",{get:L.prototype.Pv,set:L.prototype.jw});L.prototype.get_ez=L.prototype.Yw=function(){return h(Rn(this.$u),y)};
L.prototype.set_ez=L.prototype.Vy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Sn(c,b)};Object.defineProperty(L.prototype,"ez",{get:L.prototype.Yw,set:L.prototype.Vy});L.prototype.__destroy__=L.prototype.cv=function(){Tn(this.$u)};function Vx(){throw"cannot construct a b2MouseJoint, no constructor in IDL";}Vx.prototype=Object.create(q.prototype);Vx.prototype.constructor=Vx;Vx.prototype.av=Vx;Vx.bv={};a.b2MouseJoint=Vx;
Vx.prototype.SetTarget=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Un(c,b)};Vx.prototype.GetTarget=function(){return h(Vn(this.$u),r)};Vx.prototype.SetMaxForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Wn(c,b)};Vx.prototype.GetMaxForce=function(){return Xn(this.$u)};Vx.prototype.SetStiffness=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Yn(c,b)};Vx.prototype.GetStiffness=function(){return Zn(this.$u)};
Vx.prototype.SetDamping=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);$n(c,b)};Vx.prototype.GetDamping=function(){return ao(this.$u)};Vx.prototype.GetType=function(){return bo(this.$u)};Vx.prototype.GetBodyA=function(){return h(co(this.$u),n)};Vx.prototype.GetBodyB=function(){return h(eo(this.$u),n)};Vx.prototype.GetAnchorA=function(){return h(fo(this.$u),r)};Vx.prototype.GetAnchorB=function(){return h(go(this.$u),r)};
Vx.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(ho(c,b),r)};Vx.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return io(c,b)};Vx.prototype.GetNext=function(){return h(jo(this.$u),q)};Vx.prototype.GetUserData=function(){return h(ko(this.$u),m)};Vx.prototype.GetCollideConnected=function(){return!!lo(this.$u)};Vx.prototype.__destroy__=Vx.prototype.cv=function(){mo(this.$u)};
function M(){this.$u=no();g(M)[this.$u]=this}M.prototype=Object.create(l.prototype);M.prototype.constructor=M;M.prototype.av=M;M.bv={};a.b2MouseJointDef=M;M.prototype.get_target=M.prototype.py=function(){return h(oo(this.$u),r)};M.prototype.set_target=M.prototype.nA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);po(c,b)};Object.defineProperty(M.prototype,"target",{get:M.prototype.py,set:M.prototype.nA});M.prototype.get_maxForce=M.prototype.Cv=function(){return qo(this.$u)};
M.prototype.set_maxForce=M.prototype.Iv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ro(c,b)};Object.defineProperty(M.prototype,"maxForce",{get:M.prototype.Cv,set:M.prototype.Iv});M.prototype.get_stiffness=M.prototype.yv=function(){return so(this.$u)};M.prototype.set_stiffness=M.prototype.zv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);to(c,b)};Object.defineProperty(M.prototype,"stiffness",{get:M.prototype.yv,set:M.prototype.zv});
M.prototype.get_damping=M.prototype.sv=function(){return uo(this.$u)};M.prototype.set_damping=M.prototype.vv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);vo(c,b)};Object.defineProperty(M.prototype,"damping",{get:M.prototype.sv,set:M.prototype.vv});M.prototype.get_type=M.prototype.dv=function(){return wo(this.$u)};M.prototype.set_type=M.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);xo(c,b)};Object.defineProperty(M.prototype,"type",{get:M.prototype.dv,set:M.prototype.fv});
M.prototype.get_userData=M.prototype.ev=function(){return h(yo(this.$u),m)};M.prototype.set_userData=M.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);zo(c,b)};Object.defineProperty(M.prototype,"userData",{get:M.prototype.ev,set:M.prototype.gv});M.prototype.get_bodyA=M.prototype.hv=function(){return h(Ao(this.$u),n)};M.prototype.set_bodyA=M.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Bo(c,b)};
Object.defineProperty(M.prototype,"bodyA",{get:M.prototype.hv,set:M.prototype.lv});M.prototype.get_bodyB=M.prototype.jv=function(){return h(Co(this.$u),n)};M.prototype.set_bodyB=M.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Do(c,b)};Object.defineProperty(M.prototype,"bodyB",{get:M.prototype.jv,set:M.prototype.mv});M.prototype.get_collideConnected=M.prototype.kv=function(){return!!Eo(this.$u)};
M.prototype.set_collideConnected=M.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Fo(c,b)};Object.defineProperty(M.prototype,"collideConnected",{get:M.prototype.kv,set:M.prototype.nv});M.prototype.__destroy__=M.prototype.cv=function(){Go(this.$u)};function N(){this.$u=Ho();g(N)[this.$u]=this}N.prototype=Object.create(k.prototype);N.prototype.constructor=N;N.prototype.av=N;N.bv={};a.b2PolygonShape=N;
N.prototype.Set=N.prototype.Set=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Io(d,b,c)};N.prototype.SetAsBox=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);void 0===d?Jo(p,b,c):void 0===f?_emscripten_bind_b2PolygonShape_SetAsBox_3(p,b,c,d):Ko(p,b,c,d,f)};N.prototype.GetType=function(){return Lo(this.$u)};N.prototype.GetChildCount=function(){return Mo(this.$u)};
N.prototype.TestPoint=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);return!!No(d,b,c)};N.prototype.RayCast=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);return!!Oo(p,b,c,d,f)};
N.prototype.ComputeAABB=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);Po(f,b,c,d)};N.prototype.ComputeMass=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Qo(d,b,c)};N.prototype.get_m_centroid=N.prototype.Ax=function(){return h(Ro(this.$u),r)};N.prototype.set_m_centroid=N.prototype.yz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);So(c,b)};
Object.defineProperty(N.prototype,"m_centroid",{get:N.prototype.Ax,set:N.prototype.yz});N.prototype.get_m_vertices=N.prototype.Vv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(To(c,b),r)};N.prototype.set_m_vertices=N.prototype.pw=function(b,c){var d=this.$u;ox();b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Uo(d,b,c)};Object.defineProperty(N.prototype,"m_vertices",{get:N.prototype.Vv,set:N.prototype.pw});
N.prototype.get_m_normals=N.prototype.Cx=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Vo(c,b),r)};N.prototype.set_m_normals=N.prototype.Az=function(b,c){var d=this.$u;ox();b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Wo(d,b,c)};Object.defineProperty(N.prototype,"m_normals",{get:N.prototype.Cx,set:N.prototype.Az});N.prototype.get_m_count=N.prototype.Uv=function(){return Xo(this.$u)};
N.prototype.set_m_count=N.prototype.ow=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Yo(c,b)};Object.defineProperty(N.prototype,"m_count",{get:N.prototype.Uv,set:N.prototype.ow});N.prototype.get_m_type=N.prototype.uv=function(){return Zo(this.$u)};N.prototype.set_m_type=N.prototype.xv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);$o(c,b)};Object.defineProperty(N.prototype,"m_type",{get:N.prototype.uv,set:N.prototype.xv});N.prototype.get_m_radius=N.prototype.tv=function(){return ap(this.$u)};
N.prototype.set_m_radius=N.prototype.wv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);bp(c,b)};Object.defineProperty(N.prototype,"m_radius",{get:N.prototype.tv,set:N.prototype.wv});N.prototype.__destroy__=N.prototype.cv=function(){cp(this.$u)};function O(){throw"cannot construct a b2PrismaticJoint, no constructor in IDL";}O.prototype=Object.create(q.prototype);O.prototype.constructor=O;O.prototype.av=O;O.bv={};a.b2PrismaticJoint=O;
O.prototype.GetLocalAnchorA=function(){return h(dp(this.$u),r)};O.prototype.GetLocalAnchorB=function(){return h(ep(this.$u),r)};O.prototype.GetLocalAxisA=function(){return h(fp(this.$u),r)};O.prototype.GetReferenceAngle=function(){return gp(this.$u)};O.prototype.GetJointTranslation=function(){return hp(this.$u)};O.prototype.GetJointSpeed=function(){return ip(this.$u)};O.prototype.IsLimitEnabled=function(){return!!jp(this.$u)};
O.prototype.EnableLimit=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);kp(c,b)};O.prototype.GetLowerLimit=function(){return lp(this.$u)};O.prototype.GetUpperLimit=function(){return mp(this.$u)};O.prototype.SetLimits=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);np(d,b,c)};O.prototype.IsMotorEnabled=function(){return!!op(this.$u)};O.prototype.EnableMotor=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pp(c,b)};
O.prototype.SetMotorSpeed=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);qp(c,b)};O.prototype.GetMotorSpeed=function(){return rp(this.$u)};O.prototype.SetMaxMotorForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);sp(c,b)};O.prototype.GetMaxMotorForce=function(){return tp(this.$u)};O.prototype.GetMotorForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return up(c,b)};O.prototype.GetType=function(){return vp(this.$u)};
O.prototype.GetBodyA=function(){return h(wp(this.$u),n)};O.prototype.GetBodyB=function(){return h(xp(this.$u),n)};O.prototype.GetAnchorA=function(){return h(yp(this.$u),r)};O.prototype.GetAnchorB=function(){return h(zp(this.$u),r)};O.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Ap(c,b),r)};O.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return Bp(c,b)};O.prototype.GetNext=function(){return h(Cp(this.$u),q)};
O.prototype.GetUserData=function(){return h(Dp(this.$u),m)};O.prototype.GetCollideConnected=function(){return!!Ep(this.$u)};O.prototype.__destroy__=O.prototype.cv=function(){Fp(this.$u)};function P(){this.$u=Gp();g(P)[this.$u]=this}P.prototype=Object.create(l.prototype);P.prototype.constructor=P;P.prototype.av=P;P.bv={};a.b2PrismaticJointDef=P;
P.prototype.Initialize=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);Hp(p,b,c,d,f)};P.prototype.get_localAnchorA=P.prototype.ov=function(){return h(Ip(this.$u),r)};P.prototype.set_localAnchorA=P.prototype.qv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Jp(c,b)};Object.defineProperty(P.prototype,"localAnchorA",{get:P.prototype.ov,set:P.prototype.qv});
P.prototype.get_localAnchorB=P.prototype.pv=function(){return h(Kp(this.$u),r)};P.prototype.set_localAnchorB=P.prototype.rv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Lp(c,b)};Object.defineProperty(P.prototype,"localAnchorB",{get:P.prototype.pv,set:P.prototype.rv});P.prototype.get_localAxisA=P.prototype.Rv=function(){return h(Mp(this.$u),r)};P.prototype.set_localAxisA=P.prototype.lw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Np(c,b)};
Object.defineProperty(P.prototype,"localAxisA",{get:P.prototype.Rv,set:P.prototype.lw});P.prototype.get_referenceAngle=P.prototype.Fv=function(){return Op(this.$u)};P.prototype.set_referenceAngle=P.prototype.Lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Pp(c,b)};Object.defineProperty(P.prototype,"referenceAngle",{get:P.prototype.Fv,set:P.prototype.Lv});P.prototype.get_enableLimit=P.prototype.Av=function(){return!!Qp(this.$u)};
P.prototype.set_enableLimit=P.prototype.Gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Rp(c,b)};Object.defineProperty(P.prototype,"enableLimit",{get:P.prototype.Av,set:P.prototype.Gv});P.prototype.get_lowerTranslation=P.prototype.Tv=function(){return Sp(this.$u)};P.prototype.set_lowerTranslation=P.prototype.nw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Tp(c,b)};Object.defineProperty(P.prototype,"lowerTranslation",{get:P.prototype.Tv,set:P.prototype.nw});
P.prototype.get_upperTranslation=P.prototype.ew=function(){return Up(this.$u)};P.prototype.set_upperTranslation=P.prototype.zw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Vp(c,b)};Object.defineProperty(P.prototype,"upperTranslation",{get:P.prototype.ew,set:P.prototype.zw});P.prototype.get_enableMotor=P.prototype.Bv=function(){return!!Wp(this.$u)};P.prototype.set_enableMotor=P.prototype.Hv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Xp(c,b)};
Object.defineProperty(P.prototype,"enableMotor",{get:P.prototype.Bv,set:P.prototype.Hv});P.prototype.get_maxMotorForce=P.prototype.Px=function(){return Yp(this.$u)};P.prototype.set_maxMotorForce=P.prototype.Nz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Zp(c,b)};Object.defineProperty(P.prototype,"maxMotorForce",{get:P.prototype.Px,set:P.prototype.Nz});P.prototype.get_motorSpeed=P.prototype.Dv=function(){return $p(this.$u)};
P.prototype.set_motorSpeed=P.prototype.Jv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);aq(c,b)};Object.defineProperty(P.prototype,"motorSpeed",{get:P.prototype.Dv,set:P.prototype.Jv});P.prototype.get_type=P.prototype.dv=function(){return bq(this.$u)};P.prototype.set_type=P.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);cq(c,b)};Object.defineProperty(P.prototype,"type",{get:P.prototype.dv,set:P.prototype.fv});
P.prototype.get_userData=P.prototype.ev=function(){return h(dq(this.$u),m)};P.prototype.set_userData=P.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);eq(c,b)};Object.defineProperty(P.prototype,"userData",{get:P.prototype.ev,set:P.prototype.gv});P.prototype.get_bodyA=P.prototype.hv=function(){return h(fq(this.$u),n)};P.prototype.set_bodyA=P.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);gq(c,b)};
Object.defineProperty(P.prototype,"bodyA",{get:P.prototype.hv,set:P.prototype.lv});P.prototype.get_bodyB=P.prototype.jv=function(){return h(hq(this.$u),n)};P.prototype.set_bodyB=P.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);iq(c,b)};Object.defineProperty(P.prototype,"bodyB",{get:P.prototype.jv,set:P.prototype.mv});P.prototype.get_collideConnected=P.prototype.kv=function(){return!!jq(this.$u)};
P.prototype.set_collideConnected=P.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);kq(c,b)};Object.defineProperty(P.prototype,"collideConnected",{get:P.prototype.kv,set:P.prototype.nv});P.prototype.__destroy__=P.prototype.cv=function(){lq(this.$u)};function w(){throw"cannot construct a b2Profile, no constructor in IDL";}w.prototype=Object.create(e.prototype);w.prototype.constructor=w;w.prototype.av=w;w.bv={};a.b2Profile=w;w.prototype.get_step=w.prototype.iy=function(){return mq(this.$u)};
w.prototype.set_step=w.prototype.gA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);nq(c,b)};Object.defineProperty(w.prototype,"step",{get:w.prototype.iy,set:w.prototype.gA});w.prototype.get_collide=w.prototype.Uw=function(){return oq(this.$u)};w.prototype.set_collide=w.prototype.Ry=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pq(c,b)};Object.defineProperty(w.prototype,"collide",{get:w.prototype.Uw,set:w.prototype.Ry});w.prototype.get_solve=w.prototype.dy=function(){return qq(this.$u)};
w.prototype.set_solve=w.prototype.bA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);rq(c,b)};Object.defineProperty(w.prototype,"solve",{get:w.prototype.dy,set:w.prototype.bA});w.prototype.get_solveInit=w.prototype.ey=function(){return sq(this.$u)};w.prototype.set_solveInit=w.prototype.cA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);tq(c,b)};Object.defineProperty(w.prototype,"solveInit",{get:w.prototype.ey,set:w.prototype.cA});
w.prototype.get_solveVelocity=w.prototype.hy=function(){return uq(this.$u)};w.prototype.set_solveVelocity=w.prototype.fA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);vq(c,b)};Object.defineProperty(w.prototype,"solveVelocity",{get:w.prototype.hy,set:w.prototype.fA});w.prototype.get_solvePosition=w.prototype.fy=function(){return wq(this.$u)};w.prototype.set_solvePosition=w.prototype.dA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);xq(c,b)};
Object.defineProperty(w.prototype,"solvePosition",{get:w.prototype.fy,set:w.prototype.dA});w.prototype.get_broadphase=w.prototype.Ow=function(){return yq(this.$u)};w.prototype.set_broadphase=w.prototype.Ly=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);zq(c,b)};Object.defineProperty(w.prototype,"broadphase",{get:w.prototype.Ow,set:w.prototype.Ly});w.prototype.get_solveTOI=w.prototype.gy=function(){return Aq(this.$u)};
w.prototype.set_solveTOI=w.prototype.eA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Bq(c,b)};Object.defineProperty(w.prototype,"solveTOI",{get:w.prototype.gy,set:w.prototype.eA});w.prototype.__destroy__=w.prototype.cv=function(){Cq(this.$u)};function Wx(){throw"cannot construct a b2PulleyJoint, no constructor in IDL";}Wx.prototype=Object.create(q.prototype);Wx.prototype.constructor=Wx;Wx.prototype.av=Wx;Wx.bv={};a.b2PulleyJoint=Wx;
Wx.prototype.GetGroundAnchorA=function(){return h(Dq(this.$u),r)};Wx.prototype.GetGroundAnchorB=function(){return h(Eq(this.$u),r)};Wx.prototype.GetLengthA=function(){return Fq(this.$u)};Wx.prototype.GetLengthB=function(){return Gq(this.$u)};Wx.prototype.GetRatio=function(){return Hq(this.$u)};Wx.prototype.GetCurrentLengthA=function(){return Iq(this.$u)};Wx.prototype.GetCurrentLengthB=function(){return Jq(this.$u)};Wx.prototype.GetType=function(){return Kq(this.$u)};
Wx.prototype.GetBodyA=function(){return h(Lq(this.$u),n)};Wx.prototype.GetBodyB=function(){return h(Mq(this.$u),n)};Wx.prototype.GetAnchorA=function(){return h(Nq(this.$u),r)};Wx.prototype.GetAnchorB=function(){return h(Oq(this.$u),r)};Wx.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Pq(c,b),r)};Wx.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return Qq(c,b)};
Wx.prototype.GetNext=function(){return h(Rq(this.$u),q)};Wx.prototype.GetUserData=function(){return h(Sq(this.$u),m)};Wx.prototype.GetCollideConnected=function(){return!!Tq(this.$u)};Wx.prototype.__destroy__=Wx.prototype.cv=function(){Uq(this.$u)};function Q(){this.$u=Vq();g(Q)[this.$u]=this}Q.prototype=Object.create(l.prototype);Q.prototype.constructor=Q;Q.prototype.av=Q;Q.bv={};a.b2PulleyJointDef=Q;
Q.prototype.Initialize=function(b,c,d,f,p,W,Ka){var gb=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);p&&"object"===typeof p&&(p=p.$u);W&&"object"===typeof W&&(W=W.$u);Ka&&"object"===typeof Ka&&(Ka=Ka.$u);Wq(gb,b,c,d,f,p,W,Ka)};Q.prototype.get_groundAnchorA=Q.prototype.gx=function(){return h(Xq(this.$u),r)};
Q.prototype.set_groundAnchorA=Q.prototype.dz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Yq(c,b)};Object.defineProperty(Q.prototype,"groundAnchorA",{get:Q.prototype.gx,set:Q.prototype.dz});Q.prototype.get_groundAnchorB=Q.prototype.hx=function(){return h(Zq(this.$u),r)};Q.prototype.set_groundAnchorB=Q.prototype.ez=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);$q(c,b)};Object.defineProperty(Q.prototype,"groundAnchorB",{get:Q.prototype.hx,set:Q.prototype.ez});
Q.prototype.get_localAnchorA=Q.prototype.ov=function(){return h(ar(this.$u),r)};Q.prototype.set_localAnchorA=Q.prototype.qv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);br(c,b)};Object.defineProperty(Q.prototype,"localAnchorA",{get:Q.prototype.ov,set:Q.prototype.qv});Q.prototype.get_localAnchorB=Q.prototype.pv=function(){return h(cr(this.$u),r)};Q.prototype.set_localAnchorB=Q.prototype.rv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);dr(c,b)};
Object.defineProperty(Q.prototype,"localAnchorB",{get:Q.prototype.pv,set:Q.prototype.rv});Q.prototype.get_lengthA=Q.prototype.sx=function(){return er(this.$u)};Q.prototype.set_lengthA=Q.prototype.pz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);fr(c,b)};Object.defineProperty(Q.prototype,"lengthA",{get:Q.prototype.sx,set:Q.prototype.pz});Q.prototype.get_lengthB=Q.prototype.tx=function(){return gr(this.$u)};
Q.prototype.set_lengthB=Q.prototype.qz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);hr(c,b)};Object.defineProperty(Q.prototype,"lengthB",{get:Q.prototype.tx,set:Q.prototype.qz});Q.prototype.get_ratio=Q.prototype.dw=function(){return ir(this.$u)};Q.prototype.set_ratio=Q.prototype.yw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);jr(c,b)};Object.defineProperty(Q.prototype,"ratio",{get:Q.prototype.dw,set:Q.prototype.yw});Q.prototype.get_type=Q.prototype.dv=function(){return kr(this.$u)};
Q.prototype.set_type=Q.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);lr(c,b)};Object.defineProperty(Q.prototype,"type",{get:Q.prototype.dv,set:Q.prototype.fv});Q.prototype.get_userData=Q.prototype.ev=function(){return h(mr(this.$u),m)};Q.prototype.set_userData=Q.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);nr(c,b)};Object.defineProperty(Q.prototype,"userData",{get:Q.prototype.ev,set:Q.prototype.gv});
Q.prototype.get_bodyA=Q.prototype.hv=function(){return h(or(this.$u),n)};Q.prototype.set_bodyA=Q.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pr(c,b)};Object.defineProperty(Q.prototype,"bodyA",{get:Q.prototype.hv,set:Q.prototype.lv});Q.prototype.get_bodyB=Q.prototype.jv=function(){return h(qr(this.$u),n)};Q.prototype.set_bodyB=Q.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);rr(c,b)};
Object.defineProperty(Q.prototype,"bodyB",{get:Q.prototype.jv,set:Q.prototype.mv});Q.prototype.get_collideConnected=Q.prototype.kv=function(){return!!sr(this.$u)};Q.prototype.set_collideConnected=Q.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);tr(c,b)};Object.defineProperty(Q.prototype,"collideConnected",{get:Q.prototype.kv,set:Q.prototype.nv});Q.prototype.__destroy__=Q.prototype.cv=function(){ur(this.$u)};
function Xx(){throw"cannot construct a b2RayCastInput, no constructor in IDL";}Xx.prototype=Object.create(e.prototype);Xx.prototype.constructor=Xx;Xx.prototype.av=Xx;Xx.bv={};a.b2RayCastInput=Xx;Xx.prototype.get_p1=Xx.prototype.Ux=function(){return h(vr(this.$u),r)};Xx.prototype.set_p1=Xx.prototype.Sz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);wr(c,b)};Object.defineProperty(Xx.prototype,"p1",{get:Xx.prototype.Ux,set:Xx.prototype.Sz});
Xx.prototype.get_p2=Xx.prototype.Vx=function(){return h(xr(this.$u),r)};Xx.prototype.set_p2=Xx.prototype.Tz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);yr(c,b)};Object.defineProperty(Xx.prototype,"p2",{get:Xx.prototype.Vx,set:Xx.prototype.Tz});Xx.prototype.get_maxFraction=Xx.prototype.Nx=function(){return zr(this.$u)};Xx.prototype.set_maxFraction=Xx.prototype.Lz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ar(c,b)};
Object.defineProperty(Xx.prototype,"maxFraction",{get:Xx.prototype.Nx,set:Xx.prototype.Lz});Xx.prototype.__destroy__=Xx.prototype.cv=function(){Br(this.$u)};function Yx(){throw"cannot construct a b2RayCastOutput, no constructor in IDL";}Yx.prototype=Object.create(e.prototype);Yx.prototype.constructor=Yx;Yx.prototype.av=Yx;Yx.bv={};a.b2RayCastOutput=Yx;Yx.prototype.get_normal=Yx.prototype.Zv=function(){return h(Cr(this.$u),r)};
Yx.prototype.set_normal=Yx.prototype.tw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Dr(c,b)};Object.defineProperty(Yx.prototype,"normal",{get:Yx.prototype.Zv,set:Yx.prototype.tw});Yx.prototype.get_fraction=Yx.prototype.bx=function(){return Er(this.$u)};Yx.prototype.set_fraction=Yx.prototype.Zy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Fr(c,b)};Object.defineProperty(Yx.prototype,"fraction",{get:Yx.prototype.bx,set:Yx.prototype.Zy});
Yx.prototype.__destroy__=Yx.prototype.cv=function(){Gr(this.$u)};function R(){throw"cannot construct a b2RevoluteJoint, no constructor in IDL";}R.prototype=Object.create(q.prototype);R.prototype.constructor=R;R.prototype.av=R;R.bv={};a.b2RevoluteJoint=R;R.prototype.GetLocalAnchorA=function(){return h(Hr(this.$u),r)};R.prototype.GetLocalAnchorB=function(){return h(Ir(this.$u),r)};R.prototype.GetReferenceAngle=function(){return Jr(this.$u)};R.prototype.GetJointAngle=function(){return Kr(this.$u)};
R.prototype.GetJointSpeed=function(){return Lr(this.$u)};R.prototype.IsLimitEnabled=function(){return!!Mr(this.$u)};R.prototype.EnableLimit=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Nr(c,b)};R.prototype.GetLowerLimit=function(){return Or(this.$u)};R.prototype.GetUpperLimit=function(){return Pr(this.$u)};R.prototype.SetLimits=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Qr(d,b,c)};R.prototype.IsMotorEnabled=function(){return!!Rr(this.$u)};
R.prototype.EnableMotor=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Sr(c,b)};R.prototype.SetMotorSpeed=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Tr(c,b)};R.prototype.GetMotorSpeed=function(){return Ur(this.$u)};R.prototype.SetMaxMotorTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Vr(c,b)};R.prototype.GetMaxMotorTorque=function(){return Wr(this.$u)};R.prototype.GetMotorTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return Xr(c,b)};
R.prototype.GetType=function(){return Yr(this.$u)};R.prototype.GetBodyA=function(){return h(Zr(this.$u),n)};R.prototype.GetBodyB=function(){return h($r(this.$u),n)};R.prototype.GetAnchorA=function(){return h(as(this.$u),r)};R.prototype.GetAnchorB=function(){return h(bs(this.$u),r)};R.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(cs(c,b),r)};R.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return ds(c,b)};
R.prototype.GetNext=function(){return h(es(this.$u),q)};R.prototype.GetUserData=function(){return h(gs(this.$u),m)};R.prototype.GetCollideConnected=function(){return!!hs(this.$u)};R.prototype.__destroy__=R.prototype.cv=function(){is(this.$u)};function S(){this.$u=js();g(S)[this.$u]=this}S.prototype=Object.create(l.prototype);S.prototype.constructor=S;S.prototype.av=S;S.bv={};a.b2RevoluteJointDef=S;
S.prototype.Initialize=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);ks(f,b,c,d)};S.prototype.get_localAnchorA=S.prototype.ov=function(){return h(ls(this.$u),r)};S.prototype.set_localAnchorA=S.prototype.qv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ms(c,b)};Object.defineProperty(S.prototype,"localAnchorA",{get:S.prototype.ov,set:S.prototype.qv});
S.prototype.get_localAnchorB=S.prototype.pv=function(){return h(ns(this.$u),r)};S.prototype.set_localAnchorB=S.prototype.rv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ps(c,b)};Object.defineProperty(S.prototype,"localAnchorB",{get:S.prototype.pv,set:S.prototype.rv});S.prototype.get_referenceAngle=S.prototype.Fv=function(){return qs(this.$u)};S.prototype.set_referenceAngle=S.prototype.Lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);rs(c,b)};
Object.defineProperty(S.prototype,"referenceAngle",{get:S.prototype.Fv,set:S.prototype.Lv});S.prototype.get_enableLimit=S.prototype.Av=function(){return!!ss(this.$u)};S.prototype.set_enableLimit=S.prototype.Gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ts(c,b)};Object.defineProperty(S.prototype,"enableLimit",{get:S.prototype.Av,set:S.prototype.Gv});S.prototype.get_lowerAngle=S.prototype.yx=function(){return us(this.$u)};
S.prototype.set_lowerAngle=S.prototype.wz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);vs(c,b)};Object.defineProperty(S.prototype,"lowerAngle",{get:S.prototype.yx,set:S.prototype.wz});S.prototype.get_upperAngle=S.prototype.ty=function(){return xs(this.$u)};S.prototype.set_upperAngle=S.prototype.rA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ys(c,b)};Object.defineProperty(S.prototype,"upperAngle",{get:S.prototype.ty,set:S.prototype.rA});
S.prototype.get_enableMotor=S.prototype.Bv=function(){return!!zs(this.$u)};S.prototype.set_enableMotor=S.prototype.Hv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);As(c,b)};Object.defineProperty(S.prototype,"enableMotor",{get:S.prototype.Bv,set:S.prototype.Hv});S.prototype.get_motorSpeed=S.prototype.Dv=function(){return Bs(this.$u)};S.prototype.set_motorSpeed=S.prototype.Jv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Cs(c,b)};
Object.defineProperty(S.prototype,"motorSpeed",{get:S.prototype.Dv,set:S.prototype.Jv});S.prototype.get_maxMotorTorque=S.prototype.Wv=function(){return Ds(this.$u)};S.prototype.set_maxMotorTorque=S.prototype.qw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Es(c,b)};Object.defineProperty(S.prototype,"maxMotorTorque",{get:S.prototype.Wv,set:S.prototype.qw});S.prototype.get_type=S.prototype.dv=function(){return Fs(this.$u)};
S.prototype.set_type=S.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Gs(c,b)};Object.defineProperty(S.prototype,"type",{get:S.prototype.dv,set:S.prototype.fv});S.prototype.get_userData=S.prototype.ev=function(){return h(Hs(this.$u),m)};S.prototype.set_userData=S.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Is(c,b)};Object.defineProperty(S.prototype,"userData",{get:S.prototype.ev,set:S.prototype.gv});
S.prototype.get_bodyA=S.prototype.hv=function(){return h(Js(this.$u),n)};S.prototype.set_bodyA=S.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ks(c,b)};Object.defineProperty(S.prototype,"bodyA",{get:S.prototype.hv,set:S.prototype.lv});S.prototype.get_bodyB=S.prototype.jv=function(){return h(Ls(this.$u),n)};S.prototype.set_bodyB=S.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ms(c,b)};
Object.defineProperty(S.prototype,"bodyB",{get:S.prototype.jv,set:S.prototype.mv});S.prototype.get_collideConnected=S.prototype.kv=function(){return!!Ns(this.$u)};S.prototype.set_collideConnected=S.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Os(c,b)};Object.defineProperty(S.prototype,"collideConnected",{get:S.prototype.kv,set:S.prototype.nv});S.prototype.__destroy__=S.prototype.cv=function(){Ps(this.$u)};
function Dx(b){b&&"object"===typeof b&&(b=b.$u);this.$u=void 0===b?Qs():Rs(b);g(Dx)[this.$u]=this}Dx.prototype=Object.create(e.prototype);Dx.prototype.constructor=Dx;Dx.prototype.av=Dx;Dx.bv={};a.b2Rot=Dx;Dx.prototype.Set=Dx.prototype.Set=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ss(c,b)};Dx.prototype.SetIdentity=function(){Ts(this.$u)};Dx.prototype.GetAngle=function(){return Us(this.$u)};Dx.prototype.GetXAxis=function(){return h(Vs(this.$u),r)};
Dx.prototype.GetYAxis=function(){return h(Ws(this.$u),r)};Dx.prototype.get_s=Dx.prototype.ay=function(){return Xs(this.$u)};Dx.prototype.set_s=Dx.prototype.Zz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ys(c,b)};Object.defineProperty(Dx.prototype,"s",{get:Dx.prototype.ay,set:Dx.prototype.Zz});Dx.prototype.get_c=Dx.prototype.Qw=function(){return Zs(this.$u)};Dx.prototype.set_c=Dx.prototype.Ny=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);$s(c,b)};
Object.defineProperty(Dx.prototype,"c",{get:Dx.prototype.Qw,set:Dx.prototype.Ny});Dx.prototype.__destroy__=Dx.prototype.cv=function(){at(this.$u)};function T(){throw"cannot construct a b2WheelJoint, no constructor in IDL";}T.prototype=Object.create(q.prototype);T.prototype.constructor=T;T.prototype.av=T;T.bv={};a.b2WheelJoint=T;T.prototype.GetLocalAnchorA=function(){return h(bt(this.$u),r)};T.prototype.GetLocalAnchorB=function(){return h(ct(this.$u),r)};
T.prototype.GetLocalAxisA=function(){return h(dt(this.$u),r)};T.prototype.GetJointTranslation=function(){return et(this.$u)};T.prototype.GetJointLinearSpeed=function(){return ft(this.$u)};T.prototype.GetJointAngle=function(){return gt(this.$u)};T.prototype.GetJointAngularSpeed=function(){return ht(this.$u)};T.prototype.IsLimitEnabled=function(){return!!it(this.$u)};T.prototype.EnableLimit=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);jt(c,b)};T.prototype.GetLowerLimit=function(){return kt(this.$u)};
T.prototype.GetUpperLimit=function(){return lt(this.$u)};T.prototype.SetLimits=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);mt(d,b,c)};T.prototype.IsMotorEnabled=function(){return!!nt(this.$u)};T.prototype.EnableMotor=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ot(c,b)};T.prototype.SetMotorSpeed=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pt(c,b)};T.prototype.GetMotorSpeed=function(){return qt(this.$u)};
T.prototype.SetMaxMotorTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);rt(c,b)};T.prototype.GetMaxMotorTorque=function(){return st(this.$u)};T.prototype.GetMotorTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return tt(c,b)};T.prototype.SetStiffness=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ut(c,b)};T.prototype.GetStiffness=function(){return vt(this.$u)};T.prototype.SetDamping=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);wt(c,b)};
T.prototype.GetDamping=function(){return xt(this.$u)};T.prototype.GetType=function(){return yt(this.$u)};T.prototype.GetBodyA=function(){return h(zt(this.$u),n)};T.prototype.GetBodyB=function(){return h(At(this.$u),n)};T.prototype.GetAnchorA=function(){return h(Bt(this.$u),r)};T.prototype.GetAnchorB=function(){return h(Ct(this.$u),r)};T.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Dt(c,b),r)};
T.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return Et(c,b)};T.prototype.GetNext=function(){return h(Ft(this.$u),q)};T.prototype.GetUserData=function(){return h(Gt(this.$u),m)};T.prototype.GetCollideConnected=function(){return!!Ht(this.$u)};T.prototype.__destroy__=T.prototype.cv=function(){It(this.$u)};function U(){this.$u=Jt();g(U)[this.$u]=this}U.prototype=Object.create(l.prototype);U.prototype.constructor=U;U.prototype.av=U;U.bv={};
a.b2WheelJointDef=U;U.prototype.Initialize=function(b,c,d,f){var p=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);f&&"object"===typeof f&&(f=f.$u);Kt(p,b,c,d,f)};U.prototype.get_localAnchorA=U.prototype.ov=function(){return h(Lt(this.$u),r)};U.prototype.set_localAnchorA=U.prototype.qv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Mt(c,b)};Object.defineProperty(U.prototype,"localAnchorA",{get:U.prototype.ov,set:U.prototype.qv});
U.prototype.get_localAnchorB=U.prototype.pv=function(){return h(Nt(this.$u),r)};U.prototype.set_localAnchorB=U.prototype.rv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ot(c,b)};Object.defineProperty(U.prototype,"localAnchorB",{get:U.prototype.pv,set:U.prototype.rv});U.prototype.get_localAxisA=U.prototype.Rv=function(){return h(Pt(this.$u),r)};U.prototype.set_localAxisA=U.prototype.lw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Qt(c,b)};
Object.defineProperty(U.prototype,"localAxisA",{get:U.prototype.Rv,set:U.prototype.lw});U.prototype.get_enableLimit=U.prototype.Av=function(){return!!Rt(this.$u)};U.prototype.set_enableLimit=U.prototype.Gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);St(c,b)};Object.defineProperty(U.prototype,"enableLimit",{get:U.prototype.Av,set:U.prototype.Gv});U.prototype.get_lowerTranslation=U.prototype.Tv=function(){return Tt(this.$u)};
U.prototype.set_lowerTranslation=U.prototype.nw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ut(c,b)};Object.defineProperty(U.prototype,"lowerTranslation",{get:U.prototype.Tv,set:U.prototype.nw});U.prototype.get_upperTranslation=U.prototype.ew=function(){return Vt(this.$u)};U.prototype.set_upperTranslation=U.prototype.zw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Wt(c,b)};Object.defineProperty(U.prototype,"upperTranslation",{get:U.prototype.ew,set:U.prototype.zw});
U.prototype.get_enableMotor=U.prototype.Bv=function(){return!!Xt(this.$u)};U.prototype.set_enableMotor=U.prototype.Hv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Yt(c,b)};Object.defineProperty(U.prototype,"enableMotor",{get:U.prototype.Bv,set:U.prototype.Hv});U.prototype.get_maxMotorTorque=U.prototype.Wv=function(){return Zt(this.$u)};U.prototype.set_maxMotorTorque=U.prototype.qw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);$t(c,b)};
Object.defineProperty(U.prototype,"maxMotorTorque",{get:U.prototype.Wv,set:U.prototype.qw});U.prototype.get_motorSpeed=U.prototype.Dv=function(){return au(this.$u)};U.prototype.set_motorSpeed=U.prototype.Jv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);bu(c,b)};Object.defineProperty(U.prototype,"motorSpeed",{get:U.prototype.Dv,set:U.prototype.Jv});U.prototype.get_stiffness=U.prototype.yv=function(){return cu(this.$u)};
U.prototype.set_stiffness=U.prototype.zv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);du(c,b)};Object.defineProperty(U.prototype,"stiffness",{get:U.prototype.yv,set:U.prototype.zv});U.prototype.get_damping=U.prototype.sv=function(){return eu(this.$u)};U.prototype.set_damping=U.prototype.vv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);fu(c,b)};Object.defineProperty(U.prototype,"damping",{get:U.prototype.sv,set:U.prototype.vv});U.prototype.get_type=U.prototype.dv=function(){return gu(this.$u)};
U.prototype.set_type=U.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);hu(c,b)};Object.defineProperty(U.prototype,"type",{get:U.prototype.dv,set:U.prototype.fv});U.prototype.get_userData=U.prototype.ev=function(){return h(iu(this.$u),m)};U.prototype.set_userData=U.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ju(c,b)};Object.defineProperty(U.prototype,"userData",{get:U.prototype.ev,set:U.prototype.gv});
U.prototype.get_bodyA=U.prototype.hv=function(){return h(ku(this.$u),n)};U.prototype.set_bodyA=U.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);lu(c,b)};Object.defineProperty(U.prototype,"bodyA",{get:U.prototype.hv,set:U.prototype.lv});U.prototype.get_bodyB=U.prototype.jv=function(){return h(mu(this.$u),n)};U.prototype.set_bodyB=U.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);nu(c,b)};
Object.defineProperty(U.prototype,"bodyB",{get:U.prototype.jv,set:U.prototype.mv});U.prototype.get_collideConnected=U.prototype.kv=function(){return!!ou(this.$u)};U.prototype.set_collideConnected=U.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);pu(c,b)};Object.defineProperty(U.prototype,"collideConnected",{get:U.prototype.kv,set:U.prototype.nv});U.prototype.__destroy__=U.prototype.cv=function(){qu(this.$u)};
function Zx(){throw"cannot construct a b2MotorJoint, no constructor in IDL";}Zx.prototype=Object.create(q.prototype);Zx.prototype.constructor=Zx;Zx.prototype.av=Zx;Zx.bv={};a.b2MotorJoint=Zx;Zx.prototype.SetLinearOffset=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ru(c,b)};Zx.prototype.GetLinearOffset=function(){return h(su(this.$u),r)};Zx.prototype.SetAngularOffset=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);tu(c,b)};Zx.prototype.GetAngularOffset=function(){return uu(this.$u)};
Zx.prototype.SetMaxForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);vu(c,b)};Zx.prototype.GetMaxForce=function(){return wu(this.$u)};Zx.prototype.SetMaxTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);xu(c,b)};Zx.prototype.GetMaxTorque=function(){return yu(this.$u)};Zx.prototype.SetCorrectionFactor=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);zu(c,b)};Zx.prototype.GetCorrectionFactor=function(){return Au(this.$u)};Zx.prototype.GetType=function(){return Bu(this.$u)};
Zx.prototype.GetBodyA=function(){return h(Cu(this.$u),n)};Zx.prototype.GetBodyB=function(){return h(Du(this.$u),n)};Zx.prototype.GetAnchorA=function(){return h(Eu(this.$u),r)};Zx.prototype.GetAnchorB=function(){return h(Fu(this.$u),r)};Zx.prototype.GetReactionForce=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return h(Gu(c,b),r)};Zx.prototype.GetReactionTorque=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);return Hu(c,b)};
Zx.prototype.GetNext=function(){return h(Iu(this.$u),q)};Zx.prototype.GetUserData=function(){return h(Ju(this.$u),m)};Zx.prototype.GetCollideConnected=function(){return!!Ku(this.$u)};Zx.prototype.__destroy__=Zx.prototype.cv=function(){Lu(this.$u)};function V(){this.$u=Mu();g(V)[this.$u]=this}V.prototype=Object.create(l.prototype);V.prototype.constructor=V;V.prototype.av=V;V.bv={};a.b2MotorJointDef=V;
V.prototype.Initialize=function(b,c){var d=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);Nu(d,b,c)};V.prototype.get_linearOffset=V.prototype.vx=function(){return h(Ou(this.$u),r)};V.prototype.set_linearOffset=V.prototype.sz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Pu(c,b)};Object.defineProperty(V.prototype,"linearOffset",{get:V.prototype.vx,set:V.prototype.sz});V.prototype.get_angularOffset=V.prototype.Gw=function(){return Qu(this.$u)};
V.prototype.set_angularOffset=V.prototype.Dy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ru(c,b)};Object.defineProperty(V.prototype,"angularOffset",{get:V.prototype.Gw,set:V.prototype.Dy});V.prototype.get_maxForce=V.prototype.Cv=function(){return Su(this.$u)};V.prototype.set_maxForce=V.prototype.Iv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Tu(c,b)};Object.defineProperty(V.prototype,"maxForce",{get:V.prototype.Cv,set:V.prototype.Iv});
V.prototype.get_maxTorque=V.prototype.Xv=function(){return Uu(this.$u)};V.prototype.set_maxTorque=V.prototype.rw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Vu(c,b)};Object.defineProperty(V.prototype,"maxTorque",{get:V.prototype.Xv,set:V.prototype.rw});V.prototype.get_correctionFactor=V.prototype.Ww=function(){return Wu(this.$u)};V.prototype.set_correctionFactor=V.prototype.Ty=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Xu(c,b)};
Object.defineProperty(V.prototype,"correctionFactor",{get:V.prototype.Ww,set:V.prototype.Ty});V.prototype.get_type=V.prototype.dv=function(){return Yu(this.$u)};V.prototype.set_type=V.prototype.fv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Zu(c,b)};Object.defineProperty(V.prototype,"type",{get:V.prototype.dv,set:V.prototype.fv});V.prototype.get_userData=V.prototype.ev=function(){return h($u(this.$u),m)};
V.prototype.set_userData=V.prototype.gv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);av(c,b)};Object.defineProperty(V.prototype,"userData",{get:V.prototype.ev,set:V.prototype.gv});V.prototype.get_bodyA=V.prototype.hv=function(){return h(bv(this.$u),n)};V.prototype.set_bodyA=V.prototype.lv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);cv(c,b)};Object.defineProperty(V.prototype,"bodyA",{get:V.prototype.hv,set:V.prototype.lv});
V.prototype.get_bodyB=V.prototype.jv=function(){return h(dv(this.$u),n)};V.prototype.set_bodyB=V.prototype.mv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ev(c,b)};Object.defineProperty(V.prototype,"bodyB",{get:V.prototype.jv,set:V.prototype.mv});V.prototype.get_collideConnected=V.prototype.kv=function(){return!!fv(this.$u)};V.prototype.set_collideConnected=V.prototype.nv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);gv(c,b)};
Object.defineProperty(V.prototype,"collideConnected",{get:V.prototype.kv,set:V.prototype.nv});V.prototype.__destroy__=V.prototype.cv=function(){hv(this.$u)};function X(){this.$u=iv();g(X)[this.$u]=this}X.prototype=Object.create(e.prototype);X.prototype.constructor=X;X.prototype.av=X;X.bv={};a.b2RopeTuning=X;X.prototype.get_stretchingModel=X.prototype.my=function(){return jv(this.$u)};X.prototype.set_stretchingModel=X.prototype.kA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);kv(c,b)};
Object.defineProperty(X.prototype,"stretchingModel",{get:X.prototype.my,set:X.prototype.kA});X.prototype.get_bendingModel=X.prototype.Nw=function(){return lv(this.$u)};X.prototype.set_bendingModel=X.prototype.Ky=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);mv(c,b)};Object.defineProperty(X.prototype,"bendingModel",{get:X.prototype.Nw,set:X.prototype.Ky});X.prototype.get_damping=X.prototype.sv=function(){return nv(this.$u)};
X.prototype.set_damping=X.prototype.vv=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ov(c,b)};Object.defineProperty(X.prototype,"damping",{get:X.prototype.sv,set:X.prototype.vv});X.prototype.get_stretchStiffness=X.prototype.ly=function(){return pv(this.$u)};X.prototype.set_stretchStiffness=X.prototype.jA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);qv(c,b)};Object.defineProperty(X.prototype,"stretchStiffness",{get:X.prototype.ly,set:X.prototype.jA});
X.prototype.get_stretchHertz=X.prototype.ky=function(){return rv(this.$u)};X.prototype.set_stretchHertz=X.prototype.iA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);sv(c,b)};Object.defineProperty(X.prototype,"stretchHertz",{get:X.prototype.ky,set:X.prototype.iA});X.prototype.get_stretchDamping=X.prototype.jy=function(){return tv(this.$u)};X.prototype.set_stretchDamping=X.prototype.hA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);uv(c,b)};
Object.defineProperty(X.prototype,"stretchDamping",{get:X.prototype.jy,set:X.prototype.hA});X.prototype.get_bendStiffness=X.prototype.Mw=function(){return vv(this.$u)};X.prototype.set_bendStiffness=X.prototype.Jy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);wv(c,b)};Object.defineProperty(X.prototype,"bendStiffness",{get:X.prototype.Mw,set:X.prototype.Jy});X.prototype.get_bendHertz=X.prototype.Lw=function(){return xv(this.$u)};
X.prototype.set_bendHertz=X.prototype.Iy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);yv(c,b)};Object.defineProperty(X.prototype,"bendHertz",{get:X.prototype.Lw,set:X.prototype.Iy});X.prototype.get_bendDamping=X.prototype.Kw=function(){return zv(this.$u)};X.prototype.set_bendDamping=X.prototype.Hy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Av(c,b)};Object.defineProperty(X.prototype,"bendDamping",{get:X.prototype.Kw,set:X.prototype.Hy});
X.prototype.get_isometric=X.prototype.mx=function(){return!!Bv(this.$u)};X.prototype.set_isometric=X.prototype.jz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Cv(c,b)};Object.defineProperty(X.prototype,"isometric",{get:X.prototype.mx,set:X.prototype.jz});X.prototype.get_fixedEffectiveMass=X.prototype.$w=function(){return!!Dv(this.$u)};X.prototype.set_fixedEffectiveMass=X.prototype.Xy=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ev(c,b)};
Object.defineProperty(X.prototype,"fixedEffectiveMass",{get:X.prototype.$w,set:X.prototype.Xy});X.prototype.get_warmStart=X.prototype.xy=function(){return!!Fv(this.$u)};X.prototype.set_warmStart=X.prototype.vA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Gv(c,b)};Object.defineProperty(X.prototype,"warmStart",{get:X.prototype.xy,set:X.prototype.vA});X.prototype.__destroy__=X.prototype.cv=function(){Hv(this.$u)};function Y(){this.$u=Iv();g(Y)[this.$u]=this}Y.prototype=Object.create(e.prototype);
Y.prototype.constructor=Y;Y.prototype.av=Y;Y.bv={};a.b2RopeDef=Y;Y.prototype.get_position=Y.prototype.bw=function(){return h(Jv(this.$u),r)};Y.prototype.set_position=Y.prototype.ww=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Kv(c,b)};Object.defineProperty(Y.prototype,"position",{get:Y.prototype.bw,set:Y.prototype.ww});Y.prototype.get_vertices=Y.prototype.wy=function(){return h(Lv(this.$u),r)};
Y.prototype.set_vertices=Y.prototype.uA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Mv(c,b)};Object.defineProperty(Y.prototype,"vertices",{get:Y.prototype.wy,set:Y.prototype.uA});Y.prototype.get_count=Y.prototype.Nv=function(){return Nv(this.$u)};Y.prototype.set_count=Y.prototype.hw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ov(c,b)};Object.defineProperty(Y.prototype,"count",{get:Y.prototype.Nv,set:Y.prototype.hw});
Y.prototype.get_gravity=Y.prototype.ex=function(){return h(Pv(this.$u),r)};Y.prototype.set_gravity=Y.prototype.bz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Qv(c,b)};Object.defineProperty(Y.prototype,"gravity",{get:Y.prototype.ex,set:Y.prototype.bz});Y.prototype.get_tuning=Y.prototype.qy=function(){return h(Rv(this.$u),X)};Y.prototype.set_tuning=Y.prototype.oA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Sv(c,b)};
Object.defineProperty(Y.prototype,"tuning",{get:Y.prototype.qy,set:Y.prototype.oA});Y.prototype.__destroy__=Y.prototype.cv=function(){Tv(this.$u)};function $x(){this.$u=Uv();g($x)[this.$u]=this}$x.prototype=Object.create(e.prototype);$x.prototype.constructor=$x;$x.prototype.av=$x;$x.bv={};a.b2Rope=$x;$x.prototype.Create=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Vv(c,b)};$x.prototype.SetTuning=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Wv(c,b)};
$x.prototype.Step=function(b,c,d){var f=this.$u;b&&"object"===typeof b&&(b=b.$u);c&&"object"===typeof c&&(c=c.$u);d&&"object"===typeof d&&(d=d.$u);Xv(f,b,c,d)};$x.prototype.Reset=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Yv(c,b)};$x.prototype.Draw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Zv(c,b)};$x.prototype.__destroy__=$x.prototype.cv=function(){$v(this.$u)};function ay(){this.$u=aw();g(ay)[this.$u]=this}ay.prototype=Object.create(e.prototype);
ay.prototype.constructor=ay;ay.prototype.av=ay;ay.bv={};a.b2ClipVertex=ay;ay.prototype.get_v=ay.prototype.vy=function(){return h(bw(this.$u),r)};ay.prototype.set_v=ay.prototype.tA=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);cw(c,b)};Object.defineProperty(ay.prototype,"v",{get:ay.prototype.vy,set:ay.prototype.tA});ay.prototype.get_id=ay.prototype.Qv=function(){return h(dw(this.$u),Lx)};
ay.prototype.set_id=ay.prototype.kw=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);ew(c,b)};Object.defineProperty(ay.prototype,"id",{get:ay.prototype.Qv,set:ay.prototype.kw});ay.prototype.__destroy__=ay.prototype.cv=function(){fw(this.$u)};
(function(){function b(){a.b2Shape.e_circle=gw();a.b2Shape.e_edge=hw();a.b2Shape.e_polygon=iw();a.b2Shape.e_chain=jw();a.b2Shape.e_typeCount=kw();a.b2_staticBody=lw();a.b2_kinematicBody=mw();a.b2_dynamicBody=nw();a.e_unknownJoint=ow();a.e_revoluteJoint=pw();a.e_prismaticJoint=qw();a.e_distanceJoint=rw();a.e_pulleyJoint=sw();a.e_mouseJoint=tw();a.e_gearJoint=uw();a.e_wheelJoint=vw();a.e_weldJoint=ww();a.e_frictionJoint=xw();a.e_ropeJoint=yw();a.e_motorJoint=zw();a.b2ContactFeature.e_vertex=Aw();a.b2ContactFeature.e_face=
Bw();a.b2Draw.e_shapeBit=Cw();a.b2Draw.e_jointBit=Dw();a.b2Draw.e_aabbBit=Ew();a.b2Draw.e_pairBit=Fw();a.b2Draw.e_centerOfMassBit=Gw();a.b2Manifold.e_circles=Hw();a.b2Manifold.e_faceA=Iw();a.b2Manifold.e_faceB=Jw();a.b2_nullState=Kw();a.b2_addState=Lw();a.b2_persistState=Mw();a.b2_removeState=Nw();a.b2_pbdStretchingModel=Ow();a.b2_xpbdStretchingModel=Pw();a.b2_springAngleBendingModel=Qw();a.b2_pbdAngleBendingModel=Rw();a.b2_xpbdAngleBendingModel=Sw();a.b2_pbdDistanceBendingModel=Tw();a.b2_pbdHeightBendingModel=
Uw()}Ga?b():Da.unshift(b)})();Y.prototype.get_masses=Y.prototype.Mx=function(){return h(Vw(this.$u),r)};Y.prototype.set_masses=Y.prototype.Kz=function(b){var c=this.$u;b&&"object"===typeof b&&(b=b.$u);Ww(c,b)};Object.defineProperty(Y.prototype,"masses",{get:Y.prototype.Mx,set:Y.prototype.Kz});const Z=b=>"object"===typeof b?b.$u:b;a.b2GetPointStates=(b,c,d,f)=>{Xw(Z(b),Z(c),Z(d),Z(f))};a.b2CollideCircles=(b,c,d,f,p)=>{Yw(Z(b),Z(c),Z(d),Z(f),Z(p))};
a.b2CollidePolygonAndCircle=(b,c,d,f,p)=>{Zw(Z(b),Z(c),Z(d),Z(f),Z(p))};a.b2CollidePolygons=(b,c,d,f,p)=>{$w(Z(b),Z(c),Z(d),Z(f),Z(p))};a.b2CollideEdgeAndCircle=(b,c,d,f,p)=>{ax(Z(b),Z(c),Z(d),Z(f),Z(p))};a.b2CollideEdgeAndPolygon=(b,c,d,f,p)=>{bx(Z(b),Z(c),Z(d),Z(f),Z(p))};a.b2ClipSegmentToLine=(b,c,d,f,p)=>cx(Z(b),Z(c),Z(d),f,p);a.b2TestOverlap=(b,c,d,f,p,W)=>void 0===d?!!ex(Z(b),Z(c)):!!dx(Z(b),c,Z(d),f,Z(p),Z(W));a.reifyArray=(b,c,d,f)=>Array.from({length:c},(p,W)=>h(b+W*d,f));
a.pointsToVec2Array=b=>{const c=new Float32Array(2*b.length);for(let f=0;f<b.length;f++){const {x:p,y:W}=b[f];c[2*f]=p;c[2*f+1]=W}const d=a._malloc(c.byteLength);za.set(c,d>>2);return[h(d,r),()=>a._free(d)]};a.tuplesToVec2Array=b=>{const c=new Float32Array(2*b.length);for(let f=0;f<b.length;f++){const [p,W]=b[f];c[2*f]=p;c[2*f+1]=W}const d=a._malloc(c.byteLength);za.set(c,d>>2);return[h(d,r),()=>a._free(d)]};
a.toFloatArray=b=>{b=new Float32Array(b);const c=a._malloc(b.byteLength);za.set(b,c>>2);return[h(c),()=>a._free(c)]};a.sizeof=b=>{const c=new b;b=new b;const d=b.$u-c.$u;b.cv();c.cv();return d};a.allocateArray=(b,c,d=1)=>{c=new ArrayBuffer(c*d);const f=a._malloc(c.byteLength);wa.set(c,f);return[h(f,b),()=>a._free(f)]};a.b2LinearStiffness=(b,c,d,f,p,W)=>{fx(Z(b),Z(c),d,f,Z(p),Z(W))};a.b2AngularStiffness=(b,c,d,f,p,W)=>{gx(Z(b),Z(c),d,f,Z(p),Z(W))};


  return Box2D.ready
}
);
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box2D);

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.21';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function',
      INVALID_TEMPL_VAR_ERROR_TEXT = 'Invalid `variable` option passed into `_.template`';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /** Used to match a single whitespace character. */
  var reWhitespace = /\s/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /**
   * Used to validate the `validate` option in `_.template` variable.
   *
   * Forbids characters which could potentially change the meaning of the function argument definition:
   * - "()," (modification of function parameters)
   * - "=" (default value)
   * - "[]{}" (destructuring of function parameters)
   * - "/" (beginning of a comment)
   * - whitespace
   */
  var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports =  true && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim(string) {
    return string
      ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
      : string;
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex(string) {
    var index = string.length;

    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key) {
          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
      }

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack);
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            }
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }

      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
          return object;
        }

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      var low = 0,
          high = array == null ? 0 : array.length;
      if (high === 0) {
        return 0;
      }

      value = iteratee(value);
      var valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision && nativeIsFinite(number)) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Check that cyclic values are equal.
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Check that cyclic values are equal.
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return new Ctor;

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return new Ctor;

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;

      return !!length &&
        (type == 'number' ||
          (type != 'symbol' && reIsUint.test(value))) &&
            (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function safeGet(object, key) {
      if (key === 'constructor' && typeof object[key] === 'function') {
        return;
      }

      if (key == '__proto__') {
        return;
      }

      return object[key];
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 30 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

        return maxing
          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(object, sources) {
      object = Object(object);

      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }

      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;

        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];

          if (value === undefined ||
              (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            object[key] = source[key];
          }
        }
      }

      return object;
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      // The sourceURL gets injected into the source that's eval-ed, so be careful
      // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
      // and escape the comment, thus injecting code that gets evaled.
      var sourceURL = '//# sourceURL=' +
        (hasOwnProperty.call(options, 'sourceURL')
          ? (options.sourceURL + '').replace(/\s/g, ' ')
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = hasOwnProperty.call(options, 'variable') && options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Throw an error if a forbidden character was found in `variable`, to prevent
      // potential command injection attacks.
      else if (reForbiddenIdentifierChars.test(variable)) {
        throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
      }

      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return baseTrim(string);
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.slice(0, trimmedEndIndex(string) + 1);
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     *
     * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
     * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name + '';
        if (!hasOwnProperty.call(realNames, key)) {
          realNames[key] = [];
        }
        realNames[key].push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else {}
}.call(this));


/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/tippy/index.css":
/*!***********************************!*\
  !*** ./src/pages/tippy/index.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/box2d-wasm/dist/es/Box2D.wasm":
/*!****************************************************!*\
  !*** ./node_modules/box2d-wasm/dist/es/Box2D.wasm ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Box2D.wasm";

/***/ }),

/***/ "?4121":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5f8c":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"src_pages_tippy_workers_simulation-worker_js":"069d716a197c18255e15","src_pages_tippy_workers_training-worker_js":"9e236b74469dda0ec6dd"}[chunkId] + ".js";
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
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
/******/ 			"tippy": 0
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************!*\
  !*** ./src/pages/tippy/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var box2d_wasm_dist_es_Box2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! box2d-wasm/dist/es/Box2D */ "./node_modules/box2d-wasm/dist/es/Box2D.js");
/* harmony import */ var _tippy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tippy.js */ "./src/pages/tippy/tippy.js");
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.js */ "./src/pages/tippy/globals.js");
/* harmony import */ var _draw_sim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draw-sim.js */ "./src/pages/tippy/draw-sim.js");
/* harmony import */ var _cmaMeanInit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cmaMeanInit.js */ "./src/pages/tippy/cmaMeanInit.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

__webpack_require__(/*! ../../main.css */ "./src/main.css");

__webpack_require__(/*! ./index.css */ "./src/pages/tippy/index.css");






 // // https://stackoverflow.com/questions/62954570/javascript-feature-detect-module-support-for-web-workers

var population;
var trainingWorker,
    trainingWorkerInitialized = false,
    n_dim,
    solutionScoreDetailed = [],
    solutionsScoresReceived = 0,
    trainingPaused = false;
var simulationWorkers = [],
    trainingRecord = [];
var trainingRecordInitialized = false;

function initSimWorkers(terrainPts) {
  for (var i = 0; i < _globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.nWorkers; i++) {
    var worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_pages_tippy_workers_simulation-worker_js"), __webpack_require__.b));
    worker.postMessage(["terrainPts", terrainPts]);

    worker.onmessage = function (e) {
      var _e$data = _slicedToArray(e.data, 2),
          info = _e$data[0],
          msg = _e$data[1];

      if (info == "solutionsScores") {
        var _solutionScoreDetaile;

        (_solutionScoreDetaile = solutionScoreDetailed).push.apply(_solutionScoreDetaile, _toConsumableArray(msg));

        solutionsScoresReceived++;

        if (solutionsScoresReceived == _globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.nWorkers && !trainingPaused) {
          sendScores();
        }
      }
    };

    simulationWorkers.push(worker);
  }
}

function sendScores() {
  console.log("sending scores");
  trainingWorker.postMessage(["solutionsScores", // processScores(solutionScoreDetailed, trainingRecord, chart),
  processScores(solutionScoreDetailed, trainingRecord, null)]);
  solutionScoreDetailed = [];
  solutionsScoresReceived = 0;
}

function getTaskStr(i) {
  return "task_".concat(i.toString().padStart(2, "0"), "_");
}

var trainingEp = 0;

function pushChartData(chart, datasetIdx, keyStr, value) {
  var ds = chart.data.datasets[datasetIdx];

  if (ds.label == keyStr) {
    ds.data.push({
      x: trainingEp,
      y: value
    });
  }
}

function processScores(solutionScoreDetailed, trainingRecord, chart) {
  var solutionsScores = []; // if (!trainingRecordInitialized) {
  //   const info = solutionScoreDetailed[0]
  //   for (let i = 0; i < info.taskScores.length; i++) {
  //     const taskStr = getTaskStr(i),
  //       taskScore = info.taskScores[i]
  //     for (let key of Object.keys(taskScore)) {
  //       const keyStr = taskStr + key
  //       trainingRecord[keyStr] = []
  //     }
  //   }
  //   trainingRecord["biasNorm"] = []
  //   trainingRecord["wtsNorm"] = []
  //   trainingRecord["episode"] = []
  //   const datasets = []
  //   for (let key of Object.keys(trainingRecord)) {
  //     if (key == "episode") {
  //       continue
  //     }
  //     datasets.push({
  //       label: key,
  //       data: [],
  //       backgroundColor: randRGB(),
  //     })
  //   }
  //   chart.data.datasets = datasets
  // }
  // trainingRecordInitialized = true

  var _iterator = _createForOfIteratorHelper(solutionScoreDetailed),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var info = _step.value;
      // let datasetIdx = 0
      var solution = info.solution;
      var score = 0;

      for (var i = 0; i < info.taskScores.length; i++) {
        // const taskStr = getTaskStr(i),
        //   taskScore = info.taskScores[i]
        var taskScore = info.taskScores[i]; // for (let key of Object.keys(taskScore)) {
        //   const keyStr = taskStr + key,
        //     value = taskScore[key]
        //   trainingRecord[keyStr].push(value)
        //   pushChartData(chart, datasetIdx, keyStr, value)
        //   datasetIdx++
        // }

        score += taskScore.mse;
        score += 1e2 * taskScore.crashedRatio;
        score += 1e5 * taskScore.driftX;
      }

      score += 1e-9 * info.biasNorm;
      score += 1e1 * info.wtsNorm; // trainingRecord["biasNorm"].push(info.biasNorm)
      // pushChartData(chart, datasetIdx, "biasNorm", info.biasNorm)
      // datasetIdx++
      // trainingRecord["wtsNorm"].push(info.wtsNorm)
      // pushChartData(chart, datasetIdx, "wtsNorm", info.wtsNorm)

      solutionsScores.push({
        solution: solution,
        score: score
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  trainingEp++; // console.log(trainingRecord)
  // chart.update()

  return solutionsScores;
}

var terrainPts = (0,_tippy_js__WEBPACK_IMPORTED_MODULE_1__.generateTerrainPts)();
initSimWorkers(terrainPts);
var tippyCanvas = document.getElementById("tippy-canvas"),
    tippyCTX = tippyCanvas.getContext("2d");
tippyCanvas.height = _globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.h;
var tippyCanvasDiv = document.getElementById("tippy-canvas-div");

function resizeTippyCanvas() {
  var newWidth = 2 * Math.floor(tippyCanvasDiv.offsetWidth / 2);
  tippyCanvas.width = newWidth;
}

resizeTippyCanvas();
window.onresize = lodash__WEBPACK_IMPORTED_MODULE_5___default().debounce(function () {
  resizeTippyCanvas();
}, 200); // const chartCanvas = document.getElementById("chart-canvas"),
//   chartCTX = chartCanvas.getContext("2d"),
//   chart = getChart(chartCTX)

var scale = 220;
var wheelCanvas, chassisCanvas;
var lidarCanvas = (0,_draw_sim_js__WEBPACK_IMPORTED_MODULE_3__.getLidarCanvas)();
var leftDown = false,
    rightDown = false; // targetSin = 0,
// targetAngle = 0,
// targetCos = 1

var trainBtn = document.getElementById("train-btn");
trainBtn.training = false;

function initTrainBtn() {
  trainBtn.addEventListener("click", function (e) {
    trainBtn.training = !trainBtn.training;
    trainBtn.innerHTML = trainBtn.training ? "Pause training" : "Resume training";

    if (trainBtn.training && !trainingWorkerInitialized) {
      console.log("Training begins!"); // trainingWorker = new Worker("./workers/training-worker.js")

      trainingWorker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_pages_tippy_workers_training-worker_js"), __webpack_require__.b));
      trainingWorker.postMessage(["init_info", {
        n_dim: n_dim,
        terrainPts: terrainPts
      }]);

      trainingWorker.onmessage = function (e) {
        var _e$data2 = _slicedToArray(e.data, 2),
            info = _e$data2[0],
            msg = _e$data2[1];

        if (info === "targetsSolutions") {
          for (var i = 0; i < msg.length; i++) {
            simulationWorkers[i].postMessage([info, msg[i]]);
          }
        } else if (info === "cmaMeanWts") {
          var cmaMeanWts = msg.slice();
          console.log(cmaMeanWts);
          population.setWts(cmaMeanWts);
        }
      };

      trainingWorkerInitialized = true;
    } else if (trainBtn.training && trainingPaused) {
      console.log("training resumed");
      trainingPaused = false;

      if (solutionsScoresReceived == _globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.nWorkers) {
        sendScores();
      }
    } else if (!trainBtn.training && trainingWorkerInitialized) {
      console.log("training paused");
      trainingPaused = true;
    }
  });
}

document.addEventListener("keydown", function (e) {
  handleLR(e.code, true);
}, false);
document.addEventListener("keyup", function (event) {
  handleLR(event.code, false);
}, false);

function handleLR(code, down) {
  if (_globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.lInputCodes.includes(code)) {
    leftDown = down;
  } else if (_globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.rInputCodes.includes(code)) {
    rightDown = down;
  }
}

(0,box2d_wasm_dist_es_Box2D__WEBPACK_IMPORTED_MODULE_0__["default"])().then(function (b2) {
  population = new _tippy_js__WEBPACK_IMPORTED_MODULE_1__.Population([0, 0], 1, terrainPts, b2);
  n_dim = population.n_dim;
  initTrainBtn();
  var tippy = population.tippys[0];
  wheelCanvas = (0,_draw_sim_js__WEBPACK_IMPORTED_MODULE_3__.getWheelCanvas)(scale * 2 * tippy.wheelR);
  chassisCanvas = (0,_draw_sim_js__WEBPACK_IMPORTED_MODULE_3__.getChassisCanvas)(tippy.chassisVertices, scale);
  population.setWts( // new Float32Array(population.n_dim).map(() => 1.0 * (Math.random() - 0.5))
  _cmaMeanInit_js__WEBPACK_IMPORTED_MODULE_4__.cmaMeanInit.slice());
  var step = 0;
  var targetSin = 0,
      targetVel = 0; // const epTargets = generateEpisodeTargets(0.025)

  var corrRecord = [];

  function b2Loop() {
    var w = tippyCTX.canvas.width,
        h = tippyCTX.canvas.height;
    tippyCTX.clearRect(0, 0, w, h);
    var tippy = population.tippys[0];
    (0,_draw_sim_js__WEBPACK_IMPORTED_MODULE_3__.drawTippy)(tippy, terrainPts, scale, [0.5 * w, 0.65 * h], tippyCTX, chassisCanvas, wheelCanvas, lidarCanvas); // const targetSin = epTargets[step]

    var target = _globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.targetType == "vel" ? targetVel : targetSin;
    (0,_draw_sim_js__WEBPACK_IMPORTED_MODULE_3__.drawInputBar)(target, tippyCTX);

    var _updateDirection = (0,_tippy_js__WEBPACK_IMPORTED_MODULE_1__.updateDirection)(leftDown, rightDown, targetSin, targetVel);

    var _updateDirection2 = _slicedToArray(_updateDirection, 2);

    targetSin = _updateDirection2[0];
    targetVel = _updateDirection2[1];
    population.update([_globals_js__WEBPACK_IMPORTED_MODULE_2__.globals.targetType === "sin" ? targetSin : targetVel]); // corrRecord.push(tippy.corrData)
    // step++
    // if (step >= epLen) {

    if (tippy.crashStepCount > 20) {
      population.reset();
      step = 0;
      targetSin = 0;
      targetVel = 0; // console.log(corrRecord)
    } // if (step < epLen) {


    if (true) {
      requestAnimationFrame(b2Loop);
    }
  }

  requestAnimationFrame(b2Loop);
});
})();

/******/ })()
;