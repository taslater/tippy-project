require("../../main.css")
require("./index.css")
import Box2DFactory from "box2d-wasm/dist/es/Box2D"
import { generateTerrainPts, Population, updateDirection } from "./tippy.js"
import { globals } from "./globals.js"
import {
  getLidarCanvas,
  getWheelCanvas,
  getChassisCanvas,
  drawTippy,
  drawInputBar,
} from "./draw-sim.js"
import { cmaMeanInit } from "./cmaMeanInit.js"

// // https://stackoverflow.com/questions/62954570/javascript-feature-detect-module-support-for-web-workers
let population
let trainingWorker,
  trainingWorkerInitialized = false,
  n_dim,
  solutionScoreDetailed = [],
  solutionsScoresReceived = 0,
  trainingPaused = false

const simulationWorkers = [],
  trainingRecord = []
let trainingRecordInitialized = false

function initSimWorkers(terrainPts) {
  for (let i = 0; i < globals.nWorkers; i++) {
    const worker = new Worker(
      new URL("./workers/simulation-worker.js", import.meta.url)
    )
    worker.postMessage(["terrainPts", terrainPts])
    worker.onmessage = (e) => {
      const [info, msg] = e.data
      if (info == "solutionsScores") {
        solutionScoreDetailed.push(...msg)
        solutionsScoresReceived++
        if (solutionsScoresReceived == globals.nWorkers && !trainingPaused) {
          sendScores()
        }
      }
    }
    simulationWorkers.push(worker)
  }
}

function sendScores() {
  console.log("sending scores")
  trainingWorker.postMessage([
    "solutionsScores",
    // processScores(solutionScoreDetailed, trainingRecord, chart),
    processScores(solutionScoreDetailed, trainingRecord, null),
  ])
  solutionScoreDetailed = []
  solutionsScoresReceived = 0
}

function getTaskStr(i) {
  return `task_${i.toString().padStart(2, "0")}_`
}

let trainingEp = 0

function pushChartData(chart, datasetIdx, keyStr, value) {
  const ds = chart.data.datasets[datasetIdx]
  if (ds.label == keyStr) {
    ds.data.push({ x: trainingEp, y: value })
  }
}

function processScores(solutionScoreDetailed, trainingRecord, chart) {
  const solutionsScores = []
  // if (!trainingRecordInitialized) {
  //   const info = solutionScoreDetailed[0]
  //   for (let i = 0; i < info.taskScores.length; i++) {
  //     const taskStr = getTaskStr(i),
  //       taskScore = info.taskScores[i]
  //     for (let key of Object.keys(taskScore)) {
  //       const keyStr = taskStr + key
  //       trainingRecord[keyStr] = []
  //     }
  //   }
  //   trainingRecord["biasNorm"] = []
  //   trainingRecord["wtsNorm"] = []
  //   trainingRecord["episode"] = []
  //   const datasets = []
  //   for (let key of Object.keys(trainingRecord)) {
  //     if (key == "episode") {
  //       continue
  //     }
  //     datasets.push({
  //       label: key,
  //       data: [],
  //       backgroundColor: randRGB(),
  //     })
  //   }
  //   chart.data.datasets = datasets
  // }
  // trainingRecordInitialized = true
  for (let info of solutionScoreDetailed) {
    // let datasetIdx = 0
    const solution = info.solution
    let score = 0
    for (let i = 0; i < info.taskScores.length; i++) {
      // const taskStr = getTaskStr(i),
      //   taskScore = info.taskScores[i]
      const taskScore = info.taskScores[i]
      // for (let key of Object.keys(taskScore)) {
      //   const keyStr = taskStr + key,
      //     value = taskScore[key]
      //   trainingRecord[keyStr].push(value)
      //   pushChartData(chart, datasetIdx, keyStr, value)
      //   datasetIdx++
      // }
      score += taskScore.mse
      score += 1e2 * taskScore.crashedRatio
      score += 1e5 * taskScore.driftX
    }
    score += 1e-9 * info.biasNorm
    score += 1e1 * info.wtsNorm
    // trainingRecord["biasNorm"].push(info.biasNorm)
    // pushChartData(chart, datasetIdx, "biasNorm", info.biasNorm)
    // datasetIdx++
    // trainingRecord["wtsNorm"].push(info.wtsNorm)
    // pushChartData(chart, datasetIdx, "wtsNorm", info.wtsNorm)
    solutionsScores.push({ solution, score })
  }
  trainingEp++
  // console.log(trainingRecord)
  // chart.update()
  return solutionsScores
}

