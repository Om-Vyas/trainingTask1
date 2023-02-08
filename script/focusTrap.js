//=======================trap focus=======================

const trap = (element) => {
  const focusEl = element.querySelectorAll(
    "a[href]:not([disabled]),button:not([disabled])"
  );
  const firstEl = focusEl[0];
  const lastEl = focusEl[focusEl.length - 1];
  firstEl.focus();
  element.addEventListener("keydown", function (e) {
    const tabPress = e.key === "Tab";
    if (e.key === "Enter") {
      navbar.classList.remove("collapse");
      btn.focus();
      e.preventDefault();
    }
    if (!tabPress) {
      return;
    }
    if (e.shiftKey) {
      if (document.activeElement === firstEl) {
        lastEl.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastEl) {
        firstEl.focus();
        e.preventDefault();
      }
    }
  });
};

//=====================make disabled unaccessible=========
const disabled = document.querySelectorAll(".disabled");
for (let i = 0; i < disabled.length; i++) {
  disabled[i].setAttribute("tabindex", "-1");
  // disabled[i].style.cursor = ""
}
