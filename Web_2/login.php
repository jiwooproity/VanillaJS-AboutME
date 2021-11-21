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
    include "header.php";
    ?>

    <div class="login__title__frame">
        <h1 class="login__page__title">
            로그인
        </h1>
        <h2 class="login__page__subtitle">
            Fearless
        </h2>
    </div>

    <div class="login__frame">
        <div class="login__width">
            <form class="login__form" action="OKayPage/login_ok.php" method="post">
                <p>아이디</p>
                <input type="text" name="id" placeholder="아이디를 입력해주세요.">
                <p>비밀번호</p>
                <input type="password" name="password" placeholder="비밀번호를 입력해주세요.">

                <input type="submit" value="로그인">
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