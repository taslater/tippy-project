export function drawCanvas(canvasFrom, ctxTo, center, angle) {
  ctxTo.save()
  ctxTo.translate(center[0], center[1])
  if (angle !== 0) {
    ctxTo.rotate(angle)
  }
  ctxTo.translate(-0.5 * canvasFrom.width, -0.5 * canvasFrom.height)
  ctxTo.drawImage(canvasFrom, 0, 0)
  ctxTo.restore()
}
