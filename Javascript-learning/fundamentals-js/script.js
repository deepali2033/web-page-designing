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

///////// Taking Decisions: if / else Statements////////////

// const country = "india";
// const population = 13;
// if (population > 33) {
//   console.log(`${country} popuplation is 33 million above average `);
// } else {
//   console.log(
//     `${country} population  \n\is ${33 - population} millio below average`
//   );
// }
/*
const per = prompt("Enter percentage  :");

if (per >= 80 && per <= 100) {
    document.write("You are in the merit list. <br>");
} else if (per >= 45 && per < 80) {
    document.write("You are in 2nd division. <br>");
} else if (per >= 33 && per < 45) {
    document.write("You are in 3rd division. <br>");
} else if (per < 33) {
    document.write("You have failed. <br>");
} else {
  document.write("please write valid percentage" )
}
 
*/

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

///////// The switch Statement/////////
/*
const language = "english";
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great Language too :D");
}*/
/*
const per = prompt("Enter percentage  :");
switch (true) {
  case per >= 80 && per <= 100:
    document.write("your in merit list <br>");
    break;
  case per >= 60 && per <= 79:
    document.write("your in 1st division <br>");
    break;
  case per >= 45 && per <= 59:
    document.write("your in 2nd division <br>");
    break;
  case per >= 33 && per <= 45:
    document.write("your in 3rd division <br>");
    break;
  case per <= 33:
    document.write("your fail <br>");
    break;
  default:
    document.write("write valid percentage <br>");
}
*/

//: The Conditional (Ternary) Operator

// const country = "india";
// const population = "33";
// const countryPopulation =
//   population > 33
//     ? country + " population is above average"
//     : country + " population is below average";
// console.log(countryPopulation);

////////// : Functions ///////

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
("use strict "); /*
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
/*
var createCounter = function (n) {
  return function () {
    let cur = (n += 1);
    return cur;
  };
};

const coun = createCounter(11);
coun(); // 10
coun(); // 11
coun(); // 12
document.write(coun());
*/
/////////(array join ,isarray and concat method)
/*
const w = ["pakistan", "Afghanistan", "Iran", "Oman"];
const e = ["Myanmar", "Thiland", "Vietnam", "bhutan"];

const neighbour = w.concat(e, "Shrilanka");
const nei = neighbour.join(" - ");
document.write(neighbour, "<br><br>");
document.write(nei, "<br>");
const a = Array.isArray(e);
if (a == true) {
  document.write("this is an arrey");
}
*/

///////////indexOf & lastIndexOf///////
/*
var a = ["Deepali", "Shivani", "Anjali", "Ritika"];
//(indexOf("search item",start))
var b = a.indexOf("Anjali", 0);
document.write(b, "<br>");
//(lastIndexOf("searchnitem",start from last))
var c = a.lastIndexOf("Deepali", 2);
document.write(c);
*/
//////////includes arrey///////////
/*
var a = ["Deepali", "Shivani", "Anjali", "Ritika"];
var c = a.includes("Ritika");
var b = a.includes("anshu");
document.write(c, "<br>", b);
*/
///////arrey  slice and splice////////

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

// //////////paturns///////
// var n = prompt("enter n number");

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }
/*
var n = prompt("Enetr n number ");
i = 1;
while (i <= n) {
  // k = 1;
  // while (k <= i) {
  //   document.write(k);
  //   k++;
  // }
  j = 1;
  while (j <= n - i) {
    document.write("*");
    j++;
  }
  k = 1;
  while (k <= i) {
    document.write(k);
    k++;
  }

  document.write("<br>");
  i++;
}
*/

/////////////Basic Programming Questions/////////////
// function sum(a, b) {
//   const sum = a + b;
//   return sum;
// }

// console.log(sum(23, 87));
// const x = prompt("Enter X value");
// const y = prompt("Enter Y value");
// const z = (x + 10) / (3 * y);
// console.log(z);
// function main(x, y) {
//   const z = (x + 10) / (3 * y);
//   return z;
// }
// const zVolue = main(100.6);
// console.log(Math.trunc(zVolue));

// let i = 2;

