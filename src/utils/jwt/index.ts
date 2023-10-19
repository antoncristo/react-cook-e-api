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

export const extractTokenFromAuthHeader = (
	authHeader: string | undefined
): string | null => {
	return authHeader ? authHeader.split(' ')[1] : null;
};
