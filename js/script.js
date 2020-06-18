let amount = document.querySelector(".js-form__input--amount");
let exchange = document.querySelector(".js-form__input--exchange");
let firstCurrency = document.querySelector(".js-form__select--firstCurrency");
let secondCurrency = document.querySelector(".js-form__select--secondCurrency");
let addParagraph = document.querySelector(".js-form__paragraph");
let formElement = document.querySelector(".form");
let result = document.querySelector(".js-result");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstCurrencyElement = firstCurrency.value;
    let secondCurrencyElement = secondCurrency.value;
    let exchangeElement = (1 / exchange.value);
    let amountElement = amount.value;
    let wynik = (amountElement * exchangeElement);

    addParagraph.innerText = `1 ${firstCurrencyElement} jest równy ${exchangeElement.toFixed(2)} ${secondCurrencyElement}`;
    result.innerText = ` Za ${amountElement} ${firstCurrencyElement} kupisz ${wynik.toFixed(2)} ${secondCurrencyElement}`;

    console.log(firstCurrencyElement, secondCurrencyElement, exchangeElement, amountElement);
});
