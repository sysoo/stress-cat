let petCount = 0;
let stressLevel = 100;

const cat = document.getElementById('cat');
const counter = document.getElementById('counter');
const stressDisplay = document.getElementById('stress-level');

cat.addEventListener('click', () => {
    petCount++;
    stressLevel = Math.max(0, stressLevel - 5); // Reduce stress
    
    // Update UI
    counter.textContent = petCount;
    stressDisplay.textContent = `${stressLevel}%`;
    
    // Change cat state
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
    
    // Animation
    cat.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cat.style.transform = 'scale(1)';
    }, 100);
});
