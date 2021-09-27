var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];

function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];
    
    var sum = 0;
    var averageSubArrayTemp = 0;
    // Loop through array
    for (var i = 0; i < newTemps.length; i++) {
        for (var j = 0; j < newTemps[i].length; j++) {
            sum += newTemps[i][j];
        }
        averageSubArrayTemp = sum / newTemps[i].length;
        averageDayTemp.push(averageSubArrayTemp);
        sum = 0;
    }
    // Return average temperatures for each subArray
    return averageDayTemp;
}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;