// Prendiamo gli elementi dal DOM
const inputNameSurname = document.getElementById('input-name-surname');
const inputKilometres = document.getElementById('user-kilometres');
const inputAge = document.getElementById('user-age');
const buttonGenerate = document.getElementById('button-generate');
const buttonCancel = document.getElementById('button-cancel');
const resultPrice = document.getElementById('result-price');
const resultNameSurname = document.getElementById('result-name-surname');
const numberTrain = document.getElementById('number-train');
const numberTicket = document.getElementById('number-ticket');
let typeTicket = document.getElementById('type-ticket');

// Mi metto in ascolto del click sul bottone
buttonGenerate.addEventListener('click', function(){
    // Recupero il valore dall'input 
    const userNameSurname = inputNameSurname.value.trim();
    const userNumberKilometres = parseInt(inputKilometres.value);
    const userNumberAge = parseInt(inputAge.value); 
    const randomNumberTrain = Math.floor(Math.random() * 15) + 1;
    const randomNumberTicket = Math.floor(Math.random() * 99999) +1;

    // Controllo scelta
    let errorMessage;

    if ((!userNameSurname) || isNaN(userNumberKilometres) || isNaN(userNumberAge) || userNumberKilometres <= 0 || userNumberAge <= 0)
    errorMessage = 'Devi inserire un numero valido in entrambi i campi!';

    // Calcolare il prezzo totale del viaggio
    if (errorMessage) {
        alert(errorMessage);
    } else {

        typeTicket.innerText = 'Biglietto Standard';

        let totalPrice = userNumberKilometres * 0.21;

        // Sconto del 20% per gli under 18 e del 40% per gli over 65
        let discount20 = totalPrice * 20 / 100;
        let discount40 = totalPrice * 40 / 100;

        let discountPrice;

        if (userNumberAge < 18) {
            totalPrice = totalPrice - discount20;
            typeTicket.innerText = 'Biglietto Junior';
        } else if (userNumberAge > 65) {
            totalPrice = totalPrice - discount40;
            typeTicket.innerText = 'Biglietto Senior';
        }

        // Prezzo finale (con massimo due decimali)
        totalPrice = totalPrice.toFixed(2);

        resultPrice.innerText = '€' + totalPrice;
        resultNameSurname.innerText = userNameSurname;
        numberTrain.innerText = randomNumberTrain;
        numberTicket.innerText = randomNumberTicket;
    }    
})


// Aggancio il listener al click sul reset button
buttonCancel.addEventListener('click', function(){

    inputNameSurname.value = '';
    inputKilometres.value = '';
    inputAge.value = '';  
    resultPrice.classList.add('d-none'); 
    resultNameSurname.classList.add('d-none');      
    numberTrain.classList.add('d-none');      
    numberTicket.classList.add('d-none'); 
    typeTicket.classList.add('d-none');          
})
