const arRight = document.querySelector(".ar-right");
const arLeft = document.querySelector(".ar-left");
const slides = document.querySelectorAll(".slider");

let current = 0;
slides[current].style.display = "block";

arRight.addEventListener("click", () =>{
    slides[current].style.display = "none";
    slides[current].classList.remove("animate-slides");
    slides[current].classList.remove("animate-slides2");
    current++;
    if (current === slides.length) {
         current = 0
    }
    slides[current].style.display = "block";
    slides[current].classList.add("animate-slides2");
});

arLeft.addEventListener("click", () =>{
    slides[current].style.display = "none";
    slides[current].classList.remove("animate-slides");
    slides[current].classList.remove("animate-slides2");
    current--;
    if (current < 0) {
        current = slides.length - 1
    }
    slides[current].style.display = "block";
    slides[current].classList.add("animate-slides");
});