const terrainPts = generateTerrainPts()
initSimWorkers(terrainPts)

const tippyCanvas = document.getElementById("tippy-canvas"),
  tippyCTX = tippyCanvas.getContext("2d")

tippyCanvas.width = globals.w
tippyCanvas.height = globals.h

// const chartCanvas = document.getElementById("chart-canvas"),
//   chartCTX = chartCanvas.getContext("2d"),
//   chart = getChart(chartCTX)

const scale = 220

let wheelCanvas, chassisCanvas
const lidarCanvas = getLidarCanvas()

let leftDown = false,
  rightDown = false
// targetSin = 0,
// targetAngle = 0,
// targetCos = 1

const trainBtn = document.getElementById("train-btn")
trainBtn.training = false

function initTrainBtn() {
  trainBtn.addEventListener("click", (e) => {
    trainBtn.training = !trainBtn.training
    trainBtn.innerHTML = trainBtn.training
      ? "Pause training"
      : "Resume training"
    if (trainBtn.training && !trainingWorkerInitialized) {
      console.log("Training begins!")
      // trainingWorker = new Worker("./workers/training-worker.js")
      trainingWorker = new Worker(
        new URL("./workers/training-worker.js", import.meta.url)
      )

      trainingWorker.postMessage(["init_info", { n_dim, terrainPts }])

      trainingWorker.onmessage = (e) => {
        const [info, msg] = e.data
        if (info === "targetsSolutions") {
          for (let i = 0; i < msg.length; i++) {
            simulationWorkers[i].postMessage([info, msg[i]])
          }
        } else if (info === "cmaMeanWts") {
          const cmaMeanWts = msg.slice()
          console.log(cmaMeanWts)
          population.setWts(cmaMeanWts)
        }
      }
      trainingWorkerInitialized = true
    } else if (trainBtn.training && trainingPaused) {
      console.log("training resumed")
      trainingPaused = false
      if (solutionsScoresReceived == globals.nWorkers) {
        sendScores()
      }
    } else if (!trainBtn.training && trainingWorkerInitialized) {
      console.log("training paused")
      trainingPaused = true
    }
  })
}

document.addEventListener(
  "keydown",
  (e) => {
    handleLR(e.code, true)
  },
  false
)

document.addEventListener(
  "keyup",
  (event) => {
    handleLR(event.code, false)
  },
  false
)

function handleLR(code, down) {
  if (globals.lInputCodes.includes(code)) {
    leftDown = down
  } else if (globals.rInputCodes.includes(code)) {
    rightDown = down
  }
}

Box2DFactory().then((b2) => {
  population = new Population([0, 0], 1, terrainPts, b2)
  n_dim = population.n_dim

  initTrainBtn()

  const tippy = population.tippys[0]
  wheelCanvas = getWheelCanvas(scale * 2 * tippy.wheelR)
  chassisCanvas = getChassisCanvas(tippy.chassisVertices, scale)

  population.setWts(
    // new Float32Array(population.n_dim).map(() => 1.0 * (Math.random() - 0.5))
    cmaMeanInit.slice()
  )

  let step = 0
  let targetSin = 0,
    targetVel = 0

  // const epTargets = generateEpisodeTargets(0.025)
  const corrRecord = []

  function b2Loop() {
    const w = tippyCTX.canvas.width,
      h = tippyCTX.canvas.height
    tippyCTX.clearRect(0, 0, w, h)
    const tippy = population.tippys[0]
    drawTippy(
      tippy,
      terrainPts,
      scale,
      [0.5 * w, 0.65 * h],
      tippyCTX,
      chassisCanvas,
      wheelCanvas,
      lidarCanvas
    )
    // const targetSin = epTargets[step]
    const target = globals.targetType == "vel" ? targetVel : targetSin
    drawInputBar(target, tippyCTX)
    ;[targetSin, targetVel] = updateDirection(
      leftDown,
      rightDown,
      targetSin,
      targetVel
    )
    population.update([globals.targetType === "sin" ? targetSin : targetVel])
    // corrRecord.push(tippy.corrData)
    // step++
    // if (step >= epLen) {
    if (tippy.crashStepCount > 20) {
      population.reset()
      step = 0
      targetSin = 0
      targetVel = 0
      // console.log(corrRecord)
    }
    // if (step < epLen) {
    if (true) {
      requestAnimationFrame(b2Loop)
    }
  }
  requestAnimationFrame(b2Loop)
})
