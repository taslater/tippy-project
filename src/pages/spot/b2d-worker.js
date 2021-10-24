import Box2DFactory from "box2d-wasm/dist/es/Box2D"
import { Spot } from "./spot.js"

import {
  b2GroundW,
  b2GroundH,
  shoulderHMeters,
  nWorkers,
  epLen,
  popsizeMultiplier,
  ts,
} from "./globals.js"

let creaturesPerWorker,
  // step,
  population,
  world,
  b2,
  simpleScore = false

onmessage = (e) => {
  const [info, msg] = e.data
  if (info == "start") {
    init()
  } else if (info == "solutions") {
    population.setWts(msg)
    main()
  } else if (info == "simpleScore") {
    simpleScore = msg
    console.log("simpleScore", simpleScore)
  } else if (info == "sendHistory") {
    const creatureIdx = msg["creatureIdx"],
      rank = msg["rank"]
    postMessage([
      "drawHistory",
      { history: population.spots[creatureIdx].drawHistory, rank },
    ])
  }
}

function init() {
  console.log("init")
  Box2DFactory().then((b2D) => {
    b2 = b2D
    // finished downloading Box2D.wasm
    const gravity = new b2.b2Vec2(0, 9.81)
    world = new b2.b2World(gravity)

    population = new Population([0, shoulderHMeters], 1, world, b2)
    const ground = world.CreateBody(new b2.b2BodyDef())

    const groundShape = new b2.b2EdgeShape()
    groundShape.SetTwoSided(
      new b2.b2Vec2(-0.1 * b2GroundW, b2GroundH),
      new b2.b2Vec2(0.9 * b2GroundW, b2GroundH)
    )
    const groundFD = new b2.b2FixtureDef()
    groundFD.set_shape(groundShape)
    groundFD.set_friction(0.5)
    groundFD.set_restitution(0.5)
    const groundFixture = b2.castObject(
      ground.CreateFixture(groundFD),
      b2.b2Fixture
    )

    const spot = population.spots[0],
      n_dim = spot.n_dim,
      weightCount = spot.weightCount,
      biasCount = spot.biasCount
    creaturesPerWorker = getCreaturesPerWorker(n_dim, popsizeMultiplier)
    postMessage([
      "initInfo",
      { creaturesPerWorker, n_dim, weightCount, biasCount },
    ])
    population.addSpots(creaturesPerWorker - 1, b2)

    const contactListener = new b2.JSContactListener()

    contactListener.BeginContact = (contact) => {}
    contactListener.PreSolve = (contact) => {}
    contactListener.PostSolve = (contact, contactImpulse) => {
      contact = b2.wrapPointer(contact, b2.b2Contact)
      const fixtures = [contact.GetFixtureA(), contact.GetFixtureB()]
      let nonGroundFixture = null
      if (fixtures[0] == groundFixture) {
        nonGroundFixture = fixtures[1]
      } else if (fixtures[1] == groundFixture) {
        nonGroundFixture = fixtures[0]
      }
      let foot = nonGroundFixture.partType == "foot"

      contactImpulse = b2.wrapPointer(contactImpulse, b2.b2ContactImpulse)
      const spot = nonGroundFixture.spot
      let tangentImpulse = contactImpulse.tangentImpulses,
        normalImpulse = contactImpulse.normalImpulses
      // if (normalImpulse < 0) {
      //   console.error("negative impulse")
      //   tangentImpulse *= -1
      //   normalImpulse *= -1
      // }
      if (foot) {
        spot.footNormalImpulses[nonGroundFixture.footID] = normalImpulse
        spot.footTangentImpulses[nonGroundFixture.footID] = tangentImpulse
        spot.footTangentImpulseSum += tangentImpulse
        spot.footNormalImpulseAbsSum += normalImpulse
      } else {
        spot.nonFootNormalImpulseAbsSum += normalImpulse
      }
    }
    contactListener.EndContact = (contact) => {}

    world.SetContactListener(contactListener)
  })
}

function main() {
  // step = 0
  population.reset(b2)
  population.update(0)

  for (let i = 1; i < epLen; i++) {
    world.Step(ts, 16, 6)
    population.update(i)
  }
  const scoreSolutionInfo = []
  for (let spot of population.spots) {
    const scoreInfo = spot.scoreInfo
    scoreInfo["solution"] = spot.flatWts.slice()
    scoreSolutionInfo.push(scoreInfo)
  }
  postMessage(["scoreSolutionInfo", scoreSolutionInfo])
}

class Population {
  constructor(shoulderPos, nSpots, world, b2) {
    this.shoulderPos = shoulderPos.slice()
    this.world = world
    this.spots = []
    for (let i = 0; i < nSpots; i++) {
      this.spots.push(new Spot(this.shoulderPos, world, b2))
    }
    this.n_dim = this.spots[0].n_dim
  }

  reset(b2) {
    for (let spot of this.spots) {
      spot.reset(b2)
    }
  }

  addSpots(nSpots, b2) {
    for (let i = 0; i < nSpots; i++) {
      this.spots.push(new Spot(this.shoulderPos, world, b2))
    }
  }

  setWts(flatWts) {
    let flatWtsIdx = 0
    for (let i = 0; i < this.spots.length; i++) {
      this.spots[i].setWts(flatWts.slice(flatWtsIdx, flatWtsIdx + this.n_dim))
      flatWtsIdx += this.n_dim
    }
  }

  update(step) {
    // (chassis x,y + chassis angle + 4 joint angles) * popLen + 1 step count
    // const msg = new Float32Array(7 * creaturesPerWorker + 1)
    for (let i = 0; i < creaturesPerWorker; i++) {
      const spot = this.spots[i]
      spot.update(step)
      // const positions = spot.drawInfo
      // for (let j = 0; j < positions.length; j++) {
      //   msg[i * positions.length + j] = positions[j]
      // }
    }
    // msg[msg.length - 1] = step
    // step++
    // postMessage(["positions", msg])
  }
}

function getCreaturesPerWorker(n_dim, multiplier) {
  return Math.ceil(
    (4 + Math.floor(3 * Math.log(n_dim))) * (multiplier / nWorkers)
  ) // (eq. 48)
}
