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




function sePant() {

  var sePant = JSON.parse(localStorage.getItem('Pant'));
  console.log(sePant);


  /*
  var pantInput = document.getElementById("Pant").value;
  pantListString


  for (let u = 0; u < sePant.length; u++) {
    if (pantInput == existingUser[u].brugernavn && kodeordInput == existingUser[u].kodeord) {
      return true;
    }


  }

   */

  var numbersB = [pantListString];
  var sumB = numbersB.reduce(myFunctionB);

  document.getElementById("visFuldPantB").innerHTML = 'Du har derfor indsamlet ' + sumB + ' kroners pant B.';

  function myFunctionB(total, value, index, array) {
    return total + value;
  }

    /*
        document.getElementById("visFuldPantA").innerHTML = 'Du har indsamlet ' + pantA.value + ' stykker pant A.';
        document.getElementById("visFuldUdregnetPantA").innerHTML = 'Du har derfor indsamlet ' + pantA.value * 1 + ' kroners pant A.';
        document.getElementById("visFuldPantB").innerHTML = 'Du har indsamlet ' + pantB.value + ' stykker pant B.';
        document.getElementById("visFuldUdregnetPantB").innerHTML = 'Du har derfor indsamlet ' + pantB.value * 1.5 + ' kroners pant B.';
        document.getElementById("visFuldPantC").innerHTML = 'Du har indsamlet ' + pantC.value + ' stykker pant C.';
        document.getElementById("visFuldUdregnetPantC").innerHTML = 'Du har derfor indsamlet ' + pantC.value * 3 + ' kroners pant C.';


     */


}


