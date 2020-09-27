<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header('Content-type:application/x-www-form-urlencoded');
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");

$method = $_SERVER['REQUEST_METHOD'];
  
$upload_dir = '';
$server_url = '/';

    
    $file_name = $_FILES["image"]["name"];
	$file_new_name=$_POST["name"];
    $file_tmp_name = $_FILES["image"]["tmp_name"];
	$file_ext = strtolower(end(explode('.',$_FILES['image']['name'])));
	$error = $_FILES["image"]["error"];
	
	file_put_contents("file.txt",$file_new_name);

	  move_uploaded_file($file_tmp_name,$upload_dir.$file_new_name);
	  echo json_encode(["status"=>"success"]);
?>