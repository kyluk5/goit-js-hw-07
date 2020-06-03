// debugger;
const counterEl = document.querySelector("#counter");
const decrementEl = counterEl.firstElementChild;
const counterValue = counterEl.querySelector("#value");
const incrementEl = counterEl.lastElementChild;

let counter = 0;

decrementEl.addEventListener("click", decrement);
function decrement() {
  counterValue.textContent = counter -= 1;
}

incrementEl.addEventListener("click", increment);
function increment() {
  counterValue.textContent = counter += 1;
}
