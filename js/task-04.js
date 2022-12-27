let counterValue = 0;

const incrementCountButton = document.querySelector(
  'button[data-action="increment"]'
);
const decrementCountButton = document.querySelector(
  '[data-action="decrement"]'
);
const counter = document.querySelector("#value");

incrementCountButton.addEventListener("click", onIncrementBtnClick);
decrementCountButton.addEventListener("click", onDecrementBtnClick);

function onIncrementBtnClick(event) {
  counterValue += 1;
  counter.textContent = counterValue;
}

function onDecrementBtnClick(event) {
  counterValue -= 1;
  counter.textContent = counterValue;
}
