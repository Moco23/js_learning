var kockice = document.getElementById("element_holder");
for (var rjec = 0; rjec < 100; rjec++) {
  var kockica = document.createElement("div");
  kockica.classList.add("boja");
  kockice.appendChild(kockica);

  document
    .getElementsByClassName("boja")
    [rjec].addEventListener("click", function () {
      this.style.backgroundColor = "green";
    });
}
