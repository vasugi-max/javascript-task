//   Given a grade letter (A, B, C, D, F), display the corresponding performance message.
let  A=1
let  B=2
let  C=3
let  D=4
let  F=5
switch (D){
     case 1:
    console.log("Excellent");
break;
case 2:
    console.log("Good");
break;
case 3:
    console.log("Average");
break;
case 4:
    console.log(" Below Average");
break;
case 5:
    console.log("Failure");
break;
default:
console.log( "Pass");
break;
}



// Simple Menu Selector
let option = 2;

switch (option) {
  case 1:
    console.log("You selected Pizza");
    break;
  case 2:
    console.log("You selected Burger");
    break;
  case 3:
    console.log("You selected Pasta");
    break;
  case 4:
    console.log("You selected Sandwich");
    break;
  default:
    console.log("Invalid option");
}

// Currency Converter
let choice = 1;
let amount = 100;

switch (choice) {
  case 1:
    console.log("USD to INR:", amount * 83);
    break;
  case 2:
    console.log("USD to EUR:", amount * 0.92);
    break;
  default:
    console.log("Invalid choice");
}

let weather = "rainy";
// Weather Message
switch (weather) {
  case "sunny":
    console.log("Wear sunglasses ");
    break;
  case "rainy":
    console.log("Take an umbrella ");
    break;
  case "cloudy":
    console.log("Weather looks dull ");
    break;
  case "snowy":
    console.log("Stay warm ");
    break;
  default:
    console.log("Unknown weather");
}

// Number to Word Converter
let num = 5;

switch (num) {
  case 0: console.log("Zero"); break;
  case 1: console.log("One"); break;
  case 2: console.log("Two"); break;
  case 3: console.log("Three"); break;
  case 4: console.log("Four"); break;
  case 5: console.log("Five"); break;
  case 6: console.log("Six"); break;
  case 7: console.log("Seven"); break;
  case 8: console.log("Eight"); break;
  case 9: console.log("Nine"); break;
  default: console.log("Invalid number");
}
// User Role Identifier
let role = "admin";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "editor":
    console.log("Edit access");
    break;
  case "user":
    console.log("View access");
    break;
  case "guest":
    console.log("Limited access");
    break;
  default:
    console.log("Invalid role");
}
// Month Days Finder
let month = 2;

switch (month) {
  case 1: case 3: case 5: case 7:
  case 8: case 10: case 12:
    console.log("31 days");
    break;
  case 4: case 6: case 9: case 11:
    console.log("30 days");
    break;
  case 2:
    console.log("28 or 29 days");
    break;
  default:
    console.log("Invalid month");
}
// Vowel or Consonant Checker
let char = "a";

switch (char) {
  case "a": case "e": case "i": case "o": case "u":
  case "A": case "E": case "I": case "O": case "U":
    console.log("Vowel");
    break;
  default:
    console.log("Consonant");
}
// Calculator
let a = 10, b = 5, operator = "*";

switch (operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("Invalid operator");
}
// Day of the Week
let day = 3;

switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid day");
}
// Traffic Light Simulator
let color = "red";

switch (color) {
  case "red":
    console.log("Next: Green");
    break;
  case "green":
    console.log("Next: Yellow");
    break;
  case "yellow":
    console.log("Next: Red");
    break;
  default:
    console.log("Invalid color");
}
// Season Identifier
let m = 4;

switch (m) {
  case 12: case 1: case 2:
    console.log("Winter");
    break;
  case 3: case 4: case 5:
    console.log("Summer");
    break;
  case 6: case 7: case 8:
    console.log("Monsoon");
    break;
  case 9: case 10: case 11:
    console.log("Autumn");
    break;
  default:
    console.log("Invalid month");
}
