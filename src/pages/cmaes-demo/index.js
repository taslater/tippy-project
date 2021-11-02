require("./index.scss")
require("../../main.scss")
require("../partials/nav.js")
require("../../../node_modules/uplot/dist/uPlot.min.css")

import { objFns } from "./obj-fns.js"
import {
  canvasDimMax,
  markerR,
  objFnInit,
  getViewStep,
  zoomStepMag,
  chartHeight,
} from "./globals.js"
import { CMAHistory } from "./cmaHistory.js"
import { drawCanvas } from "./../../js/draw-canvas.js"

import _ from "lodash"

const settingsContainer = document.getElementById("settings-container"),
  chartCanvasDiv = document.getElementById("chart-canvas-div")

const cmaHistory = new CMAHistory(objFnInit, chartCanvasDiv)
const uplotDiv = chartCanvasDiv.firstChild

const vizWorker = new Worker(new URL("./viz-worker-v2.js", import.meta.url))
initVizWorker()
const cmaWorker = new Worker(new URL("./cma-worker.js", import.meta.url))
initCmaWorker()

let canvasHalfDim,
  quarterBgImageData,
  quarterBgImageDataData,
  objFnName = objFnInit,
  zoomCurrent = 1,
  zoomNext = 1,
  viewStepInv,
  evalLimCurrent = undefined,
  evalLimNext,
  playing = false
const timerIds = []

const fnGradientCanvas = document.getElementById("canvas-bg"),
  cmaSolsCanvas = document.getElementById("canvas-fg"),
  cmaMeansCanvas = document.getElementById("canvas-means")
const fnGradientQuarterCanvas = document.createElement("canvas"),
  fnGradientQuarterCTX = fnGradientQuarterCanvas.getContext("2d")
const objFnCanvasDiv = document.getElementById("obj-fn-canvas-div")

const fnGradientCTX = fnGradientCanvas.getContext("2d"),
  cmaSolsCTX = cmaSolsCanvas.getContext("2d"),
  cmaMeansCTX = cmaMeansCanvas.getContext("2d")
// style for search ellipse
// cmaSolsCTX.strokeStyle = "rgba(255, 255, 255, 0.8)"
cmaSolsCTX.strokeStyle = "white"
cmaSolsCTX.lineWidth = 3

window.onresize = _.debounce(() => {
  resizeElements()
}, 100)
resizeElements()

const markerCanvas = getMarkerCanvas(),
  playBtn = document.getElementById("play-btn"),
  playIcon = playBtn.getElementsByTagName("i")[0]

const fnSelect = document.getElementById("obj-fn-select")

for (let k of Object.keys(objFns)) {
  const option = document.createElement("option")
  option.value = k
  option.text = objFns[k].fancyName
  if (k === objFnInit) {
    option.selected = true
  }
  fnSelect.add(option)
}

fnSelect.addEventListener("change", (e) => {
  stopPlaying()
  objFnName = e.target.value

  resetCMA()
})

function resetCMA() {
  // for (let i = 0; i < chartData.length; i++) {
  //   chartData[i] = []
  // }
  // uplot.setData(chartData)
  cmaHistory.reset(objFnName)
  cmaWorker.postMessage(["objFnName", objFnName])
  evalLimCurrent = undefined
  zoomCurrent = 1
  zoomNext = 1
}

const popMultSelect = document.getElementById("pop-mult-select")
popMultSelect.addEventListener("change", (e) => {
  stopPlaying()
  let popsizeMultiplier = e.target.value
  cmaWorker.postMessage(["popMult", popsizeMultiplier])
  resetCMA()
})

const zoomInBtn = document.getElementById("zoom-in")
zoomInBtn.addEventListener("click", () => {
  stopPlaying()
  zoomNext *= 1.1
  updateVizWorker()
})

const zoomOutBtn = document.getElementById("zoom-out")
zoomOutBtn.addEventListener("click", () => {
  stopPlaying()
  zoomNext /= 1.1
  updateVizWorker()
})

const resetBtn = document.getElementById("reset-btn")
resetBtn.addEventListener("click", () => {
  stopPlaying()
  resetCMA()
})

const stepFwdBtn = document.getElementById("step-fwd-btn")
stepFwdBtn.addEventListener("click", () => {
  stopPlaying()
  stepFwd()
})

function stepFwd() {
  clearTimerIds()
  zoomNext = 1
  cmaHistory.currentStep++
  if (cmaHistory.currentStep > cmaHistory.solutions.length - 1) {
    cmaWorker.postMessage(["step", true])
  } else {
    // updatePlotCurrentStep()
    // uplot.redraw(false, false)
    updateEvalLims()
  }
}

playBtn.addEventListener("click", () => {
  playing = !playing
  updatePlaying()
})

