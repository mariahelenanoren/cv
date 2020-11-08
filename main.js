let click = 0;

window.addEventListener("load", main);

/** Functions to be initiated on window load */
function main() {
    addEventListeners();
    moveUpOnLoad();
}

function addEventListeners() {
    const hamburger = document.querySelector(".hamburger");
    const filterButtons = document.querySelectorAll(".filter-buttons button")
    const informationContainers = document.querySelectorAll(".information-container")

    for (let i = 0; i < informationContainers.length; i++) {
        informationContainers[i].addEventListener("click", showExtendedInformation, informationContainers)
    }
    for (let i = 0; i < filterButtons.length; i++) {
        filterButtons[i].addEventListener("click", filterProjects, filterButtons)
    }

    hamburger.addEventListener("click", animateHamburger);
    window.addEventListener("scroll", moveUpOnLoad)
    
}

function animateHamburger() {
    const hamburger = document.querySelectorAll(".hamburger span");
    const hamburgerMenu = document.querySelector(".hamburger-menu") // CHANGE TO MENU

    if (hamburgerMenu.classList.contains("flex")) {
        unCrossTheHamburger(hamburger);
    }
    else {
        crossTheHamburger(hamburger);
    }
    showHamburgerMenu(hamburgerMenu);
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
    const html = document.querySelector("html")
    hamburgerMenu.classList.toggle("flex")

    html.classList.toggle("scroll-lock")
    
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
            items.style.margin = "10% 0"
            items.style.opacity = "0"
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
            items.style.margin = "10% 0"
            items.style.opacity = "0"
        });
    }
    else {
        graphicDesignProjects.forEach( function(items) {
            items.style.display = "inline-block";
            items.style.margin = "10% 0"
            items.style.opacity = "0"

        });
        webProjects.forEach( function(items) {
            items.style.display = "inline-block";
            items.style.margin = "10% 0"
            items.style.opacity = "0"

        });

    }
    moveUpOnLoad();
}

function showExtendedInformation(informationContainers) {
    const target = informationContainers.currentTarget;
    const triangle = target.children[0].children[1].children[1];
    target.children[2].classList.toggle("max-height");
    triangle.style.transform = "rotate("+180+"deg)";
    console.log(triangle.classList[0])
}

function moveUpOnLoad() {
    const introText = document.querySelector(".introduction p")
    
    introText.style.marginTop = "0";
    introText.style.opacity = "1";

    
    const viewportHeight = window.innerHeight;
    const projectContainers = document.querySelectorAll(".project-container")


    for (i = 0; i < projectContainers.length; i++) {
        const projectBounding = projectContainers[i].getBoundingClientRect()
        if (projectBounding.y < viewportHeight) {
            projectContainers[i].style.opacity = "1";
            projectContainers[i].style.margin = "5% 0"
        }

    }
}
