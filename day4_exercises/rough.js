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