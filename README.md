# ROCK PAPER SCISSORS
# Rock Paper Scissors Game (Console Version)

This is a simple Rock-Paper-Scissors game implemented in JavaScript that runs in the browser console. The player plays against the computer, and the game continues in sets of five rounds with an option to play again.

## 📜 Features

🎮 Gameplay
- Player vs Computer game logic.

- First to 5 wins ends the game.

- Buttons for Rock, Paper, and Scissors with visual icons/images.

- Dynamic round result display (win, lose, draw).

- Final result announcement after 5 rounds.

🧼 Game Reset
- Clicking the Play button:

- Starts or resets the game depending on round count.

- Resets all scores and messages.

Disables or enables buttons as appropriate.

🧱 UI and DOM Structure
All elements (buttons, messages) are dynamically created and appended using JavaScript.

Messages for selections, round results, and final result are shown inside a dedicated message container.

Uses SVG/webp/png icons to visually represent Rock, Paper, and Scissors.

Prevents unnecessary re-adding of event listeners using a choiceMade flag.

🛡️ Input Control
Buttons are disabled when not in use to prevent premature clicks.

The Play button becomes active only after 5 rounds are completed.

## 🧠 Game Logic

- `rock` beats `scissors`
- `scissors` beats `paper`
- `paper` beats `rock`
- Same choices result in a draw

## 🔧 How It Works

1. **Get Human Choice**  
- first the human choice is set to Null
- and after the click play button, the 3 button will get enabled 
- if the user clicke either (rock, paper or scissors) the human choice wll hold
the value. 

2. **Get Computer Choice**  
   Randomly selects one of the three options.

3. **Play Round**  
   Compares the choices and updates the score based on the result.

4. **Play Game**  
   Repeats the game for 5 rounds, then asks the user if they want to play again. Ends the game and display the scores on page.

## 📌 Example Output
```
you selected : rock
computer selected : paper
You win! rock beats paper

You selected : paper
Computer selected: rock
You win! paper beats rock

You selected : rock
Computer selected: rock
It's a draw.

You selected : rock
Computer selected: paper
You lose! paper beats rock

You selected : scissors
Computer selected: rock
You lose! rock beats scissors

Final Scores => You: 2 | Computer: 2
```

## 🚀 Future Improvements (Optional Ideas)

- Add input validation (only allow rock, paper, or scissors)
- Create a graphical UI version using HTML/CSS
- Add sound or animation for each round

---

Happy coding! 🎮




