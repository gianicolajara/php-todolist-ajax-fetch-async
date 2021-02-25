<?php

class DB
{
    private $host;
    private $user;
    private $pass;
    private $charset;
    private $dbname;

    public function __construct()
    {
        $this->host = 'localhost';
        $this->user = 'root';
        $this->pass = '';
        $this->charset = 'utf8';
        $this->dbname = 'todolist';
    }

    public function connect()
    {
        try {
            $dsn = "mysql:host=" . $this->host . ";dbname=" . $this->dbname;
            $config = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_EMULATE_PREPARES => false];

            return new PDO($dsn, $this->user, $this->pass, $config);

        } catch (PDOException $e) {
            echo 'erro db: ' . $e->getMessage();
        }
    }

}