import { FirebaseAuthProvider, SignInParams } from 'firebase/auth';
import { AuthServiceApi } from './auth.contract';
import { FirebaseDatabaseProvider } from 'firebase/db';
import { INITIAL_PREFERENCE } from 'api/preferences/template';

class AuthService implements AuthServiceApi {
	private authProvider = new FirebaseAuthProvider();
	private dbProvider = new FirebaseDatabaseProvider();

	createUserWithEmailAndPassword = async (credentials: {
		email: Email;
		password: Password;
		name: string;
	}): Promise<CookEUser> => {
		const newUser = await this.authProvider.createUser(credentials);
		await this.dbProvider.preferences.setPreferences(newUser.uuid, INITIAL_PREFERENCE);

		return Promise.resolve(newUser);
	};

	signInWithEmailAndPassword = async (credentials: SignInParams): Promise<CookEUser> =>
		this.authProvider.signIn(credentials);
}

export const authService = new AuthService();
