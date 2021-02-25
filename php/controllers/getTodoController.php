<?php
header("Content-Type: application/json; charset=UTF-8");

include_once "../models/todolist.php";

$todoList = new todolist();
$res = $todoList->getWorks();

$resData = json_encode($res);

echo $resData;