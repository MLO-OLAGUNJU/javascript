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

let age = 16;
let country = "Nigeria";

if (age >= 16 && country === "Nigeria") {
  console.log("You are free to drive");
} else {
  console.log("You are not authorized to drive");
}
