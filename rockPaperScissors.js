// console.log('hi');

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  //validate users choice, it should be either rock, paper or scissors
  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors' ||
    userInput === 'bomb'
  )
    return userInput;
  // when user enters invalid response
  else console.log('Invalid Choice, try again!');
};

// console.log(getUserChoice('ballon'))

//function for the computer choice
function getComputerChoice() {
  let returnValue = Math.floor(Math.random() * 3);
  //defining return value representation to match the game options
  switch (returnValue) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

// console.log(getComputerChoice())

//function to determine winner of the game.
const determineWinner = function (userChoice, computerChoice) {
  //when the game is a tie
  if (userChoice === computerChoice) return "It's is a tie";
  //determine the winner of the game
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') return 'Sorry computer won!';
    else return 'Congs you won!';
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') return 'Sorry computer won!';
    else return 'Congs you won!';
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') return 'Sorry computer won!';
    else return 'Congs you won!';
  }

  if (userChoice === 'bomb') return 'Congs you won!';
};
// console.log(determineWinner('rock', 'paper'))

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();

  console.log(userChoice);
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

console.log(playGame());
