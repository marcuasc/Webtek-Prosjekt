//img-filename in an array
const img_f = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg"];
let pics = document.querySelectorAll(".pic");

for (var i = 0; i < img_f.length; i++) {

}

for (let i = 0; i < img_f.length; i++) {

  pics[i].innerHTML = "<img src='img/pic"+ (i+1) +".jpg' alt='N4'>";
  if (i != 0) {
    pics[i].style.visibility = "hidden";
  }
}

/*for (var i = 0; i < img_f.length; i++) {
pics[1].style.backgroundImage = "url(img/" + img_f[1] + ")";
}*/
let al = document.querySelectorAll("a");
let dots = document.querySelectorAll(".dots");
let slideshowEl = document.querySelector(".slideshow");

//defines the left attributes for the dots and makes the first dot grey
for (let i = 1; i < dots.length +1; i++) {
  dots[i-1].style.left = (320+(i*25)) + "px";
  dots[0].style.backgroundColor = "grey";
  //dots[i-1].addEventListener("click",dotFunc);
}

for (let i = 0; i < 2; i++) {
al[i].addEventListener("click",kjor);
}

let indexVisible = 0;
let indexNext;

function kjor(e) {
  //skriver ut classen til elementet som har blitt trykket på
  console.log(e.target.className);
if (e.target.className === "next") {
if (indexVisible === pics.length-1) {
  indexNext = 0;
} else {
  indexNext = indexVisible + 1;
}
pics[indexNext].style.visibility = "visible";
pics[indexVisible].style.visibility = "hidden";
dots[indexNext].style.backgroundColor = "gray";
dots[indexVisible].style.backgroundColor = "lightgrey";

indexVisible = indexNext;
  }
if (e.target.className === "prev") {
console.log("JAAAA");
if (indexVisible === 0) {
  indexNext = pics.length-1;
} else {
  indexNext = indexVisible - 1;
}
pics[indexNext].style.visibility = "visible";
pics[indexVisible].style.visibility = "hidden";
dots[indexNext].style.backgroundColor = "gray";
dots[indexVisible].style.backgroundColor = "lightgrey";

indexVisible = indexNext;

}
}
/*function dotFunc(e) {
console.log(e.target.id);
for (let i = 0; i < img_f.length; i++) {
console.log("ja");
}
}*/
