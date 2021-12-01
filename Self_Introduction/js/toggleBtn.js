const header__toggle = document.querySelector('.header__toggle');
const indicator = document.querySelector('.indicator');

const body = document.querySelector('body');
const navbar = document.querySelector('header');

const maskLight = document.querySelector('.image__mask-light');
const maskTopDark = document.querySelector('.image__mask-top-dark');
const maskBottomDark = document.querySelector('.image__mask-bottom-dark');

const moon = document.querySelector('.image__moon');
const sun = document.querySelector('.image__sun');

const toggleSubMenuBtn = document.querySelector('.header__toggle__menu');
const toggleSubMenu = document.querySelector('.toggle__submenu');

const headerMenuBtn = document.querySelector('.header__toggle__btn');

headerMenuBtn.addEventListener('click', () => {
    headerMenuBtn.classList.toggle('active');
})

header__toggle.addEventListener('click', () => {
    // Header 영역 Indicator 모션 & 색상 변경
    indicator.classList.toggle('active');

    // 메인배경 마스크 변경 값
    maskLight.classList.toggle('active');
    maskTopDark.classList.toggle('active');
    maskBottomDark.classList.toggle('active');

    // SUN & MOON 사진 모션 적용 값
    moon.classList.toggle('active');
    sun.classList.toggle('active');

    // 라이트 모드 & 다크모드 변경
    body.classList.toggle('dark');
    navbar.classList.toggle('dark');
})

// 미디어 모드 - Header 영역 Navigation 서브 메뉴 열기
toggleSubMenuBtn.addEventListener('click', () => {
    toggleSubMenu.classList.toggle('active');
})