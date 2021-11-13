const text = document.querySelector(".main-content__title");

const typingText = "롤린 Rollin' 인기가요 1위";

let textLength = 0;

function typing() {
    if(textLength < typingText.length) {
        let txt = typingText.charAt(textLength);
        text.innerHTML += txt;

        textLength++;
    }
}

setInterval(typing, 400);