export class Tippy {
  constructor(wheelPosInit, world, b2) {
    // this.population = population
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

  reset(b2) {
    this.chassisBody.SetTransform(new b2.b2Vec2(...this.chassisPosInit), 0)
    this.chassisBody.SetLinearVelocity(new b2.b2Vec2(0, 0))
    this.chassisBody.SetAngularVelocity(0)
    this.chassisBody.SetAwake(1)

    this.wheelBody.SetTransform(new b2.b2Vec2(...this.wheelPosInit), 0)
    this.wheelBody.SetLinearVelocity(new b2.b2Vec2(0, 0))
    this.wheelBody.SetAngularVelocity(0)
    this.wheelBody.SetAwake(1)
  }

  setSpeed(speed) {
    this.axle.SetMotorSpeed(speed)
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
}
