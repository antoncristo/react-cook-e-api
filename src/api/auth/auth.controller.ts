import { RequestHandler } from 'express';
import { authService } from './auth.service';

export const testAuth: RequestHandler = async (req, res, next) => {
	try {
		const userrecord = await authService.login();
		res.send(userrecord);
	} catch (err) {
		res.send(err);
	}
};
