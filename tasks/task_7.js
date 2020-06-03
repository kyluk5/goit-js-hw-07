const fontSize = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
// console.dir(spanText);
fontSize.addEventListener("input", changeSize);
function changeSize(even) {
  spanText.style.fontSize = `${event.srcElement.valueAsNumber}px`;
}
