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