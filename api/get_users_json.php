<?php
  require_once("db_config.php");  
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
  header('Content-type:application/x-www-form-urlencoded');
  header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
  
   $user_arr=array();
   $users=$db->query("select id,username,email from users");
   while(list($id,$username,$email)=$users->fetch_row()){
	   array_push($user_arr,array("id"=>$id,"username"=>$username,"email"=>$email));
   }
  
  header('Content-Type: application/json');  
  echo json_encode($user_arr);
  
?>