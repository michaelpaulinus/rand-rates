import currencyClient from "./currencyClient";
import CurrencyResponse from "../models/CurrencyResponse";

export default async function fetchRates() {
  try {
    const response = await currencyClient.get<CurrencyResponse>(
      `latest?from=ZAR&to=USD,GBP,EUR,CAD`
    );
    return response;
  } catch (err) {
    throw err;
  }
}
