const mainTitle = document.querySelector('.main__title');
const mask = document.querySelector('.image__mask-light');
const moonTouch = document.querySelector('.image__moon');
const sunTouch = document.querySelector('.image__sun');
const darkBottom = document.querySelector('.image__mask-bottom-dark');
const lightBottom = document.querySelector('.image__mask-light');

// Main Title - 아래 위로 올라오는 애니메이션
function startTop() {
    mainTitle.classList.toggle('active');

    setTimeout(() => {
        darkBottom.classList.toggle('index');
        lightBottom.classList.toggle('index');
        mainTitle.style.zIndex = "2";
    }, 1900);
}

// Moon 이미지 위치 변경 값 - 흔들림 애니메이션
function moveMoon() {
    setTimeout(() => {
        moonTouch.classList.toggle('touch');

        setTimeout(() => {
            moonTouch.classList.toggle('touch');
        }, 100)
    }, 100)
}

// Moon 이미지 클릭 시 이벤트 발생
moonTouch.addEventListener('click', () => {
    moveMoon();
})

setTimeout(startTop, 200);