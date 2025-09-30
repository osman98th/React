<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'sadaka');

$data=$con->query("SELECT * FROM `donnetions` ORDER by id DESC LIMIT 4 ")->fetch_all(MYSQLI_ASSOC);
header('Content-Type: Application/json');
echo json_encode($data);