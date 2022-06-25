var counter = 75;
var questionIndex=0;
var questionTextArea = document.querySelector("#questions");
var timerDisplay = document.querySelector("#timer");
var answerDisplayArea = document.querySelector("#answers");
var answerOL = document.querySelector("#answerOL");

function countDown(){

var countdown = function () {
    timerDisplay.textContent= "Time Left: " + counter +"s";
    counter--;
    if(counter === 0) {
        console.log("Time's Up!");
        clearInterval(startCountdown);
    };
};

var startCountdown = setInterval(countdown, 1000);
}
// an array to store the questions
// Reference to Questions and Answers taken from Michael Rudolph/ReindeerCode https://github.com/ReindeerCode/Web-APIs-Code-Quiz/blob/master/JS/questions.js

var questions = [
    {
        question: "Which one is a looping structure in JavaScript?",
        answers: ["All the below", "For", "While", "do-while loops"],
        correct: "All the below"
    },
    {
        question: "What are the two basic groups of data types in JavaScript?", 
        answers: ["Primitive and attribute", "Primitive and reference types", "Reference types and attribute", "None of the above"],
        correct: "Primitive and reference types"
    },
    {
        question: "Commonly used data types DO NOT include:", 
        answers: ["strings", "booleans", "alerts", "numbers"],
        correct: "alerts"
    },
    {
        question: "Boolean operators that can be used in JavaScript include:", 
        answers: ["'And' Operator &&", "'Or' Operator ||", "'Not' Operator !", "All the above"],
        correct: "All the above"
    },
    {
        question: "Which one of these is not among the three different types of errors in JavaScript?", 
        answers: ["Animation time errors", "Load time errors", "Run time errors", "Logical Errors"],
        correct: "Animation time errors"
    },
    {
        question: "What is the data type of variables in JavaScript?", 
        answers: ["Object data types", "Function data type", "None of the above", "All of the above"],
        correct: "Object data types"
    },
    {
        question: "The condition in an if / else statement is enclosed within __.", 
        answers:  ["quotes", "curly brackets", "parentheses", "square brackets"],
        correct: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store __.", 
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "all of the above"
    },
    {
        question: "String values must be enclosed within __ when being assigned to variables.", 
        answers: ["commas", "curly brackets", "quotes", "parentheses"],
        correct: "quotes"
    },
    {
        question: "What is the type of Pop up boxes available in JavaScript?:", 
        answers: ["Alert",  "Confirm", "Prompt", "All the above"], 
        correct: "All the above"
    }];

// main function to control test
function startTest() {
    counter = 75;
    countDown();

    displayQuestion(questionIndex);
    displayAnswers(questionIndex);
    advanceQuestionIndex();
}
//check to see if correct answer selected
function checkCorrectAnswer(qIndex, selectedAnswer) {
    corAnswer = questions[qIndex].correct;
if (selectedAnswer === corAnswer) {
    console.log("Correct!");
    } else {
        console.log("Incorrect!");
    }

}
//listing answer for current question
function displayAnswers(qIndex){
    var answerChoices = questions[qIndex].answers;

    answerChoices.forEach(function(answerText){

    var answerListItem = document.createElement("li");
    answerListItem.textContent = answerText;
    answerOL.appendChild(answerListItem);
   })
}

// Create Buttons
var testButton = document.querySelector("button[name='testButton']");
var countDownButton = document.querySelector("button[name='startCountDown']");

//display question based on question index
function displayQuestion(qIndex) {
    questionTextArea.textContent = questions[qIndex].question;
}
// next question
function advanceQuestionIndex() {

    if (questionIndex < questions.length - 1) {
        questionIndex ++;
        }else if (questionIndex >= questions.length) {
            questionIndex = questions.length -1;
        }
}

// A function to test code with 
function testFunct(){
    penalty();
    //console.log(questions.length);
}
// penalty for wrong answer
function penalty(){
    counter -= 10;
}

// Create Button listeners
testButton.addEventListener("click", startTest); //calls the test function when clicked
countDownButton.addEventListener("click", countDown); //calls the countDown function when clicked