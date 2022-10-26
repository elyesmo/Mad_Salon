<?php

include "connection.php";


$nom = htmlspecialchars($_POST["nom"]);
$prenom = htmlspecialchars($_POST["prenom"]);
$email = htmlspecialchars($_POST["email"]);
$password = htmlspecialchars($_POST["password"]);
$password2 = htmlspecialchars($_POST["password2"]);



if(!empty($nom) && !empty($prenom) && !empty($email) && !empty($password) && !empty($password2)) {
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email\n";
    } else if ($password != $password2) {
        echo "Passwords not identique\n";
    } else {
        $trouv = false;

        $sql = "SELECT email FROM Users";
        $result = mysqli_query($conn, $sql);

        while($row = mysqli_fetch_assoc($result)) {
            if ($email == $row["email"]) {
                echo "email exists\n";
                $trouv = true;
            }
        }

        if (!$trouv) {
            $sql = "INSERT INTO Users(firstname, lastname, email, motDpasse) VALUES('$nom', '$prenom', '$email', '$password')";
            mysqli_query($conn, $sql);
            echo "yes";
        }
    }
} else {
    if(empty($nom)) {
        echo "empty nom\n";
    }
    if(empty($prenom)) {
        echo "empty prenom\n";
    }
    if(empty($email)) {
        echo "empty email\n";
    }
    if(empty($password)) {
        echo "empty password\n";
    }
    if(empty($password2)) {
        echo "empty password2\n";
    }
}

?>