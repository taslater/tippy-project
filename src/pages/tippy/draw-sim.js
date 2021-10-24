import { globals } from "./globals.js"
import { xPosToTerrainIdx, terrainIdxToXPos } from "./tippy.js"
import { drawCanvas } from "./../../js/draw-canvas.js"

export function drawTippy(
  tippy,
  terrainPts,
  scale,
  center,
  ctx,
  chassisCanvas,
  wheelCanvas,
  lidarCanvas
) {
  const {
    wheelPosCurrent,
    wheelAngleCurrent,
    chassisPosCurrent,
    chassisAngleCurrent,
  } = tippy.drawPositionData

  ctx.lineWidth = 2

  const chassisMass = tippy.chassisMass,
    wheelMass = tippy.wheelMass,
    totalMass = chassisMass + wheelMass

  const massCenter = [
    (chassisPosCurrent[0] * chassisMass + wheelPosCurrent[0] * wheelMass) /
      totalMass,
    // (chassisPosCurrent[1] * chassisMass + wheelPosCurrent[1] * wheelMass) /
    //   totalMass,
    wheelPosCurrent[1],
  ]
  const wheelPosOffset = [
      wheelPosCurrent[0] - massCenter[0],
      wheelPosCurrent[1] - massCenter[1],
    ],
    chassisPosOffset = [
      chassisPosCurrent[0] - massCenter[0],
      chassisPosCurrent[1] - massCenter[1],
    ]
  const halfW = ctx.canvas.width / 2
  const viewLimitsX = [
    massCenter[0] - halfW / scale,
    massCenter[0] + halfW / scale,
  ]

  let visibleTerrainIdxMin = xPosToTerrainIdx(viewLimitsX[0]),
    visibleTerrainIdxMax = xPosToTerrainIdx(viewLimitsX[1])

  visibleTerrainIdxMin = Math.max(visibleTerrainIdxMin - 1, 0)
  visibleTerrainIdxMax = Math.min(
    visibleTerrainIdxMax + 1,
    globals.nTerrainPts - 1
  )

  ctx.save()
  ctx.translate(center[0], center[1])

  const drawBottom = ctx.canvas.height - center[1]
  if (visibleTerrainIdxMax != 1) {
    ctx.beginPath()
    ctx.moveTo(
      scale * (terrainIdxToXPos(visibleTerrainIdxMin) - massCenter[0]),

      scale * (terrainPts[visibleTerrainIdxMin] - massCenter[1])
    )
    for (let i = visibleTerrainIdxMin + 1; i <= visibleTerrainIdxMax; i++) {
      ctx.lineTo(
        scale * (terrainIdxToXPos(i) - massCenter[0]),
        scale * (terrainPts[i] - massCenter[1])
      )
    }
    ctx.lineTo(
      scale * (terrainIdxToXPos(visibleTerrainIdxMax) - massCenter[0]),
      drawBottom
    )
    ctx.lineTo(
      scale * (terrainIdxToXPos(visibleTerrainIdxMin) - massCenter[0]),
      drawBottom
    )
    ctx.closePath()
    ctx.fillStyle = "green"
    ctx.fill()

    ctx.strokeStyle = "black"
    ctx.lineWidth = 1
    for (let i = visibleTerrainIdxMin; i <= visibleTerrainIdxMax; i++) {
      const idx = i - (globals.nTerrainPts - 1) / 2,
        x = scale * (terrainIdxToXPos(i) - massCenter[0]),
        y = scale * (terrainPts[i] - massCenter[1])
      ctx.beginPath()
      ctx.moveTo(x, y)
      if (
        idx * globals.groundDetailInterval <= -globals.groundHalfWidth ||
        idx * globals.groundDetailInterval >= globals.groundHalfWidth
      ) {
        continue
      }
      let l = 10
      if (idx % 4 == 0) {
        l = 40
      } else if (idx % 2 == 0) {
        l = 20
      }
      ctx.lineTo(x, y - l)
      ctx.stroke()
    }
  }

  if (
    globals.groundHalfWidth > viewLimitsX[0] &&
    globals.groundHalfWidth < viewLimitsX[1]
  ) {
    drawWall(globals.nTerrainPts - 1, terrainPts, massCenter, drawBottom, ctx)
  }
  if (
    -globals.groundHalfWidth >= viewLimitsX[0] &&
    -globals.groundHalfWidth <= viewLimitsX[1]
  ) {
    drawWall(0, terrainPts, massCenter, drawBottom, ctx)
  }

  drawCanvas(
    chassisCanvas,
    ctx,
    [scale * chassisPosOffset[0], scale * chassisPosOffset[1]],
    chassisAngleCurrent
  )

  drawCanvas(
    wheelCanvas,
    ctx,
    [scale * wheelPosOffset[0], scale * wheelPosOffset[1]],
    wheelAngleCurrent
  )

  const reverse = tippy.reverse
  for (let j = 0; j < globals.xOffs.length; j++) {
    const lidarY = tippy.lidarYs[j],
      xOff = reverse * globals.xOffs[j]
    drawCanvas(
      lidarCanvas,
      ctx,
      [
        scale * (wheelPosOffset[0] + xOff),
        scale * (wheelPosOffset[1] + tippy.wheelR + lidarY),
      ],
      0
    )
  }

  ctx.restore()
}

