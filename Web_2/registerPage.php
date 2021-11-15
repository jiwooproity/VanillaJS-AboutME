<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
        <title>회원가입</title>
    </head>
    <body>
        <div class="main">
            <?php
            include "header.html";
            ?>

            <div class="register__title__frame">
                <h1 class="register__page__title">
                    회원가입
                </h1>
            </div>

            <div class="register__frame">
                <div class="register__width">
                    <form class="register__form">
                        <p>아이디</p>
                        <input type="text" placeholder="아이디를 입력해주세요.">
                        <p>비밀번호</p>
                        <input type="password" placeholder="비밀번호를 입력해주세요.">
                        <p>비밀번호 확인</p>
                        <input type="password" placeholder="비밀번호를 다시 한번 입력해주세요.">
                        <p>이름</p>
                        <input type="text" placeholder="회원님의 성함을 입력해주세요.">
                        <p>E-Mail</p>
                        <input type="text" placeholder="회원님께서 사용하실 이메일을 입력해주세요.">
                        <p>연락처</p>
                        <input type="text" placeholder="회원님께서 사용하실 이메일을 입력해주세요.">

                        <input type="submit" value="회원가입">
                    </form>
                </div>
            </div>

            <?php
            include "footer.html";
            ?>
        </div>
        <script src="js/header_change.js"></script>
    </body>
</html>