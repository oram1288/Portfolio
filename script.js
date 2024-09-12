// Function that will allow the webpage to create a hamburger style drop down menu in screen sizes less then 1200px

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function that will allow the webpage to have a sliding section to view all my projects

document.addEventListener("DOMContentLoaded", function () {
  const projectsSection = document.getElementById("projects");
  const triggerButton = document.getElementById("slide-trigger"); // Assume there's a button with this ID

  triggerButton.addEventListener("click", function () {
    projectsSection.classList.toggle("slide-in");
  });
});
