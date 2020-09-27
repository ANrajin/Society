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

$resident_id=$_POST["resident_id"];

$sql="select id,name,nid,mobile,email,dob,facebook_id,profession,gender from resident_family_members where resident_id='$resident_id'";

$persons_rs=$db->query($sql);
$data=array();

while(list($id,$name,$nid,$mobile,$email,$dob,$facebook_id,$profession,$gender)=$persons_rs->fetch_row()){	
 $dob=date("Y d M",strtotime($dob));
 $assoc=array(
 "id"=>$id,
 "name"=>$name,
 "nid"=>$nid,
 "mobile"=>$mobile,
 "email"=>$email,
 "dob"=>$dob,
 "facebook_id"=>$facebook_id,
 "profession"=>$profession,
 "gender"=>$gender);
 
 array_push($data,$assoc);
}

header('Content-Type: text/html; charset=utf-8');
header("Content-type: application/json; charset=utf-8");
$data="{\"persons\":".json_encode($data,JSON_UNESCAPED_UNICODE)."}";
echo $data;


exit();

?>