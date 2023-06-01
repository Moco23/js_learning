document.getElementById("buyBtn").addEventListener("click", function () {
  var cijena = document
    .getElementById("cijenaProizvoda")
    .getAttribute("data-cijena");
  console.log(cijena);
});
