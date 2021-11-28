const header__toggle = document.querySelector('.header__toggle');
const indicator = document.querySelector('.indicator');
const body = document.querySelector('body');
const navbar = document.querySelector('header');
const maskLight = document.querySelector('.image__mask-light');
const maskDark = document.querySelector('.image__mask-dark');

const toggleSubMenuBtn = document.querySelector('.header__toggle__menu');
const toggleSubMenu = document.querySelector('.toggle__submenu');

header__toggle.addEventListener('click', () => {
    indicator.classList.toggle('active');
    maskLight.classList.toggle('active');
    maskDark.classList.toggle('active');

    body.classList.toggle('dark');
    navbar.classList.toggle('dark');
})

toggleSubMenuBtn.addEventListener('click', () => {
    toggleSubMenu.classList.toggle('active');
})