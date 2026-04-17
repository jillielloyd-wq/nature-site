window.onload = function() {
    // 1. SHOW/HIDE MENU LOGIC
    const toggleBtn = document.getElementById("toggleBtn");
    const navMenu = document.getElementById("navMenu");

    if (toggleBtn) {
        toggleBtn.onclick = function() {
            if (navMenu.classList.contains("show")) {
                navMenu.classList.remove("show");
                toggleBtn.innerText = "Show Menu ☰";
            } else {
                navMenu.classList.add("show");
                toggleBtn.innerText = "Hide Menu ✕";
            }
        };
    }

    // 2. SAFETY ALERT (Home Page)
    const alertBtn = document.getElementById("alertBtn");
    if (alertBtn) {
        alertBtn.onclick = function() {
            alert("Always respect the wild! 🌲");
        };
    }
};

// 3. SURVIVAL TIP (Dangerous Page)
function checkSurvival() {
    const message = document.getElementById("survivalMessage");
    message.innerHTML = "SURVIVAL TIP: Never run from a predator. Stand your ground and look big!";
    message.style.color = "white";
    message.style.background = "rgba(0,0,0,0.5)";
    message.style.padding = "10px";
    message.style.borderRadius = "10px";
}
