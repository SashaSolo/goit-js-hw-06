const nameInputRef = document.querySelector("#validation-input");

const inputBlur = (event) => {
  const { dataset, value } = event.target;
  const requiredLength = Number(dataset.length);
  if (requiredLength === value.length) {
    changeClass("valid", "invalid", event.target);
  } else {
    changeClass("invalid", "valid", event.target);
  }
};
nameInputRef.addEventListener("blur", inputBlur);

function changeClass(add, remove, elem) {
  elem.classList.add(add);
  elem.classList.remove(remove);
}
