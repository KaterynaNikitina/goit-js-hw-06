function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body");
const changeColorButton = document.querySelector(".change-color");
const changingText = document.querySelector(".color");
const color = getRandomHexColor();

changeColorButton.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  const color = getRandomHexColor();
  bodyColor.style.backgroundColor = color;
  changingText.textContent = color;
}
