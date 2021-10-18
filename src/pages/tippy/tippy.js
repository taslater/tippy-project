import { globals } from "./globals.js"
import { rand_normal } from "./random_normal.js"

class Tippy {
  constructor(wheelPosInit, world, b2, population) {
    this.population = population
    console.assert(wheelPosInit.length == 2, "Tippy requires 2d wheelPos")
    // this.wheelPosInit = wheelPosInit.slice()
    this.wheelR = 0.25
    this.wheelPosInit = [wheelPosInit[0], wheelPosInit[1] - this.wheelR]
    const wheelFriction = 0.9,
      wheelDensity = 0.5,
      wheelRestitution = 0.1,
      chassisDensity = 2.0
    this.chassisH = 1.0
    this.chassisW = 0.3
    this.axleOffsetY = 0.1

    // create wheel
    {
      const bd = new b2.b2BodyDef()
      bd.set_type(b2.b2_dynamicBody)
      bd.set_position(new b2.b2Vec2(...this.wheelPosInit))
      this.wheelBody = world.CreateBody(bd)

      const shape = new b2.b2CircleShape()
      shape.set_m_radius(this.wheelR)

      const fd = new b2.b2FixtureDef()
      fd.set_shape(shape)
      fd.set_density(wheelDensity)
      fd.set_friction(wheelFriction)
      fd.set_restitution(wheelRestitution)

      const filter = fd.get_filter()
      filter.set_categoryBits(0x0002)
      filter.set_maskBits(0x0001)
      fd.set_filter(filter)
      const fixture = b2.castObject(
        this.wheelBody.CreateFixture(fd),
        b2.b2Fixture
      )
      fixture.partType = "wheel"
      fixture.spot = this

      this.wheelMass = this.wheelBody.GetMass()
    }

    // create chassis
    {
      const edgeX = 0.5 * this.chassisW,
        edgeY = 0.5 * this.chassisH,
        cutoutX = 0.2 * this.chassisW,
        cutoutY = 0.35 * this.chassisH

      this.chassisVertices = [
        [+edgeX, -edgeY],
        [-edgeX, -edgeY],
        [-edgeX, +cutoutY],
        [-cutoutX, +edgeY],
        [+cutoutX, +edgeY],
        [+edgeX, +cutoutY],
      ]

      const b2ChassisVertices = []
      for (let vertex of this.chassisVertices) {
        b2ChassisVertices.push(
          new b2.b2Vec2(
            vertex[0] + this.wheelPosInit[0],
            vertex[1] + this.wheelPosInit[1]
          )
        )
      }

      this.chassisPosInit = [
        this.wheelPosInit[0],
        this.wheelPosInit[1] - 0.5 * this.chassisH + this.axleOffsetY,
      ]
      const bd = new b2.b2BodyDef()
      bd.set_type(b2.b2_dynamicBody)
      bd.set_position(new b2.b2Vec2(...this.chassisPosInit))
      // bd.set_linearDamping(0.1)
      // bd.set_angularDamping(0.1)
      this.chassisBody = world.CreateBody(bd)
      const shape = this.b2CreatePolygonShape(b2ChassisVertices, b2)
      const fd = new b2.b2FixtureDef()
      const filter = fd.get_filter()
      filter.set_categoryBits(0x0002)
      filter.set_maskBits(0x0001)
      fd.set_filter(filter)
      fd.set_density(chassisDensity)
      fd.set_shape(shape)
      // fd.set_friction(0.3)
      // fd.set_restitution(0.1)
      const fixture = b2.castObject(
        this.chassisBody.CreateFixture(fd),
        b2.b2Fixture
      )
      fixture.partType = "chassis"
      fixture.spot = this
      this.chassisMass = this.chassisBody.GetMass()
    }

    // create joint
    {
      const jd = new b2.b2RevoluteJointDef()
      jd.Initialize(
        this.wheelBody,
        this.chassisBody,
        new b2.b2Vec2(...this.wheelPosInit)
      )

      jd.set_enableMotor(true)
      jd.set_maxMotorTorque(globals.maxTorque)
      this.axle = b2.castObject(world.CreateJoint(jd), b2.b2RevoluteJoint)
    }

    this.inputDim = this.getInputs(0).length
    // // this.shapes = [this.inputDim, 16, 8, 4]
    // // this.shapes = [this.inputDim, 20, 10, 4]
    this.shapes = [this.inputDim, 12, 8, 1]

    this.n_dim = 0
    this.weightCount = 0
    this.biasCount = 0
    for (let i = 0; i < this.shapes.length - 1; i++) {
      const n = this.shapes[i],
        m = this.shapes[i + 1]
      this.n_dim += (n + 1) * m
      this.weightCount += n * m
      this.biasCount += m
    }

    this.reset(b2)
  }

