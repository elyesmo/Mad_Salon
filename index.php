<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="icon" href="./images/logo.png">
    <!-- CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" />
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/styleHeadFoot.css">
    
    <!-- JavaScripts -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles:wght@400;700&display=swap" rel="stylesheet">

    <title>Mad Salon</title>
</head>
<body>
  
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-dark  container">
      <a class="navbar-brand" href="#">
        <img class="lego" src="./images/logo.png" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-house"></i></a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Nos pretations</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Nos produits</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Nos réalisations</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" href="#">Contact</a>
        </li>
        </ul>
        <a  href="./php/compte.php"><button type="button" class="btn btn-outline-light w-5"><i class="fas fa-user"></i> Compte</button></a>
      </div>
    </nav>
  </div>

  <div class="salon-imgs">
      <!-- <img src="./images/salon1.jpg" alt=""> -->
  </div>

  <div class="prestations">
    <div class="image">
      <img src="./images/femme.png" alt="">
    </div>

    <div class="info">
      <p>Peaufiner votre look grâce à <strong>une coupe femme</strong> ajustée à votre personnalité et à votre style qui vous donnera un atout considérable pour vous affirmer avec classe.</p>
      <a href="" class="savoir-plus">&lt&ltEN SAVOIR PLUS&gt&gt</a>
    </div>
  </div>

  <div class="salon">
      <div class="row">
        <div class="col-1">
        </div>

        <div class="col-4 ">
          <div class="image">
            <img src="http://coiffella.fr/wp-content/uploads/2021/04/salon-coifella.jpg" alt="">
          </div>
        </div>

        <div class="col-6 desc">
          <h1>Notre Salon</h1>
          <p>Votre salon de coiffure <strong>Mad Salon</strong> et son équipe de spécialistes diplômés d’état situé à <strong>Paris</strong> vous accueille dans un cadre cadre moderne et convivial propice à la détente et à l’évasion.</p>
          <p>Nos <strong>7 espaces de coiffage</strong>  disposent d’équipements complets et performants qui permettront à nos trois coiffeurs professionnels de réaliser des prouesses sur votre chevelure.</p>
        </div>
      </div>
  </div>

  <div class="horaires">
    <h4>Horaires</h4>
    Lundi & Dimanche : Fermé <br>
    Mardi, Mercredi & Vendredi : 9h-19h <br>
    Jeudi & Samedi : 9h-18h
    <div class="icon">
      <img src="./images/horloge.png" alt="">
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

  <!-- <script src="./js/main.js"></script> -->
</body>
</html>