<?php

include "test.php";

$nom = "a";
$prenom = "b";
$email = "e@gmail.com";
$password = "ee";

// $conn = mysqli_connect("localhost", "root", "", "MAD_SALON");

$sql = "INSERT INTO Users(firstname, lastname, email, motDpasse) VALUES('$nom', '$prenom', '$email', '$password')";
$res = mysqli_query($conn, $sql);

if ($res) {
    echo "ref";
} else {
    echo "aa";
}
// $sql = "SELECT email FROM Users";
// $result = mysqli_query($conn, $sql);

// while($row = mysqli_fetch_assoc($result)) {
//     echo $row["email"];
// }

?>