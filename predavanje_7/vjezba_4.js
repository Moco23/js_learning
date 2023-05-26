var button = prompt("Set the color.").toLowerCase();
button = button.toLowerCase();

if (button == "plava") {
  var buttons = document.getElementById("btn");
  buttons.style.backgroundColor = "blue";
} else if (button == "crvena") {
  buttons.style.backgroundColor = "red";
} else {
  buttons.style.backgroundColor = "green";
}

var buttonTextColor = prompt("Set the color of text").toLowerCase();
buttonColors = document.getElementById("btn");

if (buttonTextColor == "zuta") {
  buttonColors.style.color = "yellow";
} else if (buttonTextColor == "bijela") {
  buttonColors.style.color = "white";
} else {
  dbuttonColors.style.color = "orange";
}
