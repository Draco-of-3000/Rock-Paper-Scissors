// Made an array for 3 possible answers
let rockPaperOrScissors = ['ROCK', 'PAPER', 'SCISSORS'];

// A function to make the CPU select Rock, Paper or Scissors at random
function computerPlay() {
    return rockPaperOrScissors [Math.floor(Math.random() * rockPaperOrScissors.length)];
}

// Declaration of scores and return values
let computerScore = parseInt(0);
let playerScore = parseInt(0);
let tiedScore = parseInt(0);
let win = "You WIN this round";
let lose = "You LOSE this round";
let tie = "It's a TIE GAME!"

// A function that plays a single round of Rock Paper Scissors. 
function playRound (computerSelection, playerSelection) {
    if (!isNaN(playerSelection) || playerSelection != 'ROCK' && playerSelection != 'PAPER' && playerSelection != 'SCISSORS'){
    console.log("Invalid Input");
    }

    else if(playerSelection === computerSelection){
        tiedScore++;
        return tie + " " + `CPU chose ${computerSelection} and you chose ${playerSelection}`;
    }
    else if(playerSelection == 'ROCK'){
        if(computerSelection == 'PAPER'){
            computerScore++;
            return lose+ " " + `CPU chose ${computerSelection} and you chose ${playerSelection}`;
        }else{
            playerScore++;
            return win + " " + `CPU chose ${computerSelection} and you chose ${playerSelection}`;
        }
    }

    else if(playerSelection == 'SCISSORS'){
        if(computerSelection == 'ROCK'){
            computerScore++;
            return lose + " " + `CPU chose ${computerSelection} and you chose ${playerSelection}`;
        }else{
            playerScore++;
            return win + " " + `CPU chose ${computerSelection} and you chose ${playerSelection}`;
        }
    }

    else if(playerSelection == 'PAPER'){
        if(computerSelection == 'SCISSORS'){
            computerScore++;
            return lose + " " + `CPU chose ${computerSelection} and you chose ${playerSelection}`;
        }else{
            playerScore++;
            return win+ " " + `CPU chose ${computerSelection} and you chose ${playerSelection}`;
        }
    }

}

// Copying computerPlay() function into a variable
const computerSelection = computerPlay();

//A function that plays 5 rounds of Rock Paper Scissors and reports the winner and loser at the end!
function playGame (){
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase();
        console.log(playRound(computerSelection, playerSelection));
        if (i === 4  && computerScore > playerScore){
            return `CPU chose ${computerSelection} and you chose ${playerSelection}` + "--- "  + `You LOST the GAME! CPU beat you ${computerScore} times out of 5 rounds there were ${tiedScore} tie(s)`;
        }
        else if (i === 4 && playerScore > computerScore){
            return  `CPU chose ${computerSelection} and you chose ${playerSelection}` + "--- " + `You WON the GAME! you beat the CPU ${playerScore} times out of 5 rounds there were ${tiedScore} tie(s)`;
        }
        else if (i === 4 && playerScore === computerScore){
            return `It's a tie you scored ${playerScore} out of 5, CPU scored ${computerScore} out of 5 there were ${tiedScore} tie(s)`;
        }   
    }
    
}
console.log(playGame())
