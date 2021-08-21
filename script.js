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
function addToList(list, title, symbol, amount) {
    var elem = document.getElementById(list);
    elem.insertAdjacentHTML("beforeend", "\n      <div class=\"record\">\n      <div class=\"record-data-box\">\n      <span class=\"record-title\">" + title + "</span>\n      <span class=\"record-amount\">" + symbol + " " + amount.toFixed(2) + "</span>\n      </div>\n      <div class=\"del-box\">\n      <button class=\"del-button\">&#10005;</button>\n      </div>\n      </div>\n  ");
}
function addRecord() {
    var record = createRecord();
    if (record.title && record.amount > 0) {
        record.amount = parseFloat(record.amount.toFixed(2));
        if (record.symbol === "+") {
            incList.push(record);
            addToList("inc-list", record.title, record.symbol, record.amount);
            sum += record.amount;
        }
        else {
            expList.push(record);
            addToList("exp-list", record.title, record.symbol, record.amount);
            sum -= record.amount;
        }
    }
    // console.log(sum);
    // console.log(incList, ",", expList);
}
var addButton = document.getElementById("sadButton");
addButton.addEventListener("click", addRecord);
