import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";

export class BinanceApi {
  static async getHotCoins() {
    try {
      const res = await axios.get("/symbols/hot-coins");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
  static async getTopGainers() {}
  static async getTopLosers() {}
  static async getExcel() {}
}
