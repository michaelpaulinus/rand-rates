import Quotes from "./Quotes";

export default interface CurrencyResponse {
  endpoint: string;
  quotes: Quotes[];
  requested_time: string;
  timestamp: number;
}
