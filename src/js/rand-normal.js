export function box_muller() {
  let u0 = Math.random()
  let u1 = Math.random()
  // let part0 = (-2.0 * u0.ln()).sqrt()
  let part0 = Math.sqrt(-2.0 * Math.log(u0))
  let part1 = 2.0 * Math.PI * u1
  let z0 = part0 * Math.cos(part1)
  let z1 = part0 * Math.sin(part1)

  return Float32Array.from([z0, z1])
}

export function rand_normal(n) {
  const res = new Float32Array(n)
  for (let i = 0; i < n; i++) {
    const pair = box_muller()
    res[i] = pair[0]
    if (i + 1 >= n) {
      break
    }
    i++
    res[i] = pair[1]
  }
  return res
}
