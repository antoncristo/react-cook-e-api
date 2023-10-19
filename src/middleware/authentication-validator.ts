import { AuthenticatedRequest } from 'api/types';
import { errorHandler } from 'errors/error';
import { RequestHandler } from 'express';
import { extractTokenFromAuthHeader, verifyToken } from 'utils/jwt';

export const authenticationCheck: RequestHandler = (req, res, next) => {
	const accessToken = extractTokenFromAuthHeader(req.headers.authorization);
	try {
		if (accessToken) {
			const decoded = verifyToken(accessToken) as CookEUser;
			(req as AuthenticatedRequest).user = {
				email: decoded.email,
				name: decoded.name,
				uuid: decoded.uuid
			};
		} else {
			throw Error();
		}
		next();
	} catch (err) {
		const authError = errorHandler('UNAUTHORIZED', 'access token not valid/not provided');
		res.status(authError.statusCode).send(authError.msg);
	}
};
