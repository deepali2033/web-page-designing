// let js = "amazing";
// if (js === "amazing") alert("JavaScript is Fun!");
// // value and variable

// //  let country = "India";
// //  let continent = "Asia";
// let population = 1390;
// // console.log(country);
// // console.log(continent);
// console.log(population);

// // Data Type

// //  let isIsland = false;
// let language;
// // console.log(typeof isIsland);
// // console.log(typeof country);
// // console.log(typeof population);
// // console.log(typeof language);

// // Let, const and var
// language = "Hindi";
// const country = "India";
// const continent = "Asia";
// const isIsland = false;

// console.log(country);
// console.log(continent);
// console.log(language);
// console.log(isIsland);

// // Basic Operators
// console.log(population / 2);
// population++;
// console.log(population);

// const FinlandPopulation = 6; // in million
// const averagePopulation = 33;
// console.log(FinlandPopulation < population);
// console.log(averagePopulation > population);

// const description =
//   country +
//   " is in " +
//   continent +
//   " , and its " +
//   population +
//   " million people speak " +
//   language;
// console.log(discription);

// //Task
// const massMark = 78;
// const heightMark = 1.68;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const BMIMark = massMark / (heightMark * heightMark);
// console.log(BMIJohn, BMIMark);
// const markHigherBmi = BMIMark > BMIJohn;
// console.log(markHigherBmi);

//Strings and Template Literal

// let language = "Hindi";
// let country = "India";
// let continent = "Asia";
// let population = 1390;
// const description = ` ${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);

// Taking Decisions: if / else Statements
// const country = "india";
// const population = 13;
// if (population > 33) {
//   console.log(`${country} popuplation is 33 million above average `);
// } else {
//   console.log(
//     `${country} population  \n\is ${33 - population} millio below average`
//   );
// }

//  CODING CHALLENGE #2
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);
// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// //  Type Conversion and Coercion
// let A = "9" - "5"; //4
// let B = "19" - "13" + "17"; //617
// let C = "19" - "13" + 17; // 23
// let D = "123" < 57;
// let E = 5 + 6 + "4" + 9 - 4 - 2; //1143
// console.log(A, B, C, D, E);

// Equality Operators: == vs. ===

// let numNeighbour = prompt(
//   "How many neighbour countries does your country have?"
// );
// if (numNeighbour == 1) {
//   console.log("only 1 border!");
// } else if (numNeighbour > 1) {
//   console.log(" greater than 1");
// } else {
//   console.log("No border");
// }

// let numNeighbour = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// if (numNeighbour === 1) {
//   console.log("only 1 border!");
// } else if (numNeighbour > 1) {
//   console.log(" greater than 1");
// } else {
//   console.log("No border");
// }

// let country = "india";
// let language = prompt("enter your mother tungs");
// let population = prompt("enter your country population");
// let isItIsland = prompt("is it isItIsland");
// if (language == "english" && population < 50 && !isIsland) {
//   console.log(`You should live in (${country}) `);
// } else {
//   console.log(` ${country} does not meet your criteria :(
//   `);
// }

// const day = prompt("Enter day!");
// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day == "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :)");
// } else {
//   console.log("Not a valid day!");
// }

//  The switch Statement

// const language = "english";
// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great Language too :D");
// }

//: The Conditional (Ternary) Operator
"use strict";
// const country = "india";
// const population = "33";
// const countryPopulation =
//   population > 33
//     ? country + " population is above average"
//     : country + " population is below average";
// console.log(countryPopulation);

// : Functions

// function describeCountry(country, population, capitalCity) {
//   const descriotion = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return descriotion;
// }
// console.log(describeCountry("India", 1304, "Delhi"));
// console.log(describeCountry(" United States of America.", 333, "Washington"));
// console.log(describeCountry("Canada", 40, "Ottawa"));
const country = "china";
function percentageOfWorld1(population) {
  return (population / 7500) * 100;
}
const percUSA = percentageOfWorld1(333);
console.log(
  `${country} has  million people,so it's about ${percUSA} of the world population`
);
