function symbolTemplate({ symbol, price, change }) {
  const isPositive = change.includes("+");
  const icon = symbol.toLowerCase();
  return `<div class="symbol glass">
  <img
    class="symbol-img"
    src="https://assets.coincap.io/assets/icons/${icon}@2x.png"
    alt=""
  />
  <p class="symbol-name">${symbol}USDT</p>

  <div class="symbol-footer">
    <p class="symbol-price">${price}</p>
    |
    <p class="symbol-change ${isPositive ? "plus" : "minus"}">${change}</p>
  </div>
</div>`;
}

export function symbolsTemplate(symbols) {
  return symbols.map(symbolTemplate).join("\n");
}

export function transactionTemplate({
  symbol,
  price,
  amount,
  timestamp,
  typeTransaction,
}) {
  const date = new Date(+timestamp);
  const icon = symbol.toLowerCase();
  return `<tr class="transaction ${typeTransaction.toLowerCase()}">
  <td>
    <img
      width="20"
      height="20"
      src="https://assets.coincap.io/assets/icons/${icon}@2x.png"
    />
    ${symbol}
  </td>
  <td>${amount}</td>
  <td>${price}$</td>
  <td>${(amount * price).toFixed(2)}$</td>
  <td>${date.toLocaleDateString()}</td>
</tr>`;
}

export function transactionsTemplate(transactions) {
  return transactions.reverse().map(transactionTemplate).join("");
}
