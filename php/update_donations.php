<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'sadaka');

$firstName=$_POST['firstName'];
$firstName=$_POST['lastName'];
$phone=$_POST['phone'];
$amount=$_POST['amount'];
$address=$_POST['address'];
$note=$_POST['note'];
$email=$_POST['email'];
$id=$_POST['id'];



$query = "update donnetions set firstName='$firstName',lastName='$lastName',phone='$phone',address='$address',
    note='$note',email='$email',amount='$amount' where id=$id";

if($firstName!=''){
    $con->query($query);    
    echo json_encode(['status'=> true]);
}else{
    echo json_encode(['status'=> false]);
}