  b2CreatePolygonShape(vertices, b2) {
    const shape = new b2.b2PolygonShape()
    const buffer = b2._malloc(vertices.length * 8)
    let offset = 0
    for (let i = 0; i < vertices.length; i++) {
      b2.HEAPF32[(buffer + offset) >> 2] = vertices[i].get_x()
      b2.HEAPF32[(buffer + (offset + 4)) >> 2] = vertices[i].get_y()
      offset += 8
    }
    const ptr_wrapped = b2.wrapPointer(buffer, b2.b2Vec2)
    shape.Set(ptr_wrapped, vertices.length)
    return shape
  }

  setWts(flatWts) {
    // this.flatWts = new Float32Array(this.n_dim).map(() => Math.random() - 0.5)
    this.flatWts = flatWts
    let flatWtIdx = 0
    this.weights = []
    // this.weightCount = 0
    for (let i = 0; i < this.shapes.length - 1; i++) {
      const n = this.shapes[i],
        m = this.shapes[i + 1],
        newWeight = Float32Array.from(
          this.flatWts.slice(flatWtIdx, flatWtIdx + n * m)
        )
      // this.weightCount += newWeight.length
      this.weights.push(new Matrix(newWeight, n, m))
      flatWtIdx += n * m
    }
    this.biases = []
    // this.biasCount = 0
    for (let i = 0; i < this.shapes.length - 1; i++) {
      const n = 1,
        m = this.shapes[i + 1],
        newBias = Float32Array.from(
          this.flatWts.slice(flatWtIdx, flatWtIdx + n * m)
        )
      // this.biasCount += newBias.length
      this.biases.push(new Matrix(newBias, n, m))
      flatWtIdx += n * m
    }
  }

  reset(b2) {
    this.chassisBody.SetTransform(new b2.b2Vec2(...this.chassisPosInit), 0)
    this.chassisBody.SetLinearVelocity(new b2.b2Vec2(0, 0))
    this.chassisBody.SetAngularVelocity(0)
    this.chassisBody.SetAwake(1)

    this.wheelBody.SetTransform(new b2.b2Vec2(...this.wheelPosInit), 0)
    this.wheelBody.SetLinearVelocity(new b2.b2Vec2(0, 0))
    this.wheelBody.SetAngularVelocity(0)
    this.wheelBody.SetAwake(1)

    this.targetSqErrSum = 0
    this.targetPrev = null

    this.prevOutput = 0
    this.outputDiffSqSum = 0

    this.prevWheelVelX = 0
    this.wheelAccX = 0
    this.prevChassisVelX = 0
    this.chassisAccX = 0

    this.driftXSqSum = 0
    this.crashStepCount = 0
  }

  updateTargetScore(target, current) {
    const diff = target - current,
      diffSq = diff * diff,
      denom = Math.abs(target) + globals.scoreDenomEps
    // this.targetSqErrSum += diffSq / denom
    this.targetSqErrSum += globals.targetType === "vel" ? diffSq : 1e2 * diffSq
  }

  setSpeed(speed) {
    this.axle.SetMotorSpeed(speed)
  }

