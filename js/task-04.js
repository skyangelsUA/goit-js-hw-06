const decrimentBtn = document.querySelector("[data-action='decrement']");
const inrementBtn = document.querySelector("[data-action='increment']");

let counterValue = document.querySelector('#value');;



const increment = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
  
};
const decrement = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
  
};

inrementBtn.addEventListener("click", increment);
decrimentBtn.addEventListener("click", decrement);