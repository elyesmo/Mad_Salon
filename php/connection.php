<?php


$conn = mysqli_connect("localhost", "root", "");

mysqli_query($conn, "CREATE DATABASE IF NOT EXISTS MAD_SALON");

$conn = mysqli_connect("localhost", "root", "", "MAD_SALON");

mysqli_query($conn, "CREATE TABLE IF NOT EXISTS USERS(
    id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    email VARCHAR(255),
    motDpasse VARCHAR(255),
    sonRole int
)");

$result = mysqli_query($conn, "SELECT * from Users WHERE email='admin@mad-salon.fr'");
if (!mysqli_fetch_assoc($result)) {
    mysqli_query($conn, "INSERT INTO Users(firstname,lastname,email,motDpasse, sonRole) VALUE ('admin', 'admin', 'admin@mad-salon.fr', 'admin', 1)");
}

mysqli_query($conn, "CREATE TABLE IF NOT EXISTS RDV(
    Id int,
    dateHeure VARCHAR(255),
    FOREIGN KEY(Id) REFERENCES Users(id)
)");

?>
