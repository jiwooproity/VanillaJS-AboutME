const leftScrollBar = Array.from(document.querySelectorAll(".content__scrollItem"));
const header_2 = document.querySelector(".main-header").offsetHeight;
const part_1Top = document.querySelector(".main-content__encore").offsetTop;
const part_2Top = document.querySelector(".third-content").offsetTop;

window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;

    if(scrollTop < part_1Top - header_2) {
        leftScrollBar[0].classList.add("scrollActive");
        leftScrollBar[0].innerHTML = "● Title";
        leftScrollBar[1].classList.remove("scrollActive");
        leftScrollBar[1].innerHTML = "○ Part. 1";
        leftScrollBar[2].classList.remove("scrollActive");
        leftScrollBar[2].innerHTML = "○ Part. 2";
    } else if(scrollTop >= part_1Top - header_2 && scrollTop < part_2Top - header_2) {
        leftScrollBar[0].classList.remove("scrollActive");
        leftScrollBar[0].innerHTML = "○ Title";
        leftScrollBar[1].classList.add("scrollActive");
        leftScrollBar[1].innerHTML = "● Part. 1";
        leftScrollBar[2].classList.remove("scrollActive");
        leftScrollBar[2].innerHTML = "○ Part. 2";
    } else if(scrollTop >= part_2Top - header_2) {
        leftScrollBar[0].classList.remove("scrollActive");
        leftScrollBar[0].innerHTML = "○ Title";
        leftScrollBar[1].classList.remove("scrollActive");
        leftScrollBar[1].innerHTML = "○ Part. 1";
        leftScrollBar[2].classList.add("scrollActive");
        leftScrollBar[2].innerHTML = "● Part. 2";
    }
})

leftScrollBar[0].addEventListener("click", function() {
    window.scroll({top: 0, behavior: "smooth"});
})

leftScrollBar[1].addEventListener("click", function() {
    const scrollSwitch = part_1Top - header_2;
    window.scroll({top: scrollSwitch, behavior: "smooth"});
})

leftScrollBar[2].addEventListener("click", function() {
    const scrollSwitch = part_2Top - header_2;
    window.scroll({top: scrollSwitch, behavior: "smooth"});
})