// Exercise 6: Iterating Through Object Keys
// Use a for...in loop to log every key and its corresponding value from the fruit object in the format: key: value.
const fruit = { name: "Apple", color: "Red", weight: "150g" };

for (i in fruit) {
    console.log(`${i}: ${fruit[i]} `);
}
