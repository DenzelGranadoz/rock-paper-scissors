let playerScore = 0;
let computerScore = 0;
//play each move
const pressButton = document.querySelectorAll(".player-btn");
pressButton.forEach((pressButton) => {
    pressButton.addEventListener("click", playMatch)
});

//restart button
const buttonPlayAgain = document.querySelector(".play-again");

function playMatch(e) {
    //end the game
    if(winCondition() == 'w' || winCondition() == 'l') {
        return;
    }

    //take player and computer move
    const computerMove = randomChoice();
    const playerMove = e.target.id;

    //output round winner
    document.getElementById("won-lost").textContent = roundWinner(playerMove, computerMove);

    
    restartGame();
    

    updateScore();
    checkWinner(winCondition());
}

//clears computer move from previous round
function removeHighlight() {
    const computerButton = document.querySelectorAll(".computer-btn");
    computerButton.forEach((computerButton) => {
        computerButton.classList.remove("active");  
    });
}

//computer choice
function randomChoice() {
    let rng = Math.floor(Math.random() * 3);
    switch(rng) {
        case 0:
            removeHighlight();
            document.getElementById("cr-btn").classList.add("active");
            return "rock";
        case 1:
            removeHighlight();
            document.getElementById("cp-btn").classList.add("active");
            return "paper";
        case 2:
            removeHighlight();
            document.getElementById("cs-btn").classList.add("active");
            return "scissors";
    }
}

function roundWinner(playerMove, computerMove) {
    if(playerMove == "rock") {
        if(computerMove == "rock") {
            return "It's a tie!";
        } else if (computerMove == "paper") {
            computerScore++;
            return "You Lose! Paper beats Rock";
        } else if (computerMove == "scissors") {
            playerScore++;
            return "You Won! Rock beats Scissors";
        }
    }
    else if(playerMove == "paper") {
        if(computerMove == "paper") {
            return "It's a tie!";
        } else if (computerMove == "scissors") {
            computerScore++;
            return "You Lose! Scissors beats Paper";
        } else if (computerMove == "rock") {
            playerScore++;
            return "You Won! Paper beats Rock";
        }
    } 
    else if(playerMove == "scissors") {
        if(computerMove == "scissors") {
            return "It's a tie!";
        } else if (computerMove == "rock") {
            computerScore++;
            return "You Lose! Rock beats Scissors";
        } else if (computerMove == "paper") {
            playerScore++;
            return "You Won! Scissors beats Paper";
        }
    } 
}

function winCondition() {
    if(playerScore === 5) {
        //make play again button visible
        buttonPlayAgain.style.visibility = "visible";
        return "w";
    } else if(computerScore === 5) {
        buttonPlayAgain.style.visibility = "visible";
        return "l";
    }
}

function checkWinner(winner) {
    if(winner == "w") {
        document.getElementById("won-lost").textContent = "Congrats! You have won the match.";
    } else if(winner == "l") {
        document.getElementById("won-lost").textContent = "Computer beat you. Try again?";
    }
}

//update scoreboard
function updateScore() {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function restartGame() {
    buttonPlayAgain.addEventListener("click", () => {
      window.location.reload();
    });
}