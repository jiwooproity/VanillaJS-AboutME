const header = document.querySelector('header');
const navmenu = Array.from(document.querySelectorAll('.header__menu-item'));

const section_1 = document.querySelector('.section').offsetTop;

navmenu[1].addEventListener('click', () => {
    window.scroll({top: section_1 - 78, behavior: "smooth"});
})

window.addEventListener('scroll', () => {
    if(window.scrollY > 83) {
        header.style.background = "var(--white)";
        header.style.boxShadow = "0px 3px 3px rgba(0, 0, 0, 0.5)"
    } else {
        header.style.background = "";
        header.style.boxShadow = ""
    }
})
