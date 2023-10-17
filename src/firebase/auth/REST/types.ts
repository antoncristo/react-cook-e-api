export interface SignInParams extends Credentials {
	returnSecureToken?: boolean;
}

export interface SignInResponse {
	email: string;
	displayName: string;
	localId: string;
}
