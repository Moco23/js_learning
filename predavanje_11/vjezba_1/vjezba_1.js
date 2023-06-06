"use strict";

var slike = document.getElementsByClassName("coding_img").length;

for (var i = 0; i < slike; i++) {
  document
    .getElementsByClassName("coding_img")
    [i].addEventListener("click", function () {
      var skaliranje = this.style.transform;

      if (skaliranje == "scale(1.5)") {
        this.style.transform = "scale(1.0)";
      } else {
        this.style.transform = "scale(1.5)";
      }
    });
}
