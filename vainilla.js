const barra = document.getElementById("barra");
const pixeles = document.getElementById("pixeles");

// Update the position of "barra" based on the scroll position
function updateBarPositions() {
  const scrollY = window.scrollY;
  const barraBottom = barra.getBoundingClientRect().bottom;
  const viewportHeight = window.innerHeight;

  if (scrollY <= 500 && barraBottom !== viewportHeight) {
    barra.style.top = (scrollY * 4) + "px";

    // Check if the bottom of the barra is at the bottom of the viewport
    if (barraBottom === viewportHeight) {
      // Barra has reached the bottom of the viewport
      console.log("Barra reached the bottom!");
    }
  }

  pixeles.innerHTML = scrollY;
}

// Attach the update function to the scroll event
document.addEventListener("scroll", updateBarPositions);

// Initial call to set the initial position
updateBarPositions();