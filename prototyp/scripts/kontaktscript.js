var submit = document.getElementById("submit");
var melding = document.getElementById("melding");
var email = document.getElementById("e-mail");
var navn = document.getElementById("navn");
submit.addEventListener('click', display);
submit.addEventListener('click', formSubmit);
//Funskjon som lager en streng med navn og e-post til kunden, og legger denne til i et <p> element under submit-knappen.
function display() {
  melding.innerHTML = "Takk for din henvendelse, " + navn.value+ ". Du vil få svar fortløpende på: "+ email.value;
}
//Legger til en funksjon som forhindrer nettsiden i å reloade når knappen blir trykket på.
function formSubmit(event) {
  event.preventDefault();
}
