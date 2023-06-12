"use strict";
document.getElementById("btn").addEventListener("click", function () {
  var unos = prompt("Unesi Grad");

  var p_el = document.createElement("p");
  p_el.textContent = unos;
  document.getElementById("gradovi").appendChild(p_el);
});
