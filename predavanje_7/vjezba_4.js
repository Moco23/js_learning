var button = prompt("Set the color.");
button = button.toLowerCase();
if (button == "plava") {
  document.getElementById("btn").style.backgroundColor = "blue";
} else if (button == "crvena") {
  document.getElementById("btn").style.backgroundColor = "red";
} else {
  document.getElementById("btn").style.backgroundColor = "green";
}

var buttonTextColor = prompt("Set the color of text");
buttonTextColor = buttonTextColor.toLowerCase();

if (buttonTextColor == "zuta") {
  document.getElementById("btn").style.color = "yellow";
} else if (buttonTextColor == "bijela") {
  document.getElementById("btn").style.color = "white";
} else {
  document.getElementById("btn").style.color = "orange";
}
