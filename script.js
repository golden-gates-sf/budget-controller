var incList = [];
var expList = [];
function createRecord() {
    var tempRecord = {};
    tempRecord.symbol = (document.getElementById("inc-exp-symbol")).value;
    tempRecord.title = (document.getElementById("title-value")).value;
    tempRecord.amount = parseFloat(document.getElementById("amount-value").value);
    return tempRecord;
}
function addRecord() {
    var record = createRecord();
    if (record.title && record.amount) {
        record.symbol === "+" ? incList.push(record) : expList.push(record);
    }
    console.log(incList, ",", expList);
}
var addButton = document.getElementById("sadButton");
addButton.addEventListener("click", addRecord);
