let cardDetails = {
}


function setName(event) {
    cardDetails.name = event.target.value;
}

function setCardNumber(event) {
    cardDetails.number = event.target.value;
}


function setCVV(event) {
    cardDetails.cvv = event.target.value;
}


function setExpiryMonth(event) {
    cardDetails.expMonth = event.target.value;
}

function setExpiryYear(event) {
    cardDetails.expYear = event.target.value;
}



function submitForm(event) {
    event.preventDefault();
    console.log(cardDetails);
}