var ploca = document.getElementById("board");
ploca.style.display = "flex";
ploca.style.flexWrap = "wrap";
ploca.style.width = "400px";
ploca.style.height = "400px";

for (var red = 0; red < 8; red++) {
  for (var stupac = 0; stupac < 8; stupac++) {
    var polje = document.createElement("div");
    polje.style.width = "50px";
    polje.style.height = "50px";

    var red_stupac = red + stupac;
    if (red_stupac % 2 === 0) {
      polje.style.backgroundColor = "#FFFDD0";
    } else {
      polje.style.backgroundColor = "#000";
    }

    ploca.appendChild(polje);
  }
}
