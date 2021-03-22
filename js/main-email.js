/* ESERCIZIO MAIL
Chiedi all’utente la sua email, controlla che sia nella lista di 
chi può accedere, stampa un messaggio appropriato 
sull’esito del controllo.
*/

//1. CHIEDERE ALL UTENTE LA SUA EMAIL.
//2. CONTROLLARE CHE L EMAIL SIA NELLA LISTA DI CHI PUO ACCEDERE.
//3.STAMPA UN MESSAGGIO SULL' ESITO DELL CONTROLLO EMAIL.

//1. CHIEDERE ALL UTENTE L EMAIL
var email = prompt("inserire l' email.");
//console.log(email);

//2. CONTROLLARE CHE L EMAIL SIA NELLA LISTA DI CHI PUO ACCEDERE.

var listaEmail = ["alfonso@css", "marco@html", "giovanni@css", "boolean@html", "nicola@js"];

var emailFound = false;

for (var i = 0; i < listaEmail.length; i++){
        var nameEmail = listaEmail[i]
        if(nameEmail === email){
        emailFound = true;
        break;
    }
}

//3. STAMPARE UN MESSAGGIO DELL ESITO DEL CONTROLLO EMAIL

if(emailFound === true){
    document.getElementById("sign-in").innerHTML = ("Indirizzo email: " + email + ". Indirizzo email trovato. Accesso autorizzato.");
} else{
        document.getElementById("sign-in").innerHTML =("Riprova. Indirizzo email non trovato.");
}