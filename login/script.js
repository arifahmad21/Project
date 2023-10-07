const passwordInput = document.getElementById("password");
const showPassword = document.getElementById("toggle");

function showHide() {
  if (passwordInput.type === "password") {
    passwordInput.setAttribute("type", "text");
    showPassword.classList.add("hide");
  } else {
    passwordInput.setAttribute("type", "password");
    showPassword.classList.remove("hide");
  }
}
