// alert('hello world!');

// console.log('hello world');

// variables

// let greeting = 'hello skillup';

// console.log(greeting);

// let skillup = 1;

// // let, const, var

/*function add(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

add(3, 5);

function greet() {
  return "hello world";
  console.log("hello world");
}

greet();
*/
// arrow function
// const greeting = () => {
//   console.log("good morning");
//   return "good morning";
// };

// console.log(greetings());

// class function name(params) {

// }

// function add3(numb1, numb2, numb3) {
//   let sum = numb1 + numb2 + numb3;
//   console.log(sum);
// }

// add3(2, 2, 2);

// const addition = (para1, para2, para3) => {
//   let total = para1 + para2 + para3;
//   return total;
// };

// addition(2, 4, 6);
// console.log(addition(2, 4, 6));

// // block scope
// // global scope
// // let
// // let variable_name = value;
// //var function scoped global scope

// // var numbers = 20;
// // var numbers = 50;

// var x = 12;
// x = 13;
// x += 1;
// console.log(x);

// //object
// const person = {
//   first_name: "Manny",
//   second_name: "Ladrich",
//   age: 20,
//   about: "web developer",
// };

// console.log(person.first_name);

//Data types
//==========================================================================
// types: 1. Primitive datatype e.g (Boolean, Number, String, Undefined, Null, BigInt, Symbol)
// types: 2. Complex or Non-Primitive datatype e.g (Object, map, Array, Functions, Sets, )
//======================================================================
// array = []
// object = {}

//declaring an array------
/*
const arrayName = [
  "Lorem",
  "Ipsum",
  "Lorem",
  "Ipsum",
  "Lorem",
  "Ipsum",
  "Lorem",
  "Ipsum",
  "Lorem",
  "Ipsum",
];
*/
// const arrayName = new Array ('Lorem','Ipsum','Lorem','Ipsum','Lorem','Ipsum','Lorem','Ipsum','Lorem','Ipsum')

// console.log(arrayName);

// const numbers = [1, 2, 3, 4, 5, 6];

//.push() adds a new value to the end of the array list (takes parameter asin: push(30) .... i.e 30 is the  parameter)
//.pop() removes the last value of the array list (doesn't take parameter)
//.shift() removes the first value of the array list (doesn't take parameter)
//.unshift() adds a new value to the beginning of the array list (takes parameter asin: unshift(30) .... i.e 30 is the  parameter)
// splice()
// slice()

// numbers.unshift(20);
// console.log(numbers);

// using constructor for arrays
// const name = new type(arguments);

// const arrayName = new Array(12, "number", "age", true);

// console.log(arrayName.push("emma"));
// console.log(arrayName[4]);
/*
const colors = ["red", "green", "blue", "white"];
console.log(colors);

colors.shift();
console.log(colors);
colors.pop();
console.log(colors);
colors.push("black", "yellow");
console.log(colors);
colors.unshift("blue");
console.log(colors);
*/

/*
let electricity = false;
if (electricity == true) {
  console.log("There is light in SkillUp Africa");
} else {
  console.log("There is no light in skillUp Africa");
}
*/

// var theNumber = Number(prompt("Pick a number", ""));

/*
if (isNaN(theNumber)) {
  prompt("Make sure your input is a number");
} else {
  alert("Your number is the square root of " + theNumber * theNumber);
}
*/

// if (!theNumber) {
//   return null;
// } else {
//   alert("Your number is the square root of " + theNumber * theNumber);
// }

// let age = 18;

/* if (age >= 18) {
  console.log("You can sign up");
}

let value = 16;
let state = "Lagos";

if (state == "Lagos") {
  if (value >= 16) {
    console.log("You can drive!");
  }
}

if (state == "Lagos" || value >= 16) {
  console.log("You can drive");
} */
/* 
if (condition) {
  //statement
} else {
  //statement
} */
/* 
let age = 12;

if (age >= 18) {
  console.log("You can drive");
} else {
  console.log("You must be 18 years old");
} */

/* let age = 16;
let country = "Nigeria";

if (age >= 16 && country === "Nigeria") {
  console.log("You are free to drive");
} else {
  console.log("You are not authorized to drive");
}
 */

/* if (condition) {
  //statements
} else if (condition) {
  //statements
} else if (condition) {
  //statements
} else {
  //statements
} */

/* let month = 6;
let monthName;

if (month === 1) {
  monthName = "Jan";
} else if (month === 2) {
  monthName = "Feb";
} else if (month === 3) {
  monthName = "Mar";
} else if (month === 4) {
  monthName = "Apr";
} else if (month === 5) {
  monthName = "May";
} else if (month === 6) {
  monthName = "Jun";
} else if (month === 7) {
  monthName = "Jul";
} else if (month === 8) {
  monthName = "Aug";
} else if (month === 9) {
  monthName = "Sept";
} else if (month === 10) {
  monthName = "Oct";
} else if (month === 11) {
  monthName = "Nov";
} else if (month === 12) {
  monthName = "Dec";
}

console.log(monthName);

//Classwork

let weight = 70;
let height = 1.72;

let bmi = weight / (height * height); */

