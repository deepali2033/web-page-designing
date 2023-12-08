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
'use strict';


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
