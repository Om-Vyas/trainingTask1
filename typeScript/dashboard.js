//====================Hamburger menu=======================
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
var btnT = document.querySelector(".ham-icon");
var navbarT = document.querySelector(".navbar-nav");
var hamburgerOpenT = function () {
    btnT.classList.add("active-ham");
    navbarT.classList.add("expand");
};
var hamburgerCloseT = function () {
    btnT.classList.remove("active-ham");
    navbarT.classList.remove("expand");
};
btnT.addEventListener("mouseover", hamburgerOpenT);
navbarT.addEventListener("mouseover", hamburgerOpenT);
btnT.addEventListener("mouseout", hamburgerCloseT);
navbarT.addEventListener("mouseout", hamburgerCloseT);
//========================Sub-Navbar===========================
var submenuOpen = function (val) {
    var id = "#" + val;
    var submenu = document.querySelector(id);
    submenu === null || submenu === void 0 ? void 0 : submenu.classList.remove("close");
};
var submenuClose = function (val) {
    var id = "#" + val;
    var submenu = document.querySelector(id);
    submenu === null || submenu === void 0 ? void 0 : submenu.classList.add("close");
};
//=======================Alerts==============================
var alertBtn = document.querySelector(".alerts");
var alertsContainer = document.querySelector(".alerts-container");
var alertsOpen = function () {
    alertsContainer.classList.remove("close");
};
var alertsClose = function () {
    alertsContainer.classList.add("close");
};
alertBtn.addEventListener("mouseover", alertsOpen);
alertsContainer.addEventListener("mouseover", alertsOpen);
alertBtn.addEventListener("mouseout", alertsClose);
alertsContainer.addEventListener("mouseout", alertsClose);
//===========================Announcements============================
var announcementBtn = document.querySelector(".announcements");
var announcementsContainer = document.querySelector(".announcements-container");
var announcementsOpen = function () {
    announcementsContainer.classList.remove("close");
};
var announcementsClose = function () {
    announcementsContainer.classList.add("close");
};
announcementBtn.addEventListener("mouseover", announcementsOpen);
announcementsContainer.addEventListener("mouseover", announcementsOpen);
announcementBtn.addEventListener("mouseout", announcementsClose);
announcementsContainer.addEventListener("mouseout", announcementsClose);
//=======================Render Course cards==================
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
        : "", " \n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"hl\"></div>\n    <div class=\"course-card-bottom\">\n      <button ").concat(course.disabledButton[0] ? "class=\"disabled\"" : "", ">\n        <img src=\"./assets/icons/preview.svg\" alt=\"\" />\n      </button>\n      <button ").concat(course.disabledButton[1] ? "class=\"disabled\"" : "", ">\n        <img src=\"./assets/icons/manage course.svg\" alt=\"\" />\n      </button>\n      <button ").concat(course.disabledButton[2] ? "class=\"disabled\"" : "", ">\n        <img src=\"./assets/icons/grade submissions.svg\" alt=\"\" />\n      </button>\n      <button ").concat(course.disabledButton[3] ? "class=\"disabled\"" : "", ">\n        <img src=\"./assets/icons/reports.svg\" alt=\"\" />\n      </button>\n    </div>\n    ");
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
