window.onload = function() {
    
    // --- NAV MENU TOGGLE (Fixed Logic) ---
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

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
    
    // --- FALLING EFFECTS INTERACTION ---
    
    // 1. Identify which page we are on
    const currentPath = window.location.pathname.split("/").pop();
    const fallingContainer = document.getElementById('falling-effects');

    if (currentPath === 'about.html') {
        // --- ABOUT NATURE: Faint Plant Rain 🌱 (Op. 0.3) ---
        addFallingListener(['🌱', '🌿', '🌴', '🌳'], 0.3); // Set to faint opacity
    } else if (currentPath === 'dangerous.html') {
        // --- DANGEROUS: Hazard Rain ⚠️ (Op. 0.6) ---
        addFallingListener(['⚠️', '🚧', '🐍', '💀'], 0.6); // Slightly more visible
    }

    // 2. The function that adds the listener to every photo item
    function addFallingListener(emojiArray, opacity) {
        // Select all framed photos on the page
        const photos = document.querySelectorAll('.photo-item');
        
        photos.forEach(photo => {
            photo.onclick = function() {
                // Create multiple emojis
                for (let i = 0; i < 20; i++) {
                    createFallingEmoji(emojiArray, opacity);
                }
            };
        });
    }

    // 3. The function that makes a single emoji fall
    function createFallingEmoji(emojiArray, opacity) {
        const emojiElement = document.createElement('div');
        emojiElement.classList.add('falling-emoji');
        
        // Select a random emoji from the array
        const randomEmoji = emojiArray[Math.floor(Math.random() * emojiArray.length)];
        emojiElement.innerText = randomEmoji;
        
        // Set random start positions and speeds
        emojiElement.style.left = Math.random() * 100 + 'vw';
        emojiElement.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5 seconds
        emojiElement.style.animationDelay = Math.random() * 0.5 + 's';
        emojiElement.style.opacity = opacity; // Faint opacity
        emojiElement.style.fontSize = Math.random() * 1 + 1 + 'rem'; // Random size

        fallingContainer.appendChild(emojiElement);

        // Remove the emoji after it finishes falling (to prevent cluttering memory)
        setTimeout(() => {
            emojiElement.remove();
        }, 5000); // Must match maximum animationDuration
    }
};
