class Currency {
  constructor() {
    this.url =
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Pc59foY4SGj7b9eRGuNOp7sqSFhshTvRrNvhnZIP&base_currency=";
  }
  async change(amount, usdCurrency, euroCurrency) {
    const response = await fetch(`${this.url}${usdCurrency}`);
    console.log(response);
  }
}