/* let wieghtStatus;

if (bmi < 18.5) {
  wieghtStatus = "Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
  wieghtStatus = "Healthy weight";
} else if (bmi >= 25 && bmi <= 29.9) {
  wieghtStatus = "Overweight";
} else {
  wieghtStatus = "Obesity";
}

console.log(wieghtStatus); */

// USING PROMPT AND ALERT USING PROMPT AND ALERT USING PROMPT AND ALERT USING PROMPT AND ALERT USING PROMPT AND ALERT
/* let weight = String(prompt("Enter your weight"));
let height = Number(prompt("Enter your height"));

let bmi = weight / (height * height);

let wieghtStatus;

if (bmi < 18.5) {
  wieghtStatus = "Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
  wieghtStatus = "Healthy weight";
} else if (bmi >= 25 && bmi <= 29.9) {
  wieghtStatus = "Overweight";
} else {
  wieghtStatus = "Obesity";
}

alert(wieghtStatus); */

//ternary operators

/* let age = 18;
let message;

if (age >= 16) {
  message = "You can drive";
} else {
  message = "You cannot drive";
}

age >= 16 ? (message = "You can drive") : (message = "You cannot drive");
console.log(message); */

// condition ? expressionIfTrue : expressionIfFalse
// ? === if
// : === else
/* let authenticated = true;
let nextURL = authenticated
  ? alert("You will redirect to admin area")
  : alert("access denied");

console.log(nextURL); */

/* let speed = Number(prompt("What is your speed"));
let message;
speed >= 120
  ? (message = "Too fast")
  : speed >= 80
  ? (message = "Fast")
  : (message = "OKAY");
alert(message); */

/* let a = 10;
let b = 5;
let c = 3;

if (a > b && a > c) {
  console.log("1111");
} else {
  console.log("2222");
}

if (a < c) {
  console.log("*");
} else if (a == b) {
  console.log("&");
} else {
  console.log("$");
}

if (++a > b++ || a-- > 0) {
  console.log("c++");
} else {
  console.log("c--");
}

if ("a" > "b" || 10 > "a") {
  console.log("#*#");
}

if (a < b) {
  console.log("####");
  console.log("****");
} else {
  console.log("&&&&");
}
 */

/* switch (expression) {
  case value1:
    statement1;
    break;

  case value2:
    statement2;
    break;

  case value3:
    statement3;
    break;

  default:
    default-statement
} */

/* if (expression === value1) {
  statement1;
} else if (expression === value2) {
  statement2
} else if (expression === value3) {
  statement3
} else {
  statement
} */

/* // let day = prompt(Number("Choose a day number"));
// let dayName;
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Sunday";
    break;

  case 2:
    dayName = "Monday";
    break;

  case 3:
    dayName = "Tuesday";
    break;

  case 4:
    dayName = "Wednesday";
    break;

  case 5:
    dayName = "Thursday";
    break;

  case 6:
    dayName = "Friday";
    break;

  case 7:
    dayName = "Saturday";
    break;

  default:
    dayName = "Invalid Day";
    break;
}

console.log(dayName);
// alert(dayName); */

/* let year = 2016;
let month = 2;
let dayCount;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCount = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayCount = 30;
    break;
  case 2:
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
      dayCount = 29;
    } else {
      dayCount = 28;
    }
    break;
  default:
    dayCount = -1;
}

console.log(dayCount); */

/* //Assignment 1
let day = 9;
let dayName = "Today";

if (day == 1) {
  console.log(dayName + " " + "is Sunday");
} else if (day == 2) {
  console.log(dayName + " " + "is Monday");
} else if (day == 3) {
  console.log(dayName + " " + "is Tuesday");
} else if (day == 4) {
  console.log(dayName + " " + "is Wednesday");
} else if (day == 5) {
  console.log(dayName + " " + "is Thursday");
} else if (day == 6) {
  console.log(dayName + " " + "is Friday");
} else if (day == 7) {
  console.log(dayName + " " + "is Saturday");
} else {
  console.log(`
  The Day you have requested for does not exist on planet earth
  
  KINDLY INPUT A VALID DAY NUMBER

  Thanks for choosing MLO's Day-Name chceker
  Have a NICE DAY!

  `);
} */

/* //Assignment 2

let year = 2016;
let month = 20;
let dayCount = "The day-count for this month";

if (
  month == 1 ||
  month == 3 ||
  month == 5 ||
  month == 7 ||
  month == 8 ||
  month == 10 ||
  month == 12
) {
  console.log(`${dayCount} is 31`);
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
  console.log(`${dayCount} is 30`);
} else if (month == 2) {
  if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
    console.log(`${dayCount} is 29`);
  } else {
    console.log(`${dayCount} is 28`);
  }
} else {
  console.log(`
  ${dayCount} is -1; 
  Because the month does not exists.
  Thank you For Choosing MLO's Day-Counter.
  Have a NICE DAY! `);
} */
