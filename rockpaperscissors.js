let playerWins = 0;
let computerWins = 0;
let drawCounter = 0;
let rounds = 0;

function getComputerChoice() {
    return ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    // Computer chooses Scissors
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        results.innerHTML = "You won! Rock beats Scissors";
        addVictory(playerButtonRock, computerButton);
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        results.innerHTML = "You lose! Scissors beats Paper";
        addDefeat(playerButtonPaper, computerButton);
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        results.innerHTML = "Draw! Both players choose Scissors";
        addDraw();
        // Computer chooses Paper
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        results.innerHTML = "You lose! Paper beats Rock";
        addDefeat(playerButtonRock, computerButton);
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        results.innerHTML = "Draw! Both players choose Paper";
        addDraw();
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        results.innerHTML = "You won! Scissors beats Paper";
        addVictory(playerButtonScissors, computerButton);
        // Computer chooses Rock
    } else if (playerSelection === computerSelection) {
        results.innerHTML = "Draw! Both players choose Rock";
        addDraw();
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        results.innerHTML = "You won! Paper beats Rock";
        addVictory(playerButtonPaper, computerButton);
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        results.innerHTML = "You lose! Rock beats Scissors";
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
const playerButtonRock = document.querySelector('#rock');
const playerButtonPaper = document.querySelector('#paper');
const playerButtonScissors = document.querySelector('#scissors');
const computerButton = document.querySelector('#computerButton');
const buttons = document.querySelectorAll('button')
computerButton.disabled = true;
const results = document.querySelector('#results');

playerButtonRock.addEventListener('click', () => {
    playRound("Rock");
});

playerButtonPaper.addEventListener('click', () => {
    playRound("Paper");
});

playerButtonScissors.addEventListener('click', () => {
    playRound("Scissors");
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