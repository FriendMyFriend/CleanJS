"use strict";

window.onload = function() {
  var d = new Date();
  var day = d.getDay();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  switch(day) {
    case 0:
      document.querySelector(".day").innerHTML = days[0];
    break;
  }
}
