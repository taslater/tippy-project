import { CMA, getDefaultCMAPopsize } from "../../js/cma-lib.js"
import { objFns } from "./obj-fns.js"
import {
  objFnInit,
  meanRadiusMin,
  meanRadiusMax,
  sigmaScale,
  nEllipseTestPts,
} from "./globals.js"

let objFnName = objFnInit,
  objFnLim,
  objFn,
  cma,
  popsizeMultiplier = 1

// IIFE
const ellipseTestPts = (() => {
  const thetaStep = (2 * Math.PI) / nEllipseTestPts
  const testPts = []
  for (let theta = 0; theta < 2 * Math.PI; theta += thetaStep) {
    testPts.push(Float32Array.from([Math.sin(theta), Math.cos(theta)]))
  }
  return testPts
})()

cmaInit()

onmessage = (e) => {
  const [info, msg] = e.data
  // if (info === "canvasDim") {
  //   canvasDim = msg
  //   updateCanvasScale()
  //   sendMeanHistory()
  //   sendCurrentSolutions()
  // } else
  if (info === "objFnName") {
    objFnName = msg
    cmaInit()
  } else if (info === "popMult") {
    popsizeMultiplier = msg
    cmaInit()
  } else if (info === "step") {
    // console.log("got step")
    // if (zoom != zoomNext) {
    //   console.log("bad zoom", zoom, zoomNext)
    //   return
    // }
    cmaStep()
  }
  // else if (info === "drawReady") {
  //   if (zoom != zoomNext) {
  //     transitionStep()
  //   }
  // } else if (info === "zoom") {
  //   zoom = msg
  //   zoomNext = msg
  //   // console.log("cma got zoom", zoom)
  //   updateCanvasScale()
  //   sendMeanHistory()
  //   sendCurrentSolutions()
  // }
}

function cmaInit() {
  // zoom = 1
  // zoomNext = zoom
  updateObjFn(objFnName)
  // solutionsHistory = []
  // meanHistory = []
  const cmaSigma = sigmaScale * objFnLim
  const randRadians = 2 * Math.PI * Math.random()
  const randRadius =
    objFnLim * (meanRadiusMin + Math.random() * (meanRadiusMax - meanRadiusMin))
  // console.log("objFnLim", objFnLim)
  // console.log("randRadius", randRadius)
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
    scores = new Float32Array(cma.popsize),
    sol_score_array = [],
    message = {}
  let scoreSum = 0,
    maxAbsDim = 0
  for (let i = 0; i < cma.popsize; i++) {
    const solution = cma.ask(),
      score = objFn(solution)
    scoreSum += score
    sol_score_array.push({ solution, score })
    scores[i] = score
    for (let j = 0; j < 2; j++) {
      const solDim = solution[j],
        absSolDim = Math.abs(solDim)
      if (absSolDim > maxAbsDim) {
        maxAbsDim = absSolDim
      }
      solutions[2 * i + j] = solDim
    }
  }
  message.solutions = solutions.slice()
  message.scores = scores.slice()
  message.ellipsePts = getEllipsePts().slice()
  message.mean = cma.mean.slice()
  message.maxAbsDim = maxAbsDim
  postMessage(message)
  // solutionsHistory.push(solutions)
  // ellipsePts = getEllipsePts()
  // meanHistory.push(...cma.mean.slice())
  // const cmaMats = [""]
  // for (let prop of ["B", "BD", "C"]) {
  //   cmaMats.push(cma[prop].data.toString(), "\n")
  // }
  // console.log(...cmaMats)
  // sendEllipseParams()
  // sendEllipsePts()
  // sendMeanHistory()
  // zoomNext = (0.8 * objFnLim) / maxAbsDim
  // transitionStep()

  cma.tell(sol_score_array)

  // console.log("mean score:", scoreSum / cma.popsize)
}

// function sendMeanHistory() {
//   const meanHistoryTyped = Float32Array.from(
//     meanHistory.map((v) => v * canvasScale)
//   )
//   postMessage(["means", meanHistoryTyped])
// }

// function sendCurrentSolutions() {
//   console.log("sending solutions")
//   const currentSolution = solutionsHistory[solutionsHistory.length - 1]
//   postMessage([
//     "solutions",
//     [
//       currentSolution.map((v) => Math.round(v * canvasScale)),
//       ellipsePts.map((v) => Math.round(v * canvasScale)),
//     ],
//   ])
// }

function updateObjFn(objFnName) {
  objFn = objFns[objFnName]
  objFnLim = objFn.xyLim
  // updateCanvasScale()
}

// function updateCanvasScale() {
//   canvasScale = (zoom * 0.5 * canvasDim) / objFnLim
// }

// function transitionStep() {
//   console.log("transition step before", zoom, zoomNext)
//   if (zoom < zoomNext) {
//     zoom *= zoomStepMag
//     if (zoom > zoomNext) {
//       zoom = zoomNext
//     }
//   } else {
//     zoom /= zoomStepMag
//     if (zoom < zoomNext) {
//       zoom = zoomNext
//     }
//   }
//   console.log("transition step after", zoom, zoomNext)
//   postMessage(["zoom", zoom])
//   updateCanvasScale()
//   sendMeanHistory()
//   sendCurrentSolutions()
// }

// function sendEllipseParams() {
//   const [a, b, _, c] = cma.C.data.slice()
//   const t0 = (a + c) / 2,
//     t1 = (a - c) / 2,
//     t2 = Math.sqrt(t1 * t1 + b * b)
//   const lambda0 = t0 + t2,
//     lambda1 = t0 - t2
//   const theta = () => {
//     if (b == 0) {
//       if (a >= c) {
//         return 0
//       } else {
//         return Math.PI / 2
//       }
//     } else {
//       return Math.atan2(lambda0 - a, b)
//     }
//   }
//   const sigma = cma.sigma
//   postMessage([
//     "ellipseParams",
//     Float32Array.from([lambda0 * sigma, lambda1 * sigma, theta()]),
//   ])
// }

function getEllipsePts() {
  const BD = cma.BD,
    mean = cma.mean,
    sigma = cma.sigma
  const pts = []
  for (let i = 0; i < ellipseTestPts.length; i++) {
    const offset = BD.mulVec(ellipseTestPts[i])
    for (let j = 0; j < 2; j++) {
      pts.push(mean[j] + sigma * offset[j])
    }
  }
  return Float32Array.from(pts)
}
