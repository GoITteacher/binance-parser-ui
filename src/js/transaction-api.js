import axios from "axios";
axios.defaults.baseURL = "http://localhost:8085";

export class TransactionAPI {
  static async getTransactions() {
    const res = await axios.get("/transaction");
    return res.data;
  }

  static async createTransaction(symbol, amount, typeTransaction) {
    const price = await this.#getPrice(symbol);
    const transaction = {
      symbol,
      amount,
      price,
      timestamp: Date.now().toString(),
      typeTransaction,
    };
    const res = await axios.post("/transaction", transaction);
    return res.data;
  }

  static async #getPrice(symbol) {
    const url = "https://realtime-crypto-prices.p.rapidapi.com/get_rates";
    const params = { symbol };
    const headers = {
      "X-RapidAPI-Key": "f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1",
      "X-RapidAPI-Host": "realtime-crypto-prices.p.rapidapi.com",
    };
    const res = await axios.get(url, { headers, params });
    return res.data.rate;
  }
}
