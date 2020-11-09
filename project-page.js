window.addEventListener("load", main);

/** Functions to be initiated on window load */
function main() {
    addEventListeners();
    moveUpOnLoad();
}

function addEventListeners() {
    window.addEventListener("scroll", moveUpOnLoad)
}

function moveUpOnLoad() {
    const images = document.querySelectorAll(".image-container img")
    const introImage = document.querySelector(".project-intro-image")
    const text = document.querySelector(".project-intro-text")
    const viewportHeight = window.innerHeight;

    if (text.getBoundingClientRect().y < viewportHeight) {
        text.style.opacity = "1";
        text.style.margin = "1.5rem 0"
    }
    if (introImage.getBoundingClientRect().y < viewportHeight) {
        introImage.style.opacity = "1";
        introImage.style.margin = "1.5rem 0";
    }

    for (i = 0; i < images.length; i++) {
        const projectBounding = images[i].getBoundingClientRect()
        if (projectBounding.y < viewportHeight) {
            images[i].style.opacity = "1";
            images[i].style.margin = "1.5rem 0"
        }

    }
}