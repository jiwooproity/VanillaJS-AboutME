const HoursText = document.querySelector('.time__hours');
const MinutesText = document.querySelector('.time__minutes');
const SecondsText = document.querySelector('.time__second');
const timeMiddle = document.querySelector('.time__middle');
const timeType = document.querySelector('.time__type');

setInterval(() => {
    timeMiddle.classList.toggle('active');
}, 1000);

function setTime() {

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hoursChar = String(hours).length;
    let minutesChar = String(minutes).length;
    let secondsChar = String(seconds).length;

    let Hnumber = parseInt(hours);

    if(hoursChar == 1) {
        HoursText.innerText = `0${hours}`;
    } 
    
    else {
        HoursText.innerText = `${hours}`;
    }

    if(minutesChar == 1) {
        MinutesText.innerText = `0${minutes}`;
    }

    else {
        MinutesText.innerText = `${minutes}`;
    }

    if(secondsChar == 1) {
        SecondsText.innerText = `0${seconds}`;
        SecondsText.classList.toggle('active');
    }

    else {
        SecondsText.innerText = `${seconds}`;
        SecondsText.classList.toggle('active');
    }

    if(Hnumber >= 0 && Hnumber < 12) {
        timeType.innerText = "AM";
    } 
    
    else {
        timeType.innerText = "PM";
    }
}

setInterval(setTime, 500);