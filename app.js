let headHour1 = document.getElementById("hour1");
let headHour2 = document.getElementById("hour2");

let headMin1 = document.getElementById("minute1");
let headMin2 = document.getElementById("minute2");

let headSec1 = document.getElementById("second1");
let headSec2 = document.getElementById("second2");

let headMilSec = document.getElementById("miliSec");

let hour1 = 0;
let hour2 = 0;

let min1 = 0;
let min2 = 0;

let sec1 = 0;
let sec2 = 0;

let milSec = 0;

let startTime;
let elapsedTime = 0;
let interval;

function updateDisplay() {
  headHour1.innerHTML = hour1;
  headHour2.innerHTML = hour2 + ":";

  headMin1.innerHTML = min1;
  headMin2.innerHTML = min2 + ":";

  headSec1.innerHTML = sec1;
  headSec2.innerHTML = sec2 + ":";

  headMilSec.innerHTML = milSec;
}

function time() {
  const now = Date.now();
  const diff = now - startTime + elapsedTime;

  milSec = Math.floor((diff % 1000) / 10);
  if (milSec === 99) {
    milSec = 0;
    sec2++;
  } else if (sec2 === 10) {
    sec2 = 0;
    sec1++;
  } else if (sec1 === 6) {
    sec1 = 0;
    min2++;
  } else if (min2 === 10) {
    min2 = 0;
    min1++;
  } else if (min1 === 6) {
    min1 = 0;
    hour2++;
  } else if (hour2 === 10) {
    hour2 = 0;
    hour1++;
  }

  updateDisplay();
}

function start() {
  let start = document.getElementById("startBtn");
  start.disabled = true;
  startTime = Date.now();
  interval = setInterval(time, 10);
}

function pause() {
  clearInterval(interval);
  elapsedTime += Date.now() - startTime;
  let start = document.getElementById("startBtn");
  start.disabled = false;
}

function reset() {
  pause();

  hour1 = 0;
  hour2 = 0;

  min1 = 0;
  min2 = 0;

  sec1 = 0;
  sec2 = 0;

  milSec = 0 + "0";

  elapsedTime = 0;

  updateDisplay();
}
