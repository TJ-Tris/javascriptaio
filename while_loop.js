let guessNumber = 0;
const numberToGuess = 71;
let guess;
/* while (guess != numberToGuess) {
  guess = Math.floor(Math.random() * 100);
  guessNumber++;
}*/
do {
  guess = Math.floor(Math.random() * 100);
  guessNumber++;
} while (guess != numberToGuess);
document.getElementById("root").innerHTML = `
      <h2>I guessed it!<h2>
      <p>It only took me ${guessNumber} guesses!</p>`;
