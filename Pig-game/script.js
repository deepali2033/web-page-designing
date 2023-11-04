"use strict";
const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnhold = document.querySelector(".btn--hold");
console.log(score0EL, score1EL);
//starting condition//
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  const dice = math.trunc(math.random() * 6) + 1;
  diceEL.classList.remove("hidden");
  diceEL.src = `dice-${dice}.png`;
  console.log(dice);
});
