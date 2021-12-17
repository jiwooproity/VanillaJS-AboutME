const subMenuList = Array.from(document.querySelectorAll('.toggle__submenu ul li a'));
const TitleChange2 = document.querySelector('.main__title');
const TitleTime2 = document.querySelector('.main__time');

subMenuList.map((item, index) => {
    item.addEventListener('click', () => {
        if(index == 0) {
            window.scroll({top: 0, behavior: "smooth"});
            toggleSubMenu.classList.toggle('active');
            headerMenuBtn.classList.toggle('active');
        }

        else if(index == 1) {
            window.scroll({top: aboutSection - 78, behavior: "smooth"});
            toggleSubMenu.classList.toggle('active');
            headerMenuBtn.classList.toggle('active');
        }

        else if(index == 2) {
            let titleZindex = TitleChange2.style.zIndex;

            TitleChange2.classList.toggle('active');
            TitleTime2.classList.toggle('active');
            toggleSubMenu.classList.toggle('active');
            headerMenuBtn.classList.toggle('active');

            if(titleZindex == 2) {
                TitleChange2.style.zIndex = "1";
                return;
            }

            else {
                setTimeout(() => {
                    TitleChange2.style.zIndex = "2";
                }, 1900);
            }
        }
    })
})