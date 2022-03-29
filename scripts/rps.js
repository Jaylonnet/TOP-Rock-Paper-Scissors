const roundWinner = document.querySelector('#round-winner');
const computerChoice = document.querySelector('#computer .choice')
const playerChoice = document.querySelector('#player .choice')
const playerScore = document.querySelector('#player-score')
const computerScore = document.querySelector('#computer-score')
const drawScore = document.querySelector('#draw-score')

function computerPlay() {
    const rpsGuesses = ['Rock', 'Paper', 'Scissors'];
    let guess = rpsGuesses[Math.floor(Math.random() * rpsGuesses.length)];
    return guess
};

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    computerChoice.textContent = computerSelection;
    playerChoice.textContent = playerSelection;

    let winner = '';

    if (computerSelection == playerSelection) {
        winner = 'Draw';
    }
    else if (computerSelection == 'Rock' && playerSelection == 'Paper') {
        winner = 'Player';
    }
    else if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
        winner = 'Computer';
    }
    else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
        winner = 'Computer';
    }
    else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
        winner = 'Player';
    }
    else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
        winner = 'Player';
    }
    else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
        winner = 'Computer';
    }
    declareRoundWinner(winner);
};

function declareRoundWinner(winner) {
    roundWinner.textContent = `${winner}`
    if (winner == 'Player') {
        playerScore.textContent = Number(playerScore.textContent) + 1
    }
    else if (winner == 'Computer') {
        computerScore.textContent = Number(computerScore.textContent) + 1
    }
    else if (winner == 'Draw') {
        drawScore.textContent = Number(drawScore.textContent) + 1
    };
    checkGameActive();
};

function checkGameActive() {
    if (playerScore.textContent == '5') {
        roundWinner.textContent = 'Player won this game!';
        disableGame()
    } else if (computerScore.textContent == '5') {
        roundWinner.textContent = 'Computer won this game!';
        disableGame()
    }
}

// event listener added to RPS buttons, which then plays a round
const buttons = document.querySelectorAll('#rps-buttons button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent);
    });
});

function disableGame() {
    buttons.forEach((button) => {
        button.disabled = true
    })
}