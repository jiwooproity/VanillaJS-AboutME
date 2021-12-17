const arrowBtn = document.querySelector('.content__arrow');
const aboutSection2 = document.querySelector('.about__section').offsetTop;

arrowBtn.addEventListener('click', () => {
    window.scroll({top: aboutSection2 - 78, behavior: "smooth"});
})