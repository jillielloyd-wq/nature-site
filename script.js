document.addEventListener("DOMContentLoaded", function() {
    
    // 1. SELECT THE ELEMENTS
    const toggleBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    // 2. THE CLICK FUNCTION
    if (toggleBtn && navLinks) {
        toggleBtn.onclick = function() {
            // This toggles the 'active-menu' class from the CSS
            navLinks.classList.toggle("active-menu");

            // Change the button text based on state
            if (navLinks.classList.contains("active-menu")) {
                toggleBtn.innerText = "Hide Menu ✕";
            } else {
                toggleBtn.innerText = "Show Menu ☰";
            }
        };
    }
});
