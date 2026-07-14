class Currency {
  constructor() {
    this.url =
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Pc59foY4SGj7b9eRGuNOp7sqSFhshTvRrNvhnZIP&base_currency=";
  }
  async exchange(amount, firstCurrency, secondCurrency) {
    const response = await fetch(`${this.url}${firstCurrency}`);
    const data = await response.json();
    console.log(data.data[secondCurrency]);
    const resultCurrency = amount * data.data[secondCurrency];
    return resultCurrency;
  }
}
