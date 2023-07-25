const closeBtn = document.querySelector(".close_btn");
const rulesBtn = document.getElementsByClassName("rules_btn")[0]; // Use [0] to get the first element in the collection
const rulesModule = document.getElementsByClassName("rules_module")[0]; // Use [0] to get the first element in the collection

closeBtn.addEventListener("click", function close() {
  rulesModule.style.display = 'none';
});
rulesBtn.addEventListener("click", function open(event) {
  rulesModule.style.display = 'grid';
  event.stopPropagation();
})
document.addEventListener('click', function(event) {
  // Check if the clicked target is outside the grid box
  if (!rulesModule.contains(event.target)) {
    // Perform the desired action, for example, hiding the grid box
    rulesModule.style.display = 'none';
  }
});