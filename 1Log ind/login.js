// Den følgende variable deffinerer antal loginforsøg.
var attempt = 3;
// Nedenfor deffineres funktionen "validate()", som bliver brugt ved at trykke på "log ind"-knappen.
function validate(){
    var brugernavn = document.getElementById("brugernavn").value;
    var kodeord = document.getElementById("kodeord").value;
    if (brugernavn == "Formget" && password == "formget#123") {
        alert("Velkommen til CBS Pant");
        // Efter vores velkomstalert vil man blive linket videre til vores forside.
        window.location = "2Forside.html";
        return false;
    }
    attempt--;
    alert(`Du har ${attempt} forsøg tilbage`);

// Hvis man har 0 forsøg tilbage vil boksene forsvinde.
    if (attempt == 0) {
        document.getElementById("brugernavn").disabled = true;
        document.getElementById("kodeord").disabled = true;
        document.getElementById("login").disabled = true;
        return false;
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