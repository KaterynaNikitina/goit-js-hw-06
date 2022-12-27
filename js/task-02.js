const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");

const makelistOfIngredients = (ingredients) => {
  return ingredients.map((ingredient) => {
    const listItem = document.createElement("li");
    listItem.classList.add("item");
    listItem.textContent = ingredient;

    return listItem;
  });
};

const listOfItems = makelistOfIngredients(ingredients);
listOfIngredients.append(...listOfItems);

console.log(listOfIngredients);
