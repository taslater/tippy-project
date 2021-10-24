import {
  chassisPtsDraw,
  upperLegPtsDraw,
  kneePtDraw,
  lowerLegPtsDraw,
  hipPtDraw,
  anklePtDraw,
  footRadiusDraw,
  metersToPixels,
} from "./globals.js"

const lowerLegColor = "rgb(50,50,50)"

export function drawSpot(
  cameraX,
  cameraY,
  xMeters,
  yMeters,
  chassisAngle,
  shoulderAngle,
  hipAngle,
  elbowAngle,
  kneeAngle,
  ctxFG
) {
  ctxFG.save()
  ctxFG.translate(
    xMeters * metersToPixels + cameraX,
    yMeters * metersToPixels + cameraY
  )
  ctxFG.rotate(chassisAngle)
  ctxFG.save()
  drawPoly(chassisPtsDraw, "yellow", ctxFG, "black")

  // ctxFG.rotate(shoulderAngle - chassisAngle)
  ctxFG.rotate(shoulderAngle)
  drawPoly(upperLegPtsDraw, "yellow", ctxFG, "black")
  ctxFG.translate(...kneePtDraw)

  // ctxFG.rotate(elbowAngle - shoulderAngle)
  ctxFG.rotate(elbowAngle)
  drawPoly(lowerLegPtsDraw, lowerLegColor, ctxFG, "black")
  drawFoot(lowerLegColor, ctxFG)
  ctxFG.translate(...hipPtDraw)

  // ctxFG.rotate(hipAngle - chassisAngle)
  ctxFG.rotate(hipAngle)
  drawPoly(upperLegPtsDraw, "yellow", ctxFG, "black")
  ctxFG.translate(...kneePtDraw)

  // ctxFG.rotate(kneeAngle - hipAngle)
  ctxFG.rotate(kneeAngle)
  drawPoly(lowerLegPtsDraw, lowerLegColor, ctxFG)
  drawFoot(lowerLegColor, ctxFG)
}

function drawPoly(pts, color, ctxFG, strokeColor) {
  ctxFG.beginPath()
  ctxFG.moveTo(pts[0], pts[1])
  for (let i = 2; i < pts.length; i += 2) {
    ctxFG.lineTo(pts[i], pts[i + 1])
  }
  ctxFG.lineTo(pts[0], pts[1])
  ctxFG.fillStyle = color
  ctxFG.fill()
  ctxFG.strokeStyle = strokeColor
  ctxFG.stroke()
}

function drawFoot(color, ctxFG) {
  ctxFG.fillStyle = color
  ctxFG.translate(...anklePtDraw)
  ctxFG.beginPath()
  ctxFG.arc(0, 0, footRadiusDraw, 0, 2 * Math.PI)
  ctxFG.fill()
  ctxFG.strokeStyle = "rgb(150,150,150)"
  ctxFG.stroke()
  ctxFG.restore()
}
