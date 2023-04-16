const options = ["rock", "paper", "scissors"];
let compChoice = getComputerChoie();

function getComputerChoie() {
    return options[Math.floor(Math.random() * 3)];
}
function playerSelec(){
    let playerChoice = prompt("choose", "");

}


function RoundPlay() {
    
    if (playerChoice === compChoice) {
        return ("Ah! it's a tie");
    } else if ((compChoice === "rock" && playerChoice === "scissors") || (compChoice === "paper" && playerChoice === "rock") || (compChoice === "scissors" && playerChoice === "paper")) {
        return ("oop you lost! try again");
    } else if ((compChoice === "rock" && playerChoice === "paper") || (compChoice === "scissors" && playerChoice === "rock")) {
        return ("you won!");
    }
}
console.log(`${RoundPlay()} the computer chose ${compChoice}`);