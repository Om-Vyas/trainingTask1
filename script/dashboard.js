//====================Hamburger menu=======================

const btn = document.querySelector(".ham-icon");
const navbar = document.querySelector(".navbar-nav");

const hamburger = () => {
  navbar.classList.toggle("collapse");
};

btn.addEventListener("click", hamburger);

//=======================Render Course cards==================

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

async function cards() {
  //fetch data
  let coursedata = await fetch("/data/courseData.json")
    .then((response) => response.json())
    .then((data) => data);

  //render cards using for loops
  const container = document.querySelector(".course-main-col");
  for (course of coursedata) {
    container.appendChild(createCard(course));
  }
}
cards();
