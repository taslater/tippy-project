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

/***/ "./src/pages/cmaes-demo/matlab_turbo_colormap.js":
/*!*******************************************************!*\
  !*** ./src/pages/cmaes-demo/matlab_turbo_colormap.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scoreToTurboRGB": () => (/* binding */ scoreToTurboRGB)
/* harmony export */ });
// Copyright (c) 2020, Daniel Fortunato
// All rights reserved.
// https://www.mathworks.com/matlabcentral/fileexchange/74662-turbo
var turboValues = [0.18995, 0.07176, 0.23217, 0.19483, 0.08339, 0.26149, 0.19956, 0.09498, 0.29024, 0.20415, 0.10652, 0.31844, 0.2086, 0.11802, 0.34607, 0.21291, 0.12947, 0.37314, 0.21708, 0.14087, 0.39964, 0.22111, 0.15223, 0.42558, 0.225, 0.16354, 0.45096, 0.22875, 0.17481, 0.47578, 0.23236, 0.18603, 0.50004, 0.23582, 0.1972, 0.52373, 0.23915, 0.20833, 0.54686, 0.24234, 0.21941, 0.56942, 0.24539, 0.23044, 0.59142, 0.2483, 0.24143, 0.61286, 0.25107, 0.25237, 0.63374, 0.25369, 0.26327, 0.65406, 0.25618, 0.27412, 0.67381, 0.25853, 0.28492, 0.693, 0.26074, 0.29568, 0.71162, 0.2628, 0.30639, 0.72968, 0.26473, 0.31706, 0.74718, 0.26652, 0.32768, 0.76412, 0.26816, 0.33825, 0.7805, 0.26967, 0.34878, 0.79631, 0.27103, 0.35926, 0.81156, 0.27226, 0.3697, 0.82624, 0.27334, 0.38008, 0.84037, 0.27429, 0.39043, 0.85393, 0.27509, 0.40072, 0.86692, 0.27576, 0.41097, 0.87936, 0.27628, 0.42118, 0.89123, 0.27667, 0.43134, 0.90254, 0.27691, 0.44145, 0.91328, 0.27701, 0.45152, 0.92347, 0.27698, 0.46153, 0.93309, 0.2768, 0.47151, 0.94214, 0.27648, 0.48144, 0.95064, 0.27603, 0.49132, 0.95857, 0.27543, 0.50115, 0.96594, 0.27469, 0.51094, 0.97275, 0.27381, 0.52069, 0.97899, 0.27273, 0.5304, 0.98461, 0.27106, 0.54015, 0.9893, 0.26878, 0.54995, 0.99303, 0.26592, 0.55979, 0.99583, 0.26252, 0.56967, 0.99773, 0.25862, 0.57958, 0.99876, 0.25425, 0.5895, 0.99896, 0.24946, 0.59943, 0.99835, 0.24427, 0.60937, 0.99697, 0.23874, 0.61931, 0.99485, 0.23288, 0.62923, 0.99202, 0.22676, 0.63913, 0.98851, 0.22039, 0.64901, 0.98436, 0.21382, 0.65886, 0.97959, 0.20708, 0.66866, 0.97423, 0.20021, 0.67842, 0.96833, 0.19326, 0.68812, 0.9619, 0.18625, 0.69775, 0.95498, 0.17923, 0.70732, 0.94761, 0.17223, 0.7168, 0.93981, 0.16529, 0.7262, 0.93161, 0.15844, 0.73551, 0.92305, 0.15173, 0.74472, 0.91416, 0.14519, 0.75381, 0.90496, 0.13886, 0.76279, 0.8955, 0.13278, 0.77165, 0.8858, 0.12698, 0.78037, 0.8759, 0.12151, 0.78896, 0.86581, 0.11639, 0.7974, 0.85559, 0.11167, 0.80569, 0.84525, 0.10738, 0.81381, 0.83484, 0.10357, 0.82177, 0.82437, 0.10026, 0.82955, 0.81389, 0.0975, 0.83714, 0.80342, 0.09532, 0.84455, 0.79299, 0.09377, 0.85175, 0.78264, 0.09287, 0.85875, 0.7724, 0.09267, 0.86554, 0.7623, 0.0932, 0.87211, 0.75237, 0.09451, 0.87844, 0.74265, 0.09662, 0.88454, 0.73316, 0.09958, 0.8904, 0.72393, 0.10342, 0.896, 0.715, 0.10815, 0.90142, 0.70599, 0.11374, 0.90673, 0.69651, 0.12014, 0.91193, 0.6866, 0.12733, 0.91701, 0.67627, 0.13526, 0.92197, 0.66556, 0.14391, 0.9268, 0.65448, 0.15323, 0.93151, 0.64308, 0.16319, 0.93609, 0.63137, 0.17377, 0.94053, 0.61938, 0.18491, 0.94484, 0.60713, 0.19659, 0.94901, 0.59466, 0.20877, 0.95304, 0.58199, 0.22142, 0.95692, 0.56914, 0.23449, 0.96065, 0.55614, 0.24797, 0.96423, 0.54303, 0.2618, 0.96765, 0.52981, 0.27597, 0.97092, 0.51653, 0.29042, 0.97403, 0.50321, 0.30513, 0.97697, 0.48987, 0.32006, 0.97974, 0.47654, 0.33517, 0.98234, 0.46325, 0.35043, 0.98477, 0.45002, 0.36581, 0.98702, 0.43688, 0.38127, 0.98909, 0.42386, 0.39678, 0.99098, 0.41098, 0.41229, 0.99268, 0.39826, 0.42778, 0.99419, 0.38575, 0.44321, 0.99551, 0.37345, 0.45854, 0.99663, 0.3614, 0.47375, 0.99755, 0.34963, 0.48879, 0.99828, 0.33816, 0.50362, 0.99879, 0.32701, 0.51822, 0.9991, 0.31622, 0.53255, 0.99919, 0.30581, 0.54658, 0.99907, 0.29581, 0.56026, 0.99873, 0.28623, 0.57357, 0.99817, 0.27712, 0.58646, 0.99739, 0.26849, 0.59891, 0.99638, 0.26038, 0.61088, 0.99514, 0.2528, 0.62233, 0.99366, 0.24579, 0.63323, 0.99195, 0.23937, 0.64362, 0.98999, 0.23356, 0.65394, 0.98775, 0.22835, 0.66428, 0.98524, 0.2237, 0.67462, 0.98246, 0.2196, 0.68494, 0.97941, 0.21602, 0.69525, 0.9761, 0.21294, 0.70553, 0.97255, 0.21032, 0.71577, 0.96875, 0.20815, 0.72596, 0.9647, 0.2064, 0.7361, 0.96043, 0.20504, 0.74617, 0.95593, 0.20406, 0.75617, 0.95121, 0.20343, 0.76608, 0.94627, 0.20311, 0.77591, 0.94113, 0.2031, 0.78563, 0.93579, 0.20336, 0.79524, 0.93025, 0.20386, 0.80473, 0.92452, 0.20459, 0.8141, 0.91861, 0.20552, 0.82333, 0.91253, 0.20663, 0.83241, 0.90627, 0.20788, 0.84133, 0.89986, 0.20926, 0.8501, 0.89328, 0.21074, 0.85868, 0.88655, 0.2123, 0.86709, 0.87968, 0.21391, 0.8753, 0.87267, 0.21555, 0.88331, 0.86553, 0.21719, 0.89112, 0.85826, 0.2188, 0.8987, 0.85087, 0.22038, 0.90605, 0.84337, 0.22188, 0.91317, 0.83576, 0.22328, 0.92004, 0.82806, 0.22456, 0.92666, 0.82025, 0.2257, 0.93301, 0.81236, 0.22667, 0.93909, 0.80439, 0.22744, 0.94489, 0.79634, 0.228, 0.95039, 0.78823, 0.22831, 0.9556, 0.78005, 0.22836, 0.96049, 0.77181, 0.22811, 0.96507, 0.76352, 0.22754, 0.96931, 0.75519, 0.22663, 0.97323, 0.74682, 0.22536, 0.97679, 0.73842, 0.22369, 0.98, 0.73, 0.22161, 0.98289, 0.7214, 0.21918, 0.98549, 0.7125, 0.2165, 0.98781, 0.7033, 0.21358, 0.98986, 0.69382, 0.21043, 0.99163, 0.68408, 0.20706, 0.99314, 0.67408, 0.20348, 0.99438, 0.66386, 0.19971, 0.99535, 0.65341, 0.19577, 0.99607, 0.64277, 0.19165, 0.99654, 0.63193, 0.18738, 0.99675, 0.62093, 0.18297, 0.99672, 0.60977, 0.17842, 0.99644, 0.59846, 0.17376, 0.99593, 0.58703, 0.16899, 0.99517, 0.57549, 0.16412, 0.99419, 0.56386, 0.15918, 0.99297, 0.55214, 0.15417, 0.99153, 0.54036, 0.1491, 0.98987, 0.52854, 0.14398, 0.98799, 0.51667, 0.13883, 0.9859, 0.50479, 0.13367, 0.9836, 0.49291, 0.12849, 0.98108, 0.48104, 0.12332, 0.97837, 0.4692, 0.11817, 0.97545, 0.4574, 0.11305, 0.97234, 0.44565, 0.10797, 0.96904, 0.43399, 0.10294, 0.96555, 0.42241, 0.09798, 0.96187, 0.41093, 0.0931, 0.95801, 0.39958, 0.08831, 0.95398, 0.38836, 0.08362, 0.94977, 0.37729, 0.07905, 0.94538, 0.36638, 0.07461, 0.94084, 0.35566, 0.07031, 0.93612, 0.34513, 0.06616, 0.93125, 0.33482, 0.06218, 0.92623, 0.32473, 0.05837, 0.92105, 0.31489, 0.05475, 0.91572, 0.3053, 0.05134, 0.91024, 0.29599, 0.04814, 0.90463, 0.28696, 0.04516, 0.89888, 0.27824, 0.04243, 0.89298, 0.26981, 0.03993, 0.88691, 0.26152, 0.03753, 0.88066, 0.25334, 0.03521, 0.87422, 0.24526, 0.03297, 0.8676, 0.2373, 0.03082, 0.86079, 0.22945, 0.02875, 0.8538, 0.2217, 0.02677, 0.84662, 0.21407, 0.02487, 0.83926, 0.20654, 0.02305, 0.83172, 0.19912, 0.02131, 0.82399, 0.19182, 0.01966, 0.81608, 0.18462, 0.01809, 0.80799, 0.17753, 0.0166, 0.79971, 0.17055, 0.0152, 0.79125, 0.16368, 0.01387, 0.7826, 0.15693, 0.01264, 0.77377, 0.15028, 0.01148, 0.76476, 0.14374, 0.01041, 0.75556, 0.13731, 0.00942, 0.74617, 0.13098, 0.00851, 0.73661, 0.12477, 0.00769, 0.72686, 0.11867, 0.00695, 0.71692, 0.11268, 0.00629, 0.7068, 0.1068, 0.00571, 0.6965, 0.10102, 0.00522, 0.68602, 0.09536, 0.00481, 0.67535, 0.0898, 0.00449, 0.66449, 0.08436, 0.00424, 0.65345, 0.07902, 0.00408, 0.64223, 0.0738, 0.00401, 0.63082, 0.06868, 0.00401, 0.61923, 0.06367, 0.0041, 0.60746, 0.05878, 0.00427, 0.5955, 0.05399, 0.00453, 0.58336, 0.04931, 0.00486, 0.57103, 0.04474, 0.00529, 0.55852, 0.04028, 0.00579, 0.54583, 0.03593, 0.00638, 0.53295, 0.03169, 0.00705, 0.51989, 0.02756, 0.0078, 0.50664, 0.02354, 0.00863, 0.49321, 0.01963, 0.00955, 0.4796, 0.01583, 0.01055]; // export function scoreToTurboRGB(score) {
//   let idx = 3 * Math.round(255 * score)
//   let rgb = []
//   for (let i = 0; i < 3; i++) {
//     rgb.push(Math.round(255 * turboValues[idx + i]))
//   }
//   return rgb
// }

