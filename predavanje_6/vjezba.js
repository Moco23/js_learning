// js array
var itOprema = ["Ram memorija", "Maticna ploca", "graficka karta"];
// js loop for it oprema
for (var komponenta in itOprema) {
  document.getElementById(
    "vjezba"
  ).innerHTML += `<p>${itOprema[komponenta]}</p>`;
}
