window.onload = main;

/** Functions to be initiated on window load */
function main() {
    addEventListeners();
    declareLoadAnimationElements();
}

/** Sets event listeners*/
function addEventListeners() {
    const hamburger = document.querySelector(".hamburger");
    const filterButtons = document.querySelectorAll(".filter-buttons button")
    const informationContainers = document.querySelectorAll(".information-container")
    const hamburgerLinks = document.querySelectorAll(".hamburger-nav li")

    hamburger.addEventListener("click", animateHamburger);
    window.addEventListener("scroll", declareLoadAnimationElements);
    window.addEventListener("resize", declareLoadAnimationElements);

    for (let i = 0; i < hamburgerLinks.length; i++) {
        hamburgerLinks[i].addEventListener("click", () => scrollToPageSection(hamburgerLinks[i]))
    }
    for (let i = 0; i < informationContainers.length; i++) {
        informationContainers[i].addEventListener("click", () => showExtendedInformation(informationContainers[i]))
    }
    for (let i = 0; i < filterButtons.length; i++) {
        filterButtons[i].addEventListener("click", () => filterProjects(filterButtons, filterButtons[i]))
    }
}

/** Animates the hamburger icon */
function animateHamburger() {
    const hamburger = document.querySelectorAll(".hamburger span");
    const hamburgerMenu = document.querySelector(".hamburger-menu") // CHANGE TO MENU

    if (hamburgerMenu.classList.contains("flex")) {
        unCrossTheHamburger(hamburger);
    }
    else {
        crossTheHamburger(hamburger);
    }
    showOrHideHamburgerMenu(hamburgerMenu);
}

/**
 * Crosses the span elements of the hamburger icon
 * @param {Element} hamburger 
 */
function crossTheHamburger(hamburger) {
    
    hamburger[0].style.top = "0.7rem"
    hamburger[2].style.top = "0.7rem"

    setTimeout( function() {
        hamburger[1].style.display = "none";
        hamburger[0].style.transform = "rotate(45deg)";
        hamburger[2].style.transform = "rotate(-45deg)";
    }, 200);
}

/**
 * Uncrosses the span elements of the hamburger icon
 * @param {Element} hamburger 
 */
function unCrossTheHamburger(hamburger) {
    setTimeout( function() {
        hamburger[0].style.top = "0rem"
        hamburger[2].style.top = "1.4rem"
        hamburger[1].style.display = "unset"
    }, 200);

    hamburger[0].style.transform = "rotate(0deg)";
    hamburger[2].style.transform = "rotate(0deg)";
}

/**
 * Toggles the visibility of the hamburger menu and scroll of html
 * @param {Element} hamburgerMenu 
 */
function showOrHideHamburgerMenu(hamburgerMenu) {
    const html = document.querySelector("html")
    html.classList.toggle("scroll-lock")  
    
    hamburgerMenu.classList.toggle("flex")
}

/**
 * Changes the style of filter buttons and filters projects
 * @param {Element} allButtons 
 * @param {Element} targetButton 
 */
function filterProjects(allButtons, targetButton) {
    const graphicDesignProjects = document.querySelectorAll(".graphic-design")
    const webProjects = document.querySelectorAll(".web-project")
    const projectContainers = document.querySelectorAll(".project-container")

    /** Changes style of filterbuttons */
    allButtons.forEach( function(button) {
        button.classList.remove("active")
        if (button === targetButton) {
            button.style.backgroundColor = "#FC584D";
            button.style.color = "white";
        }
        else {
            button.style.backgroundColor = "transparent";
            button.style.color = "#FC584D";
        }
    })

    /** Filters projects */
    if (targetButton.id === "graphic") {
        webProjects.forEach( function(project) {
            project.style.display = "none";
        });
        graphicDesignProjects.forEach( function(project) {
            resetLoadAnimation(project)
        });
    }
    else if (targetButton.id === "web") {
        graphicDesignProjects.forEach( function(project) {
            project.style.display = "none";
        });
        webProjects.forEach( function(project) {
            resetLoadAnimation(project)
        });
    }
    else {
        graphicDesignProjects.forEach( function(project) {
            resetLoadAnimation(project)
        });
        webProjects.forEach( function(project) {
            resetLoadAnimation(project)
        });
    }

    /** Reruns load animation on projects */
    for (let index = 0; index < projectContainers.length; index++) {
        initiateLoadAnimation(projectContainers[index]); 
    }
}

/**
 * Expands information container
 * @param {Element} trigger The information container that triggered the click event
 */
function showExtendedInformation(trigger) {
    trigger.children[2].classList.toggle("max-height");
}

/**
 * Closes the hamburger menu and scrolls to section of page
 * @param {Event} hamburgerLinks 
 */
function scrollToPageSection(clickedLink) {
    const hamburgerMenu = document.querySelector(".hamburger-menu")
    const hamburger = document.querySelectorAll(".hamburger span");
    showOrHideHamburgerMenu(hamburgerMenu);
    unCrossTheHamburger(hamburger);
    
    /* Uses the innerHTML of the clicked link to target a corresponding id */
    const linkContent = clickedLink.innerHTML.toLowerCase()
    const firstWordInLink = linkContent.split(" ")[0];
    const target = document.querySelector("#" + firstWordInLink)

    /* Gets the y-position of the targeted section of the page */
    const targetY = target.getBoundingClientRect().top;

    /* Instructs the window to scroll to the y-position */
    window.scroll({
        top: targetY,
        left: 0,
        behavior: "smooth"
    });
}

/** Declares which elements should be animated */
function declareLoadAnimationElements() {
    const introText = document.querySelector(".introduction p");
    initiateLoadAnimation(introText);
    
    const projectContainers = document.querySelectorAll(".project-container")
    for (i = 0; i < projectContainers.length; i++) {
        initiateLoadAnimation(projectContainers[i]);
    }
}

/**
 * Initiates load animation
 * @param {Element} element 
 */
function initiateLoadAnimation(element) {
    const viewportHeight = Number(window.pageYOffset) + Number(window.innerHeight);

    /** If top of element is  above bottom of page, change element style */
    if (element.offsetTop <= viewportHeight) {
        element.style.opacity = "1";
        element.style.margin = "1.5rem 0";
    }
}

/** Resets styling made by load animation */
function resetLoadAnimation(project) {
    project.style.display = "inline-block";
    project.style.opacity = "0"
    project.style.margin = "3rem 0"
}
