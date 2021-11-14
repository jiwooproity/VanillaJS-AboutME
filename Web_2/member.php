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
            ?>

            <div class="content__member__frame">
                <div class="content__member__width">
                    <h1 class="content__member__title">
                        브레이브걸스 멤버
                    </h1>
                    <h2 class="content__member__dateOfDebut">Date of Debut + </h2>
                </div>
            </div>

            <div class="background__city">
                <div class="content__image__frame">
                    <div class="content__image__width">
                        <div class="content__image__wrap">
                            <img class="content__image" src="img/member_img/concert_minyoung_img.jpg">
                            <div class="content__image__info">
                                <h2 class="content__image__text">민영</h2>
                                <h2 class="content__image__subtext">Minyoung</h2>
                                <a class="content__instagram" href="https://www.instagram.com/nyong2ya/">
                                    <img class="content__instagram__icon" src="img/instagram_logo.png">
                                </a>
                            </div>
                        </div>
                        <div class="content__image__wrap">
                            <img class="content__image" src="img/member_img/concert_yujeong_img.jpg">
                            <div class="content__image__info">
                                <h2 class="content__image__text">유정</h2>
                                <h2 class="content__image__subtext">Yujeong</h2>
                                <a class="content__instagram" href="https://www.instagram.com/braveg_yj/">
                                    <img class="content__instagram__icon" src="img/instagram_logo.png">
                                </a>
                            </div>
                        </div>
                        <div class="content__image__wrap">
                            <img class="content__image" src="img/member_img/concert_eunji_img.jpg">
                            <div class="content__image__info">
                                <h2 class="content__image__text">은지</h2>
                                <h2 class="content__image__subtext">Eunji</h2>
                                <a class="content__instagram" href="https://www.instagram.com/bg_eunji92/" target="_blank">
                                    <img class="content__instagram__icon" src="img/instagram_logo.png">
                                </a>
                            </div>
                        </div>
                        <div class="content__image__wrap">
                            <img class="content__image" src="img/member_img/concert_yuna_img.jpg">
                            <div class="content__image__info">
                                <h2 class="content__image__text">유나</h2>
                                <h2 class="content__image__subtext">Yuna</h2>
                                <a class="content__instagram" href="https://www.instagram.com/u.nalee/">
                                    <img class="content__instagram__icon" src="img/instagram_logo.png">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <?php
                include "footer.html";
            ?>
        </div>

        <script src="js/dateOfDebut.js"></script>
        <script src="js/header_change.js"></script>
        <script src="js/imageMove.js"></script>
        <script src="https://kit.fontawesome.com/ef8b1ace87.js" crossorigin="anonymous"></script>
    </body>
</html>