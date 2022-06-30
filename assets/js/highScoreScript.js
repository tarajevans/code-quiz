var highScores = [];


function loadHighScores() {
    var storageReturn=localStorage.getItem("highScores");
    if (storageReturn==null) {
        console.log("Highscores not found in local storage");
        } else {highScores = JSON.parse (storageReturn);
sortArray ();}
}

// organizes the highScore Array to display highest sccore first
function sortArray(){
    //sorts the highScores array into a lowest to highest list of scores
    highScores.sort(function(a,b) {
        return a[1] - b[1];
    });
    // revereses the array so highest score comes first
    highScores.reverse();
}

// creates the list items to be displayed in the OL on the scores.html page
function displayHighScores(){
    // calling loadHighScores from above
    loadHighScores();
    // assign the OL item from scores.html to highScoreOrderedList
    var highScoreOrderedList = document.querySelector("#highScoreList");
    // create a list item for each high score entry in highScores[]
    for (var firstArrayIndex = 0; firstArrayIndex < highScores.length; firstArrayIndex++){
        var newListItem = document.createElement("li");
        newListItem.textContent = highScores[firstArrayIndex][0] + "-" + highScores[firstArrayIndex][1];
        highScoreOrderedList.appendChild(newListItem);
    }

}