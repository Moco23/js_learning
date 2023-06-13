"use strict";
// $(document).ready(function() {});

$(document).ready(function () {
  $("#btn").click(function () {
    console.log(`test 1,2,3`);
  });

  // for (
  //   var i = 0;
  //   i < document.getElementsByClassName(".btn_class").length;
  //   i++
  // ) {
  //   document
  //     .getElementsByClassName(".btn_class")
  //     [i].addEventListener("click", function () {
  //       console.log(`Neki tekst`);
  //     });
  // }

  $(".btn_class").click(function () {
    $(".btn_class").animate(
      {
        backgroundColor: "green",
      },
      500
    );
  });
});

$(".hidde_p").click(function () {
  $(".p").slideToggle();
});
