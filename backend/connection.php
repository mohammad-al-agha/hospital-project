<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
$host='localhost';
$db_user='root';
$db_password=null;
$db_name='hospitaldb';

$mysqli=new mysqli($host,$db_user,$db_password,$db_name);

?>