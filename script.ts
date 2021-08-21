interface IRecord {
  symbol: string;
  title: string;
  amount: number;
}

let incList: IRecord[] = [];
let expList: IRecord[] = [];

let sum: number = 0;

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
  elem.insertAdjacentHTML("beforeend", `
      <div class="record">
      <div class="record-data-box">
      <span class="record-title">${title}</span>
      <span class="record-amount">${symbol} ${amount.toFixed(2)}</span>
      </div>
      <div class="del-box">
      <button class="del-button">&#10005;</button>
      </div>
      </div>
  `);
}

function addRecord(): void {
  const record = createRecord();
  if (record.title && record.amount > 0) {
    record.amount = parseFloat(record.amount.toFixed(2));
    if (record.symbol === "+") {
      incList.push(record);
      addToList("inc-list", record.title, record.symbol, record.amount);
      sum += record.amount;
    } else {
      expList.push(record);
      addToList("exp-list", record.title, record.symbol, record.amount);
      sum -= record.amount;
    }
  }

  // console.log(sum);
  // console.log(incList, ",", expList);
}

const addButton = document.getElementById("sadButton");
addButton.addEventListener("click", addRecord);
