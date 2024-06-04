//variables
let randomNumber;
let guessCount;
const maxGuesses = 5;
const app = document.getElementById("app");

//Create and append elements
const title = document.createElement("h1");
title.textContent = "Guess the Number Game";
app.appendChild(title);

const description = document.createElement("p");
description.textContent = "Try to guess the number between 1 and 50!";
app.appendChild(description);

const startButton = document.createElement("button");
startButton.id = "startGame";
startButton.textContent = "Start Game";
app.appendChild(startButton);

const message = document.createElement("p");
message.id = "message";
app.appendChild(message);

const guesses = document.createElement("p");
guesses.id = "guesses";
app.appendChild(guesses);

function startGame() {
  randomNumber = Math.floor(Math.random() * 50) + 1;
  guessCount = 0;
  message.textContent = "";
  guesses.textContent = "";

  function guessLoop() {
    if (guessCount < maxGuesses) {
      const userGuess = Number(prompt("Enter your guess (between 1 and 50):"));
      guessCount++;

      if (userGuess === randomNumber) {
        alert(
          `Congratulations! You guessed the number in ${guessCount} tries.`
        );
        message.textContent = `Congratulations! You guessed the number in ${guessCount} tries.`;
      } else if (userGuess > randomNumber) {
        alert("Too high! Try again.");
        message.textContent = "Too high! Try again.";
        setTimeout(guessLoop, 300);
      } else {
        alert("Too low! Try again.");
        message.textContent = "Too low! Try again.";
        setTimeout(guessLoop, 300);
      }

      guesses.textContent = `Guesses: ${guessCount}`;

      if (guessCount === maxGuesses && userGuess !== randomNumber) {
        alert(
          `You've run out of guesses. The correct number was ${randomNumber}.`
        );
        message.textContent = `You've run out of guesses. The correct number was ${randomNumber}.`;
      }
    }
  }

  guessLoop();
}

startButton.addEventListener("click", startGame);
