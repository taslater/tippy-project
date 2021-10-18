function getChart(ctx) {
  return new Chart(ctx, {
    type: "scatter",
    // data: {
    //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //   datasets: [
    //     {
    //       label: "# of Votes",
    //       data: [12, 19, 3, 5, 2, 3],
    //       backgroundColor: [
    //         "rgba(255, 99, 132, 0.2)",
    //         "rgba(54, 162, 235, 0.2)",
    //         "rgba(255, 206, 86, 0.2)",
    //         "rgba(75, 192, 192, 0.2)",
    //         "rgba(153, 102, 255, 0.2)",
    //         "rgba(255, 159, 64, 0.2)",
    //       ],
    //       borderColor: [
    //         "rgba(255, 99, 132, 1)",
    //         "rgba(54, 162, 235, 1)",
    //         "rgba(255, 206, 86, 1)",
    //         "rgba(75, 192, 192, 1)",
    //         "rgba(153, 102, 255, 1)",
    //         "rgba(255, 159, 64, 1)",
    //       ],
    //       borderWidth: 1,
    //     },
    //   ],
    // },

    // options: {
    //   scales: {
    //     y: {
    //       beginAtZero: true,
    //     },
    //   },
    // },
    options: {
      scales: {
        x: {
          type: "linear",
          position: "bottom",
        },
      },
      animation: false,
      parsing: false,
      normalized: true,
    },
  })
}

// https://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately
// input: h in [0,360] and s,v in [0,1] - output: r,g,b in [0,1]
function hsv2rgb(h, s, v) {
  let f = (n, k = (n + h / 60) % 6) =>
    v - v * s * Math.max(Math.min(k, 4 - k, 1), 0)
  return [f(5), f(3), f(1)]
}

function randRGB() {
  const h = 360 * Math.random(),
    s = 1,
    v = 1
  let rgb = hsv2rgb(h, s, v).map((x) => Math.round(255 * x))
  return `rgb(${rgb.toString()})`
}
