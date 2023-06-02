"use strict";

window.onload = function() {
  const dt, month, months;
  var doc = document;

  dt = new Date();
  month = dt.getMonth();
  months = ["January",  "February", "March",  "April",  "May",  "June",  "July",  "August",  "September",  "October",  "November",  "December"];

  doc.querySelector(".month").innerHTML = month[months];
  doc.querySelector("#month").innerHTML = month[months];
}
