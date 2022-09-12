const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

nameInputRef.addEventListener("input", (event) => {
  const { value } = event.target;
  nameOutputRef.textContent = value ? value : "Anonymous";
});
