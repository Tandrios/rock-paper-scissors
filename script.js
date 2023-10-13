addEventListener("DOMContentLoaded", (event) => {
    let selfScore = 0
    let computerScore = 0
    playRound();

});

function playRound () {

    //Get buttons
    const buttons = document.querySelectorAll('button');

    // Add event listener on each button and check button id => update html with correct one
    buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            console.log(event.target.id);
            switch (event.target.id) {
                case "rock":
                    document.querySelector("#output-self").innerHTML = this.innerHTML;
                    printWinner(getWinner(event.target.id, getComputerChoice())); //printWinner prints the winner which is the return value of winner, which takes 2 inputs.
                    break;
                case "paper":
                    document.querySelector("#output-self").innerHTML = this.innerHTML;
                    printWinner(getWinner(event.target.id, getComputerChoice()))
                    break;
                case "scissors":
                    document.querySelector("#output-self").innerHTML = this.innerHTML;
                    printWinner(getWinner(event.target.id, getComputerChoice()))
                    break;
            }
        });
    });
}

// Function to determine choice computer, returns value
function getComputerChoice (){
    computerInt = Math.floor(Math.random() * 3);

    switch (computerInt) {
        case 0:
            document.querySelector("#output-computer").innerHTML = "Rock";
            return "rock";
        case 1:
            document.querySelector("#output-computer").innerHTML = "Paper";
            return "paper"
        case 2:
            document.querySelector("#output-computer").innerHTML = "Scissors";
            return "scissors"
    }
}

//Function to determine winner
function getWinner (self, computer) {
    if (self === 'rock') {
        if (computer === 'rock') {
            return "tie";
        } else if (computer === "paper") {
            return "computer";
        } else if (computer === "scissors") {
            return "self"
        }
    } else if (self === "paper") {
        if (computer === 'rock') {
            return "self";
        } else if (computer === "paper") {
            return "tie";
        } else if (computer === "scissors") {
            return "computer"
        }
    } else if (self === "scissors") {
        if (computer === 'rock') {
            return "computer";
        } else if (computer === "paper") {
            return "self";
        } else if (computer === "scissors") {
            return "tie"
        }
    }
    
};

function printWinner (winner) {
    if (winner === "self") {
        document.querySelector("#winner").innerHTML = "You've won!"
    } else if (winner === "computer") {
        document.querySelector("#winner").innerHTML = "Computer wins!"
    } else {
        document.querySelector("#winner").innerHTML = "It's a tie!"
    }
}