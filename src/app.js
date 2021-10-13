import style from "./main.css"
import component from "./component.js"

console.log("fresh")

document.body.append(component())

const worker = new Worker(new URL("./sim-worker.js", import.meta.url))
