function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3) + 1;
  if (rand == 1) {
    return "Rock";
  } else if (rand == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

getComputerChoice();

const choiceBtn = document.querySelector("#user-choice");
const playBtn = document.querySelector("#play-button");

let userChoice = "";
function getHumanChoice() {
  choiceBtn.addEventListener("click", function () {
    const userPick = document.querySelector("#users-pick");
    userPick.textContent = "";
    userChoice = document.querySelector("#options").value;
    userPick.textContent += "Your choice: " + userChoice;
    return userChoice;
  });
}

getHumanChoice();

// round to five points
function playRound() {
  playBtn.addEventListener("click", function () {
    const humanSelection = document.querySelector("#options").value;
    const computerSelection = getComputerChoice();
    document.querySelector("#computers-pick").textContent =
      "Computers choice: " + computerSelection;
    const displayWinner = document.querySelector("#declare-winner");
    displayWinner.textContent = " ";

    let whoWon = "";
    let humanScore = 0;
    let computerScore = 0;

    if (humanSelection == "Rock" && computerSelection == "Scissors") {
      displayWinner.textContent += " Player won";
      whoWon = "player";
    } else if (humanSelection == computerSelection) {
      displayWinner.textContent += "It is a draw!";
    } else if (humanSelection == "Scissors" && computerSelection == "Paper") {
      displayWinner.textContent += " Player won";
      whoWon = "player";
    } else if (humanSelection == "Paper" && computerSelection == "Rock") {
      displayWinner.textContent += " Player won";
      whoWon = "player";
    } else {
      displayWinner.textContent += " Computer won";
      whoWon = "computer";
    }

    const gameFinished = document.querySelector("#when-finished");
    const gameWinner = "";
    if (whoWon == "player") {
      humanScore++;
      let numberBox = document.querySelector("#human-score");
      let currentNumber = parseInt(numberBox.textContent, 0);

      numberBox.textContent = currentNumber + humanScore;
      console.log("this is human score: " + currentNumber);

      if (currentNumber + 1 == 5) {
        const para = document.createElement("p");
        gameFinished.appendChild(para);
        para.textContent = "Game over, player won!";

        const btn = document.createElement("button");
        gameFinished.appendChild(btn);
        btn.textContent = "Play again";

        choiceBtn.hidden = true;
        playBtn.hidden = true;

        btn.addEventListener("click", () => {
          window.location.reload();
        });
        gameWinner = "player";
      }
    } else if (whoWon == "computer") {
      computerScore++;
      let numBoxComputer = document.querySelector("#computer-score");
      let currentComputerNumber = parseInt(numBoxComputer.textContent, 0);

      numBoxComputer.textContent = currentComputerNumber + computerScore;

      if (currentComputerNumber + 1 == 5) {
        const para = document.createElement("p");
        gameFinished.appendChild(para);
        para.textContent = "Game over, computer won!";

        const btn = document.createElement("button");
        gameFinished.appendChild(btn);
        btn.textContent = "Play again";

        choiceBtn.hidden = true;
        playBtn.hidden = true;

        btn.addEventListener("click", () => {
          window.location.reload();
        });
        gameWinner = "computer";
      }
    }
  });
}

playRound();
