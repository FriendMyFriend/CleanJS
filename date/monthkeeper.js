"use strict";

window.onload = function() {
  var dt = new Date();
  var month = dt.getMonth();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
    
  ]
  switch(month) {
    case 0:
      document.querySelector(".month").innerHTML = months[0];
    break;
    case 1:
      document.querySelector(".month").innerHTML = months[1];
    break;
    case 2:
      document.querySelector(".month").innerHTML = months[2];
    break;
    case 3:
      document.querySelector(".month").innerHTML = months[3];
    break;
    case 4:
      document.querySelector(".month").innerHTML = months[4];
    break;
    case 5:
      document.querySelector(".month").innerHTML = months[5];
    break;
    case 6:
      document.querySelector(".month").innerHTML = months[6];
    break;
    case 7:
      document.querySelector(".month").innerHTML = months[7];
    break;
    case 8:
      document.querySelector(".month").innerHTML = months[8];
    break;
    case 9:
      document.querySelector(".month").innerHTML = months[9];
    break;
    case 10:
      document.querySelector(".month").innerHTML = months[10];
    break;
    case 11:
      document.querySelector(".month").innerHTML = months[11];
    break;
  }
}
