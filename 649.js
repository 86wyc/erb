ballArray = []

while (ballArray.length < 7) {
    ballSelected = Math.floor(Math.random() * 49 + 1);

    if (ballArray.includes(ballSelected)) {
        continue;
    } else {
        console.log(ballSelected);
        ballArray.push(ballSelected)
    }
}

specialBall = ballArray.pop()
normalSixBalls = ballArray.sort((a, b) => a - b)

console.log("\nThis draw's numbers are: ")
console.log(normalSixBalls + ",[" + specialBall + "]");

