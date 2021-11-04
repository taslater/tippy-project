require("../../main.scss")
require("../partials/nav.js")
require("./index.scss")
require("../../../node_modules/uplot/dist/uPlot.min.css")

import { objFns } from "./obj-fns.js"
import {
  markerR,
  objFnInit,
  getViewStep,
  zoomStepMag,
  chartHeight,
  canvasDimMax,
  chartWidthMax,
} from "./globals.js"
import { CMAHistory } from "./cma-history.js"
import { drawCanvas } from "./../../js/draw-canvas.js"

import _ from "lodash"

const settingsContainer = document.getElementById("settings-container"),
  chartContainer = document.getElementById("chart-container"),
  settingsContainerStyles = window.getComputedStyle(settingsContainer),
  settingsContainerLRPad =
    parseFloat(settingsContainerStyles["paddingLeft"]) +
    parseFloat(settingsContainerStyles["paddingRight"]),
  firstSettingWrapper = document.querySelector(".setting-wrapper"),
  firstSettingWrapperStyles = window.getComputedStyle(firstSettingWrapper),
  minSettingsWidth =
    settingsContainerLRPad +
    firstSettingWrapper.offsetWidth +
    parseFloat(firstSettingWrapperStyles["marginLeft"]) +
    parseFloat(firstSettingWrapperStyles["marginRight"])

const cmaHistory = new CMAHistory(objFnInit, chartContainer)

const playBtn = document.getElementById("play-btn"),
  playIcon = playBtn.getElementsByTagName("i")[0]

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
  updateSettings()
})

const stepFwdBtn = document.getElementById("step-fwd-btn")
stepFwdBtn.addEventListener("click", () => {
  stopPlaying()
  stepFwd()
})

const fnSelect = document.getElementById("obj-fn-select"),
  popMultSelect = document.getElementById("pop-mult-select"),
  sigmaSelect = document.getElementById("sigma-select"),
  radiusSelect = document.getElementById("mean-radius-select"),
  directionSelect = document.getElementById("mean-direction-select"),
  randDirectionCheckbox = document.getElementById("random-dir-checkbox")

const defaultSettings = {
  popMult: popMultSelect.selectedIndex,
  sigma: sigmaSelect.value,
  radius: radiusSelect.value,
  direction: directionSelect.value,
  randDirection: randDirectionCheckbox.checked,
}

const restoreButton = document.getElementById("restore-button")
restoreButton.onclick = () => {
  restoreDefaults()
}

directionSelect.disabled = randDirectionCheckbox.checked
randDirectionCheckbox.addEventListener("change", () => {
  directionSelect.disabled = randDirectionCheckbox.checked
})

const timerIds = []

for (let k of Object.keys(objFns)) {
  const option = document.createElement("option")
  option.value = k
  option.text = objFns[k].fancyName
  if (k === objFnInit) {
    option.selected = true
  }
  fnSelect.add(option)
}

;[
  fnSelect,
  popMultSelect,
  sigmaSelect,
  radiusSelect,
  directionSelect,
  randDirectionCheckbox,
].forEach((el) => {
  el.addEventListener("change", () => {
    updateSettings()
  })
})

const vizWorker = new Worker(new URL("./viz-worker-v2.js", import.meta.url))
initVizWorker()
const cmaWorker = new Worker(new URL("./cma-worker.js", import.meta.url))
initCmaWorker()

const settingsBtn = document.getElementById("settings-btn")
settingsBtn.onclick = () => {
  const hide = hideableElements[0].classList.contains("hidden")
  for (let el of hideableElements) {
    if (hide) {
      el.classList.remove("hidden")
    } else {
      el.classList.add("hidden")
    }
  }
  settingsBtn.innerHTML = hide ? "Hide Settings" : "Show Settings"
  styleSettingsButton()
}

let canvasHalfDim,
  quarterBgImageData,
  quarterBgImageDataData,
  // objFnName = objFnInit,
  zoomCurrent = 1,
  zoomNext = 1,
  viewStepInv,
  evalLimCurrent = undefined,
  evalLimNext,
  playing = false

const fnGradientCanvas = document.getElementById("canvas-bg"),
  cmaSolsCanvas = document.getElementById("canvas-fg"),
  cmaMeansCanvas = document.getElementById("canvas-means")
const fnGradientQuarterCanvas = document.createElement("canvas"),
  fnGradientQuarterCTX = fnGradientQuarterCanvas.getContext("2d")
const objFnContainer = document.getElementById("gradient-container"),
  topContainer = document.getElementById("top-container"),
  hideableElements = document.getElementsByClassName("hideable")

