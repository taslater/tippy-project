import {
  shoulderHMeters,
  footRadius,
  // footRadiusDraw,
  anklePt,
  // anklePtDraw,
  kneePt,
  // kneePtDraw,
  hipPt,
  // hipPtDraw,
  upperLegLimits,
  upperLegMaxTorque,
  lowerLegLimits,
  lowerLegMaxTorque,
  upperLegPts,
  // upperLegPtsDraw,
  lowerLegPts,
  // lowerLegPtsDraw,
  chassisPts,
  // chassisPtsDraw,
  maxSpeed,
  maxSpeedDiff,
  nJointAngleBins,
  epLen,
  uniformDistBinCount,
  rollingWindow,
  targetVelX,
} from "./globals.js"

const JOINT_SPEED_INIT = Infinity

export class Spot {
  constructor(shoulderPos, world, b2) {
    this.shoulderInitPt = shoulderPos.slice()
    this.elbowInitPt = [shoulderPos[0] - kneePt[0], shoulderPos[1] - kneePt[1]]
    this.hipInitPt = [shoulderPos[0] - hipPt[0], shoulderPos[1] - hipPt[1]]
    this.kneeInitPt = [
      this.hipInitPt[0] - kneePt[0],
      this.hipInitPt[1] - kneePt[1],
    ]

    // this.footFixtures = []
    // this.fragileFixtures = []
    // const [chassisBody, chassisFixture] = this.createPolygonBody(
    this.chassisBody = this.createPolygonBody(
      this.shoulderInitPt,
      chassisPts,
      world,
      b2,
      1
    )
    // this.chassisBody = chassisBody
    // this.chassisFixture = chassisFixture
    this.upperForelegBody = this.createPolygonBody(
      this.shoulderInitPt,
      upperLegPts,
      world,
      b2,
      2
    )
    this.upperHindlegBody = this.createPolygonBody(
      this.hipInitPt,
      upperLegPts,
      world,
      b2,
      2
    )
    this.lowerForelegBody = this.createPolygonBody(
      this.elbowInitPt,
      lowerLegPts,
      world,
      b2,
      2
    )
    this.addFoot(this.lowerForelegBody, b2, 0)

    this.lowerHindlegBody = this.createPolygonBody(
      this.kneeInitPt,
      lowerLegPts,
      world,
      b2,
      2
    )
    this.addFoot(this.lowerHindlegBody, b2, 1)

    this.joints = []
    // shoulder
    this.addJoint(
      this.chassisBody,
      this.upperForelegBody,
      this.shoulderInitPt,
      upperLegLimits,
      upperLegMaxTorque,
      world,
      b2
    )
    // hip
    this.addJoint(
      this.chassisBody,
      this.upperHindlegBody,
      this.hipInitPt,
      upperLegLimits,
      upperLegMaxTorque,
      world,
      b2
    )
    // elbow
    this.addJoint(
      this.upperForelegBody,
      this.lowerForelegBody,
      this.elbowInitPt,
      lowerLegLimits,
      lowerLegMaxTorque,
      world,
      b2
    )
    // knee
    this.addJoint(
      this.upperHindlegBody,
      this.lowerHindlegBody,
      this.kneeInitPt,
      lowerLegLimits,
      lowerLegMaxTorque,
      world,
      b2
    )

    this.prevXVel = 0
    this.prevYVel = 0
    this.prevAngVel = 0

    this.chassisVelX = 0

    this.xMax = 0
    this.prevXVels = new Float32Array(rollingWindow)
    this.rollingXVelMax = 0

    this.motorSpeeds = new Float32Array(4).fill(0)
    // this.motorSpeedsPrev = new Float32Array(4).fill(0)
    this.motorSpeedSums = new Float32Array(4).fill(0)

    this.clippedOutputSqSums = new Float32Array(4).fill(0)
    this.clippedSpeedSqSums = new Float32Array(4).fill(0)

    this.jointSpeedMins = new Float32Array(4).fill(JOINT_SPEED_INIT)
    this.jointSpeedMaxs = new Float32Array(4).fill(-JOINT_SPEED_INIT)

    this.currentJointSpeeds = new Float32Array(4).fill(0)
    this.prevJointSpeeds = new Float32Array(4 * rollingWindow).fill(0)
    this.rollingJointSpeeds = new Float32Array(4).fill(0)
    this.prevRollingJointSpeeds = new Float32Array(4).fill(0)
    this.rollingJointSpeedAbsSums = new Float32Array(4).fill(0)
    this.rollingJointSpeedSqSums = new Float32Array(4).fill(0)
    this.rollingJointSpeedAbsDiffSums = new Float32Array(4).fill(0)
    this.rollingJointSpeedSqDiffSums = new Float32Array(4).fill(0)
    this.jointSpeedSqDiffs = new Float32Array(4).fill(0)

    this.jointSpeedSqSums = new Float32Array(4).fill(0)
    this.jointReactionTorqueSqSums = new Float32Array(4).fill(0)
    this.jointReactionForceXSqSums = new Float32Array(4).fill(0)
    this.jointReactionForceYSqSums = new Float32Array(4).fill(0)

    this.jointMotorSpeedDiffSqSums = new Float32Array(4).fill(0)

    this.footNormalImpulses = new Float32Array(2).fill(0)
    this.footTangentImpulses = new Float32Array(2).fill(0)

    // this.motorSpeedsSqDistSum = 0

    this.jointAngleHistograms = []
    this.jointAngleMins = new Float32Array(4)
    this.jointAngleBinWidths = new Float32Array(4)
    for (let i = 0; i < 4; i++) {
      this.jointAngleHistograms[i] = new Uint16Array(nJointAngleBins)
      const joint = this.joints[i],
        angleMin = joint.GetLowerLimit(),
        angleMax = joint.GetUpperLimit(),
        binWidth = (angleMax - angleMin) / nJointAngleBins
      this.jointAngleMins[i] = angleMin
      this.jointAngleBinWidths[i] = binWidth
    }

    this.inputDim = this.getInputs().length
    this.shapes = [this.inputDim, 16, 8, 4]
    // this.n_dim = 0
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

    // this.setWts(undefined)
    // initialize drawInfo
    this.chassisPos = shoulderPos.slice()
    this.chassisAngle = 0
    this.shoulderAngle = 0
    this.hipAngle = 0
    this.elbowAngle = 0
    this.kneeAngle = 0

    this.drawHistory = new Float32Array(epLen * this.drawInfo.length)

    this.scoreKeys = [
      "xMax",
      "angVelSqSum",
      "angVelAbsSum",
      // "bumpSum",
      "chassisAngleErr",
      "chassisAngleSqErr",
      // "histogramScores",
      "motorSpeedSqSum",
      "motorSpeedDiffSqSum",
      "ySqDiffSum",
      "yVelSqSum",
      "motorSpeedsSqDistSum",
      "xVelDiffSqSum",
      "yVelDiffSqSum",
      "angVelDiffAbsSum",
      "angVelDiffSqSum",
      "rollingXVelMax",
      "chassisVelXSqErrSum",
      "rollingVelXSqErrSum",
      "footTangentImpulseSum",
      "footNormalImpulseAbsSum",
      "nonFootNormalImpulseAbsSum",
    ]

    this.reset(b2)
  }

