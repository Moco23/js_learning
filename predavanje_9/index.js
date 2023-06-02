document.getElementById("buyBtn").addEventListener("click", function () {
  var cijena = document
    .getElementById("cijenaProizvoda")
    .getAttribute("data-cijena");

  console.log(`Cijena ovog proizvoda je ${cijena} eura`);
});

// adding evenlt lisener on elements with class naem using a for loop
// auto counting elements script
var btnNumbers = document.getElementsByClassName("btnTest").length;
// js loop for add event lisener on elements with className
for (var elements = 0; elements < btnNumbers; elements++) {
  document
    .getElementsByClassName("btnTest")
    [elements].addEventListener("click", function () {
      this.style.color = "red";
    });
}
