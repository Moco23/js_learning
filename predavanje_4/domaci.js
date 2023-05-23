var gradovi = {
  Beograd: 22,
  Zagreb: 23,
  Pula: 25,
};

document.getElementById("vrijeme").innerHTML =
  "<p>" + gradovi["Beograd"] + "</p>";
document.getElementById("vrijeme").innerHTML +=
  "<p>" + gradovi["Zagreb"] + "</p>";
document.getElementById("vrijeme").innerHTML +=
  "<p>" + gradovi["Pula"] + "</p>";
