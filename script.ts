function getValues(): void {
    const symbol: String = (<HTMLSelectElement>document.getElementById("inc-exp-symbol")).value;
    const title: String = (<HTMLInputElement>document.getElementById("title-value")).value;
    const amount: Number = parseFloat((<HTMLInputElement>document.getElementById("amount-value")).value);
}
