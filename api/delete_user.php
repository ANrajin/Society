<?php
  require_once("db_config.php");  
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
  header('Content-type:application/x-www-form-urlencoded');
  header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
  
  $method = $_SERVER['REQUEST_METHOD'];
  
  if($method==='POST' && empty($_POST)) {
   $rest_json = file_get_contents("php://input");
   $_POST = json_decode($rest_json, true);
  }
  
  $success=0;
  if(isset($_POST["id"])){
	    $id=$_POST["id"];	 
	  //file_put_contents("delete_data.txt",$id." | ".date("d-m-Y").PHP_EOL,FILE_APPEND);  
      	  
		 $users=$db->query("delete from users where id='$id'");  
		  
	     $success="1";
	  
  }
  header('Content-Type: application/json');  
  echo json_encode(array("success"=>$success));
  
?>