let inputA = document.getElementById('pantA');
let inputB = document.getElementById('pantB');
let inputC = document.getElementById('pantC');




/*
Vi laver en pant-klasse. Grunden til det er, at vi gerne vil lave et array med vores pantregistreringsværdier, så man
kan lave flere registreringer.
 */

class Pant {
    constructor(aPantAmount, bPantAmount, cPantAmount, aPantMoney, bPantMoney, cPantMoney) {
        this.aPantAmount = aPantAmount;
        this.bPantAmount = bPantAmount;
        this.cPantAmount = cPantAmount;
        this.aPantMoney = aPantMoney;
        this.bPantMoney = bPantMoney;
        this.cPantMoney = cPantMoney;
    }
}






/*
Hernede laver vi så en variabel, der indeholder vores pantregistreringsarray (dummy-data).
 */

if(localStorage.getItem('Pant') == null) {
    var pantList = [];
    pantList.push(new Pant('2', '4', '6', '2', 6, '18'));
    pantList.push(new Pant('10', '4', '24', 10, 6, '72'));
    pantList.push(new Pant('20', '23', '6', '20', 30, '18'));
    pantList.push(new Pant('2', '4', '6', '2', 6, '18'));
    var pantListString = JSON.stringify(pantList)
    localStorage.setItem('Pant', pantListString)
}



/*



 */


/* const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
]; */


/*

    var numbersB = [pantListString.bPantMoney];
    var sumB = numbersB.reduce(myFunctionB);

    document.getElementById("visFuldPantB").innerHTML = 'Du har derfor indsamlet ' + sumB + ' kroners pant B.';

    function myFunctionB(total, value, index, array) {
        return total + value;


    }


 */
