  get drawInfo() {
    return Float32Array.from([
      this.chassisPos[0],
      this.chassisPos[1],
      this.chassisAngle,
      this.shoulderAngle,
      this.hipAngle,
      this.elbowAngle,
      this.kneeAngle,
    ])
  }

  createPolygonBody(pos, pts, world, b2, density) {
    const vertices = []
    for (let i = 0; i < pts.length; i += 2) {
      vertices.push(new b2.b2Vec2(-pts[i], -pts[i + 1]))
    }
    const bd = new b2.b2BodyDef()
    bd.set_type(b2.b2_dynamicBody)
    bd.set_position(new b2.b2Vec2(...pos))
    bd.set_linearDamping(0.1)
    bd.set_angularDamping(0.1)
    const body = world.CreateBody(bd)
    const shape = b2CreatePolygonShape(vertices, b2)
    const fd = new b2.b2FixtureDef()
    const filter = fd.get_filter()
    filter.set_categoryBits(0x0002)
    filter.set_maskBits(0x0001)
    fd.set_filter(filter)
    fd.set_density(density)
    fd.set_shape(shape)
    fd.set_friction(0.3)
    fd.set_restitution(0.1)
    // if (returnFixture) {
    const fixture = b2.castObject(body.CreateFixture(fd), b2.b2Fixture)
    fixture.partType = "poly"
    // fixture.bumpPenalty = bumpPenalty
    fixture.spot = this
    // if (fragileFixture) {
    //   this.fragileFixtures.push(fixture)
    // }
    //   return [body, fixture]
    // } else {
    // body.CreateFixture(fd)
    return body
    // }
  }

