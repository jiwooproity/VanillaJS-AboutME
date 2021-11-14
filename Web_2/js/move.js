const go_btn_hover = document.querySelector(".main-content__link");

const moveBg = document.getElementById("bg-image");

go_btn_hover.addEventListener("mouseover", function() {
    go_btn_hover.classList.toggle("active");
});

go_btn_hover.addEventListener("mouseout", function() {
    go_btn_hover.classList.toggle("active");
});