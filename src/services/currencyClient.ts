import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";
import CurrencyResponse from "../models/CurrencyResponse";
import dotenv from "dotenv";

dotenv.config();

const config: CreateAxiosDefaults = {
  baseURL: "https://marketdata.tradermade.com/api/v1/",
};

class CurrencyClient {
  private client: AxiosInstance = axios.create(config);

  async fetchRates() {
    try {
      const response = await this.client.get<CurrencyResponse>(
        `live?currency=USDZAR,EURZAR,GBPZAR&api_key=${process.env.TRADER_MADE_API_KEY}`
      );
      return response;
    } catch (err) {
      throw err;
    }
  }
}

const currencyClient = new CurrencyClient();

export default currencyClient;
