'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage("🚨 No number!");
    } else if (guess === secretNumber) {
        displayMessage("🎉 Correct number!");
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem";
        if (score > highScore) {
            highScore = score;
            console.log('reset');
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        displayMessage(guess > secretNumber ? "📈 Too high" : "📉 Too low");
        if (score > 1) {
            document.querySelector('.score').textContent = --score;
        } else {
            displayMessage("💣 You lost the game");
            document.querySelector('.score').textContent = 0;
        }
    }
});


const resetGame = function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    displayMessage("Start guessing...");
    document.querySelector('.guess').value = "";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('body').style.backgroundColor = "#222";
};
document.querySelector('.again').addEventListener('click', resetGame);
