// Question 1: The Coercion Confusion
let score = Number("10");
let bonus = 5;

let totalResult = score + bonus;
let finalResult = score - bonus;

console.log("Total:", totalResult);
console.log("Final:", finalResult);

// -------------------------------------------------------
// Question 2: The E-Commerce Price Fixer
// Task: You are building a shopping cart. The item price is stored as a string ("19.99"), and the user wants to buy 3 items. 
// Write a JavaScript code snippet that:

let priceStr = "19.99";
let quantity = 3;

// 1. Converts the priceStr to a number and store to priceNum.
priceNum = Number(priceStr);

// 2. Calculates the total cost for 3 items and store to totalCost. (ie let totalCost = //coding )
totalCost = (priceNum * quantity);

// 3. Formats the final total to always show exactly two decimal places (e.g., 59.97), even if it ends in a zero. (ie let formattedTotal = totalCost.xxxx;))
formattedCost = totalCost.toFixed(2);
console.log(`$${formattedCost}`);
// Hint: Using parseFloat(), basic arithmetic, and the .toFixed() method.

// -------------------------------------------------------
// Question 3: Template Literal Clean-up
// Task: Refactor the messy string concatenation below into a clean, readable template literal.

let product = "Laptop";
let originalPrice = 1000;
let discount = 150;

// Refactor this line:
let message = `The ${product} costs $${originalPrice - discount} after a $${discount} discount.`
console.log(message);

// hints: Use `` (template literal) from message 

// -------------------------------------------------------
// Question 4: The Input Validator (NaN Detection)
function processAge(input) {

    try {
        // 1. Convert to integer
        let convertToInt = parseInt(input);
        // 2 & 3. Check if it's Not-a-Number (NaN)
        if (isNaN(convertToInt)) {
            throw new error("NaN error.")
        }
        // 4. If it's valid, return the success message}
        return (`Age processed: ${convertToInt}.`);
    }
    catch (error) {
        return ("Error: Please enter a valid number")
    }
}

// // Test cases:
console.log(processAge("25"));     // Output: "Age processed: 25"
console.log(processAge("twenty")); // Output: "Error: Please enter a valid number"

// 1.Converts the input string into an integer.
// 2.Checks if the result is a valid number.
// 3.If the input is not a valid number (like "twenty"), return "Error: Please enter a valid number".
// 4.If it is valid, return "Age processed: X".
// hints: Using parseInt() and understanding how to properly check for NaN using isNaN().

// -------------------------------------------------------
// Question 5: Secret Code Extractor
// Task: You have a product code string: "ITEM-4923-SALE".Write a piece of code that extracts just the number part(4923),
//     converts it from a string into an actual number type, and multiplies it by 2.
let productCode = "ITEM-4923-SALE";
numSlice = productCode.slice(5, 9);
numInt = parseInt(numSlice);
numMult = numInt * 2;

console.log(numMult);
// hints: String manipulation methods(like.split() or.substring()) combined with type conversion.

