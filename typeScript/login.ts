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