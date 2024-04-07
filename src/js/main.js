import { BinanceApi as API } from "./binance-api";
import { TransactionAPI } from "./transaction-api";
import {
  symbolsTemplate,
  transactionTemplate,
  transactionsTemplate,
} from "./render-functions";

const refs = {
  formSymbol: document.querySelector(".js-form-symbol"),
  formExcel: document.querySelector(".js-form-symbol"),
  formTransaction: document.querySelector(".js-form-transaction"),
  container: document.querySelector(".js-container"),
  transactionList: document.querySelector(".js-transactions"),
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

refs.formTransaction.addEventListener("submit", async (e) => {
  e.preventDefault();
  const symbol = e.target.elements.symbol.value;
  const amount = e.target.elements.amount.value;
  const type = e.target.elements.type.value;

  showLoader();
  try {
    const transaction = await TransactionAPI.createTransaction(
      symbol,
      amount,
      type
    );

    const markup = transactionTemplate(transaction);
    refs.transactionList.insertAdjacentHTML("afterbegin", markup);
  } catch {
    console.log("Error");
  }

  hideLoader();
  e.target.reset();
});

async function init() {
  try {
    const transaction = await TransactionAPI.getTransactions();
    const markup = transactionsTemplate(transaction);
    refs.transactionList.innerHTML = markup;
  } catch {
    console.log("error");
  }
}
init();

function showLoader() {
  refs.loader.classList.remove("hidden");
}

function hideLoader() {
  refs.loader.classList.add("hidden");
}
