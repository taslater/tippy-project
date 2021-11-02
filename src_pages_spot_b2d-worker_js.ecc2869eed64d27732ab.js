/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/spot/b2d-worker.js":
/*!**************************************!*\
  !*** ./src/pages/spot/b2d-worker.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var box2d_wasm_dist_es_Box2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! box2d-wasm/dist/es/Box2D */ "./node_modules/box2d-wasm/dist/es/Box2D.js");
/* harmony import */ var _spot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spot.js */ "./src/pages/spot/spot.js");
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.js */ "./src/pages/spot/globals.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var creaturesPerWorker,
    // step,
population,
    world,
    b2,
    simpleScore = false;

onmessage = function onmessage(e) {
  var _e$data = _slicedToArray(e.data, 2),
      info = _e$data[0],
      msg = _e$data[1];

  if (info == "start") {
    init();
  } else if (info == "solutions") {
    population.setWts(msg);
    main();
  } else if (info == "simpleScore") {
    simpleScore = msg;
    console.log("simpleScore", simpleScore);
  } else if (info == "sendHistory") {
    var creatureIdx = msg["creatureIdx"],
        rank = msg["rank"];
    postMessage(["drawHistory", {
      history: population.spots[creatureIdx].drawHistory,
      rank: rank
    }]);
  }
};

function init() {
  console.log("init");
  (0,box2d_wasm_dist_es_Box2D__WEBPACK_IMPORTED_MODULE_0__["default"])().then(function (b2D) {
    b2 = b2D; // finished downloading Box2D.wasm

    var gravity = new b2.b2Vec2(0, 9.81);
    world = new b2.b2World(gravity);
    population = new Population([0, _globals_js__WEBPACK_IMPORTED_MODULE_2__.shoulderHMeters], 1, world, b2);
    var ground = world.CreateBody(new b2.b2BodyDef());
    var groundShape = new b2.b2EdgeShape();
    groundShape.SetTwoSided(new b2.b2Vec2(-0.1 * _globals_js__WEBPACK_IMPORTED_MODULE_2__.b2GroundW, _globals_js__WEBPACK_IMPORTED_MODULE_2__.b2GroundH), new b2.b2Vec2(0.9 * _globals_js__WEBPACK_IMPORTED_MODULE_2__.b2GroundW, _globals_js__WEBPACK_IMPORTED_MODULE_2__.b2GroundH));
    var groundFD = new b2.b2FixtureDef();
    groundFD.set_shape(groundShape);
    groundFD.set_friction(0.5);
    groundFD.set_restitution(0.5);
    var groundFixture = b2.castObject(ground.CreateFixture(groundFD), b2.b2Fixture);
    var spot = population.spots[0],
        n_dim = spot.n_dim,
        weightCount = spot.weightCount,
        biasCount = spot.biasCount;
    creaturesPerWorker = getCreaturesPerWorker(n_dim, _globals_js__WEBPACK_IMPORTED_MODULE_2__.popsizeMultiplier);
    postMessage(["initInfo", {
      creaturesPerWorker: creaturesPerWorker,
      n_dim: n_dim,
      weightCount: weightCount,
      biasCount: biasCount
    }]);
    population.addSpots(creaturesPerWorker - 1, b2);
    var contactListener = new b2.JSContactListener();

    contactListener.BeginContact = function (contact) {};

    contactListener.PreSolve = function (contact) {};

    contactListener.PostSolve = function (contact, contactImpulse) {
      contact = b2.wrapPointer(contact, b2.b2Contact);
      var fixtures = [contact.GetFixtureA(), contact.GetFixtureB()];
      var nonGroundFixture = null;

      if (fixtures[0] == groundFixture) {
        nonGroundFixture = fixtures[1];
      } else if (fixtures[1] == groundFixture) {
        nonGroundFixture = fixtures[0];
      }

      var foot = nonGroundFixture.partType == "foot";
      contactImpulse = b2.wrapPointer(contactImpulse, b2.b2ContactImpulse);
      var spot = nonGroundFixture.spot;
      var tangentImpulse = contactImpulse.tangentImpulses,
          normalImpulse = contactImpulse.normalImpulses; // if (normalImpulse < 0) {
      //   console.error("negative impulse")
      //   tangentImpulse *= -1
      //   normalImpulse *= -1
      // }

      if (foot) {
        spot.footNormalImpulses[nonGroundFixture.footID] = normalImpulse;
        spot.footTangentImpulses[nonGroundFixture.footID] = tangentImpulse;
        spot.footTangentImpulseSum += tangentImpulse;
        spot.footNormalImpulseAbsSum += normalImpulse;
      } else {
        spot.nonFootNormalImpulseAbsSum += normalImpulse;
      }
    };

    contactListener.EndContact = function (contact) {};

    world.SetContactListener(contactListener);
  });
}

function main() {
  // step = 0
  population.reset(b2);
  population.update(0);

  for (var i = 1; i < _globals_js__WEBPACK_IMPORTED_MODULE_2__.epLen; i++) {
    world.Step(_globals_js__WEBPACK_IMPORTED_MODULE_2__.ts, 16, 6);
    population.update(i);
  }

  var scoreSolutionInfo = [];

  var _iterator = _createForOfIteratorHelper(population.spots),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var spot = _step.value;
      var scoreInfo = spot.scoreInfo;
      scoreInfo["solution"] = spot.flatWts.slice();
      scoreSolutionInfo.push(scoreInfo);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  postMessage(["scoreSolutionInfo", scoreSolutionInfo]);
}

var Population = /*#__PURE__*/function () {
  function Population(shoulderPos, nSpots, world, b2) {
    _classCallCheck(this, Population);

    this.shoulderPos = shoulderPos.slice();
    this.world = world;
    this.spots = [];

    for (var i = 0; i < nSpots; i++) {
      this.spots.push(new _spot_js__WEBPACK_IMPORTED_MODULE_1__.Spot(this.shoulderPos, world, b2));
    }

    this.n_dim = this.spots[0].n_dim;
  }

  _createClass(Population, [{
    key: "reset",
    value: function reset(b2) {
      var _iterator2 = _createForOfIteratorHelper(this.spots),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var spot = _step2.value;
          spot.reset(b2);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "addSpots",
    value: function addSpots(nSpots, b2) {
      for (var i = 0; i < nSpots; i++) {
        this.spots.push(new _spot_js__WEBPACK_IMPORTED_MODULE_1__.Spot(this.shoulderPos, world, b2));
      }
    }
  }, {
    key: "setWts",
    value: function setWts(flatWts) {
      var flatWtsIdx = 0;

      for (var i = 0; i < this.spots.length; i++) {
        this.spots[i].setWts(flatWts.slice(flatWtsIdx, flatWtsIdx + this.n_dim));
        flatWtsIdx += this.n_dim;
      }
    }
  }, {
    key: "update",
    value: function update(step) {
      // (chassis x,y + chassis angle + 4 joint angles) * popLen + 1 step count
      // const msg = new Float32Array(7 * creaturesPerWorker + 1)
      for (var i = 0; i < creaturesPerWorker; i++) {
        var spot = this.spots[i];
        spot.update(step); // const positions = spot.drawInfo
        // for (let j = 0; j < positions.length; j++) {
        //   msg[i * positions.length + j] = positions[j]
        // }
      } // msg[msg.length - 1] = step
      // step++
      // postMessage(["positions", msg])

    }
  }]);

  return Population;
}();

function getCreaturesPerWorker(n_dim, multiplier) {
  return Math.ceil((4 + Math.floor(3 * Math.log(n_dim))) * (multiplier / _globals_js__WEBPACK_IMPORTED_MODULE_2__.nWorkers)); // (eq. 48)
}

/***/ }),

/***/ "./src/pages/spot/spot.js":
/*!********************************!*\
  !*** ./src/pages/spot/spot.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spot": () => (/* binding */ Spot)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.js */ "./src/pages/spot/globals.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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


