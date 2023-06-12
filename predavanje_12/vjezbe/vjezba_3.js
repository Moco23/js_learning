"use strict";
const gradovi = document.querySelector("#gradovi");
const unesi_grad = document.querySelector("#unesi_grad");
const prikazi_grad = document.querySelector("#prikazi_grad");
let unos;

unesi_grad.addEventListener("click", function () {
  unos = prompt("Unesite Grad");
});

prikazi_grad.addEventListener("click", function () {
  var p_el = document.createElement("p");
  p_el.textContent = unos;
  document.querySelector("#gradovi").appendChild(p_el);
});
