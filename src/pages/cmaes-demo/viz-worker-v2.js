import { objFns } from "./obj-fns.js"
import { canvasDimMax, getViewStep } from "./globals.js"
import { scoreToTurboRGB } from "./matlab_turbo_colormap.js"

const nPixelsMax = (canvasDimMax * canvasDimMax) / 4,
  imageDataArray = new Uint8ClampedArray(3 * nPixelsMax),
  scores = new Float32Array(nPixelsMax)

function calculatePixels({ canvasHalfDim, evalHalfLim, objFnName, zoom }) {
  const objFn = objFns[objFnName],
    viewStep = getViewStep(evalHalfLim, canvasHalfDim)
  let minScore = Infinity,
    maxScore = -Infinity,
    scoreIdx = 0

  for (let yIdx = 0; yIdx < canvasHalfDim; yIdx++) {
    const y = -evalHalfLim + yIdx * viewStep
    for (let xIdx = 0; xIdx < canvasHalfDim; xIdx++) {
      const x = -evalHalfLim + xIdx * viewStep
      const score = objFn([x, y])
      if (score < minScore) {
        minScore = score
      }
      if (score > maxScore) {
        maxScore = score
      }
      scores[scoreIdx] = score
      scoreIdx++
    }
  }

  let arrayIdx = 0
  const scoreRangeInv = 1 / (maxScore - minScore)
  for (let i = 0; i < scoreIdx; i++) {
    const score = scores[i]
    const rgb = scoreToTurboRGB((score - minScore) * scoreRangeInv)
    for (let rgbIdx = 0; rgbIdx < 3; rgbIdx++) {
      imageDataArray[arrayIdx + rgbIdx] = rgb[rgbIdx]
    }
    arrayIdx += 3
  }
  postMessage(imageDataArray.slice(0, arrayIdx - 2))
}

onmessage = (e) => {
  calculatePixels(e.data)
}
