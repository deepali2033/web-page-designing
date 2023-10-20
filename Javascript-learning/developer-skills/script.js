"use strict";
let score = 20;

document.querySelector(".check").addEventListener(".click", function () {
  document.querySelector(".message").textContent = "correct number";
  console.log((document.querySelector(".message").textContent = "number"));

  // if( score===guess){
  //   console.log(document.querySelector(".message").textContent)='Correct Number';
  // }
  // else if (!guess){
  //   console.log(document.querySelector(".message").textContent)='No number';
  // }
  // else if (score<guess){
  //   console.log(document.querySelector(".message").textContent)='Too high';
  // }
  // else if (score>guess){
  //   console.log(document.querySelector(".message").textContent)='Too low';
  // }
});
