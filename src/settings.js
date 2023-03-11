var theme = 1;
var font = 1;
var title = false;

if (theme == "light" || theme == "default") {
  document.body.style = "color:black; background:white;";
} else if (theme == "dark") {
  document.body.style = "color:white; background:rgb(18, 18, 18);";
} else if (theme == "black" || theme == "altdark") {
  document.body.style = "color:white; background:black;";
} else if (theme == "light dark" || theme == "both") {
  document.querySelector("#ld").innerHTML = "<meta name='color-scheme' content='light dark'/>";
  document.querySelector(".ld").innerHTML = "<meta name='color-scheme' content='light dark'/>";
} else {
  // do nothing
}

if (title == true) {
  var t = "";
  document.title = t;
} else {
  // do nothing
}

if (font == "serif") {
  document.querySelector(".font").style = "font-family:serif;";
  document.querySelector("#font").style = "font-family:serif;";
} else if (font == "sans-serif") {
  document.querySelector(".font").style = "font-family:sans-serif;";
  ocument.querySelector("#font").style = "font-family:sans-serif;";
} else {
  // do nothing
}
