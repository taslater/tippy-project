import { CMA } from "../../js/cma-lib.js"
import { cmaSigma, nWorkers, cmaMeanInit } from "./globals.js"

// const cmaSigma = 100
let cma,
  popsize,
  // weightCount,
  // biasCount,
  initialized = false,
  // solutionsScores = [],
  // scoreSolutionInfos = [],
  // scoreInfos = [],
  // scoreInfoSummary = {},
  scoreInfoSummaryInitialized = false,
  epNum = 0

onmessage = (e) => {
  const [info, msg] = e.data
  if (info == "initInfo" && !initialized) {
    // const cmaMean = new Float32Array(msg.n_dim).fill(0)
    const cmaMean = cmaMeanInit.slice()
    popsize = msg.creaturesPerWorker * nWorkers
    cma = new CMA(cmaMean, cmaSigma, popsize, undefined, undefined)
    sendNewSolutions()
    initialized = true
  } else if (info == "solutionsScores") {
    const tellSuccess = cma.tell(msg)
    if (!tellSuccess) {
      console.log("tell failed")
      console.log(cma)
    } else {
      sendNewSolutions()
    }
  }
}

function sendNewSolutions() {
  let badSolution = false
  const solutions = new Float32Array(popsize * cma.n_dim)
  for (let i = 0; i < popsize; i++) {
    const solution = cma.ask()
    if (solution.constructor !== Float32Array) {
      badSolution = true
      break
    }
    for (let j = 0; j < solution.length; j++) {
      solutions[i * solution.length + j] = solution[j]
    }
  }
  console.log(cma.mean)
  if (!badSolution) {
    postMessage(["solutions", solutions])
  } else {
    console.log("ask failed")
    console.log(cma)
  }
}

// function processScoreInfos() {
//   const kvPairs = Object.entries(scoreInfos[0])
//   for (let [scoreKey, scoreVal] of kvPairs) {
//     const scoreValConstructorName = scoreVal.constructor.name
//     if (!scoreValConstructorName.includes("Array")) {
//       if (!scoreInfoSummaryInitialized) {
//         scoreInfoSummary[scoreKey] = []
//       }
//       for (let popIdx = 0; popIdx < popsize; popIdx++) {
//         scoreInfoSummary[scoreKey].push(scoreInfos[popIdx][scoreKey])
//       }
//     } else {
//       // If the score value is an array,
//       // create a new key for each element
//       // of that array to flatten the summary.
//       for (let scoreValIdx = 0; scoreValIdx < scoreVal.length; scoreValIdx++) {
//         const arrayKey = `${scoreKey}_${scoreValIdx}`
//         if (!scoreInfoSummaryInitialized) {
//           scoreInfoSummary[arrayKey] = []
//         }
//         for (let popIdx = 0; popIdx < popsize; popIdx++) {
//           scoreInfoSummary[arrayKey].push(
//             scoreInfos[popIdx][scoreKey][scoreValIdx]
//           )
//         }
//       }
//     }
//   }
//   if (!scoreInfoSummaryInitialized) {
//     scoreInfoSummary["epNum"] = []
//   }
//   for (let _ = 0; _ < popsize; _++) {
//     scoreInfoSummary["epNum"].push(epNum)
//   }
//   epNum++
//   scoreInfoSummaryInitialized = true
//   console.clear()
//   console.log(scoreInfoSummary)
//   scoreInfos = []
// }
