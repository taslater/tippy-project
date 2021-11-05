export const globals = {
  w: 800,
  h: 400,
  lInputCodes: ["ArrowLeft"],
  rInputCodes: ["ArrowRight"],
  xOffs: [-0.3, -0.1, 0.1, 0.3],
  ts: 1.0 / 60,
  // sinLim: 0.3,
  sinLim: 0.4,
  // directionStep: 0.02,
  sinStep: 0.03,
  sinDecay: 0.01,
  velLim: 4,
  velDecay: 0.01,
  groundHalfWidth: 100,
  groundFlatCenterHalfWidth: 1,
  groundDetailInterval: 0.2,
  // nTerrainPts: 2 * (this.groundHalfWidth / this.groundDetailInterval) + 1,
  get nTerrainPts() {
    return 2 * (this.groundHalfWidth / this.groundDetailInterval) + 1
  },
  wallH: 0.9,
  wallW: 0.5,
  // slopeMag: 0.1,
  slopeDecay: 0.9,
  slopeLim: 0.4,
  slopeDiffMag: 0.125,
  slopeDiffDecay: 1.1,
  slopeDiffLim: 0.2,
  get barMax() {
    const lim = this.targetType == "vel" ? this.velLim : this.sinLim
    return (0.5 * 0.9 * this.w) / lim
  },
  barHeight: 25,
  // scoreDenomEps: 0.01,
  // scoreDenomEps: 0.1,
  get scoreDenomEps() {
    return this.sinLim
  },
  crashSinLimit: 0.8,
  maxTorque: 1.0,
  nWorkers: 8,
  multiplier: 2,
  epLen: 800,
  twitchinesses: [0, 0.1, 0.05, 0.025, 0.01, 0.005, 0.0025, null],
  cmaSigma: 0.5,
  // targetType: "sin",
  targetType: "vel",
}
