let rockPaperOrScissors = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay() {
    return rockPaperOrScissors [Math.floor(Math.random() * rockPaperOrScissors.length)];
}

let playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase();
if (!isNaN(playerSelection) || playerSelection != 'ROCK' && playerSelection != 'PAPER' && playerSelection != 'SCISSORS'){
    console.log("Invalid Input")
}

let computerScore = parseInt(0);
let playerScore = parseInt(0);
let tiedScore = parseInt(0);

function playRound (computerSelection, playerSelection) {
    if (playerSelection === 'ROCK') {
        if (computerScore === 'SCISSORS'){
            playerScore++;
            return "You WIN! Rock beats Scissors!"
        }else if (computerScore === 'ROCK'){
            tiedScore++;
            return "Tie Game!"
        }else  if (computerScore === 'PAPER'){
            playerScore++;
            return "You LOSE! Paper beats Rock!"
        }
    }

    if (playerSelection === 'PAPER') {
        if (computerScore === 'ROCK'){
            playerScore++;
            return "You Win! Paper beats Rock!"
        }else if (computerScore === 'PAPER'){
            tiedScore++;
            return "Tie Game!"
        }else if (computerScore == 'SCISSORS'){
            computerScore++;
            return "You LOSE! Scissors beats Paper!"
        }
    }

    if (playerScore === 'SCISSORS') {
        if (computerSelection === 'PAPER'){
            playerScore++;
            return "You LOSE! Scissors beats Paper!"
        }else if (computerSelection === 'SCISSORS'){
            tiedScore++;
            return "Tie Game!"
        }else if (computerScore === 'ROCK'){
            computerScore++;
            return "You LOSE! Rock beats Scissors!"
        }
    }
}


const computerSelection = computerPlay();
playRound(computerSelection, playerSelection);



function playGame (){
    for (let i = 0; i < 5; i++){
        prompt();
        const computerSelection = computerPlay ();
        console.log(playRound(playerSelection, computerSelection));
        if (i == 4 && computerScore > playerScore){
            return `You LOST! CPU beat you ${computerScore} times`;
        }
        else if (i == 4 && playerScore > computerScore){
            return `You WON! you beat the CPU ${playerScore} times`;
        }
        else if (i == 4 && playerScore === computerScore){
            return "It's a tie";
        }   
    }
}
console.log(playGame())
