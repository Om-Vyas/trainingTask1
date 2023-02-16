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
        : "<select name='' id='' class='full-width disabled' disabled>\n                  <option value=\"\" disabled selected>No Classes</option>\n                </select>", "\n        </div>\n        <div class=\"course-student\">\n          <span class=\"course-students\">").concat(course.courseStudent ? "".concat(course.courseStudent, " Students") : "", "</span>\n          ").concat(course.courseStudent && course.coursedate.from !== undefined
        ? "<span class=\"line\"></span>"
        : "", "\n          <span class=\"course-date\"> ").concat(course.coursedate.from !== undefined
        ? "".concat(course.coursedate.from, " - ").concat(course.coursedate.from)
        : "", " \n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"hl\"></div>\n    <div class=\"course-card-bottom\">\n      <button aria-label=\"preview\" ").concat(course.disabledButton[0] ? "class=\"disabled\" disabled" : "", ">\n        <img class=\"preview\" src=\"./assets/icons/preview.svg\" alt=\"\" />\n      </button>\n      <button aria-label=\"manage course\" ").concat(course.disabledButton[1] ? "class=\"disabled\" disabled" : "", ">\n        <img class=\"manage-course\" src=\"./assets/icons/manage course.svg\" alt=\"\" />\n      </button>\n      <button aria-label=\"grade submission\" ").concat(course.disabledButton[2] ? "class=\"disabled\" disabled" : "", ">\n        <img class=\"grade-submission\" src=\"./assets/icons/grade submissions.svg\" alt=\"\" />\n      </button>\n      <button aria-label=\"reports\" ").concat(course.disabledButton[3] ? "class=\"disabled\" disabled" : "", ">\n        <img class=\"reports\" src=\"./assets/icons/reports.svg\" alt=\"\" />\n      </button>\n    </div>\n    ");
    var card = document.createElement("div");
    card.classList.add("course-card");
    card.innerHTML = cardHTML;
    return card;
}
//=================This is for appending all the cards to it's container
function cardsT() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("/data/courseData.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
cardsT().then(function (coursedata) {
    //render cards using for loops
    var container = document.querySelector(".course-main-col");
    for (var _i = 0, coursedata_1 = coursedata; _i < coursedata_1.length; _i++) {
        var course = coursedata_1[_i];
        container.appendChild(createCardT(course));
    }
});
//=======================Alerts==============================
var alertBtn = document.querySelector(".alerts-icon-item");
var bellIcon = document.querySelector(".alert-image-background");
var alertBadge = document.querySelector(".alert-number");
var alertsContainer = document.querySelector(".alerts-container");
//For laptops
var alertsOpen = function () {
    if (window.innerWidth > 800) {
        alertsContainer.classList.remove("close");
        alertsContainer.style.animation = "menuOpen 300ms";
        alertBadge.classList.add("hide");
        bellIcon.classList.add("icon-active");
    }
};
var alertsClose = function () {
    if (window.innerWidth > 800) {
        bellIcon.classList.remove("icon-active");
        alertBadge.classList.remove("hide");
        alertsContainer.style.animation = "menuClose 300ms";
        setTimeout(function () {
            alertsContainer.classList.add("close");
        }, 280);
    }
};
alertBtn.addEventListener("mouseenter", alertsOpen);
alertBtn.addEventListener("mouseleave", alertsClose);
//for mobile
var alertToggle = function () {
    if (window.innerWidth < 800) {
        //when alert is clicked -> if announcements are open then close it
        if (!announcementsContainer.classList.contains("close")) {
            announcementsToggle();
        }
        if (navbarT.classList.contains("expand")) {
            hamburgerToggle();
        }
        if (alertsContainer.classList.contains("close")) {
            alertsContainer.classList.remove("close");
            bellIcon.classList.add("icon-active");
            alertBadge.classList.add("hide");
            alertsContainer.style.animation = "menuOpen 300ms";
        }
        else if (!alertsContainer.classList.contains("close")) {
            alertsContainer.style.animation = "menuClose 300ms";
            bellIcon.classList.remove("icon-active");
            alertBadge.classList.remove("hide");
            setTimeout(function () {
                alertsContainer.classList.add("close");
            }, 280);
        }
    }
};
alertBtn.addEventListener("click", alertToggle);
//===========================Announcements============================
var announcementBtn = document.querySelector(".announcements-icon-item");
var announcementIcon = document.querySelector(".announcements-image-background");
var announcementBadge = document.querySelector(".announcement-number");
var announcementsContainer = document.querySelector(".announcements-container");
//For laptop
var announcementsOpen = function () {
    if (window.innerWidth > 800) {
        announcementsContainer.classList.remove("close");
        announcementsContainer.style.animation = "menuOpen 300ms";
        announcementBadge.classList.add("hide");
        announcementIcon.classList.add("icon-active");
    }
};
var announcementsClose = function () {
    if (window.innerWidth > 800) {
        announcementIcon.classList.remove("icon-active");
        announcementBadge.classList.remove("hide");
        announcementsContainer.style.animation = "menuClose 300ms";
        setTimeout(function () {
            announcementsContainer.classList.add("close");
        }, 280);
    }
};
announcementBtn.addEventListener("mouseenter", announcementsOpen);
announcementBtn.addEventListener("mouseleave", announcementsClose);
//for mobile
var announcementsToggle = function () {
    if (window.innerWidth < 800) {
        //when announcements is clicked -> if alerts is open then close it
        if (!alertsContainer.classList.contains("close")) {
            alertToggle();
        }
        if (navbarT.classList.contains("expand")) {
            hamburgerToggle();
        }
        if (announcementsContainer.classList.contains("close")) {
            announcementsContainer.classList.remove("close");
            announcementIcon.classList.add("icon-active");
            announcementBadge.classList.add("hide");
            announcementsContainer.style.animation = "menuOpen 300ms";
        }
        else if (!announcementsContainer.classList.contains("close")) {
            announcementsContainer.style.animation = "menuClose 300ms";
            announcementIcon.classList.remove("icon-active");
            announcementBadge.classList.remove("hide");
            setTimeout(function () {
                announcementsContainer.classList.add("close");
            }, 280);
        }
    }
};
announcementBtn.addEventListener("click", announcementsToggle);
//====================Hamburger menu=======================
var btnT = document.querySelector(".ham-icon");
var navbarT = document.querySelector(".navbar-nav");
var hamIcon = document.querySelector(".ham-icon-image");
var hamburgerToggle = function () {
    if (window.innerWidth < 981) {
        if (!announcementsContainer.classList.contains("close")) {
            announcementsToggle();
        }
        if (!alertsContainer.classList.contains("close")) {
            alertToggle();
        }
        if (document.querySelector("ul.expand")) {
            navbarT.style.animation = "menuClose 300ms";
            hamIcon.classList.remove("icon-active");
            setTimeout(function () {
                var _a;
                navbarT.classList.remove("expand");
                navbarT.style.animation = "";
                //when menu is closed -> close the previous active sub nav
                if (document.querySelector(".active-navitem")) {
                    var prevNavItem = document.querySelector(".active-navitem");
                    var subnav = prevNavItem.querySelector(".subnav");
                    //close the subnav
                    subnav.classList.add("close");
                    //remove upside down from button
                    (_a = document.querySelector(".upsidedown")) === null || _a === void 0 ? void 0 : _a.classList.remove("upsidedown");
                    //remove active tag from pre-active-NavItem
                    prevNavItem === null || prevNavItem === void 0 ? void 0 : prevNavItem.classList.remove("active-navitem");
                }
            }, 280);
        }
        else if (!document.querySelector("ul.expand")) {
            navbarT.style.animation = "menuOpen 300ms";
            hamIcon.classList.add("icon-active");
            navbarT.classList.add("expand");
        }
    }
};
btnT.addEventListener("click", hamburgerToggle);
//========================Sub-Navbar===========================
var submenuToggle = function (obj, val) {
    var _a;
    if (window.innerWidth <= 980) {
        //obj -> subnav header (It's children is subnav)(parent->navitem)
        //val -> id of subnav
        //this is flag. It's set if the current selected nav item and
        //previous nav item is same.
        var previous = false;
        var currentNavItem = obj.parentElement;
        //Code to remove the previous 'active subnav'
        //get prev active navitem
        try {
            if (document.querySelector(".active-navitem")) {
                var prevNavItem_1 = document.querySelector(".active-navitem");
                //check if preActiveNavItem and currently clicked Nav Item is same
                if (prevNavItem_1 == currentNavItem) {
                    previous = true;
                }
                if (prevNavItem_1 !== undefined || null) {
                    //remove upsidedown from dropdown icon
                    (_a = prevNavItem_1 === null || prevNavItem_1 === void 0 ? void 0 : prevNavItem_1.querySelector(".drop-down-icon")) === null || _a === void 0 ? void 0 : _a.classList.remove("upsidedown");
                    //select subnav of pre-active-nav-item
                    var subnav_1 = prevNavItem_1.querySelector(".subnav");
                    //If removing preActiveSubnav then add animation otherwise not
                    if (previous) {
                        subnav_1.style.animation = "menuClose 300ms";
                        setTimeout(function () {
                            //close the subnav
                            subnav_1.classList.add("close");
                            //remove active tag from pre-active-NavItem
                            prevNavItem_1 === null || prevNavItem_1 === void 0 ? void 0 : prevNavItem_1.classList.remove("active-navitem");
                        }, 280);
                    }
                    else {
                        subnav_1.classList.add("close");
                        prevNavItem_1 === null || prevNavItem_1 === void 0 ? void 0 : prevNavItem_1.classList.remove("active-navitem");
                    }
                }
            }
        }
        catch (err) {
            console.log(err);
        }
        // Active currently clicked subnav
        if (!previous) {
            try {
                //select navitem and make it active so background color changes
                currentNavItem.classList.add("active-navitem");
                //select btn and make it up-side-down
                obj.querySelector(".drop-down-icon").classList.add("upsidedown");
                //select the submenu through ID and toggle it
                var id = "#" + val;
                var subnav = document.querySelector(id);
                subnav.style.animation = "menuOpen 300ms";
                subnav === null || subnav === void 0 ? void 0 : subnav.classList.remove("close");
                // submenu.style.animation = "menuOpen 300ms linear";
            }
            catch (err) { }
        }
    }
};
