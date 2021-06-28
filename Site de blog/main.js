let toggle = document.querySelector(".toggle-button");
let collapse = document.querySelectorAll(".collapse");

toggle.addEventListener("click", function () {
  collapse.forEach((col) => col.classList.toggle("collapse-toggle"));
});
