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
    case 1:
      document.querySelector(".day").innerHTML = days[1];
    break;
    case 2:
      document.querySelector(".day").innerHTML = days[2];
    break;
    case 3:
      document.querySelector(".day").innerHTML = days[3];
    break;
    case 4:
      document.querySelector(".day").innerHTML = days[4];
    break;
    case 5:
      document.querySelector(".day").innerHTML = days[5];
    break;
    case 6:
      document.querySelector(".day").innerHTML = days[6];
    break;
    default:
      setTimeout("retry()", 5000);
    break;
  }
}

function retry() {
  window.location.reload();
}
