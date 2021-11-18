const slideImg = Array.from(document.querySelectorAll(".last-content__slideImg"));

const nextBtn = document.querySelector(".nextBtn");
const backBtn = document.querySelector(".backBtn");

let slideIndex = 1;

slide(slideIndex);

function plusSlide() {
    slide(slideIndex += 1);
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

//슬라이드 이미지 클릭 시 Map으로 배치된 이미지에 따라 아래 배열에 정해진 링크로 이동

const slideLink = ["watch?v=ZIZECe-55HY", "watch?v=e70PkoJhQYM", "watch?v=3cZrxpK2EAQ&list=OLAK5uy_nLK2CTN-pb473REzQOpZvKqzdQkGuVnLw"];

slideImg.map((item, imgIndex) => {
    item.addEventListener("click", function() {
        window.open('https://www.youtube.com/'+slideLink[imgIndex]);
    })
});