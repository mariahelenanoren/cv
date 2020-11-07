let click = 0;

window.addEventListener("load", main);

/** Functions to be initiated on window load */
function main() {
    addEventListeners();
}

function addEventListeners() {
    const hamburger = document.querySelector(".hamburger");
    const filterButtons = document.querySelectorAll(".filter-buttons button")
    const expandButtons = document.querySelectorAll(".information-container")

    for (let i = 0; i < expandButtons.length; i++) {
        expandButtons[i].addEventListener("click", showExtendedInformation, expandButtons)
    }
    for (let i = 0; i < filterButtons.length; i++) {
        filterButtons[i].addEventListener("click", filterProjects, filterButtons)
    }

    hamburger.addEventListener("click", animateHamburger);
    
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

function filterProjects(filterButtons) {
    const graphicDesignProjects = document.querySelectorAll(".graphic-design")
    const webProjects = document.querySelectorAll(".web-project")
    const allFilterButtons = document.querySelectorAll(".filter-buttons button")

    allFilterButtons.forEach( function(button) {
        button.classList.remove("active")
        if (button !== filterButtons.target) {
            button.style.backgroundColor = "transparent";
            button.style.color = "#FC584D";
        }
        else if (button == filterButtons.target) {
            button.style.backgroundColor = "#FC584D";
            button.style.color = "white"
        }
    })


    if (filterButtons.target.innerHTML.toLowerCase() === "graphic design") {
        graphicDesignProjects.forEach( function(items) {
            items.style.display = "inline-block";
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
            items.style.display = "inline-block";
        });
    }
    else {
        graphicDesignProjects.forEach( function(items) {
            items.style.display = "inline-block";
        });
        webProjects.forEach( function(items) {
            items.style.display = "inline-block";
        });

    }
}

function showExtendedInformation(expandButtons) {
    const target = expandButtons.currentTarget;
    target.children[2].classList.toggle("auto-height");
}
