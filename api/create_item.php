<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header('Content-type:application/x-www-form-urlencoded');
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");

require_once("db_config.php");

$method = $_SERVER['REQUEST_METHOD'];
  
if($method==='POST' && empty($_POST)) {    
 $rest_json = file_get_contents("php://input");
 $_POST = json_decode($rest_json, true);
}

  
	$upload_dir = '';
	$server_url = '/';
	date_default_timezone_set("Asia/Dhaka");
	$created_at=date("Y-m-d H:i:s");

    $item_name=$_POST["name"];
	$sku=$_POST["sku"];
	$photo="";
	if(isset($_FILES["image"]["name"])){
		$file_name = $_FILES["image"]["name"];	
		$file_tmp_name = $_FILES["image"]["tmp_name"];
		$file_ext = strtolower(end(explode('.',$_FILES['image']['name'])));
		$error = $_FILES["image"]["error"];
	    $photo=$file_name;
	}
	
	
	$sql="insert into items(name,sku,photo,created_at,updated_at)values('$item_name','$sku','$photo','$created_at','$created_at')";
	$db->query($sql);
	
	file_put_contents("sql.txt",$sql);
   
   /*
	  if(move_uploaded_file($file_tmp_name,$upload_dir.$file_name)){	  
	     echo json_encode(["status"=>"success"]);
	  }else{
		 echo json_encode(["status"=>"fail"]);
	  }
	  
	  */
	  
	  
?>