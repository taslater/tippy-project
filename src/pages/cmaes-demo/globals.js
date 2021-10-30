export const nVizWorkers = 1,
  canvasDim = 400,
  canvasDimMax = 800,
  markerR = 7,
  objFnInit = "ackley",
  meanRadiusMin = 0.6,
  meanRadiusMax = 0.9,
  sigmaScale = 0.1,
  zoomStepMag = 1.05,
  nEllipseTestPts = 32,
  solutionMargin = 1.25,
  getViewStep = (evalHalfLim, canvasHalfDim, zoom) => {
    const nonZoomed = evalHalfLim / (canvasHalfDim - 0.5)
    return nonZoomed / zoom
  }
