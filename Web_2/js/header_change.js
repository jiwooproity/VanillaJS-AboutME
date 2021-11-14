const header = document.querySelector(".main-header");
const header_logo = document.querySelector(".main-nav__logo a");
const header_menu = Array.from(document.querySelectorAll(".main-nav__link"));

const headerHeight = header.getBoundingClientRect().height;

const scrollGraph = document.querySelector(".scroll_graph_color");

window.addEventListener("scroll", function() {
    if(window.scrollY > headerHeight) {
        header.style.backgroundColor = "rgba(34,34,37,0.82)";
        header_logo.style.color = "white";

        for(const menu_change of header_menu) {
            menu_change.style.color = "white";
        }

    } else {
        header.style.backgroundColor = "white";
        header_logo.style.color = "rgba(98, 55, 255, 0.8)";

        for(const menu_change of header_menu) {
            menu_change.style.color = "#1C1C1CCC";
        }
    }
})

window.addEventListener("scroll", function() {
    let windowScrollY = window.scrollY;
    let totalY = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let percentage = (windowScrollY / totalY) * 100;
    scrollGraph.style.width = percentage + "%";
})