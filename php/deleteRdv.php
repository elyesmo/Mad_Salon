<?php

session_start();

include "connection.php";


$id = $_SESSION['id'];
$date = $_POST['rdv'];

mysqli_query($conn, "DELETE FROM RDV WHERE Id='$id' and dateHeure='$date'");

?>