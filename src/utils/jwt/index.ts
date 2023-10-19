import jwt from 'jsonwebtoken';
import { envConfig } from 'env.config';

export const createToken = (data: AbstractObject) => {
	return jwt.sign(data, envConfig.firebase.jwtSecret, {
		expiresIn: 3600000
	});
};

export const verifyToken = (token: string) => {
	return jwt.verify(token, envConfig.firebase.jwtSecret);
};

export const getUserFromBearer = async (bearerToken: string): Promise<CookEUser> => {
	try {
		const decoded = verifyToken(bearerToken) as CookEUser;

		return Promise.resolve({
			email: decoded.email,
			name: decoded.name,
			uuid: decoded.uuid
		});
	} catch (err) {
		throw err;
	}
};

export const extractTokenFromAuthHeader = (
	authHeader: string | undefined
): string | null => {
	return authHeader ? authHeader.split(' ')[1] : null;
};
