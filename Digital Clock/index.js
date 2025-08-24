function updateClock(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const seconds = String(now.getSeconds()).padStart(2,'0');

    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

let stopWatchInterval;
let elapsed = 0;
let running = false;

function updateStopwatch(){
    let time = new Date(elapsed);
    let minutes = String(time.getUTCMinutes()).padStart(2,'0');
    let seconds = String(time.getUTCSeconds()).padStart(2,'0');
    let ms = String(Math.floor(time.getUTCMilliseconds()/10)).padStart(2,'0');
    document.getElementById("stopwatch").textContent = `${minutes}:${seconds}:${ms}`;
}

document.getElementById("start").onclick = function(){
    if(!running){
        running = true;
        let startTime = Date.now() - elapsed;
        stopWatchInterval = setInterval(() => {
            elapsed = Date.now() - startTime;
            updateStopwatch();
        }, 10);
    }
}

document.getElementById("stop").onclick = function () {
    running = false;
    clearInterval(stopWatchInterval);
}

document.getElementById("reset").onclick = function(){
    running = false;
    clearInterval(stopWatchInterval);
    elapsed = 0;
    updateStopwatch();
}

let timerInterval;
let timerSeconds = 0;
let runningTimer = false;
function updateTimer(){
    let min = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
    let sec = String(timerSeconds % 60).padStart(2, '0');
    document.getElementById("timer").textContent = `${min}:${sec}`;
}

document.getElementById("setTimer").onclick = function(){
    let minInput = parseInt(document.getElementById("minutes").value) || 0;
    let secInput = parseInt(document.getElementById("seconds").value) || 0;
    timerSeconds = minInput * 60 + secInput;
    updateTimer();
}

document.getElementById("startTimer").onclick = function() {
    if(!runningTimer && timerSeconds>0){
        runningTimer = true;
        timerInterval = setInterval(() => {
            timerSeconds--;
            updateTimer();
            if(timerSeconds<=0){
                clearInterval(timerInterval);
                runningTimer = false;
                alert("time's up");
            }
        }, 1000);
    }
}

document.getElementById("stopTimer").onclick = function(){
    runningTimer = false;
    clearInterval(timerInterval);
}

document.getElementById("resetTimer").onclick = function(){
    runningTimer = false;
    clearInterval(timerInterval);
    timerSeconds = 0;
    updateTimer();
}