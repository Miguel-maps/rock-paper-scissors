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
        if (playerWins === 5) {
            alert("You won 5 matches!");
            break;
        } else if (computerWins === 5) {
            alert("Computer won 5 matches!");
            break;
        } else {
            alert(`Player wins: ${playerWins}
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
            alert("You won! Rock beats Scissors");
            playerWins++;
            rounds++;
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            alert("You lose! Scissors beats Paper");
            computerWins++;
            rounds++;
        } else if (playerSelection === "scissors" && computerSelection === "scissors") {
            alert("Draw! Both players choose Scissors");
            draws++;
            rounds++;
            // Computer chooses paper
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            alert("You lose! Paper beats Rock");
            computerWins++;
            rounds++;
        } else if (playerSelection === "paper" && computerSelection === "paper") {
            alert("Draw! Both players choose Paper");
            draws++;
            rounds++;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            alert("You won! Scissors beat Paper");
            playerWins++;
            rounds++;
            // Computer chooses rock
        } else if (playerSelection === "rock" && computerSelection === "rock") {
            alert("Draw! Both players choose Rock");
            draws++;
            rounds++;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            alert("You won! Paper beat Rock");
            playerWins++;
            rounds++;
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            alert("You lose! Rock beats Scissors");
            computerWins++;
            rounds++;
            // Something failed
        } else {
            alert("Write a valid option");
        }
    }

}

game();