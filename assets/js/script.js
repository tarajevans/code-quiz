var counter = 75
var countdown = function () {
    console.log(counter);
    counter--;
    if(counter === 0) {
        console.log("Blastoff");
        clearInterval(startCountdown);
    };
};

var startCountdown = setInterval(countdown, 1000);