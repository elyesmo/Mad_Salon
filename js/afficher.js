const logout = document.querySelector("header .deconnecter");
const modifier = document.querySelector("header .compte");
const table = document.querySelector("table.main");


modifier.onclick = () => {
    window.open("../php/modifierCompte.php", "_self");
};

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

//-------------------------


let btns = document.querySelectorAll(".delete-user");

btns.forEach((btn) => {
    btn.onclick = () => {
        let email = btn.parentElement.parentElement.children[2].textContent;
        
        let request = new XMLHttpRequest();

        request.open("POST", "../php/supprimer2.php", true);
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        request.send(`mail=${email}`);

        request.onreadystatechange = () => {
            if (request.readyState == 4 && request.status == 200) {
                location.reload();
            }
        }
    }
});