const markerCanvas = getMarkerCanvas()

const fnGradientCTX = fnGradientCanvas.getContext("2d"),
  cmaSolsCTX = cmaSolsCanvas.getContext("2d"),
  cmaMeansCTX = cmaMeansCanvas.getContext("2d")

window.onresize = _.debounce(() => {
  resizeElements()
}, 200)
resizeElements()

function stepFwd() {
  clearTimerIds()
  zoomNext = 1
  cmaHistory.currentStep++
  if (cmaHistory.currentStep > cmaHistory.solutions.length - 1) {
    cmaWorker.postMessage(["step", true])
  } else {
    updateEvalLims()
  }
}

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
    updateEvalLims()
  }
  updateSettings()
}

function updateSettings() {
  const cmaSettings = {
    objFnName: objFnName(),
    // popsizeMultiplier: parseFloat(

    // ),
    popsizeMultiplier: popsizeMultiplier(),
    sigmaScale: parseFloat(sigmaSelect.value),
    meanRadius: parseFloat(radiusSelect.value),
    meanDirection: directionSelect.disabled
      ? null
      : parseFloat(directionSelect.value),
  }

  cmaWorker.postMessage(["settings", cmaSettings])
  updateVizWorker()
  resetCMA()
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
  vizWorker.postMessage({
    canvasHalfDim,
    evalHalfLim: evalLimCurrent / zoomCurrent,
    objFnName: objFnName(),
  })
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
  const windowWidth = window.innerWidth,
    windowHeight = window.innerHeight

  cmaHistory.uplot.setSize({
    width: Math.min(windowWidth, chartWidthMax),
    height: chartHeight,
  })

  const objFnContainerHalfDim = Math.round(
      Math.min(windowWidth, windowHeight - chartHeight) / 2,
      canvasDimMax / 2
    ),
    objFnContainerDim = 2 * objFnContainerHalfDim,
    objFnContainerDimStr = `${objFnContainerDim}px`

  objFnContainer.style.height = objFnContainerDimStr
  objFnContainer.style.width = objFnContainerDimStr
  canvasHalfDim = objFnContainerHalfDim

  for (let canvas of [cmaSolsCanvas, fnGradientCanvas, cmaMeansCanvas]) {
    canvas.width = objFnContainerDim
    canvas.height = objFnContainerDim
  }
  fnGradientQuarterCanvas.height = canvasHalfDim
  fnGradientQuarterCanvas.width = canvasHalfDim
  quarterBgImageData = fnGradientQuarterCTX.createImageData(
    canvasHalfDim,
    canvasHalfDim
  )
  quarterBgImageDataData = quarterBgImageData.data
  quarterBgImageDataData.fill(255)

  const availableWidth = windowWidth - objFnContainerDim
  if (availableWidth > minSettingsWidth) {
    topContainer.style.maxHeight = objFnContainerDimStr
    topContainer.style.flexDirection = "row"
    settingsContainer.style.flexFlow = "column nowrap"
    objFnContainer.style.alignSelf = "flex-end"
  } else {
    topContainer.style.maxHeight = "min-content"
    topContainer.style.flexDirection = "column"
    settingsContainer.style.flexFlow = "row wrap"
    objFnContainer.style.alignSelf = "center"
  }

  styleSettingsButton()

  if (cmaHistory.currentStep > -1) {
    updateVizWorker()
  }
}

function styleSettingsButton() {
  const hiding = hideableElements[0].classList.contains("hidden"),
    wideView = window.getComputedStyle(topContainer)["flexDirection"] == "row"
  if (!wideView && !hiding) {
    settingsBtn.parentElement.style.minWidth = "100%"
  } else {
    settingsBtn.parentElement.style.minWidth = "auto"
  }
}

function resetCMA() {
  stopPlaying()
  cmaHistory.reset(objFnName())
  evalLimCurrent = undefined
  zoomCurrent = 1
  zoomNext = 1
}

function objFnName() {
  return fnSelect.options[fnSelect.selectedIndex].value
}

function popsizeMultiplier() {
  return parseFloat(popMultSelect.options[popMultSelect.selectedIndex].value)
}

function restoreDefaults() {
  const { popMult, sigma, radius, direction, randDirection } = defaultSettings
  popMultSelect.selectedIndex = popMult
  sigmaSelect.value = sigma

  radiusSelect.value = radius
  directionSelect.value = direction
  randDirectionCheckbox.checked = randDirection
  directionSelect.disabled = randDirection
  updateSettings()
}
