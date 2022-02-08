const inputReSizing = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const textResizing = () => {
    text.style.fontSize = `${inputReSizing.value}px`;
}

inputReSizing.addEventListener('input', textResizing);