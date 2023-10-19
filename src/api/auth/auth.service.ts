import { FirebaseAuthProvider, SignInParams } from 'firebase/auth';
import { AuthServiceApi } from './auth.contract';

class AuthService implements AuthServiceApi {
	private authProvider = new FirebaseAuthProvider();

	createUserWithEmailAndPassword = async (credentials: {
		email: Email;
		password: Password;
		name: string;
	}): Promise<CookEUser> => this.authProvider.createUser(credentials);

	signInWithEmailAndPassword = async (credentials: SignInParams): Promise<CookEUser> =>
		this.authProvider.signIn(credentials);
}

export const authService = new AuthService();
