const mainTitle = document.querySelector('.main__title');
const mask = document.querySelector('.image__mask-light');
const moonTouch = document.querySelector('.image__moon');

let Y;

function startTop() {
    mainTitle.style.bottom = "50%";

    setTimeout(index, 2000);

    function index() {
        mainTitle.style.zIndex = "3";
    }
}

function moveMoon() {
    setTimeout(() => {
        moonTouch.classList.toggle('touch');

        setTimeout(() => {
            moonTouch.classList.toggle('touch');
        }, 100)
    }, 100)
}


moonTouch.addEventListener('click', () => {
    moveMoon();
})

startTop();