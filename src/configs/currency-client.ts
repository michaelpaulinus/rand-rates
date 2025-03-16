import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const config: CreateAxiosDefaults = {
	baseURL: 'https://marketdata.tradermade.com/api/v1/',
};

export default axios.create(config);
