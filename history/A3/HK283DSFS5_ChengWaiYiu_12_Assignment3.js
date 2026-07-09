// Q1 a)
const message = "Good day to you, sir."
console.log(`Q1a) - Number of characters is ${message.length}.\n`);

// Q1 b)
const zebra = "Zebra"
rIndex = zebra.search("r");
console.log(`Q1b) - "r" is indexed at position ${rIndex}.\n`);

// Q1 c)
const fish = "Fish"
iIndex = fish.search("i");
console.log(`Q1c) - "i" is indexed at position ${iIndex}.\n`);

// Q1 d)
const moose = "Moose"
let characterSearch = "os"
let characterSearchLen = characterSearch.length;
osIndex = moose.search(characterSearch);
console.log(`Q1d) - "os" is indexed at position ${osIndex} up to position ${osIndex + (characterSearchLen - 1)}.\n`);

// Q1 e)
const rooster = "Rooster"
console.log(`Q1e) - The character at index position 2 is "${rooster[2]}".\n`);

// Q2
var text = "JavaScript is hard";
var extract = "";

extract = text.slice(11, 15);

console.log(`Q2) - ${extract}`);
