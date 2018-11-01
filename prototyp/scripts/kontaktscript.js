var submit = document.getElementById("submit");
var melding = document.getElementById("melding")
submit.addEventListener('click', display);
submit.addEventListener('click', formSubmit)

function display() {
  melding.innerHTML = "Meldingen din er sendt";
}

function formSubmit(event) {
  event.preventDefault();
}