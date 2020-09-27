<?php
include("db_const.php");
$db=new mysqli(SERVER,USER,PWD);

if($db->connect_errno) {
  echo "Failed to connect to MySQL:".$db->connect_error;
  exit();
}else{
   $db->select_db(DB);
   $db->set_charset("utf8");
}

?>