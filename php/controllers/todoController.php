<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../models/todolist.php";

$todoList = new todolist();
$res = $todoList->setWork();
$info = array();

if ($res) {
    $todoList->submitWork();

    $info = ['info' => 'Data send'];
} else {
    $info = ['info' => 'Not data send'];

}

$info = json_encode($info);
http_response_code(200);

print_r($info);