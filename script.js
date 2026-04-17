window.onload = function() {
    // --- 1. THE SHOW/HIDE MENU LOGIC ---
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

    // --- 2. HOME PAGE (Safety Alert) ---
    const alertBtn = document.getElementById("alertBtn");
    if (alertBtn) {
        alertBtn.onclick = function() {
            alert("⚠️ Nature is a powerful force. Always stay on marked trails!");
        };
    }

    // --- 3. DANGEROUS PAGE (Snake & Bear facts) ---
    const snakeToggle = document.getElementById("snakeToggle");
    const snakeInfo = document.getElementById("snakeInfo");

    if (snakeToggle && snakeInfo) {
        snakeToggle.onclick = function() {
            if (snakeInfo.style.display === "none") {
                snakeInfo.style.display = "block";
                snakeToggle.innerText = "Hide Snake Facts";
            } else {
                snakeInfo.style.display = "none";
                snakeToggle.innerText = "Show Lethal Snake Facts";
            }
        };
    }

    // --- 4. HELP PAGE (Pledge & Planet message) ---
    const pledgeBtn = document.getElementById("pledgeBtn");
    const pledgeMessage = document.getElementById("pledgeMessage");

    if (pledgeBtn && pledgeMessage) {
        pledgeBtn.onclick = function() {
            pledgeMessage.innerHTML = "🌎 Thank you! You have signed the pledge to protect the wild.";
            pledgeBtn.style.display = "none"; // Hide button
        };
    }
};

// --- DANGEROUS PAGE: Survival Tip Response ---
function checkSurvival() {
    const message = document.getElementById("survivalMessage");
    if (message) {
        message.innerHTML = "SURVIVAL TIP: Never run from a predator. Stand your ground, make noise, and look as big as possible!";
        message.style.background = "rgba(0,0,0,0.6)";
        message.style.padding = "15px";
        message.style.borderRadius = "10px";
        message.style.color = "white";
    }
}
