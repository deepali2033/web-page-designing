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
    document.querySelector("body").style.backgroundColor = "#4de424";
    document.querySelector(".guess").style.backgroundColor = "#eee";
    document.querySelector(".guess").style.color = "#222";
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game! ";

      document.querySelector("body").style.backgroundColor = "#fc330b";
      document.querySelector(".guess").style.backgroundColor = "#eee";
      document.querySelector(".guess").style.color = "#222";
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game! ";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".guess").value = " ";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing....";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").style.backgroundColor = "#222";
  document.querySelector(".guess").style.color = "#eee";
});
