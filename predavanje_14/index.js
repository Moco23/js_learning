// $ (document).ready(function() {})
$(document).ready(function () {
  // login info
  const user_naem1 = "admin1";
  const password1 = "password1";

  $("#login_btn").click(function () {
    const user_name_holder = $("#user_name").val();
    const password_holder = $("#password").val();

    if (user_name_holder === "admin1" && password_holder == "password1") {
      console.log("Login success");
    } else {
      console.log("Login failed");
    }
  });
});
