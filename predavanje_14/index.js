$(document).ready(function () {
  var user_name1 = "admin1";
  var password1 = "password1";
  var login_fail_count = 0;
  var successMessage = $("<p>").addClass("success").insertAfter(".form");

  $(".success").css({
    fontSize: "2.4rem",
    color: "green",
  });

  $("#login_btn").click(function () {
    if (login_fail_count >= 3) {
      $("#user_name").attr("disabled", true);
      $("#password").attr("disabled", true);
    }

    $("#usserMess").hide();
    $("#passMess").hide();

    var user_name_holder = $("#user_name").val();
    var password_holder = $("#password").val();

    if (user_name_holder != user_name1) {
      $("#usserMess").show();
      login_fail_count++;
      return;
    }
    if (password_holder != password1) {
      $("#passMess").show();
      login_fail_count++;
      return;
    }
    if (user_name_holder === user_name1 && password_holder === password1) {
      $(".form").hide();
      $(".success").text("Prijava uspješna");
    }
  });
});
