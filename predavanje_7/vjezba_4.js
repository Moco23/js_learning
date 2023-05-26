var button = prompt("Set the color.").toLowerCase();

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
  buttonColors.style.color = "orange";
}

var btnSize = prompt("set a size").toLowerCase();
var buttonSize = document.getElementById("btn");
var error_404 = document.createElement("p");
error_404.innerHTML = "Error 404";
error_404.style.display = "none";
document.getElementById("error").appendChild(error_404);

if (btnSize == 100) {
  buttonSize.style.height = "400px";
  buttonSize.style.width = "50px";
  buttonSize.style.display = "inline-block";
} else if (btnSize == 50) {
  buttonSize.style.height = "200px";
  buttonSize.style.width = "100px";
  buttonSize.style.display = "inline-block";
} else {
  buttonSize.style.display = "none";
  error_404.style.display = "inline-block";
}
