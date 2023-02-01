let data1 = document.getElementById("info-form");
let data2 = document.getElementById("main-form");
let data3 = document.getElementById("add-ons");

function infochangeDisplay(params) {
        data1.classList.add("display-none"); 
        data2.classList.add("display-block");
}

function mainchangeDisplay(params) {
        data2.classList.remove("display-block");
        data3.classList.add("display-block");
}