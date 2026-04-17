window.onload = function() {
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {
        menuBtn.onclick = function() {
            // Toggles the class in CSS
            navLinks.classList.toggle("active-menu");
            
            // Updates text
            if (navLinks.classList.contains("active-menu")) {
                menuBtn.innerText = "Hide Menu ✕";
            } else {
                menuBtn.innerText = "Show Menu ☰";
            }
        };
    }
};

// Survival Alert for Dangerous page
function checkSurvival() {
    alert("SURVIVAL TIP: Make noise to avoid surprising bears, and never run from a predator!");
}
