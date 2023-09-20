window.addEventListener('load', () => {
  const selects = document.querySelectorAll('select');

  // Supondo que 'currencies' seja um objeto com os códigos e nomes das moedas.
  const currencies = {
      BRL: 'Real (BRL)',
      ARS: 'Peso Argentino (ARS)',
      USD: 'Dólar Americano (USD)',
      BTC: 'Bitcoin (BTC)'
  };

  for (const select of selects) {
      for (const currencyCode in currencies) {
          if (currencies.hasOwnProperty(currencyCode)) {
              const currencyName = currencies[currencyCode];
              const option = document.createElement('option');
              option.value = currencyCode;
              option.textContent = currencyName;

              select.appendChild(option);
          }
      }
  }
});

document.getElementById('currencyConverterForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o recarregamento da página

  const amount = parseFloat(document.querySelector('.amount input').value);
  const fromCurrency = document.querySelector('.from select').value;
  const toCurrency = document.querySelector('.to select').value;

  // Taxas de câmbio fixas
  const exchangeRates = {
      BRL: { ARS: 72.1500722, USD: 0.2062408, BTC: 0.00000755, BRL: 1 },
      ARS: { BRL: 0.01386	, USD: 0.0028576, BTC: 0.000001, ARS: 1 },
      USD: { BRL: 4.8487011, ARS: 349.95, BTC: 0.00003687,USD: 1 },
      BTC: { BRL: 132266.70, ARS: 9491891.35, USD: 27115.47, BTC: 1}
  };

  let result;

  if (toCurrency === 'BTC') {
      result = (amount * exchangeRates[fromCurrency][toCurrency]).toFixed(8);
  } else {
      result = (amount * exchangeRates[fromCurrency][toCurrency]).toFixed(2);
  }

  document.querySelector('.result').textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
});