// let b = 1;
// while (i <= 20 && b <= 10) {
//   console.log(`2*${b} = ${i}`);
//   i = 2 * b;
//    b++;
// }
///////////Array que from section-5(59 lec)/////////
/*
const calTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  console.table(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] == String) continue;
    if (temps[i] > max) max = temps[i];

    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
const aplitude = calTempAmplitude([9, 6, "error", -2], [10, 4, -20]);
console.log(aplitude);
*/
/*
const printForecast = function (arr) {
  console.log(`....${arr[0]}C in 1 days`);
  console.log(`....${arr[1]}C in 2 days`);
  console.log(`....${arr[2]}C in 3 days`);
};

console.log(printForecast(21, 32, 45));
*/
/*
const a = 'jonas';
first()
function first(){
  const b='hello';
  second()
}
function second(){
  const c ='hii'
  third()
}
const c ='okay';
function third(){
  const d ='hey'
  const c='okay'
  console.log(d+c);
}*/
/*
 const name ='deepali';
 const first=()=>{
  let a=1;
  const b= second(7,9);
  a=a+b;
  return a;

 }
 function second(x,y){
  var c=8;
  return c;
 }
 const x=console.log( first());
 */
/////////scoping/////////////////
/*
'use strict';

function calcAge(birthYear){
  const age =2037-birthYear;
  console.log(firstName);
  return age;
}
*/
("use strict");

/*
////////////Destructuring Arrey//////////
const restaurant ={
  name:'Classico I taliano',
  location:'Via Angelo Tanvajti 23, Firenze, Italy',
  categories:['Italin','Pizzeria','Vegetarian','Organic','fastFood'],

starterMenu: ['Focaccia','Bruschetta','Garlic','Bread','Caprese Salad'],
mainMenu:['Pizza','Pasta','Risotto'],
openingHours:{
  thu:{
    open:12,
    close:22
  },
  fri:{
    open:11,
    close:23,
  },
  sat:{
    open:0, //open 24 hours
    close:24,
  },
},
order: function(starerIndex,mainIndex){
  return[ this.starterMenu[starerIndex] ,this.mainMenu[mainIndex]];
}
}
const arr=[2,4,6];
const a=arr[0];
const b=arr[1];
const c=arr[2];
const [x,y,z]=arr;
console.log(x,y,z);
console.log(arr);


 let [main,secodary,...restvalue]=restaurant.categories;
  console.log(main,secodary,...restvalue);

// switching variable

//  const temp =main;
//  main=secondary;
//  secondary=temp;
//  console.log(main,secondary)

[main ,secodary]=[secodary,main];
console.log(main,secodary);


//receive 2 return values from a function
const[starter,mainCourse]=restaurant.order(2,1);
console.log(starter,mainCourse);


// Nested destrucuring
const nested =[,4,5,[3,6]];
const [i, ,[j,k]]=nested;
console.log(i,j,k)

// Default values
const[p,q,r]=[9,7];
console.log(p,q,r);
*/

/*
//////////////////Object Destructuring////////////
// Example 1: Basic object destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",
};

const { firstName, lastName, age } = person;

console.log(firstName);  // Output: John
console.log(lastName);   // Output: Doe
console.log(age);        // Output: 30


// Example: Renaming variables during object destructuring
const student = {
  name: "Alice",
  age: 22,
  grade: "A",
};

const { name: studentName, age: studentAge, grade: studentGrade } = student;

console.log(studentName);  // Output: Alice
console.log(studentAge);   // Output: 22
console.log(studentGrade); // Output: A

// Example: Providing default values in object destructuring
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};

const { make, model, color = "blue" } = car;

console.log(make);   // Output: Toyota
console.log(model);  // Output: Camry
console.log(color);  // Output: blue (default value)


// Example: Nested object destructuring
const employee = {
  id: 123,
  name: "Jane",
  position: "Developer",
  address: {
    city: "San Francisco",
    zip: "94105",
  },
};

const { name, position, address: { city, zip } } = employee;

console.log(name);  // Output: Jane
console.log(position);  // Output: Developer
console.log(city);  // Output: San Francisco
console.log(zip);  // Output: 94105
*/

/*
///////////Spread Operator(...)///////
const arr=[4,6,9];
const badNewAee=[1,2,arr[0],arr[1],arr[2]]
console.log(badNewAee)

const newArr=[1,2,...arr]
console.log(badNewAee)
console.log(...newArr)

// Join 2 array //
 const array={starterMenu: ['Focaccia','Bruschetta','Garlic','Bread','Caprese Salad'],
mainMenu:['Pizza','Pasta','Risotto']}
const menu=[...array.starterMenu,...array.mainMenu]
console.log(menu)

const str='deepali';
const letters=[...str,'','s.'];
console.log(letters)
*/
///////////section-9(coding Challenge #1)///////////
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [playe1,playe2]=game.players;
document.write(playe1);
 document.write(playe2)
 console.log(playe1,playe2)

// 2.
 const[gk,...fieldPlayer]=playe1;
 console.log(gk,fieldPlayer)

