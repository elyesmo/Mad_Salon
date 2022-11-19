const formConnect = document.querySelector(".login");
const formCreate = document.querySelector(".signin");

const btnConnect = document.querySelector("button.connect");
const btnCreate = document.querySelector("button.create");

let btnConnectActive = true;
let btnCreateActive = false;

// Connecter à son compte
formConnect.onsubmit = e => {
    e.preventDefault();

    if (btnConnectActive) {
        let request = new XMLHttpRequest();
        request.open("POST", "../php/login.php", true);
        request.onload = () => {
            if (request.readyState == 4 && request.status == 200) {
                let response = request.response;
                console.log(response);

                let emailInput = document.querySelector(".login input[name=email]");
                let passwordInput = document.querySelector(".login input[name=password]");

                response.split("\n").forEach(res => {
                    if (res == "empty email") {
                        emailInput.style.borderColor = "red";
                        setTimeout(function () {
                            emailInput.style.borderColor = "rgb(229, 229, 229)";
                        }, 3000);
                    }
                    if (res == "empty password") {
                        passwordInput.style.borderColor = "red";
                        setTimeout(function () {
                            passwordInput.style.borderColor = "rgb(229, 229, 229)";
                        }, 3000);
                    }
                    if (res == "Enter a valid mail") {
                        emailInput.style.borderColor = "red";
                        setTimeout(function () {
                            emailInput.style.borderColor = "rgb(229, 229, 229)";
                        }, 3000);
                    }
                    if (res == "email doesn't exist") {
                        let text = document.querySelector(".login .remarque");
                        text.innerHTML = "Adresse email n'existe pas!"

                        setTimeout(function () {
                            text.innerHTML = "";
                        }, 3000);

                        emailInput.style.borderColor = "red";
                        setTimeout(function () {
                            emailInput.style.borderColor = "rgb(229, 229, 229)";
                        }, 3000);
                    }
                    if (res == "Incorrect password") {
                        let text = document.querySelector(".login .remarque");
                        text.innerHTML = "Mot de passe incorrect!"
                        passwordInput.value = "";

                        setTimeout(function () {
                            text.innerHTML = "";
                        }, 3000);
                    }
                    if (res == "yes") {
                        window.open("../php/rdv.php", "_self");
                    }
                });
            }
        }
        let formData = new FormData(formConnect);
        request.send(formData);
    }
};


// Creer un compte
formCreate.onsubmit = ev => {
    ev.preventDefault();
    
    if (btnCreateActive) {
        let request = new XMLHttpRequest();
        request.open("POST", "../php/signin.php", true);
        request.onload = () => {
            if (request.readyState == 4 && request.status == 200) {
                let response = request.response;

                let nomInput = document.querySelector(".signin input[name=nom]");
                let prenomInput = document.querySelector(".signin input[name=prenom]");
                let emailInput = document.querySelector(".signin input[name=email]");
                let passInput = document.querySelector(".signin input[name=password]");
                let pass2Input = document.querySelector(".signin input[name=password2]");
                
                response.split("\n").forEach(res => {
                    if (res == "empty nom") {
                        nomInput.style.borderColor = "red";
                        setTimeout(function () {
                            nomInput.style.borderColor = "rgb(229, 229, 229)";
                        }, 3000);
                    }
                    if (res == "empty prenom") {
                        prenomInput.style.borderColor = "red";
                        setTimeout(function () {
                            prenomInput.style.borderColor = "rgb(229, 229, 229)";
                        }, 3000);
                    }
                    if (res == "empty email") {
                        emailInput.style.borderColor = "red";
                        setTimeout(function () {
                            emailInput.style.borderColor = "rgb(229, 229, 229)";
                        }, 3000);
                    }
                    if (res == "empty password") {
                        passInput.style.borderColor = "red";
                        setTimeout(function () {
                            passInput.style.borderColor = "rgb(229, 229, 229)";
                        }, 3000);
                    }
                    if (res == "empty password2") {
                        pass2Input.style.borderColor = "red";
                        setTimeout(function () {
                            pass2Input.style.borderColor = "rgb(229, 229, 229)";
                        }, 3000);
                    }
                    if (res == "Invalid email") {
                        emailInput.style.borderColor = "red";
                        setTimeout(function () {
                            emailInput.style.borderColor = "rgb(229, 229, 229)";
                        }, 3000);
                    }
                    if (res == "Passwords not identique") {
                        passInput.style.borderColor = "red";
                        pass2Input.style.borderColor = "red";
                        setTimeout(function () {
                            passInput.style.borderColor = "rgb(229, 229, 229)";
                            pass2Input.style.borderColor = "rgb(229, 229, 229)";
                        }, 3000);
                    }
                    if (res == "email exists") {
                        let text = document.querySelector(".signin .remarque");
                        text.innerHTML = "Adresse email existe déja!"

                        setTimeout(function () {
                            text.innerHTML = "";
                        }, 3000);

                        emailInput.style.borderColor = "red";
                        setTimeout(function () {
                            emailInput.style.borderColor = "rgb(229, 229, 229)";
                        }, 3000);
                    }
                    if (res == "yes") {
                        setTimeout(function () {
                            window.open("../php/compteCreated.php", "_self");
                        }, 1000);
                    }
                });
            }
        }
        let formData = new FormData(formCreate);
        request.send(formData);
    }

};


// Switch les formulaire
btnConnect.onclick = function () {

    if (btnConnect.classList.contains("not-active")) {

        setTimeout(() => {
            btnConnectActive = true;
            btnCreateActive = false;
        },100);

        document.querySelector(".main-log").style.height = "calc(100vh - 97px)";

        let inputs = document.querySelectorAll(".login .input");

        inputs.forEach(inp => {
            inp.style.display = "block";
        });


        inputs = document.querySelectorAll(".signin .input");

        inputs.forEach(inp => {
            inp.style.display = "none";
        });

        btnCreate.classList.replace("active", "not-active");
        btnConnect.classList.replace("not-active", "active");

    }
};

btnCreate.onclick = function () {

    if (btnCreate.classList.contains("not-active")) {

        setTimeout(() => {
            btnCreateActive = true;
            btnConnectActive = false;
        },100);

        document.querySelector(".main-log").style.height = "105vh";

        let inputs = document.querySelectorAll(".signin .input");

        inputs.forEach(inp => {
            inp.style.display = "block";
        });




        inputs = document.querySelectorAll(".login .input");
        
        inputs.forEach(inp => {
            inp.style.display = "none";
        });

        btnConnect.classList.replace("active", "not-active");
        btnCreate.classList.replace("not-active", "active");

    }
};

//----------------------------------


// Monter et cacher le mot de passe
let showPassword2 = document.querySelector(".signin .input i.pass2");
let passwordInput2 = document.querySelector(".signin input[name=password]");

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

let showPassword3 = document.querySelector(".signin .input i.pass3");
let passwordInput3 = document.querySelector(".signin input[name=password2]");

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
