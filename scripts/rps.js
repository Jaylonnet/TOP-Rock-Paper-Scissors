const roundWinner = document.querySelector('#round-winner');
function computerPlay() {
    const rpsGuesses = ['Rock', 'Paper', 'Scissors'];
    let guess = rpsGuesses[Math.floor(Math.random() * rpsGuesses.length)];
    return guess
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    
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
}

function declareRoundWinner(winner) {
    roundWinner.textContent = `${winner}`
}

// event listener added to RPS buttons, which then plays a round
const buttons = document.querySelectorAll('#rps-buttons button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent);
    });
});