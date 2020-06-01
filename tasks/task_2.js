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

const search = document.querySelector("ul#ingredients");
search.append(...create);
console.log(search);
