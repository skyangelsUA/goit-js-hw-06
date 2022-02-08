const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');


const input = () => {
    if (inputElement.value.length > 0) {
        outputElement.textContent = inputElement.value;
       
    } else {
        outputElement.textContent = 'Anonymous';
    }

 }

inputElement.addEventListener('input', input);