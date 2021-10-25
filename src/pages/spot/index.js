require("../../main.scss")
require("./index.css")

import {
  w,
  h,
  markerH,
  canvasGroundH,
  cameraOffset,
  cameraInitY,
  nWorkers,
  epLen,
  metersToPixels,
  displayCreatureCount,
  // canvasGroundH,
} from "./globals.js"
import { drawSpot } from "./draw.js"
import _ from "lodash"

let creaturesPerWorker,
  scoreSolutionInfos = [],
  scoresReceived = 0,
  historiesReceived = 0,
  currentHistory = 0,
  nextHistory = 1,
  looping = false

const simulationWorkers = [],
  drawHistories = [
    new Float32Array(displayCreatureCount * epLen * 7),
    new Float32Array(displayCreatureCount * epLen * 7),
  ]
// workerHistory = new Int8Array(epLen).fill(0),

const canvasFG = document.getElementById("canvas-fg"),
  ctxFG = canvasFG.getContext("2d"),
  canvasBG = document.getElementById("canvas-bg"),
  ctxBG = canvasBG.getContext("2d"),
  canvasMarkers = document.getElementById("canvas-markers"),
  ctxMarkers = canvasMarkers.getContext("2d"),
  canvasDiv = document.getElementById("canvas-div")

canvasDiv.setAttribute("style", `height:${h}px;`)
canvasFG.height = h
canvasBG.height = h
canvasMarkers.height = markerH
canvasMarkers.setAttribute("style", `top:${cameraInitY - markerH}px;`)

// canvasFG.width = w
// canvasBG.width = w
// canvasMarkers.width = w

function resizeDemoCanvas() {
  const newWidth = canvasDiv.offsetWidth
  canvasFG.width = newWidth
  canvasBG.width = newWidth
  canvasMarkers.width = newWidth

  ctxBG.fillStyle = "skyblue"
  ctxBG.fillRect(0, 0, newWidth, h)
  ctxBG.fillStyle = "green"
  ctxBG.fillRect(0, cameraInitY - 2, newWidth, canvasGroundH)
}
resizeDemoCanvas()
window.onresize = _.debounce(() => {
  resizeDemoCanvas()
}, 200)

// ctxBG.fillStyle = "skyblue"
// ctxBG.fillRect(0, 0, ctxBG.canvas.width, ctxBG.canvas.height)
// ctxBG.fillStyle = "green"
// ctxBG.fillRect(0, cameraInitY - 2, ctxBG.canvas.width, ctxBG.canvas.height)

const loadingMessageElement = document.getElementById("loading-message")
let nDots = 0

function setLoadingMessage() {
  const msgLen = loadingMessageElement.innerHTML.length,
    nDotsNext = (nDots + 1) % 4
  nDots = nDotsNext
  // console.log(`msg len: ${msgLen}`)
  loadingMessageElement.innerHTML = `Loading${".".repeat(nDotsNext)}`
}

const loadingMessageLoopId = setInterval(setLoadingMessage, 1000)

const cma_worker = new Worker(new URL("./cma-worker.js", import.meta.url))
let cmaInitialized = false

let stepsDisplayed = 0

for (let i = 0; i < nWorkers; i++) {
  const simulation_worker = new Worker(
    new URL("./b2d-worker.js", import.meta.url)
  )
  simulation_worker.onmessage = (e) => {
    const [info, msg] = e.data
    // if (info == "positions") {
    //   const step = msg[msg.length - 1]
    //   for (let j = 0; j < msg.length - 1; j++) {
    //     positionsHistory[(msg.length - 1) * (i + nWorkers * step) + j] = msg[j]
    //   }
    //   workerHistory[step]++
    //   if (workerHistory[step] > nWorkers) {
    //     workerHistory[step] -= nWorkers
    //   }
    //   // } else if (["solutionsScores", "scoreInfos"].includes(info)) {
    // } else
    if (info == "scoreSolutionInfo") {
      for (let j = 0; j < creaturesPerWorker; j++) {
        scoreSolutionInfos[i * creaturesPerWorker + j] = msg[j]
      }
      scoresReceived++
      if (scoresReceived == nWorkers) {
        processScores()
      }
    } else if (info == "initInfo" && !cmaInitialized) {
      creaturesPerWorker = msg.creaturesPerWorker
      console.log("wt count", msg.weightCount)
      console.log("bias count", msg.biasCount)
      // weightCount = msg.weightCount
      // biasCount = msg.biasCount
      // popsize = creaturesPerWorker * nWorkers
      //   n_dim = msg.n_dim
      cma_worker.postMessage(["initInfo", msg])
      // positionsHistory = new Float32Array(
      //   7 * creaturesPerWorker * nWorkers * epLen
      // )
      cmaInitialized = true
    } else if (info == "drawHistory") {
      const rank = msg.rank,
        history = msg.history
      saveHistory(history, rank)
      historiesReceived++
      if (historiesReceived == displayCreatureCount) {
        stepsDisplayed = 0
        swapHistory()
        historiesReceived = 0
        if (!looping) {
          looping = true
          clearInterval(loadingMessageLoopId)
          loadingMessageElement.innerHTML = ""
          requestAnimationFrame(loop)
        }
      }
    }
  }
  simulationWorkers.push(simulation_worker)
}

