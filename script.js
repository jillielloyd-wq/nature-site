window.onload = function() {
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {
        menuBtn.onclick = function() {
            navLinks.classList.toggle("active-menu");
            if (navLinks.classList.contains("active-menu")) {
                menuBtn.innerText = "Hide Menu ✕";
            } else {
                menuBtn.innerText = "Show Menu ☰";
            }
        };
    }
};

function checkSurvival() {
    alert("Pro Tip: If you see a bear, don't run! Back away slowly and speak in a calm, firm voice.");
}
