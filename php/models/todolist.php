<?php

include_once 'db.php';

class todolist extends DB
{
    private $todo;

    public function setWork()
    {
        if (isset($_POST['todo']) && !empty($_POST['todo'])) {
            $this->todo = $_POST['todo'];
            return true;
        } else {
            return false;
        }
    }

    public function submitWork()
    {
        $sth = $this->connect()->prepare("INSERT INTO list(work, todo) VALUES(:work, false)");
        $sth->execute(["work" => $this->todo]);
    }

    public function getWorks()
    {
        $query = $this->connect()->query("SELECT * FROM list");
        $res = $query->fetchAll(PDO::FETCH_ASSOC);
        return $res;
    }
}