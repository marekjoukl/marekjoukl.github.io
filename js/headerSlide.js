function slideIn() {
  const navRight = document.querySelector("nav ul");
  const navLeft = document.querySelector("nav > a");
  const imgRight = document.querySelector("#header-content img");
  const textLeft = document.querySelector("#header-left h1");
  const listLeft = document.querySelector("#header-content ul");
  const textLeftPosition = listLeft.getBoundingClientRect();

  if (window.innerWidth > 1024) {
    if (
      textLeftPosition.top < window.innerHeight &&
      textLeftPosition.bottom >= 0
    ) {
      navRight.classList.add("slide-right");
      navLeft.classList.add("slide-left");
      imgRight.classList.add("slide-right");
      textLeft.classList.add("slide-left");
      listLeft.classList.add("slide-left");
    } else {
      imgRight.classList.remove("slide-right");
      textLeft.classList.remove("slide-left");
      listLeft.classList.remove("slide-left");
    }
  }
}

// Call slideIn function when the page reloads
document.addEventListener("DOMContentLoaded", slideIn);

// Keep track of previous scroll position
let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
  const currentScrollPos = window.scrollY;

  // Check if scrolling direction is changing from downwards to upwards
  if (currentScrollPos < prevScrollPos) {
    slideIn();
  }

  // Update previous scroll position
  prevScrollPos = currentScrollPos;
});
