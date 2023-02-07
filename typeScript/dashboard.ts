//====================Hamburger menu=======================

const btnT = document.querySelector(".ham-icon") as HTMLButtonElement;
const navbarT = document.querySelector(".navbar-nav") as HTMLUListElement;

const hamburgerOpenT = () => {
  btnT.classList.add("active-ham");
  navbarT.classList.add("expand");
};
const hamburgerCloseT = () => {
  btnT.classList.remove("active-ham");
  navbarT.classList.remove("expand");
};

btnT.addEventListener("mouseover", hamburgerOpenT);
navbarT.addEventListener("mouseover", hamburgerOpenT);
btnT.addEventListener("mouseout", hamburgerCloseT);
navbarT.addEventListener("mouseout", hamburgerCloseT);

//========================Sub-Navbar===========================

const submenuOpen = (val) => {
  let id = "#" + val;
  const submenu = document.querySelector(id);
  submenu?.classList.remove("close");
};
const submenuClose = (val) => {
  let id = "#" + val;
  const submenu = document.querySelector(id);
  submenu?.classList.add("close");
};

//=======================Alerts==============================

const alertBtn = document.querySelector(".alerts") as HTMLButtonElement;
const alertsContainer = document.querySelector(
  ".alerts-container"
) as HTMLDivElement;

const alertsOpen = () => {
  alertsContainer.classList.remove("close");
};
const alertsClose = () => {
  alertsContainer.classList.add("close");
};

alertBtn.addEventListener("mouseover", alertsOpen);
alertsContainer.addEventListener("mouseover", alertsOpen);
alertBtn.addEventListener("mouseout", alertsClose);
alertsContainer.addEventListener("mouseout", alertsClose);

//===========================Announcements============================

const announcementBtn = document.querySelector(
  ".announcements"
) as HTMLButtonElement;
const announcementsContainer = document.querySelector(
  ".announcements-container"
) as HTMLDivElement;

const announcementsOpen = () => {
  announcementsContainer.classList.remove("close");
};
const announcementsClose = () => {
  announcementsContainer.classList.add("close");
};

announcementBtn.addEventListener("mouseover", announcementsOpen);
announcementsContainer.addEventListener("mouseover", announcementsOpen);
announcementBtn.addEventListener("mouseout", announcementsClose);
announcementsContainer.addEventListener("mouseout", announcementsClose);

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
      <button ${course.disabledButton[0] ? `class="disabled"` : ""}>
        <img src="./assets/icons/preview.svg" alt="" />
      </button>
      <button ${course.disabledButton[1] ? `class="disabled"` : ""}>
        <img src="./assets/icons/manage course.svg" alt="" />
      </button>
      <button ${course.disabledButton[2] ? `class="disabled"` : ""}>
        <img src="./assets/icons/grade submissions.svg" alt="" />
      </button>
      <button ${course.disabledButton[3] ? `class="disabled"` : ""}>
        <img src="./assets/icons/reports.svg" alt="" />
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