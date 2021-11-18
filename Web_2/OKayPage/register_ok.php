<?php
    $connect = mysqli_connect('127.0.0.1', 'root', 'jiwooity1', 'test');

    //POST형식으로 받아온 input.value 값

    $id = $_POST['id'];
    $password = $_POST['password'];
    $password_confirm = $_POST['password_confirm'];
    $name = $_POST['name'];
    $birth = $_POST['birth'];
    $email = $_POST['email'];
    $phone_1 = $_POST['phone_1'];
    $phone_2 = $_POST['phone_2'];
    $phone_3 = $_POST['phone_3'];

    $phone_num = $phone_1 + $phone_2 + $phone_3;

    //ID 중복체크 Query *

    $select_query = "SELECT * FROM member_list WHERE id='$id'";
    $select_result = mysqli_query($connect, $select_query);
    $result_row = mysqli_num_rows($select_result);

    //정규표현식 변수

    $id_pregExp = "/^[a-z0-9]{4,12}$/";
    $password_pregExp = "/^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]|.*[0-9]).{8,15}$/";
    $email_pregExp = "/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i";
    $name_pregExp = "/^[가-힣]+$/";
    $phone_pregExp = "/^[0-9]{3,4}+$/";

    if($id == "" || $password == "" || $password_confirm == "" || $name == "" || $email == "" || $phone_1 == "" || $phone_2 == "" || $phone_3 == "") {
        echo "<script>
                alert('빈 칸이 없도록 입력해주세요!'); 
                history.back();
              </script>";
    }  else if(preg_match($id_pregExp, $id) == false) {
        echo "<script>
                alert('아이디는 4~12자 영문소문자');
                history.back();
              </script>";
    } else if(preg_match($password_pregExp, $password) == false) {
        echo "<script>
                alert('비밀번호는 8~24자 영문대소문자, 숫자, 특수문자를 섞어주세요.');
                history.back();
              </script>";
    } else if($password != $password_confirm) {
        echo "<script>
                alert('두 비밀번호가 다릅니다.');
                history.back();
              </script>";
    } else if(preg_match($email_pregExp, $email) == false) {
        echo "<script>
                alert('이메일 형식이 아닙니다.');
                history.back();
              </script>";
    } else if(preg_match($name_pregExp, $name) == false) {
        echo "<script>
                alert('이름을 한글로 다시 입력해주세요.');
                history.back();
              </script>";
    } else if(preg_match($phone_pregExp, $phone_2) == false) {
        echo "<script>
                alert('전화번호 형식이 아닙니다.');
                history.back();
              </script>";
    } else if(preg_match($phone_pregExp, $phone_3) == false) {
        echo "<script>
                alert('전화번호 형식이 아닙니다.');
                history.back();
              </script>";
    } else if ($result_row == 1) {
        echo "<script>
                alert('이미 존재하는 아이디입니다.');
                history.back();
              </script>";
    } else {

        $insert_query = "INSERT INTO member_list SET id='$id', password='$password', name='$name', birth='$birth', email='$email', phone_num='$phone_num'";
        $insert_result = mysqli_query($connect, $insert_query);

        if($insert_result == 1) {
            echo "<script>
                alert('Fearless에 가입하신 것을 축하드립니다!');
                location.href='../index.php';
              </script>";
        } else {
            echo "<script>
                alert('회원가입에 실패했습니다.');
                history.back();
              </script>";
        }
    }
?>