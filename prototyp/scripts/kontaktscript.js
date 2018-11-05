let submitElement = document.getElementById("submit");
let modal = document.getElementById("myModal");
let divModalElement = document.getElementById("divModal");
let closeElement = document.getElementById("close");
submitElement.addEventListener('click', displayModal);
closeElement.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function displayModal() {
  if (document.forms["form"]["navn"].value == "" || document.forms["form"]["email"].value == "" || document.forms["form"]["tekst"].value == "") {
    alert("Alle feltene må fylles ut.")
  }
  else {
    let melding = "Takk for din henvendelse, " + document.forms["form"]["navn"].value + ". Du vil få svar fortløpende på: " + document.forms["form"]["email"].value;
    divModalElement.innerHTML = melding;
    modal.style.display = "block";
    document.forms["form"]["navn"].value = "";
    document.forms["form"]["email"].value = "";
    document.forms["form"]["tekst"].value = "";
  }
}