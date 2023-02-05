//====================Hamburger menu=======================

const btn = document.querySelector(".ham-icon");
const navbar = document.querySelector(".navbar-nav");

const hamburger = () => {
  navbar.classList.toggle("collapse");
  trap(navbar);
};

btn.addEventListener("click", hamburger);

//=======================trap focus=======================

const trap = (element) => {
  const focusEl = element.querySelectorAll("a[href]:not([disabled])");
  const firstEl = focusEl[0];
  const lastEl = focusEl[focusEl.length - 1];
  firstEl.focus();
  element.addEventListener("keydown", function (e) {
    const tabPress = e.key === "Tab";
    if (e.key === "Enter") {
      navbar.classList.toggle("collapse");
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
console.log(disabled);
for (let i = 0; i < disabled.length; i++) {
  disabled[i].setAttribute("tabindex", "1000");
}

//=====================Topbar==============================

const changeTopbar = (val) => {
  const topbarCardList = document.getElementsByClassName("icon-card");
  for (card of topbarCardList) {
    try {
      card.classList.remove("active-black");
    } catch (err) {}
  }
  val.classList.add("active-black");
};

//=======================Navbar Active Link white

const changeNavbar = (val) => {
  const navItems = document.getElementsByClassName("nav-item");
  for (item of navItems) {
    console.log(item);
    try {
      item.classList.remove("active-white");
    } catch (err) {}
  }
  val.classList.add("active-white");
  console.log("clicked");
};
