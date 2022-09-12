function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const boxElements = document.querySelector("#boxes");
// const amountElements = document.querySelector("#controls input");
// const createBtn = document.querySelector("[data-create]");
// const clearBtn = document.querySelector(`[data-destroy]`);

// createBtn.addEventListener("click", createBoxes);
// clearBtn.addEventListener("click", destroyBoxes);

// let amount = 0;

// amountElements.addEventListener("input", (e) => {
//   e.currentTarget.value;
// });

// const markupTable = [];

// for (let i = 1; i <= amountElements.value; i += 1) {
//   const markupElements = `<div style="background-color: ${getRandomHexColor()}
//     ;width: ${30 + i * 10}px; height: ${30 + i * 10}px"></div>`;
//   markupTable.push(markupElements);
// }

// boxElements.innerHTML = markupTable.join("");
