const mixedArr = [13, 22, 3, 4, 18];

// Q1(A)    console.log(`$${nums}\n`);
console.log(`A)`);
mixedArr.forEach(nums => {
    console.log(`$"${nums}"`);
});
console.log(`\n`);


// Q1(B)
const oddEven = mixedArr.map(oeNums => {
    if (oeNums % 2 === 0) {
        return oeNums += 1;
    }
    else {
        return oeNums * 2;
    }
});

console.log(`B)\nArray [${oddEven.join(', ')}]\n`);

// Q1(C)
const larger10 = mixedArr.filter(largeOnes => largeOnes > 10);
const largeEvens = larger10.filter(largeEvens => largeEvens % 2 === 0);

console.log(`C)\nArray [${largeEvens.join(', ')}]`);