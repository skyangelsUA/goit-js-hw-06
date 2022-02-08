const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];  


const ulIngredients = document.querySelector("#ingredients");

const items = ingredients.map(element => {
  const createLi = document.createElement('li');
  createLi.textContent = element;
  createLi.classList.add('item');
  return createLi;
})

ulIngredients.append(...items);