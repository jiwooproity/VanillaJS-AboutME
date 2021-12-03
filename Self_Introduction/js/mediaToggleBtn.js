const subMenuList = Array.from(document.querySelectorAll('.toggle__submenu ul li a'));
const TitleChange2 = document.querySelector('.main__title');
const TitleTime2 = document.querySelector('.main__time');

subMenuList[2].addEventListener('click', () => {
    let titleZindex = TitleChange2.style.zIndex;

    TitleChange2.classList.toggle('active');
    TitleTime2.classList.toggle('active');

    if(titleZindex == 2) {
        TitleChange2.style.zIndex = "1";
        return;
    }

    else {
        setTimeout(() => {
            TitleChange2.style.zIndex = "2";
        }, 1900);
    }
})