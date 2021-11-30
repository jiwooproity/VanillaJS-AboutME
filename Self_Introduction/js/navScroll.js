const header = document.querySelector('header');
const navmenu = Array.from(document.querySelectorAll('.header__menu-item'));
const articleTop = document.querySelector('.article-2').offsetTop;

window.addEventListener('scroll', () => {
    if(window.scrollY > 83) {
        header.style.background = "var(--white)";
        header.style.boxShadow = "0px 3px 3px rgba(0, 0, 0, 0.5)"
    } else {
        header.style.background = "";
        header.style.boxShadow = ""
    }
})

navmenu[1].addEventListener('click', () => {
    window.scroll({top: articleTop - 78, behavior: "smooth"})
})
