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
    ["Which one is a looping structure in JavaScript?", 0],
    ["What are the two basic groups of data types in JavaScript?", 1],
    ["Commonly used data types DO NOT include:", 2],
    ["Boolean operators that can be used in JavaScript include:", 3],
    ["Which one of these is not among the three different types of errors in JavaScript?", 0],
    ["What is the data type of variables in JavaScript?", 0],
    ["The condition in an if / else statement is enclosed within ____.", 2],
    ["Arrays in JavaScript can be used to store ____.", 3],
    ["String values must be enclosed within ____ when being assigned to variables.", 2],
    ["What is the type of Pop up boxes available in JavaScript?:", 3],
];
// an array to store the answer choices
var answers = [
    ["All the below", 
    "For", 
    "While", 
    "do-while loops"], 
    //Correct = "All the below"
    ["Primitive and attribute", 
    "Primitive and reference types", 
    "Reference types and attribute", 
    "None of the above"], 
    //Correct = "Primitive and reference types"
    ["strings", 
    "booleans", 
    "alerts", 
    "numbers"],
    //Correct ="alerts"
    ["'And' Operator &&", 
    "'Or' Operator ||", 
    "'Not' Operator !", 
    "All the above"], 
    //Correct ="All the above"
    ["Animation time errors", 
    "Load time errors", 
    "Run time errors", 
    "Logical Errors"], 
    //Correct="Animation time errors"
    ["Object data types", 
    "Function data type", 
    "None of the above", 
    "All of the above"],
    //Correct="Object data types"
    ["quotes", 
    "curly brackets", 
    "parentheses", 
    "square brackets"],
    //Correct="parentheses"
    ["numbers and strings", 
    "other arrays", 
    "booleans", 
    "all of the above"], 
    //Correct="all of the above"
    ["commas", 
    "curly brackets", 
    "quotes", 
    "parentheses"],
    //Correct="quotes"
    ["Alert", 
    "Confirm",
    "Prompt", 
    "All the above"]
    //Correct="All the above"
];
// Create Buttons
var testButton = document.querySelector("button[name='testButton']");
var countDownButton = document.querySelector("button[name='startCountDown']");

// A function to test code with 
function testFunct(){
    penalty();

}
for (var questionIndex=0; questionIndex < questions.length; questionIndex ++) {
    console.log (questions [questionIndex] [0] + answers [questionIndex] + questions [questionIndex] [1]);
}

// penalty for wrong answer
function penalty(){
    counter -= 10;
}

// Create Button listeners

testButton.addEventListener("click", testFunct); //calls the test function when clicked
countDownButton.addEventListener("click", countDown); //calls the countDown function when clicked