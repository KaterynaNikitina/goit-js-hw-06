function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create");
const addDiv = document.querySelector("#boxes");
const destroyBtn = document.querySelector("button[data-destroy");
const inputValue = document.querySelector("#controls>input");
let amount = 0;

createBtn.addEventListener("click", getInputValue);
destroyBtn.addEventListener("click", destroyBoxes);

function getInputValue(event) {
  amount = Number(inputValue.value);
  console.log(amount);
  createBoxes(amount);
  function createBoxes(num) {
    for (let i = 1; i <= amount; i += 1) {
      const divToAdd = document.createElement("div");
      divToAdd.style.width = `${30 + 10 * i}px`;
      divToAdd.style.height = `${30 + 10 * i}px`;
      divToAdd.style.backgroundColor = getRandomHexColor();

      addDiv.append(divToAdd);
    }
  }
  console.log(addDiv);
}

function destroyBoxes() {
  const numberOfChildren = addDiv.children.length;
  for (let i = 1; i <= numberOfChildren; i += 1);
  addDiv.lastChild.remove();
}

// оптимизировать добавление всех новых дивов за одну операцию и упростить их удаление