//find the given number is positive or negative//
let num = 100;

if (num > 0) {
  console.log("Positive number");
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}

// Give two names and check whether they are same or not
let name1 = "Vasugi";
let name2 = "Vasugi";

if (name1 === name2) {
  console.log("Both names are same");
} else {
  console.log("Names are different");
}

// Provide two numbers
// one is number datatype, another is string datatype
let num1 = 10;      
let num2 = "10";   

console.log(num1 == num2);   
console.log(num1 === num2); 

//  Get marks and check if greater than 35
let marks = 45;

if (marks > 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}
//And or Not//
//get username and password check wheater username is admin and password is admin123

let username = "admin";
let password = "admin123";

if (username === "admin" && password === "admin123") {
  console.log("Login Successful");
} else {
  console.log("Invalid Username or Password");
}
//1. Greatest of Three Numbers
//: Get three numbers from the user and print the largest among them. 
//Also handle the case where all numbers are equal//

let a=50;
let b=12;
let c=12;
if (a === b && b === c) {
    console.log("All three numbers are equal");
} else if (a >= b && a >= c) {
    console.log("The greatest number is:", a);
} else if (b >= a && b >= c) {
    console.log("The greatest number is:", b);
} else {
    console.log("The greatest number is:", c);
}
//Divisibility Checker
//Description: Ask the user to input a number and check whether it's divisible by 3, 5, both, or neither

let D= "10";

if (D % 3 === 0 && num % 5 === 0) {
    console.log("The number is divisible by both 3 and 5");
}
else if (D % 3 === 0) {
    console.log("The number is divisible by 3");
}
else if (D % 5 === 0) {
    console.log("The number is divisible by 5");
}
else {
    console.log("The number is divisible by neither 3 nor 5");
}
//3.Odd Digit Checker
//Description: Input a number and check if all digits in the number are odd numbers. Print a message accordingly.
let one=8
if (one){
  console.log("All digits are odd numbers");
} else {
  console.log("The number contains even digits");
}
//4. Number to Day Converter//
let week = 1; // you can change the number

if (week === 1) {
  console.log("Sunday");
} else if (week === 2) {
  console.log("Monday");
} else if (week=== 3) {
  console.log("Tuesday");
} else if (week === 4) {
  console.log("Wednesday");
} else if (week === 5) {
  console.log("Thursday");
} else if (week === 6) {
  console.log("Friday");
} else if (week === 7) {
  console.log("Saturday");
} else{
  console.log("Invalid input");
}

//  Loss CalProfitculator 
//  Description: Take cost price and selling price from the 
//  user and calculate whether it’s a profit, loss, or no gain/loss. provide the code if else
let costPrice = 500;
let sellingPrice = 650;

if (sellingPrice > costPrice) {
  let profit = sellingPrice - costPrice;
  console.log("Profit: " + profit);
} 
else if (sellingPrice < costPrice) {
  let loss = costPrice - sellingPrice;
  console.log("Loss: " + loss);
} 
else {
  console.log("No Profit No Loss");
}

// Electricity Bill Calculator
// Description: Calculate the electricity bill based on unit slabs:

let units = 250;
let bill = 0;

if (units <= 100) {
  bill = units * 5;
}
else if (units <= 200) {
  bill = (100 * 5) + ((units - 100) * 7);
}
else {
  bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

console.log("Electricity Bill Amount: ₹" + bill);

//  Simple Calculator (Using If-Else)
let log1 = 10;
let  log2 = 5;
let operator = "+"; 

if (operator === "+") {
  console.log("Result: " + (log1 + log2));
}
else if (operator === "-") {
  console.log("Result: " + (log1 - log2));
}
else if (operator === "*") {
  console.log("Result: " + (log1 * log2));
}
else if (operator === "/") {
  if (num2 !== 0) {
    console.log("Result: " + (log1 / log2));
  } else {
    console.log("Error: Division by zero not allowed");
  }
}
else {
  console.log("Invalid Operator");
}
// 12. Age Category Checker
// Description: Input a person's age and classify them as:

let age = 25;
if (age >= 0 && age <= 12) {
  console.log("Category: Child");
}
else if (age >= 13 && age <= 19) {
  console.log("Category: Teenager");
}
else if (age >= 20 && age <= 59) {
  console.log("Category: Adult");
}
else if (age >= 60) {
  console.log("Category: Senior");
}
else {
  console.log("Invalid Age");
}

// BMI Calculator
let weight = 65;  
let height = 1.7; 

let bmi = weight / (height * height);

console.log("BMI:", bmi.toFixed(2));

if (bmi < 18.5) {
  console.log("Category: Underweight");
}
else if (bmi >= 18.5 && bmi < 25) {
  console.log("Category: Normal");
}
else if (bmi >= 25 && bmi < 30) {
  console.log("Category: Overweight");
}
else {
  console.log("Category: Obese");
}

// Temperature Checker
let temperature = 28; 

if (temperature < 15) {
  console.log("Weather: Cold");
}
else if (temperature >= 15 && temperature <= 30) {
  console.log("Weather: Moderate");
}
else {
  console.log("Weather: Hot");
}
// Triangle Type Checker

let k = 5;
let v = 10;
let m = 8;

if (k === v && v=== m) {
  console.log("Triangle Type: Equilateral");
}
else if (k === v || v === m || k === m) {
  console.log("Triangle Type: Isosceles");
}
else {
  console.log("Triangle Type: Scalene");
}








