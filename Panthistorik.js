// Vores tilbagefunktion, der egentlig bare fører dig tilbage til det tidligere trin i vores system, i dette tilfælde registrering af pant.
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






/*
KR: Vi laver en funktion, der skal udregne vores pant.
Inde i denne funktion, definerer vi en variabel, sum, som har værdien 0.
Nu starter vi et for-loop, hvor 'i' (vores array-nummer) = 0 (altså, det starter på 0), 'i' er mindre eller lig med vores JSON parsed array med vores pant-data, og 'i' skal addere sin værdi med 1 hver gang den går igennem loopet.
Inde i dette loop definerer vi 'totalPantKr' til at være 'aPantMoney' + b'PantMoney + cPantMoney i det i'ende array inde i pantListParsed

Vores sum bliver herefter adderet med 'totalPantKr' og udregnet hver gang vi går igennem loopet.
Den endelige sum bliver til sidst skrevet ind i vores konsol og i elementID'et 'sumAfPantB', hvor der står den endelige sum + " kr.".
 */
function udregnPant() {


    let sum = 0;
    for (i = 0; i <= pantListParsed.length; i++) {


        let totalPantKr = pantListParsed[i].aPantMoney + pantListParsed[i].bPantMoney + pantListParsed[i].cPantMoney;
        sum += totalPantKr;

        console.log(sum);
        document.getElementById('sumAfPantB').innerHTML = sum + " kr.";
    }


}