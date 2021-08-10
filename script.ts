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

function countBudget(symbol: string, amount: number): Number {
  symbol === "+" ? (sum += amount) : (sum -= amount);
  return sum;
}

function addRecord(): void {
  const record: IRecord = createRecord();
  if (record.title && record.amount > 0) {
    record.symbol === "+" ? incList.push(record) : expList.push(record);
    countBudget(record.symbol, record.amount);
  }

  // console.log(sum);
  // console.log(incList, ",", expList);
}

const addButton: HTMLElement = document.getElementById("sadButton");
addButton.addEventListener("click", addRecord);
