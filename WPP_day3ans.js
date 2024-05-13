const readline = require('readline');

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Create interface for reading user input
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user to input a guess number
interface.question("Guess a number between 1 and 10: ", function(userInput) {
    const userGuess = parseInt(userInput);

    // Check if the user's guess matches the random number
    if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 10) {
        if (userGuess === randomNumber) {
            console.log("Good Work");
        } else {
            console.log("Not matched. The correct number was " + randomNumber);
        }
    } else {
        console.log("Please enter a valid number between 1 and 10.");
    }

    interface.close();
});
