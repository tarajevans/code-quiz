var counter = 75;
var questionIndex=0;
var questionTextArea = document.querySelector("#questions");
var timerDisplay = document.querySelector("#timer");
var answerDisplayArea = document.querySelector("#answers");
var startButton = document.querySelector("#startButton");
var score = 0;
var highScores = [];

function countDown(){

var countdown = function () {
    timerDisplay.textContent= "Time Left: " + counter +"s";
    counter--;
        if(counter <= 0) {
            finalScore(); // triggers the end of quiz when time runs out
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
        answers: ["All the Below", "For", "While", "Do-while loops"],
        correct: "All the Below"
    },
    {
        question: "What are the two basic groups of data types in JavaScript?", 
        answers: ["Primitive and Attribute", "Primitive and Reference Types", "Reference Types and Attribute", "None of the Above"],
        correct: "Primitive and Reference Types"
    },
    {
        question: "Commonly used data types DO NOT include:", 
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correct: "Alerts"
    },
    {
        question: "Boolean operators that can be used in JavaScript include:", 
        answers: ["'And' Operator &&", "'Or' Operator ||", "'Not' Operator !", "All the Above"],
        correct: "All the Above"
    },
    {
        question: "Which one of these is not among the three different types of errors in JavaScript?", 
        answers: ["Animation Time Errors", "Load Time Errors", "Run Time Errors", "Logical Errors"],
        correct: "Animation Time Errors"
    },
    {
        question: "What is the data type of variables in JavaScript?", 
        answers: ["Object Data Types", "Function Data Type", "None of the Above", "All of the Above"],
        correct: "Object Data Types"
    },
    {
        question: "The condition in an if / else statement is enclosed within __.", 
        answers:  ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        correct: "Parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store __.", 
        answers: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
        correct: "All of the Above"
    },
    {
        question: "String values must be enclosed within __ when being assigned to variables.", 
        answers: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
        correct: "Quotes"
    },
    {
        question: "What is the type of Pop up boxes available in JavaScript?:", 
        answers: ["Alert",  "Confirm", "Prompt", "All the Above"], 
        correct: "All the Above"
    }];

// main function to control test
function startTest() {
    loadHighScores();
    startButton.remove();
    countDown();
    displayQuestionAndAnswer();
}

function displayQuestionAndAnswer() {
    displayQuestion(questionIndex);
    displayAnswers(questionIndex);
}

//check to see if correct answer selected
function checkCorrectAnswer(event) {
    var chosenAnswer = event.target;
            if (chosenAnswer.textContent === questions[questionIndex].correct) {
            showCorrectSnackbar(); // calls the snackbar for being correct
            score ++;
                }else{
                    penalty(); // applies a wrong answer penalty 
                    showIncorrectSnackbar();  // calls the snackbar for being incorrect
                }

    advanceQuestionIndex();
    var tempAnswerOl = document.querySelector("#tempAnswersDiv");
    tempAnswerOl.remove();
    displayQuestionAndAnswer();
}


//listing answer for current question
function displayAnswers(qIndex){
    var answerChoices = questions[qIndex].answers;

var tempAnswersOl = document.createElement("ol");

tempAnswersOl.setAttribute("id", "tempAnswersDiv");
answerDisplayArea.appendChild(tempAnswersOl);

answerChoices.forEach(function(answerText){
    var buttonLi = document.createElement("li");
    var answerButton = document.createElement("button");
    answerButton.textContent = answerText;
    answerButton.setAttribute("class", "startButton");
    answerButton.addEventListener("click", checkCorrectAnswer);
    buttonLi.appendChild(answerButton);
    tempAnswersOl.appendChild(buttonLi);    
})
}

//display question based on question index
function displayQuestion(qIndex) {
    questionTextArea.textContent = questions[qIndex].question;
}

// next question
function advanceQuestionIndex() {

    if (questionIndex < questions.length - 1) {
        questionIndex ++;
        }else {
            finalScore();
            window.location.href = "./scores.html"; // navigates the user to the scores page after collecting their initials
        }
}

// penalty for wrong answer
function penalty(){
    counter -= 10;
}

//save to local storage
function finalScore() {
    var playerInitials = prompt("Your score is: " + score + ", Please enter your initials"); //capture player initials
    highScores.push([playerInitials, score]); //add player score to high scores
    var highScoresString=JSON.stringify(highScores); //turn highScores[] into a string
    localStorage.setItem("highScores",JSON.stringify(highScores)); //store highScores in local storage as a string
}

//get from local and store in highScores
function loadHighScores() {
    var storageReturn=localStorage.getItem("highScores");
    if (storageReturn==null) {
        console.log("Highscores not found in local storage");
        } else {highScores = JSON.parse (storageReturn);
sortArray ();}
}

function sortArray() {
    highScores.sort(function(a,b) {
        return a[1] - b[1];
    });
    highScores.reverse();
}

//show the snackbar for a correct answer
function showCorrectSnackbar(){
    // Get the snackbar DIV
     var correctSnackbar = document.querySelector("#correctSnackbar");
   
     // Add the "show" class to DIV
     correctSnackbar.className = "show";
   
     // After 3 seconds, remove the show class from DIV
     setTimeout(function(){ correctSnackbar.className = correctSnackbar.className.replace("show", ""); }, 1000);
}

//show the snackbar for a incorrect answer
function showIncorrectSnackbar(){
    // Get the snackbar from index.hmtl
    var incorrectSnackbar = document.querySelector("#incorrectSnackbar");

    // Add the "show" class to the snackbar
    incorrectSnackbar.className = "show";

    // After 3 seconds, remove the show class from the snackbar
    setTimeout(function(){ incorrectSnackbar.className = incorrectSnackbar.className.replace("show", ""); }, 1000);
}

// Create Button listeners
startButton.addEventListener("click", startTest); //calls the test function when clicked