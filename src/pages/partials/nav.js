// https://webdesign.tutsplus.com/articles/best-practices-for-responsive-dropdown-menus--cms-35212
const hrefCurrent = window.location.pathname.split("/").slice(-1)[0],
  currentPageLinks = document.querySelectorAll(`a[href='${hrefCurrent}']`)
for (let link of currentPageLinks) {
  link.classList.add("current-page")
  link.href = "javascript:void(0)"
}

const toggle = document.querySelector(".nav-toggle")
const menu = document.querySelector(".nav-menu")
const items = document.querySelectorAll(".nav-item")

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active")
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>"
  } else {
    menu.classList.add("active")
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>"
  }
}

// /* Activate Submenu */
// function toggleItem() {
//   if (this.classList.contains("submenu-active")) {
//     this.classList.remove("submenu-active")
//   } else if (menu.querySelector(".submenu-active")) {
//     menu.querySelector(".submenu-active").classList.remove("submenu-active")
//     this.classList.add("submenu-active")
//   } else {
//     this.classList.add("submenu-active")
//   }
// }

// /* Close Submenu From Anywhere */
// function closeSubmenu(e) {
//   let isClickInside = menu.contains(e.target)

//   if (!isClickInside && menu.querySelector(".submenu-active")) {
//     menu.querySelector(".submenu-active").classList.remove("submenu-active")
//   }
// }

/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false)
// for (let item of items) {
//   if (item.querySelector(".submenu")) {
//     item.addEventListener("click", toggleItem, false)
//   }
//   item.addEventListener("keypress", toggleItem, false)
// }
// document.addEventListener("click", closeSubmenu, false)
