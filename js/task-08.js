const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", (e) => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Not all fields are filled!");
  }

  console.log(`email: ${email.value}, Password: ${password.value}`);
  e.currentTarget.reset();
});