  getInputs(target) {
    this.reverse = target != 0 ? Math.sign(target) : 1
    let inputs
    if (this.inputDim != null) {
      inputs = new Float32Array(this.inputDim)
    } else {
      inputs = []
    }
    let i = 0
    // elevation
    const wheelPos = this.wheelBody.GetPosition(),
      wheelX = wheelPos.get_x(),
      wheelY = wheelPos.get_y()
    //   interpY = interpTerrainY(wheelX, this.population.terrainPts)
    // this.yClearance = interpY - wheelY - this.wheelR
    // inputs[i] = this.yClearance
    // i++
    this.lidarYs = []
    for (let xOff of globals.xOffs) {
      const lidarY =
        interpTerrainY(
          wheelX + this.reverse * xOff,
          this.population.terrainPts
        ) -
        wheelY -
        this.wheelR
      this.lidarYs.push(lidarY)
      inputs[i] = lidarY
      i++
    }

    // chassisSin
    const chassisSin = Math.sin(this.chassisBody.GetAngle())
    inputs[i] = this.reverse * chassisSin
    i++
    if (Math.abs(chassisSin) > globals.crashSinLimit) {
      this.crashStepCount++
    }
    // chassisVelX, chassisVelY
    const chassisVel = this.chassisBody.GetLinearVelocity(),
      chassisVelX = chassisVel.get_x()
    this.chassisAccX = chassisVelX - this.prevChassisVelX
    this.prevChassisVelX = chassisVelX
    // inputs[i] = this.reverse * chassisVel.get_x()
    // i++
    // inputs[i] = chassisVel.get_y()
    // i++
    // chassisAngVel
    if (target == 0) {
      this.driftXSqSum += this.chassisAccX * this.chassisAccX
    }
    const chassisAngVel = this.chassisBody.GetAngularVelocity()
    inputs[i] = this.reverse * chassisAngVel
    i++
    // wheelVelX, wheelVelY
    const wheelVel = this.wheelBody.GetLinearVelocity(),
      wheelVelX = wheelVel.get_x()
    this.wheelAccX = wheelVelX - this.prevWheelVelX
    this.prevWheelVelX = wheelVelX
    inputs[i] = this.reverse * wheelVelX
    i++
    inputs[i] = wheelVel.get_y()
    i++
    // wheelAngVel
    const wheelAngVel = this.wheelBody.GetAngularVelocity()
    inputs[i] = this.reverse * wheelAngVel
    i++
    const axleRxn = this.axle.GetReactionForce(60)
    inputs[i] = 1e-2 * this.reverse * axleRxn.get_x()
    i++
    inputs[i] = 1e-2 * axleRxn.get_y()
    i++
    // target
    inputs[i] = this.reverse * target
    i++

    if (this.targetPrev !== null) {
      if (globals.targetType === "sin") {
        this.updateTargetScore(this.targetPrev, chassisSin)
      } else {
        this.updateTargetScore(this.targetPrev, wheelVelX)
      }
    }
    this.targetPrev = target

    return inputs
  }

  update(target) {
    const inputsArray = this.getInputs(target)
    const inputsMatrix = new Matrix(inputsArray, 1, inputsArray.length)
    const outputRaw = inputsMatrix
      // const speeds = inputs
      .mul(this.weights[0])
      .add(this.biases[0])
      // .relu()
      // .leakyRelu()
      .leakyElu()
      .mul(this.weights[1])
      .add(this.biases[1])
      // .relu()
      // .leakyRelu()
      .leakyElu()
      .mul(this.weights[2])
      .add(this.biases[2]).data[0]

    // const reverse = target != 0 ? Math.sign(target) : 1,
    const output = this.reverse * outputRaw
    this.setSpeed(output)

    const outputDiff = output - this.prevOutput
    this.outputDiffSqSum += outputDiff * outputDiff
    this.prevOutput = output
  }

  get drawPositionData() {
    // return {
    //   wheelPosCurrent: this.wheelBody.GetPosition(),
    //   wheelAngleCurrent: this.wheelBody.GetAngle(),
    //   chassisPosCurrent: this.chassisBody.GetPosition(),
    //   chassisAngleCurrent: this.chassisBody.GetAngle(),
    // }
    const wheelPos = this.wheelBody.GetPosition(),
      chassisPos = this.chassisBody.GetPosition()
    return {
      wheelPosCurrent: [wheelPos.get_x(), wheelPos.get_y()],
      wheelAngleCurrent: this.wheelBody.GetAngle(),
      chassisPosCurrent: [chassisPos.get_x(), chassisPos.get_y()],
      chassisAngleCurrent: this.chassisBody.GetAngle(),
    }
  }

  get corrData() {
    return [
      Math.sin(this.chassisBody.GetAngle()),
      this.wheelAccX,
      this.chassisAccX,
    ]
  }

  // sleep() {
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
}

class Matrix {
  constructor(data, m, n) {
    this.data = data
    this.m = m
    this.n = n
  }

  mul(other) {
    const a = this.data,
      b = other.data,
      m = this.m,
      n = this.n,
      p = other.n,
      c = new Float32Array(new ArrayBuffer(4 * m * p))
    for (let j = 0; j < p; j++) {
      for (let i = 0; i < m; i++) {
        let sum = 0
        for (let k = 0; k < n; k++) {
          sum += a[i * n + k] * b[k * p + j]
        }
        c[i * p + j] = sum
      }
    }
    return new Matrix(c, m, p)
  }