for (let worker of simulationWorkers) {
  worker.postMessage(["start"])
}

cma_worker.onmessage = (e) => {
  const [info, msg] = e.data
  if (info == "solutions") {
    const workerSolutionsLength = msg.length / nWorkers
    let solutionsIdx = 0
    for (let i = 0; i < nWorkers; i++) {
      const workerSolutions = msg.slice(
        solutionsIdx,
        solutionsIdx + workerSolutionsLength
      )
      simulationWorkers[i].postMessage(["solutions", workerSolutions])
      solutionsIdx += workerSolutionsLength
    }
  }
}

function loop() {
  ctxFG.clearRect(0, 0, ctxFG.canvas.width, ctxFG.canvas.height)
  const positionsLength = displayCreatureCount * 7,
    positionsHistory = drawHistories[currentHistory],
    positions = positionsHistory.slice(
      stepsDisplayed * positionsLength,
      (stepsDisplayed + 1) * positionsLength
    )

  const currentMaxX = positions[0]
  const cameraX = Math.round(
    -currentMaxX * metersToPixels - cameraOffset + canvasFG.width
  )

  ctxMarkers.clearRect(0, 0, ctxMarkers.canvas.width, ctxMarkers.canvas.height)
  const terrainX = cameraX % ctxMarkers.canvas.width
  for (let i = 0; i < 20; i++) {
    let currentX = (terrainX - 100 * i) % ctxMarkers.canvas.width
    if (currentX < 0) {
      currentX += ctxMarkers.canvas.width
    }
    ctxMarkers.beginPath()
    ctxMarkers.moveTo(currentX, 0)
    ctxMarkers.lineTo(currentX, ctxMarkers.canvas.height)
    ctxMarkers.stroke()
  }

  for (let i = displayCreatureCount - 1; i >= 0; i--) {
    const idx = i * 7
    drawSpot(cameraX, cameraInitY, ...positions.slice(idx, idx + 7), ctxFG)
  }

  stepsDisplayed++
  if (stepsDisplayed == epLen) {
    stepsDisplayed = 0
  }
  requestAnimationFrame(loop)
}

