<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'hostel_management');

$name=$_POST['name'];
$note=$_POST['note'];

$id=$_POST['id'];



$query = "update category set name='$name',
    note='$note'  where id=$id";

if($name!=''){
    $con->query($query);    
    echo json_encode(['status'=> true]);
}else{
    echo json_encode(['status'=> false]);
}
