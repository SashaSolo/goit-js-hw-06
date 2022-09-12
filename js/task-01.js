"use strict";

const titleRef = document.querySelectorAll("h2");
console.log("Numbers of categories:", titleRef.length);

const listItems = document.querySelectorAll(".item");
listItems.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  const itemsList = item.querySelectorAll("li");
  console.log("Elements:", itemsList.length);
});