function drawWall(idx, terrainPts, massCenter, drawBottom, ctx) {
  const mirror = idx == 0 ? -1 : 1,
    wallTopDraw = scale * (terrainPts[idx] - massCenter[1] - globals.wallH),
    wallHDraw = drawBottom - wallTopDraw
  ctx.fillStyle = "gray"
  ctx.fillRect(
    scale * (mirror * globals.groundHalfWidth - massCenter[0]),
    wallTopDraw,
    scale * mirror * globals.wallW,
    wallHDraw
  )
}

export function drawInputBar(target, ctx) {
  const h = ctx.canvas.height,
    halfW = ctx.canvas.width / 2
  ctx.lineWidth = 3
  ctx.fillStyle = "red"
  ctx.fillRect(
    halfW,
    h - 1.2 * globals.barHeight,
    globals.barMax * target,
    globals.barHeight
  )

  ctx.beginPath()
  ctx.moveTo(halfW, h - 0.2 * globals.barHeight)
  ctx.lineTo(halfW, h - 1.2 * globals.barHeight)
  ctx.stroke()
}

// function drawCanvas(canvasFrom, ctxTo, center, angle) {
//   ctxTo.save()
//   ctxTo.translate(center[0], center[1])
//   ctxTo.rotate(angle)
//   ctxTo.translate(-0.5 * canvasFrom.width, -0.5 * canvasFrom.height)
//   ctxTo.drawImage(canvasFrom, 0, 0)
//   ctxTo.restore()
// }

export function getWheelCanvas(d) {
  const wheelCanvas = document.createElement("canvas"),
    wheelCTX = wheelCanvas.getContext("2d")

  const border = 1
  wheelCanvas.width = d + 2 * border
  wheelCanvas.height = d + 2 * border

  const tireThickness = (d * 25) / 400,
    tireR = 0.5 * (d - tireThickness),
    rimThickness = (d * 18) / 400,
    rimShapowThickness = (d * 15) / 400,
    rimR = tireR - 0.5 * (tireThickness + rimThickness),
    hubR = (d * 47) / 400,
    axleCapR = (d * 17) / 400,
    lugOffset = (d * 33) / 400,
    lugR = (d * 10) / 400,
    shadowColor = "rgb(130,130,130)"

  wheelCTX.save()
  wheelCTX.translate(0.5 * wheelCanvas.width, 0.5 * wheelCanvas.height)

  // tire
  // ctx.createRadialGradient(x0, y0, r0, x1, y1, r1)
  const grd = wheelCTX.createRadialGradient(
    0,
    0,
    rimR,
    0,
    0,
    tireR + tireThickness
  )
  grd.addColorStop(0, "black")
  grd.addColorStop(0.4, "rgb(40,40,40)")
  grd.addColorStop(0.55, "rgb(65,65,65)")
  grd.addColorStop(0.8, "black")
  wheelCTX.beginPath()
  wheelCTX.arc(0, 0, tireR, 0, Math.PI * 2)
  wheelCTX.lineWidth = tireThickness
  wheelCTX.strokeStyle = grd
  wheelCTX.stroke()

  // rim shadow
  wheelCTX.beginPath()
  wheelCTX.arc(
    0,
    0,
    rimR - 0.5 * (rimThickness + rimShapowThickness),
    0,
    Math.PI * 2
  )
  wheelCTX.lineWidth = rimShapowThickness
  wheelCTX.strokeStyle = shadowColor
  wheelCTX.stroke()

  // hub shadow
  wheelCTX.beginPath()
  wheelCTX.arc(0, 0, hubR, 0, Math.PI * 2)
  wheelCTX.lineWidth = (d * 5) / 400
  wheelCTX.strokeStyle = shadowColor
  wheelCTX.stroke()

  for (let _ = 0; _ < 5; _++) {
    spoke()
    wheelCTX.rotate((Math.PI * 2) / 5)
  }

  // rim
  wheelCTX.beginPath()
  wheelCTX.arc(0, 0, rimR, 0, Math.PI * 2)
  wheelCTX.lineWidth = rimThickness
  wheelCTX.strokeStyle = "silver"
  wheelCTX.stroke()

  // hub
  wheelCTX.beginPath()
  wheelCTX.arc(0, 0, hubR, 0, Math.PI * 2)
  wheelCTX.fillStyle = "silver"
  wheelCTX.fill()

  // axle
  wheelCTX.beginPath()
  wheelCTX.arc(0, 0, axleCapR, 0, Math.PI * 2)
  wheelCTX.lineWidth = (d * 0.7) / 400
  wheelCTX.strokeStyle = "black"
  wheelCTX.stroke()

  // lugs
  for (let _ = 0; _ < 5; _++) {
    lug()
    wheelCTX.rotate((Math.PI * 2) / 5)
  }

  function halfSpoke(stroke) {
    wheelCTX.beginPath()
    wheelCTX.moveTo(-1, hubR)
    wheelCTX.lineTo((d * 21) / 400, hubR - (d * 10) / 400)
    wheelCTX.lineTo((d * 12) / 400, 0.32 * (hubR - (d * 10) / 400 + rimR))
    wheelCTX.lineTo((d * 9) / 400, 0.75 * rimR)
    wheelCTX.lineTo((d * 11) / 400, 0.9 * rimR)
    wheelCTX.lineTo((d * 28) / 400, rimR)
    wheelCTX.lineTo(-1, rimR)
    wheelCTX.moveTo(-1, hubR - (d * 10) / 400)
    if (stroke) {
      wheelCTX.lineWidth = (d * 4) / 400
      wheelCTX.strokeStyle = shadowColor
      wheelCTX.stroke()
    } else {
      wheelCTX.fillStyle = "silver"
      wheelCTX.fill()
    }
  }

  function spoke() {
    wheelCTX.save()
    halfSpoke(true)
    wheelCTX.scale(-1, 1)
    halfSpoke(true)
    wheelCTX.restore()
    wheelCTX.save()
    halfSpoke(false)
    wheelCTX.scale(-1, 1)
    halfSpoke(false)
    wheelCTX.restore()
  }

  function lug() {
    wheelCTX.save()
    wheelCTX.translate(0, lugOffset)
    wheelCTX.beginPath()
    for (let i = 0; i < 6; i++) {
      const theta = (i * Math.PI) / 3,
        coord = [lugR * Math.cos(theta), lugR * Math.sin(theta)]
      if (i == 0) {
        wheelCTX.moveTo(...coord)
      } else {
        wheelCTX.lineTo(...coord)
      }
    }
    wheelCTX.closePath()
    wheelCTX.fillStyle = "rgb(150,150,150)"
    wheelCTX.fill()
    wheelCTX.strokeStyle = "black"
    wheelCTX.lineWidth = (d * 0.7) / 400
    wheelCTX.stroke()
    wheelCTX.restore()
  }

  wheelCTX.restore()
  return wheelCanvas
}

