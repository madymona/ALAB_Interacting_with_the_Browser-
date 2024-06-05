//variables
let randomNumber
let guessCount
const maxGuesses = 5
const app = document.getElementById("app")

//Create element for the title, description, start button, message, and guesses. Append these elements to  app element 
const title = document.createElement("h1")
title.textContent = "Guess the Number Game"
app.appendChild(title)

const description = document.createElement("p")
description.textContent = "Try to guess the number between 1 and 50!"
app.appendChild(description)

const startButton = document.createElement("button")
startButton.id = "startGame"
startButton.textContent = "Start Game"
app.appendChild(startButton)

const message = document.createElement("p")
message.id = "message"
app.appendChild(message)

const guesses = document.createElement("p")
guesses.id = "guesses"
app.appendChild(guesses)

function startGame() {
  //Generate a random number between 1 and 50
  randomNumber = Math.floor(Math.random() * 50) + 1
  guessCount = 0
  message.textContent = ""
  guesses.textContent = ""
  //Start a loop for guessing
  function guessLoop() {
    //guess count is less than the maximum guesses. Prompt the player to enter their guess
    if (guessCount < maxGuesses) {
      const userGuess = Number(prompt("Enter your guess (between 1 and 50):"))
      guessCount++
      //if it is true, congratulate the player
      if (userGuess === randomNumber) {
        alert(
          `Congratulations! You guessed the number in ${guessCount} tries.`
        )
        message.textContent = `Congratulations! You guessed the number in ${guessCount} tries.`
        //If it's too high or low, inform and continue the loop
      } else if (userGuess > randomNumber) {
        alert("Too high! Try again.")
        message.textContent = "Too high! Try again."
        setTimeout(guessLoop, 300)
      } else {
        alert("Too low! Try again.")
        message.textContent = "Too low! Try again."
        setTimeout(guessLoop, 300)
      }
       //Display the number of guesses made
      guesses.textContent = `Guesses: ${guessCount}`
      // if the guess count reaches the maximum guesses and the player hasn't guessed the number, inform the the correct number
      if (guessCount === maxGuesses && userGuess !== randomNumber) {
        alert(
          `You've run out of guesses. The correct number was ${randomNumber}.`
        )
        message.textContent = `You've run out of guesses. The correct number was ${randomNumber}.`
      }
    }
  }

  guessLoop()
}
//event listener to the start button that calls the start game function when clicked
startButton.addEventListener("click", startGame)
