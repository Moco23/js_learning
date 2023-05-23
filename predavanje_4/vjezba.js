// array list of namjernice
var proizvodi = ["hleb", "mleko", "jogurt"];
// set color on array list items
document.getElementById("proizvodi").innerHTML =
  "<p style= 'color:red;'>" + proizvodi[0] + "</p>";
document.getElementById("proizvodi").innerHTML +=
  "<p style= 'color:green;'>" + proizvodi[1] + "</p>";
document.getElementById("proizvodi").innerHTML +=
  "<p style= 'color:blue;'>" + proizvodi[2] + "</p>";
