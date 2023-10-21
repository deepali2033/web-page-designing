"use strict";
let score = 20;
let highscore = 0;
const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = secretNumber;
const writeMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = parseInt(document.querySelector(".guess").value);
  console.log("aaa", guess, secretNumber);
  if (!guess) {
    writeMessage("No Number!");
    // document.querySelector(".message").textContent = "No number";
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number ";
    writeMessage("🥳 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#4de424";
    document.querySelector(".guess").style.backgroundColor = "#4de424";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // else if (guess !== secretNumber) {
    //   if (score > 1) {
    //     document.querySelector(".message").textContent =
    //       guess < secretNumber ? "📉 Too high" : "📈 Too low";
    //   }
    // }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " 📈 Too low ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game! ";

      document.querySelector("body").style.backgroundColor = "#fc330b";
      // document.querySelector(".guess").style.backgroundColor = "#eee";
      // document.querySelector(".guess").style.color = "#222";
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too high ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game! ";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // score = 20;
  // secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".guess").value = " ";
  document.querySelector(".number").textContent = "?";
  writeMessage("Start guessing....");
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
