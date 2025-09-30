<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
header("Content-type: application/json");
$con = new mysqli('localhost', 'root', '', 'hostel_management');

$id=$_GET['id'];
$data=$con->query('select * from category where id='.$id)->fetch_assoc();
echo json_encode($data);