const headerMenuMove = document.querySelector('.header__menu');
const headerMenuArray = Array.from(document.querySelectorAll('.header__menu-item'));
const headerToggleProject = document.querySelector('.header__toggle__project');

const TitleChange = document.querySelector('.main__title');
const TitleTime = document.querySelector('.main__time');

const section_1 = document.querySelector('.section').offsetTop;

headerMenuArray.map((item, index) => {
    item.addEventListener('click', () => {
        if(index == 0) {
            window.scroll({top: 0, behavior: "smooth"});
        }

        else if (index == 1) {
            window.scroll({top: section_1 - 78, behavior: "smooth"});
        } 

        else if (index == 2) {
            let titleZindex = TitleChange.style.zIndex;
            TitleChange.classList.toggle('active');
            TitleTime.classList.toggle('active');

            if(titleZindex == 2) {
                TitleChange.style.zIndex = "1";
                return;
            }

            else {
                setTimeout(() => {
                    TitleChange.style.zIndex = "2";
                }, 1900);
            }
        }
        
        else {
            headerToggleProject.classList.toggle('moving');
            headerMenuMove.classList.toggle('moving');
        }
    }) 
})