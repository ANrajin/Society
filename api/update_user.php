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
	    $username=$_POST["username"];		
	    $email=$_POST["email"];		
		
		$errors=array();
		if(!preg_match("/^[a-zA-Z .]{3,}$/",$username)){
			$errors["username"]="Invalid Username";
		}		
		
		if(!preg_match("/^[a-zA-Z]+[a-zA-Z0-9]*[.]?[a-zA-Z0-9]+[@][a-zA-Z0-9]*[.][a-z]{2,3}$/",$email)){
			$errors["email"]="Invalid Email";
		}			
		
	     //file_put_contents("delete_data.txt",$id." | ".date("d-m-Y").PHP_EOL,FILE_APPEND);  
      	  
		  if(count($errors)==0){
		   $users=$db->query("update users set username='$username',email='$email' where id='$id'");  
		   $success="1";
		   
		    header('Content-Type: application/json');  
            echo json_encode(array("success"=>$success));
		 
		 }else{
		    header('Content-Type: application/json'); 
		    echo json_encode(array("success"=>$success,"errors"=>$errors));
		
		  }
		  
	     
	  
  }
 
  
?>