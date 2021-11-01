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

  if (info === "objFnName") {
    objFnName = msg
    cmaInit()
  } else if (info === "popMult") {
    popsizeMultiplier = msg
    cmaInit()
  } else if (info === "step") {
    cmaStep()
  }
}

function cmaInit() {
  updateObjFn(objFnName)
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
    maxAbsDim = 0,
    minScore = Infinity,
    maxScore = -Infinity
  for (let i = 0; i < cma.popsize; i++) {
    const solution = cma.ask(),
      score = objFn(solution)
    scoreSum += score
    if (score < minScore) {
      minScore = score
    }
    if (score > maxScore) {
      maxScore = score
    }
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
  message.meanScore = scoreSum / cma.popsize
  message.minScore = minScore
  message.maxScore = maxScore
  message.ellipsePts = getEllipsePts().slice()
  message.mean = cma.mean.slice()
  message.scaledSigma = cma.sigma / objFnLim
  message.maxAbsDim = maxAbsDim
  postMessage(message)

  cma.tell(sol_score_array)

  // console.log("mean score:", scoreSum / cma.popsize)
}

function updateObjFn(objFnName) {
  objFn = objFns[objFnName]
  objFnLim = objFn.xyLim
}

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