// 3.
 const allpalyers=[...playe1,...playe2]
 console.log(allpalyers)

 // 4.
 const playersFinal = [...playe1,'Thiago','Coutinho','perisic']
 console.log(playersFinal)

 // 5.
 const{odds:{team1,x:drow,team2}}=game;
 console.log(team1,drow,team2)

 // 6.
 const printGoals=function(...players){
  console.log(players)
  console.log (`${players.length} goals were scored`)
 }
 printGoals('Davies','Mulller','Lewandowski','Kimmich')
 printGoals('Davies','Mulller')
 printGoals(...game.scored)

// 7.
team1>team2 && console.log('Team 1 is more Likely to win')
team1<team2 && console.log('Team 2 is more Likely to win')

*/

/*
// Short-circuiting with &&
let result = false|| someFunction(); // Since the left operand is false, someFunction() is not called.

// Another example
let isLoggedIn = false;
let isIndia =true;
let username = isLoggedIn || isIndia; 
console.log(result)
 console.log(username)
 document.write(result)
 */
/*
//////////object.key ,value and entries////
const user={
  firstName:'deepali',
  lastName:'Tanwar',
  age: 23,
  gender:"female",

}
console.log('Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
*/

///////set///////
/*
const staff=['waiter','chif','waiter','manger','chef','waiter']
const staffUnique = new Set(staff);
console.log(staffUnique);
console.log(new Set(['waiter','chif','waiter','manger','chef','waiter']).size)
console.log(new Set('Jonas').size)
*/

///////////Maps-Fundamentals ///////////
/*
const rest =new Map();
rest.set('name','deepali')
rest.set('age',23)
rest.set('job','student')
console.log(rest.set(3,"siblings"))
rest.set('categories',['Italian','Pizzeria',"Vegetarian",'Organic'])
.set('open',11)
.set('close',23)
.set(true,'we are open :D')
.set(false,'we are closed :(');
console.log(rest.get('name'));
console.log(rest.get('age'))
*/

/////////////challange #3////////////
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);


// 1.
const events = [...new Set(gameEvents.values())]
console.log(events)
// 2.
gameEvents.delete(64)
console.log(gameEvents)

*/

////////////working with strings////////
/*
const airline='Tap Air Portugal'
const plane ='A320';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// fix capitalization in name
const passenger = 'deePAli';
const passengerLower=passenger.toLowerCase();
const passengerCorrect =passengerLower[0].toUpperCase()+passengerLower.slice(1)
console.log(passengerCorrect)


// comparing email
const email= 'hello@deepali.io'
const  loginEmail= ' HellO@Deepali.Io \n';
const lowerEmail=loginEmail.toLocaleLowerCase().trim();
console.log(lowerEmail)
   // const trimEmail=lowerEmail.trim()
   // console.log(trimEmail)
console.log(email===lowerEmail)

// replacing
const priceGB = '224,44&'
const priceUS = priceGB.replace('&',"$").replace(',','.')
console.log(priceUS);
 const annoucement='All passenger come to boaring door 23, Boarding door 23!'
 console.log(annoucement.replace(/door/g,'gate'))
// console.log(annoucement.replaceAll('door','gate'))
*/
/*
console.log(plane[0]);
console.log(plane[1])
console.log(plane[2])

console.log(airline.indexOf('r'));
console.log(airline.length);

console.log(airline.lastIndexOf('r'))
console.log(airline.indexOf('Portugals'))

console.log(airline.slice(4,10))

console.log(airline.slice(0,airline.indexOf(' ')))
console.log(airline.slice(airline.lastIndexOf(' ')+ 1))
console.log(airline.slice(-2))
console.log(airline.slice(1,-1))

const checkMiddleSeat= function(seat){
  const s = seat.slice(-1);
  if ( s==="B" || s=="E")console.log('you got the middle seat');
  else console.log('you got lucky')
}
checkMiddleSeat('11B')
checkMiddleSeat('33C')
checkMiddleSeat('9E')

console.log(new String('jonas'))
console.log(typeof new String('jonas'))
console.log(typeof new String('jonas').slice(1))

*/
/*
console.log('a+vary+nice+strng'.split('+'));
console.log('deepali tanwar 23'.split(' '))
const[ firstName ,lastName,age]='deepali tanwar 23'.split(' ');
console.log(age,firstName)
const newName = ['miss.',firstName,lastName.toUpperCase()].join(' ')
document.write(newName)

const capitalizeName =function(name){
  const names = name.split(' ');
  const nameUpper =[];
  for (const n of names){
   // nameUpper.push(n[0],n[0].toUpperCase()+ n.slice(1));
    nameUpper.push(n.replace(n[0].toUpperCase()))
  }
  console.log(nameUpper.join(' '))
}
capitalizeName(' jessica ann smith davis')
capitalizeName('jonas schmedtmann')
// Padding 
const message ='Go to gate 23!';
console.log(message.padStart(20,'+').padEnd(35,'+'))
console.log('Deepali'.padStart(20,'+').padEnd(30,"+"))
 const maskCreditCard = function(number){
  const str =number +'';
  const last =str.slice(-4);
  return last.padStart(str.length,"*")
 }
console.log(maskCreditCard(2362327624231))
console.log(873592136499818)
console.log(maskCreditCard('12554623442337917499'))


//Repeat
const message2= 'Bad weather.... All Departues Delayed... ';
console.log(message2.repeat(5));
const plannesInline = function(n){
  console.log(`There  are ${n} planes in line ${'⚽️'.repeat(n)}`)
}
plannesInline(6)
plannesInline(9)
*/

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!;
*/

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click',function(){
  const text =document.querySelector('textarea').value;
  console.log(text);
