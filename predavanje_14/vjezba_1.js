"use strict";
// // $(document).ready(function() {});
// $(document).ready(function () {
//   // get form
//   $("form").css({
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "Flex-start",
//   });

//   //create element button on click function
//   $("#element_creator_btn").click(function () {
//     // get elements
//     var element_width = $("#element_width").val();
//     var element_height = $("#element_height").val();
//     var element_color = $("#element_color").val();

//     // style element and create element on click event
//     $("#content_div").css({
//       width: element_width,
//       height: element_height,
//       backgroundColor: element_color,
//     });
//   });

//   // change element bg color whn mouse go trough color picker
//   $("#element_color").on("input", function () {
//     var bg_color = $(this).val();
//     $("#content_div").css({
//       backgroundColor: bg_color,
//     });
//   });
// });

$(document).ready(function () {
  $("#content_div").css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  var element_width = "";
  var element_height = "";
  var element_color = "";

  $("#element_width").on("input", function () {
    element_width = $(this).val();
    updateElementStyle();
  });

  $("#element_height").on("input", function () {
    element_height = $(this).val();
    updateElementStyle();
  });

  $("#element_color").on("input", function () {
    element_color = $(this).val();
    updateElementStyle();
  });

  function updateElementStyle() {
    $("#content_div").css({
      width: element_width,
      height: element_height,
      backgroundColor: element_color,
    });
  }

  $("#border_radius_slider").on("input mousemove", function () {
    var border_radius_value = $(this).val() + "px";
    $("#content_div").css({
      borderRadius: border_radius_value,
    });
  });
});
