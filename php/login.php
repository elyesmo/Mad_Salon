<?php

include "connection.php";

session_start();

$email = htmlspecialchars($_POST["email"]);
$password = htmlspecialchars($_POST["password"]);

if(!empty($email) && !empty($password)) {
    if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
        
        $sql = "SELECT * FROM Users WHERE email='$email'";
        $result = mysqli_query($conn, $sql);

        if ($row = mysqli_fetch_assoc($result)) {
            if ($row["motDpasse"] == $password) {
                $_SESSION["id"] = $row["id"];
                $_SESSION["firstname"] = $row["firstname"];
                $_SESSION["lastname"] = $row["lastname"];
                $_SESSION["email"] = $row["email"];
                $_SESSION["motDpasse"] = $row["motDpasse"];
                
                echo "yes\n";
            } else {
                echo "Incorrect password\n";
            }
        } else {
            echo "email doesn't exist\n";
        }
        
    } else {
        echo "Enter a valid mail\n";
    }
} else {
    if (empty($email)) {
        echo "empty email\n";
    }
    if (empty($password)) {
        echo "empty password\n";
    }
}



?>