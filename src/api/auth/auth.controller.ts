import { RequestHandler } from 'express';
import { authService } from './auth.service';
import { createToken } from 'utils/jwt';
import { errorHandler } from 'errors/error';

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

		res.send({ user, accessToken });
	} catch (err) {
		// Fix: add firebase error handling
		const _err = errorHandler('BAD_REQUEST', err);
		res.status(_err.statusCode).send(_err.msg);
	}
};
