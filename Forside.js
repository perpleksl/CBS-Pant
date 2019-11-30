

function showAmount() {
    const pantListParsed = JSON.parse(localStorage.getItem('Pant'));

    let sum = 0;
    for (let i = 0; i <= pantListParsed.length; i++) {
        if (!!pantListParsed[i]) { // make sure the element is valid
            let totalPantKr = pantListParsed[i].aPantMoney + pantListParsed[i].bPantMoney + pantListParsed[i].cPantMoney;
            sum += totalPantKr;
        }
    }
    alert('Dine optjente bonuspenge til Nexus i kr:' +  (sum/10));
}