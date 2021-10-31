import { solutionMargin } from "./globals.js"

export class CMAHistory {
  constructor(objFnName) {
    this.reset(objFnName)
  }

  reset(objFnName) {
    this.currentStep = -1
    this.objFnName = objFnName
    this.solutions = []
    this.scores = []
    this.means = []
    this.ellipses = []
    this.evalHalfLims = []
  }

  add(message) {
    this.solutions.push(message.solutions)
    this.scores.push(message.scores)
    this.means.push(message.mean)
    this.ellipses.push(message.ellipsePts)
    this.evalHalfLims.push(solutionMargin * message.maxAbsDim)
    this.currentStep++
  }

  get evalHalfLim() {
    return this.evalHalfLims[this.currentStep]
  }
}
