import moment from "moment";
import fetchRates from "./services/fetchRates";
import twitterClient from "./services/twitterClient";

fetchRates()
  .then((response) => {
    const rates = response.data.rates;

    const tweet = `
    ${moment(Date.now()).locale("en-gb").format("llll")}
    \n💵 1 USD ⇛ R${1 / rates.USD}
    \n💷 1 GBP ⇛ R${1 / rates.GBP}
    \n💶 1 EUR ⇛ R${1 / rates.USD}
    \n💶 1 CAD ⇛ R${1 / rates.CAD}`;

    twitterClient.v2.tweet(tweet).catch((err) => {
      console.log(err);
    });
  })
  .catch((err) => {
    console.log(err);
  });
