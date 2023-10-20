import { AuthenticatedRequest } from 'api/types';
import { RequestHandler } from 'express';
import { preferencesService } from './preferences.service';
import { errorHandler } from 'errors/error';
import { Preferences } from './preferences.type';

export const getPreferences: RequestHandler = async (req, res, next) => {
	const user = (req as AuthenticatedRequest).user;

	const preferences = await preferencesService.getPreferences(user.uuid);

	if (!preferences) {
		const err = errorHandler(
			'NOT_FOUND',
			`user preference for id ${user.uuid} could not be found`
		);
		res.status(err.statusCode).send(err.msg);
	}

	res.send(preferences);
};

export const updatePreferences: RequestHandler = async (req, res, next) => {
	const user = (req as AuthenticatedRequest).user;
	const prefPayload = req.body.preferences as Preferences;

	if (!prefPayload) {
		const err = errorHandler('BAD_REQUEST', `user preference was not provided`);
		res.status(err.statusCode).send(err.msg);
	}

	const newP = await preferencesService.updatePreferences(prefPayload, user.uuid);

	res.send(newP);
};
