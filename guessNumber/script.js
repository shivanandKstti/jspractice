'use strict';
// console.log(document.querySelector('.message').textContent);
/**
 * dom tree stracture
 * start with doc object
 * firdt -> html
 * next html have 2 element
 * manymore
 * 
 */

/**
 * selecting and manupulating elements
 */

// document.querySelector('.message').textContent = "Correct number!";
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value;
// document.querySelector('.guess').value = 23;
/**
 * Eent listener
 */


let secrete = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore;

document.querySelector('.check').addEventListener('click',
    function() {
        const guess = +document.querySelector('.guess').value;
        // console.log(guess === secrete, guess, secrete, typeof guess, typeof secrete);
        if (!guess) {
            document.querySelector('.message').textContent = "No number!";
        } else if (guess === secrete) {
            document.querySelector('.message').textContent = "Correct number!";
            document.querySelector('.number').textContent = secrete;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        } else if (guess !== secrete) {
            if (score > 1) {
                document.querySelector('.message').textContent = guess !== secrete ? "Too high" : "Too low";
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = "You lost the game";
                document.querySelector('.score').textContent = 0;
            }
        }
    }
);

document.querySelector('.again').addEventListener('click',
    function() {
        console.log('click');
        score = 20;
        secrete = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.message').textContent = "Start guessing";
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.score').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    }
)