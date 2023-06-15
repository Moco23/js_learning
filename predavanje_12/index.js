z"use strict";
var gradovi = [
  {
    ime_grada: "Pula",
    temp_grada: 22,
    vrijeme: "suncanon",
  },

  {
    ime_grada: "Zagreb",
    temp_grada: 22,
    vrijeme: "suncanon",
  },

  {
    ime_grada: "Split",
    temp_grada: 22,
    vrijeme: "suncanon",
  },
];
for (var i = 0; i < gradovi.length; i++) {
  var prognoza_gradova = gradovi[i];
  var p_el = document.createElement("p");
  p_el.textContent = `${prognoza_gradova["ime_grada"]}  ${prognoza_gradova["temp_grada"]}  ${prognoza_gradova["vrijeme"]}`;
  document.querySelector("#prognoza").appendChild(p_el);
}

// var prognoza = gradovi[grad];
// var p_el = document.createElement("p");
// var p_el_content = document.createTextNode(
//   `${prognoza["ime_grada"]} + ${prognoza["temp_grada"]} + ${prognoza["vrijeme"]}`
// );
// p_el.append(p_el_content);
// document.querySelector("#prognoza").appendChild(p_el);
