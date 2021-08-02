'use strict';

let score = 20;
let highscore= 0;
let secretNumber = Math.trunc(Math.random() * 20) +1;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        displayMessage( '⛔ No number !'); 
    }
    else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        displayMessage( '🎉 Correct number');
        document.querySelector('body').style.backgroundColor = '#60b347'
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
          }
        
    }
    else if(guess !== secretNumber){
        if(score >1){
            displayMessage(guess > secretNumber ? 'number too high !!' : 'number too low !!' ); 
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage('you lost the game'); 
            document.querySelector('.score').textContent = 0
        }
        
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score =20;
    secretNumber = Math.trunc(Math.random() * 20) +1;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value= '';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.score').textContent = score;

})

function displayMessage(message){
    document.querySelector('.message').textContent = message
}
