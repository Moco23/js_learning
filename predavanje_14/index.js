$(document).ready(function () {
  const user_name1 = "admin1";
  const password1 = "password1";
  const successMessage = $("<p>").addClass("success").insertAfter(".form");

  $(".success").css({
    fontSize: "2.4rem",
    color: "green",
  });

  $("#login_btn").click(function () {
    $("#usserMess").hide();
    $("#passMess").hide();

    const user_name_holder = $("#user_name").val();
    const password_holder = $("#password").val();

    if (user_name_holder !== user_name1) {
      $("#usserMess").show();
    }
    if (password_holder !== password1) {
      $("#passMess").show();
    }
    if (user_name_holder === user_name1 && password_holder === password1) {
      $(".form").hide();
      $(".success").text("Prijava uspješna");
    }
  });
});
