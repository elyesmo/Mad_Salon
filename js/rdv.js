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
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`;
            
            if(i - firstDay.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add("curr-date");
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