var JOINT_SPEED_INIT = Infinity;
var Spot = /*#__PURE__*/function () {
  function Spot(shoulderPos, world, b2) {
    _classCallCheck(this, Spot);

    this.shoulderInitPt = shoulderPos.slice();
    this.elbowInitPt = [shoulderPos[0] - _globals_js__WEBPACK_IMPORTED_MODULE_0__.kneePt[0], shoulderPos[1] - _globals_js__WEBPACK_IMPORTED_MODULE_0__.kneePt[1]];
    this.hipInitPt = [shoulderPos[0] - _globals_js__WEBPACK_IMPORTED_MODULE_0__.hipPt[0], shoulderPos[1] - _globals_js__WEBPACK_IMPORTED_MODULE_0__.hipPt[1]];
    this.kneeInitPt = [this.hipInitPt[0] - _globals_js__WEBPACK_IMPORTED_MODULE_0__.kneePt[0], this.hipInitPt[1] - _globals_js__WEBPACK_IMPORTED_MODULE_0__.kneePt[1]]; // this.footFixtures = []
    // this.fragileFixtures = []
    // const [chassisBody, chassisFixture] = this.createPolygonBody(

    this.chassisBody = this.createPolygonBody(this.shoulderInitPt, _globals_js__WEBPACK_IMPORTED_MODULE_0__.chassisPts, world, b2, 1); // this.chassisBody = chassisBody
    // this.chassisFixture = chassisFixture

    this.upperForelegBody = this.createPolygonBody(this.shoulderInitPt, _globals_js__WEBPACK_IMPORTED_MODULE_0__.upperLegPts, world, b2, 2);
    this.upperHindlegBody = this.createPolygonBody(this.hipInitPt, _globals_js__WEBPACK_IMPORTED_MODULE_0__.upperLegPts, world, b2, 2);
    this.lowerForelegBody = this.createPolygonBody(this.elbowInitPt, _globals_js__WEBPACK_IMPORTED_MODULE_0__.lowerLegPts, world, b2, 2);
    this.addFoot(this.lowerForelegBody, b2, 0);
    this.lowerHindlegBody = this.createPolygonBody(this.kneeInitPt, _globals_js__WEBPACK_IMPORTED_MODULE_0__.lowerLegPts, world, b2, 2);
    this.addFoot(this.lowerHindlegBody, b2, 1);
    this.joints = []; // shoulder

    this.addJoint(this.chassisBody, this.upperForelegBody, this.shoulderInitPt, _globals_js__WEBPACK_IMPORTED_MODULE_0__.upperLegLimits, _globals_js__WEBPACK_IMPORTED_MODULE_0__.upperLegMaxTorque, world, b2); // hip

    this.addJoint(this.chassisBody, this.upperHindlegBody, this.hipInitPt, _globals_js__WEBPACK_IMPORTED_MODULE_0__.upperLegLimits, _globals_js__WEBPACK_IMPORTED_MODULE_0__.upperLegMaxTorque, world, b2); // elbow

    this.addJoint(this.upperForelegBody, this.lowerForelegBody, this.elbowInitPt, _globals_js__WEBPACK_IMPORTED_MODULE_0__.lowerLegLimits, _globals_js__WEBPACK_IMPORTED_MODULE_0__.lowerLegMaxTorque, world, b2); // knee

    this.addJoint(this.upperHindlegBody, this.lowerHindlegBody, this.kneeInitPt, _globals_js__WEBPACK_IMPORTED_MODULE_0__.lowerLegLimits, _globals_js__WEBPACK_IMPORTED_MODULE_0__.lowerLegMaxTorque, world, b2);
    this.prevXVel = 0;
    this.prevYVel = 0;
    this.prevAngVel = 0;
    this.chassisVelX = 0;
    this.xMax = 0;
    this.prevXVels = new Float32Array(_globals_js__WEBPACK_IMPORTED_MODULE_0__.rollingWindow);
    this.rollingXVelMax = 0;
    this.motorSpeeds = new Float32Array(4).fill(0); // this.motorSpeedsPrev = new Float32Array(4).fill(0)

    this.motorSpeedSums = new Float32Array(4).fill(0);
    this.clippedOutputSqSums = new Float32Array(4).fill(0);
    this.clippedSpeedSqSums = new Float32Array(4).fill(0);
    this.jointSpeedMins = new Float32Array(4).fill(JOINT_SPEED_INIT);
    this.jointSpeedMaxs = new Float32Array(4).fill(-JOINT_SPEED_INIT);
    this.currentJointSpeeds = new Float32Array(4).fill(0);
    this.prevJointSpeeds = new Float32Array(4 * _globals_js__WEBPACK_IMPORTED_MODULE_0__.rollingWindow).fill(0);
    this.rollingJointSpeeds = new Float32Array(4).fill(0);
    this.prevRollingJointSpeeds = new Float32Array(4).fill(0);
    this.rollingJointSpeedAbsSums = new Float32Array(4).fill(0);
    this.rollingJointSpeedSqSums = new Float32Array(4).fill(0);
    this.rollingJointSpeedAbsDiffSums = new Float32Array(4).fill(0);
    this.rollingJointSpeedSqDiffSums = new Float32Array(4).fill(0);
    this.jointSpeedSqDiffs = new Float32Array(4).fill(0);
    this.jointSpeedSqSums = new Float32Array(4).fill(0);
    this.jointReactionTorqueSqSums = new Float32Array(4).fill(0);
    this.jointReactionForceXSqSums = new Float32Array(4).fill(0);
    this.jointReactionForceYSqSums = new Float32Array(4).fill(0);
    this.jointMotorSpeedDiffSqSums = new Float32Array(4).fill(0);
    this.footNormalImpulses = new Float32Array(2).fill(0);
    this.footTangentImpulses = new Float32Array(2).fill(0); // this.motorSpeedsSqDistSum = 0

    this.jointAngleHistograms = [];
    this.jointAngleMins = new Float32Array(4);
    this.jointAngleBinWidths = new Float32Array(4);

    for (var i = 0; i < 4; i++) {
      this.jointAngleHistograms[i] = new Uint16Array(_globals_js__WEBPACK_IMPORTED_MODULE_0__.nJointAngleBins);
      var joint = this.joints[i],
          angleMin = joint.GetLowerLimit(),
          angleMax = joint.GetUpperLimit(),
          binWidth = (angleMax - angleMin) / _globals_js__WEBPACK_IMPORTED_MODULE_0__.nJointAngleBins;
      this.jointAngleMins[i] = angleMin;
      this.jointAngleBinWidths[i] = binWidth;
    }

    this.inputDim = this.getInputs().length;
    this.shapes = [this.inputDim, 16, 8, 4]; // this.n_dim = 0
    // for (let i = 0; i < this.shapes.length - 1; i++) {
    //   this.n_dim += (this.shapes[i] + 1) * this.shapes[i + 1]
    // }
    // this.weightCount = 0
    // for (let i = 0; i < this.shapes.length - 1; i++) {
    //   const n = this.shapes[i],
    //     m = this.shapes[i + 1]
    //   this.weightCount += n*m
    // }
    // this.biasCount = 0
    // for (let i = 0; i < this.shapes.length - 1; i++) {
    //   const n = 1,
    //     m = this.shapes[i + 1]
    //   this.biasCount += n*m
    // }

    this.n_dim = 0;
    this.weightCount = 0;
    this.biasCount = 0;

    for (var _i = 0; _i < this.shapes.length - 1; _i++) {
      var n = this.shapes[_i],
          m = this.shapes[_i + 1];
      this.n_dim += (n + 1) * m;
      this.weightCount += n * m;
      this.biasCount += m;
    } // this.setWts(undefined)
    // initialize drawInfo


    this.chassisPos = shoulderPos.slice();
    this.chassisAngle = 0;
    this.shoulderAngle = 0;
    this.hipAngle = 0;
    this.elbowAngle = 0;
    this.kneeAngle = 0;
    this.drawHistory = new Float32Array(_globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen * this.drawInfo.length);
    this.scoreKeys = ["xMax", "angVelSqSum", "angVelAbsSum", // "bumpSum",
    "chassisAngleErr", "chassisAngleSqErr", // "histogramScores",
    "motorSpeedSqSum", "motorSpeedDiffSqSum", "ySqDiffSum", "yVelSqSum", "motorSpeedsSqDistSum", "xVelDiffSqSum", "yVelDiffSqSum", "angVelDiffAbsSum", "angVelDiffSqSum", "rollingXVelMax", "chassisVelXSqErrSum", "rollingVelXSqErrSum", "footTangentImpulseSum", "footNormalImpulseAbsSum", "nonFootNormalImpulseAbsSum"];
    this.reset(b2);
  }

  _createClass(Spot, [{
    key: "drawInfo",
    get: function get() {
      return Float32Array.from([this.chassisPos[0], this.chassisPos[1], this.chassisAngle, this.shoulderAngle, this.hipAngle, this.elbowAngle, this.kneeAngle]);
    }
  }, {
    key: "createPolygonBody",
    value: function createPolygonBody(pos, pts, world, b2, density) {
      var vertices = [];

      for (var i = 0; i < pts.length; i += 2) {
        vertices.push(new b2.b2Vec2(-pts[i], -pts[i + 1]));
      }

      var bd = new b2.b2BodyDef();
      bd.set_type(b2.b2_dynamicBody);
      bd.set_position(_construct(b2.b2Vec2, _toConsumableArray(pos)));
      bd.set_linearDamping(0.1);
      bd.set_angularDamping(0.1);
      var body = world.CreateBody(bd);
      var shape = b2CreatePolygonShape(vertices, b2);
      var fd = new b2.b2FixtureDef();
      var filter = fd.get_filter();
      filter.set_categoryBits(0x0002);
      filter.set_maskBits(0x0001);
      fd.set_filter(filter);
      fd.set_density(density);
      fd.set_shape(shape);
      fd.set_friction(0.3);
      fd.set_restitution(0.1); // if (returnFixture) {

      var fixture = b2.castObject(body.CreateFixture(fd), b2.b2Fixture);
      fixture.partType = "poly"; // fixture.bumpPenalty = bumpPenalty

      fixture.spot = this; // if (fragileFixture) {
      //   this.fragileFixtures.push(fixture)
      // }
      //   return [body, fixture]
      // } else {
      // body.CreateFixture(fd)

      return body; // }
    }
  }, {
    key: "addFoot",
    value: function addFoot(body, b2, footID) {
      var shape = new b2.b2CircleShape();
      shape.set_m_radius(_globals_js__WEBPACK_IMPORTED_MODULE_0__.footRadius);
      shape.set_m_p(_construct(b2.b2Vec2, _toConsumableArray(_globals_js__WEBPACK_IMPORTED_MODULE_0__.anklePt)));
      var fd = new b2.b2FixtureDef();
      fd.set_shape(shape);
      fd.set_density(1.0);
      fd.set_friction(0.5);
      fd.set_restitution(0.1);
      var filter = fd.get_filter();
      filter.set_categoryBits(0x0002);
      filter.set_maskBits(0x0001);
      fd.set_filter(filter); // body.CreateFixture(fd)

      var fixture = b2.castObject(body.CreateFixture(fd), b2.b2Fixture);
      fixture.partType = "foot";
      fixture.footID = footID; // fixture.bumpPenalty = 0.1

      fixture.spot = this;
    }
  }, {
    key: "addJoint",
    value: function addJoint(body0, body1, pos, limits, maxTorque, world, b2) {
      var jd = new b2.b2RevoluteJointDef();
      jd.Initialize(body0, body1, _construct(b2.b2Vec2, _toConsumableArray(pos)));

      if (limits != null) {
        jd.set_enableLimit(true);
        jd.set_lowerAngle(limits[0]);
        jd.set_upperAngle(limits[1]);
      }

      if (maxTorque != null) {
        jd.set_enableMotor(true);
        jd.set_maxMotorTorque(maxTorque);
      }

      this.joints.push(b2.castObject(world.CreateJoint(jd), b2.b2RevoluteJoint));
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

      for (var _i2 = 0; _i2 < this.shapes.length - 1; _i2++) {
        var _n = 1,
            _m = this.shapes[_i2 + 1],
            newBias = Float32Array.from(this.flatWts.slice(flatWtIdx, flatWtIdx + _n * _m)); // this.biasCount += newBias.length

        this.biases.push(new Matrix(newBias, _n, _m));
        flatWtIdx += _n * _m;
      }
    }
  }, {
    key: "reset",
    value: function reset(b2) {
      // this.dead = false
      var _iterator = _createForOfIteratorHelper(this.scoreKeys),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          this[key] = 0;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.motorSpeeds.fill(0); // this.motorSpeedsPrev.fill(0)

      this.motorSpeedSums.fill(0);
      this.clippedOutputSqSums.fill(0);
      this.clippedSpeedSqSums.fill(0);
      this.prevJointSpeeds.fill(0);
      this.currentJointSpeeds.fill(0);
      this.rollingJointSpeeds.fill(0);
      this.prevRollingJointSpeeds.fill(0);
      this.rollingJointSpeedAbsSums.fill(0);
      this.rollingJointSpeedSqSums.fill(0);
      this.rollingJointSpeedAbsDiffSums.fill(0);
      this.rollingJointSpeedSqDiffSums.fill(0);
      this.jointSpeedSqDiffs.fill(0);
      this.prevXVels.fill(0);
      this.jointSpeedMins.fill(JOINT_SPEED_INIT);
      this.jointSpeedMaxs.fill(-JOINT_SPEED_INIT);
      this.jointSpeedSqSums.fill(0);
      this.jointMotorSpeedDiffSqSums.fill(0);
      this.jointReactionTorqueSqSums.fill(0);
      this.jointReactionForceXSqSums.fill(0);
      this.jointReactionForceYSqSums.fill(0);
      this.prevXVel = 0;
      this.prevYVel = 0;
      this.prevAngVel = 0;
      this.footNormalImpulses.fill(0);
      this.footTangentImpulses.fill(0); // this.ySqDiffSum = 0
      // this.yVelSqSum = 0
      // this.chassisAngleErr = 0
      // this.chassisAngleSqErr = 0
      // this.angVelSqSum = 0
      // this.motorSpeedSqSum = 0
      // this.motorSpeedDiffSqSum = 0

      for (var i = 0; i < 4; i++) {
        this.jointAngleHistograms[i].fill(0);
      }

      for (var _i3 = 0, _arr = [[this.chassisBody, this.shoulderInitPt], [this.upperForelegBody, this.shoulderInitPt], [this.lowerForelegBody, this.elbowInitPt], [this.upperHindlegBody, this.hipInitPt], [this.lowerHindlegBody, this.kneeInitPt]]; _i3 < _arr.length; _i3++) {
        var _arr$_i = _slicedToArray(_arr[_i3], 2),
            body = _arr$_i[0],
            pos = _arr$_i[1];

        // sets position and angle (0)
        body.SetTransform(_construct(b2.b2Vec2, _toConsumableArray(pos)), 0);
        body.SetLinearVelocity(new b2.b2Vec2(0, 0));
        body.SetAngularVelocity(0);
        body.SetAwake(1);
        body.SetEnabled(1);
      } // this.bumpPenalty = 0
      // this.bumpSum = 0

    }
  }, {
    key: "sleep",
    value: function sleep() {
      for (var _i4 = 0, _arr2 = [this.chassisBody, this.upperForelegBody, this.lowerForelegBody, this.upperHindlegBody, this.lowerHindlegBody]; _i4 < _arr2.length; _i4++) {
        var body = _arr2[_i4];
        body.SetAwake(0); // body.SetEnabled(0)
      }
    }
  }, {
    key: "updateJointAngleHistogram",
    value: function updateJointAngleHistogram(angle, hist, angleMin, binWidth) {
      // this.jointAngleHistograms
      // this.jointAngleMins
      // this.jointAngleBinWidths
      var binIdx = Math.floor((angle - angleMin) / binWidth);
      binIdx = Math.max(Math.min(binIdx, _globals_js__WEBPACK_IMPORTED_MODULE_0__.nJointAngleBins - 1), 0);
      hist[binIdx]++;
    }
  }, {
    key: "getInputs",
    value: function getInputs() {
      var inputs;

      if (this.inputDim != null) {
        inputs = new Float32Array(this.inputDim);
      } else {
        inputs = [];
      }

      var body = this.chassisBody;
      var i = 0;
      var bodyPos = body.GetPosition();
      var _ref = [bodyPos.x, bodyPos.y],
          x = _ref[0],
          y = _ref[1];

      if (x > this.xMax) {
        this.xMax = x;
      }

      this.chassisPos = [x, y];
      var yDiff = y - _globals_js__WEBPACK_IMPORTED_MODULE_0__.shoulderHMeters;
      this.ySqDiffSum += yDiff * yDiff;
      inputs[i] = y - _globals_js__WEBPACK_IMPORTED_MODULE_0__.shoulderHMeters;
      i++;
      var chassisAngle = body.GetAngle();
      this.chassisAngle = chassisAngle;
      this.chassisAngleErr += chassisAngle;
      this.chassisAngleSqErr += chassisAngle * chassisAngle;
      inputs[i] = chassisAngle;
      i++; // inputs[i] = Math.cos(chassisAngle)
      // i++
      // inputs[i] = Math.sin(chassisAngle)
      // i++

      var chassisVel = body.GetLinearVelocity(),
          chassisVelX = chassisVel.x,
          chassisVelY = chassisVel.y;
      inputs[i] = chassisVelX;
      i++;
      inputs[i] = chassisVelY;
      i++;
      inputs[i] = chassisVelX - this.prevXVel;
      i++;
      inputs[i] = chassisVelY - this.prevYVel;
      i++;

      for (var windowIdx = 0; windowIdx < _globals_js__WEBPACK_IMPORTED_MODULE_0__.rollingWindow - 1; windowIdx++) {
        this.prevXVels[windowIdx] = this.prevXVels[windowIdx + 1];
      }

      this.prevXVels[_globals_js__WEBPACK_IMPORTED_MODULE_0__.rollingWindow - 1] = chassisVelX;
      var rollingVelX = 0;

      for (var _windowIdx = 0; _windowIdx < _globals_js__WEBPACK_IMPORTED_MODULE_0__.rollingWindow; _windowIdx++) {
        rollingVelX += this.prevXVels[_windowIdx];
      }

      rollingVelX /= _globals_js__WEBPACK_IMPORTED_MODULE_0__.rollingWindow;

      if (this.rollingXVelMax < rollingVelX) {
        this.rollingXVelMax = rollingVelX;
      }

      var velXErr = chassisVelX - _globals_js__WEBPACK_IMPORTED_MODULE_0__.targetVelX,
          rollingVelXErr = rollingVelX - _globals_js__WEBPACK_IMPORTED_MODULE_0__.targetVelX;
      this.chassisVelXSqErrSum += velXErr * velXErr;
      this.rollingVelXSqErrSum += rollingVelXErr * rollingVelXErr;
      this.yVelSqSum += chassisVelY * chassisVelY;
      var xVelDiff = chassisVelX - this.prevXVel,
          yVelDiff = chassisVelY - this.prevYVel;
      this.xVelDiffSqSum += xVelDiff * xVelDiff;
      this.yVelDiffSqSum += yVelDiff * yVelDiff;
      this.prevXVel = chassisVelX;
      this.prevYVel = chassisVelY;
      var angVel = body.GetAngularVelocity(),
          angVelDiff = angVel - this.prevAngVel;
      inputs[i] = angVel;
      i++;
      inputs[i] = angVelDiff;
      i++;
      this.angVelDiffSqSum += angVelDiff * angVelDiff;
      this.angVelDiffAbsSum += Math.abs(angVelDiff);
      this.prevAngVel = angVel;
      this.angVelSqSum += angVel * angVel;
      this.angVelAbsSum += Math.abs(angVel);

      for (var footIdx = 0; footIdx < 2; footIdx++) {
        var footNormalImpulse = this.footNormalImpulses[footIdx];
        inputs[i] = footNormalImpulse;
        i++;
        var footTangentImpulse = this.footTangentImpulses[footIdx];
        inputs[i] = footTangentImpulse;
        i++;
      }

      var jointAngleKeys = ["shoulderAngle", "hipAngle", "elbowAngle", "kneeAngle"];

      for (var jointIdx = 0; jointIdx < 4; jointIdx++) {
        var joint = this.joints[jointIdx];
        var jointAngle = joint.GetJointAngle();
        this.updateJointAngleHistogram(jointAngle, this.jointAngleHistograms[jointIdx], this.jointAngleMins[jointIdx], this.jointAngleBinWidths[jointIdx]);
        this[jointAngleKeys[jointIdx]] = jointAngle;
        inputs[i] = jointAngle;
        i++;
        var jointSpeed = joint.GetJointSpeed(),
            jointWindowIdx = jointIdx * _globals_js__WEBPACK_IMPORTED_MODULE_0__.rollingWindow;
        this.currentJointSpeeds[jointIdx] = jointSpeed; // update rolling joint speed record

        for (var _windowIdx2 = 0; _windowIdx2 < _globals_js__WEBPACK_IMPORTED_MODULE_0__.rollingWindow - 1; _windowIdx2++) {
          this.prevJointSpeeds[jointWindowIdx + _windowIdx2] = this.prevJointSpeeds[jointWindowIdx + _windowIdx2 + 1];
        }

        this.prevJointSpeeds[jointWindowIdx + _globals_js__WEBPACK_IMPORTED_MODULE_0__.rollingWindow - 1] = jointSpeed;
        this.rollingJointSpeeds[jointIdx] = 0;

        for (var _windowIdx3 = 0; _windowIdx3 < _globals_js__WEBPACK_IMPORTED_MODULE_0__.rollingWindow; _windowIdx3++) {
          this.rollingJointSpeeds[jointIdx] += this.prevJointSpeeds[jointWindowIdx + _windowIdx3];
        }

        this.rollingJointSpeeds[jointIdx] /= _globals_js__WEBPACK_IMPORTED_MODULE_0__.rollingWindow;
        this.rollingJointSpeedAbsSums[jointIdx] += Math.abs(this.rollingJointSpeeds[jointIdx]);
        this.rollingJointSpeedSqSums[jointIdx] += this.rollingJointSpeeds[jointIdx] * this.rollingJointSpeeds[jointIdx];
        var rollingJointSpeedDiff = this.rollingJointSpeeds[jointIdx] - this.prevRollingJointSpeeds[jointIdx];
        this.rollingJointSpeedAbsDiffSums[jointIdx] += Math.abs(rollingJointSpeedDiff);
        this.rollingJointSpeedSqDiffSums[jointIdx] += rollingJointSpeedDiff * rollingJointSpeedDiff;
        this.prevRollingJointSpeeds[jointIdx] = this.rollingJointSpeeds[jointIdx];
        var jointSpeedDiff = jointSpeed - this.prevJointSpeeds[jointWindowIdx + _globals_js__WEBPACK_IMPORTED_MODULE_0__.rollingWindow - 2];
        inputs[i] = jointSpeed;
        i++;
        inputs[i] = jointSpeedDiff;
        i++;
        this.jointSpeedSqDiffs[jointIdx] += jointSpeedDiff * jointSpeedDiff;

        if (this.jointSpeedMins[jointIdx] > jointSpeed) {
          this.jointSpeedMins[jointIdx] = jointSpeed;
        }

        if (this.jointSpeedMaxs[jointIdx] < jointSpeed) {
          this.jointSpeedMaxs[jointIdx] = jointSpeed;
        }

        this.jointSpeedSqSums[jointIdx] += jointSpeed * jointSpeed; // inputs[i] = this.motorSpeeds[jointIdx] / maxSpeed

        inputs[i] = this.motorSpeeds[jointIdx];
        i++;
        var motorSpeed = joint.GetMotorSpeed();
        var jointMotorSpeedDiff = jointSpeed - motorSpeed;
        this.jointMotorSpeedDiffSqSums[jointIdx] += jointMotorSpeedDiff * jointMotorSpeedDiff;
        var reactionTorque = joint.GetReactionTorque(60);
        this.jointReactionTorqueSqSums[jointIdx] += reactionTorque * reactionTorque;
        var reactionForces = joint.GetReactionForce(60),
            reactionForceX = reactionForces.x,
            reactionForceY = reactionForces.y;
        this.jointReactionForceXSqSums[jointIdx] += reactionForceX * reactionForceX;
        this.jointReactionForceYSqSums[jointIdx] += reactionForceY * reactionForceY;
        inputs[i] = reactionForceX;
        i++;
        inputs[i] = reactionForceY;
        i++;
        inputs[i] = reactionTorque;
        i++;
      }

      return inputs;
    }
  }, {
    key: "getMotorSpeeds",
    value: function getMotorSpeeds() {
      var inputsRaw = this.getInputs(),
          inputs = new Matrix(inputsRaw, 1, inputsRaw.length);
      var speedDiffs = inputs // const speeds = inputs
      .mul(this.weights[0]).add(this.biases[0]) // .relu()
      // .leakyRelu()
      .leakyElu().mul(this.weights[1]).add(this.biases[1]) // .relu()
      // .leakyRelu()
      .leakyElu().mul(this.weights[2]).add(this.biases[2]).data; // for (let i = 0; i < speedDiffs.length; i++) {
      //   if (speedDiffs[i] > maxSpeedDiff) {
      //     const clippedDiff = maxSpeedDiff - speedDiffs[i]
      //     this.clippedOutputSqSums[i] += clippedDiff * clippedDiff
      //     speedDiffs[i] = maxSpeedDiff
      //   } else if (speedDiffs[i] < -maxSpeedDiff) {
      //     const clippedDiff = -maxSpeedDiff - speedDiffs[i]
      //     this.clippedOutputSqSums[i] += clippedDiff * clippedDiff
      //     speedDiffs[i] = -maxSpeedDiff
      //   }
      // }

      for (var i = 0; i < speedDiffs.length; i++) {
        speedDiffs[i] = _globals_js__WEBPACK_IMPORTED_MODULE_0__.maxSpeedDiff * Math.tanh(speedDiffs[i]);
      } // for (let i = 0; i < speeds.length; i++) {
      //   speeds[i] = maxSpeed * Math.tanh(speeds[i])
      // }


      return speedDiffs;
    }
  }, {
    key: "update",
    value: function update(step) {
      var speedDiffs = this.getMotorSpeeds(); // const speeds = this.getMotorSpeeds()

      for (var i = 0; i < 4; i++) {
        // let speed = this.currentJointSpeeds[i] + speedDiffs[i]
        var speed = this.motorSpeeds[i] + speedDiffs[i];

        if (speed > _globals_js__WEBPACK_IMPORTED_MODULE_0__.maxSpeed) {
          var clippedSpeed = _globals_js__WEBPACK_IMPORTED_MODULE_0__.maxSpeed - speed;
          this.clippedSpeedSqSums[i] += clippedSpeed * clippedSpeed;
          speed = _globals_js__WEBPACK_IMPORTED_MODULE_0__.maxSpeed;
        } else if (speed < -_globals_js__WEBPACK_IMPORTED_MODULE_0__.maxSpeed) {
          var _clippedSpeed = -_globals_js__WEBPACK_IMPORTED_MODULE_0__.maxSpeed - speed;

          this.clippedSpeedSqSums[i] += _clippedSpeed * _clippedSpeed;
          speed = -_globals_js__WEBPACK_IMPORTED_MODULE_0__.maxSpeed;
        } // const speed = speeds[i]


        this.motorSpeeds[i] = speed;
        this.joints[i].SetMotorSpeed(speed);
        this.motorSpeedSums[i] += speed;
        this.motorSpeedSqSum += speed * speed; // const speedDiffClipped = this.motorSpeeds[i] - this.motorSpeedsPrev[i]
        // this.motorSpeedDiffSqSum += speedDiffClipped * speedDiffClipped
        // this.motorSpeedsPrev[i] = this.motorSpeeds[i]
      } // this.motorSpeedsSqDistSum += this.motorSpeedsSqDist


      var drawInfo = this.drawInfo.slice();

      for (var _i5 = 0; _i5 < drawInfo.length; _i5++) {
        this.drawHistory[step * drawInfo.length + _i5] = drawInfo[_i5];
      }

      this.footNormalImpulses.fill(0);
      this.footTangentImpulses.fill(0);
    } // get motorSpeedsSqDist() {
    //   const sortedSpeeds = this.motorSpeeds.slice()
    //   sortedSpeeds.sort((a, b) => a - b)
    //   let sqDist = 0
    //   for (let i = 0; i < 3; i++) {
    //     const dist = sortedSpeeds[i] - sortedSpeeds[i + 1]
    //     sqDist += dist * dist
    //   }
    //   return sqDist
    // }

  }, {
    key: "histogramScore",
    get: function get() {
      var histogramScores = this.histogramScores.slice();
      var totalSqErr = 0;

      for (var i = 0; i < 4; i++) {
        var jointSqErr = histogramScores[i];
        totalSqErr += jointSqErr * jointSqErr;
      }

      return totalSqErr / 4;
    }
  }, {
    key: "histogramScores",
    get: function get() {
      var result = new Float32Array(4);

      for (var i = 0; i < 4; i++) {
        var hist = this.jointAngleHistograms[i];
        var jointSqErr = 0;

        for (var j = 0; j < _globals_js__WEBPACK_IMPORTED_MODULE_0__.nJointAngleBins; j++) {
          var binCount = hist[j],
              binCountErr = (binCount - _globals_js__WEBPACK_IMPORTED_MODULE_0__.uniformDistBinCount) / (_globals_js__WEBPACK_IMPORTED_MODULE_0__.epLen - _globals_js__WEBPACK_IMPORTED_MODULE_0__.uniformDistBinCount);
          jointSqErr += binCountErr * binCountErr;
        }

        result[i] = jointSqErr;
      }

      return result;
    }
  }, {
    key: "scoreInfo",
    get: function get() {
      var scoreInfo = {
        finalX: this.chassisPos[0]
      }; // "angVelSqSum",
      // "bumpSum",
      // "chassisAngleErr",
      // "chassisAngleSqErr",
      // "histogramScore",
      // "motorSpeedSqSum",
      // "motorSpeedDiffSqSum",
      // "ySqDiffSum",
      // "yVelSqSum",

      var _iterator2 = _createForOfIteratorHelper(this.scoreKeys),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var key = _step2.value;
          scoreInfo[key] = this[key];
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      scoreInfo["weightNorms"] = vectorNorms(this.weights);
      scoreInfo["biasNorms"] = vectorNorms(this.biases);
      scoreInfo["histogramScores"] = this.histogramScores;
      scoreInfo["motorSpeedSums"] = this.motorSpeedSums;
      scoreInfo["jointSpeedMins"] = this.jointSpeedMins;
      scoreInfo["jointSpeedMaxs"] = this.jointSpeedMaxs;
      scoreInfo["jointSpeedSqSums"] = this.jointSpeedSqSums;
      scoreInfo["jointMotorSpeedDiffSqSums"] = this.jointMotorSpeedDiffSqSums;
      scoreInfo["jointReactionTorqueSqSums"] = this.jointReactionTorqueSqSums;
      scoreInfo["jointReactionForceXSqSums"] = this.jointReactionForceXSqSums;
      scoreInfo["jointReactionForceYSqSums"] = this.jointReactionForceYSqSums;
      scoreInfo["rollingJointSpeedAbsSums"] = this.rollingJointSpeedAbsSums;
      scoreInfo["rollingJointSpeedSqSums"] = this.rollingJointSpeedSqSums;
      scoreInfo["rollingJointSpeedAbsDiffSums"] = this.rollingJointSpeedAbsDiffSums;
      scoreInfo["rollingJointSpeedSqDiffSums"] = this.rollingJointSpeedSqDiffSums;
      scoreInfo["jointSpeedSqDiffs"] = this.jointSpeedSqDiffs;
      scoreInfo["clippedOutputSqSums"] = this.clippedOutputSqSums;
      scoreInfo["clippedSpeedSqSums"] = this.clippedSpeedSqSums;
      return scoreInfo;
    }
  }]);

  return Spot;
}();

