var counter = 75;

function countDown(){

var countdown = function () {
    console.log(counter);
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
    'Question 1'="Which one is a looping structure in JavaScript?", 
    'Question 2'="What are the two basic groups of data types in JavaScript?", 
    'Question 3'="Commonly used data types DO NOT include:", 
    'Question 4'="Boolean operators that can be used in JavaScript include:", 
    'Question 5'="Which one of these is not among the three different types of errors in JavaScript?",'Question 6'="What is the data type of variables in JavaScript?", 
    'Question 7'="The condition in an if / else statement is enclosed within ____.", 
    'Question 8'="Arrays in JavaScript can be used to store ____.",
    'Question 9'="String values must be enclosed within ____ when being assigned to variables.",
    'Question 10'="What is the type of Pop up boxes available in JavaScript?:"
];
// an array to store the answer choices
var answers = [
    ['question 1 answer 1'="All the below", 
    'question 1 answer 2'="For", 
    'question 1 answer 3'="While", 
    'question 1 answer 4'="do-while loops"], 
    //Correct = "All the below"
    ['question 2 answer 1'="Primitive and attribute", 
    'question 2 answer 2'="Primitive and reference types", 
    'question 2 answer 3'="Reference types and attribute", 
    'question 2 answer 4'="None of the above"], 
    //Correct = "Primitive and reference types"
    ['question 3 answer 1'="strings", 
    'question 3 answer 2'="booleans", 
    'question 3 answer 3'="alerts", 
    'question 3 answer 4'="numbers"],
    //Correct ="alerts"
    ['question 4 answer 1'="'And' Operator &&", 
    'question 4 answer 2'="'Or' Operator ||", 
    'question 4 answer 3'="'Not' Operator !", 
    'question 4 answer 4'="All the above"], 
    //Correct ="All the above"
    ['question 5 answer 1'="Animation time errors", 
    'question 5 answer 2'="Load time errors", 
    'question 5 answer 3'="Run time errors", 
    'question 5 answer 4'="Logical Errors"], 
    //Correct="Animation time errors"
    ['question 6 answer 1'= "Object data types", 
    'question 6 answer 2'="Function data type", 
    'question 6 answer 3'="None of the above", 
    'question 6 answer 4'="All of the above"],
    //Correct="Object data types"
    ['question 7 answer 1'="quotes", 
    'question 7 answer 2'="curly brackets", 
    'question 7 answer 3'="parentheses", 
    'question 7 answer 4'="square brackets"],
    //Correct="parentheses"
    ['question 8 answer 1'="numbers and strings", 
    'question 8 answer 2'="other arrays", 
    'question 8 answer 3'="booleans", 
    'question 8 answer 4'="all of the above"], 
    //Correct="all of the above"
    ['question 9 answer 1'="commas", 
    'question 9 answer 2'="curly brackets", 
    'question 9 answer 3'="quotes", 
    'question 9 answer 4'="parentheses"],
    //Correct="quotes"
    ['question 10 answer 1'="Alert", 
    'question 10 answer 2'="Confirm", 
    'question 10 answer 3'="Prompt", 
    'question 10 answer 4'="All the above"]
    //Correct="All the above"
];
var correctAnswers = [['question 1', 2], ['question 2', 0], ['question 3', 1]];
// Create Buttons
var testButton = document.querySelector("button[name='testButton']");
var countDownButton = document.querySelector("button[name='startCountDown']");

// A function to test code with 
function testFunct(){
    penalty();
    console.log(questions[0] + " possible answers: "+ answers[0][0]+ " " + answers[0][1]+ " " + answers[0][2] + ' correct answer' + correctAnswers[0][1]);
    console.log(questions[0] + " possible answers: "+ answers[0]+ ' correct answer' + correctAnswers[0][1]);
}

// penalty for wrong answer
function penalty(){
    counter -= 10;
}

// Create Button listeners

testButton.addEventListener("click", testFunct); //calls the test function when clicked
countDownButton.addEventListener("click", countDown); //calls the countDown function when clicked