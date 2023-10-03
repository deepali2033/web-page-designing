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

// const country = "USA";
// function percentageOfWorld1(population) {
//   return (population / 7500) * 100;
// }
// const percUSA = percentageOfWorld1(333);
// console.log(
//   `${country} has  million people,so it's about ${percUSA} of the world population`
// );

// function percentageOfWorld1(population) {
//   return (population / 7500) * 100;
// }
// function describePopulation(country, population) {
//   const percentage = percentageOfWorld1(population);
//   if (percentage > 10) {
//     return `${country}'s population is too high`;
//   } else {
//     return `${country}'s population is not too high`;
//   }
// }
// //  return `${country} has ${population} million people, which is about ${percentage}% of the world.`;

// console.log(describePopulation("USA", 333));
// console.log(describePopulation("India", 1305));
// console.log(describePopulation("Canada", 40));
// "use strict";
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage(44, 23, 71));
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreKoalas, scoreDolphins);
// //  const checkWinner = (avgDolphins, avgKoalas)=>
// //   (avgDolphins>avgKoalas) ;
// const checkWinner = function (avgKoalas, avgDolphins) {
//   // const avgDolphins = calcAverage(scoreKoalas);
//   if (avgKoalas >= avgDolphins) {
//     console.log(`koalas win (${avgKoalas} vs ${avgDolphins}`);
//   } else if (avgDolphins >= avgKoalas) {
//     console.log(`koalas win (${avgDolphins} vs ${avgKoalas})`);
//   } else {
//     console.log("No team wins...");
//   }
// };
// checkWinner(scoreKoalas, scoreDolphins);

/////////Array///////
"use strict ";
/*
const popuplations = [113, 33, 40, 130];
console.log(popuplations.length === 4);

function percentageOfWorld1(population) {
  return (population / 7500) * 100;
}
const percentage = [
  percentageOfWorld1(popuplations[0]),
  percentageOfWorld1(popuplations[1]),
  percentageOfWorld1(popuplations[2]),
  percentageOfWorld1(popuplations[3]),
];
console.log(percentage);
*/

/////////// Basic Array Operations (Methods)///////
/*
const neighbour = ["china", "pakistan", "bangladesh", "bhutan"];
neighbour.push("utopia");
console.log(neighbour);
neighbour.pop();
console.log(neighbour);
if (!neighbour.includes("Germany")) {
  console.log(`Probably not a central Indian countray:D`);
}
neighbour[neighbour.indexOf("pakistan")] = "Republic of Pakistan";
console.log(neighbour);
*/

/////////CHALLENGE#2/////////
/*
function calcTip(bills) {
  if (bills >= 50 && bills <= 300) {
    return bills * 0.15;
  } else {
    return bills * 0.2;
  }
}
bills = [125, 555, 44];
tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
*/

//////////////Object AND  Dot vs. Bracket Notation///////////

// const courses = { languge: "Javascript" };
// console.log(typeof courses);
/*
const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 1304,
  neighbours: ["China", "Pakistan", "Bangladesh"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million finnish-speaking people, ${myCountry.neighbours.length} countries and a capital called ${myCountry.capital}`
);
console.log(
  `${myCountry["country"]} has ${myCountry["population"]} million finnish-speaking people, ${myCountry["neighbours"].length} countries and a capital called ${myCountry["capital"]}`
);
*/

/////////// Object Methods ////////

/*const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 1304,
  neighbours: ["China", "Pakistan", "Bangladesh"],
  describe: function () {
    return `${this.country} has ${this.population} million finnish-speaking people,${this.neighbours.length} countries and a capital called ${this.capital}`;
  },
  checkIsland: function () {
    
    if (!this.neighbours) {
      return "true";
    } else {
      return "false";
    }
    
    // this.neighbours.length === 0 ? true : false;
  }


console.log(myCountry.describe());
console.log(myCountry.checkIsland());
*/

///////////CHALLENGE #3/////////
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.68,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
mark.calcBMI();
John.calcBMI();
console.log(mark.bmi, John.bmi);
if (John.calcBMI > mark.calcBMI) {
  console.log(`${John.fullName}'s BMI ( ${john.bmi}) 
is higher than ${mark.fullName}'s (${mark.bmi})!`);
} else {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) 
is higher than ${John.fullName}'s (${John.bmi})!`);
}
*/

/////////The For Loop/////////
/*
for (tbl2 = 2; tbl2 <= 20; tbl2 += 2) {
  console.log(tbl2);
}

for (let vot = 1; vot <= 50; vot++) {
  console.log(`votoer number ${vot} is currently voting`);
}
*/
/*

///////////: Looping Arrays, Breaking and Continuing////////
const jonas = [
  "jonas",
  "Schmedtmann",
  20049 - 2000,
  "teachar",
  ["michael", "peter", "steven"],
  true,
];
const types = [];
for (let i = 0; i < jonas.length; i++) {
  ///// reading from jonas array
  console.log(jonas[i], typeof jonas[i]);
  //////filling types array
  types[i] = typeof jonas[i];
  //////////or///////
  // types.push(typeof jonas[i]);
}
console.log(types);

*/
//////////-----ONLY STRINGS(Continue)------///////
/*
const jonas = [
  "jonas",
  "Schmedtmann",
  "teachar",
  20049 - 2000,
  ["michael", "peter", "steven"],
  true,
];
// // for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }
//////////------BREAK WITH NUMBER(break)-------////////
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
*/
/*
const popuplations = [113, 33, 40, 130];
const percentage2 = [];
function percentageOfWorld1(population) {
  return (population / 7500) * 100;
}
const percentage = [
  percentageOfWorld1(popuplations[0]),
  percentageOfWorld1(popuplations[1]),
  percentageOfWorld1(popuplations[2]),
  percentageOfWorld1(popuplations[3]),
];
// console.log(percentage);
for (i = 0; i < popuplations.length; i++) {
  const perc = percentageOfWorld1(popuplations[i]);
  percentage2.push(perc);
}
console.log(popuplations, percentage2);
*/
/////////////Looping Backwards and Loops in Loops///////////
/*
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
*/
/*
function calcTip(bills) {
  if (bills >= 50 && bills <= 300) {
    return bills * 0.15;
  } else {
    return bills * 0.2;
  }
}
bills = [125, 555, 44];
tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
*/
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};
for (i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
}
for (i = 0; i < bills.length; i++) {
  totals = bills[i] + tips[i];
  console.log(`${bills[i]} + ${tips[i]} = ${totals}`);
}
*/
/////////////Basic Programming Questions/////////////
// function sum(a, b) {
//   const sum = a + b;
//   return sum;
// }
function (){

}
// console.log(sum(23, 87));
