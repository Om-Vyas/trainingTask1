//=======================Render Course cards==================
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//===================This is for creating card element
function createCardT(course) {
    var cardHTML = "\n    ".concat(course.star
        ? "<div class=\"star\"><img src=\"./assets/icons/favourite.svg\" alt=\"\" /></div>"
        : "", "\n    ").concat(course.expired ? "<div class=\"expired\">EXPIRED</div>" : "", "\n    <div class=\"course-card-top\">\n      <img src='").concat(course.courseImage, "' alt=\"\" class=\"course-img\" />\n      <div class=\"course-info\">\n        <h3 class=\"course-title\">").concat(course.courseTitle, "</h3>\n        <div class=\"course-sg\">\n          <span class=\"course-subject\">").concat(course.courseSubject, "</span>\n          <span class=\"line\"></span>\n          <span class=\"course-grade\">").concat(course.courseGrade[0], " <span class=\"text-green\">").concat(course.courseGrade[1], "</span></span\n          >\n        </div>\n        <div class=\"course-unit-info\">\n          ").concat(course.courseUnit[0]
        ? "".concat(course.courseUnit[0], " <span class=\"course-unit\">Units</span>")
        : "", "\n          ").concat(course.courseUnit[1]
        ? "".concat(course.courseUnit[1], " <span class=\"course-lesson\">Lessons</span>")
        : "", "\n          ").concat(course.courseUnit[2]
        ? "".concat(course.courseUnit[2], " <span class=\"course-topic\">Topics</span>")
        : "", "\n        </div>\n        <div class=\"course-classes\">\n         ").concat(course.courseClasses.length != 0
        ? "<select name=\"\" id=\"\" class=\"full-width\">\n                  ".concat(course.courseClasses.map(function (cls) {
            return "<option value=\"\">".concat(cls, "</option>");
        }), "\n                </select>")
        : "<select name='' id='' class='full-width disabled'>\n                  <option value=\"\" disabled selected>No Classes</option>\n                </select>", "\n        </div>\n        <div class=\"course-student\">\n          <span class=\"course-students\">").concat(course.courseStudent ? "".concat(course.courseStudent, " Students") : "", "</span>\n          ").concat(course.courseStudent && course.coursedate.from !== undefined
        ? "<span class=\"line\"></span>"
        : "", "\n          <span class=\"course-date\"> ").concat(course.coursedate.from !== undefined
        ? "".concat(course.coursedate.from, " - ").concat(course.coursedate.from)
        : "", " \n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"hl\"></div>\n    <div class=\"course-card-bottom\">\n      <button aria-label=\"preview\" ").concat(course.disabledButton[0] ? "class=\"disabled\"" : "", ">\n        <img class=\"preview\" src=\"./assets/icons/preview.svg\" alt=\"\" />\n      </button>\n      <button aria-label=\"manage course\" ").concat(course.disabledButton[1] ? "class=\"disabled\"" : "", ">\n        <img class=\"manage-course\" src=\"./assets/icons/manage course.svg\" alt=\"\" />\n      </button>\n      <button aria-label=\"grade submission\" ").concat(course.disabledButton[2] ? "class=\"disabled\"" : "", ">\n        <img class=\"grade-submission\" src=\"./assets/icons/grade submissions.svg\" alt=\"\" />\n      </button>\n      <button aria-label=\"reports\" ").concat(course.disabledButton[3] ? "class=\"disabled\"" : "", ">\n        <img class=\"reports\" src=\"./assets/icons/reports.svg\" alt=\"\" />\n      </button>\n    </div>\n    ");
    var card = document.createElement("div");
    card.classList.add("course-card");
    card.innerHTML = cardHTML;
    return card;
}
//=================This is for appending all the cards to it's container
function cardsT() {
    return __awaiter(this, void 0, void 0, function () {
        var coursedata, container, _i, coursedata_1, course;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("/data/courseData.json")
                        .then(function (response) { return response.json(); })
                        .then(function (data) { return data; })];
                case 1:
                    coursedata = _a.sent();
                    container = document.querySelector(".course-main-col");
                    for (_i = 0, coursedata_1 = coursedata; _i < coursedata_1.length; _i++) {
                        course = coursedata_1[_i];
                        container.appendChild(createCardT(course));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
cardsT();
//====================Hamburger menu=======================
var btnT = document.querySelector(".ham-icon");
var navbarT = document.querySelector(".navbar-nav");
var hamIcon = document.querySelector(".ham-icon-background");
var hamburgerToggle = function () {
    // navbarT.style.animation = "menuOpen 300ms linear";
    btnT.classList.toggle("active-ham");
    navbarT.classList.toggle("expand");
    hamIcon.classList.toggle("icon-active");
};
btnT.addEventListener("click", hamburgerToggle);
//========================Sub-Navbar===========================
var submenuToggle = function (obj, val) {
    var _a, _b;
    //this is flag to check if the current selected nav item and previous nav item is
    //same then that nav -item should be closed.
    var previous = false;
    var currentNavItem = obj.parentElement;
    if (window.innerWidth <= 980) {
        //Code to remove the previous active subnav
        try {
            var prevNavItem = document.querySelector(".active-subnav");
            if (prevNavItem == currentNavItem) {
                previous = true;
            }
            if (prevNavItem !== undefined || null) {
                (_a = prevNavItem === null || prevNavItem === void 0 ? void 0 : prevNavItem.querySelector(".drop-down-icon")) === null || _a === void 0 ? void 0 : _a.classList.remove("upsidedown");
                (_b = prevNavItem === null || prevNavItem === void 0 ? void 0 : prevNavItem.querySelector(".subnav")) === null || _b === void 0 ? void 0 : _b.classList.add("close");
                prevNavItem === null || prevNavItem === void 0 ? void 0 : prevNavItem.classList.remove("active-subnav");
            }
        }
        catch (err) {
            console.log("h");
        }
        if (!previous) {
            try {
                //select parent and change the background color
                currentNavItem.classList.toggle("active-subnav");
                //select btn and make it up-side-down
                obj.querySelector(".drop-down-icon").classList.toggle("upsidedown");
                //select the submenu through ID and toggle it
                var id = "#" + val;
                var submenu = document.querySelector(id);
                submenu === null || submenu === void 0 ? void 0 : submenu.classList.toggle("close");
                // submenu.style.animation = "menuOpen 300ms linear";
            }
            catch (err) { }
        }
    }
};
//=======================Alerts==============================
var alertBtn = document.querySelector(".alerts");
var bellIcon = document.querySelector(".alert-image-background");
var alertBadge = document.querySelector(".alert-number");
var alertsContainer = document.querySelector(".alerts-container");
//For laptops
var alertsOpen = function () {
    if (window.innerWidth > 900) {
        alertsContainer.classList.remove("close");
        bellIcon.classList.add("icon-active");
        alertBadge.classList.add("hide");
    }
};
var alertsClose = function () {
    if (window.innerWidth > 900) {
        alertsContainer.classList.add("close");
        bellIcon.classList.remove("icon-active");
        alertBadge.classList.remove("hide");
    }
};
//for mobile
var alertToggle = function () {
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
var announcementBtn = document.querySelector(".announcements");
var announcementIcon = document.querySelector(".announcements-image-background");
var announcementBadge = document.querySelector(".announcement-number");
var announcementsContainer = document.querySelector(".announcements-container");
//For laptop
var announcementsOpen = function () {
    if (window.innerWidth > 900) {
        announcementsContainer.classList.remove("close");
        announcementIcon.classList.add("icon-active");
        announcementBadge.classList.add("hide");
    }
};
var announcementsClose = function () {
    if (window.innerWidth > 900) {
        announcementsContainer.classList.add("close");
        announcementIcon.classList.remove("icon-active");
        announcementBadge.classList.remove("hide");
    }
};
//for mobile
var announcementsToggle = function () {
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
