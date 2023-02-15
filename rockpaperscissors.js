let playerWins = 0;
let computerWins = 0;
let drawCounter = 0;
let rounds = 0;

function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    // Computer chooses scissors
    if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You won! Rock beats Scissors");
        playerWins++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("You lose! Scissors beats Paper");
        computerWins++;
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        alert("Draw! Both players choose Scissors");
        drawCounter++;
        // Computer chooses paper
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You lose! Paper beats Rock");
        computerWins++;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        alert("Draw! Both players choose Paper");
        drawCounter++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You won! Scissors beat Paper");
        playerWins++;
        // Computer chooses rock
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        alert("Draw! Both players choose Rock");
        drawCounter++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You won! Paper beat Rock");
        playerWins++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("You lose! Rock beats Scissors");
        computerWins++;
    }
    rounds++;
    updateAllCounters();
}

// Update every counter
function updateAllCounters() {
    updateCounter('totalRounds', 'Total Rounds', rounds);
    updateCounter('playerScore', 'Player Score', playerWins);
    updateCounter('computerScore', 'Computer Score', computerWins);
    updateCounter('draws', 'Draws', drawCounter);
}

// Update selected counter
function updateCounter(elementId, name, count) {
    const counterElement = document.querySelector(`#${elementId}`);
    counterElement.textContent = `${name}: ${count}`;
  }  

/*

DOM

*/

// Player buttons
const playerButtonRock = document.querySelector('#rock');
const playerButtonPaper = document.querySelector('#paper');
const playerButtonScissors = document.querySelector('#scissors');

playerButtonRock.addEventListener('click', () => {
    playRound("rock");
});

playerButtonPaper.addEventListener('click', () => {
    playRound("paper");
});

playerButtonScissors.addEventListener('click', () => {
    playRound("scissors");
});