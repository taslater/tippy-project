// importScripts("../Box2D-js/Box2D_v2.3.1_min.js", "../globals.js", "../tippy.js")

import Box2DFactory from "box2d-wasm/dist/es/Box2D"
import { globals } from "./../globals.js"
import { Population } from "./../tippy.js"

let population = null

onmessage = (e) => {
  const [info, msg] = e.data
  if (info == "terrainPts") {
    Box2DFactory().then((b2) => {
      population = new Population([0, 0], 1, msg, b2)
    })
  } else if (info == "targetsSolutions") {
    const solutionsScores = population.train(msg)
    postMessage(["solutionsScores", solutionsScores])
  }
}
