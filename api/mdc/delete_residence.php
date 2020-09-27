<?php
require_once("header.php");

$residence_id=$_POST["id"];

$sql="delete from resident_registration where id='$residence_id'";
$db->query($sql);

$sql="delete from resident_family_members where resident_id='$residence_id'";
$db->query($sql);

echo json_encode(array("status"=>"success"));

?>