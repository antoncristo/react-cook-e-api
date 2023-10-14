import { RequestHandler } from 'express';
import { authService } from './auth.service';
import { cookErrorBuilder } from 'errors';
import { AxiosError } from 'axios';

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
		const _err = cookErrorBuilder('BAD_REQUEST', JSON.stringify(err));
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

		const { idToken, ...user } = signInResponse;

		res.send(user);
	} catch (err) {
		// Fix: add firebase error handling
		const _err = cookErrorBuilder(
			'BAD_REQUEST',
			JSON.stringify((err as AxiosError).response?.data)
		);
		res.status(_err.statusCode).send(_err.msg);
	}
};
