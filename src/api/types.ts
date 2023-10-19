import { Request } from 'express';

export interface QueryBasicParams {
	search?: string;
}

export interface AuthenticatedRequest extends Request {
	user: CookEUser;
}
