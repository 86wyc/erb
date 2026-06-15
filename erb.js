// init change check
function getAvg(name, ...assignment) {
    let avgmark = 0;
    for (i in assignment) {
        avgmark += i;
    }
    return console.log(name + ' average mark : ' + (avgmark / (getAvg.length)));
}

getAvg('Peter', 10, 20, 30);
getAvg('Mary', 50, 20, 30, 100);