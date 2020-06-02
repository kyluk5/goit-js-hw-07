// debugger;

const categories = document.querySelector("#categories");
const itemsEl = categories.querySelectorAll(".item");
// console.log(itemsEl);

itemsEl.forEach((li) => {
  console.log(`Категория: ${li.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${li.lastElementChild.childElementCount}`);
});
