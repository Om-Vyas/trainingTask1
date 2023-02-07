//Password view hide for login page
var pswdIconT = document.querySelector(".view-icon");
var passwordT = document.querySelector(".password");
var flagT = false;
var showHidePswdT = function () {
    if (!flagT) {
        passwordT.type = "text";
        flagT = true;
        passwordT.focus();
    }
    else {
        passwordT.type = "password";
        flagT = false;
        passwordT.focus();
    }
};
pswdIconT.addEventListener("click", showHidePswdT);
