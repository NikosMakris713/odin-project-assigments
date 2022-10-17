//  Declare initial values
let playerScore = 0;
let computerScore = 0;
let roundResult = '';
const signs = Array.from(document.getElementsByClassName('sign-button'));
const newGameButton = document.getElementById('new-game-button');

// Create a fucntion which  assigns to the computer a rondom choice between rock,paper or scissors
const getComputerSelection = () => {
  const computerOptions = ['✊', '✋', '✌'];
  const computerSelection = computerOptions[Math.floor(Math.random() * 3)];
  return computerSelection;
};

// Create function which sets the rules of the game
const gameRules = (playerSelection, computerSelection) => {
  if (playerScore < 3 && computerScore < 3) {
    if (
      (playerSelection === '✊' && computerSelection === '✌')
                  || (playerSelection === '✋' && computerSelection === '✊')
                  || (playerSelection === '✌' && computerSelection === '✋')
    ) {
      playerScore += 1;
      document.getElementById('player-score').innerHTML = playerScore;
      roundResult = 'You have won this round';
    } else if (playerSelection === computerSelection) {
      roundResult = 'This round was a draw';
    } else {
      computerScore += 1;
      document.getElementById('computer-score').innerHTML = computerScore;
      roundResult = 'You have lost this round';
    }
    if (computerScore === 3) {
      document.getElementById('score-update').innerHTML = 'You suck!';
    } else if (playerScore === 3) {
      document.getElementById('score-update').innerHTML = 'Congratulations, you won!';
    } else {
      document.getElementById('score-update').innerHTML = roundResult;
    }
  }
};

//  Create function which gets the player choice and runs a round of the game
signs.forEach((sign) => {
  sign.addEventListener('click', (event) => {
    const playerSelection = sign.innerHTML;
    gameRules(playerSelection, getComputerSelection());
    return event;
  });
});

// Create a function which restarts the game
const newGame = () => {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('player-score').innerHTML = 0;
  document.getElementById('computer-score').innerHTML = 0;
  document.getElementById('score-update').innerHTML = 'First to three wins';
};
newGameButton.addEventListener('click', newGame);
