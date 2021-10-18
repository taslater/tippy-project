// let Module = { TOTAL_MEMORY: 256 * 1024 * 1024 }
importScripts(
  "../random_normal.js",
  "../cma_lib.js",
  "../globals.js",
  "../tippy.js",
  "../cmaMeanInit.js"
)

let cma,
  initialized = false

onmessage = (e) => {
  const [info, msg] = e.data
  if (info == "init_info" && !initialized) {
    init(msg)
  } else if (info == "solutionsScores") {
    const scores = msg.map((x) => x.score)
    cma.tell(msg)
    console.log(`mean:  ${scores.reduce((a, b) => a + b) / scores.length}`)
    console.log(`min:  ${Math.min(...scores)}`)
    postMessage(["cmaMeanWts", cma.mean.slice()])
    train(cma)
  }
}

function init(initInfo) {
  ;({ cmaPopSize, totalPopSize, simulationPopSize } = getPopsizes(
    initInfo.n_dim
  ))

  // const cmaMean = new Float32Array(initInfo.n_dim).fill(0)
  const cmaMean = cmaMeanInit.slice()
  cma = new CMA(cmaMean, globals.cmaSigma, cmaPopSize, undefined, undefined)
  // initSimWorkers(initInfo.terrainPts)
  initialized = true

  train(cma)
}

function train(cma) {
  const solutions = getNewSolutions(cma),
    targetArrays = generateTargetArrays(),
    workerSolutionLength = solutions.length / globals.nWorkers
  let solutionIdx = 0
  const targetsSolutions = []
  for (let i = 0; i < globals.nWorkers; i++) {
    targetsSolutions.push({
      targets: targetArrays,
      solutions: solutions.slice(
        solutionIdx,
        solutionIdx + workerSolutionLength
      ),
    })
    solutionIdx += workerSolutionLength
  }
  postMessage(["targetsSolutions", targetsSolutions])
}

function getNewSolutions(cma) {
  let badSolution = false
  const solutions = new Float32Array(cma.popsize * cma.n_dim)
  for (let i = 0; i < cma.popsize; i++) {
    const solution = cma.ask()
    if (solution.constructor !== Float32Array) {
      badSolution = true
      break
    }
    for (let j = 0; j < solution.length; j++) {
      solutions[i * solution.length + j] = solution[j]
    }
  }
  // console.log(cma.mean)
  if (!badSolution) {
    return solutions
  } else {
    console.log("ask failed")
    console.log(cma)
  }
}

function generateEpisodeTargets(twitchiness) {
  const targetSins = new Float32Array(globals.epLen).fill(0),
    targetVels = new Float32Array(globals.epLen).fill(0)
  let leftDown = false,
    rightDown = false

  if (twitchiness != null && twitchiness > 0) {
    if (Math.random() < 0.5) {
      rightDown = true
    } else {
      leftDown = true
    }
  }

  for (let i = 1; i < globals.epLen; i++) {
    if (twitchiness === null) {
      rightDown = true
      leftDown = false
    } else {
      // if (Math.random() < twitchiness) {
      //   leftDown = !leftDown
      // }
      // if (Math.random() < twitchiness) {
      //   rightDown = !rightDown
      // }
      if (Math.random() < twitchiness) {
        const rand = Math.random()
        if (rand < 0.7) {
          // 60% chance to choose one or switch
          if (leftDown == rightDown) {
            // choose random if neither or both
            if (Math.random() < 0.5) {
              leftDown = true
              rightDown = false
            } else {
              leftDown = false
              rightDown = true
            }
          } else {
            // switch direction
            if (rightDown) {
              leftDown = true
              rightDown = false
            } else {
              leftDown = false
              rightDown = true
            }
          }
        } else if (rand < 0.9) {
          // 20% chance to coast
          leftDown = false
          rightDown = false
        } else {
          // 10% chance to press random
          // (maybe both, maybe one)
          if (Math.random() < 0.5) {
            leftDown = true
          } else {
            rightDown = true
          }
        }
      }
    }
    ;[targetSins[i], targetVels[i]] = updateDirection(
      leftDown,
      rightDown,
      targetSins[i - 1],
      targetVels[i - 1]
    )
  }
  // return targetSins
  return globals.targetType === "sin" ? targetSins : targetVels
}

function generateTargetArrays() {
  const targetArrays = []
  for (let twitchiness of globals.twitchinesses) {
    targetArrays.push(generateEpisodeTargets(twitchiness))
  }
  return targetArrays
}

function getCreaturesPerWorker(n_dim) {
  return Math.ceil(
    (4 + Math.floor(3 * Math.log(n_dim))) *
      (globals.multiplier / globals.nWorkers)
  ) // (eq. 48)
}

function getDefaultCMAPopsize(n_dim) {
  return 4 + Math.floor(3 * Math.log(n_dim)) // (eq. 48)
}

function getPopsizes(n_dim) {
  const defaultPopSize = getDefaultCMAPopsize(n_dim),
    cmaPopSize =
      globals.nWorkers *
      Math.ceil((globals.multiplier * defaultPopSize) / globals.nWorkers),
    totalPopSize = cmaPopSize * globals.twitchinesses.length,
    simulationPopSize = totalPopSize / globals.nWorkers
  return { cmaPopSize, totalPopSize, simulationPopSize }
}
