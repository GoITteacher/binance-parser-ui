import { BinanceApi as API } from "./binance-api";
import { symbolsTemplate } from "./render-functions";

const refs = {
  formSymbol: document.querySelector(".js-form-symbol"),
  formExcel: document.querySelector(".js-form-symbol"),
  container: document.querySelector(".js-container"),
  loader: document.querySelector(".js-loader"),
};

refs.formSymbol.addEventListener("submit", async (e) => {
  e.preventDefault();
  const type = e.target.elements.type.value;
  let data;
  showLoader();
  switch (type) {
    case "TOP_GAINERS":
      data = await API.getTopGainers();
      break;
    case "TOP_LOSERS":
      data = await API.getTopLosers();
      break;
    case "TOP_VOLUME":
      data = await API.getTopVolume();
      break;
    default:
      data = await API.getHotCoins();
      break;
  }

  const markup = symbolsTemplate(data);
  refs.container.innerHTML = markup;
  hideLoader();
});

function showLoader() {
  refs.loader.classList.remove("hidden");
}

function hideLoader() {
  refs.loader.classList.add("hidden");
}
