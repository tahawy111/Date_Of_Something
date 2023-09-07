/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String
*/


// The End Of The Year Date Countdown
let countDownDate = new Date(
  // `2023-10-05T23:59:59.999Z`
  `2023-10-05T20:59:59.999Z`
).getTime();
// let countDownDate = new Date(new Date().getFullYear());
console.log(countDownDate);
// Find The Date Difference Between Date Now And CountDown Date

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Difference Between Now And CountDown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
