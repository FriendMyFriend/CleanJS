"use strict";

window.onload = function() {
  const dt, month, months;

  dt = new Date();
  month = dt.getMonth();
  months = [  "January",  "February", "March",  "April",  "May",  "June",  "July",  "August",  "September",  "October",  "November",  "December"];

  document.querySelector(".month").innerHTML = month[months];
  document.querySelector("#month").innerHTML = month[months];
}