  add(other) {
    const a = this.data,
      b = other.data,
      l = a.length,
      c = new Float32Array(new ArrayBuffer(4 * l))
    for (let i = 0; i < l; i++) {
      c[i] = a[i] + b[i]
    }
    return new Matrix(c, this.m, this.n)
  }

  relu() {
    const n = this.data.length,
      result = this.data.slice()
    for (let i = 0; i < n; i++) {
      result[i] = Math.max(0, result[i])
    }
    return new Matrix(result, this.m, this.n)
  }

  leakyRelu() {
    const n = this.data.length,
      result = this.data.slice()
    for (let i = 0; i < n; i++) {
      result[i] = Math.max(0.1 * result[i], result[i])
    }
    return new Matrix(result, this.m, this.n)
  }

  elu() {
    const n = this.data.length,
      result = this.data.slice()
    for (let i = 0; i < n; i++) {
      if (result[i] < 0) {
        result[i] = Math.expm1(result[i])
      }
    }
    return new Matrix(result, this.m, this.n)
  }

  leakyElu() {
    const n = this.data.length,
      result = this.data.slice()
    for (let i = 0; i < n; i++) {
      if (result[i] < 0) {
        result[i] = Math.expm1(result[i]) + 0.1 * result[i]
      }
    }
    return new Matrix(result, this.m, this.n)
  }
}

function vectorNorms(vectors) {
  const result = new Float32Array(vectors.length).fill(0)
  for (let i = 0; i < vectors.length; i++) {
    const vector = vectors[i].data
    for (let x of vector) {
      result[i] += x * x
    }
    // result[i] = Math.sqrt(result[i])
    result[i] /= vector.length
  }
  return result
}

function rowNormThingy(mat) {
  // m: row count, n: column count
  const rowCount = mat.m,
    colCount = mat.n
  let sumAll = 0
  const rowSums = new Float32Array(rowCount).fill(0),
    colSums = new Float32Array(colCount).fill(0)
  // row idx
  for (let rowIdx = 0; rowIdx < rowCount; rowIdx++) {
    // col idx
    for (let colIdx = 0; colIdx < colCount; colIdx++) {
      const val = mat.data[rowIdx * colCount + colIdx],
        valSq = val * val
      // rowSums[rowIdx] += Math.abs(val)
      rowSums[rowIdx] += valSq
      // colSums[colIdx] += Math.abs(val)
      colSums[colIdx] += valSq
      sumAll += valSq
    }
  }
  sumAll /= rowCount * colCount
  let sumRows = 0
  for (let i = 0; i < rowCount; i++) {
    const val = rowSums[i] / colCount
    sumRows += val * val
  }
  sumRows /= rowCount
  let sumCols = 0
  for (let i = 0; i < colCount; i++) {
    const val = colSums[i] / rowCount
    sumCols += val * val
  }
  sumCols /= colCount

  // return sumAll + 0.1 * sumRows + 1.0 * sumCols
  return sumAll
}

export class Population {
  constructor(wheelPosInit, nTippys, terrainPts, b2) {
    this.wheelPosInit = wheelPosInit.slice()

    {
      const gravity = new b2.b2Vec2(0, 9.81)
      this.world = new b2.b2World(gravity)
    }

    this.b2 = b2
    this.terrainPts = terrainPts

    // add ground
    {
      const groundBody = this.world.CreateBody(new b2.b2BodyDef())

      const terrainPtsFiltered = []
      let yDiffPrev
      for (let i = 0; i < globals.nTerrainPts; i++) {
        const yDiffCurr = terrainPts[i + 1] - terrainPts[i],
          sameSlope = yDiffCurr == yDiffPrev
        yDiffPrev = yDiffCurr
        if (sameSlope && i != globals.nTerrainPts - 1) {
          continue
        }
        terrainPtsFiltered.push([terrainIdxToXPos(i), terrainPts[i]])
      }
      // console.log(terrainPtsFiltered.length, globals.nTerrainPts)
      // reversed loop for CCW winding order (Box2D)
      for (let i = terrainPtsFiltered.length - 1; i >= 1; i--) {
        const edgeShape = new b2.b2EdgeShape()
        edgeShape.SetTwoSided(
          new b2.b2Vec2(terrainPtsFiltered[i][0], terrainPtsFiltered[i][1]),
          new b2.b2Vec2(
            terrainPtsFiltered[i - 1][0],
            terrainPtsFiltered[i - 1][1]
          )
        )
        const groundFD = new b2.b2FixtureDef()
        groundFD.set_shape(edgeShape)
        groundFD.set_friction(0.9)
        groundFD.set_restitution(0.1)
        const groundFixture = b2.castObject(
          groundBody.CreateFixture(groundFD),
          b2.b2Fixture
        )
      }
      // add walls
      for (const idx of [0, globals.nTerrainPts - 1]) {
        const [x, y] = [terrainIdxToXPos(idx), terrainPts[idx]]
        const edgeShape = new b2.b2EdgeShape()
        edgeShape.SetTwoSided(
          new b2.b2Vec2(x, y),
          new b2.b2Vec2(x, y - globals.wallH)
        )
        const groundFD = new b2.b2FixtureDef()
        groundFD.set_shape(edgeShape)
        groundFD.set_friction(0.9)
        groundFD.set_restitution(0.1)
        const groundFixture = b2.castObject(
          groundBody.CreateFixture(groundFD),
          b2.b2Fixture
        )
      }
    }
    this.tippys = []
    this.addTippys(nTippys)
    this.n_dim = this.tippys[0].n_dim
  }

