var hourElement = document.getElementById('hour');
var minutesElement = document.getElementById('minutes');
var secondsElement = document.getElementById('seconds');


var hourCount = 0;
var minutesCount = 0;
var secondsCount = 0;




function updateSeconds() {
    secondsCount = secondsCount + 1;



    if (secondsCount === 60) {
        secondsCount = 0;
        minutesCount++;



        if (minutesCount === 60) {
            minutesCount = 0;
            hourCount++;

            hourElement.innerText = hourCount < 10 ? "0" + hourCount : hourCount;
        }
        minutesElement.innerText = minutesCount < 10 ? "0" + minutesCount : minutesCount;
    }

    if (secondsCount < 10) {
        secondsElement.innerText = "0" + secondsCount;
    } else {
        secondsElement.innerText = secondsCount;
    }

}



// function startTimer() {
//     setInterval(updateSeconds, 1000);
// }


var buttonCount = 0;
var intervalId;



var startButton = document.getElementById('start-timer')
startButton.addEventListener("click", function () {
    if (buttonCount < 1) {
        // startTimer();
        intervalId = setInterval(updateSeconds, 1000)
    }
    buttonCount++;
})

function stopCount() {
    var stopButton = document.getElementById('stop-timer')
    stopButton.addEventListener("click", function () {

        clearInterval(intervalId)
        buttonCount = 0;
    })

}
stopCount()

var resetButton = document.getElementById('reset-timer')
resetButton.addEventListener("click", function () {

    clearInterval(intervalId)

    hourElement.innerText = "00";
    minutesElement.innerText = "00";
    secondsElement.innerText = "00";

    hourCount = 0;
    minutesCount = 0;
    secondsCount = 0;

    buttonCount = 0;



})

var saveButton = document.getElementById('save-timer')
saveButton.addEventListener("click", function () {
    const savedDiv = document.querySelector('.container')
    const displayed = document.querySelector('.displayed')
    var savedTime = document.createElement('p')
    savedTime.innerText = displayed.innerText

    savedDiv.appendChild(savedTime)

    clearInterval(intervalId)
    buttonCount = 0;


})

var savedDiv = document.querySelector('.container')