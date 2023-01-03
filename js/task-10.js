function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector('#controls>input')
const createBtn = document.querySelector("button[data-create");
const destroyBtn = document.querySelector("button[data-destroy");
const inputValue = document.querySelector("#controls>input");
const addDiv = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

// createBoxes(Number(inputNum.value));
const amount = Number(inputNum.value)

function createBoxes(amount) {
  let elements = [];
  for (let i = 1; i <= Number(inputNum.value); i += 1) {
    const divToAdd = document.createElement("div");
    divToAdd.style.width = `${30 + 10 * i}px`;
    divToAdd.style.height = `${30 + 10 * i}px`;
    divToAdd.style.backgroundColor = getRandomHexColor();
    elements.push(divToAdd);
  };
  addDiv.append(...elements);
    console.log(inputNum.value);
    console.log(addDiv);
  
}

function destroyBoxes(num) {
boxes.innerHTML = '';
inputNum.value = '';
}