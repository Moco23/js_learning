"use strict";
document.getElementById("btn_1").addEventListener("click", set_red_border);

function set_red_border() {
  this.style.border = "5px solid red";
}

function age_checker(age) {
  if (age >= 18) {
    console.log("Punoljetni ste");
  } else {
    console.log("niste punoljetni");
  }
}

age_checker(18);

function dijeljenje(broj, dijeljiv_broj) {
  if (dijeljiv_broj == 0) {
    console.log(`Brojeve ne mozete dijelit sa brojem 0.`);
  } else {
    console.log(broj / dijeljiv_broj);
  }
}

dijeljenje(20, 2);
dijeljenje(20, 0);
