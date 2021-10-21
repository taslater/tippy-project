import { CMA, getDefaultCMAPopsize } from "../../js/cma-lib.js"
import { objFns } from "./obj-fns.js"
import {
  objFnInit,
  canvasDim,
  meanRadiusMin,
  meanRadiusMax,
  sigmaScale,
  zoomStepMag,
} from "./globals.js"

let zoom,
  zoomNext,
  canvasScale,
  objFnName = objFnInit,
  objFnLim,
  objFn,
  cma,
  solutionsHistory,
  meanHistory,
  popsizeMultiplier = 1

cmaInit()

onmessage = (e) => {
  const [info, msg] = e.data
  if (info === "fnName") {
    objFnName = msg
    cmaInit()
  } else if (info === "popMult") {
    popsizeMultiplier = msg
    cmaInit()
  } else if (info === "step") {
    cmaStep()
  } else if (info === "zoom") {
    zoom = msg
    updateCanvasScale()
    sendMeanHistory()
    sendCurrentSolutions()
  } else if (info === "drawReady") {
    if (zoom != zoomNext) {
      transitionStep()
    }
  }
}

function cmaInit() {
  zoom = 1
  zoomNext = zoom
  updateObjFn(objFnName)
  solutionsHistory = []
  meanHistory = []
  const cmaSigma = sigmaScale * objFnLim
  const randRadians = 2 * Math.PI * Math.random()
  const randRadius =
    objFnLim * (meanRadiusMin + Math.random() * (meanRadiusMax - meanRadiusMin))
  console.log("objFnLim", objFnLim)
  console.log("randRadius", randRadius)
  const cmaMean = Float32Array.from([
    randRadius * Math.cos(randRadians),
    randRadius * Math.sin(randRadians),
  ])
  const popsize = getDefaultCMAPopsize(2) * popsizeMultiplier
  cma = new CMA(cmaMean, cmaSigma, popsize, undefined, undefined)
  cmaStep()
}

function cmaStep() {
  const solutions = new Float32Array(2 * cma.popsize),
    sol_score_array = []
  let scoreSum = 0,
    maxAbsDim = 0
  for (let i = 0; i < cma.popsize; i++) {
    const solution = cma.ask(),
      score = objFn(solution)
    scoreSum += score
    sol_score_array.push({ solution, score })
    for (let j = 0; j < 2; j++) {
      const solDim = solution[j],
        absSolDim = Math.abs(solDim)
      if (absSolDim > maxAbsDim) {
        maxAbsDim = absSolDim
      }
      solutions[2 * i + j] = solDim
    }
  }
  solutionsHistory.push(solutions)
  meanHistory.push(...cma.mean.slice())
  cma.tell(sol_score_array)

  console.log(scoreSum / cma.popsize)

  zoomNext = (0.8 * objFnLim) / maxAbsDim

  sendMeanHistory()

  transitionStep()
}

function sendMeanHistory() {
  const meanHistoryTyped = Float32Array.from(
    meanHistory.map((v) => v * canvasScale)
  )
  postMessage(["means", meanHistoryTyped])
}

function sendCurrentSolutions() {
  const currentSolution = solutionsHistory[solutionsHistory.length - 1]
  postMessage([
    "solutions",
    currentSolution.map((v) => Math.round(v * canvasScale)),
  ])
}

function updateObjFn(objFnName) {
  objFn = objFns[objFnName]
  objFnLim = objFn.xyLim
  updateCanvasScale()
}

function updateCanvasScale() {
  canvasScale = (zoom * 0.5 * canvasDim) / objFnLim
}

function transitionStep() {
  if (zoom < zoomNext) {
    zoom *= zoomStepMag
    if (zoom > zoomNext) {
      zoom = zoomNext
    }
  } else {
    zoom /= zoomStepMag
    if (zoom < zoomNext) {
      zoom = zoomNext
    }
  }
  postMessage(["zoom", zoom])
  updateCanvasScale()
  sendCurrentSolutions()
}
