// Prendiamo gli elementi dal DOM
const inputNameSurname = document.getElementById('input-name-surname');
const inputKilometres = document.getElementById('user-kilometres');
const inputAge = document.getElementById('user-age');
const buttonGenerate = document.getElementById('button-generate');
const buttonCancel = document.getElementById('button-cancel');

// Controllo scelta
let errorMessage;

if (isNaN(userKilometres) || isNaN(userAge) || inputKilometres <= 0 || inputAge <= 0)
errorMessage = 'Devi inserire un numero valido in entrambi i campi!';

// Calcolare il prezzo totale del viaggio
if (errorMessage) {
    alert(errorMessage);
} else {

    let totalPrice = inputKilometres * 0.21;

    // Sconto del 20% per gli under 18 e del 40% per gli over 65
    let discount20 = totalPrice * 20 / 100;
    let discount40 = totalPrice * 40 / 100;

    let discountPrice;

    if (inputAge < 18) {
        totalPrice = totalPrice - discount20;
    } else if (inputAge > 65) {
        totalPrice = totalPrice - discount40;
    }

    // Prezzo finale (con massimo due decimali)
    totalPrice = totalPrice.toFixed(2);
}