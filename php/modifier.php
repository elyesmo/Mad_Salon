<?php

session_start();

include "connection.php";


$nom = htmlspecialchars($_POST["nom"]);
$prenom = htmlspecialchars($_POST["prenom"]);
$email = htmlspecialchars($_POST["email"]);
$password = htmlspecialchars($_POST["password"]);
$password2 = htmlspecialchars($_POST["password2"]);

$id = $_SESSION["id"];


if (in_array($nom, [$_SESSION["firstname"], ""])) {
    echo "not nom\n";
} else {
    mysqli_query($conn, "UPDATE Users  SET firstname= '$nom' WHERE id='$id'");
    $_SESSION["firstname"] = $nom;
    echo "nom ok\n";
}

if (in_array($nom, [$_SESSION["lastname"], ""])) {
    echo "not prenom\n";
} else {
    mysqli_query($conn, "UPDATE Users  SET lastname= '$prenom' WHERE id='$id'");
    $_SESSION["lastname"] = $prenom;
    echo "prenom ok\n";
}

if (in_array($nom, [$_SESSION["email"], ""])) {
    echo "not email\n";
} else {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email\n";
    } else {
        mysqli_query($conn, "UPDATE Users  SET email= '$email' WHERE id='$id'");
        $_SESSION["email"] = $email;
        echo "email ok\n";
    }
}

if ((empty($password) && !empty($password2)) || !empty($password) && empty($password2) || ($password != $password2)) {
    echo "empty password\n";
} else if ((empty($password) && empty($password2))) {
    echo "not password\n";
} else {
    mysqli_query($conn, "UPDATE Users  SET motDpasse = '$password' WHERE id='$id'");
    $_SESSION["motDpasse"] = $password;
    echo "email ok\n";
}


?>