export function getChassisCanvas(chassisVertices, scale) {
  const chassisCanvas = document.createElement("canvas"),
    chassisCTX = chassisCanvas.getContext("2d")
  const border = 1
  const xLims = [Infinity, -Infinity],
    yLims = [Infinity, -Infinity]
  for (let xy of chassisVertices) {
    const x = xy[0],
      y = xy[1]
    xLims[0] = Math.min(xLims[0], x)
    xLims[1] = Math.max(xLims[1], x)
    yLims[0] = Math.min(yLims[0], y)
    yLims[1] = Math.max(yLims[1], y)
  }
  chassisCanvas.width = scale * (xLims[1] - xLims[0]) + 2 * border
  chassisCanvas.height = scale * (yLims[1] - yLims[0]) + 2 * border

  chassisCTX.translate(0.5 * chassisCanvas.width, 0.5 * chassisCanvas.height)

  chassisCTX.beginPath()
  chassisCTX.moveTo(
    scale * chassisVertices[0][0],
    scale * chassisVertices[0][1]
  )
  for (let i = 1; i < chassisVertices.length; i++) {
    chassisCTX.lineTo(
      scale * chassisVertices[i][0],
      scale * chassisVertices[i][1]
    )
  }
  chassisCTX.closePath()
  chassisCTX.fillStyle = "orange"
  chassisCTX.fill()
  chassisCTX.stroke()

  chassisCTX.font = "25px sans-serif"
  chassisCTX.textAlign = "center"
  // chassisCTX.textBaseline = "middle"
  chassisCTX.textBaseline = "bottom"
  chassisCTX.fillStyle = "black"
  chassisCTX.rotate(0.5 * Math.PI)
  chassisCTX.translate(-35, 0)
  chassisCTX.fillText("TIPPY", 0, 0)
  chassisCTX.rotate(1 * Math.PI)
  chassisCTX.fillText("TIPPY", 0, 0)

  return chassisCanvas
}

export function getLidarCanvas() {
  const lidarCanvas = document.createElement("canvas"),
    lidarCTX = lidarCanvas.getContext("2d")
  const border = 1,
    pointR = 5,
    d = 2 * (border + pointR)

  lidarCanvas.width = d
  lidarCanvas.height = d

  lidarCTX.translate(0.5 * lidarCanvas.width, 0.5 * lidarCanvas.height)

  lidarCTX.beginPath()
  lidarCTX.arc(0, 0, pointR, 0, 2 * Math.PI)
  lidarCTX.fillStyle = "red"
  lidarCTX.fill()

  return lidarCanvas
}
