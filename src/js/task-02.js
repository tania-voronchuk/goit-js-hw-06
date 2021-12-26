const ingredients = [
 'Potatoes',
 'Mushrooms',
 'Garlic',
 'Tomatos',
 'Herbs',
 'Condiments',
];

const ingredientsUlEl = document.getElementById("ingredients");

const elements = ingredients.map(ingredients => {
const ingredientsEl = document.createElement("li");
ingredientsEl.textContent = ingredients;
ingredientsEl.classList.add(".item");
 return ingredientsEl;
});
ingredientsUlEl.append(...elements);
console.log(elements);

