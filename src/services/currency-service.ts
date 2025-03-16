import CurrencyResponse from '../models/currency-response';
import currencyClient from '../configs/currency-client';

class CurrencyService {
	async fetchRates() {
		try {
			const response = await currencyClient.get<CurrencyResponse>(
				`live?currency=USDZAR,EURZAR,GBPZAR&api_key=${process.env.TRADER_MADE_API_KEY}`
			);
			return response;
		} catch (err) {
			throw err;
		}
	}
}

export default new CurrencyService();
