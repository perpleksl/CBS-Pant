/*
this.pantA = document.getElementById('pantA');
this.pantB = document.getElementById('pantB');
this.pantC = document.getElementById('pantC');


let antalPantARaw = pantA.value;
let antalPantBRaw = pantB.value;
let antalPantCRaw = pantC.value;





function addPant2() {
  localStorage.setItem('pantA', pantA.value);
  localStorage.setItem('pantB', pantB.value);
  localStorage.setItem('pantC', pantC.value);
    document.getElementById("visNyPantA").innerHTML = 'Du har tilføjet ' + pantA.value + ' stykker pant A til din samlede indsamling.';
    document.getElementById("visNyUdregnetPantA").innerHTML = 'Du har tilføjet ' + pantA.value * 1 + ' kroners pant til din samlede indsamling.';
    document.getElementById("visNyPantB").innerHTML = 'Du har tilføjet ' + pantB.value + ' stykker pant B til din samlede indsamling.';
    document.getElementById("visNyUdregnetPantB").innerHTML = 'Du har tilføjet ' + pantB.value * 1.5 + ' kroners pant til din samlede indsamling.';
    document.getElementById("visNyPantC").innerHTML = 'Du har tilføjet ' + pantC.value + ' stykker pant C til din samlede indsamling.';
    document.getElementById("visNyUdregnetPantC").innerHTML = 'Du har tilføjet ' + pantC.value * 3 + ' kroners pant til din samlede indsamling.';



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
// Her add'er vi pant til vores localStorage via funktionen addPant()
function addPant() {
  var pushA = inputA.value;
  var pushB = inputB.value;
  var pushC = inputC.value;
  var pushAmoney = pushA * 1;
  var pushBmoney = pushB * 1.5;
  var pushCmoney = pushC * 3;

  pantListParsed.push(new Pant(pushA, pushB, pushC, pushAmoney, pushBmoney, pushCmoney));
  var pantListString = JSON.stringify(pantListParsed);
  localStorage.setItem('Pant', pantListString);

  //Nu vil vi gerne se vores localStorage i vores console, når vi kalder funktionen
  var sePant = JSON.parse(localStorage.getItem('Pant'));
  console.log(sePant);

 document.getElementById('Tak').innerHTML = "Mange tak for din registrering af pant. Tryk Opdater pant for at se din registrerede pant.";

}

//implementering af øvelse 15.1 ovenfor
document.querySelector("#pantlist")
    .appendChild(buildTable(pantListParsed));



var sum = 0;
pantListParsed.forEach(bPantB);

function bPantB(item){
  sum += item;
  document.getElementById('sumAfPantB').innerHTML = sum;
}



  function panthistorik() {
    document.location.href="Panthistorik.html";
  }

  /*
  var pantInput = document.getElementById("Pant").value;
  pantListString


  for (let u = 0; u < sePant.length; u++) {
    if (pantInput == existingUser[u].brugernavn && kodeordInput == existingUser[u].kodeord) {
      return true;
    }


  }

   */



    /*
        document.getElementById("visFuldPantA").innerHTML = 'Du har indsamlet ' + pantA.value + ' stykker pant A.';
        document.getElementById("visFuldUdregnetPantA").innerHTML = 'Du har derfor indsamlet ' + pantA.value * 1 + ' kroners pant A.';
        document.getElementById("visFuldPantB").innerHTML = 'Du har indsamlet ' + pantB.value + ' stykker pant B.';
        document.getElementById("visFuldUdregnetPantB").innerHTML = 'Du har derfor indsamlet ' + pantB.value * 1.5 + ' kroners pant B.';
        document.getElementById("visFuldPantC").innerHTML = 'Du har indsamlet ' + pantC.value + ' stykker pant C.';
        document.getElementById("visFuldUdregnetPantC").innerHTML = 'Du har derfor indsamlet ' + pantC.value * 3 + ' kroners pant C.';


     */


/*

for loops
yourArray.forEach(function (arrayItem) {
    var x = arrayItem.prop1 + 2;
    console.log(x);
});

 */




/*
Når man trykker på 'tilføj pant', skal der komme en alert, der siger 'tak for din registrering...'. Bagefter skal siden opdateres
Husk også at tilføje en besked øverst med 'Hvis du ikke har noget at registrere, kan du roligt gå videre til næste side.'
 */

