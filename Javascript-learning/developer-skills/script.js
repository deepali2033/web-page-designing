"use strict";
let score = 20;
const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = parseInt(document.querySelector(".guess").value);
  console.log("aaa", guess, secretNumber);
  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number ";
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too Low ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game! ";
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game! ";
    }
  }
});
