function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playGame(playerSelection, computerSelection) {
    playerSelection = prompt("Player's turn:");
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();

    // Computer chooses scissors
    if (playerSelection === "rock" && computerSelection === "scissors") {
        confirm("You won! Rock beats Scissors");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        confirm("You lose! Scissors beats Paper");
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        confirm("Draw! Both players choose Scissors");
    // Computer chooses paper
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        confirm("You lose! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        confirm("Draw! Both players choose Paper");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        confirm("You won! Scissors beat Paper");
    // Computer chooses rock
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        confirm("Draw! Both players choose Rock");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        confirm("You won! Paper beat Rock");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        confirm("You lose! Rock beats Scissors");
    // Something failed
    } else {
        confirm("Write a valid option");
    }
}

playGame();