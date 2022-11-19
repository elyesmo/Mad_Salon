const form = document.querySelector("form.modifier");

// Modifier les informations du compte
form.onsubmit = ev => {
    ev.preventDefault();
    
    let request = new XMLHttpRequest();
    request.open("POST", "../php/modifier.php", true);
    request.onload = () => {
        if (request.readyState == 4 && request.status == 200) {
            let response = request.response;

            let nomInput = document.querySelector(".modifier input[name=nom]");
            let prenomInput = document.querySelector(".modifier input[name=prenom]");
            let emailInput = document.querySelector(".modifier input[name=email]");
            let passInput = document.querySelector(".modifier input[name=password]");
            let pass2Input = document.querySelector(".modifier input[name=password2]");

            document.querySelector(".remarque").innerHTML = "";
            
            response = response.split("\n");
            
            if (response.includes("Invalid email")) {
                emailInput.style.borderColor = "red";
                setTimeout(function () {
                    emailInput.style.borderColor = "rgb(229, 229, 229)";
                }, 3000);
            }

            if (response.includes("empty password")) {
                passInput.style.borderColor = "red";
                setTimeout(function () {
                    passInput.style.borderColor = "rgb(229, 229, 229)";
                }, 3000);

                pass2Input.style.borderColor = "red";
                setTimeout(function () {
                    pass2Input.style.borderColor = "rgb(229, 229, 229)";
                }, 3000);
            }

            if (response.includes("nom ok") || response.includes("prenom ok") || response.includes("email ok") || response.includes("password ok")) {
                document.querySelector(".remarque").innerHTML = "Modifications enregistrées avec succés !";
                setTimeout(() => {
                    document.querySelector(".remarque").innerHTML = "";
                }, 3000);
            }

            
            
        }
    }
    let formData = new FormData(form);
    request.send(formData);

};


//-----------------------

// Cacher et montrer les mot de passe
let showPassword2 = document.querySelector(".modifier .input i.pass2");
let passwordInput2 = document.querySelector(".modifier input[name=password]");

showPassword2.onclick = () => {
    if (showPassword2.classList.contains("ishide")) {
        showPassword2.classList.replace("fa-eye-slash", "fa-eye");
        showPassword2.classList.replace("ishide", "nothide");

        passwordInput2.type = "text";
    } else if (showPassword2.classList.contains("nothide")) {
        showPassword2.classList.replace("fa-eye", "fa-eye-slash");
        showPassword2.classList.replace("nothide", "ishide");
    
        passwordInput2.type = "password";
    }
}

let showPassword3 = document.querySelector(".modifier .input i.pass3");
let passwordInput3 = document.querySelector(".modifier input[name=password2]");


showPassword3.onclick = () => {
    if (showPassword3.classList.contains("ishide")) {
        showPassword3.classList.replace("fa-eye-slash", "fa-eye");
        showPassword3.classList.replace("ishide", "nothide");

        passwordInput3.type = "text";
    } else if (showPassword3.classList.contains("nothide")) {
        showPassword3.classList.replace("fa-eye", "fa-eye-slash");
        showPassword3.classList.replace("nothide", "ishide");
    
        passwordInput3.type = "password";
    }
}

//---------------------------

// Supprimer le compte
if (document.querySelector(".delete")) {

    const btnDelete = document.querySelector(".delete");
    
    btnDelete.onclick = () => {
        let request = new XMLHttpRequest();
    
        request.open("POST", "../php/supprimer.php", true);
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        request.send();
    
        request.onreadystatechange = () => {
            if (request.readyState == 4 && request.status == 200) {
                if (request.response == "yes") {
                    setTimeout(() => {
                        window.open("../php/compte.php", "_self");
                    }, 1000);
                }
            }
        }
    };
}


// Boutton de déconnection
const logout = document.querySelector("header .deconnecter");

logout.onclick = () => {
    let request = new XMLHttpRequest();
    request.open("POST", "../php/logout.php", true);
    request.onload = () => {
        if (request.readyState == 4 && request.status == 200) {
        let response = request.response;
        console.log(response);

        if (response == "ok") {
            window.open("../php/compte.php", "_self");
        }

        }
    }
    request.send(logout);
};


// afficher les utilisateurs
if (document.querySelector(".afficher button.active")) {
    const btnAffiche = document.querySelector(".afficher button.active");
    btnAffiche.onclick = () => {
        window.open("../php/viewUsers.php", "_self");
    };
}