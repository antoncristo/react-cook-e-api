import { UserRecord } from 'firebase-admin/auth';

export const parseFirebaseUserToCookeUser = (fbUser: UserRecord): CookEUser => {
	const user: CookEUser = {
		uuid: fbUser.uid,
		name: fbUser.displayName ?? 'name N/A',
		email: fbUser.email ?? 'email N/A'
	};

	return user;
};
