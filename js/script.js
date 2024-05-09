// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere

const numeroKm = parseFloat(prompt('inserisci il numero di chilimetri da percorrere'));


//Età del passeggero 
const età = parseFloat(prompt('inserisci la tua età'));


//Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//il prezzo del biglietto è definito in base ai km (0.267113 € al km)
prezzo = (numeroKm * 0.267113);
sconto = Number;


//va applicato uno sconto del 24.552% per gli under 21
//va applicato uno sconto del 37.893% per gli over 63.

if (età < 21){
    sconto = 24.552
}else if(età > 63){
    sconto = 37.893
}

prezzo = prezzo - (prezzo/100*sconto);

console.log(prezzo.toFixed(2), prezzo);