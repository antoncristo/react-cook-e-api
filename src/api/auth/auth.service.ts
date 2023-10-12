import { Auth } from 'firebase-admin/auth';
import { randomUUID } from 'crypto';
import { auth } from 'firebase/auth';
import { AuthServiceApi } from './auth.contract';

class AuthService implements AuthServiceApi {
	private authProvider: Auth;

	constructor(authProvider: Auth) {
		this.authProvider = authProvider;
	}

	login = async () => {
		return this.authProvider.createUser({
			email: 'test@gmail.com',
			uid: randomUUID()
		});
	};
}

export const authService = new AuthService(auth);
