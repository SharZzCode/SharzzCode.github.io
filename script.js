/* SWITCH COLOR MODE */

let switchModeBtn = document.querySelector(".switchModeBtn");
let icon = document.querySelector(".fa-sun");


switchModeBtn.addEventListener("click", () => {
    icon.classList.toggle("fa-moon")
    icon.classList.toggle("fa-sun")
})


/* DISPLAY PROJECT TITLE */

let mediaElement = document.querySelectorAll(".media-element");
let projectTitle = document.querySelectorAll(".project-title");

mediaElement.forEach ( media => {
    media.addEventListener("mouseover", (event) => {  
        let text = media.querySelector("p");
        text.style.display = "block";
        })
})

mediaElement.forEach ( media => {
    media.addEventListener("mouseout", () => {
        let text = media.querySelector("p");
        text.style.display = "none";
    })
})


/* LOADER */ 

let preloaderWrapper = document.querySelector(".preloader-wrapper");

window.addEventListener("load", () => {
    preloaderWrapper.style.display = "none"
})


/* ACTIVE STATUS ON BUTTONS */

let buttons = document.querySelectorAll(".btn");


buttons.forEach ( btn => {
    btn.addEventListener("click", () => {
        let activeBtn = document.querySelector(".active");
        btn.classList.add("active");
        activeBtn.classList.remove("active")
    })
})
