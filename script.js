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
    if ((choice.toLowerCase()) == "rock") {
        if (compChoice == "rock") {
           return "draw";
        }
        else if (compChoice == "paper") {
            return "lose";
        }
        else if (compChoice == "scissors") {
            return "win";
        }
    }
    else if ((choice.toLowerCase()) == "paper") {
        if (compChoice == "rock") {
           return "win";
        }
        else if (compChoice == "paper") {
            return "draw";
        }
        else if (compChoice == "scissors") {
            return "lose";
        }
    }
    else if ((choice.toLowerCase()) == "scissors") {
        if (compChoice == "rock") {
           return "lose";
        }
        else if (compChoice == "paper") {
            return "win";
        }
        else if (compChoice == "scissors") {
            return "draw";
        }
    }
    else {
        console.log("That is not a valid option, you lose this round")
        return "lose";
    }  
}

function playGame() {
    let win = 0;
    let draw = 0;
    let lose = 0;
    let result = "";
    for (let i = 1; i <= 5; i++) {
        result = playRound();
        console.log(result);
        console.log(i);
        if (result == "win") {
            win ++;
        }
        else if (result == "draw") {
            draw ++;
        }
        else if (result == "lose") {
            lose ++;
        }
    }
    console.log(`You have won ${win} times, drawn ${draw} times and lost ${lose} times`);
}

playGame()