  addFoot(body, b2, footID) {
    const shape = new b2.b2CircleShape()
    shape.set_m_radius(footRadius)
    shape.set_m_p(new b2.b2Vec2(...anklePt))
    const fd = new b2.b2FixtureDef()
    fd.set_shape(shape)
    fd.set_density(1.0)
    fd.set_friction(0.5)
    fd.set_restitution(0.1)

    const filter = fd.get_filter()
    filter.set_categoryBits(0x0002)
    filter.set_maskBits(0x0001)
    fd.set_filter(filter)
    // body.CreateFixture(fd)
    const fixture = b2.castObject(body.CreateFixture(fd), b2.b2Fixture)
    fixture.partType = "foot"
    fixture.footID = footID
    // fixture.bumpPenalty = 0.1
    fixture.spot = this
  }

  addJoint(body0, body1, pos, limits, maxTorque, world, b2) {
    const jd = new b2.b2RevoluteJointDef()
    jd.Initialize(body0, body1, new b2.b2Vec2(...pos))
    if (limits != null) {
      jd.set_enableLimit(true)
      jd.set_lowerAngle(limits[0])
      jd.set_upperAngle(limits[1])
    }
    if (maxTorque != null) {
      jd.set_enableMotor(true)
      jd.set_maxMotorTorque(maxTorque)
    }
    this.joints.push(b2.castObject(world.CreateJoint(jd), b2.b2RevoluteJoint))
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
    // this.dead = false
    for (let key of this.scoreKeys) {
      this[key] = 0
    }
    this.motorSpeeds.fill(0)
    // this.motorSpeedsPrev.fill(0)
    this.motorSpeedSums.fill(0)
    this.clippedOutputSqSums.fill(0)
    this.clippedSpeedSqSums.fill(0)
    this.prevJointSpeeds.fill(0)

    this.currentJointSpeeds.fill(0)
    this.rollingJointSpeeds.fill(0)
    this.prevRollingJointSpeeds.fill(0)

    this.rollingJointSpeedAbsSums.fill(0)
    this.rollingJointSpeedSqSums.fill(0)
    this.rollingJointSpeedAbsDiffSums.fill(0)
    this.rollingJointSpeedSqDiffSums.fill(0)

    this.jointSpeedSqDiffs.fill(0)

    this.prevXVels.fill(0)
    this.jointSpeedMins.fill(JOINT_SPEED_INIT)
    this.jointSpeedMaxs.fill(-JOINT_SPEED_INIT)
    this.jointSpeedSqSums.fill(0)
    this.jointMotorSpeedDiffSqSums.fill(0)
    this.jointReactionTorqueSqSums.fill(0)
    this.jointReactionForceXSqSums.fill(0)
    this.jointReactionForceYSqSums.fill(0)
    this.prevXVel = 0
    this.prevYVel = 0
    this.prevAngVel = 0

    this.footNormalImpulses.fill(0)
    this.footTangentImpulses.fill(0)
    // this.ySqDiffSum = 0
    // this.yVelSqSum = 0
    // this.chassisAngleErr = 0
    // this.chassisAngleSqErr = 0
    // this.angVelSqSum = 0
    // this.motorSpeedSqSum = 0
    // this.motorSpeedDiffSqSum = 0

    for (let i = 0; i < 4; i++) {
      this.jointAngleHistograms[i].fill(0)
    }

    for (let [body, pos] of [
      [this.chassisBody, this.shoulderInitPt],
      [this.upperForelegBody, this.shoulderInitPt],
      [this.lowerForelegBody, this.elbowInitPt],
      [this.upperHindlegBody, this.hipInitPt],
      [this.lowerHindlegBody, this.kneeInitPt],
    ]) {
      // sets position and angle (0)
      body.SetTransform(new b2.b2Vec2(...pos), 0)
      body.SetLinearVelocity(new b2.b2Vec2(0, 0))
      body.SetAngularVelocity(0)
      body.SetAwake(1)
      body.SetEnabled(1)
    }
    // this.bumpPenalty = 0
    // this.bumpSum = 0
  }

