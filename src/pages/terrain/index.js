require("./index.scss")
require("../../main.scss")
// https://github.com/bestiejs/benchmark.js/issues/128#issuecomment-271615298
// https://stackoverflow.com/a/43313089
import _ from "lodash"
import process from "process"

const benchmark = require("benchmark")
const Benchmark = benchmark.runInContext({ _, process })
window.Benchmark = Benchmark

const suite = new Benchmark.Suite()

suite
  // add listeners
  .on("cycle", function (event) {
    console.log(String(event.target))
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"))
  })
  // run async
  .run({ async: true })
