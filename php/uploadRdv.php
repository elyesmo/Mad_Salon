<?php

session_start();

include "connection.php";


$id = $_SESSION['id'];
$dates = "";

$result = mysqli_query($conn, "SELECT dateHeure From RDV WHERE Id='$id'");

while ($row = mysqli_fetch_assoc($result)) {
    $dates = $dates . "." . $row['dateHeure'];
}

echo $dates;



?>