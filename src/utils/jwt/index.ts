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