  sleep() {
    for (let body of [
      this.chassisBody,
      this.upperForelegBody,
      this.lowerForelegBody,
      this.upperHindlegBody,
      this.lowerHindlegBody,
    ]) {
      body.SetAwake(0)
      // body.SetEnabled(0)
    }
  }

  updateJointAngleHistogram(angle, hist, angleMin, binWidth) {
    // this.jointAngleHistograms
    // this.jointAngleMins
    // this.jointAngleBinWidths
    let binIdx = Math.floor((angle - angleMin) / binWidth)
    binIdx = Math.max(Math.min(binIdx, nJointAngleBins - 1), 0)
    hist[binIdx]++
  }

  getInputs() {
    let inputs
    if (this.inputDim != null) {
      inputs = new Float32Array(this.inputDim)
    } else {
      inputs = []
    }

    const body = this.chassisBody
    let i = 0
    const bodyPos = body.GetPosition()
    const [x, y] = [bodyPos.x, bodyPos.y]
    if (x > this.xMax) {
      this.xMax = x
    }
    this.chassisPos = [x, y]
    const yDiff = y - shoulderHMeters
    this.ySqDiffSum += yDiff * yDiff
    inputs[i] = y - shoulderHMeters
    i++
    const chassisAngle = body.GetAngle()
    this.chassisAngle = chassisAngle
    this.chassisAngleErr += chassisAngle
    this.chassisAngleSqErr += chassisAngle * chassisAngle
    inputs[i] = chassisAngle
    i++
    // inputs[i] = Math.cos(chassisAngle)
    // i++
    // inputs[i] = Math.sin(chassisAngle)
    // i++
    const chassisVel = body.GetLinearVelocity(),
      chassisVelX = chassisVel.x,
      chassisVelY = chassisVel.y

    inputs[i] = chassisVelX
    i++
    inputs[i] = chassisVelY
    i++
    inputs[i] = chassisVelX - this.prevXVel
    i++
    inputs[i] = chassisVelY - this.prevYVel
    i++

    for (let windowIdx = 0; windowIdx < rollingWindow - 1; windowIdx++) {
      this.prevXVels[windowIdx] = this.prevXVels[windowIdx + 1]
    }
    this.prevXVels[rollingWindow - 1] = chassisVelX
    let rollingVelX = 0
    for (let windowIdx = 0; windowIdx < rollingWindow; windowIdx++) {
      rollingVelX += this.prevXVels[windowIdx]
    }
    rollingVelX /= rollingWindow
    if (this.rollingXVelMax < rollingVelX) {
      this.rollingXVelMax = rollingVelX
    }
    const velXErr = chassisVelX - targetVelX,
      rollingVelXErr = rollingVelX - targetVelX
    this.chassisVelXSqErrSum += velXErr * velXErr
    this.rollingVelXSqErrSum += rollingVelXErr * rollingVelXErr
    this.yVelSqSum += chassisVelY * chassisVelY
    const xVelDiff = chassisVelX - this.prevXVel,
      yVelDiff = chassisVelY - this.prevYVel
    this.xVelDiffSqSum += xVelDiff * xVelDiff
    this.yVelDiffSqSum += yVelDiff * yVelDiff
    this.prevXVel = chassisVelX
    this.prevYVel = chassisVelY

    const angVel = body.GetAngularVelocity(),
      angVelDiff = angVel - this.prevAngVel
    inputs[i] = angVel
    i++
    inputs[i] = angVelDiff
    i++
    this.angVelDiffSqSum += angVelDiff * angVelDiff
    this.angVelDiffAbsSum += Math.abs(angVelDiff)
    this.prevAngVel = angVel

    this.angVelSqSum += angVel * angVel
    this.angVelAbsSum += Math.abs(angVel)

    for (let footIdx = 0; footIdx < 2; footIdx++) {
      const footNormalImpulse = this.footNormalImpulses[footIdx]
      inputs[i] = footNormalImpulse
      i++
      const footTangentImpulse = this.footTangentImpulses[footIdx]
      inputs[i] = footTangentImpulse
      i++
    }

    const jointAngleKeys = [
      "shoulderAngle",
      "hipAngle",
      "elbowAngle",
      "kneeAngle",
    ]
    for (let jointIdx = 0; jointIdx < 4; jointIdx++) {
      const joint = this.joints[jointIdx]
      const jointAngle = joint.GetJointAngle()
      this.updateJointAngleHistogram(
        jointAngle,
        this.jointAngleHistograms[jointIdx],
        this.jointAngleMins[jointIdx],
        this.jointAngleBinWidths[jointIdx]
      )
      this[jointAngleKeys[jointIdx]] = jointAngle
      inputs[i] = jointAngle
      i++
      const jointSpeed = joint.GetJointSpeed(),
        jointWindowIdx = jointIdx * rollingWindow
      this.currentJointSpeeds[jointIdx] = jointSpeed
      // update rolling joint speed record
      for (let windowIdx = 0; windowIdx < rollingWindow - 1; windowIdx++) {
        this.prevJointSpeeds[jointWindowIdx + windowIdx] =
          this.prevJointSpeeds[jointWindowIdx + windowIdx + 1]
      }
      this.prevJointSpeeds[jointWindowIdx + rollingWindow - 1] = jointSpeed
      this.rollingJointSpeeds[jointIdx] = 0
      for (let windowIdx = 0; windowIdx < rollingWindow; windowIdx++) {
        this.rollingJointSpeeds[jointIdx] +=
          this.prevJointSpeeds[jointWindowIdx + windowIdx]
      }
      this.rollingJointSpeeds[jointIdx] /= rollingWindow

      this.rollingJointSpeedAbsSums[jointIdx] += Math.abs(
        this.rollingJointSpeeds[jointIdx]
      )
      this.rollingJointSpeedSqSums[jointIdx] +=
        this.rollingJointSpeeds[jointIdx] * this.rollingJointSpeeds[jointIdx]
      const rollingJointSpeedDiff =
        this.rollingJointSpeeds[jointIdx] -
        this.prevRollingJointSpeeds[jointIdx]
      this.rollingJointSpeedAbsDiffSums[jointIdx] += Math.abs(
        rollingJointSpeedDiff
      )
      this.rollingJointSpeedSqDiffSums[jointIdx] +=
        rollingJointSpeedDiff * rollingJointSpeedDiff
      this.prevRollingJointSpeeds[jointIdx] = this.rollingJointSpeeds[jointIdx]

      const jointSpeedDiff =
        jointSpeed - this.prevJointSpeeds[jointWindowIdx + rollingWindow - 2]
      inputs[i] = jointSpeed
      i++
      inputs[i] = jointSpeedDiff
      i++
      this.jointSpeedSqDiffs[jointIdx] += jointSpeedDiff * jointSpeedDiff
      if (this.jointSpeedMins[jointIdx] > jointSpeed) {
        this.jointSpeedMins[jointIdx] = jointSpeed
      }
      if (this.jointSpeedMaxs[jointIdx] < jointSpeed) {
        this.jointSpeedMaxs[jointIdx] = jointSpeed
      }
      this.jointSpeedSqSums[jointIdx] += jointSpeed * jointSpeed
      // inputs[i] = this.motorSpeeds[jointIdx] / maxSpeed
      inputs[i] = this.motorSpeeds[jointIdx]
      i++
      const motorSpeed = joint.GetMotorSpeed()
      const jointMotorSpeedDiff = jointSpeed - motorSpeed
      this.jointMotorSpeedDiffSqSums[jointIdx] +=
        jointMotorSpeedDiff * jointMotorSpeedDiff
      const reactionTorque = joint.GetReactionTorque(60)
      this.jointReactionTorqueSqSums[jointIdx] +=
        reactionTorque * reactionTorque
      const reactionForces = joint.GetReactionForce(60),
        reactionForceX = reactionForces.x,
        reactionForceY = reactionForces.y
      this.jointReactionForceXSqSums[jointIdx] +=
        reactionForceX * reactionForceX
      this.jointReactionForceYSqSums[jointIdx] +=
        reactionForceY * reactionForceY
      inputs[i] = reactionForceX
      i++
      inputs[i] = reactionForceY
      i++
      inputs[i] = reactionTorque
      i++
    }
    return inputs
  }

