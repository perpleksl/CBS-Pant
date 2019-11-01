var login = document.getElementById('login');

// Den følgende variable definerer antal loginforsøg.
var attempt = 4;

var existingUser = JSON.parse(localStorage.getItem('User'));


// Nedenfor deffineres funktionen til vores login on click, som bliver brugt ved at trykke på "log ind"-knappen.
login = function() {
    var brugernavnInput = document.getElementById("brugernavn").value;
    var kodeordInput = document.getElementById("kodeord").value;

    //
    for (let i = 0; i < existingUser.length; i++) {
        if (brugernavnInput == existingUser[i].brugernavn && kodeordInput == existingUser[i].kodeord) {
            document.location.href = "Forside1.html";
            return true;
        }

    }

           // Hvis man skriver forkert brugernavn og/eller kodeord, vil der blive fjernet et loginforsøg.
                attempt --;
                alert(`Du har ${attempt} forsøg tilbage`);
        // Hvis man har 0 forsøg tilbage vil boksene forsvinde.
                if( attempt == 0){
                    document.getElementById("brugernavn").disabled = true;
                    document.getElementById("kodeord").disabled = true;
                    document.getElementById("login").disabled = true;
                    alert("Sorry");
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
