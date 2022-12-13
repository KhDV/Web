<?php
// функция подключения
function Connect_dataBase() // подключаем базу данных
{
  $serverName = "localhost"; // имя хоста, на котором выполняется текущий скрипт
  $db_user = "root"; // константа-логин для инициализации и подключения к базе данных
  $db_pass = "";     //константа-пароль для инициализации и подключения к базе данных
  $db_name = "my_bd"; // название базы данных

  $dataBase = new mysqli($serverName, $db_user, $db_pass, $db_name); //конструктор, в который передаются настройки подключения
  return $dataBase; //прекращение выполнения текущей функции и возвращение аргумента как значения данной функции
}

// нажатие на кнопку Авториззоваться
if (isset($_GET['autorisation'])) { //начало условия, isset () вернёт false при проверке переменной которая была установлена значением null, вернет true, если все параметры определены
  $login = $_GET['login']; //$_GET - автоматическая глобальная переменная
  $password = $_GET['password']; //присваивание переменной
  if ($login != null && $password != null) { // если переменные логин и пароль определены
    $dataBase = Connect_dataBase(); //подключение к бд

    $request = "SELECT login, password FROM users WHERE login = '$login' AND password = '$password'";

    $result = mysqli_fetch_assoc($dataBase->query($request));

    if($result != null){
      header("Location: site.php");
    }
    else {
      header("Location: index.php");
    }

    $dataBase->close();
  } else {
    readfile('index.php');
  }
}

// нажатие на кнопку Зарегистрироваться
if (isset($_GET['registration'])) {
  $login = $_GET['login'];
  $password = $_GET['password'];
  $repeatPassword = $_GET['repeat_password'];
  if ($login != null && $password != null && $repeatPassword != null) {
    if ($password == $repeatPassword) {
      $dataBase = Connect_dataBase();

      // написать проверку на существование такого аккаунта с таким же логином с использованием SELECT
      // (как использовать SELECT смотрите в нажатии на кнопку Авторизоваться)
      $sql = 'SELECT count(login) as count FROM users WHERE login=?'; //записываем sql в котором считаем количество найденных id
      $query = $pdo->prepare($sql); 
      $query->execute([$login]);
      $count_users = $query->fetch(); //получаем одну строчку
      if ((int)$count_users['count'] === 0) { //Если таких пользователей больше 0
      //здесь код регистрации
      } else {
      exit('Логин уже занят'); //делаем выход из скрипта. Сюда можно написать что угодно
      }

      $request = "INSERT INTO users (login, password) VALUES ('$login', '$password')";
      $dataBase->query($request);
      header('Location: index.php');
      $dataBase->close();
    }
    else{
      header("Location: registr.php");
    }
  } else {
    header("Location: registr.php");
  }

  
}
