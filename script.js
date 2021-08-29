var incList = [];
var expList = [];
var sum = 0;
var totalInc = 0;
var totalExp = 0;
function createRecord() {
    var tempRecord = {};
    tempRecord.symbol = (document.getElementById("inc-exp-symbol")).value;
    tempRecord.title = (document.getElementById("title-value")).value;
    tempRecord.amount = parseFloat(document.getElementById("amount-value").value);
    return tempRecord;
}
function addToList(list, title, symbol, amount) {
    var elem = document.getElementById(list);
    elem.insertAdjacentHTML("afterbegin", "\n      <div class=\"record\">\n        <div class=\"record-data-box\">\n          <span class=\"record-title\">" + title + "</span>\n          <span class=\"record-amount\">" + symbol + " " + amount.toFixed(2) + "</span>\n        </div>\n        <div class=\"del-box\">\n          <button class=\"del-button\">&#10005;</button>\n        </div>\n      </div>\n  ");
}
function updateData() {
    if (sum > 0)
        document.querySelector(".budget").textContent = "+" + sum.toFixed(2);
    else if (sum === 0)
        document.querySelector(".budget").textContent = "0";
    else
        document.querySelector(".budget").textContent = sum.toFixed(2);
    document.getElementById("inc-sum").textContent = "+ " + totalInc.toFixed(2);
    document.getElementById("exp-sum").textContent = "- " + totalExp.toFixed(2);
}
function addRecord() {
    var record = createRecord();
    if (record.title && record.amount > 0) {
        record.amount = parseFloat(record.amount.toFixed(2));
        if (record.symbol === "+") {
            incList.push(record);
            addToList("inc-list", record.title, record.symbol, record.amount);
            sum += record.amount;
            totalInc += record.amount;
        }
        else {
            expList.push(record);
            addToList("exp-list", record.title, record.symbol, record.amount);
            sum -= record.amount;
            totalExp += record.amount;
        }
        updateData();
        // document.querySelectorAll('input').forEach(el => el.value = '');
    }
}
var addButton = document.getElementById("sadButton");
addButton.addEventListener("click", addRecord);
//// FROM HERE
var recordBoxes = document.querySelectorAll(".records-box");
recordBoxes.forEach(function (recordBox) {
    return recordBox.addEventListener("click", function (e) {
        var target = e.target;
        if (target.matches(".del-button")) {
            var record = target.parentElement.parentElement;
            record.remove();
            // console.log(target.parentElement.parentElement.classList)    
            incList.forEach(function (el) {
            });
        }
    });
});
//// TO HERE
