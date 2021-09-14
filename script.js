var incList = [];
var expList = [];
var sum = 0;
var totalInc = 0;
var totalExp = 0;
var i = 0;
function createRecord() {
    var tempRecord = {};
    tempRecord.symbol = (document.getElementById("inc-exp-symbol")).value;
    tempRecord.title = (document.getElementById("title-value")).value;
    tempRecord.amount = parseFloat(document.getElementById("amount-value").value);
    return tempRecord;
}
function addToList(list, _a) {
    var title = _a.title, symbol = _a.symbol, amount = _a.amount;
    var elem = document.getElementById(list);
    elem.insertAdjacentHTML("afterbegin", "\n      <div class=\"record\" id=\"" + i + "\">\n        <div class=\"record-data-box\">\n          <span class=\"record-title\">" + title + "</span>\n          <span class=\"record-amount\">" + symbol + " " + amount.toFixed(2) + "</span>\n        </div>\n        <div class=\"del-box\">\n          <button class=\"del-button\">&#10005;</button>\n        </div>\n      </div>\n  ");
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
    if (totalInc !== 0)
        document.querySelector(".percent").textContent =
            String(Math.round((totalExp * 100) / totalInc)) + "%";
}
function addRecord() {
    var record = createRecord();
    if (record.title && record.amount > 0) {
        i += 1;
        record.id = i;
        record.amount = parseFloat(record.amount.toFixed(2));
        if (record.symbol === "+") {
            incList.push(record);
            addToList("inc-list", record);
            sum += record.amount;
            totalInc += record.amount;
        }
        else {
            expList.push(record);
            addToList("exp-list", record);
            sum -= record.amount;
            totalExp += record.amount;
        }
        // localStorage.setItem(`${i}`, JSON.stringify(record));
        updateData();
        document.querySelectorAll("input").forEach(function (el) { return (el.value = ""); });
    }
}
function printDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return day + "." + month + "." + year;
}
document.getElementById("date").textContent = printDate();
// Getting records from localStorage
//
var addButton = document.getElementById("sadButton");
addButton.addEventListener("click", addRecord);
//// FROM HERE
var recordBoxes = document.querySelectorAll(".records-box");
recordBoxes.forEach(function (recordBox) {
    return recordBox.addEventListener("click", function (e) {
        var target = e.target;
        if (target.matches(".del-button")) {
            var record_1 = target.parentElement.parentElement;
            incList.forEach(function (el, i) {
                if (el.id === parseInt(record_1.id)) {
                    sum -= el.amount;
                    totalInc -= el.amount;
                    incList.splice(i, 1);
                }
            });
            expList.forEach(function (el, i) {
                if (el.id === parseInt(record_1.id)) {
                    sum += el.amount;
                    totalExp -= el.amount;
                    expList.splice(i, 1);
                }
            });
            updateData();
            record_1.remove();
            // console.log(target.parentElement.parentElement.classList)
        }
    });
});
//// TO HERE
// const randomItem = localStorage.getItem('key')
// if (randomItem) console.log('Hi user --> ', randomItem)
// localStorage.setItem('key', 'Alucardo-')