const rows =text.split('\n')
console.log(rows)
 
for(const [i, row] of rows.entries()){
 const [first,second]= row.toLowerCase().trim().split('_')

  console.log(first,second);
  const output =`${first}${second.replace(
    second[0],
    second[0].toUpperCase()
  )}`
  console.log( `${output.padEnd(20)}${'✅'.repeat(i +1)}`);
}
});

*/

/*
const flights =
  `_Delayed_Departure;fao93766109;txl2133758440;11:25
  +_Arrival;bru0943384722;fao93766109;11:45
  +_Delayed_Arrival;hel7439299980;fao93766109;12:05
  +_Departure;fao93766109;lis2323639855;12:30`;
console.log(flights.split('+'))
const getCode =str => str.slice(0,3).toUpperCase();
for (const flight of flights.split('+')){
  const [type ,from, to,time]=flight.split(';');
const output=`${type.startsWith('_Delayed') ?'🔴':''}${type.replaceAll('_',' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(":",'h')})`.padStart(36);
  // console.log(flight.split(';'))
console.log(output)
}
*/

///////////Defaufalt parameters/////////
/*
const booking=[]
const createBooking = function(flightNum,numPassengers=2,price=220*numPassengers){
  const bookings={
    flightNum,
    numPassengers,
    price,
  }
  console.log(bookings)
  booking.push(bookings)
}
createBooking('AH203')
*/

// const flight='LH243';
// const jonas={
//   name:'Jonas Schmedtmann',
//   passport:23689757667
// }
// const checkIn =function (flightNum,passenger){
// flightNum='LH334';

// }
// passenger.name='Mr.'+passenger.name;
// if(passenger.passport===2368975767){

//   alert('Checked in')
// }
// else{
//   alert('Wrong passport!')
// }

// checkIn(flight,jonas)
// console.log(flight,jonas)

// function callbackFunction(){
//   console.log('I am  a callback function');
// }

///////////////higher order function///////////
// // Callback function, passed as a parameter in the higher order function
/*
function callbackFunction(){
  console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
  console.log('I am higher order function')
  func()
}

higherOrderFunction(callbackFunction)*/
/*
const greet =function(greeting){
  return function (name){
    console.log(`${greeting} ${name} `)
  }
}
const greetingHey= greet('Hey') 
greetingHey('Deeopali') 
greetingHey('Rashi')

greet('Hello')('Anjali')
*/
// challenge
// const greetArr= greeting => name => console.log(`${greeting} ${name} what's up!`)
// greetArr('Hii')('Krishhh');
/*
const lufthansa = {
  airLine:'Lufthansa',
  iataCode:'LH',
  booking:[],
  book(flightNum,name){
   console.log(
        `${name} booked a seat on ${this.airLine} flight ${this.iataCode} ${flightNum}`
      )
      this.booking.push({flight:`${this.iataCode}${flightNum}`,name})
    }
}
  lufthansa.book(234,'deepali')
  console.log(lufthansa)
*/
/*
console.log(`I am a ${job}`)
var job ='Web Develper'
var company='TCS'
console.log(`I am a ${job}`)

function whhoAmI(){
  console.log('I am a '+ job +' in '+company);
var job ='Full Stack'
console.log('I am a'+job)
}

// whhoAmI.letshavefun='Allrihjt ';
console.log(whhoAmI.letshavefun)
whhoAmI()
*/
/*
const outerFun=(a)=>{
  let b=10;
  const innerFun=()=>{
    let sum=a+b;
    console.log(`sum of two number is ${sum}`)
  }
 return innerFun;
  
}
// let inner=outerFun(6)
// inner()
outerFun(8)();*/

