"use strict";

window.onload = function() {
  const d, day, days;

  d = new Date();
  day = d.getDay();
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  document.querySelector(".day").innerHTML = day[days];
  document.querySelector("#day").innerHTML = day[days];
}