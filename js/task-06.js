const validationInput = document.querySelector('#validation-input');


const checkNumbers = () => {
    if (validationInput.value.length === Number(validationInput.dataset.length)) {
        validationInput.classList.remove(`invalid`);
        validationInput.classList.add(`valid`);
        return;
    } else {
        validationInput.classList.remove(`valid`);
        validationInput.classList.add(`invalid`);
    };
}

validationInput.addEventListener('blur', checkNumbers); 