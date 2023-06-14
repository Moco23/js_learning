"use strict";
// $(document).ready(function() {});
$(document).ready(function () {
  // get form
  $("form").css({
    display: "flex",
    flexDirection: "column",
    alignItems: "Flex-start",
  });

  //create element button on click function
  $("#element_creator_btn").click(function () {
    // get elements
    var element_width = $("#element_width").val();
    var element_height = $("#element_height").val();
    var element_color = $("#element_color").val();

    // style element and create element on click event
    $("#content_div").css({
      width: element_width,
      height: element_height,
      backgroundColor: element_color,
    });
  });

  // change element bg color whn mouse go trough color picker
  $("#element_color").on("input", function () {
    var bg_color = $(this).val();
    $("#content_div").css({
      backgroundColor: bg_color,
    });
  });
});
