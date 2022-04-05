// Set section1 as active
document.querySelector("#section1").classList.add("active");

/**
 *
 * Start Helper Functions
 *
 */

function isScrolledIntoView(e, x, y) {
    var element = e;
    var position = element.getBoundingClientRect();

    // checking for element visibility ..
    if (x && y) {
        return (
            position.top + x >= 0 && position.bottom - y <= window.innerHeight
        );
    } else {
        return (
            position.top + 20 >= 0 && position.bottom - 10 <= window.innerHeight
        );
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 */

// build the nav

var holder = document.createDocumentFragment();
var sections = document.querySelectorAll("main section");

for (let i of sections) {
    let navItem = document.createElement("li");
    let data = i.getAttribute("data-nav").split(" ");
    navItem.innerText = data.join(" ");
    navItem.setAttribute("data", String(data[1]));
    navItem.classList.add("menu__link");
    holder.appendChild(navItem);
}

var con = document.querySelector(".page__header nav ul");
con.appendChild(holder);

// Add class 'active' to section when near top of viewport and add class for nav items .
function add_rem_active() {
    let links = document.querySelectorAll(".page__header nav ul li");
    for (let el of document.querySelectorAll("main section")) {
        if (window.innerWidth > 700) {
            if (isScrolledIntoView(el)) {
                el.classList.add("active");
                let ind_ =
                    parseInt(el.getAttribute("data-nav").split(" ")[1]) - 1;
                links[ind_].classList.add("nav-active");
            } else {
                el.classList.remove("active");
                let ind =
                    parseInt(el.getAttribute("data-nav").split(" ")[1]) - 1;
                links[ind].classList.remove("nav-active");
            }
        } else if (window.innerWidth > 380) {
            if (isScrolledIntoView(el.querySelector("p"), 0, 0)) {
                el.classList.add("active");
                let ind_ =
                    parseInt(el.getAttribute("data-nav").split(" ")[1]) - 1;
                links[ind_].classList.add("nav-active");
            } else {
                el.classList.remove("active");
                let ind =
                    parseInt(el.getAttribute("data-nav").split(" ")[1]) - 1;
                links[ind].classList.remove("nav-active");
            }
        } else if (window.innerWidth <= 380) {
            if (isScrolledIntoView(el.querySelector("p"), 50, 50)) {
                el.classList.add("active");
                let ind_ =
                    parseInt(el.getAttribute("data-nav").split(" ")[1]) - 1;
                links[ind_].classList.add("nav-active");
            } else {
                el.classList.remove("active");
                let ind =
                    parseInt(el.getAttribute("data-nav").split(" ")[1]) - 1;
                links[ind].classList.remove("nav-active");
            }
        } else {
            if (isScrolledIntoView(el.querySelector("p"), 150, 50)) {
                el.classList.add("active");
                let ind_ =
                    parseInt(el.getAttribute("data-nav").split(" ")[1]) - 1;
                links[ind_].classList.add("nav-active");
            } else {
                el.classList.remove("active");
                let ind =
                    parseInt(el.getAttribute("data-nav").split(" ")[1]) - 1;
                links[ind].classList.remove("nav-active");
            }
        }
    }
}

// Scroll to anchor ID using scrollIntoView

function scroll_(ele) {
    let target = document.getElementById("section" + ele.getAttribute("data"));
    target.scrollIntoView({ block: "start", behavior: "smooth" });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// set sections as active ..
document.addEventListener("scroll", add_rem_active);

// Scroll to section on li click
con.addEventListener("click", function (ev) {
    if (ev.target.nodeName === "LI") {
        let ele =
            document.getElementsByClassName("menu__link")[
                parseInt(ev.target.attributes["data"].nodeValue) - 1
            ];
        scroll_(ele);
    }
});

// adding top icon in the corner of the screen ..
document.addEventListener("scroll", function () {
    let myIcon = document.querySelector("span.icon");
    if (window.scrollY > 250) {
        myIcon.classList.add("un-hide");
    } else {
        myIcon.classList.remove("un-hide");
    }
});

document.querySelector("span.icon").addEventListener("click", function () {
    scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
