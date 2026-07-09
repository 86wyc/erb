// create pool array with numbers 1 to 49
let pool = [];
for (let i = 1; i <= 49; i++) {
    pool.push(i);
}

console.log("Full Pool: ");
console.log(pool);
console.log("Mark Six result: ");


let index = 0;
let i = 0;
let interval;



interval = setInterval(() => {
    index = Math.floor(Math.random() * pool.length);
    const drawnNumber = pool.splice(index, 1)[0];

    i++;
    if (pool.length <= 42) { console.log(`Special number: \n${drawnNumber}`); }
    else {
        console.log(`${drawnNumber}`);
    }


    //Don't forget the exit condition for setInterval loop
    if (i >= 7) {
        clearInterval(interval);
    }
}, 1000);

setTimeout(() => {
    console.log(`The remaining pool: `);
    console.log(pool);

}, 7500); //Delay 7.5 seconds to ensure game is done