  reset() {
    for (let tippy of this.tippys) {
      tippy.reset(this.b2)
    }
  }

  addTippys(nTippys) {
    for (let i = 0; i < nTippys; i++) {
      this.tippys.push(new Tippy(this.wheelPosInit, this.world, this.b2, this))
    }
  }

  setWts(flatWts) {
    let flatWtsIdx = 0
    for (let tippy of this.tippys) {
      tippy.setWts(flatWts.slice(flatWtsIdx, flatWtsIdx + this.n_dim))
      flatWtsIdx += this.n_dim
    }
  }

  train({ targets, solutions }) {
    // assign solution and target to each tippy
    const nSolutions = solutions.length / this.n_dim
    if (this.tippys.length < nSolutions * targets.length) {
      this.addTippys(nSolutions * targets.length - this.tippys.length)
    }
    let flatWtsIdx = 0
    for (let i = 0; i < nSolutions; i++) {
      for (let j = 0; j < targets.length; j++) {
        const tippy = this.tippys[i * targets.length + j]
        tippy.setWts(solutions.slice(flatWtsIdx, flatWtsIdx + this.n_dim))
        tippy.targetIdx = j
      }
      flatWtsIdx += this.n_dim
    }
    // simulate using one target per solution
    this.reset()
    for (let step = 0; step < targets[0].length; step++) {
      for (let tippy of this.tippys) {
        tippy.update(targets[tippy.targetIdx][step])
      }
      this.world.Step(globals.ts, 8, 3)
    }
    // score solutions after simulation
    const solutionsScores = []
    for (let i = 0; i < nSolutions; i++) {
      const tippy0 = this.tippys[i * targets.length],
        solution = tippy0.flatWts
      let wtsNorm = 0
      for (let wtLayer of tippy0.weights) {
        for (let wt of wtLayer.data) {
          wtsNorm += wt * wt
        }
      }
      wtsNorm /= tippy0.weightCount
      let biasNorm = 0
      for (let biasLayer of tippy0.biases) {
        for (let bias of biasLayer.data) {
          biasNorm += bias * bias
        }
      }
      biasNorm /= tippy0.biasCount
      const taskScores = []
      for (let j = 0; j < targets.length; j++) {
        const taskTippy = this.tippys[i * targets.length + j],
          mse = taskTippy.targetSqErrSum / globals.epLen,
          crashedRatio = taskTippy.crashStepCount / globals.epLen,
          driftX = taskTippy.driftXSqSum / globals.epLen
        taskScores.push({ mse, crashedRatio, driftX })
      }
      // solutionsScores.push({ solution, score })
      solutionsScores.push({ solution, wtsNorm, biasNorm, taskScores })
    }
    return solutionsScores
  }

  update(targets) {
    for (let i = 0; i < this.tippys.length; i++) {
      const tippy = this.tippys[i]
      tippy.update(targets[i])
    }
    this.world.Step(globals.ts, 8, 3)
  }

  draw(scale, center) {
    for (let tippy of this.tippys) {
      tippy.draw(scale, center)
    }
  }
}

