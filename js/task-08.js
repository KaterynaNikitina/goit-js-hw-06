const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password === "") {
    return alert("Всі поля повинні бути заповнені");
  }

  const userData = {
    Email: email.value,
    Password: password.value,
  };
  console.log(userData);
  event.currentTarget.reset();
}
