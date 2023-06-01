document.getElementById("buyBtn").addEventListener("click", function () {
  var cijena = document
    .getElementById("cijenaProizvoda")
    .getAttribute("data-cijena");

  console.log(`Cijena ovog proizvoda je ${cijena} eura`);
});

// adding evenlt lisener on elements with class naem using a for loop
for (var elements = 0; elements < 10; elements++) {
  document
    .getElementsByClassName("btnTest")
    [elements].addEventListener("click", function () {
      this.style.color = "red";
    });
}
