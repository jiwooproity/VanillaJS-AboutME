const header__toggle = document.querySelector('.header__toggle');
const indicator = document.querySelector('.indicator');
const body = document.querySelector('body');
const navbar = document.querySelector('header');

header__toggle.addEventListener('click', () => {
    indicator.classList.toggle('active');

    body.classList.toggle('dark');
    navbar.classList.toggle('dark');
})