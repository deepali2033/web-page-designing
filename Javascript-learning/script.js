let js = "amazing";
if (js === "amazing") alert("JavaScript is Fun!");
// value and variable

//  let country = "India";
//  let continent = "Asia";
let population = 1390;
// console.log(country);
// console.log(continent);
console.log(population);

// Data Type

//  let isIsland = false;
let language;
// console.log(typeof isIsland);
// console.log(typeof country);
// console.log(typeof population);
// console.log(typeof language);

// Let, const and var
language = "Hindi";
const country = "India";
const continent = "Asia";
const isIsland = false;

console.log(country);
console.log(continent);
console.log(language);
console.log(isIsland);

// Basic Operators
console.log(population / 2);
population++;
console.log(population);

const FinlandPopulation = 6; // in million
const averagePopulation = 33;
console.log(FinlandPopulation < population);
console.log(averagePopulation > population);

const discription =
  country +
  "is in" +
  "" +
  continent +
  ", and its" +
  "" +
  population +
  "" +
  "million people speak " +
  language;
console.log(discription);

//Task
const massMark = 78;
const heighMark = 1.68;
const massJohn = 92;
const heightJohn = 1.95;

const BMIJohn = massJohn / (heightJohn * heightJohn);
const BMIMark = massMark / (heightMark * heightMark);
console.log(BMIJohn, BMIMark);
