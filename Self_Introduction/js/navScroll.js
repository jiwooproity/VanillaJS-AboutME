const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 83) {
        header.style.background = "var(--white)";
        header.style.boxShadow = "0px 3px 3px rgba(0, 0, 0, 0.5)"
    } else {
        header.style.background = "";
        header.style.boxShadow = ""
    }
})