"use strict";

var gradovi = [];
var unesi_grad = document.querySelector("#unesi_grad");
var topli_gradovi = document.querySelector("#topli_gradovi");
var hladni_gradovi = document.querySelector("#hladni_gradovi");
var ispis_gradova = document.createElement("div");
ispis_gradova.id = "ispis_gradova";
document.body.appendChild(ispis_gradova);

unesi_grad.addEventListener("click", function () {
  var unos = prompt("Unesite grad i temperaturu:");
  if (unos) {
    var grad = unos.split(" ")[0];
    var temperatura = parseInt(unos.split(" ")[1]);
    gradovi.push({ grad: grad, temperatura: temperatura });
  }
});

topli_gradovi.addEventListener("click", function () {
  var ispis = "";
  for (var i = 0; i < gradovi.length; i++) {
    if (gradovi[i].temperatura >= 12) {
      ispis +=
        "<p class='topli-grad'>" +
        gradovi[i].grad +
        " (" +
        gradovi[i].temperatura +
        "°C)</p>";
    }
  }
  document.getElementById("ispis_gradova").innerHTML = ispis;
});

hladni_gradovi.addEventListener("click", function () {
  var ispis = "";
  for (var i = 0; i < gradovi.length; i++) {
    if (gradovi[i].temperatura <= 11) {
      ispis +=
        "<p class='hladni-grad'>" +
        gradovi[i].grad +
        " (" +
        gradovi[i].temperatura +
        "°C)</p>";
    }
  }
  document.getElementById("ispis_gradova").innerHTML = ispis;
});
