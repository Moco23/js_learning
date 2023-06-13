$(document).ready(function () {
  $(".holder").css({
    display: "flex",
    gap: "2rem",
  });
  var inputFields = $('input[type="text"]');
  var resultElement = $("<p>").addClass("result").insertAfter(".holder");

  $(".zbroj, .pomnozi, .podijeli").click(function () {
    var broj1 = parseFloat(inputFields.eq(0).val());
    var broj2 = parseFloat(inputFields.eq(1).val());

    if (broj1 === 0 && broj2 === 0) {
      resultElement.text(
        "Matematička radnja ne može biti izvršena kada upišete u oba polja broj 0"
      );
    } else {
      var operator = $(this).text();
      var rezultat;

      if (operator === "Zbroj") {
        rezultat = broj1 + broj2;
        resultElement.text("Rezultat zbrajanja: " + rezultat);
      } else if (operator === "Pomnozi") {
        rezultat = broj1 * broj2;
        resultElement.text("Rezultat množenja: " + rezultat);
      } else if (operator === "Podijeli") {
        if (broj2 === 0) {
          resultElement.text("Dijeljenje s nulom nije moguće");
        } else {
          rezultat = broj1 / broj2;
          resultElement.text("Rezultat dijeljenja: " + rezultat);
        }
      }
    }

    resultElement.show();
  });
});
