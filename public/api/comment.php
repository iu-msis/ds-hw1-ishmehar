<?php

require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST'){
$comment = new Comment($_POST);
$comment->create();
echo json_encode($comment);
exit;
}
$comments = Comment::fetchAll();
$json = json_encode($comments, JSON_PRETTY_PRINT);
header('Content-Type: application/json');
echo $json;
