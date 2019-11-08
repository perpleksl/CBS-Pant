function goToReg() {
    document.location.href="RegistreringAfPant.html";
}


// Hvis ikke vi tilføjer denne variabel igen, kommer der ikke nogen tabel frem. Hvorfor...?
let pantListParsed = JSON.parse(localStorage.getItem('Pant'));



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
//implementering af øvelse 15.1 ovenfor
document.querySelector("#pantlist")
    .appendChild(buildTable(pantListParsed));







function udregnPant() {


    let sum = 0;
    for (i = 0; i <= pantListParsed.length; i++) {


        let pantListBkr = pantListParsed[i].aPantMoney + pantListParsed[i].bPantMoney + pantListParsed[i].cPantMoney;
        sum += pantListBkr;

        console.log(sum);
        document.getElementById('sumAfPantB').innerHTML = sum + " kr.";
    }
    // Object.keys(pantListBkr).forEach(function (key) {

    //sum += pantListBkr[key];
    // console.log(pantListBkr[key]);


    // });

}