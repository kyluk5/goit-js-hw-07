// debugger;

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createEl = ingredients
  .map((item) => {
    return `<li>${item}</li>`;
  })
  .join("");

const searchUl = document.querySelector("#ingredients");
searchUl.innerHTML = createEl;
console.log(searchUl);
