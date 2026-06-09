ballArray = []

while (ballArray.length < 7) {
    ballSelected = Math.floor(Math.random() * 49 + 1);
    console.log(ballSelected);

    if (ballArray.includes(ballSelected)) {
        continue
    } else {
        ballArray.push(ballSelected)
    }
}

console.log(ballArray.sort((a, b) => a - b));