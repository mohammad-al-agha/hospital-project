<?php

header('Access-Control-Allow-Origin: *');
include('connection.php');

$query=$mysqli->prepare('select * from rooms');
$query->execute();

$result=$query->get_result();

while($object=$result->fetch_assoc()){
    $data[]=$object;
}

$response['rooms']=$data;

echo json_encode($response);


?>