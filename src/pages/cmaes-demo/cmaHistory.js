import { solutionMargin } from "./globals.js"
import uPlot from "uplot"

export class CMAHistory {
  constructor(objFnName, chartCanvasDiv) {
    this.uplot = new DemoChart(this, chartCanvasDiv)
    this.reset(objFnName)
    return new Proxy(this, {
      set: (target, key, value) => {
        if (key === "currentStep") {
          this.uplot.redraw(false, false)
        }
        // console.log(`key ${key}`)
        // console.log(`${key} set to ${value}`);
        target[key] = value
        return true
      },
    })
  }

  reset(objFnName) {
    this.currentStep = 0
    this.objFnName = objFnName
    this.solutions = []
    this.scores = []
    this.minScores = []
    this.meanScores = []
    this.maxScores = []
    this.means = []
    this.scaledSigmas = []
    this.ellipses = []
    this.evalHalfLims = []

    this.chartData = [
      [], // x-values (step)
      [], // min-scores
      [], // mean-scores
      [], // max-scores
    ]

    this.uplot.setData(this.chartData)
  }

  add(message) {
    this.solutions.push(message.solutions)
    this.scores.push(message.scores)
    this.meanScores.push(message.meanScore)
    this.minScores.push(message.minScore)
    this.maxScores.push(message.maxScore)
    this.means.push(message.mean)
    this.scaledSigmas.push(message.scaledSigma)
    this.ellipses.push(message.ellipsePts)
    this.evalHalfLims.push(solutionMargin * message.maxAbsDim)
    this.currentStep = Math.min(this.ellipses.length - 1, this.currentStep)

    this.chartData[0].push(this.chartData[0].length)
    this.chartData[1].push(message.minScore)
    this.chartData[2].push(message.meanScore)
    this.chartData[3].push(message.maxScore)
    this.uplot.setData(this.chartData)
  }

  get evalHalfLim() {
    return this.evalHalfLims[this.currentStep]
  }
}

class DemoChart {
  constructor(cmaHistory, chartCanvasDiv) {
    const opts = {
      title: "Population Scores v Step",
      // id: "chart-canvas-div",
      // class: "my-chart",
      scales: {
        x: {
          time: false,
          auto: true,
          //	range: [0, 6],
        },
        y: {
          auto: true,
          distr: 3,
          // range: [-50, 50],
        },
      },
      series: [
        {
          label: "step",
        },
        {
          label: "min",
          // initial toggled state (optional)
          show: true,

          // spanGaps: false,

          // // in-legend display
          // label: "RAM",
          // value: (self, rawValue) => "$" + rawValue.toFixed(2),

          // series style
          // stroke: "rgba(0,0,0,0.5)",
          stroke: "rgba(0,0,255,0.5)",
          width: 1,
          // fill: "rgba(255, 0, 0, 0.3)",
          // dash: [10, 5],
          points: {
            show: false,
            // size,
            // width,
            // stroke,
            // fill,
          },
        },
        {
          label: "mean",
          show: true,
          stroke: "black",
          width: 1,
        },
        {
          label: "max",
          show: true,
          // stroke: "rgba(0,0,0,0.5)",
          stroke: "rgba(255,0,0,0.5)",
          width: 1,
          points: {
            show: false,
            // size,
            // width,
            // stroke,
            // fill,
          },
        },
      ],
      bands: [
        {
          series: [2, 1],
          fill: "rgba(0,0,0,0.1)",
        },
        {
          series: [3, 2],
          fill: "rgba(0,0,0,0.1)",
        },
      ],
      plugins: [currentStepPlugin({ cmaHistory })],
    }
    return new uPlot(opts, null, chartCanvasDiv)
  }
}

function currentStepPlugin({ cmaHistory }) {
  function updatePlotCurrentStep(u) {
    // console.log(uplot.data[0][cmaHistory.currentStep], cmaHistory.currentStep)
    const cx = Math.round(u.valToPos(cmaHistory.currentStep, "x", true))
    if (!cx) {
      return null
    }

    const uplotCTX = u.ctx

    const stepHighlighterHalfWidth = 8
    uplotCTX.beginPath()
    uplotCTX.fillStyle = "rgba(0, 0, 0, 0.15)"
    uplotCTX.fillRect(
      cx - stepHighlighterHalfWidth,
      u.bbox.top,
      2 * stepHighlighterHalfWidth,
      u.bbox.height
    )
    uplotCTX.fill()
    // uplotCTX.moveTo(cx, 0)
    // uplotCTX.lineTo(cx, uplotCTX.canvas.height)
    // uplotCTX.strokeStyle = "black"
    // uplotCTX.lineWidth = 3
    // uplotCTX.stroke()
  }

  return {
    hooks: {
      draw: updatePlotCurrentStep,
    },
  }
}
