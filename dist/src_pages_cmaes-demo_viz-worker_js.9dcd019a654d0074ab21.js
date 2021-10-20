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
} // function init() {
//   updateObjFn(objFnInit)
//   updateScores()
// }
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX2NtYWVzLWRlbW9fdml6LXdvcmtlcl9qcy45ZGNkMDE5YTY1NGQwMDc0YWIyMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxXQUFXLEdBQUcsQ0FBcEI7QUFBQSxJQUNMQyxTQUFTLEdBQUcsR0FEUDtBQUFBLElBRUxDLE9BQU8sR0FBRyxDQUZMO0FBQUEsSUFHTEMsU0FBUyxHQUFHLFFBSFA7QUFBQSxJQUlMQyxhQUFhLEdBQUcsR0FKWDtBQUFBLElBS0xDLGFBQWEsR0FBRyxHQUxYO0FBQUEsSUFNTEMsVUFBVSxHQUFHLEdBTlI7QUFBQSxJQU9MQyxnQkFBZ0IsR0FBRyxFQVBkOzs7Ozs7Ozs7Ozs7OztBQ0FQO0FBQ0E7QUFDQTtBQUVBLElBQU1DLFdBQVcsR0FBRyxDQUNsQixPQURrQixFQUNULE9BRFMsRUFDQSxPQURBLEVBQ1MsT0FEVCxFQUNrQixPQURsQixFQUMyQixPQUQzQixFQUNvQyxPQURwQyxFQUM2QyxPQUQ3QyxFQUVsQixPQUZrQixFQUVULE9BRlMsRUFFQSxPQUZBLEVBRVMsT0FGVCxFQUVrQixNQUZsQixFQUUwQixPQUYxQixFQUVtQyxPQUZuQyxFQUU0QyxPQUY1QyxFQUdsQixPQUhrQixFQUdULE9BSFMsRUFHQSxPQUhBLEVBR1MsT0FIVCxFQUdrQixPQUhsQixFQUcyQixPQUgzQixFQUdvQyxPQUhwQyxFQUc2QyxPQUg3QyxFQUdzRCxLQUh0RCxFQUlsQixPQUprQixFQUlULE9BSlMsRUFJQSxPQUpBLEVBSVMsT0FKVCxFQUlrQixPQUpsQixFQUkyQixPQUozQixFQUlvQyxPQUpwQyxFQUk2QyxPQUo3QyxFQUtsQixPQUxrQixFQUtULE1BTFMsRUFLRCxPQUxDLEVBS1EsT0FMUixFQUtpQixPQUxqQixFQUswQixPQUwxQixFQUttQyxPQUxuQyxFQUs0QyxPQUw1QyxFQU1sQixPQU5rQixFQU1ULE9BTlMsRUFNQSxPQU5BLEVBTVMsT0FOVCxFQU1rQixNQU5sQixFQU0wQixPQU4x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TUFBTSxDQUFDa0IsUUFBRCxDQUFOLEdBQW1CekUsS0FBbkI7QUFDQXlFLE1BQUFBLFFBQVE7QUFDVDtBQUNGOztBQUNESSxFQUFBQSxXQUFXLENBQUMsQ0FBQyxXQUFELEVBQWMsQ0FBQ1AsUUFBRCxFQUFXRSxRQUFYLENBQWQsQ0FBRCxDQUFYO0FBQ0Q7O0FBRUQsU0FBU0wsYUFBVCxHQUF5QjtBQUN2QixNQUFJVyxRQUFRLEdBQUcsQ0FBZjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxLQUFLN0IsY0FBYyxHQUFHRCxjQUF0QixDQUF0Qjs7QUFGdUIsNkNBR0xNLE1BSEs7QUFBQTs7QUFBQTtBQUd2Qix3REFBMEI7QUFBQSxVQUFqQnZELEtBQWlCO0FBQ3hCLFVBQU1DLEdBQUcsR0FBR0YsMEVBQWUsQ0FBQyxDQUFDQyxLQUFLLEdBQUdpRCxjQUFULElBQTJCOEIsYUFBNUIsQ0FBM0I7O0FBQ0EsV0FBSyxJQUFJQyxNQUFNLEdBQUcsQ0FBbEIsRUFBcUJBLE1BQU0sR0FBRyxDQUE5QixFQUFpQ0EsTUFBTSxFQUF2QyxFQUEyQztBQUN6QzFCLFFBQUFBLGNBQWMsQ0FBQ3dCLFFBQVEsR0FBR0UsTUFBWixDQUFkLEdBQW9DL0UsR0FBRyxDQUFDK0UsTUFBRCxDQUF2QztBQUNEOztBQUNERixNQUFBQSxRQUFRLElBQUksQ0FBWjtBQUNEO0FBVHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVXZCRCxFQUFBQSxXQUFXLENBQUMsQ0FBQyxnQkFBRCxFQUFtQnZCLGNBQW5CLENBQUQsQ0FBWDtBQUNELEVBRUQ7QUFDQTtBQUNBO0FBQ0EsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vbWF0bGFiX3R1cmJvX2NvbG9ybWFwLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL29iai1mbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vdml6LXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgblZpeldvcmtlcnMgPSA4LFxuICBjYW52YXNEaW0gPSA4MDAsXG4gIG1hcmtlclIgPSA3LFxuICBvYmpGbkluaXQgPSBcImFja2xleVwiLFxuICBtZWFuUmFkaXVzTWluID0gMC4zLFxuICBtZWFuUmFkaXVzTWF4ID0gMC41LFxuICBzaWdtYVNjYWxlID0gMC41LFxuICBuVHJhbnNpdGlvblN0ZXBzID0gMTBcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCwgRGFuaWVsIEZvcnR1bmF0b1xuLy8gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIGh0dHBzOi8vd3d3Lm1hdGh3b3Jrcy5jb20vbWF0bGFiY2VudHJhbC9maWxlZXhjaGFuZ2UvNzQ2NjItdHVyYm9cblxuY29uc3QgdHVyYm9WYWx1ZXMgPSBbXG4gIDAuMTg5OTUsIDAuMDcxNzYsIDAuMjMyMTcsIDAuMTk0ODMsIDAuMDgzMzksIDAuMjYxNDksIDAuMTk5NTYsIDAuMDk0OTgsXG4gIDAuMjkwMjQsIDAuMjA0MTUsIDAuMTA2NTIsIDAuMzE4NDQsIDAuMjA4NiwgMC4xMTgwMiwgMC4zNDYwNywgMC4yMTI5MSxcbiAgMC4xMjk0NywgMC4zNzMxNCwgMC4yMTcwOCwgMC4xNDA4NywgMC4zOTk2NCwgMC4yMjExMSwgMC4xNTIyMywgMC40MjU1OCwgMC4yMjUsXG4gIDAuMTYzNTQsIDAuNDUwOTYsIDAuMjI4NzUsIDAuMTc0ODEsIDAuNDc1NzgsIDAuMjMyMzYsIDAuMTg2MDMsIDAuNTAwMDQsXG4gIDAuMjM1ODIsIDAuMTk3MiwgMC41MjM3MywgMC4yMzkxNSwgMC4yMDgzMywgMC41NDY4NiwgMC4yNDIzNCwgMC4yMTk0MSxcbiAgMC41Njk0MiwgMC4yNDUzOSwgMC4yMzA0NCwgMC41OTE0MiwgMC4yNDgzLCAwLjI0MTQzLCAwLjYxMjg2LCAwLjI1MTA3LFxuICAwLjI1MjM3LCAwLjYzMzc0LCAwLjI1MzY5LCAwLjI2MzI3LCAwLjY1NDA2LCAwLjI1NjE4LCAwLjI3NDEyLCAwLjY3MzgxLFxuICAwLjI1ODUzLCAwLjI4NDkyLCAwLjY5MywgMC4yNjA3NCwgMC4yOTU2OCwgMC43MTE2MiwgMC4yNjI4LCAwLjMwNjM5LCAwLjcyOTY4LFxuICAwLjI2NDczLCAwLjMxNzA2LCAwLjc0NzE4LCAwLjI2NjUyLCAwLjMyNzY4LCAwLjc2NDEyLCAwLjI2ODE2LCAwLjMzODI1LFxuICAwLjc4MDUsIDAuMjY5NjcsIDAuMzQ4NzgsIDAuNzk2MzEsIDAuMjcxMDMsIDAuMzU5MjYsIDAuODExNTYsIDAuMjcyMjYsIDAuMzY5NyxcbiAgMC44MjYyNCwgMC4yNzMzNCwgMC4zODAwOCwgMC44NDAzNywgMC4yNzQyOSwgMC4zOTA0MywgMC44NTM5MywgMC4yNzUwOSxcbiAgMC40MDA3MiwgMC44NjY5MiwgMC4yNzU3NiwgMC40MTA5NywgMC44NzkzNiwgMC4yNzYyOCwgMC40MjExOCwgMC44OTEyMyxcbiAgMC4yNzY2NywgMC40MzEzNCwgMC45MDI1NCwgMC4yNzY5MSwgMC40NDE0NSwgMC45MTMyOCwgMC4yNzcwMSwgMC40NTE1MixcbiAgMC45MjM0NywgMC4yNzY5OCwgMC40NjE1MywgMC45MzMwOSwgMC4yNzY4LCAwLjQ3MTUxLCAwLjk0MjE0LCAwLjI3NjQ4LFxuICAwLjQ4MTQ0LCAwLjk1MDY0LCAwLjI3NjAzLCAwLjQ5MTMyLCAwLjk1ODU3LCAwLjI3NTQzLCAwLjUwMTE1LCAwLjk2NTk0LFxuICAwLjI3NDY5LCAwLjUxMDk0LCAwLjk3Mjc1LCAwLjI3MzgxLCAwLjUyMDY5LCAwLjk3ODk5LCAwLjI3MjczLCAwLjUzMDQsXG4gIDAuOTg0NjEsIDAuMjcxMDYsIDAuNTQwMTUsIDAuOTg5MywgMC4yNjg3OCwgMC41NDk5NSwgMC45OTMwMywgMC4yNjU5MixcbiAgMC41NTk3OSwgMC45OTU4MywgMC4yNjI1MiwgMC41Njk2NywgMC45OTc3MywgMC4yNTg2MiwgMC41Nzk1OCwgMC45OTg3NixcbiAgMC4yNTQyNSwgMC41ODk1LCAwLjk5ODk2LCAwLjI0OTQ2LCAwLjU5OTQzLCAwLjk5ODM1LCAwLjI0NDI3LCAwLjYwOTM3LFxuICAwLjk5Njk3LCAwLjIzODc0LCAwLjYxOTMxLCAwLjk5NDg1LCAwLjIzMjg4LCAwLjYyOTIzLCAwLjk5MjAyLCAwLjIyNjc2LFxuICAwLjYzOTEzLCAwLjk4ODUxLCAwLjIyMDM5LCAwLjY0OTAxLCAwLjk4NDM2LCAwLjIxMzgyLCAwLjY1ODg2LCAwLjk3OTU5LFxuICAwLjIwNzA4LCAwLjY2ODY2LCAwLjk3NDIzLCAwLjIwMDIxLCAwLjY3ODQyLCAwLjk2ODMzLCAwLjE5MzI2LCAwLjY4ODEyLFxuICAwLjk2MTksIDAuMTg2MjUsIDAuNjk3NzUsIDAuOTU0OTgsIDAuMTc5MjMsIDAuNzA3MzIsIDAuOTQ3NjEsIDAuMTcyMjMsIDAuNzE2OCxcbiAgMC45Mzk4MSwgMC4xNjUyOSwgMC43MjYyLCAwLjkzMTYxLCAwLjE1ODQ0LCAwLjczNTUxLCAwLjkyMzA1LCAwLjE1MTczLFxuICAwLjc0NDcyLCAwLjkxNDE2LCAwLjE0NTE5LCAwLjc1MzgxLCAwLjkwNDk2LCAwLjEzODg2LCAwLjc2Mjc5LCAwLjg5NTUsXG4gIDAuMTMyNzgsIDAuNzcxNjUsIDAuODg1OCwgMC4xMjY5OCwgMC43ODAzNywgMC44NzU5LCAwLjEyMTUxLCAwLjc4ODk2LCAwLjg2NTgxLFxuICAwLjExNjM5LCAwLjc5NzQsIDAuODU1NTksIDAuMTExNjcsIDAuODA1NjksIDAuODQ1MjUsIDAuMTA3MzgsIDAuODEzODEsXG4gIDAuODM0ODQsIDAuMTAzNTcsIDAuODIxNzcsIDAuODI0MzcsIDAuMTAwMjYsIDAuODI5NTUsIDAuODEzODksIDAuMDk3NSxcbiAgMC44MzcxNCwgMC44MDM0MiwgMC4wOTUzMiwgMC44NDQ1NSwgMC43OTI5OSwgMC4wOTM3NywgMC44NTE3NSwgMC43ODI2NCxcbiAgMC4wOTI4NywgMC44NTg3NSwgMC43NzI0LCAwLjA5MjY3LCAwLjg2NTU0LCAwLjc2MjMsIDAuMDkzMiwgMC44NzIxMSwgMC43NTIzNyxcbiAgMC4wOTQ1MSwgMC44Nzg0NCwgMC43NDI2NSwgMC4wOTY2MiwgMC44ODQ1NCwgMC43MzMxNiwgMC4wOTk1OCwgMC44OTA0LFxuICAwLjcyMzkzLCAwLjEwMzQyLCAwLjg5NiwgMC43MTUsIDAuMTA4MTUsIDAuOTAxNDIsIDAuNzA1OTksIDAuMTEzNzQsIDAuOTA2NzMsXG4gIDAuNjk2NTEsIDAuMTIwMTQsIDAuOTExOTMsIDAuNjg2NiwgMC4xMjczMywgMC45MTcwMSwgMC42NzYyNywgMC4xMzUyNixcbiAgMC45MjE5NywgMC42NjU1NiwgMC4xNDM5MSwgMC45MjY4LCAwLjY1NDQ4LCAwLjE1MzIzLCAwLjkzMTUxLCAwLjY0MzA4LFxuICAwLjE2MzE5LCAwLjkzNjA5LCAwLjYzMTM3LCAwLjE3Mzc3LCAwLjk0MDUzLCAwLjYxOTM4LCAwLjE4NDkxLCAwLjk0NDg0LFxuICAwLjYwNzEzLCAwLjE5NjU5LCAwLjk0OTAxLCAwLjU5NDY2LCAwLjIwODc3LCAwLjk1MzA0LCAwLjU4MTk5LCAwLjIyMTQyLFxuICAwLjk1NjkyLCAwLjU2OTE0LCAwLjIzNDQ5LCAwLjk2MDY1LCAwLjU1NjE0LCAwLjI0Nzk3LCAwLjk2NDIzLCAwLjU0MzAzLFxuICAwLjI2MTgsIDAuOTY3NjUsIDAuNTI5ODEsIDAuMjc1OTcsIDAuOTcwOTIsIDAuNTE2NTMsIDAuMjkwNDIsIDAuOTc0MDMsXG4gIDAuNTAzMjEsIDAuMzA1MTMsIDAuOTc2OTcsIDAuNDg5ODcsIDAuMzIwMDYsIDAuOTc5NzQsIDAuNDc2NTQsIDAuMzM1MTcsXG4gIDAuOTgyMzQsIDAuNDYzMjUsIDAuMzUwNDMsIDAuOTg0NzcsIDAuNDUwMDIsIDAuMzY1ODEsIDAuOTg3MDIsIDAuNDM2ODgsXG4gIDAuMzgxMjcsIDAuOTg5MDksIDAuNDIzODYsIDAuMzk2NzgsIDAuOTkwOTgsIDAuNDEwOTgsIDAuNDEyMjksIDAuOTkyNjgsXG4gIDAuMzk4MjYsIDAuNDI3NzgsIDAuOTk0MTksIDAuMzg1NzUsIDAuNDQzMjEsIDAuOTk1NTEsIDAuMzczNDUsIDAuNDU4NTQsXG4gIDAuOTk2NjMsIDAuMzYxNCwgMC40NzM3NSwgMC45OTc1NSwgMC4zNDk2MywgMC40ODg3OSwgMC45OTgyOCwgMC4zMzgxNixcbiAgMC41MDM2MiwgMC45OTg3OSwgMC4zMjcwMSwgMC41MTgyMiwgMC45OTkxLCAwLjMxNjIyLCAwLjUzMjU1LCAwLjk5OTE5LFxuICAwLjMwNTgxLCAwLjU0NjU4LCAwLjk5OTA3LCAwLjI5NTgxLCAwLjU2MDI2LCAwLjk5ODczLCAwLjI4NjIzLCAwLjU3MzU3LFxuICAwLjk5ODE3LCAwLjI3NzEyLCAwLjU4NjQ2LCAwLjk5NzM5LCAwLjI2ODQ5LCAwLjU5ODkxLCAwLjk5NjM4LCAwLjI2MDM4LFxuICAwLjYxMDg4LCAwLjk5NTE0LCAwLjI1MjgsIDAuNjIyMzMsIDAuOTkzNjYsIDAuMjQ1NzksIDAuNjMzMjMsIDAuOTkxOTUsXG4gIDAuMjM5MzcsIDAuNjQzNjIsIDAuOTg5OTksIDAuMjMzNTYsIDAuNjUzOTQsIDAuOTg3NzUsIDAuMjI4MzUsIDAuNjY0MjgsXG4gIDAuOTg1MjQsIDAuMjIzNywgMC42NzQ2MiwgMC45ODI0NiwgMC4yMTk2LCAwLjY4NDk0LCAwLjk3OTQxLCAwLjIxNjAyLCAwLjY5NTI1LFxuICAwLjk3NjEsIDAuMjEyOTQsIDAuNzA1NTMsIDAuOTcyNTUsIDAuMjEwMzIsIDAuNzE1NzcsIDAuOTY4NzUsIDAuMjA4MTUsXG4gIDAuNzI1OTYsIDAuOTY0NywgMC4yMDY0LCAwLjczNjEsIDAuOTYwNDMsIDAuMjA1MDQsIDAuNzQ2MTcsIDAuOTU1OTMsIDAuMjA0MDYsXG4gIDAuNzU2MTcsIDAuOTUxMjEsIDAuMjAzNDMsIDAuNzY2MDgsIDAuOTQ2MjcsIDAuMjAzMTEsIDAuNzc1OTEsIDAuOTQxMTMsXG4gIDAuMjAzMSwgMC43ODU2MywgMC45MzU3OSwgMC4yMDMzNiwgMC43OTUyNCwgMC45MzAyNSwgMC4yMDM4NiwgMC44MDQ3MyxcbiAgMC45MjQ1MiwgMC4yMDQ1OSwgMC44MTQxLCAwLjkxODYxLCAwLjIwNTUyLCAwLjgyMzMzLCAwLjkxMjUzLCAwLjIwNjYzLFxuICAwLjgzMjQxLCAwLjkwNjI3LCAwLjIwNzg4LCAwLjg0MTMzLCAwLjg5OTg2LCAwLjIwOTI2LCAwLjg1MDEsIDAuODkzMjgsXG4gIDAuMjEwNzQsIDAuODU4NjgsIDAuODg2NTUsIDAuMjEyMywgMC44NjcwOSwgMC44Nzk2OCwgMC4yMTM5MSwgMC44NzUzLCAwLjg3MjY3LFxuICAwLjIxNTU1LCAwLjg4MzMxLCAwLjg2NTUzLCAwLjIxNzE5LCAwLjg5MTEyLCAwLjg1ODI2LCAwLjIxODgsIDAuODk4NywgMC44NTA4NyxcbiAgMC4yMjAzOCwgMC45MDYwNSwgMC44NDMzNywgMC4yMjE4OCwgMC45MTMxNywgMC44MzU3NiwgMC4yMjMyOCwgMC45MjAwNCxcbiAgMC44MjgwNiwgMC4yMjQ1NiwgMC45MjY2NiwgMC44MjAyNSwgMC4yMjU3LCAwLjkzMzAxLCAwLjgxMjM2LCAwLjIyNjY3LFxuICAwLjkzOTA5LCAwLjgwNDM5LCAwLjIyNzQ0LCAwLjk0NDg5LCAwLjc5NjM0LCAwLjIyOCwgMC45NTAzOSwgMC43ODgyMywgMC4yMjgzMSxcbiAgMC45NTU2LCAwLjc4MDA1LCAwLjIyODM2LCAwLjk2MDQ5LCAwLjc3MTgxLCAwLjIyODExLCAwLjk2NTA3LCAwLjc2MzUyLFxuICAwLjIyNzU0LCAwLjk2OTMxLCAwLjc1NTE5LCAwLjIyNjYzLCAwLjk3MzIzLCAwLjc0NjgyLCAwLjIyNTM2LCAwLjk3Njc5LFxuICAwLjczODQyLCAwLjIyMzY5LCAwLjk4LCAwLjczLCAwLjIyMTYxLCAwLjk4Mjg5LCAwLjcyMTQsIDAuMjE5MTgsIDAuOTg1NDksXG4gIDAuNzEyNSwgMC4yMTY1LCAwLjk4NzgxLCAwLjcwMzMsIDAuMjEzNTgsIDAuOTg5ODYsIDAuNjkzODIsIDAuMjEwNDMsIDAuOTkxNjMsXG4gIDAuNjg0MDgsIDAuMjA3MDYsIDAuOTkzMTQsIDAuNjc0MDgsIDAuMjAzNDgsIDAuOTk0MzgsIDAuNjYzODYsIDAuMTk5NzEsXG4gIDAuOTk1MzUsIDAuNjUzNDEsIDAuMTk1NzcsIDAuOTk2MDcsIDAuNjQyNzcsIDAuMTkxNjUsIDAuOTk2NTQsIDAuNjMxOTMsXG4gIDAuMTg3MzgsIDAuOTk2NzUsIDAuNjIwOTMsIDAuMTgyOTcsIDAuOTk2NzIsIDAuNjA5NzcsIDAuMTc4NDIsIDAuOTk2NDQsXG4gIDAuNTk4NDYsIDAuMTczNzYsIDAuOTk1OTMsIDAuNTg3MDMsIDAuMTY4OTksIDAuOTk1MTcsIDAuNTc1NDksIDAuMTY0MTIsXG4gIDAuOTk0MTksIDAuNTYzODYsIDAuMTU5MTgsIDAuOTkyOTcsIDAuNTUyMTQsIDAuMTU0MTcsIDAuOTkxNTMsIDAuNTQwMzYsXG4gIDAuMTQ5MSwgMC45ODk4NywgMC41Mjg1NCwgMC4xNDM5OCwgMC45ODc5OSwgMC41MTY2NywgMC4xMzg4MywgMC45ODU5LCAwLjUwNDc5LFxuICAwLjEzMzY3LCAwLjk4MzYsIDAuNDkyOTEsIDAuMTI4NDksIDAuOTgxMDgsIDAuNDgxMDQsIDAuMTIzMzIsIDAuOTc4MzcsIDAuNDY5MixcbiAgMC4xMTgxNywgMC45NzU0NSwgMC40NTc0LCAwLjExMzA1LCAwLjk3MjM0LCAwLjQ0NTY1LCAwLjEwNzk3LCAwLjk2OTA0LFxuICAwLjQzMzk5LCAwLjEwMjk0LCAwLjk2NTU1LCAwLjQyMjQxLCAwLjA5Nzk4LCAwLjk2MTg3LCAwLjQxMDkzLCAwLjA5MzEsXG4gIDAuOTU4MDEsIDAuMzk5NTgsIDAuMDg4MzEsIDAuOTUzOTgsIDAuMzg4MzYsIDAuMDgzNjIsIDAuOTQ5NzcsIDAuMzc3MjksXG4gIDAuMDc5MDUsIDAuOTQ1MzgsIDAuMzY2MzgsIDAuMDc0NjEsIDAuOTQwODQsIDAuMzU1NjYsIDAuMDcwMzEsIDAuOTM2MTIsXG4gIDAuMzQ1MTMsIDAuMDY2MTYsIDAuOTMxMjUsIDAuMzM0ODIsIDAuMDYyMTgsIDAuOTI2MjMsIDAuMzI0NzMsIDAuMDU4MzcsXG4gIDAuOTIxMDUsIDAuMzE0ODksIDAuMDU0NzUsIDAuOTE1NzIsIDAuMzA1MywgMC4wNTEzNCwgMC45MTAyNCwgMC4yOTU5OSxcbiAgMC4wNDgxNCwgMC45MDQ2MywgMC4yODY5NiwgMC4wNDUxNiwgMC44OTg4OCwgMC4yNzgyNCwgMC4wNDI0MywgMC44OTI5OCxcbiAgMC4yNjk4MSwgMC4wMzk5MywgMC44ODY5MSwgMC4yNjE1MiwgMC4wMzc1MywgMC44ODA2NiwgMC4yNTMzNCwgMC4wMzUyMSxcbiAgMC44NzQyMiwgMC4yNDUyNiwgMC4wMzI5NywgMC44Njc2LCAwLjIzNzMsIDAuMDMwODIsIDAuODYwNzksIDAuMjI5NDUsIDAuMDI4NzUsXG4gIDAuODUzOCwgMC4yMjE3LCAwLjAyNjc3LCAwLjg0NjYyLCAwLjIxNDA3LCAwLjAyNDg3LCAwLjgzOTI2LCAwLjIwNjU0LCAwLjAyMzA1LFxuICAwLjgzMTcyLCAwLjE5OTEyLCAwLjAyMTMxLCAwLjgyMzk5LCAwLjE5MTgyLCAwLjAxOTY2LCAwLjgxNjA4LCAwLjE4NDYyLFxuICAwLjAxODA5LCAwLjgwNzk5LCAwLjE3NzUzLCAwLjAxNjYsIDAuNzk5NzEsIDAuMTcwNTUsIDAuMDE1MiwgMC43OTEyNSwgMC4xNjM2OCxcbiAgMC4wMTM4NywgMC43ODI2LCAwLjE1NjkzLCAwLjAxMjY0LCAwLjc3Mzc3LCAwLjE1MDI4LCAwLjAxMTQ4LCAwLjc2NDc2LFxuICAwLjE0Mzc0LCAwLjAxMDQxLCAwLjc1NTU2LCAwLjEzNzMxLCAwLjAwOTQyLCAwLjc0NjE3LCAwLjEzMDk4LCAwLjAwODUxLFxuICAwLjczNjYxLCAwLjEyNDc3LCAwLjAwNzY5LCAwLjcyNjg2LCAwLjExODY3LCAwLjAwNjk1LCAwLjcxNjkyLCAwLjExMjY4LFxuICAwLjAwNjI5LCAwLjcwNjgsIDAuMTA2OCwgMC4wMDU3MSwgMC42OTY1LCAwLjEwMTAyLCAwLjAwNTIyLCAwLjY4NjAyLCAwLjA5NTM2LFxuICAwLjAwNDgxLCAwLjY3NTM1LCAwLjA4OTgsIDAuMDA0NDksIDAuNjY0NDksIDAuMDg0MzYsIDAuMDA0MjQsIDAuNjUzNDUsXG4gIDAuMDc5MDIsIDAuMDA0MDgsIDAuNjQyMjMsIDAuMDczOCwgMC4wMDQwMSwgMC42MzA4MiwgMC4wNjg2OCwgMC4wMDQwMSxcbiAgMC42MTkyMywgMC4wNjM2NywgMC4wMDQxLCAwLjYwNzQ2LCAwLjA1ODc4LCAwLjAwNDI3LCAwLjU5NTUsIDAuMDUzOTksIDAuMDA0NTMsXG4gIDAuNTgzMzYsIDAuMDQ5MzEsIDAuMDA0ODYsIDAuNTcxMDMsIDAuMDQ0NzQsIDAuMDA1MjksIDAuNTU4NTIsIDAuMDQwMjgsXG4gIDAuMDA1NzksIDAuNTQ1ODMsIDAuMDM1OTMsIDAuMDA2MzgsIDAuNTMyOTUsIDAuMDMxNjksIDAuMDA3MDUsIDAuNTE5ODksXG4gIDAuMDI3NTYsIDAuMDA3OCwgMC41MDY2NCwgMC4wMjM1NCwgMC4wMDg2MywgMC40OTMyMSwgMC4wMTk2MywgMC4wMDk1NSwgMC40Nzk2LFxuICAwLjAxNTgzLCAwLjAxMDU1LFxuXVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gc2NvcmVUb1R1cmJvUkdCKHNjb3JlKSB7XG4vLyAgIGxldCBpZHggPSAzICogTWF0aC5yb3VuZCgyNTUgKiBzY29yZSlcbi8vICAgbGV0IHJnYiA9IFtdXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4vLyAgICAgcmdiLnB1c2goTWF0aC5yb3VuZCgyNTUgKiB0dXJib1ZhbHVlc1tpZHggKyBpXSkpXG4vLyAgIH1cbi8vICAgcmV0dXJuIHJnYlxuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gc2NvcmVUb1R1cmJvUkdCKHNjb3JlKSB7XG4gIC8vIGNvbnN0IHJnYiA9IFtdXG4gIGNvbnN0IHJnYiA9IG5ldyBVaW50OENsYW1wZWRBcnJheSgzKVxuICBsZXQgc2NvcmVTY2FsZWQgPSAyNTUgKiBzY29yZVxuICBsZXQgc2NvcmVGbG9vcmVkID0gTWF0aC5mbG9vcihzY29yZVNjYWxlZClcbiAgbGV0IHNjb3JlUmVtYWluZGVyID0gc2NvcmVTY2FsZWQgLSBzY29yZUZsb29yZWRcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGxldCB5MCA9IHR1cmJvVmFsdWVzWzMgKiBzY29yZUZsb29yZWQgKyBpXSxcbiAgICAgIHkxID0gdHVyYm9WYWx1ZXNbMyAqIHNjb3JlRmxvb3JlZCArIGkgKyAzXVxuICAgIGxldCB5ID0geTAgKyBzY29yZVJlbWFpbmRlciAqICh5MSAtIHkwKVxuICAgIC8vIHJnYi5wdXNoKE1hdGgucm91bmQoMjU1ICogeSkpXG4gICAgcmdiW2ldID0gTWF0aC5yb3VuZCgyNTUgKiB5KVxuICB9XG5cbiAgLy8gbGV0IGlkeCA9IDMgKiBNYXRoLnJvdW5kKHNjb3JlU2NhbGVkKVxuICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAvLyAgIHJnYi5wdXNoKE1hdGgucm91bmQoMjU1ICogdHVyYm9WYWx1ZXNbaWR4ICsgaV0pKVxuICAvLyB9XG4gIHJldHVybiByZ2Jcbn1cbiIsIi8vIHtcbi8vICAgYWNrbGV5OiBcIkFja2xleVwiLFxuLy8gICBib2hhY2hldnNreTE6IFwiQm9oYWNoZXZza3kgTm8uMVwiLFxuLy8gICBncmlld2FuazogXCJHcmlld2Fua1wiLFxuLy8gICByYXN0cmlnaW46IFwiUmFzdHJpZ2luXCIsXG4vLyB9XG5cbmV4cG9ydCBjb25zdCBvYmpGbnMgPSB7XG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vYWNrbGV5Lmh0bWxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9Db2RlL2Fja2xleW0uaHRtbFxuICBhY2tsZXk6IChpbnB1dHMpID0+IHtcbiAgICAvLyBkZWZhdWx0IGE9MjAsIGI9MC4yLCBjPTJwaVxuICAgIGNvbnN0IGEgPSAyMCxcbiAgICAgIGIgPSAwLjIsXG4gICAgICBjID0gMiAqIE1hdGguUElcbiAgICAvLyBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBjb25zdCBkID0gMixcbiAgICAgIGRfaW52ID0gMC41IC8vICgxIC8gZClcbiAgICBsZXQgc3VtMSA9IDAsXG4gICAgICBzdW0yID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bTEgKz0geGkgKiB4aVxuICAgICAgc3VtMiArPSBNYXRoLmNvcyhjICogeGkpXG4gICAgfVxuICAgIC8vIGxldCBkX2ludiA9IDEgLyBkXG4gICAgbGV0IHRlcm0xID0gLWEgKiBNYXRoLmV4cCgtYiAqIE1hdGguc3FydChzdW0xICogZF9pbnYpKSxcbiAgICAgIHRlcm0yID0gLU1hdGguZXhwKHN1bTIgKiBkX2ludilcbiAgICByZXR1cm4gdGVybTEgKyB0ZXJtMiArIGEgKyBNYXRoLkVcbiAgfSxcbiAgLy8gaHR0cDovL2JlbmNobWFya2ZjbnMueHl6L2JlbmNobWFya2ZjbnMvYm9oYWNoZXZza3luMWZjbi5odG1sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vQ29kZS9ib2hhMW0uaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2JvaGEuaHRtbFxuICBib2hhY2hldnNreTE6IChpbnB1dHMpID0+IHtcbiAgICBsZXQgeDEgPSBpbnB1dHNbMF1cbiAgICBsZXQgeDIgPSBpbnB1dHNbMV1cblxuICAgIGxldCB0ZXJtMSA9IHgxICogeDFcbiAgICBsZXQgdGVybTIgPSAyICogeDIgKiB4MlxuICAgIGxldCB0ZXJtMyA9IC0wLjMgKiBNYXRoLmNvcygzICogTWF0aC5QSSAqIHgxKVxuICAgIGxldCB0ZXJtNCA9IC0wLjQgKiBNYXRoLmNvcyg0ICogTWF0aC5QSSAqIHgyKVxuXG4gICAgcmV0dXJuIHRlcm0xICsgdGVybTIgKyB0ZXJtMyArIHRlcm00ICsgMC43XG4gIH0sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vZ3JpZXdhbmsuaHRtbFxuICBncmlld2FuazogKGlucHV0cykgPT4ge1xuICAgIGxldCBkID0gaW5wdXRzLmxlbmd0aFxuICAgIGxldCBzdW0gPSAwXG4gICAgbGV0IHByb2QgPSAxXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIGxldCB4aSA9IGlucHV0c1tpXVxuICAgICAgc3VtICs9ICh4aSAqIHhpKSAvIDQwMDBcbiAgICAgIHByb2QgKj0gTWF0aC5jb3MoeGkgLyBNYXRoLnNxcnQoaSArIDEpKVxuICAgIH1cbiAgICByZXR1cm4gc3VtIC0gcHJvZCArIDFcbiAgfSxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9yYXN0ci5odG1sXG4gIHJhc3RyaWdpbjogKGlucHV0cykgPT4ge1xuICAgIGxldCBkID0gaW5wdXRzLmxlbmd0aFxuICAgIGxldCBzdW0gPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIGxldCB4aSA9IGlucHV0c1tpXVxuICAgICAgc3VtICs9IHhpICogeGkgLSAxMCAqIE1hdGguY29zKDIgKiBNYXRoLlBJICogeGkpXG4gICAgfVxuICAgIHJldHVybiAxMCAqIGQgKyBzdW1cbiAgfSxcbn1cblxuLy8gZmFuY3kgbmFtZXMgZm9yIHNlbGVjdCBtZW51XG5vYmpGbnMuYWNrbGV5LmZhbmN5TmFtZSA9IFwiQWNrbGV5XCJcbm9iakZucy5ib2hhY2hldnNreTEuZmFuY3lOYW1lID0gXCJCb2hhY2hldnNreSBOby4xXCJcbm9iakZucy5ncmlld2Fuay5mYW5jeU5hbWUgPSBcIkdyaWV3YW5rXCJcbm9iakZucy5yYXN0cmlnaW4uZmFuY3lOYW1lID0gXCJSYXN0cmlnaW5cIlxuXG4vLyBmbkxpbXMgZm9yIGRpc3BsYXkgbGltaXRzXG5vYmpGbnMuYWNrbGV5Lnh5TGltID0gMzIuNzY4XG5vYmpGbnMuYm9oYWNoZXZza3kxLnh5TGltID0gMTAwXG5vYmpGbnMuZ3JpZXdhbmsueHlMaW0gPSA2MDBcbm9iakZucy5yYXN0cmlnaW4ueHlMaW0gPSA1LjEyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG9iakZucyB9IGZyb20gXCIuL29iai1mbnMuanNcIlxuaW1wb3J0IHsgY2FudmFzRGltLCBuVml6V29ya2Vycywgb2JqRm5Jbml0IH0gZnJvbSBcIi4vZ2xvYmFscy5qc1wiXG5pbXBvcnQgeyBzY29yZVRvVHVyYm9SR0IgfSBmcm9tIFwiLi9tYXRsYWJfdHVyYm9fY29sb3JtYXAuanNcIlxuXG5sZXQgbXlJRCxcbiAgY2VudGVyWCA9IDAsXG4gIGNlbnRlclkgPSAwLFxuICB6b29tID0gMSxcbiAgb2JqRm4sXG4gIG9iakZuTGltLFxuICBtaW5TY29yZUdsb2JhbCxcbiAgbWF4U2NvcmVHbG9iYWwsXG4gIHZpZXdYMCxcbiAgdmlld1kwLFxuICB2aWV3U3RlcFxuXG5jb25zdCBpbWFnZURhdGFBcnJheSA9IG5ldyBVaW50OENsYW1wZWRBcnJheShcbiAgICAoMyAqIGNhbnZhc0RpbSAqIGNhbnZhc0RpbSkgLyBuVml6V29ya2Vyc1xuICApLFxuICBzY29yZXMgPSBuZXcgRmxvYXQzMkFycmF5KChjYW52YXNEaW0gKiBjYW52YXNEaW0pIC8gblZpeldvcmtlcnMpXG5cbi8vIDEuIHdoaWNoIHdvcmtlciBhbSBpP1xuLy8gMi4gd2hpY2ggb2JqZWN0aXZlIGZ1bmN0aW9uP1xuLy8gMy4gd2hhdCBhcmUgdGhlIHZpZXcgbGltaXRzP1xuXG5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICBjb25zdCBbaW5mbywgbXNnXSA9IGUuZGF0YVxuICBpZiAoaW5mbyA9PT0gXCJ3b3JrZXJJRFwiKSB7XG4gICAgbXlJRCA9IG1zZ1xuICAgIC8vIGluaXQoKVxuICAgIHVwZGF0ZU9iakZuKG9iakZuSW5pdClcbiAgICB1cGRhdGVTY29yZXMoKVxuICB9IGVsc2UgaWYgKGluZm8gPT09IFwiem9vbVwiKSB7XG4gICAgem9vbSA9IG1zZ1xuICAgIHVwZGF0ZUV2YWxMaW1zKClcbiAgICB1cGRhdGVTY29yZXMoKVxuICB9IGVsc2UgaWYgKGluZm8gPT09IFwiY2VudGVyXCIpIHtcbiAgICBjZW50ZXJYID0gbXNnWzBdXG4gICAgY2VudGVyWSA9IG1zZ1sxXVxuICAgIGNvbnNvbGUubG9nKGNlbnRlclgsIGNlbnRlclkpXG4gIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJmbk5hbWVcIikge1xuICAgIHpvb20gPSAxXG4gICAgdXBkYXRlT2JqRm4obXNnKVxuICAgIHVwZGF0ZVNjb3JlcygpXG4gIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJzY29yZUxpbXNcIikge1xuICAgIG1pblNjb3JlR2xvYmFsID0gbXNnWzBdXG4gICAgbWF4U2NvcmVHbG9iYWwgPSBtc2dbMV1cbiAgICBwb3N0SW1hZ2VEYXRhKClcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVPYmpGbihvYmpGbk5hbWUpIHtcbiAgb2JqRm4gPSBvYmpGbnNbb2JqRm5OYW1lXVxuICBvYmpGbkxpbSA9IG9iakZuLnh5TGltXG4gIHVwZGF0ZUV2YWxMaW1zKClcbn1cblxuZnVuY3Rpb24gdXBkYXRlRXZhbExpbXMoKSB7XG4gIGNvbnN0IHZpZXdMaW1IYWxmID0gb2JqRm5MaW0gLyB6b29tXG4gIHZpZXdYMCA9IGNlbnRlclggLSB2aWV3TGltSGFsZlxuICB2aWV3U3RlcCA9ICgyICogdmlld0xpbUhhbGYpIC8gKGNhbnZhc0RpbSAtIDEpXG4gIHZpZXdZMCA9IGNlbnRlclkgLSB2aWV3TGltSGFsZiArIChteUlEICogY2FudmFzRGltICogdmlld1N0ZXApIC8gblZpeldvcmtlcnNcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2NvcmVzKCkge1xuICBsZXQgbWluU2NvcmUgPSBJbmZpbml0eSxcbiAgICBtYXhTY29yZSA9IC1JbmZpbml0eSxcbiAgICBzY29yZUlkeCA9IDBcbiAgZm9yIChsZXQgeUlkeCA9IDA7IHlJZHggPCBjYW52YXNEaW0gLyBuVml6V29ya2VyczsgeUlkeCsrKSB7XG4gICAgY29uc3QgeSA9IHZpZXdZMCArIHlJZHggKiB2aWV3U3RlcFxuICAgIGZvciAobGV0IHhJZHggPSAwOyB4SWR4IDwgY2FudmFzRGltOyB4SWR4KyspIHtcbiAgICAgIGNvbnN0IHggPSB2aWV3WDAgKyB4SWR4ICogdmlld1N0ZXBcbiAgICAgIGNvbnN0IHNjb3JlID0gb2JqRm4oW3gsIHldKVxuICAgICAgaWYgKHNjb3JlIDwgbWluU2NvcmUpIHtcbiAgICAgICAgbWluU2NvcmUgPSBzY29yZVxuICAgICAgfVxuICAgICAgaWYgKHNjb3JlID4gbWF4U2NvcmUpIHtcbiAgICAgICAgbWF4U2NvcmUgPSBzY29yZVxuICAgICAgfVxuICAgICAgc2NvcmVzW3Njb3JlSWR4XSA9IHNjb3JlXG4gICAgICBzY29yZUlkeCsrXG4gICAgfVxuICB9XG4gIHBvc3RNZXNzYWdlKFtcInNjb3JlTGltc1wiLCBbbWluU2NvcmUsIG1heFNjb3JlXV0pXG59XG5cbmZ1bmN0aW9uIHBvc3RJbWFnZURhdGEoKSB7XG4gIGxldCBhcnJheUlkeCA9IDBcbiAgY29uc3Qgc2NvcmVSYW5nZUludiA9IDEgLyAobWF4U2NvcmVHbG9iYWwgLSBtaW5TY29yZUdsb2JhbClcbiAgZm9yIChsZXQgc2NvcmUgb2Ygc2NvcmVzKSB7XG4gICAgY29uc3QgcmdiID0gc2NvcmVUb1R1cmJvUkdCKChzY29yZSAtIG1pblNjb3JlR2xvYmFsKSAqIHNjb3JlUmFuZ2VJbnYpXG4gICAgZm9yIChsZXQgcmdiSWR4ID0gMDsgcmdiSWR4IDwgMzsgcmdiSWR4KyspIHtcbiAgICAgIGltYWdlRGF0YUFycmF5W2FycmF5SWR4ICsgcmdiSWR4XSA9IHJnYltyZ2JJZHhdXG4gICAgfVxuICAgIGFycmF5SWR4ICs9IDNcbiAgfVxuICBwb3N0TWVzc2FnZShbXCJpbWFnZURhdGFBcnJheVwiLCBpbWFnZURhdGFBcnJheV0pXG59XG5cbi8vIGZ1bmN0aW9uIGluaXQoKSB7XG4vLyAgIHVwZGF0ZU9iakZuKG9iakZuSW5pdClcbi8vICAgdXBkYXRlU2NvcmVzKClcbi8vIH1cbiJdLCJuYW1lcyI6WyJuVml6V29ya2VycyIsImNhbnZhc0RpbSIsIm1hcmtlclIiLCJvYmpGbkluaXQiLCJtZWFuUmFkaXVzTWluIiwibWVhblJhZGl1c01heCIsInNpZ21hU2NhbGUiLCJuVHJhbnNpdGlvblN0ZXBzIiwidHVyYm9WYWx1ZXMiLCJzY29yZVRvVHVyYm9SR0IiLCJzY29yZSIsInJnYiIsIlVpbnQ4Q2xhbXBlZEFycmF5Iiwic2NvcmVTY2FsZWQiLCJzY29yZUZsb29yZWQiLCJNYXRoIiwiZmxvb3IiLCJzY29yZVJlbWFpbmRlciIsImkiLCJ5MCIsInkxIiwieSIsInJvdW5kIiwib2JqRm5zIiwiYWNrbGV5IiwiaW5wdXRzIiwiYSIsImIiLCJjIiwiUEkiLCJkIiwiZF9pbnYiLCJzdW0xIiwic3VtMiIsInhpIiwiY29zIiwidGVybTEiLCJleHAiLCJzcXJ0IiwidGVybTIiLCJFIiwiYm9oYWNoZXZza3kxIiwieDEiLCJ4MiIsInRlcm0zIiwidGVybTQiLCJncmlld2FuayIsImxlbmd0aCIsInN1bSIsInByb2QiLCJyYXN0cmlnaW4iLCJmYW5jeU5hbWUiLCJ4eUxpbSIsIm15SUQiLCJjZW50ZXJYIiwiY2VudGVyWSIsInpvb20iLCJvYmpGbiIsIm9iakZuTGltIiwibWluU2NvcmVHbG9iYWwiLCJtYXhTY29yZUdsb2JhbCIsInZpZXdYMCIsInZpZXdZMCIsInZpZXdTdGVwIiwiaW1hZ2VEYXRhQXJyYXkiLCJzY29yZXMiLCJGbG9hdDMyQXJyYXkiLCJvbm1lc3NhZ2UiLCJlIiwiZGF0YSIsImluZm8iLCJtc2ciLCJ1cGRhdGVPYmpGbiIsInVwZGF0ZVNjb3JlcyIsInVwZGF0ZUV2YWxMaW1zIiwiY29uc29sZSIsImxvZyIsInBvc3RJbWFnZURhdGEiLCJvYmpGbk5hbWUiLCJ2aWV3TGltSGFsZiIsIm1pblNjb3JlIiwiSW5maW5pdHkiLCJtYXhTY29yZSIsInNjb3JlSWR4IiwieUlkeCIsInhJZHgiLCJ4IiwicG9zdE1lc3NhZ2UiLCJhcnJheUlkeCIsInNjb3JlUmFuZ2VJbnYiLCJyZ2JJZHgiXSwic291cmNlUm9vdCI6IiJ9