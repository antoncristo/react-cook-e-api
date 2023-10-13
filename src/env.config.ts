import { config } from 'dotenv';

config();

export interface EnvConfig {
	firebase: {
		projectId: string;
		clientEmail: string;
		privateKey: string;
		apiKey: string;
	};
}

export const envConfig: EnvConfig = {
	firebase: {
		projectId: process.env.FIREBASE_PROJECT_ID!,
		clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
		privateKey: process.env.FIREBASE_PRIVATE_KEY!,
		apiKey: process.env.FIREBASE_API_KEY!
	}
};
