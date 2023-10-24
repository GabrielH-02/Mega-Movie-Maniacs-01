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

// adds an event listener to the selction buttons
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

// determines what quiz function runs based on the datatype clicked on
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
let score = 0; 

const questionText = document.getElementById("question-text");
const answerButtons = document.getElementsByClassName("answer");
const scoreDisplay = document.getElementById("score");

// functions the questions for fantasy questions
function fantasyQuiz() {

    selectionArea.style.display = 'none';

    quizArea.style.display = 'block';

    let current = fantasyQuestions[currentQuestion];
    questionText.textContent = `${current.question}`;

    for (let i = 0; i < answerButtons.length; i++) {
        let button = answerButtons[i];
        let answerText = current.answers[i];
        button.textContent = answerText;
        button.addEventListener("click", checkAnswer1);
    }
}

// fantasy questions checks answers
function checkAnswer1(event) {
    let selectedAnswer = event.target.textContent;
    let correctAnswer = fantasyQuestions[currentQuestion].answers[fantasyQuestions[currentQuestion].correct];

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < fantasyQuestions.length) {
        fantasyQuiz();
    } else {
        showResult();
    }
}

// functions the questions comedy questions
function comedyQuiz() {

    selectionArea.style.display = 'none';

    quizArea.style.display = 'block';

    let current = comedyQuestions[currentQuestion];
    questionText.textContent = `${current.question}`;

    for (let i = 0; i < answerButtons.length; i++) {
        let button = answerButtons[i];
        let answerText = current.answers[i];
        button.textContent = answerText;
        button.addEventListener("click", checkAnswer2);
    }
}

// comedy questions checks answers
function checkAnswer2(event) {
    let selectedAnswer = event.target.textContent;
    let correctAnswer = comedyQuestions[currentQuestion].answers[comedyQuestions[currentQuestion].correct];

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < comedyQuestions.length) {
        comedyQuiz();
    } else {
        showResult();
    }
}

// functions the questions horror questions
function horrorQuiz() {

    selectionArea.style.display = 'none';

    quizArea.style.display = 'block';

    let current = horrorQuestions[currentQuestion];
    questionText.textContent = `${current.question}`;

    for (let i = 0; i < answerButtons.length; i++) {
        let button = answerButtons[i];
        let answerText = current.answers[i];
        button.textContent = answerText;
        button.addEventListener("click", checkAnswer3);
    }
}

// horror questions checks answers
function checkAnswer3(event) {
    let selectedAnswer = event.target.textContent;
    let correctAnswer = horrorQuestions[currentQuestion].answers[horrorQuestions[currentQuestion].correct];

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < horrorQuestions.length) {
        horrorQuiz();
    } else {
        showResult();
    }
}

// shows the amount of point gained in result area
function showResult() {
    quizArea.style.display = "none";
    scoreDisplay.textContent = score;
    resultsArea.style.display = "block";
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
