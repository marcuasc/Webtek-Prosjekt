var checkedValue = null; 
var inputElements = document.getElementsByClassName('container');
for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           //break;
           
      }
    console.log(inputElements);
    console.log(checkedValue + "cV")
}
let checkList = [];
function addChecked() {
    
}

/* UFULLSTENDIG KODE, FUNKER IKKE
function buildQuiz() {
    const output = [];
    // for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // lagre listen med svarene
            const answers = [];

            // og for alle mulige svar 
            for (letter in currentQuestion.answers) {

                // lager vi en html radio button
                answers.push(
                    `<label>
<input type="radio" name="question${questionNumber}" value="${letter}">
${letter} :
${currentQuestion.answers[letter]}
</label>`
                );
            }

            // legger spørsmålet og svarene til output
            output.push(
                `<div class="
question "> ${currentQuestion.question} </div> <
div class = "answers" > $ {
answers.join('')
} < /div>`
            );
            // finally combine our output list into one string of HTML and put it on the page
            quizContainer.innerHTML = output.join('');

        }

    );
}


function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    resultsContainer.innerHTML = answerContainers;
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: "Hva slags brød vil du ha?",
            answers: {
                1: "Grovt brød",
                2: "Fint brød",
            },
        },
        {
            question: "Hva slags kjøtt vil du ha?",
            answers: {
                1: "Biff",
                2: "Tartar",
                3: "Rødbete"
            },
        },
        {
            question: "Hva slags tilbehør?",
            answers: {
                1: "Bacon",
                2: "Tomat",
                3: "Salat",
                4: "Ost"
            },

        }
    ];
    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener('click', showResults);

}


*/
