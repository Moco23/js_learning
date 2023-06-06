"use strict";
document
  .getElementById("img_holder")
  .addEventListener("click", function (zoom_in_out) {
    zoom_in_out.target.classList.toggle("zoom");
  });
