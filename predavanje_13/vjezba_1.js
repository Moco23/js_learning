"use strict";
$(document).ready(function () {
  $(".hide_text").click(function () {
    var switchText = $(this).text();
    if (switchText == "Hide Text") {
      $(this).text("Show Text");
    } else {
      $(this).text("Hide Text");
    }

    $(".hide_span").toggle();
  });
});
