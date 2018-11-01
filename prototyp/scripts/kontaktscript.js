var submit = document.getElementById("submit");
var email = document.getElementById("e-mail");
var navn = document.getElementById("navn");
submit.addEventListener('click', formSubmit);
//Funskjon som lager en streng med navn og e-post kunden legger inn, og returnerer strengen.
function display() {
  var melding = "Takk for din henvendelse, " + navn.value+ ". Du vil få svar fortløpende på: "+ email.value;
  return melding;
}
//Legger til en funksjon som forhindrer nettsiden i å reloade når send-knappen blir trykket på.
function formSubmit(event) {
  event.preventDefault();
}


// Henter modal
var modal = document.getElementById("myModal");
// Henter inn elementet vi skal putte info inn i
var element = document.getElementById("pModal");
var fragment = document.createDocumentFragment();
// Henter span-elementet som lukker modal
var span = document.getElementsByClassName("close")[0];

// Onclick:  open the modal
submit.onclick = function() {
    element.innerHTML = display();
    modal.style.display = "block";
}

// when clicking on span (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// when click outside modal, close modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
