require("./index.css")
require("../../main.css")
import { objFns } from "./obj-fns.js"
import { canvasDim, nVizWorkers, objFnInit } from "./globals.js"

let zoom = 1

const canvas_bg = document.getElementById("canvas-bg")
const canvas_fg = document.getElementById("canvas-fg")
const canvas_div = document.getElementById("canvas-div")
canvas_div.setAttribute("style", `width:${canvasDim}px; height:${canvasDim}px`)
for (let canvas of [canvas_fg, canvas_bg]) {
  canvas.width = canvasDim
  canvas.height = canvasDim
}

const ctx_bg = canvas_bg.getContext("2d")
const ctx_fg = canvas_fg.getContext("2d")
const imageDataBg = ctx_bg.createImageData(canvasDim, canvasDim)
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
  for (let worker of vizWorkers) {
    worker.postMessage(["fnName", fnName])
  }
  zoom = 1
})

const zoomInBtn = document.getElementById("zoom-in")
zoomInBtn.addEventListener("click", () => {
  zoom += 1
  for (let worker of vizWorkers) {
    worker.postMessage(["zoom", zoom])
  }
})

const zoomOutBtn = document.getElementById("zoom-out")
zoomOutBtn.addEventListener("click", () => {
  zoom -= 1
  for (let worker of vizWorkers) {
    worker.postMessage(["zoom", zoom])
  }
})

let scoreLimsReceived,
  minScore,
  maxScore,
  imagesReceived = 0
resetScoreLims()

const cmaWorker = new Worker(new URL("./cma-worker.js", import.meta.url))

const ys = []
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
      ctx_bg.putImageData(imageDataBg, 0, 0)
    })
    imagesReceived = 0
  }
}
