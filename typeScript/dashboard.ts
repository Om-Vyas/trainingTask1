//=======================Render Course cards==================

//===================This is for creating card element

function createCardT(course) {
  let cardHTML = `
    ${
      course.star
        ? `<div class="star"><img src="./assets/icons/favourite.svg" alt="" /></div>`
        : ""
    }
    ${course.expired ? `<div class="expired">EXPIRED</div>` : ""}
    <div class="course-card-top">
      <img src='${course.courseImage}' alt="" class="course-img" />
      <div class="course-info">
        <h3 class="course-title">${course.courseTitle}</h3>
        <div class="course-sg">
          <span class="course-subject">${course.courseSubject}</span>
          <span class="line"></span>
          <span class="course-grade">${
            course.courseGrade[0]
          } <span class="text-green">${course.courseGrade[1]}</span></span
          >
        </div>
        <div class="course-unit-info">
          ${
            course.courseUnit[0]
              ? `${course.courseUnit[0]} <span class="course-unit">Units</span>`
              : ""
          }
          ${
            course.courseUnit[1]
              ? `${course.courseUnit[1]} <span class="course-lesson">Lessons</span>`
              : ""
          }
          ${
            course.courseUnit[2]
              ? `${course.courseUnit[2]} <span class="course-topic">Topics</span>`
              : ""
          }
        </div>
        <div class="course-classes">
         ${
           course.courseClasses.length != 0
             ? `<select name="" id="" class="full-width">
                  ${course.courseClasses.map((cls) => {
                    return `<option value="">${cls}</option>`;
                  })}
                </select>`
             : `<select name='' id='' class='full-width disabled'>
                  <option value="" disabled selected>No Classes</option>
                </select>`
         }
        </div>
        <div class="course-student">
          <span class="course-students">${
            course.courseStudent ? `${course.courseStudent} Students` : ``
          }</span>
          ${
            course.courseStudent && course.coursedate.from !== undefined
              ? `<span class="line"></span>`
              : ``
          }
          <span class="course-date"> ${
            course.coursedate.from !== undefined
              ? `${course.coursedate.from} - ${course.coursedate.from}`
              : ``
          } 
          </span>
        </div>
      </div>
    </div>
    <div class="hl"></div>
    <div class="course-card-bottom">
      <button aria-label="preview" ${
        course.disabledButton[0] ? `class="disabled"` : ""
      }>
        <img class="preview" src="./assets/icons/preview.svg" alt="" />
      </button>
      <button aria-label="manage course" ${
        course.disabledButton[1] ? `class="disabled"` : ""
      }>
        <img class="manage-course" src="./assets/icons/manage course.svg" alt="" />
      </button>
      <button aria-label="grade submission" ${
        course.disabledButton[2] ? `class="disabled"` : ""
      }>
        <img class="grade-submission" src="./assets/icons/grade submissions.svg" alt="" />
      </button>
      <button aria-label="reports" ${
        course.disabledButton[3] ? `class="disabled"` : ""
      }>
        <img class="reports" src="./assets/icons/reports.svg" alt="" />
      </button>
    </div>
    `;
  const card = document.createElement("div");
  card.classList.add("course-card");
  card.innerHTML = cardHTML;
  return card;
}

//=================This is for appending all the cards to it's container

async function cardsT() {
  //fetch data
  let coursedata = await fetch("/data/courseData.json")
    .then((response) => response.json())
    .then((data) => data);

  //render cards using for loops
  const container = document.querySelector(
    ".course-main-col"
  ) as HTMLDivElement;
  for (let course of coursedata) {
    container.appendChild(createCardT(course));
  }
}
cardsT();

//====================Hamburger menu=======================

const btnT = document.querySelector(".ham-icon") as HTMLButtonElement;
const navbarT = document.querySelector(".navbar-nav") as HTMLUListElement;
const hamIcon = document.querySelector(
  ".ham-icon-background"
) as HTMLDivElement;

const hamburgerToggle = () => {
  // navbarT.style.animation = "menuOpen 300ms linear";
  btnT.classList.toggle("active-ham");
  navbarT.classList.toggle("expand");
  hamIcon.classList.toggle("icon-active");
};

