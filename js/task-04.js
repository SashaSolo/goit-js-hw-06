let counterValue = 0;

const counterRef = document.querySelector("#counter");
const valueRef = document.querySelector("#value");

const btnDec = document.querySelector('button[data-action="decrement"]');
btnDec.addEventListener("click", () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});
const btnInc = document.querySelector('button[data-action="increment"]');
btnInc.addEventListener("click", () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
