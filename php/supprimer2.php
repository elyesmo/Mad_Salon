<?php

include "connection.php";

$email = $_POST["mail"];

$user = mysqli_query($conn, "SELECT * FROM Users WHERE email='$email'");
$user = mysqli_fetch_assoc($user);

$id = $user["id"];

mysqli_query($conn, "DELETE FROM RDV WHERE Id='$id'");


mysqli_query($conn, "DELETE FROM Users WHERE id='$id'");

?>