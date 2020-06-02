// debugger;

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const create = ingredients.map((item) => document.createElement("li"));

const addText = create.map((item) => (item.textContent = ingredients));

const search = document.querySelector("#ingredients");
search.append(...create);
console.log(search);
