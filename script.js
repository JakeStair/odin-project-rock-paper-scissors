function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3); // this declares a variable and runs math.floor which means it rounds down the number that math.random gets. Math.random gets a random number between 0 and 1, but it is ANY number. So it could be numbers like 0.2837985. Math.floor rounds it down so it's 0, 1. adding the * 3 makes it so math.random looks for a number between 0 and 3(not three, but 2.99999, which then gets rounded down to 2 because of math.floor). 
    if (randomNum === 0) {  // this right here checks the random number in the variable above. It it's a 0, we have the condition return rock and so forth as inddicated in the code block.
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else {
        return 'scissors'
    }
}
console.log('Computer chose: ' + getComputerChoice()); // this one logs the string and the function getComputerChoice() which is the random number generator.


function getHumanChoice() {
    const userInput = prompt('Please enter your choice: rock, paper, or scissors.'); // simple prompt that appears when the site is loaded displaying the string and the valid choices.

    while (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors') { // A while loop is used to check if the user input is valid. In this case, it checks if the userInput is not equal to the valid choices. If it isn't, it will prompt the user to enter a valid choice. 
        userInput = prompt('Invalid choice, please enter rock, paper, or scissors as displayed.').toLowerCase(); // this line we start with the variable because we are reassigning the variable userInput to the prompt. The prompt is the same as the first one, but it has a .toLowerCase() method attached to it. This method makes the user input lowercase. This is important because the valid choices we have assigned are lowercase. This helps because it catches errors without having to write out all the possible combinations of the valid choices.
        return userInput;
    }
}
console.log('Human chose: ' + getHumanChoice());

let humanScore = 0;
let computerScore = 0;

console.log('Human Score: ' + humanScore);
console.log('Computer Score: ' + computerScore);
