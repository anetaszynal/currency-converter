{
  const changeBackground = () => {
    const mainElement = document.querySelector(".js-main");
    if (!(mainElement.classList.contains("main--changeColor"))) {
      mainElement.classList.add("main--changeColor");
    }
    else {
      mainElement.classList.toggle("main--changeColor");
    }
  };

  const onChangeBackgroundClick = () => {
    const changeBackgroundButtonElement = document.querySelector(".js-changeBackground");
    changeBackgroundButtonElement.addEventListener("click", () => {
      changeBackground();
    });
  };

  const showTable = () => {
    const tableElement = document.querySelector(".js-section__tableContainer");
    if (!(tableElement.classList.contains("js-section__tableContainer--hidden"))) {
      tableElement.classList.add("js-section__tableContainer--hidden");
    }
    else {
      tableElement.classList.toggle("js-section__tableContainer--hidden");
    }
  };

  const changeTextOnTableButton = (tableButtonElement) => {
    if (tableButtonElement.innerHTML === "Ukryj tabelę z kursami wymiany") {
      tableButtonElement.innerHTML = "Pokaż tabelę z kursami wymiany";
    }
    else {
      tableButtonElement.innerHTML = "Ukryj tabelę z kursami wymiany";
    }
  };

  const onToggleVisabilityButtonClick = () => {
    const tableButtonElement = document.querySelector(".js-button--showTable");
    tableButtonElement.addEventListener("click", () => {
      showTable();
      changeTextOnTableButton(tableButtonElement);
    });
  };

  const calculateToPLN = (amount, yourCurrency, EUR, GBP, USD) => {

    switch (yourCurrency) {
      case "PLN":
        return amount;
      case "EUR":
        return amount * EUR;
      case "GBP":
        return amount * GBP;
      case "USD":
        return amount * USD;
    };
  };

  const exchangeToFinalCurrency = (plnValue, finishCurrency, EUR, GBP, USD) => {
    switch (finishCurrency) {
      case "PLN":
        return plnValue;
      case "EUR":
        return plnValue / EUR;
      case "GBP":
        return plnValue / GBP;
      case "USD":
        return plnValue / USD;
    };
  };

  const showResult = () => {
    const amountElement = document.querySelector(".js-form__input--amount").value;
    const yourCurrencyElement = document.querySelector(".js-form__select--yourCurrency").value;
    const finalCurrencyElement = document.querySelector(".js-form__select--finalCurrency").value;

    const GBP = 4.9551;
    const EUR = 4.4534;
    const USD = 3.9589;

    const plnValue = calculateToPLN(amountElement, yourCurrencyElement, EUR, GBP, USD);
    const result = exchangeToFinalCurrency(plnValue, finalCurrencyElement, EUR, GBP, USD);

    const resultElement = document.querySelector(".js-result");
    resultElement.innerText = `Za ${amountElement} ${yourCurrencyElement} kupisz u nas ${result.toFixed(2)} ${finalCurrencyElement}`;
  };

  const onFormSubmit = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      showResult();
    });
  };

  const init = () => {
    onToggleVisabilityButtonClick();
    onFormSubmit();
    onChangeBackgroundClick();
  };

  init();
}
