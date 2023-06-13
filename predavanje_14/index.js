// $ (document).ready(function() {})
$(document).ready(function () {
  // login info
  const user_naem1 = "admin1";
  const password1 = "password1";
  const successMessage = $("<p>").addClass("success").insertAfter(".form");

  $(".success").css({
    fontSize: "2.4rem",
    color: "green",
  });

  $("#login_btn").click(function () {
    const user_name_holder = $("#user_name").val();
    const password_holder = $("#password").val();
    if (user_name_holder == user_naem1 && password_holder == password1) {
      $(".form").hide();
      $(".success").text(`Login success`);
    } else {
      console.log("Login failed");
    }
  });
});
