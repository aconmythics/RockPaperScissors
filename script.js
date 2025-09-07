
function getCompChoice() {
    compChoice = Math.random()
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

function playRound(choice) {
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
}

function playGame(choice, buttons) {
    result = playRound(choice);
    const scores = document.querySelector(".scores")
    if (result == "win") {
        win ++;
    }
    else if (result == "draw") {
        draw ++;
    }
    else if (result == "lose") {
        lose ++;
    }
    counter++
    if (win == 5) {
        scores.textContent = `Congratulations, you won!!! Wins:${win}   losses:${lose}  draws:${draw}`
        buttons.textContent = "";
    }
    else if (lose == 5) {
        scores.textContent = `Condolonces, you lost :( Wins:${win}   losses:${lose}  draws:${draw}`
        buttons.textContent = "";
    }
    else {
        scores.textContent = `Wins:${win}   losses:${lose}  draws:${draw}`;
    };
}

function initGame() {
    win = 0;
    draw = 0;
    lose = 0;
    counter = 0;
    const scores = document.querySelector(".scores")
    scores.textContent = `Wins:${win}   losses:${lose}  draws:${draw}`
    btnStart.textContent = "Reset"
    const btnRock = document.createElement("button")
    btnRock.textContent = "Rock"
    const btnPaper = document.createElement("button")
    btnPaper.textContent = "Paper"
    const btnScissors = document.createElement("button")
    btnScissors.textContent = "Scissors"
    const buttons = document.querySelector(".buttons")
    btnRock.addEventListener("click", () => playGame("rock", buttons))
    btnPaper.addEventListener("click", () => playGame("paper", buttons))
    btnScissors.addEventListener("click", () => playGame("scissors", buttons))
     if (buttons.childElementCount != 3) {
        buttons.appendChild(btnRock)
        buttons.appendChild(btnPaper)
        buttons.appendChild(btnScissors)
        }
    };

let win = 0;
let draw = 0;
let lose = 0;
let counter = 0;

const btnStart = document.querySelector("#init")
btnStart.addEventListener("click", initGame)