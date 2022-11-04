const logout = document.querySelector("header button");
let btns = document.querySelectorAll("ul.list li .info button");
let ul = document.querySelector("#list");
let nbServices = document.querySelector(".section .title span");
let btnDel = [];
const lis = [];

logout.onclick = () => {
    let request = new XMLHttpRequest();
    request.open("POST", "../php/logout.php", true);
    request.onload = () => {
        if (request.readyState == 4 && request.status == 200) {
        let response = request.response;
        console.log(response);
        if (response == "ok") {
            window.open("http://localhost/php/compte.php", "_self");
        }
        }
    }
    request.send(logout);
};



ul.addEventListener('DOMSubtreeModified', () => {
    btnDel = document.querySelectorAll(".delete");
    
    btnDel.forEach((btn) => {
        btn.onclick = () => {
            nbServices.textContent = +(nbServices.textContent) - 1;

            btn.parentElement.style.display = "none";

            lis.forEach((li) => {
                if (li.children[0].textContent == btn.parentElement.children[0].textContent) {
                    li.children[1].children[1].removeAttribute("disabled");
                }
            });

        }
    });
}, false);






btns.forEach((btn) => {
    btn.onclick = () => {
        if (!btn.hasAttribute("disabled")) {
            btn.setAttribute("disabled", "");
            let li = btn.parentElement.parentElement;
            lis.push(li);
            

            let elem = document.createElement("li");
            let name = document.createElement("div");
            let del = document.createElement("div");

            name.classList.add("service-name");
            del.classList.add("delete");
            
            name.appendChild(document.createTextNode(li.children[0].textContent));
            del.appendChild(document.createTextNode("x"));

            elem.appendChild(name);
            elem.appendChild(del);

            ul.appendChild(elem);

            nbServices.textContent = +(nbServices.textContent) + 1;


        }
    }
});




