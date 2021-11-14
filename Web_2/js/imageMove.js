const content__image__wrap = Array.from(document.querySelectorAll(".content__image__wrap"));

content__image__wrap.map((item, index) => {
    item.addEventListener("mouseover", function () {
        item.classList.toggle("focus_image");
    })
});

content__image__wrap.map((item, index) => {
    item.addEventListener("mouseout", function () {
        item.classList.toggle("focus_image");
    })
});