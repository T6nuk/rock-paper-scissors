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

let userChoice = "";
function getHumanChoice() {
  let getOption = document
    .querySelector("#user-choice")
    .addEventListener("click", function () {
      document.querySelector("#users-pick").textContent = "";
      userChoice = document.querySelector("#options").value;
      document.querySelector("#users-pick").textContent +=
        "Your choice: " + userChoice;
      return userChoice;
    });
}

getHumanChoice();

function playRound() {
  document.querySelector("#play-button").addEventListener("click", function () {
    const humanSelection = document.querySelector("#options").value;
    const computerSelection = getComputerChoice();
    document.querySelector("#computers-pick").textContent =
      "Computers choice: " + computerSelection;
    document.querySelector("#declare-winner").textContent = " ";

    let whoWon = "";
    let humanScore = 0;
    let computerScore = 0;

    if (humanSelection == "Rock" && computerSelection == "Scissors") {
      document.querySelector("#declare-winner").textContent += " Player won";
      whoWon = "player";
    } else if (humanSelection == computerSelection) {
      document.querySelector("#declare-winner").textContent += "It is a draw!";
    } else if (humanSelection == "Scissors" && computerSelection == "Paper") {
      document.querySelector("#declare-winner").textContent += " Player won";
      whoWon = "player";
    } else if (humanSelection == "Paper" && computerSelection == "Rock") {
      document.querySelector("#declare-winner").textContent += " Player won";
      whoWon = "player";
    } else {
      document.querySelector("#declare-winner").textContent += " Computer won";
      whoWon = "computer";
    }

    if (whoWon == "player") {
      humanScore++;
      let numberBox = document.querySelector("#human-score");
      let currentNumber = parseInt(numberBox.textContent, 0);

      numberBox.textContent = currentNumber + humanScore;
      console.log("this is human score: " + currentNumber);

      if (currentNumber + 1 == 5) {
        alert("Game over, player won!");
        window.location.reload();
      }
    } else if (whoWon == "computer") {
      computerScore++;
      let numBoxComputer = document.querySelector("#computer-score");
      let currentComputerNumber = parseInt(numBoxComputer.textContent, 0);

      numBoxComputer.textContent = currentComputerNumber + computerScore;

      if (currentComputerNumber + 1 == 5) {
        alert("Game over, player won!");
        window.location.reload();
      }
    }
  });
}

playRound();