function getScore(scoreInfo) {
  // let score = spot.chassisVelXSqErrSum + spot.rollingVelXSqErrSum
  // let score = 1e3 * spot.footTangentImpulseSum
  // const finalX = scoreInfo["finalX"]
  // ,xMax = scoreInfo["xMax"]
  // // // // let score = -1e3 * Math.sign(finalX) * finalX * finalX
  // // // // score -= 1e3 * spot.xMax * spot.xMax
  // let score = -1e2 * finalX * finalX * finalX
  // score -= 1e2 * xMax * xMax * xMax
  let distSum = scoreInfo["finalX"] + scoreInfo["xMax"]
  distSum /= epLen
  // distSum *= 1e2
  let scoreDist = -Math.sign(distSum) * distSum * distSum
  scoreDist *= 1e5
  // let score = -1e2 * (finalX + xMax)
  let tangentImpulseSum = scoreInfo.footTangentImpulseSum
  tangentImpulseSum *= -1e-3 * tangentImpulseSum
  // // score -= 1e3 * tangentImpulseSum * tangentImpulseSum * tangentImpulseSum
  let footNormalImpulseSqSum = scoreInfo.footNormalImpulseAbsSum / epLen
  footNormalImpulseSqSum *= -1e3 * footNormalImpulseSqSum
  let nonFootNormalImpulseSqSum = scoreInfo.nonFootNormalImpulseAbsSum / epLen
  nonFootNormalImpulseSqSum *= 2e5 * nonFootNormalImpulseSqSum

  // score += 1.0 * scoreInfo.nonFootNormalImpulseAbsSum
  // let clippedOutputSums = 0,
  let clippedSpeedSums = 0
  let motorSpeedSumsSum = 0
  for (let i = 0; i < 4; i++) {
    // clippedOutputSums +=
    //   1e-12 *
    //   scoreInfo.clippedOutputSqSums[i] *
    //   scoreInfo.clippedOutputSqSums[i]
    let clippedSpeedMean = scoreInfo.clippedSpeedSqSums[i] / epLen
    clippedSpeedSums += clippedSpeedMean * clippedSpeedMean
    let motorSpeedSum = Math.abs(scoreInfo.motorSpeedSums[i]) / epLen
    motorSpeedSum *= motorSpeedSum
    motorSpeedSumsSum += motorSpeedSum
  }
  clippedSpeedSums *= 1e1
  motorSpeedSumsSum *= 1e-1

  // // // // // if (!simpleScore) {
  let chassisAngleErr = scoreInfo.chassisAngleErr / epLen
  chassisAngleErr *= 1.0 * chassisAngleErr
  // score += 1e-3 * spot.chassisAngleErr * spot.chassisAngleErr
  // let motorSpeedSq = scoreInfo["motorSpeedSqSum"] / epLen
  // motorSpeedSq *= 1e-3 * motorSpeedSq
  // score -= 1e1 * scoreInfo["motorSpeedDiffSqSum"]

  let chassisAngleSqErr = scoreInfo.chassisAngleSqErr / epLen
  chassisAngleSqErr *= 1.0
  // score += 1e-4 * spot.chassisAngleSqErr * spot.chassisAngleSqErr

  // // score += 1e-2 * spot.ySqDiffSum
  let ySqDiffSum = scoreInfo.ySqDiffSum
  ySqDiffSum *= 1e-3
  // score += 1e-6 * spot.ySqDiffSum * spot.ySqDiffSum
  // // // score += 1e-2 * spot.yVelSqSum
  let yVelSqSum = scoreInfo.yVelSqSum / epLen
  // yVelSqSum *= 1e2
  yVelSqSum *= -1e1
  // // score += 1e-2 * spot.yVelDiffSqSum
  // score += 1e-4 * spot.yVelDiffSqSum * spot.yVelDiffSqSum
  let yVelDiffSqSum = scoreInfo.yVelDiffSqSum / epLen
  // yVelDiffSqSum *= 1e3
  yVelDiffSqSum *= 1.0

  // score -= 1e-3 * scoreInfo.angVelAbsSum
  // score -= 1e-1 * scoreInfo.angVelDiffAbsSum
  // // score += 1.0 * spot.angVelSqSum
  // score += 1e-6 * spot.angVelSqSum * spot.angVelSqSum
  let angVelSqSum = scoreInfo.angVelSqSum / epLen
  angVelSqSum *= -1e1
  // score -= 1e-1 * scoreInfo.angVelDiffSqSum
  // score += 1e-4 * spot.angVelDiffSqSum * spot.angVelDiffSqSum
  let angVelDiffSqSum = scoreInfo.angVelDiffSqSum / epLen
  angVelDiffSqSum *= 1e1

  // score += 1e-5 * spot.xVelDiffSqSum * spot.xVelDiffSqSum

  let chassisVelXSqErrSum = scoreInfo.chassisVelXSqErrSum / epLen
  chassisVelXSqErrSum *= 1e4 * chassisVelXSqErrSum

  let rollJointVelAbs = 0
  let jointMotorDiffSum = 0
  let jointSpeedSqDiffSum = 0
  for (let i = 0; i < 4; i++) {
    let jointSpeedSqDiff = scoreInfo.jointSpeedSqDiffs[i]
    jointSpeedSqDiffSum += jointSpeedSqDiff
    // score += 1e-3 * (spot.motorSpeedSums[i] * spot.motorSpeedSums[i])
    const rollJointVelAbsMean = scoreInfo.rollingJointSpeedAbsSums[i] / epLen
    // rollJointVelAbs += rollJointVelAbsMean * rollJointVelAbsMean
    // rollJointVelAbs += Math.sqrt(rollJointVelAbsMean)
    rollJointVelAbs += rollJointVelAbsMean
    // score -= 1e-3 * scoreInfo.rollingJointSpeedSqSums[i]
    // score -= 1e-4 * scoreInfo.rollingJointSpeedAbsDiffSums[i]
    // score -= 1e-4 * scoreInfo.rollingJointSpeedSqDiffSums[i]
    // score += 1e-1 * scoreInfo.jointMotorSpeedDiffSqSums[i]
    const jointMotorSpeedDiffSqSum =
      scoreInfo.jointMotorSpeedDiffSqSums[i] / epLen
    // jointMotorDiffSum += jointMotorSpeedDiffSqSum * jointMotorSpeedDiffSqSum
    jointMotorDiffSum += jointMotorSpeedDiffSqSum
  }
  rollJointVelAbs *= -5.0
  jointMotorDiffSum *= 1e-5
  jointSpeedSqDiffSum *= 1e-3
  // // // score += 1e-8 * spot.motorSpeedsSqDistSum
  // // // // // // }
  let torqueRxnSum = 0
  let jointRxnForceYSqSum = 0
  for (let i = 0; i < 4; i++) {
    // score += 1e-2 * spot.jointReactionTorqueSqSums[i]
    let torqueRxn = scoreInfo.jointReactionTorqueSqSums[i] / epLen
    torqueRxn *= torqueRxn
    torqueRxnSum += torqueRxn
    let jointReactionForceXSqSum = scoreInfo.jointReactionForceXSqSums[i]
    jointRxnForceYSqSum += jointReactionForceXSqSum
    // score -= 1e-1 * spot.jointReactionForceXSqSums[i]
    // score += 1e-3 * spot.jointReactionForceYSqSums[i]
  }
  torqueRxnSum *= 1e1
  jointRxnForceYSqSum *= 1e-4
  // score /= epLen
  // score -= 1e-6 * spot.rollingXVelMax * spot.rollingXVelMax
  // // // // if (!simpleScore) {
  // // // for (let i = 0; i < 4; i++) {
  // // //   score += 1e-3 * spot.jointSpeedMins[i]
  // // //   score -= 1e-3 * spot.jointSpeedMaxs[i]
  // // // }
  // }
  let histogramSum = 0
  // let histogramProd = 1
  // let histogramMax = -Infinity
  for (let histogramScore of scoreInfo["histogramScores"]) {
    // histogramSum += Math.sqrt(histogramScore)
    histogramSum += histogramScore * histogramScore
    //  * histogramScore * histogramScore
    // histogramProd *= 1 + Math.abs(histogramScore)
    // if (histogramScore > histogramMax) {
    //   histogramMax = histogramScore
    // }
  }
  histogramSum *= 1.0
  // score += 1e-4 * histogramSum * histogramSum
  // score += 1e-6 * histogramProd
  // score += 1e-1 * histogramMax

  let l2PenaltyWeights = 0
  for (let weightNorm of scoreInfo["weightNorms"]) {
    // console.log(weightNorm)
    l2PenaltyWeights += weightNorm
  }
  // l2PenaltyWeights /= weightCount
  // l2PenaltyWeights *= 1e2
  l2PenaltyWeights *= 1.0

  let l2PenaltyBiases = 0
  for (let biasNorm of scoreInfo["biasNorms"]) {
    l2PenaltyBiases += biasNorm
  }
  // console.log(l2PenaltyWeights, l2PenaltyBiases)
  // l2PenaltyBiases /= biasCount
  // l2PenaltyBiases *= 1.0
  l2PenaltyBiases *= 1e-3
  return {
    scoreDist,
    l2PenaltyWeights,
    l2PenaltyBiases,
    // // clippedOutputSums,
    // clippedSpeedSums,
    // // torqueRxnSum,
    // // footNormalImpulseSqSum,
    // nonFootNormalImpulseSqSum,
    // // rollJointVelAbs,
    // // histogramSum,
    // // // // tangentImpulseSum,

    // // jointMotorDiffSum,

    // // ySqDiffSum,

    // // // yVelDiffSqSum,
    // // yVelSqSum,

    // // angVelSqSum,
    // // // angVelDiffSqSum,

    // // // chassisVelXSqErrSum,
    // // chassisAngleErr,
    // // chassisAngleSqErr,
    // // jointSpeedSqDiffSum,
    // jointRxnForceYSqSum,
    // // motorSpeedSumsSum,
  }
}

