const nextBtn = document.querySelector(".nextBtn");
const backBtn = document.querySelector(".backBtn");

let slideIndex = 1;

slide(slideIndex);

function plusSlide() {
    slide(slideIndex += 1);
    console.log(slideIndex);
}

function currentSlide() {
    slide(slideIndex -= 1);
}

function slide(index) {
    const slideDiv = document.getElementsByClassName("last-content__slide");

    if(index > slideDiv.length) {
        slideIndex = 1;
    } else if(index < 1) {
        slideIndex = slideDiv.length;
    }

    for(let i = 0; i < slideDiv.length; i++) {
        slideDiv[i].style.display = "none";
    }

    slideDiv[slideIndex-1].style.display = "flex";
}

nextBtn.addEventListener("click", plusSlide);
backBtn.addEventListener("click", currentSlide);