import moment from "moment";
import rates from "./services/currencyClient";
import twitterClient from "./services/twitterClient";

async function postTweet(tweet: string) {
  try {
    await twitterClient.v2.tweet(tweet);
  } catch (err) {
    throw err;
  }
}
const tweet = `
    ${moment(Date.now()).locale("en-gb").format("llll")}
    \n💵 1 USD ⇛ R${1 / rates.USD}
    \n💷 1 GBP ⇛ R${1 / rates.GBP}
    \n💶 1 EUR ⇛ R${1 / rates.USD}
    \n💶 1 CAD ⇛ R${1 / rates.CAD}`;

postTweet(tweet);
