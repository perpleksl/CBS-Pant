// Den følgende variable deffinerer antal loginforsøg.
var attempt = 3;
// Nedenfor deffineres funktionen "validate()", som bliver brugt ved at trykke på "log ind"-knappen.

var objBrugernavn = [
    {
        brugernavn: "Mathias",
        kodeord: "mathias123"
    },
    {
        brugernavn: "Magnus",
        kodeord: "magnus123"
    },
    {
        brugernavn: "Alexandra",
        kodeord: "alexandra123"
    },
    {
        brugernavn: "Kasper",
        kodeord: "kasper123"
    }
]


function validate(){
    var brugernavn = document.getElementById("brugernavn").value;
    var kodeord = document.getElementById("kodeord").value;

    /*if ( brugernavn == "objBrugern" && password == "cbsPant123"){
        alert ("Velkommen til CBS Pant");
        // Efter vores velkomstalert vil man blive linket videre til vores forside.
        window.location = "Forside.html";
        return false;
    }
   // Hvis man skriver forkert brugernavn og/eller kodeord, vil der blive fjernet et loginforsøg.
    else{
        attempt --;
        alert(`Du har ${attempt} forsøg tilbage`);
// Hvis man har 0 forsøg tilbage vil boksene forsvinde.
        if( attempt == 0){
            document.getElementById("brugernavn").disabled = true;
            document.getElementById("kodeord").disabled = true;
            document.getElementById("login").disabled = true;
            return false;
        }
    }
     */

    for(i = 0; i < objBrugernavn.length; i++) {
        if(brugernavn == objBrugernavn[i].brugernavn && kodeord == objBrugernavn[i].kodeord) {
            alert ("Velkommen til CBS Pant");
            window.location = "";
        }

    }

}
/* Nu vil vi lave funktionen "gemKodeord", der bliver aktiveret, når man trykker på checkboksen.
Dermed siger vi, at "if" kodeordets type er et 'password', så skal det laves om til typen 'text'. "else" vil kodeordet
laves om tilbage til typen "password".
 */
function gemKodeord() {
    var x = document.getElementById("kodeord");
    if (x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }
}