let playerWins = 0;
let computerWins = 0;
let drawCounter = 0;
let rounds = 0;

function getComputerChoice() {
    const cChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    computerButton.innerHTML = `<img src="images/${cChoice}_inv.png" alt="${cChoice}"></img>`;
    return cChoice;
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    // Computer chooses scissors
    if (playerSelection === "rock" && computerSelection === "scissors") {
        results.innerHTML = "You won!";
        addVictory(playerButtonrock, computerButton);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        results.innerHTML = "You lose!";
        addDefeat(playerButtonPaper, computerButton);
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        results.innerHTML = "Draw!";
        addDraw();
        // Computer chooses paper
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        results.innerHTML = "You lose!";
        addDefeat(playerButtonrock, computerButton);
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        results.innerHTML = "Draw!";
        addDraw();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        results.innerHTML = "You won!";
        addVictory(playerButtonScissors, computerButton);
        // Computer chooses rock
    } else if (playerSelection === computerSelection) {
        results.innerHTML = "Draw!";
        addDraw();
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        results.innerHTML = "You won!";
        addVictory(playerButtonPaper, computerButton);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        results.innerHTML = "You lose!";
        addDefeat(playerButtonScissors, computerButton);
    }
    rounds++;
    updateAllCounters();
    checkForEnd();
}

function checkForEnd() {
    if (playerWins >= 5 || computerWins >= 5) {
      alert("Game over! Play again?");
      playerWins = 0;
      computerWins = 0;
      drawCounter = 0;
      rounds = 0;
      buttons.forEach(button => button.removeAttribute('class'));
      computerButton.innerHTML = "";
      results.innerHTML = "Pick an option below";
      updateAllCounters();
    }
}

// Update every counter
function updateAllCounters() {
    updateCounter('totalRounds', rounds);
    updateCounter('playerScore', playerWins);
    updateCounter('computerScore', computerWins);
    updateCounter('draws', drawCounter);
}

// Update selected counter
function updateCounter(elementId, count) {
    const counterElement = document.querySelector(`#${elementId}`);
    const name = counterElement.textContent.split(':')[0];
    counterElement.textContent = `${name}: ${count}`;
}  

// All HTML elements
const playerButtonrock = document.querySelector('#rock');
const playerButtonPaper = document.querySelector('#paper');
const playerButtonScissors = document.querySelector('#scissors');
const computerButton = document.querySelector('#computerButton');
const buttons = document.querySelectorAll('button')
computerButton.disabled = true;
const results = document.querySelector('#results');

playerButtonrock.addEventListener('click', () => {
    playRound("rock");
});

playerButtonPaper.addEventListener('click', () => {
    playRound("paper");
});

playerButtonScissors.addEventListener('click', () => {
    playRound("scissors");
});



function addVictory(playerButton, computerButton) {
    playerWins++;
    buttons.forEach(button => button.removeAttribute('class'));
    playerButton.classList.add('victory');
    computerButton.classList.add('defeat');
}

function addDefeat(playerButton, computerButton) {
    computerWins++;
    buttons.forEach(button => button.removeAttribute('class'));
    playerButton.classList.add('defeat');
    computerButton.classList.add('victory');
}

function addDraw() {
    drawCounter++;
    buttons.forEach(button => button.removeAttribute('class'));
}