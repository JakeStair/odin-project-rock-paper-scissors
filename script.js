function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum ===1) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

function getHumanChoice() {
    const userInput = prompt('Please enter your choice: rock, paper, or scissors.');

    while (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors') {
    }
}