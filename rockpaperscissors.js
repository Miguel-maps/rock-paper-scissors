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

function game() {
    let playerWins = 0,
    computerWins = 0,
    draws = 0,
    rounds = 0;

    for (let counter = 0; playerWins <= 5 || computerWins <= 5; counter++) {
        playRound();
        rounds++;
        if (playerWins === 5) {
            confirm("You won 5 matches!");
        } else if (computerWins === 5) {
            confirm("Computer won 5 matches!");
        } else {
            confirm(
            `Player wins: ${playerWins}
            Computer wins: ${computerWins}
            Draws: ${draws}
            Rounds played: ${rounds}`);
        }
    }

    function playRound() {
        let playerSelection = prompt("Write your choice:");
        let computerSelection = getComputerChoice();
        playerSelection = playerSelection.toLowerCase();
    
        // Computer chooses scissors
        if (playerSelection === "rock" && computerSelection === "scissors") {
            confirm("You won! Rock beats Scissors");
            playerWins++;
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            confirm("You lose! Scissors beats Paper");
            computerWins++;
        } else if (playerSelection === "scissors" && computerSelection === "scissors") {
            confirm("Draw! Both players choose Scissors");
            draws++;
            // Computer chooses paper
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            confirm("You lose! Paper beats Rock");
            computerWins++;
        } else if (playerSelection === "paper" && computerSelection === "paper") {
            confirm("Draw! Both players choose Paper");
            draws++;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            confirm("You won! Scissors beat Paper");
            playerWins++;
            // Computer chooses rock
        } else if (playerSelection === "rock" && computerSelection === "rock") {
            confirm("Draw! Both players choose Rock");
            draws++;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            confirm("You won! Paper beat Rock");
            playerWins++;
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            confirm("You lose! Rock beats Scissors");
            computerWins++;
            // Something failed
        } else {
            confirm("Write a valid option");
        }
    }

}

game();