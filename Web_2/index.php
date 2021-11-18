<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
        <title>브레이브걸스 & 피어레스</title>
    </head>
    <body>
        <div class="main">

            <?php
                include "header.html";
            ?>  <!-- header.html 불러오기 -->

            <div class="main-content">
                <div class="main-content__width">
                    <h2 class="main-content__subtitle">
                    </h2>
                    <div class="main-content__title_width">
                        <h1 class="main-content__title"></h1>
                        <span class="blink">|</span>
                    </div>
                    <h1 class="main-content__title_2">
                        2021.03.14
                    </h1>
                    <div class="main-content__middle">
                        <a class="main-content__link">무대 보러가기</a>
                    </div>
                    <div class="arrow-icon_width">
                        <span class="material-icons arrow_size focus_ani">expand_more</span>
                    </div>
                </div>
            </div> <!-- 상단 / 롤린 Rollin' 인기가요 1위 / 타이틀 -->

            <div class="last-content__frame">
                <div class="last-content__width">

                    <div class="last-content__slide fade_slide_active">
                        <img class="last-content__slideImg" src="img/slide_1.jpg">
                    </div>

                    <div class="last-content__slide fade_slide_active">
                        <img class="last-content__slideImg" src="img/slide_2.jpg">
                    </div>

                    <div class="last-content__slide fade_slide_active">
                        <img class="last-content__slideImg" src="img/slide_3.jpg">
                    </div>

                    <div class="nextBtn"><span>></span></div>
                    <div class="backBtn"><span><</span></div>

                </div>
            </div>

            <div class="content-container">
                <div class="main-content__encore" id="move-encore">
                    <div class="main-content__mvWidth">
                        <div class="main-content__mvInfo">
                            <span class="main-content__part">Part. 1</span>
                            <h1>브레이브걸스 1854일의 기적</h1>
                            <h2>2021.03.14 | MCountDown 1위</h2>
                            <p>2016년 데뷔한 2기 멤버 <span class="black_span">민영, 유정, 은지, 유나</span>로 구성된 4인조 걸그룹</p>
                            <p>5년동안 무명의 걸그룹이었지만 <span class="black_span">Rollin'</span>의 역주행으로 많은 사랑을 받고있다.</p>
                        </div>
                        <div class="main-content__mv">
                            <iframe src="https://www.youtube.com/embed/bpAYc0D0tXs" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

                <div class="third-content">
                    <div class="third-content__width">
                        <div class="third-content__album">
                            <img class="third-content__albumImg" src="img/썸머퀸_사진.png" alt="">
                        </div>
                        <div class="third-content__albumInfo">
                            <span class="main-content__part">Part. 2</span>
                            <h1>SUMMER QUEEN</h1>
                            <h2>2021.06.17 | The 5th Mini Album</h2>
                            <p>2021년 6월 17일에 발매된 <span class="black_span">브레이브걸스의 미니 5집 앨범</span>이다.</p>
                            <p>롤린의 역주행 이후 발매된 첫 번째 앨범이며, 현 4명의 멤버만 참여한
                            </p>
                            <p>
                                첫번째 미니앨범이기도 하다.
                            </p>
                            <div class="content-music__frame">
                                <div class="content-music__width">
                                    <a class="content-music__link" href="https://www.youtube.com/watch?v=e70PkoJhQYM" target="_blank">
                                        유튜브에서 듣기
                                    </a>
                                </div>
                                <div class="content-mIcons__width">
                                    <span class="material-icons">
                                        skip_next
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="bg-image">
                    <div class="fourth-content">
                        <div class="fourth-content__width">
                            <div class="fourth-content__info">
                                <span class="fourth-content__part">Part. 3</span>
                                <h1>《 After 'We Ride' 》</h1>
                                <h2>2021.08.23 | The 5th Mini Album Repackage </h2>
                                <p>2021년 8월 23일에 발매된 <span class="black_span">브레이브걸스의 미니 5집 리패키지 앨범</span>이다.</p>
                                <p>작년 8월에 발매한 <span class="black_span">'운전만해 We Ride'</span>의 뒷이야기를 담아낸 노래이다.</p>
                                <div class="content-music__frame">
                                    <div class="content-music__width">
                                        <a class="fourth-music__link" href="https://www.youtube.com/watch?v=ZIZECe-55HY" target="_blank">
                                            유튜브에서 듣기
                                        </a>
                                    </div>
                                    <div class="fourth-mIcons__width">
                                        <span class="material-icons">
                                            skip_next
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="fourth-content__blank">
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- 컨텐츠 목록 -->

            <?php
                include "footer.html";
            ?> <!-- footer.html 불러오기 -->

        </div>

        <!--  include "scrollLayout.html"; -->

        <?php
            include "move_top_button.html";
        ?> <!-- 서브 메뉴 및 상단 이동 버튼 / sub_menu.html, move_top_button.html 불러오기 -->

        <!-- <script src="js/leftScrollBar.js"></script> -->
        <script src="js/header_change.js"></script>
        <script src="js/text_1854.js"></script>
        <script src="js/text_Typing.js"></script>
        <script src="js/scroll.js"></script>
        <script src="js/move.js"></script>
        <script src="js/slide.js"></script>
    </body>
</html>