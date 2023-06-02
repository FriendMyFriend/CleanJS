"use strict";

window.onload = function() {
  const d, day, days;
  var doc = document;

  d = new Date();
  day = d.getDay();
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  doc.querySelector(".day").innerHTML = day[days];
  doc.querySelector("#day").innerHTML = day[days];
}