function scoreToTurboRGB(score) {
  // const rgb = []
  var rgb = new Uint8ClampedArray(3);
  var scoreScaled = 255 * score;
  var scoreFloored = Math.floor(scoreScaled);
  var scoreRemainder = scoreScaled - scoreFloored;

  for (var i = 0; i < 3; i++) {
    var y0 = turboValues[3 * scoreFloored + i],
        y1 = turboValues[3 * scoreFloored + i + 3];
    var y = y0 + scoreRemainder * (y1 - y0); // rgb.push(Math.round(255 * y))

    rgb[i] = Math.round(255 * y);
  } // let idx = 3 * Math.round(scoreScaled)
  // for (let i = 0; i < 3; i++) {
  //   rgb.push(Math.round(255 * turboValues[idx + i]))
  // }


  return rgb;
}

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************!*\
  !*** ./src/pages/cmaes-demo/viz-worker.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _obj_fns_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obj-fns.js */ "./src/pages/cmaes-demo/obj-fns.js");
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.js */ "./src/pages/cmaes-demo/globals.js");
/* harmony import */ var _matlab_turbo_colormap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matlab_turbo_colormap.js */ "./src/pages/cmaes-demo/matlab_turbo_colormap.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var myID,
    centerX = 0,
    centerY = 0,
    zoom = 1,
    objFn,
    objFnLim,
    minScoreGlobal,
    maxScoreGlobal,
    viewX0,
    viewY0,
    viewStep;
var imageDataArray = new Uint8ClampedArray(3 * _globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim * _globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim / _globals_js__WEBPACK_IMPORTED_MODULE_1__.nVizWorkers),
    scores = new Float32Array(_globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim * _globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim / _globals_js__WEBPACK_IMPORTED_MODULE_1__.nVizWorkers); // 1. which worker am i?
// 2. which objective function?
// 3. what are the view limits?

onmessage = function onmessage(e) {
  var _e$data = _slicedToArray(e.data, 2),
      info = _e$data[0],
      msg = _e$data[1];

  if (info === "workerID") {
    myID = msg; // init()

    updateObjFn(_globals_js__WEBPACK_IMPORTED_MODULE_1__.objFnInit);
    updateScores();
  } else if (info === "zoom") {
    zoom = msg;
    updateEvalLims();
    updateScores();
  } else if (info === "center") {
    centerX = msg[0];
    centerY = msg[1];
    console.log(centerX, centerY);
  } else if (info === "fnName") {
    zoom = 1;
    updateObjFn(msg);
    updateScores();
  } else if (info === "scoreLims") {
    minScoreGlobal = msg[0];
    maxScoreGlobal = msg[1];
    postImageData();
  }
};

function updateObjFn(objFnName) {
  objFn = _obj_fns_js__WEBPACK_IMPORTED_MODULE_0__.objFns[objFnName];
  objFnLim = objFn.xyLim;
  updateEvalLims();
}

function updateEvalLims() {
  var viewLimHalf = objFnLim / zoom;
  viewX0 = centerX - viewLimHalf;
  viewStep = 2 * viewLimHalf / (_globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim - 1);
  viewY0 = centerY - viewLimHalf + myID * _globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim * viewStep / _globals_js__WEBPACK_IMPORTED_MODULE_1__.nVizWorkers;
}

function updateScores() {
  var minScore = Infinity,
      maxScore = -Infinity,
      scoreIdx = 0;

  for (var yIdx = 0; yIdx < _globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim / _globals_js__WEBPACK_IMPORTED_MODULE_1__.nVizWorkers; yIdx++) {
    var y = viewY0 + yIdx * viewStep;

    for (var xIdx = 0; xIdx < _globals_js__WEBPACK_IMPORTED_MODULE_1__.canvasDim; xIdx++) {
      var x = viewX0 + xIdx * viewStep;
      var score = objFn([x, y]);

      if (score < minScore) {
        minScore = score;
      }

      if (score > maxScore) {
        maxScore = score;
      }

      scores[scoreIdx] = score;
      scoreIdx++;
    }
  }

  postMessage(["scoreLims", [minScore, maxScore]]);
}

