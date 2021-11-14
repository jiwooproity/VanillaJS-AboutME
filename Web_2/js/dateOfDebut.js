const debutText = document.querySelector(".content__member__dateOfDebut");
const locationWrap = Array.from(document.querySelectorAll(".content__image__wrap"));

function getDate() {
    let today = new Date();
    let debutDay = new Date(2016, 1,16 );

    let dateResult = today.getTime() - debutDay.getTime();

    let result = Math.ceil(dateResult / (1000 * 60 * 60 * 24)) - 1;

    debutText.innerHTML = `Date of Debut + ${result} (5주년)`;
}

setInterval(getDate, 100);

/* map()을 활용한 URL - Location.href 이동 코드 */

const url = ["nyong2ya", "braveg_yj", "bg_eunji92", "u.nalee"];

locationWrap.map((item, index) => {
    item.addEventListener("click", function () {
        location.href=`https://www.instagram.com/${url[index]}`;
    })
});

/*

locationWrap.map((item, index) => {
    이렇게 하게 될 경우엔 map((item, index)) -> item 부분에 locationWrap으로 받아온 배열들을
    순차적으로 담아주고, index에는 받아온 갯수만큼 0부터 배열 번호를 지정해준다.

    이걸 이용해서 item.addEventListener("click", function() {
        item에는 locationWrap에서 받아온 배열이 들어있으므로 해석하면
        item.addEventListener <= item(.content__image__wrap)이 들어있으므로 해당 클래스를 가진
        태그를 클릭하면 이벤트 발생 / 실제로는 4가지의 클릭 이벤트가 만들어 진거다.

        + 아래는 클릭시 발생하는 이벤트 요소를 넣었다.
        - location.href='https://www.instagram.com/${url[index]}';
        여기서 어떻게 되는건지 해석하면
        location.href=` '' / ${url[0]} `
        location.href=` '' / ${url[1]} `
        location.href=` '' / ${url[2]} `
        location.href=` '' / ${url[3]} ` 이런식으로 나뉘게 된다.
    })
});

*/

/*
for(index = 0; index < locationWrap.length; index++) {
    locationWrap[0].addEventListener("click", function () {
        location.href="https://www.instagram.com/nyong2ya/";
    })

    locationWrap[1].addEventListener("click", function () {
        location.href="https://www.instagram.com/braveg_yj/";
    })

    locationWrap[2].addEventListener("click", function () {
        location.href="https://www.instagram.com/bg_eunji92/";
    })

    locationWrap[3].addEventListener("click", function () {
        location.href="https://www.instagram.com/u.nalee/";
    })
}
*/