let timer = document.querySelector('.timer');
let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let yellow = document.getElementById('yellow');

let laps=document.querySelector(".laps")

let msec = '00';
let secs = '00';
let mins = '00';

let timerId = null;

function timerStart() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;

        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;


    timer.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}

green.addEventListener('click', function () {
    
    if (timerId != null) {
        clearInterval(timerId);
    }
    timerId = setInterval(timerStart, 10);
});

red.addEventListener('click', function () {
    clearInterval(timerId);
});

blue.addEventListener('click', function () {
    clearInterval(timerId);
    timer.innerHTML = '00 : 00 : 00'
    msec = secs = mins = '00';
    laps.innerHTML = ''; // Clear the laps list when reset
});
yellow.addEventListener('click', function () {
    let lapTime = timer.innerHTML;
    let lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    laps.appendChild(lapItem);
});