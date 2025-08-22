// rock paper scissors: play 5 rounds, user inputs guess, computer randomly chooses from the options, displays winner of round and after 5 rounds who won the game
// function for playing round, function for playing game

function getCompChoice() {
    let compChoice = Math.random()
    if (compChoice <= 0.33) {
        compChoice = "rock";
    }
    else if (compChoice > 0.33 && compChoice < 0.66) {
        compChoice = "paper";
    }
    else {
        compChoice = "scissors";
    }
    return compChoice;
}

function playRound() {
    const choice = prompt("Choose: Rock Paper Scissors")
    const compChoice = getCompChoice()
    if choice.toLowerCase == "rock" {

    }
    else if choice.toLowerCase == "paper"{

    }
    else if choice.toLowerCase == "scissors"{

    }
    else {
        console.log("That is not a valid option, you lose this round")
    }
    
}

function playGame() {
    playRound()
}

playGame()