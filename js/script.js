{
    const showTableButton = document.querySelector(".js-button--showTable");


    const toggleVisibilityTable = () => {
        const hiddenTable = document.querySelector(".js-section__tableContainer");

        if (showTableButton.innerText === "Ukryj tabelę z kursami wymiany") {
            hiddenTable.classList.add("js-section__tableContainer--hidden");
            showTableButton.innerText = "Pokaż tabelę z kursami wymiany";
        }
        else {
            showTableButton.innerText = "Ukryj tabelę z kursami wymiany";
            hiddenTable.classList.toggle("js-section__tableContainer--hidden");
        }
    }

    const eurRate = 4.4534;
    const gbpRate = 4.9551;
    const usdRate = 3.9589;

    const calculateToPLN = (amount, yourCurrency) => {

        switch (yourCurrency) {
            case "PLN":
                return amount;
            case "EUR":
                return amount * eurRate;
            case "GBP":
                return amount * gbpRate;
            case "USD":
                return amount * usdRate
        }
    }

    const calculateToFinalCurrency = (plnValue, finalCurrency) => {

        switch (finalCurrency) {
            case "PLN":
                return plnValue;
            case "EUR":
                return plnValue / eurRate;
            case "GBP":
                return plnValue / gbpRate;
            case "USD":
                return plnValue / usdRate;

        }
    }

    const showResult = (amount, yourCurrency, result, finalCurrency) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = ` Za ${amount} ${yourCurrency} kupisz u nas ${result.toFixed(2)} ${finalCurrency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-form__input--amount");
        const yourCurrencyElement = document.querySelector(".js-form__select--yourCurrency");
        const finalCurrencyElement = document.querySelector(".js-form__select--finalCurrency");

        const amount = +amountElement.value;
        const yourCurrency = yourCurrencyElement.value;
        const finalCurrency = finalCurrencyElement.value;
        const plnValue = calculateToPLN(amount, yourCurrency);
        const result = calculateToFinalCurrency(plnValue, finalCurrency);

        showResult(amount, yourCurrency, result, finalCurrency);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        showTableButton.addEventListener("click", toggleVisibilityTable);
        formElement.addEventListener("submit", onFormSubmit);
    }

    init();

}

