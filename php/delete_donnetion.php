<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
header("Content-type: application/json");
$con = new mysqli('localhost', 'root', '', 'sadaka');

$id=$_GET['id'];

$data=$con->query('delete from donnetions where id='.$id);

echo json_encode(['status'=>true]);