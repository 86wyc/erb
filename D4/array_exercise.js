// 1. Add an Element to the End
// Task: Write a function pushElement that takes an array and a value, adds the value to the end of the array, and returns the updated array.

function pushElement(arr, element) {
  arr.push(element);
  return arr;
}

console.log(pushElement([1, 2, 3], 4)); // [1, 2, 3, 4]

//----------------------------------------------------------------------------------------------------------------------------------
// 2. Get the First Element
// Task: Write a function getFirstElement that takes an array and returns its very first element.If the array is empty, return undefined.
function getFirstElement(arr) {
  return arr[0]
}
console.log(getFirstElement(["apple", "banana", "cherry"])); // "apple"
console.log(getFirstElement([])); // undefined

//----------------------------------------------------------------------------------------------------------------------------------
// 3. Find the Length of an Array
// Task: Write a function getArrayLength that returns the number of elements in an array.
function getArrayLength(arr) {
  return arr.length
}
console.log(getArrayLength([10, 20, 30, 40])); // 4


//----------------------------------------------------------------------------------------------------------------------------------
// 4. Loop and Double the Numbers
// Task: Write a function doubleNumbers that takes an array of numbers and returns a new array where each number is doubled. 
// Use the.map() method.
function doubleNumbers(arr) {
  let doubleArr = [];
  for (i of arr) {
    i *= 2;
    doubleArr.push(i);
  }
  return doubleArr;
}
console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]

//----------------------------------------------------------------------------------------------------------------------------------
// 5. Filter Out Odd Numbers
// Task: Write a function filterEvens that takes an array of numbers and returns a new array containing only the even numbers. 
// Use the.filter() method.
function filterEvens(arr) {
  let evenNum = arr.filter(n => n % 2 == 0);
  return evenNum;
}

console.log(filterEvens([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

//----------------------------------------------------------------------------------------------------------------------------------
// 6. Sum All Numbers
function sumArray(arr) {
  let total = 0;

  // Using a standard function inside forEach instead of an arrow function
  arr.forEach(function (num) {
    total += num;
  });
  return total;
}

// Example usage:
console.log(sumArray([1, 2, 3, 4])); // 10

//----------------------------------------------------------------------------------------------------------------------------------
// 7. Check if an Element Exists
// Task: Write a function containsElement that takes an array and a target value.It should return true if the target is in the array, and false otherwise.
function containsElement(arr, target) {
  if (arr.includes(target)) {
    return true;
  }
  else return false;
}
console.log(containsElement(["cat", "dog", "bat"], "dog")); // true
console.log(containsElement(["cat", "dog", "bat"], "lion")); // false

//----------------------------------------------------------------------------------------------------------------------------------
// 8. Find the Maximum Number
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([5, 2, 9, 1, 7])); // 9

//----------------------------------------------------------------------------------------------------------------------------------
// 9. Reverse a String Array
function reverseArray(arr) {
  return [...arr].reverse();
}
const original = ['a', 'b', 'c'];
console.log(reverseArray(original)); // ['c', 'b', 'a']
console.log(original); // ['a', 'b', 'c'] (remains unchanged)

//----------------------------------------------------------------------------------------------------------------------------------
// 10. Remove Duplicates
function removeDuplicates(arr) {
  return [... new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
