const conctactForm = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

conctactForm.addEventListener('submit', function(event) {
    if(!emailInput.value.includes('@')){
        event.preventDefault();

        errorMessage.textContent = 'Please enter a valid email address.';
    } else {
        errorMessage.textContent = '';
    }
})