window.onload = function() {
    
    // 1. Target the button and the menu by ID
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    // 2. Add the click function
    if (menuBtn && navLinks) {
        menuBtn.onclick = function() {
            // Toggles the 'active-menu' class from the CSS
            navLinks.classList.toggle("active-menu");

            // Changes button text based on state
            if (navLinks.classList.contains("active-menu")) {
                menuBtn.innerText = "Hide Menu ✕";
            } else {
                menuBtn.innerText = "Show Menu ☰";
            }
        };
    }
    
    // 3. Highlight the active page link (optional)
    const currentPath = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
};
