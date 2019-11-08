function goToFront() {
  document.location.href="Forside1.html";
}



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



let pantListParsed = JSON.parse(localStorage.getItem('Pant'));
console.log(pantListParsed);


// KR: Her add'er vi pant til vores localStorage via funktionen addPant()
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




/* KR: Vi vil gerne addere vores pantlist. Vi har derfor prøvet at implementere denne: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_foreach2
Her prøver vi derfor at lave en variabel, der er lig 0. Bagefter tager vi vores pantListParsed, som get'er vores Pant data fra localStorage
Her bliver forEach kørt i denne. forEach er en metode, der kalder en funktion for hver element i array'et. Bagfter laver vi en ny funktion
der indeholder en værdi, "item". Vores variabel, sum skal herefter addere de værdierne og finde summen af det. Dette skal skrives ind i HTML'en 'sumAfPantB.
*/





//  function bPantB(resultB) {
//    sum += resultB;
//    document.getElementById('sumAfPantB').innerHTML = sum;
//  }
// }



/*KR: 2. forsøg på For/of loop igennem pantBMoney: https://www.w3schools.com/js/tryit.asp?filename=tryjs_object_for_of
var pantA = inputA.value;
var pantB = inputB.value;
var pantC = inputC.value;
var pantAmoney = pantA * 1;
var pantBmoney = pantB * 1.5;
var pantCmoney = pantC * 3;

var z;

for (z of pantBmoney) {
  document.write(z + "<br >");
}

 */



/*KR: While loop, side 30 i bogen


let number = 0;
while (pantListParsed.value)



 */


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

