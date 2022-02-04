'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '😍Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 25;
// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 12;
// console.log(document.querySelector('.guess').value);

//Math.truc for taking number in float
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function(){
    const guess =Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);
//if u enter no number
    if(!guess){
        document.querySelector('.message').textContent = '🙅‍♂️ No Number!';
//for correct number
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = '😍Correct Number!';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
//highscore
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }else if(guess > secretNumber){
//your guessing is greater than the actual one
        if(score > 0){
            document.querySelector('.message').textContent = '📈 Too High!';
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '🌝You loose it!';
            document.querySelector('body').style.backgroundColor = 'red';
        }
//your guessing is less than the actual one       
    }else if(guess < secretNumber){

        if(score > 0){
            document.querySelector('.message').textContent = '📉 Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '🌝You loose it!';
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
});

//to start the game again without loosing the highscore
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent = 'start guessing...';
    

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

