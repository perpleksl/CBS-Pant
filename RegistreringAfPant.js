// Vores tilbagefunktion, der egentlig bare fører dig tilbage til det tidligere trin i vores system, i dette tilfælde, forsiden.
function goToFront() {
  document.location.href="Forside1.html";
}



/*

KR: Allerførst tænkte vi, at man kunne tage de værdier, der bliver tastet ind i vores forms og gange dem med det samme, så man
på denne måde kunne få både vores pant-værdier i antal og kr. Derfor startede vi med at hente værdierne fra vores forms:

  this.pantA = document.getElementById('pantA');
  this.pantB = document.getElementById('pantB');
  this.pantC = document.getElementById('pantC');


KR: Efterfølgende ville vi definere vores antal af den givende pant, og bagefter gange det, med værdien i kr, den givende pant har.
Dette kunne godt lade sig gøre, problemet var bare, at vi ikke havde nogen måde at gemme de værdierne, vi får fra forms. Derfor
skrottede vi idéen og begyndte at tænke på at lave noget med localStorage.

  let antalPantA = pantA.value;
  let antalPantB = pantB.value;
  let antalPantC = pantC.value;
  let udregnetPantA = antalPantA * 1;
  let udregnetPantB = antalPantB * 1.5;
  let udregnetPantC = antalPantC * 3;




KR: Denne gang startede vi med at sætte disse values som strings i localStorage. Herefter lavede vi en masse 'document.getElementById.innerHTML
Hvor vi gav brugeren at vide, hvad denne havde indtastet. Det var også her vi gjorde udregningerne for panten i kr. Det fandt vi senere
ud af ikke var særlig smart, der hermed kun kunne stå disse værdier en gang - man kunne altså ikke push'e det ind.
Dette giver også god mening, da man bliver nødt til at tilføje flere værdier hver gang man indtaster noget. Måden man gør det på i Javascript
er ved brug af et array, så vores array får et nyt array med nye objekter inde i sig.
Dermed måtte vi finde på noget andet.

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



/*
KR: Vi starter ud med at definere en variabel, så vi kan hente vores pushede arrays fra vores pant-klasse. Dette gøres vha.
JSON.parse. Her bruger vi komandoen 'getItem' fra vores localStorege ved at bruge JSON.parse. Det denne gør er, at 'forvandle'
vores stringify'ede (jf. funktionen nedenfor) arrays fra localStorege.
 */

let pantListParsed = JSON.parse(localStorage.getItem('Pant'));
console.log(pantListParsed);


// KR: Her add'er vi pant til vores localStorage via funktionen addPant()
function addPant() {

//KR: Nu forbinder vi denne funktion med vores forms i HTML ved at tage value'en af vores inputA,B & C, som variabler fra vores pantDB.js.
//Efterfølgende ganger vi op, så vi også har de monetære værdier.
  var pushA = inputA.value;
  var pushB = inputB.value;
  var pushC = inputC.value;
  var pushAmoney = pushA * 1;
  var pushBmoney = pushB * 1.5;
  var pushCmoney = pushC * 3;


  //KR: Nu henter vi vores parsed pant-klasse ned for at push'e ind i den. Den kommer altså tilbage som et array, hvor
  // der bliver push'et et nyt array derind med vores nye værdier.
  pantListParsed.push(new Pant(pushA, pushB, pushC, pushAmoney, pushBmoney, pushCmoney));
  //KR: Nu definerer vi, at man skal lave vores parsed arrays om til strings igen (ellers kan det ikke være i localStorage.
  var pantListString = JSON.stringify(pantListParsed);
  //KR: Nu siger vi 'setItem', hvilket tilføjer nye værdier til localStorage. Der bliver i parentesen defineret, at de
  // nye værdier skal tilføjes som values i vores key, Pant.
  localStorage.setItem('Pant', pantListString);

  //Nu vil vi gerne se vores localStorage i vores console, når vi kalder funktionen
  var sePant = JSON.parse(localStorage.getItem('Pant'));
  console.log(sePant);

  //KR: lidt lir, så man kan se, man har tilføjet noget
  // DETTE SKAL ÆNDRES TIL EN ALERTBESKED OG ET LINK TIL NÆSTE SIDE!
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

//KR: HER SKAL DER I STEDET STÅ "INTET AT REGISTRE" ELLER NOGET I DEN DUR
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

