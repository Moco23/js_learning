"use strict";

document.getElementById("btn").addEventListener("click", izracun_cijene);
function izracun_cijene() {
  var cijena = 60;

  var izracun = cijena * 1.25;
  alert(`Cijena SSD-a sa PDV-om je ${izracun}`);
}
