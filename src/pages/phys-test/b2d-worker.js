import Box2DFactory from "box2d-wasm/dist/es/Box2D"

let b2
Box2DFactory().then((box2D) => {
  b2 = box2D
  const gravity = new b2.b2Vec2(0, 9.81),
    world = new b2.b2World(gravity)
  // finished downloading Box2D.wasm
  console.log(world)
})
