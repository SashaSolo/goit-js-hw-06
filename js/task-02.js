const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");
console.log(listRef);
const listItems = ingredients.map((name) => {
  const itemEl = document.createElement(`li`);
  itemEl.classList.add("item");
  itemEl.textContent = name;
  listRef.append(itemEl);
  return itemEl;
});
listRef.append(...listItems);
