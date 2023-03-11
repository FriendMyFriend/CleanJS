var theme = 1;
var font = 1;
var title = false;

if (theme == 1 || theme == "light" || theme == "l" || theme == "default") {
  document.body.style = "color:black; background:white;";
} else if (theme == 2 || theme == "dark" || theme == "d") {
  document.body.style = "color:white; background:rgb(18, 18, 18);";
} else if (theme == 3 || theme == "black" || theme == "b" || theme == "altdark") {
  document.body.style = "color:white; background:black;";
} else if (theme == 4 || theme == "light dark" || theme == "ld" || theme == "lightdark" || theme == "both") {
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

if (font == 1 || font == "serif" || font == "s") {
  document.querySelector(".font").style = "font-family:serif;";
  document.querySelector("#font").style = "font-family:serif;";
} else if (font == 2 || font == "sans-serif" || font == "ss") {
  document.querySelector(".font").style = "font-family:sans-serif;";
  ocument.querySelector("#font").style = "font-family:sans-serif;";
} else {
  // do nothing
}
