//global variable
let computerMoveValue;
let computerWins = 0;
let playerWins = 0;

//computer choice 
function computerPlay() {
    let computerMove = Math.floor(Math.random() * 3);
    if(computerMove == 1){ 
        computerMoveValue = 1;
        return console.log("Computer chose Rock");
    } else if(computerMove == 2){ 
        computerMoveValue = 2;
        return console.log("Computer chose Paper");
    } else {
        computerMoveValue = 3;
        return console.log("Computer chose Scissors");
    }
}

//round flow + player input
function playRound(playerSelection, computerSelection) {
    let playerMove = playerSelection.toLowerCase();  //case insensitivity
    if(playerMove == "rock") {
        if(computerMoveValue == 1) {
            return "It's a tie!";
        } else if (computerMoveValue == 2) {
            computerWins++;
            return "You Lose! Paper beats Rock";
        } else if (computerMoveValue == 3) {
            playerWins++;
            return "You Won! Rock beats Scissors";
        }
    }
    else if(playerMove == "paper") {
        if(computerMoveValue == 2) {
            return "It's a tie!";
        } else if (computerMoveValue == 3) {
            computerWins++;
            return "You Lose! Scissors beats Paper";
        } else if (computerMoveValue == 1) {
            playerWins++;
            return "You Won! Paper beats Rock";
        }
    } 
    else if(playerMove == "scissors") {
        if(computerMoveValue == 3) {
            return "It's a tie!";
        } else if (computerMoveValue == 1) {
            computerWins++;
            return "You Lose! Rock beats Scissors";
        } else if (computerMoveValue == 2) {
            playerWins++;
            return "You Won! Scissors beats Paper";
        }
    } 
}

//loops through game flow to determine winner
function game() {
    while(true) {
        const playerSelection = window.prompt("Enter ur choiz");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));

        if(playerWins == 4) {
            console.log("You have won the game. NiCEEE");
            break;
        } else if (computerWins == 4) {
            console.log("You lose the game, Try again?");
            break;
        }
    }
}

game();

