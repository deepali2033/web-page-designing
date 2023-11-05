"use strict";
const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnhold = document.querySelector(".btn--hold");
const current0EL = document.querySelector(".current--0");
const current1EL = document.querySelector(".current--1");
console.log(score0EL, score1EL, current0EL, current1EL);
//starting condition//
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add("hidden");

let currentScore = 0;

//  Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generating a random dic roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEL.classList.remove("hidden");
  diceEL.src = `dice-${dice}.png`;
  console.log(dice);

  // 3. Check for rolled 1
  if (dice !== 1) {
    currentScore += dice;
    // current0EL.textContent = currentScore;
    console.log(dice, currentScore);
  } else {
  }
});
