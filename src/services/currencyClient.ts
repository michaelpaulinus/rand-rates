import axios, { CreateAxiosDefaults } from "axios";

const config: CreateAxiosDefaults = {
  baseURL: "https://api.frankfurter.app",
};

const currencyClient = axios.create(config);

export default currencyClient;
