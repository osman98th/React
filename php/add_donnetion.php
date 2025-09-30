<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$con = new mysqli('localhost', 'root', '', 'sadaka');

// Check connection
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

$amount = $_POST['amount'];
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$note = $_POST['note'];

$query = "INSERT INTO donnetions (amount, firstName, lastName, email, phone, address, note)
          VALUES ('$amount', '$firstName', '$lastName', '$email', '$phone', '$address', '$note')";

if ($con->query($query) === TRUE) {
    echo json_encode(['status' => true]);
} else {
    echo json_encode(['status' => false, 'error' => $con->error]);
}

$con->close();
?>
