<?php
header('Access-Control-Allow-Origin: *');
require_once("db_config.php");
//require_once("../sys_config.php");
//require_once("../include/common_lib.php");


$search="";


if(isset($_GET["search"])){
 $search=trim($_GET["search"]);
}


//file_put_contents("sql.txt",$_GET["male"].",".$_GET["female"]);


$criteria=" and (r.road like '%$search%' or r.house like '%$search%' or r.flat like '%$search%') ";
//$criteria.=$sex;


$top=0;
$par_page=100;
$limit="$top,$par_page";

$sql="select r.id resident_id,r.road,r.house,r.flat,r.status,r.created_at,m.id person_id,m.name,m.nid,m.mobile from resident_registration r left join resident_family_members m on r.id=m.resident_id  where r.inactive=0 and m.is_contact_person=1 $criteria order by r.id desc limit $limit";
//file_put_contents("sql.txt",$sql);
$users_rs=$db->query($sql);
$data=array();

while(list($id,$road,$house,$flat,$status,$added_on,$person_id,$name,$nid,$mobile)=$users_rs->fetch_row()){	
 $added_on=date("d M",strtotime($added_on));
 array_push($data,array("id"=>$id,"road"=>$road,"house"=>$house,"flat"=>$flat,"status"=>$status,"added_on"=>$added_on,"person_id"=>$person_id,"name"=>$name,"nid"=>$nid,"mobile"=>$mobile));//push subject
}
header('Content-Type: text/html; charset=utf-8');
header("Content-type: application/json; charset=utf-8");
$data="{\"residents\":".json_encode($data,JSON_UNESCAPED_UNICODE)."}";
echo $data;
exit();

?>