<?php

include "connection.php";



$email = htmlspecialchars($_POST["email"]);
$password = htmlspecialchars($_POST["password"]);

if(!empty($email) && !empty($password)) {
    if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
        
        $sql = "SELECT email, motDpasse FROM Users";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
        // output data of each row
        while($row = mysqli_fetch_assoc($result)) {
            if ($email == $row["email"] && $password == $row["motDpasse"]) {
                echo "$email : " . $row["email"];
                echo "$password : " . $row["motDpasse"];
            }
        }
        } else {
        echo "0 results";
        }
        
        
    } else {
        echo "Enter a valid mail";
    }
} else {
    echo "email and password required";
}



?>