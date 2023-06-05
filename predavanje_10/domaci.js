"use strict";

var cijena = 60;
document.getElementById("btn").addEventListener("click", function () {
  var izracun = cijena * 1.25;
  alert(`Cijena SSD-a sa PDV-om je ${izracun}`);
});
