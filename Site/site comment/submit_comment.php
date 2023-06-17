<?php
// Получаем данные из формы
$name = $_POST['name'];
$email = $_POST['email'];
$comment = $_POST['comment'];

// Проверяем, заполнены ли все обязательные поля
if (empty($name) || empty($comment)) {
    die("Пожалуйста, заполните все обязательные поля.");
}

// Формируем строку для записи в файл
$comment_line = "$name||$email||$comment||" . time() . "\n";

// Записываем комментарий в файл
$fp = fopen('comments.txt', 'a');
fwrite($fp, $comment_line);
fclose($fp);

// Перенаправляем пользователя обратно на страницу с комментариями
header("Location: comments.php");
