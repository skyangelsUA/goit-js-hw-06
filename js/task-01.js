const numberOfCategories = document.querySelectorAll(".item")

console.log(`Number of categories ${numberOfCategories.length}`)


numberOfCategories.forEach(function (category) {
console.log('Category: ', category.firstElementChild.textContent);
console.log('Element: ', category.lastElementChild.children.length);
});
