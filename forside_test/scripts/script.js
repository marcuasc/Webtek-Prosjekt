const navbarElement = document.getElementById("navbar")
const menuButtonElement = document.getElementById("menuButton")
const resizeOn = 1;
let show = false;
let mobile = false;
window.addEventListener('scroll', resizeNavbar);
menuButtonElement.onclick = menuToggle;
/*
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
  mobile = true;
  menuButtonElement.style.display = "block";
  navbarElement.id = "navbar_mobile";
}
*/
function resizeNavbar() {
  if (mobile === false) {
    const scrollY = window.pageYOffset;
    if (scrollY > resizeOn) {
      navbarElement.classList.add("small");
    }
    else {
      navbarElement.classList.remove("small");
    }
  }
}

function menuToggle() {
  const scrollY = window.pageYOffset;
  if (show === false) {
    show = true
    navbarElement.classList.add("show");
    menuButtonElement.classList.add("toggled");
  }
  else {
    show = false
    navbarElement.classList.remove("show");
    menuButtonElement.classList.remove("toggled");
  }
}