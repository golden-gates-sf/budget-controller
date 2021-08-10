var incList = [];
var expList = [];
var sum = 0;
function createRecord() {
    var tempRecord = {};
    tempRecord.symbol = (document.getElementById("inc-exp-symbol")).value;
    tempRecord.title = (document.getElementById("title-value")).value;
    tempRecord.amount = parseFloat(document.getElementById("amount-value").value);
    return tempRecord;
}
function countBudget(symbol, amount) {
    symbol === "+" ? (sum += amount) : (sum -= amount);
    return sum;
}
function addRecord() {
    var record = createRecord();
    if (record.title && record.amount > 0) {
        record.symbol === "+" ? incList.push(record) : expList.push(record);
        countBudget(record.symbol, record.amount);
    }
    // console.log(sum);
    // console.log(incList, ",", expList);
}
var addButton = document.getElementById("sadButton");
addButton.addEventListener("click", addRecord);
