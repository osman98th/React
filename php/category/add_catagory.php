<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$con = new mysqli('localhost', 'root', '', 'hostel_management');

// Check connection
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

$name = $_POST['name'];
$note = $_POST['note'];

$query = "INSERT INTO category (name,note)
          VALUES ('$name', '$note')";

if ($con->query($query) === TRUE) {
    echo json_encode(['status' => true]);
} else {
    echo json_encode(['status' => false, 'error' => $con->error]);
}

$con->close();
?>
