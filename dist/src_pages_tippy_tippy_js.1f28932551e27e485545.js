"use strict";
(self["webpackChunkwebpack_test"] = self["webpackChunkwebpack_test"] || []).push([["src_pages_tippy_tippy_js"],{

/***/ "./src/pages/tippy/globals.js":
/*!************************************!*\
  !*** ./src/pages/tippy/globals.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX3RpcHB5X3RpcHB5X2pzLjFmMjg5MzI1NTFlMjdlNDg1NTQ1LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxPQUFPLEdBQUc7QUFDckJDLEVBQUFBLENBQUMsRUFBRSxHQURrQjtBQUVyQkMsRUFBQUEsQ0FBQyxFQUFFLEdBRmtCO0FBR3JCQyxFQUFBQSxXQUFXLEVBQUUsQ0FBQyxNQUFELEVBQVMsV0FBVCxDQUhRO0FBSXJCQyxFQUFBQSxXQUFXLEVBQUUsQ0FBQyxNQUFELEVBQVMsWUFBVCxDQUpRO0FBS3JCQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUYsRUFBTyxDQUFDLEdBQVIsRUFBYSxHQUFiLEVBQWtCLEdBQWxCLENBTGM7QUFNckJDLEVBQUFBLEVBQUUsRUFBRSxNQUFNLEVBTlc7QUFPckI7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLEdBUmE7QUFTckI7QUFDQUMsRUFBQUEsT0FBTyxFQUFFLElBVlk7QUFXckJDLEVBQUFBLFFBQVEsRUFBRSxJQVhXO0FBWXJCQyxFQUFBQSxNQUFNLEVBQUUsQ0FaYTtBQWFyQkMsRUFBQUEsUUFBUSxFQUFFLElBYlc7QUFjckJDLEVBQUFBLGVBQWUsRUFBRSxHQWRJO0FBZXJCQyxFQUFBQSx5QkFBeUIsRUFBRSxDQWZOO0FBZ0JyQkMsRUFBQUEsb0JBQW9CLEVBQUUsR0FoQkQ7O0FBaUJyQjtBQUNBLE1BQUlDLFdBQUosR0FBa0I7QUFDaEIsV0FBTyxLQUFLLEtBQUtILGVBQUwsR0FBdUIsS0FBS0Usb0JBQWpDLElBQXlELENBQWhFO0FBQ0QsR0FwQm9COztBQXFCckJFLEVBQUFBLEtBQUssRUFBRSxHQXJCYztBQXNCckJDLEVBQUFBLEtBQUssRUFBRSxHQXRCYztBQXVCckI7QUFDQUMsRUFBQUEsVUFBVSxFQUFFLEdBeEJTO0FBeUJyQkMsRUFBQUEsUUFBUSxFQUFFLEdBekJXO0FBMEJyQkMsRUFBQUEsWUFBWSxFQUFFLEtBMUJPO0FBMkJyQkMsRUFBQUEsY0FBYyxF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QUMsQ0FBRCxDQUFYLEtBQW1CZSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFBLEVBQUUsQ0FBQyxDQUFELENBQTdCLENBQWQ7QUFBQSxNQUNFRyxLQUFLLEdBQUcxRixDQUFDLEdBQUd1RixFQUFFLENBQUMsQ0FBRCxDQURoQjtBQUFBLE1BRUVJLEtBQUssR0FBR3JCLEtBQUssR0FBR29CLEtBRmxCO0FBR0EsU0FBT2xCLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUW1CLEtBQWY7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy90aXBweS9nbG9iYWxzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy90aXBweS9yYW5kb21fbm9ybWFsLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVzdC8uL3NyYy9wYWdlcy90aXBweS90aXBweS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2xvYmFscyA9IHtcbiAgdzogODAwLFxuICBoOiA0MDAsXG4gIGxJbnB1dENvZGVzOiBbXCJLZXlKXCIsIFwiQXJyb3dMZWZ0XCJdLFxuICBySW5wdXRDb2RlczogW1wiS2V5S1wiLCBcIkFycm93UmlnaHRcIl0sXG4gIHhPZmZzOiBbLTAuMywgLTAuMSwgMC4xLCAwLjNdLFxuICB0czogMS4wIC8gNjAsXG4gIC8vIHNpbkxpbTogMC4zLFxuICBzaW5MaW06IDAuNCxcbiAgLy8gZGlyZWN0aW9uU3RlcDogMC4wMixcbiAgc2luU3RlcDogMC4wMyxcbiAgc2luRGVjYXk6IDAuMDEsXG4gIHZlbExpbTogNCxcbiAgdmVsRGVjYXk6IDAuMDEsXG4gIGdyb3VuZEhhbGZXaWR0aDogMTAwLFxuICBncm91bmRGbGF0Q2VudGVySGFsZldpZHRoOiAxLFxuICBncm91bmREZXRhaWxJbnRlcnZhbDogMC4yLFxuICAvLyBuVGVycmFpblB0czogMiAqICh0aGlzLmdyb3VuZEhhbGZXaWR0aCAvIHRoaXMuZ3JvdW5kRGV0YWlsSW50ZXJ2YWwpICsgMSxcbiAgZ2V0IG5UZXJyYWluUHRzKCkge1xuICAgIHJldHVybiAyICogKHRoaXMuZ3JvdW5kSGFsZldpZHRoIC8gdGhpcy5ncm91bmREZXRhaWxJbnRlcnZhbCkgKyAxXG4gIH0sXG4gIHdhbGxIOiAwLjksXG4gIHdhbGxXOiAwLjUsXG4gIC8vIHNsb3BlTWFnOiAwLjEsXG4gIHNsb3BlRGVjYXk6IDAuOSxcbiAgc2xvcGVMaW06IDAuNCxcbiAgc2xvcGVEaWZmTWFnOiAwLjEyNSxcbiAgc2xvcGVEaWZmRGVjYXk6IDEuMSxcbiAgc2xvcGVEaWZmTGltOiAwLjIsXG4gIGdldCBiYXJNYXgoKSB7XG4gICAgY29uc3QgbGltID0gdGhpcy50YXJnZXRUeXBlID09IFwidmVsXCIgPyB0aGlzLnZlbExpbSA6IHRoaXMuc2luTGltXG4gICAgcmV0dXJuICgwLjUgKiAwLjkgKiB0aGlzLncpIC8gbGltXG4gIH0sXG4gIGJhckhlaWdodDogMjUsXG4gIC8vIHNjb3JlRGVub21FcHM6IDAuMDEsXG4gIC8vIHNjb3JlRGVub21FcHM6IDAuMSxcbiAgZ2V0IHNjb3JlRGVub21FcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2luTGltXG4gIH0sXG4gIGNyYXNoU2luTGltaXQ6IDAuOCxcbiAgbWF4VG9ycXVlOiAxLjAsXG4gIG5Xb3JrZXJzOiA4LFxuICBtdWx0aXBsaWVyOiAyLFxuICBlcExlbjogODAwLFxuICB0d2l0Y2hpbmVzc2VzOiBbMCwgMC4xLCAwLjA1LCAwLjAyNSwgMC4wMSwgMC4wMDUsIDAuMDAyNSwgbnVsbF0sXG4gIGNtYVNpZ21hOiAwLjUsXG4gIC8vIHRhcmdldFR5cGU6IFwic2luXCIsXG4gIHRhcmdldFR5cGU6IFwidmVsXCIsXG59XG4iLCJmdW5jdGlvbiBib3hfbXVsbGVyKCkge1xuICBsZXQgdTAgPSBNYXRoLnJhbmRvbSgpXG4gIGxldCB1MSA9IE1hdGgucmFuZG9tKClcbiAgLy8gbGV0IHBhcnQwID0gKC0yLjAgKiB1MC5sbigpKS5zcXJ0KClcbiAgbGV0IHBhcnQwID0gTWF0aC5zcXJ0KC0yLjAgKiBNYXRoLmxvZyh1MCkpXG4gIGxldCBwYXJ0MSA9IDIuMCAqIE1hdGguUEkgKiB1MVxuICBsZXQgejAgPSBwYXJ0MCAqIE1hdGguY29zKHBhcnQxKVxuICBsZXQgejEgPSBwYXJ0MCAqIE1hdGguc2luKHBhcnQxKVxuXG4gIHJldHVybiBGbG9hdDMyQXJyYXkuZnJvbShbejAsIHoxXSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRfbm9ybWFsKG4pIHtcbiAgY29uc3QgcmVzID0gbmV3IEZsb2F0MzJBcnJheShuKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IHBhaXIgPSBib3hfbXVsbGVyKClcbiAgICByZXNbaV0gPSBwYWlyWzBdXG4gICAgaWYgKGkgKyAxID49IG4pIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGkrK1xuICAgIHJlc1tpXSA9IHBhaXJbMV1cbiAgfVxuICByZXR1cm4gcmVzXG59XG4iLCJpbXBvcnQgeyBnbG9iYWxzIH0gZnJvbSBcIi4vZ2xvYmFscy5qc1wiXG5pbXBvcnQgeyByYW5kX25vcm1hbCB9IGZyb20gXCIuL3JhbmRvbV9ub3JtYWwuanNcIlxuXG5jbGFzcyBUaXBweSB7XG4gIGNvbnN0cnVjdG9yKHdoZWVsUG9zSW5pdCwgd29ybGQsIGIyLCBwb3B1bGF0aW9uKSB7XG4gICAgdGhpcy5wb3B1bGF0aW9uID0gcG9wdWxhdGlvblxuICAgIGNvbnNvbGUuYXNzZXJ0KHdoZWVsUG9zSW5pdC5sZW5ndGggPT0gMiwgXCJUaXBweSByZXF1aXJlcyAyZCB3aGVlbFBvc1wiKVxuICAgIC8vIHRoaXMud2hlZWxQb3NJbml0ID0gd2hlZWxQb3NJbml0LnNsaWNlKClcbiAgICB0aGlzLndoZWVsUiA9IDAuMjVcbiAgICB0aGlzLndoZWVsUG9zSW5pdCA9IFt3aGVlbFBvc0luaXRbMF0sIHdoZWVsUG9zSW5pdFsxXSAtIHRoaXMud2hlZWxSXVxuICAgIGNvbnN0IHdoZWVsRnJpY3Rpb24gPSAwLjksXG4gICAgICB3aGVlbERlbnNpdHkgPSAwLjUsXG4gICAgICB3aGVlbFJlc3RpdHV0aW9uID0gMC4xLFxuICAgICAgY2hhc3Npc0RlbnNpdHkgPSAyLjBcbiAgICB0aGlzLmNoYXNzaXNIID0gMS4wXG4gICAgdGhpcy5jaGFzc2lzVyA9IDAuM1xuICAgIHRoaXMuYXhsZU9mZnNldFkgPSAwLjFcblxuICAgIC8vIGNyZWF0ZSB3aGVlbFxuICAgIHtcbiAgICAgIGNvbnN0IGJkID0gbmV3IGIyLmIyQm9keURlZigpXG4gICAgICBiZC5zZXRfdHlwZShiMi5iMl9keW5hbWljQm9keSlcbiAgICAgIGJkLnNldF9wb3NpdGlvbihuZXcgYjIuYjJWZWMyKC4uLnRoaXMud2hlZWxQb3NJbml0KSlcbiAgICAgIHRoaXMud2hlZWxCb2R5ID0gd29ybGQuQ3JlYXRlQm9keShiZClcblxuICAgICAgY29uc3Qgc2hhcGUgPSBuZXcgYjIuYjJDaXJjbGVTaGFwZSgpXG4gICAgICBzaGFwZS5zZXRfbV9yYWRpdXModGhpcy53aGVlbFIpXG5cbiAgICAgIGNvbnN0IGZkID0gbmV3IGIyLmIyRml4dHVyZURlZigpXG4gICAgICBmZC5zZXRfc2hhcGUoc2hhcGUpXG4gICAgICBmZC5zZXRfZGVuc2l0eSh3aGVlbERlbnNpdHkpXG4gICAgICBmZC5zZXRfZnJpY3Rpb24od2hlZWxGcmljdGlvbilcbiAgICAgIGZkLnNldF9yZXN0aXR1dGlvbih3aGVlbFJlc3RpdHV0aW9uKVxuXG4gICAgICBjb25zdCBmaWx0ZXIgPSBmZC5nZXRfZmlsdGVyKClcbiAgICAgIGZpbHRlci5zZXRfY2F0ZWdvcnlCaXRzKDB4MDAwMilcbiAgICAgIGZpbHRlci5zZXRfbWFza0JpdHMoMHgwMDAxKVxuICAgICAgZmQuc2V0X2ZpbHRlcihmaWx0ZXIpXG4gICAgICBjb25zdCBmaXh0dXJlID0gYjIuY2FzdE9iamVjdChcbiAgICAgICAgdGhpcy53aGVlbEJvZHkuQ3JlYXRlRml4dHVyZShmZCksXG4gICAgICAgIGIyLmIyRml4dHVyZVxuICAgICAgKVxuICAgICAgZml4dHVyZS5wYXJ0VHlwZSA9IFwid2hlZWxcIlxuICAgICAgZml4dHVyZS5zcG90ID0gdGhpc1xuXG4gICAgICB0aGlzLndoZWVsTWFzcyA9IHRoaXMud2hlZWxCb2R5LkdldE1hc3MoKVxuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBjaGFzc2lzXG4gICAge1xuICAgICAgY29uc3QgZWRnZVggPSAwLjUgKiB0aGlzLmNoYXNzaXNXLFxuICAgICAgICBlZGdlWSA9IDAuNSAqIHRoaXMuY2hhc3Npc0gsXG4gICAgICAgIGN1dG91dFggPSAwLjIgKiB0aGlzLmNoYXNzaXNXLFxuICAgICAgICBjdXRvdXRZID0gMC4zNSAqIHRoaXMuY2hhc3Npc0hcblxuICAgICAgdGhpcy5jaGFzc2lzVmVydGljZXMgPSBbXG4gICAgICAgIFsrZWRnZVgsIC1lZGdlWV0sXG4gICAgICAgIFstZWRnZVgsIC1lZGdlWV0sXG4gICAgICAgIFstZWRnZVgsICtjdXRvdXRZXSxcbiAgICAgICAgWy1jdXRvdXRYLCArZWRnZVldLFxuICAgICAgICBbK2N1dG91dFgsICtlZGdlWV0sXG4gICAgICAgIFsrZWRnZVgsICtjdXRvdXRZXSxcbiAgICAgIF1cblxuICAgICAgY29uc3QgYjJDaGFzc2lzVmVydGljZXMgPSBbXVxuICAgICAgZm9yIChsZXQgdmVydGV4IG9mIHRoaXMuY2hhc3Npc1ZlcnRpY2VzKSB7XG4gICAgICAgIGIyQ2hhc3Npc1ZlcnRpY2VzLnB1c2goXG4gICAgICAgICAgbmV3IGIyLmIyVmVjMihcbiAgICAgICAgICAgIHZlcnRleFswXSArIHRoaXMud2hlZWxQb3NJbml0WzBdLFxuICAgICAgICAgICAgdmVydGV4WzFdICsgdGhpcy53aGVlbFBvc0luaXRbMV1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgdGhpcy5jaGFzc2lzUG9zSW5pdCA9IFtcbiAgICAgICAgdGhpcy53aGVlbFBvc0luaXRbMF0sXG4gICAgICAgIHRoaXMud2hlZWxQb3NJbml0WzFdIC0gMC41ICogdGhpcy5jaGFzc2lzSCArIHRoaXMuYXhsZU9mZnNldFksXG4gICAgICBdXG4gICAgICBjb25zdCBiZCA9IG5ldyBiMi5iMkJvZHlEZWYoKVxuICAgICAgYmQuc2V0X3R5cGUoYjIuYjJfZHluYW1pY0JvZHkpXG4gICAgICBiZC5zZXRfcG9zaXRpb24obmV3IGIyLmIyVmVjMiguLi50aGlzLmNoYXNzaXNQb3NJbml0KSlcbiAgICAgIC8vIGJkLnNldF9saW5lYXJEYW1waW5nKDAuMSlcbiAgICAgIC8vIGJkLnNldF9hbmd1bGFyRGFtcGluZygwLjEpXG4gICAgICB0aGlzLmNoYXNzaXNCb2R5ID0gd29ybGQuQ3JlYXRlQm9keShiZClcbiAgICAgIGNvbnN0IHNoYXBlID0gdGhpcy5iMkNyZWF0ZVBvbHlnb25TaGFwZShiMkNoYXNzaXNWZXJ0aWNlcywgYjIpXG4gICAgICBjb25zdCBmZCA9IG5ldyBiMi5iMkZpeHR1cmVEZWYoKVxuICAgICAgY29uc3QgZmlsdGVyID0gZmQuZ2V0X2ZpbHRlcigpXG4gICAgICBmaWx0ZXIuc2V0X2NhdGVnb3J5Qml0cygweDAwMDIpXG4gICAgICBmaWx0ZXIuc2V0X21hc2tCaXRzKDB4MDAwMSlcbiAgICAgIGZkLnNldF9maWx0ZXIoZmlsdGVyKVxuICAgICAgZmQuc2V0X2RlbnNpdHkoY2hhc3Npc0RlbnNpdHkpXG4gICAgICBmZC5zZXRfc2hhcGUoc2hhcGUpXG4gICAgICAvLyBmZC5zZXRfZnJpY3Rpb24oMC4zKVxuICAgICAgLy8gZmQuc2V0X3Jlc3RpdHV0aW9uKDAuMSlcbiAgICAgIGNvbnN0IGZpeHR1cmUgPSBiMi5jYXN0T2JqZWN0KFxuICAgICAgICB0aGlzLmNoYXNzaXNCb2R5LkNyZWF0ZUZpeHR1cmUoZmQpLFxuICAgICAgICBiMi5iMkZpeHR1cmVcbiAgICAgIClcbiAgICAgIGZpeHR1cmUucGFydFR5cGUgPSBcImNoYXNzaXNcIlxuICAgICAgZml4dHVyZS5zcG90ID0gdGhpc1xuICAgICAgdGhpcy5jaGFzc2lzTWFzcyA9IHRoaXMuY2hhc3Npc0JvZHkuR2V0TWFzcygpXG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIGpvaW50XG4gICAge1xuICAgICAgY29uc3QgamQgPSBuZXcgYjIuYjJSZXZvbHV0ZUpvaW50RGVmKClcbiAgICAgIGpkLkluaXRpYWxpemUoXG4gICAgICAgIHRoaXMud2hlZWxCb2R5LFxuICAgICAgICB0aGlzLmNoYXNzaXNCb2R5LFxuICAgICAgICBuZXcgYjIuYjJWZWMyKC4uLnRoaXMud2hlZWxQb3NJbml0KVxuICAgICAgKVxuXG4gICAgICBqZC5zZXRfZW5hYmxlTW90b3IodHJ1ZSlcbiAgICAgIGpkLnNldF9tYXhNb3RvclRvcnF1ZShnbG9iYWxzLm1heFRvcnF1ZSlcbiAgICAgIHRoaXMuYXhsZSA9IGIyLmNhc3RPYmplY3Qod29ybGQuQ3JlYXRlSm9pbnQoamQpLCBiMi5iMlJldm9sdXRlSm9pbnQpXG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dERpbSA9IHRoaXMuZ2V0SW5wdXRzKDApLmxlbmd0aFxuICAgIC8vIC8vIHRoaXMuc2hhcGVzID0gW3RoaXMuaW5wdXREaW0sIDE2LCA4LCA0XVxuICAgIC8vIC8vIHRoaXMuc2hhcGVzID0gW3RoaXMuaW5wdXREaW0sIDIwLCAxMCwgNF1cbiAgICB0aGlzLnNoYXBlcyA9IFt0aGlzLmlucHV0RGltLCAxMiwgOCwgMV1cblxuICAgIHRoaXMubl9kaW0gPSAwXG4gICAgdGhpcy53ZWlnaHRDb3VudCA9IDBcbiAgICB0aGlzLmJpYXNDb3VudCA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgY29uc3QgbiA9IHRoaXMuc2hhcGVzW2ldLFxuICAgICAgICBtID0gdGhpcy5zaGFwZXNbaSArIDFdXG4gICAgICB0aGlzLm5fZGltICs9IChuICsgMSkgKiBtXG4gICAgICB0aGlzLndlaWdodENvdW50ICs9IG4gKiBtXG4gICAgICB0aGlzLmJpYXNDb3VudCArPSBtXG4gICAgfVxuXG4gICAgdGhpcy5yZXNldChiMilcbiAgfVxuXG4gIGIyQ3JlYXRlUG9seWdvblNoYXBlKHZlcnRpY2VzLCBiMikge1xuICAgIGNvbnN0IHNoYXBlID0gbmV3IGIyLmIyUG9seWdvblNoYXBlKClcbiAgICBjb25zdCBidWZmZXIgPSBiMi5fbWFsbG9jKHZlcnRpY2VzLmxlbmd0aCAqIDgpXG4gICAgbGV0IG9mZnNldCA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBiMi5IRUFQRjMyWyhidWZmZXIgKyBvZmZzZXQpID4+IDJdID0gdmVydGljZXNbaV0uZ2V0X3goKVxuICAgICAgYjIuSEVBUEYzMlsoYnVmZmVyICsgKG9mZnNldCArIDQpKSA+PiAyXSA9IHZlcnRpY2VzW2ldLmdldF95KClcbiAgICAgIG9mZnNldCArPSA4XG4gICAgfVxuICAgIGNvbnN0IHB0cl93cmFwcGVkID0gYjIud3JhcFBvaW50ZXIoYnVmZmVyLCBiMi5iMlZlYzIpXG4gICAgc2hhcGUuU2V0KHB0cl93cmFwcGVkLCB2ZXJ0aWNlcy5sZW5ndGgpXG4gICAgcmV0dXJuIHNoYXBlXG4gIH1cblxuICBzZXRXdHMoZmxhdFd0cykge1xuICAgIC8vIHRoaXMuZmxhdFd0cyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5uX2RpbSkubWFwKCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpXG4gICAgdGhpcy5mbGF0V3RzID0gZmxhdFd0c1xuICAgIGxldCBmbGF0V3RJZHggPSAwXG4gICAgdGhpcy53ZWlnaHRzID0gW11cbiAgICAvLyB0aGlzLndlaWdodENvdW50ID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBjb25zdCBuID0gdGhpcy5zaGFwZXNbaV0sXG4gICAgICAgIG0gPSB0aGlzLnNoYXBlc1tpICsgMV0sXG4gICAgICAgIG5ld1dlaWdodCA9IEZsb2F0MzJBcnJheS5mcm9tKFxuICAgICAgICAgIHRoaXMuZmxhdFd0cy5zbGljZShmbGF0V3RJZHgsIGZsYXRXdElkeCArIG4gKiBtKVxuICAgICAgICApXG4gICAgICAvLyB0aGlzLndlaWdodENvdW50ICs9IG5ld1dlaWdodC5sZW5ndGhcbiAgICAgIHRoaXMud2VpZ2h0cy5wdXNoKG5ldyBNYXRyaXgobmV3V2VpZ2h0LCBuLCBtKSlcbiAgICAgIGZsYXRXdElkeCArPSBuICogbVxuICAgIH1cbiAgICB0aGlzLmJpYXNlcyA9IFtdXG4gICAgLy8gdGhpcy5iaWFzQ291bnQgPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoYXBlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IG4gPSAxLFxuICAgICAgICBtID0gdGhpcy5zaGFwZXNbaSArIDFdLFxuICAgICAgICBuZXdCaWFzID0gRmxvYXQzMkFycmF5LmZyb20oXG4gICAgICAgICAgdGhpcy5mbGF0V3RzLnNsaWNlKGZsYXRXdElkeCwgZmxhdFd0SWR4ICsgbiAqIG0pXG4gICAgICAgIClcbiAgICAgIC8vIHRoaXMuYmlhc0NvdW50ICs9IG5ld0JpYXMubGVuZ3RoXG4gICAgICB0aGlzLmJpYXNlcy5wdXNoKG5ldyBNYXRyaXgobmV3QmlhcywgbiwgbSkpXG4gICAgICBmbGF0V3RJZHggKz0gbiAqIG1cbiAgICB9XG4gIH1cblxuICByZXNldChiMikge1xuICAgIHRoaXMuY2hhc3Npc0JvZHkuU2V0VHJhbnNmb3JtKG5ldyBiMi5iMlZlYzIoLi4udGhpcy5jaGFzc2lzUG9zSW5pdCksIDApXG4gICAgdGhpcy5jaGFzc2lzQm9keS5TZXRMaW5lYXJWZWxvY2l0eShuZXcgYjIuYjJWZWMyKDAsIDApKVxuICAgIHRoaXMuY2hhc3Npc0JvZHkuU2V0QW5ndWxhclZlbG9jaXR5KDApXG4gICAgdGhpcy5jaGFzc2lzQm9keS5TZXRBd2FrZSgxKVxuXG4gICAgdGhpcy53aGVlbEJvZHkuU2V0VHJhbnNmb3JtKG5ldyBiMi5iMlZlYzIoLi4udGhpcy53aGVlbFBvc0luaXQpLCAwKVxuICAgIHRoaXMud2hlZWxCb2R5LlNldExpbmVhclZlbG9jaXR5KG5ldyBiMi5iMlZlYzIoMCwgMCkpXG4gICAgdGhpcy53aGVlbEJvZHkuU2V0QW5ndWxhclZlbG9jaXR5KDApXG4gICAgdGhpcy53aGVlbEJvZHkuU2V0QXdha2UoMSlcblxuICAgIHRoaXMudGFyZ2V0U3FFcnJTdW0gPSAwXG4gICAgdGhpcy50YXJnZXRQcmV2ID0gbnVsbFxuXG4gICAgdGhpcy5wcmV2T3V0cHV0ID0gMFxuICAgIHRoaXMub3V0cHV0RGlmZlNxU3VtID0gMFxuXG4gICAgdGhpcy5wcmV2V2hlZWxWZWxYID0gMFxuICAgIHRoaXMud2hlZWxBY2NYID0gMFxuICAgIHRoaXMucHJldkNoYXNzaXNWZWxYID0gMFxuICAgIHRoaXMuY2hhc3Npc0FjY1ggPSAwXG5cbiAgICB0aGlzLmRyaWZ0WFNxU3VtID0gMFxuICAgIHRoaXMuY3Jhc2hTdGVwQ291bnQgPSAwXG4gIH1cblxuICB1cGRhdGVUYXJnZXRTY29yZSh0YXJnZXQsIGN1cnJlbnQpIHtcbiAgICBjb25zdCBkaWZmID0gdGFyZ2V0IC0gY3VycmVudCxcbiAgICAgIGRpZmZTcSA9IGRpZmYgKiBkaWZmLFxuICAgICAgZGVub20gPSBNYXRoLmFicyh0YXJnZXQpICsgZ2xvYmFscy5zY29yZURlbm9tRXBzXG4gICAgLy8gdGhpcy50YXJnZXRTcUVyclN1bSArPSBkaWZmU3EgLyBkZW5vbVxuICAgIHRoaXMudGFyZ2V0U3FFcnJTdW0gKz0gZ2xvYmFscy50YXJnZXRUeXBlID09PSBcInZlbFwiID8gZGlmZlNxIDogMWUyICogZGlmZlNxXG4gIH1cblxuICBzZXRTcGVlZChzcGVlZCkge1xuICAgIHRoaXMuYXhsZS5TZXRNb3RvclNwZWVkKHNwZWVkKVxuICB9XG5cbiAgZ2V0SW5wdXRzKHRhcmdldCkge1xuICAgIHRoaXMucmV2ZXJzZSA9IHRhcmdldCAhPSAwID8gTWF0aC5zaWduKHRhcmdldCkgOiAxXG4gICAgbGV0IGlucHV0c1xuICAgIGlmICh0aGlzLmlucHV0RGltICE9IG51bGwpIHtcbiAgICAgIGlucHV0cyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5pbnB1dERpbSlcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRzID0gW11cbiAgICB9XG4gICAgbGV0IGkgPSAwXG4gICAgLy8gZWxldmF0aW9uXG4gICAgY29uc3Qgd2hlZWxQb3MgPSB0aGlzLndoZWVsQm9keS5HZXRQb3NpdGlvbigpLFxuICAgICAgd2hlZWxYID0gd2hlZWxQb3MuZ2V0X3goKSxcbiAgICAgIHdoZWVsWSA9IHdoZWVsUG9zLmdldF95KClcbiAgICAvLyAgIGludGVycFkgPSBpbnRlcnBUZXJyYWluWSh3aGVlbFgsIHRoaXMucG9wdWxhdGlvbi50ZXJyYWluUHRzKVxuICAgIC8vIHRoaXMueUNsZWFyYW5jZSA9IGludGVycFkgLSB3aGVlbFkgLSB0aGlzLndoZWVsUlxuICAgIC8vIGlucHV0c1tpXSA9IHRoaXMueUNsZWFyYW5jZVxuICAgIC8vIGkrK1xuICAgIHRoaXMubGlkYXJZcyA9IFtdXG4gICAgZm9yIChsZXQgeE9mZiBvZiBnbG9iYWxzLnhPZmZzKSB7XG4gICAgICBjb25zdCBsaWRhclkgPVxuICAgICAgICBpbnRlcnBUZXJyYWluWShcbiAgICAgICAgICB3aGVlbFggKyB0aGlzLnJldmVyc2UgKiB4T2ZmLFxuICAgICAgICAgIHRoaXMucG9wdWxhdGlvbi50ZXJyYWluUHRzXG4gICAgICAgICkgLVxuICAgICAgICB3aGVlbFkgLVxuICAgICAgICB0aGlzLndoZWVsUlxuICAgICAgdGhpcy5saWRhcllzLnB1c2gobGlkYXJZKVxuICAgICAgaW5wdXRzW2ldID0gbGlkYXJZXG4gICAgICBpKytcbiAgICB9XG5cbiAgICAvLyBjaGFzc2lzU2luXG4gICAgY29uc3QgY2hhc3Npc1NpbiA9IE1hdGguc2luKHRoaXMuY2hhc3Npc0JvZHkuR2V0QW5nbGUoKSlcbiAgICBpbnB1dHNbaV0gPSB0aGlzLnJldmVyc2UgKiBjaGFzc2lzU2luXG4gICAgaSsrXG4gICAgaWYgKE1hdGguYWJzKGNoYXNzaXNTaW4pID4gZ2xvYmFscy5jcmFzaFNpbkxpbWl0KSB7XG4gICAgICB0aGlzLmNyYXNoU3RlcENvdW50KytcbiAgICB9XG4gICAgLy8gY2hhc3Npc1ZlbFgsIGNoYXNzaXNWZWxZXG4gICAgY29uc3QgY2hhc3Npc1ZlbCA9IHRoaXMuY2hhc3Npc0JvZHkuR2V0TGluZWFyVmVsb2NpdHkoKSxcbiAgICAgIGNoYXNzaXNWZWxYID0gY2hhc3Npc1ZlbC5nZXRfeCgpXG4gICAgdGhpcy5jaGFzc2lzQWNjWCA9IGNoYXNzaXNWZWxYIC0gdGhpcy5wcmV2Q2hhc3Npc1ZlbFhcbiAgICB0aGlzLnByZXZDaGFzc2lzVmVsWCA9IGNoYXNzaXNWZWxYXG4gICAgLy8gaW5wdXRzW2ldID0gdGhpcy5yZXZlcnNlICogY2hhc3Npc1ZlbC5nZXRfeCgpXG4gICAgLy8gaSsrXG4gICAgLy8gaW5wdXRzW2ldID0gY2hhc3Npc1ZlbC5nZXRfeSgpXG4gICAgLy8gaSsrXG4gICAgLy8gY2hhc3Npc0FuZ1ZlbFxuICAgIGlmICh0YXJnZXQgPT0gMCkge1xuICAgICAgdGhpcy5kcmlmdFhTcVN1bSArPSB0aGlzLmNoYXNzaXNBY2NYICogdGhpcy5jaGFzc2lzQWNjWFxuICAgIH1cbiAgICBjb25zdCBjaGFzc2lzQW5nVmVsID0gdGhpcy5jaGFzc2lzQm9keS5HZXRBbmd1bGFyVmVsb2NpdHkoKVxuICAgIGlucHV0c1tpXSA9IHRoaXMucmV2ZXJzZSAqIGNoYXNzaXNBbmdWZWxcbiAgICBpKytcbiAgICAvLyB3aGVlbFZlbFgsIHdoZWVsVmVsWVxuICAgIGNvbnN0IHdoZWVsVmVsID0gdGhpcy53aGVlbEJvZHkuR2V0TGluZWFyVmVsb2NpdHkoKSxcbiAgICAgIHdoZWVsVmVsWCA9IHdoZWVsVmVsLmdldF94KClcbiAgICB0aGlzLndoZWVsQWNjWCA9IHdoZWVsVmVsWCAtIHRoaXMucHJldldoZWVsVmVsWFxuICAgIHRoaXMucHJldldoZWVsVmVsWCA9IHdoZWVsVmVsWFxuICAgIGlucHV0c1tpXSA9IHRoaXMucmV2ZXJzZSAqIHdoZWVsVmVsWFxuICAgIGkrK1xuICAgIGlucHV0c1tpXSA9IHdoZWVsVmVsLmdldF95KClcbiAgICBpKytcbiAgICAvLyB3aGVlbEFuZ1ZlbFxuICAgIGNvbnN0IHdoZWVsQW5nVmVsID0gdGhpcy53aGVlbEJvZHkuR2V0QW5ndWxhclZlbG9jaXR5KClcbiAgICBpbnB1dHNbaV0gPSB0aGlzLnJldmVyc2UgKiB3aGVlbEFuZ1ZlbFxuICAgIGkrK1xuICAgIGNvbnN0IGF4bGVSeG4gPSB0aGlzLmF4bGUuR2V0UmVhY3Rpb25Gb3JjZSg2MClcbiAgICBpbnB1dHNbaV0gPSAxZS0yICogdGhpcy5yZXZlcnNlICogYXhsZVJ4bi5nZXRfeCgpXG4gICAgaSsrXG4gICAgaW5wdXRzW2ldID0gMWUtMiAqIGF4bGVSeG4uZ2V0X3koKVxuICAgIGkrK1xuICAgIC8vIHRhcmdldFxuICAgIGlucHV0c1tpXSA9IHRoaXMucmV2ZXJzZSAqIHRhcmdldFxuICAgIGkrK1xuXG4gICAgaWYgKHRoaXMudGFyZ2V0UHJldiAhPT0gbnVsbCkge1xuICAgICAgaWYgKGdsb2JhbHMudGFyZ2V0VHlwZSA9PT0gXCJzaW5cIikge1xuICAgICAgICB0aGlzLnVwZGF0ZVRhcmdldFNjb3JlKHRoaXMudGFyZ2V0UHJldiwgY2hhc3Npc1NpbilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXBkYXRlVGFyZ2V0U2NvcmUodGhpcy50YXJnZXRQcmV2LCB3aGVlbFZlbFgpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudGFyZ2V0UHJldiA9IHRhcmdldFxuXG4gICAgcmV0dXJuIGlucHV0c1xuICB9XG5cbiAgdXBkYXRlKHRhcmdldCkge1xuICAgIGNvbnN0IGlucHV0c0FycmF5ID0gdGhpcy5nZXRJbnB1dHModGFyZ2V0KVxuICAgIGNvbnN0IGlucHV0c01hdHJpeCA9IG5ldyBNYXRyaXgoaW5wdXRzQXJyYXksIDEsIGlucHV0c0FycmF5Lmxlbmd0aClcbiAgICBjb25zdCBvdXRwdXRSYXcgPSBpbnB1dHNNYXRyaXhcbiAgICAgIC8vIGNvbnN0IHNwZWVkcyA9IGlucHV0c1xuICAgICAgLm11bCh0aGlzLndlaWdodHNbMF0pXG4gICAgICAuYWRkKHRoaXMuYmlhc2VzWzBdKVxuICAgICAgLy8gLnJlbHUoKVxuICAgICAgLy8gLmxlYWt5UmVsdSgpXG4gICAgICAubGVha3lFbHUoKVxuICAgICAgLm11bCh0aGlzLndlaWdodHNbMV0pXG4gICAgICAuYWRkKHRoaXMuYmlhc2VzWzFdKVxuICAgICAgLy8gLnJlbHUoKVxuICAgICAgLy8gLmxlYWt5UmVsdSgpXG4gICAgICAubGVha3lFbHUoKVxuICAgICAgLm11bCh0aGlzLndlaWdodHNbMl0pXG4gICAgICAuYWRkKHRoaXMuYmlhc2VzWzJdKS5kYXRhWzBdXG5cbiAgICAvLyBjb25zdCByZXZlcnNlID0gdGFyZ2V0ICE9IDAgPyBNYXRoLnNpZ24odGFyZ2V0KSA6IDEsXG4gICAgY29uc3Qgb3V0cHV0ID0gdGhpcy5yZXZlcnNlICogb3V0cHV0UmF3XG4gICAgdGhpcy5zZXRTcGVlZChvdXRwdXQpXG5cbiAgICBjb25zdCBvdXRwdXREaWZmID0gb3V0cHV0IC0gdGhpcy5wcmV2T3V0cHV0XG4gICAgdGhpcy5vdXRwdXREaWZmU3FTdW0gKz0gb3V0cHV0RGlmZiAqIG91dHB1dERpZmZcbiAgICB0aGlzLnByZXZPdXRwdXQgPSBvdXRwdXRcbiAgfVxuXG4gIGdldCBkcmF3UG9zaXRpb25EYXRhKCkge1xuICAgIC8vIHJldHVybiB7XG4gICAgLy8gICB3aGVlbFBvc0N1cnJlbnQ6IHRoaXMud2hlZWxCb2R5LkdldFBvc2l0aW9uKCksXG4gICAgLy8gICB3aGVlbEFuZ2xlQ3VycmVudDogdGhpcy53aGVlbEJvZHkuR2V0QW5nbGUoKSxcbiAgICAvLyAgIGNoYXNzaXNQb3NDdXJyZW50OiB0aGlzLmNoYXNzaXNCb2R5LkdldFBvc2l0aW9uKCksXG4gICAgLy8gICBjaGFzc2lzQW5nbGVDdXJyZW50OiB0aGlzLmNoYXNzaXNCb2R5LkdldEFuZ2xlKCksXG4gICAgLy8gfVxuICAgIGNvbnN0IHdoZWVsUG9zID0gdGhpcy53aGVlbEJvZHkuR2V0UG9zaXRpb24oKSxcbiAgICAgIGNoYXNzaXNQb3MgPSB0aGlzLmNoYXNzaXNCb2R5LkdldFBvc2l0aW9uKClcbiAgICByZXR1cm4ge1xuICAgICAgd2hlZWxQb3NDdXJyZW50OiBbd2hlZWxQb3MuZ2V0X3goKSwgd2hlZWxQb3MuZ2V0X3koKV0sXG4gICAgICB3aGVlbEFuZ2xlQ3VycmVudDogdGhpcy53aGVlbEJvZHkuR2V0QW5nbGUoKSxcbiAgICAgIGNoYXNzaXNQb3NDdXJyZW50OiBbY2hhc3Npc1Bvcy5nZXRfeCgpLCBjaGFzc2lzUG9zLmdldF95KCldLFxuICAgICAgY2hhc3Npc0FuZ2xlQ3VycmVudDogdGhpcy5jaGFzc2lzQm9keS5HZXRBbmdsZSgpLFxuICAgIH1cbiAgfVxuXG4gIGdldCBjb3JyRGF0YSgpIHtcbiAgICByZXR1cm4gW1xuICAgICAgTWF0aC5zaW4odGhpcy5jaGFzc2lzQm9keS5HZXRBbmdsZSgpKSxcbiAgICAgIHRoaXMud2hlZWxBY2NYLFxuICAgICAgdGhpcy5jaGFzc2lzQWNjWCxcbiAgICBdXG4gIH1cblxuICAvLyBzbGVlcCgpIHtcbiAgLy8gICBmb3IgKGxldCBib2R5IG9mIFtcbiAgLy8gICAgIHRoaXMuY2hhc3Npc0JvZHksXG4gIC8vICAgICB0aGlzLnVwcGVyRm9yZWxlZ0JvZHksXG4gIC8vICAgICB0aGlzLmxvd2VyRm9yZWxlZ0JvZHksXG4gIC8vICAgICB0aGlzLnVwcGVySGluZGxlZ0JvZHksXG4gIC8vICAgICB0aGlzLmxvd2VySGluZGxlZ0JvZHksXG4gIC8vICAgXSkge1xuICAvLyAgICAgYm9keS5TZXRBd2FrZSgwKVxuICAvLyAgICAgLy8gYm9keS5TZXRFbmFibGVkKDApXG4gIC8vICAgfVxuICAvLyB9XG59XG5cbmNsYXNzIE1hdHJpeCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIG0sIG4pIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgdGhpcy5tID0gbVxuICAgIHRoaXMubiA9IG5cbiAgfVxuXG4gIG11bChvdGhlcikge1xuICAgIGNvbnN0IGEgPSB0aGlzLmRhdGEsXG4gICAgICBiID0gb3RoZXIuZGF0YSxcbiAgICAgIG0gPSB0aGlzLm0sXG4gICAgICBuID0gdGhpcy5uLFxuICAgICAgcCA9IG90aGVyLm4sXG4gICAgICBjID0gbmV3IEZsb2F0MzJBcnJheShuZXcgQXJyYXlCdWZmZXIoNCAqIG0gKiBwKSlcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHA7IGorKykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgbGV0IHN1bSA9IDBcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICBzdW0gKz0gYVtpICogbiArIGtdICogYltrICogcCArIGpdXG4gICAgICAgIH1cbiAgICAgICAgY1tpICogcCArIGpdID0gc3VtXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgTWF0cml4KGMsIG0sIHApXG4gIH1cblxuICBhZGQob3RoZXIpIHtcbiAgICBjb25zdCBhID0gdGhpcy5kYXRhLFxuICAgICAgYiA9IG90aGVyLmRhdGEsXG4gICAgICBsID0gYS5sZW5ndGgsXG4gICAgICBjID0gbmV3IEZsb2F0MzJBcnJheShuZXcgQXJyYXlCdWZmZXIoNCAqIGwpKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjW2ldID0gYVtpXSArIGJbaV1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBNYXRyaXgoYywgdGhpcy5tLCB0aGlzLm4pXG4gIH1cblxuICByZWx1KCkge1xuICAgIGNvbnN0IG4gPSB0aGlzLmRhdGEubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gdGhpcy5kYXRhLnNsaWNlKClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgcmVzdWx0W2ldID0gTWF0aC5tYXgoMCwgcmVzdWx0W2ldKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IE1hdHJpeChyZXN1bHQsIHRoaXMubSwgdGhpcy5uKVxuICB9XG5cbiAgbGVha3lSZWx1KCkge1xuICAgIGNvbnN0IG4gPSB0aGlzLmRhdGEubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gdGhpcy5kYXRhLnNsaWNlKClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgcmVzdWx0W2ldID0gTWF0aC5tYXgoMC4xICogcmVzdWx0W2ldLCByZXN1bHRbaV0pXG4gICAgfVxuICAgIHJldHVybiBuZXcgTWF0cml4KHJlc3VsdCwgdGhpcy5tLCB0aGlzLm4pXG4gIH1cblxuICBlbHUoKSB7XG4gICAgY29uc3QgbiA9IHRoaXMuZGF0YS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSB0aGlzLmRhdGEuc2xpY2UoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBpZiAocmVzdWx0W2ldIDwgMCkge1xuICAgICAgICByZXN1bHRbaV0gPSBNYXRoLmV4cG0xKHJlc3VsdFtpXSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBNYXRyaXgocmVzdWx0LCB0aGlzLm0sIHRoaXMubilcbiAgfVxuXG4gIGxlYWt5RWx1KCkge1xuICAgIGNvbnN0IG4gPSB0aGlzLmRhdGEubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gdGhpcy5kYXRhLnNsaWNlKClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgaWYgKHJlc3VsdFtpXSA8IDApIHtcbiAgICAgICAgcmVzdWx0W2ldID0gTWF0aC5leHBtMShyZXN1bHRbaV0pICsgMC4xICogcmVzdWx0W2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgTWF0cml4KHJlc3VsdCwgdGhpcy5tLCB0aGlzLm4pXG4gIH1cbn1cblxuZnVuY3Rpb24gdmVjdG9yTm9ybXModmVjdG9ycykge1xuICBjb25zdCByZXN1bHQgPSBuZXcgRmxvYXQzMkFycmF5KHZlY3RvcnMubGVuZ3RoKS5maWxsKDApXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHZlY3RvciA9IHZlY3RvcnNbaV0uZGF0YVxuICAgIGZvciAobGV0IHggb2YgdmVjdG9yKSB7XG4gICAgICByZXN1bHRbaV0gKz0geCAqIHhcbiAgICB9XG4gICAgLy8gcmVzdWx0W2ldID0gTWF0aC5zcXJ0KHJlc3VsdFtpXSlcbiAgICByZXN1bHRbaV0gLz0gdmVjdG9yLmxlbmd0aFxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gcm93Tm9ybVRoaW5neShtYXQpIHtcbiAgLy8gbTogcm93IGNvdW50LCBuOiBjb2x1bW4gY291bnRcbiAgY29uc3Qgcm93Q291bnQgPSBtYXQubSxcbiAgICBjb2xDb3VudCA9IG1hdC5uXG4gIGxldCBzdW1BbGwgPSAwXG4gIGNvbnN0IHJvd1N1bXMgPSBuZXcgRmxvYXQzMkFycmF5KHJvd0NvdW50KS5maWxsKDApLFxuICAgIGNvbFN1bXMgPSBuZXcgRmxvYXQzMkFycmF5KGNvbENvdW50KS5maWxsKDApXG4gIC8vIHJvdyBpZHhcbiAgZm9yIChsZXQgcm93SWR4ID0gMDsgcm93SWR4IDwgcm93Q291bnQ7IHJvd0lkeCsrKSB7XG4gICAgLy8gY29sIGlkeFxuICAgIGZvciAobGV0IGNvbElkeCA9IDA7IGNvbElkeCA8IGNvbENvdW50OyBjb2xJZHgrKykge1xuICAgICAgY29uc3QgdmFsID0gbWF0LmRhdGFbcm93SWR4ICogY29sQ291bnQgKyBjb2xJZHhdLFxuICAgICAgICB2YWxTcSA9IHZhbCAqIHZhbFxuICAgICAgLy8gcm93U3Vtc1tyb3dJZHhdICs9IE1hdGguYWJzKHZhbClcbiAgICAgIHJvd1N1bXNbcm93SWR4XSArPSB2YWxTcVxuICAgICAgLy8gY29sU3Vtc1tjb2xJZHhdICs9IE1hdGguYWJzKHZhbClcbiAgICAgIGNvbFN1bXNbY29sSWR4XSArPSB2YWxTcVxuICAgICAgc3VtQWxsICs9IHZhbFNxXG4gICAgfVxuICB9XG4gIHN1bUFsbCAvPSByb3dDb3VudCAqIGNvbENvdW50XG4gIGxldCBzdW1Sb3dzID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0NvdW50OyBpKyspIHtcbiAgICBjb25zdCB2YWwgPSByb3dTdW1zW2ldIC8gY29sQ291bnRcbiAgICBzdW1Sb3dzICs9IHZhbCAqIHZhbFxuICB9XG4gIHN1bVJvd3MgLz0gcm93Q291bnRcbiAgbGV0IHN1bUNvbHMgPSAwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29sQ291bnQ7IGkrKykge1xuICAgIGNvbnN0IHZhbCA9IGNvbFN1bXNbaV0gLyByb3dDb3VudFxuICAgIHN1bUNvbHMgKz0gdmFsICogdmFsXG4gIH1cbiAgc3VtQ29scyAvPSBjb2xDb3VudFxuXG4gIC8vIHJldHVybiBzdW1BbGwgKyAwLjEgKiBzdW1Sb3dzICsgMS4wICogc3VtQ29sc1xuICByZXR1cm4gc3VtQWxsXG59XG5cbmV4cG9ydCBjbGFzcyBQb3B1bGF0aW9uIHtcbiAgY29uc3RydWN0b3Iod2hlZWxQb3NJbml0LCBuVGlwcHlzLCB0ZXJyYWluUHRzLCBiMikge1xuICAgIHRoaXMud2hlZWxQb3NJbml0ID0gd2hlZWxQb3NJbml0LnNsaWNlKClcblxuICAgIHtcbiAgICAgIGNvbnN0IGdyYXZpdHkgPSBuZXcgYjIuYjJWZWMyKDAsIDkuODEpXG4gICAgICB0aGlzLndvcmxkID0gbmV3IGIyLmIyV29ybGQoZ3Jhdml0eSlcbiAgICB9XG5cbiAgICB0aGlzLmIyID0gYjJcbiAgICB0aGlzLnRlcnJhaW5QdHMgPSB0ZXJyYWluUHRzXG5cbiAgICAvLyBhZGQgZ3JvdW5kXG4gICAge1xuICAgICAgY29uc3QgZ3JvdW5kQm9keSA9IHRoaXMud29ybGQuQ3JlYXRlQm9keShuZXcgYjIuYjJCb2R5RGVmKCkpXG5cbiAgICAgIGNvbnN0IHRlcnJhaW5QdHNGaWx0ZXJlZCA9IFtdXG4gICAgICBsZXQgeURpZmZQcmV2XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdsb2JhbHMublRlcnJhaW5QdHM7IGkrKykge1xuICAgICAgICBjb25zdCB5RGlmZkN1cnIgPSB0ZXJyYWluUHRzW2kgKyAxXSAtIHRlcnJhaW5QdHNbaV0sXG4gICAgICAgICAgc2FtZVNsb3BlID0geURpZmZDdXJyID09IHlEaWZmUHJldlxuICAgICAgICB5RGlmZlByZXYgPSB5RGlmZkN1cnJcbiAgICAgICAgaWYgKHNhbWVTbG9wZSAmJiBpICE9IGdsb2JhbHMublRlcnJhaW5QdHMgLSAxKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICB0ZXJyYWluUHRzRmlsdGVyZWQucHVzaChbdGVycmFpbklkeFRvWFBvcyhpKSwgdGVycmFpblB0c1tpXV0pXG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyh0ZXJyYWluUHRzRmlsdGVyZWQubGVuZ3RoLCBnbG9iYWxzLm5UZXJyYWluUHRzKVxuICAgICAgLy8gcmV2ZXJzZWQgbG9vcCBmb3IgQ0NXIHdpbmRpbmcgb3JkZXIgKEJveDJEKVxuICAgICAgZm9yIChsZXQgaSA9IHRlcnJhaW5QdHNGaWx0ZXJlZC5sZW5ndGggLSAxOyBpID49IDE7IGktLSkge1xuICAgICAgICBjb25zdCBlZGdlU2hhcGUgPSBuZXcgYjIuYjJFZGdlU2hhcGUoKVxuICAgICAgICBlZGdlU2hhcGUuU2V0VHdvU2lkZWQoXG4gICAgICAgICAgbmV3IGIyLmIyVmVjMih0ZXJyYWluUHRzRmlsdGVyZWRbaV1bMF0sIHRlcnJhaW5QdHNGaWx0ZXJlZFtpXVsxXSksXG4gICAgICAgICAgbmV3IGIyLmIyVmVjMihcbiAgICAgICAgICAgIHRlcnJhaW5QdHNGaWx0ZXJlZFtpIC0gMV1bMF0sXG4gICAgICAgICAgICB0ZXJyYWluUHRzRmlsdGVyZWRbaSAtIDFdWzFdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIGNvbnN0IGdyb3VuZEZEID0gbmV3IGIyLmIyRml4dHVyZURlZigpXG4gICAgICAgIGdyb3VuZEZELnNldF9zaGFwZShlZGdlU2hhcGUpXG4gICAgICAgIGdyb3VuZEZELnNldF9mcmljdGlvbigwLjkpXG4gICAgICAgIGdyb3VuZEZELnNldF9yZXN0aXR1dGlvbigwLjEpXG4gICAgICAgIGNvbnN0IGdyb3VuZEZpeHR1cmUgPSBiMi5jYXN0T2JqZWN0KFxuICAgICAgICAgIGdyb3VuZEJvZHkuQ3JlYXRlRml4dHVyZShncm91bmRGRCksXG4gICAgICAgICAgYjIuYjJGaXh0dXJlXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIC8vIGFkZCB3YWxsc1xuICAgICAgZm9yIChjb25zdCBpZHggb2YgWzAsIGdsb2JhbHMublRlcnJhaW5QdHMgLSAxXSkge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBbdGVycmFpbklkeFRvWFBvcyhpZHgpLCB0ZXJyYWluUHRzW2lkeF1dXG4gICAgICAgIGNvbnN0IGVkZ2VTaGFwZSA9IG5ldyBiMi5iMkVkZ2VTaGFwZSgpXG4gICAgICAgIGVkZ2VTaGFwZS5TZXRUd29TaWRlZChcbiAgICAgICAgICBuZXcgYjIuYjJWZWMyKHgsIHkpLFxuICAgICAgICAgIG5ldyBiMi5iMlZlYzIoeCwgeSAtIGdsb2JhbHMud2FsbEgpXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgZ3JvdW5kRkQgPSBuZXcgYjIuYjJGaXh0dXJlRGVmKClcbiAgICAgICAgZ3JvdW5kRkQuc2V0X3NoYXBlKGVkZ2VTaGFwZSlcbiAgICAgICAgZ3JvdW5kRkQuc2V0X2ZyaWN0aW9uKDAuOSlcbiAgICAgICAgZ3JvdW5kRkQuc2V0X3Jlc3RpdHV0aW9uKDAuMSlcbiAgICAgICAgY29uc3QgZ3JvdW5kRml4dHVyZSA9IGIyLmNhc3RPYmplY3QoXG4gICAgICAgICAgZ3JvdW5kQm9keS5DcmVhdGVGaXh0dXJlKGdyb3VuZEZEKSxcbiAgICAgICAgICBiMi5iMkZpeHR1cmVcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRpcHB5cyA9IFtdXG4gICAgdGhpcy5hZGRUaXBweXMoblRpcHB5cylcbiAgICB0aGlzLm5fZGltID0gdGhpcy50aXBweXNbMF0ubl9kaW1cbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGZvciAobGV0IHRpcHB5IG9mIHRoaXMudGlwcHlzKSB7XG4gICAgICB0aXBweS5yZXNldCh0aGlzLmIyKVxuICAgIH1cbiAgfVxuXG4gIGFkZFRpcHB5cyhuVGlwcHlzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuVGlwcHlzOyBpKyspIHtcbiAgICAgIHRoaXMudGlwcHlzLnB1c2gobmV3IFRpcHB5KHRoaXMud2hlZWxQb3NJbml0LCB0aGlzLndvcmxkLCB0aGlzLmIyLCB0aGlzKSlcbiAgICB9XG4gIH1cblxuICBzZXRXdHMoZmxhdFd0cykge1xuICAgIGxldCBmbGF0V3RzSWR4ID0gMFxuICAgIGZvciAobGV0IHRpcHB5IG9mIHRoaXMudGlwcHlzKSB7XG4gICAgICB0aXBweS5zZXRXdHMoZmxhdFd0cy5zbGljZShmbGF0V3RzSWR4LCBmbGF0V3RzSWR4ICsgdGhpcy5uX2RpbSkpXG4gICAgICBmbGF0V3RzSWR4ICs9IHRoaXMubl9kaW1cbiAgICB9XG4gIH1cblxuICB0cmFpbih7IHRhcmdldHMsIHNvbHV0aW9ucyB9KSB7XG4gICAgLy8gYXNzaWduIHNvbHV0aW9uIGFuZCB0YXJnZXQgdG8gZWFjaCB0aXBweVxuICAgIGNvbnN0IG5Tb2x1dGlvbnMgPSBzb2x1dGlvbnMubGVuZ3RoIC8gdGhpcy5uX2RpbVxuICAgIGlmICh0aGlzLnRpcHB5cy5sZW5ndGggPCBuU29sdXRpb25zICogdGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuYWRkVGlwcHlzKG5Tb2x1dGlvbnMgKiB0YXJnZXRzLmxlbmd0aCAtIHRoaXMudGlwcHlzLmxlbmd0aClcbiAgICB9XG4gICAgbGV0IGZsYXRXdHNJZHggPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuU29sdXRpb25zOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGFyZ2V0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCB0aXBweSA9IHRoaXMudGlwcHlzW2kgKiB0YXJnZXRzLmxlbmd0aCArIGpdXG4gICAgICAgIHRpcHB5LnNldFd0cyhzb2x1dGlvbnMuc2xpY2UoZmxhdFd0c0lkeCwgZmxhdFd0c0lkeCArIHRoaXMubl9kaW0pKVxuICAgICAgICB0aXBweS50YXJnZXRJZHggPSBqXG4gICAgICB9XG4gICAgICBmbGF0V3RzSWR4ICs9IHRoaXMubl9kaW1cbiAgICB9XG4gICAgLy8gc2ltdWxhdGUgdXNpbmcgb25lIHRhcmdldCBwZXIgc29sdXRpb25cbiAgICB0aGlzLnJlc2V0KClcbiAgICBmb3IgKGxldCBzdGVwID0gMDsgc3RlcCA8IHRhcmdldHNbMF0ubGVuZ3RoOyBzdGVwKyspIHtcbiAgICAgIGZvciAobGV0IHRpcHB5IG9mIHRoaXMudGlwcHlzKSB7XG4gICAgICAgIHRpcHB5LnVwZGF0ZSh0YXJnZXRzW3RpcHB5LnRhcmdldElkeF1bc3RlcF0pXG4gICAgICB9XG4gICAgICB0aGlzLndvcmxkLlN0ZXAoZ2xvYmFscy50cywgOCwgMylcbiAgICB9XG4gICAgLy8gc2NvcmUgc29sdXRpb25zIGFmdGVyIHNpbXVsYXRpb25cbiAgICBjb25zdCBzb2x1dGlvbnNTY29yZXMgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgblNvbHV0aW9uczsgaSsrKSB7XG4gICAgICBjb25zdCB0aXBweTAgPSB0aGlzLnRpcHB5c1tpICogdGFyZ2V0cy5sZW5ndGhdLFxuICAgICAgICBzb2x1dGlvbiA9IHRpcHB5MC5mbGF0V3RzXG4gICAgICBsZXQgd3RzTm9ybSA9IDBcbiAgICAgIGZvciAobGV0IHd0TGF5ZXIgb2YgdGlwcHkwLndlaWdodHMpIHtcbiAgICAgICAgZm9yIChsZXQgd3Qgb2Ygd3RMYXllci5kYXRhKSB7XG4gICAgICAgICAgd3RzTm9ybSArPSB3dCAqIHd0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHd0c05vcm0gLz0gdGlwcHkwLndlaWdodENvdW50XG4gICAgICBsZXQgYmlhc05vcm0gPSAwXG4gICAgICBmb3IgKGxldCBiaWFzTGF5ZXIgb2YgdGlwcHkwLmJpYXNlcykge1xuICAgICAgICBmb3IgKGxldCBiaWFzIG9mIGJpYXNMYXllci5kYXRhKSB7XG4gICAgICAgICAgYmlhc05vcm0gKz0gYmlhcyAqIGJpYXNcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYmlhc05vcm0gLz0gdGlwcHkwLmJpYXNDb3VudFxuICAgICAgY29uc3QgdGFza1Njb3JlcyA9IFtdXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRhcmdldHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgdGFza1RpcHB5ID0gdGhpcy50aXBweXNbaSAqIHRhcmdldHMubGVuZ3RoICsgal0sXG4gICAgICAgICAgbXNlID0gdGFza1RpcHB5LnRhcmdldFNxRXJyU3VtIC8gZ2xvYmFscy5lcExlbixcbiAgICAgICAgICBjcmFzaGVkUmF0aW8gPSB0YXNrVGlwcHkuY3Jhc2hTdGVwQ291bnQgLyBnbG9iYWxzLmVwTGVuLFxuICAgICAgICAgIGRyaWZ0WCA9IHRhc2tUaXBweS5kcmlmdFhTcVN1bSAvIGdsb2JhbHMuZXBMZW5cbiAgICAgICAgdGFza1Njb3Jlcy5wdXNoKHsgbXNlLCBjcmFzaGVkUmF0aW8sIGRyaWZ0WCB9KVxuICAgICAgfVxuICAgICAgLy8gc29sdXRpb25zU2NvcmVzLnB1c2goeyBzb2x1dGlvbiwgc2NvcmUgfSlcbiAgICAgIHNvbHV0aW9uc1Njb3Jlcy5wdXNoKHsgc29sdXRpb24sIHd0c05vcm0sIGJpYXNOb3JtLCB0YXNrU2NvcmVzIH0pXG4gICAgfVxuICAgIHJldHVybiBzb2x1dGlvbnNTY29yZXNcbiAgfVxuXG4gIHVwZGF0ZSh0YXJnZXRzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRpcHB5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGlwcHkgPSB0aGlzLnRpcHB5c1tpXVxuICAgICAgdGlwcHkudXBkYXRlKHRhcmdldHNbaV0pXG4gICAgfVxuICAgIHRoaXMud29ybGQuU3RlcChnbG9iYWxzLnRzLCA4LCAzKVxuICB9XG5cbiAgZHJhdyhzY2FsZSwgY2VudGVyKSB7XG4gICAgZm9yIChsZXQgdGlwcHkgb2YgdGhpcy50aXBweXMpIHtcbiAgICAgIHRpcHB5LmRyYXcoc2NhbGUsIGNlbnRlcilcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURpcmVjdGlvbihsZCwgcmQsIF90YXJnZXRTaW4sIF90YXJnZXRWZWwpIHtcbiAgLy8gbm8gY2hhbmdlIGlmIGJvdGgga2V5cyBkb3duXG4gIGxldCB0YXJnZXRTaW4gPSBfdGFyZ2V0U2luLFxuICAgIHRhcmdldFZlbCA9IF90YXJnZXRWZWxcbiAgaWYgKGxkICYmIHJkKSB7XG4gICAgcmV0dXJuIFt0YXJnZXRTaW4sIHRhcmdldFZlbF1cbiAgfVxuICAvLyBkZWNheSBzaW4gdG93YXJkIHplcm9cbiAgaWYgKHRhcmdldFNpbiAhPSAwKSB7XG4gICAgaWYgKE1hdGguYWJzKHRhcmdldFNpbikgPCBnbG9iYWxzLnNpbkRlY2F5KSB7XG4gICAgICB0YXJnZXRTaW4gPSAwXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldFNpbiAtPSBNYXRoLnNpZ24odGFyZ2V0U2luKSAqIGdsb2JhbHMuc2luRGVjYXlcbiAgICB9XG4gIH1cbiAgLy8gY2hhbmdlIGlmIG9ubHkgb25lIGtleVxuICAvLyBhbmQgbGltaXQgb3V0cHV0XG4gIGlmIChsZCkge1xuICAgIHRhcmdldFNpbiAtPSBnbG9iYWxzLnNpblN0ZXBcbiAgICBpZiAodGFyZ2V0U2luIDwgLWdsb2JhbHMuc2luTGltKSB7XG4gICAgICB0YXJnZXRTaW4gPSAtZ2xvYmFscy5zaW5MaW1cbiAgICB9XG4gIH0gZWxzZSBpZiAocmQpIHtcbiAgICB0YXJnZXRTaW4gKz0gZ2xvYmFscy5zaW5TdGVwXG4gICAgaWYgKHRhcmdldFNpbiA+IGdsb2JhbHMuc2luTGltKSB7XG4gICAgICB0YXJnZXRTaW4gPSBnbG9iYWxzLnNpbkxpbVxuICAgIH1cbiAgfVxuICAvLyBkZWNheSB2ZWwgdG93YXJkIHplcm9cbiAgaWYgKHRhcmdldFZlbCAhPSAwKSB7XG4gICAgaWYgKE1hdGguYWJzKHRhcmdldFZlbCkgPCBnbG9iYWxzLnZlbERlY2F5KSB7XG4gICAgICB0YXJnZXRWZWwgPSAwXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldFZlbCAtPSBNYXRoLnNpZ24odGFyZ2V0VmVsKSAqIGdsb2JhbHMudmVsRGVjYXlcbiAgICB9XG4gIH1cblxuICB0YXJnZXRWZWwgKz0gMC4xMDIgKiB0YXJnZXRTaW5cbiAgaWYgKHRhcmdldFZlbCA+IGdsb2JhbHMudmVsTGltKSB7XG4gICAgdGFyZ2V0VmVsID0gZ2xvYmFscy52ZWxMaW1cbiAgfSBlbHNlIGlmICh0YXJnZXRWZWwgPCAtZ2xvYmFscy52ZWxMaW0pIHtcbiAgICB0YXJnZXRWZWwgPSAtZ2xvYmFscy52ZWxMaW1cbiAgfVxuICAvLyAvLyB1cGRhdGUgdGVzdCB0cmlnb25vbWV0cnlcbiAgLy8gaWYgKHRhcmdldFNpbiAhPSB0YXJnZXREaXJlY3Rpb25CZWZvcmUpIHtcbiAgLy8gICB0YXJnZXRBbmdsZSA9IE1hdGguYXNpbih0YXJnZXRTaW4pXG4gIC8vICAgdGFyZ2V0Q29zID0gTWF0aC5jb3ModGFyZ2V0QW5nbGUpXG4gIC8vIH1cbiAgcmV0dXJuIFt0YXJnZXRTaW4sIHRhcmdldFZlbF1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGVycmFpblB0cygpIHtcbiAgZnVuY3Rpb24gdGVycmFpbkxST2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBzbG9wZURpZmY6IDAsXG4gICAgICBzbG9wZTogMCxcbiAgICAgIHk6IDAsXG4gICAgICB4OiBnbG9iYWxzLmdyb3VuZERldGFpbEludGVydmFsLFxuICAgICAgeElkeDogMSxcbiAgICAgIC8vIHJhbmRWYWxzOiByYW5kX25vcm1hbChnbG9iYWxzLmdyb3VuZEhhbGZXaWR0aCAvIGdsb2JhbHMuZ3JvdW5kRGV0YWlsSW50ZXJ2YWwgLSAxKSxcbiAgICAgIC8vIGlkeDogMCxcbiAgICAgIHlzOiBbXSxcbiAgICAgIHVwZGF0ZVNsb3BlKCkge1xuICAgICAgICBpZiAodGhpcy54IDw9IGdsb2JhbHMuZ3JvdW5kRmxhdENlbnRlckhhbGZXaWR0aCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuc2xvcGVEaWZmICs9IGdsb2JhbHMuc2xvcGVEaWZmTWFnICogdGhpcy5yYW5kVmFsc1t0aGlzLmlkeF1cbiAgICAgICAgdGhpcy5zbG9wZURpZmYgKz0gZ2xvYmFscy5zbG9wZURpZmZNYWcgKiByYW5kX25vcm1hbCgxKVswXVxuICAgICAgICAvLyB0aGlzLmlkeCsrXG4gICAgICAgIHRoaXMuc2xvcGVEaWZmICo9IGdsb2JhbHMuc2xvcGVEaWZmRGVjYXlcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuc2xvcGVEaWZmKSA+IGdsb2JhbHMuc2xvcGVEaWZmTGltKSB7XG4gICAgICAgICAgdGhpcy5zbG9wZURpZmYgPSBNYXRoLm1pbihcbiAgICAgICAgICAgIE1hdGgubWF4KHRoaXMuc2xvcGVEaWZmLCAtZ2xvYmFscy5zbG9wZURpZmZMaW0pLFxuICAgICAgICAgICAgZ2xvYmFscy5zbG9wZURpZmZMaW1cbiAgICAgICAgICApXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzbG9wZSBkaWZmIGJ1bXBcIilcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2U2xvcGUgPSB0aGlzLnNsb3BlXG4gICAgICAgIHRoaXMuc2xvcGUgKz0gdGhpcy5zbG9wZURpZmZcbiAgICAgICAgdGhpcy5zbG9wZSAqPSBnbG9iYWxzLnNsb3BlRGVjYXlcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuc2xvcGUpID4gZ2xvYmFscy5zbG9wZUxpbSkge1xuICAgICAgICAgIHRoaXMuc2xvcGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgIE1hdGgubWF4KHRoaXMuc2xvcGUsIC1nbG9iYWxzLnNsb3BlTGltKSxcbiAgICAgICAgICAgIGdsb2JhbHMuc2xvcGVMaW1cbiAgICAgICAgICApXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzbG9wZSBidW1wXCIpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zbG9wZURpZmYgPSB0aGlzLnNsb3BlIC0gcHJldlNsb3BlXG4gICAgICB9LFxuICAgICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVNsb3BlKClcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc2xvcGUgKiBnbG9iYWxzLmdyb3VuZERldGFpbEludGVydmFsXG4gICAgICAgIHRoaXMueXMucHVzaCh0aGlzLnkpXG4gICAgICAgIC8vIHByZXZlbnQgZmxvYXRpbmcgcG9pbnQgZHJpZnRcbiAgICAgICAgdGhpcy54SWR4KytcbiAgICAgICAgdGhpcy54ID0gZ2xvYmFscy5ncm91bmREZXRhaWxJbnRlcnZhbCAqIHRoaXMueElkeFxuICAgICAgfSxcbiAgICB9XG4gIH1cbiAgY29uc3QgbGVmdE9iaiA9IHRlcnJhaW5MUk9iamVjdCgpLFxuICAgIHJpZ2h0T2JqID0gdGVycmFpbkxST2JqZWN0KClcblxuICBmb3IgKFxuICAgIGxldCBfID0gMDtcbiAgICBfIDwgZ2xvYmFscy5ncm91bmRIYWxmV2lkdGggLyBnbG9iYWxzLmdyb3VuZERldGFpbEludGVydmFsO1xuICAgIF8rK1xuICApIHtcbiAgICBsZWZ0T2JqLnVwZGF0ZSgpXG4gICAgcmlnaHRPYmoudXBkYXRlKClcbiAgfVxuICBsZWZ0T2JqLnlzLnJldmVyc2UoKVxuXG4gIHJldHVybiBsZWZ0T2JqLnlzLmNvbmNhdChbMF0pLmNvbmNhdChyaWdodE9iai55cylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHhQb3NUb1RlcnJhaW5JZHgoeCkge1xuICB4ID0gTWF0aC5taW4oTWF0aC5tYXgoeCwgLWdsb2JhbHMuZ3JvdW5kSGFsZldpZHRoKSwgZ2xvYmFscy5ncm91bmRIYWxmV2lkdGgpXG4gIHJldHVybiAoXG4gICAgTWF0aC5yb3VuZCh4IC8gZ2xvYmFscy5ncm91bmREZXRhaWxJbnRlcnZhbCkgKyAoZ2xvYmFscy5uVGVycmFpblB0cyAtIDEpIC8gMlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJyYWluSWR4VG9YUG9zKGlkeCkge1xuICByZXR1cm4gKGlkeCAtIChnbG9iYWxzLm5UZXJyYWluUHRzIC0gMSkgLyAyKSAqIGdsb2JhbHMuZ3JvdW5kRGV0YWlsSW50ZXJ2YWxcbn1cblxuZnVuY3Rpb24gaW50ZXJwVGVycmFpblkoeCwgdGVycmFpblB0cykge1xuICB4ID0gTWF0aC5taW4oTWF0aC5tYXgoeCwgLWdsb2JhbHMuZ3JvdW5kSGFsZldpZHRoKSwgZ2xvYmFscy5ncm91bmRIYWxmV2lkdGgpXG4gIGNvbnN0IHhTY2FsZWQgPSB4IC8gZ2xvYmFscy5ncm91bmREZXRhaWxJbnRlcnZhbCxcbiAgICBpZHhPZmZzZXQgPSAoZ2xvYmFscy5uVGVycmFpblB0cyAtIDEpIC8gMixcbiAgICBjbGlwcGVkID0gW01hdGguZmxvb3IoeFNjYWxlZCksIE1hdGguY2VpbCh4U2NhbGVkKV0sXG4gICAgeHMgPSBjbGlwcGVkLm1hcCgodikgPT4gZ2xvYmFscy5ncm91bmREZXRhaWxJbnRlcnZhbCAqIHYpLFxuICAgIHlzID0gY2xpcHBlZC5tYXAoKHYpID0+IHRlcnJhaW5QdHNbdiArIGlkeE9mZnNldF0pXG5cbiAgaWYgKHhzWzFdID09IHhzWzBdKSB7XG4gICAgcmV0dXJuIHlzWzBdXG4gIH1cbiAgY29uc3Qgc2xvcGUgPSAoeXNbMV0gLSB5c1swXSkgLyAoeHNbMV0gLSB4c1swXSksXG4gICAgeERpZmYgPSB4IC0geHNbMF0sXG4gICAgeURpZmYgPSBzbG9wZSAqIHhEaWZmXG4gIHJldHVybiB5c1swXSArIHlEaWZmXG59XG4iXSwibmFtZXMiOlsiZ2xvYmFscyIsInciLCJoIiwibElucHV0Q29kZXMiLCJySW5wdXRDb2RlcyIsInhPZmZzIiwidHMiLCJzaW5MaW0iLCJzaW5TdGVwIiwic2luRGVjYXkiLCJ2ZWxMaW0iLCJ2ZWxEZWNheSIsImdyb3VuZEhhbGZXaWR0aCIsImdyb3VuZEZsYXRDZW50ZXJIYWxmV2lkdGgiLCJncm91bmREZXRhaWxJbnRlcnZhbCIsIm5UZXJyYWluUHRzIiwid2FsbEgiLCJ3YWxsVyIsInNsb3BlRGVjYXkiLCJzbG9wZUxpbSIsInNsb3BlRGlmZk1hZyIsInNsb3BlRGlmZkRlY2F5Iiwic2xvcGVEaWZmTGltIiwiYmFyTWF4IiwibGltIiwidGFyZ2V0VHlwZSIsImJhckhlaWdodCIsInNjb3JlRGVub21FcHMiLCJjcmFzaFNpbkxpbWl0IiwibWF4VG9ycXVlIiwibldvcmtlcnMiLCJtdWx0aXBsaWVyIiwiZXBMZW4iLCJ0d2l0Y2hpbmVzc2VzIiwiY21hU2lnbWEiLCJib3hfbXVsbGVyIiwidTAiLCJNYXRoIiwicmFuZG9tIiwidTEiLCJwYXJ0MCIsInNxcnQiLCJsb2ciLCJwYXJ0MSIsIlBJIiwiejAiLCJjb3MiLCJ6MSIsInNpbiIsIkZsb2F0MzJBcnJheSIsImZyb20iLCJyYW5kX25vcm1hbCIsIm4iLCJyZXMiLCJpIiwicGFpciIsIlRpcHB5Iiwid2hlZWxQb3NJbml0Iiwid29ybGQiLCJiMiIsInBvcHVsYXRpb24iLCJjb25zb2xlIiwiYXNzZXJ0IiwibGVuZ3RoIiwid2hlZWxSIiwid2hlZWxGcmljdGlvbiIsIndoZWVsRGVuc2l0eSIsIndoZWVsUmVzdGl0dXRpb24iLCJjaGFzc2lzRGVuc2l0eSIsImNoYXNzaXNIIiwiY2hhc3Npc1ciLCJheGxlT2Zmc2V0WSIsImJkIiwiYjJCb2R5RGVmIiwic2V0X3R5cGUiLCJiMl9keW5hbWljQm9keSIsInNldF9wb3NpdGlvbiIsImIyVmVjMiIsIndoZWVsQm9keSIsIkNyZWF0ZUJvZHkiLCJzaGFwZSIsImIyQ2lyY2xlU2hhcGUiLCJzZXRfbV9yYWRpdXMiLCJmZCIsImIyRml4dHVyZURlZiIsInNldF9zaGFwZSIsInNldF9kZW5zaXR5Iiwic2V0X2ZyaWN0aW9uIiwic2V0X3Jlc3RpdHV0aW9uIiwiZmlsdGVyIiwiZ2V0X2ZpbHRlciIsInNldF9jYXRlZ29yeUJpdHMiLCJzZXRfbWFza0JpdHMiLCJzZXRfZmlsdGVyIiwiZml4dHVyZSIsImNhc3RPYmplY3QiLCJDcmVhdGVGaXh0dXJlIiwiYjJGaXh0dXJlIiwicGFydFR5cGUiLCJzcG90Iiwid2hlZWxNYXNzIiwiR2V0TWFzcyIsImVkZ2VYIiwiZWRnZVkiLCJjdXRvdXRYIiwiY3V0b3V0WSIsImNoYXNzaXNWZXJ0aWNlcyIsImIyQ2hhc3Npc1ZlcnRpY2VzIiwidmVydGV4IiwicHVzaCIsImNoYXNzaXNQb3NJbml0IiwiY2hhc3Npc0JvZHkiLCJiMkNyZWF0ZVBvbHlnb25TaGFwZSIsImNoYXNzaXNNYXNzIiwiamQiLCJiMlJldm9sdXRlSm9pbnREZWYiLCJJbml0aWFsaXplIiwic2V0X2VuYWJsZU1vdG9yIiwic2V0X21heE1vdG9yVG9ycXVlIiwiYXhsZSIsIkNyZWF0ZUpvaW50IiwiYjJSZXZvbHV0ZUpvaW50IiwiaW5wdXREaW0iLCJnZXRJbnB1dHMiLCJzaGFwZXMiLCJuX2RpbSIsIndlaWdodENvdW50IiwiYmlhc0NvdW50IiwibSIsInJlc2V0IiwidmVydGljZXMiLCJiMlBvbHlnb25TaGFwZSIsImJ1ZmZlciIsIl9tYWxsb2MiLCJvZmZzZXQiLCJIRUFQRjMyIiwiZ2V0X3giLCJnZXRfeSIsInB0cl93cmFwcGVkIiwid3JhcFBvaW50ZXIiLCJTZXQiLCJmbGF0V3RzIiwiZmxhdFd0SWR4Iiwid2VpZ2h0cyIsIm5ld1dlaWdodCIsInNsaWNlIiwiTWF0cml4IiwiYmlhc2VzIiwibmV3QmlhcyIsIlNldFRyYW5zZm9ybSIsIlNldExpbmVhclZlbG9jaXR5IiwiU2V0QW5ndWxhclZlbG9jaXR5IiwiU2V0QXdha2UiLCJ0YXJnZXRTcUVyclN1bSIsInRhcmdldFByZXYiLCJwcmV2T3V0cHV0Iiwib3V0cHV0RGlmZlNxU3VtIiwicHJldldoZWVsVmVsWCIsIndoZWVsQWNjWCIsInByZXZDaGFzc2lzVmVsWCIsImNoYXNzaXNBY2NYIiwiZHJpZnRYU3FTdW0iLCJjcmFzaFN0ZXBDb3VudCIsInRhcmdldCIsImN1cnJlbnQiLCJkaWZmIiwiZGlmZlNxIiwiZGVub20iLCJhYnMiLCJzcGVlZCIsIlNldE1vdG9yU3BlZWQiLCJyZXZlcnNlIiwic2lnbiIsImlucHV0cyIsIndoZWVsUG9zIiwiR2V0UG9zaXRpb24iLCJ3aGVlbFgiLCJ3aGVlbFkiLCJsaWRhcllzIiwieE9mZiIsImxpZGFyWSIsImludGVycFRlcnJhaW5ZIiwidGVycmFpblB0cyIsImNoYXNzaXNTaW4iLCJHZXRBbmdsZSIsImNoYXNzaXNWZWwiLCJHZXRMaW5lYXJWZWxvY2l0eSIsImNoYXNzaXNWZWxYIiwiY2hhc3Npc0FuZ1ZlbCIsIkdldEFuZ3VsYXJWZWxvY2l0eSIsIndoZWVsVmVsIiwid2hlZWxWZWxYIiwid2hlZWxBbmdWZWwiLCJheGxlUnhuIiwiR2V0UmVhY3Rpb25Gb3JjZSIsInVwZGF0ZVRhcmdldFNjb3JlIiwiaW5wdXRzQXJyYXkiLCJpbnB1dHNNYXRyaXgiLCJvdXRwdXRSYXciLCJtdWwiLCJhZGQiLCJsZWFreUVsdSIsImRhdGEiLCJvdXRwdXQiLCJzZXRTcGVlZCIsIm91dHB1dERpZmYiLCJjaGFzc2lzUG9zIiwid2hlZWxQb3NDdXJyZW50Iiwid2hlZWxBbmdsZUN1cnJlbnQiLCJjaGFzc2lzUG9zQ3VycmVudCIsImNoYXNzaXNBbmdsZUN1cnJlbnQiLCJvdGhlciIsImEiLCJiIiwicCIsImMiLCJBcnJheUJ1ZmZlciIsImoiLCJzdW0iLCJrIiwibCIsInJlc3VsdCIsIm1heCIsImV4cG0xIiwidmVjdG9yTm9ybXMiLCJ2ZWN0b3JzIiwiZmlsbCIsInZlY3RvciIsIngiLCJyb3dOb3JtVGhpbmd5IiwibWF0Iiwicm93Q291bnQiLCJjb2xDb3VudCIsInN1bUFsbCIsInJvd1N1bXMiLCJjb2xTdW1zIiwicm93SWR4IiwiY29sSWR4IiwidmFsIiwidmFsU3EiLCJzdW1Sb3dzIiwic3VtQ29scyIsIlBvcHVsYXRpb24iLCJuVGlwcHlzIiwiZ3Jhdml0eSIsImIyV29ybGQiLCJncm91bmRCb2R5IiwidGVycmFpblB0c0ZpbHRlcmVkIiwieURpZmZQcmV2IiwieURpZmZDdXJyIiwic2FtZVNsb3BlIiwidGVycmFpbklkeFRvWFBvcyIsImVkZ2VTaGFwZSIsImIyRWRnZVNoYXBlIiwiU2V0VHdvU2lkZWQiLCJncm91bmRGRCIsImdyb3VuZEZpeHR1cmUiLCJpZHgiLCJ5IiwidGlwcHlzIiwiYWRkVGlwcHlzIiwidGlwcHkiLCJmbGF0V3RzSWR4Iiwic2V0V3RzIiwidGFyZ2V0cyIsInNvbHV0aW9ucyIsIm5Tb2x1dGlvbnMiLCJ0YXJnZXRJZHgiLCJzdGVwIiwidXBkYXRlIiwiU3RlcCIsInNvbHV0aW9uc1Njb3JlcyIsInRpcHB5MCIsInNvbHV0aW9uIiwid3RzTm9ybSIsInd0TGF5ZXIiLCJ3dCIsImJpYXNOb3JtIiwiYmlhc0xheWVyIiwiYmlhcyIsInRhc2tTY29yZXMiLCJ0YXNrVGlwcHkiLCJtc2UiLCJjcmFzaGVkUmF0aW8iLCJkcmlmdFgiLCJzY2FsZSIsImNlbnRlciIsImRyYXciLCJ1cGRhdGVEaXJlY3Rpb24iLCJsZCIsInJkIiwiX3RhcmdldFNpbiIsIl90YXJnZXRWZWwiLCJ0YXJnZXRTaW4iLCJ0YXJnZXRWZWwiLCJnZW5lcmF0ZVRlcnJhaW5QdHMiLCJ0ZXJyYWluTFJPYmplY3QiLCJzbG9wZURpZmYiLCJzbG9wZSIsInhJZHgiLCJ5cyIsInVwZGF0ZVNsb3BlIiwibWluIiwicHJldlNsb3BlIiwibGVmdE9iaiIsInJpZ2h0T2JqIiwiXyIsImNvbmNhdCIsInhQb3NUb1RlcnJhaW5JZHgiLCJyb3VuZCIsInhTY2FsZWQiLCJpZHhPZmZzZXQiLCJjbGlwcGVkIiwiZmxvb3IiLCJjZWlsIiwieHMiLCJtYXAiLCJ2IiwieERpZmYiLCJ5RGlmZiJdLCJzb3VyY2VSb290IjoiIn0=