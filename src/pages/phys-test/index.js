require("../../main.scss")
require("./index.css")
import { canvasW, canvasH } from "./globals.js"

const workerB2D = new Worker(new URL("./b2d-worker.js", import.meta.url)),
  workerRapier = new Worker(new URL("./rapier-worker.js", import.meta.url))

const canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d")

canvas.height = canvasH
canvas.width = canvasW

ctx.beginPath()
ctx.arc(0.5 * canvas.width, 0.5 * canvas.height, 10, 0, 2 * Math.PI)
ctx.fill()
