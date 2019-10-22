class Pant {
    constructor(pantA, pantAx, pantB, pantBx, pantC, pantCx) {
        this.pantA = pantA;
        this.pantAx = pantA.value * 1;
        this.pantB = pantB;
        this.pantBx = pantB.value * 1.5;
        this.pantC = pantC;
        this.pantCx = pantC.value * 3;
    }
}


var pantList = [];
    pantList.push(new Pant('', '', '', '', '', ''));



    var pantListString = JSON.stringify(pantList);
    localStorage.setItem('Pant', pantListString);
}