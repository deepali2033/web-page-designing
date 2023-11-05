"use strict";
const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnhold = document.querySelector(".btn--hold");
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");
// console.log(score0EL, score1EL, current0EL, current1EL);
//starting condition//
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add("hidden");

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//  Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generating a random dic roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEL.classList.remove("hidden");
  diceEL.src = `dice-${dice}.png`;
  // console.log(dice);

  // 3. Check for rolled 1
  if (dice !== 1) {
    currentScore += dice;
    console.log(
      (document.getElementById(`current--${activePlayer}`).textContent =
        currentScore)
    );
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
