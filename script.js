const stopwatch = document.querySelector(".stopwatch");
const toggleBtn = document.querySelector(".toggle-button");
const resetBtn = document.querySelector(".reset-button");

let startTime;
let elapsedTime = 0;
let intervalTimer;

////////////////////////
function start() {
  intervalTimer = setInterval(function () {
    elapsedTime = Date.now() - startTime;
    let hours = Math.floor(elapsedTime / 1000 / 60 / 60);
    let minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    stopwatch.textContent = `${pad(hours)} : ${pad(minutes)} : ${pad(
      seconds
    )} . ${pad(milliseconds)}`;
  }, 10);
}

////////////////////////
function pad(number) {
  return number.toString().padStart(2, "0");
}

////////////////////////
function startStop() {
  if (toggleBtn.textContent === "START") {
    startTime = Date.now() - elapsedTime;
    start();
    toggleBtn.textContent = "STOP";
  } else {
    clearInterval(intervalTimer);
    toggleBtn.textContent = "START";
  }
}

////////////////////////////
function reset() {
  clearInterval(intervalTimer);
  elapsedTime = 0;
  stopwatch.textContent = "00 : 00 : 00 . 00";
  toggleBtn.textContent = "START";
}

/////////////////////////
toggleBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);
