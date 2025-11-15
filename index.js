// numbers, strings, undedfined, null, booleans, bigInt

// console.log(typeof 42); // "number"

// let school = ["Devtown", "CodeCraft", "TechVille"];

// example of boolean

// let isOpen = true;
// let isClosed = false;

// let school = null

// let school; // undefined

// console.log(typeof school); // "undefined"

// operators
// arithmetic operators

// addition

// 5 + 3; // 8

// subtraction

// let age = "dele" - "5";
// console.log(age);
// NaN

// division

// let myAge = 6 / 2;
// console.log(myAge);

// multiplication

// let yourAge = 6 * 2;
// console.log(yourAge);

// // modulus
// let remainder = 7 % 3;
// console.log(remainder); // 1

// exponentiation
// let power = 2 ** 3;
// console.log(power); // 8

// assignment operators

// equal sign =

// let x = 10;
// console.log(x);
// x *= 5;
// console.log(x);

// comparison operators

// let a = 5;
// let b = 14;

// // equal to ==

// console.log(a < b);

// // strictly equal to ===

// logical operators

// && (AND), || (OR), ! (NOT)

// console.log(!true); // false

// let age = 20;

// let inClass = true
// let isVip = false

// console.log(age < 18 || inClass);

// console.log(age > 18 && isVip);

// conditional statements

// if, else, else if

// let adultAge = 18;

// if (adultAge > 18) {
//   console.log("You are an adult.");
// }
// else if (adultAge === 18) {
//     console.log("You just became an adult congrats!!!.");
// } else if (adultAge === 17) {
//     console.log("You are almost an adult.");
// }else {
//   console.log("You are a minor.");
// }

// looping structures

// for, while, do...while

// for (let i = 2; i <= 5; i++) {
//   console.log("Iteration number: " + i);
// }

// let count = 1;

// while (count <= 5) {
//   console.log("Count is: " + count);
//   count++;
// }

// let number = 1;

// do {
//       if (number % 2 === 0) {
//         console.log(number + " is even.");
//       }else {
//         console.log(number + " is odd.");
//     }
//     number++;
// } while (number <= 5);

// functions

// function greet(name) {
//     return "Hello, " + name + "!";
// }

// console.log(greet("Daddy"));

// function add(a, b) {
//     return a + b;
// }

// let sum = add(5, 3);
// console.log("The sum is: " + sum);

// function checkAge(age) {
//     if (age >= 18) {
//         return "You are an adult.";
//     } else {
//         return "You are a minor.";
//     }
// }

// console.log(checkAge(20));

// arrow functions

// const multiply = (x, y) => {
//     return x * y;
// }

// console.log(multiply(4, 5)); // 20

// Arrays

// let fruits = ["apple", "banana", "cherry", "mango"];

// for (let i = 1; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

//array methods
// fruits.push("orange"); // adds to the end

// let fruits = ["apple", "banana", "cherry", "mango"];

// fruits.pop();
// console.log(fruits);

// fruits.pop(); // removes from the end
// fruits.shift(); // removes from the start
// fruits.unshift("kiwi"); // adds to the start

// Array Methods

// Map

// let numbers = [1, 2, 3, 4, 5];

// let doubleNumbers = numbers.map((num) => num * 2);

// console.log(numbers);
// console.log(doubleNumbers); // [2, 4, 6, 8, 10]

// Objects

// let person = {
//     name: "John Doe",
//     age: 30,
//     isEmployed: true,
//     greet: function() {
//         return "Hello, my name is " + this.name;
//     }
// };

// console.log(person.greet());

// object destructuring

// let person = {
//     name: "Jane Doe",
//     age: 25,
//     city: "New York"
// };

// // const name = person.name;
// // const age = person.age;
// // const city = person.city;

// const { name, age } = person;

// console.log(name); // "Jane Doe"
// console.log(age);  // 25

// backticks

// let name = "Alice";
// let age = 28;

// console.log(`My name is ${name} and I am ${age} years old.);

// dom manipulation
// document.getElementById("title").innerText = `Hello, ${name}! Welcome to Devtown.`;
// document.getElementById("title").style.color = "blue";
// document.getElementsByClassName("main-title").style.fontSize = "24px";

// const p = document.createElement("p");
// p.innerText = "This paragraph was added using JavaScript.";
// document.body.appendChild(p);

// const todoInput = document.getElementById("todoInput");
// const addButton = document.getElementById("addButton");
// const todoList = document.getElementById("todoList");

// addButton.addEventListener("click", addTask);

// function addTask() {
//   if (todoInput.value.trim() === "") return;

//     const li = document.createElement("li");
//     li.contentEditable = "true";
//   li.textContent = todoInput.value;

//   const deleteButton = document.createElement("button");
//   deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", () => li.remove());
//     deleteButton.classList.add("delete-btn");

//   const completeButton = document.createElement("button");
//   completeButton.textContent = "Complete";
//   completeButton.addEventListener("click", () =>
//     li.classList.toggle("completed")
//     );
//     completeButton.classList.add("complete-btn");

//   li.appendChild(deleteButton);
//   li.appendChild(completeButton);
//   todoList.appendChild(li);

//   todoInput.value = "";
// }
