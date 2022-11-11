<?php

include "connection.php";

$result = $conn->query("SELECT dateHeure from RDV");

$trouv = false;

while($row = $result->fetch_assoc()) {
    if ($row['dateHeure'] == $_POST['rdv']) {
        echo "yes";
        $trouv = true;
        break;
    }
}

if (!$trouv) {
    echo "no";
}


?>