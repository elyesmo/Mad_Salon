<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="shortcut icon" href="#" />
    <link rel="icon" href="../images/logo.png">

    <!-- CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.2.0/css/all.css" />
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/styleHeadFoot.css">
    <link rel="stylesheet" href="../css/styleLog.css">
    <!-- JavaScripts -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles:wght@400;700&display=swap" rel="stylesheet">

    <title>Mad Salon - Login</title>
</head>
<body>
<div class="header">
    <nav class="navbar navbar-expand-lg navbar-dark  container">
      <a class="navbar-brand" href="../index.php">
        <img class="lego" src="../images/logo.png" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./salon.php">Notre salon</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./realisations.php">Nos réalisations</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./est.php">Esthétique</a>
        </li>

        </ul>
        <a  href="./compte.php"><button type="button" class="btn btn-outline-light w-5"><i class="fas fa-user"></i> Compte</button></a>
      </div>
    </nav>
  </div>

  <div class="main-log">
    <form class="login" method="POST">
      <div class="remarque"></div>
      <div class="text">
      Déjà inscrit ?
      </div>
      <div class="input">
        <i class="fa-regular fa-envelope log"></i></i>
        <input class="mail" name="email" type="text" placeholder="Email">
      </div>
      <div class="input">
        <i class="fa-regular fa-eye-slash log pass ishide"></i>
        <!-- <i class="fa-regular fa-eye log pass ishide"></i> -->
        <input class="password" name="password" type="password" placeholder="Mot de passe"> 
      </div>
      <button class="connect active">Se connecter</button>
      
    </form>

    <div class="ou">
      ou
    </div>

    <form class="signin" method="POST">
    <div class="remarque"></div>
      <div class="text">Créer un compte ?</div>
      <div class="input">
        <i class="fa-solid fa-user log"></i>
        <input type="text" name="nom" placeholder="Nom">
      </div>
      <div class="input">
        <i class="fa-solid fa-user log"></i>
        <input type="text" name="prenom" placeholder="Prénom">
      </div>
      <div class="input">
        <i class="fa-regular fa-envelope log"></i>
        <input type="text" name="email" placeholder="Email">
      </div>
      <div class="input">
        <i class="fa-regular fa-eye-slash log pass2 ishide"></i>
        <input type="password" name="password" placeholder="Mot de passe"> 
      </div>
      <div class="input">
        <i class="fa-regular fa-eye-slash log pass3 ishide"></i>
        <input type="password" name="password2" placeholder="Confirmer mot de passe"> 
      </div>
      <button class="create not-active">S'inscrire</button>
    </form>
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

    <script src="../js/compte.js"></script>
  </footer>
</body>
</html>