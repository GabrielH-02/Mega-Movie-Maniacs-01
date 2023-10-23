/* Global Variables */

const welcomeArea = document.getElementById('welcome-area');
const selectionArea = document.getElementById('selection-area');
const questionArea = document.getElementById('quiz-container');
const resultsArea = document.getElementById('results-area');
const signUpArea = document.getElementById('signup-area');


const nameInput = document.getElementById('name-field');
const emailInput = document.getElementById('email-field');
const ageInput = document.getElementById('age-field');
const signUp2 = document.getElementById('sign-up-2');

/* Buttons to return to former sections */

const beginGame = document.getElementById('begin-game');
beginGame.addEventListener('click', function () {
    welcomeArea.style.display = 'none';
    selectionArea.style.display = 'block';

});

const backButton = document.getElementById('back-home');
backButton.addEventListener('click', function () {
    questionArea.style.display = 'none';
    welcomeArea.style.display = 'block';
});

const tryAgain1 = document.getElementById('try-again-1');
tryAgain1.addEventListener('click', function () {
    resultsArea.style.display = 'none';

    welcomeArea.style.display = 'block';
});

const tryAgain2 = document.getElementById('try-again-2');
tryAgain2.addEventListener('click', function () {
    signUpArea.style.display = 'none';

    welcomeArea.style.display = 'block';
});

const signUp1 = document.getElementById('sign-up-1');
signUp1.addEventListener('click', function () {
    resultsArea.style.display = 'none';
    signUpArea.style.display = 'block';
});

document.addEventListener('click', function () {
    let selectButtons = document.getElementsByClassName('select-buttons');

    for (let button of selectButtons) {
        button.addEventListener('click', function () {
            let quizType = this.getAttribute('data-type');
            runQuiz(quizType);
        });
    }
});

/* Functions */

function runQuiz(quizType) {

    if (quizType === 'fantasy') {
        loadQuestion();
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
};

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answerButton1 = document.getElementsByClassName("answer");
const nextButton = document.getElementById("next-question");

function loadQuestion() {

    selectionArea.style.display = 'none';

    questionArea.style.display = 'block';

    const current = questions[currentQuestion];
    questionText.textContent = `${current.question}`;
}

signUp2.addEventListener('click', signUpInput);
function signUpInput() {

    let name = nameInput.value;
    let email = emailInput.value;
    let age = ageInput.value;

    if (name === "" || email === "") {
        window.alert("Please fill in all fields with valid information.");
    } else {
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Age: " + age);

        window.alert(`Thank you, ${name}! You're submisson was successfully. You will be contacted sortly!`);
    }
}