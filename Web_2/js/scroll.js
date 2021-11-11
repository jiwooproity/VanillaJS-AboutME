const go_btn = document.querySelector(".main-content__link");

const targetDiv = document.querySelector(".main-content__encore").offsetTop;
const targetnav = document.querySelector(".main-header").offsetHeight;

const targetthird = document.querySelector(".third-content").offsetTop;
const targetLink = document.querySelector(".chimatbaram__link")

const movePart = document.getElementById("cd_menu");
const subMenu = document.querySelector(".sub_menu");


/* 상단 Nav메뉴 div의 클래스와 스크롤 이동할 div의 클래스를 가져오고 offsetTop 또는 offsetHeigh으로
   Nav메뉴 div의 높이 및 스크롤 이동할 div의 Top 좌표를 구하여 아래에서 빼주고 top값에 넣어 그만큼만 이동 */

function  scrollmove() {
    window.scroll({top: targetDiv - targetnav, behavior: "smooth"})
}

go_btn.addEventListener("click", scrollmove);

const top_btn = document.querySelector(".moveTop");

top_btn.addEventListener("click", function() {
    window.scroll({top: 0, behavior: "smooth"});
})

movePart.addEventListener("click", function() {

    subMenu.classList.toggle("open_sub");
})

function  scrollmove_2() {
    window.scroll({top: targetthird - targetnav, behavior: "smooth"})
}

targetLink.addEventListener("click", scrollmove_2);