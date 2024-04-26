const navbar = document.getElementById("nav");
let prevScrollPos = window.scrollY;

function handleScroll() {
  let currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-70px"; // Adjust this value to hide the navbar completely
  }
  prevScrollPos = currentScrollPos;
}
if (
  window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches ||
  window.matchMedia("(max-width: 768px)").matches
) {
  window.addEventListener("scroll", handleScroll);
} else {
  // Remove event listener for other screen sizes
  window.removeEventListener("scroll", handleScroll);
}
