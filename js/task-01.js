const menuCategory = document.getElementById("categories");
const itemsOfCategory = menuCategory.getElementsByClassName("item");

console.log("Number of categories:", itemsOfCategory.length);

for (const item of itemsOfCategory) {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
}
