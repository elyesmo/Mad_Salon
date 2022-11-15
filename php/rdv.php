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
    <link rel="stylesheet" href="../css/styleRDV.css">
    
    <!-- JavaScripts -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap" rel="stylesheet">
    
    <title>Mad Salon - Prendre RDV</title>
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
        <form action="">
        <!-- <input type="datetime-local" name="datetime"> -->
        </form>
        <div class="row">
            <div class="services  col-12 col-sm-12  col-md-12 col-lg-7 col-xl-7">
                <div class="section">
                    <div class="title">Soin</div>
                    <ul class="list">
                        <li>
                            <div class="service-name">
                                Soin profond - Cheveux courts
                            </div>
                            <div class="info">
                                <div class="prix">20€</div>
                                <button class="choisir">Choisir</button>
                            </div>
                        </li>
                        <li>
                            <div class="service-name">
                                Soin profond - Cheveux longs
                            </div>
                            <div class="info">
                                <div class="prix">22€</div>
                                <button class="choisir">Choisir</button>
                            </div>
                        </li>
                        <li>
                            <div class="service-name">
                                Soin Express - Cheveux courts
                            </div>
                            <div class="info">
                                <div class="prix">6€</div>
                                <button class="choisir">Choisir</button>
                            </div>
                        </li>
                        <li>
                            <div class="service-name">
                                Soin Express - Cheveux longs
                            </div>
                            <div class="info">
                                <div class="prix">9€</div>
                                <button class="choisir">Choisir</button>
                            </div>
                        </li>
                        <li>
                            <div class="service-name">
                                Soin oil therapy - cheveux courts
                            </div>
                            <div class="info">
                                <div class="prix">30€</div>
                                <button class="choisir">Choisir</button>
                            </div>
                        </li>
                        <li>
                            <div class="service-name">
                                Soin oil therapy - cheveux longs
                            </div>
                            <div class="info">
                                <div class="prix">34€</div>
                                <button class="choisir">Choisir</button>
                            </div>
                        </li>

                    </ul>
                </div>
                <div class="section">
                    <div class="title">Coupe</div>
                    <ul class="list">
                        <li>
                            <div class="service-name">
                                Shampoing brushing - Cheveux courts
                            </div>
                            <div class="info">
                                <div class="prix">22€</div>
                                <button class="choisir">Choisir</button>
                            </div>
                        </li>
                        <li>
                            <div class="service-name">
                                Shampoing brushing - Cheveux longs
                            </div>
                            <div class="info">
                                <div class="prix">26€</div>
                                <button class="choisir">Choisir</button>
                            </div>
                        </li>
                        <li>
                            <div class="service-name">
                                Shampoing coupe brushing - Cheveux courts
                            </div>
                            <div class="info">
                                <div class="prix">32€</div>
                                <button class="choisir">Choisir</button>
                            </div>
                        </li>
                        <li>
                            <div class="service-name">
                                Shampoing coupe brushing - Cheveux longs
                            </div>
                            <div class="info">
                                <div class="prix">35€</div>
                                <button class="choisir">Choisir</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="section">
                    <div class="title">Couleur</div>
                    <ul class="list">
                        <li>
                            <div class="service-name">
                                Couleur + Shampoing brushing - Cheveux courts
                            </div>
                            <div class="info">
                                <div class="prix">56€</div>
                                <button class="choisir">Choisir</button>
                            </div>
                        </li>
                        <li>
                            <div class="service-name">
                                Couleur + Shampoing brushing - Cheveux longs
                            </div>
                            <div class="info">
                                <div class="prix">60€</div>
                                <button class="choisir">Choisir</button>
                            </div>
                        </li>
                        <li>
                            <div class="service-name">
                                Couleur + Shampoing coupe brushing - Cheveux courts
                            </div>
                            <div class="info">
                                <div class="prix">66€</div>
                                <button class="choisir">Choisir</button>
                            </div>
                        </li>
                        <li>
                            <div class="service-name">
                                Couleur + Shampoing coupe brushing - Cheveux longs
                            </div>
                            <div class="info">
                                <div class="prix">70€</div>
                                <button class="choisir">Choisir</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="section">
                    <div class="title">Couleur</div>
                    <ul class="list">
                        <li>
                            <div class="service-name">
                                X tenso + Shampoing brushing  - Cheveux courts
                            </div>
                            <div class="info">
                                <div class="prix">75€</div>
                                <button class="choisir">Choisir</button>
                            </div>
                        </li>
                        <li>
                            <div class="service-name">
                                X tenso + Shampoing brushing  - Cheveux longs
                            </div>
                            <div class="info">
                                <div class="prix">81€</div>
                                <button class="choisir">Choisir</button>
                            </div>
                        </li>
                        <li>
                            <div class="service-name">
                                X tenso + Shampoing coupe brushing  - Cheveux courts
                            </div>
                            <div class="info">
                                <div class="prix">85€</div>
                                <button class="choisir">Choisir</button>
                            </div>
                        </li>
                        <li>
                            <div class="service-name">
                                X tenso + Shampoing coupe brushing  - Cheveux longs
                            </div>
                            <div class="info">
                                <div class="prix">91€</div>
                                <button class="choisir">Choisir</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="right-col col-12 col-sm-12  col-md-12 col-lg-5 col-xl-5">
                <div class="section pres">
                    <div class="title">Prestations (<span>0</span>)</div>
                    <ul class="list" id="list">
                    </ul>
                </div>

                <div class="section rdvs">
                    <div class="title">Réservations (<span>0</span>)</div>
                    <ul class="list" id="list">
                    </ul>
                </div>

                <div class="calendrier section">
                    <div class="calendar-header">
                        <span class="month-picker" id="month-picker">
                            November
                        </span>
                        <div class="year-picker">
                            <span class="year-change" id="prev-year">
                                <pre><</pre>
                            </span>
                            <span id="year">2022</span>
                            <span class="year-change" id="next-year">
                                <pre>></pre>
                            </span>
                        </div>
                    </div>

                    <div class="calendar-body">
                        <div class="calendar-week-day">
                            <div>Dim</div>
                            <div>Lun</div>
                            <div>Mar</div>
                            <div>Mer</div>
                            <div>Jeu</div>
                            <div>Ven</div>
                            <div>Sam</div>
                        </div>

                        <div class="calendar-days">
                        </div>
                    </div>

                    <div class="month-list"></div>

                    <div class="hour">
                        <select name="hour-pick" id="" class="hour-pick">
                            <option value="0">Choisissez l'heure</option>
                        </select>

                        <div class="button">
                            <button class="reserver">Réserver</button>
                        </div>
                    </div>
                </div>


            </div>          
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

    <script src="../js/rdv.js"></script>
</body>
</html>
