// debugger;

const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", addText);
function addText(event) {
  spanEl.textContent = event.target.value;
  if (event.target.value === "") {
    return (spanEl.textContent = "незнакомец");
  }
}
