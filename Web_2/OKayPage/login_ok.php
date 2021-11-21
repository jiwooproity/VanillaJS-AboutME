<?php
    $id = $_POST['id'];
    $password = $_POST['password'];

    if($id == "") {
        echo "<script> alert('아이디를 입력해주세요.'); history.back(); </script>";
    } else if($password == "") {
        echo "<script> alert('비밀번호를 입력해주세요.'); history.back(); </script>";
    } else {
        $connect = mysqli_connect('localhost', 'jiwooproity', 'mirrorstale1!', 'jiwooproity');
        $select_query = "SELECT * FROM member_list WHERE id='$id' and password='$password'";
        $select_result = mysqli_query($connect, $select_query);
        $query_row = mysqli_num_rows($select_result);

        if($query_row == 1) {
            session_start();
            $_SESSION['user_id'] = $id;

            echo "<script> alert('Fearless 환영합니다!'); location.href='../index.php'; </script>";
        } else {
            echo "<script> alert('아이디나 비밀번호가 일치하지 않습니다.'); history.back(); </script>";
        }
    }
?>