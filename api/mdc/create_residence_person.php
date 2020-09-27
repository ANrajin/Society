<?php
require_once("header.php");

//Personal

$resident_id=$_POST["resident_id"];

$name=$_POST["name"];
$dob=$_POST["dob"];
$gender=$_POST["gender"];
$blood_group=$_POST["blood_group"];
$mobile=$_POST["mobile"];
$nid=$_POST["nid"];
$email=$_POST["email"];
$profession=$_POST["profession"];


$facebook_id=$_POST["facebook_id"];
$created_at=date("Y-m-d H:i:s");
$created_by=1;
$relation_id=$_POST["relation_id"];


$sql="insert into resident_family_members(resident_id,relation_id,name,nid,mobile,email,gender,dob,blood_group,profession,facebook_id)";
$sql.="values('$resident_id','$relation_id','$name','$nid','$mobile','$email','$gender','$dob','$blood_group','$profession','$facebook_id')";
$db->query($sql);
$memeber_id=$db->insert_id;


$error=$db->error;

file_put_contents("sql.txt",$sql);

if(isset($_FILES["image"]["name"])){
	$upload_dir="images/";
	$file_name = $_FILES["image"]["name"];
	$file_tmp_name = $_FILES["image"]["tmp_name"];
	//$file_ext = strtolower(end(explode('.',$file_name)));
	$error = $_FILES["image"]["error"];
	
	move_uploaded_file($file_tmp_name,$upload_dir.$memeber_id.".jpg");
	file_put_contents("fields.txt",$file_name.$file_tmp_name);
}

echo json_encode(array("resident_id"=>$resident_id,"error"=>$error));
?>