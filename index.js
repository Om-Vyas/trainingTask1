// import { coursedata } from "./courses";
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

//=====================Topbar==============================

const changeTopbar = (val) => {
  const topbarCardList = document.getElementsByClassName("icon-card");
  for (card of topbarCardList) {
    try {
      card.classList.remove("active-black");
    } catch (err) {}
  }
  val.classList.add("active-black");
  val.blur();
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

//=======================Render Course cards==================

const coursedata = [
  {
    star: true,
    courseImage: "/assets/images/imageMask.png",
    courseTitle: "Acceleration",
    courseSubject: "Physics",
    courseGrade: ["Grade 7", "+2"],
    courseUnit: [4, 18, 24],
    courseClasses: ["Mr. Frank's Class B", "Mr. Frank's Class C"],
    courseStudent: 50,
    coursedate: {
      from: "21-Jan-2020",
      to: "21-&nbsp;Aug-2020",
    },
    disabledButton: [false, false, false, false],
  },
  {
    star: true,
    courseImage: "./assets/images/imageMask-1.png",
    courseTitle: "Displacement, Velocity and Speed",
    courseSubject: "Physics",
    courseGrade: ["Grade 6", "+3"],
    courseUnit: [2, 15, 20],
    courseClasses: [],
    courseStudent: 0,
    coursedate: {},
    disabledButton: [false, true, true, false],
  },
  {
    star: true,
    courseImage: "./assets/images/imageMask-3.png",
    courseTitle:
      "Introduction to Biology: Micro organisms and how they affect the other Life Systems in En...",
    courseSubject: "Biology",
    courseGrade: ["Grade 4", "+1"],
    courseUnit: [5, 16, 22],
    courseClasses: ["All Classes"],
    courseStudent: 300,
    coursedate: {},
    disabledButton: [false, true, true, false],
  },
  {
    star: false,
    expired: true,
    courseImage: "./assets/images/imageMask-2.png",
    courseTitle:
      "Introduction to Biology: Micro organisms and how they affect the other Life Systems in En...",
    courseSubject: "Mathematics",
    courseGrade: ["Grade 8", "+3"],
    courseUnit: [],
    courseClasses: ["Mr. Frank's Class B"],
    courseStudent: 44,
    coursedate: {
      from: "14-Oct-2019",
      to: "20-&nbsp;Oct-2020",
    },
    disabledButton: [false, false, false, false],
  },
];

//===================This is for creating card element

function createCard(course) {
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

function cards() {
  const container = document.querySelector(".course-main-col");
  for (course of coursedata) {
    container.appendChild(createCard(course));
  }
}
cards();

//=====================make disabled unaccessible=========
const disabled = document.querySelectorAll(".disabled");
console.log(disabled);
for (let i = 0; i < disabled.length; i++) {
  disabled[i].setAttribute("tabindex", "-1");
}
