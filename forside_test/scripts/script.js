const navbarElement = document.getElementById("navbar")
const menuElement = document.getElementById("menu")
const menuButtonElement = document.getElementById("menuButton")
const resizeOn = 1;
let show = false;
window.addEventListener('scroll', resizeNavbar);
menuButtonElement.onclick = menuToggle;

function resizeNavbar() {
  const scrollY = window.pageYOffset;
  if (scrollY > resizeOn) {
    navbarElement.classList.add("small");
  }
  else {
    navbarElement.classList.remove("small");
  }
}

function menuToggle() {
  const scrollY = window.pageYOffset;
  if (show === false) {
    show = true
    navbarElement.classList.add("toggled");
    menuElement.classList.add("toggled");
    menuButtonElement.classList.add("toggled");
  }
  else {
    show = false
    navbarElement.classList.remove("toggled");
    menuElement.classList.remove("toggled");
    menuButtonElement.classList.remove("toggled");
  }
}