<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="shortcut icon" href="#" />
    <!-- CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.2.0/css/all.css" />
    <link rel="stylesheet" href="../css/styleModifier.css">
    
    <!-- JavaScripts -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap" rel="stylesheet">
    
    <title>Mad Salon - Modifier Compte</title>
</head>
<body>
    <?php
        session_start();
        if (!$_SESSION["id"]) {
            header('location: ./compte.php');      
        }
    ?>
    <header>
        <div class="log">
            <h2>Mad Salon</h2>
        </div>

        <div class="buttons">
            <div class="button">
                <button class="compte">Modifier compte</button>
            </div>
            <div class="button">
                <button class="deconnecter">Se déconnecter</button>
            </div>
        </div>
    </header>
    <div class="container h">
        <div class="main-log">
            <form class="modifier" method="POST">
                <!-- <?php session_start(); ?> -->
                <div class="remarque"></div>
                <div class="text">Modifier vos informations</div>
                <div class="input">
                    <i class="fa-solid fa-user log"></i>
                    <input type="text" name="nom" placeholder="nom" value=<?php echo $_SESSION["firstname"] ?>>
                </div>
                <div class="input">
                    <i class="fa-solid fa-user log"></i>
                    <input type="text" name="prenom" placeholder="Prénom" value=<?php echo $_SESSION["lastname"] ?>>
                </div>
                <div class="input">
                    <i class="fa-regular fa-envelope log"></i>
                    <input type="text" name="email" placeholder="Email" value=<?php echo $_SESSION["email"] ?>>
                </div>
                <div class="input">
                    <i class="fa-regular fa-eye-slash log pass2 ishide"></i>
                    <input type="password" name="password" placeholder="Mot de passe" > 
                </div>
                <div class="input">
                    <i class="fa-regular fa-eye-slash log pass3 ishide"></i>
                    <input type="password" name="password2" placeholder="Confirmer mot de passe"> 
                </div>
                <button class="create active">Modifier</button>
            </form>

            <?php 
                include "connection.php";
                // session_start();

                $id = $_SESSION["id"];

                $sql = "SELECT * FROM Users WHERE id='$id'";
                $result = mysqli_query($conn, $sql);
                $row = mysqli_fetch_assoc($result);

                if ($row["sonRole"] == "1") {
                    echo '<div class="afficher"><button class="active">Afficher les utilisateurs</button></div>';
                } else {
                    echo '<div class="supprimer"><button class="delete">Supprimer le compte</button></div>';
                }
            ?>
        </div>
    </div>



    <footer class=" text-center text-white">
        <div class="container p-4 pb-0">
        <section>
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-facebook-f"></i
            ></a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-twitter"></i
            ></a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-google"></i
            ></a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-instagram"></i
            ></a>
        </section>
        </div>

        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2022 Copyright:
            <a class="text-white" href="https://mdbootstrap.com/">MadSalon.com</a>
        </div>
    </footer>

    <script src="../js/modifier.js"></script>
</body>
</html>
