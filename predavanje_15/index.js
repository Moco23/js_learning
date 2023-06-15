"use strict";
$(document).ready(function () {
  $.ajax({
    url: "https://reqres.in/api/users?page=2",
    method: "GET",
    success: function (users) {
      for (var user in users["data"]) {
        $("#users_data").append(`<p>
        ${users["data"][user]["email"]}
        </p>`);
      }
    },
  });
});
