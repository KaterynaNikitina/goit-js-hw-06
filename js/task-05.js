const nameInput = document.querySelector("#name-input");
const greetingText = document.querySelector("#name-output");

nameInput.addEventListener("input", onNameInput);

function onNameInput(event) {
  event.currentTarget.value
    ? (greetingText.textContent = event.currentTarget.value)
    : (greetingText.textContent = "Anonymous!");
}
