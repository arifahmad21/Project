const passwordInput = document.getElementById("password");
const showPasswordIcon = document.getElementById("show-password");

showPasswordIcon.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
