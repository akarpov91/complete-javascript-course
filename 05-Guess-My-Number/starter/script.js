'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number'; */

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score  = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // when no input
    if (!guess) {
        document.querySelector('.message').textContent = '🚫 No Number Selected';
    // when player wins
    } else if (guess === secretNumber) {
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.number').textContent = guess;
        displayMessage('🎉 Correct Number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = "30rem";
    } else if (guess != secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
            score --;getSelection
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You Lose!');
            document.querySelector('.score').textContent = 0;
        }
    }
});


document.querySelector('.again').addEventListener('click', function() {
    //console.log(secretNumber);
    secretNumber = Math.trunc(Math.random()*20) + 1;
    console.log(secretNumber);
    score  = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.number').textContent = '?';
});