import { SignInParams } from 'firebase/auth';

export interface AuthServiceApi {
	createUserWithEmailAndPassword: (credentials: {
		email: Email;
		password: Password;
		name: string;
	}) => Promise<CookEUser>;
	signInWithEmailAndPassword: (credentials: SignInParams) => Promise<CookEUser>;
	getUserFromBearer: (bearerToken: string) => Promise<CookEUser>;
}
