const header = document.querySelector(".main-header");
const header_logo = document.querySelector(".main-nav__logo a");
const header_menu = document.querySelectorAll(".main-nav__link");

const headerHeight = header.getBoundingClientRect().height;

window.addEventListener("scroll", function() {
    if(window.scrollY > headerHeight) {
        header.style.backgroundColor = "rgba(109,102,225,0.87)";
        header_logo.style.color = "white";

        let num = 0;
        while(num < header_menu.length) {
            header_menu[num].style.color = "white";
            num++;
        }

    } else {
        header.style.backgroundColor = "white";
        header_logo.style.color = "#6237FFCC";

        let num = 0;
        while(num < header_menu.length) {
            header_menu[num].style.color = "#1C1C1CCC";
            num++;
        }
    }
})