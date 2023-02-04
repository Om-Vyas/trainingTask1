//====================Hamburger menu=======================

const btn = document.querySelector(".ham-icon");
const navbar = document.querySelector(".navbar-nav");

const hamburger = () => {
  navbar.classList.toggle("collapse");
};

btn.addEventListener("click", hamburger);

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
