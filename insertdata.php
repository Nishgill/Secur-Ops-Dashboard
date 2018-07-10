<?php
$host = "localhost";
$db_user = "root";
$db_password = "";
$database = "bosch";

// Create connection
$link = new mysqli($host, $username, $password, $database);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$Query = "INSERT INTO `bosch.maria`(`id`, `uid`, `timestamp`, `X`, `Y`) VALUES (9113501,Pravev,600,800);

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>