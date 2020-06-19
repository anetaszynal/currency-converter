let showTable = document.querySelector(".js-button--showTable");
let hiddenTable = document.querySelector(".js-section__tableContainer");

showTable.addEventListener("click", () => {
    if (showTable.innerText === "Ukryj tabelę z kursami wymiany") {
        hiddenTable.classList.add("js-section__tableContainer--hidden");
        showTable.innerText = "Pokaż tabelę z kursami wymiany";
    }
    else {
        showTable.innerText = "Ukryj tabelę z kursami wymiany";
        hiddenTable.classList.toggle("js-section__tableContainer--hidden");
    }
});


let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-form__input--amount");
let yourCurrencyElement = document.querySelector(".js-form__select--yourCurrency");
let finalCurrencyElement = document.querySelector(".js-form__select--finalCurrency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();


    let amount = + amountElement.value;
    let yourCurrency = yourCurrencyElement.value;
    let finalCurrency = finalCurrencyElement.value; 

    let eurRate = 4.4534;
    let gbpRate = 4.9551;
    let usdRate = 3.9589;
    let plnValue;

    switch (yourCurrency) {
        case "PLN":
            plnValue = amount;
            break;
        case "EUR":
            plnValue = amount * eurRate;
            break;
        case "GBP":
            plnValue = amount * gbpRate;
            break;
        case "USD":
            plnValue = amount * usdRate
            break;

    }

    switch (finalCurrency) {
        case "PLN":
            result = plnValue;
            break;
        case "EUR":
            result = plnValue / eurRate;
            break;
        case "GBP":
            result = plnValue / gbpRate;
            break;
        case "USD":
            result = plnValue / usdRate;
            break;

    }

    resultElement.innerText = ` Za ${amount} ${yourCurrency} kupisz u nas ${result.toFixed(2)} ${finalCurrency}`;
});
