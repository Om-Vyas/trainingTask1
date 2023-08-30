//Password view hide for login page
const pswdIconT = document.querySelector(".view-icon") as HTMLButtonElement;

const passwordT = document.querySelector(".password") as HTMLInputElement;
let flagT = false;
const showHidePswdT = () => {
  if (!flagT) {
    passwordT.type = "text";
    flagT = true;
    passwordT.focus();
  } else {
    passwordT.type = "password";
    flagT = false;
    passwordT.focus();
  }
};

pswdIconT.addEventListener("click", showHidePswdT);

//Redirect to dashboard page
const loginForm = document.querySelector(".login-form") as HTMLFormElement;

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = loginForm.username.value.trim();
  const userpswd = loginForm.userpswd.value.trim();
  if (username === "admin" && userpswd === "admin") {
    window.location.href = "/teacher-dashboard.html";
    console.log("y");
  } else {
    console.log("no");
  }
});
