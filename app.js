var min = 0;
var sec = 0;
var mSec = 0;

var miniute = document.getElementById('min')
var second = document.getElementById('sec')
var milliSecond = document.getElementById('mSec')

var interval;

function stopwatch() {
    mSec++
    milliSecond.innerHTML = mSec;
    if (mSec >= 100) {
        sec++
        second.innerHTML = sec;
        mSec = 0;
    }
    else if (sec >= 60) {
        min++
        miniute.innerHTML = min;
        sec = 0;
    }
}

// Start Button ***************
function start() {
    interval = setInterval(stopwatch, 10);
    document.getElementById("start-btn").disabled = true;
}

// Stop Button ***************
function stop() {
    clearInterval(interval, 10);
    document.getElementById("start-btn").disabled = false;
}

// Reset Button ***************
function reset() {
    stop();
    min = "00";
    sec = "00";
    mSec = "00";
    milliSecond.innerHTML = mSec;
    second.innerHTML = sec;
    miniute.innerHTML = min;
    document.getElementById("start-btn").disabled = false;
}
