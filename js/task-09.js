function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const bodyChange = document.querySelector('body');
const buttonColor = document.querySelector('.change-color');
const color = document.querySelector('.color');

buttonColor.addEventListener('click', () => {
  bodyChange.style.backgroundColor = getRandomHexColor();
  color.textContent = bodyChange.style.backgroundColor;
});