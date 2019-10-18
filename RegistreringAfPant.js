this.pantA = document.getElementById('PantA');

function udregnPant() {
    localStorage.setItem('pantA', pantA.value);
    let udregnetPant = pantA.value * 3;
    alert('Din pant er ' + udregnetPant + ' kr.');
}