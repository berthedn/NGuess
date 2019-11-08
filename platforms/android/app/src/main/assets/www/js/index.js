//Game Values
let min = 1,
    max = 10,
    winningNum = Math.floor(Math.random()*(max-min+1) + min),
    nbGuess = 1;
    

//UI Elements
const game = document.querySelector('#game'),
      btnGuess = document.querySelector('#btnGuess'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Play again even listener
game.addEventListener('mousedown', function (e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

// Listen for guess
btnGuess.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  //Test if the input is between 1 and 10 and if is not empty
  if (isNaN(guess) || guess < min || guess > max){
    message.textContent = `Please enter a number between ${min} and ${max}`;
  }

  //Check if the player won
  if (guess === winningNum){
    //stop the input to take values
  guessInput.disabled = true;

  //Win Message with the number of guess.
  message.textContent = `${winningNum} is correct, it tooks you ${nbGuess}, YOU WIN!`;

  //Turn the button guess to a Play Again button
  btnGuess.value = 'Play Again';
  btnGuess.className += 'play-again';
  }
  else{
      //Game is still running

      //Adding up the number of guess to display when won
      nbGuess = nbGuess+1;
      
      //reset the input value
      guessInput.value = '';
      
      //Let know the player that the number was not correct
      message.textContent = `${guess} is not correct`;
    }
  
});



