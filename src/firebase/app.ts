import { initializeApp, AppOptions, cert } from 'firebase-admin/app';
import { envConfig } from 'env.config';

const options: AppOptions = {
	credential: cert({
		projectId: envConfig.firebase.projectId,
		clientEmail: envConfig.firebase.clientEmail,
		privateKey: envConfig.firebase.privateKey
	})
};

export const app = initializeApp(options);
