import currencyClient from "./currencyClient";
import CurrencyResponse from "../models/CurrencyResponse";
import dotenv from "dotenv";

dotenv.config();

export default async function fetchRates() {
  try {
    const response = await currencyClient.get<CurrencyResponse>(
      `live?currency=USDZAR,GBPZAR,EURZAR,CADZAR&api_key=${process.env.TRADER_MADE_API_KEY}`
    );
    return response;
  } catch (err) {
    throw err;
  }
}
