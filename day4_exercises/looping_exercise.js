// Exercise 1: The Countdown (while loop)
// Task: Write a while loop that simulates a rocket launch countdown.
// Start at 10 and count down to 1.
// Print each number to the console.
// After 1, print "Blastoff! 🚀".
let launchCount = 10;

while (launchCount > 0) {
    console.log(launchCount)
    launchCount--;
}

console.log(`Blastoff! 🚀\n`)
// What this tests: Basic while loop syntax, defining a condition, and manually decrementing a counter variable to avoid an infinite loop.

//-----------------------------------------------------------------------
// Exercise 2: Evens and Odds(for loop)
//     Task: Write a for loop that iterates from 1 to 20. For each iteration, check the current number:
let evenArray = [];
let oddArray = [];
let initialNum = 0;
let MaxNum = 20;

while (initialNum < MaxNum) {
    let tempNum = initialNum % 2;
    if (tempNum == 0 && initialNum != 0) {
        evenArray.push(initialNum);
    }
    else {
        oddArray.push(initialNum);
    }
    initialNum++;
}

console.log(`Evens: ${evenArray}\nOdds: ${oddArray}\n`);
// If the number is even, log "[Number] is EVEN" to the console.
// If the number is odd, log "[Number] is ODD" to the console.
// What this tests: Standard for loop structure and integrating conditional if/else statements with the remainder operator (%).

//-----------------------------------------------------------------------
// Exercise 3: Totaling a Shopping Cart(for...of loop)
// Task: You are given an array of item prices in a shopping cart.Use a loop to calculate the total cost of all the items.
const cartPrices = [12.99, 5.00, 45.00, 9.99, 2.50];
let total = 0;

// Write your loop here:
// totalItems = cartPrices.length
for (i of cartPrices) {
    total += i;
}

console.log("Your total is: $" + total);


//-----------------------------------------------------------------------
// Exercise 4: The "Guessing Game" Simulator(while loop)
//     Task: Imagine a game where a user has to keep guessing a secret number.Write a while loop that simulates this behavior.

// Create a variable secretNumber = 7.
var secretNumber = 7;
// Create a variable currentGuess.
var currentGuess = 0;
// Inside the loop, simulate a new guess by generating a random number between 1 and 10 using Math.floor(Math.random() * 10) + 1.
while (secretNumber != currentGuess) {
    currentGuess = Math.floor(Math.random() * 10 + 1);
    console.log(`You have guessed ${currentGuess}`);
    if (secretNumber == currentGuess) {
        console.log(`You have guessed correctly, the number is ${currentGuess}`)
    }
    else {
        console.log(`Please try again.\n`);
    }
}
// Log each guess to the console(e.g., "Guessed: 4").
// The loop should stop running the moment currentGuess matches secretNumber.
// What this tests: Using a while loop for situations where you don't know how many times the loop will need to run beforehand.

//-----------------------------------------------------------------------
// Exercise 5: Break the Pattern(for loop with break and continue)
// Task: Write a for loop that loops from 1 to 10.
// If the number is 5, use the continue statement to skip printing it.
// If the number is 8, use the break statement to stop the loop entirely.
// Print all other numbers to the console.
// Expected Output: 1, 2, 3, 4, 6, 7(each on a new line).

for (i = 1; i <= 10; i++) {
    if (i == 8) { break; }
    switch (i) {
        case 5: continue;
        default:
            console.log(`${i}\n`)
    }
}
// What this tests: Understanding loop control keywords(break and continue) and how they alter the normal flow of iteration.




