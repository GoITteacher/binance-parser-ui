function symbolTemplate(symbol) {
  return ``;
}

return function symbolsTemplate(symbols) {
  return symbols.map(symbolTemplate).join("\n");
};
