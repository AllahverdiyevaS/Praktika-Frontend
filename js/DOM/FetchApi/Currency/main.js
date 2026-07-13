const amountInput = document.querySelector("#amount");
const firstCurrency = document.querySelector("#first_currency");
const secondCurrency = document.querySelector("#second_currency");
const result = document.querySelector("#result");
const currency = new Currency();
function runEvenetListener() {
  amountInput.addEventListener("input", change);
}

function change() {
  const amount = Number(amountInput.value.trim());
  const firstValue =
    firstCurrency.options[firstCurrency.selectedIndex].textContent;
  const secondValue =
    secondCurrency.options[secondCurrency.selectedIndex].textContent;
  console.log(firstCurrency);

  console.log(firstValue, secondValue);

  currency.change(amount, firstValue, secondValue);
}
runEvenetListener();
