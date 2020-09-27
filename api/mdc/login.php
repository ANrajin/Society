<?php
require_once("header.php");
$result=$db->query("select id,username,role_id from user_master where password='$password' and ");
?>