<?php

session_start();

include "connection.php";

$id = $_SESSION['id'];
$dateHeure = $_POST["rdv"];

$result = mysqli_query($conn, "INSERT INTO RDV (Id, dateHeure) VALUES ('$id', '$dateHeure')");




?>