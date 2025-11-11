
const numberSlider = document.getElementById('numberSlider');
const selectedNumber = document.getElementById('selectedNumber');
const hint = document.getElementById('hint');
const newGameBtn = document.getElementById('newGameBtn');
const scoreElement = document.getElementById('score');


let targetNumber;
let score = 0;
let maxRange = 100;


function initializeGame() {
    targetNumber = Math.floor(Math.random() * (maxRange + 1));
    numberSlider.max = maxRange;
    hint.textContent = 'Börja gissa ett nummer!';
}


numberSlider.addEventListener('input', function() {
    const guess = parseInt(this.value);
    selectedNumber.textContent = guess;
    

    if (guess === targetNumber) {
        hint.textContent = 'Rätt gissat! Grattis!';
        score++;
        scoreElement.textContent = score;
        maxRange += 100; 
        setTimeout(initializeGame, 1500); 
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

