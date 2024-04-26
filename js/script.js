/* Infinite icons bar script */
var copy = document.querySelector(".icons-slide").cloneNode(true);
document.querySelector(".icons").appendChild(copy);

// Fixed navbar script
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("#nav");
  let navTop;

  function setNavTop() {
    navTop = nav.offsetTop;
    fixedNav(); // Apply fixed position immediately after calculating navTop
  }

  function fixedNav() {
    if (window.scrollY >= navTop) {
      nav.classList.add("fixed");
    } else {
      nav.classList.remove("fixed");
    }
  }

  window.addEventListener("scroll", fixedNav);

  setNavTop(); // Calculate navTop after page load
});

// Smooth scroll script
let navlinks = document.querySelectorAll("#sidemenu a:not(:last-child)");
for (const link of navlinks) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();

  const href = this.getAttribute("href");

  // Check if the href attribute starts with '#'
  if (href.startsWith("#")) {
    const targetElement = document.querySelector(href);

    if (targetElement) {
      const yOffset = -80;
      const y =
        targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  } else {
    // Handle external URL navigation
    window.location.href = href;
  }
}

function getCurrentSection() {
  const sections = document.querySelectorAll("section");

  let currentSection = null;
  let minDistance = Infinity;

  sections.forEach((section) => {
    const distance = Math.abs(section.getBoundingClientRect().top + 300);
    if (distance < minDistance) {
      minDistance = distance;
      currentSection = section;
    }
  });

  return currentSection;
}

function updateActiveLink() {
  const currentSection = getCurrentSection();
  const navLinks = document.querySelectorAll("#nav a[href^='#']");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href").substring(1);

    if (currentSection && currentSection.id === href) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

// Initial update on page load
document.addEventListener("DOMContentLoaded", function () {
  // Call updateActiveLink() once the DOM is fully loaded
  updateActiveLink();
});

// Sidebar script
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-220px";
}
document.addEventListener("DOMContentLoaded", function () {
  let sidemenu = document.getElementById("sidemenu");
});
