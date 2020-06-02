// debugger;

const inputEl = document.querySelector("#name-input");
// console.log(inputEl);
inputEl.addEventListener("input", addText);

function addText(event) {
  //   console.log(event.currentTarget.value);
  spanEl.textContent = event.currentTarget.value;
}

const spanEl = document.querySelector("#name-output");
// console.log(spanEl);
