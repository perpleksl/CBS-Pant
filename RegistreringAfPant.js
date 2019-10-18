this.pantA = document.getElementById('pantA');
this.pantB = document.getElementById('pantB');
this.pantC = document.getElementById('pantC');

let antalPantARaw = pantA.value;
let antalPantBRaw = pantB.value;
let antalPantCRaw = pantC.value;
let udregnetPantARaw = antalPantARaw * 3;
let udregnetPantBRaw = antalPantBRaw * 1.5;
let udregnetPantCRaw = antalPantCRaw * 3;


function udregnPant() {
  localStorage.setItem('pantA', pantA.value);
  localStorage.setItem('pantB', pantB.value);
  localStorage.setItem('pantC', pantC.value);
    document.getElementById("visPantA").innerHTML = 'Du har indsamlet ' + pantA.value + ' stykker pant A.';
    document.getElementById("visUdregnetPantA").innerHTML = 'Du har derfor indsamlet ' + pantA.value * 3 + ' kroners pant A.';
}

function printConsole() {
    let antalPantA = 'Du har indsamlet ' + antalPantARaw + ' stk. pant A.';
    let udregnetPantA = 'Du har derfor indsamlet ' + udregnetPantARaw + ' kroners pant A.';
    // let antalPantB = 'Du har indsamlet ' + antalPantBRaw + ' stk. pant B.';
    // let udregnetPantB = 'Du har derfor indsamlet ' + udregnetPantBRaw + ' kroners pant B.';
    //let antalPantC = 'Du har indsamlet ' + antalPantCRaw + ' stk. pant C.';
    // let udregnetPantC = 'Du har derfor indsamlet ' + udregnetPantCRaw + ' kroners pant C.';
    console.log(localStorage);

}




