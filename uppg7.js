// Get DOM elements
const numberSlider = document.getElementById('numberSlider');
const selectedNumber = document.getElementById('selectedNumber');
const hint = document.getElementById('hint');
const newGameBtn = document.getElementById('newGameBtn');
const scoreElement = document.getElementById('score');

// Game state variables
let targetNumber;
let score = 0;
let maxRange = 100;

// Initialize the game
function initializeGame() {
    targetNumber = Math.floor(Math.random() * (maxRange + 1));
    numberSlider.max = maxRange;
    hint.textContent = 'Börja gissa ett nummer!';
}

// Update the display when slider moves
numberSlider.addEventListener('input', function() {
    const guess = parseInt(this.value);
    selectedNumber.textContent = guess;
    
    // Check if the guess is correct
    if (guess === targetNumber) {
        hint.textContent = 'Rätt gissat! Grattis!';
        score++;
        scoreElement.textContent = score;
        maxRange += 100; // Increase range for next round
        setTimeout(initializeGame, 1500); // Start new game after 1.5 seconds
    } else if (guess < targetNumber) {
        hint.textContent = 'För lågt! Försök med ett högre nummer.';
    } else {
        hint.textContent = 'för högt! Försök med ett lägre nummer.';
    }
});


newGameBtn.addEventListener('click', function() {
    initializeGame();
});

initializeGame();