function b2CreatePolygonShape(vertices, b2) {
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
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    result[i] /= vector.length;
  }

  return result;
}

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
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_box2d-wasm_dist_es_Box2D_js","src_pages_spot_globals_js"], () => (__webpack_require__("./src/pages/spot/b2d-worker.js")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"vendors-node_modules_box2d-wasm_dist_es_Box2D_js":"11650d63e1797febb683","src_pages_spot_globals_js":"2ca3cc9aa50115055787"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
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
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = self.location + "";
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"src_pages_spot_b2d-worker_js": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktippy_project_website"] = self["webpackChunktippy_project_website"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return Promise.all([
/******/ 				__webpack_require__.e("vendors-node_modules_box2d-wasm_dist_es_Box2D_js"),
/******/ 				__webpack_require__.e("src_pages_spot_globals_js")
/******/ 			]).then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX3Nwb3RfYjJkLXdvcmtlcl9qcy5lY2MyODY5ZWVkNjRkMjc3MzJhYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBVUEsSUFBSVMsa0JBQUo7QUFBQSxJQUNFO0FBQ0FDLFVBRkY7QUFBQSxJQUdFQyxLQUhGO0FBQUEsSUFJRUMsRUFKRjtBQUFBLElBS0VDLFdBQVcsR0FBRyxLQUxoQjs7QUFPQUMsU0FBUyxHQUFHLG1CQUFDQyxDQUFELEVBQU87QUFDakIsK0JBQW9CQSxDQUFDLENBQUNDLElBQXRCO0FBQUEsTUFBT0MsSUFBUDtBQUFBLE1BQWFDLEdBQWI7O0FBQ0EsTUFBSUQsSUFBSSxJQUFJLE9BQVosRUFBcUI7QUFDbkJFLElBQUFBLElBQUk7QUFDTCxHQUZELE1BRU8sSUFBSUYsSUFBSSxJQUFJLFdBQVosRUFBeUI7QUFDOUJQLElBQUFBLFVBQVUsQ0FBQ1UsTUFBWCxDQUFrQkYsR0FBbEI7QUFDQUcsSUFBQUEsSUFBSTtBQUNMLEdBSE0sTUFHQSxJQUFJSixJQUFJLElBQUksYUFBWixFQUEyQjtBQUNoQ0osSUFBQUEsV0FBVyxHQUFHSyxHQUFkO0FBQ0FJLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJWLFdBQTNCO0FBQ0QsR0FITSxNQUdBLElBQUlJLElBQUksSUFBSSxhQUFaLEVBQTJCO0FBQ2hDLFFBQU1PLFdBQVcsR0FBR04sR0FBRyxDQUFDLGFBQUQsQ0FBdkI7QUFBQSxRQUNFTyxJQUFJLEdBQUdQLEdBQUcsQ0FBQyxNQUFELENBRFo7QUFFQVEsSUFBQUEsV0FBVyxDQUFDLENBQ1YsYUFEVSxFQUVWO0FBQUVDLE1BQUFBLE9BQU8sRUFBRWpCLFVBQVUsQ0FBQ2tCLEtBQVgsQ0FBaUJKLFdBQWpCLEVBQThCSyxXQUF6QztBQUFzREosTUFBQUEsSUFBSSxFQUFKQTtBQUF0RCxLQUZVLENBQUQsQ0FBWDtBQUlEO0FBQ0YsQ0FsQkQ7O0FB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Q0E7V0FDQSxFQUFFO1dBQ0Y7Ozs7O1dDUkE7V0FDQTtXQUNBO1dBQ0EsOEJBQThCLDZIQUE2SDtXQUMzSjs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsYUFBYTtXQUNiO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7Ozs7V0NwQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFTkE7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS8uL3NyYy9wYWdlcy9zcG90L2IyZC13b3JrZXIuanMiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlLy4vc3JjL3BhZ2VzL3Nwb3Qvc3BvdC5qcyIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvaWdub3JlZHwvVXNlcnMvdG9tL0Rlc2t0b3AvY29kZV90ZXN0cy93ZWJwYWNrLXRlc3RzL3dlYnBhY2stZ2gtcGFnZXMtdGVzdC9ub2RlX21vZHVsZXMvYm94MmQtd2FzbS9kaXN0L2VzfGZzIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS9pZ25vcmVkfC9Vc2Vycy90b20vRGVza3RvcC9jb2RlX3Rlc3RzL3dlYnBhY2stdGVzdHMvd2VicGFjay1naC1wYWdlcy10ZXN0L25vZGVfbW9kdWxlcy9ib3gyZC13YXNtL2Rpc3QvZXN8cGF0aCIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2ltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90aXBweS1wcm9qZWN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL3N0YXJ0dXAgY2h1bmsgZGVwZW5kZW5jaWVzIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RpcHB5LXByb2plY3Qtd2Vic2l0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGlwcHktcHJvamVjdC13ZWJzaXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm94MkRGYWN0b3J5IGZyb20gXCJib3gyZC13YXNtL2Rpc3QvZXMvQm94MkRcIlxuaW1wb3J0IHsgU3BvdCB9IGZyb20gXCIuL3Nwb3QuanNcIlxuXG5pbXBvcnQge1xuICBiMkdyb3VuZFcsXG4gIGIyR3JvdW5kSCxcbiAgc2hvdWxkZXJITWV0ZXJzLFxuICBuV29ya2VycyxcbiAgZXBMZW4sXG4gIHBvcHNpemVNdWx0aXBsaWVyLFxuICB0cyxcbn0gZnJvbSBcIi4vZ2xvYmFscy5qc1wiXG5cbmxldCBjcmVhdHVyZXNQZXJXb3JrZXIsXG4gIC8vIHN0ZXAsXG4gIHBvcHVsYXRpb24sXG4gIHdvcmxkLFxuICBiMixcbiAgc2ltcGxlU2NvcmUgPSBmYWxzZVxuXG5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICBjb25zdCBbaW5mbywgbXNnXSA9IGUuZGF0YVxuICBpZiAoaW5mbyA9PSBcInN0YXJ0XCIpIHtcbiAgICBpbml0KClcbiAgfSBlbHNlIGlmIChpbmZvID09IFwic29sdXRpb25zXCIpIHtcbiAgICBwb3B1bGF0aW9uLnNldFd0cyhtc2cpXG4gICAgbWFpbigpXG4gIH0gZWxzZSBpZiAoaW5mbyA9PSBcInNpbXBsZVNjb3JlXCIpIHtcbiAgICBzaW1wbGVTY29yZSA9IG1zZ1xuICAgIGNvbnNvbGUubG9nKFwic2ltcGxlU2NvcmVcIiwgc2ltcGxlU2NvcmUpXG4gIH0gZWxzZSBpZiAoaW5mbyA9PSBcInNlbmRIaXN0b3J5XCIpIHtcbiAgICBjb25zdCBjcmVhdHVyZUlkeCA9IG1zZ1tcImNyZWF0dXJlSWR4XCJdLFxuICAgICAgcmFuayA9IG1zZ1tcInJhbmtcIl1cbiAgICBwb3N0TWVzc2FnZShbXG4gICAgICBcImRyYXdIaXN0b3J5XCIsXG4gICAgICB7IGhpc3Rvcnk6IHBvcHVsYXRpb24uc3BvdHNbY3JlYXR1cmVJZHhdLmRyYXdIaXN0b3J5LCByYW5rIH0sXG4gICAgXSlcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zb2xlLmxvZyhcImluaXRcIilcbiAgQm94MkRGYWN0b3J5KCkudGhlbigoYjJEKSA9PiB7XG4gICAgYjIgPSBiMkRcbiAgICAvLyBmaW5pc2hlZCBkb3dubG9hZGluZyBCb3gyRC53YXNtXG4gICAgY29uc3QgZ3Jhdml0eSA9IG5ldyBiMi5iMlZlYzIoMCwgOS44MSlcbiAgICB3b3JsZCA9IG5ldyBiMi5iMldvcmxkKGdyYXZpdHkpXG5cbiAgICBwb3B1bGF0aW9uID0gbmV3IFBvcHVsYXRpb24oWzAsIHNob3VsZGVySE1ldGVyc10sIDEsIHdvcmxkLCBiMilcbiAgICBjb25zdCBncm91bmQgPSB3b3JsZC5DcmVhdGVCb2R5KG5ldyBiMi5iMkJvZHlEZWYoKSlcblxuICAgIGNvbnN0IGdyb3VuZFNoYXBlID0gbmV3IGIyLmIyRWRnZVNoYXBlKClcbiAgICBncm91bmRTaGFwZS5TZXRUd29TaWRlZChcbiAgICAgIG5ldyBiMi5iMlZlYzIoLTAuMSAqIGIyR3JvdW5kVywgYjJHcm91bmRIKSxcbiAgICAgIG5ldyBiMi5iMlZlYzIoMC45ICogYjJHcm91bmRXLCBiMkdyb3VuZEgpXG4gICAgKVxuICAgIGNvbnN0IGdyb3VuZEZEID0gbmV3IGIyLmIyRml4dHVyZURlZigpXG4gICAgZ3JvdW5kRkQuc2V0X3NoYXBlKGdyb3VuZFNoYXBlKVxuICAgIGdyb3VuZEZELnNldF9mcmljdGlvbigwLjUpXG4gICAgZ3JvdW5kRkQuc2V0X3Jlc3RpdHV0aW9uKDAuNSlcbiAgICBjb25zdCBncm91bmRGaXh0dXJlID0gYjIuY2FzdE9iamVjdChcbiAgICAgIGdyb3VuZC5DcmVhdGVGaXh0dXJlKGdyb3VuZEZEKSxcbiAgICAgIGIyLmIyRml4dHVyZVxuICAgIClcblxuICAgIGNvbnN0IHNwb3QgPSBwb3B1bGF0aW9uLnNwb3RzWzBdLFxuICAgICAgbl9kaW0gPSBzcG90Lm5fZGltLFxuICAgICAgd2VpZ2h0Q291bnQgPSBzcG90LndlaWdodENvdW50LFxuICAgICAgYmlhc0NvdW50ID0gc3BvdC5iaWFzQ291bnRcbiAgICBjcmVhdHVyZXNQZXJXb3JrZXIgPSBnZXRDcmVhdHVyZXNQZXJXb3JrZXIobl9kaW0sIHBvcHNpemVNdWx0aXBsaWVyKVxuICAgIHBvc3RNZXNzYWdlKFtcbiAgICAgIFwiaW5pdEluZm9cIixcbiAgICAgIHsgY3JlYXR1cmVzUGVyV29ya2VyLCBuX2RpbSwgd2VpZ2h0Q291bnQsIGJpYXNDb3VudCB9LFxuICAgIF0pXG4gICAgcG9wdWxhdGlvbi5hZGRTcG90cyhjcmVhdHVyZXNQZXJXb3JrZXIgLSAxLCBiMilcblxuICAgIGNvbnN0IGNvbnRhY3RMaXN0ZW5lciA9IG5ldyBiMi5KU0NvbnRhY3RMaXN0ZW5lcigpXG5cbiAgICBjb250YWN0TGlzdGVuZXIuQmVnaW5Db250YWN0ID0gKGNvbnRhY3QpID0+IHt9XG4gICAgY29udGFjdExpc3RlbmVyLlByZVNvbHZlID0gKGNvbnRhY3QpID0+IHt9XG4gICAgY29udGFjdExpc3RlbmVyLlBvc3RTb2x2ZSA9IChjb250YWN0LCBjb250YWN0SW1wdWxzZSkgPT4ge1xuICAgICAgY29udGFjdCA9IGIyLndyYXBQb2ludGVyKGNvbnRhY3QsIGIyLmIyQ29udGFjdClcbiAgICAgIGNvbnN0IGZpeHR1cmVzID0gW2NvbnRhY3QuR2V0Rml4dHVyZUEoKSwgY29udGFjdC5HZXRGaXh0dXJlQigpXVxuICAgICAgbGV0IG5vbkdyb3VuZEZpeHR1cmUgPSBudWxsXG4gICAgICBpZiAoZml4dHVyZXNbMF0gPT0gZ3JvdW5kRml4dHVyZSkge1xuICAgICAgICBub25Hcm91bmRGaXh0dXJlID0gZml4dHVyZXNbMV1cbiAgICAgIH0gZWxzZSBpZiAoZml4dHVyZXNbMV0gPT0gZ3JvdW5kRml4dHVyZSkge1xuICAgICAgICBub25Hcm91bmRGaXh0dXJlID0gZml4dHVyZXNbMF1cbiAgICAgIH1cbiAgICAgIGxldCBmb290ID0gbm9uR3JvdW5kRml4dHVyZS5wYXJ0VHlwZSA9PSBcImZvb3RcIlxuXG4gICAgICBjb250YWN0SW1wdWxzZSA9IGIyLndyYXBQb2ludGVyKGNvbnRhY3RJbXB1bHNlLCBiMi5iMkNvbnRhY3RJbXB1bHNlKVxuICAgICAgY29uc3Qgc3BvdCA9IG5vbkdyb3VuZEZpeHR1cmUuc3BvdFxuICAgICAgbGV0IHRhbmdlbnRJbXB1bHNlID0gY29udGFjdEltcHVsc2UudGFuZ2VudEltcHVsc2VzLFxuICAgICAgICBub3JtYWxJbXB1bHNlID0gY29udGFjdEltcHVsc2Uubm9ybWFsSW1wdWxzZXNcbiAgICAgIC8vIGlmIChub3JtYWxJbXB1bHNlIDwgMCkge1xuICAgICAgLy8gICBjb25zb2xlLmVycm9yKFwibmVnYXRpdmUgaW1wdWxzZVwiKVxuICAgICAgLy8gICB0YW5nZW50SW1wdWxzZSAqPSAtMVxuICAgICAgLy8gICBub3JtYWxJbXB1bHNlICo9IC0xXG4gICAgICAvLyB9XG4gICAgICBpZiAoZm9vdCkge1xuICAgICAgICBzcG90LmZvb3ROb3JtYWxJbXB1bHNlc1tub25Hcm91bmRGaXh0dXJlLmZvb3RJRF0gPSBub3JtYWxJbXB1bHNlXG4gICAgICAgIHNwb3QuZm9vdFRhbmdlbnRJbXB1bHNlc1tub25Hcm91bmRGaXh0dXJlLmZvb3RJRF0gPSB0YW5nZW50SW1wdWxzZVxuICAgICAgICBzcG90LmZvb3RUYW5nZW50SW1wdWxzZVN1bSArPSB0YW5nZW50SW1wdWxzZVxuICAgICAgICBzcG90LmZvb3ROb3JtYWxJbXB1bHNlQWJzU3VtICs9IG5vcm1hbEltcHVsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNwb3Qubm9uRm9vdE5vcm1hbEltcHVsc2VBYnNTdW0gKz0gbm9ybWFsSW1wdWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBjb250YWN0TGlzdGVuZXIuRW5kQ29udGFjdCA9IChjb250YWN0KSA9PiB7fVxuXG4gICAgd29ybGQuU2V0Q29udGFjdExpc3RlbmVyKGNvbnRhY3RMaXN0ZW5lcilcbiAgfSlcbn1cblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgLy8gc3RlcCA9IDBcbiAgcG9wdWxhdGlvbi5yZXNldChiMilcbiAgcG9wdWxhdGlvbi51cGRhdGUoMClcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IGVwTGVuOyBpKyspIHtcbiAgICB3b3JsZC5TdGVwKHRzLCAxNiwgNilcbiAgICBwb3B1bGF0aW9uLnVwZGF0ZShpKVxuICB9XG4gIGNvbnN0IHNjb3JlU29sdXRpb25JbmZvID0gW11cbiAgZm9yIChsZXQgc3BvdCBvZiBwb3B1bGF0aW9uLnNwb3RzKSB7XG4gICAgY29uc3Qgc2NvcmVJbmZvID0gc3BvdC5zY29yZUluZm9cbiAgICBzY29yZUluZm9bXCJzb2x1dGlvblwiXSA9IHNwb3QuZmxhdFd0cy5zbGljZSgpXG4gICAgc2NvcmVTb2x1dGlvbkluZm8ucHVzaChzY29yZUluZm8pXG4gIH1cbiAgcG9zdE1lc3NhZ2UoW1wic2NvcmVTb2x1dGlvbkluZm9cIiwgc2NvcmVTb2x1dGlvbkluZm9dKVxufVxuXG5jbGFzcyBQb3B1bGF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc2hvdWxkZXJQb3MsIG5TcG90cywgd29ybGQsIGIyKSB7XG4gICAgdGhpcy5zaG91bGRlclBvcyA9IHNob3VsZGVyUG9zLnNsaWNlKClcbiAgICB0aGlzLndvcmxkID0gd29ybGRcbiAgICB0aGlzLnNwb3RzID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5TcG90czsgaSsrKSB7XG4gICAgICB0aGlzLnNwb3RzLnB1c2gobmV3IFNwb3QodGhpcy5zaG91bGRlclBvcywgd29ybGQsIGIyKSlcbiAgICB9XG4gICAgdGhpcy5uX2RpbSA9IHRoaXMuc3BvdHNbMF0ubl9kaW1cbiAgfVxuXG4gIHJlc2V0KGIyKSB7XG4gICAgZm9yIChsZXQgc3BvdCBvZiB0aGlzLnNwb3RzKSB7XG4gICAgICBzcG90LnJlc2V0KGIyKVxuICAgIH1cbiAgfVxuXG4gIGFkZFNwb3RzKG5TcG90cywgYjIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5TcG90czsgaSsrKSB7XG4gICAgICB0aGlzLnNwb3RzLnB1c2gobmV3IFNwb3QodGhpcy5zaG91bGRlclBvcywgd29ybGQsIGIyKSlcbiAgICB9XG4gIH1cblxuICBzZXRXdHMoZmxhdFd0cykge1xuICAgIGxldCBmbGF0V3RzSWR4ID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zcG90c1tpXS5zZXRXdHMoZmxhdFd0cy5zbGljZShmbGF0V3RzSWR4LCBmbGF0V3RzSWR4ICsgdGhpcy5uX2RpbSkpXG4gICAgICBmbGF0V3RzSWR4ICs9IHRoaXMubl9kaW1cbiAgICB9XG4gIH1cblxuICB1cGRhdGUoc3RlcCkge1xuICAgIC8vIChjaGFzc2lzIHgseSArIGNoYXNzaXMgYW5nbGUgKyA0IGpvaW50IGFuZ2xlcykgKiBwb3BMZW4gKyAxIHN0ZXAgY291bnRcbiAgICAvLyBjb25zdCBtc2cgPSBuZXcgRmxvYXQzMkFycmF5KDcgKiBjcmVhdHVyZXNQZXJXb3JrZXIgKyAxKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3JlYXR1cmVzUGVyV29ya2VyOyBpKyspIHtcbiAgICAgIGNvbnN0IHNwb3QgPSB0aGlzLnNwb3RzW2ldXG4gICAgICBzcG90LnVwZGF0ZShzdGVwKVxuICAgICAgLy8gY29uc3QgcG9zaXRpb25zID0gc3BvdC5kcmF3SW5mb1xuICAgICAgLy8gZm9yIChsZXQgaiA9IDA7IGogPCBwb3NpdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vICAgbXNnW2kgKiBwb3NpdGlvbnMubGVuZ3RoICsgal0gPSBwb3NpdGlvbnNbal1cbiAgICAgIC8vIH1cbiAgICB9XG4gICAgLy8gbXNnW21zZy5sZW5ndGggLSAxXSA9IHN0ZXBcbiAgICAvLyBzdGVwKytcbiAgICAvLyBwb3N0TWVzc2FnZShbXCJwb3NpdGlvbnNcIiwgbXNnXSlcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDcmVhdHVyZXNQZXJXb3JrZXIobl9kaW0sIG11bHRpcGxpZXIpIHtcbiAgcmV0dXJuIE1hdGguY2VpbChcbiAgICAoNCArIE1hdGguZmxvb3IoMyAqIE1hdGgubG9nKG5fZGltKSkpICogKG11bHRpcGxpZXIgLyBuV29ya2VycylcbiAgKSAvLyAoZXEuIDQ4KVxufVxuIiwiaW1wb3J0IHtcbiAgc2hvdWxkZXJITWV0ZXJzLFxuICBmb290UmFkaXVzLFxuICAvLyBmb290UmFkaXVzRHJhdyxcbiAgYW5rbGVQdCxcbiAgLy8gYW5rbGVQdERyYXcsXG4gIGtuZWVQdCxcbiAgLy8ga25lZVB0RHJhdyxcbiAgaGlwUHQsXG4gIC8vIGhpcFB0RHJhdyxcbiAgdXBwZXJMZWdMaW1pdHMsXG4gIHVwcGVyTGVnTWF4VG9ycXVlLFxuICBsb3dlckxlZ0xpbWl0cyxcbiAgbG93ZXJMZWdNYXhUb3JxdWUsXG4gIHVwcGVyTGVnUHRzLFxuICAvLyB1cHBlckxlZ1B0c0RyYXcsXG4gIGxvd2VyTGVnUHRzLFxuICAvLyBsb3dlckxlZ1B0c0RyYXcsXG4gIGNoYXNzaXNQdHMsXG4gIC8vIGNoYXNzaXNQdHNEcmF3LFxuICBtYXhTcGVlZCxcbiAgbWF4U3BlZWREaWZmLFxuICBuSm9pbnRBbmdsZUJpbnMsXG4gIGVwTGVuLFxuICB1bmlmb3JtRGlzdEJpbkNvdW50LFxuICByb2xsaW5nV2luZG93LFxuICB0YXJnZXRWZWxYLFxufSBmcm9tIFwiLi9nbG9iYWxzLmpzXCJcblxuY29uc3QgSk9JTlRfU1BFRURfSU5JVCA9IEluZmluaXR5XG5cbmV4cG9ydCBjbGFzcyBTcG90IHtcbiAgY29uc3RydWN0b3Ioc2hvdWxkZXJQb3MsIHdvcmxkLCBiMikge1xuICAgIHRoaXMuc2hvdWxkZXJJbml0UHQgPSBzaG91bGRlclBvcy5zbGljZSgpXG4gICAgdGhpcy5lbGJvd0luaXRQdCA9IFtzaG91bGRlclBvc1swXSAtIGtuZWVQdFswXSwgc2hvdWxkZXJQb3NbMV0gLSBrbmVlUHRbMV1dXG4gICAgdGhpcy5oaXBJbml0UHQgPSBbc2hvdWxkZXJQb3NbMF0gLSBoaXBQdFswXSwgc2hvdWxkZXJQb3NbMV0gLSBoaXBQdFsxXV1cbiAgICB0aGlzLmtuZWVJbml0UHQgPSBbXG4gICAgICB0aGlzLmhpcEluaXRQdFswXSAtIGtuZWVQdFswXSxcbiAgICAgIHRoaXMuaGlwSW5pdFB0WzFdIC0ga25lZVB0WzFdLFxuICAgIF1cblxuICAgIC8vIHRoaXMuZm9vdEZpeHR1cmVzID0gW11cbiAgICAvLyB0aGlzLmZyYWdpbGVGaXh0dXJlcyA9IFtdXG4gICAgLy8gY29uc3QgW2NoYXNzaXNCb2R5LCBjaGFzc2lzRml4dHVyZV0gPSB0aGlzLmNyZWF0ZVBvbHlnb25Cb2R5KFxuICAgIHRoaXMuY2hhc3Npc0JvZHkgPSB0aGlzLmNyZWF0ZVBvbHlnb25Cb2R5KFxuICAgICAgdGhpcy5zaG91bGRlckluaXRQdCxcbiAgICAgIGNoYXNzaXNQdHMsXG4gICAgICB3b3JsZCxcbiAgICAgIGIyLFxuICAgICAgMVxuICAgIClcbiAgICAvLyB0aGlzLmNoYXNzaXNCb2R5ID0gY2hhc3Npc0JvZHlcbiAgICAvLyB0aGlzLmNoYXNzaXNGaXh0dXJlID0gY2hhc3Npc0ZpeHR1cmVcbiAgICB0aGlzLnVwcGVyRm9yZWxlZ0JvZHkgPSB0aGlzLmNyZWF0ZVBvbHlnb25Cb2R5KFxuICAgICAgdGhpcy5zaG91bGRlckluaXRQdCxcbiAgICAgIHVwcGVyTGVnUHRzLFxuICAgICAgd29ybGQsXG4gICAgICBiMixcbiAgICAgIDJcbiAgICApXG4gICAgdGhpcy51cHBlckhpbmRsZWdCb2R5ID0gdGhpcy5jcmVhdGVQb2x5Z29uQm9keShcbiAgICAgIHRoaXMuaGlwSW5pdFB0LFxuICAgICAgdXBwZXJMZWdQdHMsXG4gICAgICB3b3JsZCxcbiAgICAgIGIyLFxuICAgICAgMlxuICAgIClcbiAgICB0aGlzLmxvd2VyRm9yZWxlZ0JvZHkgPSB0aGlzLmNyZWF0ZVBvbHlnb25Cb2R5KFxuICAgICAgdGhpcy5lbGJvd0luaXRQdCxcbiAgICAgIGxvd2VyTGVnUHRzLFxuICAgICAgd29ybGQsXG4gICAgICBiMixcbiAgICAgIDJcbiAgICApXG4gICAgdGhpcy5hZGRGb290KHRoaXMubG93ZXJGb3JlbGVnQm9keSwgYjIsIDApXG5cbiAgICB0aGlzLmxvd2VySGluZGxlZ0JvZHkgPSB0aGlzLmNyZWF0ZVBvbHlnb25Cb2R5KFxuICAgICAgdGhpcy5rbmVlSW5pdFB0LFxuICAgICAgbG93ZXJMZWdQdHMsXG4gICAgICB3b3JsZCxcbiAgICAgIGIyLFxuICAgICAgMlxuICAgIClcbiAgICB0aGlzLmFkZEZvb3QodGhpcy5sb3dlckhpbmRsZWdCb2R5LCBiMiwgMSlcblxuICAgIHRoaXMuam9pbnRzID0gW11cbiAgICAvLyBzaG91bGRlclxuICAgIHRoaXMuYWRkSm9pbnQoXG4gICAgICB0aGlzLmNoYXNzaXNCb2R5LFxuICAgICAgdGhpcy51cHBlckZvcmVsZWdCb2R5LFxuICAgICAgdGhpcy5zaG91bGRlckluaXRQdCxcbiAgICAgIHVwcGVyTGVnTGltaXRzLFxuICAgICAgdXBwZXJMZWdNYXhUb3JxdWUsXG4gICAgICB3b3JsZCxcbiAgICAgIGIyXG4gICAgKVxuICAgIC8vIGhpcFxuICAgIHRoaXMuYWRkSm9pbnQoXG4gICAgICB0aGlzLmNoYXNzaXNCb2R5LFxuICAgICAgdGhpcy51cHBlckhpbmRsZWdCb2R5LFxuICAgICAgdGhpcy5oaXBJbml0UHQsXG4gICAgICB1cHBlckxlZ0xpbWl0cyxcbiAgICAgIHVwcGVyTGVnTWF4VG9ycXVlLFxuICAgICAgd29ybGQsXG4gICAgICBiMlxuICAgIClcbiAgICAvLyBlbGJvd1xuICAgIHRoaXMuYWRkSm9pbnQoXG4gICAgICB0aGlzLnVwcGVyRm9yZWxlZ0JvZHksXG4gICAgICB0aGlzLmxvd2VyRm9yZWxlZ0JvZHksXG4gICAgICB0aGlzLmVsYm93SW5pdFB0LFxuICAgICAgbG93ZXJMZWdMaW1pdHMsXG4gICAgICBsb3dlckxlZ01heFRvcnF1ZSxcbiAgICAgIHdvcmxkLFxuICAgICAgYjJcbiAgICApXG4gICAgLy8ga25lZVxuICAgIHRoaXMuYWRkSm9pbnQoXG4gICAgICB0aGlzLnVwcGVySGluZGxlZ0JvZHksXG4gICAgICB0aGlzLmxvd2VySGluZGxlZ0JvZHksXG4gICAgICB0aGlzLmtuZWVJbml0UHQsXG4gICAgICBsb3dlckxlZ0xpbWl0cyxcbiAgICAgIGxvd2VyTGVnTWF4VG9ycXVlLFxuICAgICAgd29ybGQsXG4gICAgICBiMlxuICAgIClcblxuICAgIHRoaXMucHJldlhWZWwgPSAwXG4gICAgdGhpcy5wcmV2WVZlbCA9IDBcbiAgICB0aGlzLnByZXZBbmdWZWwgPSAwXG5cbiAgICB0aGlzLmNoYXNzaXNWZWxYID0gMFxuXG4gICAgdGhpcy54TWF4ID0gMFxuICAgIHRoaXMucHJldlhWZWxzID0gbmV3IEZsb2F0MzJBcnJheShyb2xsaW5nV2luZG93KVxuICAgIHRoaXMucm9sbGluZ1hWZWxNYXggPSAwXG5cbiAgICB0aGlzLm1vdG9yU3BlZWRzID0gbmV3IEZsb2F0MzJBcnJheSg0KS5maWxsKDApXG4gICAgLy8gdGhpcy5tb3RvclNwZWVkc1ByZXYgPSBuZXcgRmxvYXQzMkFycmF5KDQpLmZpbGwoMClcbiAgICB0aGlzLm1vdG9yU3BlZWRTdW1zID0gbmV3IEZsb2F0MzJBcnJheSg0KS5maWxsKDApXG5cbiAgICB0aGlzLmNsaXBwZWRPdXRwdXRTcVN1bXMgPSBuZXcgRmxvYXQzMkFycmF5KDQpLmZpbGwoMClcbiAgICB0aGlzLmNsaXBwZWRTcGVlZFNxU3VtcyA9IG5ldyBGbG9hdDMyQXJyYXkoNCkuZmlsbCgwKVxuXG4gICAgdGhpcy5qb2ludFNwZWVkTWlucyA9IG5ldyBGbG9hdDMyQXJyYXkoNCkuZmlsbChKT0lOVF9TUEVFRF9JTklUKVxuICAgIHRoaXMuam9pbnRTcGVlZE1heHMgPSBuZXcgRmxvYXQzMkFycmF5KDQpLmZpbGwoLUpPSU5UX1NQRUVEX0lOSVQpXG5cbiAgICB0aGlzLmN1cnJlbnRKb2ludFNwZWVkcyA9IG5ldyBGbG9hdDMyQXJyYXkoNCkuZmlsbCgwKVxuICAgIHRoaXMucHJldkpvaW50U3BlZWRzID0gbmV3IEZsb2F0MzJBcnJheSg0ICogcm9sbGluZ1dpbmRvdykuZmlsbCgwKVxuICAgIHRoaXMucm9sbGluZ0pvaW50U3BlZWRzID0gbmV3IEZsb2F0MzJBcnJheSg0KS5maWxsKDApXG4gICAgdGhpcy5wcmV2Um9sbGluZ0pvaW50U3BlZWRzID0gbmV3IEZsb2F0MzJBcnJheSg0KS5maWxsKDApXG4gICAgdGhpcy5yb2xsaW5nSm9pbnRTcGVlZEFic1N1bXMgPSBuZXcgRmxvYXQzMkFycmF5KDQpLmZpbGwoMClcbiAgICB0aGlzLnJvbGxpbmdKb2ludFNwZWVkU3FTdW1zID0gbmV3IEZsb2F0MzJBcnJheSg0KS5maWxsKDApXG4gICAgdGhpcy5yb2xsaW5nSm9pbnRTcGVlZEFic0RpZmZTdW1zID0gbmV3IEZsb2F0MzJBcnJheSg0KS5maWxsKDApXG4gICAgdGhpcy5yb2xsaW5nSm9pbnRTcGVlZFNxRGlmZlN1bXMgPSBuZXcgRmxvYXQzMkFycmF5KDQpLmZpbGwoMClcbiAgICB0aGlzLmpvaW50U3BlZWRTcURpZmZzID0gbmV3IEZsb2F0MzJBcnJheSg0KS5maWxsKDApXG5cbiAgICB0aGlzLmpvaW50U3BlZWRTcVN1bXMgPSBuZXcgRmxvYXQzMkFycmF5KDQpLmZpbGwoMClcbiAgICB0aGlzLmpvaW50UmVhY3Rpb25Ub3JxdWVTcVN1bXMgPSBuZXcgRmxvYXQzMkFycmF5KDQpLmZpbGwoMClcbiAgICB0aGlzLmpvaW50UmVhY3Rpb25Gb3JjZVhTcVN1bXMgPSBuZXcgRmxvYXQzMkFycmF5KDQpLmZpbGwoMClcbiAgICB0aGlzLmpvaW50UmVhY3Rpb25Gb3JjZVlTcVN1bXMgPSBuZXcgRmxvYXQzMkFycmF5KDQpLmZpbGwoMClcblxuICAgIHRoaXMuam9pbnRNb3RvclNwZWVkRGlmZlNxU3VtcyA9IG5ldyBGbG9hdDMyQXJyYXkoNCkuZmlsbCgwKVxuXG4gICAgdGhpcy5mb290Tm9ybWFsSW1wdWxzZXMgPSBuZXcgRmxvYXQzMkFycmF5KDIpLmZpbGwoMClcbiAgICB0aGlzLmZvb3RUYW5nZW50SW1wdWxzZXMgPSBuZXcgRmxvYXQzMkFycmF5KDIpLmZpbGwoMClcblxuICAgIC8vIHRoaXMubW90b3JTcGVlZHNTcURpc3RTdW0gPSAwXG5cbiAgICB0aGlzLmpvaW50QW5nbGVIaXN0b2dyYW1zID0gW11cbiAgICB0aGlzLmpvaW50QW5nbGVNaW5zID0gbmV3IEZsb2F0MzJBcnJheSg0KVxuICAgIHRoaXMuam9pbnRBbmdsZUJpbldpZHRocyA9IG5ldyBGbG9hdDMyQXJyYXkoNClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgdGhpcy5qb2ludEFuZ2xlSGlzdG9ncmFtc1tpXSA9IG5ldyBVaW50MTZBcnJheShuSm9pbnRBbmdsZUJpbnMpXG4gICAgICBjb25zdCBqb2ludCA9IHRoaXMuam9pbnRzW2ldLFxuICAgICAgICBhbmdsZU1pbiA9IGpvaW50LkdldExvd2VyTGltaXQoKSxcbiAgICAgICAgYW5nbGVNYXggPSBqb2ludC5HZXRVcHBlckxpbWl0KCksXG4gICAgICAgIGJpbldpZHRoID0gKGFuZ2xlTWF4IC0gYW5nbGVNaW4pIC8gbkpvaW50QW5nbGVCaW5zXG4gICAgICB0aGlzLmpvaW50QW5nbGVNaW5zW2ldID0gYW5nbGVNaW5cbiAgICAgIHRoaXMuam9pbnRBbmdsZUJpbldpZHRoc1tpXSA9IGJpbldpZHRoXG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dERpbSA9IHRoaXMuZ2V0SW5wdXRzKCkubGVuZ3RoXG4gICAgdGhpcy5zaGFwZXMgPSBbdGhpcy5pbnB1dERpbSwgMTYsIDgsIDRdXG4gICAgLy8gdGhpcy5uX2RpbSA9IDBcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIC8vICAgdGhpcy5uX2RpbSArPSAodGhpcy5zaGFwZXNbaV0gKyAxKSAqIHRoaXMuc2hhcGVzW2kgKyAxXVxuICAgIC8vIH1cbiAgICAvLyB0aGlzLndlaWdodENvdW50ID0gMFxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgLy8gICBjb25zdCBuID0gdGhpcy5zaGFwZXNbaV0sXG4gICAgLy8gICAgIG0gPSB0aGlzLnNoYXBlc1tpICsgMV1cbiAgICAvLyAgIHRoaXMud2VpZ2h0Q291bnQgKz0gbiptXG4gICAgLy8gfVxuICAgIC8vIHRoaXMuYmlhc0NvdW50ID0gMFxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgLy8gICBjb25zdCBuID0gMSxcbiAgICAvLyAgICAgbSA9IHRoaXMuc2hhcGVzW2kgKyAxXVxuICAgIC8vICAgdGhpcy5iaWFzQ291bnQgKz0gbiptXG4gICAgLy8gfVxuXG4gICAgdGhpcy5uX2RpbSA9IDBcbiAgICB0aGlzLndlaWdodENvdW50ID0gMFxuICAgIHRoaXMuYmlhc0NvdW50ID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBjb25zdCBuID0gdGhpcy5zaGFwZXNbaV0sXG4gICAgICAgIG0gPSB0aGlzLnNoYXBlc1tpICsgMV1cbiAgICAgIHRoaXMubl9kaW0gKz0gKG4gKyAxKSAqIG1cbiAgICAgIHRoaXMud2VpZ2h0Q291bnQgKz0gbiAqIG1cbiAgICAgIHRoaXMuYmlhc0NvdW50ICs9IG1cbiAgICB9XG5cbiAgICAvLyB0aGlzLnNldFd0cyh1bmRlZmluZWQpXG4gICAgLy8gaW5pdGlhbGl6ZSBkcmF3SW5mb1xuICAgIHRoaXMuY2hhc3Npc1BvcyA9IHNob3VsZGVyUG9zLnNsaWNlKClcbiAgICB0aGlzLmNoYXNzaXNBbmdsZSA9IDBcbiAgICB0aGlzLnNob3VsZGVyQW5nbGUgPSAwXG4gICAgdGhpcy5oaXBBbmdsZSA9IDBcbiAgICB0aGlzLmVsYm93QW5nbGUgPSAwXG4gICAgdGhpcy5rbmVlQW5nbGUgPSAwXG5cbiAgICB0aGlzLmRyYXdIaXN0b3J5ID0gbmV3IEZsb2F0MzJBcnJheShlcExlbiAqIHRoaXMuZHJhd0luZm8ubGVuZ3RoKVxuXG4gICAgdGhpcy5zY29yZUtleXMgPSBbXG4gICAgICBcInhNYXhcIixcbiAgICAgIFwiYW5nVmVsU3FTdW1cIixcbiAgICAgIFwiYW5nVmVsQWJzU3VtXCIsXG4gICAgICAvLyBcImJ1bXBTdW1cIixcbiAgICAgIFwiY2hhc3Npc0FuZ2xlRXJyXCIsXG4gICAgICBcImNoYXNzaXNBbmdsZVNxRXJyXCIsXG4gICAgICAvLyBcImhpc3RvZ3JhbVNjb3Jlc1wiLFxuICAgICAgXCJtb3RvclNwZWVkU3FTdW1cIixcbiAgICAgIFwibW90b3JTcGVlZERpZmZTcVN1bVwiLFxuICAgICAgXCJ5U3FEaWZmU3VtXCIsXG4gICAgICBcInlWZWxTcVN1bVwiLFxuICAgICAgXCJtb3RvclNwZWVkc1NxRGlzdFN1bVwiLFxuICAgICAgXCJ4VmVsRGlmZlNxU3VtXCIsXG4gICAgICBcInlWZWxEaWZmU3FTdW1cIixcbiAgICAgIFwiYW5nVmVsRGlmZkFic1N1bVwiLFxuICAgICAgXCJhbmdWZWxEaWZmU3FTdW1cIixcbiAgICAgIFwicm9sbGluZ1hWZWxNYXhcIixcbiAgICAgIFwiY2hhc3Npc1ZlbFhTcUVyclN1bVwiLFxuICAgICAgXCJyb2xsaW5nVmVsWFNxRXJyU3VtXCIsXG4gICAgICBcImZvb3RUYW5nZW50SW1wdWxzZVN1bVwiLFxuICAgICAgXCJmb290Tm9ybWFsSW1wdWxzZUFic1N1bVwiLFxuICAgICAgXCJub25Gb290Tm9ybWFsSW1wdWxzZUFic1N1bVwiLFxuICAgIF1cblxuICAgIHRoaXMucmVzZXQoYjIpXG4gIH1cblxuICBnZXQgZHJhd0luZm8oKSB7XG4gICAgcmV0dXJuIEZsb2F0MzJBcnJheS5mcm9tKFtcbiAgICAgIHRoaXMuY2hhc3Npc1Bvc1swXSxcbiAgICAgIHRoaXMuY2hhc3Npc1Bvc1sxXSxcbiAgICAgIHRoaXMuY2hhc3Npc0FuZ2xlLFxuICAgICAgdGhpcy5zaG91bGRlckFuZ2xlLFxuICAgICAgdGhpcy5oaXBBbmdsZSxcbiAgICAgIHRoaXMuZWxib3dBbmdsZSxcbiAgICAgIHRoaXMua25lZUFuZ2xlLFxuICAgIF0pXG4gIH1cblxuICBjcmVhdGVQb2x5Z29uQm9keShwb3MsIHB0cywgd29ybGQsIGIyLCBkZW5zaXR5KSB7XG4gICAgY29uc3QgdmVydGljZXMgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHRzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICB2ZXJ0aWNlcy5wdXNoKG5ldyBiMi5iMlZlYzIoLXB0c1tpXSwgLXB0c1tpICsgMV0pKVxuICAgIH1cbiAgICBjb25zdCBiZCA9IG5ldyBiMi5iMkJvZHlEZWYoKVxuICAgIGJkLnNldF90eXBlKGIyLmIyX2R5bmFtaWNCb2R5KVxuICAgIGJkLnNldF9wb3NpdGlvbihuZXcgYjIuYjJWZWMyKC4uLnBvcykpXG4gICAgYmQuc2V0X2xpbmVhckRhbXBpbmcoMC4xKVxuICAgIGJkLnNldF9hbmd1bGFyRGFtcGluZygwLjEpXG4gICAgY29uc3QgYm9keSA9IHdvcmxkLkNyZWF0ZUJvZHkoYmQpXG4gICAgY29uc3Qgc2hhcGUgPSBiMkNyZWF0ZVBvbHlnb25TaGFwZSh2ZXJ0aWNlcywgYjIpXG4gICAgY29uc3QgZmQgPSBuZXcgYjIuYjJGaXh0dXJlRGVmKClcbiAgICBjb25zdCBmaWx0ZXIgPSBmZC5nZXRfZmlsdGVyKClcbiAgICBmaWx0ZXIuc2V0X2NhdGVnb3J5Qml0cygweDAwMDIpXG4gICAgZmlsdGVyLnNldF9tYXNrQml0cygweDAwMDEpXG4gICAgZmQuc2V0X2ZpbHRlcihmaWx0ZXIpXG4gICAgZmQuc2V0X2RlbnNpdHkoZGVuc2l0eSlcbiAgICBmZC5zZXRfc2hhcGUoc2hhcGUpXG4gICAgZmQuc2V0X2ZyaWN0aW9uKDAuMylcbiAgICBmZC5zZXRfcmVzdGl0dXRpb24oMC4xKVxuICAgIC8vIGlmIChyZXR1cm5GaXh0dXJlKSB7XG4gICAgY29uc3QgZml4dHVyZSA9IGIyLmNhc3RPYmplY3QoYm9keS5DcmVhdGVGaXh0dXJlKGZkKSwgYjIuYjJGaXh0dXJlKVxuICAgIGZpeHR1cmUucGFydFR5cGUgPSBcInBvbHlcIlxuICAgIC8vIGZpeHR1cmUuYnVtcFBlbmFsdHkgPSBidW1wUGVuYWx0eVxuICAgIGZpeHR1cmUuc3BvdCA9IHRoaXNcbiAgICAvLyBpZiAoZnJhZ2lsZUZpeHR1cmUpIHtcbiAgICAvLyAgIHRoaXMuZnJhZ2lsZUZpeHR1cmVzLnB1c2goZml4dHVyZSlcbiAgICAvLyB9XG4gICAgLy8gICByZXR1cm4gW2JvZHksIGZpeHR1cmVdXG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyBib2R5LkNyZWF0ZUZpeHR1cmUoZmQpXG4gICAgcmV0dXJuIGJvZHlcbiAgICAvLyB9XG4gIH1cblxuICBhZGRGb290KGJvZHksIGIyLCBmb290SUQpIHtcbiAgICBjb25zdCBzaGFwZSA9IG5ldyBiMi5iMkNpcmNsZVNoYXBlKClcbiAgICBzaGFwZS5zZXRfbV9yYWRpdXMoZm9vdFJhZGl1cylcbiAgICBzaGFwZS5zZXRfbV9wKG5ldyBiMi5iMlZlYzIoLi4uYW5rbGVQdCkpXG4gICAgY29uc3QgZmQgPSBuZXcgYjIuYjJGaXh0dXJlRGVmKClcbiAgICBmZC5zZXRfc2hhcGUoc2hhcGUpXG4gICAgZmQuc2V0X2RlbnNpdHkoMS4wKVxuICAgIGZkLnNldF9mcmljdGlvbigwLjUpXG4gICAgZmQuc2V0X3Jlc3RpdHV0aW9uKDAuMSlcblxuICAgIGNvbnN0IGZpbHRlciA9IGZkLmdldF9maWx0ZXIoKVxuICAgIGZpbHRlci5zZXRfY2F0ZWdvcnlCaXRzKDB4MDAwMilcbiAgICBmaWx0ZXIuc2V0X21hc2tCaXRzKDB4MDAwMSlcbiAgICBmZC5zZXRfZmlsdGVyKGZpbHRlcilcbiAgICAvLyBib2R5LkNyZWF0ZUZpeHR1cmUoZmQpXG4gICAgY29uc3QgZml4dHVyZSA9IGIyLmNhc3RPYmplY3QoYm9keS5DcmVhdGVGaXh0dXJlKGZkKSwgYjIuYjJGaXh0dXJlKVxuICAgIGZpeHR1cmUucGFydFR5cGUgPSBcImZvb3RcIlxuICAgIGZpeHR1cmUuZm9vdElEID0gZm9vdElEXG4gICAgLy8gZml4dHVyZS5idW1wUGVuYWx0eSA9IDAuMVxuICAgIGZpeHR1cmUuc3BvdCA9IHRoaXNcbiAgfVxuXG4gIGFkZEpvaW50KGJvZHkwLCBib2R5MSwgcG9zLCBsaW1pdHMsIG1heFRvcnF1ZSwgd29ybGQsIGIyKSB7XG4gICAgY29uc3QgamQgPSBuZXcgYjIuYjJSZXZvbHV0ZUpvaW50RGVmKClcbiAgICBqZC5Jbml0aWFsaXplKGJvZHkwLCBib2R5MSwgbmV3IGIyLmIyVmVjMiguLi5wb3MpKVxuICAgIGlmIChsaW1pdHMgIT0gbnVsbCkge1xuICAgICAgamQuc2V0X2VuYWJsZUxpbWl0KHRydWUpXG4gICAgICBqZC5zZXRfbG93ZXJBbmdsZShsaW1pdHNbMF0pXG4gICAgICBqZC5zZXRfdXBwZXJBbmdsZShsaW1pdHNbMV0pXG4gICAgfVxuICAgIGlmIChtYXhUb3JxdWUgIT0gbnVsbCkge1xuICAgICAgamQuc2V0X2VuYWJsZU1vdG9yKHRydWUpXG4gICAgICBqZC5zZXRfbWF4TW90b3JUb3JxdWUobWF4VG9ycXVlKVxuICAgIH1cbiAgICB0aGlzLmpvaW50cy5wdXNoKGIyLmNhc3RPYmplY3Qod29ybGQuQ3JlYXRlSm9pbnQoamQpLCBiMi5iMlJldm9sdXRlSm9pbnQpKVxuICB9XG5cbiAgc2V0V3RzKGZsYXRXdHMpIHtcbiAgICAvLyB0aGlzLmZsYXRXdHMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubl9kaW0pLm1hcCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KVxuICAgIHRoaXMuZmxhdFd0cyA9IGZsYXRXdHNcbiAgICBsZXQgZmxhdFd0SWR4ID0gMFxuICAgIHRoaXMud2VpZ2h0cyA9IFtdXG4gICAgLy8gdGhpcy53ZWlnaHRDb3VudCA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgY29uc3QgbiA9IHRoaXMuc2hhcGVzW2ldLFxuICAgICAgICBtID0gdGhpcy5zaGFwZXNbaSArIDFdLFxuICAgICAgICBuZXdXZWlnaHQgPSBGbG9hdDMyQXJyYXkuZnJvbShcbiAgICAgICAgICB0aGlzLmZsYXRXdHMuc2xpY2UoZmxhdFd0SWR4LCBmbGF0V3RJZHggKyBuICogbSlcbiAgICAgICAgKVxuICAgICAgLy8gdGhpcy53ZWlnaHRDb3VudCArPSBuZXdXZWlnaHQubGVuZ3RoXG4gICAgICB0aGlzLndlaWdodHMucHVzaChuZXcgTWF0cml4KG5ld1dlaWdodCwgbiwgbSkpXG4gICAgICBmbGF0V3RJZHggKz0gbiAqIG1cbiAgICB9XG4gICAgdGhpcy5iaWFzZXMgPSBbXVxuICAgIC8vIHRoaXMuYmlhc0NvdW50ID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBjb25zdCBuID0gMSxcbiAgICAgICAgbSA9IHRoaXMuc2hhcGVzW2kgKyAxXSxcbiAgICAgICAgbmV3QmlhcyA9IEZsb2F0MzJBcnJheS5mcm9tKFxuICAgICAgICAgIHRoaXMuZmxhdFd0cy5zbGljZShmbGF0V3RJZHgsIGZsYXRXdElkeCArIG4gKiBtKVxuICAgICAgICApXG4gICAgICAvLyB0aGlzLmJpYXNDb3VudCArPSBuZXdCaWFzLmxlbmd0aFxuICAgICAgdGhpcy5iaWFzZXMucHVzaChuZXcgTWF0cml4KG5ld0JpYXMsIG4sIG0pKVxuICAgICAgZmxhdFd0SWR4ICs9IG4gKiBtXG4gICAgfVxuICB9XG5cbiAgcmVzZXQoYjIpIHtcbiAgICAvLyB0aGlzLmRlYWQgPSBmYWxzZVxuICAgIGZvciAobGV0IGtleSBvZiB0aGlzLnNjb3JlS2V5cykge1xuICAgICAgdGhpc1trZXldID0gMFxuICAgIH1cbiAgICB0aGlzLm1vdG9yU3BlZWRzLmZpbGwoMClcbiAgICAvLyB0aGlzLm1vdG9yU3BlZWRzUHJldi5maWxsKDApXG4gICAgdGhpcy5tb3RvclNwZWVkU3Vtcy5maWxsKDApXG4gICAgdGhpcy5jbGlwcGVkT3V0cHV0U3FTdW1zLmZpbGwoMClcbiAgICB0aGlzLmNsaXBwZWRTcGVlZFNxU3Vtcy5maWxsKDApXG4gICAgdGhpcy5wcmV2Sm9pbnRTcGVlZHMuZmlsbCgwKVxuXG4gICAgdGhpcy5jdXJyZW50Sm9pbnRTcGVlZHMuZmlsbCgwKVxuICAgIHRoaXMucm9sbGluZ0pvaW50U3BlZWRzLmZpbGwoMClcbiAgICB0aGlzLnByZXZSb2xsaW5nSm9pbnRTcGVlZHMuZmlsbCgwKVxuXG4gICAgdGhpcy5yb2xsaW5nSm9pbnRTcGVlZEFic1N1bXMuZmlsbCgwKVxuICAgIHRoaXMucm9sbGluZ0pvaW50U3BlZWRTcVN1bXMuZmlsbCgwKVxuICAgIHRoaXMucm9sbGluZ0pvaW50U3BlZWRBYnNEaWZmU3Vtcy5maWxsKDApXG4gICAgdGhpcy5yb2xsaW5nSm9pbnRTcGVlZFNxRGlmZlN1bXMuZmlsbCgwKVxuXG4gICAgdGhpcy5qb2ludFNwZWVkU3FEaWZmcy5maWxsKDApXG5cbiAgICB0aGlzLnByZXZYVmVscy5maWxsKDApXG4gICAgdGhpcy5qb2ludFNwZWVkTWlucy5maWxsKEpPSU5UX1NQRUVEX0lOSVQpXG4gICAgdGhpcy5qb2ludFNwZWVkTWF4cy5maWxsKC1KT0lOVF9TUEVFRF9JTklUKVxuICAgIHRoaXMuam9pbnRTcGVlZFNxU3Vtcy5maWxsKDApXG4gICAgdGhpcy5qb2ludE1vdG9yU3BlZWREaWZmU3FTdW1zLmZpbGwoMClcbiAgICB0aGlzLmpvaW50UmVhY3Rpb25Ub3JxdWVTcVN1bXMuZmlsbCgwKVxuICAgIHRoaXMuam9pbnRSZWFjdGlvbkZvcmNlWFNxU3Vtcy5maWxsKDApXG4gICAgdGhpcy5qb2ludFJlYWN0aW9uRm9yY2VZU3FTdW1zLmZpbGwoMClcbiAgICB0aGlzLnByZXZYVmVsID0gMFxuICAgIHRoaXMucHJldllWZWwgPSAwXG4gICAgdGhpcy5wcmV2QW5nVmVsID0gMFxuXG4gICAgdGhpcy5mb290Tm9ybWFsSW1wdWxzZXMuZmlsbCgwKVxuICAgIHRoaXMuZm9vdFRhbmdlbnRJbXB1bHNlcy5maWxsKDApXG4gICAgLy8gdGhpcy55U3FEaWZmU3VtID0gMFxuICAgIC8vIHRoaXMueVZlbFNxU3VtID0gMFxuICAgIC8vIHRoaXMuY2hhc3Npc0FuZ2xlRXJyID0gMFxuICAgIC8vIHRoaXMuY2hhc3Npc0FuZ2xlU3FFcnIgPSAwXG4gICAgLy8gdGhpcy5hbmdWZWxTcVN1bSA9IDBcbiAgICAvLyB0aGlzLm1vdG9yU3BlZWRTcVN1bSA9IDBcbiAgICAvLyB0aGlzLm1vdG9yU3BlZWREaWZmU3FTdW0gPSAwXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgdGhpcy5qb2ludEFuZ2xlSGlzdG9ncmFtc1tpXS5maWxsKDApXG4gICAgfVxuXG4gICAgZm9yIChsZXQgW2JvZHksIHBvc10gb2YgW1xuICAgICAgW3RoaXMuY2hhc3Npc0JvZHksIHRoaXMuc2hvdWxkZXJJbml0UHRdLFxuICAgICAgW3RoaXMudXBwZXJGb3JlbGVnQm9keSwgdGhpcy5zaG91bGRlckluaXRQdF0sXG4gICAgICBbdGhpcy5sb3dlckZvcmVsZWdCb2R5LCB0aGlzLmVsYm93SW5pdFB0XSxcbiAgICAgIFt0aGlzLnVwcGVySGluZGxlZ0JvZHksIHRoaXMuaGlwSW5pdFB0XSxcbiAgICAgIFt0aGlzLmxvd2VySGluZGxlZ0JvZHksIHRoaXMua25lZUluaXRQdF0sXG4gICAgXSkge1xuICAgICAgLy8gc2V0cyBwb3NpdGlvbiBhbmQgYW5nbGUgKDApXG4gICAgICBib2R5LlNldFRyYW5zZm9ybShuZXcgYjIuYjJWZWMyKC4uLnBvcyksIDApXG4gICAgICBib2R5LlNldExpbmVhclZlbG9jaXR5KG5ldyBiMi5iMlZlYzIoMCwgMCkpXG4gICAgICBib2R5LlNldEFuZ3VsYXJWZWxvY2l0eSgwKVxuICAgICAgYm9keS5TZXRBd2FrZSgxKVxuICAgICAgYm9keS5TZXRFbmFibGVkKDEpXG4gICAgfVxuICAgIC8vIHRoaXMuYnVtcFBlbmFsdHkgPSAwXG4gICAgLy8gdGhpcy5idW1wU3VtID0gMFxuICB9XG5cbiAgc2xlZXAoKSB7XG4gICAgZm9yIChsZXQgYm9keSBvZiBbXG4gICAgICB0aGlzLmNoYXNzaXNCb2R5LFxuICAgICAgdGhpcy51cHBlckZvcmVsZWdCb2R5LFxuICAgICAgdGhpcy5sb3dlckZvcmVsZWdCb2R5LFxuICAgICAgdGhpcy51cHBlckhpbmRsZWdCb2R5LFxuICAgICAgdGhpcy5sb3dlckhpbmRsZWdCb2R5LFxuICAgIF0pIHtcbiAgICAgIGJvZHkuU2V0QXdha2UoMClcbiAgICAgIC8vIGJvZHkuU2V0RW5hYmxlZCgwKVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUpvaW50QW5nbGVIaXN0b2dyYW0oYW5nbGUsIGhpc3QsIGFuZ2xlTWluLCBiaW5XaWR0aCkge1xuICAgIC8vIHRoaXMuam9pbnRBbmdsZUhpc3RvZ3JhbXNcbiAgICAvLyB0aGlzLmpvaW50QW5nbGVNaW5zXG4gICAgLy8gdGhpcy5qb2ludEFuZ2xlQmluV2lkdGhzXG4gICAgbGV0IGJpbklkeCA9IE1hdGguZmxvb3IoKGFuZ2xlIC0gYW5nbGVNaW4pIC8gYmluV2lkdGgpXG4gICAgYmluSWR4ID0gTWF0aC5tYXgoTWF0aC5taW4oYmluSWR4LCBuSm9pbnRBbmdsZUJpbnMgLSAxKSwgMClcbiAgICBoaXN0W2JpbklkeF0rK1xuICB9XG5cbiAgZ2V0SW5wdXRzKCkge1xuICAgIGxldCBpbnB1dHNcbiAgICBpZiAodGhpcy5pbnB1dERpbSAhPSBudWxsKSB7XG4gICAgICBpbnB1dHMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuaW5wdXREaW0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0cyA9IFtdXG4gICAgfVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuY2hhc3Npc0JvZHlcbiAgICBsZXQgaSA9IDBcbiAgICBjb25zdCBib2R5UG9zID0gYm9keS5HZXRQb3NpdGlvbigpXG4gICAgY29uc3QgW3gsIHldID0gW2JvZHlQb3MueCwgYm9keVBvcy55XVxuICAgIGlmICh4ID4gdGhpcy54TWF4KSB7XG4gICAgICB0aGlzLnhNYXggPSB4XG4gICAgfVxuICAgIHRoaXMuY2hhc3Npc1BvcyA9IFt4LCB5XVxuICAgIGNvbnN0IHlEaWZmID0geSAtIHNob3VsZGVySE1ldGVyc1xuICAgIHRoaXMueVNxRGlmZlN1bSArPSB5RGlmZiAqIHlEaWZmXG4gICAgaW5wdXRzW2ldID0geSAtIHNob3VsZGVySE1ldGVyc1xuICAgIGkrK1xuICAgIGNvbnN0IGNoYXNzaXNBbmdsZSA9IGJvZHkuR2V0QW5nbGUoKVxuICAgIHRoaXMuY2hhc3Npc0FuZ2xlID0gY2hhc3Npc0FuZ2xlXG4gICAgdGhpcy5jaGFzc2lzQW5nbGVFcnIgKz0gY2hhc3Npc0FuZ2xlXG4gICAgdGhpcy5jaGFzc2lzQW5nbGVTcUVyciArPSBjaGFzc2lzQW5nbGUgKiBjaGFzc2lzQW5nbGVcbiAgICBpbnB1dHNbaV0gPSBjaGFzc2lzQW5nbGVcbiAgICBpKytcbiAgICAvLyBpbnB1dHNbaV0gPSBNYXRoLmNvcyhjaGFzc2lzQW5nbGUpXG4gICAgLy8gaSsrXG4gICAgLy8gaW5wdXRzW2ldID0gTWF0aC5zaW4oY2hhc3Npc0FuZ2xlKVxuICAgIC8vIGkrK1xuICAgIGNvbnN0IGNoYXNzaXNWZWwgPSBib2R5LkdldExpbmVhclZlbG9jaXR5KCksXG4gICAgICBjaGFzc2lzVmVsWCA9IGNoYXNzaXNWZWwueCxcbiAgICAgIGNoYXNzaXNWZWxZID0gY2hhc3Npc1ZlbC55XG5cbiAgICBpbnB1dHNbaV0gPSBjaGFzc2lzVmVsWFxuICAgIGkrK1xuICAgIGlucHV0c1tpXSA9IGNoYXNzaXNWZWxZXG4gICAgaSsrXG4gICAgaW5wdXRzW2ldID0gY2hhc3Npc1ZlbFggLSB0aGlzLnByZXZYVmVsXG4gICAgaSsrXG4gICAgaW5wdXRzW2ldID0gY2hhc3Npc1ZlbFkgLSB0aGlzLnByZXZZVmVsXG4gICAgaSsrXG5cbiAgICBmb3IgKGxldCB3aW5kb3dJZHggPSAwOyB3aW5kb3dJZHggPCByb2xsaW5nV2luZG93IC0gMTsgd2luZG93SWR4KyspIHtcbiAgICAgIHRoaXMucHJldlhWZWxzW3dpbmRvd0lkeF0gPSB0aGlzLnByZXZYVmVsc1t3aW5kb3dJZHggKyAxXVxuICAgIH1cbiAgICB0aGlzLnByZXZYVmVsc1tyb2xsaW5nV2luZG93IC0gMV0gPSBjaGFzc2lzVmVsWFxuICAgIGxldCByb2xsaW5nVmVsWCA9IDBcbiAgICBmb3IgKGxldCB3aW5kb3dJZHggPSAwOyB3aW5kb3dJZHggPCByb2xsaW5nV2luZG93OyB3aW5kb3dJZHgrKykge1xuICAgICAgcm9sbGluZ1ZlbFggKz0gdGhpcy5wcmV2WFZlbHNbd2luZG93SWR4XVxuICAgIH1cbiAgICByb2xsaW5nVmVsWCAvPSByb2xsaW5nV2luZG93XG4gICAgaWYgKHRoaXMucm9sbGluZ1hWZWxNYXggPCByb2xsaW5nVmVsWCkge1xuICAgICAgdGhpcy5yb2xsaW5nWFZlbE1heCA9IHJvbGxpbmdWZWxYXG4gICAgfVxuICAgIGNvbnN0IHZlbFhFcnIgPSBjaGFzc2lzVmVsWCAtIHRhcmdldFZlbFgsXG4gICAgICByb2xsaW5nVmVsWEVyciA9IHJvbGxpbmdWZWxYIC0gdGFyZ2V0VmVsWFxuICAgIHRoaXMuY2hhc3Npc1ZlbFhTcUVyclN1bSArPSB2ZWxYRXJyICogdmVsWEVyclxuICAgIHRoaXMucm9sbGluZ1ZlbFhTcUVyclN1bSArPSByb2xsaW5nVmVsWEVyciAqIHJvbGxpbmdWZWxYRXJyXG4gICAgdGhpcy55VmVsU3FTdW0gKz0gY2hhc3Npc1ZlbFkgKiBjaGFzc2lzVmVsWVxuICAgIGNvbnN0IHhWZWxEaWZmID0gY2hhc3Npc1ZlbFggLSB0aGlzLnByZXZYVmVsLFxuICAgICAgeVZlbERpZmYgPSBjaGFzc2lzVmVsWSAtIHRoaXMucHJldllWZWxcbiAgICB0aGlzLnhWZWxEaWZmU3FTdW0gKz0geFZlbERpZmYgKiB4VmVsRGlmZlxuICAgIHRoaXMueVZlbERpZmZTcVN1bSArPSB5VmVsRGlmZiAqIHlWZWxEaWZmXG4gICAgdGhpcy5wcmV2WFZlbCA9IGNoYXNzaXNWZWxYXG4gICAgdGhpcy5wcmV2WVZlbCA9IGNoYXNzaXNWZWxZXG5cbiAgICBjb25zdCBhbmdWZWwgPSBib2R5LkdldEFuZ3VsYXJWZWxvY2l0eSgpLFxuICAgICAgYW5nVmVsRGlmZiA9IGFuZ1ZlbCAtIHRoaXMucHJldkFuZ1ZlbFxuICAgIGlucHV0c1tpXSA9IGFuZ1ZlbFxuICAgIGkrK1xuICAgIGlucHV0c1tpXSA9IGFuZ1ZlbERpZmZcbiAgICBpKytcbiAgICB0aGlzLmFuZ1ZlbERpZmZTcVN1bSArPSBhbmdWZWxEaWZmICogYW5nVmVsRGlmZlxuICAgIHRoaXMuYW5nVmVsRGlmZkFic1N1bSArPSBNYXRoLmFicyhhbmdWZWxEaWZmKVxuICAgIHRoaXMucHJldkFuZ1ZlbCA9IGFuZ1ZlbFxuXG4gICAgdGhpcy5hbmdWZWxTcVN1bSArPSBhbmdWZWwgKiBhbmdWZWxcbiAgICB0aGlzLmFuZ1ZlbEFic1N1bSArPSBNYXRoLmFicyhhbmdWZWwpXG5cbiAgICBmb3IgKGxldCBmb290SWR4ID0gMDsgZm9vdElkeCA8IDI7IGZvb3RJZHgrKykge1xuICAgICAgY29uc3QgZm9vdE5vcm1hbEltcHVsc2UgPSB0aGlzLmZvb3ROb3JtYWxJbXB1bHNlc1tmb290SWR4XVxuICAgICAgaW5wdXRzW2ldID0gZm9vdE5vcm1hbEltcHVsc2VcbiAgICAgIGkrK1xuICAgICAgY29uc3QgZm9vdFRhbmdlbnRJbXB1bHNlID0gdGhpcy5mb290VGFuZ2VudEltcHVsc2VzW2Zvb3RJZHhdXG4gICAgICBpbnB1dHNbaV0gPSBmb290VGFuZ2VudEltcHVsc2VcbiAgICAgIGkrK1xuICAgIH1cblxuICAgIGNvbnN0IGpvaW50QW5nbGVLZXlzID0gW1xuICAgICAgXCJzaG91bGRlckFuZ2xlXCIsXG4gICAgICBcImhpcEFuZ2xlXCIsXG4gICAgICBcImVsYm93QW5nbGVcIixcbiAgICAgIFwia25lZUFuZ2xlXCIsXG4gICAgXVxuICAgIGZvciAobGV0IGpvaW50SWR4ID0gMDsgam9pbnRJZHggPCA0OyBqb2ludElkeCsrKSB7XG4gICAgICBjb25zdCBqb2ludCA9IHRoaXMuam9pbnRzW2pvaW50SWR4XVxuICAgICAgY29uc3Qgam9pbnRBbmdsZSA9IGpvaW50LkdldEpvaW50QW5nbGUoKVxuICAgICAgdGhpcy51cGRhdGVKb2ludEFuZ2xlSGlzdG9ncmFtKFxuICAgICAgICBqb2ludEFuZ2xlLFxuICAgICAgICB0aGlzLmpvaW50QW5nbGVIaXN0b2dyYW1zW2pvaW50SWR4XSxcbiAgICAgICAgdGhpcy5qb2ludEFuZ2xlTWluc1tqb2ludElkeF0sXG4gICAgICAgIHRoaXMuam9pbnRBbmdsZUJpbldpZHRoc1tqb2ludElkeF1cbiAgICAgIClcbiAgICAgIHRoaXNbam9pbnRBbmdsZUtleXNbam9pbnRJZHhdXSA9IGpvaW50QW5nbGVcbiAgICAgIGlucHV0c1tpXSA9IGpvaW50QW5nbGVcbiAgICAgIGkrK1xuICAgICAgY29uc3Qgam9pbnRTcGVlZCA9IGpvaW50LkdldEpvaW50U3BlZWQoKSxcbiAgICAgICAgam9pbnRXaW5kb3dJZHggPSBqb2ludElkeCAqIHJvbGxpbmdXaW5kb3dcbiAgICAgIHRoaXMuY3VycmVudEpvaW50U3BlZWRzW2pvaW50SWR4XSA9IGpvaW50U3BlZWRcbiAgICAgIC8vIHVwZGF0ZSByb2xsaW5nIGpvaW50IHNwZWVkIHJlY29yZFxuICAgICAgZm9yIChsZXQgd2luZG93SWR4ID0gMDsgd2luZG93SWR4IDwgcm9sbGluZ1dpbmRvdyAtIDE7IHdpbmRvd0lkeCsrKSB7XG4gICAgICAgIHRoaXMucHJldkpvaW50U3BlZWRzW2pvaW50V2luZG93SWR4ICsgd2luZG93SWR4XSA9XG4gICAgICAgICAgdGhpcy5wcmV2Sm9pbnRTcGVlZHNbam9pbnRXaW5kb3dJZHggKyB3aW5kb3dJZHggKyAxXVxuICAgICAgfVxuICAgICAgdGhpcy5wcmV2Sm9pbnRTcGVlZHNbam9pbnRXaW5kb3dJZHggKyByb2xsaW5nV2luZG93IC0gMV0gPSBqb2ludFNwZWVkXG4gICAgICB0aGlzLnJvbGxpbmdKb2ludFNwZWVkc1tqb2ludElkeF0gPSAwXG4gICAgICBmb3IgKGxldCB3aW5kb3dJZHggPSAwOyB3aW5kb3dJZHggPCByb2xsaW5nV2luZG93OyB3aW5kb3dJZHgrKykge1xuICAgICAgICB0aGlzLnJvbGxpbmdKb2ludFNwZWVkc1tqb2ludElkeF0gKz1cbiAgICAgICAgICB0aGlzLnByZXZKb2ludFNwZWVkc1tqb2ludFdpbmRvd0lkeCArIHdpbmRvd0lkeF1cbiAgICAgIH1cbiAgICAgIHRoaXMucm9sbGluZ0pvaW50U3BlZWRzW2pvaW50SWR4XSAvPSByb2xsaW5nV2luZG93XG5cbiAgICAgIHRoaXMucm9sbGluZ0pvaW50U3BlZWRBYnNTdW1zW2pvaW50SWR4XSArPSBNYXRoLmFicyhcbiAgICAgICAgdGhpcy5yb2xsaW5nSm9pbnRTcGVlZHNbam9pbnRJZHhdXG4gICAgICApXG4gICAgICB0aGlzLnJvbGxpbmdKb2ludFNwZWVkU3FTdW1zW2pvaW50SWR4XSArPVxuICAgICAgICB0aGlzLnJvbGxpbmdKb2ludFNwZWVkc1tqb2ludElkeF0gKiB0aGlzLnJvbGxpbmdKb2ludFNwZWVkc1tqb2ludElkeF1cbiAgICAgIGNvbnN0IHJvbGxpbmdKb2ludFNwZWVkRGlmZiA9XG4gICAgICAgIHRoaXMucm9sbGluZ0pvaW50U3BlZWRzW2pvaW50SWR4XSAtXG4gICAgICAgIHRoaXMucHJldlJvbGxpbmdKb2ludFNwZWVkc1tqb2ludElkeF1cbiAgICAgIHRoaXMucm9sbGluZ0pvaW50U3BlZWRBYnNEaWZmU3Vtc1tqb2ludElkeF0gKz0gTWF0aC5hYnMoXG4gICAgICAgIHJvbGxpbmdKb2ludFNwZWVkRGlmZlxuICAgICAgKVxuICAgICAgdGhpcy5yb2xsaW5nSm9pbnRTcGVlZFNxRGlmZlN1bXNbam9pbnRJZHhdICs9XG4gICAgICAgIHJvbGxpbmdKb2ludFNwZWVkRGlmZiAqIHJvbGxpbmdKb2ludFNwZWVkRGlmZlxuICAgICAgdGhpcy5wcmV2Um9sbGluZ0pvaW50U3BlZWRzW2pvaW50SWR4XSA9IHRoaXMucm9sbGluZ0pvaW50U3BlZWRzW2pvaW50SWR4XVxuXG4gICAgICBjb25zdCBqb2ludFNwZWVkRGlmZiA9XG4gICAgICAgIGpvaW50U3BlZWQgLSB0aGlzLnByZXZKb2ludFNwZWVkc1tqb2ludFdpbmRvd0lkeCArIHJvbGxpbmdXaW5kb3cgLSAyXVxuICAgICAgaW5wdXRzW2ldID0gam9pbnRTcGVlZFxuICAgICAgaSsrXG4gICAgICBpbnB1dHNbaV0gPSBqb2ludFNwZWVkRGlmZlxuICAgICAgaSsrXG4gICAgICB0aGlzLmpvaW50U3BlZWRTcURpZmZzW2pvaW50SWR4XSArPSBqb2ludFNwZWVkRGlmZiAqIGpvaW50U3BlZWREaWZmXG4gICAgICBpZiAodGhpcy5qb2ludFNwZWVkTWluc1tqb2ludElkeF0gPiBqb2ludFNwZWVkKSB7XG4gICAgICAgIHRoaXMuam9pbnRTcGVlZE1pbnNbam9pbnRJZHhdID0gam9pbnRTcGVlZFxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuam9pbnRTcGVlZE1heHNbam9pbnRJZHhdIDwgam9pbnRTcGVlZCkge1xuICAgICAgICB0aGlzLmpvaW50U3BlZWRNYXhzW2pvaW50SWR4XSA9IGpvaW50U3BlZWRcbiAgICAgIH1cbiAgICAgIHRoaXMuam9pbnRTcGVlZFNxU3Vtc1tqb2ludElkeF0gKz0gam9pbnRTcGVlZCAqIGpvaW50U3BlZWRcbiAgICAgIC8vIGlucHV0c1tpXSA9IHRoaXMubW90b3JTcGVlZHNbam9pbnRJZHhdIC8gbWF4U3BlZWRcbiAgICAgIGlucHV0c1tpXSA9IHRoaXMubW90b3JTcGVlZHNbam9pbnRJZHhdXG4gICAgICBpKytcbiAgICAgIGNvbnN0IG1vdG9yU3BlZWQgPSBqb2ludC5HZXRNb3RvclNwZWVkKClcbiAgICAgIGNvbnN0IGpvaW50TW90b3JTcGVlZERpZmYgPSBqb2ludFNwZWVkIC0gbW90b3JTcGVlZFxuICAgICAgdGhpcy5qb2ludE1vdG9yU3BlZWREaWZmU3FTdW1zW2pvaW50SWR4XSArPVxuICAgICAgICBqb2ludE1vdG9yU3BlZWREaWZmICogam9pbnRNb3RvclNwZWVkRGlmZlxuICAgICAgY29uc3QgcmVhY3Rpb25Ub3JxdWUgPSBqb2ludC5HZXRSZWFjdGlvblRvcnF1ZSg2MClcbiAgICAgIHRoaXMuam9pbnRSZWFjdGlvblRvcnF1ZVNxU3Vtc1tqb2ludElkeF0gKz1cbiAgICAgICAgcmVhY3Rpb25Ub3JxdWUgKiByZWFjdGlvblRvcnF1ZVxuICAgICAgY29uc3QgcmVhY3Rpb25Gb3JjZXMgPSBqb2ludC5HZXRSZWFjdGlvbkZvcmNlKDYwKSxcbiAgICAgICAgcmVhY3Rpb25Gb3JjZVggPSByZWFjdGlvbkZvcmNlcy54LFxuICAgICAgICByZWFjdGlvbkZvcmNlWSA9IHJlYWN0aW9uRm9yY2VzLnlcbiAgICAgIHRoaXMuam9pbnRSZWFjdGlvbkZvcmNlWFNxU3Vtc1tqb2ludElkeF0gKz1cbiAgICAgICAgcmVhY3Rpb25Gb3JjZVggKiByZWFjdGlvbkZvcmNlWFxuICAgICAgdGhpcy5qb2ludFJlYWN0aW9uRm9yY2VZU3FTdW1zW2pvaW50SWR4XSArPVxuICAgICAgICByZWFjdGlvbkZvcmNlWSAqIHJlYWN0aW9uRm9yY2VZXG4gICAgICBpbnB1dHNbaV0gPSByZWFjdGlvbkZvcmNlWFxuICAgICAgaSsrXG4gICAgICBpbnB1dHNbaV0gPSByZWFjdGlvbkZvcmNlWVxuICAgICAgaSsrXG4gICAgICBpbnB1dHNbaV0gPSByZWFjdGlvblRvcnF1ZVxuICAgICAgaSsrXG4gICAgfVxuICAgIHJldHVybiBpbnB1dHNcbiAgfVxuXG4gIGdldE1vdG9yU3BlZWRzKCkge1xuICAgIGNvbnN0IGlucHV0c1JhdyA9IHRoaXMuZ2V0SW5wdXRzKCksXG4gICAgICBpbnB1dHMgPSBuZXcgTWF0cml4KGlucHV0c1JhdywgMSwgaW5wdXRzUmF3Lmxlbmd0aClcbiAgICBjb25zdCBzcGVlZERpZmZzID0gaW5wdXRzXG4gICAgICAvLyBjb25zdCBzcGVlZHMgPSBpbnB1dHNcbiAgICAgIC5tdWwodGhpcy53ZWlnaHRzWzBdKVxuICAgICAgLmFkZCh0aGlzLmJpYXNlc1swXSlcbiAgICAgIC8vIC5yZWx1KClcbiAgICAgIC8vIC5sZWFreVJlbHUoKVxuICAgICAgLmxlYWt5RWx1KClcbiAgICAgIC5tdWwodGhpcy53ZWlnaHRzWzFdKVxuICAgICAgLmFkZCh0aGlzLmJpYXNlc1sxXSlcbiAgICAgIC8vIC5yZWx1KClcbiAgICAgIC8vIC5sZWFreVJlbHUoKVxuICAgICAgLmxlYWt5RWx1KClcbiAgICAgIC5tdWwodGhpcy53ZWlnaHRzWzJdKVxuICAgICAgLmFkZCh0aGlzLmJpYXNlc1syXSkuZGF0YVxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgc3BlZWREaWZmcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgaWYgKHNwZWVkRGlmZnNbaV0gPiBtYXhTcGVlZERpZmYpIHtcbiAgICAvLyAgICAgY29uc3QgY2xpcHBlZERpZmYgPSBtYXhTcGVlZERpZmYgLSBzcGVlZERpZmZzW2ldXG4gICAgLy8gICAgIHRoaXMuY2xpcHBlZE91dHB1dFNxU3Vtc1tpXSArPSBjbGlwcGVkRGlmZiAqIGNsaXBwZWREaWZmXG4gICAgLy8gICAgIHNwZWVkRGlmZnNbaV0gPSBtYXhTcGVlZERpZmZcbiAgICAvLyAgIH0gZWxzZSBpZiAoc3BlZWREaWZmc1tpXSA8IC1tYXhTcGVlZERpZmYpIHtcbiAgICAvLyAgICAgY29uc3QgY2xpcHBlZERpZmYgPSAtbWF4U3BlZWREaWZmIC0gc3BlZWREaWZmc1tpXVxuICAgIC8vICAgICB0aGlzLmNsaXBwZWRPdXRwdXRTcVN1bXNbaV0gKz0gY2xpcHBlZERpZmYgKiBjbGlwcGVkRGlmZlxuICAgIC8vICAgICBzcGVlZERpZmZzW2ldID0gLW1heFNwZWVkRGlmZlxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwZWVkRGlmZnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNwZWVkRGlmZnNbaV0gPSBtYXhTcGVlZERpZmYgKiBNYXRoLnRhbmgoc3BlZWREaWZmc1tpXSlcbiAgICB9XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzcGVlZHMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgIHNwZWVkc1tpXSA9IG1heFNwZWVkICogTWF0aC50YW5oKHNwZWVkc1tpXSlcbiAgICAvLyB9XG4gICAgcmV0dXJuIHNwZWVkRGlmZnNcbiAgfVxuXG4gIHVwZGF0ZShzdGVwKSB7XG4gICAgY29uc3Qgc3BlZWREaWZmcyA9IHRoaXMuZ2V0TW90b3JTcGVlZHMoKVxuICAgIC8vIGNvbnN0IHNwZWVkcyA9IHRoaXMuZ2V0TW90b3JTcGVlZHMoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAvLyBsZXQgc3BlZWQgPSB0aGlzLmN1cnJlbnRKb2ludFNwZWVkc1tpXSArIHNwZWVkRGlmZnNbaV1cbiAgICAgIGxldCBzcGVlZCA9IHRoaXMubW90b3JTcGVlZHNbaV0gKyBzcGVlZERpZmZzW2ldXG4gICAgICBpZiAoc3BlZWQgPiBtYXhTcGVlZCkge1xuICAgICAgICBjb25zdCBjbGlwcGVkU3BlZWQgPSBtYXhTcGVlZCAtIHNwZWVkXG4gICAgICAgIHRoaXMuY2xpcHBlZFNwZWVkU3FTdW1zW2ldICs9IGNsaXBwZWRTcGVlZCAqIGNsaXBwZWRTcGVlZFxuICAgICAgICBzcGVlZCA9IG1heFNwZWVkXG4gICAgICB9IGVsc2UgaWYgKHNwZWVkIDwgLW1heFNwZWVkKSB7XG4gICAgICAgIGNvbnN0IGNsaXBwZWRTcGVlZCA9IC1tYXhTcGVlZCAtIHNwZWVkXG4gICAgICAgIHRoaXMuY2xpcHBlZFNwZWVkU3FTdW1zW2ldICs9IGNsaXBwZWRTcGVlZCAqIGNsaXBwZWRTcGVlZFxuICAgICAgICBzcGVlZCA9IC1tYXhTcGVlZFxuICAgICAgfVxuICAgICAgLy8gY29uc3Qgc3BlZWQgPSBzcGVlZHNbaV1cbiAgICAgIHRoaXMubW90b3JTcGVlZHNbaV0gPSBzcGVlZFxuICAgICAgdGhpcy5qb2ludHNbaV0uU2V0TW90b3JTcGVlZChzcGVlZClcbiAgICAgIHRoaXMubW90b3JTcGVlZFN1bXNbaV0gKz0gc3BlZWRcbiAgICAgIHRoaXMubW90b3JTcGVlZFNxU3VtICs9IHNwZWVkICogc3BlZWRcbiAgICAgIC8vIGNvbnN0IHNwZWVkRGlmZkNsaXBwZWQgPSB0aGlzLm1vdG9yU3BlZWRzW2ldIC0gdGhpcy5tb3RvclNwZWVkc1ByZXZbaV1cbiAgICAgIC8vIHRoaXMubW90b3JTcGVlZERpZmZTcVN1bSArPSBzcGVlZERpZmZDbGlwcGVkICogc3BlZWREaWZmQ2xpcHBlZFxuICAgICAgLy8gdGhpcy5tb3RvclNwZWVkc1ByZXZbaV0gPSB0aGlzLm1vdG9yU3BlZWRzW2ldXG4gICAgfVxuICAgIC8vIHRoaXMubW90b3JTcGVlZHNTcURpc3RTdW0gKz0gdGhpcy5tb3RvclNwZWVkc1NxRGlzdFxuXG4gICAgY29uc3QgZHJhd0luZm8gPSB0aGlzLmRyYXdJbmZvLnNsaWNlKClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYXdJbmZvLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmRyYXdIaXN0b3J5W3N0ZXAgKiBkcmF3SW5mby5sZW5ndGggKyBpXSA9IGRyYXdJbmZvW2ldXG4gICAgfVxuICAgIHRoaXMuZm9vdE5vcm1hbEltcHVsc2VzLmZpbGwoMClcbiAgICB0aGlzLmZvb3RUYW5nZW50SW1wdWxzZXMuZmlsbCgwKVxuICB9XG5cbiAgLy8gZ2V0IG1vdG9yU3BlZWRzU3FEaXN0KCkge1xuICAvLyAgIGNvbnN0IHNvcnRlZFNwZWVkcyA9IHRoaXMubW90b3JTcGVlZHMuc2xpY2UoKVxuICAvLyAgIHNvcnRlZFNwZWVkcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgLy8gICBsZXQgc3FEaXN0ID0gMFxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gIC8vICAgICBjb25zdCBkaXN0ID0gc29ydGVkU3BlZWRzW2ldIC0gc29ydGVkU3BlZWRzW2kgKyAxXVxuICAvLyAgICAgc3FEaXN0ICs9IGRpc3QgKiBkaXN0XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiBzcURpc3RcbiAgLy8gfVxuXG4gIGdldCBoaXN0b2dyYW1TY29yZSgpIHtcbiAgICBjb25zdCBoaXN0b2dyYW1TY29yZXMgPSB0aGlzLmhpc3RvZ3JhbVNjb3Jlcy5zbGljZSgpXG4gICAgbGV0IHRvdGFsU3FFcnIgPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIGNvbnN0IGpvaW50U3FFcnIgPSBoaXN0b2dyYW1TY29yZXNbaV1cbiAgICAgIHRvdGFsU3FFcnIgKz0gam9pbnRTcUVyciAqIGpvaW50U3FFcnJcbiAgICB9XG4gICAgcmV0dXJuIHRvdGFsU3FFcnIgLyA0XG4gIH1cblxuICBnZXQgaGlzdG9ncmFtU2NvcmVzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGbG9hdDMyQXJyYXkoNClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgY29uc3QgaGlzdCA9IHRoaXMuam9pbnRBbmdsZUhpc3RvZ3JhbXNbaV1cbiAgICAgIGxldCBqb2ludFNxRXJyID0gMFxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuSm9pbnRBbmdsZUJpbnM7IGorKykge1xuICAgICAgICBjb25zdCBiaW5Db3VudCA9IGhpc3Rbal0sXG4gICAgICAgICAgYmluQ291bnRFcnIgPVxuICAgICAgICAgICAgKGJpbkNvdW50IC0gdW5pZm9ybURpc3RCaW5Db3VudCkgLyAoZXBMZW4gLSB1bmlmb3JtRGlzdEJpbkNvdW50KVxuICAgICAgICBqb2ludFNxRXJyICs9IGJpbkNvdW50RXJyICogYmluQ291bnRFcnJcbiAgICAgIH1cbiAgICAgIHJlc3VsdFtpXSA9IGpvaW50U3FFcnJcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgZ2V0IHNjb3JlSW5mbygpIHtcbiAgICBjb25zdCBzY29yZUluZm8gPSB7XG4gICAgICBmaW5hbFg6IHRoaXMuY2hhc3Npc1Bvc1swXSxcbiAgICB9XG4gICAgLy8gXCJhbmdWZWxTcVN1bVwiLFxuICAgIC8vIFwiYnVtcFN1bVwiLFxuICAgIC8vIFwiY2hhc3Npc0FuZ2xlRXJyXCIsXG4gICAgLy8gXCJjaGFzc2lzQW5nbGVTcUVyclwiLFxuICAgIC8vIFwiaGlzdG9ncmFtU2NvcmVcIixcbiAgICAvLyBcIm1vdG9yU3BlZWRTcVN1bVwiLFxuICAgIC8vIFwibW90b3JTcGVlZERpZmZTcVN1bVwiLFxuICAgIC8vIFwieVNxRGlmZlN1bVwiLFxuICAgIC8vIFwieVZlbFNxU3VtXCIsXG4gICAgZm9yIChsZXQga2V5IG9mIHRoaXMuc2NvcmVLZXlzKSB7XG4gICAgICBzY29yZUluZm9ba2V5XSA9IHRoaXNba2V5XVxuICAgIH1cblxuICAgIHNjb3JlSW5mb1tcIndlaWdodE5vcm1zXCJdID0gdmVjdG9yTm9ybXModGhpcy53ZWlnaHRzKVxuICAgIHNjb3JlSW5mb1tcImJpYXNOb3Jtc1wiXSA9IHZlY3Rvck5vcm1zKHRoaXMuYmlhc2VzKVxuICAgIHNjb3JlSW5mb1tcImhpc3RvZ3JhbVNjb3Jlc1wiXSA9IHRoaXMuaGlzdG9ncmFtU2NvcmVzXG4gICAgc2NvcmVJbmZvW1wibW90b3JTcGVlZFN1bXNcIl0gPSB0aGlzLm1vdG9yU3BlZWRTdW1zXG4gICAgc2NvcmVJbmZvW1wiam9pbnRTcGVlZE1pbnNcIl0gPSB0aGlzLmpvaW50U3BlZWRNaW5zXG4gICAgc2NvcmVJbmZvW1wiam9pbnRTcGVlZE1heHNcIl0gPSB0aGlzLmpvaW50U3BlZWRNYXhzXG4gICAgc2NvcmVJbmZvW1wiam9pbnRTcGVlZFNxU3Vtc1wiXSA9IHRoaXMuam9pbnRTcGVlZFNxU3Vtc1xuICAgIHNjb3JlSW5mb1tcImpvaW50TW90b3JTcGVlZERpZmZTcVN1bXNcIl0gPSB0aGlzLmpvaW50TW90b3JTcGVlZERpZmZTcVN1bXNcbiAgICBzY29yZUluZm9bXCJqb2ludFJlYWN0aW9uVG9ycXVlU3FTdW1zXCJdID0gdGhpcy5qb2ludFJlYWN0aW9uVG9ycXVlU3FTdW1zXG4gICAgc2NvcmVJbmZvW1wiam9pbnRSZWFjdGlvbkZvcmNlWFNxU3Vtc1wiXSA9IHRoaXMuam9pbnRSZWFjdGlvbkZvcmNlWFNxU3Vtc1xuICAgIHNjb3JlSW5mb1tcImpvaW50UmVhY3Rpb25Gb3JjZVlTcVN1bXNcIl0gPSB0aGlzLmpvaW50UmVhY3Rpb25Gb3JjZVlTcVN1bXNcblxuICAgIHNjb3JlSW5mb1tcInJvbGxpbmdKb2ludFNwZWVkQWJzU3Vtc1wiXSA9IHRoaXMucm9sbGluZ0pvaW50U3BlZWRBYnNTdW1zXG4gICAgc2NvcmVJbmZvW1wicm9sbGluZ0pvaW50U3BlZWRTcVN1bXNcIl0gPSB0aGlzLnJvbGxpbmdKb2ludFNwZWVkU3FTdW1zXG4gICAgc2NvcmVJbmZvW1wicm9sbGluZ0pvaW50U3BlZWRBYnNEaWZmU3Vtc1wiXSA9XG4gICAgICB0aGlzLnJvbGxpbmdKb2ludFNwZWVkQWJzRGlmZlN1bXNcbiAgICBzY29yZUluZm9bXCJyb2xsaW5nSm9pbnRTcGVlZFNxRGlmZlN1bXNcIl0gPSB0aGlzLnJvbGxpbmdKb2ludFNwZWVkU3FEaWZmU3Vtc1xuXG4gICAgc2NvcmVJbmZvW1wiam9pbnRTcGVlZFNxRGlmZnNcIl0gPSB0aGlzLmpvaW50U3BlZWRTcURpZmZzXG4gICAgc2NvcmVJbmZvW1wiY2xpcHBlZE91dHB1dFNxU3Vtc1wiXSA9IHRoaXMuY2xpcHBlZE91dHB1dFNxU3Vtc1xuICAgIHNjb3JlSW5mb1tcImNsaXBwZWRTcGVlZFNxU3Vtc1wiXSA9IHRoaXMuY2xpcHBlZFNwZWVkU3FTdW1zXG5cbiAgICByZXR1cm4gc2NvcmVJbmZvXG4gIH1cbn1cblxuZnVuY3Rpb24gYjJDcmVhdGVQb2x5Z29uU2hhcGUodmVydGljZXMsIGIyKSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IGIyLmIyUG9seWdvblNoYXBlKClcbiAgY29uc3QgYnVmZmVyID0gYjIuX21hbGxvYyh2ZXJ0aWNlcy5sZW5ndGggKiA4KVxuICBsZXQgb2Zmc2V0ID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgYjIuSEVBUEYzMlsoYnVmZmVyICsgb2Zmc2V0KSA+PiAyXSA9IHZlcnRpY2VzW2ldLmdldF94KClcbiAgICBiMi5IRUFQRjMyWyhidWZmZXIgKyAob2Zmc2V0ICsgNCkpID4+IDJdID0gdmVydGljZXNbaV0uZ2V0X3koKVxuICAgIG9mZnNldCArPSA4XG4gIH1cbiAgY29uc3QgcHRyX3dyYXBwZWQgPSBiMi53cmFwUG9pbnRlcihidWZmZXIsIGIyLmIyVmVjMilcbiAgc2hhcGUuU2V0KHB0cl93cmFwcGVkLCB2ZXJ0aWNlcy5sZW5ndGgpXG4gIHJldHVybiBzaGFwZVxufVxuXG5jbGFzcyBNYXRyaXgge1xuICBjb25zdHJ1Y3RvcihkYXRhLCBtLCBuKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YVxuICAgIHRoaXMubSA9IG1cbiAgICB0aGlzLm4gPSBuXG4gIH1cblxuICBtdWwob3RoZXIpIHtcbiAgICBjb25zdCBhID0gdGhpcy5kYXRhLFxuICAgICAgYiA9IG90aGVyLmRhdGEsXG4gICAgICBtID0gdGhpcy5tLFxuICAgICAgbiA9IHRoaXMubixcbiAgICAgIHAgPSBvdGhlci5uLFxuICAgICAgYyA9IG5ldyBGbG9hdDMyQXJyYXkobmV3IEFycmF5QnVmZmVyKDQgKiBtICogcCkpXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwOyBqKyspIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgIGxldCBzdW0gPSAwXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgc3VtICs9IGFbaSAqIG4gKyBrXSAqIGJbayAqIHAgKyBqXVxuICAgICAgICB9XG4gICAgICAgIGNbaSAqIHAgKyBqXSA9IHN1bVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IE1hdHJpeChjLCBtLCBwKVxuICB9XG5cbiAgYWRkKG90aGVyKSB7XG4gICAgY29uc3QgYSA9IHRoaXMuZGF0YSxcbiAgICAgIGIgPSBvdGhlci5kYXRhLFxuICAgICAgbCA9IGEubGVuZ3RoLFxuICAgICAgYyA9IG5ldyBGbG9hdDMyQXJyYXkobmV3IEFycmF5QnVmZmVyKDQgKiBsKSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgY1tpXSA9IGFbaV0gKyBiW2ldXG4gICAgfVxuICAgIHJldHVybiBuZXcgTWF0cml4KGMsIHRoaXMubSwgdGhpcy5uKVxuICB9XG5cbiAgcmVsdSgpIHtcbiAgICBjb25zdCBuID0gdGhpcy5kYXRhLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IHRoaXMuZGF0YS5zbGljZSgpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIHJlc3VsdFtpXSA9IE1hdGgubWF4KDAsIHJlc3VsdFtpXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBNYXRyaXgocmVzdWx0LCB0aGlzLm0sIHRoaXMubilcbiAgfVxuXG4gIGxlYWt5UmVsdSgpIHtcbiAgICBjb25zdCBuID0gdGhpcy5kYXRhLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IHRoaXMuZGF0YS5zbGljZSgpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIHJlc3VsdFtpXSA9IE1hdGgubWF4KDAuMSAqIHJlc3VsdFtpXSwgcmVzdWx0W2ldKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IE1hdHJpeChyZXN1bHQsIHRoaXMubSwgdGhpcy5uKVxuICB9XG5cbiAgZWx1KCkge1xuICAgIGNvbnN0IG4gPSB0aGlzLmRhdGEubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gdGhpcy5kYXRhLnNsaWNlKClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgaWYgKHJlc3VsdFtpXSA8IDApIHtcbiAgICAgICAgcmVzdWx0W2ldID0gTWF0aC5leHBtMShyZXN1bHRbaV0pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgTWF0cml4KHJlc3VsdCwgdGhpcy5tLCB0aGlzLm4pXG4gIH1cblxuICBsZWFreUVsdSgpIHtcbiAgICBjb25zdCBuID0gdGhpcy5kYXRhLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IHRoaXMuZGF0YS5zbGljZSgpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGlmIChyZXN1bHRbaV0gPCAwKSB7XG4gICAgICAgIHJlc3VsdFtpXSA9IE1hdGguZXhwbTEocmVzdWx0W2ldKSArIDAuMSAqIHJlc3VsdFtpXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IE1hdHJpeChyZXN1bHQsIHRoaXMubSwgdGhpcy5uKVxuICB9XG59XG5cbmZ1bmN0aW9uIHZlY3Rvck5vcm1zKHZlY3RvcnMpIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IEZsb2F0MzJBcnJheSh2ZWN0b3JzLmxlbmd0aCkuZmlsbCgwKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZlY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB2ZWN0b3IgPSB2ZWN0b3JzW2ldLmRhdGFcbiAgICBmb3IgKGxldCB4IG9mIHZlY3Rvcikge1xuICAgICAgcmVzdWx0W2ldICs9IHggKiB4XG4gICAgfVxuICAgIHJlc3VsdFtpXSAvPSB2ZWN0b3IubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyB0aGUgc3RhcnR1cCBmdW5jdGlvblxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcblx0Ly8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5cdHZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYm94MmQtd2FzbV9kaXN0X2VzX0JveDJEX2pzXCIsXCJzcmNfcGFnZXNfc3BvdF9nbG9iYWxzX2pzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL3Nwb3QvYjJkLXdvcmtlci5qc1wiKSkpXG5cdF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5cdHJldHVybiBfX3dlYnBhY2tfZXhwb3J0c19fO1xufTtcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rcyBhbmQgc2libGluZyBjaHVua3MgZm9yIHRoZSBlbnRyeXBvaW50XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyB7XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ib3gyZC13YXNtX2Rpc3RfZXNfQm94MkRfanNcIjpcIjExNjUwZDYzZTE3OTdmZWJiNjgzXCIsXCJzcmNfcGFnZXNfc3BvdF9nbG9iYWxzX2pzXCI6XCIyY2EzY2M5YWE1MDExNTA1NTc4N1wifVtjaHVua0lkXSArIFwiLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBzZWxmLmxvY2F0aW9uICsgXCJcIjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3Ncbi8vIFwiMVwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJzcmNfcGFnZXNfc3BvdF9iMmQtd29ya2VyX2pzXCI6IDFcbn07XG5cbi8vIGltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZ1xudmFyIGluc3RhbGxDaHVuayA9IChkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0d2hpbGUoY2h1bmtJZHMubGVuZ3RoKVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkcy5wb3AoKV0gPSAxO1xuXHRwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaSA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHQvLyBcIjFcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcblx0aWYoIWluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRpbXBvcnRTY3JpcHRzKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKSk7XG5cdFx0fVxuXHR9XG59O1xuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3RpcHB5X3Byb2plY3Rfd2Vic2l0ZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0aXBweV9wcm9qZWN0X3dlYnNpdGVcIl0gfHwgW107XG52YXIgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24gPSBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IGluc3RhbGxDaHVuaztcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdCIsInZhciBuZXh0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy54O1xuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2JveDJkLXdhc21fZGlzdF9lc19Cb3gyRF9qc1wiKSxcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJzcmNfcGFnZXNfc3BvdF9nbG9iYWxzX2pzXCIpXG5cdF0pLnRoZW4obmV4dCk7XG59OyIsIiIsIi8vIHJ1biBzdGFydHVwXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIiwiIl0sIm5hbWVzIjpbIkJveDJERmFjdG9yeSIsIlNwb3QiLCJiMkdyb3VuZFciLCJiMkdyb3VuZEgiLCJzaG91bGRlckhNZXRlcnMiLCJuV29ya2VycyIsImVwTGVuIiwicG9wc2l6ZU11bHRpcGxpZXIiLCJ0cyIsImNyZWF0dXJlc1BlcldvcmtlciIsInBvcHVsYXRpb24iLCJ3b3JsZCIsImIyIiwic2ltcGxlU2NvcmUiLCJvbm1lc3NhZ2UiLCJlIiwiZGF0YSIsImluZm8iLCJtc2ciLCJpbml0Iiwic2V0V3RzIiwibWFpbiIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdHVyZUlkeCIsInJhbmsiLCJwb3N0TWVzc2FnZSIsImhpc3RvcnkiLCJzcG90cyIsImRyYXdIaXN0b3J5IiwidGhlbiIsImIyRCIsImdyYXZpdHkiLCJiMlZlYzIiLCJiMldvcmxkIiwiUG9wdWxhdGlvbiIsImdyb3VuZCIsIkNyZWF0ZUJvZHkiLCJiMkJvZHlEZWYiLCJncm91bmRTaGFwZSIsImIyRWRnZVNoYXBlIiwiU2V0VHdvU2lkZWQiLCJncm91bmRGRCIsImIyRml4dHVyZURlZiIsInNldF9zaGFwZSIsInNldF9mcmljdGlvbiIsInNldF9yZXN0aXR1dGlvbiIsImdyb3VuZEZpeHR1cmUiLCJjYXN0T2JqZWN0IiwiQ3JlYXRlRml4dHVyZSIsImIyRml4dHVyZSIsInNwb3QiLCJuX2RpbSIsIndlaWdodENvdW50IiwiYmlhc0NvdW50IiwiZ2V0Q3JlYXR1cmVzUGVyV29ya2VyIiwiYWRkU3BvdHMiLCJjb250YWN0TGlzdGVuZXIiLCJKU0NvbnRhY3RMaXN0ZW5lciIsIkJlZ2luQ29udGFjdCIsImNvbnRhY3QiLCJQcmVTb2x2ZSIsIlBvc3RTb2x2ZSIsImNvbnRhY3RJbXB1bHNlIiwid3JhcFBvaW50ZXIiLCJiMkNvbnRhY3QiLCJmaXh0dXJlcyIsIkdldEZpeHR1cmVBIiwiR2V0Rml4dHVyZUIiLCJub25Hcm91bmRGaXh0dXJlIiwiZm9vdCIsInBhcnRUeXBlIiwiYjJDb250YWN0SW1wdWxzZSIsInRhbmdlbnRJbXB1bHNlIiwidGFuZ2VudEltcHVsc2VzIiwibm9ybWFsSW1wdWxzZSIsIm5vcm1hbEltcHVsc2VzIiwiZm9vdE5vcm1hbEltcHVsc2VzIiwiZm9vdElEIiwiZm9vdFRhbmdlbnRJbXB1bHNlcyIsImZvb3RUYW5nZW50SW1wdWxzZVN1bSIsImZvb3ROb3JtYWxJbXB1bHNlQWJzU3VtIiwibm9uRm9vdE5vcm1hbEltcHVsc2VBYnNTdW0iLCJFbmRDb250YWN0IiwiU2V0Q29udGFjdExpc3RlbmVyIiwicmVzZXQiLCJ1cGRhdGUiLCJpIiwiU3RlcCIsInNjb3JlU29sdXRpb25JbmZvIiwic2NvcmVJbmZvIiwiZmxhdFd0cyIsInNsaWNlIiwicHVzaCIsInNob3VsZGVyUG9zIiwiblNwb3RzIiwiZmxhdFd0c0lkeCIsImxlbmd0aCIsInN0ZXAiLCJtdWx0aXBsaWVyIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsImZvb3RSYWRpdXMiLCJhbmtsZVB0Iiwia25lZVB0IiwiaGlwUHQiLCJ1cHBlckxlZ0xpbWl0cyIsInVwcGVyTGVnTWF4VG9ycXVlIiwibG93ZXJMZWdMaW1pdHMiLCJsb3dlckxlZ01heFRvcnF1ZSIsInVwcGVyTGVnUHRzIiwibG93ZXJMZWdQdHMiLCJjaGFzc2lzUHRzIiwibWF4U3BlZWQiLCJtYXhTcGVlZERpZmYiLCJuSm9pbnRBbmdsZUJpbnMiLCJ1bmlmb3JtRGlzdEJpbkNvdW50Iiwicm9sbGluZ1dpbmRvdyIsInRhcmdldFZlbFgiLCJKT0lOVF9TUEVFRF9JTklUIiwiSW5maW5pdHkiLCJzaG91bGRlckluaXRQdCIsImVsYm93SW5pdFB0IiwiaGlwSW5pdFB0Iiwia25lZUluaXRQdCIsImNoYXNzaXNCb2R5IiwiY3JlYXRlUG9seWdvbkJvZHkiLCJ1cHBlckZvcmVsZWdCb2R5IiwidXBwZXJIaW5kbGVnQm9keSIsImxvd2VyRm9yZWxlZ0JvZHkiLCJhZGRGb290IiwibG93ZXJIaW5kbGVnQm9keSIsImpvaW50cyIsImFkZEpvaW50IiwicHJldlhWZWwiLCJwcmV2WVZlbCIsInByZXZBbmdWZWwiLCJjaGFzc2lzVmVsWCIsInhNYXgiLCJwcmV2WFZlbHMiLCJGbG9hdDMyQXJyYXkiLCJyb2xsaW5nWFZlbE1heCIsIm1vdG9yU3BlZWRzIiwiZmlsbCIsIm1vdG9yU3BlZWRTdW1zIiwiY2xpcHBlZE91dHB1dFNxU3VtcyIsImNsaXBwZWRTcGVlZFNxU3VtcyIsImpvaW50U3BlZWRNaW5zIiwiam9pbnRTcGVlZE1heHMiLCJjdXJyZW50Sm9pbnRTcGVlZHMiLCJwcmV2Sm9pbnRTcGVlZHMiLCJyb2xsaW5nSm9pbnRTcGVlZHMiLCJwcmV2Um9sbGluZ0pvaW50U3BlZWRzIiwicm9sbGluZ0pvaW50U3BlZWRBYnNTdW1zIiwicm9sbGluZ0pvaW50U3BlZWRTcVN1bXMiLCJyb2xsaW5nSm9pbnRTcGVlZEFic0RpZmZTdW1zIiwicm9sbGluZ0pvaW50U3BlZWRTcURpZmZTdW1zIiwiam9pbnRTcGVlZFNxRGlmZnMiLCJqb2ludFNwZWVkU3FTdW1zIiwiam9pbnRSZWFjdGlvblRvcnF1ZVNxU3VtcyIsImpvaW50UmVhY3Rpb25Gb3JjZVhTcVN1bXMiLCJqb2ludFJlYWN0aW9uRm9yY2VZU3FTdW1zIiwiam9pbnRNb3RvclNwZWVkRGlmZlNxU3VtcyIsImpvaW50QW5nbGVIaXN0b2dyYW1zIiwiam9pbnRBbmdsZU1pbnMiLCJqb2ludEFuZ2xlQmluV2lkdGhzIiwiVWludDE2QXJyYXkiLCJqb2ludCIsImFuZ2xlTWluIiwiR2V0TG93ZXJMaW1pdCIsImFuZ2xlTWF4IiwiR2V0VXBwZXJMaW1pdCIsImJpbldpZHRoIiwiaW5wdXREaW0iLCJnZXRJbnB1dHMiLCJzaGFwZXMiLCJuIiwibSIsImNoYXNzaXNQb3MiLCJjaGFzc2lzQW5nbGUiLCJzaG91bGRlckFuZ2xlIiwiaGlwQW5nbGUiLCJlbGJvd0FuZ2xlIiwia25lZUFuZ2xlIiwiZHJhd0luZm8iLCJzY29yZUtleXMiLCJmcm9tIiwicG9zIiwicHRzIiwiZGVuc2l0eSIsInZlcnRpY2VzIiwiYmQiLCJzZXRfdHlwZSIsImIyX2R5bmFtaWNCb2R5Iiwic2V0X3Bvc2l0aW9uIiwic2V0X2xpbmVhckRhbXBpbmciLCJzZXRfYW5ndWxhckRhbXBpbmciLCJib2R5Iiwic2hhcGUiLCJiMkNyZWF0ZVBvbHlnb25TaGFwZSIsImZkIiwiZmlsdGVyIiwiZ2V0X2ZpbHRlciIsInNldF9jYXRlZ29yeUJpdHMiLCJzZXRfbWFza0JpdHMiLCJzZXRfZmlsdGVyIiwic2V0X2RlbnNpdHkiLCJmaXh0dXJlIiwiYjJDaXJjbGVTaGFwZSIsInNldF9tX3JhZGl1cyIsInNldF9tX3AiLCJib2R5MCIsImJvZHkxIiwibGltaXRzIiwibWF4VG9ycXVlIiwiamQiLCJiMlJldm9sdXRlSm9pbnREZWYiLCJJbml0aWFsaXplIiwic2V0X2VuYWJsZUxpbWl0Iiwic2V0X2xvd2VyQW5nbGUiLCJzZXRfdXBwZXJBbmdsZSIsInNldF9lbmFibGVNb3RvciIsInNldF9tYXhNb3RvclRvcnF1ZSIsIkNyZWF0ZUpvaW50IiwiYjJSZXZvbHV0ZUpvaW50IiwiZmxhdFd0SWR4Iiwid2VpZ2h0cyIsIm5ld1dlaWdodCIsIk1hdHJpeCIsImJpYXNlcyIsIm5ld0JpYXMiLCJrZXkiLCJTZXRUcmFuc2Zvcm0iLCJTZXRMaW5lYXJWZWxvY2l0eSIsIlNldEFuZ3VsYXJWZWxvY2l0eSIsIlNldEF3YWtlIiwiU2V0RW5hYmxlZCIsImFuZ2xlIiwiaGlzdCIsImJpbklkeCIsIm1heCIsIm1pbiIsImlucHV0cyIsImJvZHlQb3MiLCJHZXRQb3NpdGlvbiIsIngiLCJ5IiwieURpZmYiLCJ5U3FEaWZmU3VtIiwiR2V0QW5nbGUiLCJjaGFzc2lzQW5nbGVFcnIiLCJjaGFzc2lzQW5nbGVTcUVyciIsImNoYXNzaXNWZWwiLCJHZXRMaW5lYXJWZWxvY2l0eSIsImNoYXNzaXNWZWxZIiwid2luZG93SWR4Iiwicm9sbGluZ1ZlbFgiLCJ2ZWxYRXJyIiwicm9sbGluZ1ZlbFhFcnIiLCJjaGFzc2lzVmVsWFNxRXJyU3VtIiwicm9sbGluZ1ZlbFhTcUVyclN1bSIsInlWZWxTcVN1bSIsInhWZWxEaWZmIiwieVZlbERpZmYiLCJ4VmVsRGlmZlNxU3VtIiwieVZlbERpZmZTcVN1bSIsImFuZ1ZlbCIsIkdldEFuZ3VsYXJWZWxvY2l0eSIsImFuZ1ZlbERpZmYiLCJhbmdWZWxEaWZmU3FTdW0iLCJhbmdWZWxEaWZmQWJzU3VtIiwiYWJzIiwiYW5nVmVsU3FTdW0iLCJhbmdWZWxBYnNTdW0iLCJmb290SWR4IiwiZm9vdE5vcm1hbEltcHVsc2UiLCJmb290VGFuZ2VudEltcHVsc2UiLCJqb2ludEFuZ2xlS2V5cyIsImpvaW50SWR4Iiwiam9pbnRBbmdsZSIsIkdldEpvaW50QW5nbGUiLCJ1cGRhdGVKb2ludEFuZ2xlSGlzdG9ncmFtIiwiam9pbnRTcGVlZCIsIkdldEpvaW50U3BlZWQiLCJqb2ludFdpbmRvd0lkeCIsInJvbGxpbmdKb2ludFNwZWVkRGlmZiIsImpvaW50U3BlZWREaWZmIiwibW90b3JTcGVlZCIsIkdldE1vdG9yU3BlZWQiLCJqb2ludE1vdG9yU3BlZWREaWZmIiwicmVhY3Rpb25Ub3JxdWUiLCJHZXRSZWFjdGlvblRvcnF1ZSIsInJlYWN0aW9uRm9yY2VzIiwiR2V0UmVhY3Rpb25Gb3JjZSIsInJlYWN0aW9uRm9yY2VYIiwicmVhY3Rpb25Gb3JjZVkiLCJpbnB1dHNSYXciLCJzcGVlZERpZmZzIiwibXVsIiwiYWRkIiwibGVha3lFbHUiLCJ0YW5oIiwiZ2V0TW90b3JTcGVlZHMiLCJzcGVlZCIsImNsaXBwZWRTcGVlZCIsIlNldE1vdG9yU3BlZWQiLCJtb3RvclNwZWVkU3FTdW0iLCJoaXN0b2dyYW1TY29yZXMiLCJ0b3RhbFNxRXJyIiwiam9pbnRTcUVyciIsInJlc3VsdCIsImoiLCJiaW5Db3VudCIsImJpbkNvdW50RXJyIiwiZmluYWxYIiwidmVjdG9yTm9ybXMiLCJiMlBvbHlnb25TaGFwZSIsImJ1ZmZlciIsIl9tYWxsb2MiLCJvZmZzZXQiLCJIRUFQRjMyIiwiZ2V0X3giLCJnZXRfeSIsInB0cl93cmFwcGVkIiwiU2V0Iiwib3RoZXIiLCJhIiwiYiIsInAiLCJjIiwiQXJyYXlCdWZmZXIiLCJzdW0iLCJrIiwibCIsImV4cG0xIiwidmVjdG9ycyIsInZlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=