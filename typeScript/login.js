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
//Redirect to dashboard page
var loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var username = loginForm.username.value.trim();
    var userpswd = loginForm.userpswd.value.trim();
    if (username === "admin" && userpswd === "admin") {
        window.location.href = "/teacher-dashboard.html";
        console.log("yes");
    }
    else {
        console.log("no");
    }
});
