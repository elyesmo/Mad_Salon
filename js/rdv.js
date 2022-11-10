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
            window.open("../php/compte.php", "_self");
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
            select.innerHTML = "";
            let option = document.createElement("option");
            option.innerHTML = "Choisissez l'heure";
            select.appendChild(option);
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
                                let option = document.createElement("option");
                                option.innerHTML = i < 10 ? `0${i}:00`: `${i}:00`;
                                option.setAttribute("value", i);
                                select.appendChild(option);
                            }
                        } else if([4, 6].includes(dayTemp.getDay())) {
                            for (let i = 9; i < 18; i++) {
                                let option = document.createElement("option");
                                option.innerHTML = i < 10 ? `0${i}:00`: `${i}:00`;
                                option.setAttribute("value", i);
                                select.appendChild(option);
                            }
                        }
                    }
                }
            }
        };
    });
}


// Reserver le rdv

const form = document.querySelector("form.hour");

form.onsubmit = e => {
    e.preventDefault();

    let request = new XMLHttpRequest();
    request.open("POST", "../php/dateTime.php", true);

    request.onload = () => {
        if (request.readyState == 4 && request.status == 200) {
            let response = request.response;
            console.log(response);
        }
    }
    
    let formData = new FormData(form);
     request.send(formData);
};


