// console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;

/*
    1. creation of new functiona name called getHumanChoice
    which take one argument as prompt and let the user to pass the 
    value from 0 to 3 and will be console.logged the string value 
    according the condition mentioned above for the numeric value.
*/


let getHumanChoice = function () {
    let input = prompt("Enter your word: ".toLowerCase());
    return input;
}

// console.log(getHumanChoice());


/*
    1. Create the function name getComputerChoice which will return 
    the random 3 words "Rock", "Paper", "Scissors"
    2. to return the random value we can pass the the condition 
    lke if the random value is 0 then 0 = "Rock" 1 = "Paper" and for 2 = "Scissors"
*/

function getComputerChoice() {
    let value = Math.floor(Math.random() * 3);
    // console.log(value);
    return value == 0 ? "rock" : value == 1 ? "paper" : "scissors";
}

// console.log(getComputerChoice());



/*
    1. create the function name called playRound which will take the two 
    argument getComputerChoice() and getHumanChoice() functions 
    2. pass the condition where if the user win against computer then increment the 
    value by 1 to the humanScore and and 1 by to the computerScore if the computer wins
    3. console.log "You lose! X beat Y" 
*/
function playRound(humanChoice, computerChoice) {
    if (((humanChoice == "rock") && (computerChoice == "scissors"))
        || ((humanChoice == "paper") && (computerChoice == "rock"))
        || ((humanChoice == "scissors") && (computerChoice == "paper"))) {

        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;

    } else if (humanChoice == computerChoice) {
        console.log("Draw")
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

}

// playRound(humanSelection, computerSelection);

// console.log(humanScore);
// console.log(computerScore);


/*
     in playGame we let the count to 0 and let the game is playable for the fith time 
     and after the count == 5, prompt the user to wanna continue or not and if the user type 
     y or yes then continue the loop again or else break the while loop and exit the program by
     displaying the scores of each users and computer.
*/ 
function playGame() {
    let count = 0;
    while (true) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        count++;
        if (count === 5) {
            let play = prompt("Wanna Continue again? ")
            console.log(play)
            if (play.toLowerCase() == "y" || play.toLowerCase() == "yes") {
                count = 0; //reset the count again 
                continue;
            } else {
                console.log(`Your Score: ${humanScore}`);
                console.log(`Computer Score: ${computerScore}`);
                break;
            }

        }
    }

}

playGame();
