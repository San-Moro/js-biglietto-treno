// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// INPUT
// Chiedi all’utente i km
const km = parseInt(prompt("Quanti km devi percorrere?"));
// poi chiedi age
const age = parseInt(prompt("Quanti anni hai?"));
// Convertire i due valori in numeri
console.log(km, typeof(km));
console.log(age, typeof(age));

// PROCESSING
// calcola prezzo biglietto intero => 0.21€/km
const basicTicket = km * 0.21;
console.log(basicTicket);

// SE age < 18
//     - sconto del 20%
// Altrimenti SE age > 65
//     - sconto del 40%
// Altrimenti
//     -prezzo biglietto intero

let price = "";

if (age < 18) {
    // sconto del 20%;
    let discountSmall = basicTicket * 0.2;
    // totale prezzo
    price =  basicTicket - discountSmall;
    console.log(price);
} else if (age > 65) {
    // sconto del 40%;
    let discountBig = basicTicket * 0.4;
    // totale prezzo
    price = basicTicket - discountBig;
    console.log(price);
} else {
    basicTicket;
}

// OUTPUT
// Output => con massimo 2 decimali 

let result = price.toFixed(2);
document.getElementById("price").innerHTML = result;
