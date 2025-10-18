/*
    FLOW OF EXECUTION OR HOW CODE WORKS:

    1. play eventlistner:
        after clicking the play button it will run the reset function
        reset function will reset all things like 
        human score, computerscore, count to 0 
        and getHumanchoice to null 
        and call another function setChoiceButtons
    
    2. setChoiceButtons(true):
        now setChoiceButtons with arg of boolean true will run 
        in setCHoiceButton all three buttons are enabled again which was disabled during
        the creation of all three buttons.

    3. play button will disabled now with running console.log(...) 
       and jump to play.addEventLitener and run the setupChoiceListners() function

    4. setupChoiceListeners():
        check if the choice made is true or not if its true 
        then return and if its false then it will run the code 
        rock.addEventListener("click", () => {...})
        if user click either or rock, paper or scissors,
        
        the human choice will be set to the getHumanChoice variable
        and then it will call the playGame() function.

    5. playGame():
        in this function it will pass the getHumanchoice to the humanSelection vairiabel
        and then the pass the getComputerChoice() to the computerSelection variable
        and then it will call the playRound(humanSelection, computerSelection))

        5a. playRound():
            in this function it will check the condition of the human choice and the 
            computer choice and determine the winner
            and update the humanScore and computerScore accordingly.
        
        now after the playRound() funciton is executed it will increment the count by 1
        and check if the count is equal to 5 or not if it is equal to 5 then it will call the endGame() function
        else it will return to the playGame() function and wait for the next click on the buttons.

    6. endGame():
        in this function it will disable all the buttons by calling the 
        setChoiceButtons(false) and also enable to the play button by setting 
        the play.disabled = false;
        and then it will log the final scores of the human and computer.

    7. resetGame():
        this function will reset all the scores and count to 0 and also
        set the getHumanChoice to null and then it will call the
        setChoiceButtons(true) to enable all the buttons again and also
        disable the play button by setting play.disabled = true;
        and then it will log the message "Game reset. Let's play!" to the console.


*/


/*
    setting all the human score, computer score, count to 0
    and make the choiceMade to false
    and also the human choice to null
*/
let humanScore = 0;
let computerScore = 0;
let getHumanChoice = null;
let count = 0;
let choiceMade = false;




/*
    Creating the play button where we add textContent and id and it is enabled by default
    and appending all the buttons to the body

    selecting the body and creating a div with id = "play" and append the div to the body 
    and append the all buttons to the div.
*/
// Append buttons to the body
let body = document.querySelector("body");

// creat container div
let playDiv = document.createElement("div");
playDiv.id = "playDiv";
body.appendChild(playDiv);

/*
    Creating the buttons for rock, paper and scissors where
    the for reach button we add textContent and id  and button is disabled by 
    adding button.disabled = true and appedning all the buttons to the div
*/

// Create buttons
let rock = document.createElement("button");
// rock.textContent = "rock";
rock.className = "rock";
rock.innerHTML = `<img src="./images/rock.webp" width ="50" height="50"
alt="rock" class="image">`;
rock.disabled = true;

let paper = document.createElement("button");
paper.className = "paper";
paper.innerHTML = `<img src="./images/paper.png" width="50" height="50" 
alt="paper" class=" image"></img>`
paper.disabled = true;

let scissors = document.createElement("button");
scissors.className = "scissors";
scissors.innerHTML = `<img src="./images/scissors.png" width="50" height="50" 
alt="scissors" class=" image"></img>`
scissors.disabled = true;


// let playdiv= document.querySelector("playDiv");
// playdiv.id = "playdiv";
// playDiv.appendChild(playdiv);
// add the button inside the div inisde the playdiv
playDiv.appendChild(rock);
playDiv.appendChild(paper);
playDiv.appendChild(scissors);

// create another div for the messages
let messageDiv = document.createElement("div");
messageDiv.id = "messageDiv";
body.appendChild(messageDiv);

// let playDivElement = document.querySelector("body");
let playdiv = document.createElement("div");
playdiv.id = "playdiv";
body.appendChild(playdiv);

// Create play button
let play = document.createElement("button");
play.textContent = "play";
play.id = "playButton";
playdiv.appendChild(play);


/*
    let the compute make choice by generating  a random nuber between 0 and 2 
    and return rock for 0, paper for 1 and scissors for 2.
*/
// Get computer choice
function getComputerChoice() {
    let value = Math.floor(Math.random() * 3);
    return value === 0 ? "rock" : value === 1 ? "paper" : "scissors";
}

/*
    playRound function takes the human choice and computer choice as args 
    and checks the condition and determines the winner and also 
    made the updates of scores accordingly.
*/

// function to show the result message 
function showResultMessage(message) {
    // check if the message is already thre or not 
    const existingMessage = document.querySelector("#resultMessage");
    if (existingMessage) messageDiv.removeChild(existingMessage);

    // cerate the new message
    const resultMessage = document.createElement("h3");
    resultMessage.id = "resultMessage";
    resultMessage.textContent = message;
    messageDiv.appendChild(resultMessage);
}

// function to show the final message
function showFinalMessage(Message) {
    const existingMessage = document.querySelector("#finalMessage");
    if (existingMessage) messageDiv.removeChild(existingMessage);
    const finalMessage = document.createElement("h2");
    finalMessage.id = "finalMessage";
    finalMessage.textContent = Message;
    messageDiv.appendChild(finalMessage);
}

