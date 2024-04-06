import { BinanceApi as API } from "./binance-api";

const refs = {
  formSymbol: document.querySelector(".js-form-symbol"),
  formExcel: document.querySelector(".js-form-symbol"),
};

refs.formSymbol.addEventListener("submit", (e) => {
  e.preventDefault();
  const type = e.target.elements.type.value;
  console.log(type);
});
