import style from "./main.css"
import component from "./component.js"

document.body.append(component())

import("@dimforge/rapier2d").then((RAPIER) => {
  // Use the RAPIER module here.
  let gravity = { x: 0.0, y: -9.81 }
  let world = new RAPIER.World(gravity)

  // Create the ground
  let groundColliderDesc = RAPIER.ColliderDesc.cuboid(10.0, 0.1)
  world.createCollider(groundColliderDesc)

  // Create a dynamic rigid-body.
  let rigidBodyDesc = RAPIER.RigidBodyDesc.newDynamic().setTranslation(0.0, 1.0)
  let rigidBody = world.createRigidBody(rigidBodyDesc)

  // Create a cuboid collider attached to the dynamic rigidBody.
  let colliderDesc = RAPIER.ColliderDesc.cuboid(0.5, 0.5)
  let collider = world.createCollider(colliderDesc, rigidBody.handle)

  let step = 0
  // Game loop. Replace by your own game loop system.
  let gameLoop = () => {
    // Ste the simulation forward.
    world.step()

    // Get and print the rigid-body's position.
    let position = rigidBody.translation()
    console.log("Rigid-body position: ", position.x, position.y)

    step++
    if (step < 20) {
      setTimeout(gameLoop, 16)
    }
  }

  gameLoop()
})
