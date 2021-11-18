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
                    FEARLESS 가입
                </h1>
            </div>

            <div class="register__frame">
                <div class="register__width">
                    <form class="register__form" method="post" action="OKayPage/register_ok.php">
                        <p>아이디</p>
                        <input type="text" name="id" placeholder="4 ~ 12자 영문소문자, 숫자를 섞어주세요." minlength="4" maxlength="12">
                        <p>비밀번호</p>
                        <input type="password" name="password" placeholder="8 ~ 15자 영문대소문자, 숫자, 특수문자를 섞어주세요." minlength="8" maxlength="15">
                        <p>비밀번호 확인</p>
                        <input type="password" name="password_confirm" placeholder="비밀번호를 다시 한번 입력해주세요." minlength="8" maxlength="15">
                        <p>이름</p>
                        <input type="text" name="name" placeholder="회원님의 성함을 입력해주세요.">
                        <p>생년월일</p>
                        <input type="text" name="birth" placeholder="회원님의 생년월일을 입력해주세요. (EX : 2000208)">
                        <p>E-Mail</p>
                        <input type="text" name="email" placeholder="회원님께서 사용하실 이메일을 입력해주세요.">
                        <p>연락처</p>
                        <div class="register__phone-num">
                            <input type="text" name="phone_1" value="010" maxlength="3">
                            -
                            <input type="text" name="phone_2" placeholder="4자리" maxlength="4">
                            -
                            <input type="text" name="phone_3" placeholder="4자리" maxlength="4">
                        </div>

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