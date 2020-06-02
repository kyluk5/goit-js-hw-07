// debugger;
const counterEl = document.querySelector("#counter");
const decrementEl = counterEl.firstElementChild;
const incrementEl = counterEl.lastElementChild;

let counterValue = counterEl.querySelector("#value");
// console.log(counterValue.textContent);

decrementEl.addEventListener("click", decrement);
function decrement() {
  counterValue.textContent -= 1;
}

incrementEl.addEventListener("click", increment);
function increment() {
  counterValue.textContent += 1;
}
