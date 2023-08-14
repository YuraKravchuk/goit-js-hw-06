const validationInput = document.querySelector('#validation-input');
const dataLength = document.querySelector('[data-length="6"]');

validationInput.addEventListener('blur', onValidationInputBlur);

function onValidationInputBlur() {
    if (Number(validationInput.value.length) === Number(dataLength.dataset.length)) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid'); 
    }
    else if (Number(validationInput.value.length) === 0) {
            validationInput.classList.remove('valid');
        validationInput.classList.remove('invalid'); 
    }
    else if (Number(validationInput.value.length) !== Number(dataLength.dataset.length) && Number(validationInput.value.length) !== 0) {
            validationInput.classList.remove('valid');
        validationInput.classList.add('invalid'); 
    }
}
