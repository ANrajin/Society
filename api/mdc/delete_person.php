<?php
require_once("header.php");

$member_id=$_POST["id"];


$sql="delete from resident_family_members where id='$member_id'";
file_put_contents("sql.txt",$sql);
$db->query($sql);

if(file_exists("images/$member_id.jpg")){
	  unlink("images/$member_id.jpg");
	}
	if(file_exists("images/$member_id.png")){
	  unlink("images/$member_id.png");
	}
	if(file_exists("images/$member_id.gif")){
	  unlink("images/$member_id.gif");
	}
	if(file_exists("images/$member_id.webp")){
	  unlink("images/$member_id.webp");
	}

echo json_encode(array("status"=>"success"));

?>