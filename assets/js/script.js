var counter = 75;

function countDown(){

var countdown = function () {
    console.log(counter);
    counter--;
    if(counter === 0) {
        console.log("Blastoff");
        clearInterval(startCountdown);
    };
};

var startCountdown = setInterval(countdown, 1000);
}
// an array to store the questions
var questions = ['Question 1', 'Question 2', 'Question 3'];
// an array to store the answer choices
var answers = [['question 1 answer 1', 'question 1 answer 2', 'question 1 answer 3'],['question 2 answer 1', 'question 2 answer 2', 'question 2 anser 3'], ['question 3 answer 1', 'question 3 answer 2', 'question 3 anser 3']];
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