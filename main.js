// Select the .scroll-effect element, its last child, and its first child
const scrollEffectDiv = document.querySelector(".scroll-effect");
const lastChild = scrollEffectDiv.lastElementChild;
const firstChild = scrollEffectDiv.firstElementChild;

// Function to check if the top of the element is at or above the top of the viewport
function isElementTopInView() {
  const rect = scrollEffectDiv.getBoundingClientRect();
  return rect.top <= 0;
}

// Function to check if the bottom of the last child is within the viewport
function isLastChildBottomInView() {
  const rect = lastChild.getBoundingClientRect();
  return rect.bottom <= window.innerHeight;
}

// Function to check if the bottom of the element is at or below the bottom of the viewport
function isElementBottomInView() {
  const rect = scrollEffectDiv.getBoundingClientRect();
  return rect.bottom >= window.innerHeight;
}

// Function to check if the top of the first child is within the viewport
function isFirstChildTopInView() {
  const rect = firstChild.getBoundingClientRect();
  return rect.top >= 0;
}

// Function to handle scroll behavior for the whole page
function handleScroll() {
  if (
    (isElementTopInView() && !isLastChildBottomInView()) ||
    (isElementBottomInView() && !isFirstChildTopInView())
  ) {
    document.body.style.overflow = "hidden"; // Disable scrolling on the document
    scrollEffectDiv.style.overflowY = "scroll"; // Enable scrolling in the div
  } else {
    document.body.style.overflow = ""; // Re-enable scrolling on the document
    scrollEffectDiv.style.overflowY = "hidden"; // Disable scrolling in the div
  }
}

// Function to handle scroll within the .scroll-effect div
function handleDivScroll() {
  if (
    scrollEffectDiv.scrollTop === 0 ||
    scrollEffectDiv.scrollTop + scrollEffectDiv.clientHeight >=
      scrollEffectDiv.scrollHeight
  ) {
    document.body.style.overflow = ""; // Re-enable scrolling on the document
  }
}

// Add scroll event listener to window
window.addEventListener("scroll", handleScroll);

// Add scroll event listener to the .scroll-effect div
scrollEffectDiv.addEventListener("scroll", handleDivScroll);