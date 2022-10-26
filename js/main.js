const formConnect = document.querySelector(".login");
const formCreate = document.querySelector(".signin");

const btnConnect = document.querySelector("button.connect");
const btnCreate = document.querySelector("button.create");

let btnConnectActive = true;
let btnCreateActive = false;

formConnect.onsubmit = e => {
    e.preventDefault();

    if (btnConnectActive) {
        let request = new XMLHttpRequest();
        request.open("POST", "../php/login.php", true);
        request.onload = () => {
            if (request.readyState == 4 && request.status == 200) {
                let response = request.response;
                console.log(response);
            }
        }
        let formData = new FormData(formConnect);
        request.send(formData);
    }
};

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
    
                console.log(response);
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
                    if (res == "yes") {
                        window.open("http://localhost", "_self");
                    }
                });
            }
        }
        let formData = new FormData(formCreate);
        request.send(formData);
    }

};



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

        document.querySelector("a.oublie").style.display = "block";

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



        document.querySelector("a.oublie").style.display = "none";

        inputs = document.querySelectorAll(".login .input");
        
        inputs.forEach(inp => {
            inp.style.display = "none";
        });

        btnConnect.classList.replace("active", "not-active");
        btnCreate.classList.replace("not-active", "active");

    }
};
