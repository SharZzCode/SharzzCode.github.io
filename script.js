/* SWITCH COLOR MODE */

let switchModeBtn = document.querySelector(".switchModeBtn");
let icon = document.querySelector(".fa-sun");


switchModeBtn.addEventListener("click", () => {
    icon.classList.toggle("fa-moon")
    icon.classList.toggle("fa-sun")
})


/* DISPLAY PROJECT TITLE */

let mediaElement = document.querySelector(".media-element");
let projectTitle = document.querySelector(".project-title");

mediaElement.addEventListener("mouseover", (event) => {  
    projectTitle.style.display = "block";
})

mediaElement.addEventListener("mouseout", () => {
    projectTitle.style.display = "none";
})


