// Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize variables
var guessInput = document.getElementById("guessInput");
var message = document.getElementById("message");
var guessCount = 0;
var guessLimit = 10;

// Function to handle the user's guess
function guess() {
  var userGuess = parseInt(guessInput.value);
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.innerHTML = "Please enter a valid number between 1 and 100.";
  } else {
    guessCount++;
    if (userGuess === randomNumber) {
      message.innerHTML = "Congratulations, you guessed the number in " + guessCount + " guesses!";
      guessInput.disabled = true;
    } else if (guessCount === guessLimit) {
      message.innerHTML = "Sorry, you ran out of guesses. The number was " + randomNumber + ".";
      guessInput.disabled = true;
    } else if (userGuess < randomNumber) {
      message.innerHTML = "Your guess is too low. Guesses remaining: " + (guessLimit - guessCount);
    } else {
      message.innerHTML = "Your guess is too high. Guesses remaining: " + (guessLimit - guessCount);
    }
  }
}