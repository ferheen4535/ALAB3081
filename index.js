const n1 = 15;
const n2 = 5;
const n3 = 20;
const n4 = 10;

// //sum is equal to 50//
console.log(`Part One`)
console.log()

const isSum50 = (n1 + n2 + n3 + n4) === 50;
console.log("Is the sum 50:", isSum50);

console.log()

//are all number divisible by 5//
const allDivisibleby5= (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0) 
console.log(`Are all number divisible by 5:`, allDivisibleby5);

console.log()

//is the first number larger than the last?//
const isFirstNumberLargerThanLast = (n1 > n4);
console.log(`Is the first number larger than the last number:`, isFirstNumberLargerThanLast);

console.log()

//subtract the first number from the second number//
const subFirstSecond = (n1 - n2)
console.log(`What is 15 - 5:`, subFirstSecond );

console.log()

//multiply the result by the third number//
const multiply = (subFirstSecond * n3);
console.log(`What is (15-5) X 20:`, multiply);

console.log()

//divid 200 by 4th number//
const divide = (multiply / n4);
console.log(`What is 200/10:`, divide);

console.log()

//check any numbers are over 25, not using the NOT operator//
const isOver = (n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25);
console.log(`Are any numbers over 25:`,isOver);

console.log()
///PART TWO///
console.log(`Part Two`)

const miles = 1500
const fuelbudget = 175
const cost = 3

const firstmpr = 30
const secondmpr = 28
const thirdmpr = 23

const firstmph = 55
const secondmph = 60
const thirdmph = 75

//how many gallons of fuel will you need for the entire trip?//
console.log()

const firstMPRgallons = (miles / firstmpr)
console.log(`How many gallons of fuel for 55 miles per hour:`, firstMPRgallons, `gallons`)

const secondMPRgallons = (miles / secondmpr)
console.log(`How many gallons of fuel for 60 miles per hour:`, secondMPRgallons, `gallons`)

const thirdMPRgallons = (miles / thirdmpr)
console.log(`How many gallons of fuel for 75 miles per hour:`, thirdMPRgallons, `gallons`)

//What are the expenses for each mph and is it in budget?//
console.log()

const firstcost = (firstMPRgallons * cost);
console.log(`Total cost of gas for 55 mph will cost:`, `$`,firstcost);
console.log(`Is this under the budget:`, firstcost < fuelbudget);

const secondcost = (secondMPRgallons * cost);
console.log(`Total cost of gas for 60 mph will cost:`, `$`,secondcost);
console.log(`Is this under the budget:`, secondcost < fuelbudget);

const thirdcost = (thirdMPRgallons * cost);
console.log(`Total cost of gas for 70 mph will cost:`, `$`,thirdcost);
console.log(`Is this under the budget:`, thirdcost < fuelbudget);

console.log()

//how long will the trip take in hours//

const firsthours = (miles / firstmph)
console.log(`Traveling at 55mph will take how many hours:`, firsthours, `hours`);

const secondhours = (miles / secondmph)
console.log(`Traveling at 60mph will take how many hours:`, secondhours, `hours`);

const thirdhours = (miles / thirdmph)
console.log(`Traveling at 75mph will take how many hours:`, thirdhours, `hours`);
console.log()
console.log()

//which option is the best//
console.log()

const firstoption = ( firstMPRgallons < fuelbudget && firsthours == firsthours );
console.log(`Traveling at 55 mph is a good option because it fits within the budget.`, firstoption);

const secondoption = ( secondMPRgallons < fuelbudget && firsthours > secondhours );
console.log(`Traveling at 60 mph is a best option because it fits within the budget in shorter time.`, secondoption);

const thirdoption = ( thirdMPRgallons < fuelbudget && firsthours < thirdhours );
console.log(`Traveling at 70 mph is a good option because it is within budget.`, thirdoption);

//not sure about this formula//
