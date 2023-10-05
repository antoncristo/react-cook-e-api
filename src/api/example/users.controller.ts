import { RequestHandler } from 'express';
import { IUser } from './users.type';
import * as usersService from './users.service';

export const getUsers: RequestHandler = async (req, res, next) => {
	try {
		let usersResponse: IUser[] = [];

		const externalUsers = await usersService.fetchExternal();

		usersResponse = externalUsers.data.map(user => {
			return {
				id: user.id,
				name: user.name,
				address: {
					city: user.address.city,
					street: user.address.street,
					suite: user.address.suite,
					zipcode: user.address.zipcode
				},
				email: user.email
			};
		});

		res.send(usersResponse);
	} catch (err) {
		return next(err);
	}
};
