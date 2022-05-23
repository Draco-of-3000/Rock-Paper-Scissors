let rockPaperOrScissors = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay() {
    return rockPaperOrScissors [Math.floor(Math.random() * rockPaperOrScissors.length)];
}

let playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase();
if (!isNaN(playerSelection) || playerSelection != 'ROCK' && playerSelection != 'PAPER' && playerSelection != 'SCISSORS'){
    console.log("Invalid Input")
}

function playRound (computerSelection, playerSelection) {
    if (computerSelection == 'ROCK' && playerSelection == 'SCISSORS'){
        computerScore++;
        return "You LOSE! Rock beats Scissors!";
    }
    else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER'){
        computerScore++;
        return "You LOSE! Scissors beats Paper!";
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){
        playerScore++;
        return "You WIN! Rock beats Scissors!";
    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
        playerScore++;
        return "You WIN! Scissors beats Paper!";
    }
    else if (playerSelection === computerSelection){
        return "It ends in a TIE";
    }
}
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);



computerScore = 0;
playerScore = 0;
rounds = 0;
let playerValue = playerSelection;
let computerValue = computerSelection;

function game () {
    for (let i = 0; i < 5; i++){
        playerValue;
        console.log("You chose" + playerSelection);

        computerValue;
        console.log("CPU chose" + computerSelection)

        if (computerScore > playerScore){
            return `You LOST! CPU beat you ${computerScore} times`;
        }
        else if (playerScore > computerScore){
            return `You WON! you beat the CPU ${playerScore} times`;
        }
        else {
            return "It's a tie";
        }    

    }

    if (computerScore > playerScore){
        return `You LOST! CPU beat you ${computerScore} times`;
    }
    else if (playerScore > computerScore){
        return `You WON! you beat the CPU ${playerScore} times`;
    }
    else {
        return "It's a tie";
    }    
}
console.log(game(playRound));


