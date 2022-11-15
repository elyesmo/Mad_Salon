const logout = document.querySelector("header .deconnecter");
const modifier = document.querySelector("header .compte");
let btns = document.querySelectorAll("ul.list li .info button");
let ul = document.querySelector("#list");
let nbServices = document.querySelector(".section .title span");
let btnDel = [];
const lis = [];

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



ul.addEventListener('DOMSubtreeModified', () => {
    btnDel = document.querySelectorAll(".pres .delete");
    
    btnDel.forEach((btn) => {
        btn.onclick = () => {
            nbServices.textContent = +(nbServices.textContent) - 1;

            
            lis.forEach((li) => {
                if (li.children[0].textContent == btn.parentElement.children[0].textContent) {
                    li.children[1].children[1].removeAttribute("disabled");
                }
            });
            
            btn.parentElement.style.display = "none";
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


// Calendar
isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !==0) || (year % 100 === 0 && year % 400 ===0);
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
};

let calendar = document.querySelector(".calendrier");

const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];


let monthPicker = document.querySelector("#month-picker");

monthPicker.onclick = () => {
    monthList.classList.add("show");
};

generateCalendar = (month, year) => {
    let calendarDays = document.querySelector(".calendar-days");
    calendarDays.innerHTML = "";
    let calendarHeaderYear = document.querySelector("#year");

    let daysOfMonth = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let currDate = new Date();

    monthPicker.innerHTML = monthNames[month];
    calendarHeaderYear.innerHTML = year;

    let firstDay = new Date(month, year, 1);

    for (let i = 0; i <= daysOfMonth[month] + firstDay.getDay() - 1; i++) {
        let day = document.createElement("div");
        if(i >= firstDay.getDay()) {
            day.classList.add("calendar-day-hover");
            day.innerHTML = i - firstDay.getDay() + 1;
            
            let dayTemp = new Date(month, year, i - firstDay.getDay() + 1);
            if (i - firstDay.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add("curr-date");
            }

            if ((year < currDate.getFullYear()) || ((year === currDate.getFullYear()) && (month < currDate.getMonth())) || ((i - firstDay.getDay() + 1 <= currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth())) || (dayTemp.getDay() === 0 || dayTemp.getDay() === 1)) {
                day.style.color = "rgb(162, 162, 153)";
                day.style.cursor = "not-allowed";
                day.classList.add("no");
            }
        }
        calendarDays.appendChild(day);
    }
    let select = document.querySelector(".hour-pick");
    select.innerHTML = "<option value='0'>Choisissez l'heure</option>";
};

let monthList = calendar.querySelector(".month-list");

monthNames.forEach((e, index) => {
    let month = document.createElement("div");
    month.innerHTML = `<div>${e}</div>`;
    month.onclick = () => {
        monthList.classList.remove("show");
        currMonth.value = index;
        generateCalendar(currMonth.value, currYear.value);
    };
    monthList.appendChild(month);
});

document.querySelector("#prev-year").onclick = () => {
    currYear.value--;
    generateCalendar(currMonth.value, currYear.value);
};

document.querySelector("#next-year").onclick = () => {
    currYear.value++;
    generateCalendar(currMonth.value, currYear.value);
};

let currDate = new Date();

let currMonth = {value: currDate.getMonth()};
let currYear = {value: currDate.getFullYear()};

generateCalendar(currMonth.value, currYear.value);

let select = document.querySelector(".hour-pick");

document.querySelector(".calendar-days").addEventListener('DOMSubtreeModified', () => {
    pickDate();
}, false);

pickDate();

function pickDate() {
    document.querySelectorAll(".calendar-days div").forEach((div) => {
        div.onclick = () => {
            select.innerHTML = "<option value='0'>Choisissez l'heure</option>";
            document.querySelectorAll(".calendar-days div").forEach((elem) => {
                elem.classList.remove("selected");
            });
            if (!div.classList.contains("no")) {
                if (div.innerHTML != "") {
    
                    div.classList.add("selected");
                    let dayTemp = new Date(currMonth.value, currYear.value, div.innerHTML);

                    
                    if (!([0, 1].includes(dayTemp.getDay()))) {
                        if ([2, 3, 5].includes(dayTemp.getDay())) {
                            for (let i = 9; i < 19; i++) {
                                let request = new XMLHttpRequest();
                                request.open("POST", "../php/dateTime.php", true);
                                request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                request.send(`rdv=${i}-${div.innerHTML}-${currMonth.value+1}-${currYear.value}`);
            
                                request.onreadystatechange = () => {
                                    if (request.readyState === 4 && request.status === 200) {
                                        let response = request.response;
                                       
                                        if (response == "no") {
                                            let option = document.createElement("option");
                                            option.innerHTML = i < 10 ? `0${i}:00`: `${i}:00`;
                                            option.setAttribute("value", i);
                                            select.appendChild(option);

                                            let options = document.querySelectorAll("select option");
                                            options = Array.from(options);

                                            for (let i = 0; i < options.length; i++) {
                                                for (let j = i + 1; j < options.length; j++) {
                                                    if (+options[i].value > +options[j].value) {
                                                        temp = options[i];
                                                        options[i] = options[j];
                                                        options[j] = temp;
                                                    }
                                                }
                                            }

                                            select.innerHTML = "";
                                            options.forEach((opt) => {
                                                select.appendChild(opt);
                                            });
                                        }
                                    }
                                };
                            }
                        } else if([4, 6].includes(dayTemp.getDay())) {
                            for (let i = 9; i < 18; i++) {
                                let request = new XMLHttpRequest();
                                request.open("POST", "../php/dateTime.php", true);
                                request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                request.send(`rdv=${i}-${div.innerHTML}-${currMonth.value+1}-${currYear.value}`);
            
                                request.onreadystatechange = () => {
                                    if (request.readyState === 4 && request.status === 200) {
                                        let response = request.response;

                                        if (response == "no") {
                                            let option = document.createElement("option");
                                            option.innerHTML = i < 10 ? `0${i}:00`: `${i}:00`;
                                            option.setAttribute("value", i);
                                            select.appendChild(option);

                                            let options = document.querySelectorAll("select option");
                                            options = Array.from(options);

                                            for (let i = 0; i < options.length; i++) {
                                                for (let j = i + 1; j < options.length; j++) {
                                                    if (+options[i].value > +options[j].value) {
                                                        temp = options[i];
                                                        options[i] = options[j];
                                                        options[j] = temp;
                                                    }
                                                }
                                            }

                                            select.innerHTML = "";
                                            options.forEach((opt) => {
                                                select.appendChild(opt);
                                            });
                                        }
                                    }
                                };
                            }
                        }
                    }
                }
            }
        };
    });
}


// Reserver le rdv

let btnReserver = document.querySelector(".hour .reserver");

btnReserver.onclick = () => {
    if (select.value != "0") {
        let request = new XMLHttpRequest();

        request.open("POST", "../php/reserver.php", true);
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        request.send(`rdv=${select.value}-${document.querySelector(".calendar-days .selected").innerHTML}-${currMonth.value+1}-${currYear.value}`);

        request.onreadystatechange = () => {
            if (request.readyState == 4 && request.status == 200) {
                select.innerHTML = "<option value='0'>Choisissez l'heure</option>";
                document.querySelectorAll(".calendar-days div").forEach((div) => {
                    if (div.classList.contains("selected")) {
                        div.classList.remove("selected");
                    }
                });


                document.querySelectorAll("ul.list li .info button").forEach((btn) => {
                    if(btn.hasAttribute("disabled")) {
                        btn.removeAttribute("disabled");
                    }
                });

                document.querySelector(".pres .list").innerHTML = "";
                document.querySelector(".pres .title span").innerHTML = 0;

                uploadRdv();
            }
        };
    }
};

uploadRdv();

function uploadRdv() {
    let request = new XMLHttpRequest();

    request.open("POST", "../php/uploadRdv.php", true);
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    request.send();

    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            let response = request.response;
            let list = document.querySelector(".rdvs #list");
            let nbRdv = 0;

            list.innerHTML = "";

            response.split(".").forEach((date) => {
                if (date != "") {
        
                    let elem = document.createElement("li");
                    let name = document.createElement("div");
                    let del = document.createElement("div");
        
                    name.classList.add("service-name");
                    del.classList.add("delete");

                    date = date.split("-");
                    
                    name.appendChild(document.createTextNode((+date[1] < 10 ? `0${date[1]}` : date[1]) + " " +  monthNames[+date[2] - 1] + " " +  date[3] + " " + (+date[0] < 10 ? `0${date[0]}:00` : `${date[0]}:00`)));
                    del.appendChild(document.createTextNode("x"));
        
                    elem.appendChild(name);
                    elem.appendChild(del);
        
                    list.appendChild(elem);

                    nbRdv++;
                }
            });

            document.querySelector(".rdvs .title span").innerHTML = nbRdv;

        }
    };
}

document.querySelector(".rdvs .list").addEventListener('DOMSubtreeModified', () => {
    btnDel = document.querySelectorAll(".rdvs .delete");
    
    btnDel.forEach((btn) => {
        btn.onclick = () => {

            let dates = btn.parentElement.children[0].textContent.split(" ");
            // console.log("rdv=" + +dates[3].slice(0, 2) + "-" + +dates[0] + "-" + (monthNames.indexOf(dates[1])+1) + "-" + dates[2]);

            let request = new XMLHttpRequest();
            request.open("POST", "../php/deleteRdv.php", true);
            request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            request.send("rdv=" + +dates[3].slice(0, 2) + "-" + +dates[0] + "-" + (monthNames.indexOf(dates[1])+1) + "-" + dates[2]);

            btn.parentElement.style.display = "none";

            uploadRdv();

            
        }
    });
}, false);



