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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  height: 100vh;\n}\n\nbody {\n  background-color: #ffffff;\n  color: #2c302f;\n  font-weight: 400;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas: \"nav\" \"main\" \"footer\";\n}\n\nnav {\n  grid-area: nav;\n  display: block;\n  background-color: black;\n  color: white;\n  padding: 7px;\n  /* align-self: start; */\n  /* position: sticky; */\n}\n\nheader {\n  grid-area: main;\n  text-align: center;\n  /* position: relative; */\n  /* text-align: center; */\n  /* overflow: auto; */\n}\n\n.masthead {\n  display: inline-block;\n  position: relative;\n  text-transform: uppercase;\n}\n.masthead::before, .masthead::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n}\n.masthead::before {\n  width: 100vw;\n  height: 20%;\n  top: 40%;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: black;\n  z-index: -2;\n}\n.masthead::after {\n  background-color: white;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n  top: 0;\n  left: -1em;\n  padding-left: 2em;\n}\n\nmain {\n  grid-area: main;\n  padding: 10px 30px 10px 30px;\n  overflow: auto;\n}\n\nfooter {\n  grid-area: footer;\n}\n\nh1,\nh2,\nh3 {\n  font-weight: 300;\n}\n\nnav > ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  justify-content: space-evenly;\n}\n\nnav > ul > li {\n  display: block;\n}\n\nnav > ul > li > a {\n  display: block;\n  color: white;\n  font-size: 18px;\n  padding: 10px 20px;\n  font-weight: bold;\n  text-shadow: 0 -1px black;\n  text-decoration: none;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\nfooter {\n  background: #282828;\n  color: white;\n  flex: 1 0 auto;\n  padding-top: 20px;\n}\n\nfooter a {\n  color: white;\n}\n\nfooter > ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  justify-content: space-evenly;\n}\n\nfooter > ul > li {\n  display: block;\n}\n\nfooter > ul > li > a {\n  display: block;\n  font-size: 21px;\n  padding: 10px 20px 40px 20px;\n}", "",{"version":3,"sources":["webpack://./src/main.scss"],"names":[],"mappings":"AAMA;;EAEE,aAAA;AALF;;AAQA;EACE,yBAAA;EACA,cAAA;EACA,gBAAA;EACA,2DAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,0BAAA;EACA,iCAAA;EACA,0CACE;AANJ;;AAWA;EACE,cAAA;EACA,cAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;EACA,uBAAA;EACA,sBAAA;AARF;;AAWA;EACE,eAAA;EAEA,kBAAA;EACA,wBAAA;EAIA,wBAAA;EACA,oBAAA;AAZF;;AAeA;EACE,qBAAA;EACA,kBAAA;EACA,yBAAA;AAZF;AAeE;EAEE,WAAA;EACA,cAAA;EACA,kBAAA;AAdJ;AAiBE;EACE,YAAA;EACA,WAAA;EACA,QAAA;EACA,SAAA;EACA,2BAAA;EACA,uBAAA;EACA,WAAA;AAfJ;AAkBE;EACE,uBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,MAAA;EACA,UAAA;EACA,iBAAA;AAhBJ;;AAoBA;EACE,eAAA;EACA,4BAAA;EACA,cAAA;AAjBF;;AAoBA;EACE,iBAAA;AAjBF;;AAoBA;;;EAGE,gBAAA;AAjBF;;AAoBA;EACE,gBAAA;EACA,UAAA;EACA,SAAA;EACA,aAAA;EACA,6BAAA;AAjBF;;AAoBA;EACE,cAAA;AAjBF;;AAoBA;EACE,cAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,yBAAA;EACA,qBAAA;EACA,oCAAA;EACA,kBAAA;EACA,oCAAA;AAjBF;;AAoBA;EACE,mBAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;AAjBF;;AAoBA;EACE,YAAA;AAjBF;;AAoBA;EACE,gBAAA;EACA,UAAA;EACA,SAAA;EACA,aAAA;EACA,6BAAA;AAjBF;;AAoBA;EACE,cAAA;AAjBF;;AAoBA;EACE,cAAA;EACA,eAAA;EACA,4BAAA;AAjBF","sourcesContent":["// *,\n// *::after,\n// *::before {\n//   box-sizing: border-box;\n// }\n\nhtml,\nbody {\n  height: 100vh;\n}\n\nbody {\n  background-color: #ffffff;\n  color: #2c302f;\n  font-weight: 400;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    \"nav\"\n    \"main\"\n    \"footer\";\n}\n\nnav {\n  grid-area: nav;\n  display: block;\n  background-color: black;\n  color: white;\n  padding: 7px;\n  /* align-self: start; */\n  /* position: sticky; */\n}\n\nheader {\n  grid-area: main;\n  // display: flex;\n  text-align: center;\n  /* position: relative; */\n  // justify-content: center;\n  // align-items: center;\n  // text-align: center;\n  /* text-align: center; */\n  /* overflow: auto; */\n}\n\n.masthead {\n  display: inline-block;\n  position: relative;\n  text-transform: uppercase;\n  // line-height: 0.9;\n\n  &::before,\n  &::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n  }\n\n  &::before {\n    width: 100vw;\n    height: 20%;\n    top: 40%;\n    left: 50%;\n    transform: translateX(-50%);\n    background-color: black;\n    z-index: -2;\n  }\n\n  &::after {\n    background-color: white;\n    height: 100%;\n    width: 100%;\n    z-index: -1;\n    top: 0;\n    left: -1em;\n    padding-left: 2em;\n  }\n}\n\nmain {\n  grid-area: main;\n  padding: 10px 30px 10px 30px;\n  overflow: auto;\n}\n\nfooter {\n  grid-area: footer;\n}\n\nh1,\nh2,\nh3 {\n  font-weight: 300;\n}\n\nnav > ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  justify-content: space-evenly;\n}\n\nnav > ul > li {\n  display: block;\n}\n\nnav > ul > li > a {\n  display: block;\n  color: white;\n  font-size: 18px;\n  padding: 10px 20px;\n  font-weight: bold;\n  text-shadow: 0 -1px black;\n  text-decoration: none;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\nfooter {\n  background: #282828;\n  color: white;\n  flex: 1 0 auto;\n  padding-top: 20px;\n}\n\nfooter a {\n  color: white;\n}\n\nfooter > ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  justify-content: space-evenly;\n}\n\nfooter > ul > li {\n  display: block;\n}\n\nfooter > ul > li > a {\n  display: block;\n  font-size: 21px;\n  padding: 10px 20px 40px 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/pages/cmaes-demo/index.css":
/*!****************************************!*\
  !*** ./src/pages/cmaes-demo/index.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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

__webpack_require__(/*! ../../main.scss */ "./src/main.scss");




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNsQyxNQUEzRDs7QUFDQSxPQUFLLElBQUlkLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc2RixHQUFHLENBQUMvRSxNQUF4QixFQUFnQ2QsQ0FBQyxJQUFJLENBQXJDLEVBQXdDO0FBQ3RDLFNBQUssSUFBSThILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUI5RSxNQUFBQSxlQUFlLENBQUM2RSxRQUFRLEdBQUdDLENBQVosQ0FBZixHQUFnQ2pDLEdBQUcsQ0FBQzdGLENBQUMsR0FBRzhILENBQUwsQ0FBbkM7QUFDRDs7QUFDREQsSUFBQUEsUUFBUSxJQUFJLENBQVo7QUFDRDs7QUFDRC9GLEVBQUFBLGNBQWMsR0FSeUIsQ0FTdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQsU0FBU2lFLGNBQVQsR0FBMEI7QUFDeEIsTUFBSWpFLGNBQWMsS0FBS25ELG9EQUFuQixJQUFrQzhDLGNBQXRDLEVBQXNEO0FBQ3BEK0UsSUFBQUEsSUFBSTtBQUNMO0FBQ0YsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9qcy9kcmF3LWNhbnZhcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvcGFnZXMvY21hZXMtZGVtby9nbG9iYWxzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL29iai1mbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy9jbWFlcy1kZW1vL2luZGV4LmNzcz8zNDJkIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9tYWluLnNjc3M/NGU1MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0Ly4vc3JjL3BhZ2VzL2NtYWVzLWRlbW8vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGRyYXdDYW52YXMoY2FudmFzRnJvbSwgY3R4VG8sIGNlbnRlciwgYW5nbGUpIHtcbiAgY3R4VG8uc2F2ZSgpXG4gIGN0eFRvLnRyYW5zbGF0ZShjZW50ZXJbMF0sIGNlbnRlclsxXSlcbiAgaWYgKGFuZ2xlICE9PSAwKSB7XG4gICAgY3R4VG8ucm90YXRlKGFuZ2xlKVxuICB9XG4gIGN0eFRvLnRyYW5zbGF0ZSgtMC41ICogY2FudmFzRnJvbS53aWR0aCwgLTAuNSAqIGNhbnZhc0Zyb20uaGVpZ2h0KVxuICBjdHhUby5kcmF3SW1hZ2UoY2FudmFzRnJvbSwgMCwgMClcbiAgY3R4VG8ucmVzdG9yZSgpXG59XG4iLCJleHBvcnQgY29uc3QgblZpeldvcmtlcnMgPSA4LFxuICBjYW52YXNEaW0gPSA2MDAsXG4gIG1hcmtlclIgPSA3LFxuICBvYmpGbkluaXQgPSBcImFja2xleVwiLFxuICBtZWFuUmFkaXVzTWluID0gMC42LFxuICBtZWFuUmFkaXVzTWF4ID0gMC45LFxuICBzaWdtYVNjYWxlID0gMC41LFxuICB6b29tU3RlcE1hZyA9IDEuMDUsXG4gIG5FbGxpcHNlVGVzdFB0cyA9IDMyXG4iLCIvLyB7XG4vLyAgIGFja2xleTogXCJBY2tsZXlcIixcbi8vICAgYm9oYWNoZXZza3kxOiBcIkJvaGFjaGV2c2t5IE5vLjFcIixcbi8vICAgZ3JpZXdhbms6IFwiR3JpZXdhbmtcIixcbi8vICAgcmFzdHJpZ2luOiBcIlJhc3RyaWdpblwiLFxuLy8gfVxuXG5leHBvcnQgY29uc3Qgb2JqRm5zID0ge1xuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2Fja2xleS5odG1sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vQ29kZS9hY2tsZXltLmh0bWxcbiAgYWNrbGV5OiAoaW5wdXRzKSA9PiB7XG4gICAgLy8gZGVmYXVsdCBhPTIwLCBiPTAuMiwgYz0ycGlcbiAgICBjb25zdCBhID0gMjAsXG4gICAgICBiID0gMC4yLFxuICAgICAgYyA9IDIgKiBNYXRoLlBJXG4gICAgLy8gbGV0IGQgPSBpbnB1dHMubGVuZ3RoXG4gICAgY29uc3QgZCA9IDIsXG4gICAgICBkX2ludiA9IDAuNSAvLyAoMSAvIGQpXG4gICAgbGV0IHN1bTEgPSAwLFxuICAgICAgc3VtMiA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGQ7IGkrKykge1xuICAgICAgbGV0IHhpID0gaW5wdXRzW2ldXG4gICAgICBzdW0xICs9IHhpICogeGlcbiAgICAgIHN1bTIgKz0gTWF0aC5jb3MoYyAqIHhpKVxuICAgIH1cbiAgICAvLyBsZXQgZF9pbnYgPSAxIC8gZFxuICAgIGxldCB0ZXJtMSA9IC1hICogTWF0aC5leHAoLWIgKiBNYXRoLnNxcnQoc3VtMSAqIGRfaW52KSksXG4gICAgICB0ZXJtMiA9IC1NYXRoLmV4cChzdW0yICogZF9pbnYpXG4gICAgcmV0dXJuIHRlcm0xICsgdGVybTIgKyBhICsgTWF0aC5FXG4gIH0sXG4gIC8vIGh0dHA6Ly9iZW5jaG1hcmtmY25zLnh5ei9iZW5jaG1hcmtmY25zL2JvaGFjaGV2c2t5bjFmY24uaHRtbFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL0NvZGUvYm9oYTFtLmh0bWxcbiAgLy8gaHR0cHM6Ly93d3cuc2Z1LmNhL35zc3VyamFuby9ib2hhLmh0bWxcbiAgYm9oYWNoZXZza3kxOiAoaW5wdXRzKSA9PiB7XG4gICAgbGV0IHgxID0gaW5wdXRzWzBdXG4gICAgbGV0IHgyID0gaW5wdXRzWzFdXG5cbiAgICBsZXQgdGVybTEgPSB4MSAqIHgxXG4gICAgbGV0IHRlcm0yID0gMiAqIHgyICogeDJcbiAgICBsZXQgdGVybTMgPSAtMC4zICogTWF0aC5jb3MoMyAqIE1hdGguUEkgKiB4MSlcbiAgICBsZXQgdGVybTQgPSAtMC40ICogTWF0aC5jb3MoNCAqIE1hdGguUEkgKiB4MilcblxuICAgIHJldHVybiB0ZXJtMSArIHRlcm0yICsgdGVybTMgKyB0ZXJtNCArIDAuN1xuICB9LFxuICAvLyBodHRwczovL3d3dy5zZnUuY2EvfnNzdXJqYW5vL2dyaWV3YW5rLmh0bWxcbiAgZ3JpZXdhbms6IChpbnB1dHMpID0+IHtcbiAgICBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBsZXQgc3VtID0gMFxuICAgIGxldCBwcm9kID0gMVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bSArPSAoeGkgKiB4aSkgLyA0MDAwXG4gICAgICBwcm9kICo9IE1hdGguY29zKHhpIC8gTWF0aC5zcXJ0KGkgKyAxKSlcbiAgICB9XG4gICAgcmV0dXJuIHN1bSAtIHByb2QgKyAxXG4gIH0sXG4gIC8vIGh0dHBzOi8vd3d3LnNmdS5jYS9+c3N1cmphbm8vcmFzdHIuaHRtbFxuICByYXN0cmlnaW46IChpbnB1dHMpID0+IHtcbiAgICBsZXQgZCA9IGlucHV0cy5sZW5ndGhcbiAgICBsZXQgc3VtID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICBsZXQgeGkgPSBpbnB1dHNbaV1cbiAgICAgIHN1bSArPSB4aSAqIHhpIC0gMTAgKiBNYXRoLmNvcygyICogTWF0aC5QSSAqIHhpKVxuICAgIH1cbiAgICByZXR1cm4gMTAgKiBkICsgc3VtXG4gIH0sXG59XG5cbi8vIGZhbmN5IG5hbWVzIGZvciBzZWxlY3QgbWVudVxub2JqRm5zLmFja2xleS5mYW5jeU5hbWUgPSBcIkFja2xleVwiXG5vYmpGbnMuYm9oYWNoZXZza3kxLmZhbmN5TmFtZSA9IFwiQm9oYWNoZXZza3kgTm8uMVwiXG5vYmpGbnMuZ3JpZXdhbmsuZmFuY3lOYW1lID0gXCJHcmlld2Fua1wiXG5vYmpGbnMucmFzdHJpZ2luLmZhbmN5TmFtZSA9IFwiUmFzdHJpZ2luXCJcblxuLy8gZm5MaW1zIGZvciBkaXNwbGF5IGxpbWl0c1xub2JqRm5zLmFja2xleS54eUxpbSA9IDMyLjc2OFxub2JqRm5zLmJvaGFjaGV2c2t5MS54eUxpbSA9IDEwMFxub2JqRm5zLmdyaWV3YW5rLnh5TGltID0gNjAwXG5vYmpGbnMucmFzdHJpZ2luLnh5TGltID0gNS4xMlxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgY29sb3I6ICMyYzMwMmY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm5hdlxcXCIgXFxcIm1haW5cXFwiIFxcXCJmb290ZXJcXFwiO1xcbn1cXG5cXG5uYXYge1xcbiAgZ3JpZC1hcmVhOiBuYXY7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogN3B4O1xcbiAgLyogYWxpZ24tc2VsZjogc3RhcnQ7ICovXFxuICAvKiBwb3NpdGlvbjogc3RpY2t5OyAqL1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgLyogb3ZlcmZsb3c6IGF1dG87ICovXFxufVxcblxcbi5tYXN0aGVhZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4ubWFzdGhlYWQ6OmJlZm9yZSwgLm1hc3RoZWFkOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ubWFzdGhlYWQ6OmJlZm9yZSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDIwJTtcXG4gIHRvcDogNDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB6LWluZGV4OiAtMjtcXG59XFxuLm1hc3RoZWFkOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogLTE7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAtMWVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyZW07XFxufVxcblxcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMzBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbm5hdiA+IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG5uYXYgPiB1bCA+IGxpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5uYXYgPiB1bCA+IGxpID4gYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1zaGFkb3c6IDAgLTFweCBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQ6ICMyODI4Mjg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmZvb3RlciA+IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG5mb290ZXIgPiB1bCA+IGxpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5mb290ZXIgPiB1bCA+IGxpID4gYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweCA0MHB4IDIwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBTUE7O0VBRUUsYUFBQTtBQUxGOztBQVFBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQ0FDRTtBQU5KOztBQVdBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQVJGOztBQVdBO0VBQ0UsZUFBQTtFQUVBLGtCQUFBO0VBQ0Esd0JBQUE7RUFJQSx3QkFBQTtFQUNBLG9CQUFBO0FBWkY7O0FBZUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFaRjtBQWVFO0VBRUUsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWRKO0FBaUJFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBZko7QUFrQkU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFoQko7O0FBb0JBO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQWpCRjs7QUFvQkE7RUFDRSxpQkFBQTtBQWpCRjs7QUFvQkE7OztFQUdFLGdCQUFBO0FBakJGOztBQW9CQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsY0FBQTtBQWpCRjs7QUFvQkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQWpCRjs7QUFvQkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsWUFBQTtBQWpCRjs7QUFvQkE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBakJGOztBQW9CQTtFQUNFLGNBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQWpCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyAqLFxcbi8vICo6OmFmdGVyLFxcbi8vICo6OmJlZm9yZSB7XFxuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbi8vIH1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgY29sb3I6ICMyYzMwMmY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIm5hdlxcXCJcXG4gICAgXFxcIm1haW5cXFwiXFxuICAgIFxcXCJmb290ZXJcXFwiO1xcbn1cXG5cXG5uYXYge1xcbiAgZ3JpZC1hcmVhOiBuYXY7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogN3B4O1xcbiAgLyogYWxpZ24tc2VsZjogc3RhcnQ7ICovXFxuICAvKiBwb3NpdGlvbjogc3RpY2t5OyAqL1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgLy8gZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xcbn1cXG5cXG4ubWFzdGhlYWQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIC8vIGxpbmUtaGVpZ2h0OiAwLjk7XFxuXFxuICAmOjpiZWZvcmUsXFxuICAmOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgfVxcblxcbiAgJjo6YmVmb3JlIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgdG9wOiA0MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgei1pbmRleDogLTI7XFxuICB9XFxuXFxuICAmOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAtMWVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcXG4gIH1cXG59XFxuXFxubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweCAzMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmZvb3RlciB7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxubmF2ID4gdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbm5hdiA+IHVsID4gbGkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbm5hdiA+IHVsID4gbGkgPiBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXNoYWRvdzogMCAtMXB4IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZsZXg6IDEgMCBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZm9vdGVyID4gdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbmZvb3RlciA+IHVsID4gbGkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmZvb3RlciA+IHVsID4gbGkgPiBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4IDQwcHggMjBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsge1wic3JjX3BhZ2VzX2NtYWVzLWRlbW9fY21hLXdvcmtlcl9qc1wiOlwiNmYwNDFjODI5NDk1MDkxOGU3ODdcIixcInNyY19wYWdlc19jbWFlcy1kZW1vX3Zpei13b3JrZXJfanNcIjpcIjQ0Y2VjYTk5ODc5OTliZjdlNjgyXCJ9W2NodW5rSWRdICsgXCIuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImNtYWVzLWRlbW9cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsInJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKVxucmVxdWlyZShcIi4uLy4uL21haW4uc2Nzc1wiKVxuaW1wb3J0IHsgb2JqRm5zIH0gZnJvbSBcIi4vb2JqLWZucy5qc1wiXG5pbXBvcnQgeyBjYW52YXNEaW0sIG1hcmtlclIsIG5WaXpXb3JrZXJzLCBvYmpGbkluaXQgfSBmcm9tIFwiLi9nbG9iYWxzLmpzXCJcbmltcG9ydCB7IGRyYXdDYW52YXMgfSBmcm9tIFwiLi8uLi8uLi9qcy9kcmF3LWNhbnZhcy5qc1wiXG5cbmxldCB6b29tID0gMSxcbiAgbWVhbnNQYXRoQXJyLFxuICBlbGxpcHNlUGFyYW1zLFxuICBzb2x1dGlvbnMsXG4gIHNvbHV0aW9uc0ZyZXNoID0gZmFsc2UsXG4gIGVsbGlwc2VQdHMsXG4gIHNjb3JlTGltc1JlY2VpdmVkLFxuICBtaW5TY29yZSxcbiAgbWF4U2NvcmUsXG4gIGltYWdlc1JlY2VpdmVkID0gMCxcbiAgZGlzcGxheU1lYW5zUGF0aCA9IGZhbHNlXG5cbmNvbnN0IGNhbnZhc0ZuR3JhZGllbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1iZ1wiKVxuY29uc3QgY2FudmFzQ21hU29scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLWZnXCIpXG5jb25zdCBjYW52YXNDbWFNZWFucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLW1lYW5zXCIpXG5jb25zdCBjYW52YXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9iai1mbi1jYW52YXMtZGl2XCIpXG5jYW52YXNEaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYHdpZHRoOiR7Y2FudmFzRGltfXB4OyBoZWlnaHQ6JHtjYW52YXNEaW19cHhgKVxuZm9yIChsZXQgY2FudmFzIG9mIFtjYW52YXNDbWFTb2xzLCBjYW52YXNGbkdyYWRpZW50LCBjYW52YXNDbWFNZWFuc10pIHtcbiAgY2FudmFzLndpZHRoID0gY2FudmFzRGltXG4gIGNhbnZhcy5oZWlnaHQgPSBjYW52YXNEaW1cbn1cblxuY29uc3QgY3R4Rm5HcmFkaWVudCA9IGNhbnZhc0ZuR3JhZGllbnQuZ2V0Q29udGV4dChcIjJkXCIpXG5jb25zdCBjdHhDbWFTb2xzID0gY2FudmFzQ21hU29scy5nZXRDb250ZXh0KFwiMmRcIilcbmN0eENtYVNvbHMuc3Ryb2tlU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KVwiXG5jdHhDbWFTb2xzLmxpbmVXaWR0aCA9IDNcbi8vIGN0eENtYVNvbHMuZmlsbFN0eWxlID0gXCJibGFja1wiXG5jb25zdCBjdHhDbWFNZWFucyA9IGNhbnZhc0NtYU1lYW5zLmdldENvbnRleHQoXCIyZFwiKVxuY29uc3QgaW1hZ2VEYXRhQmcgPSBjdHhGbkdyYWRpZW50LmNyZWF0ZUltYWdlRGF0YShjYW52YXNEaW0sIGNhbnZhc0RpbSlcbmNvbnN0IGltYWdlRGF0YUJnRGF0YSA9IGltYWdlRGF0YUJnLmRhdGFcbmltYWdlRGF0YUJnRGF0YS5maWxsKDI1NSlcblxuY29uc3QgbWFya2VyQ2FudmFzID0gZ2V0TWFya2VyQ2FudmFzKClcblxuY29uc3QgZm5TZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9iai1mbi1zZWxlY3RcIilcblxuZm9yIChsZXQgayBvZiBPYmplY3Qua2V5cyhvYmpGbnMpKSB7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgb3B0aW9uLnZhbHVlID0ga1xuICBvcHRpb24udGV4dCA9IG9iakZuc1trXS5mYW5jeU5hbWVcbiAgaWYgKGsgPT09IG9iakZuSW5pdCkge1xuICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWVcbiAgfVxuICBmblNlbGVjdC5hZGQob3B0aW9uKVxufVxuXG5mblNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gIGNvbnN0IGZuTmFtZSA9IGUudGFyZ2V0LnZhbHVlXG4gIHVwZGF0ZU9iakZuKGZuTmFtZSlcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZU9iakZuKGZuTmFtZSkge1xuICBmb3IgKGxldCB3b3JrZXIgb2Ygdml6V29ya2Vycykge1xuICAgIHdvcmtlci5wb3N0TWVzc2FnZShbXCJmbk5hbWVcIiwgZm5OYW1lXSlcbiAgfVxuICBjbWFXb3JrZXIucG9zdE1lc3NhZ2UoW1wiZm5OYW1lXCIsIGZuTmFtZV0pXG4gIHpvb20gPSAxXG59XG5cbmNvbnN0IHBvcE11bHRTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcC1tdWx0LXNlbGVjdFwiKVxucG9wTXVsdFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gIGxldCBwb3BzaXplTXVsdGlwbGllciA9IGUudGFyZ2V0LnZhbHVlXG4gIGNtYVdvcmtlci5wb3N0TWVzc2FnZShbXCJwb3BNdWx0XCIsIHBvcHNpemVNdWx0aXBsaWVyXSlcbn0pXG5cbmNvbnN0IHpvb21JbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiem9vbS1pblwiKVxuem9vbUluQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHpvb20gKj0gMS4xXG4gIHVwZGF0ZVpvb21BbGwoKVxufSlcblxuY29uc3Qgem9vbU91dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiem9vbS1vdXRcIilcbnpvb21PdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgem9vbSAvPSAxLjFcbiAgdXBkYXRlWm9vbUFsbCgpXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVab29tT2JqRm4oKSB7XG4gIGZvciAobGV0IHdvcmtlciBvZiB2aXpXb3JrZXJzKSB7XG4gICAgd29ya2VyLnBvc3RNZXNzYWdlKFtcInpvb21cIiwgem9vbV0pXG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlWm9vbUNNQSgpIHtcbiAgY21hV29ya2VyLnBvc3RNZXNzYWdlKFtcInpvb21cIiwgem9vbV0pXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVpvb21BbGwoKSB7XG4gIHVwZGF0ZVpvb21PYmpGbigpXG4gIHVwZGF0ZVpvb21DTUEoKVxufVxuXG5jb25zdCBzdGVwQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGVwLWJ0blwiKVxuc3RlcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbWFXb3JrZXIucG9zdE1lc3NhZ2UoW1wic3RlcFwiLCB0cnVlXSlcbn0pXG5cbmNvbnN0IG1lYW5zUGF0aENoZWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZWFucy1wYXRoLWNoZWNrYm94XCIpXG5tZWFuc1BhdGhDaGVjay5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgZGlzcGxheU1lYW5zUGF0aCA9IG1lYW5zUGF0aENoZWNrLmNoZWNrZWRcbiAgaWYgKGRpc3BsYXlNZWFuc1BhdGgpIHtcbiAgICBkcmF3TWVhbnMobWVhbnNQYXRoQXJyLCBjdHhDbWFNZWFucylcbiAgfSBlbHNlIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgY3R4Q21hTWVhbnMuY2xlYXJSZWN0KFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBjdHhDbWFNZWFucy5jYW52YXMud2lkdGgsXG4gICAgICAgIGN0eENtYU1lYW5zLmNhbnZhcy5oZWlnaHRcbiAgICAgIClcbiAgICB9KVxuICB9XG59KVxuXG5yZXNldFNjb3JlTGltcygpXG5cbmNvbnN0IGNtYVdvcmtlciA9IG5ldyBXb3JrZXIobmV3IFVSTChcIi4vY21hLXdvcmtlci5qc1wiLCBpbXBvcnQubWV0YS51cmwpKVxuXG5jbWFXb3JrZXIub25tZXNzYWdlID0gKGUpID0+IHtcbiAgY29uc3QgW2luZm8sIG1zZ10gPSBlLmRhdGFcbiAgaWYgKGluZm8gPT09IFwic29sdXRpb25zXCIpIHtcbiAgICBzb2x1dGlvbnMgPSBtc2dbMF0uc2xpY2UoKVxuICAgIGVsbGlwc2VQdHMgPSBtc2dbMV0uc2xpY2UoKVxuICAgIHNvbHV0aW9uc0ZyZXNoID0gdHJ1ZVxuICAgIGNoZWNrRHJhd1JlYWR5KClcbiAgfSBlbHNlIGlmIChpbmZvID09PSBcIm1lYW5zXCIpIHtcbiAgICBtZWFuc1BhdGhBcnIgPSBtc2cuc2xpY2UoKVxuICAgIGlmIChkaXNwbGF5TWVhbnNQYXRoKSB7XG4gICAgICBkcmF3TWVhbnMobWVhbnNQYXRoQXJyLCBjdHhDbWFNZWFucylcbiAgICB9XG4gIH0gZWxzZSBpZiAoaW5mbyA9PT0gXCJ6b29tXCIpIHtcbiAgICB6b29tID0gbXNnXG4gICAgdXBkYXRlWm9vbU9iakZuKClcbiAgfSBlbHNlIGlmIChpbmZvID09PSBcImVsbGlwc2VQdHNcIikge1xuICAgIGVsbGlwc2VQdHMgPSBtc2cuc2xpY2UoKVxuICAgIGNvbnNvbGUubG9nKGVsbGlwc2VQdHMpXG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhd01lYW5zKG1lYW5zLCBjdHgpIHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KVxuICAgIGN0eC5zYXZlKClcbiAgICBjdHgudHJhbnNsYXRlKDAuNSAqIGN0eC5jYW52YXMud2lkdGgsIDAuNSAqIGN0eC5jYW52YXMuaGVpZ2h0KVxuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIGN0eC5tb3ZlVG8obWVhbnNbMF0sIG1lYW5zWzFdKVxuICAgIGZvciAobGV0IGkgPSAyOyBpIDwgbWVhbnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIGN0eC5saW5lVG8obWVhbnNbaV0sIG1lYW5zW2kgKyAxXSlcbiAgICB9XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgY3R4LmxpbmVXaWR0aCA9IDRcbiAgICBjdHguc3Ryb2tlKClcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCJcbiAgICBjdHgubGluZVdpZHRoID0gMlxuICAgIGN0eC5zdHJva2UoKVxuICAgIGN0eC5yZXN0b3JlKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZHJhdygpIHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBjdHhGbkdyYWRpZW50LnB1dEltYWdlRGF0YShpbWFnZURhdGFCZywgMCwgMClcbiAgICBjdHhDbWFTb2xzLmNsZWFyUmVjdCgwLCAwLCBjYW52YXNDbWFTb2xzLndpZHRoLCBjYW52YXNDbWFTb2xzLmhlaWdodClcbiAgICBjdHhDbWFTb2xzLnNhdmUoKVxuICAgIGN0eENtYVNvbHMudHJhbnNsYXRlKDAuNSAqIGNhbnZhc0NtYVNvbHMud2lkdGgsIDAuNSAqIGNhbnZhc0NtYVNvbHMuaGVpZ2h0KVxuICAgIC8vIGNvbnN0IG1wYUxlbmd0aCA9IG1lYW5zUGF0aEFyci5sZW5ndGhcbiAgICAvLyBjdHhDbWFTb2xzLmJlZ2luUGF0aCgpXG4gICAgLy8gY3R4Q21hU29scy5lbGxpcHNlKFxuICAgIC8vICAgbWVhbnNQYXRoQXJyW21wYUxlbmd0aCAtIDJdLFxuICAgIC8vICAgbWVhbnNQYXRoQXJyW21wYUxlbmd0aCAtIDFdLFxuICAgIC8vICAgZWxsaXBzZVBhcmFtc1swXSAqIHpvb20sXG4gICAgLy8gICBlbGxpcHNlUGFyYW1zWzFdICogem9vbSxcbiAgICAvLyAgIGVsbGlwc2VQYXJhbXNbMl0sXG4gICAgLy8gICAwLFxuICAgIC8vICAgMiAqIE1hdGguUElcbiAgICAvLyApXG4gICAgLy8gY3R4Q21hU29scy5zdHJva2UoKVxuICAgIGN0eENtYVNvbHMuYmVnaW5QYXRoKClcbiAgICBjdHhDbWFTb2xzLm1vdmVUbyhlbGxpcHNlUHRzWzBdLCBlbGxpcHNlUHRzWzFdKVxuICAgIGZvciAobGV0IGkgPSAyOyBpIDwgZWxsaXBzZVB0cy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgY3R4Q21hU29scy5saW5lVG8oZWxsaXBzZVB0c1tpXSwgZWxsaXBzZVB0c1tpICsgMV0pXG4gICAgfVxuICAgIGN0eENtYVNvbHMuY2xvc2VQYXRoKClcbiAgICBjdHhDbWFTb2xzLnN0cm9rZSgpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb2x1dGlvbnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIGRyYXdNYXJrZXIoc29sdXRpb25zW2ldLCBzb2x1dGlvbnNbaSArIDFdLCBjdHhDbWFTb2xzKVxuICAgIH1cbiAgICBjdHhDbWFTb2xzLnJlc3RvcmUoKVxuICAgIC8vIGN0eENtYVNvbHMucmVzdG9yZSgpXG4gICAgc29sdXRpb25zRnJlc2ggPSBmYWxzZVxuICAgIGltYWdlc1JlY2VpdmVkID0gMFxuICAgIGNtYVdvcmtlci5wb3N0TWVzc2FnZShbXCJkcmF3UmVhZHlcIiwgdHJ1ZV0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRyYXdNYXJrZXIoeCwgeSwgY3R4KSB7XG4gIGRyYXdDYW52YXMobWFya2VyQ2FudmFzLCBjdHgsIFt4LCB5XSwgMClcbn1cblxuZnVuY3Rpb24gZ2V0TWFya2VyQ2FudmFzKCkge1xuICBmdW5jdGlvbiBkcmF3TGluZVNlZyhzdGFydFB0LCBlbmRQdCwgY29sb3IsIHdlaWdodCwgY3R4KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4Lm1vdmVUbyguLi5zdGFydFB0KVxuICAgIGN0eC5saW5lVG8oLi4uZW5kUHQpXG4gICAgY3R4LmxpbmVXaWR0aCA9IHdlaWdodFxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yXG4gICAgY3R4LnN0cm9rZSgpXG4gIH1cblxuICBjb25zdCBtYXJrZXJDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLFxuICAgIG1hcmtlckNUWCA9IG1hcmtlckNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcbiAgY29uc3QgYm9yZGVyID0gMSxcbiAgICBkID0gMiAqIChib3JkZXIgKyBtYXJrZXJSKVxuXG4gIG1hcmtlckNhbnZhcy53aWR0aCA9IGRcbiAgbWFya2VyQ2FudmFzLmhlaWdodCA9IGRcblxuICBtYXJrZXJDVFgudHJhbnNsYXRlKDAuNSAqIG1hcmtlckNhbnZhcy53aWR0aCwgMC41ICogbWFya2VyQ2FudmFzLmhlaWdodClcblxuICBkcmF3TGluZVNlZyhbLW1hcmtlclIgLSAxLCAwXSwgW21hcmtlclIgKyAxLCAwXSwgXCJibGFja1wiLCA0LCBtYXJrZXJDVFgpXG4gIGRyYXdMaW5lU2VnKFswLCAtbWFya2VyUiAtIDFdLCBbMCwgbWFya2VyUiArIDFdLCBcImJsYWNrXCIsIDQsIG1hcmtlckNUWClcbiAgZHJhd0xpbmVTZWcoWy1tYXJrZXJSLCAwXSwgW21hcmtlclIsIDBdLCBcIndoaXRlXCIsIDIsIG1hcmtlckNUWClcbiAgZHJhd0xpbmVTZWcoWzAsIC1tYXJrZXJSXSwgWzAsIG1hcmtlclJdLCBcIndoaXRlXCIsIDIsIG1hcmtlckNUWClcblxuICByZXR1cm4gbWFya2VyQ2FudmFzXG59XG5cbmNvbnN0IHZpeldvcmtlcnMgPSBbXVxuZm9yIChsZXQgd29ya2VySWR4ID0gMDsgd29ya2VySWR4IDwgblZpeldvcmtlcnM7IHdvcmtlcklkeCsrKSB7XG4gIGNvbnN0IHZpeldvcmtlciA9IG5ldyBXb3JrZXIobmV3IFVSTChcIi4vdml6LXdvcmtlci5qc1wiLCBpbXBvcnQubWV0YS51cmwpKVxuICB2aXpXb3JrZXIucG9zdE1lc3NhZ2UoW1wid29ya2VySURcIiwgd29ya2VySWR4XSlcbiAgdml6V29ya2VyLm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gICAgY29uc3QgW2luZm8sIG1zZ10gPSBlLmRhdGFcbiAgICBpZiAoaW5mbyA9PT0gXCJzY29yZUxpbXNcIikge1xuICAgICAgdXBkYXRlU2NvcmVMaW1zKC4uLm1zZywgdml6V29ya2VycylcbiAgICB9IGVsc2UgaWYgKGluZm8gPT09IFwiaW1hZ2VEYXRhQXJyYXlcIikge1xuICAgICAgdXBkYXRlSW1hZ2VEYXRhKHdvcmtlcklkeCwgbXNnKVxuICAgICAgY2hlY2tEcmF3UmVhZHkoKVxuICAgIH1cbiAgfVxuICB2aXpXb3JrZXJzLnB1c2godml6V29ya2VyKVxufVxuXG5mdW5jdGlvbiByZXNldFNjb3JlTGltcygpIHtcbiAgbWluU2NvcmUgPSBJbmZpbml0eVxuICBtYXhTY29yZSA9IC1JbmZpbml0eVxuICBzY29yZUxpbXNSZWNlaXZlZCA9IDBcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2NvcmVMaW1zKF9taW5TY29yZSwgX21heFNjb3JlLCB2aXpXb3JrZXJzKSB7XG4gIGlmIChfbWluU2NvcmUgPCBtaW5TY29yZSkge1xuICAgIG1pblNjb3JlID0gX21pblNjb3JlXG4gIH1cbiAgaWYgKF9tYXhTY29yZSA+IG1heFNjb3JlKSB7XG4gICAgbWF4U2NvcmUgPSBfbWF4U2NvcmVcbiAgfVxuICBzY29yZUxpbXNSZWNlaXZlZCsrXG4gIGlmIChzY29yZUxpbXNSZWNlaXZlZCA9PT0gblZpeldvcmtlcnMpIHtcbiAgICBmb3IgKGxldCB3b3JrZXIgb2Ygdml6V29ya2Vycykge1xuICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKFtcInNjb3JlTGltc1wiLCBbbWluU2NvcmUsIG1heFNjb3JlXV0pXG4gICAgfVxuICAgIHJlc2V0U2NvcmVMaW1zKClcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVJbWFnZURhdGEod29ya2VySWR4LCBtc2cpIHtcbiAgbGV0IGFycmF5SWR4ID0gKHdvcmtlcklkeCAvIG5WaXpXb3JrZXJzKSAqIGltYWdlRGF0YUJnRGF0YS5sZW5ndGhcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyBpICs9IDMpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgaW1hZ2VEYXRhQmdEYXRhW2FycmF5SWR4ICsgal0gPSBtc2dbaSArIGpdXG4gICAgfVxuICAgIGFycmF5SWR4ICs9IDRcbiAgfVxuICBpbWFnZXNSZWNlaXZlZCsrXG4gIC8vIGlmIChpbWFnZXNSZWNlaXZlZCA9PT0gblZpeldvcmtlcnMpIHtcbiAgLy8gICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAvLyAgICAgY3R4Rm5HcmFkaWVudC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhQmcsIDAsIDApXG4gIC8vICAgfSlcbiAgLy8gICBpbWFnZXNSZWNlaXZlZCA9IDBcbiAgLy8gfVxufVxuXG5mdW5jdGlvbiBjaGVja0RyYXdSZWFkeSgpIHtcbiAgaWYgKGltYWdlc1JlY2VpdmVkID09PSBuVml6V29ya2VycyAmJiBzb2x1dGlvbnNGcmVzaCkge1xuICAgIGRyYXcoKVxuICB9XG59XG4iXSwibmFtZXMiOlsiZHJhd0NhbnZhcyIsImNhbnZhc0Zyb20iLCJjdHhUbyIsImNlbnRlciIsImFuZ2xlIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsIm5WaXpXb3JrZXJzIiwiY2FudmFzRGltIiwibWFya2VyUiIsIm9iakZuSW5pdCIsIm1lYW5SYWRpdXNNaW4iLCJtZWFuUmFkaXVzTWF4Iiwic2lnbWFTY2FsZSIsInpvb21TdGVwTWFnIiwibkVsbGlwc2VUZXN0UHRzIiwib2JqRm5zIiwiYWNrbGV5IiwiaW5wdXRzIiwiYSIsImIiLCJjIiwiTWF0aCIsIlBJIiwiZCIsImRfaW52Iiwic3VtMSIsInN1bTIiLCJpIiwieGkiLCJjb3MiLCJ0ZXJtMSIsImV4cCIsInNxcnQiLCJ0ZXJtMiIsIkUiLCJib2hhY2hldnNreTEiLCJ4MSIsIngyIiwidGVybTMiLCJ0ZXJtNCIsImdyaWV3YW5rIiwibGVuZ3RoIiwic3VtIiwicHJvZCIsInJhc3RyaWdpbiIsImZhbmN5TmFtZSIsInh5TGltIiwicmVxdWlyZSIsInpvb20iLCJtZWFuc1BhdGhBcnIiLCJlbGxpcHNlUGFyYW1zIiwic29sdXRpb25zIiwic29sdXRpb25zRnJlc2giLCJlbGxpcHNlUHRzIiwic2NvcmVMaW1zUmVjZWl2ZWQiLCJtaW5TY29yZSIsIm1heFNjb3JlIiwiaW1hZ2VzUmVjZWl2ZWQiLCJkaXNwbGF5TWVhbnNQYXRoIiwiY2FudmFzRm5HcmFkaWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW52YXNDbWFTb2xzIiwiY2FudmFzQ21hTWVhbnMiLCJjYW52YXNEaXYiLCJzZXRBdHRyaWJ1dGUiLCJjYW52YXMiLCJjdHhGbkdyYWRpZW50IiwiZ2V0Q29udGV4dCIsImN0eENtYVNvbHMiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsImN0eENtYU1lYW5zIiwiaW1hZ2VEYXRhQmciLCJjcmVhdGVJbWFnZURhdGEiLCJpbWFnZURhdGFCZ0RhdGEiLCJkYXRhIiwiZmlsbCIsIm1hcmtlckNhbnZhcyIsImdldE1hcmtlckNhbnZhcyIsImZuU2VsZWN0IiwiT2JqZWN0Iiwia2V5cyIsImsiLCJvcHRpb24iLCJjcmVhdGVFbGVtZW50IiwidmFsdWUiLCJ0ZXh0Iiwic2VsZWN0ZWQiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImZuTmFtZSIsInRhcmdldCIsInVwZGF0ZU9iakZuIiwidml6V29ya2VycyIsIndvcmtlciIsInBvc3RNZXNzYWdlIiwiY21hV29ya2VyIiwicG9wTXVsdFNlbGVjdCIsInBvcHNpemVNdWx0aXBsaWVyIiwiem9vbUluQnRuIiwidXBkYXRlWm9vbUFsbCIsInpvb21PdXRCdG4iLCJ1cGRhdGVab29tT2JqRm4iLCJ1cGRhdGVab29tQ01BIiwic3RlcEJ0biIsIm1lYW5zUGF0aENoZWNrIiwiY2hlY2tlZCIsImRyYXdNZWFucyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsInJlc2V0U2NvcmVMaW1zIiwiV29ya2VyIiwiVVJMIiwiaW1wb3J0IiwibWV0YSIsInVybCIsIm9ubWVzc2FnZSIsImluZm8iLCJtc2ciLCJzbGljZSIsImNoZWNrRHJhd1JlYWR5IiwiY29uc29sZSIsImxvZyIsIm1lYW5zIiwiY3R4IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZHJhdyIsInB1dEltYWdlRGF0YSIsImNsb3NlUGF0aCIsImRyYXdNYXJrZXIiLCJ4IiwieSIsImRyYXdMaW5lU2VnIiwic3RhcnRQdCIsImVuZFB0IiwiY29sb3IiLCJ3ZWlnaHQiLCJtYXJrZXJDVFgiLCJib3JkZXIiLCJ3b3JrZXJJZHgiLCJ2aXpXb3JrZXIiLCJ1cGRhdGVTY29yZUxpbXMiLCJ1cGRhdGVJbWFnZURhdGEiLCJwdXNoIiwiSW5maW5pdHkiLCJfbWluU2NvcmUiLCJfbWF4U2NvcmUiLCJhcnJheUlkeCIsImoiXSwic291cmNlUm9vdCI6IiJ9