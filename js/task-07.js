const fontSizeController = document.querySelector("#font-size-control");
const changingTextSize = document.querySelector("#text");

fontSizeController.addEventListener("input", onControllerInput);

function onControllerInput(event) {
  return (changingTextSize.style.fontSize = event.currentTarget.value + "px");
}

// function onControllerInput(event) {
//     return (changingTextSize.style.fontSize = fontSizeController.value + "px");
//   }
