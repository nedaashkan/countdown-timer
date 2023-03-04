let newYear = "21 Mar 2023";
let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
let countDownContainerEl = document.getElementById("countdown-app");
let massage;
let timerId;

let seconds = 1000;
let minutes = seconds * 60;
let hours = minutes * 60;
let days = hours * 24;

function countDown() {
  let todayDate = new Date();
  let newYearDate = new Date(newYear);
  let totalMs = newYearDate - todayDate;
  let totalSeconds = Math.floor(totalMs / 1000);
  let totalMinutes = Math.floor(totalSeconds / 60);
  let totalHours = Math.floor(totalMinutes / 60);
  let totalDays = Math.floor(totalHours / 24);
  let displayDays = totalDays;

  let displayHours = Math.floor((totalMs % days) / hours);
  let displayMinutes = Math.floor((totalMs % hours) / minutes);
  let displaySeconds = Math.floor((totalMs % minutes) / seconds);

  daysEl.textContent = displayDays;
  hoursEl.textContent = displayHours;
  minutesEl.textContent = displayMinutes;
  secondsEl.textContent = displaySeconds;

  if (totalMs <= -days) {
    countDownContainerEl.classList.add("massage");
    massage = "I Hope You will Have a Nice Year";
    countDownContainerEl.textContent = massage;
    clearInterval(timerId);
    return;
  }
  if (totalMs <= 0) {
    countDownContainerEl.classList.add("massage");
    massage = "Happy New Year";
    countDownContainerEl.textContent = massage;
    clearInterval(timerId);
    return;
  }
}
timerId = setInterval(countDown, seconds);
