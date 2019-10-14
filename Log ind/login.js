// Den følgende variable deffinerer antal loginforsøg.
var attempt = 3;
// Nedenfor deffineres funktionen "validate()", som bliver brugt ved at trykke på "log ind"-knappen.
function validate(){
    var brugernavn = document.getElementById("brugernavn").value;
    var kodeord = document.getElementById("kodeord").value;
    if ( brugernavn == "Formget" && password == "formget#123"){
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
}