require("./index.css")
require("../../main.scss")
require("../partials/nav.js")

import { objFns } from "./obj-fns.js"
import { canvasDimMax, markerR, objFnInit, getViewStep } from "./globals.js"
import { CMAHistory } from "./cmaHistory.js"
import { drawCanvas } from "./../../js/draw-canvas.js"

import _ from "lodash"

const cmaHistory = new CMAHistory(objFnInit)

const vizWorker = new Worker(new URL("./viz-worker-v2.js", import.meta.url))
initVizWorker()
const cmaWorker = new Worker(new URL("./cma-worker.js", import.meta.url))
initCmaWorker()

let zoom = 1,
  canvasHalfDim,
  quarterBgImageData,
  quarterBgImageDataData

const fnGradientCanvas = document.getElementById("canvas-bg"),
  cmaSolsCanvas = document.getElementById("canvas-fg"),
  cmaMeansCanvas = document.getElementById("canvas-means")
const fnGradientQuarterCanvas = document.createElement("canvas"),
  fnGradientQuarterCTX = fnGradientQuarterCanvas.getContext("2d")
const canvasDiv = document.getElementById("obj-fn-canvas-div")

const fnGradientCTX = fnGradientCanvas.getContext("2d"),
  cmaSolsCTX = cmaSolsCanvas.getContext("2d"),
  cmaMeansCTX = cmaMeansCanvas.getContext("2d")
// style for search ellipse
// cmaSolsCTX.strokeStyle = "rgba(255, 255, 255, 0.8)"
cmaSolsCTX.strokeStyle = "white"
cmaSolsCTX.lineWidth = 3

window.onresize = _.debounce(() => {
  resizeDemoCanvas()
}, 200)
resizeDemoCanvas()

function resizeDemoCanvas() {
  const newCanvasHalfDim = Math.min(
    canvasDimMax / 2,
    Math.floor(Math.min(window.innerWidth, window.innerHeight) / 2)
  )
  if (newCanvasHalfDim == canvasHalfDim) {
    return
  }
  canvasHalfDim = newCanvasHalfDim
  const canvasDim = 2 * canvasHalfDim
  // console.log({ canvasDim })
  canvasDiv.setAttribute("style", `width:${canvasDim}px; height:${canvasDim}px`)
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

// const bgImageData = fnGradientCTX.createImageData(canvasDim, canvasDim),
//   bgImageDataData = bgImageData.data
// bgImageDataData.fill(255)

const markerCanvas = getMarkerCanvas()

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
  const objFnName = e.target.value
  cmaHistory.reset(objFnName)
  cmaWorker.postMessage(["objFnName", objFnName])
  zoom = 1
})

const popMultSelect = document.getElementById("pop-mult-select")
popMultSelect.addEventListener("change", (e) => {
  let popsizeMultiplier = e.target.value
  cmaWorker.postMessage(["popMult", popsizeMultiplier])
})

const zoomInBtn = document.getElementById("zoom-in")
zoomInBtn.addEventListener("click", () => {
  zoom *= 1.1
  updateVizWorker()
})

const zoomOutBtn = document.getElementById("zoom-out")
zoomOutBtn.addEventListener("click", () => {
  zoom /= 1.1
  updateVizWorker()
})

const stepBtn = document.getElementById("step-btn")
stepBtn.addEventListener("click", () => {
  zoom = 1
  cmaWorker.postMessage(["step", true])
})

const meansPathCheck = document.getElementById("means-path-checkbox")
let displayMeansPath = meansPathCheck.checked
meansPathCheck.addEventListener("change", () => {
  displayMeansPath = meansPathCheck.checked
})

function initCmaWorker() {
  cmaWorker.onmessage = (e) => {
    cmaHistory.add(e.data)
    console.log(cmaHistory)
    updateVizWorker()
  }
}

function updateVizWorker() {
  vizWorker.postMessage(cmaHistory.gradientWorkerMessage(canvasHalfDim, zoom))
}

// function drawMeans(means, ctx) {
//   requestAnimationFrame(() => {
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
//     ctx.save()
//     ctx.translate(0.5 * ctx.canvas.width, 0.5 * ctx.canvas.height)
//     ctx.beginPath()
//     ctx.moveTo(means[0], means[1])
//     for (let i = 2; i < means.length; i += 2) {
//       ctx.lineTo(means[i], means[i + 1])
//     }
//     ctx.strokeStyle = "black"
//     ctx.lineWidth = 4
//     ctx.stroke()
//     ctx.strokeStyle = "white"
//     ctx.lineWidth = 2
//     ctx.stroke()
//     ctx.restore()
//   })
// }

function draw() {
  requestAnimationFrame(() => {
    const historyStep = cmaHistory.currentStep
    const viewStepInv =
      1.0 /
      getViewStep(cmaHistory.evalHalfLims[historyStep], canvasHalfDim, zoom)
    // (canvasHalfDim - 0.5) / cmaHistory.evalHalfLims[historyStep]
    // if (displayMeansPath) {
    //   console.log(meansPathArr)
    //   drawMeans(meansPathArr, cmaMeansCTX)
    // } else {
    //   requestAnimationFrame(() => {
    //     cmaMeansCTX.clearRect(
    //       0,
    //       0,
    //       cmaMeansCTX.canvas.width,
    //       cmaMeansCTX.canvas.height
    //     )
    //   })
    // }
    drawGradient()
    cmaSolsCTX.clearRect(0, 0, cmaSolsCanvas.width, cmaSolsCanvas.height)
    cmaSolsCTX.save()
    cmaSolsCTX.translate(0.5 * cmaSolsCanvas.width, 0.5 * cmaSolsCanvas.height)
    drawSolutions(historyStep, viewStepInv)
    drawEllipse(historyStep, viewStepInv)
    cmaSolsCTX.restore()

    // solutionsFresh = false
    // imagesReceived = 0
    // cmaWorker.postMessage(["drawReady", true])
  })
}

function drawSolutions(historyStep, viewStepInv) {
  const solutions = cmaHistory.solutions[historyStep].map(
    (v) => v * viewStepInv
  )
  for (let i = 0; i < solutions.length; i += 2) {
    drawMarker(solutions[i], solutions[i + 1], cmaSolsCTX)
  }
}

function drawEllipse(historyStep, viewStepInv) {
  const ellipsePts = cmaHistory.ellipses[historyStep].map(
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
