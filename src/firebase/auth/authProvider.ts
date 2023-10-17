import { FirebaseRestClient } from './REST';
import { auth } from './admin';

export class FirebaseAuthProvider {
	admin = auth;
	client = new FirebaseRestClient();
}
