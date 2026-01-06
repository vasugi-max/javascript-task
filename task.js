// Find Compound Interest
let p = 1000; 
let r = 5;    
let t = 2;    

let CI = p * Math.pow((1 + r / 100), t) - p;

console.log("Compound Interest =", CI);
// ii) Convert Celsius to Fahrenheit
let celsius = 30;

let fahrenheit = (celsius * 9 / 5) + 32;

console.log("Fahrenheit =", fahrenheit);
// Check Eligible to Vote using if–else
let age = 20;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}
//  iv) Find Largest of Two Numbers using Ternary Operator
let a = 25;
let b = 40;

let largest;

if (a > b) {
  largest = a;
} else {
  largest = b;
}

console.log("Largest number is", largest);

// conditional operator or ternary 

let res = 10>12?"yes":"no"

console.log(res);

