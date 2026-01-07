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




// 7/1/2025 mrng task

// The electricity bill is calculated based on the number of units consumed

let units = 250;
let bill = 0;

if (units <= 100) {
    bill = units * 1;
} 
else if (units <= 200) {
    bill = (100 * 1) + ((units - 100) * 2);
} 
else {
    bill = (100 * 1) + (100 * 2) + ((units - 200) * 3);
}
// Different rates are applied for different unit slabs

let units2 = 180;
let bill2 = 0;

if (units2 <= 100) {
    bill2 = units2 * 1;
}
else if (units2 <= 200) {
    bill2 = (100 * 1) + (units2 - 100) * 2;
}
else {
    bill2 = (100 * 1) + (100 * 2) + (units2 - 200) * 3;
}

console.log("Units Consumed:", units2);
console.log("Total Electricity Bill: ₹" + bill2);
// Units from 0–100 are charged at ₹1.50 per unit
let units1 = 180;
let bill1 = 0;

if (units1 <= 100) {
    bill1 = units * 1.5;
} else if (units1 <= 200) {
    bill1 = 150 + (units1 - 100) * 2; 
} else {
    bill1 = 150 + 200 + (units1 - 200) * 3; 
}
console.log("Units Consumed:", units1);
console.log("Total Bill: ₹" + bill1);
// Units from 101–200 are charged at ₹2.50 per unit
let unitsConsumed = 180; 

let totalBill = 0;
if (unitsConsumed > 200) {
    totalBill = unitsConsumed * 3.5 - 250; 
} else if (unitsConsumed > 100) {
    totalBill = unitsConsumed * 2.5 - 100; 
} else {
    totalBill = unitsConsumed * 1.5;
}
console.log("Total Bill: ₹" + totalBill);
// Units from 201–300 are charged at ₹4.00 per unit.
let unitsConsumed3= 250;
let totalBill3 = 0;
if (unitsConsumed3 > 300) {
    totalBill3 += (unitsConsumed3 - 300) * 5; 
    unitsConsumed3 = 300;
}
if (unitsConsumed3 > 200) {
    totalBill3 += (unitsConsumed3 - 200) * 4; 
    unitsConsumed3 = 200;
}
if (unitsConsumed3 > 100) {
    totalBill3 += (unitsConsumed3 - 100) * 2.5; 
    unitsConsumed3 = 100;
}
totalBill3 += unitsConsumed3* 1.5; 

console.log("Total Bill: ₹" + totalBill3);
// Units above 300 are charged at ₹5.00 per unit
let unitsConsumed4 = 350; 
let totalBill4 = 0;

if (unitsConsumed4 <= 300) {
    totalBill4 = unitsConsumed4 * 3; 
} else {

totalBill4 = (300 * 3) + ((unitsConsumed4 - 300) * 5);
}

console.log("Total Bill: ₹" + totalBill);
// The total bill is calculated by adding the charges from each slab
let units7 = 350; // Example units
let bill7 = 0;

bill7 += Math.min(units7, 100) * 1.5; 
if (units7 > 100) bill += Math.min(units7 - 100, 100) * 2.5; 
if (units7 > 200) bill += Math.min(units7 - 200, 100) * 4;
if (units7 > 300) bill += (units7 - 300) * 5;

console.log("Total Bill: ₹" + bill7);


// Check if a triangle is valid / isosceles / equilateral / scalene
let e = 5; 
let f= 5; 
let g= 8; 
if (e + f > g && e +f > f && f + g > e) {
    console.log("Triangle is valid.");

    if (e === f && g === f) {
        console.log("It is an Equilateral triangle.");
    } else if (e === f || g === f ||e === g) {
        console.log("It is an Isosceles triangle.");
    } else {
        console.log("It is a Scalene triangle.");
    }

} else {
    console.log("Triangle is not valid.");
}
