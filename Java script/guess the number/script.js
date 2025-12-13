let secNumber = Math.floor(Math.random() * 10) + 1;

const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submit");
const message = document.getElementById("message");

submit.addEventListener("click", function () {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 10) {
    message.textContent = "Please enter a number between 1 and 10.";
    return;
  }

  if (userGuess > secNumber) {
    message.textContent = "OOPS! SORRY!!! TRY A SMALLER NUMBER.";
  } else if (userGuess < secNumber) {
    message.textContent = "OOPS! SORRY!!! TRY A LARGER NUMBER.";
  } else {
    message.textContent = "CONGRATULATIONS!!! YOU GUESSED IT RIGHT!";
  }
});
