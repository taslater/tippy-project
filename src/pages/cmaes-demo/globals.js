export const nVizWorkers = 1,
  canvasDim = 400,
  canvasDimMax = 700,
  chartHeight = 240,
  markerR = 7,
  objFnInit = "ackley",
  meanRadiusMin = 0.6,
  meanRadiusMax = 0.9,
  sigmaScale = 0.2,
  zoomStepMag = 1.05,
  nEllipseTestPts = 32,
  solutionMargin = 1.25,
  getViewStep = (evalHalfLim, canvasHalfDim) => {
    return evalHalfLim / (canvasHalfDim - 0.5)
  }
