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
    <link rel="stylesheet" href="../css/styleUsers.css">
    
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
    <div class="container main-main">
        <table class="main">
            <thead class="head">
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
    
            <tbody class="body">
                <?php 
                    include "connection.php";
    
                    $sql = "SELECT * FROM Users WHERE sonRole IS NULL";
                    $result = mysqli_query($conn, $sql);
                    
                    while ($row = mysqli_fetch_assoc($result)) {
                ?>
                        <tr class="user">
                            <td><?php echo $row["firstname"] ?></td>
                            <td><?php echo $row["lastname"] ?></td>
                            <td><?php echo $row["email"] ?></td>
                            <td class="btn">
                                <button class="delete-user">Supprimer</button>
                            </td>
                    </tr>
                <?php } ?>
                
    
                    </tbody>
        </table>
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
    
    <script src="../js/afficher.js"></script>
</body>
</html>
