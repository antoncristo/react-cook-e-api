import { RequestHandler } from 'express';
import { authService } from './auth.service';
import { createToken } from 'utils/jwt';
import { cookErrorBuilder, errorHandler } from 'errors/error';
import { extractTokenFromAuthHeader } from 'middleware';
import { userSchema } from 'middleware/schema-validator/user/user-schema';

export const registerNewUser: RequestHandler = async (req, res, next) => {
	try {
		const { email, password, name } = req.body;

		await authService.createUserWithEmailAndPassword({
			email,
			password,
			name
		});

		res.status(200).send();
	} catch (err) {
		// Fix: add firebase error handling
		const _err = errorHandler('BAD_REQUEST', err);
		res.status(_err.statusCode).send(_err.msg);
	}
};

export const signInWithEmailAndPassword: RequestHandler = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		const signInResponse = await authService.signInWithEmailAndPassword({
			email,
			password
		});
		const { ...user } = signInResponse;

		const accessToken = createToken(user);

		res.send({ accessToken });
	} catch (err) {
		// Fix: add firebase error handling
		const _err = errorHandler('BAD_REQUEST', err);
		res.status(_err.statusCode).send(_err.msg);
	}
};

export const getUserFromToken: RequestHandler = async (req, res, next) => {
	const authHeader = req.headers.authorization;
	const bearer = extractTokenFromAuthHeader(authHeader);

	try {
		const user = await authService.getUserFromBearer(bearer!);

		userSchema.parse(user);

		res.send(user);
	} catch (err) {
		const _err = errorHandler('BAD_REQUEST', err);
		res.status(_err.statusCode).send(_err.msg);
	}
};
