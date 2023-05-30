var proba = document
  .getElementById("aksMe")
  .addEventListener("click", function () {
    proba = prompt("Koliko imate godina?");
    console.log(proba);
  });

// start working with math random
var pitanja = ["kako ste", "gjde zivite", "koliko godina imate"];

document
  .getElementById("nasumicnoPitanje")
  .addEventListener("click", function () {
    var nasumicaOdabir = Math.floor(Math.random() * 3);
    var odgovor = prompt(pitanja[nasumicaOdabir]);
    console.log(odgovor);
  });
