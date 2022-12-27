const form = document.querySelector(".login-form");
// const button = querySelector('button');
// const input = querySelector('input');

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password === "") {
    return alert("Всі поля повинні бути заповнені");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
