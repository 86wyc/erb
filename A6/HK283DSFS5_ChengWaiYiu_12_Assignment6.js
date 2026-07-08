// create pool array with numbers 1 to 49
let pool = [];
for (let i = 1; i <= 49; i++) {
    pool.push(i);
}

console.log(pool);


let index = 0;
let i = o;
let iterval;
console.log("Mark Six result: ");
interval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * pool.length);
    const drawnNumber = pool.splice(randomIndex, 1)[0];
    console.log(`Draw number ${i + 1}: ${drawnNumber}`);
    i++;

    //Don't forget the exit condition for setInterval loop
    if (i >= 7) {
        clearInterval(interval);
    }
}, 1000);

setTimeout(() => {
    // console.log("The remaining pool: ")
    console.log(pool);

}, 7500); //Delay 7.5 seconds to ensure game is done