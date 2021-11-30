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

header__toggle.addEventListener('click', () => {
    indicator.classList.toggle('active');
    maskLight.classList.toggle('active');
    maskTopDark.classList.toggle('active');
    maskBottomDark.classList.toggle('active');
    moon.classList.toggle('active');

    

    sun.classList.toggle('active');

    body.classList.toggle('dark');
    navbar.classList.toggle('dark');
})

toggleSubMenuBtn.addEventListener('click', () => {
    toggleSubMenu.classList.toggle('active');
})