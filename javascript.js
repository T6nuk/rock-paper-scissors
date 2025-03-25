
function getComputerChoice() {
    const rand = Math.floor(Math.random() * 9) + 1
    console.log(rand);
        if (rand <= 3) {
            console.log('rock');
        } else if (rand > 3 && rand <=6) {
            console.log('paper');
            
        } else {
            console.log('scissors');
        }
}

getComputerChoice();


function getHumanChoice() {
    let getOption = document.getElementById('inputButton').
    addEventListener('click', 
        function () {
            const userChoice = document.getElementById('options').value;
            console.log(userChoice);
        }
    )
}

getHumanChoice();