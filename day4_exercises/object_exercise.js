// Exercise 1: Create a Basic Object
// Create an object named user with the properties name (a string) and age (a number). Log the object to the console.

// Exercise 2: Accessing Properties
// Given the car object, access the brand property using dot notation(object.key) and the year property using bracket notation.(object["key"])
// const car = { brand: "Toyota", model: "Corolla", year: 2022 };

// Exercise 3: Modifying and Adding Properties
// Given the movie object, change its rating to 4.8 and add a new property called genre with the value "Sci-Fi".
// const movie = { title: "Inception", rating: 4.5 };
// // Your code here

// Exercise 4: Deleting a Property
// Remove the password property from the following account object and display the account object.
// const account = { username: "coder123", password: "secretPassword!", email: "coder@test.com" };
// // Your code here


// Exercise 5: Checking if a Property Exists
// Write a function called hasProperty that takes an object and a key name, and returns true if the key exists in the object, otherwise false.

// function hasProperty(obj, key) {
//   // Your code here
// }
// console.log(hasProperty({ name: "Alice" }, "name")); // true
// console.log(hasProperty({ name: "Alice" }, "age"));  // false


// Exercise 6: Iterating Through Object Keys
// Use a for...in loop to log every key and its corresponding value from the fruit object in the format: key: value.
// const fruit = { name: "Apple", color: "Red", weight: "150g" };
// // Your code here

// Exercise 7: Object Methods
// Create a calculator object that has two numbers as properties (a=5 and b=3) and a method called add() that 
// returns the sum of a and b using the this keyword.
// const calculator = {
//  ...
// };
// console.log(calculator.add()); // 15


// Exercise 8: Counting Properties
// Write a function countProperties(obj) that returns the total number of properties inside an object. Do not count manually with a loop.
// function countProperties(obj) {
//   // Your code here
// }
// console.log(countProperties({ a: 1, b: 2, c: 3 })); // 3

// Exercise 9: Summing Values with for...in
// You are given an object representing a grocery shopping cart with items and their prices. 
// Use a for...in loop to calculate the total cost of all items in the cart.

// const shoppingCart = {
//   banana: 1.50,
//   milk: 3.25,
//   bread: 2.50,
//   eggs: 4.00
// };
// let total = 0;
// // Your code here: Use a for...in loop to sum the prices
// console.log(`Total price: $${total}`); // Should log: Total price: $11.25


// Exercise 10: 
// Use Function to check if the value is more than 50 and then return the name.
// const students = {
//   Alice: 85,
//   Bob: 45,
//   Charlie: 92,
//   David: 65,
//   Emma: 30
// };
// console.log(passedStudents); // Should log: ['Alice', 'Charlie','David']