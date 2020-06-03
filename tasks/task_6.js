const validationInput = document.querySelector("#validation-input");
// console.dir(validationInput);

validationInput.addEventListener("change", validationFn);
function validationFn(even) {
  // if (even.target.selectionStart >= even.target.dataset.length) {
  //   validationInput.classList.add("valid");
  //   validationInput.classList.remove("invalid");
  // } else validationInput.classList.add("invalid");
  // ======================================================
  even.target.selectionStart >= even.target.dataset.length
    ? validationInput.classList.add("valid") ||
      validationInput.classList.remove("invalid")
    : validationInput.classList.add("invalid");
}