const stepBwdBtn = document.getElementById("step-bwd-btn")
stepBwdBtn.addEventListener("click", () => {
  zoomNext = 1
  stopPlaying()
  cmaHistory.currentStep = Math.max(0, cmaHistory.currentStep - 1)
  // updatePlotCurrentStep()
  // uplot.redraw(false, false)
  updateEvalLims()
})

function updatePlaying() {
  playIcon.className = playing ? "fas fa-pause" : "fas fa-play"
  if (playing) {
    stepFwd()
  } else if (timerIds.length > 0) {
    clearTimerIds()
  }
}

function clearTimerIds() {
  while (timerIds.length > 0) {
    const timerId = timerIds.pop()
    clearTimeout(timerId)
  }
}

function stopPlaying() {
  playing = false
  updatePlaying()
}

const meansPathCheck = document.getElementById("means-path-checkbox")
let displayMeansPath = meansPathCheck.checked
meansPathCheck.addEventListener("change", () => {
  displayMeansPath = meansPathCheck.checked
  if (displayMeansPath) {
    drawMeans()
  } else {
    cmaMeansCTX.clearRect(
      0,
      0,
      cmaMeansCTX.canvas.width,
      cmaMeansCTX.canvas.height
    )
  }
})

function initCmaWorker() {
  cmaWorker.onmessage = (e) => {
    cmaHistory.add(e.data)
    // chartData[0].push(chartData[0].length)
    // chartData[1].push(cmaHistory.meanScores.slice(-1)[0])
    // uplot.setData(chartData)
    // updatePlotCurrentStep()
    // uplot.redraw(false, false)
    updateEvalLims()
  }
}

function updateEvalLims() {
  const evalHalfLim = cmaHistory.evalHalfLim
  if (typeof evalLimCurrent === "undefined") {
    evalLimCurrent = evalHalfLim
    evalLimNext = evalHalfLim
  } else {
    evalLimNext = evalHalfLim
  }
  updateVizWorker()
}

function updateVizWorker() {
  vizWorker.postMessage(
    // cmaHistory.gradientWorkerMessage(canvasHalfDim, zoom)
    {
      canvasHalfDim,
      evalHalfLim: evalLimCurrent / zoomCurrent,
      objFnName,
    }
  )
}

function drawMeans() {
  const means = cmaHistory.means
    .slice(0, cmaHistory.currentStep + 1)
    .map((mean) => mean.map((v) => v * viewStepInv))
  if (means.length === 0) return
  cmaMeansCTX.clearRect(
    0,
    0,
    cmaMeansCTX.canvas.width,
    cmaMeansCTX.canvas.height
  )
  cmaMeansCTX.save()
  cmaMeansCTX.translate(
    0.5 * cmaMeansCTX.canvas.width,
    0.5 * cmaMeansCTX.canvas.height
  )
  cmaMeansCTX.beginPath()
  cmaMeansCTX.moveTo(means[0][0], means[0][1])
  for (let i = 1; i < means.length; i++) {
    const mean = means[i]
    cmaMeansCTX.lineTo(mean[0], mean[1])
  }
  cmaMeansCTX.strokeStyle = "black"
  cmaMeansCTX.lineWidth = 4
  cmaMeansCTX.stroke()
  cmaMeansCTX.strokeStyle = "white"
  cmaMeansCTX.lineWidth = 2
  cmaMeansCTX.stroke()
  cmaMeansCTX.restore()
}

function draw() {
  requestAnimationFrame(() => {
    // const historyStep = cmaHistory.currentStep
    viewStepInv = 1.0 / getViewStep(evalLimCurrent / zoomCurrent, canvasHalfDim)
    if (displayMeansPath) {
      drawMeans()
    }
    drawGradient()
    cmaSolsCTX.clearRect(0, 0, cmaSolsCanvas.width, cmaSolsCanvas.height)
    cmaSolsCTX.save()
    cmaSolsCTX.translate(0.5 * cmaSolsCanvas.width, 0.5 * cmaSolsCanvas.height)
    if (cmaHistory.currentStep <= cmaHistory.ellipses.length - 1) {
      drawEllipse()
      drawSolutions()
    }
    cmaSolsCTX.restore()
  })
}

function drawSolutions() {
  const solutions = cmaHistory.solutions[cmaHistory.currentStep].map(
    (v) => v * viewStepInv
  )
  for (let i = 0; i < solutions.length; i += 2) {
    drawMarker(solutions[i], solutions[i + 1], cmaSolsCTX)
  }
}

function drawEllipse() {
  const ellipsePts = cmaHistory.ellipses[cmaHistory.currentStep].map(
    (v) => v * viewStepInv
  )
  cmaSolsCTX.beginPath()
  cmaSolsCTX.moveTo(ellipsePts[0], ellipsePts[1])
  for (let i = 2; i < ellipsePts.length; i += 2) {
    cmaSolsCTX.lineTo(ellipsePts[i], ellipsePts[i + 1])
  }
  cmaSolsCTX.closePath()
  cmaSolsCTX.strokeStyle = "white"
  cmaSolsCTX.lineWidth = 3
  cmaSolsCTX.stroke()
}

