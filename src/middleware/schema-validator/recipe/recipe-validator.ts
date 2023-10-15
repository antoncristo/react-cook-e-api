import { Recipe } from 'api/recipes/recipes.type';
import { recipeSchema } from './recipes.schema';
import { Response } from 'express';
import { errorHandler } from 'errors/error';

export const recipeValidator = (recipe: Recipe | undefined, res: Response): boolean => {
	try {
		if (!Boolean(recipe)) {
			throw Error('[recipe] payload field was not provided in the request body');
		} else {
			recipeSchema.parse(recipe);
			return true;
		}
	} catch (err) {
		const _err = errorHandler('BAD_REQUEST', err);

		res.status(_err.statusCode).send(_err.msg);
		return false;
	}
};
