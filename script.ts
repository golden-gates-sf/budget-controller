interface IRecord {
  symbol: string;
  title: string;
  amount: number;
}

let incList: IRecord[] = [];
let expList: IRecord[] = [];

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

function addRecord(): void {
  const record: IRecord = createRecord();
  if (record.title && record.amount) {
    record.symbol === "+" ? incList.push(record) : expList.push(record);
  }

  // console.log(incList, ",", expList);
}
