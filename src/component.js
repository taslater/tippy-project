import logo from "./logo.svg"

function component() {
  const m = document.createElement("main"),
    p = document.createElement("p"),
    img = document.createElement("img")
  m.append(p)
  p.append(img)
  img.src = logo
  img.alt = "sample logo"
  return m
}

export default component