  getMotorSpeeds() {
    const inputsRaw = this.getInputs(),
      inputs = new Matrix(inputsRaw, 1, inputsRaw.length)
    const speedDiffs = inputs
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
      .add(this.biases[2]).data
    // for (let i = 0; i < speedDiffs.length; i++) {
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
    for (let i = 0; i < speedDiffs.length; i++) {
      speedDiffs[i] = maxSpeedDiff * Math.tanh(speedDiffs[i])
    }
    // for (let i = 0; i < speeds.length; i++) {
    //   speeds[i] = maxSpeed * Math.tanh(speeds[i])
    // }
    return speedDiffs
  }

  update(step) {
    const speedDiffs = this.getMotorSpeeds()
    // const speeds = this.getMotorSpeeds()
    for (let i = 0; i < 4; i++) {
      // let speed = this.currentJointSpeeds[i] + speedDiffs[i]
      let speed = this.motorSpeeds[i] + speedDiffs[i]
      if (speed > maxSpeed) {
        const clippedSpeed = maxSpeed - speed
        this.clippedSpeedSqSums[i] += clippedSpeed * clippedSpeed
        speed = maxSpeed
      } else if (speed < -maxSpeed) {
        const clippedSpeed = -maxSpeed - speed
        this.clippedSpeedSqSums[i] += clippedSpeed * clippedSpeed
        speed = -maxSpeed
      }
      // const speed = speeds[i]
      this.motorSpeeds[i] = speed
      this.joints[i].SetMotorSpeed(speed)
      this.motorSpeedSums[i] += speed
      this.motorSpeedSqSum += speed * speed
      // const speedDiffClipped = this.motorSpeeds[i] - this.motorSpeedsPrev[i]
      // this.motorSpeedDiffSqSum += speedDiffClipped * speedDiffClipped
      // this.motorSpeedsPrev[i] = this.motorSpeeds[i]
    }
    // this.motorSpeedsSqDistSum += this.motorSpeedsSqDist

    const drawInfo = this.drawInfo.slice()
    for (let i = 0; i < drawInfo.length; i++) {
      this.drawHistory[step * drawInfo.length + i] = drawInfo[i]
    }
    this.footNormalImpulses.fill(0)
    this.footTangentImpulses.fill(0)
  }

