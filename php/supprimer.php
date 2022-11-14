<?php

session_start();

include "connection.php";

$id = $_SESSION["id"];

mysqli_query($conn, "DELETE FROM RDV WHERE Id='$id'");


mysqli_query($conn, "DELETE FROM Users WHERE id='$id'");


session_destroy();

echo "yes";

?>