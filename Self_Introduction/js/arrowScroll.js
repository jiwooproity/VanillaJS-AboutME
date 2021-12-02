const arrowBtn = document.querySelector('.content__arrow');
const articleTop = document.querySelector('.section').offsetTop;

arrowBtn.addEventListener('click', () => {
    window.scroll({top: articleTop - 78, behavior: "smooth"});
})