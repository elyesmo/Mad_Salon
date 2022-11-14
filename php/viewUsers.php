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
        <div class="head">
            <div>Nom</div>
            <div>Prénom</div>
            <div>Email</div>
        </div>

        <div class="body">
            <?php 
                include "connection.php";

                $sql = "SELECT * FROM Users";
                $result = mysqli_query($conn, $sql);
                
                while ($row = mysqli_fetch_assoc($result)) {
            ?>
                    <div class="user">
                        <div><?php echo $row["firstname"] ?></div>
                        <div><?php echo $row["lastname"] ?></div>
                        <div><?php echo $row["email"] ?></div>
                    </div>
            <?php } ?>
            

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

</body>
</html>
