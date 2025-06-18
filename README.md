# ROCK PAPER SCISSORS
# Rock Paper Scissors Game (Console Version)

This is a simple Rock-Paper-Scissors game implemented in JavaScript that runs in the browser console. The player plays against the computer, and the game continues in sets of five rounds with an option to play again.

## 📜 Features

- Accepts human input via `prompt()`
- Computer randomly selects Rock, Paper, or Scissors
- Keeps track of both human and computer scores
- Announces the result of each round
- After 5 rounds, prompts the player to continue or end the game
- Final scores are displayed when the player exits

## 🧠 Game Logic

- `rock` beats `scissors`
- `scissors` beats `paper`
- `paper` beats `rock`
- Same choices result in a draw

## 🔧 How It Works

1. **Get Human Choice**  
   Prompts the user to enter their choice: `rock`, `paper`, or `scissors`.

2. **Get Computer Choice**  
   Randomly selects one of the three options.

3. **Play Round**  
   Compares the choices and updates the score based on the result.

4. **Play Game**  
   Repeats the game for 5 rounds, then asks the user if they want to play again. Ends the game and prints the scores if the user chooses not to continue.

## ▶️ How to Run

1. Open your browser.
2. Press `F12` or `Ctrl + Shift + I` to open the Developer Console.
3. Paste the code into the console and press Enter.
4. Follow the prompts to play the game!

## 📌 Example Output
```
Enter your word: rock
You lose! paper beats rock
Enter your word: scissors
You win! scissors beats paper
Enter your word: paper
You lose! scissors beats paper
Enter your word: rock
You win! rock beats scissors
Enter your word: scissors
Draw!
Wanna Continue again? no
Your Score: 2
Computer Score: 3
```



## 🚀 Future Improvements (Optional Ideas)

- Add input validation (only allow rock, paper, or scissors)
- Create a graphical UI version using HTML/CSS
- Add sound or animation for each round

---

Happy coding! 🎮