function processScores() {
  const solutionsScores = []
  const bestScoresAndIdxs = []
  console.log(scoreSolutionInfos[0])
  let finalXMax = -Infinity
  //   scoreDistMin = Infinity,
  //   scoreDistMax = -Infinity,
  //   scoreDistMean = 0,
  //   l2WtsMin = Infinity,
  //   l2WtsMax = -Infinity,
  //   l2WtsMean = 0,
  //   l2BiasMin = Infinity,
  //   l2BiasMax = -Infinity,
  //   l2BiasMean = 0
  const scoreStats = {}
  for (let j = 0; j < scoreSolutionInfos.length; j++) {
    const scoreSolutionInfo = scoreSolutionInfos[j]
    if (scoreSolutionInfo.finalX > finalXMax) {
      finalXMax = scoreSolutionInfo.finalX
    }
    const scoreObj = getScore(scoreSolutionInfo),
      solution = scoreSolutionInfo["solution"].slice(),
      score = Object.values(scoreObj).reduce((a, b) => a + b)

    const kvPairs = Object.entries(scoreObj)
    kvPairs.push(["score", score])
    for (let [key, val] of kvPairs) {
      if (j == 0) {
        scoreStats[key] = { mean: 0, min: Infinity, max: -Infinity }
      }
      scoreStats[key].mean += val
      if (scoreStats[key].min > val) {
        scoreStats[key].min = val
      }
      if (scoreStats[key].max < val) {
        scoreStats[key].max = val
      }
    }
    // scoreDistMean += scoreDist
    // if (scoreDistMin > scoreDist) {
    //   scoreDistMin = scoreDist
    // }
    // if (scoreDistMax < scoreDist) {
    //   scoreDistMax = scoreDist
    // }

    // l2WtsMean += l2PenaltyWeights
    // if (l2WtsMin > l2PenaltyWeights) {
    //   l2WtsMin = l2PenaltyWeights
    // }
    // if (l2WtsMax < l2PenaltyWeights) {
    //   l2WtsMax = l2PenaltyWeights
    // }

    // l2BiasMean += l2PenaltyBiases
    // if (l2BiasMin > l2PenaltyBiases) {
    //   l2BiasMin = l2PenaltyBiases
    // }
    // if (l2BiasMax < l2PenaltyBiases) {
    //   l2BiasMax = l2PenaltyBiases
    // }

    // const score = scoreDist + l2PenaltyWeights + l2PenaltyBiases

    solutionsScores.push({ solution, score })
    let newBestScore = false
    if (bestScoresAndIdxs.length < displayCreatureCount) {
      bestScoresAndIdxs.push({ j, score })
      newBestScore = true
    } else if (score < bestScoresAndIdxs[displayCreatureCount - 1]["score"]) {
      bestScoresAndIdxs[displayCreatureCount - 1] = { j, score }
      newBestScore = true
    }

    if (newBestScore) {
      bestScoresAndIdxs.sort((a, b) => a["score"] - b["score"])
    }
  }

  console.log(`finalXMax: ${finalXMax}`)
  for (let prop of Object.keys(scoreStats)) {
    const summary = scoreStats[prop]
    summary.mean /= scoreSolutionInfos.length
    console.log(prop)
    for (let [stat, val] of Object.entries(summary)) {
      console.log(stat, val)
    }
  }

  for (let j = 0; j < displayCreatureCount; j++) {
    const totalIdx = bestScoresAndIdxs[j]["j"],
      creatureIdx = totalIdx % creaturesPerWorker,
      workerIdx = (totalIdx - creatureIdx) / creaturesPerWorker,
      rank = j
    simulationWorkers[workerIdx].postMessage([
      "sendHistory",
      { creatureIdx, rank },
    ])
  }
  cma_worker.postMessage(["solutionsScores", solutionsScores])
  scoreSolutionInfos = []
  scoresReceived = 0
}

function swapHistory() {
  if (currentHistory == 0) {
    currentHistory = 1
    nextHistory = 0
  } else {
    currentHistory = 0
    nextHistory = 1
  }
}

function saveHistory(history, rank) {
  const drawHistory = drawHistories[nextHistory]
  for (let i = 0; i < epLen; i++) {
    const multiCreatureIdx = 7 * (i * displayCreatureCount + rank),
      singleCreatureIdx = 7 * i
    for (let j = 0; j < 7; j++) {
      drawHistory[multiCreatureIdx + j] = history[singleCreatureIdx + j]
    }
  }
}
