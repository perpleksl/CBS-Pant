this.pantA = document.getElementById('pantA');
this.pantB = document.getElementById('pantB');
this.pantC = document.getElementById('pantC');

let antalPantARaw = pantA.value;
let antalPantBRaw = pantB.value;
let antalPantCRaw = pantC.value;
let udregnetPantARaw = antalPantARaw * 1;
let udregnetPantBRaw = antalPantBRaw * 1.5;
let udregnetPantCRaw = antalPantCRaw * 3;


function udregnPant() {
  localStorage.setItem('pantA', pantA.value);
  localStorage.setItem('pantB', pantB.value);
  localStorage.setItem('pantC', pantC.value);
    document.getElementById("visPantA").innerHTML = 'Du har indsamlet ' + pantA.value + ' stykker pant A.';
    document.getElementById("visUdregnetPantA").innerHTML = 'Du har derfor indsamlet ' + pantA.value * 1 + ' kroners pant A.';
    document.getElementById("visPantB").innerHTML = 'Du har indsamlet ' + pantB.value + ' stykker pant B.';
    document.getElementById("visUdregnetPantB").innerHTML = 'Du har derfor indsamlet ' + pantB.value * 1.5 + ' kroners pant B.';
    document.getElementById("visPantC").innerHTML = 'Du har indsamlet ' + pantC.value + ' stykker pant C.';
    document.getElementById("visUdregnetPantC").innerHTML = 'Du har derfor indsamlet ' + pantC.value * 3 + ' kroners pant C.';

}


function printConsole() {
    // let antalPantA = 'Du har indsamlet ' + antalPantARaw + ' stk. pant A.';
    // let udregnetPantA = 'Du har derfor indsamlet ' + udregnetPantARaw + ' kroners pant A.';
    // let antalPantB = 'Du har indsamlet ' + antalPantBRaw + ' stk. pant B.';
    // let udregnetPantB = 'Du har derfor indsamlet ' + udregnetPantBRaw + ' kroners pant B.';
    // let antalPantC = 'Du har indsamlet ' + antalPantCRaw + ' stk. pant C.';
    // let udregnetPantC = 'Du har derfor indsamlet ' + udregnetPantCRaw + ' kroners pant C.';
    console.log(localStorage);

}




