/*
Vi laver en pant-klasse. Grunden til det er, at vi gerne vil lave et array med vores pantregistreringsværdier, så man
kan lave flere registreringer.
 */

class Pant {
    constructor(aPantAmount, bPantAmount, cPantAmount, aPantMoney, bPantMoney, cPantMoney) {
        this.aPantAmount = aPantAmount;
        this.bPantAmount = bPantAmount;
        this.cPantAmount = cPantAmount;
        this.aPantMoney = aPantMoney;
        this.bPantMoney = bPantMoney;
        this.cPantMoney = cPantMoney;
    }
}

let inputA = document.getElementById('pantA');
let inputB = document.getElementById('pantB');
let inputC = document.getElementById('pantC');

/*
Hernede laver vi så en variabel, der indeholder vores pantregistreringsarray (dummy-data).
 */
var pantList = [];
    pantList.push(new Pant('2', '4', '6', '2', '6', '18'));
    pantList.push(new Pant('10', '4', '24', '10', '6', '72'));
    pantList.push(new Pant('20', '23', '6', '20', '30', '18'));
    pantList.push(new Pant('2', '4', '6', '2', '6', '18'));


/* const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
]; */

// Her add'er vi pant til vores localStorage via funktionen addPant()
function addPant() {
    var pushA = inputA.value;
    var pushB = inputB.value;
    var pushC = inputC.value;
    var pushAmoney = pushA * 1;
    var pushBmoney = pushB * 1.5;
    var pushCmoney = pushC * 3;
    pantList.push(new Pant(pushA, pushB, pushC, pushAmoney, pushBmoney, pushCmoney));
    var pantListString = JSON.stringify(pantList);
    localStorage.setItem('Pant', pantListString);
}

/*
var numbersB = [pantListString];
var sumB = numbersB.reduce(myFunctionB);

document.getElementById("visFuldPantB").innerHTML = 'Du har derfor indsamlet ' + sumB + ' kroners pant B.';

function myFunctionB(total, value, index, array) {
    return total + value;


}


 */

// Øvelse 15.1 i bogen viser buildTable funktionen

function buildTable(data) {
    let table = document.createElement("table");

    let fields = Object.keys(data[0]);
    let headRow = document.createElement("tr");
    fields.forEach(function(field) {
        let headCell = document.createElement("th");
        headCell.textContent = field;
        headRow.appendChild(headCell);
    });
    table.appendChild(headRow);

    data.forEach(function(object) {
        let row = document.createElement("tr");
        fields.forEach(function(field) {
            let cell = document.createElement("td");
            cell.textContent = object[field];
            if (typeof object[field] == "number") {
                cell.style.textAlign = "left";
            }
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    return table;
}

let pantListParsed = JSON.parse(localStorage.getItem('Pant'));

document.querySelector("#pantlist")
    .appendChild(buildTable(pantListParsed));
