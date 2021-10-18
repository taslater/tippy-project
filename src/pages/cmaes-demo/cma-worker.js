import { CMA, getDefaultCMAPopsize } from "../../js/cma-lib.js"
import { objFns } from "./obj-fns.js"
import { objFnInit, canvasDim } from "./globals.js"

// console.log(new CMA([0, 0], 1, 10, undefined, undefined))

const meanRadiusMin = 0.7,
  meanRadiusMax = 1,
  sigmaScale = 0.5

let zoom = 1,
  canvasScale,
  objFnLim,
  objFn,
  cma,
  solutionsHistory,
  popsizeMultiplier = 1

updateObjFn(objFnInit)
updateCanvasScale()
cmaInit()

onmessage = (e) => {
  const [info, msg] = e.data
  if (info === "fnName") {
    updateObjFn(msg)
    cmaInit()
  } else if (info === "step") {
    cmaStep()
  } else if (info === "zoom") {
    zoom = msg
    updateCanvasScale()
    sendCurrentSolutions()
  }
}

function cmaInit() {
  solutionsHistory = []
  // let popsize = undefined
  // let popsize = 20
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
  console.log(popsize)
  cma = new CMA(cmaMean, cmaSigma, popsize, undefined, undefined)
  cmaStep()
}

function cmaStep() {
  const solutions = new Float32Array(2 * cma.popsize),
    sol_score_array = []
  let scoreSum = 0
  for (let i = 0; i < cma.popsize; i++) {
    const solution = cma.ask(),
      score = objFn(solution)
    scoreSum += score
    sol_score_array.push({ solution, score })
    for (let j = 0; j < 2; j++) {
      solutions[2 * i + j] = solution[j]
    }
  }
  console.log(scoreSum / cma.popsize)
  cma.tell(sol_score_array)
  solutionsHistory.push(solutions)
  sendCurrentSolutions()
}

function sendCurrentSolutions() {
  const currentSolution = solutionsHistory[solutionsHistory.length - 1]
  postMessage(["solutions", currentSolution.map((v) => v * canvasScale)])
}

function updateObjFn(objFnName) {
  objFn = objFns[objFnName]
  objFnLim = objFn.xyLim
  updateCanvasScale()
}

function updateCanvasScale() {
  canvasScale = (zoom * canvasDim) / objFnLim
}
