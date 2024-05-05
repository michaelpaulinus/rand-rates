import type Rates from "./Rates";

export default interface CurrencyResponse {
  amount: number;
  base: string;
  date: string;
  rates: Rates;
}
