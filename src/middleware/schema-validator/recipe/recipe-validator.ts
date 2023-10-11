import { Recipe } from 'api/recipes/recipes.type';
import { recipeSchema } from './recipes.schema';
import { ZodError } from 'zod';
import { Response } from 'express';
import { CookError, cookErrorBuilder } from 'errors';

export const recipeValidator = (recipe: Recipe | undefined, res: Response): boolean => {
	try {
		if (!Boolean(recipe)) {
			throw cookErrorBuilder(
				'BAD_REQUEST',
				'[recipe] payload field was not provided in the request body'
			);
		} else {
			recipeSchema.parse(recipe);
			return true;
		}
	} catch (err) {
		let _err: CookError;

		if (err instanceof ZodError) {
			_err = cookErrorBuilder('BAD_REQUEST', (err as ZodError).message);
		} else {
			_err = err as CookError;
		}

		res.status(_err.statusCode).send(_err.msg);
		return false;
	}
};
