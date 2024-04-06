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
