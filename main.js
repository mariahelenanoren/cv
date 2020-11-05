let click = 0;

window.addEventListener("load", main);

/** Functions to be initiated on window load */
function main() {
    addEventListeners();
}

function addEventListeners() {
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", animateHamburger);
}

function animateHamburger() {
    const hamburger = document.querySelectorAll(".hamburger span");
    const p = document.querySelector("header p") // CHANGE TO MENU
    console.log(p.style.display);

    if (p.style.display !== "unset") {
        crossTheHamburger(hamburger, p);
    }
    else if (p.style.display == "unset") {
        unCrossTheHamburger(hamburger, p);
    }
}

function crossTheHamburger(hamburger, p) {
    
    hamburger[0].style.top = "0.7rem"
    hamburger[2].style.top = "0.7rem"
    p.style.display = "unset"

    setTimeout( function() {
        hamburger[1].style.display = "none";
        hamburger[0].style.transform = "rotate(45deg)";
        hamburger[2].style.transform = "rotate(-45deg)";
    }, 200);
}

function unCrossTheHamburger(hamburger, p) {
    
    setTimeout( function() {
        hamburger[0].style.top = "0rem"
        hamburger[2].style.top = "1.4rem"
        hamburger[1].style.display = "unset"
    }, 200);

    hamburger[0].style.transform = "rotate(0deg)";
    hamburger[2].style.transform = "rotate(0deg)";
    p.style.display = "none";
}