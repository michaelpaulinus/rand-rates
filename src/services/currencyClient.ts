import axios, { CreateAxiosDefaults } from "axios";

const config: CreateAxiosDefaults = {
  baseURL: "https://marketdata.tradermade.com/api/v1/",
};

const currencyClient = axios.create(config);

export default currencyClient;
