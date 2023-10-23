/* Global Variables */

/* Variables of the different sections of code */
const welcomeArea = document.getElementById('welcome-area');
const selectionArea = document.getElementById('selection-area');
const quizArea = document.getElementById('quiz-area');
const resultsArea = document.getElementById('result-area');
const signUpArea = document.getElementById('signup-area');

/* Variables for the form section*/
const nameInput = document.getElementById('name-field');
const emailInput = document.getElementById('email-field');
const ageInput = document.getElementById('age-field');
const signUp2 = document.getElementById('sign-up-2');

/* Buttons to return to former sections */

// Begins the Game!
const beginGame = document.getElementById('begin-game');
beginGame.addEventListener('click', function () {
    welcomeArea.style.display = 'none';
    selectionArea.style.display = 'block';

});

// Refreshes to the welcome section from the quiz-area
const backButton = document.getElementById('back-home');
backButton.addEventListener('click', function () {
    location.reload(true);
});

// Refreshes to the welcome section from the results-area
const tryAgain1 = document.getElementById('try-again-1');
tryAgain1.addEventListener('click', function () {
    location.reload(true);
});

// Refreshes to the welcome section from the sign-up area
const tryAgain2 = document.getElementById('try-again-2');
tryAgain2.addEventListener('click', function () {
   location.reload(true);
});

// Goes to the sign area from the results area
const signUp1 = document.getElementById('sign-up-1');
signUp1.addEventListener('click', function () {
    resultsArea.style.display = 'none';
    signUpArea.style.display = 'block';
});


/* Selection section */

// determines what quiz function runs based on the datatype clicked on
document.addEventListener('click', function () {
    let selectButtons = document.getElementsByClassName('select-buttons');

    for (let button of selectButtons) {
        button.addEventListener('click', function () {
            let quizType = this.getAttribute('data-type');
            runQuiz(quizType);
        });
    }
});

/* Quiz section */

// Runs the quiz which quiz type is clicked on
function runQuiz(quizType) {

    if (quizType === 'fantasy') {
        fantasyQuiz();
    } else if (quizType === 'comedy') {
        comedyQuiz()
    } else if (quizType === 'horror') {
        horrorQuiz()
    } else {
        window.alert(`Unknown game type: ${quizType}`);
    }
};

/* General Variables for the question section of code */ 
let currentQuestion = 0;

const questionText = document.getElementById("question-text");
const answerButtons = document.getElementsByClassName("answer");
const nextButton = document.getElementById("next-question");

// functions the questions for fantasy questions
function fantasyQuiz() {

    selectionArea.style.display = 'none';

    quizArea.style.display = 'block';

    const current = fantasyQuestions[currentQuestion];
    questionText.textContent = `${current.question}`;

    for (let i = 0; i < answerButtons.length; i++) {
        const button = answerButtons[i];
        const answerText = current.answers[i];
        button.textContent = answerText;
    }
}

// functions the questions comedy questions
function comedyQuiz() {

    selectionArea.style.display = 'none';

    quizArea.style.display = 'block';

    const current = comedyQuestions[currentQuestion];
    questionText.textContent = `${current.question}`;

    for (let i = 0; i < answerButtons.length; i++) {
        const button = answerButtons[i];
        const answerText = current.answers[i];
        button.textContent = answerText;
    }
}

// functions the questions horror questions
function horrorQuiz() {

    selectionArea.style.display = 'none';

    quizArea.style.display = 'block';

    const current = horrorQuestions[currentQuestion];
    questionText.textContent = `${current.question}`;

    for (let i = 0; i < answerButtons.length; i++) {
        const button = answerButtons[i];
        const answerText = current.answers[i];
        button.textContent = answerText;
    }
}

// logs users data, and creates alerts on fill in inputs
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