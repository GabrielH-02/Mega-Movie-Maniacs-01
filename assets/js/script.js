/* Global Variables */

const welcomeArea = document.getElementById('welcome-area');
const selectionArea = document.getElementById('selection-area');
const questionArea = document.getElementById('quiz');
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
        displayFantasyQuestions();
    } else if (quizType === 'comedy') {
        displayComedyQuestions();
    } else if (quizType === 'horror') {
        displayHorrorQuestions();
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
};

let currentQuestion = 0;
let score = 0;

const questionStatement = document.getElementById('question-text');
const answersStatements = document.getElementsByClassName('answer');
const nextQ = document.getElementById('next-question');

function displayFantasyQuestions() {

    window.alert(`You've eneter fantasy`);

    const current = fantasyQuestions[currentQuestion];
    questionStatement.textContent = `${current.question}`;

    for (let i = 0; i < answersStatements.length; i++) {
        answersStatements[i].textContent = curren.answers[i];
        answersStatements[i].addEventListener('click', checkAnswer);
    }

};


function displayComedyQuestions() {
    selectionArea.style.display = 'none';

    questionArea.style.display = 'block';

};

function displayHorrorQuestions() {
    selectionArea.style.display = 'none';

    questionArea.style.display = 'block';
};

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