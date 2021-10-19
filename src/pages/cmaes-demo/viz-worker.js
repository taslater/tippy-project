import { objFns } from "./obj-fns.js"
import { canvasDim, nVizWorkers, objFnInit } from "./globals.js"
import { scoreToTurboRGB } from "./matlab_turbo_colormap.js"

let myID,
  centerX = 0,
  centerY = 0,
  zoom = 1,
  objFn,
  objFnLim,
  minScoreGlobal,
  maxScoreGlobal,
  viewX0,
  viewY0,
  viewStep

const imageDataArray = new Uint8ClampedArray(
    (3 * canvasDim * canvasDim) / nVizWorkers
  ),
  scores = new Float32Array((canvasDim * canvasDim) / nVizWorkers)

// 1. which worker am i?
// 2. which objective function?
// 3. what are the view limits?

onmessage = (e) => {
  const [info, msg] = e.data
  if (info === "workerID") {
    myID = msg
    // init()
    updateObjFn(objFnInit)
    updateScores()
  } else if (info === "zoom") {
    zoom = msg
    updateEvalLims()
    updateScores()
  } else if (info === "center") {
    centerX = msg[0]
    centerY = msg[1]
    console.log(centerX, centerY)
  } else if (info === "fnName") {
    zoom = 1
    updateObjFn(msg)
    updateScores()
  } else if (info === "scoreLims") {
    minScoreGlobal = msg[0]
    maxScoreGlobal = msg[1]
    postImageData()
  }
}

function updateObjFn(objFnName) {
  objFn = objFns[objFnName]
  objFnLim = objFn.xyLim
  updateEvalLims()
}

function updateEvalLims() {
  const viewLimHalf = objFnLim / zoom
  viewX0 = centerX - viewLimHalf
  viewStep = (2 * viewLimHalf) / (canvasDim - 1)
  viewY0 = centerY - viewLimHalf + (myID * canvasDim * viewStep) / nVizWorkers
}

function updateScores() {
  let minScore = Infinity,
    maxScore = -Infinity,
    scoreIdx = 0
  for (let yIdx = 0; yIdx < canvasDim / nVizWorkers; yIdx++) {
    const y = viewY0 + yIdx * viewStep
    for (let xIdx = 0; xIdx < canvasDim; xIdx++) {
      const x = viewX0 + xIdx * viewStep
      const score = objFn([x, y])
      if (score < minScore) {
        minScore = score
      }
      if (score > maxScore) {
        maxScore = score
      }
      scores[scoreIdx] = score
      scoreIdx++
    }
  }
  postMessage(["scoreLims", [minScore, maxScore]])
}

function postImageData() {
  let arrayIdx = 0
  const scoreRangeInv = 1 / (maxScoreGlobal - minScoreGlobal)
  for (let score of scores) {
    const rgb = scoreToTurboRGB((score - minScoreGlobal) * scoreRangeInv)
    for (let rgbIdx = 0; rgbIdx < 3; rgbIdx++) {
      imageDataArray[arrayIdx + rgbIdx] = rgb[rgbIdx]
    }
    arrayIdx += 3
  }
  postMessage(["imageDataArray", imageDataArray])
}

// function init() {
//   updateObjFn(objFnInit)
//   updateScores()
// }