/////////ForEach loop//////////
// const myProg=['PHP','Python','Java','c++','c','Javascript']
//  myProg.forEach(function(currValue,index ,array){
//   console.log(` ${index} --- ${currValue} =${array}`)
//  })

//  const arrNum=[22,13,44,56,9,3]

// arrNum.forEach(function(currValue ,index,arrNum){
//   // console.log(currValue+100)
//   console.log(arrNum[index]+100)
// })
/*
const movements = [22, 45, -345, 88, -97, 87, -556, -55];
for (const movement of movements)
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You windrew ${Math.abs(movement)}`);
  }*/
/*
const obj = { a: 1, b: 2, c: 3 };
const fun=function(){
for (let key in obj) {
  console.log(key, obj[key]);
  var num=5
}
console.log(num)}

fun();*/

//////////////Rest Parameter///////////
/*
function fun(a,b,...c){
  console.log(`${a} ${b}`);
  console.log(c);
  console.log(c[0]);
  console.log(c.length);
  console.log(c.indexOf('Edan'))
}
fun('Ronaldo','Neymar','Pele','Messi','Edan','Deepali')*/

//////////simple array method//////
/*
let arr=['a','b','c','d','f']

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);
//  REVERSE
arr=['a','b','c','d','f']
 const arr2=['j','v','d','k']
 console.log(arr2.reverse())
 console.log(arr2)
 // CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));
console.log(letters)*/

//console.log(1 + -"1" + -"4" + "namste");
/////////////section-11 challange-1/////////
/*const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();

  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is 5 years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs([3, 4, 6, 8, 23], [1, 6, 12, 4, 6, 8]);
*/
/////////////section-11 chll-2////////
//map, filter,reduse
/*
const calcAvergeageHumanAge = function (ages) {
  // const humantAges = ages.map((age) => (2 ? 2 * age : 16 * age * 4));
  // console.log(humantAges);
  // const adult = humantAges.filter((age) => age >= 18);
  // console.log(adult);
  // const averages = adult.reduce((acc, ages) => acc + ages, 0) / adult.length;
  // console.log(averages);

  ///////chaining method//////
  const average =
    ages
      .map((age) => (2 ? 2 * age : 16 * age * 4))
      .filter((age) => age >= 18)
      .reduce((acc, ages) => acc + ages, 0) / adult.length;
  console.log(average);
};
calcAvergeageHumanAge([5, 2, 4, 9, 12, 19, 8]);
*/
/*
var map = function (arr, fn) {
  let transformation = [];
  for (let i = 0; i < arr.length; i++) {
    //// Corrected initialization of i to 0
    transformation.push(fn(arr[i], i));
  }

  return transformation;
};
const arr = [1, 2, 3];
const fn = function (n) {
  return n + 1;
};
console.log(map(arr, fn));
jn;
*/

// function doSomething() {
//   var fun = function () {
//     console.log(this);
//   };
//   fun();
// }

// doSomething();
/*
let student_score = prompt("enter your number");
if (student_score > 80 && student_score < 100) {
  console.log("A");
} else if (student_score > 70 && student_score < 89) {
  console.log("B");
} else if (student_score > 60 && student_score < 69) {
  console.log("C");
} else if (student_score > 50 && student_score < 59) {
  console.log("D");
} else {
  console.log("F");
}
*/
// for (let num = 0; num <= 100; num++) {
//   if (num % 2 === 0) {
//     console.log("num =", num);
//   }
// }
// let user_name = prompt("enter your name");
// console.log(`@${user_name}${user_name.length}`);
// let stu_marks = [23, 54, 87, 99, 69, 67];
// let sum = 0;
// for (let val of stu_marks) {
//   sum += val;
// }
// let avg = sum / stu_marks.length;
// console.log(avg);

// let items = [250, 234, 55, 456, 200, 400, 367];
// let idx = 0;
// for (let val of items) {
//   let offer = val / 10;
//   items[idx] = items[idx] - offer;
//   console.log(`${val} ofter applying offer = ${items[idx]} `);
//   idx++;
// }

// const countvowels = (str) => {
//   count = 0;
//   for (let char of str) {
//     console.log(char);
//     if (char === a);
//   }
// };
// countvowels("deepali");

num = prompt("enter number here");
if (num / 2) {
  console.log("even");
} else console.log("odd");
