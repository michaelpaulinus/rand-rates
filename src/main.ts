import moment from "moment";
import currencyClient from "./services/currencyClient";
import twitterClient from "./services/twitterClient";

currencyClient
  .fetchRates()
  .then((response) => {
    const date = response.data.requested_time;
    const rates = response.data.quotes;

    const tweet = `
    💱${moment(date).locale("en-gb").utcOffset(2).format("llll")}
    \n💵 1 USD = R${rates
      .find((quote) => quote.base_currency === "USD")
      ?.mid.toFixed(2)}
    \n💶 1 EUR = R${rates
      .find((quote) => quote.base_currency === "EUR")
      ?.mid.toFixed(2)}      
    \n💷 1 GBP = R${rates
      .find((quote) => quote.base_currency === "GBP")
      ?.mid.toFixed(2)}
    \n💶 1 CAD = R${rates
      .find((quote) => quote.base_currency === "CAD")
      ?.mid.toFixed(2)}
    `;

    twitterClient.v2.tweet(tweet).catch((err) => {
      console.log("twitter api error: ", err);
    });

    console.log(tweet);
  })
  .catch((err) => {
    console.log("currency api error: ", err);
  });