  // get motorSpeedsSqDist() {
  //   const sortedSpeeds = this.motorSpeeds.slice()
  //   sortedSpeeds.sort((a, b) => a - b)
  //   let sqDist = 0
  //   for (let i = 0; i < 3; i++) {
  //     const dist = sortedSpeeds[i] - sortedSpeeds[i + 1]
  //     sqDist += dist * dist
  //   }
  //   return sqDist
  // }

  get histogramScore() {
    const histogramScores = this.histogramScores.slice()
    let totalSqErr = 0
    for (let i = 0; i < 4; i++) {
      const jointSqErr = histogramScores[i]
      totalSqErr += jointSqErr * jointSqErr
    }
    return totalSqErr / 4
  }

  get histogramScores() {
    const result = new Float32Array(4)
    for (let i = 0; i < 4; i++) {
      const hist = this.jointAngleHistograms[i]
      let jointSqErr = 0
      for (let j = 0; j < nJointAngleBins; j++) {
        const binCount = hist[j],
          binCountErr =
            (binCount - uniformDistBinCount) / (epLen - uniformDistBinCount)
        jointSqErr += binCountErr * binCountErr
      }
      result[i] = jointSqErr
    }
    return result
  }

  get scoreInfo() {
    const scoreInfo = {
      finalX: this.chassisPos[0],
    }
    // "angVelSqSum",
    // "bumpSum",
    // "chassisAngleErr",
    // "chassisAngleSqErr",
    // "histogramScore",
    // "motorSpeedSqSum",
    // "motorSpeedDiffSqSum",
    // "ySqDiffSum",
    // "yVelSqSum",
    for (let key of this.scoreKeys) {
      scoreInfo[key] = this[key]
    }

    scoreInfo["weightNorms"] = vectorNorms(this.weights)
    scoreInfo["biasNorms"] = vectorNorms(this.biases)
    scoreInfo["histogramScores"] = this.histogramScores
    scoreInfo["motorSpeedSums"] = this.motorSpeedSums
    scoreInfo["jointSpeedMins"] = this.jointSpeedMins
    scoreInfo["jointSpeedMaxs"] = this.jointSpeedMaxs
    scoreInfo["jointSpeedSqSums"] = this.jointSpeedSqSums
    scoreInfo["jointMotorSpeedDiffSqSums"] = this.jointMotorSpeedDiffSqSums
    scoreInfo["jointReactionTorqueSqSums"] = this.jointReactionTorqueSqSums
    scoreInfo["jointReactionForceXSqSums"] = this.jointReactionForceXSqSums
    scoreInfo["jointReactionForceYSqSums"] = this.jointReactionForceYSqSums

    scoreInfo["rollingJointSpeedAbsSums"] = this.rollingJointSpeedAbsSums
    scoreInfo["rollingJointSpeedSqSums"] = this.rollingJointSpeedSqSums
    scoreInfo["rollingJointSpeedAbsDiffSums"] =
      this.rollingJointSpeedAbsDiffSums
    scoreInfo["rollingJointSpeedSqDiffSums"] = this.rollingJointSpeedSqDiffSums

    scoreInfo["jointSpeedSqDiffs"] = this.jointSpeedSqDiffs
    scoreInfo["clippedOutputSqSums"] = this.clippedOutputSqSums
    scoreInfo["clippedSpeedSqSums"] = this.clippedSpeedSqSums

    return scoreInfo
  }
}

function b2CreatePolygonShape(vertices, b2) {
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
    result[i] /= vector.length
  }
  return result
}
