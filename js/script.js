// * Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// * MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati),
// realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

// * MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina
//  in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina
// (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

// * MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.
// Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

// # FORM ELEMENT

const nameSurnameInput = document.getElementById("name-surname");
const distanceInput = document.getElementById("distance");
const rangeAgeSelect = document.getElementById("range-age");
const enterDataForm = document.getElementById("enter-data");
const generatedButton = document.getElementById("generated-button");

// # ascolto invio form
generatedButton.addEventListener("click", function (event) {
  event.preventDefault();
  const nameSurname = nameSurnameInput.value;
  const distance = parseInt(distanceInput.value);
  const rangeAge = rangeAgeSelect.value;

  console.log("Nome e Cognome:  " + nameSurname);
  console.log("Km da percorrere:  " + distance);
  console.log("Fascia d'età:  " + rangeAge);

  let finalPriceTicket = priceTicket(distance, rangeAge);
  console.log("il prezzo del biglietto è:  " + finalPriceTicket);
});

// Funzione calcolo prezzo biglietto

function priceTicket(distance, age) {
  const priceForKm = 0.21;

  const totalPrice = distance * priceForKm;
  const scountMinor = totalPrice * 0.8;
  const scountOver65 = totalPrice * 0.6;
  let finalPrice = 0;

  if (age === "minorenne") {
    finalPrice = scountMinor;
  } else if (age === "over 65") {
    finalPrice = scountOver65;
  } else {
    finalPrice = totalPrice;
  }
  return finalPrice;
}