btnT.addEventListener("click", hamburgerToggle);

//========================Sub-Navbar===========================

const submenuToggle = (obj, val) => {
  //this is flag to check if the current selected nav item and previous nav item is
  //same then that nav -item should be closed.
  let previous = false;
  let currentNavItem = obj.parentElement;
  if (window.innerWidth <= 980) {
    //Code to remove the previous active subnav
    try {
      const prevNavItem = document.querySelector(".active-subnav");
      if (prevNavItem == currentNavItem) {
        previous = true;
      }
      if (prevNavItem !== undefined || null) {
        prevNavItem
          ?.querySelector(".drop-down-icon")
          ?.classList.remove("upsidedown");
        prevNavItem?.querySelector(".subnav")?.classList.add("close");
        prevNavItem?.classList.remove("active-subnav");
      }
    } catch (err) {
      console.log("h");
    }
    if (!previous) {
      try {
        //select parent and change the background color
        currentNavItem.classList.toggle("active-subnav");
        //select btn and make it up-side-down
        obj.querySelector(".drop-down-icon").classList.toggle("upsidedown");
        //select the submenu through ID and toggle it
        let id = "#" + val;
        const submenu = document.querySelector(id) as HTMLDivElement;
        submenu?.classList.toggle("close");
        // submenu.style.animation = "menuOpen 300ms linear";
      } catch (err) {}
    }
  }
};

//=======================Alerts==============================

const alertBtn = document.querySelector(".alerts") as HTMLButtonElement;
const bellIcon = document.querySelector(
  ".alert-image-background"
) as HTMLDivElement;
const alertBadge = document.querySelector(".alert-number") as HTMLSpanElement;
const alertsContainer = document.querySelector(
  ".alerts-container"
) as HTMLDivElement;

//For laptops
const alertsOpen = () => {
  if (window.innerWidth > 900) {
    alertsContainer.classList.remove("close");
    bellIcon.classList.add("icon-active");
    alertBadge.classList.add("hide");
  }
};
const alertsClose = () => {
  if (window.innerWidth > 900) {
    alertsContainer.classList.add("close");
    bellIcon.classList.remove("icon-active");
    alertBadge.classList.remove("hide");
  }
};
//for mobile
const alertToggle = () => {
  if (window.innerWidth < 900) {
    alertsContainer.classList.toggle("close");
    bellIcon.classList.toggle("icon-active");
    alertBadge.classList.toggle("hide");
  }
};
alertBtn.addEventListener("click", alertToggle);

alertBtn.addEventListener("mouseover", alertsOpen);
alertsContainer.addEventListener("mouseover", alertsOpen);
alertBtn.addEventListener("mouseout", alertsClose);
alertsContainer.addEventListener("mouseout", alertsClose);

//===========================Announcements============================

const announcementBtn = document.querySelector(
  ".announcements"
) as HTMLButtonElement;
const announcementIcon = document.querySelector(
  ".announcements-image-background"
) as HTMLDivElement;
const announcementBadge = document.querySelector(
  ".announcement-number"
) as HTMLSpanElement;
const announcementsContainer = document.querySelector(
  ".announcements-container"
) as HTMLDivElement;
//For laptop
const announcementsOpen = () => {
  if (window.innerWidth > 900) {
    announcementsContainer.classList.remove("close");
    announcementIcon.classList.add("icon-active");
    announcementBadge.classList.add("hide");
  }
};
const announcementsClose = () => {
  if (window.innerWidth > 900) {
    announcementsContainer.classList.add("close");
    announcementIcon.classList.remove("icon-active");
    announcementBadge.classList.remove("hide");
  }
};
//for mobile
const announcementsToggle = () => {
  if (window.innerWidth < 900) {
    announcementsContainer.classList.toggle("close");
    announcementIcon.classList.toggle("icon-active");
    announcementBadge.classList.toggle("hide");
  }
};
announcementBtn.addEventListener("click", announcementsToggle);

announcementBtn.addEventListener("mouseover", announcementsOpen);
announcementsContainer.addEventListener("mouseover", announcementsOpen);
announcementBtn.addEventListener("mouseout", announcementsClose);
announcementsContainer.addEventListener("mouseout", announcementsClose);
