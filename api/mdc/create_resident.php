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




//Address
$road=$_POST["road"];
$house=$_POST["house"];
$flat=$_POST["flat"];
$status=$_POST["status"];

//Personal
$name=$_POST["name"];
$dob=$_POST["dob"];
$gender=$_POST["gender"];
$blood_group=$_POST["blood_group"];
$mobile=$_POST["mobile"];
$nid=$_POST["nid"];
$email=$_POST["email"];

$road=$_POST["road"];
$house=$_POST["house"];
$flat=$_POST["flat"];

//$facebook_id=$_POST["facebook_id"];
$created_at=date("Y-m-y H:i:s");
$created_by=1;
$status=$_POST["status"];


$sql="insert into resident_registration(name,mobile,email,nid,blood_group,dob,gender,road,house,flat,status,created_at,created_by)";
$sql.="values('$name','$mobile','$email','$nid','$blood_group','$dob','$gender','$road','$house','$flat','$status','$created_at','$created_by')";
$db->query($sql);
$resident_id=$db->insert_id;

file_put_contents("sql.txt",$sql);

$relation_id=1;
$profession='na';
$facebook_id='nill';

$sql="insert into resident_family_members(resident_id,relation_id,name,nid,mobile,email,gender,dob,blood_group,profession,facebook_id,is_contact_person)";
$sql.="values('$resident_id','$relation_id','$name','$nid','$mobile','$email','$gender','$dob','$blood_group','$profession','$facebook_id',1)";
$db->query($sql);
$memeber_id=$db->insert_id;


$error=$db->error;

if(isset($_FILES["image"]["name"])){
	$upload_dir="images/";
	$file_name = $_FILES["image"]["name"];
	$file_tmp_name = $_FILES["image"]["tmp_name"];
	//$file_ext = strtolower(end(explode('.',$file_name)));
	$error = $_FILES["image"]["error"];
	
	move_uploaded_file($file_tmp_name,$upload_dir.$memeber_id.".jpg");
	//file_put_contents("fields.txt",$file_name.$file_tmp_name);
}

echo json_encode(array("resident_id"=>$resident_id,"error"=>$error));
?>