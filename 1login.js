// KR: Deffinerer en variabel, der hedder login, som henter elementerne fra ID'et 'login' i HTML'en
var login = document.getElementById('login');

// Den følgende variable definerer antal loginforsøg.
var attempt = 4;

// KR:
var existingUser = JSON.parse(localStorage.getItem('User'));


// Nedenfor deffineres funktionen til vores login on click, som bliver brugt ved at trykke på "log ind"-knappen.
login.onclick = function() {
    var brugernavnInput = document.getElementById("brugernavn").value;
    var kodeordInput = document.getElementById("kodeord").value;

    //KR: For-loop, der går igennem de eksisterende brugere, hvor der kommer et if-statement. Hvis brugernavn og kodeord hører sammen, vil man blive linket videre til vores forside.
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





/* KR: Nu vil vi lave funktionen "gemKodeord", der bliver aktiveret, når man trykker på checkboksen.
Dermed siger vi, at "if" kodeordets type er et 'password', så skal det laves om til typen 'text'. "else" vil kodeordet
laves om tilbage til typen "password".
 */
function gemKodeord() {
    var a = document.getElementById("kodeord");
    if (a.type === "password") {
        a.type = "text";
    }
    else {
        a.type = "password";
    }
}
