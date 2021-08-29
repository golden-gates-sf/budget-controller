interface IRecord {
  symbol: string;
  title: string;
  amount: number;
}

let incList: IRecord[] = [];
let expList: IRecord[] = [];

let sum: number = 0;
let totalInc: number = 0;
let totalExp: number = 0;

function createRecord(): IRecord {
  const tempRecord = <IRecord>{};
  tempRecord.symbol = (<HTMLSelectElement>(
    document.getElementById("inc-exp-symbol")
  )).value;
  tempRecord.title = (<HTMLInputElement>(
    document.getElementById("title-value")
  )).value;
  tempRecord.amount = parseFloat(
    (<HTMLInputElement>document.getElementById("amount-value")).value
  );

  return tempRecord;
}

function addToList(list, title, symbol, amount): void {
  const elem = document.getElementById(list);
  elem.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="record">
        <div class="record-data-box">
          <span class="record-title">${title}</span>
          <span class="record-amount">${symbol} ${amount.toFixed(2)}</span>
        </div>
        <div class="del-box">
          <button class="del-button">&#10005;</button>
        </div>
      </div>
  `
  );
}

function updateData(): void {
  if (sum > 0)
    document.querySelector(".budget").textContent = "+" + sum.toFixed(2);
  else if (sum === 0) document.querySelector(".budget").textContent = "0";
  else document.querySelector(".budget").textContent = sum.toFixed(2);

  document.getElementById("inc-sum").textContent = "+ " + totalInc.toFixed(2);
  document.getElementById("exp-sum").textContent = "- " + totalExp.toFixed(2);
}

function addRecord(): void {
  const record = createRecord();
  if (record.title && record.amount > 0) {
    record.amount = parseFloat(record.amount.toFixed(2));
    if (record.symbol === "+") {
      incList.push(record);
      addToList("inc-list", record.title, record.symbol, record.amount);
      sum += record.amount;
      totalInc += record.amount;
    } else {
      expList.push(record);
      addToList("exp-list", record.title, record.symbol, record.amount);
      sum -= record.amount;
      totalExp += record.amount;
    }

    updateData();

    // document.querySelectorAll('input').forEach(el => el.value = '');
  }

}

const addButton = document.getElementById("sadButton");
addButton.addEventListener("click", addRecord);

//// FROM HERE

const recordBoxes = document.querySelectorAll(".records-box");
recordBoxes.forEach((recordBox) =>
  recordBox.addEventListener("click", (e) => {
    const target = e.target as Element;
    if (target.matches(".del-button")) {
      const record = target.parentElement.parentElement;
      record.remove();
      // console.log(target.parentElement.parentElement.classList)    
      incList.forEach(el => {

      })
    }
  })
);

//// TO HERE
