import { randomUUID } from 'crypto';
import { FirebaseAuthProvider, SignInParams, SignInResponse } from 'firebase/auth';
import { AuthServiceApi } from './auth.contract';
import { parseFirebaseUserToCookeUser } from 'firebase/utils';
import { AxiosResponse } from 'axios';

class AuthService implements AuthServiceApi {
	private authProvider = new FirebaseAuthProvider();

	createUserWithEmailAndPassword = async (credentials: {
		email: Email;
		password: Password;
		name: string;
	}): Promise<CookEUser> =>
		this.authProvider.admin
			.createUser({
				uid: randomUUID(),
				email: credentials.email,
				password: credentials.password,
				displayName: credentials.name
			})
			.then(fbUser => parseFirebaseUserToCookeUser(fbUser));

	signInWithEmailAndPassword = async (
		credentials: SignInParams
	): Promise<AxiosResponse<SignInResponse>> =>
		this.authProvider.client.signInWithEmailAndPAssword({
			email: credentials.email,
			password: credentials.password
		});
}

export const authService = new AuthService();
