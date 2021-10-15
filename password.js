console.log("Welcome to the password validator!")


const { Console } = require('console');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter a password:", function(input) {
    let answer = input
    if (answer.length >= 10) {
        console.log ("Success!")
    } else {
        console.log ("Failed to validate. Please enter a password more than 10 characters")
    }


})



