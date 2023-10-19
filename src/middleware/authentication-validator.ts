import { errorHandler } from 'errors/error';
import { RequestHandler } from 'express';
import { extractTokenFromAuthHeader, verifyToken } from 'utils/jwt';

export const authenticationCheck: RequestHandler = (req, res, next) => {
	const accessToken = extractTokenFromAuthHeader(req.headers.authorization);
	try {
		if (accessToken) {
			verifyToken(accessToken);
		} else {
			throw Error();
		}
		next();
	} catch (err) {
		const authError = errorHandler('UNAUTHORIZED', 'access token not valid/not provided');
		res.status(authError.statusCode).send(authError.msg);
	}
};
