window.onload = function() {
    // --- FEATURE 1: SHOW/HIDE MENU LOGIC ---
    const toggleBtn = document.getElementById("toggleBtn");
    const navMenu = document.getElementById("navMenu");

    if (toggleBtn && navMenu) {
        toggleBtn.onclick = function() {
            // Check if the menu is currently shown
            if (navMenu.classList.contains("show")) {
                navMenu.classList.remove("show");
                toggleBtn.innerText = "Show Menu ☰";
            } else {
                navMenu.classList.add("show");
                toggleBtn.innerText = "Hide Menu ✕";
            }
        };
    }

    // --- FEATURE 2: HOME PAGE ALERT ---
    const alertBtn = document.getElementById("alertBtn");
    if (alertBtn) {
        alertBtn.onclick = function() {
            alert("Always respect the wild! Stay on the marked trails. 🌲");
        };
    }

    // --- FEATURE 3: HELP PAGE PLEDGE ---
    const pledgeBtn = document.getElementById("pledgeBtn");
    const pledgeMessage = document.getElementById("pledgeMessage");
    
    if (pledgeBtn) {
        pledgeBtn.onclick = function() {
            pledgeMessage.innerHTML = "🌳 Thank you! You are now an official Protector of the Wild.";
            pledgeBtn.style.display = "none"; // Hide button after clicking
        };
    }
};

// --- FEATURE 4: DANGEROUS PAGE SURVIVAL TIP ---
function checkSurvival() {
    const message = document.getElementById("survivalMessage");
    if (message) {
        message.innerHTML = "SURVIVAL TIP: Never run from a predator. Stand your ground, make noise, and look as big as possible!";
        message.style.background = "rgba(0,0,0,0.6)";
        message.style.padding = "15px";
        message.style.borderRadius = "10px";
    }
}
