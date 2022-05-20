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
        return "You LOSE! Rock beats Scissors!";
    }
    else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER'){
        return "You LOSE! Scissors beats Paper!";
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){
        return "You WIN! Rock beats Scissors!";
    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
        return "You WIN! Scissors beats Paper!";
    }
    else if (playerSelection === computerSelection){
        return "It ends in a TIE";
    }
}

const computerSelection = computerPlay();
playRound(computerSelection, playerSelection);