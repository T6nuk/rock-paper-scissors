
function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3) + 1
    console.log(rand);
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

function playRound(human) {
    document.getElementById('play-button').addEventListener(
        'click',
        function () {
            const humanSelection = document.getElementById('options').value;
            const computerSelection = getComputerChoice();
            document.getElementById('computers-pick').innerHTML
            = 'Computers choice: '+computerSelection;

            //clear winner field
            document.getElementById('declare-winner').innerHTML
            = ' '
            
            //user input value
            console.log(humanSelection);
            
            if (humanSelection == 'Rock' && computerSelection == 'Scissors') {
                document.getElementById('declare-winner').innerHTML
                += ' Player won'
            } else if (humanSelection == 'Scissors' && computerSelection == 'Paper') {
                document.getElementById('declare-winner').innerHTML
            += ' Player won'
                
            } else if (humanSelection == 'Paper' && computerSelection == 'Rock') {
                document.getElementById('declare-winner').innerHTML
            += ' Player won'
            } else if (humanSelection == computerSelection) {
                document.getElementById('declare-winner').innerHTML
            += 'It is a draw!'
            } else {
                document.getElementById('declare-winner').innerHTML
            += ' Computer won'
            }    
        }
    )
}

playRound();