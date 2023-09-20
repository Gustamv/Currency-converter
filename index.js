function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  // Taxas de câmbio fixas 
  const exchangeRates = {
      BRL: { ARS: 16.85, USD: 0.18, BTC: 0.000004 },
      ARS: { BRL: 0.059, USD: 0.011, BTC: 0.000001 },
      USD: { BRL: 5.46, ARS: 91.72, BTC: 0.000024 },
      BTC: { BRL: 249796.88, ARS: 4211034.97, USD: 41750.70 }
  };

  const result = amount * exchangeRates[fromCurrency][toCurrency];

  document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}
