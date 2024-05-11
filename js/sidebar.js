// Sidebar script

document.addEventListener("DOMContentLoaded", function () {
  const sidemenu = document.getElementById("sidemenu");

  // Add event listener to close the sidebar when clicking anywhere on the document
  document.addEventListener("click", function (event) {
    // Check if the clicked element is inside the sidebar
    if (
      !sidemenu.contains(event.target) &&
      sidemenu.classList.contains("active") &&
      event.target.id != "burger-menu"
    ) {
      closemenu();
    }
  });
});

function openmenu() {
  sidemenu.classList.add("active"); // Fixed the typo here
}

function closemenu() {
  sidemenu.classList.remove("active"); // Toggle the "active" class
  event.preventDefault();
}
