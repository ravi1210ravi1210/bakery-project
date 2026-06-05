let toggleMenu = document.getElementsByClassName("active-toggle")[0]
let toggleBtn = document.getElementsByClassName("toogle-menu")[0]
let croseBtn = document.getElementsByClassName("crose")[0]


toggleBtn.addEventListener("click", function () {

  toggleMenu.style.display = "block"
  toggleBtn.style.display = "none"
  croseBtn.style.display = "block"

})

croseBtn.addEventListener("click", function () {
  toggleMenu.style.display = "none"
  croseBtn.style.display = "none"
  toggleBtn.style.display = "block"
})


let goTop = document.getElementsByClassName("go-top")[0]

goTop.addEventListener("click", function () {
  scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

window.addEventListener("scroll", function () {
  if (pageYOffset > 100) {
    goTop.style.display = "block"
  } else {
    goTop.style.display = "none"
  }
})

