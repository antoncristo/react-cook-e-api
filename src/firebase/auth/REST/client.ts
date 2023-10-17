import { axiosAgent } from 'api/axios';
import { SignInParams, SignInResponse } from './types';
import { envConfig } from 'env.config';
import { AxiosResponse } from 'axios';
import { FirebaseRestApi } from './client.contract';

export class FirebaseRestClient implements FirebaseRestApi {
	signInWithEmailAndPAssword = (
		payload: SignInParams
	): Promise<AxiosResponse<SignInResponse>> => {
		return axiosAgent.post(
			`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${envConfig.firebase.apiKey}`,
			payload
		);
	};
}
