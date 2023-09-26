// Seleciona todos os elementos 'select' da página
const selects = document.querySelectorAll('select');

// Define as opções de moedas
const currencies = {
  BRL: 'Real (BRL)',
  ARS: 'Peso Argentino (ARS)',
  USD: 'Dólar Americano (USD)',
  BTC: 'Bitcoin (BTC)'
};

//Matriz para preencher as options
// for...of que itera com os selects
for (const select of selects) {
    // for...in que percorre nas propriedades do objeto currencies
    for (const currencyCode in currencies) {
        // O currencyName recebe o codigo da moeda (ex: BRL, USD...)
        const currencyName = currencies[currencyCode];
    // Cria as options baseada na 'const currencies'
        const option = document.createElement('option');
        option.value = currencyCode;
        option.textContent = currencyName;
    // o appendChild torna visivel a seleção 
        select.appendChild(option);
    }
}

// Manipula o formulário quando for enviado
document.getElementById('currencyConverterForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o recarregamento da página

  // Obtém os dados do formulário
  const amount = parseFloat(document.querySelector('.amount input').value);
  const fromCurrency = document.querySelector('.from select').value;
  const toCurrency = document.querySelector('.to select').value;

  // Define as taxas de câmbio fixas
  const exchangeRates = {
    BRL: { ARS: 72.1500722, USD: 0.2062408, BTC: 0.00000755 },
    ARS: { BRL: 0.01386, USD: 0.0028576, BTC: 0.000001 },
    USD: { BRL: 4.8487011, ARS: 349.95, BTC: 0.00003687 },
    BTC: { BRL: 132266.70, ARS: 9491891.35, USD: 27115.47 }
  };

  let result;
  //condição para mudar as casas decimais caso seja em BTC
  if (toCurrency === 'BTC') {
    result = (amount * exchangeRates[fromCurrency][toCurrency]).toFixed(8);
  } else {
    result = (amount * exchangeRates[fromCurrency][toCurrency]).toFixed(2);
  }

  // Exibe o resultado da conversão
  document.querySelector('.result').textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
});
