import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";

export class BinanceApi {
  static async getHotCoins() {
    const res = await axios.get("/symbols/hot-coins");
    return res.data;
  }
  static async getTopGainers() {
    const res = await axios.get("/symbols/top-gainers");
    return res.data;
  }
  static async getTopLosers() {
    const res = await axios.get("/symbols/top-losers");
    return res.data;
  }
  static async getTopVolume() {
    const res = await axios.get("/symbols/top-volume");
    return res.data;
  }
  static async getExcel() {}
}
