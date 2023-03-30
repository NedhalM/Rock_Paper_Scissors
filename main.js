const options = ["rock", "paper", "scissors"];
let playerSelection = prompt("choose", "");
let computerSelection = getcomputerSelection();

function getcomputerSelection() {
    return options[Math.floor(Math.random() * 3)];
}


function gamePlay() {
    if (playerSelection === computerSelection) {
        return ("Ah! it's a tie");
    } else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")) {
        return ("oop you lost!");
    } else if ((computerSelection === "rock" && playerSelection === "paper") || (computerSelection === "scissors" && playerSelection === "rock")) {
        return ("you won!");
    }
}
// console.log(gamePlay());
console.log(`${gamePlay()} the computer chose ${computerSelection}`);