import { randomUUID } from 'crypto';
import { FirebaseRestClient, SignInParams } from './REST';
import { auth } from './admin';
import { parseFirebaseUserToCookeUser } from 'firebase/utils';

export class FirebaseAuthProvider {
	private admin = auth;
	private client = new FirebaseRestClient();

	async createUser(credentials: { email: Email; password: Password; name: string }) {
		return this.admin
			.createUser({
				uid: randomUUID(),
				email: credentials.email,
				password: credentials.password,
				displayName: credentials.name
			})
			.then(fbUser => parseFirebaseUserToCookeUser(fbUser));
	}

	async signIn(credentials: SignInParams) {
		return this.client
			.signInWithEmailAndPAssword({
				email: credentials.email,
				password: credentials.password
			})
			.then(response => {
				const user: CookEUser = {
					email: response.data.email,
					name: response.data.displayName,
					uuid: response.data.localId
				};

				return user;
			});
	}
}