// function show the selection message 
function showSelectionMessage(humanChoice, computerChoice) {
    // check if the selection message is already there or not 
    // if it is there then remove it and append the new message
    const humanChoiceElement = document.querySelector("#humanSelection");
    if (humanChoiceElement) messageDiv.removeChild(humanChoiceElement);

    // create a new message for human selection
    const humanSelect = document.createElement("h3");
    humanSelect.id = "humanSelection";
    humanSelect.textContent = humanChoice;
    messageDiv.appendChild(humanSelect);

    // check if the computer selection message is already there or not
    // if it is there then remove it and append the new message
    const computerChoiceElement = document.querySelector("#computerSelection");
    if (computerChoiceElement) messageDiv.removeChild(computerChoiceElement);

    //create a new message for computer selection
    const computerSelect = document.createElement("h3");
    computerSelect.id = "computerSelection";
    computerSelect.textContent = computerChoice;
    messageDiv.appendChild(computerSelect);
}
// Play a  round
function playRound(humanChoice, computerChoice) {
    showSelectionMessage(`You selected : ${humanChoice}`, `Computer selected: ${computerChoice}`); // Show selections
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {

        showResultMessage(`You win! ${humanChoice} beats ${computerChoice} `);
        // console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === computerChoice) {
        showResultMessage("It's a draw.");

    } else {
        showResultMessage(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

/*
    This will take the human choie and comupter choice and call the playRound function 
    and which takes the human choice and computer choice as args 
    for each playcound the the count will be inceremented by 1
    and if the count is equall to 5 then it will call the endGmae function.
*/

function playGame() {

    let humanSelection = getHumanChoice;
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    count++;

    if (count === 5) {
        endGame();
    }
}

/*
    setupChoiceListeners() will add event listeners to the rock, paper and scissors buttons 
    but first check the choiceMade flag and it the flag is true then it will return without adding the 
    event listeners. If the flag is false then it will add the event Listeners to the buttons.
    now if the user cliks any button it will check if the button for each clicked one is disabled or not 
    if it is disabled then it will not do anything and if it is not disabled then it will set the 
    getHumanChoice to the button clicked and then call the playGame() function.

    finally let the choiceMade flag to true so that it will not add the event listeners again.

    work of choiceMade flag is to prevent multiple event listeners from being added 
    to the buttons after the first click. 
*/
function setupChoiceListeners() {
    if (choiceMade) return; //if true return

    /*
    let the startMessage and resertMessage to be null after 
    the game played for the first time and then remove the 
    startMessage and resetMessage from the playDiv if exists.
*/

    rock.addEventListener("click", () => {
        if (!rock.disabled) {
            const resetMessage = document.getElementById("resetMessage");
            if (resetMessage) messageDiv.removeChild(resetMessage);

            const startMessage = document.getElementById("startMessage");
            if (startMessage) messageDiv.removeChild(startMessage);
            getHumanChoice = "rock";
            playGame();
        }
    });

    paper.addEventListener("click", () => {
        if (!paper.disabled) {
            const resetMessage = document.getElementById("resetMessage");
            if (resetMessage) messageDiv.removeChild(resetMessage);

            const startMessage = document.getElementById("startMessage");
            if (startMessage) messageDiv.removeChild(startMessage);
            getHumanChoice = "paper";
            playGame();
        }
    });

    scissors.addEventListener("click", () => {
        if (!scissors.disabled) {
            const resetMessage = document.getElementById("resetMessage");
            if (resetMessage) messageDiv.removeChild(resetMessage);

            const startMessage = document.getElementById("startMessage");
            if (startMessage) messageDiv.removeChild(startMessage);
            getHumanChoice = "scissors";
            playGame();
        }
    });

    choiceMade = true;
}

/*
    setChoiceButtons(arg) will just enable or disable the buttons based on the 
    arg passed to it.
*/
function setChoiceButtons(enabled) {
    // this will enable all button cause we have already set the buttons to true up.
    rock.disabled = !enabled; //false
    paper.disabled = !enabled;
    scissors.disabled = !enabled;
}

/*
    End the game and set the setchoiceButtons(arg) to false so that the buttons
    get disabled and also enable the play button by setting
    play.disabled = false; and log the final scores of the human and computer.
*/
function endGame() {
    setChoiceButtons(false);
    play.disabled = false;
    showFinalMessage(`Final Scores => You: ${humanScore} | Computer: ${computerScore}`);
}

/*
    After the playbutton is enabled and clicked it will reset the game 
    which will reser all the socers and count to 0 and also 
    set the getHumanChhoice to null and then call the setChoiceButtons(true):
    the game is played for the first time then conditon is passed and if the count is 
    less then 5 then it will log the message "Game started. Choose rock, paper, or scissors!"
    and disable the play button by setting play.disabled = true;
    if the count is equal to 5 then it will log the message "Game reset. Let's play!" and disable the play button.
*/
function resetGame() {

    if (count >= 5) {
        play.disabled = true;
        let h2 = document.createElement("h2");
        h2.id = "resetMessage";
        showResultMessage(""); // Clear previous result message
        showSelectionMessage("", ""); // Clear previous selection messages
        showFinalMessage("");
        h2.textContent = "Game reset. Let's play!";
        messageDiv.appendChild(h2);


    }
    else {
        play.disabled = true; // Disable play button after reset
        let h2 = document.createElement("h2");
        h2.id = "startMessage";
        h2.textContent = "Game started. Choose rock, paper, or scissors!";
        messageDiv.appendChild(h2);
        // Reset choiceMade for new game
        // console.log("Game started. Choose rock, paper, or scissors!");

    }
    humanScore = 0;
    computerScore = 0;
    count = 0;
    getHumanChoice = null;
    setChoiceButtons(true);

}

// Start button click
play.addEventListener("click", () => {
    resetGame();
    setupChoiceListeners();
});





