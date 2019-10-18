this.pantA = document.getElementById('PantA');
this.pantB = document.getElementById('PantB');
this.pantC = document.getElementById('PantC');

function udregnPant() {
    localStorage.setItem('pantA', pantA.value);
    let udregnetPantA = pantA.value * 1;
    let antalPantA = pantA.value;
    localStorage.setItem('pantB', pantB.value);
    let antalPantB = pantB.value;
    let udregnetPantB = pantB.value * 1.5;
    localStorage.setItem('pantC', pantC.value);
    let antalPantC = pantC.value;
    let udregnetPantC = pantC.value * 3;

    alert('Du har indsamlet ' + antalPantA + ' stk. pant A. \nDu har derfor indsamlet ' + udregnetPantA + ' kroners pant A.\n' +
        '\nDu har indsamlet ' + antalPantB + ' stk. pant B. \nDu har derfor indsamlet ' + udregnetPantB + ' kroners pant B.\n'+
        '\nDu har indsamlet ' + antalPantC + ' stk. pant C. \nDu har derfor indsamlet ' + udregnetPantC + ' kroners pant C.');
}