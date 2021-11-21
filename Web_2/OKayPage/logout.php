<?php

    session_start();
    session_destroy();

    echo "<script> alert('성공적으로 로그아웃을 마쳤습니다.'); location.href='../index.php'; </script>";

?>