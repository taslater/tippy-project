/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
        population.addTippys(nSolutions * targets.length - this.tippys.length);
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

/***/ "./src/pages/tippy/workers/simulation-worker.js":
/*!******************************************************!*\
  !*** ./src/pages/tippy/workers/simulation-worker.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var box2d_wasm_dist_es_Box2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! box2d-wasm/dist/es/Box2D */ "./node_modules/box2d-wasm/dist/es/Box2D.js");
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../globals.js */ "./src/pages/tippy/globals.js");
/* harmony import */ var _tippy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../tippy.js */ "./src/pages/tippy/tippy.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// importScripts("../Box2D-js/Box2D_v2.3.1_min.js", "../globals.js", "../tippy.js")



var population = null;

onmessage = function onmessage(e) {
  var _e$data = _slicedToArray(e.data, 2),
      info = _e$data[0],
      msg = _e$data[1];

  if (info == "terrainPts") {
    (0,box2d_wasm_dist_es_Box2D__WEBPACK_IMPORTED_MODULE_0__["default"])().then(function (b2) {
      population = new _tippy_js__WEBPACK_IMPORTED_MODULE_2__.Population([0, 0], 1, msg, b2);
    });
  } else if (info == "targetsSolutions") {
    var solutionsScores = population.train(msg);
    postMessage(["solutionsScores", solutionsScores]);
  }
};

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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_box2d-wasm_dist_es_Box2D_js"], () => (__webpack_require__("./src/pages/tippy/workers/simulation-worker.js")))
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
/******/ 			return "" + chunkId + "." + "eb94123c0852fc879625" + ".js";
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
/******/ 			"src_pages_tippy_workers_simulation-worker_js": 1
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_test"] = self["webpackChunkwebpack_test"] || [];
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
/******/ 			return __webpack_require__.e("vendors-node_modules_box2d-wasm_dist_es_Box2D_js").then(next);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX3RpcHB5X3dvcmtlcnNfc2ltdWxhdGlvbi13b3JrZXJfanMuZDUzMjk2MmZiMjQ3ZGU0NTI0ZTkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxPQUFPLEdBQUc7QUFDckJDLEVBQUFBLENBQUMsRUFBRSxHQURrQjtBQUVyQkMsRUFBQUEsQ0FBQyxFQUFFLEdBRmtCO0FBR3JCQyxFQUFBQSxXQUFXLEVBQUUsQ0FBQyxNQUFELEVBQVMsV0FBVCxDQUhRO0FBSXJCQyxFQUFBQSxXQUFXLEVBQUUsQ0FBQyxNQUFELEVBQVMsWUFBVCxDQUpRO0FBS3JCQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUYsRUFBTyxDQUFDLEdBQVIsRUFBYSxHQUFiLEVBQWtCLEdBQWxCLENBTGM7QUFNckJDLEVBQUFBLEVBQUUsRUFBRSxNQUFNLEVBTlc7QUFPckI7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLEdBUmE7QUFTckI7QUFDQUMsRUFBQUEsT0FBTyxFQUFFLElBVlk7QUFXckJDLEVBQUFBLFFBQVEsRUFBRSxJQVhXO0FBWXJCQyxFQUFBQSxNQUFNLEVBQUUsQ0FaYTtBQWFyQkMsRUFBQUEsUUFBUSxFQUFFLElBYlc7QUFjckJDLEVBQUFBLGVBQWUsRUFBRSxHQWRJO0FBZXJCQyxFQUFBQSx5QkFBeUIsRUFBRSxDQWZOO0FBZ0JyQkMsRUFBQUEsb0JBQW9CLEVBQUUsR0FoQkQ7O0FBaUJyQjtBQUNBLE1BQUlDLFdBQUosR0FBa0I7QUFDaEIsV0FBTyxLQUFLLEtBQUtILGVBQUwsR0FBdUIsS0FBS0Usb0JBQWpDLElBQXlELENBQWhFO0FBQ0QsR0FwQm9COztBQXFCckJFLEVBQUFBLEtBQUssRUFBRSxHQXJCYztBQXNCckJDLEVBQUFBLEtBQUssRUFBRSxHQXRCYztBQXVCckI7QUFDQUMsRUFBQUEsVUFBVSxFQUFFLEdBeEJTO0FBeUJyQkMsRUFBQUEsUUFBUSxFQUFFLEdBekJXO0FBMEJyQkMsRUFBQUEsWUFBWSxFQUFFLEtBMUJP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dXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy90aXBweS9nbG9iYWxzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy90aXBweS9yYW5kb21fbm9ybWFsLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy90aXBweS90aXBweS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvLi9zcmMvcGFnZXMvdGlwcHkvd29ya2Vycy9zaW11bGF0aW9uLXdvcmtlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3QvaWdub3JlZHwvVXNlcnMvdG9tL0Rlc2t0b3AvY29kZV90ZXN0cy93ZWJwYWNrLXRlc3RzL3dlYnBhY2stZ2gtcGFnZXMtdGVzdC9ub2RlX21vZHVsZXMvYm94MmQtd2FzbS9kaXN0L2VzfGZzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC9pZ25vcmVkfC9Vc2Vycy90b20vRGVza3RvcC9jb2RlX3Rlc3RzL3dlYnBhY2stdGVzdHMvd2VicGFjay1naC1wYWdlcy10ZXN0L25vZGVfbW9kdWxlcy9ib3gyZC13YXNtL2Rpc3QvZXN8cGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL2ltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlc3Qvd2VicGFjay9ydW50aW1lL3N0YXJ0dXAgY2h1bmsgZGVwZW5kZW5jaWVzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stdGVzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2xvYmFscyA9IHtcbiAgdzogODAwLFxuICBoOiA0MDAsXG4gIGxJbnB1dENvZGVzOiBbXCJLZXlKXCIsIFwiQXJyb3dMZWZ0XCJdLFxuICBySW5wdXRDb2RlczogW1wiS2V5S1wiLCBcIkFycm93UmlnaHRcIl0sXG4gIHhPZmZzOiBbLTAuMywgLTAuMSwgMC4xLCAwLjNdLFxuICB0czogMS4wIC8gNjAsXG4gIC8vIHNpbkxpbTogMC4zLFxuICBzaW5MaW06IDAuNCxcbiAgLy8gZGlyZWN0aW9uU3RlcDogMC4wMixcbiAgc2luU3RlcDogMC4wMyxcbiAgc2luRGVjYXk6IDAuMDEsXG4gIHZlbExpbTogNCxcbiAgdmVsRGVjYXk6IDAuMDEsXG4gIGdyb3VuZEhhbGZXaWR0aDogMTAwLFxuICBncm91bmRGbGF0Q2VudGVySGFsZldpZHRoOiAxLFxuICBncm91bmREZXRhaWxJbnRlcnZhbDogMC4yLFxuICAvLyBuVGVycmFpblB0czogMiAqICh0aGlzLmdyb3VuZEhhbGZXaWR0aCAvIHRoaXMuZ3JvdW5kRGV0YWlsSW50ZXJ2YWwpICsgMSxcbiAgZ2V0IG5UZXJyYWluUHRzKCkge1xuICAgIHJldHVybiAyICogKHRoaXMuZ3JvdW5kSGFsZldpZHRoIC8gdGhpcy5ncm91bmREZXRhaWxJbnRlcnZhbCkgKyAxXG4gIH0sXG4gIHdhbGxIOiAwLjksXG4gIHdhbGxXOiAwLjUsXG4gIC8vIHNsb3BlTWFnOiAwLjEsXG4gIHNsb3BlRGVjYXk6IDAuOSxcbiAgc2xvcGVMaW06IDAuNCxcbiAgc2xvcGVEaWZmTWFnOiAwLjEyNSxcbiAgc2xvcGVEaWZmRGVjYXk6IDEuMSxcbiAgc2xvcGVEaWZmTGltOiAwLjIsXG4gIGdldCBiYXJNYXgoKSB7XG4gICAgY29uc3QgbGltID0gdGhpcy50YXJnZXRUeXBlID09IFwidmVsXCIgPyB0aGlzLnZlbExpbSA6IHRoaXMuc2luTGltXG4gICAgcmV0dXJuICgwLjUgKiAwLjkgKiB0aGlzLncpIC8gbGltXG4gIH0sXG4gIGJhckhlaWdodDogMjUsXG4gIC8vIHNjb3JlRGVub21FcHM6IDAuMDEsXG4gIC8vIHNjb3JlRGVub21FcHM6IDAuMSxcbiAgZ2V0IHNjb3JlRGVub21FcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2luTGltXG4gIH0sXG4gIGNyYXNoU2luTGltaXQ6IDAuOCxcbiAgbWF4VG9ycXVlOiAxLjAsXG4gIG5Xb3JrZXJzOiA4LFxuICBtdWx0aXBsaWVyOiAyLFxuICBlcExlbjogODAwLFxuICB0d2l0Y2hpbmVzc2VzOiBbMCwgMC4xLCAwLjA1LCAwLjAyNSwgMC4wMSwgMC4wMDUsIDAuMDAyNSwgbnVsbF0sXG4gIGNtYVNpZ21hOiAwLjUsXG4gIC8vIHRhcmdldFR5cGU6IFwic2luXCIsXG4gIHRhcmdldFR5cGU6IFwidmVsXCIsXG59XG4iLCJmdW5jdGlvbiBib3hfbXVsbGVyKCkge1xuICBsZXQgdTAgPSBNYXRoLnJhbmRvbSgpXG4gIGxldCB1MSA9IE1hdGgucmFuZG9tKClcbiAgLy8gbGV0IHBhcnQwID0gKC0yLjAgKiB1MC5sbigpKS5zcXJ0KClcbiAgbGV0IHBhcnQwID0gTWF0aC5zcXJ0KC0yLjAgKiBNYXRoLmxvZyh1MCkpXG4gIGxldCBwYXJ0MSA9IDIuMCAqIE1hdGguUEkgKiB1MVxuICBsZXQgejAgPSBwYXJ0MCAqIE1hdGguY29zKHBhcnQxKVxuICBsZXQgejEgPSBwYXJ0MCAqIE1hdGguc2luKHBhcnQxKVxuXG4gIHJldHVybiBGbG9hdDMyQXJyYXkuZnJvbShbejAsIHoxXSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRfbm9ybWFsKG4pIHtcbiAgY29uc3QgcmVzID0gbmV3IEZsb2F0MzJBcnJheShuKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IHBhaXIgPSBib3hfbXVsbGVyKClcbiAgICByZXNbaV0gPSBwYWlyWzBdXG4gICAgaWYgKGkgKyAxID49IG4pIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGkrK1xuICAgIHJlc1tpXSA9IHBhaXJbMV1cbiAgfVxuICByZXR1cm4gcmVzXG59XG4iLCJpbXBvcnQgeyBnbG9iYWxzIH0gZnJvbSBcIi4vZ2xvYmFscy5qc1wiXG5pbXBvcnQgeyByYW5kX25vcm1hbCB9IGZyb20gXCIuL3JhbmRvbV9ub3JtYWwuanNcIlxuXG5jbGFzcyBUaXBweSB7XG4gIGNvbnN0cnVjdG9yKHdoZWVsUG9zSW5pdCwgd29ybGQsIGIyLCBwb3B1bGF0aW9uKSB7XG4gICAgdGhpcy5wb3B1bGF0aW9uID0gcG9wdWxhdGlvblxuICAgIGNvbnNvbGUuYXNzZXJ0KHdoZWVsUG9zSW5pdC5sZW5ndGggPT0gMiwgXCJUaXBweSByZXF1aXJlcyAyZCB3aGVlbFBvc1wiKVxuICAgIC8vIHRoaXMud2hlZWxQb3NJbml0ID0gd2hlZWxQb3NJbml0LnNsaWNlKClcbiAgICB0aGlzLndoZWVsUiA9IDAuMjVcbiAgICB0aGlzLndoZWVsUG9zSW5pdCA9IFt3aGVlbFBvc0luaXRbMF0sIHdoZWVsUG9zSW5pdFsxXSAtIHRoaXMud2hlZWxSXVxuICAgIGNvbnN0IHdoZWVsRnJpY3Rpb24gPSAwLjksXG4gICAgICB3aGVlbERlbnNpdHkgPSAwLjUsXG4gICAgICB3aGVlbFJlc3RpdHV0aW9uID0gMC4xLFxuICAgICAgY2hhc3Npc0RlbnNpdHkgPSAyLjBcbiAgICB0aGlzLmNoYXNzaXNIID0gMS4wXG4gICAgdGhpcy5jaGFzc2lzVyA9IDAuM1xuICAgIHRoaXMuYXhsZU9mZnNldFkgPSAwLjFcblxuICAgIC8vIGNyZWF0ZSB3aGVlbFxuICAgIHtcbiAgICAgIGNvbnN0IGJkID0gbmV3IGIyLmIyQm9keURlZigpXG4gICAgICBiZC5zZXRfdHlwZShiMi5iMl9keW5hbWljQm9keSlcbiAgICAgIGJkLnNldF9wb3NpdGlvbihuZXcgYjIuYjJWZWMyKC4uLnRoaXMud2hlZWxQb3NJbml0KSlcbiAgICAgIHRoaXMud2hlZWxCb2R5ID0gd29ybGQuQ3JlYXRlQm9keShiZClcblxuICAgICAgY29uc3Qgc2hhcGUgPSBuZXcgYjIuYjJDaXJjbGVTaGFwZSgpXG4gICAgICBzaGFwZS5zZXRfbV9yYWRpdXModGhpcy53aGVlbFIpXG5cbiAgICAgIGNvbnN0IGZkID0gbmV3IGIyLmIyRml4dHVyZURlZigpXG4gICAgICBmZC5zZXRfc2hhcGUoc2hhcGUpXG4gICAgICBmZC5zZXRfZGVuc2l0eSh3aGVlbERlbnNpdHkpXG4gICAgICBmZC5zZXRfZnJpY3Rpb24od2hlZWxGcmljdGlvbilcbiAgICAgIGZkLnNldF9yZXN0aXR1dGlvbih3aGVlbFJlc3RpdHV0aW9uKVxuXG4gICAgICBjb25zdCBmaWx0ZXIgPSBmZC5nZXRfZmlsdGVyKClcbiAgICAgIGZpbHRlci5zZXRfY2F0ZWdvcnlCaXRzKDB4MDAwMilcbiAgICAgIGZpbHRlci5zZXRfbWFza0JpdHMoMHgwMDAxKVxuICAgICAgZmQuc2V0X2ZpbHRlcihmaWx0ZXIpXG4gICAgICBjb25zdCBmaXh0dXJlID0gYjIuY2FzdE9iamVjdChcbiAgICAgICAgdGhpcy53aGVlbEJvZHkuQ3JlYXRlRml4dHVyZShmZCksXG4gICAgICAgIGIyLmIyRml4dHVyZVxuICAgICAgKVxuICAgICAgZml4dHVyZS5wYXJ0VHlwZSA9IFwid2hlZWxcIlxuICAgICAgZml4dHVyZS5zcG90ID0gdGhpc1xuXG4gICAgICB0aGlzLndoZWVsTWFzcyA9IHRoaXMud2hlZWxCb2R5LkdldE1hc3MoKVxuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBjaGFzc2lzXG4gICAge1xuICAgICAgY29uc3QgZWRnZVggPSAwLjUgKiB0aGlzLmNoYXNzaXNXLFxuICAgICAgICBlZGdlWSA9IDAuNSAqIHRoaXMuY2hhc3Npc0gsXG4gICAgICAgIGN1dG91dFggPSAwLjIgKiB0aGlzLmNoYXNzaXNXLFxuICAgICAgICBjdXRvdXRZID0gMC4zNSAqIHRoaXMuY2hhc3Npc0hcblxuICAgICAgdGhpcy5jaGFzc2lzVmVydGljZXMgPSBbXG4gICAgICAgIFsrZWRnZVgsIC1lZGdlWV0sXG4gICAgICAgIFstZWRnZVgsIC1lZGdlWV0sXG4gICAgICAgIFstZWRnZVgsICtjdXRvdXRZXSxcbiAgICAgICAgWy1jdXRvdXRYLCArZWRnZVldLFxuICAgICAgICBbK2N1dG91dFgsICtlZGdlWV0sXG4gICAgICAgIFsrZWRnZVgsICtjdXRvdXRZXSxcbiAgICAgIF1cblxuICAgICAgY29uc3QgYjJDaGFzc2lzVmVydGljZXMgPSBbXVxuICAgICAgZm9yIChsZXQgdmVydGV4IG9mIHRoaXMuY2hhc3Npc1ZlcnRpY2VzKSB7XG4gICAgICAgIGIyQ2hhc3Npc1ZlcnRpY2VzLnB1c2goXG4gICAgICAgICAgbmV3IGIyLmIyVmVjMihcbiAgICAgICAgICAgIHZlcnRleFswXSArIHRoaXMud2hlZWxQb3NJbml0WzBdLFxuICAgICAgICAgICAgdmVydGV4WzFdICsgdGhpcy53aGVlbFBvc0luaXRbMV1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgdGhpcy5jaGFzc2lzUG9zSW5pdCA9IFtcbiAgICAgICAgdGhpcy53aGVlbFBvc0luaXRbMF0sXG4gICAgICAgIHRoaXMud2hlZWxQb3NJbml0WzFdIC0gMC41ICogdGhpcy5jaGFzc2lzSCArIHRoaXMuYXhsZU9mZnNldFksXG4gICAgICBdXG4gICAgICBjb25zdCBiZCA9IG5ldyBiMi5iMkJvZHlEZWYoKVxuICAgICAgYmQuc2V0X3R5cGUoYjIuYjJfZHluYW1pY0JvZHkpXG4gICAgICBiZC5zZXRfcG9zaXRpb24obmV3IGIyLmIyVmVjMiguLi50aGlzLmNoYXNzaXNQb3NJbml0KSlcbiAgICAgIC8vIGJkLnNldF9saW5lYXJEYW1waW5nKDAuMSlcbiAgICAgIC8vIGJkLnNldF9hbmd1bGFyRGFtcGluZygwLjEpXG4gICAgICB0aGlzLmNoYXNzaXNCb2R5ID0gd29ybGQuQ3JlYXRlQm9keShiZClcbiAgICAgIGNvbnN0IHNoYXBlID0gdGhpcy5iMkNyZWF0ZVBvbHlnb25TaGFwZShiMkNoYXNzaXNWZXJ0aWNlcywgYjIpXG4gICAgICBjb25zdCBmZCA9IG5ldyBiMi5iMkZpeHR1cmVEZWYoKVxuICAgICAgY29uc3QgZmlsdGVyID0gZmQuZ2V0X2ZpbHRlcigpXG4gICAgICBmaWx0ZXIuc2V0X2NhdGVnb3J5Qml0cygweDAwMDIpXG4gICAgICBmaWx0ZXIuc2V0X21hc2tCaXRzKDB4MDAwMSlcbiAgICAgIGZkLnNldF9maWx0ZXIoZmlsdGVyKVxuICAgICAgZmQuc2V0X2RlbnNpdHkoY2hhc3Npc0RlbnNpdHkpXG4gICAgICBmZC5zZXRfc2hhcGUoc2hhcGUpXG4gICAgICAvLyBmZC5zZXRfZnJpY3Rpb24oMC4zKVxuICAgICAgLy8gZmQuc2V0X3Jlc3RpdHV0aW9uKDAuMSlcbiAgICAgIGNvbnN0IGZpeHR1cmUgPSBiMi5jYXN0T2JqZWN0KFxuICAgICAgICB0aGlzLmNoYXNzaXNCb2R5LkNyZWF0ZUZpeHR1cmUoZmQpLFxuICAgICAgICBiMi5iMkZpeHR1cmVcbiAgICAgIClcbiAgICAgIGZpeHR1cmUucGFydFR5cGUgPSBcImNoYXNzaXNcIlxuICAgICAgZml4dHVyZS5zcG90ID0gdGhpc1xuICAgICAgdGhpcy5jaGFzc2lzTWFzcyA9IHRoaXMuY2hhc3Npc0JvZHkuR2V0TWFzcygpXG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIGpvaW50XG4gICAge1xuICAgICAgY29uc3QgamQgPSBuZXcgYjIuYjJSZXZvbHV0ZUpvaW50RGVmKClcbiAgICAgIGpkLkluaXRpYWxpemUoXG4gICAgICAgIHRoaXMud2hlZWxCb2R5LFxuICAgICAgICB0aGlzLmNoYXNzaXNCb2R5LFxuICAgICAgICBuZXcgYjIuYjJWZWMyKC4uLnRoaXMud2hlZWxQb3NJbml0KVxuICAgICAgKVxuXG4gICAgICBqZC5zZXRfZW5hYmxlTW90b3IodHJ1ZSlcbiAgICAgIGpkLnNldF9tYXhNb3RvclRvcnF1ZShnbG9iYWxzLm1heFRvcnF1ZSlcbiAgICAgIHRoaXMuYXhsZSA9IGIyLmNhc3RPYmplY3Qod29ybGQuQ3JlYXRlSm9pbnQoamQpLCBiMi5iMlJldm9sdXRlSm9pbnQpXG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dERpbSA9IHRoaXMuZ2V0SW5wdXRzKDApLmxlbmd0aFxuICAgIC8vIC8vIHRoaXMuc2hhcGVzID0gW3RoaXMuaW5wdXREaW0sIDE2LCA4LCA0XVxuICAgIC8vIC8vIHRoaXMuc2hhcGVzID0gW3RoaXMuaW5wdXREaW0sIDIwLCAxMCwgNF1cbiAgICB0aGlzLnNoYXBlcyA9IFt0aGlzLmlucHV0RGltLCAxMiwgOCwgMV1cblxuICAgIHRoaXMubl9kaW0gPSAwXG4gICAgdGhpcy53ZWlnaHRDb3VudCA9IDBcbiAgICB0aGlzLmJpYXNDb3VudCA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgY29uc3QgbiA9IHRoaXMuc2hhcGVzW2ldLFxuICAgICAgICBtID0gdGhpcy5zaGFwZXNbaSArIDFdXG4gICAgICB0aGlzLm5fZGltICs9IChuICsgMSkgKiBtXG4gICAgICB0aGlzLndlaWdodENvdW50ICs9IG4gKiBtXG4gICAgICB0aGlzLmJpYXNDb3VudCArPSBtXG4gICAgfVxuXG4gICAgdGhpcy5yZXNldChiMilcbiAgfVxuXG4gIGIyQ3JlYXRlUG9seWdvblNoYXBlKHZlcnRpY2VzLCBiMikge1xuICAgIGNvbnN0IHNoYXBlID0gbmV3IGIyLmIyUG9seWdvblNoYXBlKClcbiAgICBjb25zdCBidWZmZXIgPSBiMi5fbWFsbG9jKHZlcnRpY2VzLmxlbmd0aCAqIDgpXG4gICAgbGV0IG9mZnNldCA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBiMi5IRUFQRjMyWyhidWZmZXIgKyBvZmZzZXQpID4+IDJdID0gdmVydGljZXNbaV0uZ2V0X3goKVxuICAgICAgYjIuSEVBUEYzMlsoYnVmZmVyICsgKG9mZnNldCArIDQpKSA+PiAyXSA9IHZlcnRpY2VzW2ldLmdldF95KClcbiAgICAgIG9mZnNldCArPSA4XG4gICAgfVxuICAgIGNvbnN0IHB0cl93cmFwcGVkID0gYjIud3JhcFBvaW50ZXIoYnVmZmVyLCBiMi5iMlZlYzIpXG4gICAgc2hhcGUuU2V0KHB0cl93cmFwcGVkLCB2ZXJ0aWNlcy5sZW5ndGgpXG4gICAgcmV0dXJuIHNoYXBlXG4gIH1cblxuICBzZXRXdHMoZmxhdFd0cykge1xuICAgIC8vIHRoaXMuZmxhdFd0cyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5uX2RpbSkubWFwKCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpXG4gICAgdGhpcy5mbGF0V3RzID0gZmxhdFd0c1xuICAgIGxldCBmbGF0V3RJZHggPSAwXG4gICAgdGhpcy53ZWlnaHRzID0gW11cbiAgICAvLyB0aGlzLndlaWdodENvdW50ID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBjb25zdCBuID0gdGhpcy5zaGFwZXNbaV0sXG4gICAgICAgIG0gPSB0aGlzLnNoYXBlc1tpICsgMV0sXG4gICAgICAgIG5ld1dlaWdodCA9IEZsb2F0MzJBcnJheS5mcm9tKFxuICAgICAgICAgIHRoaXMuZmxhdFd0cy5zbGljZShmbGF0V3RJZHgsIGZsYXRXdElkeCArIG4gKiBtKVxuICAgICAgICApXG4gICAgICAvLyB0aGlzLndlaWdodENvdW50ICs9IG5ld1dlaWdodC5sZW5ndGhcbiAgICAgIHRoaXMud2VpZ2h0cy5wdXNoKG5ldyBNYXRyaXgobmV3V2VpZ2h0LCBuLCBtKSlcbiAgICAgIGZsYXRXdElkeCArPSBuICogbVxuICAgIH1cbiAgICB0aGlzLmJpYXNlcyA9IFtdXG4gICAgLy8gdGhpcy5iaWFzQ291bnQgPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoYXBlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IG4gPSAxLFxuICAgICAgICBtID0gdGhpcy5zaGFwZXNbaSArIDFdLFxuICAgICAgICBuZXdCaWFzID0gRmxvYXQzMkFycmF5LmZyb20oXG4gICAgICAgICAgdGhpcy5mbGF0V3RzLnNsaWNlKGZsYXRXdElkeCwgZmxhdFd0SWR4ICsgbiAqIG0pXG4gICAgICAgIClcbiAgICAgIC8vIHRoaXMuYmlhc0NvdW50ICs9IG5ld0JpYXMubGVuZ3RoXG4gICAgICB0aGlzLmJpYXNlcy5wdXNoKG5ldyBNYXRyaXgobmV3QmlhcywgbiwgbSkpXG4gICAgICBmbGF0V3RJZHggKz0gbiAqIG1cbiAgICB9XG4gIH1cblxuICByZXNldChiMikge1xuICAgIHRoaXMuY2hhc3Npc0JvZHkuU2V0VHJhbnNmb3JtKG5ldyBiMi5iMlZlYzIoLi4udGhpcy5jaGFzc2lzUG9zSW5pdCksIDApXG4gICAgdGhpcy5jaGFzc2lzQm9keS5TZXRMaW5lYXJWZWxvY2l0eShuZXcgYjIuYjJWZWMyKDAsIDApKVxuICAgIHRoaXMuY2hhc3Npc0JvZHkuU2V0QW5ndWxhclZlbG9jaXR5KDApXG4gICAgdGhpcy5jaGFzc2lzQm9keS5TZXRBd2FrZSgxKVxuXG4gICAgdGhpcy53aGVlbEJvZHkuU2V0VHJhbnNmb3JtKG5ldyBiMi5iMlZlYzIoLi4udGhpcy53aGVlbFBvc0luaXQpLCAwKVxuICAgIHRoaXMud2hlZWxCb2R5LlNldExpbmVhclZlbG9jaXR5KG5ldyBiMi5iMlZlYzIoMCwgMCkpXG4gICAgdGhpcy53aGVlbEJvZHkuU2V0QW5ndWxhclZlbG9jaXR5KDApXG4gICAgdGhpcy53aGVlbEJvZHkuU2V0QXdha2UoMSlcblxuICAgIHRoaXMudGFyZ2V0U3FFcnJTdW0gPSAwXG4gICAgdGhpcy50YXJnZXRQcmV2ID0gbnVsbFxuXG4gICAgdGhpcy5wcmV2T3V0cHV0ID0gMFxuICAgIHRoaXMub3V0cHV0RGlmZlNxU3VtID0gMFxuXG4gICAgdGhpcy5wcmV2V2hlZWxWZWxYID0gMFxuICAgIHRoaXMud2hlZWxBY2NYID0gMFxuICAgIHRoaXMucHJldkNoYXNzaXNWZWxYID0gMFxuICAgIHRoaXMuY2hhc3Npc0FjY1ggPSAwXG5cbiAgICB0aGlzLmRyaWZ0WFNxU3VtID0gMFxuICAgIHRoaXMuY3Jhc2hTdGVwQ291bnQgPSAwXG4gIH1cblxuICB1cGRhdGVUYXJnZXRTY29yZSh0YXJnZXQsIGN1cnJlbnQpIHtcbiAgICBjb25zdCBkaWZmID0gdGFyZ2V0IC0gY3VycmVudCxcbiAgICAgIGRpZmZTcSA9IGRpZmYgKiBkaWZmLFxuICAgICAgZGVub20gPSBNYXRoLmFicyh0YXJnZXQpICsgZ2xvYmFscy5zY29yZURlbm9tRXBzXG4gICAgLy8gdGhpcy50YXJnZXRTcUVyclN1bSArPSBkaWZmU3EgLyBkZW5vbVxuICAgIHRoaXMudGFyZ2V0U3FFcnJTdW0gKz0gZ2xvYmFscy50YXJnZXRUeXBlID09PSBcInZlbFwiID8gZGlmZlNxIDogMWUyICogZGlmZlNxXG4gIH1cblxuICBzZXRTcGVlZChzcGVlZCkge1xuICAgIHRoaXMuYXhsZS5TZXRNb3RvclNwZWVkKHNwZWVkKVxuICB9XG5cbiAgZ2V0SW5wdXRzKHRhcmdldCkge1xuICAgIHRoaXMucmV2ZXJzZSA9IHRhcmdldCAhPSAwID8gTWF0aC5zaWduKHRhcmdldCkgOiAxXG4gICAgbGV0IGlucHV0c1xuICAgIGlmICh0aGlzLmlucHV0RGltICE9IG51bGwpIHtcbiAgICAgIGlucHV0cyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5pbnB1dERpbSlcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRzID0gW11cbiAgICB9XG4gICAgbGV0IGkgPSAwXG4gICAgLy8gZWxldmF0aW9uXG4gICAgY29uc3Qgd2hlZWxQb3MgPSB0aGlzLndoZWVsQm9keS5HZXRQb3NpdGlvbigpLFxuICAgICAgd2hlZWxYID0gd2hlZWxQb3MuZ2V0X3goKSxcbiAgICAgIHdoZWVsWSA9IHdoZWVsUG9zLmdldF95KClcbiAgICAvLyAgIGludGVycFkgPSBpbnRlcnBUZXJyYWluWSh3aGVlbFgsIHRoaXMucG9wdWxhdGlvbi50ZXJyYWluUHRzKVxuICAgIC8vIHRoaXMueUNsZWFyYW5jZSA9IGludGVycFkgLSB3aGVlbFkgLSB0aGlzLndoZWVsUlxuICAgIC8vIGlucHV0c1tpXSA9IHRoaXMueUNsZWFyYW5jZVxuICAgIC8vIGkrK1xuICAgIHRoaXMubGlkYXJZcyA9IFtdXG4gICAgZm9yIChsZXQgeE9mZiBvZiBnbG9iYWxzLnhPZmZzKSB7XG4gICAgICBjb25zdCBsaWRhclkgPVxuICAgICAgICBpbnRlcnBUZXJyYWluWShcbiAgICAgICAgICB3aGVlbFggKyB0aGlzLnJldmVyc2UgKiB4T2ZmLFxuICAgICAgICAgIHRoaXMucG9wdWxhdGlvbi50ZXJyYWluUHRzXG4gICAgICAgICkgLVxuICAgICAgICB3aGVlbFkgLVxuICAgICAgICB0aGlzLndoZWVsUlxuICAgICAgdGhpcy5saWRhcllzLnB1c2gobGlkYXJZKVxuICAgICAgaW5wdXRzW2ldID0gbGlkYXJZXG4gICAgICBpKytcbiAgICB9XG5cbiAgICAvLyBjaGFzc2lzU2luXG4gICAgY29uc3QgY2hhc3Npc1NpbiA9IE1hdGguc2luKHRoaXMuY2hhc3Npc0JvZHkuR2V0QW5nbGUoKSlcbiAgICBpbnB1dHNbaV0gPSB0aGlzLnJldmVyc2UgKiBjaGFzc2lzU2luXG4gICAgaSsrXG4gICAgaWYgKE1hdGguYWJzKGNoYXNzaXNTaW4pID4gZ2xvYmFscy5jcmFzaFNpbkxpbWl0KSB7XG4gICAgICB0aGlzLmNyYXNoU3RlcENvdW50KytcbiAgICB9XG4gICAgLy8gY2hhc3Npc1ZlbFgsIGNoYXNzaXNWZWxZXG4gICAgY29uc3QgY2hhc3Npc1ZlbCA9IHRoaXMuY2hhc3Npc0JvZHkuR2V0TGluZWFyVmVsb2NpdHkoKSxcbiAgICAgIGNoYXNzaXNWZWxYID0gY2hhc3Npc1ZlbC5nZXRfeCgpXG4gICAgdGhpcy5jaGFzc2lzQWNjWCA9IGNoYXNzaXNWZWxYIC0gdGhpcy5wcmV2Q2hhc3Npc1ZlbFhcbiAgICB0aGlzLnByZXZDaGFzc2lzVmVsWCA9IGNoYXNzaXNWZWxYXG4gICAgLy8gaW5wdXRzW2ldID0gdGhpcy5yZXZlcnNlICogY2hhc3Npc1ZlbC5nZXRfeCgpXG4gICAgLy8gaSsrXG4gICAgLy8gaW5wdXRzW2ldID0gY2hhc3Npc1ZlbC5nZXRfeSgpXG4gICAgLy8gaSsrXG4gICAgLy8gY2hhc3Npc0FuZ1ZlbFxuICAgIGlmICh0YXJnZXQgPT0gMCkge1xuICAgICAgdGhpcy5kcmlmdFhTcVN1bSArPSB0aGlzLmNoYXNzaXNBY2NYICogdGhpcy5jaGFzc2lzQWNjWFxuICAgIH1cbiAgICBjb25zdCBjaGFzc2lzQW5nVmVsID0gdGhpcy5jaGFzc2lzQm9keS5HZXRBbmd1bGFyVmVsb2NpdHkoKVxuICAgIGlucHV0c1tpXSA9IHRoaXMucmV2ZXJzZSAqIGNoYXNzaXNBbmdWZWxcbiAgICBpKytcbiAgICAvLyB3aGVlbFZlbFgsIHdoZWVsVmVsWVxuICAgIGNvbnN0IHdoZWVsVmVsID0gdGhpcy53aGVlbEJvZHkuR2V0TGluZWFyVmVsb2NpdHkoKSxcbiAgICAgIHdoZWVsVmVsWCA9IHdoZWVsVmVsLmdldF94KClcbiAgICB0aGlzLndoZWVsQWNjWCA9IHdoZWVsVmVsWCAtIHRoaXMucHJldldoZWVsVmVsWFxuICAgIHRoaXMucHJldldoZWVsVmVsWCA9IHdoZWVsVmVsWFxuICAgIGlucHV0c1tpXSA9IHRoaXMucmV2ZXJzZSAqIHdoZWVsVmVsWFxuICAgIGkrK1xuICAgIGlucHV0c1tpXSA9IHdoZWVsVmVsLmdldF95KClcbiAgICBpKytcbiAgICAvLyB3aGVlbEFuZ1ZlbFxuICAgIGNvbnN0IHdoZWVsQW5nVmVsID0gdGhpcy53aGVlbEJvZHkuR2V0QW5ndWxhclZlbG9jaXR5KClcbiAgICBpbnB1dHNbaV0gPSB0aGlzLnJldmVyc2UgKiB3aGVlbEFuZ1ZlbFxuICAgIGkrK1xuICAgIGNvbnN0IGF4bGVSeG4gPSB0aGlzLmF4bGUuR2V0UmVhY3Rpb25Gb3JjZSg2MClcbiAgICBpbnB1dHNbaV0gPSAxZS0yICogdGhpcy5yZXZlcnNlICogYXhsZVJ4bi5nZXRfeCgpXG4gICAgaSsrXG4gICAgaW5wdXRzW2ldID0gMWUtMiAqIGF4bGVSeG4uZ2V0X3koKVxuICAgIGkrK1xuICAgIC8vIHRhcmdldFxuICAgIGlucHV0c1tpXSA9IHRoaXMucmV2ZXJzZSAqIHRhcmdldFxuICAgIGkrK1xuXG4gICAgaWYgKHRoaXMudGFyZ2V0UHJldiAhPT0gbnVsbCkge1xuICAgICAgaWYgKGdsb2JhbHMudGFyZ2V0VHlwZSA9PT0gXCJzaW5cIikge1xuICAgICAgICB0aGlzLnVwZGF0ZVRhcmdldFNjb3JlKHRoaXMudGFyZ2V0UHJldiwgY2hhc3Npc1NpbilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXBkYXRlVGFyZ2V0U2NvcmUodGhpcy50YXJnZXRQcmV2LCB3aGVlbFZlbFgpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudGFyZ2V0UHJldiA9IHRhcmdldFxuXG4gICAgcmV0dXJuIGlucHV0c1xuICB9XG5cbiAgdXBkYXRlKHRhcmdldCkge1xuICAgIGNvbnN0IGlucHV0c0FycmF5ID0gdGhpcy5nZXRJbnB1dHModGFyZ2V0KVxuICAgIGNvbnN0IGlucHV0c01hdHJpeCA9IG5ldyBNYXRyaXgoaW5wdXRzQXJyYXksIDEsIGlucHV0c0FycmF5Lmxlbmd0aClcbiAgICBjb25zdCBvdXRwdXRSYXcgPSBpbnB1dHNNYXRyaXhcbiAgICAgIC8vIGNvbnN0IHNwZWVkcyA9IGlucHV0c1xuICAgICAgLm11bCh0aGlzLndlaWdodHNbMF0pXG4gICAgICAuYWRkKHRoaXMuYmlhc2VzWzBdKVxuICAgICAgLy8gLnJlbHUoKVxuICAgICAgLy8gLmxlYWt5UmVsdSgpXG4gICAgICAubGVha3lFbHUoKVxuICAgICAgLm11bCh0aGlzLndlaWdodHNbMV0pXG4gICAgICAuYWRkKHRoaXMuYmlhc2VzWzFdKVxuICAgICAgLy8gLnJlbHUoKVxuICAgICAgLy8gLmxlYWt5UmVsdSgpXG4gICAgICAubGVha3lFbHUoKVxuICAgICAgLm11bCh0aGlzLndlaWdodHNbMl0pXG4gICAgICAuYWRkKHRoaXMuYmlhc2VzWzJdKS5kYXRhWzBdXG5cbiAgICAvLyBjb25zdCByZXZlcnNlID0gdGFyZ2V0ICE9IDAgPyBNYXRoLnNpZ24odGFyZ2V0KSA6IDEsXG4gICAgY29uc3Qgb3V0cHV0ID0gdGhpcy5yZXZlcnNlICogb3V0cHV0UmF3XG4gICAgdGhpcy5zZXRTcGVlZChvdXRwdXQpXG5cbiAgICBjb25zdCBvdXRwdXREaWZmID0gb3V0cHV0IC0gdGhpcy5wcmV2T3V0cHV0XG4gICAgdGhpcy5vdXRwdXREaWZmU3FTdW0gKz0gb3V0cHV0RGlmZiAqIG91dHB1dERpZmZcbiAgICB0aGlzLnByZXZPdXRwdXQgPSBvdXRwdXRcbiAgfVxuXG4gIGdldCBkcmF3UG9zaXRpb25EYXRhKCkge1xuICAgIC8vIHJldHVybiB7XG4gICAgLy8gICB3aGVlbFBvc0N1cnJlbnQ6IHRoaXMud2hlZWxCb2R5LkdldFBvc2l0aW9uKCksXG4gICAgLy8gICB3aGVlbEFuZ2xlQ3VycmVudDogdGhpcy53aGVlbEJvZHkuR2V0QW5nbGUoKSxcbiAgICAvLyAgIGNoYXNzaXNQb3NDdXJyZW50OiB0aGlzLmNoYXNzaXNCb2R5LkdldFBvc2l0aW9uKCksXG4gICAgLy8gICBjaGFzc2lzQW5nbGVDdXJyZW50OiB0aGlzLmNoYXNzaXNCb2R5LkdldEFuZ2xlKCksXG4gICAgLy8gfVxuICAgIGNvbnN0IHdoZWVsUG9zID0gdGhpcy53aGVlbEJvZHkuR2V0UG9zaXRpb24oKSxcbiAgICAgIGNoYXNzaXNQb3MgPSB0aGlzLmNoYXNzaXNCb2R5LkdldFBvc2l0aW9uKClcbiAgICByZXR1cm4ge1xuICAgICAgd2hlZWxQb3NDdXJyZW50OiBbd2hlZWxQb3MuZ2V0X3goKSwgd2hlZWxQb3MuZ2V0X3koKV0sXG4gICAgICB3aGVlbEFuZ2xlQ3VycmVudDogdGhpcy53aGVlbEJvZHkuR2V0QW5nbGUoKSxcbiAgICAgIGNoYXNzaXNQb3NDdXJyZW50OiBbY2hhc3Npc1Bvcy5nZXRfeCgpLCBjaGFzc2lzUG9zLmdldF95KCldLFxuICAgICAgY2hhc3Npc0FuZ2xlQ3VycmVudDogdGhpcy5jaGFzc2lzQm9keS5HZXRBbmdsZSgpLFxuICAgIH1cbiAgfVxuXG4gIGdldCBjb3JyRGF0YSgpIHtcbiAgICByZXR1cm4gW1xuICAgICAgTWF0aC5zaW4odGhpcy5jaGFzc2lzQm9keS5HZXRBbmdsZSgpKSxcbiAgICAgIHRoaXMud2hlZWxBY2NYLFxuICAgICAgdGhpcy5jaGFzc2lzQWNjWCxcbiAgICBdXG4gIH1cblxuICAvLyBzbGVlcCgpIHtcbiAgLy8gICBmb3IgKGxldCBib2R5IG9mIFtcbiAgLy8gICAgIHRoaXMuY2hhc3Npc0JvZHksXG4gIC8vICAgICB0aGlzLnVwcGVyRm9yZWxlZ0JvZHksXG4gIC8vICAgICB0aGlzLmxvd2VyRm9yZWxlZ0JvZHksXG4gIC8vICAgICB0aGlzLnVwcGVySGluZGxlZ0JvZHksXG4gIC8vICAgICB0aGlzLmxvd2VySGluZGxlZ0JvZHksXG4gIC8vICAgXSkge1xuICAvLyAgICAgYm9keS5TZXRBd2FrZSgwKVxuICAvLyAgICAgLy8gYm9keS5TZXRFbmFibGVkKDApXG4gIC8vICAgfVxuICAvLyB9XG59XG5cbmNsYXNzIE1hdHJpeCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIG0sIG4pIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgdGhpcy5tID0gbVxuICAgIHRoaXMubiA9IG5cbiAgfVxuXG4gIG11bChvdGhlcikge1xuICAgIGNvbnN0IGEgPSB0aGlzLmRhdGEsXG4gICAgICBiID0gb3RoZXIuZGF0YSxcbiAgICAgIG0gPSB0aGlzLm0sXG4gICAgICBuID0gdGhpcy5uLFxuICAgICAgcCA9IG90aGVyLm4sXG4gICAgICBjID0gbmV3IEZsb2F0MzJBcnJheShuZXcgQXJyYXlCdWZmZXIoNCAqIG0gKiBwKSlcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHA7IGorKykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgbGV0IHN1bSA9IDBcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICBzdW0gKz0gYVtpICogbiArIGtdICogYltrICogcCArIGpdXG4gICAgICAgIH1cbiAgICAgICAgY1tpICogcCArIGpdID0gc3VtXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgTWF0cml4KGMsIG0sIHApXG4gIH1cblxuICBhZGQob3RoZXIpIHtcbiAgICBjb25zdCBhID0gdGhpcy5kYXRhLFxuICAgICAgYiA9IG90aGVyLmRhdGEsXG4gICAgICBsID0gYS5sZW5ndGgsXG4gICAgICBjID0gbmV3IEZsb2F0MzJBcnJheShuZXcgQXJyYXlCdWZmZXIoNCAqIGwpKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjW2ldID0gYVtpXSArIGJbaV1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBNYXRyaXgoYywgdGhpcy5tLCB0aGlzLm4pXG4gIH1cblxuICByZWx1KCkge1xuICAgIGNvbnN0IG4gPSB0aGlzLmRhdGEubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gdGhpcy5kYXRhLnNsaWNlKClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgcmVzdWx0W2ldID0gTWF0aC5tYXgoMCwgcmVzdWx0W2ldKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IE1hdHJpeChyZXN1bHQsIHRoaXMubSwgdGhpcy5uKVxuICB9XG5cbiAgbGVha3lSZWx1KCkge1xuICAgIGNvbnN0IG4gPSB0aGlzLmRhdGEubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gdGhpcy5kYXRhLnNsaWNlKClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgcmVzdWx0W2ldID0gTWF0aC5tYXgoMC4xICogcmVzdWx0W2ldLCByZXN1bHRbaV0pXG4gICAgfVxuICAgIHJldHVybiBuZXcgTWF0cml4KHJlc3VsdCwgdGhpcy5tLCB0aGlzLm4pXG4gIH1cblxuICBlbHUoKSB7XG4gICAgY29uc3QgbiA9IHRoaXMuZGF0YS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSB0aGlzLmRhdGEuc2xpY2UoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBpZiAocmVzdWx0W2ldIDwgMCkge1xuICAgICAgICByZXN1bHRbaV0gPSBNYXRoLmV4cG0xKHJlc3VsdFtpXSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBNYXRyaXgocmVzdWx0LCB0aGlzLm0sIHRoaXMubilcbiAgfVxuXG4gIGxlYWt5RWx1KCkge1xuICAgIGNvbnN0IG4gPSB0aGlzLmRhdGEubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gdGhpcy5kYXRhLnNsaWNlKClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgaWYgKHJlc3VsdFtpXSA8IDApIHtcbiAgICAgICAgcmVzdWx0W2ldID0gTWF0aC5leHBtMShyZXN1bHRbaV0pICsgMC4xICogcmVzdWx0W2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgTWF0cml4KHJlc3VsdCwgdGhpcy5tLCB0aGlzLm4pXG4gIH1cbn1cblxuZnVuY3Rpb24gdmVjdG9yTm9ybXModmVjdG9ycykge1xuICBjb25zdCByZXN1bHQgPSBuZXcgRmxvYXQzMkFycmF5KHZlY3RvcnMubGVuZ3RoKS5maWxsKDApXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHZlY3RvciA9IHZlY3RvcnNbaV0uZGF0YVxuICAgIGZvciAobGV0IHggb2YgdmVjdG9yKSB7XG4gICAgICByZXN1bHRbaV0gKz0geCAqIHhcbiAgICB9XG4gICAgLy8gcmVzdWx0W2ldID0gTWF0aC5zcXJ0KHJlc3VsdFtpXSlcbiAgICByZXN1bHRbaV0gLz0gdmVjdG9yLmxlbmd0aFxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gcm93Tm9ybVRoaW5neShtYXQpIHtcbiAgLy8gbTogcm93IGNvdW50LCBuOiBjb2x1bW4gY291bnRcbiAgY29uc3Qgcm93Q291bnQgPSBtYXQubSxcbiAgICBjb2xDb3VudCA9IG1hdC5uXG4gIGxldCBzdW1BbGwgPSAwXG4gIGNvbnN0IHJvd1N1bXMgPSBuZXcgRmxvYXQzMkFycmF5KHJvd0NvdW50KS5maWxsKDApLFxuICAgIGNvbFN1bXMgPSBuZXcgRmxvYXQzMkFycmF5KGNvbENvdW50KS5maWxsKDApXG4gIC8vIHJvdyBpZHhcbiAgZm9yIChsZXQgcm93SWR4ID0gMDsgcm93SWR4IDwgcm93Q291bnQ7IHJvd0lkeCsrKSB7XG4gICAgLy8gY29sIGlkeFxuICAgIGZvciAobGV0IGNvbElkeCA9IDA7IGNvbElkeCA8IGNvbENvdW50OyBjb2xJZHgrKykge1xuICAgICAgY29uc3QgdmFsID0gbWF0LmRhdGFbcm93SWR4ICogY29sQ291bnQgKyBjb2xJZHhdLFxuICAgICAgICB2YWxTcSA9IHZhbCAqIHZhbFxuICAgICAgLy8gcm93U3Vtc1tyb3dJZHhdICs9IE1hdGguYWJzKHZhbClcbiAgICAgIHJvd1N1bXNbcm93SWR4XSArPSB2YWxTcVxuICAgICAgLy8gY29sU3Vtc1tjb2xJZHhdICs9IE1hdGguYWJzKHZhbClcbiAgICAgIGNvbFN1bXNbY29sSWR4XSArPSB2YWxTcVxuICAgICAgc3VtQWxsICs9IHZhbFNxXG4gICAgfVxuICB9XG4gIHN1bUFsbCAvPSByb3dDb3VudCAqIGNvbENvdW50XG4gIGxldCBzdW1Sb3dzID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0NvdW50OyBpKyspIHtcbiAgICBjb25zdCB2YWwgPSByb3dTdW1zW2ldIC8gY29sQ291bnRcbiAgICBzdW1Sb3dzICs9IHZhbCAqIHZhbFxuICB9XG4gIHN1bVJvd3MgLz0gcm93Q291bnRcbiAgbGV0IHN1bUNvbHMgPSAwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29sQ291bnQ7IGkrKykge1xuICAgIGNvbnN0IHZhbCA9IGNvbFN1bXNbaV0gLyByb3dDb3VudFxuICAgIHN1bUNvbHMgKz0gdmFsICogdmFsXG4gIH1cbiAgc3VtQ29scyAvPSBjb2xDb3VudFxuXG4gIC8vIHJldHVybiBzdW1BbGwgKyAwLjEgKiBzdW1Sb3dzICsgMS4wICogc3VtQ29sc1xuICByZXR1cm4gc3VtQWxsXG59XG5cbmV4cG9ydCBjbGFzcyBQb3B1bGF0aW9uIHtcbiAgY29uc3RydWN0b3Iod2hlZWxQb3NJbml0LCBuVGlwcHlzLCB0ZXJyYWluUHRzLCBiMikge1xuICAgIHRoaXMud2hlZWxQb3NJbml0ID0gd2hlZWxQb3NJbml0LnNsaWNlKClcblxuICAgIHtcbiAgICAgIGNvbnN0IGdyYXZpdHkgPSBuZXcgYjIuYjJWZWMyKDAsIDkuODEpXG4gICAgICB0aGlzLndvcmxkID0gbmV3IGIyLmIyV29ybGQoZ3Jhdml0eSlcbiAgICB9XG5cbiAgICB0aGlzLmIyID0gYjJcbiAgICB0aGlzLnRlcnJhaW5QdHMgPSB0ZXJyYWluUHRzXG5cbiAgICAvLyBhZGQgZ3JvdW5kXG4gICAge1xuICAgICAgY29uc3QgZ3JvdW5kQm9keSA9IHRoaXMud29ybGQuQ3JlYXRlQm9keShuZXcgYjIuYjJCb2R5RGVmKCkpXG5cbiAgICAgIGNvbnN0IHRlcnJhaW5QdHNGaWx0ZXJlZCA9IFtdXG4gICAgICBsZXQgeURpZmZQcmV2XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdsb2JhbHMublRlcnJhaW5QdHM7IGkrKykge1xuICAgICAgICBjb25zdCB5RGlmZkN1cnIgPSB0ZXJyYWluUHRzW2kgKyAxXSAtIHRlcnJhaW5QdHNbaV0sXG4gICAgICAgICAgc2FtZVNsb3BlID0geURpZmZDdXJyID09IHlEaWZmUHJldlxuICAgICAgICB5RGlmZlByZXYgPSB5RGlmZkN1cnJcbiAgICAgICAgaWYgKHNhbWVTbG9wZSAmJiBpICE9IGdsb2JhbHMublRlcnJhaW5QdHMgLSAxKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICB0ZXJyYWluUHRzRmlsdGVyZWQucHVzaChbdGVycmFpbklkeFRvWFBvcyhpKSwgdGVycmFpblB0c1tpXV0pXG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyh0ZXJyYWluUHRzRmlsdGVyZWQubGVuZ3RoLCBnbG9iYWxzLm5UZXJyYWluUHRzKVxuICAgICAgLy8gcmV2ZXJzZWQgbG9vcCBmb3IgQ0NXIHdpbmRpbmcgb3JkZXIgKEJveDJEKVxuICAgICAgZm9yIChsZXQgaSA9IHRlcnJhaW5QdHNGaWx0ZXJlZC5sZW5ndGggLSAxOyBpID49IDE7IGktLSkge1xuICAgICAgICBjb25zdCBlZGdlU2hhcGUgPSBuZXcgYjIuYjJFZGdlU2hhcGUoKVxuICAgICAgICBlZGdlU2hhcGUuU2V0VHdvU2lkZWQoXG4gICAgICAgICAgbmV3IGIyLmIyVmVjMih0ZXJyYWluUHRzRmlsdGVyZWRbaV1bMF0sIHRlcnJhaW5QdHNGaWx0ZXJlZFtpXVsxXSksXG4gICAgICAgICAgbmV3IGIyLmIyVmVjMihcbiAgICAgICAgICAgIHRlcnJhaW5QdHNGaWx0ZXJlZFtpIC0gMV1bMF0sXG4gICAgICAgICAgICB0ZXJyYWluUHRzRmlsdGVyZWRbaSAtIDFdWzFdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIGNvbnN0IGdyb3VuZEZEID0gbmV3IGIyLmIyRml4dHVyZURlZigpXG4gICAgICAgIGdyb3VuZEZELnNldF9zaGFwZShlZGdlU2hhcGUpXG4gICAgICAgIGdyb3VuZEZELnNldF9mcmljdGlvbigwLjkpXG4gICAgICAgIGdyb3VuZEZELnNldF9yZXN0aXR1dGlvbigwLjEpXG4gICAgICAgIGNvbnN0IGdyb3VuZEZpeHR1cmUgPSBiMi5jYXN0T2JqZWN0KFxuICAgICAgICAgIGdyb3VuZEJvZHkuQ3JlYXRlRml4dHVyZShncm91bmRGRCksXG4gICAgICAgICAgYjIuYjJGaXh0dXJlXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIC8vIGFkZCB3YWxsc1xuICAgICAgZm9yIChjb25zdCBpZHggb2YgWzAsIGdsb2JhbHMublRlcnJhaW5QdHMgLSAxXSkge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBbdGVycmFpbklkeFRvWFBvcyhpZHgpLCB0ZXJyYWluUHRzW2lkeF1dXG4gICAgICAgIGNvbnN0IGVkZ2VTaGFwZSA9IG5ldyBiMi5iMkVkZ2VTaGFwZSgpXG4gICAgICAgIGVkZ2VTaGFwZS5TZXRUd29TaWRlZChcbiAgICAgICAgICBuZXcgYjIuYjJWZWMyKHgsIHkpLFxuICAgICAgICAgIG5ldyBiMi5iMlZlYzIoeCwgeSAtIGdsb2JhbHMud2FsbEgpXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgZ3JvdW5kRkQgPSBuZXcgYjIuYjJGaXh0dXJlRGVmKClcbiAgICAgICAgZ3JvdW5kRkQuc2V0X3NoYXBlKGVkZ2VTaGFwZSlcbiAgICAgICAgZ3JvdW5kRkQuc2V0X2ZyaWN0aW9uKDAuOSlcbiAgICAgICAgZ3JvdW5kRkQuc2V0X3Jlc3RpdHV0aW9uKDAuMSlcbiAgICAgICAgY29uc3QgZ3JvdW5kRml4dHVyZSA9IGIyLmNhc3RPYmplY3QoXG4gICAgICAgICAgZ3JvdW5kQm9keS5DcmVhdGVGaXh0dXJlKGdyb3VuZEZEKSxcbiAgICAgICAgICBiMi5iMkZpeHR1cmVcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRpcHB5cyA9IFtdXG4gICAgdGhpcy5hZGRUaXBweXMoblRpcHB5cylcbiAgICB0aGlzLm5fZGltID0gdGhpcy50aXBweXNbMF0ubl9kaW1cbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGZvciAobGV0IHRpcHB5IG9mIHRoaXMudGlwcHlzKSB7XG4gICAgICB0aXBweS5yZXNldCh0aGlzLmIyKVxuICAgIH1cbiAgfVxuXG4gIGFkZFRpcHB5cyhuVGlwcHlzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuVGlwcHlzOyBpKyspIHtcbiAgICAgIHRoaXMudGlwcHlzLnB1c2gobmV3IFRpcHB5KHRoaXMud2hlZWxQb3NJbml0LCB0aGlzLndvcmxkLCB0aGlzLmIyLCB0aGlzKSlcbiAgICB9XG4gIH1cblxuICBzZXRXdHMoZmxhdFd0cykge1xuICAgIGxldCBmbGF0V3RzSWR4ID0gMFxuICAgIGZvciAobGV0IHRpcHB5IG9mIHRoaXMudGlwcHlzKSB7XG4gICAgICB0aXBweS5zZXRXdHMoZmxhdFd0cy5zbGljZShmbGF0V3RzSWR4LCBmbGF0V3RzSWR4ICsgdGhpcy5uX2RpbSkpXG4gICAgICBmbGF0V3RzSWR4ICs9IHRoaXMubl9kaW1cbiAgICB9XG4gIH1cblxuICB0cmFpbih7IHRhcmdldHMsIHNvbHV0aW9ucyB9KSB7XG4gICAgLy8gYXNzaWduIHNvbHV0aW9uIGFuZCB0YXJnZXQgdG8gZWFjaCB0aXBweVxuICAgIGNvbnN0IG5Tb2x1dGlvbnMgPSBzb2x1dGlvbnMubGVuZ3RoIC8gdGhpcy5uX2RpbVxuICAgIGlmICh0aGlzLnRpcHB5cy5sZW5ndGggPCBuU29sdXRpb25zICogdGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHBvcHVsYXRpb24uYWRkVGlwcHlzKG5Tb2x1dGlvbnMgKiB0YXJnZXRzLmxlbmd0aCAtIHRoaXMudGlwcHlzLmxlbmd0aClcbiAgICB9XG4gICAgbGV0IGZsYXRXdHNJZHggPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuU29sdXRpb25zOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGFyZ2V0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCB0aXBweSA9IHRoaXMudGlwcHlzW2kgKiB0YXJnZXRzLmxlbmd0aCArIGpdXG4gICAgICAgIHRpcHB5LnNldFd0cyhzb2x1dGlvbnMuc2xpY2UoZmxhdFd0c0lkeCwgZmxhdFd0c0lkeCArIHRoaXMubl9kaW0pKVxuICAgICAgICB0aXBweS50YXJnZXRJZHggPSBqXG4gICAgICB9XG4gICAgICBmbGF0V3RzSWR4ICs9IHRoaXMubl9kaW1cbiAgICB9XG4gICAgLy8gc2ltdWxhdGUgdXNpbmcgb25lIHRhcmdldCBwZXIgc29sdXRpb25cbiAgICB0aGlzLnJlc2V0KClcbiAgICBmb3IgKGxldCBzdGVwID0gMDsgc3RlcCA8IHRhcmdldHNbMF0ubGVuZ3RoOyBzdGVwKyspIHtcbiAgICAgIGZvciAobGV0IHRpcHB5IG9mIHRoaXMudGlwcHlzKSB7XG4gICAgICAgIHRpcHB5LnVwZGF0ZSh0YXJnZXRzW3RpcHB5LnRhcmdldElkeF1bc3RlcF0pXG4gICAgICB9XG4gICAgICB0aGlzLndvcmxkLlN0ZXAoZ2xvYmFscy50cywgOCwgMylcbiAgICB9XG4gICAgLy8gc2NvcmUgc29sdXRpb25zIGFmdGVyIHNpbXVsYXRpb25cbiAgICBjb25zdCBzb2x1dGlvbnNTY29yZXMgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgblNvbHV0aW9uczsgaSsrKSB7XG4gICAgICBjb25zdCB0aXBweTAgPSB0aGlzLnRpcHB5c1tpICogdGFyZ2V0cy5sZW5ndGhdLFxuICAgICAgICBzb2x1dGlvbiA9IHRpcHB5MC5mbGF0V3RzXG4gICAgICBsZXQgd3RzTm9ybSA9IDBcbiAgICAgIGZvciAobGV0IHd0TGF5ZXIgb2YgdGlwcHkwLndlaWdodHMpIHtcbiAgICAgICAgZm9yIChsZXQgd3Qgb2Ygd3RMYXllci5kYXRhKSB7XG4gICAgICAgICAgd3RzTm9ybSArPSB3dCAqIHd0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHd0c05vcm0gLz0gdGlwcHkwLndlaWdodENvdW50XG4gICAgICBsZXQgYmlhc05vcm0gPSAwXG4gICAgICBmb3IgKGxldCBiaWFzTGF5ZXIgb2YgdGlwcHkwLmJpYXNlcykge1xuICAgICAgICBmb3IgKGxldCBiaWFzIG9mIGJpYXNMYXllci5kYXRhKSB7XG4gICAgICAgICAgYmlhc05vcm0gKz0gYmlhcyAqIGJpYXNcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYmlhc05vcm0gLz0gdGlwcHkwLmJpYXNDb3VudFxuICAgICAgY29uc3QgdGFza1Njb3JlcyA9IFtdXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRhcmdldHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgdGFza1RpcHB5ID0gdGhpcy50aXBweXNbaSAqIHRhcmdldHMubGVuZ3RoICsgal0sXG4gICAgICAgICAgbXNlID0gdGFza1RpcHB5LnRhcmdldFNxRXJyU3VtIC8gZ2xvYmFscy5lcExlbixcbiAgICAgICAgICBjcmFzaGVkUmF0aW8gPSB0YXNrVGlwcHkuY3Jhc2hTdGVwQ291bnQgLyBnbG9iYWxzLmVwTGVuLFxuICAgICAgICAgIGRyaWZ0WCA9IHRhc2tUaXBweS5kcmlmdFhTcVN1bSAvIGdsb2JhbHMuZXBMZW5cbiAgICAgICAgdGFza1Njb3Jlcy5wdXNoKHsgbXNlLCBjcmFzaGVkUmF0aW8sIGRyaWZ0WCB9KVxuICAgICAgfVxuICAgICAgLy8gc29sdXRpb25zU2NvcmVzLnB1c2goeyBzb2x1dGlvbiwgc2NvcmUgfSlcbiAgICAgIHNvbHV0aW9uc1Njb3Jlcy5wdXNoKHsgc29sdXRpb24sIHd0c05vcm0sIGJpYXNOb3JtLCB0YXNrU2NvcmVzIH0pXG4gICAgfVxuICAgIHJldHVybiBzb2x1dGlvbnNTY29yZXNcbiAgfVxuXG4gIHVwZGF0ZSh0YXJnZXRzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRpcHB5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGlwcHkgPSB0aGlzLnRpcHB5c1tpXVxuICAgICAgdGlwcHkudXBkYXRlKHRhcmdldHNbaV0pXG4gICAgfVxuICAgIHRoaXMud29ybGQuU3RlcChnbG9iYWxzLnRzLCA4LCAzKVxuICB9XG5cbiAgZHJhdyhzY2FsZSwgY2VudGVyKSB7XG4gICAgZm9yIChsZXQgdGlwcHkgb2YgdGhpcy50aXBweXMpIHtcbiAgICAgIHRpcHB5LmRyYXcoc2NhbGUsIGNlbnRlcilcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURpcmVjdGlvbihsZCwgcmQsIF90YXJnZXRTaW4sIF90YXJnZXRWZWwpIHtcbiAgLy8gbm8gY2hhbmdlIGlmIGJvdGgga2V5cyBkb3duXG4gIGxldCB0YXJnZXRTaW4gPSBfdGFyZ2V0U2luLFxuICAgIHRhcmdldFZlbCA9IF90YXJnZXRWZWxcbiAgaWYgKGxkICYmIHJkKSB7XG4gICAgcmV0dXJuIFt0YXJnZXRTaW4sIHRhcmdldFZlbF1cbiAgfVxuICAvLyBkZWNheSBzaW4gdG93YXJkIHplcm9cbiAgaWYgKHRhcmdldFNpbiAhPSAwKSB7XG4gICAgaWYgKE1hdGguYWJzKHRhcmdldFNpbikgPCBnbG9iYWxzLnNpbkRlY2F5KSB7XG4gICAgICB0YXJnZXRTaW4gPSAwXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldFNpbiAtPSBNYXRoLnNpZ24odGFyZ2V0U2luKSAqIGdsb2JhbHMuc2luRGVjYXlcbiAgICB9XG4gIH1cbiAgLy8gY2hhbmdlIGlmIG9ubHkgb25lIGtleVxuICAvLyBhbmQgbGltaXQgb3V0cHV0XG4gIGlmIChsZCkge1xuICAgIHRhcmdldFNpbiAtPSBnbG9iYWxzLnNpblN0ZXBcbiAgICBpZiAodGFyZ2V0U2luIDwgLWdsb2JhbHMuc2luTGltKSB7XG4gICAgICB0YXJnZXRTaW4gPSAtZ2xvYmFscy5zaW5MaW1cbiAgICB9XG4gIH0gZWxzZSBpZiAocmQpIHtcbiAgICB0YXJnZXRTaW4gKz0gZ2xvYmFscy5zaW5TdGVwXG4gICAgaWYgKHRhcmdldFNpbiA+IGdsb2JhbHMuc2luTGltKSB7XG4gICAgICB0YXJnZXRTaW4gPSBnbG9iYWxzLnNpbkxpbVxuICAgIH1cbiAgfVxuICAvLyBkZWNheSB2ZWwgdG93YXJkIHplcm9cbiAgaWYgKHRhcmdldFZlbCAhPSAwKSB7XG4gICAgaWYgKE1hdGguYWJzKHRhcmdldFZlbCkgPCBnbG9iYWxzLnZlbERlY2F5KSB7XG4gICAgICB0YXJnZXRWZWwgPSAwXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldFZlbCAtPSBNYXRoLnNpZ24odGFyZ2V0VmVsKSAqIGdsb2JhbHMudmVsRGVjYXlcbiAgICB9XG4gIH1cblxuICB0YXJnZXRWZWwgKz0gMC4xMDIgKiB0YXJnZXRTaW5cbiAgaWYgKHRhcmdldFZlbCA+IGdsb2JhbHMudmVsTGltKSB7XG4gICAgdGFyZ2V0VmVsID0gZ2xvYmFscy52ZWxMaW1cbiAgfSBlbHNlIGlmICh0YXJnZXRWZWwgPCAtZ2xvYmFscy52ZWxMaW0pIHtcbiAgICB0YXJnZXRWZWwgPSAtZ2xvYmFscy52ZWxMaW1cbiAgfVxuICAvLyAvLyB1cGRhdGUgdGVzdCB0cmlnb25vbWV0cnlcbiAgLy8gaWYgKHRhcmdldFNpbiAhPSB0YXJnZXREaXJlY3Rpb25CZWZvcmUpIHtcbiAgLy8gICB0YXJnZXRBbmdsZSA9IE1hdGguYXNpbih0YXJnZXRTaW4pXG4gIC8vICAgdGFyZ2V0Q29zID0gTWF0aC5jb3ModGFyZ2V0QW5nbGUpXG4gIC8vIH1cbiAgcmV0dXJuIFt0YXJnZXRTaW4sIHRhcmdldFZlbF1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGVycmFpblB0cygpIHtcbiAgZnVuY3Rpb24gdGVycmFpbkxST2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBzbG9wZURpZmY6IDAsXG4gICAgICBzbG9wZTogMCxcbiAgICAgIHk6IDAsXG4gICAgICB4OiBnbG9iYWxzLmdyb3VuZERldGFpbEludGVydmFsLFxuICAgICAgeElkeDogMSxcbiAgICAgIC8vIHJhbmRWYWxzOiByYW5kX25vcm1hbChnbG9iYWxzLmdyb3VuZEhhbGZXaWR0aCAvIGdsb2JhbHMuZ3JvdW5kRGV0YWlsSW50ZXJ2YWwgLSAxKSxcbiAgICAgIC8vIGlkeDogMCxcbiAgICAgIHlzOiBbXSxcbiAgICAgIHVwZGF0ZVNsb3BlKCkge1xuICAgICAgICBpZiAodGhpcy54IDw9IGdsb2JhbHMuZ3JvdW5kRmxhdENlbnRlckhhbGZXaWR0aCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuc2xvcGVEaWZmICs9IGdsb2JhbHMuc2xvcGVEaWZmTWFnICogdGhpcy5yYW5kVmFsc1t0aGlzLmlkeF1cbiAgICAgICAgdGhpcy5zbG9wZURpZmYgKz0gZ2xvYmFscy5zbG9wZURpZmZNYWcgKiByYW5kX25vcm1hbCgxKVswXVxuICAgICAgICAvLyB0aGlzLmlkeCsrXG4gICAgICAgIHRoaXMuc2xvcGVEaWZmICo9IGdsb2JhbHMuc2xvcGVEaWZmRGVjYXlcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuc2xvcGVEaWZmKSA+IGdsb2JhbHMuc2xvcGVEaWZmTGltKSB7XG4gICAgICAgICAgdGhpcy5zbG9wZURpZmYgPSBNYXRoLm1pbihcbiAgICAgICAgICAgIE1hdGgubWF4KHRoaXMuc2xvcGVEaWZmLCAtZ2xvYmFscy5zbG9wZURpZmZMaW0pLFxuICAgICAgICAgICAgZ2xvYmFscy5zbG9wZURpZmZMaW1cbiAgICAgICAgICApXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzbG9wZSBkaWZmIGJ1bXBcIilcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2U2xvcGUgPSB0aGlzLnNsb3BlXG4gICAgICAgIHRoaXMuc2xvcGUgKz0gdGhpcy5zbG9wZURpZmZcbiAgICAgICAgdGhpcy5zbG9wZSAqPSBnbG9iYWxzLnNsb3BlRGVjYXlcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuc2xvcGUpID4gZ2xvYmFscy5zbG9wZUxpbSkge1xuICAgICAgICAgIHRoaXMuc2xvcGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgIE1hdGgubWF4KHRoaXMuc2xvcGUsIC1nbG9iYWxzLnNsb3BlTGltKSxcbiAgICAgICAgICAgIGdsb2JhbHMuc2xvcGVMaW1cbiAgICAgICAgICApXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzbG9wZSBidW1wXCIpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zbG9wZURpZmYgPSB0aGlzLnNsb3BlIC0gcHJldlNsb3BlXG4gICAgICB9LFxuICAgICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVNsb3BlKClcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc2xvcGUgKiBnbG9iYWxzLmdyb3VuZERldGFpbEludGVydmFsXG4gICAgICAgIHRoaXMueXMucHVzaCh0aGlzLnkpXG4gICAgICAgIC8vIHByZXZlbnQgZmxvYXRpbmcgcG9pbnQgZHJpZnRcbiAgICAgICAgdGhpcy54SWR4KytcbiAgICAgICAgdGhpcy54ID0gZ2xvYmFscy5ncm91bmREZXRhaWxJbnRlcnZhbCAqIHRoaXMueElkeFxuICAgICAgfSxcbiAgICB9XG4gIH1cbiAgY29uc3QgbGVmdE9iaiA9IHRlcnJhaW5MUk9iamVjdCgpLFxuICAgIHJpZ2h0T2JqID0gdGVycmFpbkxST2JqZWN0KClcblxuICBmb3IgKFxuICAgIGxldCBfID0gMDtcbiAgICBfIDwgZ2xvYmFscy5ncm91bmRIYWxmV2lkdGggLyBnbG9iYWxzLmdyb3VuZERldGFpbEludGVydmFsO1xuICAgIF8rK1xuICApIHtcbiAgICBsZWZ0T2JqLnVwZGF0ZSgpXG4gICAgcmlnaHRPYmoudXBkYXRlKClcbiAgfVxuICBsZWZ0T2JqLnlzLnJldmVyc2UoKVxuXG4gIHJldHVybiBsZWZ0T2JqLnlzLmNvbmNhdChbMF0pLmNvbmNhdChyaWdodE9iai55cylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHhQb3NUb1RlcnJhaW5JZHgoeCkge1xuICB4ID0gTWF0aC5taW4oTWF0aC5tYXgoeCwgLWdsb2JhbHMuZ3JvdW5kSGFsZldpZHRoKSwgZ2xvYmFscy5ncm91bmRIYWxmV2lkdGgpXG4gIHJldHVybiAoXG4gICAgTWF0aC5yb3VuZCh4IC8gZ2xvYmFscy5ncm91bmREZXRhaWxJbnRlcnZhbCkgKyAoZ2xvYmFscy5uVGVycmFpblB0cyAtIDEpIC8gMlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJyYWluSWR4VG9YUG9zKGlkeCkge1xuICByZXR1cm4gKGlkeCAtIChnbG9iYWxzLm5UZXJyYWluUHRzIC0gMSkgLyAyKSAqIGdsb2JhbHMuZ3JvdW5kRGV0YWlsSW50ZXJ2YWxcbn1cblxuZnVuY3Rpb24gaW50ZXJwVGVycmFpblkoeCwgdGVycmFpblB0cykge1xuICB4ID0gTWF0aC5taW4oTWF0aC5tYXgoeCwgLWdsb2JhbHMuZ3JvdW5kSGFsZldpZHRoKSwgZ2xvYmFscy5ncm91bmRIYWxmV2lkdGgpXG4gIGNvbnN0IHhTY2FsZWQgPSB4IC8gZ2xvYmFscy5ncm91bmREZXRhaWxJbnRlcnZhbCxcbiAgICBpZHhPZmZzZXQgPSAoZ2xvYmFscy5uVGVycmFpblB0cyAtIDEpIC8gMixcbiAgICBjbGlwcGVkID0gW01hdGguZmxvb3IoeFNjYWxlZCksIE1hdGguY2VpbCh4U2NhbGVkKV0sXG4gICAgeHMgPSBjbGlwcGVkLm1hcCgodikgPT4gZ2xvYmFscy5ncm91bmREZXRhaWxJbnRlcnZhbCAqIHYpLFxuICAgIHlzID0gY2xpcHBlZC5tYXAoKHYpID0+IHRlcnJhaW5QdHNbdiArIGlkeE9mZnNldF0pXG5cbiAgaWYgKHhzWzFdID09IHhzWzBdKSB7XG4gICAgcmV0dXJuIHlzWzBdXG4gIH1cbiAgY29uc3Qgc2xvcGUgPSAoeXNbMV0gLSB5c1swXSkgLyAoeHNbMV0gLSB4c1swXSksXG4gICAgeERpZmYgPSB4IC0geHNbMF0sXG4gICAgeURpZmYgPSBzbG9wZSAqIHhEaWZmXG4gIHJldHVybiB5c1swXSArIHlEaWZmXG59XG4iLCIvLyBpbXBvcnRTY3JpcHRzKFwiLi4vQm94MkQtanMvQm94MkRfdjIuMy4xX21pbi5qc1wiLCBcIi4uL2dsb2JhbHMuanNcIiwgXCIuLi90aXBweS5qc1wiKVxuXG5pbXBvcnQgQm94MkRGYWN0b3J5IGZyb20gXCJib3gyZC13YXNtL2Rpc3QvZXMvQm94MkRcIlxuaW1wb3J0IHsgZ2xvYmFscyB9IGZyb20gXCIuLy4uL2dsb2JhbHMuanNcIlxuaW1wb3J0IHsgUG9wdWxhdGlvbiB9IGZyb20gXCIuLy4uL3RpcHB5LmpzXCJcblxubGV0IHBvcHVsYXRpb24gPSBudWxsXG5cbm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gIGNvbnN0IFtpbmZvLCBtc2ddID0gZS5kYXRhXG4gIGlmIChpbmZvID09IFwidGVycmFpblB0c1wiKSB7XG4gICAgQm94MkRGYWN0b3J5KCkudGhlbigoYjIpID0+IHtcbiAgICAgIHBvcHVsYXRpb24gPSBuZXcgUG9wdWxhdGlvbihbMCwgMF0sIDEsIG1zZywgYjIpXG4gICAgfSlcbiAgfSBlbHNlIGlmIChpbmZvID09IFwidGFyZ2V0c1NvbHV0aW9uc1wiKSB7XG4gICAgY29uc3Qgc29sdXRpb25zU2NvcmVzID0gcG9wdWxhdGlvbi50cmFpbihtc2cpXG4gICAgcG9zdE1lc3NhZ2UoW1wic29sdXRpb25zU2NvcmVzXCIsIHNvbHV0aW9uc1Njb3Jlc10pXG4gIH1cbn1cbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gdGhlIHN0YXJ0dXAgZnVuY3Rpb25cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5cdC8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuXHR2YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2JveDJkLXdhc21fZGlzdF9lc19Cb3gyRF9qc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy90aXBweS93b3JrZXJzL3NpbXVsYXRpb24td29ya2VyLmpzXCIpKSlcblx0X193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcblx0cmV0dXJuIF9fd2VicGFja19leHBvcnRzX187XG59O1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzIGFuZCBzaWJsaW5nIGNodW5rcyBmb3IgdGhlIGVudHJ5cG9pbnRcbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIFwiZWI5NDEyM2MwODUyZmM4Nzk2MjVcIiArIFwiLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBzZWxmLmxvY2F0aW9uICsgXCJcIjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3Ncbi8vIFwiMVwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJzcmNfcGFnZXNfdGlwcHlfd29ya2Vyc19zaW11bGF0aW9uLXdvcmtlcl9qc1wiOiAxXG59O1xuXG4vLyBpbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmdcbnZhciBpbnN0YWxsQ2h1bmsgPSAoZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdHdoaWxlKGNodW5rSWRzLmxlbmd0aClcblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHMucG9wKCldID0gMTtcblx0cGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmkgPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0Ly8gXCIxXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG5cdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0aW1wb3J0U2NyaXB0cyhfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCkpO1xuXHRcdH1cblx0fVxufTtcblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJwYWNrX3Rlc3RcIl0gPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja190ZXN0XCJdIHx8IFtdO1xudmFyIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uID0gY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSBpbnN0YWxsQ2h1bms7XG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3QiLCJ2YXIgbmV4dCA9IF9fd2VicGFja19yZXF1aXJlX18ueDtcbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2JveDJkLXdhc21fZGlzdF9lc19Cb3gyRF9qc1wiKS50aGVuKG5leHQpO1xufTsiLCIiLCIvLyBydW4gc3RhcnR1cFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiIsIiJdLCJuYW1lcyI6WyJnbG9iYWxzIiwidyIsImgiLCJsSW5wdXRDb2RlcyIsInJJbnB1dENvZGVzIiwieE9mZnMiLCJ0cyIsInNpbkxpbSIsInNpblN0ZXAiLCJzaW5EZWNheSIsInZlbExpbSIsInZlbERlY2F5IiwiZ3JvdW5kSGFsZldpZHRoIiwiZ3JvdW5kRmxhdENlbnRlckhhbGZXaWR0aCIsImdyb3VuZERldGFpbEludGVydmFsIiwiblRlcnJhaW5QdHMiLCJ3YWxsSCIsIndhbGxXIiwic2xvcGVEZWNheSIsInNsb3BlTGltIiwic2xvcGVEaWZmTWFnIiwic2xvcGVEaWZmRGVjYXkiLCJzbG9wZURpZmZMaW0iLCJiYXJNYXgiLCJsaW0iLCJ0YXJnZXRUeXBlIiwiYmFySGVpZ2h0Iiwic2NvcmVEZW5vbUVwcyIsImNyYXNoU2luTGltaXQiLCJtYXhUb3JxdWUiLCJuV29ya2VycyIsIm11bHRpcGxpZXIiLCJlcExlbiIsInR3aXRjaGluZXNzZXMiLCJjbWFTaWdtYSIsImJveF9tdWxsZXIiLCJ1MCIsIk1hdGgiLCJyYW5kb20iLCJ1MSIsInBhcnQwIiwic3FydCIsImxvZyIsInBhcnQxIiwiUEkiLCJ6MCIsImNvcyIsInoxIiwic2luIiwiRmxvYXQzMkFycmF5IiwiZnJvbSIsInJhbmRfbm9ybWFsIiwibiIsInJlcyIsImkiLCJwYWlyIiwiVGlwcHkiLCJ3aGVlbFBvc0luaXQiLCJ3b3JsZCIsImIyIiwicG9wdWxhdGlvbiIsImNvbnNvbGUiLCJhc3NlcnQiLCJsZW5ndGgiLCJ3aGVlbFIiLCJ3aGVlbEZyaWN0aW9uIiwid2hlZWxEZW5zaXR5Iiwid2hlZWxSZXN0aXR1dGlvbiIsImNoYXNzaXNEZW5zaXR5IiwiY2hhc3Npc0giLCJjaGFzc2lzVyIsImF4bGVPZmZzZXRZIiwiYmQiLCJiMkJvZHlEZWYiLCJzZXRfdHlwZSIsImIyX2R5bmFtaWNCb2R5Iiwic2V0X3Bvc2l0aW9uIiwiYjJWZWMyIiwid2hlZWxCb2R5IiwiQ3JlYXRlQm9keSIsInNoYXBlIiwiYjJDaXJjbGVTaGFwZSIsInNldF9tX3JhZGl1cyIsImZkIiwiYjJGaXh0dXJlRGVmIiwic2V0X3NoYXBlIiwic2V0X2RlbnNpdHkiLCJzZXRfZnJpY3Rpb24iLCJzZXRfcmVzdGl0dXRpb24iLCJmaWx0ZXIiLCJnZXRfZmlsdGVyIiwic2V0X2NhdGVnb3J5Qml0cyIsInNldF9tYXNrQml0cyIsInNldF9maWx0ZXIiLCJmaXh0dXJlIiwiY2FzdE9iamVjdCIsIkNyZWF0ZUZpeHR1cmUiLCJiMkZpeHR1cmUiLCJwYXJ0VHlwZSIsInNwb3QiLCJ3aGVlbE1hc3MiLCJHZXRNYXNzIiwiZWRnZVgiLCJlZGdlWSIsImN1dG91dFgiLCJjdXRvdXRZIiwiY2hhc3Npc1ZlcnRpY2VzIiwiYjJDaGFzc2lzVmVydGljZXMiLCJ2ZXJ0ZXgiLCJwdXNoIiwiY2hhc3Npc1Bvc0luaXQiLCJjaGFzc2lzQm9keSIsImIyQ3JlYXRlUG9seWdvblNoYXBlIiwiY2hhc3Npc01hc3MiLCJqZCIsImIyUmV2b2x1dGVKb2ludERlZiIsIkluaXRpYWxpemUiLCJzZXRfZW5hYmxlTW90b3IiLCJzZXRfbWF4TW90b3JUb3JxdWUiLCJheGxlIiwiQ3JlYXRlSm9pbnQiLCJiMlJldm9sdXRlSm9pbnQiLCJpbnB1dERpbSIsImdldElucHV0cyIsInNoYXBlcyIsIm5fZGltIiwid2VpZ2h0Q291bnQiLCJiaWFzQ291bnQiLCJtIiwicmVzZXQiLCJ2ZXJ0aWNlcyIsImIyUG9seWdvblNoYXBlIiwiYnVmZmVyIiwiX21hbGxvYyIsIm9mZnNldCIsIkhFQVBGMzIiLCJnZXRfeCIsImdldF95IiwicHRyX3dyYXBwZWQiLCJ3cmFwUG9pbnRlciIsIlNldCIsImZsYXRXdHMiLCJmbGF0V3RJZHgiLCJ3ZWlnaHRzIiwibmV3V2VpZ2h0Iiwic2xpY2UiLCJNYXRyaXgiLCJiaWFzZXMiLCJuZXdCaWFzIiwiU2V0VHJhbnNmb3JtIiwiU2V0TGluZWFyVmVsb2NpdHkiLCJTZXRBbmd1bGFyVmVsb2NpdHkiLCJTZXRBd2FrZSIsInRhcmdldFNxRXJyU3VtIiwidGFyZ2V0UHJldiIsInByZXZPdXRwdXQiLCJvdXRwdXREaWZmU3FTdW0iLCJwcmV2V2hlZWxWZWxYIiwid2hlZWxBY2NYIiwicHJldkNoYXNzaXNWZWxYIiwiY2hhc3Npc0FjY1giLCJkcmlmdFhTcVN1bSIsImNyYXNoU3RlcENvdW50IiwidGFyZ2V0IiwiY3VycmVudCIsImRpZmYiLCJkaWZmU3EiLCJkZW5vbSIsImFicyIsInNwZWVkIiwiU2V0TW90b3JTcGVlZCIsInJldmVyc2UiLCJzaWduIiwiaW5wdXRzIiwid2hlZWxQb3MiLCJHZXRQb3NpdGlvbiIsIndoZWVsWCIsIndoZWVsWSIsImxpZGFyWXMiLCJ4T2ZmIiwibGlkYXJZIiwiaW50ZXJwVGVycmFpblkiLCJ0ZXJyYWluUHRzIiwiY2hhc3Npc1NpbiIsIkdldEFuZ2xlIiwiY2hhc3Npc1ZlbCIsIkdldExpbmVhclZlbG9jaXR5IiwiY2hhc3Npc1ZlbFgiLCJjaGFzc2lzQW5nVmVsIiwiR2V0QW5ndWxhclZlbG9jaXR5Iiwid2hlZWxWZWwiLCJ3aGVlbFZlbFgiLCJ3aGVlbEFuZ1ZlbCIsImF4bGVSeG4iLCJHZXRSZWFjdGlvbkZvcmNlIiwidXBkYXRlVGFyZ2V0U2NvcmUiLCJpbnB1dHNBcnJheSIsImlucHV0c01hdHJpeCIsIm91dHB1dFJhdyIsIm11bCIsImFkZCIsImxlYWt5RWx1IiwiZGF0YSIsIm91dHB1dCIsInNldFNwZWVkIiwib3V0cHV0RGlmZiIsImNoYXNzaXNQb3MiLCJ3aGVlbFBvc0N1cnJlbnQiLCJ3aGVlbEFuZ2xlQ3VycmVudCIsImNoYXNzaXNQb3NDdXJyZW50IiwiY2hhc3Npc0FuZ2xlQ3VycmVudCIsIm90aGVyIiwiYSIsImIiLCJwIiwiYyIsIkFycmF5QnVmZmVyIiwiaiIsInN1bSIsImsiLCJsIiwicmVzdWx0IiwibWF4IiwiZXhwbTEiLCJ2ZWN0b3JOb3JtcyIsInZlY3RvcnMiLCJmaWxsIiwidmVjdG9yIiwieCIsInJvd05vcm1UaGluZ3kiLCJtYXQiLCJyb3dDb3VudCIsImNvbENvdW50Iiwic3VtQWxsIiwicm93U3VtcyIsImNvbFN1bXMiLCJyb3dJZHgiLCJjb2xJZHgiLCJ2YWwiLCJ2YWxTcSIsInN1bVJvd3MiLCJzdW1Db2xzIiwiUG9wdWxhdGlvbiIsIm5UaXBweXMiLCJncmF2aXR5IiwiYjJXb3JsZCIsImdyb3VuZEJvZHkiLCJ0ZXJyYWluUHRzRmlsdGVyZWQiLCJ5RGlmZlByZXYiLCJ5RGlmZkN1cnIiLCJzYW1lU2xvcGUiLCJ0ZXJyYWluSWR4VG9YUG9zIiwiZWRnZVNoYXBlIiwiYjJFZGdlU2hhcGUiLCJTZXRUd29TaWRlZCIsImdyb3VuZEZEIiwiZ3JvdW5kRml4dHVyZSIsImlkeCIsInkiLCJ0aXBweXMiLCJhZGRUaXBweXMiLCJ0aXBweSIsImZsYXRXdHNJZHgiLCJzZXRXdHMiLCJ0YXJnZXRzIiwic29sdXRpb25zIiwiblNvbHV0aW9ucyIsInRhcmdldElkeCIsInN0ZXAiLCJ1cGRhdGUiLCJTdGVwIiwic29sdXRpb25zU2NvcmVzIiwidGlwcHkwIiwic29sdXRpb24iLCJ3dHNOb3JtIiwid3RMYXllciIsInd0IiwiYmlhc05vcm0iLCJiaWFzTGF5ZXIiLCJiaWFzIiwidGFza1Njb3JlcyIsInRhc2tUaXBweSIsIm1zZSIsImNyYXNoZWRSYXRpbyIsImRyaWZ0WCIsInNjYWxlIiwiY2VudGVyIiwiZHJhdyIsInVwZGF0ZURpcmVjdGlvbiIsImxkIiwicmQiLCJfdGFyZ2V0U2luIiwiX3RhcmdldFZlbCIsInRhcmdldFNpbiIsInRhcmdldFZlbCIsImdlbmVyYXRlVGVycmFpblB0cyIsInRlcnJhaW5MUk9iamVjdCIsInNsb3BlRGlmZiIsInNsb3BlIiwieElkeCIsInlzIiwidXBkYXRlU2xvcGUiLCJtaW4iLCJwcmV2U2xvcGUiLCJsZWZ0T2JqIiwicmlnaHRPYmoiLCJfIiwiY29uY2F0IiwieFBvc1RvVGVycmFpbklkeCIsInJvdW5kIiwieFNjYWxlZCIsImlkeE9mZnNldCIsImNsaXBwZWQiLCJmbG9vciIsImNlaWwiLCJ4cyIsIm1hcCIsInYiLCJ4RGlmZiIsInlEaWZmIiwiQm94MkRGYWN0b3J5Iiwib25tZXNzYWdlIiwiZSIsImluZm8iLCJtc2ciLCJ0aGVuIiwidHJhaW4iLCJwb3N0TWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=