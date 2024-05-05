import axios, { CreateAxiosDefaults } from "axios";
import CurrencyResponse from "../models/CurrencyResponse";

const config: CreateAxiosDefaults = {
  baseURL: "https://api.frankfurter.app",
};

const currencyClient = axios.create(config);

async function fetchRates() {
  try {
    const response = await currencyClient.get<CurrencyResponse>(
      `latest?from=ZAR&to=USD,GBP,EUR,CAD`
    );
    return response.data.rates;
  } catch (err) {
    throw err;
  }
}

const rates = await fetchRates();

export default rates;
