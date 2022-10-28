<?php

include "connection.php";



$email = htmlspecialchars($_POST["email"]);
$password = htmlspecialchars($_POST["password"]);

if(!empty($email) && !empty($password)) {
    if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
        
        $sql = "SELECT email, motDpasse FROM Users WHERE email='$email'";
        $result = mysqli_query($conn, $sql);

        if ($row = mysqli_fetch_assoc($result)) {
            if ($row["motDpasse"] == $password) {
                echo "yes\n";
            } else {
                echo "Incorrect password\n";
            }
        } else {
            echo "email doesn't exist\n";
        }

        /*if (mysqli_num_rows($result) > 0) {
        // output data of each row
        while($row = mysqli_fetch_assoc($result)) {
            if ($email == $row["email"] && $password == $row["motDpasse"]) {
                echo "$email : " . $row["email"];
                echo "$password : " . $row["motDpasse"];
            }
        }
        } else {
        echo "0 results";
        }*/
        
        
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