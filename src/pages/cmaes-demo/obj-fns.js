export const objFns = {
  // https://www.sfu.ca/~ssurjano/ackley.html
  // https://www.sfu.ca/~ssurjano/Code/ackleym.html
  ackley: (inputs) => {
    // default a=20, b=0.2, c=2pi
    const a = 20,
      b = 0.2,
      c = 2 * Math.PI
    // let d = inputs.length
    const d = 2,
      d_inv = 0.5 // (1 / d)
    let sum1 = 0,
      sum2 = 0
    for (let i = 0; i < d; i++) {
      let xi = inputs[i]
      sum1 += xi * xi
      sum2 += Math.cos(c * xi)
    }
    // let d_inv = 1 / d
    let term1 = -a * Math.exp(-b * Math.sqrt(sum1 * d_inv)),
      term2 = -Math.exp(sum2 * d_inv)
    return term1 + term2 + a + Math.E
  },
  // http://benchmarkfcns.xyz/benchmarkfcns/bohachevskyn1fcn.html
  // https://www.sfu.ca/~ssurjano/Code/boha1m.html
  // https://www.sfu.ca/~ssurjano/boha.html
  bohachevsky1: (inputs) => {
    let x1 = inputs[0]
    let x2 = inputs[1]

    let term1 = x1 * x1
    let term2 = 2 * x2 * x2
    let term3 = -0.3 * Math.cos(3 * Math.PI * x1)
    let term4 = -0.4 * Math.cos(4 * Math.PI * x2)

    return term1 + term2 + term3 + term4 + 0.7
  },
  // https://www.sfu.ca/~ssurjano/griewank.html
  griewank: (inputs) => {
    let d = inputs.length
    let sum = 0
    let prod = 1
    for (let i = 0; i < d; i++) {
      let xi = inputs[i]
      sum += (xi * xi) / 4000
      prod *= Math.cos(xi / Math.sqrt(i + 1))
    }
    return sum - prod + 1
  },
  // https://www.sfu.ca/~ssurjano/rastr.html
  rastrigin: (inputs) => {
    let d = inputs.length
    let sum = 0
    for (let i = 0; i < d; i++) {
      let xi = inputs[i]
      sum += xi * xi - 10 * Math.cos(2 * Math.PI * xi)
    }
    return 10 * d + sum
  },
}

// fancy names for select menu
objFns.ackley.fancyName = "Ackley"
objFns.bohachevsky1.fancyName = "Bohachevsky No.1"
objFns.griewank.fancyName = "Griewank"
objFns.rastrigin.fancyName = "Rastrigin"

// fnLims for display limits
objFns.ackley.xyLim = 32.768
objFns.bohachevsky1.xyLim = 100
objFns.griewank.xyLim = 600
objFns.rastrigin.xyLim = 5.12
