let headHour1 = document.getElementById("hour1");
let headHour2 = document.getElementById("hour2");

let headMin1 = document.getElementById("minute1");
let headMin2 = document.getElementById("minute2");

let headSec1 = document.getElementById("second1");
let headSec2 = document.getElementById("second2");

let headMilSec1 = document.getElementById("miliSec1");
let headMilSec2 = document.getElementById("miliSec2");

let hour1 = 0;
let hour2 = 0;

let min1 = 0;
let min2 = 0;

let sec1 = 0;
let sec2 = 0;

let milSec1 = 0;
let milSec2 = 0;

let interval;

function time() {
  milSec2++;
  headMilSec2.innerHTML = milSec2;

  if (milSec2 > 9) {
    milSec2 = 0;
    headMilSec2.innerHTML = milSec2;

    milSec1++;
    headMilSec1.innerHTML = milSec1;
  } else if (milSec1 > 9) {
    milSec1 = 0;
    headMilSec1.innerHTML = milSec1;

    sec2++;
    headSec2.innerHTML = sec2 + ":";
  } else if (sec2 > 9) {
    sec2 = 0;
    headSec2.innerHTML = sec2 + ":";

    sec1++;
    headSec1.innerHTML = sec1;
  } else if (sec1 > 5) {
    sec1 = 0;
    headSec1.innerHTML = sec1;

    min2++;
    headMin2.innerHTML = min2 + ":";
  } else if (min2 > 9) {
    min2 = 0;
    headMin2.innerHTML = min2 + ";";

    min1++;
    headMin1.innerHTML = min1;
  } else if (min1 > 5) {
    min1 = 0;
    headMin1.innerHTML = min1;

    hour2++;
    headHour2.innerHTML = hour2 + ":";
  } else if (hour2 > 9) {
    hour2 = 0;
    headHour2.innerHTML = hour2 + ":";

    hour1++;
    headHour1.innerHTML = hour1;
  }
}

function start() {
  let start = document.getElementById("startBtn");
  start.disabled = true;
  clearInterval(interval);
  interval = setInterval(time, 10);
}

function pause() {
  clearInterval(interval);
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

  milSec1 = 0;
  milSec2 = 0;

  headHour1.innerHTML = hour1;
  headHour2.innerHTML = hour2 + ":";

  headMin1.innerHTML = min1;
  headMin2.innerHTML = min2 + ":";

  headSec1.innerHTML = sec1;
  headSec2.innerHTML = sec2 + ":";

  headMilSec1.innerHTML = milSec1;
  headMilSec2.innerHTML = milSec2;
}
