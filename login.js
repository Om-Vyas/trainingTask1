//Password view hide for login page
const pswdIcon = document.querySelector(".view-icon");
const password = document.querySelector(".password");
let flag = false;
const showHidePswd = () => {
  if (!flag) {
    password.type = "text";
    flag = true;
    password.focus();
  } else {
    password.type = "password";
    flag = false;
    password.focus();
  }
};
pswdIcon.addEventListener("click", showHidePswd);
