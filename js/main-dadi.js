/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

//1.GENERARE UN NUMERO RANDOM DA 1 A 6 PER I DUE GIOCATORI 
//2.STABILIRE IL VINCITORE IN BASE AL PUNTEGGIO PIU ALTO

//1. GENERARE UN NUMERO RANDOM DA 1 A 6 PER I DUE GIOCATORI

var giocatore = Math.floor(Math.random() * 6)+1;
document.getElementById("punteggio-giocatore").innerHTML = "il punteggio del giocatore è: " + giocatore;

var computer = Math.floor(Math.random() * 6)+1;
document.getElementById("punteggio-computer").innerHTML = "il punteggio del computer è: " + computer;

if(giocatore > computer){
    document.getElementById("risultato").innerHTML = "GIOCATORE VINCE!!!!";
}else if(giocatore == computer) {
    document.getElementById("risultato").innerHTML = "PAREGGIO";
}else {
    document.getElementById("risultato").innerHTML = "COMPUTER VINCE!!!";
}