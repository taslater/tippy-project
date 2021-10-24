const testArray = new Float32Array(128)

for (let i = 0; i < testArray.length; i++) {
  testArray[i] = Math.random()
}

onmessage = () => {
  postMessage(testArray.buffer)
}
