import { TwitterApi } from 'twitter-api-v2';
import dotenv from 'dotenv';

dotenv.config();

const client = new TwitterApi({
	appKey: process.env.TWITTER_API_KEY!,
	appSecret: process.env.TWITTER_API_KEY_SECRET!,
	accessToken: process.env.TWITTER_ACCESS_TOKEN!,
	accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET!,
});

export default client.readWrite;
