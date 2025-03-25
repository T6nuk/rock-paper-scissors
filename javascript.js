
function getComputerChoice() {
    const rand = Math.floor(Math.random() * 9) + 1
    console.log(rand);
        if (rand <= 3) {
            return 'Rock'
            // console.log('rock');
        } else if (rand > 3 && rand <=6) {
            return 'Paper'
            // console.log('paper');
        } else {
            return 'Scissors'
            // console.log('scissors');
        }
}

getComputerChoice();


function getHumanChoice() {
    let getOption = document.getElementById('input-button').
    addEventListener('click', 
        function () {
            document.getElementById('users-pick').
            innerHTML = '';
            const userChoice = document.getElementById('options').value;
            document.getElementById('users-pick').
            innerHTML += 'Your choice: ' +userChoice;
        }
    )
}

getHumanChoice();

function displayComputerChoice() {
    document.getElementById('input-button').addEventListener(
        'click',
        function () {
            const computerChoice = getComputerChoice();
            document.getElementById('computers-pick').innerHTML
            = '';
            document.getElementById('computers-pick').
            innerHTML = 'Computers choice: ' +computerChoice;
        }
    )
}

displayComputerChoice();