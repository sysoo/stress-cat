document.addEventListener('DOMContentLoaded', () => {
    const cat = document.getElementById('cat');
    const counter = document.getElementById('counter');
    const stressDisplay = document.getElementById('stress-level');
    const stressBar = document.getElementById('stress-bar');
    
    let petCount = 0;
    let stressLevel = 100;
    
    // Preload sound
    const purrSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-cat-purring-119.mp3');
    
    cat.addEventListener('click', () => {
        // Update stats
        petCount++;
        stressLevel = Math.max(0, stressLevel - 5);
        
        // Play sound
        purrSound.currentTime = 0; // Reset sound if already playing
        purrSound.play();
        
        // Update UI
        counter.textContent = petCount;
        stressDisplay.textContent = `${stressLevel}%`;
        stressBar.style.width = `${stressLevel}%`;
        
        // Change cat mood
        if (stressLevel > 50) {
            cat.className = 'cat-neutral';
            cat.textContent = '🐱';
        } else if (stressLevel > 10) {
            cat.className = 'cat-happy';
            cat.textContent = '😸';
        } else {
            cat.className = 'cat-super-happy';
            cat.textContent = '😻';
        }
        
        // Bounce animation
        cat.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cat.style.transform = 'scale(1)';
        }, 100);
    });
    
    // Initialize stress bar
    stressBar.style.width = '100%';
});
