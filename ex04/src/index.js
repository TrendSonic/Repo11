var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(arr) {
    var newMonitorsListArray = [...arr];

    var monitorsList = [];
    for (var i = 0; i < newMonitorsListArray.length; i++) {
        monitorsList.push(newMonitorsListArray[i]);
        monitorsList.push(i + 1);
    }
    return monitorsList;
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;