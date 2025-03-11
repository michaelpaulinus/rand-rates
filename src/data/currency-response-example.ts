import CurrencyResponse from '../models/currency-response';

const CurrencyResponseExample = {
	data: {
		endpoint: 'live',
		quotes: [
			{
				ask: 18.40438,
				base_currency: 'USD',
				bid: 18.39802,
				mid: 18.4012,
				quote_currency: 'ZAR',
			},
			{
				ask: 19.85196,
				base_currency: 'EUR',
				bid: 19.84595,
				mid: 19.84895,
				quote_currency: 'ZAR',
			},
			{
				ask: 23.17009,
				base_currency: 'GBP',
				bid: 23.16308,
				mid: 23.16658,
				quote_currency: 'ZAR',
			},
		],
		requested_time: 'Mon, 06 May 2024 12:56:04 GMT',
		timestamp: 1715000165,
	} as CurrencyResponse,
};

export default CurrencyResponseExample;
