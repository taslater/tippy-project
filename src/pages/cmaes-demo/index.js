require("./index.css")
require("../../main.css")
import { objFns } from "./obj-fns.js"
import { canvasDim, markerR, nVizWorkers, objFnInit } from "./globals.js"
import { drawCanvas } from "./../../js/draw-canvas.js"

let zoom = 1

const canvasFnGradient = document.getElementById("canvas-bg")
const canvasCmaSols = document.getElementById("canvas-fg")
const canvasCmaMeans = document.getElementById("canvas-means")
const canvasDiv = document.getElementById("canvas-div")
canvasDiv.setAttribute("style", `width:${canvasDim}px; height:${canvasDim}px`)
for (let canvas of [canvasCmaSols, canvasFnGradient, canvasCmaMeans]) {
  canvas.width = canvasDim
  canvas.height = canvasDim
}

const ctxFnGradient = canvasFnGradient.getContext("2d")
const ctxCmaSols = canvasCmaSols.getContext("2d")
const ctxCmaMeans = canvasCmaMeans.getContext("2d")
const imageDataBg = ctxFnGradient.createImageData(canvasDim, canvasDim)
const imageDataBgData = imageDataBg.data
imageDataBgData.fill(255)

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
  const fnName = e.target.value
  updateObjFn(fnName)
})

function updateObjFn(fnName) {
  for (let worker of vizWorkers) {
    worker.postMessage(["fnName", fnName])
  }
  cmaWorker.postMessage(["fnName", fnName])
  zoom = 1
}

const popMultSelect = document.getElementById("pop-mult-select")
popMultSelect.addEventListener("change", (e) => {
  let popsizeMultiplier = e.target.value
  cmaWorker.postMessage(["popMult", popsizeMultiplier])
})

const zoomInBtn = document.getElementById("zoom-in")
zoomInBtn.addEventListener("click", () => {
  zoom *= 1.1
  updateZoom()
})

const zoomOutBtn = document.getElementById("zoom-out")
zoomOutBtn.addEventListener("click", () => {
  zoom /= 1.1
  updateZoom()
})

function updateZoom() {
  for (let worker of vizWorkers) {
    worker.postMessage(["zoom", zoom])
  }
  cmaWorker.postMessage(["zoom", zoom])
}

const stepBtn = document.getElementById("step-btn")
stepBtn.addEventListener("click", () => {
  console.log("step")
  cmaWorker.postMessage(["step", true])
})

let scoreLimsReceived,
  minScore,
  maxScore,
  imagesReceived = 0
resetScoreLims()

const cmaWorker = new Worker(new URL("./cma-worker.js", import.meta.url))

cmaWorker.onmessage = (e) => {
  const [info, msg] = e.data
  if (info === "solutions") {
    drawSolutions(msg, ctxCmaSols)
  } else if (info === "means") {
    drawMeans(msg, ctxCmaMeans)
  }
}

function drawMeans(means, ctx) {
  requestAnimationFrame(() => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.save()
    ctx.translate(0.5 * ctx.canvas.width, 0.5 * ctx.canvas.height)
    ctx.beginPath()
    ctx.moveTo(means[0], means[1])
    for (let i = 2; i < means.length; i += 2) {
      ctx.lineTo(means[i], means[i + 1])
    }
    ctx.strokeStyle = "black"
    ctx.lineWidth = 4
    ctx.stroke()
    ctx.strokeStyle = "white"
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.restore()
  })
}

function drawSolutions(solutions, ctx) {
  requestAnimationFrame(() => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.save()
    ctx.translate(0.5 * ctx.canvas.width, 0.5 * ctx.canvas.height)
    for (let i = 0; i < solutions.length; i += 2) {
      drawMarker(solutions[i], solutions[i + 1], ctx)
    }
    ctx.restore()
  })
}

const markerCanvas = getMarkerCanvas()

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
  const h0 = [-markerR, 0],
    h1 = [+markerR, 0],
    v0 = [0, -markerR],
    v1 = [0, +markerR]
  drawLineSeg(h0, h1, "black", 5, markerCTX)
  drawLineSeg(v0, v1, "black", 5, markerCTX)
  drawLineSeg(h0, h1, "white", 3, markerCTX)
  drawLineSeg(v0, v1, "white", 3, markerCTX)

  return markerCanvas
}

const vizWorkers = []
for (let workerIdx = 0; workerIdx < nVizWorkers; workerIdx++) {
  const vizWorker = new Worker(new URL("./viz-worker.js", import.meta.url))
  vizWorker.postMessage(["workerID", workerIdx])
  vizWorker.onmessage = (e) => {
    const [info, msg] = e.data
    if (info === "scoreLims") {
      updateScoreLims(...msg, vizWorkers)
    } else if (info === "imageDataArray") {
      updateImageData(workerIdx, msg)
    }
  }
  vizWorkers.push(vizWorker)
}

function resetScoreLims() {
  minScore = Infinity
  maxScore = -Infinity
  scoreLimsReceived = 0
}

function updateScoreLims(_minScore, _maxScore, vizWorkers) {
  if (_minScore < minScore) {
    minScore = _minScore
  }
  if (_maxScore > maxScore) {
    maxScore = _maxScore
  }
  scoreLimsReceived++
  if (scoreLimsReceived === nVizWorkers) {
    for (let worker of vizWorkers) {
      worker.postMessage(["scoreLims", [minScore, maxScore]])
    }
    resetScoreLims()
  }
}

function updateImageData(workerIdx, msg) {
  let arrayIdx = (workerIdx / nVizWorkers) * imageDataBgData.length
  for (let i = 0; i < msg.length; i += 3) {
    for (let j = 0; j < 3; j++) {
      imageDataBgData[arrayIdx + j] = msg[i + j]
    }
    arrayIdx += 4
  }
  imagesReceived++
  if (imagesReceived === nVizWorkers) {
    requestAnimationFrame(() => {
      ctxFnGradient.putImageData(imageDataBg, 0, 0)
    })
    imagesReceived = 0
  }
}
