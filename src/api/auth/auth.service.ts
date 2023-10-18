import { randomUUID } from 'crypto';
import { FirebaseAuthProvider, SignInParams } from 'firebase/auth';
import { AuthServiceApi } from './auth.contract';
import { verifyToken } from 'utils/jwt';

class AuthService implements AuthServiceApi {
	private authProvider = new FirebaseAuthProvider();

	createUserWithEmailAndPassword = async (credentials: {
		email: Email;
		password: Password;
		name: string;
	}): Promise<CookEUser> => this.authProvider.createUser(credentials);

	signInWithEmailAndPassword = async (credentials: SignInParams): Promise<CookEUser> =>
		this.authProvider.signIn(credentials);

	getUserFromBearer = async (bearerToken: string): Promise<CookEUser> => {
		try {
			const decoded = verifyToken(bearerToken) as CookEUser;

			return Promise.resolve({
				email: decoded.email,
				name: decoded.name,
				uuid: decoded.uuid
			});
		} catch (err) {
			throw err;
		}
	};
}

export const authService = new AuthService();
