const n1 = 15;
const n2 = 5;
const n3 = 20;
const n4 = 10;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.

const isSum50 = (n1 + n2 + n3 + n4) === 50;

console.log("Sum is 50:", isSum50);
/*sum equals 50*/

const allDivisibleby5= (n1 % 5 === 0) || (n2 % 5 === 0) || (n3 % 5 === 0) || (n4 % 5 === 0) 
console.log("allDivisibleby5");
/* all numbers are divisible by 5 */


const isOver10= (n1 > n4)
console.log("isover10");
/*is the first number larger then last number*/

const arithmeticChain = ((n1 - n2) * n3) % n4;
console.log(arithmeticChain)
/*find the arithmetic chain remainder*/

const isOver25= (n1 + n2 + n3);
console.log ("isover25");
/* n = over 25*/