function postImageData() {
  var arrayIdx = 0;
  var scoreRangeInv = 1 / (maxScoreGlobal - minScoreGlobal);

  var _iterator = _createForOfIteratorHelper(scores),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var score = _step.value;
      var rgb = (0,_matlab_turbo_colormap_js__WEBPACK_IMPORTED_MODULE_2__.scoreToTurboRGB)((score - minScoreGlobal) * scoreRangeInv);

      for (var rgbIdx = 0; rgbIdx < 3; rgbIdx++) {
        imageDataArray[arrayIdx + rgbIdx] = rgb[rgbIdx];
      }

      arrayIdx += 3;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  postMessage(["imageDataArray", imageDataArray]);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX2NtYWVzLWRlbW9fdml6LXdvcmtlcl9qcy40NGNlY2E5OTg3OTk5YmY3ZTY4Mi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsV0FBVyxHQUFHLENBQXBCO0FBQUEsSUFDTEMsU0FBUyxHQUFHLEdBRFA7QUFBQSxJQUVMQyxPQUFPLEdBQUcsQ0FGTDtBQUFBLElBR0xDLFNBQVMsR0FBRyxRQUhQO0FBQUEsSUFJTEMsYUFBYSxHQUFHLEdBSlg7QUFBQSxJQUtMQyxhQUFhLEdBQUcsR0FMWDtBQUFBLElBTUxDLFVBQVUsR0FBRyxHQU5SO0FBQUEsSUFPTEMsV0FBVyxHQUFHLElBUFQ7QUFBQSxJQVFMQyxlQUFlLEdBQUcsRUFSYjs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUNBO0FBQ0E7QUFFQSxJQUFNQyxXQUFXLEdBQUcsQ0FDbEIsT0FEa0IsRUFDVCxPQURTLEVBQ0EsT0FEQSxFQUNTLE9BRFQsRUFDa0IsT0FEbEIsRUFDMkIsT0FEM0IsRUFDb0MsT0FEcEMsRUFDNkMsT0FEN0MsRUFFbEIsT0FGa0IsRUFFVCxPQUZTLEVBRUEsT0FGQSxFQUVTLE9BRlQsRUFFa0IsTUFGbEIsRUFFMEIsT0FGMUIsRUFFbUMsT0FGbkMsRUFFNEMsT0FGNUMsRUFHbEIsT0FIa0IsRUFHVCxPQUhTLEVBR0EsT0FIQSxFQUdTLE9BSFQsRUFHa0IsT0FIbEIsRUFHMkIsT0FIM0IsRUFHb0MsT0FIcEMsRUFHNkMsT0FIN0MsRUFHc0QsS0FIdEQsRUFJbEIsT0FKa0IsRUFJVCxPQUpTLEVBSUEsT0FKQSxFQUlTLE9BSlQsRUFJa0IsT0FKbEIsRUFJMkIsT0FKM0IsRUFJb0MsT0FKcEMsRUFJNkMsT0FKN0MsRUFLbEIsT0FMa0IsRUFLVCxNQUxTLEVBS0QsT0FMQyxFQUtRLE9BTFIsRUFLaUIsT0FMakIsRUFLMEIsT0FMMUIsRUFLbUMsT0FMbkMsRUFLNEMsT0FMNUMsRUFNbEIsT0FOa0IsRUFNVCxPQU5TLEVBTUEsT0FOQSxFQU1TLE9B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LEtBQVg7QUFDRDs7QUFDRHVELE1BQUFBLE1BQU0sQ0FBQ2tCLFFBQUQsQ0FBTixHQUFtQnpFLEtBQW5CO0FBQ0F5RSxNQUFBQSxRQUFRO0FBQ1Q7QUFDRjs7QUFDREksRUFBQUEsV0FBVyxDQUFDLENBQUMsV0FBRCxFQUFjLENBQUNQLFFBQUQsRUFBV0UsUUFBWCxDQUFkLENBQUQsQ0FBWDtBQUNEOztBQUVELFNBQVNMLGFBQVQsR0FBeUI7QUFDdkIsTUFBSVcsUUFBUSxHQUFHLENBQWY7QUFDQSxNQUFNQyxhQUFhLEdBQUcsS0FBSzdCLGNBQWMsR0FBR0QsY0FBdEIsQ0FBdEI7O0FBRnVCLDZDQUdMTSxNQUhLO0FBQUE7O0FBQUE7QUFHdkIsd0RBQTBCO0FBQUEsVUFBakJ2RCxLQUFpQjtBQUN4QixVQUFNQyxHQUFHLEdBQUdGLDBFQUFlLENBQUMsQ0FBQ0MsS0FBSyxHQUFHaUQsY0FBVCxJQUEyQjhCLGFBQTVCLENBQTNCOztBQUNBLFdBQUssSUFBSUMsTUFBTSxHQUFHLENBQWxCLEVBQXFCQSxNQUFNLEdBQUcsQ0FBOUIsRUFBaUNBLE1BQU0sRUFBdkMsRUFBMkM7QUFDekMxQixRQUFBQSxjQUFjLENBQUN3QixRQUFRLEdBQUdFLE1BQVosQ0FBZCxHQUFvQy9FLEdBQUcsQ0FBQytFLE1BQUQsQ0FBdkM7QUFDRDs7QUFDREYsTUFBQUEsUUFBUSxJQUFJLENBQVo7QUFDRDtBQVRzQjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVV2QkQsRUFBQUEsV0FBVyxDQUFDLENBQUMsZ0JBQUQsRUFBbUJ2QixjQUFuQixDQUFELENBQVg7QUFDRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvcGFnZXMvY21hZXMtZGVtby9tYXRsYWJfdHVyYm9fY29sb3JtYXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vb2JqLWZucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvcGFnZXMvY21hZXMtZGVtby92aXotd29ya2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBuVml6V29ya2VycyA9IDgsXG4gIGNhbnZhc0RpbSA9IDYwMCxcbiAgbWFya2VyUiA9IDcsXG4gIG9iakZuSW5pdCA9IFwiYWNrbGV5XCIsXG4gIG1lYW5SYWRpdXNNaW4gPSAwLjYsXG4gIG1lYW5SYWRpdXNNYXggPSAwLjksXG4gIHNpZ21hU2NhbGUgPSAwLjUsXG4gIHpvb21TdGVwTWFnID0gMS4wNSxcbiAgbkVsbGlwc2VUZXN0UHRzID0gMzJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCwgRGFuaWVsIEZvcnR1bmF0b1xuLy8gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIGh0dHBzOi8vd3d3Lm1hdGh3b3Jrcy5jb20vbWF0bGFiY2VudHJhbC9maWxlZXhjaGFuZ2UvNzQ2NjItdHVyYm9cblxuY29uc3QgdHVyYm9WYWx1ZXMgPSBbXG4gIDAuMTg5OTUsIDAuMDcxNzYsIDAuMjMyMTcsIDAuMTk0ODMsIDAuMDgzMzksIDAuMjYxNDksIDAuMTk5NTYsIDAuMDk0OTgsXG4gIDAuMjkwMjQsIDAuMjA0MTUsIDAuMTA2NTIsIDAuMzE4NDQsIDAuMjA4NiwgMC4xMTgwMiwgMC4zNDYwNywgMC4yMTI5MSxcbiAgMC4xMjk0NywgMC4zNzMxNCwgMC4yMTcwOCwgMC4xNDA4NywgMC4zOTk2NCwgMC4yMjExMSwgMC4xNTIyMywgMC40MjU1OCwgMC4yMjUsXG4gIDAuMTYzNTQsIDAuNDUwOTYsIDAuMjI4NzUsIDAuMTc0ODEsIDAuNDc1NzgsIDAuMjMyMzYsIDAuMTg2MDMsIDAuNTAwMDQsXG4gIDAuMjM1ODIsIDAuMTk3MiwgMC41MjM3MywgMC4yMzkxNSwgMC4yMDgzMywgMC41NDY4NiwgMC4yNDIzNCwgMC4yMTk0MSxcbiAgMC41Njk0MiwgMC4yNDUzOSwgMC4yMzA0NCwgMC41OTE0MiwgMC4yNDgzLCAwLjI0MTQzLCAwLjYxMjg2LCAwLjI1MTA3LFxuICAwLjI1MjM3LCAwLjYzMzc0LCAwLjI1MzY5LCAwLjI2MzI3LCAwLjY1NDA2LCAwLjI1NjE4LCAwLjI3NDEyLCAwLjY3MzgxLFxuICAwLjI1ODUzLCAwLjI4NDkyLCAwLjY5MywgMC4yNjA3NCwgMC4yOTU2OCwgMC43MTE2MiwgMC4yNjI4LCAwLjMwNjM5LCAwLjcyOTY4LFxuICAwLjI2NDczLCAwLjMxNzA2LCAwLjc0NzE4LCAwLjI2NjUyLCAwLjMyNzY4LCAwLjc2NDEyLCAwLjI2ODE2LCAwLjMzODI1LFxuICAwLjc4MDUsIDAuMjY5NjcsIDAuMzQ4NzgsIDAuNzk2MzEsIDAuMjcxMDMsIDAuMzU5MjYsIDAuODExNTYsIDAuMjcyMjYsIDAuMzY5NyxcbiAgMC44MjYyNCwgMC4yNzMzNCwgMC4zODAwOCwgMC44NDAzNywgMC4yNzQyOSwgMC4zOTA0MywgMC44NTM5MywgMC4yNzUwOSxcbiAgMC40MDA3MiwgMC44NjY5MiwgMC4yNzU3NiwgMC40MTA5NywgMC44NzkzNiwgMC4yNzYyOCwgMC40MjExOCwgMC44OTEyMyxcbiAgMC4yNzY2NywgMC40MzEzNCwgMC45MDI1NCwgMC4yNzY5MSwgMC40NDE0NSwgMC45MTMyOCwgMC4yNzcwMSwgMC40NTE1MixcbiAgMC45MjM0NywgMC4yNzY5OCwgMC40NjE1MywgMC45MzMwOSwgMC4yNzY4LCAwLjQ3MTUxLCAwLjk0MjE0LCAwLjI3NjQ4LFxuICAwLjQ4MTQ0LCAwLjk1MDY0LCAwLjI3NjAzLCAwLjQ5MTMyLCAwLjk1ODU3LCAwLjI3NTQzLCAwLjUwMTE1LCAwLjk2NTk0LFxuICAwLjI3NDY5LCAwLjUxMDk0LCAwLjk3Mjc1LCAwLjI3MzgxLCAwLjUyMDY5LCAwLjk3ODk5LCAwLjI3MjczLCAwLjUzMDQsXG4gIDAuOTg0NjEsIDAuMjcxMDYsIDAuNTQwMTUsIDAuOTg5MywgMC4yNjg3OCwgMC41NDk5NSwgMC45OTMwMywgMC4yNjU5MixcbiAgMC41NTk3OSwgMC45OTU4MywgMC4yNjI1MiwgMC41Njk2NywgMC45OTc3MywgMC4yNTg2MiwgMC41Nzk1OCwgMC45OTg3NixcbiAgMC4yNTQyNSwgMC41ODk1LCAwLjk5ODk2LCAwLjI0OTQ2LCAwLjU5OTQzLCAwLjk5ODM1LCAwLjI0NDI3LCAwLjYwOTM3LFxuICAwLjk5Njk3LCAwLjIzODc0LCAwLjYxOTMxLCAwLjk5NDg1LCAwLjIzMjg4LCAwLjYyOTIzLCAwLjk5MjAyLCAwLjIyNjc2LFxuICAwLjYzOTEzLCAwLjk4ODUxLCAwLjIyMDM5LCAwLjY0OTAxLCAwLjk4NDM2LCAwLjIxMzgyLCAwLjY1ODg2LCAwLjk3OTU5LFxuICAwLjIwNzA4LCAwLjY2ODY2LCAwLjk3NDIzLCAwLjIwMDIxLCAwLjY3ODQyLCAwLjk2ODMzLCAwLjE5MzI2LCAwLjY4ODEyLFxuICAwLjk2MTksIDAuMTg2MjUsIDAuNjk3NzUsIDAuOTU0OTgsIDAuMTc5MjMsIDAuNzA3MzIsIDAuOTQ3NjEsIDAuMTcyMjMsIDAuNzE2OCxcbiAgMC45Mzk4MSwgMC4xNjUyOSwgMC43MjYyLCAwLjkzMTYxLCAwLjE1ODQ0LCAwLjczNTUxLCAwLjkyMzA1LCAwLjE1MTczLFxuICAwLjc0NDcyLCAwLjkxNDE2LCAwLjE0NTE5LCAwLjc1MzgxLCAwLjkwNDk2LCAwLjEzODg2LCAwLjc2Mjc5LCAwLjg5NTUsXG4gIDAuMTMyNzgsIDAuNzcxNjUsIDAuODg1OCwgMC4xMjY5OCwgMC43ODAzNywgMC44NzU5LCAwLjEyMTUxLCAwLjc4ODk2LCAwLjg2NTgxLFxuICAwLjExNjM5LCAwLjc5NzQsIDAuODU1NTksIDAuMTExNjcsIDAuODA1NjksIDAuODQ1MjUsIDAuMTA3MzgsIDAuODEzODEsXG4gIDAuODM0ODQsIDAuMTAzNTcsIDAuODIxNzcsIDAuODI0MzcsIDAuMTAwMjYsIDAuODI5NTUsIDAuODEzODksIDAuMDk3NSxcbiAgMC44MzcxNCwgMC44MDM0MiwgMC4wOTUzMiwgMC44NDQ1NSwgMC43OTI5OSwgMC4wOTM3NywgMC44NTE3NSwgMC43ODI2NCxcbiAgMC4wOTI4NywgMC44NTg3NSwgMC43NzI0LCAwLjA5MjY3LCAwLjg2NTU0LCAwLjc2MjMsIDAuMDkzMiwgMC44NzIxMSwgMC43NTIzNyxcbiAgMC4wOTQ1MSwgMC44Nzg0NCwgMC43NDI2NSwgMC4wOTY2MiwgMC44ODQ1NCwgMC43MzMxNiwgMC4wOTk1OCwgMC44OTA0LFxuICAwLjcyMzkzLCAwLjEwMzQyLCAwLjg5NiwgMC43MTUsIDAuMTA4MTUsIDAuOTAxNDIsIDAuNzA1OTksIDAuMTEzNzQsIDAuOTA2NzMsXG4gIDAuNjk2NTEsIDAuMTIwMTQsIDAuOTExOTMsIDAuNjg2NiwgMC4xMjczMywgMC45MTcwMSwgMC42NzYyNywgMC4xMzUyNixcbiAgMC45MjE5NywgMC42NjU1NiwgMC4xNDM5MSwgMC45MjY4LCAwLjY1NDQ4LCAwLjE1MzIzLCAwLjkzMTUxLCAwLjY0MzA4LFxuICAwLjE2MzE5LCAwLjkzNjA5LCAwLjYzMTM3LCAwLjE3Mzc3LCAwLjk0MDUzLCAwLjYxOTM4LCAwLjE4NDkxLCAwLjk0NDg0LFxuICAwLjYwNzEzLCAwLjE5NjU5LCAwLjk0OTAxLCAwLjU5NDY2LCAwLjIwODc3LCAwLjk1MzA0LCAwLjU4MTk5LCAwLjIyMTQyLFxuICAwLjk1NjkyLCAwLjU2OTE0LCAwLjIzNDQ5LCAwLjk2MDY1LCAwLjU1NjE0LCAwLjI0Nzk3LCAwLjk2NDIzLCAwLjU0MzAzLFxuICAwLjI2MTgsIDAuOTY3NjUsIDAuNTI5ODEsIDAuMjc1OTcsIDAuOTcwOTIsIDAuNTE2NTMsIDAuMjkwNDIsIDAuOTc0MDMsXG4gIDAuNTAzMjEsIDAuMzA1MTMsIDAuOTc2OTcsIDAuNDg5ODcsIDAuMzIwMDYsIDAuOTc5NzQsIDAuNDc2NTQsIDAuMzM1MTcsXG4gIDAuOTgyMzQsIDAuNDYzMjUsIDAuMzUwNDMsIDAuOTg0NzcsIDAuNDUwMDIsIDAuMzY1ODEsIDAuOTg3MDIsIDAuNDM2ODgsXG4gIDAuMzgxMjcsIDAuOTg5MDksIDAuNDIzODYsIDAuMzk2NzgsIDAuOTkwOTgsIDAuNDEwOTgsIDAuNDEyMjksIDAuOTkyNjgsXG4gIDAuMzk4MjYsIDAuNDI3NzgsIDAuOTk0MTksIDAuMzg1NzUsIDAuNDQzMjEsIDAuOTk1NTEsIDAuMzczNDUsIDAuNDU4NTQsXG4gIDAuOTk2NjMsIDAuMzYxNCwgMC40NzM3NSwgMC45OTc1NSwgMC4zNDk2MywgMC40ODg3OSwgMC45OTgyOCwgMC4zMzgxNixcbiAgMC41MDM2MiwgMC45OTg3OSwgMC4zMjcwMSwgMC41MTgyMiwgMC45OTkxLCAwLjMxNjIyLCAwLjUzMjU1LCAwLjk5OTE5LFxuICAwLjMwNTgxLCAwLjU0NjU4LCAwLjk5OTA3LCAwLjI5NTgxLCAwLjU2MDI2LCAwLjk5ODczLCAwLjI4NjIzLCAwLjU3MzU3LFxuICAwLjk5ODE3LCAwLjI3NzEyLCAwLjU4NjQ2LCAwLjk5NzM5LCAwLjI2ODQ5LCAwLjU5ODkxLCAwLjk5NjM4LCAwLjI2MDM4LFxuICAwLjYxMDg4LCAwLjk5NTE0LCAwLjI1MjgsIDAuNjIyMzMsIDAuOTkzNjYsIDAuMjQ1NzksIDAuNjMzMjMsIDAuOTkxOTUsXG4gIDAuMjM5MzcsIDAuNjQzNjIsIDAuOTg5OTksIDAuMjMzNTYsIDAuNjUzOTQsIDAuOTg3NzUsIDAuMjI4MzUsIDAuNjY0MjgsXG4gIDAuOTg1MjQsIDAuMjIzNywgMC42NzQ2MiwgMC45ODI0NiwgMC4yMTk2LCAwLjY4NDk0LCAwLjk3OTQxLCAwLjIxNjAyLCAwLjY5NTI1LFxuICAwLjk3NjEsIDAuMjEyOTQsIDAuNzA1NTMsIDAuOTcyNTUsIDAuMjEwMzIsIDAuNzE1NzcsIDAuOTY4NzUsIDAuMjA4MTUsXG4gIDAuNzI1OTYsIDAuOTY0NywgMC4yMDY0LCAwLjczNjEsIDAuOTYwNDMsIDAuMjA1MDQsIDAuNzQ2MTcsIDAuOTU1OTMsIDAuMjA0MDYsXG4gIDAuNzU2MTcsIDAuOTUxMjEsIDAuMjAzNDMsIDAuNzY2MDgsIDAuOTQ2MjcsIDAuMjAzMTEsIDAuNzc1OTEsIDAuOTQxMTMsXG4gIDAuMjAzMSwgMC43ODU2MywgMC45MzU3OSwgMC4yMDMzNiwgMC43OTUyNCwgMC45MzAyNSwgMC4yMDM4NiwgMC44MDQ3MyxcbiAgMC45MjQ1MiwgMC4yMDQ1OSwgMC44MTQxLCAwLjkxODYxLCAwLjIwNTUyLCAwLjgyMzMzLCAwLjkxMjUzLCAwLjIwNjYzLFxuICAwLjgzMjQxLCAwLjkwNjI3LCAwLjIwNzg4LCAwLjg0MTMzLCAwLjg5OTg2LCAwLjIwOTI2LCAwLjg1MDEsIDAuODkzMjgsXG4gIDAuMjEwNzQsIDAuODU4NjgsIDAuODg2NTUsIDAuMjEyMywgMC44NjcwOSwgMC44Nzk2OCwgMC4yMTM5MSwgMC44NzUzLCAwLjg3MjY3LFxuICAwLjIxNTU1LCAwLjg4MzMxLCAwLjg2NTUzLCAwLjIxNzE5LCAwLjg5MTEyLCAwLjg1ODI2LCAwLjIxODgsIDAuODk4NywgMC44NTA4NyxcbiAgMC4yMjAzOCwgMC45MDYwNSwgMC44NDMzNywgMC4yMjE4OCwgMC45MTMxNywgMC44MzU3NiwgMC4yMjMyOCwgMC45MjAwNCxcbiAgMC44MjgwNiwgMC4yMjQ1NiwgMC45MjY2NiwgMC44MjAyNSwgMC4yMjU3LCAwLjkzMzAxLCAwLjgxMjM2LCAwLjIyNjY3LFxuICAwLjkzOTA5LCAwLjgwNDM5LCAwLjIyNzQ0LCAwLjk0NDg5LCAwLjc5NjM0LCAwLjIyOCwgMC45NTAzOSwgMC43ODgyMywgMC4yMjgzMSxcbiAgMC45NTU2LCAwLjc4MDA1LCAwLjIyODM2LCAwLjk2MDQ5LCAwLjc3MTgxLCAwLjIyODExLCAwLjk2NTA3LCAwLjc2MzUyLFxuICAwLjIyNzU0LCAwLjk2OTMxLCAwLjc1NTE5LCAwLjIyNjYzLCAwLjk3MzIzLCAwLjc0NjgyLCAwLjIyNTM2LCAwLjk3Njc5LFxuICAwLjczODQyLCAwLjIyMzY5LCAwLjk4LCAwLjczLCAwLjIyMTYxLCAwLjk4Mjg5LCAwLjcyMTQsIDAuMjE5MTgsIDAuOTg1NDksXG4gIDAuNzEyNSwgMC4yMTY1LCAwLjk4NzgxLCAwLjcwMzMsIDAuMjEzNTgsIDAuOTg5ODYsIDAuNjkzODIsIDAuMjEwNDMsIDAuOTkxNjMsXG4gIDAuNjg0MDgsIDAuMjA3MDYsIDAuOTkzMTQsIDAuNjc0MDgsIDAuMjAzNDgsIDAuOTk0MzgsIDAuNjYzODYsIDAuMTk5NzEsXG4gIDAuOTk1MzUsIDAuNjUzNDEsIDAuMTk1NzcsIDAuOTk2MDcsIDAuNjQyNzcsIDAuMTkxNjUsIDAuOTk2NTQsIDAuNjMxOTMsXG4gIDAuMTg3MzgsIDAuOTk2NzUsIDAuNjIwOTMsIDAuMTgyOTcsIDAuOTk2NzIsIDAuNjA5NzcsIDAuMTc4NDIsIDAuOTk2NDQsXG4gIDAuNTk4NDYsIDAuMTczNzYsIDAuOTk1OTMsIDAuNTg3MDMsIDAuMTY4OTksIDAuOTk1MTcsIDAuNTc1NDksIDAuMTY0MTIsXG4gIDAuOTk0MTksIDAuNTYzODYsIDAuMTU5MTgsIDAuOTkyOTcsIDAuNTUyMTQsIDAuMTU0MTcsIDAuOTkxNTMsIDAuNTQwMzYsXG4gIDAuMTQ5MSwgMC45ODk4NywgMC41Mjg1NCwgMC4xNDM5OCwgMC45ODc5OSwgMC41MTY2NywgMC4xMzg4MywgMC45ODU5LCAwLjUwNDc5LFxuICAwLjEzMzY3LCAwLjk4MzYsIDAuNDkyOTEsIDAuMTI4NDksIDAuOTgxMDgsIDAuNDgxMDQsIDAuMTIzMzIsIDAuOTc4MzcsIDAuNDY5MixcbiAgMC4xMTgxNywgMC45NzU0NSwgMC40NTc0LCAwLjExMzA1LCAwLjk3MjM0LCAwLjQ0NTY1LCAwLjEwNzk3LCAwLjk2OTA0LFxuICAwLjQzMzk5LCAwLjEwMjk0LCAwLjk2NTU1LCAwLjQyMjQxLCAwLjA5Nzk4LCAwLjk2MTg3LCAwLjQxMDkzLCAwLjA5MzEsXG4gIDAuOTU4MDEsIDAuMzk5NTgsIDAuMDg4MzEsIDAuOTUzOTgsIDAuMzg4MzYsIDAuMDgzNjIsIDAuOTQ5NzcsIDAuMzc3MjksXG4gIDAuMDc5MDUsIDAuOTQ1MzgsIDAuMzY2MzgsIDAuMDc0NjEsIDAuOTQwODQsIDAuMzU1NjYsIDAuMDcwMzEsIDAuOTM2MTIsXG4gIDAuMzQ1MTMsIDAuMDY2MTYsIDAuOTMxMjUsIDAuMzM0ODIsIDAuMDYyMTgsIDAuOTI2MjMsIDAuMzI0NzMsIDAuMDU4MzcsXG4gIDAuOTIxMDUsIDAuMzE0ODksIDAuMDU0NzUsIDAuOTE1NzIsIDAuMzA1MywgMC4wNTEzNCwgMC45MTAyNCwgMC4yOTU5OSxcbiAgMC4wNDgxNCwgMC45MDQ2MywgMC4yODY5NiwgMC4wNDUxNiwgMC44OTg4OCwgMC4yNzgyNCwgMC4wNDI0MywgMC44OTI5OCxcbiAgMC4yNjk4MSwgMC4wMzk5MywgMC44ODY5MSwgMC4yNjE1MiwgMC4wMzc1MywgMC44ODA2NiwgMC4yNTMzNCwgMC4wMzUyMSxcbiAgMC44NzQyMiwgMC4yNDUyNiwgMC4wMzI5NywgMC44Njc2LCAwLjIzNzMsIDAuMDMwODIsIDAuODYwNzksIDAuMjI5NDUsIDAuMDI4NzUsXG4gIDAuODUzOCwgMC4yMjE3LCAwLjAyNjc3LCAwLjg0NjYyLCAwLjIxNDA3LCAwLjAyNDg3LCAwLjgzOTI2LCAwLjIwNjU0LCAwLjAyMzA1LFxuICAwLjgzMTcyLCAwLjE5OTEyLCAwLjAyMTMxLCAwLjgyMzk5LCAwLjE5MTgyLCAwLjAxOTY2LCAwLjgxNjA4LCAwLjE4NDYyLFxuICAwLjAxODA5LCAwLjgwNzk5LCAwLjE3NzUzLCAwLjAxNjYsIDAuNzk5NzEsIDAuMTcwNTUsIDAuMDE1MiwgMC43OTEyNSwgMC4xNjM2OCxcbiAgMC4wMTM4NywgMC43ODI2LCAwLjE1NjkzLCAwLjAxMjY0LCAwLjc3Mzc3LCAwLjE1MDI4LCAwLjAxMTQ4LCAwLjc2NDc2LFxuICAwLjE0Mzc0LCAwLjAxMDQxLCAwLjc1NTU2LCAwLjEzNzMxLCAwLjAwOTQyLCAwLjc0NjE3LCAwLjEzMDk4LCAwLjAwODUxLFxuICAwLjczNjYxLCAwLjEyNDc3LCAwLjAwNzY5LCAwLjcyNjg2LCAwLjExODY3LCAwLjAwNjk1LCAwLjcxNjkyLCAwLjExMjY4LFxuICAwLjAwNjI5LCAwLjcwNjgsIDAuMTA2OCwgMC4wMDU3MSwgMC42OTY1LCAwLjEwMTAyLCAwLjAwNTIyLCAwLjY4NjAyLCAwLjA5NTM2LFxuICAwLjAwNDgxLCAwLjY3NTM1LCAwLjA4OTgsIDAuMDA0NDksIDAuNjY0NDksIDAuMDg0MzYsIDAuMDA0MjQsIDAuNjUzNDUsXG4gIDAuMDc5MDIsIDAuMDA0MDgsIDAuNjQyMjMsIDAuMDczOCwgMC4wMDQwMSwgMC42MzA4MiwgMC4wNjg2OCwgMC4wMDQwMSxcbiAgMC42MTkyMywgMC4wNjM2NywgMC4wMDQxLCAwLjYwNzQ2LCAwLjA1ODc4LCAwLjAwNDI3LCAwLjU5NTUsIDAuMDUzOTksIDAuMDA0NTMsXG4gIDAuNTgzMzYsIDAuMDQ5MzEsIDAuMDA0ODYsIDAuNTcxMDMsIDAuMDQ0NzQsIDAuMDA1MjksIDAuNTU4NTIsIDAuMDQwMjgsXG4gIDAuMDA1NzksIDAuNTQ1ODMsIDAuMDM1OTMsIDAuMDA2MzgsIDAuNTMyOTUsIDAuMDMxNjksIDAuMDA3MDUsIDAuNTE5ODksXG4gIDAuMDI3NTYsIDAuMDA3OCwgMC41MDY2NCwgMC4wMjM1NCwgMC4wMDg2MywgMC40OTMyMSwgMC4wMTk2MywgMC4wMDk1NSwgMC40Nzk2LFxuICAwLjAxNTgzLCAwLjAxMDU1LFxuXVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gc2NvcmVUb1R1cmJvUkdCKHNjb3JlKSB7XG4vLyAgIGxldCBpZHggPSAzICogTWF0aC5yb3VuZCgyNTUgKiBzY29yZSlcbi8vICAgbGV0IHJnYiA9IFtdXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4vLyAgICAgcmdiLnB1c2goTWF0aC5yb3VuZCgyNTUgKiB0dXJib1ZhbHVlc1tpZHggKyBpXSkpXG4vLyAgIH1cbi8vICAgcmV0dXJuIHJnYlxuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gc2NvcmVUb1R1cmJvUkdCKHNjb3JlKSB7XG4gIC8vIGNvbnN0IHJnYiA9IFtdXG4gIGNvbnN0IHJnYiA9IG5ldyBVaW50OENsYW1wZWRBcnJheSgzKVxuICBsZXQgc2NvcmVTY2FsZWQgPSAyNTUgKiBzY29yZVxuICBsZXQgc2NvcmVGbG9vcmVkID0gTWF0aC5mbG9vcihzY29yZVNjYWxlZClcbiAgbGV0IHNjb3JlUmVtYWluZGVyID0gc2NvcmVTY2FsZWQgLSBzY29yZUZsb29yZWRcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGxldCB5MCA9IHR1cmJvVmFsdWVzWzMgKiBzY29yZUZsb29yZWQgKyBpXSxcbiAgICAgIHkxID0gdHVyYm9WYWx1ZXNbMyAqIHNjb3JlRmxvb3JlZCArIGkgKyAzXVxuICAgIGxldCB5ID0geTAgKyBzY29yZVJlbWFpbmRlciAqICh5MSAtIHkwKVxuICAgIC8vIHJnYi5wdXNoKE1hdGgucm91bmQoMjU1ICogeSkpXG4gICAgcmdiW2ldID0gTWF0aC5yb3VuZCgyNTUgKiB5KVxuICB9XG5cbiAgLy8gbGV0IGlkeCA9IDMgKiBNYXRoLnJvdW5kKHNjb3JlU2NhbGVkKVxuICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAvLyAgIHJnYi5wdXNoKE1hdGgucm91bmQoMjU1ICogdHVyYm9WYWx1ZXNbaWR4ICsgaV0pKVxuICAvLyB9XG4gIHJldHVybiByZ2Jcbn1cbiIsIi8vIHtcbi8vICAgYWNrbGV5OiBcIkFja2xleVwiLFxuLy8gICBib2hhY2hldnNreTE6IFwiQm9oYWNoZXZza3kgTm8uMVwiLFxuLy8gICBncmlld2FuazogXCJHcmlld2Fua1wiLFxuLy8gICByYXN0cmlnaW46IFwiUmFzdHJpZ2luXCIsXG4vLyB9XG5cbmV4cG9ydCBjb25zdCBvYmpGbnMgPSB7XG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vYWNrbGV5Lmh0bWxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9Db2RlL2Fja2xleW0uaHRtbFxuICBhY2tsZXk6IChpbnB1dHMpID0+IHtcbiAgICAvLyBkZWZhdWx0IGE9MjAsIGI9MC4yLCBjPTJwaVxuICAgIGNvbnN0IGEgPSAyMCxcbiAgICAgIGIgPSAwLjIsXG4gICAgICBjID0gMiAqIE1hdGguUElcbiAgICAvLyBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBjb25zdCBkID0gMixcbiAgICAgIGRfaW52ID0gMC41IC8vICgxIC8gZClcbiAgICBsZXQgc3VtMSA9IDAsXG4gICAgICBzdW0yID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bTEgKz0geGkgKiB4aVxuICAgICAgc3VtMiArPSBNYXRoLmNvcyhjICogeGkpXG4gICAgfVxuICAgIC8vIGxldCBkX2ludiA9IDEgLyBkXG4gICAgbGV0IHRlcm0xID0gLWEgKiBNYXRoLmV4cCgtYiAqIE1hdGguc3FydChzdW0xICogZF9pbnYpKSxcbiAgICAgIHRlcm0yID0gLU1hdGguZXhwKHN1bTIgKiBkX2ludilcbiAgICByZXR1cm4gdGVybTEgKyB0ZXJtMiArIGEgKyBNYXRoLkVcbiAgfSxcbiAgLy8gaHR0cDovL2JlbmNobWFya2ZjbnMueHl6L2JlbmNobWFya2ZjbnMvYm9oYWNoZXZza3luMWZjbi5odG1sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vQ29kZS9ib2hhMW0uaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2JvaGEuaHRtbFxuICBib2hhY2hldnNreTE6IChpbnB1dHMpID0+IHtcbiAgICBsZXQgeDEgPSBpbnB1dHNbMF1cbiAgICBsZXQgeDIgPSBpbnB1dHNbMV1cblxuICAgIGxldCB0ZXJtMSA9IHgxICogeDFcbiAgICBsZXQgdGVybTIgPSAyICogeDIgKiB4MlxuICAgIGxldCB0ZXJtMyA9IC0wLjMgKiBNYXRoLmNvcygzICogTWF0aC5QSSAqIHgxKVxuICAgIGxldCB0ZXJtNCA9IC0wLjQgKiBNYXRoLmNvcyg0ICogTWF0aC5QSSAqIHgyKVxuXG4gICAgcmV0dXJuIHRlcm0xICsgdGVybTIgKyB0ZXJtMyArIHRlcm00ICsgMC43XG4gIH0sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vZ3JpZXdhbmsuaHRtbFxuICBncmlld2FuazogKGlucHV0cykgPT4ge1xuICAgIGxldCBkID0gaW5wdXRzLmxlbmd0aFxuICAgIGxldCBzdW0gPSAwXG4gICAgbGV0IHByb2QgPSAxXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIGxldCB4aSA9IGlucHV0c1tpXVxuICAgICAgc3VtICs9ICh4aSAqIHhpKSAvIDQwMDBcbiAgICAgIHByb2QgKj0gTWF0aC5jb3MoeGkgLyBNYXRoLnNxcnQoaSArIDEpKVxuICAgIH1cbiAgICByZXR1cm4gc3VtIC0gcHJvZCArIDFcbiAgfSxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9yYXN0ci5odG1sXG4gIHJhc3RyaWdpbjogKGlucHV0cykgPT4ge1xuICAgIGxldCBkID0gaW5wdXRzLmxlbmd0aFxuICAgIGxldCBzdW0gPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIGxldCB4aSA9IGlucHV0c1tpXVxuICAgICAgc3VtICs9IHhpICogeGkgLSAxMCAqIE1hdGguY29zKDIgKiBNYXRoLlBJICogeGkpXG4gICAgfVxuICAgIHJldHVybiAxMCAqIGQgKyBzdW1cbiAgfSxcbn1cblxuLy8gZmFuY3kgbmFtZXMgZm9yIHNlbGVjdCBtZW51XG5vYmpGbnMuYWNrbGV5LmZhbmN5TmFtZSA9IFwiQWNrbGV5XCJcbm9iakZucy5ib2hhY2hldnNreTEuZmFuY3lOYW1lID0gXCJCb2hhY2hldnNreSBOby4xXCJcbm9iakZucy5ncmlld2Fuay5mYW5jeU5hbWUgPSBcIkdyaWV3YW5rXCJcbm9iakZucy5yYXN0cmlnaW4uZmFuY3lOYW1lID0gXCJSYXN0cmlnaW5cIlxuXG4vLyBmbkxpbXMgZm9yIGRpc3BsYXkgbGltaXRzXG5vYmpGbnMuYWNrbGV5Lnh5TGltID0gMzIuNzY4XG5vYmpGbnMuYm9oYWNoZXZza3kxLnh5TGltID0gMTAwXG5vYmpGbnMuZ3JpZXdhbmsueHlMaW0gPSA2MDBcbm9iakZucy5yYXN0cmlnaW4ueHlMaW0gPSA1LjEyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG9iakZucyB9IGZyb20gXCIuL29iai1mbnMuanNcIlxuaW1wb3J0IHsgY2FudmFzRGltLCBuVml6V29ya2Vycywgb2JqRm5Jbml0IH0gZnJvbSBcIi4vZ2xvYmFscy5qc1wiXG5pbXBvcnQgeyBzY29yZVRvVHVyYm9SR0IgfSBmcm9tIFwiLi9tYXRsYWJfdHVyYm9fY29sb3JtYXAuanNcIlxuXG5sZXQgbXlJRCxcbiAgY2VudGVyWCA9IDAsXG4gIGNlbnRlclkgPSAwLFxuICB6b29tID0gMSxcbiAgb2JqRm4sXG4gIG9iakZuTGltLFxuICBtaW5TY29yZUdsb2JhbCxcbiAgbWF4U2NvcmVHbG9iYWwsXG4gIHZpZXdYMCxcbiAgdmlld1kwLFxuICB2aWV3U3RlcFxuXG5jb25zdCBpbWFnZURhdGFBcnJheSA9IG5ldyBVaW50OENsYW1wZWRBcnJheShcbiAgICAoMyAqIGNhbnZhc0RpbSAqIGNhbnZhc0RpbSkgLyBuVml6V29ya2Vyc1xuICApLFxuICBzY29yZXMgPSBuZXcgRmxvYXQzMkFycmF5KChjYW52YXNEaW0gKiBjYW52YXNEaW0pIC8gblZpeldvcmtlcnMpXG5cbi8vIDEuIHdoaWNoIHdvcmtlciBhbSBpP1xuLy8gMi4gd2hpY2ggb2JqZWN0aXZlIGZ1bmN0aW9uP1xuLy8gMy4gd2hhdCBhcmUgdGhlIHZpZXcgbGltaXRzP1xuXG5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICBjb25zdCBbaW5mbywgbXNnXSA9IGUuZGF0YVxuICBpZiAoaW5mbyA9PT0gXCJ3b3JrZXJJRFwiKSB7XG4gICAgbXlJRCA9IG1zZ1xuICAgIC8vIGluaXQoKVxuICAgIHVwZGF0ZU9iakZuKG9iakZuSW5pdClcbiAgICB1cGRhdGVTY29yZXMoKVxuICB9IGVsc2UgaWYgKGluZm8gPT09IFwiem9vbVwiKSB7XG4gICAgem9vbSA9IG1zZ1xuICAgIHVwZGF0ZUV2YWxMaW1zKClcbiAgICB1cGRhdGVTY29yZXMoKVxuICB9IGVsc2UgaWYgKGluZm8gPT09IFwiY2VudGVyXCIpIHtcbiAgICBjZW50ZXJYID0gbXNnWzBdXG4gICAgY2VudGVyWSA9IG1zZ1sxXVxuICAgIGNvbnNvbGUubG9nKGNlbnRlclgsIGNlbnRlclkpXG4gIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJmbk5hbWVcIikge1xuICAgIHpvb20gPSAxXG4gICAgdXBkYXRlT2JqRm4obXNnKVxuICAgIHVwZGF0ZVNjb3JlcygpXG4gIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJzY29yZUxpbXNcIikge1xuICAgIG1pblNjb3JlR2xvYmFsID0gbXNnWzBdXG4gICAgbWF4U2NvcmVHbG9iYWwgPSBtc2dbMV1cbiAgICBwb3N0SW1hZ2VEYXRhKClcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVPYmpGbihvYmpGbk5hbWUpIHtcbiAgb2JqRm4gPSBvYmpGbnNbb2JqRm5OYW1lXVxuICBvYmpGbkxpbSA9IG9iakZuLnh5TGltXG4gIHVwZGF0ZUV2YWxMaW1zKClcbn1cblxuZnVuY3Rpb24gdXBkYXRlRXZhbExpbXMoKSB7XG4gIGNvbnN0IHZpZXdMaW1IYWxmID0gb2JqRm5MaW0gLyB6b29tXG4gIHZpZXdYMCA9IGNlbnRlclggLSB2aWV3TGltSGFsZlxuICB2aWV3U3RlcCA9ICgyICogdmlld0xpbUhhbGYpIC8gKGNhbnZhc0RpbSAtIDEpXG4gIHZpZXdZMCA9IGNlbnRlclkgLSB2aWV3TGltSGFsZiArIChteUlEICogY2FudmFzRGltICogdmlld1N0ZXApIC8gblZpeldvcmtlcnNcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2NvcmVzKCkge1xuICBsZXQgbWluU2NvcmUgPSBJbmZpbml0eSxcbiAgICBtYXhTY29yZSA9IC1JbmZpbml0eSxcbiAgICBzY29yZUlkeCA9IDBcbiAgZm9yIChsZXQgeUlkeCA9IDA7IHlJZHggPCBjYW52YXNEaW0gLyBuVml6V29ya2VyczsgeUlkeCsrKSB7XG4gICAgY29uc3QgeSA9IHZpZXdZMCArIHlJZHggKiB2aWV3U3RlcFxuICAgIGZvciAobGV0IHhJZHggPSAwOyB4SWR4IDwgY2FudmFzRGltOyB4SWR4KyspIHtcbiAgICAgIGNvbnN0IHggPSB2aWV3WDAgKyB4SWR4ICogdmlld1N0ZXBcbiAgICAgIGNvbnN0IHNjb3JlID0gb2JqRm4oW3gsIHldKVxuICAgICAgaWYgKHNjb3JlIDwgbWluU2NvcmUpIHtcbiAgICAgICAgbWluU2NvcmUgPSBzY29yZVxuICAgICAgfVxuICAgICAgaWYgKHNjb3JlID4gbWF4U2NvcmUpIHtcbiAgICAgICAgbWF4U2NvcmUgPSBzY29yZVxuICAgICAgfVxuICAgICAgc2NvcmVzW3Njb3JlSWR4XSA9IHNjb3JlXG4gICAgICBzY29yZUlkeCsrXG4gICAgfVxuICB9XG4gIHBvc3RNZXNzYWdlKFtcInNjb3JlTGltc1wiLCBbbWluU2NvcmUsIG1heFNjb3JlXV0pXG59XG5cbmZ1bmN0aW9uIHBvc3RJbWFnZURhdGEoKSB7XG4gIGxldCBhcnJheUlkeCA9IDBcbiAgY29uc3Qgc2NvcmVSYW5nZUludiA9IDEgLyAobWF4U2NvcmVHbG9iYWwgLSBtaW5TY29yZUdsb2JhbClcbiAgZm9yIChsZXQgc2NvcmUgb2Ygc2NvcmVzKSB7XG4gICAgY29uc3QgcmdiID0gc2NvcmVUb1R1cmJvUkdCKChzY29yZSAtIG1pblNjb3JlR2xvYmFsKSAqIHNjb3JlUmFuZ2VJbnYpXG4gICAgZm9yIChsZXQgcmdiSWR4ID0gMDsgcmdiSWR4IDwgMzsgcmdiSWR4KyspIHtcbiAgICAgIGltYWdlRGF0YUFycmF5W2FycmF5SWR4ICsgcmdiSWR4XSA9IHJnYltyZ2JJZHhdXG4gICAgfVxuICAgIGFycmF5SWR4ICs9IDNcbiAgfVxuICBwb3N0TWVzc2FnZShbXCJpbWFnZURhdGFBcnJheVwiLCBpbWFnZURhdGFBcnJheV0pXG59XG4iXSwibmFtZXMiOlsiblZpeldvcmtlcnMiLCJjYW52YXNEaW0iLCJtYXJrZXJSIiwib2JqRm5Jbml0IiwibWVhblJhZGl1c01pbiIsIm1lYW5SYWRpdXNNYXgiLCJzaWdtYVNjYWxlIiwiem9vbVN0ZXBNYWciLCJuRWxsaXBzZVRlc3RQdHMiLCJ0dXJib1ZhbHVlcyIsInNjb3JlVG9UdXJib1JHQiIsInNjb3JlIiwicmdiIiwiVWludDhDbGFtcGVkQXJyYXkiLCJzY29yZVNjYWxlZCIsInNjb3JlRmxvb3JlZCIsIk1hdGgiLCJmbG9vciIsInNjb3JlUmVtYWluZGVyIiwiaSIsInkwIiwieTEiLCJ5Iiwicm91bmQiLCJvYmpGbnMiLCJhY2tsZXkiLCJpbnB1dHMiLCJhIiwiYiIsImMiLCJQSSIsImQiLCJkX2ludiIsInN1bTEiLCJzdW0yIiwieGkiLCJjb3MiLCJ0ZXJtMSIsImV4cCIsInNxcnQiLCJ0ZXJtMiIsIkUiLCJib2hhY2hldnNreTEiLCJ4MSIsIngyIiwidGVybTMiLCJ0ZXJtNCIsImdyaWV3YW5rIiwibGVuZ3RoIiwic3VtIiwicHJvZCIsInJhc3RyaWdpbiIsImZhbmN5TmFtZSIsInh5TGltIiwibXlJRCIsImNlbnRlclgiLCJjZW50ZXJZIiwiem9vbSIsIm9iakZuIiwib2JqRm5MaW0iLCJtaW5TY29yZUdsb2JhbCIsIm1heFNjb3JlR2xvYmFsIiwidmlld1gwIiwidmlld1kwIiwidmlld1N0ZXAiLCJpbWFnZURhdGFBcnJheSIsInNjb3JlcyIsIkZsb2F0MzJBcnJheSIsIm9ubWVzc2FnZSIsImUiLCJkYXRhIiwiaW5mbyIsIm1zZyIsInVwZGF0ZU9iakZuIiwidXBkYXRlU2NvcmVzIiwidXBkYXRlRXZhbExpbXMiLCJjb25zb2xlIiwibG9nIiwicG9zdEltYWdlRGF0YSIsIm9iakZuTmFtZSIsInZpZXdMaW1IYWxmIiwibWluU2NvcmUiLCJJbmZpbml0eSIsIm1heFNjb3JlIiwic2NvcmVJZHgiLCJ5SWR4IiwieElkeCIsIngiLCJwb3N0TWVzc2FnZSIsImFycmF5SWR4Iiwic2NvcmVSYW5nZUludiIsInJnYklkeCJdLCJzb3VyY2VSb290IjoiIn0=