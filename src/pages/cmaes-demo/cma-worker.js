import { CMA, getDefaultCMAPopsize } from "../../js/cma-lib.js"
import { objFns } from "./obj-fns.js"
import {
  objFnInit,
  canvasDim,
  meanRadiusMin,
  meanRadiusMax,
  sigmaScale,
  nTransitionSteps,
} from "./globals.js"

const nTransitionStepsInv = 1.0 / nTransitionSteps

let zoom = 1,
  zoomNext = zoom,
  zoomPrev = zoom,
  transitionStep = 0,
  canvasScale,
  objFnName = objFnInit,
  objFnLim,
  objFn,
  cma,
  solutionsHistory,
  meanHistory,
  popsizeMultiplier = 1

// updateObjFn(objFnInit)
cmaInit()

onmessage = (e) => {
  const [info, msg] = e.data
  if (info === "fnName") {
    // updateObjFn(msg)
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
  }
}

function cmaInit() {
  updateObjFn(objFnName)
  solutionsHistory = []
  meanHistory = []
  const cmaSigma = sigmaScale * objFnLim
  // cmaMean = []
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
  zoomPrev = zoomNext
  zoomNext = (0.8 * objFnLim) / maxAbsDim
  zoom = (0.8 * objFnLim) / maxAbsDim
  sendMeanHistory()

  // postMessage(["zoom", zoom])
  // updateCanvasScale()
  // sendCurrentSolutions()
  transition()
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

function transition() {
  // https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
  function myLoop() {
    //  create a loop function
    setTimeout(() => {
      //  call a 3s setTimeout when the loop is called
      zoom =
        zoomNext * (transitionStep * nTransitionStepsInv) +
        zoomPrev * ((nTransitionSteps - transitionStep) * nTransitionStepsInv)
      postMessage(["zoom", zoom])
      updateCanvasScale()
      sendCurrentSolutions()
      transitionStep++ //  increment the counter
      if (transitionStep <= nTransitionSteps) {
        //  if the counter < 10, call the loop function
        myLoop() //  ..  again which will trigger another
      } else {
        transitionStep = 0
      }
    }, 100)
  }

  myLoop() //  start the loop
}
