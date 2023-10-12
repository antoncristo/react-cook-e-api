import { Auth } from 'firebase-admin/auth';

export interface AuthServiceApi {
	login: () => Promise<unknown>;
}
