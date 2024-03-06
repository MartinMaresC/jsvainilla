const barra = document.getElementById("barra");
    const barra2 = document.getElementById("barra2");
    const pixeles = document.getElementById("pixeles");

    // Update the position of "barra" based on the scroll position
    function updateBarPositions() {
      if (window.scrollY <= 1500){
        barra.style.marginTop = (window.scrollY/5) + "%";
      //barra2.style.top = (window.scrollY + 50) + "px"; // Adjust for the height of barra
      }
      pixeles.innerHTML = window.scrollY;
    }

    // Attach the update function to the scroll event
    document.addEventListener("scroll", updateBarPositions);

    // Initial call to set the initial position
    updateBarPositions();