// debugger;

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
// ===================================
// const createEl = ingredients
//   .map((item) => {
//     return `<li>${item}</li>`;
//   })
//   .join("");

// const searchUl = document.querySelector("#ingredients");
// searchUl.innerHTML = createEl;
// console.log(searchUl);
// ===================================
const createRef = ingredients.map((item) => {
  let li = document.createElement("li");
  li.textContent = item;
  return li;
});

const searchUl = document.querySelector("#ingredients");
searchUl.append(...createRef);
console.log(searchUl);
