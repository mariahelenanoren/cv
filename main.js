let click = 0;

window.addEventListener("load", main);

/** Functions to be initiated on window load */
function main() {
    animateEmojis();
    addEventListeners();
}

function addEventListeners() {
    const dropdown = document.querySelector(".dropdown");
    const hamburger = document.querySelector(".hamburger");
    const filterButtons = document.querySelectorAll(".filter-buttons button")

    for (let i = 0; i < filterButtons.length; i++) {
        filterButtons[i].addEventListener("click", filterProjects, filterButtons)
    }

    window.addEventListener('resize', adjustHamburger);
    dropdown.addEventListener("mouseover", showDropdown);
    dropdown.addEventListener("mouseout", hideDropdown);
    hamburger.addEventListener("click", animateHamburger);
    
}

/** Closes hamburger menu if window is resized to desktop */
function adjustHamburger() {
    const hamburger = document.querySelectorAll(".hamburger span")
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    if (window.innerWidth > 1024) {
        hamburgerMenu.style.display = "none";
        hideHamburgerMenu(hamburgerMenu);
        unCrossTheHamburger(hamburger);
    }
}

function animateHamburger() {
    const hamburger = document.querySelectorAll(".hamburger span");
    const hamburgerMenu = document.querySelector(".hamburger-menu") // CHANGE TO MENU

    if (hamburgerMenu.style.display !== "flex") {
        crossTheHamburger(hamburger);
        showHamburgerMenu(hamburgerMenu);
    }
    else if (hamburgerMenu.style.display == "flex") {
        unCrossTheHamburger(hamburger);
        hideHamburgerMenu(hamburgerMenu);
    }
}

function crossTheHamburger(hamburger) {
    
    hamburger[0].style.top = "0.7rem"
    hamburger[2].style.top = "0.7rem"

    setTimeout( function() {
        hamburger[1].style.display = "none";
        hamburger[0].style.transform = "rotate(45deg)";
        hamburger[2].style.transform = "rotate(-45deg)";
    }, 200);
}

function unCrossTheHamburger(hamburger) {
    
    setTimeout( function() {
        hamburger[0].style.top = "0rem"
        hamburger[2].style.top = "1.4rem"
        hamburger[1].style.display = "unset"
    }, 200);

    hamburger[0].style.transform = "rotate(0deg)";
    hamburger[2].style.transform = "rotate(0deg)";
}

function showHamburgerMenu(hamburgerMenu) {
    const html = document.querySelector("html");

    html.style.overflowY = "hidden";
    hamburgerMenu.style.display = "flex";
}

function hideHamburgerMenu(hamburgerMenu) {
    const html = document.querySelector("html");

    html.style.overflowY = "scroll";
    hamburgerMenu.style.display = "none";
}

function showDropdown() {
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdownContent.style.display = "flex";
}

function hideDropdown() {
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdownContent.style.display = "none";
}

function animateEmojis() {
    animateHand();
}

function animateHand() {
    const hand = document.querySelector("#hand")
    hand.style.transform = "rotate(20deg)";
    
    let i = 0;

    rotate = setInterval(function() {
        if (i === 3) {
            clearInterval(rotate)
        }
        else {
            if (hand.style.transform === "rotate(-10deg)") {
                hand.style.transform = "rotate(20deg)"
            }
            else {
                hand.style.transform = "rotate(-10deg)"
            }
            i++;
        }
    }, 200);
}

function filterProjects(filterButtons) {
    const graphicDesignProjects = document.querySelectorAll(".graphic-design")
    const webProjects = document.querySelectorAll(".web-project")

    if (filterButtons.target.innerHTML.toLowerCase() === "graphic design") {
        graphicDesignProjects.forEach( function(items) {
            items.style.display = "unset";
        });
        webProjects.forEach( function(items) {
            items.style.display = "none";
        });
    }
    else if (filterButtons.target.innerHTML.toLowerCase() === "web projects") {
        graphicDesignProjects.forEach( function(items) {
            items.style.display = "none";
        });
        webProjects.forEach( function(items) {
            items.style.display = "unset";
        });
    }
    else {
        graphicDesignProjects.forEach( function(items) {
            items.style.display = "unset";
        });
        webProjects.forEach( function(items) {
            items.style.display = "unset";
        });

    }
}
