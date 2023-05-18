'use strict';
const employee_Array = [];
const mainSec = document.createElement("main");

function Employee_Info(fullName, depatment, level, img) {
    this.id = Math.floor(1000 + Math.random() * 9000);
    this.fullName = fullName;
    this.depatment = depatment;
    this.level = level;
    this.img = img;
    employee_Array.push(this);
}
Employee_Info.prototype.calculateSalary = function () {
    switch (this.level) {
        case "senior":
            let seniorSalary = Math.floor((Math.floor(1500 + (Math.random() * 500))) * 0.925);
            return seniorSalary;
            break;
        case "mid-senior":
            let midSeniorSalary = Math.floor((Math.floor(1000 + (Math.random() * 500))) * 0.925);
            return midSeniorSalary;
            break;
        case "junior":
            let juniorSalary = Math.floor((Math.floor(500 + (Math.random() * 500))) * 0.925);
            return juniorSalary;
            break;
    }
}
Employee_Info.prototype.renderInfo = function () {

    const imgDiv = document.createElement("div");
    const nameDiv = document.createElement("div");
    const departDive = document.createElement("div");
    const salaryDiv = document.createElement("div");


    const imgElement = document.createElement("img");
    const nameEl = document.createElement("h4");
    const departInfo = document.createElement("p");
    const salaryInfo = document.createElement("p");




    // styling the cards


    departInfo.textContent = this.depatment;
    departInfo.style.fontSize = "20px";
    departInfo.style.color = "#37388E";

    salaryInfo.textContent = this.calculateSalary();
    salaryInfo.style.color = "#37388E";
    salaryInfo.style.fontSize = "20px";


    nameEl.textContent = this.fullName;
    nameEl.style.color = "#37388E";
    nameEl.style.fontSize = "20px";

    imgElement.src = this.img;
    imgElement.alt = this.fullName;
    imgElement.style.width = "25%";

    mainSec.appendChild(imgDiv.appendChild(imgElement));
    document.body.appendChild(mainSec);
    mainSec.appendChild(nameDiv.appendChild(nameEl));
    document.body.appendChild(nameDiv);
    mainSec.appendChild(departDive.appendChild(departInfo));
    document.body.appendChild(departDive);
    mainSec.appendChild(salaryDiv.appendChild(salaryInfo));
    document.body.appendChild(salaryDiv);
    mainSec.style.cssText = "text-align : center";
}
const gazi = new Employee_Info("Ghazi Samer", "Administration", "senior", "./assets/img3.jpg");
const lana = new Employee_Info("Lana Ali", "Finance", "senior", "./assets/img4.jpg");
const tamara = new Employee_Info("Tamara Ayoub", "Marketing", "senior", "./assets/img2.jpg");
const safi = new Employee_Info("Safi Walid", "Administration", "mid-senior", "./assets/img5.jpg");
const omar = new Employee_Info("Omar Ziad", "Development", "senior", "./assets/img3.jpg");
const rana = new Employee_Info("Rana Saleh", "Development", "junior", "./assets/img2.jpg");
const hadi = new Employee_Info("Hadi Ahmad", "Finance", "mid-senior", "./assets/img4.jpg");


function renderHomePage() {
    for (let i = 0; i < employee_Array.length; i++) {
        employee_Array[i].renderInfo();
    }
}
renderHomePage();