function drawGradient() {
  fnGradientQuarterCTX.putImageData(quarterBgImageData, 0, 0)
  fnGradientCTX.save()
  fnGradientCTX.translate(canvasHalfDim, canvasHalfDim)
  fnGradientCTX.drawImage(
    fnGradientQuarterCanvas,
    -canvasHalfDim,
    -canvasHalfDim
  )
  fnGradientCTX.scale(-1, 1)
  fnGradientCTX.drawImage(
    fnGradientQuarterCanvas,
    -canvasHalfDim,
    -canvasHalfDim
  )
  fnGradientCTX.scale(1, -1)
  fnGradientCTX.drawImage(
    fnGradientQuarterCanvas,
    -canvasHalfDim,
    -canvasHalfDim
  )
  fnGradientCTX.scale(-1, 1)
  fnGradientCTX.drawImage(
    fnGradientQuarterCanvas,
    -canvasHalfDim,
    -canvasHalfDim
  )
  fnGradientCTX.restore()
}

function drawMarker(x, y, ctx) {
  drawCanvas(markerCanvas, ctx, [x, y], 0)
}

function getMarkerCanvas() {
  function drawLineSeg(startPt, endPt, color, weight, ctx) {
    ctx.beginPath()
    ctx.moveTo(...startPt)
    ctx.lineTo(...endPt)
    ctx.lineWidth = weight
    ctx.strokeStyle = color
    ctx.stroke()
  }

  const markerCanvas = document.createElement("canvas"),
    markerCTX = markerCanvas.getContext("2d")
  const border = 1,
    d = 2 * (border + markerR)

  markerCanvas.width = d
  markerCanvas.height = d

  markerCTX.translate(0.5 * markerCanvas.width, 0.5 * markerCanvas.height)

  drawLineSeg([-markerR - 1, 0], [markerR + 1, 0], "black", 4, markerCTX)
  drawLineSeg([0, -markerR - 1], [0, markerR + 1], "black", 4, markerCTX)
  drawLineSeg([-markerR, 0], [markerR, 0], "white", 2, markerCTX)
  drawLineSeg([0, -markerR], [0, markerR], "white", 2, markerCTX)

  return markerCanvas
}

function initVizWorker() {
  vizWorker.onmessage = (e) => {
    updateImageData(e.data)
    draw()
    zoomCurrent = scaleToward(zoomCurrent, zoomNext)
    evalLimCurrent = scaleToward(evalLimCurrent, evalLimNext)
    if (evalLimCurrent !== evalLimNext || zoomCurrent !== zoomNext) {
      updateVizWorker()
    } else if (playing) {
      const timerId = setTimeout(stepFwd, 500)
      timerIds.push(timerId)
      // _.debounce(stepFwd, 500)
    }
  }
}

function updateImageData(rgbPixelData) {
  let arrayIdx = 0
  for (let i = 0; i < rgbPixelData.length; i += 3) {
    for (let j = 0; j < 3; j++) {
      quarterBgImageDataData[arrayIdx + j] = rgbPixelData[i + j]
    }
    arrayIdx += 4
  }
}

function scaleToward(current, next) {
  if (current > next) {
    current /= zoomStepMag
    if (current < next) {
      current = next
    }
  } else if (current < next) {
    current *= zoomStepMag
    if (current > next) {
      current = next
    }
  }
  return current
}

function resizeElements() {
  cmaHistory.uplot.setSize({
    width: window.innerWidth,
    height: chartHeight,
  })

  const maxHeight =
    window.innerHeight - settingsContainer.offsetHeight - uplotDiv.offsetHeight
  const newCanvasHalfDim = Math.min(
    canvasDimMax / 2,
    Math.floor(Math.min(window.innerWidth, maxHeight) / 2)
  )
  if (newCanvasHalfDim == canvasHalfDim) {
    return
  }
  canvasHalfDim = newCanvasHalfDim
  const canvasDim = 2 * canvasHalfDim
  // console.log({ canvasDim })
  objFnCanvasDiv.setAttribute(
    "style",
    `width:${canvasDim}px; height:${canvasDim}px`
  )
  for (let canvas of [cmaSolsCanvas, fnGradientCanvas, cmaMeansCanvas]) {
    canvas.width = canvasDim
    canvas.height = canvasDim
  }
  fnGradientQuarterCanvas.height = canvasHalfDim
  fnGradientQuarterCanvas.width = canvasHalfDim
  quarterBgImageData = fnGradientQuarterCTX.createImageData(
    canvasHalfDim,
    canvasHalfDim
  )
  quarterBgImageDataData = quarterBgImageData.data
  quarterBgImageDataData.fill(255)

  if (cmaHistory.currentStep > -1) {
    updateVizWorker()
  }
}
