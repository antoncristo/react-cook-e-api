import { RequestHandler } from 'express';
import { recipesService } from './recipes.service';
import { QueryBasicParams } from 'api/types';

export const getRecipes: RequestHandler = async (req, res, next) => {
	try {
		const queryParams: QueryBasicParams = req.query;
		const recipes = await recipesService.getRecipes(queryParams);

		res.send(recipes);
	} catch (err) {
		return next(err);
	}
};
