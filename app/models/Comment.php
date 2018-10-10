<?php

class Comment
{
  public $id;
  public $comment;

  public function __construct($data) {

    $this->id = isset($data['id']) ? intval($data['id']) : null;
    $this->comment = $data['comment'];

  }

  public function create() {

    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'INSERT Comments(comment) VALUES (?)';
    $statement = $db->prepare($sql);
    $success = $statement->execute([
        $this->comment
    ]);
    $this->id = $db->lastInsertId();
    if (!$success) {
      
      die ('Bad SQL on insert');
    }

  }

  public static function fetchAll() {
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'SELECT * FROM Comments';
    $statement = $db->prepare($sql);
    $success = $statement->execute();
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $theComment =  new Comment($row);
      array_push($arr, $theComment);
    }

    return $arr;
  }

}
