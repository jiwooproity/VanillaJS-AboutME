const scrollItem = document.querySelectorAll(".content__scrollItem");
const header_2 = document.querySelector(".main-header").offsetHeight;
const part_1Top = document.querySelector(".main-content__encore").offsetTop;
const part_2Top = document.querySelector(".third-content").offsetTop;

window.addEventListener("scroll", function () {
    let index = 0;
    let scrollHeight = window.scrollY;

    if(scrollHeight < part_1Top - header_2) {
        for(index = 0; index < scrollItem.length; index++) {
            const current = document.getElementsByClassName("scrollActive");
            current[0].className = current[0].className.replace(" scrollActive", "");
            scrollItem[0].className += " scrollActive";
        }

    } else if(scrollHeight >= part_1Top - header_2 && scrollHeight < part_2Top - header_2) {
        for(index = 0; index < scrollItem.length; index++) {
            const current = document.getElementsByClassName("scrollActive");
            current[0].className = current[0].className.replace(" scrollActive", "");
            scrollItem[1].className += " scrollActive";
        }

    } else if(scrollHeight >= part_2Top - header_2) {
        for(index = 0; index < scrollItem.length; index++) {
            const current = document.getElementsByClassName("scrollActive");
            current[0].className = current[0].className.replace(" scrollActive", "");
            scrollItem[2].className += " scrollActive";
        }
    }
})

scrollItem[0].addEventListener("click", function() {
    window.scroll({top: 0, behavior: "smooth"});
})

scrollItem[1].addEventListener("click", function() {
    const scrollSwitch = part_1Top - header_2;
    window.scroll({top: scrollSwitch, behavior: "smooth"});
})

scrollItem[2].addEventListener("click", function() {
    const scrollSwitch = part_2Top - header_2;
    window.scroll({top: scrollSwitch, behavior: "smooth"});
})