// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Basic interaction for hero slider dots
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      dots.forEach((d) => d.classList.remove("active"));
      this.classList.add("active");
    });
  });

  console.log("Project initialized and interactions loaded.");
});
