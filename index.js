const n1 = 15;
const n2 = 5;
const n3 = 20;
const n4 = 10;

Check one: add up to 50
This is a fairly simple operation using
arithmetic operators and a comparison.

const isSum50 = (n1 + n2 + n3 + n4) === 50;

console.log("Sum is 50:", isSum50);
// /*sum equals 50*/

const allDivisibleby5= (n1 % 5 === 0) || (n2 % 5 === 0) || (n3 % 5 === 0) || (n4 % 5 === 0) 
console.log("allDivisibleby5");
// /* all numbers are divisible by 5 */

 const isOver10= (n1 > n4)
console.log("isover10");
// /*is the first number larger then last number*/

const arithmeticChain = ((n1 - n2) * n3) % n4;
console.log(arithmeticChain)
// /*find the arithmetic chain remainder*/

const isOver25= (n1 + n2 + n3);
console.log ("isover25");
* n = over 25*/

const n1 = 15;
const n2 = 5;
const n3 = 20;
const n4 = 10;

// /*part two*/


const distance = 1500;
const fuelPerGallon = 3; 
const totalBudget = 175;

const firstmph = 55;
const secondmph = 60;
const thirdmph = 75;


const totalGallons = distance / fuelPerGallon;

console.log(`Total gallons needed: ${distance / fuelPerGallon} `);

const totalCostFuel = totalGallons * fuelPerGallon;
console.log(`total Gallons cost: ${500 * fuelPerGallon}`);

const time = distance / firstmph;
console.log(`mprtime: ${distance / firstmph}`);

const secondtime = distance / secondmph;
console.log(`mprtime: ${distance / secondmph}`);

const thirdtime = distance / thirdmph;
console.log(`mprtime: ${distance / thirdmph}`);

let availablebudget = totalBudget > totalCostFuel;

let Budget = firstmph > distance;

//second part was kinda confusing for me so I tried different methods to see which ones gave me the right answer//