export function updateDirection(ld, rd, _targetSin, _targetVel) {
  // no change if both keys down
  let targetSin = _targetSin,
    targetVel = _targetVel
  if (ld && rd) {
    return [targetSin, targetVel]
  }
  // decay sin toward zero
  if (targetSin != 0) {
    if (Math.abs(targetSin) < globals.sinDecay) {
      targetSin = 0
    } else {
      targetSin -= Math.sign(targetSin) * globals.sinDecay
    }
  }
  // change if only one key
  // and limit output
  if (ld) {
    targetSin -= globals.sinStep
    if (targetSin < -globals.sinLim) {
      targetSin = -globals.sinLim
    }
  } else if (rd) {
    targetSin += globals.sinStep
    if (targetSin > globals.sinLim) {
      targetSin = globals.sinLim
    }
  }
  // decay vel toward zero
  if (targetVel != 0) {
    if (Math.abs(targetVel) < globals.velDecay) {
      targetVel = 0
    } else {
      targetVel -= Math.sign(targetVel) * globals.velDecay
    }
  }

  targetVel += 0.102 * targetSin
  if (targetVel > globals.velLim) {
    targetVel = globals.velLim
  } else if (targetVel < -globals.velLim) {
    targetVel = -globals.velLim
  }
  // // update test trigonometry
  // if (targetSin != targetDirectionBefore) {
  //   targetAngle = Math.asin(targetSin)
  //   targetCos = Math.cos(targetAngle)
  // }
  return [targetSin, targetVel]
}

export function generateTerrainPts() {
  function terrainLRObject() {
    return {
      slopeDiff: 0,
      slope: 0,
      y: 0,
      x: globals.groundDetailInterval,
      xIdx: 1,
      // randVals: rand_normal(globals.groundHalfWidth / globals.groundDetailInterval - 1),
      // idx: 0,
      ys: [],
      updateSlope() {
        if (this.x <= globals.groundFlatCenterHalfWidth) {
          return
        }
        // this.slopeDiff += globals.slopeDiffMag * this.randVals[this.idx]
        this.slopeDiff += globals.slopeDiffMag * rand_normal(1)[0]
        // this.idx++
        this.slopeDiff *= globals.slopeDiffDecay
        if (Math.abs(this.slopeDiff) > globals.slopeDiffLim) {
          this.slopeDiff = Math.min(
            Math.max(this.slopeDiff, -globals.slopeDiffLim),
            globals.slopeDiffLim
          )
          // console.log("slope diff bump")
        }
        const prevSlope = this.slope
        this.slope += this.slopeDiff
        this.slope *= globals.slopeDecay
        if (Math.abs(this.slope) > globals.slopeLim) {
          this.slope = Math.min(
            Math.max(this.slope, -globals.slopeLim),
            globals.slopeLim
          )
          // console.log("slope bump")
        }
        this.slopeDiff = this.slope - prevSlope
      },
      update() {
        this.updateSlope()
        this.y += this.slope * globals.groundDetailInterval
        this.ys.push(this.y)
        // prevent floating point drift
        this.xIdx++
        this.x = globals.groundDetailInterval * this.xIdx
      },
    }
  }
  const leftObj = terrainLRObject(),
    rightObj = terrainLRObject()

  for (
    let _ = 0;
    _ < globals.groundHalfWidth / globals.groundDetailInterval;
    _++
  ) {
    leftObj.update()
    rightObj.update()
  }
  leftObj.ys.reverse()

  return leftObj.ys.concat([0]).concat(rightObj.ys)
}

export function xPosToTerrainIdx(x) {
  x = Math.min(Math.max(x, -globals.groundHalfWidth), globals.groundHalfWidth)
  return (
    Math.round(x / globals.groundDetailInterval) + (globals.nTerrainPts - 1) / 2
  )
}

export function terrainIdxToXPos(idx) {
  return (idx - (globals.nTerrainPts - 1) / 2) * globals.groundDetailInterval
}

function interpTerrainY(x, terrainPts) {
  x = Math.min(Math.max(x, -globals.groundHalfWidth), globals.groundHalfWidth)
  const xScaled = x / globals.groundDetailInterval,
    idxOffset = (globals.nTerrainPts - 1) / 2,
    clipped = [Math.floor(xScaled), Math.ceil(xScaled)],
    xs = clipped.map((v) => globals.groundDetailInterval * v),
    ys = clipped.map((v) => terrainPts[v + idxOffset])

  if (xs[1] == xs[0]) {
    return ys[0]
  }
  const slope = (ys[1] - ys[0]) / (xs[1] - xs[0]),
    xDiff = x - xs[0],
    yDiff = slope * xDiff
  return ys[0] + yDiff
}
