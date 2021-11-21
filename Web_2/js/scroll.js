const go_btn = document.querySelector(".main-content__link");

const targetDiv = document.querySelector(".main-content__encore").offsetTop;
const targetnav = document.querySelector(".main-header").offsetHeight;

const targetthird = document.querySelector(".third-content").offsetTop;

// 2021.11.14 앨범 > 서브 메뉴 삭제

function  scrollmove() {
    window.scroll({top: targetDiv - targetnav, behavior: "smooth"})
}

go_btn.addEventListener("click", scrollmove);

const top_btn = document.querySelector(".moveTop");

top_btn.addEventListener("click", function() {
    window.scroll({top: 0, behavior: "smooth"});
})