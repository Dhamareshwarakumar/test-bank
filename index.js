let accountNo = document.querySelector('#account-no');
let address = document.querySelector('#address');
let submitBtn = document.querySelector('#submit');
let form = document.querySelector('#form');

form.addEventListener('submit', e => {
    e.preventDefault();

    // Account Number Validation
    if (accountNo.value.length !== 16) {
        alert('Account No Should be 16 digits');
        return;
    }

    // Address Validation
    if (address.value.length == 0){
        alert("Address should not be empty");
        return;
    }

    form.submit();
});