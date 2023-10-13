export interface SignInParams extends Credentials {
	returnSecureToken?: boolean;
}

export interface SignInResponse {
	idToken: string;
	email: string;
	displayName: string;
	localId: string;
	registered: boolean;
}
