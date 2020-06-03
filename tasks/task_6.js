const validationInput = document.querySelector("#validation-input");
// console.dir(validationInput);

validationInput.addEventListener("change", validationFn);
function validationFn(even) {
  if (even.target.selectionStart < even.target.dataset.length) {
    validationInput.classList.add("invalid");
  } else if (even.target.selectionStart > even.target.dataset.length) {
    validationInput.classList.add("valid");
  }
}
