
function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3) + 1
        if (rand == 1) {
            return 'Rock'
            // console.log('rock');
        } else if (rand == 2) {
            return 'Paper'
            // console.log('paper');
        } else {
            return 'Scissors'
            // console.log('scissors');
        }
}

getComputerChoice();


let userChoice = '';
function getHumanChoice() {
    
    let getOption = document.getElementById('user-choice').
    addEventListener('click', 
        function () {
            document.getElementById('users-pick').
            innerHTML = '';
            userChoice = document.getElementById('options').value;
            //console.log(userChoice);  
            document.getElementById('users-pick').
            innerHTML += 'Your choice: ' +userChoice;


            //clear computers choice field
            // document.getElementById('computers-pick').
            // innerHTML = '';


            return userChoice;
        }
    )
}

getHumanChoice();





function playRound() {
    document.getElementById('play-button').addEventListener(
        'click',
        function () {
            const humanSelection = document.getElementById('options').value;
            const computerSelection = getComputerChoice();
            document.getElementById('computers-pick').innerHTML
            = 'Computers choice: '+computerSelection;
            document.getElementById('declare-winner').innerHTML
            = ' '
            

            let whoWon = '';
            let humanScore = 0;
            let computerScore = 0;

            if (humanSelection == 'Rock' && computerSelection == 'Scissors') {
                document.getElementById('declare-winner').innerHTML
                += ' Player won'
                whoWon = 'player'
                
                
            }   else if (humanSelection == computerSelection) {
                document.getElementById('declare-winner').innerHTML
                += 'It is a draw!'
            }   else if (humanSelection == 'Scissors' && computerSelection == 'Paper') {
                document.getElementById('declare-winner').innerHTML
                += ' Player won';
                whoWon = 'player'
                
            }   else if (humanSelection == 'Paper' && computerSelection == 'Rock') {
                document.getElementById('declare-winner').innerHTML
                += ' Player won'
                whoWon = 'player'
            }   else {
                document.getElementById('declare-winner').innerHTML
                += ' Computer won'
                whoWon = 'computer'
            }   

                if (whoWon == 'player') {
                    humanScore++;
                    let numberBox = document.getElementById('human-score');
                    let currentNumber = parseInt(numberBox.textContent, 0)
                    
                    numberBox.textContent = currentNumber + humanScore; 
                    console.log('this is human score: ' +currentNumber);

                    if (currentNumber + 1 == 5) {
                        alert('Game over, player won!')
                        window.location.reload();
                    }

                } else if (whoWon == 'computer') {
                    computerScore++;
                    let numBoxComputer = document.getElementById('computer-score');
                    let currentComputerNumber = parseInt(numBoxComputer.textContent, 0)

                    numBoxComputer.textContent = currentComputerNumber + computerScore;
                    
                    if (currentComputerNumber + 1 == 5) {
                        alert('Game over, player won!')
                        window.location.reload();
                    }
                }
        }
    )
}

playRound();