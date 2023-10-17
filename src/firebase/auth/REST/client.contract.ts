import { AxiosResponse } from 'axios';
import { SignInParams, SignInResponse } from './types';

export interface FirebaseRestApi {
	signInWithEmailAndPAssword: (
		payload: SignInParams
	) => Promise<AxiosResponse<SignInResponse>>;
}
