var button = prompt("Set the color.");
button = button.toLowerCase();
if (button == "plava") {
  document.getElementById("btn").style.backgroundColor = "blue";
} else if (button == "crvena") {
  document.getElementById("btn").style.backgroundColor = "red";
} else {
  document.getElementById("btn").style.backgroundColor = "green";
}
