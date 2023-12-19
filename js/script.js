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