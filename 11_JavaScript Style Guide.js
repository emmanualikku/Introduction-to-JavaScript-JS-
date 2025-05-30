"use strict"; // Use Strict Mode

// JavaScript Variables and Type Conversion
const MAX_USERS = 100;
let userCount = 0;
let numStr = "123";
let num = Number(numStr);
console.log("String to Number: " + num); // Output: String to Number: 123

// JavaScript Loops
for (let i = 0; i < 3; i++) {
  console.log("For Loop Iteration: " + i);
}

let count = 0;
while (count < 3) {
  console.log("While Loop Count: " + count);
  count++;
}

// JavaScript Destructuring
let fruits = ["Apple", "Banana", "Cherry"];
let [firstFruit, secondFruit] = fruits;
console.log("First Fruit: " + firstFruit); // Output: First Fruit: Apple

let person = { name: "John", age: 30 };
let { name, age } = person;
console.log("Name: " + name); // Output: Name: John

// JavaScript Bitwise Operations
let andResult = 5 & 3; // 0101 & 0011 = 0001
console.log("Bitwise AND: " + andResult); // Output: Bitwise AND: 1

// JavaScript Regular Expressions
let regex = /hello/i;
let testString = "Hello, world!";
let isMatch = regex.test(testString);
console.log("Is match: " + isMatch); // Output: Is match: true

// JavaScript Operator Precedence
let result = (10 + 5) * 2;
console.log("Operator Precedence Result: " + result); // Output: Operator Precedence Result: 30

// JavaScript Error Handling
try {
  throw new Error("This is an error message");
} catch (error) {
  console.log("Caught an error: " + error.message);
}

// JavaScript Scope
let globalVar = "I am a global variable";
function scopeExample() {
  let functionVar = "I am a function variable";
  console.log(globalVar); // Output: I am a global variable
  console.log(functionVar); // Output: I am a function variable
}
scopeExample();

// JavaScript Hoisting
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";

// JavaScript this Keyword
let obj = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
obj.greet(); // Output: Hello, John

// JavaScript Arrow Functions
const add = (a, b) => a + b;
console.log("Sum: " + add(2, 3)); // Output: Sum: 5

// JavaScript Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
let person1 = new Person("John", 30);
person1.greet(); // Output: Hello, my name is John and I am 30 years old.

// JavaScript Modules (Assuming math.js is a separate file)
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
export default multiply;

// main.js
import { add, subtract } from './math.js';
import multiply from './math.js';
console.log("Add: " + add(2, 3)); // Output: Add: 5
console.log("Subtract: " + subtract(5, 2)); // Output: Subtract: 3
console.log("Multiply: " + multiply(4, 3)); // Output: Multiply: 12

// JavaScript JSON
let jsonString = '{"name":"John","age":30,"city":"New York"}';
let jsonObject = JSON.parse(jsonString);
console.log("JavaScript Object: ", jsonObject); // Output: JavaScript Object: { name: 'John', age: 30, city: 'New York' }

// JavaScript Debugging
let x = 10;
let y = 20;
let sum = x + y;
console.log("Sum: " + sum); // Output: Sum: 30

function calculateSum(a, b) {
  debugger; // Execution will pause here
  return a + b;
}
let result = calculateSum(5, 10);
console.log("Result: " + result); // Output: Result: 15

let users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Doe", age: 35 }
];
console.table(users);

let isValid = false;
if (!isValid) {
  console.error("Error: Invalid data");
  console.warn("Warning: Please check your input");
}

try {
  let result = calculateSum(5, "10");
  console.log("Result: " + result);
} catch (error) {
  console.error("Caught an error: " + error.message);
}

// JavaScript Style Guide
/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
  return a + b;
}

// This is a single-line comment
