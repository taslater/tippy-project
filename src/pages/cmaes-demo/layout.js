import { chartHeight } from "./globals.js"
import _ from "lodash"

const settingsContainer = document.getElementById("settings-container"),
  settingsContainerStyles = window.getComputedStyle(settingsContainer),
  settingsContainerLRPad =
    parseFloat(settingsContainerStyles["paddingLeft"]) +
    parseFloat(settingsContainerStyles["paddingRight"]),
  firstSettingWrapper = document.querySelector(".setting-wrapper"),
  firstSettingWrapperStyles = window.getComputedStyle(firstSettingWrapper),
  minSettingsWidth =
    settingsContainerLRPad +
    firstSettingWrapper.offsetWidth +
    parseFloat(firstSettingWrapperStyles["marginLeft"]) +
    parseFloat(firstSettingWrapperStyles["marginRight"])

const chartContainer = document.getElementById("chart-container"),
  objFnContainer = document.getElementById("gradient-container"),
  topContainer = document.getElementById("top-container"),
  hideableElements = document.getElementsByClassName("hideable")

const settingsBtn = document.getElementById("settings-btn")
settingsBtn.onclick = () => {
  const hide = hideableElements[0].classList.contains("hidden")
  for (let el of hideableElements) {
    if (hide) {
      el.classList.remove("hidden")
    } else {
      el.classList.add("hidden")
    }
  }
  settingsBtn.innerHTML = hide ? "Hide Settings" : "Show Settings"
  styleSettingsButton()
}

window.onresize = () => {
  resizeLayout()
}
resizeLayout()

// window.onresize = _.debounce(() => {
//   resizeElements()
// }, 100)
// resizeElements()

function resizeLayout() {
  const windowWidth = window.innerWidth,
    windowHeight = window.innerHeight
  chartContainer.style.height = `${chartHeight}px`
  chartContainer.style.width = `${windowWidth}px`
  const gradientContainerDim = `${Math.min(
    windowWidth,
    windowHeight - chartHeight
  )}px`
  objFnContainer.style.height = gradientContainerDim
  objFnContainer.style.width = gradientContainerDim

  const availableWidth = window.innerWidth - objFnContainer.offsetWidth
  if (availableWidth > minSettingsWidth) {
    topContainer.style.maxHeight = gradientContainerDim
    topContainer.style.flexDirection = "row"
    settingsContainer.style.flexFlow = "column nowrap"
    objFnContainer.style.alignSelf = "flex-end"
  } else {
    topContainer.style.maxHeight = "min-content"
    topContainer.style.flexDirection = "column"
    settingsContainer.style.flexFlow = "row wrap"
    objFnContainer.style.alignSelf = "center"
  }
  styleSettingsButton()
}

function styleSettingsButton() {
  const hiding = hideableElements[0].classList.contains("hidden"),
    wideView = window.getComputedStyle(topContainer)["flexDirection"] == "row"
  console.log(hiding, wideView)
  if (!wideView && !hiding) {
    settingsBtn.parentElement.style.minWidth = "100%"
  } else {
    settingsBtn.parentElement.style.minWidth = "auto"
  }
}
